import { WindBuilder } from "./windBuilder";
import { MapBound } from "./mapBound";
import { DataBound } from "./dataBound";
import { Grid } from "./grid";
import { Point } from "./point";

export class Windy {
   
    private MIN_VELOCITY_INTENSITY: number = 0;
    private MAX_VELOCITY_INTENSITY: number = 10;
    private VELOCITY_SCALE: number = 1;
    private MAX_PARTICLE_AGE: number = 90;
    private PARTICLE_LINE_WIDTH: number = 1;
    private PARTICLE_MULTIPLIER: number = 1/300;
    private PARTICLE_REDUCTION: number = 1.6;
    private FRAME_RATE: number = 15;
    private FRAME_TIME: number = 1000/15;
    private colorScale: string[];
    private animationLoop;
    private NULL_WIND_VECTOR: number[] = [NaN, NaN, null];

    private builder;
    private grid: number[][];
    private gridData;
    private date;
    private λ0; // Longitude origin
    private φ0; // Latitude origin
    private Δλ; // Longitude step
    private Δφ; // latitude step
    private ni; // Number of longitude points
    private nj; // Number of latitude points

    private context;
    private buckets: Point[][];
    private particles: Point[];
    private columns: number[][];
    private bounds: DataBound;

    public params;

    constructor (params) {
        this.MIN_VELOCITY_INTENSITY = params.minVelocity || 0;                      // velocity at which particle intensity is minimum (m/s)
        this.MAX_VELOCITY_INTENSITY = params.maxVelocity || 10;                     // velocity at which particle intensity is maximum (m/s)
        this.VELOCITY_SCALE = (params.velocityScale || 0.005) * (Math.pow(window.devicePixelRatio,1/3) || 1); // scale for wind velocity (completely arbitrary--this value looks nice)
        this.MAX_PARTICLE_AGE = params.particleAge || 90;                         	 // max number of frames a particle is drawn before regeneration
        this.PARTICLE_LINE_WIDTH = params.lineWidth || 1;                           // line width of a drawn particle
        this.PARTICLE_MULTIPLIER = params.particleMultiplier || 1 / 300;            // particle count scalar (completely arbitrary--this values looks nice)
        this.PARTICLE_REDUCTION = (Math.pow(window.devicePixelRatio,1/3) || 1.6);   // multiply particle count for mobiles by this amount
        this.FRAME_RATE = params.frameRate || 15;
        this.FRAME_TIME = 1000 / this.FRAME_RATE;   // desired frames per second
        this.context = params.canvas.getContext("2d");

        this.gridData = params.data;

        this.colorScale = params.colorScale || [
            "rgb(36,104, 180)",
            "rgb(60,157, 194)",
            "rgb(128,205,193 )",
            "rgb(151,218,168 )",
            "rgb(198,231,181)",
            "rgb(238,247,217)",
            "rgb(255,238,159)",
            "rgb(252,217,125)",
            "rgb(255,182,100)",
            "rgb(252,150,75)",
            "rgb(250,112,52)",
            "rgb(245,64,32)",
            "rgb(237,45,28)",
            "rgb(220,24,32)",
            "rgb(180,0,35)"
        ];
    }

    setData(data) {
        this.gridData = data;
    }
    
    createBuilder = function(data): WindBuilder {
		var uComp = null;
		var vComp = null;
		var scalar = null;

		data.forEach(function(record) {
			switch (record.header.parameterCategory + "," + record.header.parameterNumber) {
				case "1,2":
				case "2,2":
					uComp = record;
					break;
				case "1,3":
				case "2,3":
					vComp = record;
					break;
				default:
					scalar = record;
			}
		});

        this.builder = new WindBuilder(uComp, vComp);
        return this.builder;
    }
    
