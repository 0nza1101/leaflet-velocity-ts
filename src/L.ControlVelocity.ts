import Windy from './windy';
declare var L: any;
import velocitycss from './leaflet-velocity.css';

interface DisplayOptions {
    position: string,
    emptyString: string,
    angleConvention: string,
    speedUnit: string,
    showCardinal: boolean
    velocityType?: string
    directionString: string
    speedString: string
}

export default class ControlVelocity {
  private options: DisplayOptions;
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
      speedUnit: 'm/s',
      directionString: "Direction",
      speedString: "Speed",
      showCardinal: false,
    };
  }

  setWindy(_windy: any) {
    if (!this._windy && _windy) this._windy = _windy;
  }

  setOptions(options: any) {
    L.Util.setOptions(this, options);
  }

  onAdd(map: any) {
    this._map = map;
    this._container = L.DomUtil.create('div', velocitycss.leafletControlVelocity);
    L.DomEvent.disableClickPropagation(this._container);
    this._map.on('mousemove', this.drawWindSpeed, this);
    this._container.innerHTML = this.options.emptyString;
    return this._container;
  }

  onRemove(map: any) {
    this._map.off('mousemove', this.drawWindSpeed, this);
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

  degreesToCardinalDirection(deg: number) {
    let cardinalDirection = ''
    if (deg >= 0 && deg < 11.25 || deg >= 348.75) {
      cardinalDirection = 'N'
    }
    else if (deg >= 11.25 && deg < 33.75) {
      cardinalDirection = 'NNW'
    }
    else if (deg >= 33.75 && deg < 56.25) {
      cardinalDirection = 'NW'
    }
    else if (deg >= 56.25 && deg < 78.75) {
      cardinalDirection = 'WNW'
    }
    else if (deg >= 78.25 && deg < 101.25) {
      cardinalDirection = 'W'
    }
    else if (deg >= 101.25 && deg < 123.75) {
      cardinalDirection = 'WSW'
    }
    else if (deg >= 123.75 && deg < 146.25) {
      cardinalDirection = 'SW'
    }
    else if (deg >= 146.25 && deg < 168.75) {
      cardinalDirection = 'SSW'
    }
    else if (deg >= 168.75 && deg < 191.25) {
      cardinalDirection = 'S'
    }
    else if (deg >= 191.25 && deg < 213.75) {
      cardinalDirection = 'SSE'
    }
    else if (deg >= 213.75 && deg < 236.25) {
      cardinalDirection = 'SE'
    }
    else if (deg >= 236.25 && deg < 258.75) {
      cardinalDirection = 'ESE'
    }
    else if (deg >= 258.75 && deg < 281.25) {
      cardinalDirection = 'E'
    }
    else if (deg >= 281.25 && deg < 303.75) {
      cardinalDirection = 'ENE'
    }
    else if (deg >= 303.75 && deg < 326.25) {
      cardinalDirection = 'NE'
    }
    else if (deg >= 326.25 && deg < 348.75) {
      cardinalDirection = 'NNE'
    }

    return cardinalDirection;
  }

  drawWindSpeed(ev: any) {
    const pos = this._map.containerPointToLatLng(L.point(ev.containerPoint.x, ev.containerPoint.y));
    const gridValue = this._windy.interpolate(pos.lng, pos.lat);
    var template = "";
    if (gridValue && !isNaN(gridValue[0]) && !isNaN(gridValue[1]) && gridValue[2]) {
      const deg = this.vectorToDegrees(gridValue[0], gridValue[1], this.options.angleConvention);
      const cardinal = this.options.showCardinal ? ` (${this.degreesToCardinalDirection(deg)}) ` : '';
      template = `<strong> ${this.options.velocityType} ${this.options.directionString
        }: </strong> ${deg.toFixed(2)}°${cardinal}, <strong> ${this.options.velocityType} ${this.options.speedString
        }: </strong> ${this.vectorToSpeed(gridValue[0], gridValue[1], this.options.speedUnit).toFixed(2)} ${this.options.speedUnit}`;
    }
    else {
      if (this.options.emptyString)
        template = this.options.emptyString;
    }
    this._container.innerHTML = template;
  }
}
