import MapBound from "./mapBound";
import CanvasBound from "./canvasBound";
import Vector from "./vector";
export default class layer {
    mapBound: MapBound;
    canvasBound: CanvasBound;
    constructor(mapBound: MapBound, canvasBound: CanvasBound);
    /**
     * Find geocoordinate from canvas point
     * @param x
     * @param y
     * return [lng, lat]
     */
    canvasToMap(x: number, y: number): number[];
    mercY(φ: number): number;
    /**
     * Project a point on the map
     * @param λ Longitude
     * @param φ Latitude
     * @return [x, y]
     */
    mapToCanvas(λ: number, φ: number): number[];
    deg2rad(deg: number): number;
    rad2deg(rad: number): number;
    /**
     *
     * @param λ Longitude
     * @param φ Latitude
     * @param x
     * @param y
     * @return []
     */
    distortion(λ: number, φ: number, x: number, y: number): number[];
    /**
     * Calculate distortion of the wind vector caused by the shape of the projection at point (x, y). The wind
     * vector is modified in place and returned by this function.
     * @param λ
     * @param φ
     * @param x
     * @param y
     * @param scale scale factor
     * @param wind [u, v]
     * @return []
     */
    distort(λ: number, φ: number, x: number, y: number, scale: number, wind: Vector): Vector;
}
