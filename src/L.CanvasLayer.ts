declare var L: any;

export default class CanvasLayer {
	private _map: any;
	private _canvas: any;
	private _frame: any;
	private _delegate: any;
	private tiles: any;

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

	//-------------------------------------------------------------
	_onLayerDidResize(resizeEvent: any) {
		this._canvas.width = resizeEvent.newSize.x;
		this._canvas.height = resizeEvent.newSize.y;
	}

	//-------------------------------------------------------------
	_onLayerDidMove() {
		var topLeft = this._map.containerPointToLayerPoint([0, 0]);
		L.DomUtil.setPosition(this._canvas, topLeft);
		this.drawLayer();
	}

	//-------------------------------------------------------------
	getEvents() {
		var events = {
			resize: this._onLayerDidResize,
			moveend: this._onLayerDidMove,
			zoomanim: <any>undefined
		};
		if (this._map.options.zoomAnimation && L.Browser.any3d) {
			events.zoomanim = this._animateZoom;
		}

		return events;
	}

	//-------------------------------------------------------------
	onAdd(map: any) {
		this._map = map;
		this._canvas = L.DomUtil.create('canvas', 'leaflet-layer');
		this.tiles = {};

		var size = this._map.getSize();
		this._canvas.width = size.x;
		this._canvas.height = size.y;

		var animated = this._map.options.zoomAnimation && L.Browser.any3d;
		L.DomUtil.addClass(this._canvas, 'leaflet-zoom-' + (animated ? 'animated' : 'hide'));


		map._panes.overlayPane.appendChild(this._canvas);
		map.on(this.getEvents(), this);

		var del = this._delegate || this;
		del.onLayerDidMount && del.onLayerDidMount(); // -- callback
		this.needRedraw();

		var self = this;
		setTimeout(function () {
			self._onLayerDidMove();
		}, 0);
	}

	//-------------------------------------------------------------
	onRemove(map: any) {
		var del = this._delegate || this;
		del.onLayerWillUnmount && del.onLayerWillUnmount(); // -- callback


		map.getPanes().overlayPane.removeChild(this._canvas);

		map.off(this.getEvents(), this);

		this._canvas = null;

	}

	//------------------------------------------------------------
	addTo(map: any) {
		map.addLayer(this);
		return this;
	}

	// --------------------------------------------------------------------------------
	LatLonToMercator(latlon: L.LatLng) {
		return {
			x: latlon.lng * 6378137 * Math.PI / 180,
			y: Math.log(Math.tan((90 + latlon.lat) * Math.PI / 360)) * 6378137
		};
	}

	//------------------------------------------------------------------------------
	drawLayer() {
		// -- todo make the viewInfo properties  flat objects.
		var size = this._map.getSize();
		var bounds = this._map.getBounds();
		var zoom = this._map.getZoom();

		var center = this.LatLonToMercator(this._map.getCenter());
		var corner = this.LatLonToMercator(this._map.containerPointToLatLng(this._map.getSize()));

		var del = this._delegate || this;
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

	//------------------------------------------------------------------------------
	_animateZoom(e: any) {
		var scale = this._map.getZoomScale(e.zoom);
		// -- different calc of offset in leaflet 1.0.0 and 0.0.7 thanks for 1.0.0-rc2 calc @jduggan1
		var offset = L.Layer ? this._map._latLngToNewLayerPoint(this._map.getBounds().getNorthWest(), e.zoom, e.center) :
			this._map._getCenterOffset(e.center)._multiplyBy(-scale).subtract(this._map._getMapPanePos());

		L.DomUtil.setTransform(this._canvas, offset, scale);
	}
}