    buildGrid (data: any) : Grid{
        
        this.createBuilder(data);
        const header = this.builder.header;

        this.λ0 = header.lo1;
        this.φ0 = header.la1;  // the grid's origin (e.g., 0.0E, 90.0N)

        this.Δλ = header.dx;
        this.Δφ = header.dy;    // distance between grid points (e.g., 2.5 deg lon, 2.5 deg lat)

        this.ni = header.nx;
        this.nj = header.ny;    // number of grid points W-E and N-S (e.g., 144 x 73)

        this.date = new Date(header.refTime);
        this.date.setHours(this.date.getHours() + header.forecastTime);

        // Scan mode 0 assumed. Longitude increases from λ0, and latitude decreases from φ0.
        // http://www.nco.ncep.noaa.gov/pmb/docs/grib2/grib2_table3-4.shtml
        this.grid = [];
        let p = 0;
        const isContinuous = Math.floor(this.ni * this.Δλ) >= 360;

        for (var j = 0; j < this.nj; j++) {
            var row = [];
            for (var i = 0; i < this.ni; i++, p++) {
                row[i] = this.builder.data(p);
            }
            if (isContinuous) {
                // For wrapped grids, duplicate first column as last column to simplify interpolation logic
                row.push(row[0]);
            }
            this.grid[j] = row;
        }

        const self = this;
        return new Grid(this.grid, this.builder, this.φ0, this.λ0, this.Δφ, this.Δλ, this.date);
    }

    /**
     * Detect if x is a value
	 * @returns {boolean} true if the specified value is not null and not undefined.
	 */
	isValue (x: any): boolean {
		return x !== null && x !== undefined;
	};

	/**
     * Custom modulo
	 * @returns {number} returns remainder of floored division, i.e., floor(a / n). Useful for consistent modulo
	 *          of negative numbers. See http://en.wikipedia.org/wiki/Modulo_operation.
	 */
	floorMod (a: number, n: number): number {
		return a - n * Math.floor(a / n);
    };
    
    /**
     * Force x inside a range
	 * @returns {number} the value x clamped to the range [low, high].
	 */
	clamp (x: number, range: number[]): number {
		return Math.max(range[0], Math.min(x, range[1]));
	};

	/**
     * Detect if navigator is a mobile
	 * @returns {boolean} true if agent is probably a mobile device. Don't really care if this is accurate.
	 */
	isMobile (): boolean {
		return (/android|blackberry|iemobile|ipad|iphone|ipod|opera mini|webos/i).test(navigator.userAgent);
    };
    
    /**
	 * Calculate distortion of the wind vector caused by the shape of the projection at point (x, y). The wind
	 * vector is modified in place and returned by this function.
	 */
	distort (λ: number, φ: number, x: number, y: number, scale: number, wind: number[], windy: MapBound) {
		const u = wind[0] * scale;
		const v = wind[1] * scale;
		const d = this.distortion(λ, φ, x, y, windy);

		// Scale distortion vectors by u and v, then add.
		wind[0] = d[0] * u + d[2] * v;
		wind[1] = d[1] * u + d[3] * v;
		return wind;
    }

	distortion (λ: number, φ: number, x: number, y: number, windy: MapBound) {
		const τ = 2 * Math.PI;
		const H = Math.pow(10, -5.2);
		const hλ = λ < 0 ? H : -H;
		const hφ = φ < 0 ? H : -H;

		const pλ = this.project(φ, λ + hλ, windy);
		const pφ = this.project(φ + hφ, λ, windy);

		// Meridian scale factor (see Snyder, equation 4-3), where R = 1. This handles issue where length of 1º λ
		// changes depending on φ. Without this, there is a pinching effect at the poles.
		const k = Math.cos(φ / 360 * τ);
		return [
			(pλ[0] - x) / hλ / k,
			(pλ[1] - y) / hλ / k,
			(pφ[0] - x) / hφ,
			(pφ[1] - y) / hφ
		];
    }

    buildBounds (bounds: number[][], width: number, height: number): DataBound {
		const upperLeft = bounds[0];
		const lowerRight = bounds[1];
		const x = Math.round(upperLeft[0]); //Math.max(Math.floor(upperLeft[0], 0), 0);
		const y = Math.max(Math.floor(upperLeft[1]), 0);
		const xMax = Math.min(Math.ceil(lowerRight[0]), width - 1);
        const yMax = Math.min(Math.ceil(lowerRight[1]), height - 1);
        return new DataBound(x, y, xMax, yMax, width, height);
	};

