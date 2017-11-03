export class WindBuilder {
    public header: any;
    private uData: number[];
    private vData: number[];

    constructor(uComp, vComp) {
        this.uData = uComp.data;
        this.vData = vComp.data;
        this.header = uComp.header
    }

    data(i): number[] {
        return [this.uData[i], this.vData[i]];
    }

    interpolate (x, y, g00, g10, g01, g11): number[] {
        var rx = (1 - x);
        var ry = (1 - y);
        var a = rx * ry;
        var b = x * ry;
        var c = rx * y;
        var d = x * y;
        var u = g00[0] * a + g10[0] * b + g01[0] * c + g11[0] * d;
        var v = g00[1] * a + g10[1] * b + g01[1] * c + g11[1] * d;
        return [u, v, Math.sqrt(u * u + v * v)];
    }
}