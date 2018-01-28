import Particule from "./particle";
export default class CanvasBound {
    xMin: number;
    yMin: number;
    xMax: number;
    yMax: number;
    constructor(xMin: number, yMin: number, xMax: number, yMax: number);
    readonly width: number;
    readonly height: number;
    getRandomParticule(maxAge: number): Particule;
    resetParticule(p: Particule): Particule;
}
