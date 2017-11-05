import ColorScale from "./colorScale";
import Particule from "./particle";
import Vector from "./vector";

export default class AnimationBucket {
    private colorScale: ColorScale;
    private buckets: Particule[][] = [];

    constructor (colorScale: ColorScale) {
        this.colorScale = colorScale;
        for (let i=0; i<colorScale.size; i++) {
            this.buckets.push([]);
        }
    }

    clear() {
        this.buckets.forEach((particuleSet: Particule[]) => {
            particuleSet.splice(0, particuleSet.length)
        })
    }

    add (p: Particule, v: Vector) {
        const index = this.colorScale.getColorIndex(p.intensity)
        if (index<0 || index>= this.buckets.length) {
            console.log(index);
            return;
        }
        p.xt = p.x + v.u;
        p.yt = p.y + v.v;
        this.buckets[index].push(p);
    }

    draw (context2D: any) {
        this.buckets.forEach((bucket: Particule[], i: number) => {
            if (bucket.length > 0) {
                context2D.beginPath();
                context2D.strokeStyle = this.colorScale.colorAt(i);
                bucket.forEach(function(particle) {
                    context2D.moveTo(particle.x, particle.y);
                    context2D.lineTo(particle.xt, particle.yt);
                    particle.x = particle.xt;
                    particle.y = particle.yt;
                });
                context2D.stroke();
            }
        });
    }
}