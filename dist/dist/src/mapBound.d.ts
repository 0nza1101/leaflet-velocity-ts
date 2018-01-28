export default class MapBound {
    south: number;
    north: number;
    east: number;
    west: number;
    constructor(north: number, east: number, south: number, west: number);
    readonly width: number;
    readonly height: number;
}
