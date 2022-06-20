import { Layer } from "leaflet";

declare var L: any;

// -- L.DomUtil.setTransform from leaflet 1.0.0 to work on 0.0.7
if (!L.DomUtil.setTransform) {
	L.DomUtil.setTransform = (el: any, offset: any, scale: any)  =>{
	  var pos = offset || new L.Point(0, 0);
  
	  el.style[L.DomUtil.TRANSFORM] =
		(L.Browser.ie3d
		  ? "translate(" + pos.x + "px," + pos.y + "px)"
		  : "translate3d(" + pos.x + "px," + pos.y + "px,0)") +
		(scale ? " scale(" + scale + ")" : "");
	};
}
export default class CanvasLayer {
	private _map: any;
	private _canvas: any;
	private _frame: any;
	private _delegate: any;

	initialize(options: any) {
		this._map = null;
		this._canvas = null;
		this._frame = null;
		this._delegate = null;
		L.Util.setOptions(this, options);
	}

	delegate(del: any): CanvasLayer {
		this._delegate = del;
		return this;
	}

	needRedraw() {
		if (!this._frame) {
			this._frame = L.Util.requestAnimFrame(this.drawLayer, this);
		}
		return this;
	}

	getEvents() {
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

	onAdd(map: L.Map) {
		this._map = map;
		this._canvas = L.DomUtil.create('canvas', 'leaflet-layer');

		const size = this._map.getSize();
		this._canvas.width = size.x;
		this._canvas.height = size.y;

		const animated = this._map.options.zoomAnimation && L.Browser.any3d;
		L.DomUtil.addClass(this._canvas, 'leaflet-zoom-' + (animated ? 'animated' : 'hide'));


		map.getPanes().overlayPane.appendChild(this._canvas);
		map.on(this.getEvents() as any, this as any);

		const del = this._delegate || this;
		del.onLayerDidMount && del.onLayerDidMount(); // -- callback
		this.needRedraw();

		setTimeout(() => {
			this.onLayerDidMove();
		}, 0);
	}

	onRemove(map: L.Map) {
		const del = this._delegate || this;
		del.onLayerWillUnmount && del.onLayerWillUnmount(); // -- callback


		map.getPanes().overlayPane.removeChild(this._canvas);

		map.off(this.getEvents()as any, this as any);

		this._canvas = null;

	}

	addTo(map: L.Map) {
		map.addLayer(this as unknown as Layer);
		return this;
	}

	drawLayer() {
		// -- todo make the viewInfo properties  flat objects.
		const size = this._map.getSize();
		const bounds = this._map.getBounds();
		const zoom = this._map.getZoom();

		const center = this._map.options.crs.project(this._map.getCenter());
		const corner = this._map.options.crs.project(this._map.containerPointToLatLng(this._map.getSize()));

		const del = this._delegate || this;
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

	private animateZoom(e: any) {
		const scale = this._map.getZoomScale(e.zoom);
		// -- different calc of offset in leaflet 1.0.0 and 0.0.7 thanks for 1.0.0-rc2 calc @jduggan1
		const offset = L.Layer ? this._map._latLngToNewLayerPoint(this._map.getBounds().getNorthWest(), e.zoom, e.center) :
			this._map._getCenterOffset(e.center)._multiplyBy(-scale).subtract(this._map._getMapPanePos());

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