	deg2rad (deg: number): number {
		return (deg / 180) * Math.PI;
	};

	rad2deg (ang: number): number {
		return ang / (Math.PI/180.0);
	};

	invert (x: number, y: number, windy: MapBound): number[] {
		const mapLonDelta = windy.east - windy.west;
		const worldMapRadius = windy.width / this.rad2deg(mapLonDelta) * 360/(2 * Math.PI);
		const mapOffsetY = ( worldMapRadius / 2 * Math.log( (1 + Math.sin(windy.south) ) / (1 - Math.sin(windy.south))  ));
		const equatorY = windy.height + mapOffsetY;
		const a = (equatorY-y)/worldMapRadius;

		const lat = 180/Math.PI * (2 * Math.atan(Math.exp(a)) - Math.PI/2);
		const lon = this.rad2deg(windy.west) + x / windy.width * this.rad2deg(mapLonDelta);
		return [lon, lat];
	};

	mercY (lat: number): number {
		return Math.log( Math.tan( lat / 2 + Math.PI / 4 ) );
    };
    
    project (lat: number, lon: number, windy: MapBound): number[] { // both in radians, use deg2rad if neccessary
		const ymin = this.mercY(windy.south);
		const ymax = this.mercY(windy.north);
		const xFactor = windy.width / ( windy.east - windy.west );
		const yFactor = windy.height / ( ymax - ymin );

		let y = this.mercY(this.deg2rad(lat) );
		const x = (this.deg2rad(lon) - windy.west) * xFactor;
		y = (ymax - y) * yFactor; // y points south
		return [x, y];
	};

    createField (columns: number[][], bounds: DataBound, callback: () => void) {
        this.columns = columns;
        this.bounds = bounds;
        callback();
    }

    releaseField () {
        if (this.columns) {
            this.columns.splice(0, this.columns.length)
        }
    }

    field(x, y) {
        var column = this.columns[Math.round(x)];
        return column && column[Math.round(y)] || this.NULL_WIND_VECTOR;
    }

    randomize (o: Point): Point {  // UNDONE: this method is terrible
        for (let i=0; i<30 && this.field(o.x, o.y)[2] !== null; i++) {
            o.x = Math.round(Math.floor(Math.random() * this.bounds.width) + this.bounds.x);
            o.y = Math.round(Math.floor(Math.random() * this.bounds.height) + this.bounds.y);
        }
        return o;
    }

    interpolateColumn (grid: Grid, bounds: DataBound, extent: MapBound, velocityScale: number, columns: number[][], x: number) {
        const column = [];
        for (let y = bounds.y; y <= bounds.yMax; y += 2) {
            const coord = this.invert( x, y, extent );
            if (coord) {
                const λ = coord[0], φ = coord[1];
                if (isFinite(λ)) {
                    let wind = grid.interpolate(λ, φ);
                    if (wind) {
                        wind = this.distort(λ, φ, x, y, velocityScale, wind, extent);
                        column[y+1] = column[y] = wind;

                    }
                }
            }
        }
        columns[x] = column;
        columns[x+1] = column;

    }

    interpolateField (grid: Grid, bounds: DataBound, extent: MapBound, callback: () => void) {
        const mapArea = ((extent.south - extent.north) * (extent.west - extent.east));
        const velocityScale = this.VELOCITY_SCALE * Math.pow(mapArea, 0.4);

        const columns = [];
        let x = bounds.x;
        const self = this;

        this.batchInterpolate(grid, bounds, extent, x, velocityScale, columns, callback)
    }

    batchInterpolate(grid: Grid, bounds: DataBound, extent: MapBound, x: number, velocityScale: number, columns: number[][], callback: () => void) {
        const self = this;
        var start = Date.now();
        while (x < bounds.width) {
            this.interpolateColumn(grid, bounds, extent, velocityScale, columns, x);
            x += 2;
            if ((Date.now() - start) > 1000) { //MAX_TASK_TIME) {
                setTimeout(
                    () => {
                        self.batchInterpolate(grid, bounds, extent, x, velocityScale, columns, callback);
                    },
                    25
                );
                return;
            }
        }
        this.createField(columns, bounds, callback);
    }

