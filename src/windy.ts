import Vector from "./vector";
import Grid from "./grid";
import ColorScale from "./colorScale";
import Particule from "./particle";
import AnimationBucket from "./animationBucket";
import Layer from "./layer";

export interface WindyOptions {
  canvas: any;
  data: any;
  colorScale: string[];
  maxVelocity: number;
  minVelocity: number;
  velocityScale: number;
  particleAge: number;
  particleMultiplier: number;
  particlelineWidth: number;
  frameRate: number;
  opacity: number;
  bounds: number[];
}
export default class Windy {

  private grid: any;
  private λ0: number;
  private φ0: number;
  private Δλ: number;
  private Δφ: number;
  private ni: number;
  private nj: number;
  private canvas: any = null;
  private colorScale: ColorScale;
  private velocityScale: number;
  private particleMultiplier = 1 / 300;
  private particleAge: number;
  private particleLineWidth: number;
  private autoColorRange = false;
  private opacity: number;
  private bounds: number[] = null;

  private layer: Layer;
  private particules: Particule[] = [];
  private animationBucket: AnimationBucket;
  private context2D: any;
  private animationLoop: any = null;
  private frameTime: number;
  private then = 0;


  constructor(options: WindyOptions) {
    this.setOptions(options);
    this.canvas = options.canvas;
    if (options.data) {
      this.setData(options.data);
    }
  }

  public setOptions(options: WindyOptions) {
    if (options.minVelocity === undefined && options.maxVelocity === undefined) {
      this.autoColorRange = true;
    }
    this.colorScale = new ColorScale(options.minVelocity || 0, options.maxVelocity || 10, options.colorScale);
    this.velocityScale = options.velocityScale || 0.01;
    this.particleAge = options.particleAge || 64;
    this.opacity = +options.opacity || 0.97;
    this.bounds = options.bounds;

    this.particleMultiplier = options.particleMultiplier || 1 / 300;
    this.particleLineWidth = options.particlelineWidth || 1;
    const frameRate = options.frameRate || 15;
    this.frameTime = 1000 / frameRate;
  }

  public get particuleCount() {
    const particuleReduction = ((/android|blackberry|iemobile|ipad|iphone|ipod|opera mini|webos/i).test(navigator.userAgent)) ? (Math.pow(window.devicePixelRatio, 1 / 3) || 1.6) : 1;
    return Math.round(this.layer.canvasBound.width * this.layer.canvasBound.height * this.particleMultiplier) * particuleReduction;
  }

  /**
   * Load data
   * @param data
   */
  public setData(data: any[]) {
    let uData: any = null;
    let vData: any = null;
    const grid: Vector[] = [];

    data.forEach((record) => {
      switch (`${record.header.parameterCategory},${record.header.parameterNumber}`) {
        case "1,2":
        case "2,2":
          uData = record;
          break;
        case "1,3":
        case "2,3":
          vData = record;
          break;
        default:
      }
    });

    if (!uData || !vData) {
      console.warn("Data are not correct format");
      return;
    }

    uData.data.forEach((u: number, index: number) => {
      grid.push(new Vector(u, vData.data[index]));
    })

    //console.log('uData', uData);
    //console.log('vData', vData);

    this.grid = new Grid(
      grid,
      uData.header.la1,
      uData.header.lo1,
      uData.header.dy,
      uData.header.dx,
      uData.header.ny,
      uData.header.nx
    );

    this.λ0 = uData.header.lo1;
    this.φ0 = uData.header.la1;

    this.Δλ = uData.header.dx;
    this.Δφ = uData.header.dy

    this.ni = uData.header.nx;
    this.nj = uData.header.ny; // number of grid points W-E and N-S (e.g., 144 x 73)

    var p = 0;
    var isContinuous = Math.floor(this.ni * this.Δλ) >= 360;

    for (var j = 0; j < this.nj; j++) {
      var row = [];
      for (var i = 0; i < this.ni; i++, p++) {
        row[i] = this.grid.data[p];
      }
      if (isContinuous) {
        // For wrapped grids, duplicate first column as last column to simplify interpolation logic
        row.push(row[0]);
      }
      this.grid[j] = row;
    }

    if (this.autoColorRange) {
      const minMax = this.grid.valueRange;
      this.colorScale.setMinMax(minMax[0], minMax[1]);
    }
  }

