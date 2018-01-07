import Vector from "./vector";

export default class Grid {
    private data: Vector[];
    private φ0: number;
    private λ0: number;
    private Δλ: number;
    private Δφ: number;
    private height: number;
    private width: number;

    constructor (data: Vector[], φ0: number, λ0: number, Δφ: number, Δλ: number, height: number, width: number) {
        this.data = data;
        this.φ0 = φ0;
        this.λ0 = λ0;
        this.Δλ = Δλ;
        this.Δφ = Δφ;
        this.height = height;
        this.width = width;
    }

    get valueRange () : number[] {
        if (!this.data.length) {
            return [0, 0];
        }
        let min = this.data[0].intensity;
        let max = this.data[0].intensity;
        this.data.forEach((value: Vector) => {
            min = Math.min(min, value.intensity);
            max = Math.max(max, value.intensity);
        });
        return [min, max];
    }
    /**
     * Get vector at any point
     * @param λ Longitude
     * @param φ Latitude
     */
    get (λ: number, φ: number): Vector {
        const fλ = this.floorMod(λ - this.λ0, 360) / this.Δλ;  // calculate longitude index in wrapped range [0, 360)
        const fφ = (this.φ0 - φ) / this.Δφ;                 // calculate latitude index in direction +90 to -90

        const iλ = Math.floor(fλ) // col n
        let jλ = iλ + 1;        // col n+1
        if (jλ >= this.width) {
            jλ = this.λ0;
        }
        const iφ = Math.floor(fφ) // line m
        let jφ = iφ + 1;        // line m+1
        if (jφ >= this.height) {
            jφ = iφ;
        }

        const vλ = fλ - iλ;   // col variation [0..1]
        const vφ = fφ - iφ;   // line variation [0..1]

        if (iλ>=0 && iφ>=0 && iλ<this.width && iφ<this.height) {
          let g00 = this.data[iλ + iφ * this.width];
          let g10 = this.data[jλ + iφ * this.width];

          if (this.isValue(g00) && this.isValue(g10)){
            let g01 = this.data[iλ + jφ * this.width];
            let g11 = this.data[jλ + jφ * this.width];
            if (this.isValue(g01) && this.isValue(g11)) {
              return this.interpolation (
                  vλ,
                  vφ,
                  g00, //l0c0
                  g10, //l0c1
                  g01, //l1c0
                  g11  //l1cl
              );
            }
          }
        }

        return new Vector(0,0);

    }

    /**
     * Interpolate value
     * @param x variation between g0* and g1*
     * @param y variation between g*0 dans g*1
     * @param g00 point at col_0 and line_0
     * @param g10 point at col_1 and line_0
     * @param g01 point at col_0 and line_1
     * @param g11 point at col_1 and line_1
     * @return interpolated vector
     */
    interpolation (x: number, y: number, g00: Vector, g10:Vector, g01: Vector, g11: Vector): Vector {
        var rx = (1 - x);
        var ry = (1 - y);
        var a = rx * ry,
            b = x * ry,
            c = rx * y,
            d = x * y;
        var u = g00.u * a + g10.u * b + g01.u * c + g11.u * d;
        var v = g00.v * a + g10.v * b + g01.v * c + g11.v * d;
        return new Vector(u, v);
    }

    /**
     * Custom modulo
	 * @returns {number} returns remainder of floored division, i.e., floor(a / n). Useful for consistent modulo
	 *          of negative numbers. See http://en.wikipedia.org/wiki/Modulo_operation.
	 */
	floorMod (a: number, n: number): number {
		return a - n * Math.floor(a / n);
    };

    /**
     * Detect if x is a value
	 * @returns {boolean} true if the specified value is not null and not undefined.
	 */
	isValue (x: any): boolean {
		return x !== null && x !== undefined;
	};
}
