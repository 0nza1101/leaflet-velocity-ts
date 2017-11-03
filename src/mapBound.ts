export default class MapBound {
    public south: number;
    public north: number;
    public east: number;
    public west: number;

    constructor (north: number, east: number, south: number, west: number) {
        this.north = north;
        this.east = east;
        this.south = south;
        this.west = west;
    }

    get width () : number {
        return (720 + this.east - this.west) % 360;
    }

    get height () : number {
        return (360 + this.north - this.south) % 180;
    }
}