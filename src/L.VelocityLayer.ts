import Windy, { WindyOptions } from './windy';
import CanvasBound from './canvasBound'
import MapBound from './mapBound';
import Layer from "./layer";

declare var L: any;

export default class VelocityLayer {
  private options: any;
  private _map: L.Map = null;
  private _canvasLayer: any = null;
  private _windy: Windy = null;
  private _context: any = null;
  private _displayTimeout: ReturnType<typeof setTimeout> = null;
  private _mapEvents: any = null
  private _mouseControl: any = null;

  constructor() {
    this.options = {
      displayValues: true,
      displayOptions: {
        velocityType: 'Velocity',
        position: 'bottomleft',
        emptyString: 'No velocity data',
        angleConvention: 'bearingCCW',
        speedUnit: 'm/s'
      },
      maxVelocity: 10, // used to align color scale
      colorScale: null,
      onAdd: null,
      onRemove: null,
      data: null
    };
  }

  initialize(options: any) {
    L.Util.setOptions(this, options);
  }

  setOptions(options: any) {
    L.Util.setOptions(this, options);
    if (options.displayOptions) {
      this._initMouseHandler(true);
    }
    
    if (options.data) {
      this.options.data = options.data;
    }

    if (this._windy) {
      this._windy.setOptions(options);
      if (options.data) {
        this._windy.setData(options.data);
      }
      this._clearAndRestart();
    }

    (<any>this).fire("load");
  }

  onAdd(map: L.Map) {
    // create canvas, add overlay control
    this._canvasLayer = L.canvasLayer().delegate(this);
    this._canvasLayer.addTo(map);

    this._map = map;

    if (this.options.onAdd)
      this.options.onAdd();
  }

  onRemove(map: any) {
    this._destroyWind();

    if (this.options.onRemove)
      this.options.onRemove();
  }

  setData(data: any) {
    this.options.data = data;

    if (this._windy) {
      this._windy.setData(data);
      this._clearAndRestart();
    }

    (<any>this).fire('load');
  }

  /*------------------------------------ PRIVATE ------------------------------------------*/

  onDrawLayer() {
    if (!this._windy) {
      this._initWindy();
      return;
    }

    if (!this.options.data) {
      return;
    }

    if (this._displayTimeout) clearTimeout(this._displayTimeout);

    this._displayTimeout = setTimeout(() => {
      this._startWindy();
    }, 150); // showing velocity is delayed
  }

  _toggleEvents(bind: boolean = true) {
    if (this._mapEvents === null) {
      this._mapEvents = {
        'dragstart': () => {
          this._windy.stop();
        },
        'dragend': () => {
          this._clearAndRestart();
        },
        'zoomstart': () => {
          this._windy.stop();
        },
        'zoomend': () => {
          this._clearAndRestart();
        },
        'resize': () => {
          this._clearWind();
        }
      };
    }

    for (let e in this._mapEvents) {
      if (this._mapEvents.hasOwnProperty(e)) {
        this._map[bind ? 'on' : 'off'](e, this._mapEvents[e])
      }
    }
  }

  _startWindy() {
    var bounds = this._map.getBounds();
    var size = this._map.getSize();

    // bounds, width, height, extent
    this._windy.start(
      new Layer(
        new MapBound(
          bounds.getNorthEast().lat,
          bounds.getNorthEast().lng,
          bounds.getSouthWest().lat,
          bounds.getSouthWest().lng
        ),
        new CanvasBound(0, 0, size.x, size.y)
      )

    );
  }

  _initWindy() {
    const options: WindyOptions = {
      ...this.options,
      canvas: this._canvasLayer._canvas
    }
    this._windy = new Windy(options);

    // prepare context global var, start drawing
    this._context = this._canvasLayer._canvas.getContext('2d');
    this._canvasLayer._canvas.classList.add("velocity-overlay");
    this.onDrawLayer();

    this._toggleEvents(true);

    this._initMouseHandler();
  }

  _initMouseHandler(unbind: boolean = false) {
    if (unbind) {
      this._map.removeControl(this._mouseControl);
      this._mouseControl = false;
    }

    if (!this._mouseControl && this.options.displayValues) {
      const options = this.options.displayOptions || {};
      this._mouseControl = L.control.velocity(options);
      this._mouseControl.setWindy(this._windy);
      this._mouseControl.setOptions(this.options.displayOptions);
      this._mouseControl.addTo(this._map);
    }
  }

  _clearAndRestart() {
    if (this._context) this._context.clearRect(0, 0, 3000, 3000);
    if (this._windy) this._startWindy();
  }

  _clearWind() {
    if (this._windy) this._windy.stop();
    if (this._context) this._context.clearRect(0, 0, 3000, 3000);
  }

  _destroyWind() {
    if (this._displayTimeout)
      clearTimeout(this._displayTimeout);
    if (this._windy)
      this._windy.stop();
    if (this._context)
      this._context.clearRect(0, 0, 3000, 3000);
    if (this._mouseControl)
      this._map.removeControl(this._mouseControl);
    this._mouseControl = null;
    this._windy = null;
    this._toggleEvents(false);
    this._map.removeLayer(this._canvasLayer);
  }
}
