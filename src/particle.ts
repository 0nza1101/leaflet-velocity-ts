export default class Particule {
    public x: number;
    public y: number;
    public age: number;
    public maxAge: number;
    public xt: number;
    public yt: number;
    public intensity: number;

    constructor(x: number, y: number, maxAge: number) {
        this.x = x;
        this.y = y;
        this.age = Math.floor(Math.random() * maxAge);
        this.maxAge = maxAge;
    }

    reset(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.age = 0;
    }

    get isDead () : boolean {
        return this.age > this.maxAge;
    }

    grow () {
        this.age++;
    }
}