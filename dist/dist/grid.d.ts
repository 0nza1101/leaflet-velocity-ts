import Vector from "./vector";
export default class Grid {
    private data;
    private φ0;
    private λ0;
    private Δλ;
    private Δφ;
    private height;
    private width;
    constructor(data: Vector[], φ0: number, λ0: number, Δφ: number, Δλ: number, height: number, width: number);
    readonly valueRange: number[];
    /**
     * Get vector at any point
     * @param λ Longitude
     * @param φ Latitude
     */
    get(λ: number, φ: number): Vector;
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
    interpolation(x: number, y: number, g00: Vector, g10: Vector, g01: Vector, g11: Vector): Vector;
    /**
     * Custom modulo
     * @returns {number} returns remainder of floored division, i.e., floor(a / n). Useful for consistent modulo
     *          of negative numbers. See http://en.wikipedia.org/wiki/Modulo_operation.
     */
    floorMod(a: number, n: number): number;
    /**
     * Detect if x is a value
     * @returns {boolean} true if the specified value is not null and not undefined.
     */
    isValue(x: any): boolean;
}
