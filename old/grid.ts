import { WindBuilder } from "./windBuilder";

export class Grid {
    public date: Date;
    public grid: number[][];
    public builder: WindBuilder;
    public φ0: number;
    public λ0: number;
    public Δλ: number;
    public Δφ: number;

    constructor (grid: number[][], builder: WindBuilder, φ0: number, λ0: number, Δφ: number, Δλ: number, date: Date) {
        this.date = date
        this.grid = grid;
        this.builder = builder;
        this.φ0 = φ0;
        this.λ0 = λ0;
        this.Δλ = Δλ;
        this.Δφ = Δφ;
    }


    interpolate (λ: number, φ: number) {
        
        if(!this.grid) {
            return null;
        }

        var i = this.floorMod(λ - this.λ0, 360) / this.Δλ;  // calculate longitude index in wrapped range [0, 360)
        var j = (this.φ0 - φ) / this.Δφ;                 // calculate latitude index in direction +90 to -90

        var fi = Math.floor(i), ci = fi + 1;
        var fj = Math.floor(j), cj = fj + 1;

        var row;
        if ((row = this.grid[fj])) {
            var g00 = row[fi];
            var g10 = row[ci];
            if (this.isValue(g00) && this.isValue(g10) && (row = this.grid[cj])) {
                var g01 = row[fi];
                var g11 = row[ci];
                if (this.isValue(g01) && this.isValue(g11)) {
                    // All four points found, so interpolate the value.
                    return this.builder.interpolate(i - fi, j - fj, g00, g10, g01, g11);
                }
            }
        }
        return null;
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
     * Detect if x is a value
	 * @returns {boolean} true if the specified value is not null and not undefined.
	 */
	isValue (x: any): boolean {
		return x !== null && x !== undefined;
	};
}