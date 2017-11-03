export default class CanvasBound {
    public xMin: number;
    public yMin: number;
    public xMax: number;
    public yMax: number;

    constructor (xMin: number, yMin: number, xMax: number, yMax: number) {
        this.xMin = xMin;
        this.yMin = yMin;
        this.xMax = xMax;
        this.yMax = yMax;
    }

    get width () : number {
        return this.xMax - this.xMin;
    }

    get height () : number {
        return this.yMax - this.yMin;
    }
}

