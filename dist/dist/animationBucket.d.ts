import ColorScale from "./colorScale";
import Particule from "./particle";
import Vector from "./vector";
export default class AnimationBucket {
    private colorScale;
    private buckets;
    constructor(colorScale: ColorScale);
    clear(): void;
    add(p: Particule, v: Vector): void;
    draw(context2D: any): void;
}
