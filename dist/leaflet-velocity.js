/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var particle_1 = __webpack_require__(7);
var CanvasBound = /** @class */ (function () {
    function CanvasBound(xMin, yMin, xMax, yMax) {
        this.xMin = xMin;
        this.yMin = yMin;
        this.xMax = xMax;
        this.yMax = yMax;
    }
    Object.defineProperty(CanvasBound.prototype, "width", {
        get: function () {
            return this.xMax - this.xMin;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CanvasBound.prototype, "height", {
        get: function () {
            return this.yMax - this.yMin;
        },
        enumerable: true,
        configurable: true
    });
    CanvasBound.prototype.getRandomParticule = function (maxAge) {
        var x = Math.round(Math.floor(Math.random() * this.width) + this.xMin);
        var y = Math.round(Math.floor(Math.random() * this.height) + this.yMin);
        return new particle_1.default(x, y, maxAge);
    };
    CanvasBound.prototype.resetParticule = function (p) {
        var x = Math.round(Math.floor(Math.random() * this.width) + this.xMin);
        var y = Math.round(Math.floor(Math.random() * this.height) + this.yMin);
        p.reset(x, y);
        return p;
    };
    return CanvasBound;
}());
exports.default = CanvasBound;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var MapBound = /** @class */ (function () {
    function MapBound(north, east, south, west) {
        this.north = north * Math.PI / 180;
        this.east = east * Math.PI / 180;
        this.south = south * Math.PI / 180;
        this.west = west * Math.PI / 180;
    }
    Object.defineProperty(MapBound.prototype, "width", {
        get: function () {
            return (720 + this.east - this.west) % 360;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MapBound.prototype, "height", {
        get: function () {
            return (360 + this.north - this.south) % 180;
        },
        enumerable: true,
        configurable: true
    });
    return MapBound;
}());
exports.default = MapBound;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var vector_1 = __webpack_require__(3);
var grid_1 = __webpack_require__(8);
var colorScale_1 = __webpack_require__(9);
var animationBucket_1 = __webpack_require__(10);
var Windy = /** @class */ (function () {
    function Windy(options) {
        this.canvas = null;
        this.particuleMultiplier = 1 / 300;
        this.autoColorRange = false;
        this.particules = [];
        this.animationLoop = null;
        this.then = 0;
        this.canvas = options.canvas;
        if (options.minVelocity === undefined && options.maxVelocity === undefined) {
            this.autoColorRange = true;
        }
        this.colorScale = new colorScale_1.default(options.minVelocity || 0, options.maxVelocity || 10, options.colorScale);
        this.velocityScale = options.velocityScale || 0.01;
        this.particleAge = options.particleAge || 64;
        this.setData(options.data);
        this.particuleMultiplier = options.particleMultiplier || 1 / 300;
        this.particuleLineWidth = options.lineWidth || 1;
        var frameRate = options.frameRate || 15;
        this.frameTime = 1000 / frameRate;
    }
    Object.defineProperty(Windy.prototype, "particuleCount", {
        get: function () {
            var particuleReduction = ((/android|blackberry|iemobile|ipad|iphone|ipod|opera mini|webos/i).test(navigator.userAgent)) ? (Math.pow(window.devicePixelRatio, 1 / 3) || 1.6) : 1;
            return Math.round(this.layer.canvasBound.width * this.layer.canvasBound.height * this.particuleMultiplier) * particuleReduction;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Load data
     * @param data
     */
    Windy.prototype.setData = function (data) {
        var uData = null;
        var vData = null;
        var grid = [];
        data.forEach(function (record) {
            switch (record.header.parameterCategory + "," + record.header.parameterNumber) {
                case "1,2":
                case "2,2":
                    uData = record;
                    break;
                case "1,3":
                case "2,3":
                    vData = record;
                    break;
                default:
            }
        });
        if (!uData || !vData) {
            console.warn("Data are not correct format");
            return;
        }
        uData.data.forEach(function (u, index) {
            grid.push(new vector_1.default(u, vData.data[index]));
        });
        //console.log('uData', uData);
        //console.log('vData', vData);
        this.grid = new grid_1.default(grid, uData.header.la1, uData.header.lo1, uData.header.dy, uData.header.dx, uData.header.ny, uData.header.nx);
        this.λ0 = uData.header.lo1;
        this.φ0 = uData.header.la1;
        this.Δλ = uData.header.dx;
        this.Δφ = uData.header.dy;
        this.ni = uData.header.nx;
        this.nj = uData.header.ny; // number of grid points W-E and N-S (e.g., 144 x 73)
        var p = 0;
        var isContinuous = Math.floor(this.ni * this.Δλ) >= 360;
        for (var j = 0; j < this.nj; j++) {
            var row = [];
            for (var i = 0; i < this.ni; i++, p++) {
                row[i] = this.grid.data[p];
            }
            if (isContinuous) {
                // For wrapped grids, duplicate first column as last column to simplify interpolation logic
                row.push(row[0]);
            }
            this.grid[j] = row;
        }
        if (this.autoColorRange) {
            var minMax = this.grid.valueRange;
            this.colorScale.setMinMax(minMax[0], minMax[1]);
        }
    };
    Windy.prototype.floorMod = function (a, n) {
        return a - n * Math.floor(a / n);
    };
    ;
    Windy.prototype.isValue = function (x) {
        return x !== null && x !== undefined;
    };
    ;
    Windy.prototype.bilinearInterpolateVector = function (x, y, g00, g10, g01, g11) {
        var rx = (1 - x);
        var ry = (1 - y);
        var a = rx * ry, b = x * ry, c = rx * y, d = x * y;
        var u = g00.u * a + g10.u * b + g01.u * c + g11.u * d;
        var v = g00.v * a + g10.v * b + g01.v * c + g11.v * d;
        return [u, v, Math.sqrt(u * u + v * v)];
    };
    ;
    /* Get interpolated grid value from Lon/Lat position
    * @param λ {Float} Longitude
    * @param φ {Float} Latitude
    * @returns {Object}
    */
    Windy.prototype.interpolate = function (λ, φ) {
        if (!this.grid) {
            return null;
        }
        var i = this.floorMod(λ - this.λ0, 360) / this.Δλ; // calculate longitude index in wrapped range [0, 360)
        var j = (this.φ0 - φ) / this.Δφ; // calculate latitude index in direction +90 to -90
        var fi = Math.floor(i);
        var ci = fi + 1;
        var fj = Math.floor(j);
        var cj = fj + 1;
        var row = this.grid[fj]; //Dont know why he dosent found any row ERRRROR
        if (row) {
            var g00 = row[fi];
            var g10 = row[ci];
            if (this.isValue(g00) && this.isValue(g10) && (row = this.grid[cj])) {
                var g01 = row[fi];
                var g11 = row[ci];
                if (this.isValue(g01) && this.isValue(g11)) {
                    // All four points found, so interpolate the value.
                    return this.bilinearInterpolateVector(i - fi, j - fj, g00, g10, g01, g11);
                }
            }
        }
        return null;
    };
    ;
    Windy.prototype.getParticuleWind = function (p) {
        var lngLat = this.layer.canvasToMap(p.x, p.y);
        var wind = this.grid.get(lngLat[0], lngLat[1]);
        p.intensity = wind.intensity;
        var mapArea = this.layer.mapBound.height * this.layer.mapBound.width;
        var velocityScale = this.velocityScale * Math.pow(mapArea, 0.4);
        this.layer.distort(lngLat[0], lngLat[1], p.x, p.y, velocityScale, wind);
        return wind;
    };
    Windy.prototype.start = function (layer) {
        this.context2D = this.canvas.getContext("2d");
        this.context2D.lineWidth = this.particuleLineWidth;
        this.context2D.fillStyle = "rgba(0, 0, 0, 0.97)";
        this.context2D.globalAlpha = 0.6;
        this.layer = layer;
        this.animationBucket = new animationBucket_1.default(this.colorScale);
        this.particules.splice(0, this.particules.length);
        for (var i = 0; i < this.particuleCount; i++) {
            this.particules.push(this.layer.canvasBound.getRandomParticule(this.particleAge));
        }
        this.then = new Date().getTime();
        this.frame();
    };
    Windy.prototype.frame = function () {
        var _this = this;
        this.animationLoop = requestAnimationFrame(function () {
            _this.frame();
        });
        var now = new Date().getTime();
        var delta = now - this.then;
        if (delta > this.frameTime) {
            this.then = now - (delta % this.frameTime);
            this.evolve();
            this.draw();
        }
    };
    Windy.prototype.evolve = function () {
        var _this = this;
        this.animationBucket.clear();
        this.particules.forEach(function (p) {
            p.grow();
            if (p.isDead) {
                _this.layer.canvasBound.resetParticule(p);
            }
            var wind = _this.getParticuleWind(p);
            _this.animationBucket.add(p, wind);
        });
    };
    Windy.prototype.draw = function () {
        this.context2D.globalCompositeOperation = "destination-in";
        this.context2D.fillRect(this.layer.canvasBound.xMin, this.layer.canvasBound.yMin, this.layer.canvasBound.width, this.layer.canvasBound.height);
        // Fade existing particle trails.
        this.context2D.globalCompositeOperation = "lighter";
        this.context2D.globalAlpha = 0.9;
        this.animationBucket.draw(this.context2D);
    };
    Windy.prototype.stop = function () {
        this.particules.splice(0, this.particules.length);
        this.animationBucket.clear();
        if (this.animationLoop) {
            clearTimeout(this.animationLoop);
            this.animationLoop = null;
        }
    };
    return Windy;
}());
exports.default = Windy;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Vector = /** @class */ (function () {
    function Vector(u, v) {
        this.u = u || 0;
        this.v = v || 0;
    }
    Object.defineProperty(Vector.prototype, "intensity", {
        get: function () {
            return Math.sqrt(this.u * this.u + this.v * this.v);
        },
        enumerable: true,
        configurable: true
    });
    return Vector;
}());
exports.default = Vector;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var CanvasLayer = /** @class */ (function () {
    function CanvasLayer() {
    }
    CanvasLayer.prototype.initialize = function (options) {
        this._map = null;
        this._canvas = null;
        this._frame = null;
        this._delegate = null;
        L.Util.setOptions(this, options);
    };
    CanvasLayer.prototype.delegate = function (del) {
        this._delegate = del;
        return this;
    };
    CanvasLayer.prototype.needRedraw = function () {
        if (!this._frame) {
            this._frame = L.Util.requestAnimFrame(this.drawLayer, this);
        }
        return this;
    };
    //-------------------------------------------------------------
    CanvasLayer.prototype._onLayerDidResize = function (resizeEvent) {
        this._canvas.width = resizeEvent.newSize.x;
        this._canvas.height = resizeEvent.newSize.y;
    };
    //-------------------------------------------------------------
    CanvasLayer.prototype._onLayerDidMove = function () {
        var topLeft = this._map.containerPointToLayerPoint([0, 0]);
        L.DomUtil.setPosition(this._canvas, topLeft);
        this.drawLayer();
    };
    //-------------------------------------------------------------
    CanvasLayer.prototype.getEvents = function () {
        var events = {
            resize: this._onLayerDidResize,
            moveend: this._onLayerDidMove,
            zoomanim: undefined
        };
        if (this._map.options.zoomAnimation && L.Browser.any3d) {
            events.zoomanim = this._animateZoom;
        }
        return events;
    };
    //-------------------------------------------------------------
    CanvasLayer.prototype.onAdd = function (map) {
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
    };
    //-------------------------------------------------------------
    CanvasLayer.prototype.onRemove = function (map) {
        var del = this._delegate || this;
        del.onLayerWillUnmount && del.onLayerWillUnmount(); // -- callback
        map.getPanes().overlayPane.removeChild(this._canvas);
        map.off(this.getEvents(), this);
        this._canvas = null;
    };
    //------------------------------------------------------------
    CanvasLayer.prototype.addTo = function (map) {
        map.addLayer(this);
        return this;
    };
    // --------------------------------------------------------------------------------
    CanvasLayer.prototype.LatLonToMercator = function (latlon) {
        return {
            x: latlon.lng * 6378137 * Math.PI / 180,
            y: Math.log(Math.tan((90 + latlon.lat) * Math.PI / 360)) * 6378137
        };
    };
    //------------------------------------------------------------------------------
    CanvasLayer.prototype.drawLayer = function () {
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
    };
    // -- L.DomUtil.setTransform from leaflet 1.0.0 to work on 0.0.7
    //------------------------------------------------------------------------------
    CanvasLayer.prototype._setTransform = function (el, offset, scale) {
        var pos = offset || new L.Point(0, 0);
        el.style[L.DomUtil.TRANSFORM] =
            (L.Browser.ie3d ?
                'translate(' + pos.x + 'px,' + pos.y + 'px)' :
                'translate3d(' + pos.x + 'px,' + pos.y + 'px,0)') +
                (scale ? ' scale(' + scale + ')' : '');
    };
    //------------------------------------------------------------------------------
    CanvasLayer.prototype._animateZoom = function (e) {
        var scale = this._map.getZoomScale(e.zoom);
        // -- different calc of offset in leaflet 1.0.0 and 0.0.7 thanks for 1.0.0-rc2 calc @jduggan1
        var offset = L.Layer ? this._map._latLngToNewLayerPoint(this._map.getBounds().getNorthWest(), e.zoom, e.center) :
            this._map._getCenterOffset(e.center)._multiplyBy(-scale).subtract(this._map._getMapPanePos());
        L.DomUtil.setTransform(this._canvas, offset, scale);
    };
    return CanvasLayer;
}());
exports.default = CanvasLayer;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var velocitycss = __webpack_require__(13);
var VelocityControl = /** @class */ (function () {
    function VelocityControl() {
        this._windy = null;
        this._map = null;
        this._container = null;
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
    VelocityControl.prototype.setWindy = function (_windy) {
        if (!this._windy && _windy)
            this._windy = _windy;
    };
    VelocityControl.prototype.setOptions = function (options) {
        this.options = options;
    };
    VelocityControl.prototype.onAdd = function (map) {
        var _this = this;
        this._map = map;
        this._container = L.DomUtil.create('div', velocitycss.leafletControlVelocity);
        L.DomEvent.disableClickPropagation(this._container);
        this._map.on('mousemove', function (ev) {
            //console.log("Mouse up event")
            _this.drawWindSpeed(ev);
        });
        this._container.innerHTML = this.options.emptyString;
        return this._container;
    };
    VelocityControl.prototype.onRemove = function (map) {
        var _this = this;
        this._map.off('mousemove', function (ev) {
            _this.drawWindSpeed(ev);
        }, this);
    };
    VelocityControl.prototype.vectorToSpeed = function (uMs, vMs, unit) {
        var velocityAbs = Math.sqrt(Math.pow(uMs, 2) + Math.pow(vMs, 2));
        // Default is m/s
        if (unit === 'k/h') {
            return this.meterSec2kilometerHour(velocityAbs);
        }
        else if (unit === 'kt') {
            return this.meterSec2Knots(velocityAbs);
        }
        else {
            return velocityAbs;
        }
    };
    VelocityControl.prototype.vectorToDegrees = function (uMs, vMs, angleConvention) {
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
            if (velocityDirToDegrees >= 360)
                velocityDirToDegrees -= 360;
        }
        return velocityDirToDegrees;
    };
    VelocityControl.prototype.meterSec2Knots = function (meters) {
        return meters / 0.514;
    };
    VelocityControl.prototype.meterSec2kilometerHour = function (meters) {
        return meters * 3.6;
    };
    VelocityControl.prototype.drawWindSpeed = function (ev) {
        var pos = this._map.containerPointToLatLng(L.point(ev.containerPoint.x, ev.containerPoint.y));
        var gridValue = this._windy.interpolate(pos.lng, pos.lat);
        var template = "";
        if (gridValue && !isNaN(gridValue[0]) && !isNaN(gridValue[1]) && gridValue[2]) {
            template = "<strong>  Direction: </strong>" +
                this.vectorToDegrees(gridValue[0], gridValue[1], this.options.angleConvention).toFixed(3) +
                "°" + ", <thisstrong>  Speed: </strong>" +
                this.vectorToSpeed(gridValue[0], gridValue[1], this.options.speedUnit).toFixed(1) + (" " + this.options.speedUnit);
        }
        else {
            if (this.options.emptyString)
                template = this.options.emptyString;
        }
        this._container.innerHTML = template;
    };
    return VelocityControl;
}());
exports.default = VelocityControl;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var canvasBound_1 = __webpack_require__(0);
var mapBound_1 = __webpack_require__(1);
var windy_1 = __webpack_require__(2);
var L_CanvasLayer_1 = __webpack_require__(4);
var L_VelocityLayer_1 = __webpack_require__(11);
var L_ControlVelocity_1 = __webpack_require__(5);
window.CanvasBound = canvasBound_1.default;
window.MapBound = mapBound_1.default;
window.Windy = windy_1.default;
L.CanvasLayer = (L.Layer ? L.Layer : L.Class).extend(new L_CanvasLayer_1.default());
L.canvasLayer = function () {
    return new L.CanvasLayer();
};
L.ControlVelocity = (L.Control).extend(new L_ControlVelocity_1.default());
L.controlVelocity = function () {
    return new L.ControlVelocity();
};
L.VelocityLayer = (L.Layer ? L.Layer : L.Class).extend(new L_VelocityLayer_1.default());
L.velocityLayer = function (options) {
    return new L.VelocityLayer(options);
};
console.log(L);


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Particule = /** @class */ (function () {
    function Particule(x, y, maxAge) {
        this.x = x;
        this.y = y;
        this.age = Math.floor(Math.random() * maxAge);
        this.maxAge = maxAge;
    }
    Particule.prototype.reset = function (x, y) {
        this.x = x;
        this.y = y;
        this.age = 0;
    };
    Object.defineProperty(Particule.prototype, "isDead", {
        get: function () {
            return this.age > this.maxAge;
        },
        enumerable: true,
        configurable: true
    });
    Particule.prototype.grow = function () {
        this.age++;
    };
    return Particule;
}());
exports.default = Particule;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var vector_1 = __webpack_require__(3);
var Grid = /** @class */ (function () {
    function Grid(data, φ0, λ0, Δφ, Δλ, height, width) {
        this.data = data;
        this.φ0 = φ0;
        this.λ0 = λ0;
        this.Δλ = Δλ;
        this.Δφ = Δφ;
        this.height = height;
        this.width = width;
    }
    Object.defineProperty(Grid.prototype, "valueRange", {
        get: function () {
            if (!this.data.length) {
                return [0, 0];
            }
            var min = this.data[0].intensity;
            var max = this.data[0].intensity;
            this.data.forEach(function (value) {
                min = Math.min(min, value.intensity);
                max = Math.max(max, value.intensity);
            });
            return [min, max];
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Get vector at any point
     * @param λ Longitude
     * @param φ Latitude
     */
    Grid.prototype.get = function (λ, φ) {
        var fλ = this.floorMod(λ - this.λ0, 360) / this.Δλ; // calculate longitude index in wrapped range [0, 360)
        var fφ = (this.φ0 - φ) / this.Δφ; // calculate latitude index in direction +90 to -90
        var iλ = Math.floor(fλ); // col n
        var jλ = iλ + 1; // col n+1
        if (jλ >= this.width) {
            jλ = this.λ0;
        }
        var iφ = Math.floor(fφ); // line m
        var jφ = iφ + 1; // line m+1
        if (jφ >= this.height) {
            jφ = iφ;
        }
        var vλ = fλ - iλ; // col variation [0..1]
        var vφ = fφ - iφ; // line variation [0..1]
        if (iλ >= 0 && iφ >= 0 && iλ < this.width && iφ < this.height) {
            var g00 = this.data[iλ + iφ * this.width];
            var g10 = this.data[jλ + iφ * this.width];
            if (this.isValue(g00) && this.isValue(g10)) {
                var g01 = this.data[iλ + jφ * this.width];
                var g11 = this.data[jλ + jφ * this.width];
                if (this.isValue(g01) && this.isValue(g11)) {
                    return this.interpolation(vλ, vφ, g00, //l0c0
                    g10, //l0c1
                    g01, //l1c0
                    g11 //l1cl
                    );
                }
            }
        }
        return new vector_1.default(0, 0);
    };
    /**
     * Interpolate value
     * @param x variation between g0* and g1*
     * @param y variation between g*0 dans g*1
     * @param g00 point at col_0 and line_0
     * @param g10 point at col_1 and line_0
     * @param g01 point at col_0 and line_1
     * @param g11 point at col_1 and line_1
     * @return interpolated vector
     */
    Grid.prototype.interpolation = function (x, y, g00, g10, g01, g11) {
        var rx = (1 - x);
        var ry = (1 - y);
        var a = rx * ry, b = x * ry, c = rx * y, d = x * y;
        var u = g00.u * a + g10.u * b + g01.u * c + g11.u * d;
        var v = g00.v * a + g10.v * b + g01.v * c + g11.v * d;
        return new vector_1.default(u, v);
    };
    /**
     * Custom modulo
     * @returns {number} returns remainder of floored division, i.e., floor(a / n). Useful for consistent modulo
     *          of negative numbers. See http://en.wikipedia.org/wiki/Modulo_operation.
     */
    Grid.prototype.floorMod = function (a, n) {
        return a - n * Math.floor(a / n);
    };
    ;
    /**
     * Detect if x is a value
     * @returns {boolean} true if the specified value is not null and not undefined.
     */
    Grid.prototype.isValue = function (x) {
        return x !== null && x !== undefined;
    };
    ;
    return Grid;
}());
exports.default = Grid;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ColorScale = /** @class */ (function () {
    function ColorScale(minValue, maxValue, scale) {
        this.scale = [
            "rgb(36,104, 180)",
            "rgb(60,157, 194)",
            "rgb(128,205,193 )",
            "rgb(151,218,168 )",
            "rgb(198,231,181)",
            "rgb(238,247,217)",
            "rgb(255,238,159)",
            "rgb(252,217,125)",
            "rgb(255,182,100)",
            "rgb(252,150,75)",
            "rgb(250,112,52)",
            "rgb(245,64,32)",
            "rgb(237,45,28)",
            "rgb(220,24,32)",
            "rgb(180,0,35)"
        ];
        this.setMinMax(minValue, maxValue);
        if ((scale instanceof Array) && scale.length) {
            this.scale = scale;
        }
    }
    ColorScale.prototype.setMinMax = function (minValue, maxValue) {
        this.minValue = minValue;
        this.maxValue = maxValue;
    };
    Object.defineProperty(ColorScale.prototype, "size", {
        get: function () {
            return this.scale.length;
        },
        enumerable: true,
        configurable: true
    });
    ColorScale.prototype.getColorIndex = function (value) {
        if (value <= this.minValue) {
            return 0;
        }
        if (value >= this.maxValue) {
            return this.scale.length - 1;
        }
        var index = this.scale.length * (value - this.minValue) / (this.maxValue - this.minValue);
        if (index < 0) {
            return 0;
        }
        if (index > this.scale.length - 1) {
            return this.scale.length - 1;
        }
        return Math.floor(index);
    };
    ColorScale.prototype.colorAt = function (index) {
        return this.scale[index];
    };
    ColorScale.prototype.getColor = function (value) {
        return this.scale[this.getColorIndex(value)];
    };
    return ColorScale;
}());
exports.default = ColorScale;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var AnimationBucket = /** @class */ (function () {
    function AnimationBucket(colorScale) {
        this.buckets = [];
        this.colorScale = colorScale;
        for (var i = 0; i < colorScale.size; i++) {
            this.buckets.push([]);
        }
    }
    AnimationBucket.prototype.clear = function () {
        this.buckets.forEach(function (particuleSet) {
            particuleSet.splice(0, particuleSet.length);
        });
    };
    AnimationBucket.prototype.add = function (p, v) {
        var index = this.colorScale.getColorIndex(p.intensity);
        if (index < 0 || index >= this.buckets.length) {
            console.log(index);
            return;
        }
        p.xt = p.x + v.u;
        p.yt = p.y + v.v;
        this.buckets[index].push(p);
    };
    AnimationBucket.prototype.draw = function (context2D) {
        var _this = this;
        this.buckets.forEach(function (bucket, i) {
            if (bucket.length > 0) {
                context2D.beginPath();
                context2D.strokeStyle = _this.colorScale.colorAt(i);
                bucket.forEach(function (particle) {
                    context2D.moveTo(particle.x, particle.y);
                    context2D.lineTo(particle.xt, particle.yt);
                    particle.x = particle.xt;
                    particle.y = particle.yt;
                });
                context2D.stroke();
            }
        });
    };
    return AnimationBucket;
}());
exports.default = AnimationBucket;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var windy_1 = __webpack_require__(2);
var canvasBound_1 = __webpack_require__(0);
var mapBound_1 = __webpack_require__(1);
var layer_1 = __webpack_require__(12);
var L_CanvasLayer_1 = __webpack_require__(4);
var L_ControlVelocity_1 = __webpack_require__(5);
var L_CanvasLayer = (L.Layer ? L.Layer : L.Class).extend(new L_CanvasLayer_1.default());
var L_canvasLayer = function () {
    return new L_CanvasLayer();
};
var L_ControlVelocity = (L.Control).extend(new L_ControlVelocity_1.default);
var L_controlVelocity = function () {
    return new L_ControlVelocity();
};
var VelocityLayer = /** @class */ (function () {
    function VelocityLayer() {
        this._map = null;
        this._canvasLayer = null;
        this._windy = null;
        this._context = null;
        this._displayTimeout = 0;
        this._mouseControl = null;
        this.options = {
            displayValues: true,
            displayOptions: {
                velocityType: 'Velocity',
                position: 'bottomleft',
                emptyString: 'No velocity data',
                angleConvention: 'bearingCCW',
                speedUnit: 'm/s'
            },
            maxVelocity: 10,
            colorScale: null,
            data: null
        };
    }
    VelocityLayer.prototype.initialize = function (options) {
        L.Util.setOptions(this, options);
    };
    VelocityLayer.prototype.onAdd = function (map) {
        // create canvas, add overlay control
        this._canvasLayer = L_canvasLayer().delegate(this);
        this._canvasLayer.addTo(map);
        this._map = map;
    };
    VelocityLayer.prototype.onRemove = function (map) {
        this._destroyWind();
    };
    VelocityLayer.prototype.setData = function (data) {
        this.options.data = data;
        if (this._windy) {
            this._windy.setData(data);
            this._clearAndRestart();
        }
        this.fire('load');
    };
    /*------------------------------------ PRIVATE ------------------------------------------*/
    VelocityLayer.prototype.onDrawLayer = function (overlay, params) {
        var self = this;
        if (!this._windy) {
            this._initWindy();
            return;
        }
        if (!this.options.data) {
            return;
        }
        if (this._displayTimeout)
            clearTimeout(self._displayTimeout);
        this._displayTimeout = setTimeout(function () {
            self._startWindy();
        }, 150); // showing velocity is delayed
    };
    VelocityLayer.prototype._startWindy = function () {
        var bounds = this._map.getBounds();
        var size = this._map.getSize();
        // bounds, width, height, extent
        this._windy.start(new layer_1.default(new mapBound_1.default(bounds._northEast.lat, bounds._northEast.lng, bounds._southWest.lat, bounds._southWest.lng), new canvasBound_1.default(0, 0, size.x, size.y)));
    };
    VelocityLayer.prototype._initWindy = function () {
        var _this = this;
        // windy object, copy options
        var options = Object.assign({ canvas: this._canvasLayer._canvas }, this.options);
        this._windy = new windy_1.default(options);
        // prepare context global var, start drawing
        this._context = this._canvasLayer._canvas.getContext('2d');
        this._canvasLayer._canvas.classList.add("velocity-overlay");
        this.onDrawLayer();
        this._map.on('dragstart', function () {
            _this._windy.stop();
        });
        this._map.on('dragend', function () {
            _this._clearAndRestart();
        });
        this._map.on('zoomstart', function () {
            _this._windy.stop();
        });
        this._map.on('zoomend', function () {
            _this._clearAndRestart();
        });
        this._map.on('resize', function () {
            _this._clearWind();
        });
        this._initMouseHandler();
    };
    VelocityLayer.prototype._initMouseHandler = function () {
        if (!this._mouseControl && this.options.displayValues) {
            var options = this.options.displayOptions || {};
            options['leafletVelocity'] = this;
            this._mouseControl = L_controlVelocity();
            this._mouseControl.setWindy(this._windy);
            this._mouseControl.setOptions(this.options.displayOptions);
            this._mouseControl.addTo(this._map);
        }
    };
    VelocityLayer.prototype._clearAndRestart = function () {
        if (this._context)
            this._context.clearRect(0, 0, 3000, 3000);
        if (this._windy)
            this._startWindy();
    };
    VelocityLayer.prototype._clearWind = function () {
        if (this._windy)
            this._windy.stop();
        if (this._context)
            this._context.clearRect(0, 0, 3000, 3000);
    };
    VelocityLayer.prototype._destroyWind = function () {
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
        this._map.removeLayer(this._canvasLayer);
    };
    return VelocityLayer;
}());
exports.default = VelocityLayer;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var layer = /** @class */ (function () {
    function layer(mapBound, canvasBound) {
        this.canvasBound = canvasBound;
        this.mapBound = mapBound;
    }
    /**
     * Find geocoordinate from canvas point
     * @param x
     * @param y
     * return [lng, lat]
     */
    layer.prototype.canvasToMap = function (x, y) {
        var mapLonDelta = this.mapBound.east - this.mapBound.west;
        var worldMapRadius = (this.canvasBound.width / this.rad2deg(mapLonDelta)) * 360 / (2 * Math.PI);
        var mapOffsetY = (worldMapRadius / 2 * Math.log((1 + Math.sin(this.mapBound.south)) / (1 - Math.sin(this.mapBound.south))));
        var equatorY = this.canvasBound.height + mapOffsetY;
        var a = (equatorY - y) / worldMapRadius;
        var φ = 180 / Math.PI * (2 * Math.atan(Math.exp(a)) - Math.PI / 2);
        var λ = this.rad2deg(this.mapBound.west) + x / this.canvasBound.width * this.rad2deg(mapLonDelta);
        return [λ, φ];
    };
    ;
    layer.prototype.mercY = function (φ) {
        return Math.log(Math.tan(φ / 2 + Math.PI / 4));
    };
    ;
    /**
     * Project a point on the map
     * @param λ Longitude
     * @param φ Latitude
     * @return [x, y]
     */
    layer.prototype.mapToCanvas = function (λ, φ) {
        var ymin = this.mercY(this.mapBound.south);
        var ymax = this.mercY(this.mapBound.north);
        var xFactor = this.canvasBound.width / (this.mapBound.east - this.mapBound.west);
        var yFactor = this.canvasBound.height / (ymax - ymin);
        var y = this.mercY(this.deg2rad(φ));
        var x = (this.deg2rad(λ) - this.mapBound.west) * xFactor;
        y = (ymax - y) * yFactor;
        return [x, y];
    };
    ;
    layer.prototype.deg2rad = function (deg) {
        return deg * Math.PI / 180;
    };
    ;
    layer.prototype.rad2deg = function (rad) {
        return rad * 180 / Math.PI;
    };
    ;
    /**
     *
     * @param λ Longitude
     * @param φ Latitude
     * @param x
     * @param y
     * @return []
     */
    layer.prototype.distortion = function (λ, φ, x, y) {
        var τ = 2 * Math.PI;
        var H = Math.pow(10, -5.2);
        var hλ = λ < 0 ? H : -H;
        var hφ = φ < 0 ? H : -H;
        var pλ = this.mapToCanvas(λ + hλ, φ);
        var pφ = this.mapToCanvas(λ, φ + hφ);
        // Meridian scale factor (see Snyder, equation 4-3), where R = 1. This handles issue where length of 1º λ
        // changes depending on φ. Without this, there is a pinching effect at the poles.
        var k = Math.cos(φ / 360 * τ);
        return [
            (pλ[0] - x) / hλ / k,
            (pλ[1] - y) / hλ / k,
            (pφ[0] - x) / hφ,
            (pφ[1] - y) / hφ
        ];
    };
    /**
     * Calculate distortion of the wind vector caused by the shape of the projection at point (x, y). The wind
     * vector is modified in place and returned by this function.
     * @param λ
     * @param φ
     * @param x
     * @param y
     * @param scale scale factor
     * @param wind [u, v]
     * @return []
     */
    layer.prototype.distort = function (λ, φ, x, y, scale, wind) {
        var u = wind.u * scale;
        var v = wind.v * scale;
        var d = this.distortion(λ, φ, x, y);
        // Scale distortion vectors by u and v, then add.
        wind.u = d[0] * u + d[2] * v;
        wind.v = d[1] * u + d[3] * v;
        return wind;
    };
    return layer;
}());
exports.default = layer;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(14);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(16)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/typings-for-css-modules-loader/lib/index.js??ref--1-1!./leaflet-velocity.css", function() {
			var newContent = require("!!../node_modules/typings-for-css-modules-loader/lib/index.js??ref--1-1!./leaflet-velocity.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)(false);
// imports


// module
exports.push([module.i, "._3sfJzTX7087yiCW2g80IdO {\n  background-color: rgba(255, 255, 255, 0.7);\n  padding: 0 5px;\n  margin: 0 !important;\n  color: #333;\n  font: 11px/1.5 \"Helvetica Neue\", Arial, Helvetica, sans-serif;\n}\n", ""]);

// exports
exports.locals = {
	"leafletControlVelocity": "_3sfJzTX7087yiCW2g80IdO"
};

/***/ }),
/* 15 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			var styleTarget = fn.call(this, selector);
			// Special case to return head of iframe instead of iframe itself
			if (styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[selector] = styleTarget;
		}
		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(17);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 17 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgN2M2ZTRjOGZlNzE2OTFiM2QyODkiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhbnZhc0JvdW5kLnRzIiwid2VicGFjazovLy8uL3NyYy9tYXBCb3VuZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvd2luZHkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZlY3Rvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvTC5DYW52YXNMYXllci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvTC5Db250cm9sVmVsb2NpdHkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9wYXJ0aWNsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ3JpZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29sb3JTY2FsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYW5pbWF0aW9uQnVja2V0LnRzIiwid2VicGFjazovLy8uL3NyYy9MLlZlbG9jaXR5TGF5ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheWVyLnRzIiwid2VicGFjazovLy8uL3NyYy9sZWFmbGV0LXZlbG9jaXR5LmNzcz8xNGQzIiwid2VicGFjazovLy8uL3NyYy9sZWFmbGV0LXZlbG9jaXR5LmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL3VybHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVB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QyxLQUFLLENBQUMsRUFBRSxDQUFDLEVBQUMsU0FBUztRQUNuQyxJQUFJLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQVEsV0FBVztRQUNuQyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDcEIsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNaLENBQUM7UUFFRCxJQUFNLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUcsdUJBQXVCO1FBQzdDLElBQU0sRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBRyx3QkFBd0I7UUFFOUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFFLENBQUMsSUFBSSxFQUFFLElBQUUsQ0FBQyxJQUFJLEVBQUUsR0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLEVBQUUsR0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUN0RCxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzFDLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFFMUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUM7Z0JBQzFDLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzFDLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMs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QUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RDtBQUN2RDs7QUFFQSw2QkFBNkIsbUJBQW1COztBQUVoRDs7QUFFQTs7QUFFQTtBQUNBOzs7Ozs7OztBQzVXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsV0FBVyxFQUFFO0FBQ3JELHdDQUF3QyxXQUFXLEVBQUU7O0FBRXJEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0Esc0NBQXNDO0FBQ3RDLEdBQUc7QUFDSDtBQUNBLDhEQUE4RDtBQUM5RDs7QUFFQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0EiLCJmaWxlIjoibGVhZmxldC12ZWxvY2l0eS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDYpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDdjNmU0YzhmZTcxNjkxYjNkMjg5IiwiaW1wb3J0IFBhcnRpY3VsZSBmcm9tIFwiLi9wYXJ0aWNsZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYW52YXNCb3VuZCB7XG4gICAgcHVibGljIHhNaW46IG51bWJlcjtcbiAgICBwdWJsaWMgeU1pbjogbnVtYmVyO1xuICAgIHB1YmxpYyB4TWF4OiBudW1iZXI7XG4gICAgcHVibGljIHlNYXg6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yICh4TWluOiBudW1iZXIsIHlNaW46IG51bWJlciwgeE1heDogbnVtYmVyLCB5TWF4OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy54TWluID0geE1pbjtcbiAgICAgICAgdGhpcy55TWluID0geU1pbjtcbiAgICAgICAgdGhpcy54TWF4ID0geE1heDtcbiAgICAgICAgdGhpcy55TWF4ID0geU1heDtcbiAgICB9XG5cbiAgICBnZXQgd2lkdGggKCkgOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy54TWF4IC0gdGhpcy54TWluO1xuICAgIH1cblxuICAgIGdldCBoZWlnaHQgKCkgOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy55TWF4IC0gdGhpcy55TWluO1xuICAgIH1cblxuICAgIGdldFJhbmRvbVBhcnRpY3VsZShtYXhBZ2U6IG51bWJlcik6IFBhcnRpY3VsZSAge1xuICAgICAgICBjb25zdCB4ID0gTWF0aC5yb3VuZChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLndpZHRoKSArIHRoaXMueE1pbik7XG4gICAgICAgIGNvbnN0IHkgPSBNYXRoLnJvdW5kKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMuaGVpZ2h0KSArIHRoaXMueU1pbik7XG4gICAgICAgIHJldHVybiBuZXcgUGFydGljdWxlKHgsIHksIG1heEFnZSk7XG4gICAgfVxuXG4gICAgcmVzZXRQYXJ0aWN1bGUocDogUGFydGljdWxlKTogUGFydGljdWxlIHtcbiAgICAgICAgY29uc3QgeCA9IE1hdGgucm91bmQoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy53aWR0aCkgKyB0aGlzLnhNaW4pO1xuICAgICAgICBjb25zdCB5ID0gTWF0aC5yb3VuZChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLmhlaWdodCkgKyB0aGlzLnlNaW4pO1xuICAgICAgICBwLnJlc2V0KHgsIHkpO1xuICAgICAgICByZXR1cm4gcDtcbiAgICB9XG59XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jYW52YXNCb3VuZC50cyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hcEJvdW5kIHtcbiAgICBwdWJsaWMgc291dGg6IG51bWJlcjtcbiAgICBwdWJsaWMgbm9ydGg6IG51bWJlcjtcbiAgICBwdWJsaWMgZWFzdDogbnVtYmVyO1xuICAgIHB1YmxpYyB3ZXN0OiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvciAobm9ydGg6IG51bWJlciwgZWFzdDogbnVtYmVyLCBzb3V0aDogbnVtYmVyLCB3ZXN0OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5ub3J0aCA9IG5vcnRoICogTWF0aC5QSSAvIDE4MDtcbiAgICAgICAgdGhpcy5lYXN0ID0gZWFzdCAqIE1hdGguUEkgLyAxODA7XG4gICAgICAgIHRoaXMuc291dGggPSBzb3V0aCAqIE1hdGguUEkgLyAxODA7XG4gICAgICAgIHRoaXMud2VzdCA9IHdlc3QgKiBNYXRoLlBJIC8gMTgwO1xuICAgIH1cblxuICAgIGdldCB3aWR0aCAoKSA6IG51bWJlciB7XG4gICAgICAgIHJldHVybiAoNzIwICsgdGhpcy5lYXN0IC0gdGhpcy53ZXN0KSAlIDM2MDtcbiAgICB9XG5cbiAgICBnZXQgaGVpZ2h0ICgpIDogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuICgzNjAgKyB0aGlzLm5vcnRoIC0gdGhpcy5zb3V0aCkgJSAxODA7XG4gICAgfVxuXG4gICAgXG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbWFwQm91bmQudHMiLCJpbXBvcnQgTWFwQm91bmQgZnJvbSBcIi4vbWFwQm91bmRcIjtcclxuaW1wb3J0IFZlY3RvciBmcm9tIFwiLi92ZWN0b3JcIjtcclxuaW1wb3J0IEdyaWQgZnJvbSBcIi4vZ3JpZFwiO1xyXG5pbXBvcnQgQ29sb3JTY2FsZSBmcm9tIFwiLi9jb2xvclNjYWxlXCI7XHJcbmltcG9ydCBDYW52YXNCb3VuZCBmcm9tIFwiLi9jYW52YXNCb3VuZFwiO1xyXG5pbXBvcnQgUGFydGljdWxlIGZyb20gXCIuL3BhcnRpY2xlXCI7XHJcbmltcG9ydCBBbmltYXRpb25CdWNrZXQgZnJvbSBcIi4vYW5pbWF0aW9uQnVja2V0XCI7XHJcbmltcG9ydCBMYXllciBmcm9tIFwiLi9sYXllclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2luZHkge1xyXG5cclxuICBwcml2YXRlIGdyaWQ6IGFueTtcclxuICBwcml2YXRlIM67MDogbnVtYmVyO1xyXG4gIHByaXZhdGUgz4YwOiBudW1iZXI7XHJcbiAgcHJpdmF0ZSDOlM67OiBudW1iZXI7XHJcbiAgcHJpdmF0ZSDOlM+GOiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBuaTogbnVtYmVyO1xyXG4gIHByaXZhdGUgbmo6IG51bWJlcjtcclxuICBwcml2YXRlIGNhbnZhczogYW55ID0gbnVsbDtcclxuICBwcml2YXRlIGNvbG9yU2NhbGU6IENvbG9yU2NhbGU7XHJcbiAgcHJpdmF0ZSB2ZWxvY2l0eVNjYWxlOiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBwYXJ0aWN1bGVNdWx0aXBsaWVyID0gMSAvIDMwMDtcclxuICBwcml2YXRlIHBhcnRpY2xlQWdlOiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBwYXJ0aWN1bGVMaW5lV2lkdGg6IG51bWJlcjtcclxuICBwcml2YXRlIGF1dG9Db2xvclJhbmdlID0gZmFsc2U7XHJcblxyXG4gIHByaXZhdGUgbGF5ZXI6IExheWVyO1xyXG4gIHByaXZhdGUgcGFydGljdWxlczogUGFydGljdWxlW10gPSBbXTtcclxuICBwcml2YXRlIGFuaW1hdGlvbkJ1Y2tldDogQW5pbWF0aW9uQnVja2V0O1xyXG4gIHByaXZhdGUgY29udGV4dDJEOiBhbnk7XHJcbiAgcHJpdmF0ZSBhbmltYXRpb25Mb29wOiBhbnkgPSBudWxsO1xyXG4gIHByaXZhdGUgZnJhbWVUaW1lOiBudW1iZXI7XHJcbiAgcHJpdmF0ZSB0aGVuID0gMDtcclxuXHJcblxyXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnM6IGFueSkge1xyXG4gICAgdGhpcy5jYW52YXMgPSBvcHRpb25zLmNhbnZhcztcclxuICAgIGlmIChvcHRpb25zLm1pblZlbG9jaXR5ID09PSB1bmRlZmluZWQgJiYgb3B0aW9ucy5tYXhWZWxvY2l0eSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRoaXMuYXV0b0NvbG9yUmFuZ2UgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jb2xvclNjYWxlID0gbmV3IENvbG9yU2NhbGUob3B0aW9ucy5taW5WZWxvY2l0eSB8fCAwLCBvcHRpb25zLm1heFZlbG9jaXR5IHx8IDEwLCBvcHRpb25zLmNvbG9yU2NhbGUpO1xyXG4gICAgdGhpcy52ZWxvY2l0eVNjYWxlID0gb3B0aW9ucy52ZWxvY2l0eVNjYWxlIHx8IDAuMDE7XHJcbiAgICB0aGlzLnBhcnRpY2xlQWdlID0gb3B0aW9ucy5wYXJ0aWNsZUFnZSB8fCA2NDtcclxuICAgIHRoaXMuc2V0RGF0YShvcHRpb25zLmRhdGEpO1xyXG4gICAgdGhpcy5wYXJ0aWN1bGVNdWx0aXBsaWVyID0gb3B0aW9ucy5wYXJ0aWNsZU11bHRpcGxpZXIgfHwgMSAvIDMwMDtcclxuICAgIHRoaXMucGFydGljdWxlTGluZVdpZHRoID0gb3B0aW9ucy5saW5lV2lkdGggfHwgMTtcclxuICAgIGNvbnN0IGZyYW1lUmF0ZSA9IG9wdGlvbnMuZnJhbWVSYXRlIHx8IDE1O1xyXG4gICAgdGhpcy5mcmFtZVRpbWUgPSAxMDAwIC8gZnJhbWVSYXRlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHBhcnRpY3VsZUNvdW50KCkge1xyXG4gICAgY29uc3QgcGFydGljdWxlUmVkdWN0aW9uID0gKCgvYW5kcm9pZHxibGFja2JlcnJ5fGllbW9iaWxlfGlwYWR8aXBob25lfGlwb2R8b3BlcmEgbWluaXx3ZWJvcy9pKS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpKSA/IChNYXRoLnBvdyh3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbywgMSAvIDMpIHx8IDEuNikgOiAxO1xyXG4gICAgcmV0dXJuIE1hdGgucm91bmQodGhpcy5sYXllci5jYW52YXNCb3VuZC53aWR0aCAqIHRoaXMubGF5ZXIuY2FudmFzQm91bmQuaGVpZ2h0ICogdGhpcy5wYXJ0aWN1bGVNdWx0aXBsaWVyKSAqIHBhcnRpY3VsZVJlZHVjdGlvbjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIExvYWQgZGF0YVxyXG4gICAqIEBwYXJhbSBkYXRhXHJcbiAgICovXHJcbiAgc2V0RGF0YShkYXRhOiBhbnlbXSkge1xyXG4gICAgbGV0IHVEYXRhOiBhbnkgPSBudWxsO1xyXG4gICAgbGV0IHZEYXRhOiBhbnkgPSBudWxsO1xyXG4gICAgY29uc3QgZ3JpZDogVmVjdG9yW10gPSBbXTtcclxuXHJcbiAgICBkYXRhLmZvckVhY2goKHJlY29yZCkgPT4ge1xyXG4gICAgICBzd2l0Y2ggKGAke3JlY29yZC5oZWFkZXIucGFyYW1ldGVyQ2F0ZWdvcnl9LCR7cmVjb3JkLmhlYWRlci5wYXJhbWV0ZXJOdW1iZXJ9YCkge1xyXG4gICAgICAgIGNhc2UgXCIxLDJcIjpcclxuICAgICAgICBjYXNlIFwiMiwyXCI6XHJcbiAgICAgICAgICB1RGF0YSA9IHJlY29yZDtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCIxLDNcIjpcclxuICAgICAgICBjYXNlIFwiMiwzXCI6XHJcbiAgICAgICAgICB2RGF0YSA9IHJlY29yZDtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGlmICghdURhdGEgfHwgIXZEYXRhKSB7XHJcbiAgICAgIGNvbnNvbGUud2FybihcIkRhdGEgYXJlIG5vdCBjb3JyZWN0IGZvcm1hdFwiKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHVEYXRhLmRhdGEuZm9yRWFjaCgodTogbnVtYmVyLCBpbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICAgIGdyaWQucHVzaChuZXcgVmVjdG9yKHUsIHZEYXRhLmRhdGFbaW5kZXhdKSk7XHJcbiAgICB9KVxyXG5cclxuICAgIC8vY29uc29sZS5sb2coJ3VEYXRhJywgdURhdGEpO1xyXG4gICAgLy9jb25zb2xlLmxvZygndkRhdGEnLCB2RGF0YSk7XHJcblxyXG4gICAgdGhpcy5ncmlkID0gbmV3IEdyaWQoXHJcbiAgICAgIGdyaWQsXHJcbiAgICAgIHVEYXRhLmhlYWRlci5sYTEsXHJcbiAgICAgIHVEYXRhLmhlYWRlci5sbzEsXHJcbiAgICAgIHVEYXRhLmhlYWRlci5keSxcclxuICAgICAgdURhdGEuaGVhZGVyLmR4LFxyXG4gICAgICB1RGF0YS5oZWFkZXIubnksXHJcbiAgICAgIHVEYXRhLmhlYWRlci5ueFxyXG4gICAgKTtcclxuXHJcbiAgICB0aGlzLs67MCA9IHVEYXRhLmhlYWRlci5sbzE7XHJcbiAgICB0aGlzLs+GMCA9IHVEYXRhLmhlYWRlci5sYTE7XHJcblxyXG4gICAgdGhpcy7OlM67ID0gdURhdGEuaGVhZGVyLmR4O1xyXG4gICAgdGhpcy7OlM+GID0gdURhdGEuaGVhZGVyLmR5XHJcblxyXG4gICAgdGhpcy5uaSA9IHVEYXRhLmhlYWRlci5ueDtcclxuICAgIHRoaXMubmogPSB1RGF0YS5oZWFkZXIubnk7IC8vIG51bWJlciBvZiBncmlkIHBvaW50cyBXLUUgYW5kIE4tUyAoZS5nLiwgMTQ0IHggNzMpXHJcblxyXG4gICAgdmFyIHAgPSAwO1xyXG4gICAgdmFyIGlzQ29udGludW91cyA9IE1hdGguZmxvb3IodGhpcy5uaSAqIHRoaXMuzpTOuykgPj0gMzYwO1xyXG5cclxuICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGhpcy5uajsgaisrKSB7XHJcbiAgICAgIHZhciByb3cgPSBbXTtcclxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm5pOyBpKyssIHArKykge1xyXG4gICAgICAgIHJvd1tpXSA9IHRoaXMuZ3JpZC5kYXRhW3BdO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChpc0NvbnRpbnVvdXMpIHtcclxuICAgICAgICAvLyBGb3Igd3JhcHBlZCBncmlkcywgZHVwbGljYXRlIGZpcnN0IGNvbHVtbiBhcyBsYXN0IGNvbHVtbiB0byBzaW1wbGlmeSBpbnRlcnBvbGF0aW9uIGxvZ2ljXHJcbiAgICAgICAgcm93LnB1c2gocm93WzBdKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmdyaWRbal0gPSByb3c7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuYXV0b0NvbG9yUmFuZ2UpIHtcclxuICAgICAgY29uc3QgbWluTWF4ID0gdGhpcy5ncmlkLnZhbHVlUmFuZ2U7XHJcbiAgICAgIHRoaXMuY29sb3JTY2FsZS5zZXRNaW5NYXgobWluTWF4WzBdLCBtaW5NYXhbMV0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZmxvb3JNb2QoYTogbnVtYmVyLCBuOiBudW1iZXIpIHtcclxuICAgIHJldHVybiBhIC0gbiAqIE1hdGguZmxvb3IoYSAvIG4pO1xyXG4gIH07XHJcblxyXG4gIGlzVmFsdWUoeDogYW55KSB7XHJcbiAgICByZXR1cm4geCAhPT0gbnVsbCAmJiB4ICE9PSB1bmRlZmluZWQ7XHJcbiAgfTtcclxuXHJcbiAgYmlsaW5lYXJJbnRlcnBvbGF0ZVZlY3Rvcih4OiBudW1iZXIsIHk6IG51bWJlciwgZzAwOiBhbnksIGcxMDogYW55LCBnMDE6IGFueSwgZzExOiBhbnkpIHtcclxuICAgIHZhciByeCA9ICgxIC0geCk7XHJcbiAgICB2YXIgcnkgPSAoMSAtIHkpO1xyXG4gICAgdmFyIGEgPSByeCAqIHJ5LCBiID0geCAqIHJ5LCBjID0gcnggKiB5LCBkID0geCAqIHk7XHJcbiAgICB2YXIgdSA9IGcwMC51ICogYSArIGcxMC51ICogYiArIGcwMS51ICogYyArIGcxMS51ICogZDtcclxuICAgIHZhciB2ID0gZzAwLnYgKiBhICsgZzEwLnYgKiBiICsgZzAxLnYgKiBjICsgZzExLnYgKiBkO1xyXG4gICAgcmV0dXJuIFt1LCB2LCBNYXRoLnNxcnQodSAqIHUgKyB2ICogdildO1xyXG4gIH07XHJcblxyXG4gIC8qIEdldCBpbnRlcnBvbGF0ZWQgZ3JpZCB2YWx1ZSBmcm9tIExvbi9MYXQgcG9zaXRpb25cclxuICAqIEBwYXJhbSDOuyB7RmxvYXR9IExvbmdpdHVkZVxyXG4gICogQHBhcmFtIM+GIHtGbG9hdH0gTGF0aXR1ZGVcclxuICAqIEByZXR1cm5zIHtPYmplY3R9XHJcbiAgKi9cclxuICBpbnRlcnBvbGF0ZSjOuzogbnVtYmVyLCDPhjogbnVtYmVyKTogYW55IHtcclxuICAgIGlmICghdGhpcy5ncmlkKSB7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgdmFyIGkgPSB0aGlzLmZsb29yTW9kKM67IC0gdGhpcy7OuzAsIDM2MCkgLyB0aGlzLs6Uzrs7IC8vIGNhbGN1bGF0ZSBsb25naXR1ZGUgaW5kZXggaW4gd3JhcHBlZCByYW5nZSBbMCwgMzYwKVxyXG4gICAgdmFyIGogPSAodGhpcy7PhjAgLSDPhikgLyB0aGlzLs6Uz4Y7IC8vIGNhbGN1bGF0ZSBsYXRpdHVkZSBpbmRleCBpbiBkaXJlY3Rpb24gKzkwIHRvIC05MFxyXG5cclxuICAgIHZhciBmaSA9IE1hdGguZmxvb3IoaSk7XHJcbiAgICB2YXIgY2kgPSBmaSArIDE7XHJcbiAgICB2YXIgZmogPSBNYXRoLmZsb29yKGopO1xyXG4gICAgdmFyIGNqID0gZmogKyAxO1xyXG4gICAgdmFyIHJvdyA9IHRoaXMuZ3JpZFtmal07Ly9Eb250IGtub3cgd2h5IGhlIGRvc2VudCBmb3VuZCBhbnkgcm93IEVSUlJST1JcclxuICAgIGlmIChyb3cpIHtcclxuICAgICAgdmFyIGcwMCA9IHJvd1tmaV07XHJcbiAgICAgIHZhciBnMTAgPSByb3dbY2ldO1xyXG4gICAgICBpZiAodGhpcy5pc1ZhbHVlKGcwMCkgJiYgdGhpcy5pc1ZhbHVlKGcxMCkgJiYgKHJvdyA9IHRoaXMuZ3JpZFtjal0pKSB7XHJcbiAgICAgICAgdmFyIGcwMSA9IHJvd1tmaV07XHJcbiAgICAgICAgdmFyIGcxMSA9IHJvd1tjaV07XHJcbiAgICAgICAgaWYgKHRoaXMuaXNWYWx1ZShnMDEpICYmIHRoaXMuaXNWYWx1ZShnMTEpKSB7XHJcbiAgICAgICAgICAvLyBBbGwgZm91ciBwb2ludHMgZm91bmQsIHNvIGludGVycG9sYXRlIHRoZSB2YWx1ZS5cclxuICAgICAgICAgIHJldHVybiB0aGlzLmJpbGluZWFySW50ZXJwb2xhdGVWZWN0b3IoaSAtIGZpLCBqIC0gZmosIGcwMCwgZzEwLCBnMDEsIGcxMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9O1xyXG5cclxuICBnZXRQYXJ0aWN1bGVXaW5kKHA6IFBhcnRpY3VsZSk6IFZlY3RvciB7XHJcbiAgICBjb25zdCBsbmdMYXQgPSB0aGlzLmxheWVyLmNhbnZhc1RvTWFwKHAueCwgcC55KTtcclxuICAgIGNvbnN0IHdpbmQgPSB0aGlzLmdyaWQuZ2V0KGxuZ0xhdFswXSwgbG5nTGF0WzFdKTtcclxuICAgIHAuaW50ZW5zaXR5ID0gd2luZC5pbnRlbnNpdHk7XHJcbiAgICBjb25zdCBtYXBBcmVhID0gdGhpcy5sYXllci5tYXBCb3VuZC5oZWlnaHQgKiB0aGlzLmxheWVyLm1hcEJvdW5kLndpZHRoO1xyXG4gICAgdmFyIHZlbG9jaXR5U2NhbGUgPSB0aGlzLnZlbG9jaXR5U2NhbGUgKiBNYXRoLnBvdyhtYXBBcmVhLCAwLjQpO1xyXG4gICAgdGhpcy5sYXllci5kaXN0b3J0KGxuZ0xhdFswXSwgbG5nTGF0WzFdLCBwLngsIHAueSwgdmVsb2NpdHlTY2FsZSwgd2luZCk7XHJcbiAgICByZXR1cm4gd2luZDtcclxuICB9XHJcblxyXG4gIHN0YXJ0KGxheWVyOiBMYXllcikge1xyXG5cclxuICAgIHRoaXMuY29udGV4dDJEID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG4gICAgdGhpcy5jb250ZXh0MkQubGluZVdpZHRoID0gdGhpcy5wYXJ0aWN1bGVMaW5lV2lkdGg7XHJcbiAgICB0aGlzLmNvbnRleHQyRC5maWxsU3R5bGUgPSBcInJnYmEoMCwgMCwgMCwgMC45NylcIjtcclxuICAgIHRoaXMuY29udGV4dDJELmdsb2JhbEFscGhhID0gMC42O1xyXG5cclxuICAgIHRoaXMubGF5ZXIgPSBsYXllcjtcclxuICAgIHRoaXMuYW5pbWF0aW9uQnVja2V0ID0gbmV3IEFuaW1hdGlvbkJ1Y2tldCh0aGlzLmNvbG9yU2NhbGUpO1xyXG5cclxuICAgIHRoaXMucGFydGljdWxlcy5zcGxpY2UoMCwgdGhpcy5wYXJ0aWN1bGVzLmxlbmd0aCk7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucGFydGljdWxlQ291bnQ7IGkrKykge1xyXG4gICAgICB0aGlzLnBhcnRpY3VsZXMucHVzaCh0aGlzLmxheWVyLmNhbnZhc0JvdW5kLmdldFJhbmRvbVBhcnRpY3VsZSh0aGlzLnBhcnRpY2xlQWdlKSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy50aGVuID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcblxyXG4gICAgdGhpcy5mcmFtZSgpO1xyXG4gIH1cclxuXHJcbiAgZnJhbWUoKSB7XHJcbiAgICB0aGlzLmFuaW1hdGlvbkxvb3AgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xyXG4gICAgICB0aGlzLmZyYW1lKClcclxuICAgIH0pO1xyXG4gICAgdmFyIG5vdyA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgdmFyIGRlbHRhID0gbm93IC0gdGhpcy50aGVuO1xyXG4gICAgaWYgKGRlbHRhID4gdGhpcy5mcmFtZVRpbWUpIHtcclxuICAgICAgdGhpcy50aGVuID0gbm93IC0gKGRlbHRhICUgdGhpcy5mcmFtZVRpbWUpO1xyXG4gICAgICB0aGlzLmV2b2x2ZSgpO1xyXG4gICAgICB0aGlzLmRyYXcoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGV2b2x2ZSgpIHtcclxuICAgIHRoaXMuYW5pbWF0aW9uQnVja2V0LmNsZWFyKCk7XHJcbiAgICB0aGlzLnBhcnRpY3VsZXMuZm9yRWFjaCgocDogUGFydGljdWxlKSA9PiB7XHJcbiAgICAgIHAuZ3JvdygpO1xyXG4gICAgICBpZiAocC5pc0RlYWQpIHtcclxuICAgICAgICB0aGlzLmxheWVyLmNhbnZhc0JvdW5kLnJlc2V0UGFydGljdWxlKHApO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IHdpbmQgPSB0aGlzLmdldFBhcnRpY3VsZVdpbmQocCk7XHJcbiAgICAgIHRoaXMuYW5pbWF0aW9uQnVja2V0LmFkZChwLCB3aW5kKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZHJhdygpIHtcclxuICAgIHRoaXMuY29udGV4dDJELmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9IFwiZGVzdGluYXRpb24taW5cIjtcclxuICAgIHRoaXMuY29udGV4dDJELmZpbGxSZWN0KFxyXG4gICAgICB0aGlzLmxheWVyLmNhbnZhc0JvdW5kLnhNaW4sXHJcbiAgICAgIHRoaXMubGF5ZXIuY2FudmFzQm91bmQueU1pbixcclxuICAgICAgdGhpcy5sYXllci5jYW52YXNCb3VuZC53aWR0aCxcclxuICAgICAgdGhpcy5sYXllci5jYW52YXNCb3VuZC5oZWlnaHRcclxuICAgICk7XHJcbiAgICAvLyBGYWRlIGV4aXN0aW5nIHBhcnRpY2xlIHRyYWlscy5cclxuICAgIHRoaXMuY29udGV4dDJELmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9IFwibGlnaHRlclwiO1xyXG4gICAgdGhpcy5jb250ZXh0MkQuZ2xvYmFsQWxwaGEgPSAwLjk7XHJcblxyXG4gICAgdGhpcy5hbmltYXRpb25CdWNrZXQuZHJhdyh0aGlzLmNvbnRleHQyRCk7XHJcbiAgfVxyXG5cclxuICBzdG9wKCkge1xyXG4gICAgdGhpcy5wYXJ0aWN1bGVzLnNwbGljZSgwLCB0aGlzLnBhcnRpY3VsZXMubGVuZ3RoKTtcclxuICAgIHRoaXMuYW5pbWF0aW9uQnVja2V0LmNsZWFyKCk7XHJcbiAgICBpZiAodGhpcy5hbmltYXRpb25Mb29wKSB7XHJcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLmFuaW1hdGlvbkxvb3ApO1xyXG4gICAgICB0aGlzLmFuaW1hdGlvbkxvb3AgPSBudWxsO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3dpbmR5LnRzIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmVjdG9yIHtcbiAgICBwdWJsaWMgdTogbnVtYmVyO1xuICAgIHB1YmxpYyB2OiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvciAodT86IG51bWJlciwgdj86IG51bWJlcikge1xuICAgICAgICB0aGlzLnUgPSB1IHx8IDA7XG4gICAgICAgIHRoaXMudiA9IHYgfHwgMDtcbiAgICB9XG5cbiAgICBnZXQgaW50ZW5zaXR5ICgpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydCh0aGlzLnUgKiB0aGlzLnUgKyB0aGlzLnYgKiB0aGlzLnYpO1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmVjdG9yLnRzIiwiZGVjbGFyZSB2YXIgTDogYW55O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYW52YXNMYXllciB7XG5cdHByaXZhdGUgX21hcDogYW55O1xuXHRwcml2YXRlIF9jYW52YXM6IGFueTtcblx0cHJpdmF0ZSBfZnJhbWU6IGFueTtcblx0cHJpdmF0ZSBfZGVsZWdhdGU6IGFueTtcblx0cHJpdmF0ZSB0aWxlczogYW55O1xuXG5cdGluaXRpYWxpemUgKG9wdGlvbnM6IGFueSkge1xuXHRcdHRoaXMuX21hcCAgICA9IG51bGw7XG5cdFx0dGhpcy5fY2FudmFzID0gbnVsbDtcblx0XHR0aGlzLl9mcmFtZSAgPSBudWxsO1xuXHRcdHRoaXMuX2RlbGVnYXRlID0gbnVsbDtcblx0XHRMLlV0aWwuc2V0T3B0aW9ucyh0aGlzLCBvcHRpb25zKTtcblx0fVxuXG5cdGRlbGVnYXRlIChkZWw6IGFueSk6IENhbnZhc0xheWVyIHtcblx0XHR0aGlzLl9kZWxlZ2F0ZSA9IGRlbDtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdG5lZWRSZWRyYXcgKCkge1xuXHRcdGlmICghdGhpcy5fZnJhbWUpIHtcblx0XHRcdHRoaXMuX2ZyYW1lID0gTC5VdGlsLnJlcXVlc3RBbmltRnJhbWUodGhpcy5kcmF3TGF5ZXIsIHRoaXMpO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHRfb25MYXllckRpZFJlc2l6ZSAocmVzaXplRXZlbnQ6IGFueSkge1xuXHRcdHRoaXMuX2NhbnZhcy53aWR0aCA9IHJlc2l6ZUV2ZW50Lm5ld1NpemUueDtcblx0XHR0aGlzLl9jYW52YXMuaGVpZ2h0ID0gcmVzaXplRXZlbnQubmV3U2l6ZS55O1xuXHR9XG5cblx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdF9vbkxheWVyRGlkTW92ZSAoKSB7XG5cdFx0dmFyIHRvcExlZnQgPSB0aGlzLl9tYXAuY29udGFpbmVyUG9pbnRUb0xheWVyUG9pbnQoWzAsIDBdKTtcblx0XHRMLkRvbVV0aWwuc2V0UG9zaXRpb24odGhpcy5fY2FudmFzLCB0b3BMZWZ0KTtcblx0XHR0aGlzLmRyYXdMYXllcigpO1xuXHR9XG5cblx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdGdldEV2ZW50cyAoKSB7XG5cdFx0dmFyIGV2ZW50cyA9IHtcblx0XHRcdHJlc2l6ZTogdGhpcy5fb25MYXllckRpZFJlc2l6ZSxcblx0XHRcdG1vdmVlbmQ6IHRoaXMuX29uTGF5ZXJEaWRNb3ZlLFxuXHRcdFx0em9vbWFuaW06IDxhbnk+dW5kZWZpbmVkXG5cdFx0fTtcblx0XHRpZiAodGhpcy5fbWFwLm9wdGlvbnMuem9vbUFuaW1hdGlvbiAmJiBMLkJyb3dzZXIuYW55M2QpIHtcblx0XHRcdGV2ZW50cy56b29tYW5pbSA9ICB0aGlzLl9hbmltYXRlWm9vbTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZXZlbnRzO1xuXHR9XG5cblx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdG9uQWRkIChtYXA6IGFueSkge1xuXHRcdHRoaXMuX21hcCA9IG1hcDtcblx0XHR0aGlzLl9jYW52YXMgPSBMLkRvbVV0aWwuY3JlYXRlKCdjYW52YXMnLCAnbGVhZmxldC1sYXllcicpO1xuXHRcdHRoaXMudGlsZXMgPSB7fTtcblxuXHRcdHZhciBzaXplID0gdGhpcy5fbWFwLmdldFNpemUoKTtcblx0XHR0aGlzLl9jYW52YXMud2lkdGggPSBzaXplLng7XG5cdFx0dGhpcy5fY2FudmFzLmhlaWdodCA9IHNpemUueTtcblxuXHRcdHZhciBhbmltYXRlZCA9IHRoaXMuX21hcC5vcHRpb25zLnpvb21BbmltYXRpb24gJiYgTC5Ccm93c2VyLmFueTNkO1xuXHRcdEwuRG9tVXRpbC5hZGRDbGFzcyh0aGlzLl9jYW52YXMsICdsZWFmbGV0LXpvb20tJyArIChhbmltYXRlZCA/ICdhbmltYXRlZCcgOiAnaGlkZScpKTtcblxuXG5cdFx0bWFwLl9wYW5lcy5vdmVybGF5UGFuZS5hcHBlbmRDaGlsZCh0aGlzLl9jYW52YXMpO1xuXHRcdG1hcC5vbih0aGlzLmdldEV2ZW50cygpLHRoaXMpO1xuXG5cdFx0dmFyIGRlbCA9IHRoaXMuX2RlbGVnYXRlIHx8IHRoaXM7XG5cdFx0ZGVsLm9uTGF5ZXJEaWRNb3VudCAmJiBkZWwub25MYXllckRpZE1vdW50KCk7IC8vIC0tIGNhbGxiYWNrXG5cdFx0dGhpcy5uZWVkUmVkcmF3KCk7XG5cblx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cdFx0c2V0VGltZW91dChmdW5jdGlvbigpe1xuXHRcdFx0c2VsZi5fb25MYXllckRpZE1vdmUoKTtcblx0XHR9LCAwKTtcblx0fVxuXG5cdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHRvblJlbW92ZSAobWFwOiBhbnkpIHtcblx0XHR2YXIgZGVsID0gdGhpcy5fZGVsZWdhdGUgfHwgdGhpcztcblx0XHRkZWwub25MYXllcldpbGxVbm1vdW50ICYmIGRlbC5vbkxheWVyV2lsbFVubW91bnQoKTsgLy8gLS0gY2FsbGJhY2tcblxuXG5cdFx0bWFwLmdldFBhbmVzKCkub3ZlcmxheVBhbmUucmVtb3ZlQ2hpbGQodGhpcy5fY2FudmFzKTtcblxuXHRcdG1hcC5vZmYodGhpcy5nZXRFdmVudHMoKSx0aGlzKTtcblxuXHRcdHRoaXMuX2NhbnZhcyA9IG51bGw7XG5cblx0fVxuXG5cdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdGFkZFRvIChtYXA6IGFueSkge1xuXHRcdG1hcC5hZGRMYXllcih0aGlzKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdExhdExvblRvTWVyY2F0b3IgKGxhdGxvbjogTC5MYXRMbmcpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0eDogbGF0bG9uLmxuZyAqIDYzNzgxMzcgKiBNYXRoLlBJIC8gMTgwLFxuXHRcdFx0eTogTWF0aC5sb2coTWF0aC50YW4oKDkwICsgbGF0bG9uLmxhdCkgKiBNYXRoLlBJIC8gMzYwKSkgKiA2Mzc4MTM3XG5cdFx0fTtcblx0fVxuXG5cdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdGRyYXdMYXllciAoKSB7XG5cdFx0Ly8gLS0gdG9kbyBtYWtlIHRoZSB2aWV3SW5mbyBwcm9wZXJ0aWVzICBmbGF0IG9iamVjdHMuXG5cdFx0dmFyIHNpemUgICA9IHRoaXMuX21hcC5nZXRTaXplKCk7XG5cdFx0dmFyIGJvdW5kcyA9IHRoaXMuX21hcC5nZXRCb3VuZHMoKTtcblx0XHR2YXIgem9vbSAgID0gdGhpcy5fbWFwLmdldFpvb20oKTtcblxuXHRcdHZhciBjZW50ZXIgPSB0aGlzLkxhdExvblRvTWVyY2F0b3IodGhpcy5fbWFwLmdldENlbnRlcigpKTtcblx0XHR2YXIgY29ybmVyID0gdGhpcy5MYXRMb25Ub01lcmNhdG9yKHRoaXMuX21hcC5jb250YWluZXJQb2ludFRvTGF0TG5nKHRoaXMuX21hcC5nZXRTaXplKCkpKTtcblxuXHRcdHZhciBkZWwgPSB0aGlzLl9kZWxlZ2F0ZSB8fCB0aGlzO1xuXHRcdGRlbC5vbkRyYXdMYXllciAmJiBkZWwub25EcmF3TGF5ZXIoIHtcblx0XHRcdGxheWVyIDogdGhpcyxcblx0XHRcdGNhbnZhczogdGhpcy5fY2FudmFzLFxuXHRcdFx0Ym91bmRzOiBib3VuZHMsXG5cdFx0XHRzaXplOiBzaXplLFxuXHRcdFx0em9vbTogem9vbSxcblx0XHRcdGNlbnRlciA6IGNlbnRlcixcblx0XHRcdGNvcm5lciA6IGNvcm5lclxuXHRcdH0pO1xuXHRcdHRoaXMuX2ZyYW1lID0gbnVsbDtcblx0fVxuXG5cdC8vIC0tIEwuRG9tVXRpbC5zZXRUcmFuc2Zvcm0gZnJvbSBsZWFmbGV0IDEuMC4wIHRvIHdvcmsgb24gMC4wLjdcblx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0X3NldFRyYW5zZm9ybSAoZWw6IGFueSwgb2Zmc2V0OiBhbnksIHNjYWxlOiBhbnkpIHtcblx0XHR2YXIgcG9zID0gb2Zmc2V0IHx8IG5ldyBMLlBvaW50KDAsIDApO1xuXG5cdFx0ZWwuc3R5bGVbTC5Eb21VdGlsLlRSQU5TRk9STV0gPVxuXHRcdFx0KEwuQnJvd3Nlci5pZTNkID9cblx0XHRcdCd0cmFuc2xhdGUoJyArIHBvcy54ICsgJ3B4LCcgKyBwb3MueSArICdweCknIDpcblx0XHRcdCd0cmFuc2xhdGUzZCgnICsgcG9zLnggKyAncHgsJyArIHBvcy55ICsgJ3B4LDApJykgK1xuXHRcdFx0KHNjYWxlID8gJyBzY2FsZSgnICsgc2NhbGUgKyAnKScgOiAnJyk7XG5cdH1cblxuXHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHRfYW5pbWF0ZVpvb20gKGU6IGFueSkge1xuXHRcdHZhciBzY2FsZSA9IHRoaXMuX21hcC5nZXRab29tU2NhbGUoZS56b29tKTtcblx0XHQvLyAtLSBkaWZmZXJlbnQgY2FsYyBvZiBvZmZzZXQgaW4gbGVhZmxldCAxLjAuMCBhbmQgMC4wLjcgdGhhbmtzIGZvciAxLjAuMC1yYzIgY2FsYyBAamR1Z2dhbjFcblx0XHR2YXIgb2Zmc2V0ID0gTC5MYXllciA/IHRoaXMuX21hcC5fbGF0TG5nVG9OZXdMYXllclBvaW50KHRoaXMuX21hcC5nZXRCb3VuZHMoKS5nZXROb3J0aFdlc3QoKSwgZS56b29tLCBlLmNlbnRlcikgOlxuXHRcdFx0dGhpcy5fbWFwLl9nZXRDZW50ZXJPZmZzZXQoZS5jZW50ZXIpLl9tdWx0aXBseUJ5KC1zY2FsZSkuc3VidHJhY3QodGhpcy5fbWFwLl9nZXRNYXBQYW5lUG9zKCkpO1xuXG5cdFx0TC5Eb21VdGlsLnNldFRyYW5zZm9ybSh0aGlzLl9jYW52YXMsIG9mZnNldCwgc2NhbGUpO1xuXHR9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvTC5DYW52YXNMYXllci50cyIsImltcG9ydCBXaW5keSBmcm9tICcuL3dpbmR5JztcbmRlY2xhcmUgdmFyIEw6IGFueTtcbmltcG9ydCAqIGFzIHZlbG9jaXR5Y3NzIGZyb20gJy4vbGVhZmxldC12ZWxvY2l0eS5jc3MnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZlbG9jaXR5Q29udHJvbCB7XG4gIHByaXZhdGUgb3B0aW9uczogYW55O1xuICBwcml2YXRlIF93aW5keTogV2luZHkgPSBudWxsO1xuICBwcml2YXRlIF9tYXA6IGFueSA9IG51bGw7XG4gIHByaXZhdGUgX2RlbGVnYXRlOiBhbnk7XG4gIHByaXZhdGUgX2NvbnRhaW5lcjogYW55ID0gbnVsbDtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICBwb3NpdGlvbjogJ2JvdHRvbWxlZnQnLFxuICAgICAgZW1wdHlTdHJpbmc6ICdVbmF2YWlsYWJsZScsXG4gICAgICAvLyBDb3VsZCBiZSBhbnkgY29tYmluYXRpb24gb2YgJ2JlYXJpbmcnIChhbmdsZSB0b3dhcmQgd2hpY2ggdGhlIGZsb3cgZ29lcykgb3IgJ21ldGVvJyAoYW5nbGUgZnJvbSB3aGljaCB0aGUgZmxvdyBjb21lcylcbiAgICAgIC8vIGFuZCAnQ1cnIChhbmdsZSB2YWx1ZSBpbmNyZWFzZXMgY2xvY2std2lzZSkgb3IgJ0NDVycgKGFuZ2xlIHZhbHVlIGluY3JlYXNlcyBjb3VudGVyIGNsb2NrLXdpc2UpXG4gICAgICBhbmdsZUNvbnZlbnRpb246ICdiZWFyaW5nQ0NXJyxcblx0ICAgIC8vIENvdWxkIGJlICdtL3MnIGZvciBtZXRlciBwZXIgc2Vjb25kLCAnay9oJyBmb3Iga2lsb21ldGVyIHBlciBob3VyIG9yICdrdCcgZm9yIGtub3RzXG5cdCAgICBzcGVlZFVuaXQ6ICdtL3MnXG4gICAgfTtcbiAgfVxuXG4gIHNldFdpbmR5KF93aW5keTphbnkpe1xuICAgIGlmKCF0aGlzLl93aW5keSAmJiBfd2luZHkpIHRoaXMuX3dpbmR5ID0gX3dpbmR5O1xuICB9XG5cbiAgc2V0T3B0aW9ucyhvcHRpb25zOmFueSl7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgfVxuXG4gIG9uQWRkKG1hcDogYW55KSB7XG4gICAgdGhpcy5fbWFwID0gbWFwO1xuICAgIHRoaXMuX2NvbnRhaW5lciA9IEwuRG9tVXRpbC5jcmVhdGUoJ2RpdicsIHZlbG9jaXR5Y3NzLmxlYWZsZXRDb250cm9sVmVsb2NpdHkpO1xuICAgIEwuRG9tRXZlbnQuZGlzYWJsZUNsaWNrUHJvcGFnYXRpb24odGhpcy5fY29udGFpbmVyKTtcbiAgICB0aGlzLl9tYXAub24oJ21vdXNlbW92ZScsIChldjogYW55KSA9PiB7XG4gICAgICAvL2NvbnNvbGUubG9nKFwiTW91c2UgdXAgZXZlbnRcIilcbiAgICAgIHRoaXMuZHJhd1dpbmRTcGVlZChldik7XG4gICAgfSk7XG4gICAgdGhpcy5fY29udGFpbmVyLmlubmVySFRNTCA9IHRoaXMub3B0aW9ucy5lbXB0eVN0cmluZztcbiAgICByZXR1cm4gdGhpcy5fY29udGFpbmVyO1xuICB9XG5cbiAgb25SZW1vdmUobWFwOiBhbnkpIHtcbiAgICB0aGlzLl9tYXAub2ZmKCdtb3VzZW1vdmUnLCAoZXY6IGFueSkgPT4ge1xuICAgICAgdGhpcy5kcmF3V2luZFNwZWVkKGV2KTtcbiAgICB9LCB0aGlzKTtcbiAgfVxuXG4gIHZlY3RvclRvU3BlZWQodU1zOiBudW1iZXIsIHZNczogbnVtYmVyLCB1bml0OiBzdHJpbmcpIHtcbiAgICB2YXIgdmVsb2NpdHlBYnMgPSBNYXRoLnNxcnQoTWF0aC5wb3codU1zLCAyKSArIE1hdGgucG93KHZNcywgMikpO1xuICAgIC8vIERlZmF1bHQgaXMgbS9zXG4gICAgaWYgKHVuaXQgPT09ICdrL2gnKSB7XG4gICAgICByZXR1cm4gdGhpcy5tZXRlclNlYzJraWxvbWV0ZXJIb3VyKHZlbG9jaXR5QWJzKTtcbiAgICB9IGVsc2UgaWYgKHVuaXQgPT09ICdrdCcpIHtcbiAgICAgIHJldHVybiB0aGlzLm1ldGVyU2VjMktub3RzKHZlbG9jaXR5QWJzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHZlbG9jaXR5QWJzO1xuICAgIH1cbiAgfVxuXG4gIHZlY3RvclRvRGVncmVlcyh1TXM6IG51bWJlciwgdk1zOiBudW1iZXIsIGFuZ2xlQ29udmVudGlvbjogc3RyaW5nKSB7XG4gICAgLy8gRGVmYXVsdCBhbmdsZSBjb252ZW50aW9uIGlzIENXXG4gICAgaWYgKGFuZ2xlQ29udmVudGlvbi5lbmRzV2l0aCgnQ0NXJykpIHtcbiAgICAgIC8vIHZNcyBjb21lcyBvdXQgdXBzaWRlLWRvd24uLlxuICAgICAgdk1zID0gdk1zID4gMCA/IHZNcyA9IC12TXMgOiBNYXRoLmFicyh2TXMpO1xuICAgIH1cbiAgICB2YXIgdmVsb2NpdHlBYnMgPSBNYXRoLnNxcnQoTWF0aC5wb3codU1zLCAyKSArIE1hdGgucG93KHZNcywgMikpO1xuXG4gICAgdmFyIHZlbG9jaXR5RGlyID0gTWF0aC5hdGFuMih1TXMgLyB2ZWxvY2l0eUFicywgdk1zIC8gdmVsb2NpdHlBYnMpO1xuICAgIHZhciB2ZWxvY2l0eURpclRvRGVncmVlcyA9IHZlbG9jaXR5RGlyICogMTgwIC8gTWF0aC5QSSArIDE4MDtcblxuICAgIGlmIChhbmdsZUNvbnZlbnRpb24gPT09ICdiZWFyaW5nQ1cnIHx8IGFuZ2xlQ29udmVudGlvbiA9PT0gJ21ldGVvQ0NXJykge1xuICAgICAgdmVsb2NpdHlEaXJUb0RlZ3JlZXMgKz0gMTgwO1xuICAgICAgaWYgKHZlbG9jaXR5RGlyVG9EZWdyZWVzID49IDM2MCkgdmVsb2NpdHlEaXJUb0RlZ3JlZXMgLT0gMzYwO1xuICAgIH1cblxuICAgIHJldHVybiB2ZWxvY2l0eURpclRvRGVncmVlcztcbiAgfVxuXG4gIG1ldGVyU2VjMktub3RzKG1ldGVyczogbnVtYmVyKSB7XG4gICAgcmV0dXJuIG1ldGVycyAvIDAuNTE0XG4gIH1cblxuICBtZXRlclNlYzJraWxvbWV0ZXJIb3VyKG1ldGVyczogbnVtYmVyKSB7XG4gICAgcmV0dXJuIG1ldGVycyAqIDMuNlxuICB9XG5cbiAgZHJhd1dpbmRTcGVlZChldjogYW55KSB7XG4gICAgY29uc3QgcG9zID0gdGhpcy5fbWFwLmNvbnRhaW5lclBvaW50VG9MYXRMbmcoTC5wb2ludChldi5jb250YWluZXJQb2ludC54LCBldi5jb250YWluZXJQb2ludC55KSk7XG4gICAgdmFyIGdyaWRWYWx1ZSA9IHRoaXMuX3dpbmR5LmludGVycG9sYXRlKHBvcy5sbmcsIHBvcy5sYXQpO1xuICAgIHZhciB0ZW1wbGF0ZSA9IFwiXCI7XG4gICAgaWYgKGdyaWRWYWx1ZSAmJiAhaXNOYU4oZ3JpZFZhbHVlWzBdKSAmJiAhaXNOYU4oZ3JpZFZhbHVlWzFdKSAmJiBncmlkVmFsdWVbMl0pIHtcbiAgICAgIHRlbXBsYXRlID0gXCI8c3Ryb25nPiAgRGlyZWN0aW9uOiA8L3N0cm9uZz5cIiArXG4gICAgICAgIHRoaXMudmVjdG9yVG9EZWdyZWVzKGdyaWRWYWx1ZVswXSwgZ3JpZFZhbHVlWzFdLCB0aGlzLm9wdGlvbnMuYW5nbGVDb252ZW50aW9uKS50b0ZpeGVkKDMpICtcbiAgICAgICAgXCLCsFwiICsgXCIsIDx0aGlzc3Ryb25nPiAgU3BlZWQ6IDwvc3Ryb25nPlwiICtcbiAgICAgICAgdGhpcy52ZWN0b3JUb1NwZWVkKGdyaWRWYWx1ZVswXSwgZ3JpZFZhbHVlWzFdLCB0aGlzLm9wdGlvbnMuc3BlZWRVbml0KS50b0ZpeGVkKDEpKyBgICR7dGhpcy5vcHRpb25zLnNwZWVkVW5pdH1gO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGlmKHRoaXMub3B0aW9ucy5lbXB0eVN0cmluZylcbiAgICAgICAgdGVtcGxhdGUgPSB0aGlzLm9wdGlvbnMuZW1wdHlTdHJpbmc7XG4gICAgfVxuICAgIHRoaXMuX2NvbnRhaW5lci5pbm5lckhUTUwgPSB0ZW1wbGF0ZTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0wuQ29udHJvbFZlbG9jaXR5LnRzIiwiaW1wb3J0IENhbnZhc0JvdW5kIGZyb20gXCIuL2NhbnZhc0JvdW5kXCI7XHJcbmltcG9ydCBNYXBCb3VuZCBmcm9tIFwiLi9tYXBCb3VuZFwiO1xyXG5pbXBvcnQgV2luZHkgZnJvbSBcIi4vd2luZHlcIjtcclxuaW1wb3J0IENhbnZhc0xheWVyIGZyb20gXCIuL0wuQ2FudmFzTGF5ZXJcIjtcclxuaW1wb3J0IFZlbG9jaXR5TGF5ZXIgZnJvbSBcIi4vTC5WZWxvY2l0eUxheWVyXCI7XHJcbmltcG9ydCBWZWxvY2l0eUNvbnRyb2wgZnJvbSAnLi9MLkNvbnRyb2xWZWxvY2l0eSc7XHJcblxyXG4oPGFueT53aW5kb3cpLkNhbnZhc0JvdW5kID0gQ2FudmFzQm91bmQ7XHJcbig8YW55PndpbmRvdykuTWFwQm91bmQgPSBNYXBCb3VuZDtcclxuKDxhbnk+d2luZG93KS5XaW5keSA9IFdpbmR5O1xyXG5cclxuZGVjbGFyZSB2YXIgTDogYW55O1xyXG5cclxuTC5DYW52YXNMYXllciA9IChMLkxheWVyID8gTC5MYXllciA6IEwuQ2xhc3MpLmV4dGVuZChuZXcgQ2FudmFzTGF5ZXIoKSk7XHJcbkwuY2FudmFzTGF5ZXIgPSBmdW5jdGlvbiAoKSB7XHJcblx0cmV0dXJuIG5ldyBMLkNhbnZhc0xheWVyKCk7XHJcbn07XHJcblxyXG5MLkNvbnRyb2xWZWxvY2l0eSA9IChMLkNvbnRyb2wpLmV4dGVuZChuZXcgVmVsb2NpdHlDb250cm9sKCkpO1xyXG5MLmNvbnRyb2xWZWxvY2l0eSA9IGZ1bmN0aW9uKCkge1xyXG4gIHJldHVybiBuZXcgTC5Db250cm9sVmVsb2NpdHkoKTtcclxufTtcclxuXHJcbkwuVmVsb2NpdHlMYXllciA9IChMLkxheWVyID8gTC5MYXllciA6IEwuQ2xhc3MpLmV4dGVuZChuZXcgVmVsb2NpdHlMYXllcigpKTtcclxuTC52ZWxvY2l0eUxheWVyID0gZnVuY3Rpb24ob3B0aW9uczogYW55KSB7XHJcblx0cmV0dXJuIG5ldyBMLlZlbG9jaXR5TGF5ZXIob3B0aW9ucyk7XHJcbn07XHJcblxyXG5jb25zb2xlLmxvZyhMKVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXgudHMiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQYXJ0aWN1bGUge1xuICAgIHB1YmxpYyB4OiBudW1iZXI7XG4gICAgcHVibGljIHk6IG51bWJlcjtcbiAgICBwdWJsaWMgYWdlOiBudW1iZXI7XG4gICAgcHVibGljIG1heEFnZTogbnVtYmVyO1xuICAgIHB1YmxpYyB4dDogbnVtYmVyO1xuICAgIHB1YmxpYyB5dDogbnVtYmVyO1xuICAgIHB1YmxpYyBpbnRlbnNpdHk6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKHg6IG51bWJlciwgeTogbnVtYmVyLCBtYXhBZ2U6IG51bWJlcikge1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgICAgICB0aGlzLmFnZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG1heEFnZSk7XG4gICAgICAgIHRoaXMubWF4QWdlID0gbWF4QWdlO1xuICAgIH1cblxuICAgIHJlc2V0KHg6IG51bWJlciwgeTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgICAgIHRoaXMuYWdlID0gMDtcbiAgICB9XG5cbiAgICBnZXQgaXNEZWFkICgpIDogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmFnZSA+IHRoaXMubWF4QWdlO1xuICAgIH1cblxuICAgIGdyb3cgKCkge1xuICAgICAgICB0aGlzLmFnZSsrO1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcGFydGljbGUudHMiLCJpbXBvcnQgVmVjdG9yIGZyb20gXCIuL3ZlY3RvclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHcmlkIHtcbiAgICBwcml2YXRlIGRhdGE6IFZlY3RvcltdO1xuICAgIHByaXZhdGUgz4YwOiBudW1iZXI7XG4gICAgcHJpdmF0ZSDOuzA6IG51bWJlcjtcbiAgICBwcml2YXRlIM6Uzrs6IG51bWJlcjtcbiAgICBwcml2YXRlIM6Uz4Y6IG51bWJlcjtcbiAgICBwcml2YXRlIGhlaWdodDogbnVtYmVyO1xuICAgIHByaXZhdGUgd2lkdGg6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yIChkYXRhOiBWZWN0b3JbXSwgz4YwOiBudW1iZXIsIM67MDogbnVtYmVyLCDOlM+GOiBudW1iZXIsIM6Uzrs6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIsIHdpZHRoOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICAgICAgdGhpcy7PhjAgPSDPhjA7XG4gICAgICAgIHRoaXMuzrswID0gzrswO1xuICAgICAgICB0aGlzLs6UzrsgPSDOlM67O1xuICAgICAgICB0aGlzLs6Uz4YgPSDOlM+GO1xuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgIH1cblxuICAgIGdldCB2YWx1ZVJhbmdlICgpIDogbnVtYmVyW10ge1xuICAgICAgICBpZiAoIXRoaXMuZGF0YS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiBbMCwgMF07XG4gICAgICAgIH1cbiAgICAgICAgbGV0IG1pbiA9IHRoaXMuZGF0YVswXS5pbnRlbnNpdHk7XG4gICAgICAgIGxldCBtYXggPSB0aGlzLmRhdGFbMF0uaW50ZW5zaXR5O1xuICAgICAgICB0aGlzLmRhdGEuZm9yRWFjaCgodmFsdWU6IFZlY3RvcikgPT4ge1xuICAgICAgICAgICAgbWluID0gTWF0aC5taW4obWluLCB2YWx1ZS5pbnRlbnNpdHkpO1xuICAgICAgICAgICAgbWF4ID0gTWF0aC5tYXgobWF4LCB2YWx1ZS5pbnRlbnNpdHkpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIFttaW4sIG1heF07XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldCB2ZWN0b3IgYXQgYW55IHBvaW50XG4gICAgICogQHBhcmFtIM67IExvbmdpdHVkZVxuICAgICAqIEBwYXJhbSDPhiBMYXRpdHVkZVxuICAgICAqL1xuICAgIGdldCAozrs6IG51bWJlciwgz4Y6IG51bWJlcik6IFZlY3RvciB7XG4gICAgICAgIGNvbnN0IGbOuyA9IHRoaXMuZmxvb3JNb2QozrsgLSB0aGlzLs67MCwgMzYwKSAvIHRoaXMuzpTOuzsgIC8vIGNhbGN1bGF0ZSBsb25naXR1ZGUgaW5kZXggaW4gd3JhcHBlZCByYW5nZSBbMCwgMzYwKVxuICAgICAgICBjb25zdCBmz4YgPSAodGhpcy7PhjAgLSDPhikgLyB0aGlzLs6Uz4Y7ICAgICAgICAgICAgICAgICAvLyBjYWxjdWxhdGUgbGF0aXR1ZGUgaW5kZXggaW4gZGlyZWN0aW9uICs5MCB0byAtOTBcblxuICAgICAgICBjb25zdCBpzrsgPSBNYXRoLmZsb29yKGbOuykgLy8gY29sIG5cbiAgICAgICAgbGV0IGrOuyA9IGnOuyArIDE7ICAgICAgICAvLyBjb2wgbisxXG4gICAgICAgIGlmIChqzrsgPj0gdGhpcy53aWR0aCkge1xuICAgICAgICAgICAgas67ID0gdGhpcy7OuzA7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgac+GID0gTWF0aC5mbG9vcihmz4YpIC8vIGxpbmUgbVxuICAgICAgICBsZXQgas+GID0gac+GICsgMTsgICAgICAgIC8vIGxpbmUgbSsxXG4gICAgICAgIGlmIChqz4YgPj0gdGhpcy5oZWlnaHQpIHtcbiAgICAgICAgICAgIGrPhiA9IGnPhjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHbOuyA9IGbOuyAtIGnOuzsgICAvLyBjb2wgdmFyaWF0aW9uIFswLi4xXVxuICAgICAgICBjb25zdCB2z4YgPSBmz4YgLSBpz4Y7ICAgLy8gbGluZSB2YXJpYXRpb24gWzAuLjFdXG5cbiAgICAgICAgaWYgKGnOuz49MCAmJiBpz4Y+PTAgJiYgac67PHRoaXMud2lkdGggJiYgac+GPHRoaXMuaGVpZ2h0KSB7XG4gICAgICAgICAgbGV0IGcwMCA9IHRoaXMuZGF0YVtpzrsgKyBpz4YgKiB0aGlzLndpZHRoXTtcbiAgICAgICAgICBsZXQgZzEwID0gdGhpcy5kYXRhW2rOuyArIGnPhiAqIHRoaXMud2lkdGhdO1xuXG4gICAgICAgICAgaWYgKHRoaXMuaXNWYWx1ZShnMDApICYmIHRoaXMuaXNWYWx1ZShnMTApKXtcbiAgICAgICAgICAgIGxldCBnMDEgPSB0aGlzLmRhdGFbac67ICsgas+GICogdGhpcy53aWR0aF07XG4gICAgICAgICAgICBsZXQgZzExID0gdGhpcy5kYXRhW2rOuyArIGrPhiAqIHRoaXMud2lkdGhdO1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNWYWx1ZShnMDEpICYmIHRoaXMuaXNWYWx1ZShnMTEpKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb24gKFxuICAgICAgICAgICAgICAgICAgds67LFxuICAgICAgICAgICAgICAgICAgds+GLFxuICAgICAgICAgICAgICAgICAgZzAwLCAvL2wwYzBcbiAgICAgICAgICAgICAgICAgIGcxMCwgLy9sMGMxXG4gICAgICAgICAgICAgICAgICBnMDEsIC8vbDFjMFxuICAgICAgICAgICAgICAgICAgZzExICAvL2wxY2xcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcigwLDApO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW50ZXJwb2xhdGUgdmFsdWVcbiAgICAgKiBAcGFyYW0geCB2YXJpYXRpb24gYmV0d2VlbiBnMCogYW5kIGcxKlxuICAgICAqIEBwYXJhbSB5IHZhcmlhdGlvbiBiZXR3ZWVuIGcqMCBkYW5zIGcqMVxuICAgICAqIEBwYXJhbSBnMDAgcG9pbnQgYXQgY29sXzAgYW5kIGxpbmVfMFxuICAgICAqIEBwYXJhbSBnMTAgcG9pbnQgYXQgY29sXzEgYW5kIGxpbmVfMFxuICAgICAqIEBwYXJhbSBnMDEgcG9pbnQgYXQgY29sXzAgYW5kIGxpbmVfMVxuICAgICAqIEBwYXJhbSBnMTEgcG9pbnQgYXQgY29sXzEgYW5kIGxpbmVfMVxuICAgICAqIEByZXR1cm4gaW50ZXJwb2xhdGVkIHZlY3RvclxuICAgICAqL1xuICAgIGludGVycG9sYXRpb24gKHg6IG51bWJlciwgeTogbnVtYmVyLCBnMDA6IFZlY3RvciwgZzEwOlZlY3RvciwgZzAxOiBWZWN0b3IsIGcxMTogVmVjdG9yKTogVmVjdG9yIHtcbiAgICAgICAgdmFyIHJ4ID0gKDEgLSB4KTtcbiAgICAgICAgdmFyIHJ5ID0gKDEgLSB5KTtcbiAgICAgICAgdmFyIGEgPSByeCAqIHJ5LFxuICAgICAgICAgICAgYiA9IHggKiByeSxcbiAgICAgICAgICAgIGMgPSByeCAqIHksXG4gICAgICAgICAgICBkID0geCAqIHk7XG4gICAgICAgIHZhciB1ID0gZzAwLnUgKiBhICsgZzEwLnUgKiBiICsgZzAxLnUgKiBjICsgZzExLnUgKiBkO1xuICAgICAgICB2YXIgdiA9IGcwMC52ICogYSArIGcxMC52ICogYiArIGcwMS52ICogYyArIGcxMS52ICogZDtcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IodSwgdik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3VzdG9tIG1vZHVsb1xuXHQgKiBAcmV0dXJucyB7bnVtYmVyfSByZXR1cm5zIHJlbWFpbmRlciBvZiBmbG9vcmVkIGRpdmlzaW9uLCBpLmUuLCBmbG9vcihhIC8gbikuIFVzZWZ1bCBmb3IgY29uc2lzdGVudCBtb2R1bG9cblx0ICogICAgICAgICAgb2YgbmVnYXRpdmUgbnVtYmVycy4gU2VlIGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvTW9kdWxvX29wZXJhdGlvbi5cblx0ICovXG5cdGZsb29yTW9kIChhOiBudW1iZXIsIG46IG51bWJlcik6IG51bWJlciB7XG5cdFx0cmV0dXJuIGEgLSBuICogTWF0aC5mbG9vcihhIC8gbik7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIERldGVjdCBpZiB4IGlzIGEgdmFsdWVcblx0ICogQHJldHVybnMge2Jvb2xlYW59IHRydWUgaWYgdGhlIHNwZWNpZmllZCB2YWx1ZSBpcyBub3QgbnVsbCBhbmQgbm90IHVuZGVmaW5lZC5cblx0ICovXG5cdGlzVmFsdWUgKHg6IGFueSk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB4ICE9PSBudWxsICYmIHggIT09IHVuZGVmaW5lZDtcblx0fTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9ncmlkLnRzIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29sb3JTY2FsZSB7XG4gICAgcHJpdmF0ZSBzY2FsZTogc3RyaW5nW10gPSBbXG4gICAgXCJyZ2IoMzYsMTA0LCAxODApXCIsXG5cdFx0XCJyZ2IoNjAsMTU3LCAxOTQpXCIsXG5cdFx0XCJyZ2IoMTI4LDIwNSwxOTMgKVwiLFxuXHRcdFwicmdiKDE1MSwyMTgsMTY4IClcIixcblx0XHRcInJnYigxOTgsMjMxLDE4MSlcIixcblx0XHRcInJnYigyMzgsMjQ3LDIxNylcIixcblx0XHRcInJnYigyNTUsMjM4LDE1OSlcIixcblx0XHRcInJnYigyNTIsMjE3LDEyNSlcIixcblx0XHRcInJnYigyNTUsMTgyLDEwMClcIixcblx0XHRcInJnYigyNTIsMTUwLDc1KVwiLFxuXHRcdFwicmdiKDI1MCwxMTIsNTIpXCIsXG5cdFx0XCJyZ2IoMjQ1LDY0LDMyKVwiLFxuXHRcdFwicmdiKDIzNyw0NSwyOClcIixcblx0XHRcInJnYigyMjAsMjQsMzIpXCIsXG5cdFx0XCJyZ2IoMTgwLDAsMzUpXCJcbiAgICBdXG4gICAgcHJpdmF0ZSBtaW5WYWx1ZTogbnVtYmVyO1xuICAgIHByaXZhdGUgbWF4VmFsdWU6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKG1pblZhbHVlOiBudW1iZXIsIG1heFZhbHVlOiBudW1iZXIsIHNjYWxlPzogc3RyaW5nW10pIHtcbiAgICAgICAgdGhpcy5zZXRNaW5NYXgobWluVmFsdWUsIG1heFZhbHVlKTtcbiAgICAgICAgaWYgKChzY2FsZSBpbnN0YW5jZW9mIEFycmF5KSAmJiBzY2FsZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuc2NhbGUgPSBzY2FsZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldE1pbk1heCAobWluVmFsdWU6IG51bWJlciwgbWF4VmFsdWU6IG51bWJlcikge1xuICAgICAgICB0aGlzLm1pblZhbHVlID0gbWluVmFsdWU7XG4gICAgICAgIHRoaXMubWF4VmFsdWUgPSBtYXhWYWx1ZTtcbiAgICB9XG5cbiAgICBnZXQgc2l6ZSAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNjYWxlLmxlbmd0aDtcbiAgICB9XG5cbiAgICBnZXRDb2xvckluZGV4KHZhbHVlOiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICBpZiAodmFsdWUgPD0gdGhpcy5taW5WYWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZhbHVlID49IHRoaXMubWF4VmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNjYWxlLmxlbmd0aC0xO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5zY2FsZS5sZW5ndGggKiAodmFsdWUgLSB0aGlzLm1pblZhbHVlKSAvICh0aGlzLm1heFZhbHVlIC0gdGhpcy5taW5WYWx1ZSk7XG4gICAgICAgIGlmIChpbmRleCA8MCkge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGluZGV4PiB0aGlzLnNjYWxlLmxlbmd0aC0xKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zY2FsZS5sZW5ndGgtMTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihpbmRleCk7XG4gICAgfVxuXG4gICAgY29sb3JBdChpbmRleDogbnVtYmVyKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NhbGVbaW5kZXhdO1xuICAgIH1cblxuICAgIGdldENvbG9yKHZhbHVlOiBudW1iZXIpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5zY2FsZVt0aGlzLmdldENvbG9ySW5kZXgodmFsdWUpXTtcbiAgICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb2xvclNjYWxlLnRzIiwiaW1wb3J0IENvbG9yU2NhbGUgZnJvbSBcIi4vY29sb3JTY2FsZVwiO1xuaW1wb3J0IFBhcnRpY3VsZSBmcm9tIFwiLi9wYXJ0aWNsZVwiO1xuaW1wb3J0IFZlY3RvciBmcm9tIFwiLi92ZWN0b3JcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQW5pbWF0aW9uQnVja2V0IHtcbiAgICBwcml2YXRlIGNvbG9yU2NhbGU6IENvbG9yU2NhbGU7XG4gICAgcHJpdmF0ZSBidWNrZXRzOiBQYXJ0aWN1bGVbXVtdID0gW107XG5cbiAgICBjb25zdHJ1Y3RvciAoY29sb3JTY2FsZTogQ29sb3JTY2FsZSkge1xuICAgICAgICB0aGlzLmNvbG9yU2NhbGUgPSBjb2xvclNjYWxlO1xuICAgICAgICBmb3IgKGxldCBpPTA7IGk8Y29sb3JTY2FsZS5zaXplOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuYnVja2V0cy5wdXNoKFtdKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNsZWFyKCkge1xuICAgICAgICB0aGlzLmJ1Y2tldHMuZm9yRWFjaCgocGFydGljdWxlU2V0OiBQYXJ0aWN1bGVbXSkgPT4ge1xuICAgICAgICAgICAgcGFydGljdWxlU2V0LnNwbGljZSgwLCBwYXJ0aWN1bGVTZXQubGVuZ3RoKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGFkZCAocDogUGFydGljdWxlLCB2OiBWZWN0b3IpIHtcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmNvbG9yU2NhbGUuZ2V0Q29sb3JJbmRleChwLmludGVuc2l0eSlcbiAgICAgICAgaWYgKGluZGV4PDAgfHwgaW5kZXg+PSB0aGlzLmJ1Y2tldHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhpbmRleCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgcC54dCA9IHAueCArIHYudTtcbiAgICAgICAgcC55dCA9IHAueSArIHYudjtcbiAgICAgICAgdGhpcy5idWNrZXRzW2luZGV4XS5wdXNoKHApO1xuICAgIH1cblxuICAgIGRyYXcgKGNvbnRleHQyRDogYW55KSB7XG4gICAgICAgIHRoaXMuYnVja2V0cy5mb3JFYWNoKChidWNrZXQ6IFBhcnRpY3VsZVtdLCBpOiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgIGlmIChidWNrZXQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGNvbnRleHQyRC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICBjb250ZXh0MkQuc3Ryb2tlU3R5bGUgPSB0aGlzLmNvbG9yU2NhbGUuY29sb3JBdChpKTtcbiAgICAgICAgICAgICAgICBidWNrZXQuZm9yRWFjaChmdW5jdGlvbihwYXJ0aWNsZSkge1xuICAgICAgICAgICAgICAgICAgICBjb250ZXh0MkQubW92ZVRvKHBhcnRpY2xlLngsIHBhcnRpY2xlLnkpO1xuICAgICAgICAgICAgICAgICAgICBjb250ZXh0MkQubGluZVRvKHBhcnRpY2xlLnh0LCBwYXJ0aWNsZS55dCk7XG4gICAgICAgICAgICAgICAgICAgIHBhcnRpY2xlLnggPSBwYXJ0aWNsZS54dDtcbiAgICAgICAgICAgICAgICAgICAgcGFydGljbGUueSA9IHBhcnRpY2xlLnl0O1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGNvbnRleHQyRC5zdHJva2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hbmltYXRpb25CdWNrZXQudHMiLCJpbXBvcnQgV2luZHkgZnJvbSAnLi93aW5keSc7XHJcbmltcG9ydCBDYW52YXNCb3VuZCBmcm9tICcuL2NhbnZhc0JvdW5kJ1xyXG5pbXBvcnQgTWFwQm91bmQgZnJvbSAnLi9tYXBCb3VuZCc7XHJcbmltcG9ydCBMYXllciBmcm9tIFwiLi9sYXllclwiO1xyXG5pbXBvcnQgQ2FudmFzTGF5ZXIgZnJvbSAnLi9MLkNhbnZhc0xheWVyJztcclxuaW1wb3J0IFZlbG9jaXR5Q29udHJvbCBmcm9tICcuL0wuQ29udHJvbFZlbG9jaXR5J1xyXG5kZWNsYXJlIHZhciBMOiBhbnk7XHJcblxyXG5cclxuY29uc3QgTF9DYW52YXNMYXllciA9IChMLkxheWVyID8gTC5MYXllciA6IEwuQ2xhc3MpLmV4dGVuZChuZXcgQ2FudmFzTGF5ZXIoKSk7XHJcbmNvbnN0IExfY2FudmFzTGF5ZXIgPSBmdW5jdGlvbigpIHtcclxuICByZXR1cm4gbmV3IExfQ2FudmFzTGF5ZXIoKTtcclxufTtcclxuXHJcbmNvbnN0IExfQ29udHJvbFZlbG9jaXR5ID0gKEwuQ29udHJvbCkuZXh0ZW5kKG5ldyBWZWxvY2l0eUNvbnRyb2wpO1xyXG5jb25zdCBMX2NvbnRyb2xWZWxvY2l0eSA9IGZ1bmN0aW9uKCkge1xyXG4gIHJldHVybiBuZXcgTF9Db250cm9sVmVsb2NpdHkoKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZlbG9jaXR5TGF5ZXIge1xyXG5cclxuICBwcml2YXRlIG9wdGlvbnM6IGFueTtcclxuICBwcml2YXRlIF9tYXA6IGFueSA9IG51bGw7XHJcbiAgcHJpdmF0ZSBfY2FudmFzTGF5ZXI6IGFueSA9IG51bGw7XHJcbiAgcHJpdmF0ZSBfd2luZHk6IFdpbmR5ID0gbnVsbDtcclxuICBwcml2YXRlIF9jb250ZXh0OiBhbnkgPSBudWxsO1xyXG4gIHByaXZhdGUgX2Rpc3BsYXlUaW1lb3V0OiBudW1iZXIgPSAwO1xyXG4gIHByaXZhdGUgX21vdXNlQ29udHJvbDogYW55ICA9IG51bGw7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5vcHRpb25zID0ge1xyXG4gICAgICBkaXNwbGF5VmFsdWVzOiB0cnVlLFxyXG4gICAgICBkaXNwbGF5T3B0aW9uczoge1xyXG4gICAgICAgIHZlbG9jaXR5VHlwZTogJ1ZlbG9jaXR5JyxcclxuICAgICAgICBwb3NpdGlvbjogJ2JvdHRvbWxlZnQnLFxyXG4gICAgICAgIGVtcHR5U3RyaW5nOiAnTm8gdmVsb2NpdHkgZGF0YScsXHJcblx0XHRcdFx0YW5nbGVDb252ZW50aW9uOiAnYmVhcmluZ0NDVycsXHJcblx0XHRcdFx0c3BlZWRVbml0OiAnbS9zJ1xyXG4gICAgICB9LFxyXG4gICAgICBtYXhWZWxvY2l0eTogMTAsIC8vIHVzZWQgdG8gYWxpZ24gY29sb3Igc2NhbGVcclxuICAgICAgY29sb3JTY2FsZTogbnVsbCxcclxuICAgICAgZGF0YTogbnVsbFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGluaXRpYWxpemUob3B0aW9uczogYW55KSB7XHJcbiAgICBMLlV0aWwuc2V0T3B0aW9ucyh0aGlzLCBvcHRpb25zKTtcclxuICB9XHJcblxyXG4gIG9uQWRkKG1hcDogYW55KSB7XHJcbiAgICAvLyBjcmVhdGUgY2FudmFzLCBhZGQgb3ZlcmxheSBjb250cm9sXHJcbiAgICB0aGlzLl9jYW52YXNMYXllciA9IExfY2FudmFzTGF5ZXIoKS5kZWxlZ2F0ZSh0aGlzKTtcclxuICAgIHRoaXMuX2NhbnZhc0xheWVyLmFkZFRvKG1hcCk7XHJcblxyXG4gICAgdGhpcy5fbWFwID0gbWFwO1xyXG4gIH1cclxuXHJcbiAgb25SZW1vdmUobWFwOiBhbnkpIHtcclxuICAgIHRoaXMuX2Rlc3Ryb3lXaW5kKCk7XHJcbiAgfVxyXG5cclxuICBzZXREYXRhKGRhdGE6IGFueSkge1xyXG4gICAgdGhpcy5vcHRpb25zLmRhdGEgPSBkYXRhO1xyXG5cclxuICAgIGlmICh0aGlzLl93aW5keSkge1xyXG4gICAgICB0aGlzLl93aW5keS5zZXREYXRhKGRhdGEpO1xyXG4gICAgICB0aGlzLl9jbGVhckFuZFJlc3RhcnQoKTtcclxuICAgIH1cclxuXHJcbiAgICAoPGFueT50aGlzKS5maXJlKCdsb2FkJyk7XHJcbiAgfVxyXG5cclxuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBQUklWQVRFIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG4gIG9uRHJhd0xheWVyKG92ZXJsYXk6IGFueSwgcGFyYW1zOiBhbnkpIHtcclxuICAgIHZhciBzZWxmID0gdGhpcztcclxuXHJcbiAgICBpZiAoIXRoaXMuX3dpbmR5KSB7XHJcbiAgICAgIHRoaXMuX2luaXRXaW5keSgpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF0aGlzLm9wdGlvbnMuZGF0YSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuX2Rpc3BsYXlUaW1lb3V0KSBjbGVhclRpbWVvdXQoc2VsZi5fZGlzcGxheVRpbWVvdXQpO1xyXG5cclxuICAgIHRoaXMuX2Rpc3BsYXlUaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgc2VsZi5fc3RhcnRXaW5keSgpO1xyXG4gICAgfSwgMTUwKTsgLy8gc2hvd2luZyB2ZWxvY2l0eSBpcyBkZWxheWVkXHJcbiAgfVxyXG5cclxuXHJcblxyXG4gIF9zdGFydFdpbmR5KCkge1xyXG4gICAgdmFyIGJvdW5kcyA9IHRoaXMuX21hcC5nZXRCb3VuZHMoKTtcclxuICAgIHZhciBzaXplID0gdGhpcy5fbWFwLmdldFNpemUoKTtcclxuXHJcbiAgICAvLyBib3VuZHMsIHdpZHRoLCBoZWlnaHQsIGV4dGVudFxyXG4gICAgdGhpcy5fd2luZHkuc3RhcnQoXHJcbiAgICAgIG5ldyBMYXllcihcclxuICAgICAgICBuZXcgTWFwQm91bmQoXHJcbiAgICAgICAgICBib3VuZHMuX25vcnRoRWFzdC5sYXQsXHJcbiAgICAgICAgICBib3VuZHMuX25vcnRoRWFzdC5sbmcsXHJcbiAgICAgICAgICBib3VuZHMuX3NvdXRoV2VzdC5sYXQsXHJcbiAgICAgICAgICBib3VuZHMuX3NvdXRoV2VzdC5sbmdcclxuICAgICAgICApLFxyXG4gICAgICAgIG5ldyBDYW52YXNCb3VuZCgwLCAwLCBzaXplLngsIHNpemUueSlcclxuICAgICAgKVxyXG5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBfaW5pdFdpbmR5KCkge1xyXG5cclxuICAgIC8vIHdpbmR5IG9iamVjdCwgY29weSBvcHRpb25zXHJcbiAgICBjb25zdCBvcHRpb25zID0gKDxhbnk+T2JqZWN0KS5hc3NpZ24oeyBjYW52YXM6IHRoaXMuX2NhbnZhc0xheWVyLl9jYW52YXMgfSwgdGhpcy5vcHRpb25zKTtcclxuICAgIHRoaXMuX3dpbmR5ID0gbmV3IFdpbmR5KG9wdGlvbnMpO1xyXG5cclxuICAgIC8vIHByZXBhcmUgY29udGV4dCBnbG9iYWwgdmFyLCBzdGFydCBkcmF3aW5nXHJcbiAgICB0aGlzLl9jb250ZXh0ID0gdGhpcy5fY2FudmFzTGF5ZXIuX2NhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgdGhpcy5fY2FudmFzTGF5ZXIuX2NhbnZhcy5jbGFzc0xpc3QuYWRkKFwidmVsb2NpdHktb3ZlcmxheVwiKTtcclxuICAgICg8YW55PnRoaXMpLm9uRHJhd0xheWVyKCk7XHJcblxyXG4gICAgdGhpcy5fbWFwLm9uKCdkcmFnc3RhcnQnLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMuX3dpbmR5LnN0b3AoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuX21hcC5vbignZHJhZ2VuZCcsICgpID0+IHtcclxuICAgICAgdGhpcy5fY2xlYXJBbmRSZXN0YXJ0KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLl9tYXAub24oJ3pvb21zdGFydCcsICgpID0+IHtcclxuICAgICAgdGhpcy5fd2luZHkuc3RvcCgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5fbWFwLm9uKCd6b29tZW5kJywgKCkgPT4ge1xyXG4gICAgICB0aGlzLl9jbGVhckFuZFJlc3RhcnQoKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5fbWFwLm9uKCdyZXNpemUnLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMuX2NsZWFyV2luZCgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5faW5pdE1vdXNlSGFuZGxlcigpO1xyXG4gIH1cclxuXHJcbiAgX2luaXRNb3VzZUhhbmRsZXIoKSB7XHJcbiAgICBpZiAoIXRoaXMuX21vdXNlQ29udHJvbCAmJiB0aGlzLm9wdGlvbnMuZGlzcGxheVZhbHVlcykge1xyXG4gICAgICB2YXIgb3B0aW9ucyA9IHRoaXMub3B0aW9ucy5kaXNwbGF5T3B0aW9ucyB8fCB7fTtcclxuICAgICAgb3B0aW9uc1snbGVhZmxldFZlbG9jaXR5J10gPSB0aGlzO1xyXG4gICAgICB0aGlzLl9tb3VzZUNvbnRyb2wgPSBMX2NvbnRyb2xWZWxvY2l0eSgpO1xyXG4gICAgICB0aGlzLl9tb3VzZUNvbnRyb2wuc2V0V2luZHkodGhpcy5fd2luZHkpO1xyXG4gICAgICB0aGlzLl9tb3VzZUNvbnRyb2wuc2V0T3B0aW9ucyh0aGlzLm9wdGlvbnMuZGlzcGxheU9wdGlvbnMpO1xyXG4gICAgICB0aGlzLl9tb3VzZUNvbnRyb2wuYWRkVG8odGhpcy5fbWFwKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIF9jbGVhckFuZFJlc3RhcnQoKSB7XHJcbiAgICBpZiAodGhpcy5fY29udGV4dCkgdGhpcy5fY29udGV4dC5jbGVhclJlY3QoMCwgMCwgMzAwMCwgMzAwMCk7XHJcbiAgICBpZiAodGhpcy5fd2luZHkpIHRoaXMuX3N0YXJ0V2luZHkoKTtcclxuICB9XHJcblxyXG4gIF9jbGVhcldpbmQoKSB7XHJcbiAgICBpZiAodGhpcy5fd2luZHkpIHRoaXMuX3dpbmR5LnN0b3AoKTtcclxuICAgIGlmICh0aGlzLl9jb250ZXh0KSB0aGlzLl9jb250ZXh0LmNsZWFyUmVjdCgwLCAwLCAzMDAwLCAzMDAwKTtcclxuICB9XHJcblxyXG4gIF9kZXN0cm95V2luZCgpIHtcclxuICAgIGlmICh0aGlzLl9kaXNwbGF5VGltZW91dClcclxuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX2Rpc3BsYXlUaW1lb3V0KTtcclxuICAgIGlmICh0aGlzLl93aW5keSlcclxuICAgICAgdGhpcy5fd2luZHkuc3RvcCgpO1xyXG4gICAgaWYgKHRoaXMuX2NvbnRleHQpXHJcbiAgICAgIHRoaXMuX2NvbnRleHQuY2xlYXJSZWN0KDAsIDAsIDMwMDAsIDMwMDApO1xyXG4gICAgaWYgKHRoaXMuX21vdXNlQ29udHJvbClcclxuICAgICAgdGhpcy5fbWFwLnJlbW92ZUNvbnRyb2wodGhpcy5fbW91c2VDb250cm9sKTtcclxuICAgIHRoaXMuX21vdXNlQ29udHJvbCA9IG51bGw7XHJcbiAgICB0aGlzLl93aW5keSA9IG51bGw7XHJcbiAgICB0aGlzLl9tYXAucmVtb3ZlTGF5ZXIodGhpcy5fY2FudmFzTGF5ZXIpO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvTC5WZWxvY2l0eUxheWVyLnRzIiwiaW1wb3J0IE1hcEJvdW5kIGZyb20gXCIuL21hcEJvdW5kXCI7XG5pbXBvcnQgQ2FudmFzQm91bmQgZnJvbSBcIi4vY2FudmFzQm91bmRcIjtcbmltcG9ydCBWZWN0b3IgZnJvbSBcIi4vdmVjdG9yXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGxheWVyIHtcblxuICAgIHB1YmxpYyBtYXBCb3VuZDogTWFwQm91bmQ7XG4gICAgcHVibGljIGNhbnZhc0JvdW5kOiBDYW52YXNCb3VuZDtcblxuICAgIGNvbnN0cnVjdG9yKG1hcEJvdW5kOiBNYXBCb3VuZCwgY2FudmFzQm91bmQ6IENhbnZhc0JvdW5kKSB7XG4gICAgICAgIHRoaXMuY2FudmFzQm91bmQgPSBjYW52YXNCb3VuZDtcbiAgICAgICAgdGhpcy5tYXBCb3VuZCA9IG1hcEJvdW5kO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEZpbmQgZ2VvY29vcmRpbmF0ZSBmcm9tIGNhbnZhcyBwb2ludFxuICAgICAqIEBwYXJhbSB4IFxuICAgICAqIEBwYXJhbSB5IFxuICAgICAqIHJldHVybiBbbG5nLCBsYXRdXG4gICAgICovXG4gICAgY2FudmFzVG9NYXAgKHg6IG51bWJlciwgeTogbnVtYmVyKTogbnVtYmVyW10ge1xuICAgICAgICBjb25zdCBtYXBMb25EZWx0YSA9IHRoaXMubWFwQm91bmQuZWFzdCAtIHRoaXMubWFwQm91bmQud2VzdDtcbiAgICAgICAgY29uc3Qgd29ybGRNYXBSYWRpdXMgPSAodGhpcy5jYW52YXNCb3VuZC53aWR0aCAvIHRoaXMucmFkMmRlZyhtYXBMb25EZWx0YSkpICogMzYwLygyICogTWF0aC5QSSk7XG4gICAgICAgIGNvbnN0IG1hcE9mZnNldFkgPSAoIHdvcmxkTWFwUmFkaXVzIC8gMiAqIE1hdGgubG9nKCAoMSArIE1hdGguc2luKHRoaXMubWFwQm91bmQuc291dGgpICkgLyAoMSAtIE1hdGguc2luKHRoaXMubWFwQm91bmQuc291dGgpKSAgKSk7XG4gICAgICAgIGNvbnN0IGVxdWF0b3JZID0gdGhpcy5jYW52YXNCb3VuZC5oZWlnaHQgKyBtYXBPZmZzZXRZO1xuICAgICAgICBjb25zdCBhID0gKGVxdWF0b3JZLXkpL3dvcmxkTWFwUmFkaXVzO1xuXG4gICAgICAgIGNvbnN0IM+GID0gMTgwL01hdGguUEkgKiAoMiAqIE1hdGguYXRhbihNYXRoLmV4cChhKSkgLSBNYXRoLlBJLzIpO1xuICAgICAgICBjb25zdCDOuyA9IHRoaXMucmFkMmRlZyh0aGlzLm1hcEJvdW5kLndlc3QpICsgeCAvIHRoaXMuY2FudmFzQm91bmQud2lkdGggKiB0aGlzLnJhZDJkZWcobWFwTG9uRGVsdGEpO1xuICAgICAgICByZXR1cm4gW867LCDPhl07XG4gICAgfTtcbiAgICAgICAgXG4gICAgbWVyY1kgKM+GOiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gTWF0aC5sb2coIE1hdGgudGFuKCDPhiAvIDIgKyBNYXRoLlBJIC8gNCApICk7XG4gICAgfTtcbiAgICAgICAgXG4gICAgLyoqXG4gICAgICogUHJvamVjdCBhIHBvaW50IG9uIHRoZSBtYXBcbiAgICAgKiBAcGFyYW0gzrsgTG9uZ2l0dWRlXG4gICAgICogQHBhcmFtIM+GIExhdGl0dWRlXG4gICAgICogQHJldHVybiBbeCwgeV1cbiAgICAgKi9cbiAgICBtYXBUb0NhbnZhcyAozrs6IG51bWJlciwgz4Y6IG51bWJlcik6IG51bWJlcltdIHtcbiAgICAgICAgY29uc3QgeW1pbiA9IHRoaXMubWVyY1kodGhpcy5tYXBCb3VuZC5zb3V0aCk7XG4gICAgICAgIGNvbnN0IHltYXggPSB0aGlzLm1lcmNZKHRoaXMubWFwQm91bmQubm9ydGgpO1xuICAgICAgICBjb25zdCB4RmFjdG9yID0gdGhpcy5jYW52YXNCb3VuZC53aWR0aCAvICggdGhpcy5tYXBCb3VuZC5lYXN0IC0gdGhpcy5tYXBCb3VuZC53ZXN0ICk7XG4gICAgICAgIGNvbnN0IHlGYWN0b3IgPSB0aGlzLmNhbnZhc0JvdW5kLmhlaWdodCAvICggeW1heCAtIHltaW4gKTtcblxuICAgICAgICBsZXQgeSA9IHRoaXMubWVyY1kodGhpcy5kZWcycmFkKM+GKSApO1xuICAgICAgICBjb25zdCB4ID0gKHRoaXMuZGVnMnJhZCjOuykgLSB0aGlzLm1hcEJvdW5kLndlc3QpICogeEZhY3RvcjtcbiAgICAgICAgeSA9ICh5bWF4IC0geSkgKiB5RmFjdG9yO1xuICAgICAgICByZXR1cm4gW3gsIHldO1xuICAgIH07XG5cblxuICAgIGRlZzJyYWQgKGRlZzogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIGRlZyAqIE1hdGguUEkgLyAxODA7XG4gICAgfTtcblxuICAgIHJhZDJkZWcgKHJhZDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHJhZCAqIDE4MCAvIE1hdGguUEk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEBwYXJhbSDOuyBMb25naXR1ZGVcbiAgICAgKiBAcGFyYW0gz4YgTGF0aXR1ZGVcbiAgICAgKiBAcGFyYW0geCBcbiAgICAgKiBAcGFyYW0geSBcbiAgICAgKiBAcmV0dXJuIFtdXG4gICAgICovXG4gICAgZGlzdG9ydGlvbiAozrs6IG51bWJlciwgz4Y6IG51bWJlciwgeDogbnVtYmVyLCB5OiBudW1iZXIpOiBudW1iZXJbXSB7XG4gICAgICAgIGNvbnN0IM+EID0gMiAqIE1hdGguUEk7XG4gICAgICAgIGNvbnN0IEggPSBNYXRoLnBvdygxMCwgLTUuMik7XG4gICAgICAgIGNvbnN0IGjOuyA9IM67IDwgMCA/IEggOiAtSDtcbiAgICAgICAgY29uc3QgaM+GID0gz4YgPCAwID8gSCA6IC1IO1xuXG4gICAgICAgIGNvbnN0IHDOuyA9IHRoaXMubWFwVG9DYW52YXMozrsgKyBozrssIM+GKTtcbiAgICAgICAgY29uc3QgcM+GID0gdGhpcy5tYXBUb0NhbnZhcyjOuywgz4YgKyBoz4YpO1xuXG4gICAgICAgIC8vIE1lcmlkaWFuIHNjYWxlIGZhY3RvciAoc2VlIFNueWRlciwgZXF1YXRpb24gNC0zKSwgd2hlcmUgUiA9IDEuIFRoaXMgaGFuZGxlcyBpc3N1ZSB3aGVyZSBsZW5ndGggb2YgMcK6IM67XG4gICAgICAgIC8vIGNoYW5nZXMgZGVwZW5kaW5nIG9uIM+GLiBXaXRob3V0IHRoaXMsIHRoZXJlIGlzIGEgcGluY2hpbmcgZWZmZWN0IGF0IHRoZSBwb2xlcy5cbiAgICAgICAgY29uc3QgayA9IE1hdGguY29zKM+GIC8gMzYwICogz4QpO1xuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgKHDOu1swXSAtIHgpIC8gaM67IC8gayxcbiAgICAgICAgICAgIChwzrtbMV0gLSB5KSAvIGjOuyAvIGssXG4gICAgICAgICAgICAocM+GWzBdIC0geCkgLyBoz4YsXG4gICAgICAgICAgICAocM+GWzFdIC0geSkgLyBoz4ZcbiAgICAgICAgXTtcbiAgICB9XG4gICAgICBcbiAgICAvKipcbiAgICAgKiBDYWxjdWxhdGUgZGlzdG9ydGlvbiBvZiB0aGUgd2luZCB2ZWN0b3IgY2F1c2VkIGJ5IHRoZSBzaGFwZSBvZiB0aGUgcHJvamVjdGlvbiBhdCBwb2ludCAoeCwgeSkuIFRoZSB3aW5kXG4gICAgICogdmVjdG9yIGlzIG1vZGlmaWVkIGluIHBsYWNlIGFuZCByZXR1cm5lZCBieSB0aGlzIGZ1bmN0aW9uLlxuICAgICAqIEBwYXJhbSDOuyBcbiAgICAgKiBAcGFyYW0gz4YgXG4gICAgICogQHBhcmFtIHggXG4gICAgICogQHBhcmFtIHkgXG4gICAgICogQHBhcmFtIHNjYWxlIHNjYWxlIGZhY3RvclxuICAgICAqIEBwYXJhbSB3aW5kIFt1LCB2XVxuICAgICAqIEByZXR1cm4gW11cbiAgICAgKi9cbiAgICBkaXN0b3J0ICjOuzogbnVtYmVyLCDPhjogbnVtYmVyLCB4OiBudW1iZXIsIHk6IG51bWJlciwgc2NhbGU6IG51bWJlciwgd2luZDogVmVjdG9yKTogVmVjdG9yIHtcbiAgICAgICAgY29uc3QgdSA9IHdpbmQudSAqIHNjYWxlO1xuICAgICAgICBjb25zdCB2ID0gd2luZC52ICogc2NhbGU7XG4gICAgICAgIGNvbnN0IGQgPSB0aGlzLmRpc3RvcnRpb24ozrssIM+GLCB4LCB5KTtcblxuICAgICAgICAvLyBTY2FsZSBkaXN0b3J0aW9uIHZlY3RvcnMgYnkgdSBhbmQgdiwgdGhlbiBhZGQuXG4gICAgICAgIHdpbmQudSA9IGRbMF0gKiB1ICsgZFsyXSAqIHY7XG4gICAgICAgIHdpbmQudiA9IGRbMV0gKiB1ICsgZFszXSAqIHY7XG4gICAgICAgIHJldHVybiB3aW5kO1xuICAgIH1cbiAgXG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbGF5ZXIudHMiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL3R5cGluZ3MtZm9yLWNzcy1tb2R1bGVzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMS0xIS4vbGVhZmxldC12ZWxvY2l0eS5jc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIFByZXBhcmUgY3NzVHJhbnNmb3JtYXRpb25cbnZhciB0cmFuc2Zvcm07XG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uL25vZGVfbW9kdWxlcy90eXBpbmdzLWZvci1jc3MtbW9kdWxlcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTEtMSEuL2xlYWZsZXQtdmVsb2NpdHkuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvdHlwaW5ncy1mb3ItY3NzLW1vZHVsZXMtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0xLTEhLi9sZWFmbGV0LXZlbG9jaXR5LmNzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbGVhZmxldC12ZWxvY2l0eS5jc3Ncbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLl8zc2ZKelRYNzA4N3lpQ1cyZzgwSWRPIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcXG4gIHBhZGRpbmc6IDAgNXB4O1xcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XFxuICBjb2xvcjogIzMzMztcXG4gIGZvbnQ6IDExcHgvMS41IFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcImxlYWZsZXRDb250cm9sVmVsb2NpdHlcIjogXCJfM3NmSnpUWDcwODd5aUNXMmc4MElkT1wiXG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3R5cGluZ3MtZm9yLWNzcy1tb2R1bGVzLWxvYWRlci9saWI/e1wibW9kdWxlc1wiOnRydWUsXCJuYW1lZEV4cG9ydFwiOnRydWV9IS4vc3JjL2xlYWZsZXQtdmVsb2NpdHkuY3NzXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odXNlU291cmNlTWFwKSB7XG5cdHZhciBsaXN0ID0gW107XG5cblx0Ly8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXHRsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG5cdFx0XHR2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblx0XHRcdGlmKGl0ZW1bMl0pIHtcblx0XHRcdFx0cmV0dXJuIFwiQG1lZGlhIFwiICsgaXRlbVsyXSArIFwie1wiICsgY29udGVudCArIFwifVwiO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdFx0XHR9XG5cdFx0fSkuam9pbihcIlwiKTtcblx0fTtcblxuXHQvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXHRsaXN0LmkgPSBmdW5jdGlvbihtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG5cdFx0aWYodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpXG5cdFx0XHRtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG5cdFx0dmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGlkID0gdGhpc1tpXVswXTtcblx0XHRcdGlmKHR5cGVvZiBpZCA9PT0gXCJudW1iZXJcIilcblx0XHRcdFx0YWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuXHRcdH1cblx0XHRmb3IoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IG1vZHVsZXNbaV07XG5cdFx0XHQvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG5cdFx0XHQvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuXHRcdFx0Ly8gIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cblx0XHRcdC8vICBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cdFx0XHRpZih0eXBlb2YgaXRlbVswXSAhPT0gXCJudW1iZXJcIiB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuXHRcdFx0XHRpZihtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IG1lZGlhUXVlcnk7XG5cdFx0XHRcdH0gZWxzZSBpZihtZWRpYVF1ZXJ5KSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWFRdWVyeSArIFwiKVwiO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGxpc3QucHVzaChpdGVtKTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cdHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcblx0dmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnO1xuXHR2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cdGlmICghY3NzTWFwcGluZykge1xuXHRcdHJldHVybiBjb250ZW50O1xuXHR9XG5cblx0aWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuXHRcdHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG5cdFx0XHRyZXR1cm4gJy8qIyBzb3VyY2VVUkw9JyArIGNzc01hcHBpbmcuc291cmNlUm9vdCArIHNvdXJjZSArICcgKi8nXG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcblx0fVxuXG5cdHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59XG5cbi8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG5cdHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuXHR2YXIgZGF0YSA9ICdzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCwnICsgYmFzZTY0O1xuXG5cdHJldHVybiAnLyojICcgKyBkYXRhICsgJyAqLyc7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1xuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cblxudmFyIHN0eWxlc0luRG9tID0ge307XG5cbnZhclx0bWVtb2l6ZSA9IGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbztcblxuXHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0cmV0dXJuIG1lbW87XG5cdH07XG59O1xuXG52YXIgaXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xuXHQvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuXHQvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG5cdC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcblx0Ly8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG5cdC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuXHRyZXR1cm4gd2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2I7XG59KTtcblxudmFyIGdldEVsZW1lbnQgPSAoZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vID0ge307XG5cblx0cmV0dXJuIGZ1bmN0aW9uKHNlbGVjdG9yKSB7XG5cdFx0aWYgKHR5cGVvZiBtZW1vW3NlbGVjdG9yXSA9PT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0dmFyIHN0eWxlVGFyZ2V0ID0gZm4uY2FsbCh0aGlzLCBzZWxlY3Rvcik7XG5cdFx0XHQvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXHRcdFx0aWYgKHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0Ly8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcblx0XHRcdFx0XHQvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG5cdFx0XHRcdH0gY2F0Y2goZSkge1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0bWVtb1tzZWxlY3Rvcl0gPSBzdHlsZVRhcmdldDtcblx0XHR9XG5cdFx0cmV0dXJuIG1lbW9bc2VsZWN0b3JdXG5cdH07XG59KShmdW5jdGlvbiAodGFyZ2V0KSB7XG5cdHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldClcbn0pO1xuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhclx0c2luZ2xldG9uQ291bnRlciA9IDA7XG52YXJcdHN0eWxlc0luc2VydGVkQXRUb3AgPSBbXTtcblxudmFyXHRmaXhVcmxzID0gcmVxdWlyZShcIi4vdXJsc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XG5cdGlmICh0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcblx0XHRpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XG5cdH1cblxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXHRvcHRpb25zLmF0dHJzID0gdHlwZW9mIG9wdGlvbnMuYXR0cnMgPT09IFwib2JqZWN0XCIgPyBvcHRpb25zLmF0dHJzIDoge307XG5cblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2Vcblx0aWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09IFwiYm9vbGVhblwiKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSA8aGVhZD4gZWxlbWVudFxuXHRpZiAoIW9wdGlvbnMuaW5zZXJ0SW50bykgb3B0aW9ucy5pbnNlcnRJbnRvID0gXCJoZWFkXCI7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIHRoZSB0YXJnZXRcblx0aWYgKCFvcHRpb25zLmluc2VydEF0KSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcblxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpO1xuXG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAobmV3TGlzdCkge1xuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XG5cdFx0fVxuXG5cdFx0aWYobmV3TGlzdCkge1xuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0LCBvcHRpb25zKTtcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG5cdFx0fVxuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcblxuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuXHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSBkb21TdHlsZS5wYXJ0c1tqXSgpO1xuXG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufTtcblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20gKHN0eWxlcywgb3B0aW9ucykge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0aWYoZG9tU3R5bGUpIHtcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHBhcnRzID0gW107XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChsaXN0LCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZXMgPSBbXTtcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcblx0XHR2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcblxuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKSBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xuXHRcdGVsc2UgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuXHR9XG5cblx0cmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50IChvcHRpb25zLCBzdHlsZSkge1xuXHR2YXIgdGFyZ2V0ID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8pXG5cblx0aWYgKCF0YXJnZXQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydEludG8nIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcblx0fVxuXG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlc0luc2VydGVkQXRUb3Bbc3R5bGVzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcblxuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xuXHRcdGlmICghbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIHRhcmdldC5maXJzdENoaWxkKTtcblx0XHR9IGVsc2UgaWYgKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdFx0fVxuXHRcdHN0eWxlc0luc2VydGVkQXRUb3AucHVzaChzdHlsZSk7XG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xuXHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwib2JqZWN0XCIgJiYgb3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUpIHtcblx0XHR2YXIgbmV4dFNpYmxpbmcgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50byArIFwiIFwiICsgb3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUpO1xuXHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIG5leHRTaWJsaW5nKTtcblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJbU3R5bGUgTG9hZGVyXVxcblxcbiBJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0JyAoJ29wdGlvbnMuaW5zZXJ0QXQnKSBmb3VuZC5cXG4gTXVzdCBiZSAndG9wJywgJ2JvdHRvbScsIG9yIE9iamVjdC5cXG4gKGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyI2luc2VydGF0KVxcblwiKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQgKHN0eWxlKSB7XG5cdGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cdHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xuXG5cdHZhciBpZHggPSBzdHlsZXNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGUpO1xuXHRpZihpZHggPj0gMCkge1xuXHRcdHN0eWxlc0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcblxuXHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cblx0YWRkQXR0cnMoc3R5bGUsIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGUpO1xuXG5cdHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcblxuXHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdG9wdGlvbnMuYXR0cnMucmVsID0gXCJzdHlsZXNoZWV0XCI7XG5cblx0YWRkQXR0cnMobGluaywgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rKTtcblxuXHRyZXR1cm4gbGluaztcbn1cblxuZnVuY3Rpb24gYWRkQXR0cnMgKGVsLCBhdHRycykge1xuXHRPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0ZWwuc2V0QXR0cmlidXRlKGtleSwgYXR0cnNba2V5XSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZSAob2JqLCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZSwgdXBkYXRlLCByZW1vdmUsIHJlc3VsdDtcblxuXHQvLyBJZiBhIHRyYW5zZm9ybSBmdW5jdGlvbiB3YXMgZGVmaW5lZCwgcnVuIGl0IG9uIHRoZSBjc3Ncblx0aWYgKG9wdGlvbnMudHJhbnNmb3JtICYmIG9iai5jc3MpIHtcblx0ICAgIHJlc3VsdCA9IG9wdGlvbnMudHJhbnNmb3JtKG9iai5jc3MpO1xuXG5cdCAgICBpZiAocmVzdWx0KSB7XG5cdCAgICBcdC8vIElmIHRyYW5zZm9ybSByZXR1cm5zIGEgdmFsdWUsIHVzZSB0aGF0IGluc3RlYWQgb2YgdGhlIG9yaWdpbmFsIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgcnVubmluZyBydW50aW1lIHRyYW5zZm9ybWF0aW9ucyBvbiB0aGUgY3NzLlxuXHQgICAgXHRvYmouY3NzID0gcmVzdWx0O1xuXHQgICAgfSBlbHNlIHtcblx0ICAgIFx0Ly8gSWYgdGhlIHRyYW5zZm9ybSBmdW5jdGlvbiByZXR1cm5zIGEgZmFsc3kgdmFsdWUsIGRvbid0IGFkZCB0aGlzIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgY29uZGl0aW9uYWwgbG9hZGluZyBvZiBjc3Ncblx0ICAgIFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHQgICAgXHRcdC8vIG5vb3Bcblx0ICAgIFx0fTtcblx0ICAgIH1cblx0fVxuXG5cdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuXG5cdFx0c3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XG5cblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcblx0XHRyZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuXG5cdH0gZWxzZSBpZiAoXG5cdFx0b2JqLnNvdXJjZU1hcCAmJlxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCJcblx0KSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cblx0XHRcdGlmKHN0eWxlLmhyZWYpIFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGUuaHJlZik7XG5cdFx0fTtcblx0fSBlbHNlIHtcblx0XHRzdHlsZSA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cdFx0fTtcblx0fVxuXG5cdHVwZGF0ZShvYmopO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZSAobmV3T2JqKSB7XG5cdFx0aWYgKG5ld09iaikge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRuZXdPYmouY3NzID09PSBvYmouY3NzICYmXG5cdFx0XHRcdG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmXG5cdFx0XHRcdG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXBcblx0XHRcdCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZW1vdmUoKTtcblx0XHR9XG5cdH07XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcblxuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuXHR9O1xufSkoKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyAoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XG5cblx0aWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcblx0fSBlbHNlIHtcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG5cblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcblx0XHRcdHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnIChzdHlsZSwgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG5cblx0aWYobWVkaWEpIHtcblx0XHRzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcblx0fVxuXG5cdGlmKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG5cdH0gZWxzZSB7XG5cdFx0d2hpbGUoc3R5bGUuZmlyc3RDaGlsZCkge1xuXHRcdFx0c3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG5cdFx0fVxuXG5cdFx0c3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlTGluayAobGluaywgb3B0aW9ucywgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuXHQvKlxuXHRcdElmIGNvbnZlcnRUb0Fic29sdXRlVXJscyBpc24ndCBkZWZpbmVkLCBidXQgc291cmNlbWFwcyBhcmUgZW5hYmxlZFxuXHRcdGFuZCB0aGVyZSBpcyBubyBwdWJsaWNQYXRoIGRlZmluZWQgdGhlbiBsZXRzIHR1cm4gY29udmVydFRvQWJzb2x1dGVVcmxzXG5cdFx0b24gYnkgZGVmYXVsdC4gIE90aGVyd2lzZSBkZWZhdWx0IHRvIHRoZSBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgb3B0aW9uXG5cdFx0ZGlyZWN0bHlcblx0Ki9cblx0dmFyIGF1dG9GaXhVcmxzID0gb3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgPT09IHVuZGVmaW5lZCAmJiBzb3VyY2VNYXA7XG5cblx0aWYgKG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzIHx8IGF1dG9GaXhVcmxzKSB7XG5cdFx0Y3NzID0gZml4VXJscyhjc3MpO1xuXHR9XG5cblx0aWYgKHNvdXJjZU1hcCkge1xuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xuXHR9XG5cblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XG5cblx0dmFyIG9sZFNyYyA9IGxpbmsuaHJlZjtcblxuXHRsaW5rLmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXG5cdGlmKG9sZFNyYykgVVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuLyoqXG4gKiBXaGVuIHNvdXJjZSBtYXBzIGFyZSBlbmFibGVkLCBgc3R5bGUtbG9hZGVyYCB1c2VzIGEgbGluayBlbGVtZW50IHdpdGggYSBkYXRhLXVyaSB0b1xuICogZW1iZWQgdGhlIGNzcyBvbiB0aGUgcGFnZS4gVGhpcyBicmVha3MgYWxsIHJlbGF0aXZlIHVybHMgYmVjYXVzZSBub3cgdGhleSBhcmUgcmVsYXRpdmUgdG8gYVxuICogYnVuZGxlIGluc3RlYWQgb2YgdGhlIGN1cnJlbnQgcGFnZS5cbiAqXG4gKiBPbmUgc29sdXRpb24gaXMgdG8gb25seSB1c2UgZnVsbCB1cmxzLCBidXQgdGhhdCBtYXkgYmUgaW1wb3NzaWJsZS5cbiAqXG4gKiBJbnN0ZWFkLCB0aGlzIGZ1bmN0aW9uIFwiZml4ZXNcIiB0aGUgcmVsYXRpdmUgdXJscyB0byBiZSBhYnNvbHV0ZSBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgcGFnZSBsb2NhdGlvbi5cbiAqXG4gKiBBIHJ1ZGltZW50YXJ5IHRlc3Qgc3VpdGUgaXMgbG9jYXRlZCBhdCBgdGVzdC9maXhVcmxzLmpzYCBhbmQgY2FuIGJlIHJ1biB2aWEgdGhlIGBucG0gdGVzdGAgY29tbWFuZC5cbiAqXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzKSB7XG4gIC8vIGdldCBjdXJyZW50IGxvY2F0aW9uXG4gIHZhciBsb2NhdGlvbiA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93LmxvY2F0aW9uO1xuXG4gIGlmICghbG9jYXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJmaXhVcmxzIHJlcXVpcmVzIHdpbmRvdy5sb2NhdGlvblwiKTtcbiAgfVxuXG5cdC8vIGJsYW5rIG9yIG51bGw/XG5cdGlmICghY3NzIHx8IHR5cGVvZiBjc3MgIT09IFwic3RyaW5nXCIpIHtcblx0ICByZXR1cm4gY3NzO1xuICB9XG5cbiAgdmFyIGJhc2VVcmwgPSBsb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIGxvY2F0aW9uLmhvc3Q7XG4gIHZhciBjdXJyZW50RGlyID0gYmFzZVVybCArIGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL1xcL1teXFwvXSokLywgXCIvXCIpO1xuXG5cdC8vIGNvbnZlcnQgZWFjaCB1cmwoLi4uKVxuXHQvKlxuXHRUaGlzIHJlZ3VsYXIgZXhwcmVzc2lvbiBpcyBqdXN0IGEgd2F5IHRvIHJlY3Vyc2l2ZWx5IG1hdGNoIGJyYWNrZXRzIHdpdGhpblxuXHRhIHN0cmluZy5cblxuXHQgL3VybFxccypcXCggID0gTWF0Y2ggb24gdGhlIHdvcmQgXCJ1cmxcIiB3aXRoIGFueSB3aGl0ZXNwYWNlIGFmdGVyIGl0IGFuZCB0aGVuIGEgcGFyZW5zXG5cdCAgICggID0gU3RhcnQgYSBjYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAoPzogID0gU3RhcnQgYSBub24tY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgICAgIFteKShdICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAoPzogID0gU3RhcnQgYW5vdGhlciBub24tY2FwdHVyaW5nIGdyb3Vwc1xuXHQgICAgICAgICAgICAgICAgIFteKShdKyAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICAgICAgW14pKF0qICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIFxcKSAgPSBNYXRjaCBhIGVuZCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKSAgPSBFbmQgR3JvdXBcbiAgICAgICAgICAgICAgKlxcKSA9IE1hdGNoIGFueXRoaW5nIGFuZCB0aGVuIGEgY2xvc2UgcGFyZW5zXG4gICAgICAgICAgKSAgPSBDbG9zZSBub24tY2FwdHVyaW5nIGdyb3VwXG4gICAgICAgICAgKiAgPSBNYXRjaCBhbnl0aGluZ1xuICAgICAgICkgID0gQ2xvc2UgY2FwdHVyaW5nIGdyb3VwXG5cdCBcXCkgID0gTWF0Y2ggYSBjbG9zZSBwYXJlbnNcblxuXHQgL2dpICA9IEdldCBhbGwgbWF0Y2hlcywgbm90IHRoZSBmaXJzdC4gIEJlIGNhc2UgaW5zZW5zaXRpdmUuXG5cdCAqL1xuXHR2YXIgZml4ZWRDc3MgPSBjc3MucmVwbGFjZSgvdXJsXFxzKlxcKCgoPzpbXikoXXxcXCgoPzpbXikoXSt8XFwoW14pKF0qXFwpKSpcXCkpKilcXCkvZ2ksIGZ1bmN0aW9uKGZ1bGxNYXRjaCwgb3JpZ1VybCkge1xuXHRcdC8vIHN0cmlwIHF1b3RlcyAoaWYgdGhleSBleGlzdClcblx0XHR2YXIgdW5xdW90ZWRPcmlnVXJsID0gb3JpZ1VybFxuXHRcdFx0LnRyaW0oKVxuXHRcdFx0LnJlcGxhY2UoL15cIiguKilcIiQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSlcblx0XHRcdC5yZXBsYWNlKC9eJyguKiknJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KTtcblxuXHRcdC8vIGFscmVhZHkgYSBmdWxsIHVybD8gbm8gY2hhbmdlXG5cdFx0aWYgKC9eKCN8ZGF0YTp8aHR0cDpcXC9cXC98aHR0cHM6XFwvXFwvfGZpbGU6XFwvXFwvXFwvKS9pLnRlc3QodW5xdW90ZWRPcmlnVXJsKSkge1xuXHRcdCAgcmV0dXJuIGZ1bGxNYXRjaDtcblx0XHR9XG5cblx0XHQvLyBjb252ZXJ0IHRoZSB1cmwgdG8gYSBmdWxsIHVybFxuXHRcdHZhciBuZXdVcmw7XG5cblx0XHRpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvL1wiKSA9PT0gMCkge1xuXHRcdCAgXHQvL1RPRE86IHNob3VsZCB3ZSBhZGQgcHJvdG9jb2w/XG5cdFx0XHRuZXdVcmwgPSB1bnF1b3RlZE9yaWdVcmw7XG5cdFx0fSBlbHNlIGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi9cIikgPT09IDApIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIHRoZSBiYXNlIHVybFxuXHRcdFx0bmV3VXJsID0gYmFzZVVybCArIHVucXVvdGVkT3JpZ1VybDsgLy8gYWxyZWFkeSBzdGFydHMgd2l0aCAnLydcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gY3VycmVudCBkaXJlY3Rvcnlcblx0XHRcdG5ld1VybCA9IGN1cnJlbnREaXIgKyB1bnF1b3RlZE9yaWdVcmwucmVwbGFjZSgvXlxcLlxcLy8sIFwiXCIpOyAvLyBTdHJpcCBsZWFkaW5nICcuLydcblx0XHR9XG5cblx0XHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIHVybCguLi4pXG5cdFx0cmV0dXJuIFwidXJsKFwiICsgSlNPTi5zdHJpbmdpZnkobmV3VXJsKSArIFwiKVwiO1xuXHR9KTtcblxuXHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIGNzc1xuXHRyZXR1cm4gZml4ZWRDc3M7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzXG4vLyBtb2R1bGUgaWQgPSAxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9