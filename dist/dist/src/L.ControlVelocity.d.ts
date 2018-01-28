export default class VelocityControl {
    private options;
    private _windy;
    private _map;
    private _delegate;
    private _container;
    constructor();
    setWindy(_windy: any): void;
    setOptions(options: any): void;
    onAdd(map: any): any;
    onRemove(map: any): void;
    vectorToSpeed(uMs: number, vMs: number, unit: string): number;
    vectorToDegrees(uMs: number, vMs: number, angleConvention: string): number;
    meterSec2Knots(meters: number): number;
    meterSec2kilometerHour(meters: number): number;
    drawWindSpeed(ev: any): void;
}
