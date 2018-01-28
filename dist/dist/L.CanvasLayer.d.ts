export default class CanvasLayer {
    private _map;
    private _canvas;
    private _frame;
    private _delegate;
    private tiles;
    initialize(options: any): void;
    delegate(del: any): CanvasLayer;
    needRedraw(): this;
    _onLayerDidResize(resizeEvent: any): void;
    _onLayerDidMove(): void;
    getEvents(): {
        resize: (resizeEvent: any) => void;
        moveend: () => void;
        zoomanim: any;
    };
    onAdd(map: any): void;
    onRemove(map: any): void;
    addTo(map: any): this;
    LatLonToMercator(latlon: L.LatLng): {
        x: number;
        y: number;
    };
    drawLayer(): void;
    _setTransform(el: any, offset: any, scale: any): void;
    _animateZoom(e: any): void;
}
