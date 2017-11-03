export default class Windy {

    constructor(...args: any[]) {
        console.log("[Constructor]", args);
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