  /* Get interpolated grid value from Lon/Lat position
* @param λ {Float} Longitude
* @param φ {Float} Latitude
* @returns {Object}
*/
  public interpolate(λ: number, φ: number): any {
    if (!this.grid) {
      return null;
    }
    var i = this.floorMod(λ - this.λ0, 360) / this.Δλ; // calculate longitude index in wrapped range [0, 360)
    var j = (this.φ0 - φ) / this.Δφ; // calculate latitude index in direction +90 to -90

    var fi = Math.floor(i);
    var ci = fi + 1;
    var fj = Math.floor(j);
    var cj = fj + 1;
    var row = this.grid[fj];//Dont know why he dosent found any row ERRRROR
    if (row) {
      var g00 = row[fi];
      var g10 = row[ci];
      if (this.isValue(g00) && this.isValue(g10) && (row = this.grid[cj])) {
        var g01 = row[fi];
        var g11 = row[ci];
        if (this.isValue(g01) && this.isValue(g11)) {
          // All four points found, so interpolate the value.
          return this.bilinearInterpolateVector(i - fi, j - fj, g00, g10, g01, g11);
        }
      }
    }
    return null;
  };

  public start(layer: Layer) {
    this.context2D = this.canvas.getContext("2d");
    this.context2D.lineWidth = this.particleLineWidth;
    this.context2D.fillStyle = `rgba(0, 0, 0, ${this.opacity})`;
    this.context2D.globalAlpha = 0.6;

    this.layer = layer;
    this.animationBucket = new AnimationBucket(this.colorScale);

    this.particules.splice(0, this.particules.length);
    for (let i = 0; i < this.particuleCount; i++) {
      this.particules.push(this.layer.canvasBound.getRandomParticule(this.particleAge));
    }

    this.then = new Date().getTime();

    this.frame();
  }

  public stop() {
    this.particules.splice(0, this.particules.length);
    this.animationBucket.clear();
    if (this.animationLoop) {
      clearTimeout(this.animationLoop);
      this.animationLoop = null;
    }
  }

  private floorMod(a: number, n: number) {
    return a - n * Math.floor(a / n);
  };

  private isValue(x: any) {
    return x !== null && x !== undefined;
  };

  private bilinearInterpolateVector(x: number, y: number, g00: any, g10: any, g01: any, g11: any) {
    var rx = (1 - x);
    var ry = (1 - y);
    var a = rx * ry, b = x * ry, c = rx * y, d = x * y;
    var u = g00.u * a + g10.u * b + g01.u * c + g11.u * d;
    var v = g00.v * a + g10.v * b + g01.v * c + g11.v * d;
    return [u, v, Math.sqrt(u * u + v * v)];
  };

  private getParticuleWind(p: Particule): Vector {
    const lngLat = this.layer.canvasToMap(p.x, p.y);

    let wind;

    if(this.bounds && 
        (lngLat[0] < this.bounds[0] || lngLat[0] > this.bounds[2] ||
        lngLat[1] < this.bounds[1] || lngLat[1] > this.bounds[3])) {

        wind = new Vector(0, 0);
        //console.log(lngLat);
    } else {
        wind = this.grid.get(lngLat[0], lngLat[1]);
    }
    p.intensity = wind.intensity;
    const mapArea = this.layer.mapBound.height * this.layer.mapBound.width;
    var velocityScale = this.velocityScale * Math.pow(mapArea, 0.4);
    this.layer.distort(lngLat[0], lngLat[1], p.x, p.y, velocityScale, wind);
    return wind;
  }



  private frame() {
    this.animationLoop = requestAnimationFrame(() => {
      this.frame()
    });
    var now = new Date().getTime();
    var delta = now - this.then;
    if (delta > this.frameTime) {
      this.then = now - (delta % this.frameTime);
      this.evolve();
      this.draw();
    }
  }

  private evolve() {
    this.animationBucket.clear();
    this.particules.forEach((p: Particule) => {
      p.grow();
      if (p.isDead) {
        this.layer.canvasBound.resetParticule(p);
      }
      const wind = this.getParticuleWind(p);
      this.animationBucket.add(p, wind);
    });
  }

  private draw() {
    this.context2D.globalCompositeOperation = "destination-in";
    this.context2D.fillRect(
      this.layer.canvasBound.xMin,
      this.layer.canvasBound.yMin,
      this.layer.canvasBound.width,
      this.layer.canvasBound.height
    );
    // Fade existing particle trails.
    this.context2D.globalCompositeOperation = "lighter";
    this.context2D.globalAlpha = this.opacity === 0 ? 0 : this.opacity * 0.9;

    this.animationBucket.draw(this.context2D);
  }
}
