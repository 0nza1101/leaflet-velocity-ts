export default class VelocityLayer {
    private options;
    private _map;
    private _canvasLayer;
    private _windy;
    private _context;
    private _displayTimeout;
    private _mouseControl;
    constructor();
    initialize(options: any): void;
    onAdd(map: any): void;
    onRemove(map: any): void;
    setData(data: any): void;
    onDrawLayer(overlay: any, params: any): void;
    _startWindy(): void;
    _initWindy(): void;
    _initMouseHandler(): void;
    _clearAndRestart(): void;
    _clearWind(): void;
    _destroyWind(): void;
}