    start (bounds: number[][], width: number, height: number, extent: MapBound){
        
        var mapBounds = {
            south: this.deg2rad(extent[0][1]),
            north: this.deg2rad(extent[1][1]),
            east: this.deg2rad(extent[1][0]),
            west: this.deg2rad(extent[0][0]),
            width: width,
            height: height
        };

        stop();

        // build grid
        const grid = this.buildGrid(this.gridData);
        this.interpolateField(grid,
        this.buildBounds(bounds, width,height),
            mapBounds,
            (bounds, this.field) => {
                this.animate();
            }
        );
    };

    stop () {
        this.releaseField();
        if (this.animationLoop) {
            cancelAnimationFrame(this.animationLoop);
        }
    }

    getColorScaleIndex(m) {
        return Math.max(0, Math.min((this.colorScale.length - 1),
        Math.round((m - this.MIN_VELOCITY_INTENSITY) / (this.MAX_VELOCITY_INTENSITY - this.MIN_VELOCITY_INTENSITY) * (this.colorScale.length - 1))));
    }

    evolve() {
        this.buckets.forEach((bucket) => {
            bucket.length = 0;
        });

        this.particles.forEach((particle) => {
            if (particle.age > this.MAX_PARTICLE_AGE) {
                this.randomize(particle).age = 0;
            }
            var x = particle.x;
            var y = particle.y;
            var v = this.field(x, y);  // vector at current position
            var m = v[2];
            if (m === null) {
                particle.age = this.MAX_PARTICLE_AGE;  // particle has escaped the grid, never to return...
            }
            else {
                var xt = x + v[0];
                var yt = y + v[1];
                if (this.field(xt, yt)[2] !== null) {
                    // Path from (x,y) to (xt,yt) is visible, so add this particle to the appropriate draw bucket.
                    particle.xt = xt;
                    particle.yt = yt;
                    this.buckets[this.getColorScaleIndex(m)].push(particle);
                }
                else {
                    // Particle isn't visible, but it still moves through the field.
                    particle.x = xt;
                    particle.y = yt;
                }
            }
            particle.age += 1;
        });
    }

    draw() {
        // Fade existing particle trails.
        var prev = "lighter";
        this.context.globalCompositeOperation = "destination-in";
        this.context.fillRect(this.bounds.x, this.bounds.y, this.bounds.width, this.bounds.height);
        this.context.globalCompositeOperation = prev;
        this.context.globalAlpha = 0.9;

        // Draw new particle trails.
        this.buckets.forEach(function(bucket, i) {
            if (bucket.length > 0) {
                this.context.beginPath();
                this.context.strokeStyle = this.colorScale[i];
                bucket.forEach(function(particle) {
                    this.context.moveTo(particle.x, particle.y);
                    this.context.lineTo(particle.xt, particle.yt);
                    particle.x = particle.xt;
                    particle.y = particle.yt;
                });
                this.context.stroke();
            }
        });
    }


    animate (bounds, field) {

        this.buckets = this.colorScale.map(() =>  []);

        let particleCount = Math.round(bounds.width * bounds.height * this.PARTICLE_MULTIPLIER);
        if (this.isMobile()) {
            particleCount *= this.PARTICLE_REDUCTION;
        }

        const particles = [];
        for (var i = 0; i < particleCount; i++) {
            particles.push(field.randomize({age: Math.floor(Math.random() * this.MAX_PARTICLE_AGE) + 0}));
        }

        var g = this.context;
        g.lineWidth = this.PARTICLE_LINE_WIDTH;
        g.fillStyle = "rgba(0, 0, 0, 0.97)";
        g.globalAlpha = 0.6;

        

        var then = Date.now();
        const self = this;
        (function frame() {
            this.animationLoop = requestAnimationFrame(frame);
            var now = Date.now();
            var delta = now - then;
            if (delta > this.FRAME_TIME) {
                then = now - (delta % this.FRAME_TIME);
                self.evolve();
                self.draw();
            }
        })();
    }
}