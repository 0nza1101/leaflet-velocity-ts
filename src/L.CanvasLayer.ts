import { Layer, ZoomAnimEvent } from "leaflet";

declare var L: any;

// -- L.DomUtil.setTransform from leaflet 1.0.0 to work on 0.0.7
if (!L.DomUtil.setTransform) {
	L.DomUtil.setTransform = (el: any, offset: any, scale: any) => {
		var pos = offset || new L.Point(0, 0);

		el.style[L.DomUtil.TRANSFORM] =
			(L.Browser.ie3d
				? "translate(" + pos.x + "px," + pos.y + "px)"
				: "translate3d(" + pos.x + "px," + pos.y + "px,0)") +
			(scale ? " scale(" + scale + ")" : "");
	};
}
export default class CanvasLayer {
	protected _map: L.Map;
	private _canvas: HTMLCanvasElement;
	private _frame: number;
	private _del: any;

	public initialize(options: any) {
		this._map = null;
		this._canvas = null;
		this._frame = null;
		this._del = null;
		L.Util.setOptions(this, options);
	}

	public getCanvas() {
		return this._canvas;
	}

	public delegate(del: any): CanvasLayer {
		this._del = del;
		return this;
	}

	public needRedraw() {
		if (!this._frame) {
			this._frame = L.Util.requestAnimFrame(this.drawLayer, this);
		}
		return this;
	}

	public getEvents() {
		const events = {
			resize: this.onLayerDidResize,
			moveend: this.onLayerDidMove,
			zoomanim: <any>undefined
		};
		if (this._map.options.zoomAnimation && L.Browser.any3d) {
			events.zoomanim = this.animateZoom;
		}

		return events;
	}

	public onAdd(map: L.Map) {
		this._map = map;
		this._canvas = L.DomUtil.create('canvas', 'leaflet-layer');

		const size = this._map.getSize();
		this._canvas.width = size.x;
		this._canvas.height = size.y;

		const animated = this._map.options.zoomAnimation && L.Browser.any3d;
		L.DomUtil.addClass(this._canvas, 'leaflet-zoom-' + (animated ? 'animated' : 'hide'));


		map.getPanes().overlayPane.appendChild(this._canvas);
		map.on(this.getEvents() as any, this as any);

		const del = this._del || this;
		del.onLayerDidMount && del.onLayerDidMount(); // -- callback
		this.needRedraw();

		setTimeout(() => {
			this.onLayerDidMove();
		}, 0);
	}

	public onRemove(map: L.Map) {
		const del = this._del || this;
		del.onLayerWillUnmount && del.onLayerWillUnmount(); // -- callback


		map.getPanes().overlayPane.removeChild(this._canvas);

		map.off(this.getEvents() as any, this as any);

		this._canvas = null;

	}

	public addTo(map: L.Map) {
		map.addLayer(this as unknown as Layer);
		return this;
	}

	public drawLayer() {
		// -- todo make the viewInfo properties flat objects.
		const size = this._map.getSize();
		const bounds = this._map.getBounds();
		const zoom = this._map.getZoom();

		const center = this._map.options.crs.project(this._map.getCenter());
		const corner = this._map.options.crs.project(this._map.containerPointToLatLng(this._map.getSize()));

		const del = this._del || this;
		del.onDrawLayer && del.onDrawLayer({
			layer: this,
			canvas: this._canvas,
			bounds: bounds,
			size: size,
			zoom: zoom,
			center: center,
			corner: corner
		});
		this._frame = null;
	}

	// -- L.DomUtil.setTransform from leaflet 1.0.0 to work on 0.0.7
	//------------------------------------------------------------------------------
	_setTransform(el: any, offset: any, scale: any) {
		var pos = offset || new L.Point(0, 0);

		el.style[L.DomUtil.TRANSFORM] =
			(L.Browser.ie3d ?
				'translate(' + pos.x + 'px,' + pos.y + 'px)' :
				'translate3d(' + pos.x + 'px,' + pos.y + 'px,0)') +
			(scale ? ' scale(' + scale + ')' : '');
	}

	private animateZoom(e: ZoomAnimEvent) {
		const scale = this._map.getZoomScale(e.zoom);
		// -- different calc of offset in leaflet 1.0.0 and 0.0.7 thanks for 1.0.0-rc2 calc @jduggan1
		const offset = L.Layer ?
			(<any>this._map)._latLngToNewLayerPoint(this._map.getBounds().getNorthWest(), e.zoom, e.center) :
			(<any>this._map)._getCenterOffset(e.center)._multiplyBy(-scale).subtract((<any>this._map)._getMapPanePos());

		L.DomUtil.setTransform(this._canvas, offset, scale);
	}

	private onLayerDidResize(resizeEvent: any) {
		this._canvas.width = resizeEvent.newSize.x;
		this._canvas.height = resizeEvent.newSize.y;
	}

	private onLayerDidMove() {
		var topLeft = this._map.containerPointToLayerPoint([0, 0]);
		L.DomUtil.setPosition(this._canvas, topLeft);
		this.drawLayer();
	}
}
