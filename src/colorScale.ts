export default class ColorScale {
    private scale: string[] = [
    "rgb(36,104, 180)",
		"rgb(60,157, 194)",
		"rgb(128,205,193 )",
		"rgb(151,218,168 )",
		"rgb(198,231,181)",
		"rgb(238,247,217)",
		"rgb(255,238,159)",
		"rgb(252,217,125)",
		"rgb(255,182,100)",
		"rgb(252,150,75)",
		"rgb(250,112,52)",
		"rgb(245,64,32)",
		"rgb(237,45,28)",
		"rgb(220,24,32)",
		"rgb(180,0,35)"
    ]
    private minValue: number;
    private maxValue: number;

    constructor(minValue: number, maxValue: number, scale?: string[]) {
        this.setMinMax(minValue, maxValue);
        if ((scale instanceof Array) && scale.length) {
            this.scale = scale;
        }
    }

    setMinMax (minValue: number, maxValue: number) {
        this.minValue = minValue;
        this.maxValue = maxValue;
    }

    get size () {
        return this.scale.length;
    }

    getColorIndex(value: number): number {
        if (value <= this.minValue) {
            return 0;
        }
        if (value >= this.maxValue) {
            return this.scale.length-1;
        }
        const index = this.scale.length * (value - this.minValue) / (this.maxValue - this.minValue);
        if (index <0) {
            return 0;
        }
        if (index> this.scale.length-1) {
            return this.scale.length-1;
        }
        return Math.floor(index);
    }

    colorAt(index: number): string {
        return this.scale[index];
    }

    getColor(value: number): string {
        return this.scale[this.getColorIndex(value)];
    }

}
