import Vector from "./vector";
import Particule from "./particle";
import Layer from "./layer";
export default class Windy {
    private grid;
    private λ0;
    private φ0;
    private Δλ;
    private Δφ;
    private ni;
    private nj;
    private canvas;
    private colorScale;
    private velocityScale;
    private particuleMultiplier;
    private particleAge;
    private particuleLineWidth;
    private autoColorRange;
    private layer;
    private particules;
    private animationBucket;
    private context2D;
    private animationLoop;
    private frameTime;
    private then;
    constructor(options: any);
    readonly particuleCount: number;
    /**
     * Load data
     * @param data
     */
    setData(data: any[]): void;
    floorMod(a: number, n: number): number;
    isValue(x: any): boolean;
    bilinearInterpolateVector(x: number, y: number, g00: any, g10: any, g01: any, g11: any): number[];
    interpolate(λ: number, φ: number): any;
    getParticuleWind(p: Particule): Vector;
    start(layer: Layer): void;
    frame(): void;
    evolve(): void;
    draw(): void;
    stop(): void;
}
