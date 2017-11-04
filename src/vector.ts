export default class Vector {
    public u: number;
    public v: number;

    constructor (u?: number, v?: number) {
        this.u = u || 0;
        this.v = v || 0;
    }

    get intensity () {
        return Math.sqrt(this.u * this.u + this.v * this.v);
    }
}