import MapBound from "./mapBound";
import Vector from "./vector";
import Grid from "./grid";
import ColorScale from "./colorScale";
import CanvasBound from "./canvasBound";
import Particule from "./particle";
import AnimationBucket from "./animationBucket";
import Layer from "./layer";

export default class Windy {

    private grid: Grid;
    private canvas: any = null;
    private colorScale: ColorScale;
    private velocityScale: number;
    private particuleMultiplier =  1 / 300;
    private particleAge: number;
    private particuleLineWidth: number;
    private autoColorRange = false;
    
    private layer: Layer;
    private particules: Particule[] = [];
    private animationBucket: AnimationBucket;
    private context2D: any;
    private animationLoop: any = null;
    private frameTime: number;
    private then = 0;
     

    constructor(options: any) {
        this.canvas = options.canvas;
        if (options.minVelocity === undefined && options.maxVelocity === undefined) {
            this.autoColorRange = true;
        }
        this.colorScale = new ColorScale(options.minVelocity ||0, options.maxVelocity ||10, options.colorScale);
        this.velocityScale = options.velocityScale || 0.01;
        this.particleAge = options.particleAge || 64;
        this.setData(options.data);
        this.particuleMultiplier = options.particleMultiplier || 1/300;
        this.particuleLineWidth  = options.lineWidth || 1;
        const frameRate = options.frameRate || 15;
        this.frameTime = 1000 / frameRate;
    }

    get particuleCount () {
        const particuleReduction = ((/android|blackberry|iemobile|ipad|iphone|ipod|opera mini|webos/i).test(navigator.userAgent)) ? (Math.pow(window.devicePixelRatio,1/3) || 1.6): 1;
        return Math.round(this.layer.canvasBound.width * this.layer.canvasBound.height * this.particuleMultiplier) * particuleReduction;
    }

    /**
     * Load data
     * @param data
     */
    setData(data: any[]) {
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

        this.grid = new Grid (
            grid,
            uData.header.la1,
            uData.header.lo1,
            uData.header.dy,
            uData.header.dx,
            uData.header.ny,
            uData.header.nx
        );

        if (this.autoColorRange) {
            const minMax = this.grid.valueRange;
            this.colorScale.setMinMax(minMax[0], minMax[1]);
        }
    }

    getParticuleWind(p: Particule): Vector {
        const lngLat = this.layer.canvasToMap(p.x, p.y);
        const wind = this.grid.get(lngLat[0], lngLat[1]);
        p.intensity = wind.intensity;
        const mapArea = this.layer.mapBound.height * this.layer.mapBound.width;
        var velocityScale = this.velocityScale * Math.pow(mapArea, 0.4);
        this.layer.distort(lngLat[0], lngLat[1], p.x, p.y, velocityScale, wind);
        return wind;
    }

    start(layer: Layer) {

        this.context2D = this.canvas.getContext("2d");
		this.context2D.lineWidth = this.particuleLineWidth;
		this.context2D.fillStyle = "rgba(0, 0, 0, 0.97)";
        this.context2D.globalAlpha = 0.6;
        
        this.layer = layer;
        this.animationBucket = new AnimationBucket(this.colorScale);

        this.particules.splice(0, this.particules.length);
        for(let i=0; i<this.particuleCount; i++) {
            this.particules.push(this.layer.canvasBound.getRandomParticule(this.particleAge));
        }

        this.then = new Date().getTime();

        this.frame();
    }

    frame () {
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

    evolve () {
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

    draw () {
        this.context2D.globalCompositeOperation = "destination-in";
        this.context2D.fillRect(
            this.layer.canvasBound.xMin,
            this.layer.canvasBound.yMin,
            this.layer.canvasBound.width,
            this.layer.canvasBound.height
        );
        // Fade existing particle trails.
        this.context2D.globalCompositeOperation = "lighter";
        this.context2D.globalAlpha = 0.9;

        this.animationBucket.draw(this.context2D);
    }

    stop() {
        this.particules.splice(0, this.particules.length);
        this.animationBucket.clear();
        if (this.animationLoop) {
            clearTimeout(this.animationLoop);
            this.animationLoop = null;
        }
    }

}
