import Windy from './windy';
import * as L from 'leaflet';
import * as velocitycss from './leaflet-velocity.css';


export default class VelocityControl {
  private options: any;
  private _windy: Windy = null;
  private _map: any = null;
  private _delegate: any;
  private _container: any = null;

  constructor() {
    this.options = {
      position: 'bottomleft',
      emptyString: 'Unavailable',
      // Could be any combination of 'bearing' (angle toward which the flow goes) or 'meteo' (angle from which the flow comes)
      // and 'CW' (angle value increases clock-wise) or 'CCW' (angle value increases counter clock-wise)
      angleConvention: 'bearingCCW',
	    // Could be 'm/s' for meter per second, 'k/h' for kilometer per hour or 'kt' for knots
	    speedUnit: 'm/s'
    };
  }

  setWindy(_windy:any){
    if(!this._windy && _windy) this._windy = _windy;
  }

  setOptions(options:any){
    this.options = options;
  }

  onAdd(map: any) {
    this._map = map;
    this._container = L.DomUtil.create('div', velocitycss.leafletControlVelocity);
    L.DomEvent.disableClickPropagation(this._container);
    this._map.on('mousemove', (ev: any) => {
      //console.log("Mouse up event")
      this.drawWindSpeed(ev);
    });
    this._container.innerHTML = this.options.emptyString;
    return this._container;
  }

  onRemove(map: any) {
    map.off('mousemove', (ev: any) => {
       //console.log("Mouse up event")
      //this._drawWindSpeed(ev);
    });
  }

  vectorToSpeed(uMs: number, vMs: number, unit: string) {
    var velocityAbs = Math.sqrt(Math.pow(uMs, 2) + Math.pow(vMs, 2));
    // Default is m/s
    if (unit === 'k/h') {
      return this.meterSec2kilometerHour(velocityAbs);
    } else if (unit === 'kt') {
      return this.meterSec2Knots(velocityAbs);
    } else {
      return velocityAbs;
    }
  }

  vectorToDegrees(uMs: number, vMs: number, angleConvention: string) {
    // Default angle convention is CW
    if (angleConvention.endsWith('CCW')) {
      // vMs comes out upside-down..
      vMs = vMs > 0 ? vMs = -vMs : Math.abs(vMs);
    }
    var velocityAbs = Math.sqrt(Math.pow(uMs, 2) + Math.pow(vMs, 2));

    var velocityDir = Math.atan2(uMs / velocityAbs, vMs / velocityAbs);
    var velocityDirToDegrees = velocityDir * 180 / Math.PI + 180;

    if (angleConvention === 'bearingCW' || angleConvention === 'meteoCCW') {
      velocityDirToDegrees += 180;
      if (velocityDirToDegrees >= 360) velocityDirToDegrees -= 360;
    }

    return velocityDirToDegrees;
  }

  meterSec2Knots(meters: number) {
    return meters / 0.514
  }

  meterSec2kilometerHour(meters: number) {
    return meters * 3.6
  }

  drawWindSpeed(ev: any) {
    const pos = this._map.containerPointToLatLng(L.point(ev.containerPoint.x, ev.containerPoint.y));
    var gridValue = this._windy.interpolate(pos.lng, pos.lat);
    var template = "";
    if (gridValue && !isNaN(gridValue[0]) && !isNaN(gridValue[1]) && gridValue[2]) {
      template = "<strong>  Direction: </strong>" +
        this.vectorToDegrees(gridValue[0], gridValue[1], this.options.angleConvention).toFixed(3) +
        "°" + ", <thisstrong>  Speed: </strong>" +
        this.vectorToSpeed(gridValue[0], gridValue[1], this.options.speedUnit).toFixed(1)+ ` ${this.options.speedUnit}`;
    }
    else {
      if(this.options.emptyString)
        template = this.options.emptyString;
    }
    this._container.innerHTML = template;
  }
}
