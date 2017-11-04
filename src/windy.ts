import MapBound from "./mapBound";
import Vector from "./vector";
import Grid from "./grid";

export default class Windy {

    private grid: Grid;
    private canvas: any = null;
    private minVelocity: number;
    private maxVelocity: number;
    private velocityScale: number;
    private colorScale: string[] = [
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
	];
     

    constructor(options: any) {
        this.canvas = options.canvas;
        this.minVelocity = options.minVelocity;
        this.maxVelocity = options.maxVelocity;
        this.velocityScale = options.velocityScale;
        if ((options.colorScale instanceof Array) && (options.colorScale.length)) {
            this.colorScale = options.colorScale;
        }
        this.buildGrid(options.data);
        console.log("[Constructor]", this);
    }

    buildGrid(data: any[]) {
        let uData: any = null;
        let vData: any = null;
        const grid: Vector[] = [];

        data.forEach((record) => {
            switch (`${record.header.parameterCategory},${record.header.parameterNumber}`) {
                case "1,2":
                case "2,2":
                    uData = record;
                    break;
                case "1,3":
                case "2,3":
                    vData = record;
                    break;
                default:
            }
        });

        if (!uData || !vData) {
            console.warn("Data are not correct");
            return;
        }

        uData.data.forEach((u: number, index: number) => {
            grid.push(new Vector(u, vData.data[index]));
        })

        this.grid = new Grid (
            grid,
            uData.header.la1,
            uData.header.lo1,
            uData.header.dy,
            uData.header.dx,
            uData.header.ny,
            uData.header.nx
        );
    }

    start(...args: any[]) {
        console.log("[Start]", args);
    }

    stop(...args: any[]) {
        console.log("[Stop]", args);
    }

    setData(data: any) {
        console.log("[SetData]");
    }

}