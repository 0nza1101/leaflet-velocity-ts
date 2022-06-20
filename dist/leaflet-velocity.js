/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@teamsupercell/typings-for-css-modules-loader/src/index.js??ruleSet[1].rules[1].use[1]!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/leaflet-velocity.css":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@teamsupercell/typings-for-css-modules-loader/src/index.js??ruleSet[1].rules[1].use[1]!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/leaflet-velocity.css ***!
  \**********************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".IoWwiOJa3pQTAZUawPer {\n  background-color: rgba(255, 255, 255, 0.7);\n  padding: 0 5px;\n  margin: 0 !important;\n  color: #333;\n  font: 11px/1.5 \"Helvetica Neue\", Arial, Helvetica, sans-serif;\n}\n", "",{"version":3,"sources":["webpack://./src/leaflet-velocity.css"],"names":[],"mappings":"AAAA;EACE,0CAA0C;EAC1C,cAAc;EACd,oBAAoB;EACpB,WAAW;EACX,6DAA6D;AAC/D","sourcesContent":[".leafletControlVelocity {\n  background-color: rgba(255, 255, 255, 0.7);\n  padding: 0 5px;\n  margin: 0 !important;\n  color: #333;\n  font: 11px/1.5 \"Helvetica Neue\", Arial, Helvetica, sans-serif;\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"leafletControlVelocity": "IoWwiOJa3pQTAZUawPer"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/leaflet-velocity.css":
/*!**********************************!*\
  !*** ./src/leaflet-velocity.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_teamsupercell_typings_for_css_modules_loader_src_index_js_ruleSet_1_rules_1_use_1_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_leaflet_velocity_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/@teamsupercell/typings-for-css-modules-loader/src/index.js??ruleSet[1].rules[1].use[1]!../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./leaflet-velocity.css */ "./node_modules/@teamsupercell/typings-for-css-modules-loader/src/index.js??ruleSet[1].rules[1].use[1]!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/leaflet-velocity.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_teamsupercell_typings_for_css_modules_loader_src_index_js_ruleSet_1_rules_1_use_1_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_leaflet_velocity_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_teamsupercell_typings_for_css_modules_loader_src_index_js_ruleSet_1_rules_1_use_1_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_leaflet_velocity_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_teamsupercell_typings_for_css_modules_loader_src_index_js_ruleSet_1_rules_1_use_1_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_leaflet_velocity_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_teamsupercell_typings_for_css_modules_loader_src_index_js_ruleSet_1_rules_1_use_1_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_leaflet_velocity_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/L.CanvasLayer.ts":
/*!******************************!*\
  !*** ./src/L.CanvasLayer.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
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
exports["default"] = CanvasLayer;


/***/ }),

/***/ "./src/L.Control.Velocity.ts":
/*!***********************************!*\
  !*** ./src/L.Control.Velocity.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var leaflet_velocity_css_1 = __webpack_require__(/*! ./leaflet-velocity.css */ "./src/leaflet-velocity.css");
var ControlVelocity = /** @class */ (function () {
    function ControlVelocity() {
        this._windy = null;
        this._map = null;
        this._container = null;
        this.options = {
            position: 'bottomleft',
            emptyString: 'Unavailable',
            velocityType: '',
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
    ControlVelocity.prototype.setWindy = function (_windy) {
        if (!this._windy && _windy)
            this._windy = _windy;
    };
    ControlVelocity.prototype.setOptions = function (options) {
        L.Util.setOptions(this, options);
    };
    ControlVelocity.prototype.onAdd = function (map) {
        this._map = map;
        this._container = L.DomUtil.create('div', leaflet_velocity_css_1.default.leafletControlVelocity);
        L.DomEvent.disableClickPropagation(this._container);
        this._map.on('mousemove', this.drawWindSpeed, this);
        this._container.innerHTML = this.options.emptyString;
        return this._container;
    };
    ControlVelocity.prototype.onRemove = function (map) {
        this._map.off('mousemove', this.drawWindSpeed, this);
    };
    ControlVelocity.prototype.vectorToSpeed = function (uMs, vMs, unit) {
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
    ControlVelocity.prototype.vectorToDegrees = function (uMs, vMs, angleConvention) {
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
    ControlVelocity.prototype.meterSec2Knots = function (meters) {
        return meters / 0.514;
    };
    ControlVelocity.prototype.meterSec2kilometerHour = function (meters) {
        return meters * 3.6;
    };
    ControlVelocity.prototype.degreesToCardinalDirection = function (deg) {
        var cardinalDirection = '';
        if (deg >= 0 && deg < 11.25 || deg >= 348.75) {
            cardinalDirection = 'N';
        }
        else if (deg >= 11.25 && deg < 33.75) {
            cardinalDirection = 'NNW';
        }
        else if (deg >= 33.75 && deg < 56.25) {
            cardinalDirection = 'NW';
        }
        else if (deg >= 56.25 && deg < 78.75) {
            cardinalDirection = 'WNW';
        }
        else if (deg >= 78.25 && deg < 101.25) {
            cardinalDirection = 'W';
        }
        else if (deg >= 101.25 && deg < 123.75) {
            cardinalDirection = 'WSW';
        }
        else if (deg >= 123.75 && deg < 146.25) {
            cardinalDirection = 'SW';
        }
        else if (deg >= 146.25 && deg < 168.75) {
            cardinalDirection = 'SSW';
        }
        else if (deg >= 168.75 && deg < 191.25) {
            cardinalDirection = 'S';
        }
        else if (deg >= 191.25 && deg < 213.75) {
            cardinalDirection = 'SSE';
        }
        else if (deg >= 213.75 && deg < 236.25) {
            cardinalDirection = 'SE';
        }
        else if (deg >= 236.25 && deg < 258.75) {
            cardinalDirection = 'ESE';
        }
        else if (deg >= 258.75 && deg < 281.25) {
            cardinalDirection = 'E';
        }
        else if (deg >= 281.25 && deg < 303.75) {
            cardinalDirection = 'ENE';
        }
        else if (deg >= 303.75 && deg < 326.25) {
            cardinalDirection = 'NE';
        }
        else if (deg >= 326.25 && deg < 348.75) {
            cardinalDirection = 'NNE';
        }
        return cardinalDirection;
    };
    ControlVelocity.prototype.drawWindSpeed = function (ev) {
        var pos = this._map.containerPointToLatLng(L.point(ev.containerPoint.x, ev.containerPoint.y));
        var gridValue = this._windy.interpolate(pos.lng, pos.lat);
        var template = "";
        if (gridValue && !isNaN(gridValue[0]) && !isNaN(gridValue[1]) && gridValue[2]) {
            var deg = this.vectorToDegrees(gridValue[0], gridValue[1], this.options.angleConvention);
            var cardinal = this.options.showCardinal ? " (".concat(this.degreesToCardinalDirection(deg), ") ") : '';
            template = "<strong> ".concat(this.options.velocityType, " ").concat(this.options.directionString, ": </strong> ").concat(deg.toFixed(2), "\u00B0").concat(cardinal, ", <strong> ").concat(this.options.velocityType, " ").concat(this.options.speedString, ": </strong> ").concat(this.vectorToSpeed(gridValue[0], gridValue[1], this.options.speedUnit).toFixed(2), " ").concat(this.options.speedUnit);
        }
        else {
            if (this.options.emptyString)
                template = this.options.emptyString;
        }
        this._container.innerHTML = template;
    };
    return ControlVelocity;
}());
exports["default"] = ControlVelocity;


/***/ }),

/***/ "./src/L.VelocityLayer.ts":
/*!********************************!*\
  !*** ./src/L.VelocityLayer.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var windy_1 = __webpack_require__(/*! ./windy */ "./src/windy.ts");
var canvasBound_1 = __webpack_require__(/*! ./canvasBound */ "./src/canvasBound.ts");
var mapBound_1 = __webpack_require__(/*! ./mapBound */ "./src/mapBound.ts");
var layer_1 = __webpack_require__(/*! ./layer */ "./src/layer.ts");
var VelocityLayer = /** @class */ (function () {
    function VelocityLayer() {
        this._map = null;
        this._canvasLayer = null;
        this._windy = null;
        this._context = null;
        this._displayTimeout = null;
        this._mapEvents = null;
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
            onAdd: null,
            onRemove: null,
            data: null
        };
    }
    VelocityLayer.prototype.initialize = function (options) {
        L.Util.setOptions(this, options);
    };
    VelocityLayer.prototype.setOptions = function (options) {
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
        this.fire("load");
    };
    VelocityLayer.prototype.onAdd = function (map) {
        // create canvas, add overlay control
        this._canvasLayer = L.canvasLayer().delegate(this);
        this._canvasLayer.addTo(map);
        this._map = map;
        if (this.options.onAdd)
            this.options.onAdd();
    };
    VelocityLayer.prototype.onRemove = function (map) {
        this._destroyWind();
        if (this.options.onRemove)
            this.options.onRemove();
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
    VelocityLayer.prototype.onDrawLayer = function () {
        var _this = this;
        if (!this._windy) {
            this._initWindy();
            return;
        }
        if (!this.options.data) {
            return;
        }
        if (this._displayTimeout)
            clearTimeout(this._displayTimeout);
        this._displayTimeout = setTimeout(function () {
            _this._startWindy();
        }, 150); // showing velocity is delayed
    };
    VelocityLayer.prototype._toggleEvents = function (bind) {
        var _this = this;
        if (bind === void 0) { bind = true; }
        if (this._mapEvents === null) {
            this._mapEvents = {
                'dragstart': function () {
                    _this._windy.stop();
                },
                'dragend': function () {
                    _this._clearAndRestart();
                },
                'zoomstart': function () {
                    _this._windy.stop();
                },
                'zoomend': function () {
                    _this._clearAndRestart();
                },
                'resize': function () {
                    _this._clearWind();
                }
            };
        }
        for (var e in this._mapEvents) {
            if (this._mapEvents.hasOwnProperty(e)) {
                this._map[bind ? 'on' : 'off'](e, this._mapEvents[e]);
            }
        }
    };
    VelocityLayer.prototype._startWindy = function () {
        var bounds = this._map.getBounds();
        var size = this._map.getSize();
        // bounds, width, height, extent
        this._windy.start(new layer_1.default(new mapBound_1.default(bounds.getNorthEast().lat, bounds.getNorthEast().lng, bounds.getSouthWest().lat, bounds.getSouthWest().lng), new canvasBound_1.default(0, 0, size.x, size.y)));
    };
    VelocityLayer.prototype._initWindy = function () {
        var options = __assign(__assign({}, this.options), { canvas: this._canvasLayer._canvas });
        this._windy = new windy_1.default(options);
        // prepare context global var, start drawing
        this._context = this._canvasLayer._canvas.getContext('2d');
        this._canvasLayer._canvas.classList.add("velocity-overlay");
        this.onDrawLayer();
        this._toggleEvents(true);
        this._initMouseHandler();
    };
    VelocityLayer.prototype._initMouseHandler = function (unbind) {
        if (unbind === void 0) { unbind = false; }
        if (unbind) {
            this._map.removeControl(this._mouseControl);
            this._mouseControl = false;
        }
        if (!this._mouseControl && this.options.displayValues) {
            var options = this.options.displayOptions || {};
            this._mouseControl = L.control.velocity(options);
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
        this._toggleEvents(false);
        this._map.removeLayer(this._canvasLayer);
    };
    return VelocityLayer;
}());
exports["default"] = VelocityLayer;


/***/ }),

/***/ "./src/animationBucket.ts":
/*!********************************!*\
  !*** ./src/animationBucket.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
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
exports["default"] = AnimationBucket;


/***/ }),

/***/ "./src/canvasBound.ts":
/*!****************************!*\
  !*** ./src/canvasBound.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var particle_1 = __webpack_require__(/*! ./particle */ "./src/particle.ts");
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
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CanvasBound.prototype, "height", {
        get: function () {
            return this.yMax - this.yMin;
        },
        enumerable: false,
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
exports["default"] = CanvasBound;


/***/ }),

/***/ "./src/colorScale.ts":
/*!***************************!*\
  !*** ./src/colorScale.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
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
        enumerable: false,
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
exports["default"] = ColorScale;


/***/ }),

/***/ "./src/grid.ts":
/*!*********************!*\
  !*** ./src/grid.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var vector_1 = __webpack_require__(/*! ./vector */ "./src/vector.ts");
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
        enumerable: false,
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
exports["default"] = Grid;


/***/ }),

/***/ "./src/layer.ts":
/*!**********************!*\
  !*** ./src/layer.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
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
        //@see https://github.com/danwild/leaflet-velocity/issues/15#issuecomment-345260768
        var H = 5;
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
exports["default"] = layer;


/***/ }),

/***/ "./src/mapBound.ts":
/*!*************************!*\
  !*** ./src/mapBound.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
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
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MapBound.prototype, "height", {
        get: function () {
            return (360 + this.north - this.south) % 180;
        },
        enumerable: false,
        configurable: true
    });
    return MapBound;
}());
exports["default"] = MapBound;


/***/ }),

/***/ "./src/particle.ts":
/*!*************************!*\
  !*** ./src/particle.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
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
        enumerable: false,
        configurable: true
    });
    Particule.prototype.grow = function () {
        this.age++;
    };
    return Particule;
}());
exports["default"] = Particule;


/***/ }),

/***/ "./src/vector.ts":
/*!***********************!*\
  !*** ./src/vector.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var Vector = /** @class */ (function () {
    function Vector(u, v) {
        this.u = u || 0;
        this.v = v || 0;
    }
    Object.defineProperty(Vector.prototype, "intensity", {
        get: function () {
            return Math.sqrt(this.u * this.u + this.v * this.v);
        },
        enumerable: false,
        configurable: true
    });
    return Vector;
}());
exports["default"] = Vector;


/***/ }),

/***/ "./src/windy.ts":
/*!**********************!*\
  !*** ./src/windy.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var vector_1 = __webpack_require__(/*! ./vector */ "./src/vector.ts");
var grid_1 = __webpack_require__(/*! ./grid */ "./src/grid.ts");
var colorScale_1 = __webpack_require__(/*! ./colorScale */ "./src/colorScale.ts");
var animationBucket_1 = __webpack_require__(/*! ./animationBucket */ "./src/animationBucket.ts");
var Windy = /** @class */ (function () {
    function Windy(options) {
        this.canvas = null;
        this.particleMultiplier = 1 / 300;
        this.autoColorRange = false;
        this.particules = [];
        this.animationLoop = null;
        this.then = 0;
        this.setOptions(options);
    }
    Windy.prototype.setOptions = function (options) {
        this.canvas = options.canvas;
        if (options.minVelocity === undefined && options.maxVelocity === undefined) {
            this.autoColorRange = true;
        }
        this.colorScale = new colorScale_1.default(options.minVelocity || 0, options.maxVelocity || 10, options.colorScale);
        this.velocityScale = options.velocityScale || 0.01;
        this.particleAge = options.particleAge || 64;
        this.setData(options.data);
        this.particleMultiplier = options.particleMultiplier || 1 / 300;
        this.particleLineWidth = options.particlelineWidth || 1;
        var frameRate = options.frameRate || 15;
        this.frameTime = 1000 / frameRate;
    };
    Object.defineProperty(Windy.prototype, "particuleCount", {
        get: function () {
            var particuleReduction = ((/android|blackberry|iemobile|ipad|iphone|ipod|opera mini|webos/i).test(navigator.userAgent)) ? (Math.pow(window.devicePixelRatio, 1 / 3) || 1.6) : 1;
            return Math.round(this.layer.canvasBound.width * this.layer.canvasBound.height * this.particleMultiplier) * particuleReduction;
        },
        enumerable: false,
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
            switch ("".concat(record.header.parameterCategory, ",").concat(record.header.parameterNumber)) {
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
        this.context2D.lineWidth = this.particleLineWidth;
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
exports["default"] = Windy;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
var canvasBound_1 = __webpack_require__(/*! ./canvasBound */ "./src/canvasBound.ts");
var mapBound_1 = __webpack_require__(/*! ./mapBound */ "./src/mapBound.ts");
var windy_1 = __webpack_require__(/*! ./windy */ "./src/windy.ts");
var L_CanvasLayer_1 = __webpack_require__(/*! ./L.CanvasLayer */ "./src/L.CanvasLayer.ts");
var L_VelocityLayer_1 = __webpack_require__(/*! ./L.VelocityLayer */ "./src/L.VelocityLayer.ts");
var L_Control_Velocity_1 = __webpack_require__(/*! ./L.Control.Velocity */ "./src/L.Control.Velocity.ts");
window.CanvasBound = canvasBound_1.default;
window.MapBound = mapBound_1.default;
window.Windy = windy_1.default;
L.CanvasLayer = (L.Layer ? L.Layer : L.Class).extend(new L_CanvasLayer_1.default());
L.canvasLayer = function () {
    return new L.CanvasLayer();
};
L.Control.Velocity = (L.Control).extend(new L_Control_Velocity_1.default);
L.control.velocity = function (options) {
    return new L.Control.Velocity(options);
};
L.VelocityLayer = (L.Layer ? L.Layer : L.Class).extend(new L_VelocityLayer_1.default());
L.velocityLayer = function (options) {
    return new L.VelocityLayer(options);
};

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUMsSUFBSSw0QkFBZSxDQUFDLENBQUM7QUFDN0QsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLEdBQUcsVUFBVSxPQUFZO0lBQzFDLE9BQU8sSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUN4QyxDQUFDLENBQUM7QUFFRixDQUFDLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLHlCQUFhLEVBQUUsQ0FBQyxDQUFDO0FBQzVFLENBQUMsQ0FBQyxhQUFhLEdBQUcsVUFBVSxPQUFZO0lBQ3ZDLE9BQU8sSUFBSSxDQUFDLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ3JDLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2xlYWZsZXQtdmVsb2NpdHktdHMvLi9zcmMvbGVhZmxldC12ZWxvY2l0eS5jc3MiLCJ3ZWJwYWNrOi8vbGVhZmxldC12ZWxvY2l0eS10cy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vbGVhZmxldC12ZWxvY2l0eS10cy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2xlYWZsZXQtdmVsb2NpdHktdHMvLi9zcmMvbGVhZmxldC12ZWxvY2l0eS5jc3M/YmFmNCIsIndlYnBhY2s6Ly9sZWFmbGV0LXZlbG9jaXR5LXRzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2xlYWZsZXQtdmVsb2NpdHktdHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2xlYWZsZXQtdmVsb2NpdHktdHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vbGVhZmxldC12ZWxvY2l0eS10cy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9sZWFmbGV0LXZlbG9jaXR5LXRzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vbGVhZmxldC12ZWxvY2l0eS10cy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2xlYWZsZXQtdmVsb2NpdHktdHMvLi9zcmMvTC5DYW52YXNMYXllci50cyIsIndlYnBhY2s6Ly9sZWFmbGV0LXZlbG9jaXR5LXRzLy4vc3JjL0wuQ29udHJvbC5WZWxvY2l0eS50cyIsIndlYnBhY2s6Ly9sZWFmbGV0LXZlbG9jaXR5LXRzLy4vc3JjL0wuVmVsb2NpdHlMYXllci50cyIsIndlYnBhY2s6Ly9sZWFmbGV0LXZlbG9jaXR5LXRzLy4vc3JjL2FuaW1hdGlvbkJ1Y2tldC50cyIsIndlYnBhY2s6Ly9sZWFmbGV0LXZlbG9jaXR5LXRzLy4vc3JjL2NhbnZhc0JvdW5kLnRzIiwid2VicGFjazovL2xlYWZsZXQtdmVsb2NpdHktdHMvLi9zcmMvY29sb3JTY2FsZS50cyIsIndlYnBhY2s6Ly9sZWFmbGV0LXZlbG9jaXR5LXRzLy4vc3JjL2dyaWQudHMiLCJ3ZWJwYWNrOi8vbGVhZmxldC12ZWxvY2l0eS10cy8uL3NyYy9sYXllci50cyIsIndlYnBhY2s6Ly9sZWFmbGV0LXZlbG9jaXR5LXRzLy4vc3JjL21hcEJvdW5kLnRzIiwid2VicGFjazovL2xlYWZsZXQtdmVsb2NpdHktdHMvLi9zcmMvcGFydGljbGUudHMiLCJ3ZWJwYWNrOi8vbGVhZmxldC12ZWxvY2l0eS10cy8uL3NyYy92ZWN0b3IudHMiLCJ3ZWJwYWNrOi8vbGVhZmxldC12ZWxvY2l0eS10cy8uL3NyYy93aW5keS50cyIsIndlYnBhY2s6Ly9sZWFmbGV0LXZlbG9jaXR5LXRzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2xlYWZsZXQtdmVsb2NpdHktdHMvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vbGVhZmxldC12ZWxvY2l0eS10cy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbGVhZmxldC12ZWxvY2l0eS10cy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2xlYWZsZXQtdmVsb2NpdHktdHMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9sZWFmbGV0LXZlbG9jaXR5LXRzL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9sZWFmbGV0LXZlbG9jaXR5LXRzLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLklvV3dpT0phM3BRVEFaVWF3UGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcXG4gIHBhZGRpbmc6IDAgNXB4O1xcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XFxuICBjb2xvcjogIzMzMztcXG4gIGZvbnQ6IDExcHgvMS41IFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9sZWFmbGV0LXZlbG9jaXR5LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLDBDQUEwQztFQUMxQyxjQUFjO0VBQ2Qsb0JBQW9CO0VBQ3BCLFdBQVc7RUFDWCw2REFBNkQ7QUFDL0RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmxlYWZsZXRDb250cm9sVmVsb2NpdHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xcbiAgcGFkZGluZzogMCA1cHg7XFxuICBtYXJnaW46IDAgIWltcG9ydGFudDtcXG4gIGNvbG9yOiAjMzMzO1xcbiAgZm9udDogMTFweC8xLjUgXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwibGVhZmxldENvbnRyb2xWZWxvY2l0eVwiOiBcIklvV3dpT0phM3BRVEFaVWF3UGVyXCJcbn07XG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL0B0ZWFtc3VwZXJjZWxsL3R5cGluZ3MtZm9yLWNzcy1tb2R1bGVzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzFdIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnVzZVsyXSEuL2xlYWZsZXQtdmVsb2NpdHkuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL0B0ZWFtc3VwZXJjZWxsL3R5cGluZ3MtZm9yLWNzcy1tb2R1bGVzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzFdIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnVzZVsyXSEuL2xlYWZsZXQtdmVsb2NpdHkuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImRlY2xhcmUgdmFyIEw6IGFueTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FudmFzTGF5ZXIge1xuXHRwcml2YXRlIF9tYXA6IGFueTtcblx0cHJpdmF0ZSBfY2FudmFzOiBhbnk7XG5cdHByaXZhdGUgX2ZyYW1lOiBhbnk7XG5cdHByaXZhdGUgX2RlbGVnYXRlOiBhbnk7XG5cdHByaXZhdGUgdGlsZXM6IGFueTtcblxuXHRpbml0aWFsaXplKG9wdGlvbnM6IGFueSkge1xuXHRcdHRoaXMuX21hcCA9IG51bGw7XG5cdFx0dGhpcy5fY2FudmFzID0gbnVsbDtcblx0XHR0aGlzLl9mcmFtZSA9IG51bGw7XG5cdFx0dGhpcy5fZGVsZWdhdGUgPSBudWxsO1xuXHRcdEwuVXRpbC5zZXRPcHRpb25zKHRoaXMsIG9wdGlvbnMpO1xuXHR9XG5cblx0ZGVsZWdhdGUoZGVsOiBhbnkpOiBDYW52YXNMYXllciB7XG5cdFx0dGhpcy5fZGVsZWdhdGUgPSBkZWw7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRuZWVkUmVkcmF3KCkge1xuXHRcdGlmICghdGhpcy5fZnJhbWUpIHtcblx0XHRcdHRoaXMuX2ZyYW1lID0gTC5VdGlsLnJlcXVlc3RBbmltRnJhbWUodGhpcy5kcmF3TGF5ZXIsIHRoaXMpO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHRfb25MYXllckRpZFJlc2l6ZShyZXNpemVFdmVudDogYW55KSB7XG5cdFx0dGhpcy5fY2FudmFzLndpZHRoID0gcmVzaXplRXZlbnQubmV3U2l6ZS54O1xuXHRcdHRoaXMuX2NhbnZhcy5oZWlnaHQgPSByZXNpemVFdmVudC5uZXdTaXplLnk7XG5cdH1cblxuXHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0X29uTGF5ZXJEaWRNb3ZlKCkge1xuXHRcdHZhciB0b3BMZWZ0ID0gdGhpcy5fbWFwLmNvbnRhaW5lclBvaW50VG9MYXllclBvaW50KFswLCAwXSk7XG5cdFx0TC5Eb21VdGlsLnNldFBvc2l0aW9uKHRoaXMuX2NhbnZhcywgdG9wTGVmdCk7XG5cdFx0dGhpcy5kcmF3TGF5ZXIoKTtcblx0fVxuXG5cdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHRnZXRFdmVudHMoKSB7XG5cdFx0dmFyIGV2ZW50cyA9IHtcblx0XHRcdHJlc2l6ZTogdGhpcy5fb25MYXllckRpZFJlc2l6ZSxcblx0XHRcdG1vdmVlbmQ6IHRoaXMuX29uTGF5ZXJEaWRNb3ZlLFxuXHRcdFx0em9vbWFuaW06IDxhbnk+dW5kZWZpbmVkXG5cdFx0fTtcblx0XHRpZiAodGhpcy5fbWFwLm9wdGlvbnMuem9vbUFuaW1hdGlvbiAmJiBMLkJyb3dzZXIuYW55M2QpIHtcblx0XHRcdGV2ZW50cy56b29tYW5pbSA9IHRoaXMuX2FuaW1hdGVab29tO1xuXHRcdH1cblxuXHRcdHJldHVybiBldmVudHM7XG5cdH1cblxuXHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0b25BZGQobWFwOiBhbnkpIHtcblx0XHR0aGlzLl9tYXAgPSBtYXA7XG5cdFx0dGhpcy5fY2FudmFzID0gTC5Eb21VdGlsLmNyZWF0ZSgnY2FudmFzJywgJ2xlYWZsZXQtbGF5ZXInKTtcblx0XHR0aGlzLnRpbGVzID0ge307XG5cblx0XHR2YXIgc2l6ZSA9IHRoaXMuX21hcC5nZXRTaXplKCk7XG5cdFx0dGhpcy5fY2FudmFzLndpZHRoID0gc2l6ZS54O1xuXHRcdHRoaXMuX2NhbnZhcy5oZWlnaHQgPSBzaXplLnk7XG5cblx0XHR2YXIgYW5pbWF0ZWQgPSB0aGlzLl9tYXAub3B0aW9ucy56b29tQW5pbWF0aW9uICYmIEwuQnJvd3Nlci5hbnkzZDtcblx0XHRMLkRvbVV0aWwuYWRkQ2xhc3ModGhpcy5fY2FudmFzLCAnbGVhZmxldC16b29tLScgKyAoYW5pbWF0ZWQgPyAnYW5pbWF0ZWQnIDogJ2hpZGUnKSk7XG5cblxuXHRcdG1hcC5fcGFuZXMub3ZlcmxheVBhbmUuYXBwZW5kQ2hpbGQodGhpcy5fY2FudmFzKTtcblx0XHRtYXAub24odGhpcy5nZXRFdmVudHMoKSwgdGhpcyk7XG5cblx0XHR2YXIgZGVsID0gdGhpcy5fZGVsZWdhdGUgfHwgdGhpcztcblx0XHRkZWwub25MYXllckRpZE1vdW50ICYmIGRlbC5vbkxheWVyRGlkTW91bnQoKTsgLy8gLS0gY2FsbGJhY2tcblx0XHR0aGlzLm5lZWRSZWRyYXcoKTtcblxuXHRcdHZhciBzZWxmID0gdGhpcztcblx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcblx0XHRcdHNlbGYuX29uTGF5ZXJEaWRNb3ZlKCk7XG5cdFx0fSwgMCk7XG5cdH1cblxuXHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0b25SZW1vdmUobWFwOiBhbnkpIHtcblx0XHR2YXIgZGVsID0gdGhpcy5fZGVsZWdhdGUgfHwgdGhpcztcblx0XHRkZWwub25MYXllcldpbGxVbm1vdW50ICYmIGRlbC5vbkxheWVyV2lsbFVubW91bnQoKTsgLy8gLS0gY2FsbGJhY2tcblxuXG5cdFx0bWFwLmdldFBhbmVzKCkub3ZlcmxheVBhbmUucmVtb3ZlQ2hpbGQodGhpcy5fY2FudmFzKTtcblxuXHRcdG1hcC5vZmYodGhpcy5nZXRFdmVudHMoKSwgdGhpcyk7XG5cblx0XHR0aGlzLl9jYW52YXMgPSBudWxsO1xuXG5cdH1cblxuXHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHRhZGRUbyhtYXA6IGFueSkge1xuXHRcdG1hcC5hZGRMYXllcih0aGlzKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdExhdExvblRvTWVyY2F0b3IobGF0bG9uOiBMLkxhdExuZykge1xuXHRcdHJldHVybiB7XG5cdFx0XHR4OiBsYXRsb24ubG5nICogNjM3ODEzNyAqIE1hdGguUEkgLyAxODAsXG5cdFx0XHR5OiBNYXRoLmxvZyhNYXRoLnRhbigoOTAgKyBsYXRsb24ubGF0KSAqIE1hdGguUEkgLyAzNjApKSAqIDYzNzgxMzdcblx0XHR9O1xuXHR9XG5cblx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0ZHJhd0xheWVyKCkge1xuXHRcdC8vIC0tIHRvZG8gbWFrZSB0aGUgdmlld0luZm8gcHJvcGVydGllcyAgZmxhdCBvYmplY3RzLlxuXHRcdHZhciBzaXplID0gdGhpcy5fbWFwLmdldFNpemUoKTtcblx0XHR2YXIgYm91bmRzID0gdGhpcy5fbWFwLmdldEJvdW5kcygpO1xuXHRcdHZhciB6b29tID0gdGhpcy5fbWFwLmdldFpvb20oKTtcblxuXHRcdHZhciBjZW50ZXIgPSB0aGlzLkxhdExvblRvTWVyY2F0b3IodGhpcy5fbWFwLmdldENlbnRlcigpKTtcblx0XHR2YXIgY29ybmVyID0gdGhpcy5MYXRMb25Ub01lcmNhdG9yKHRoaXMuX21hcC5jb250YWluZXJQb2ludFRvTGF0TG5nKHRoaXMuX21hcC5nZXRTaXplKCkpKTtcblxuXHRcdHZhciBkZWwgPSB0aGlzLl9kZWxlZ2F0ZSB8fCB0aGlzO1xuXHRcdGRlbC5vbkRyYXdMYXllciAmJiBkZWwub25EcmF3TGF5ZXIoe1xuXHRcdFx0bGF5ZXI6IHRoaXMsXG5cdFx0XHRjYW52YXM6IHRoaXMuX2NhbnZhcyxcblx0XHRcdGJvdW5kczogYm91bmRzLFxuXHRcdFx0c2l6ZTogc2l6ZSxcblx0XHRcdHpvb206IHpvb20sXG5cdFx0XHRjZW50ZXI6IGNlbnRlcixcblx0XHRcdGNvcm5lcjogY29ybmVyXG5cdFx0fSk7XG5cdFx0dGhpcy5fZnJhbWUgPSBudWxsO1xuXHR9XG5cblx0Ly8gLS0gTC5Eb21VdGlsLnNldFRyYW5zZm9ybSBmcm9tIGxlYWZsZXQgMS4wLjAgdG8gd29yayBvbiAwLjAuN1xuXHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHRfc2V0VHJhbnNmb3JtKGVsOiBhbnksIG9mZnNldDogYW55LCBzY2FsZTogYW55KSB7XG5cdFx0dmFyIHBvcyA9IG9mZnNldCB8fCBuZXcgTC5Qb2ludCgwLCAwKTtcblxuXHRcdGVsLnN0eWxlW0wuRG9tVXRpbC5UUkFOU0ZPUk1dID1cblx0XHRcdChMLkJyb3dzZXIuaWUzZCA/XG5cdFx0XHRcdCd0cmFuc2xhdGUoJyArIHBvcy54ICsgJ3B4LCcgKyBwb3MueSArICdweCknIDpcblx0XHRcdFx0J3RyYW5zbGF0ZTNkKCcgKyBwb3MueCArICdweCwnICsgcG9zLnkgKyAncHgsMCknKSArXG5cdFx0XHQoc2NhbGUgPyAnIHNjYWxlKCcgKyBzY2FsZSArICcpJyA6ICcnKTtcblx0fVxuXG5cdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdF9hbmltYXRlWm9vbShlOiBhbnkpIHtcblx0XHR2YXIgc2NhbGUgPSB0aGlzLl9tYXAuZ2V0Wm9vbVNjYWxlKGUuem9vbSk7XG5cdFx0Ly8gLS0gZGlmZmVyZW50IGNhbGMgb2Ygb2Zmc2V0IGluIGxlYWZsZXQgMS4wLjAgYW5kIDAuMC43IHRoYW5rcyBmb3IgMS4wLjAtcmMyIGNhbGMgQGpkdWdnYW4xXG5cdFx0dmFyIG9mZnNldCA9IEwuTGF5ZXIgPyB0aGlzLl9tYXAuX2xhdExuZ1RvTmV3TGF5ZXJQb2ludCh0aGlzLl9tYXAuZ2V0Qm91bmRzKCkuZ2V0Tm9ydGhXZXN0KCksIGUuem9vbSwgZS5jZW50ZXIpIDpcblx0XHRcdHRoaXMuX21hcC5fZ2V0Q2VudGVyT2Zmc2V0KGUuY2VudGVyKS5fbXVsdGlwbHlCeSgtc2NhbGUpLnN1YnRyYWN0KHRoaXMuX21hcC5fZ2V0TWFwUGFuZVBvcygpKTtcblxuXHRcdEwuRG9tVXRpbC5zZXRUcmFuc2Zvcm0odGhpcy5fY2FudmFzLCBvZmZzZXQsIHNjYWxlKTtcblx0fVxufVxuIiwiaW1wb3J0IFdpbmR5IGZyb20gJy4vd2luZHknO1xuZGVjbGFyZSB2YXIgTDogYW55O1xuaW1wb3J0IHZlbG9jaXR5Y3NzIGZyb20gJy4vbGVhZmxldC12ZWxvY2l0eS5jc3MnO1xuXG5pbnRlcmZhY2UgRGlzcGxheU9wdGlvbnMge1xuICAgIHBvc2l0aW9uOiBzdHJpbmcsXG4gICAgZW1wdHlTdHJpbmc6IHN0cmluZyxcbiAgICBhbmdsZUNvbnZlbnRpb246IHN0cmluZyxcbiAgICBzcGVlZFVuaXQ6IHN0cmluZyxcbiAgICBzaG93Q2FyZGluYWw6IGJvb2xlYW5cbiAgICB2ZWxvY2l0eVR5cGU/OiBzdHJpbmdcbiAgICBkaXJlY3Rpb25TdHJpbmc6IHN0cmluZ1xuICAgIHNwZWVkU3RyaW5nOiBzdHJpbmdcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udHJvbFZlbG9jaXR5IHtcbiAgcHJpdmF0ZSBvcHRpb25zOiBEaXNwbGF5T3B0aW9ucztcbiAgcHJpdmF0ZSBfd2luZHk6IFdpbmR5ID0gbnVsbDtcbiAgcHJpdmF0ZSBfbWFwOiBhbnkgPSBudWxsO1xuICBwcml2YXRlIF9jb250YWluZXI6IGFueSA9IG51bGw7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5vcHRpb25zID0ge1xuICAgICAgcG9zaXRpb246ICdib3R0b21sZWZ0JyxcbiAgICAgIGVtcHR5U3RyaW5nOiAnVW5hdmFpbGFibGUnLFxuICAgICAgdmVsb2NpdHlUeXBlOiAnJyxcbiAgICAgIC8vIENvdWxkIGJlIGFueSBjb21iaW5hdGlvbiBvZiAnYmVhcmluZycgKGFuZ2xlIHRvd2FyZCB3aGljaCB0aGUgZmxvdyBnb2VzKSBvciAnbWV0ZW8nIChhbmdsZSBmcm9tIHdoaWNoIHRoZSBmbG93IGNvbWVzKVxuICAgICAgLy8gYW5kICdDVycgKGFuZ2xlIHZhbHVlIGluY3JlYXNlcyBjbG9jay13aXNlKSBvciAnQ0NXJyAoYW5nbGUgdmFsdWUgaW5jcmVhc2VzIGNvdW50ZXIgY2xvY2std2lzZSlcbiAgICAgIGFuZ2xlQ29udmVudGlvbjogJ2JlYXJpbmdDQ1cnLFxuICAgICAgLy8gQ291bGQgYmUgJ20vcycgZm9yIG1ldGVyIHBlciBzZWNvbmQsICdrL2gnIGZvciBraWxvbWV0ZXIgcGVyIGhvdXIgb3IgJ2t0JyBmb3Iga25vdHNcbiAgICAgIHNwZWVkVW5pdDogJ20vcycsXG4gICAgICBkaXJlY3Rpb25TdHJpbmc6IFwiRGlyZWN0aW9uXCIsXG4gICAgICBzcGVlZFN0cmluZzogXCJTcGVlZFwiLFxuICAgICAgc2hvd0NhcmRpbmFsOiBmYWxzZSxcbiAgICB9O1xuICB9XG5cbiAgc2V0V2luZHkoX3dpbmR5OiBhbnkpIHtcbiAgICBpZiAoIXRoaXMuX3dpbmR5ICYmIF93aW5keSkgdGhpcy5fd2luZHkgPSBfd2luZHk7XG4gIH1cblxuICBzZXRPcHRpb25zKG9wdGlvbnM6IGFueSkge1xuICAgIEwuVXRpbC5zZXRPcHRpb25zKHRoaXMsIG9wdGlvbnMpO1xuICB9XG5cbiAgb25BZGQobWFwOiBhbnkpIHtcbiAgICB0aGlzLl9tYXAgPSBtYXA7XG4gICAgdGhpcy5fY29udGFpbmVyID0gTC5Eb21VdGlsLmNyZWF0ZSgnZGl2JywgdmVsb2NpdHljc3MubGVhZmxldENvbnRyb2xWZWxvY2l0eSk7XG4gICAgTC5Eb21FdmVudC5kaXNhYmxlQ2xpY2tQcm9wYWdhdGlvbih0aGlzLl9jb250YWluZXIpO1xuICAgIHRoaXMuX21hcC5vbignbW91c2Vtb3ZlJywgdGhpcy5kcmF3V2luZFNwZWVkLCB0aGlzKTtcbiAgICB0aGlzLl9jb250YWluZXIuaW5uZXJIVE1MID0gdGhpcy5vcHRpb25zLmVtcHR5U3RyaW5nO1xuICAgIHJldHVybiB0aGlzLl9jb250YWluZXI7XG4gIH1cblxuICBvblJlbW92ZShtYXA6IGFueSkge1xuICAgIHRoaXMuX21hcC5vZmYoJ21vdXNlbW92ZScsIHRoaXMuZHJhd1dpbmRTcGVlZCwgdGhpcyk7XG4gIH1cblxuICB2ZWN0b3JUb1NwZWVkKHVNczogbnVtYmVyLCB2TXM6IG51bWJlciwgdW5pdDogc3RyaW5nKSB7XG4gICAgdmFyIHZlbG9jaXR5QWJzID0gTWF0aC5zcXJ0KE1hdGgucG93KHVNcywgMikgKyBNYXRoLnBvdyh2TXMsIDIpKTtcbiAgICAvLyBEZWZhdWx0IGlzIG0vc1xuICAgIGlmICh1bml0ID09PSAnay9oJykge1xuICAgICAgcmV0dXJuIHRoaXMubWV0ZXJTZWMya2lsb21ldGVySG91cih2ZWxvY2l0eUFicyk7XG4gICAgfSBlbHNlIGlmICh1bml0ID09PSAna3QnKSB7XG4gICAgICByZXR1cm4gdGhpcy5tZXRlclNlYzJLbm90cyh2ZWxvY2l0eUFicyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB2ZWxvY2l0eUFicztcbiAgICB9XG4gIH1cblxuICB2ZWN0b3JUb0RlZ3JlZXModU1zOiBudW1iZXIsIHZNczogbnVtYmVyLCBhbmdsZUNvbnZlbnRpb246IHN0cmluZykge1xuICAgIC8vIERlZmF1bHQgYW5nbGUgY29udmVudGlvbiBpcyBDV1xuICAgIGlmIChhbmdsZUNvbnZlbnRpb24uZW5kc1dpdGgoJ0NDVycpKSB7XG4gICAgICAvLyB2TXMgY29tZXMgb3V0IHVwc2lkZS1kb3duLi5cbiAgICAgIHZNcyA9IHZNcyA+IDAgPyB2TXMgPSAtdk1zIDogTWF0aC5hYnModk1zKTtcbiAgICB9XG4gICAgdmFyIHZlbG9jaXR5QWJzID0gTWF0aC5zcXJ0KE1hdGgucG93KHVNcywgMikgKyBNYXRoLnBvdyh2TXMsIDIpKTtcblxuICAgIHZhciB2ZWxvY2l0eURpciA9IE1hdGguYXRhbjIodU1zIC8gdmVsb2NpdHlBYnMsIHZNcyAvIHZlbG9jaXR5QWJzKTtcbiAgICB2YXIgdmVsb2NpdHlEaXJUb0RlZ3JlZXMgPSB2ZWxvY2l0eURpciAqIDE4MCAvIE1hdGguUEkgKyAxODA7XG5cbiAgICBpZiAoYW5nbGVDb252ZW50aW9uID09PSAnYmVhcmluZ0NXJyB8fCBhbmdsZUNvbnZlbnRpb24gPT09ICdtZXRlb0NDVycpIHtcbiAgICAgIHZlbG9jaXR5RGlyVG9EZWdyZWVzICs9IDE4MDtcbiAgICAgIGlmICh2ZWxvY2l0eURpclRvRGVncmVlcyA+PSAzNjApIHZlbG9jaXR5RGlyVG9EZWdyZWVzIC09IDM2MDtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVsb2NpdHlEaXJUb0RlZ3JlZXM7XG4gIH1cblxuICBtZXRlclNlYzJLbm90cyhtZXRlcnM6IG51bWJlcikge1xuICAgIHJldHVybiBtZXRlcnMgLyAwLjUxNFxuICB9XG5cbiAgbWV0ZXJTZWMya2lsb21ldGVySG91cihtZXRlcnM6IG51bWJlcikge1xuICAgIHJldHVybiBtZXRlcnMgKiAzLjZcbiAgfVxuXG4gIGRlZ3JlZXNUb0NhcmRpbmFsRGlyZWN0aW9uKGRlZzogbnVtYmVyKSB7XG4gICAgbGV0IGNhcmRpbmFsRGlyZWN0aW9uID0gJydcbiAgICBpZiAoZGVnID49IDAgJiYgZGVnIDwgMTEuMjUgfHwgZGVnID49IDM0OC43NSkge1xuICAgICAgY2FyZGluYWxEaXJlY3Rpb24gPSAnTidcbiAgICB9XG4gICAgZWxzZSBpZiAoZGVnID49IDExLjI1ICYmIGRlZyA8IDMzLjc1KSB7XG4gICAgICBjYXJkaW5hbERpcmVjdGlvbiA9ICdOTlcnXG4gICAgfVxuICAgIGVsc2UgaWYgKGRlZyA+PSAzMy43NSAmJiBkZWcgPCA1Ni4yNSkge1xuICAgICAgY2FyZGluYWxEaXJlY3Rpb24gPSAnTlcnXG4gICAgfVxuICAgIGVsc2UgaWYgKGRlZyA+PSA1Ni4yNSAmJiBkZWcgPCA3OC43NSkge1xuICAgICAgY2FyZGluYWxEaXJlY3Rpb24gPSAnV05XJ1xuICAgIH1cbiAgICBlbHNlIGlmIChkZWcgPj0gNzguMjUgJiYgZGVnIDwgMTAxLjI1KSB7XG4gICAgICBjYXJkaW5hbERpcmVjdGlvbiA9ICdXJ1xuICAgIH1cbiAgICBlbHNlIGlmIChkZWcgPj0gMTAxLjI1ICYmIGRlZyA8IDEyMy43NSkge1xuICAgICAgY2FyZGluYWxEaXJlY3Rpb24gPSAnV1NXJ1xuICAgIH1cbiAgICBlbHNlIGlmIChkZWcgPj0gMTIzLjc1ICYmIGRlZyA8IDE0Ni4yNSkge1xuICAgICAgY2FyZGluYWxEaXJlY3Rpb24gPSAnU1cnXG4gICAgfVxuICAgIGVsc2UgaWYgKGRlZyA+PSAxNDYuMjUgJiYgZGVnIDwgMTY4Ljc1KSB7XG4gICAgICBjYXJkaW5hbERpcmVjdGlvbiA9ICdTU1cnXG4gICAgfVxuICAgIGVsc2UgaWYgKGRlZyA+PSAxNjguNzUgJiYgZGVnIDwgMTkxLjI1KSB7XG4gICAgICBjYXJkaW5hbERpcmVjdGlvbiA9ICdTJ1xuICAgIH1cbiAgICBlbHNlIGlmIChkZWcgPj0gMTkxLjI1ICYmIGRlZyA8IDIxMy43NSkge1xuICAgICAgY2FyZGluYWxEaXJlY3Rpb24gPSAnU1NFJ1xuICAgIH1cbiAgICBlbHNlIGlmIChkZWcgPj0gMjEzLjc1ICYmIGRlZyA8IDIzNi4yNSkge1xuICAgICAgY2FyZGluYWxEaXJlY3Rpb24gPSAnU0UnXG4gICAgfVxuICAgIGVsc2UgaWYgKGRlZyA+PSAyMzYuMjUgJiYgZGVnIDwgMjU4Ljc1KSB7XG4gICAgICBjYXJkaW5hbERpcmVjdGlvbiA9ICdFU0UnXG4gICAgfVxuICAgIGVsc2UgaWYgKGRlZyA+PSAyNTguNzUgJiYgZGVnIDwgMjgxLjI1KSB7XG4gICAgICBjYXJkaW5hbERpcmVjdGlvbiA9ICdFJ1xuICAgIH1cbiAgICBlbHNlIGlmIChkZWcgPj0gMjgxLjI1ICYmIGRlZyA8IDMwMy43NSkge1xuICAgICAgY2FyZGluYWxEaXJlY3Rpb24gPSAnRU5FJ1xuICAgIH1cbiAgICBlbHNlIGlmIChkZWcgPj0gMzAzLjc1ICYmIGRlZyA8IDMyNi4yNSkge1xuICAgICAgY2FyZGluYWxEaXJlY3Rpb24gPSAnTkUnXG4gICAgfVxuICAgIGVsc2UgaWYgKGRlZyA+PSAzMjYuMjUgJiYgZGVnIDwgMzQ4Ljc1KSB7XG4gICAgICBjYXJkaW5hbERpcmVjdGlvbiA9ICdOTkUnXG4gICAgfVxuXG4gICAgcmV0dXJuIGNhcmRpbmFsRGlyZWN0aW9uO1xuICB9XG5cbiAgZHJhd1dpbmRTcGVlZChldjogYW55KSB7XG4gICAgY29uc3QgcG9zID0gdGhpcy5fbWFwLmNvbnRhaW5lclBvaW50VG9MYXRMbmcoTC5wb2ludChldi5jb250YWluZXJQb2ludC54LCBldi5jb250YWluZXJQb2ludC55KSk7XG4gICAgY29uc3QgZ3JpZFZhbHVlID0gdGhpcy5fd2luZHkuaW50ZXJwb2xhdGUocG9zLmxuZywgcG9zLmxhdCk7XG4gICAgdmFyIHRlbXBsYXRlID0gXCJcIjtcbiAgICBpZiAoZ3JpZFZhbHVlICYmICFpc05hTihncmlkVmFsdWVbMF0pICYmICFpc05hTihncmlkVmFsdWVbMV0pICYmIGdyaWRWYWx1ZVsyXSkge1xuICAgICAgY29uc3QgZGVnID0gdGhpcy52ZWN0b3JUb0RlZ3JlZXMoZ3JpZFZhbHVlWzBdLCBncmlkVmFsdWVbMV0sIHRoaXMub3B0aW9ucy5hbmdsZUNvbnZlbnRpb24pO1xuICAgICAgY29uc3QgY2FyZGluYWwgPSB0aGlzLm9wdGlvbnMuc2hvd0NhcmRpbmFsID8gYCAoJHt0aGlzLmRlZ3JlZXNUb0NhcmRpbmFsRGlyZWN0aW9uKGRlZyl9KSBgIDogJyc7XG4gICAgICB0ZW1wbGF0ZSA9IGA8c3Ryb25nPiAke3RoaXMub3B0aW9ucy52ZWxvY2l0eVR5cGV9ICR7dGhpcy5vcHRpb25zLmRpcmVjdGlvblN0cmluZ1xuICAgICAgICB9OiA8L3N0cm9uZz4gJHtkZWcudG9GaXhlZCgyKX3CsCR7Y2FyZGluYWx9LCA8c3Ryb25nPiAke3RoaXMub3B0aW9ucy52ZWxvY2l0eVR5cGV9ICR7dGhpcy5vcHRpb25zLnNwZWVkU3RyaW5nXG4gICAgICAgIH06IDwvc3Ryb25nPiAke3RoaXMudmVjdG9yVG9TcGVlZChncmlkVmFsdWVbMF0sIGdyaWRWYWx1ZVsxXSwgdGhpcy5vcHRpb25zLnNwZWVkVW5pdCkudG9GaXhlZCgyKX0gJHt0aGlzLm9wdGlvbnMuc3BlZWRVbml0fWA7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgaWYgKHRoaXMub3B0aW9ucy5lbXB0eVN0cmluZylcbiAgICAgICAgdGVtcGxhdGUgPSB0aGlzLm9wdGlvbnMuZW1wdHlTdHJpbmc7XG4gICAgfVxuICAgIHRoaXMuX2NvbnRhaW5lci5pbm5lckhUTUwgPSB0ZW1wbGF0ZTtcbiAgfVxufVxuIiwiaW1wb3J0IFdpbmR5LCB7IFdpbmR5T3B0aW9ucyB9IGZyb20gJy4vd2luZHknO1xyXG5pbXBvcnQgQ2FudmFzQm91bmQgZnJvbSAnLi9jYW52YXNCb3VuZCdcclxuaW1wb3J0IE1hcEJvdW5kIGZyb20gJy4vbWFwQm91bmQnO1xyXG5pbXBvcnQgTGF5ZXIgZnJvbSBcIi4vbGF5ZXJcIjtcclxuXHJcbmRlY2xhcmUgdmFyIEw6IGFueTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZlbG9jaXR5TGF5ZXIge1xyXG4gIHByaXZhdGUgb3B0aW9uczogYW55O1xyXG4gIHByaXZhdGUgX21hcDogTC5NYXAgPSBudWxsO1xyXG4gIHByaXZhdGUgX2NhbnZhc0xheWVyOiBhbnkgPSBudWxsO1xyXG4gIHByaXZhdGUgX3dpbmR5OiBXaW5keSA9IG51bGw7XHJcbiAgcHJpdmF0ZSBfY29udGV4dDogYW55ID0gbnVsbDtcclxuICBwcml2YXRlIF9kaXNwbGF5VGltZW91dDogUmV0dXJuVHlwZTx0eXBlb2Ygc2V0VGltZW91dD4gPSBudWxsO1xyXG4gIHByaXZhdGUgX21hcEV2ZW50czogYW55ID0gbnVsbFxyXG4gIHByaXZhdGUgX21vdXNlQ29udHJvbDogYW55ID0gbnVsbDtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLm9wdGlvbnMgPSB7XHJcbiAgICAgIGRpc3BsYXlWYWx1ZXM6IHRydWUsXHJcbiAgICAgIGRpc3BsYXlPcHRpb25zOiB7XHJcbiAgICAgICAgdmVsb2NpdHlUeXBlOiAnVmVsb2NpdHknLFxyXG4gICAgICAgIHBvc2l0aW9uOiAnYm90dG9tbGVmdCcsXHJcbiAgICAgICAgZW1wdHlTdHJpbmc6ICdObyB2ZWxvY2l0eSBkYXRhJyxcclxuICAgICAgICBhbmdsZUNvbnZlbnRpb246ICdiZWFyaW5nQ0NXJyxcclxuICAgICAgICBzcGVlZFVuaXQ6ICdtL3MnXHJcbiAgICAgIH0sXHJcbiAgICAgIG1heFZlbG9jaXR5OiAxMCwgLy8gdXNlZCB0byBhbGlnbiBjb2xvciBzY2FsZVxyXG4gICAgICBjb2xvclNjYWxlOiBudWxsLFxyXG4gICAgICBvbkFkZDogbnVsbCxcclxuICAgICAgb25SZW1vdmU6IG51bGwsXHJcbiAgICAgIGRhdGE6IG51bGxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBpbml0aWFsaXplKG9wdGlvbnM6IGFueSkge1xyXG4gICAgTC5VdGlsLnNldE9wdGlvbnModGhpcywgb3B0aW9ucyk7XHJcbiAgfVxyXG5cclxuICBzZXRPcHRpb25zKG9wdGlvbnM6IGFueSkge1xyXG4gICAgTC5VdGlsLnNldE9wdGlvbnModGhpcywgb3B0aW9ucyk7XHJcbiAgICBpZiAob3B0aW9ucy5kaXNwbGF5T3B0aW9ucykge1xyXG4gICAgICB0aGlzLl9pbml0TW91c2VIYW5kbGVyKHRydWUpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpZiAob3B0aW9ucy5kYXRhKSB7XHJcbiAgICAgIHRoaXMub3B0aW9ucy5kYXRhID0gb3B0aW9ucy5kYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLl93aW5keSkge1xyXG4gICAgICB0aGlzLl93aW5keS5zZXRPcHRpb25zKG9wdGlvbnMpO1xyXG4gICAgICBpZiAob3B0aW9ucy5kYXRhKSB7XHJcbiAgICAgICAgdGhpcy5fd2luZHkuc2V0RGF0YShvcHRpb25zLmRhdGEpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuX2NsZWFyQW5kUmVzdGFydCgpO1xyXG4gICAgfVxyXG5cclxuICAgICg8YW55PnRoaXMpLmZpcmUoXCJsb2FkXCIpO1xyXG4gIH1cclxuXHJcbiAgb25BZGQobWFwOiBMLk1hcCkge1xyXG4gICAgLy8gY3JlYXRlIGNhbnZhcywgYWRkIG92ZXJsYXkgY29udHJvbFxyXG4gICAgdGhpcy5fY2FudmFzTGF5ZXIgPSBMLmNhbnZhc0xheWVyKCkuZGVsZWdhdGUodGhpcyk7XHJcbiAgICB0aGlzLl9jYW52YXNMYXllci5hZGRUbyhtYXApO1xyXG5cclxuICAgIHRoaXMuX21hcCA9IG1hcDtcclxuXHJcbiAgICBpZiAodGhpcy5vcHRpb25zLm9uQWRkKVxyXG4gICAgICB0aGlzLm9wdGlvbnMub25BZGQoKTtcclxuICB9XHJcblxyXG4gIG9uUmVtb3ZlKG1hcDogYW55KSB7XHJcbiAgICB0aGlzLl9kZXN0cm95V2luZCgpO1xyXG5cclxuICAgIGlmICh0aGlzLm9wdGlvbnMub25SZW1vdmUpXHJcbiAgICAgIHRoaXMub3B0aW9ucy5vblJlbW92ZSgpO1xyXG4gIH1cclxuXHJcbiAgc2V0RGF0YShkYXRhOiBhbnkpIHtcclxuICAgIHRoaXMub3B0aW9ucy5kYXRhID0gZGF0YTtcclxuXHJcbiAgICBpZiAodGhpcy5fd2luZHkpIHtcclxuICAgICAgdGhpcy5fd2luZHkuc2V0RGF0YShkYXRhKTtcclxuICAgICAgdGhpcy5fY2xlYXJBbmRSZXN0YXJ0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgKDxhbnk+dGhpcykuZmlyZSgnbG9hZCcpO1xyXG4gIH1cclxuXHJcbiAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gUFJJVkFURSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5cclxuICBvbkRyYXdMYXllcigpIHtcclxuICAgIGlmICghdGhpcy5fd2luZHkpIHtcclxuICAgICAgdGhpcy5faW5pdFdpbmR5KCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXRoaXMub3B0aW9ucy5kYXRhKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5fZGlzcGxheVRpbWVvdXQpIGNsZWFyVGltZW91dCh0aGlzLl9kaXNwbGF5VGltZW91dCk7XHJcblxyXG4gICAgdGhpcy5fZGlzcGxheVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5fc3RhcnRXaW5keSgpO1xyXG4gICAgfSwgMTUwKTsgLy8gc2hvd2luZyB2ZWxvY2l0eSBpcyBkZWxheWVkXHJcbiAgfVxyXG5cclxuICBfdG9nZ2xlRXZlbnRzKGJpbmQ6IGJvb2xlYW4gPSB0cnVlKSB7XHJcbiAgICBpZiAodGhpcy5fbWFwRXZlbnRzID09PSBudWxsKSB7XHJcbiAgICAgIHRoaXMuX21hcEV2ZW50cyA9IHtcclxuICAgICAgICAnZHJhZ3N0YXJ0JzogKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5fd2luZHkuc3RvcCgpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJ2RyYWdlbmQnOiAoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLl9jbGVhckFuZFJlc3RhcnQoKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgICd6b29tc3RhcnQnOiAoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLl93aW5keS5zdG9wKCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAnem9vbWVuZCc6ICgpID0+IHtcclxuICAgICAgICAgIHRoaXMuX2NsZWFyQW5kUmVzdGFydCgpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJ3Jlc2l6ZSc6ICgpID0+IHtcclxuICAgICAgICAgIHRoaXMuX2NsZWFyV2luZCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGxldCBlIGluIHRoaXMuX21hcEV2ZW50cykge1xyXG4gICAgICBpZiAodGhpcy5fbWFwRXZlbnRzLmhhc093blByb3BlcnR5KGUpKSB7XHJcbiAgICAgICAgdGhpcy5fbWFwW2JpbmQgPyAnb24nIDogJ29mZiddKGUsIHRoaXMuX21hcEV2ZW50c1tlXSlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgX3N0YXJ0V2luZHkoKSB7XHJcbiAgICB2YXIgYm91bmRzID0gdGhpcy5fbWFwLmdldEJvdW5kcygpO1xyXG4gICAgdmFyIHNpemUgPSB0aGlzLl9tYXAuZ2V0U2l6ZSgpO1xyXG5cclxuICAgIC8vIGJvdW5kcywgd2lkdGgsIGhlaWdodCwgZXh0ZW50XHJcbiAgICB0aGlzLl93aW5keS5zdGFydChcclxuICAgICAgbmV3IExheWVyKFxyXG4gICAgICAgIG5ldyBNYXBCb3VuZChcclxuICAgICAgICAgIGJvdW5kcy5nZXROb3J0aEVhc3QoKS5sYXQsXHJcbiAgICAgICAgICBib3VuZHMuZ2V0Tm9ydGhFYXN0KCkubG5nLFxyXG4gICAgICAgICAgYm91bmRzLmdldFNvdXRoV2VzdCgpLmxhdCxcclxuICAgICAgICAgIGJvdW5kcy5nZXRTb3V0aFdlc3QoKS5sbmdcclxuICAgICAgICApLFxyXG4gICAgICAgIG5ldyBDYW52YXNCb3VuZCgwLCAwLCBzaXplLngsIHNpemUueSlcclxuICAgICAgKVxyXG5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBfaW5pdFdpbmR5KCkge1xyXG4gICAgY29uc3Qgb3B0aW9uczogV2luZHlPcHRpb25zID0ge1xyXG4gICAgICAuLi50aGlzLm9wdGlvbnMsXHJcbiAgICAgIGNhbnZhczogdGhpcy5fY2FudmFzTGF5ZXIuX2NhbnZhc1xyXG4gICAgfVxyXG4gICAgdGhpcy5fd2luZHkgPSBuZXcgV2luZHkob3B0aW9ucyk7XHJcblxyXG4gICAgLy8gcHJlcGFyZSBjb250ZXh0IGdsb2JhbCB2YXIsIHN0YXJ0IGRyYXdpbmdcclxuICAgIHRoaXMuX2NvbnRleHQgPSB0aGlzLl9jYW52YXNMYXllci5fY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICB0aGlzLl9jYW52YXNMYXllci5fY2FudmFzLmNsYXNzTGlzdC5hZGQoXCJ2ZWxvY2l0eS1vdmVybGF5XCIpO1xyXG4gICAgdGhpcy5vbkRyYXdMYXllcigpO1xyXG5cclxuICAgIHRoaXMuX3RvZ2dsZUV2ZW50cyh0cnVlKTtcclxuXHJcbiAgICB0aGlzLl9pbml0TW91c2VIYW5kbGVyKCk7XHJcbiAgfVxyXG5cclxuICBfaW5pdE1vdXNlSGFuZGxlcih1bmJpbmQ6IGJvb2xlYW4gPSBmYWxzZSkge1xyXG4gICAgaWYgKHVuYmluZCkge1xyXG4gICAgICB0aGlzLl9tYXAucmVtb3ZlQ29udHJvbCh0aGlzLl9tb3VzZUNvbnRyb2wpO1xyXG4gICAgICB0aGlzLl9tb3VzZUNvbnRyb2wgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXRoaXMuX21vdXNlQ29udHJvbCAmJiB0aGlzLm9wdGlvbnMuZGlzcGxheVZhbHVlcykge1xyXG4gICAgICBjb25zdCBvcHRpb25zID0gdGhpcy5vcHRpb25zLmRpc3BsYXlPcHRpb25zIHx8IHt9O1xyXG4gICAgICB0aGlzLl9tb3VzZUNvbnRyb2wgPSBMLmNvbnRyb2wudmVsb2NpdHkob3B0aW9ucyk7XHJcbiAgICAgIHRoaXMuX21vdXNlQ29udHJvbC5zZXRXaW5keSh0aGlzLl93aW5keSk7XHJcbiAgICAgIHRoaXMuX21vdXNlQ29udHJvbC5zZXRPcHRpb25zKHRoaXMub3B0aW9ucy5kaXNwbGF5T3B0aW9ucyk7XHJcbiAgICAgIHRoaXMuX21vdXNlQ29udHJvbC5hZGRUbyh0aGlzLl9tYXApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgX2NsZWFyQW5kUmVzdGFydCgpIHtcclxuICAgIGlmICh0aGlzLl9jb250ZXh0KSB0aGlzLl9jb250ZXh0LmNsZWFyUmVjdCgwLCAwLCAzMDAwLCAzMDAwKTtcclxuICAgIGlmICh0aGlzLl93aW5keSkgdGhpcy5fc3RhcnRXaW5keSgpO1xyXG4gIH1cclxuXHJcbiAgX2NsZWFyV2luZCgpIHtcclxuICAgIGlmICh0aGlzLl93aW5keSkgdGhpcy5fd2luZHkuc3RvcCgpO1xyXG4gICAgaWYgKHRoaXMuX2NvbnRleHQpIHRoaXMuX2NvbnRleHQuY2xlYXJSZWN0KDAsIDAsIDMwMDAsIDMwMDApO1xyXG4gIH1cclxuXHJcbiAgX2Rlc3Ryb3lXaW5kKCkge1xyXG4gICAgaWYgKHRoaXMuX2Rpc3BsYXlUaW1lb3V0KVxyXG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5fZGlzcGxheVRpbWVvdXQpO1xyXG4gICAgaWYgKHRoaXMuX3dpbmR5KVxyXG4gICAgICB0aGlzLl93aW5keS5zdG9wKCk7XHJcbiAgICBpZiAodGhpcy5fY29udGV4dClcclxuICAgICAgdGhpcy5fY29udGV4dC5jbGVhclJlY3QoMCwgMCwgMzAwMCwgMzAwMCk7XHJcbiAgICBpZiAodGhpcy5fbW91c2VDb250cm9sKVxyXG4gICAgICB0aGlzLl9tYXAucmVtb3ZlQ29udHJvbCh0aGlzLl9tb3VzZUNvbnRyb2wpO1xyXG4gICAgdGhpcy5fbW91c2VDb250cm9sID0gbnVsbDtcclxuICAgIHRoaXMuX3dpbmR5ID0gbnVsbDtcclxuICAgIHRoaXMuX3RvZ2dsZUV2ZW50cyhmYWxzZSk7XHJcbiAgICB0aGlzLl9tYXAucmVtb3ZlTGF5ZXIodGhpcy5fY2FudmFzTGF5ZXIpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgQ29sb3JTY2FsZSBmcm9tIFwiLi9jb2xvclNjYWxlXCI7XG5pbXBvcnQgUGFydGljdWxlIGZyb20gXCIuL3BhcnRpY2xlXCI7XG5pbXBvcnQgVmVjdG9yIGZyb20gXCIuL3ZlY3RvclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBbmltYXRpb25CdWNrZXQge1xuICAgIHByaXZhdGUgY29sb3JTY2FsZTogQ29sb3JTY2FsZTtcbiAgICBwcml2YXRlIGJ1Y2tldHM6IFBhcnRpY3VsZVtdW10gPSBbXTtcblxuICAgIGNvbnN0cnVjdG9yKGNvbG9yU2NhbGU6IENvbG9yU2NhbGUpIHtcbiAgICAgICAgdGhpcy5jb2xvclNjYWxlID0gY29sb3JTY2FsZTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2xvclNjYWxlLnNpemU7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5idWNrZXRzLnB1c2goW10pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2xlYXIoKSB7XG4gICAgICAgIHRoaXMuYnVja2V0cy5mb3JFYWNoKChwYXJ0aWN1bGVTZXQ6IFBhcnRpY3VsZVtdKSA9PiB7XG4gICAgICAgICAgICBwYXJ0aWN1bGVTZXQuc3BsaWNlKDAsIHBhcnRpY3VsZVNldC5sZW5ndGgpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgYWRkKHA6IFBhcnRpY3VsZSwgdjogVmVjdG9yKSB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5jb2xvclNjYWxlLmdldENvbG9ySW5kZXgocC5pbnRlbnNpdHkpXG4gICAgICAgIGlmIChpbmRleCA8IDAgfHwgaW5kZXggPj0gdGhpcy5idWNrZXRzLmxlbmd0aCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coaW5kZXgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHAueHQgPSBwLnggKyB2LnU7XG4gICAgICAgIHAueXQgPSBwLnkgKyB2LnY7XG4gICAgICAgIHRoaXMuYnVja2V0c1tpbmRleF0ucHVzaChwKTtcbiAgICB9XG5cbiAgICBkcmF3KGNvbnRleHQyRDogYW55KSB7XG4gICAgICAgIHRoaXMuYnVja2V0cy5mb3JFYWNoKChidWNrZXQ6IFBhcnRpY3VsZVtdLCBpOiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgIGlmIChidWNrZXQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGNvbnRleHQyRC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICBjb250ZXh0MkQuc3Ryb2tlU3R5bGUgPSB0aGlzLmNvbG9yU2NhbGUuY29sb3JBdChpKTtcbiAgICAgICAgICAgICAgICBidWNrZXQuZm9yRWFjaChmdW5jdGlvbiAocGFydGljbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dDJELm1vdmVUbyhwYXJ0aWNsZS54LCBwYXJ0aWNsZS55KTtcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dDJELmxpbmVUbyhwYXJ0aWNsZS54dCwgcGFydGljbGUueXQpO1xuICAgICAgICAgICAgICAgICAgICBwYXJ0aWNsZS54ID0gcGFydGljbGUueHQ7XG4gICAgICAgICAgICAgICAgICAgIHBhcnRpY2xlLnkgPSBwYXJ0aWNsZS55dDtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBjb250ZXh0MkQuc3Ryb2tlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn0iLCJpbXBvcnQgUGFydGljdWxlIGZyb20gXCIuL3BhcnRpY2xlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbnZhc0JvdW5kIHtcbiAgICBwdWJsaWMgeE1pbjogbnVtYmVyO1xuICAgIHB1YmxpYyB5TWluOiBudW1iZXI7XG4gICAgcHVibGljIHhNYXg6IG51bWJlcjtcbiAgICBwdWJsaWMgeU1heDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoeE1pbjogbnVtYmVyLCB5TWluOiBudW1iZXIsIHhNYXg6IG51bWJlciwgeU1heDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMueE1pbiA9IHhNaW47XG4gICAgICAgIHRoaXMueU1pbiA9IHlNaW47XG4gICAgICAgIHRoaXMueE1heCA9IHhNYXg7XG4gICAgICAgIHRoaXMueU1heCA9IHlNYXg7XG4gICAgfVxuXG4gICAgZ2V0IHdpZHRoKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLnhNYXggLSB0aGlzLnhNaW47XG4gICAgfVxuXG4gICAgZ2V0IGhlaWdodCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy55TWF4IC0gdGhpcy55TWluO1xuICAgIH1cblxuICAgIGdldFJhbmRvbVBhcnRpY3VsZShtYXhBZ2U6IG51bWJlcik6IFBhcnRpY3VsZSB7XG4gICAgICAgIGNvbnN0IHggPSBNYXRoLnJvdW5kKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMud2lkdGgpICsgdGhpcy54TWluKTtcbiAgICAgICAgY29uc3QgeSA9IE1hdGgucm91bmQoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5oZWlnaHQpICsgdGhpcy55TWluKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQYXJ0aWN1bGUoeCwgeSwgbWF4QWdlKTtcbiAgICB9XG5cbiAgICByZXNldFBhcnRpY3VsZShwOiBQYXJ0aWN1bGUpOiBQYXJ0aWN1bGUge1xuICAgICAgICBjb25zdCB4ID0gTWF0aC5yb3VuZChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLndpZHRoKSArIHRoaXMueE1pbik7XG4gICAgICAgIGNvbnN0IHkgPSBNYXRoLnJvdW5kKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMuaGVpZ2h0KSArIHRoaXMueU1pbik7XG4gICAgICAgIHAucmVzZXQoeCwgeSk7XG4gICAgICAgIHJldHVybiBwO1xuICAgIH1cbn1cblxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29sb3JTY2FsZSB7XG4gICAgcHJpdmF0ZSBzY2FsZTogc3RyaW5nW10gPSBbXG4gICAgICAgIFwicmdiKDM2LDEwNCwgMTgwKVwiLFxuICAgICAgICBcInJnYig2MCwxNTcsIDE5NClcIixcbiAgICAgICAgXCJyZ2IoMTI4LDIwNSwxOTMgKVwiLFxuICAgICAgICBcInJnYigxNTEsMjE4LDE2OCApXCIsXG4gICAgICAgIFwicmdiKDE5OCwyMzEsMTgxKVwiLFxuICAgICAgICBcInJnYigyMzgsMjQ3LDIxNylcIixcbiAgICAgICAgXCJyZ2IoMjU1LDIzOCwxNTkpXCIsXG4gICAgICAgIFwicmdiKDI1MiwyMTcsMTI1KVwiLFxuICAgICAgICBcInJnYigyNTUsMTgyLDEwMClcIixcbiAgICAgICAgXCJyZ2IoMjUyLDE1MCw3NSlcIixcbiAgICAgICAgXCJyZ2IoMjUwLDExMiw1MilcIixcbiAgICAgICAgXCJyZ2IoMjQ1LDY0LDMyKVwiLFxuICAgICAgICBcInJnYigyMzcsNDUsMjgpXCIsXG4gICAgICAgIFwicmdiKDIyMCwyNCwzMilcIixcbiAgICAgICAgXCJyZ2IoMTgwLDAsMzUpXCJcbiAgICBdXG4gICAgcHJpdmF0ZSBtaW5WYWx1ZTogbnVtYmVyO1xuICAgIHByaXZhdGUgbWF4VmFsdWU6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKG1pblZhbHVlOiBudW1iZXIsIG1heFZhbHVlOiBudW1iZXIsIHNjYWxlPzogc3RyaW5nW10pIHtcbiAgICAgICAgdGhpcy5zZXRNaW5NYXgobWluVmFsdWUsIG1heFZhbHVlKTtcbiAgICAgICAgaWYgKChzY2FsZSBpbnN0YW5jZW9mIEFycmF5KSAmJiBzY2FsZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuc2NhbGUgPSBzY2FsZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldE1pbk1heChtaW5WYWx1ZTogbnVtYmVyLCBtYXhWYWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMubWluVmFsdWUgPSBtaW5WYWx1ZTtcbiAgICAgICAgdGhpcy5tYXhWYWx1ZSA9IG1heFZhbHVlO1xuICAgIH1cblxuICAgIGdldCBzaXplKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zY2FsZS5sZW5ndGg7XG4gICAgfVxuXG4gICAgZ2V0Q29sb3JJbmRleCh2YWx1ZTogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgaWYgKHZhbHVlIDw9IHRoaXMubWluVmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgICAgIGlmICh2YWx1ZSA+PSB0aGlzLm1heFZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zY2FsZS5sZW5ndGggLSAxO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5zY2FsZS5sZW5ndGggKiAodmFsdWUgLSB0aGlzLm1pblZhbHVlKSAvICh0aGlzLm1heFZhbHVlIC0gdGhpcy5taW5WYWx1ZSk7XG4gICAgICAgIGlmIChpbmRleCA8IDApIHtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpbmRleCA+IHRoaXMuc2NhbGUubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2NhbGUubGVuZ3RoIC0gMTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihpbmRleCk7XG4gICAgfVxuXG4gICAgY29sb3JBdChpbmRleDogbnVtYmVyKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NhbGVbaW5kZXhdO1xuICAgIH1cblxuICAgIGdldENvbG9yKHZhbHVlOiBudW1iZXIpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5zY2FsZVt0aGlzLmdldENvbG9ySW5kZXgodmFsdWUpXTtcbiAgICB9XG59XG4iLCJpbXBvcnQgVmVjdG9yIGZyb20gXCIuL3ZlY3RvclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHcmlkIHtcbiAgICBwcml2YXRlIGRhdGE6IFZlY3RvcltdO1xuICAgIHByaXZhdGUgz4YwOiBudW1iZXI7XG4gICAgcHJpdmF0ZSDOuzA6IG51bWJlcjtcbiAgICBwcml2YXRlIM6Uzrs6IG51bWJlcjtcbiAgICBwcml2YXRlIM6Uz4Y6IG51bWJlcjtcbiAgICBwcml2YXRlIGhlaWdodDogbnVtYmVyO1xuICAgIHByaXZhdGUgd2lkdGg6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE6IFZlY3RvcltdLCDPhjA6IG51bWJlciwgzrswOiBudW1iZXIsIM6Uz4Y6IG51bWJlciwgzpTOuzogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgd2lkdGg6IG51bWJlcikge1xuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgICAgICB0aGlzLs+GMCA9IM+GMDtcbiAgICAgICAgdGhpcy7OuzAgPSDOuzA7XG4gICAgICAgIHRoaXMuzpTOuyA9IM6Uzrs7XG4gICAgICAgIHRoaXMuzpTPhiA9IM6Uz4Y7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgfVxuXG4gICAgZ2V0IHZhbHVlUmFuZ2UoKTogbnVtYmVyW10ge1xuICAgICAgICBpZiAoIXRoaXMuZGF0YS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiBbMCwgMF07XG4gICAgICAgIH1cbiAgICAgICAgbGV0IG1pbiA9IHRoaXMuZGF0YVswXS5pbnRlbnNpdHk7XG4gICAgICAgIGxldCBtYXggPSB0aGlzLmRhdGFbMF0uaW50ZW5zaXR5O1xuICAgICAgICB0aGlzLmRhdGEuZm9yRWFjaCgodmFsdWU6IFZlY3RvcikgPT4ge1xuICAgICAgICAgICAgbWluID0gTWF0aC5taW4obWluLCB2YWx1ZS5pbnRlbnNpdHkpO1xuICAgICAgICAgICAgbWF4ID0gTWF0aC5tYXgobWF4LCB2YWx1ZS5pbnRlbnNpdHkpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIFttaW4sIG1heF07XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldCB2ZWN0b3IgYXQgYW55IHBvaW50XG4gICAgICogQHBhcmFtIM67IExvbmdpdHVkZVxuICAgICAqIEBwYXJhbSDPhiBMYXRpdHVkZVxuICAgICAqL1xuICAgIGdldCjOuzogbnVtYmVyLCDPhjogbnVtYmVyKTogVmVjdG9yIHtcbiAgICAgICAgY29uc3QgZs67ID0gdGhpcy5mbG9vck1vZCjOuyAtIHRoaXMuzrswLCAzNjApIC8gdGhpcy7OlM67OyAgLy8gY2FsY3VsYXRlIGxvbmdpdHVkZSBpbmRleCBpbiB3cmFwcGVkIHJhbmdlIFswLCAzNjApXG4gICAgICAgIGNvbnN0IGbPhiA9ICh0aGlzLs+GMCAtIM+GKSAvIHRoaXMuzpTPhjsgICAgICAgICAgICAgICAgIC8vIGNhbGN1bGF0ZSBsYXRpdHVkZSBpbmRleCBpbiBkaXJlY3Rpb24gKzkwIHRvIC05MFxuXG4gICAgICAgIGNvbnN0IGnOuyA9IE1hdGguZmxvb3IoZs67KSAvLyBjb2wgblxuICAgICAgICBsZXQgas67ID0gac67ICsgMTsgICAgICAgIC8vIGNvbCBuKzFcbiAgICAgICAgaWYgKGrOuyA+PSB0aGlzLndpZHRoKSB7XG4gICAgICAgICAgICBqzrsgPSB0aGlzLs67MDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBpz4YgPSBNYXRoLmZsb29yKGbPhikgLy8gbGluZSBtXG4gICAgICAgIGxldCBqz4YgPSBpz4YgKyAxOyAgICAgICAgLy8gbGluZSBtKzFcbiAgICAgICAgaWYgKGrPhiA+PSB0aGlzLmhlaWdodCkge1xuICAgICAgICAgICAgas+GID0gac+GO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgds67ID0gZs67IC0gac67OyAgIC8vIGNvbCB2YXJpYXRpb24gWzAuLjFdXG4gICAgICAgIGNvbnN0IHbPhiA9IGbPhiAtIGnPhjsgICAvLyBsaW5lIHZhcmlhdGlvbiBbMC4uMV1cblxuICAgICAgICBpZiAoac67ID49IDAgJiYgac+GID49IDAgJiYgac67IDwgdGhpcy53aWR0aCAmJiBpz4YgPCB0aGlzLmhlaWdodCkge1xuICAgICAgICAgICAgbGV0IGcwMCA9IHRoaXMuZGF0YVtpzrsgKyBpz4YgKiB0aGlzLndpZHRoXTtcbiAgICAgICAgICAgIGxldCBnMTAgPSB0aGlzLmRhdGFbas67ICsgac+GICogdGhpcy53aWR0aF07XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmlzVmFsdWUoZzAwKSAmJiB0aGlzLmlzVmFsdWUoZzEwKSkge1xuICAgICAgICAgICAgICAgIGxldCBnMDEgPSB0aGlzLmRhdGFbac67ICsgas+GICogdGhpcy53aWR0aF07XG4gICAgICAgICAgICAgICAgbGV0IGcxMSA9IHRoaXMuZGF0YVtqzrsgKyBqz4YgKiB0aGlzLndpZHRoXTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1ZhbHVlKGcwMSkgJiYgdGhpcy5pc1ZhbHVlKGcxMSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbihcbiAgICAgICAgICAgICAgICAgICAgICAgIHbOuyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHbPhixcbiAgICAgICAgICAgICAgICAgICAgICAgIGcwMCwgLy9sMGMwXG4gICAgICAgICAgICAgICAgICAgICAgICBnMTAsIC8vbDBjMVxuICAgICAgICAgICAgICAgICAgICAgICAgZzAxLCAvL2wxYzBcbiAgICAgICAgICAgICAgICAgICAgICAgIGcxMSAgLy9sMWNsXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IoMCwgMCk7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbnRlcnBvbGF0ZSB2YWx1ZVxuICAgICAqIEBwYXJhbSB4IHZhcmlhdGlvbiBiZXR3ZWVuIGcwKiBhbmQgZzEqXG4gICAgICogQHBhcmFtIHkgdmFyaWF0aW9uIGJldHdlZW4gZyowIGRhbnMgZyoxXG4gICAgICogQHBhcmFtIGcwMCBwb2ludCBhdCBjb2xfMCBhbmQgbGluZV8wXG4gICAgICogQHBhcmFtIGcxMCBwb2ludCBhdCBjb2xfMSBhbmQgbGluZV8wXG4gICAgICogQHBhcmFtIGcwMSBwb2ludCBhdCBjb2xfMCBhbmQgbGluZV8xXG4gICAgICogQHBhcmFtIGcxMSBwb2ludCBhdCBjb2xfMSBhbmQgbGluZV8xXG4gICAgICogQHJldHVybiBpbnRlcnBvbGF0ZWQgdmVjdG9yXG4gICAgICovXG4gICAgaW50ZXJwb2xhdGlvbih4OiBudW1iZXIsIHk6IG51bWJlciwgZzAwOiBWZWN0b3IsIGcxMDogVmVjdG9yLCBnMDE6IFZlY3RvciwgZzExOiBWZWN0b3IpOiBWZWN0b3Ige1xuICAgICAgICB2YXIgcnggPSAoMSAtIHgpO1xuICAgICAgICB2YXIgcnkgPSAoMSAtIHkpO1xuICAgICAgICB2YXIgYSA9IHJ4ICogcnksXG4gICAgICAgICAgICBiID0geCAqIHJ5LFxuICAgICAgICAgICAgYyA9IHJ4ICogeSxcbiAgICAgICAgICAgIGQgPSB4ICogeTtcbiAgICAgICAgdmFyIHUgPSBnMDAudSAqIGEgKyBnMTAudSAqIGIgKyBnMDEudSAqIGMgKyBnMTEudSAqIGQ7XG4gICAgICAgIHZhciB2ID0gZzAwLnYgKiBhICsgZzEwLnYgKiBiICsgZzAxLnYgKiBjICsgZzExLnYgKiBkO1xuICAgICAgICByZXR1cm4gbmV3IFZlY3Rvcih1LCB2KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDdXN0b20gbW9kdWxvXG4gICAgICogQHJldHVybnMge251bWJlcn0gcmV0dXJucyByZW1haW5kZXIgb2YgZmxvb3JlZCBkaXZpc2lvbiwgaS5lLiwgZmxvb3IoYSAvIG4pLiBVc2VmdWwgZm9yIGNvbnNpc3RlbnQgbW9kdWxvXG4gICAgICogICAgICAgICAgb2YgbmVnYXRpdmUgbnVtYmVycy4gU2VlIGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvTW9kdWxvX29wZXJhdGlvbi5cbiAgICAgKi9cbiAgICBmbG9vck1vZChhOiBudW1iZXIsIG46IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIHJldHVybiBhIC0gbiAqIE1hdGguZmxvb3IoYSAvIG4pO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBEZXRlY3QgaWYgeCBpcyBhIHZhbHVlXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59IHRydWUgaWYgdGhlIHNwZWNpZmllZCB2YWx1ZSBpcyBub3QgbnVsbCBhbmQgbm90IHVuZGVmaW5lZC5cbiAgICAgKi9cbiAgICBpc1ZhbHVlKHg6IGFueSk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4geCAhPT0gbnVsbCAmJiB4ICE9PSB1bmRlZmluZWQ7XG4gICAgfTtcbn1cbiIsImltcG9ydCBNYXBCb3VuZCBmcm9tIFwiLi9tYXBCb3VuZFwiO1xuaW1wb3J0IENhbnZhc0JvdW5kIGZyb20gXCIuL2NhbnZhc0JvdW5kXCI7XG5pbXBvcnQgVmVjdG9yIGZyb20gXCIuL3ZlY3RvclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBsYXllciB7XG5cbiAgICBwdWJsaWMgbWFwQm91bmQ6IE1hcEJvdW5kO1xuICAgIHB1YmxpYyBjYW52YXNCb3VuZDogQ2FudmFzQm91bmQ7XG5cbiAgICBjb25zdHJ1Y3RvcihtYXBCb3VuZDogTWFwQm91bmQsIGNhbnZhc0JvdW5kOiBDYW52YXNCb3VuZCkge1xuICAgICAgICB0aGlzLmNhbnZhc0JvdW5kID0gY2FudmFzQm91bmQ7XG4gICAgICAgIHRoaXMubWFwQm91bmQgPSBtYXBCb3VuZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBGaW5kIGdlb2Nvb3JkaW5hdGUgZnJvbSBjYW52YXMgcG9pbnRcbiAgICAgKiBAcGFyYW0geCBcbiAgICAgKiBAcGFyYW0geSBcbiAgICAgKiByZXR1cm4gW2xuZywgbGF0XVxuICAgICAqL1xuICAgIGNhbnZhc1RvTWFwKHg6IG51bWJlciwgeTogbnVtYmVyKTogbnVtYmVyW10ge1xuICAgICAgICBjb25zdCBtYXBMb25EZWx0YSA9IHRoaXMubWFwQm91bmQuZWFzdCAtIHRoaXMubWFwQm91bmQud2VzdDtcbiAgICAgICAgY29uc3Qgd29ybGRNYXBSYWRpdXMgPSAodGhpcy5jYW52YXNCb3VuZC53aWR0aCAvIHRoaXMucmFkMmRlZyhtYXBMb25EZWx0YSkpICogMzYwIC8gKDIgKiBNYXRoLlBJKTtcbiAgICAgICAgY29uc3QgbWFwT2Zmc2V0WSA9ICh3b3JsZE1hcFJhZGl1cyAvIDIgKiBNYXRoLmxvZygoMSArIE1hdGguc2luKHRoaXMubWFwQm91bmQuc291dGgpKSAvICgxIC0gTWF0aC5zaW4odGhpcy5tYXBCb3VuZC5zb3V0aCkpKSk7XG4gICAgICAgIGNvbnN0IGVxdWF0b3JZID0gdGhpcy5jYW52YXNCb3VuZC5oZWlnaHQgKyBtYXBPZmZzZXRZO1xuICAgICAgICBjb25zdCBhID0gKGVxdWF0b3JZIC0geSkgLyB3b3JsZE1hcFJhZGl1cztcblxuICAgICAgICBjb25zdCDPhiA9IDE4MCAvIE1hdGguUEkgKiAoMiAqIE1hdGguYXRhbihNYXRoLmV4cChhKSkgLSBNYXRoLlBJIC8gMik7XG4gICAgICAgIGNvbnN0IM67ID0gdGhpcy5yYWQyZGVnKHRoaXMubWFwQm91bmQud2VzdCkgKyB4IC8gdGhpcy5jYW52YXNCb3VuZC53aWR0aCAqIHRoaXMucmFkMmRlZyhtYXBMb25EZWx0YSk7XG4gICAgICAgIHJldHVybiBbzrssIM+GXTtcbiAgICB9O1xuXG4gICAgbWVyY1koz4Y6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIHJldHVybiBNYXRoLmxvZyhNYXRoLnRhbijPhiAvIDIgKyBNYXRoLlBJIC8gNCkpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBQcm9qZWN0IGEgcG9pbnQgb24gdGhlIG1hcFxuICAgICAqIEBwYXJhbSDOuyBMb25naXR1ZGVcbiAgICAgKiBAcGFyYW0gz4YgTGF0aXR1ZGVcbiAgICAgKiBAcmV0dXJuIFt4LCB5XVxuICAgICAqL1xuICAgIG1hcFRvQ2FudmFzKM67OiBudW1iZXIsIM+GOiBudW1iZXIpOiBudW1iZXJbXSB7XG4gICAgICAgIGNvbnN0IHltaW4gPSB0aGlzLm1lcmNZKHRoaXMubWFwQm91bmQuc291dGgpO1xuICAgICAgICBjb25zdCB5bWF4ID0gdGhpcy5tZXJjWSh0aGlzLm1hcEJvdW5kLm5vcnRoKTtcbiAgICAgICAgY29uc3QgeEZhY3RvciA9IHRoaXMuY2FudmFzQm91bmQud2lkdGggLyAodGhpcy5tYXBCb3VuZC5lYXN0IC0gdGhpcy5tYXBCb3VuZC53ZXN0KTtcbiAgICAgICAgY29uc3QgeUZhY3RvciA9IHRoaXMuY2FudmFzQm91bmQuaGVpZ2h0IC8gKHltYXggLSB5bWluKTtcblxuICAgICAgICBsZXQgeSA9IHRoaXMubWVyY1kodGhpcy5kZWcycmFkKM+GKSk7XG4gICAgICAgIGNvbnN0IHggPSAodGhpcy5kZWcycmFkKM67KSAtIHRoaXMubWFwQm91bmQud2VzdCkgKiB4RmFjdG9yO1xuICAgICAgICB5ID0gKHltYXggLSB5KSAqIHlGYWN0b3I7XG4gICAgICAgIHJldHVybiBbeCwgeV07XG4gICAgfTtcblxuXG4gICAgZGVnMnJhZChkZWc6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIHJldHVybiBkZWcgKiBNYXRoLlBJIC8gMTgwO1xuICAgIH07XG5cbiAgICByYWQyZGVnKHJhZDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHJhZCAqIDE4MCAvIE1hdGguUEk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEBwYXJhbSDOuyBMb25naXR1ZGVcbiAgICAgKiBAcGFyYW0gz4YgTGF0aXR1ZGVcbiAgICAgKiBAcGFyYW0geCBcbiAgICAgKiBAcGFyYW0geSBcbiAgICAgKiBAcmV0dXJuIFtdXG4gICAgICovXG4gICAgZGlzdG9ydGlvbijOuzogbnVtYmVyLCDPhjogbnVtYmVyLCB4OiBudW1iZXIsIHk6IG51bWJlcik6IG51bWJlcltdIHtcbiAgICAgICAgY29uc3Qgz4QgPSAyICogTWF0aC5QSTtcbiAgICAgICAgLy9Ac2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9kYW53aWxkL2xlYWZsZXQtdmVsb2NpdHkvaXNzdWVzLzE1I2lzc3VlY29tbWVudC0zNDUyNjA3NjhcbiAgICAgICAgY29uc3QgSCA9IDU7XG4gICAgICAgIGNvbnN0IGjOuyA9IM67IDwgMCA/IEggOiAtSDtcbiAgICAgICAgY29uc3QgaM+GID0gz4YgPCAwID8gSCA6IC1IO1xuXG4gICAgICAgIGNvbnN0IHDOuyA9IHRoaXMubWFwVG9DYW52YXMozrsgKyBozrssIM+GKTtcbiAgICAgICAgY29uc3QgcM+GID0gdGhpcy5tYXBUb0NhbnZhcyjOuywgz4YgKyBoz4YpO1xuXG4gICAgICAgIC8vIE1lcmlkaWFuIHNjYWxlIGZhY3RvciAoc2VlIFNueWRlciwgZXF1YXRpb24gNC0zKSwgd2hlcmUgUiA9IDEuIFRoaXMgaGFuZGxlcyBpc3N1ZSB3aGVyZSBsZW5ndGggb2YgMcK6IM67XG4gICAgICAgIC8vIGNoYW5nZXMgZGVwZW5kaW5nIG9uIM+GLiBXaXRob3V0IHRoaXMsIHRoZXJlIGlzIGEgcGluY2hpbmcgZWZmZWN0IGF0IHRoZSBwb2xlcy5cbiAgICAgICAgY29uc3QgayA9IE1hdGguY29zKM+GIC8gMzYwICogz4QpO1xuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgKHDOu1swXSAtIHgpIC8gaM67IC8gayxcbiAgICAgICAgICAgIChwzrtbMV0gLSB5KSAvIGjOuyAvIGssXG4gICAgICAgICAgICAocM+GWzBdIC0geCkgLyBoz4YsXG4gICAgICAgICAgICAocM+GWzFdIC0geSkgLyBoz4ZcbiAgICAgICAgXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYWxjdWxhdGUgZGlzdG9ydGlvbiBvZiB0aGUgd2luZCB2ZWN0b3IgY2F1c2VkIGJ5IHRoZSBzaGFwZSBvZiB0aGUgcHJvamVjdGlvbiBhdCBwb2ludCAoeCwgeSkuIFRoZSB3aW5kXG4gICAgICogdmVjdG9yIGlzIG1vZGlmaWVkIGluIHBsYWNlIGFuZCByZXR1cm5lZCBieSB0aGlzIGZ1bmN0aW9uLlxuICAgICAqIEBwYXJhbSDOuyBcbiAgICAgKiBAcGFyYW0gz4YgXG4gICAgICogQHBhcmFtIHggXG4gICAgICogQHBhcmFtIHkgXG4gICAgICogQHBhcmFtIHNjYWxlIHNjYWxlIGZhY3RvclxuICAgICAqIEBwYXJhbSB3aW5kIFt1LCB2XVxuICAgICAqIEByZXR1cm4gW11cbiAgICAgKi9cbiAgICBkaXN0b3J0KM67OiBudW1iZXIsIM+GOiBudW1iZXIsIHg6IG51bWJlciwgeTogbnVtYmVyLCBzY2FsZTogbnVtYmVyLCB3aW5kOiBWZWN0b3IpOiBWZWN0b3Ige1xuICAgICAgICBjb25zdCB1ID0gd2luZC51ICogc2NhbGU7XG4gICAgICAgIGNvbnN0IHYgPSB3aW5kLnYgKiBzY2FsZTtcbiAgICAgICAgY29uc3QgZCA9IHRoaXMuZGlzdG9ydGlvbijOuywgz4YsIHgsIHkpO1xuXG4gICAgICAgIC8vIFNjYWxlIGRpc3RvcnRpb24gdmVjdG9ycyBieSB1IGFuZCB2LCB0aGVuIGFkZC5cbiAgICAgICAgd2luZC51ID0gZFswXSAqIHUgKyBkWzJdICogdjtcbiAgICAgICAgd2luZC52ID0gZFsxXSAqIHUgKyBkWzNdICogdjtcbiAgICAgICAgcmV0dXJuIHdpbmQ7XG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hcEJvdW5kIHtcbiAgICBwdWJsaWMgc291dGg6IG51bWJlcjtcbiAgICBwdWJsaWMgbm9ydGg6IG51bWJlcjtcbiAgICBwdWJsaWMgZWFzdDogbnVtYmVyO1xuICAgIHB1YmxpYyB3ZXN0OiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3Rvcihub3J0aDogbnVtYmVyLCBlYXN0OiBudW1iZXIsIHNvdXRoOiBudW1iZXIsIHdlc3Q6IG51bWJlcikge1xuICAgICAgICB0aGlzLm5vcnRoID0gbm9ydGggKiBNYXRoLlBJIC8gMTgwO1xuICAgICAgICB0aGlzLmVhc3QgPSBlYXN0ICogTWF0aC5QSSAvIDE4MDtcbiAgICAgICAgdGhpcy5zb3V0aCA9IHNvdXRoICogTWF0aC5QSSAvIDE4MDtcbiAgICAgICAgdGhpcy53ZXN0ID0gd2VzdCAqIE1hdGguUEkgLyAxODA7XG4gICAgfVxuXG4gICAgZ2V0IHdpZHRoKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiAoNzIwICsgdGhpcy5lYXN0IC0gdGhpcy53ZXN0KSAlIDM2MDtcbiAgICB9XG5cbiAgICBnZXQgaGVpZ2h0KCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiAoMzYwICsgdGhpcy5ub3J0aCAtIHRoaXMuc291dGgpICUgMTgwO1xuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQYXJ0aWN1bGUge1xuICAgIHB1YmxpYyB4OiBudW1iZXI7XG4gICAgcHVibGljIHk6IG51bWJlcjtcbiAgICBwdWJsaWMgYWdlOiBudW1iZXI7XG4gICAgcHVibGljIG1heEFnZTogbnVtYmVyO1xuICAgIHB1YmxpYyB4dDogbnVtYmVyO1xuICAgIHB1YmxpYyB5dDogbnVtYmVyO1xuICAgIHB1YmxpYyBpbnRlbnNpdHk6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKHg6IG51bWJlciwgeTogbnVtYmVyLCBtYXhBZ2U6IG51bWJlcikge1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgICAgICB0aGlzLmFnZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG1heEFnZSk7XG4gICAgICAgIHRoaXMubWF4QWdlID0gbWF4QWdlO1xuICAgIH1cblxuICAgIHJlc2V0KHg6IG51bWJlciwgeTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgICAgIHRoaXMuYWdlID0gMDtcbiAgICB9XG5cbiAgICBnZXQgaXNEZWFkKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5hZ2UgPiB0aGlzLm1heEFnZTtcbiAgICB9XG5cbiAgICBncm93KCkge1xuICAgICAgICB0aGlzLmFnZSsrO1xuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBWZWN0b3Ige1xuICAgIHB1YmxpYyB1OiBudW1iZXI7XG4gICAgcHVibGljIHY6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKHU/OiBudW1iZXIsIHY/OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy51ID0gdSB8fCAwO1xuICAgICAgICB0aGlzLnYgPSB2IHx8IDA7XG4gICAgfVxuXG4gICAgZ2V0IGludGVuc2l0eSgpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydCh0aGlzLnUgKiB0aGlzLnUgKyB0aGlzLnYgKiB0aGlzLnYpO1xuICAgIH1cbn0iLCJpbXBvcnQgTWFwQm91bmQgZnJvbSBcIi4vbWFwQm91bmRcIjtcclxuaW1wb3J0IFZlY3RvciBmcm9tIFwiLi92ZWN0b3JcIjtcclxuaW1wb3J0IEdyaWQgZnJvbSBcIi4vZ3JpZFwiO1xyXG5pbXBvcnQgQ29sb3JTY2FsZSBmcm9tIFwiLi9jb2xvclNjYWxlXCI7XHJcbmltcG9ydCBDYW52YXNCb3VuZCBmcm9tIFwiLi9jYW52YXNCb3VuZFwiO1xyXG5pbXBvcnQgUGFydGljdWxlIGZyb20gXCIuL3BhcnRpY2xlXCI7XHJcbmltcG9ydCBBbmltYXRpb25CdWNrZXQgZnJvbSBcIi4vYW5pbWF0aW9uQnVja2V0XCI7XHJcbmltcG9ydCBMYXllciBmcm9tIFwiLi9sYXllclwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBXaW5keU9wdGlvbnMge1xyXG4gIGNhbnZhczogYW55O1xyXG4gIGRhdGE6IGFueTtcclxuICBjb2xvclNjYWxlOiBzdHJpbmdbXTtcclxuICBtYXhWZWxvY2l0eTogbnVtYmVyO1xyXG4gIG1pblZlbG9jaXR5OiBudW1iZXI7XHJcbiAgdmVsb2NpdHlTY2FsZTogbnVtYmVyO1xyXG4gIHBhcnRpY2xlQWdlOiBudW1iZXI7XHJcbiAgcGFydGljbGVNdWx0aXBsaWVyOiBudW1iZXI7XHJcbiAgcGFydGljbGVsaW5lV2lkdGg6IG51bWJlcjtcclxuICBmcmFtZVJhdGU6IG51bWJlcjtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXaW5keSB7XHJcblxyXG4gIHByaXZhdGUgZ3JpZDogYW55O1xyXG4gIHByaXZhdGUgzrswOiBudW1iZXI7XHJcbiAgcHJpdmF0ZSDPhjA6IG51bWJlcjtcclxuICBwcml2YXRlIM6Uzrs6IG51bWJlcjtcclxuICBwcml2YXRlIM6Uz4Y6IG51bWJlcjtcclxuICBwcml2YXRlIG5pOiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBuajogbnVtYmVyO1xyXG4gIHByaXZhdGUgY2FudmFzOiBhbnkgPSBudWxsO1xyXG4gIHByaXZhdGUgY29sb3JTY2FsZTogQ29sb3JTY2FsZTtcclxuICBwcml2YXRlIHZlbG9jaXR5U2NhbGU6IG51bWJlcjtcclxuICBwcml2YXRlIHBhcnRpY2xlTXVsdGlwbGllciA9IDEgLyAzMDA7XHJcbiAgcHJpdmF0ZSBwYXJ0aWNsZUFnZTogbnVtYmVyO1xyXG4gIHByaXZhdGUgcGFydGljbGVMaW5lV2lkdGg6IG51bWJlcjtcclxuICBwcml2YXRlIGF1dG9Db2xvclJhbmdlID0gZmFsc2U7XHJcblxyXG4gIHByaXZhdGUgbGF5ZXI6IExheWVyO1xyXG4gIHByaXZhdGUgcGFydGljdWxlczogUGFydGljdWxlW10gPSBbXTtcclxuICBwcml2YXRlIGFuaW1hdGlvbkJ1Y2tldDogQW5pbWF0aW9uQnVja2V0O1xyXG4gIHByaXZhdGUgY29udGV4dDJEOiBhbnk7XHJcbiAgcHJpdmF0ZSBhbmltYXRpb25Mb29wOiBhbnkgPSBudWxsO1xyXG4gIHByaXZhdGUgZnJhbWVUaW1lOiBudW1iZXI7XHJcbiAgcHJpdmF0ZSB0aGVuID0gMDtcclxuXHJcblxyXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnM6IFdpbmR5T3B0aW9ucykge1xyXG4gICAgdGhpcy5zZXRPcHRpb25zKG9wdGlvbnMpO1xyXG4gIH1cclxuXHJcbiAgc2V0T3B0aW9ucyhvcHRpb25zOiBXaW5keU9wdGlvbnMpIHtcclxuICAgIHRoaXMuY2FudmFzID0gb3B0aW9ucy5jYW52YXM7XHJcbiAgICBpZiAob3B0aW9ucy5taW5WZWxvY2l0eSA9PT0gdW5kZWZpbmVkICYmIG9wdGlvbnMubWF4VmVsb2NpdHkgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aGlzLmF1dG9Db2xvclJhbmdlID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIHRoaXMuY29sb3JTY2FsZSA9IG5ldyBDb2xvclNjYWxlKG9wdGlvbnMubWluVmVsb2NpdHkgfHwgMCwgb3B0aW9ucy5tYXhWZWxvY2l0eSB8fCAxMCwgb3B0aW9ucy5jb2xvclNjYWxlKTtcclxuICAgIHRoaXMudmVsb2NpdHlTY2FsZSA9IG9wdGlvbnMudmVsb2NpdHlTY2FsZSB8fCAwLjAxO1xyXG4gICAgdGhpcy5wYXJ0aWNsZUFnZSA9IG9wdGlvbnMucGFydGljbGVBZ2UgfHwgNjQ7XHJcbiAgICB0aGlzLnNldERhdGEob3B0aW9ucy5kYXRhKTtcclxuICAgIHRoaXMucGFydGljbGVNdWx0aXBsaWVyID0gb3B0aW9ucy5wYXJ0aWNsZU11bHRpcGxpZXIgfHwgMSAvIDMwMDtcclxuICAgIHRoaXMucGFydGljbGVMaW5lV2lkdGggPSBvcHRpb25zLnBhcnRpY2xlbGluZVdpZHRoIHx8IDE7XHJcbiAgICBjb25zdCBmcmFtZVJhdGUgPSBvcHRpb25zLmZyYW1lUmF0ZSB8fCAxNTtcclxuICAgIHRoaXMuZnJhbWVUaW1lID0gMTAwMCAvIGZyYW1lUmF0ZTtcclxuICB9XHJcblxyXG4gIGdldCBwYXJ0aWN1bGVDb3VudCgpIHtcclxuICAgIGNvbnN0IHBhcnRpY3VsZVJlZHVjdGlvbiA9ICgoL2FuZHJvaWR8YmxhY2tiZXJyeXxpZW1vYmlsZXxpcGFkfGlwaG9uZXxpcG9kfG9wZXJhIG1pbml8d2Vib3MvaSkudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSkgPyAoTWF0aC5wb3cod2luZG93LmRldmljZVBpeGVsUmF0aW8sIDEgLyAzKSB8fCAxLjYpIDogMTtcclxuICAgIHJldHVybiBNYXRoLnJvdW5kKHRoaXMubGF5ZXIuY2FudmFzQm91bmQud2lkdGggKiB0aGlzLmxheWVyLmNhbnZhc0JvdW5kLmhlaWdodCAqIHRoaXMucGFydGljbGVNdWx0aXBsaWVyKSAqIHBhcnRpY3VsZVJlZHVjdGlvbjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIExvYWQgZGF0YVxyXG4gICAqIEBwYXJhbSBkYXRhXHJcbiAgICovXHJcbiAgc2V0RGF0YShkYXRhOiBhbnlbXSkge1xyXG4gICAgbGV0IHVEYXRhOiBhbnkgPSBudWxsO1xyXG4gICAgbGV0IHZEYXRhOiBhbnkgPSBudWxsO1xyXG4gICAgY29uc3QgZ3JpZDogVmVjdG9yW10gPSBbXTtcclxuXHJcbiAgICBkYXRhLmZvckVhY2goKHJlY29yZCkgPT4ge1xyXG4gICAgICBzd2l0Y2ggKGAke3JlY29yZC5oZWFkZXIucGFyYW1ldGVyQ2F0ZWdvcnl9LCR7cmVjb3JkLmhlYWRlci5wYXJhbWV0ZXJOdW1iZXJ9YCkge1xyXG4gICAgICAgIGNhc2UgXCIxLDJcIjpcclxuICAgICAgICBjYXNlIFwiMiwyXCI6XHJcbiAgICAgICAgICB1RGF0YSA9IHJlY29yZDtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCIxLDNcIjpcclxuICAgICAgICBjYXNlIFwiMiwzXCI6XHJcbiAgICAgICAgICB2RGF0YSA9IHJlY29yZDtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGlmICghdURhdGEgfHwgIXZEYXRhKSB7XHJcbiAgICAgIGNvbnNvbGUud2FybihcIkRhdGEgYXJlIG5vdCBjb3JyZWN0IGZvcm1hdFwiKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHVEYXRhLmRhdGEuZm9yRWFjaCgodTogbnVtYmVyLCBpbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICAgIGdyaWQucHVzaChuZXcgVmVjdG9yKHUsIHZEYXRhLmRhdGFbaW5kZXhdKSk7XHJcbiAgICB9KVxyXG5cclxuICAgIC8vY29uc29sZS5sb2coJ3VEYXRhJywgdURhdGEpO1xyXG4gICAgLy9jb25zb2xlLmxvZygndkRhdGEnLCB2RGF0YSk7XHJcblxyXG4gICAgdGhpcy5ncmlkID0gbmV3IEdyaWQoXHJcbiAgICAgIGdyaWQsXHJcbiAgICAgIHVEYXRhLmhlYWRlci5sYTEsXHJcbiAgICAgIHVEYXRhLmhlYWRlci5sbzEsXHJcbiAgICAgIHVEYXRhLmhlYWRlci5keSxcclxuICAgICAgdURhdGEuaGVhZGVyLmR4LFxyXG4gICAgICB1RGF0YS5oZWFkZXIubnksXHJcbiAgICAgIHVEYXRhLmhlYWRlci5ueFxyXG4gICAgKTtcclxuXHJcbiAgICB0aGlzLs67MCA9IHVEYXRhLmhlYWRlci5sbzE7XHJcbiAgICB0aGlzLs+GMCA9IHVEYXRhLmhlYWRlci5sYTE7XHJcblxyXG4gICAgdGhpcy7OlM67ID0gdURhdGEuaGVhZGVyLmR4O1xyXG4gICAgdGhpcy7OlM+GID0gdURhdGEuaGVhZGVyLmR5XHJcblxyXG4gICAgdGhpcy5uaSA9IHVEYXRhLmhlYWRlci5ueDtcclxuICAgIHRoaXMubmogPSB1RGF0YS5oZWFkZXIubnk7IC8vIG51bWJlciBvZiBncmlkIHBvaW50cyBXLUUgYW5kIE4tUyAoZS5nLiwgMTQ0IHggNzMpXHJcblxyXG4gICAgdmFyIHAgPSAwO1xyXG4gICAgdmFyIGlzQ29udGludW91cyA9IE1hdGguZmxvb3IodGhpcy5uaSAqIHRoaXMuzpTOuykgPj0gMzYwO1xyXG5cclxuICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGhpcy5uajsgaisrKSB7XHJcbiAgICAgIHZhciByb3cgPSBbXTtcclxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm5pOyBpKyssIHArKykge1xyXG4gICAgICAgIHJvd1tpXSA9IHRoaXMuZ3JpZC5kYXRhW3BdO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChpc0NvbnRpbnVvdXMpIHtcclxuICAgICAgICAvLyBGb3Igd3JhcHBlZCBncmlkcywgZHVwbGljYXRlIGZpcnN0IGNvbHVtbiBhcyBsYXN0IGNvbHVtbiB0byBzaW1wbGlmeSBpbnRlcnBvbGF0aW9uIGxvZ2ljXHJcbiAgICAgICAgcm93LnB1c2gocm93WzBdKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmdyaWRbal0gPSByb3c7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuYXV0b0NvbG9yUmFuZ2UpIHtcclxuICAgICAgY29uc3QgbWluTWF4ID0gdGhpcy5ncmlkLnZhbHVlUmFuZ2U7XHJcbiAgICAgIHRoaXMuY29sb3JTY2FsZS5zZXRNaW5NYXgobWluTWF4WzBdLCBtaW5NYXhbMV0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZmxvb3JNb2QoYTogbnVtYmVyLCBuOiBudW1iZXIpIHtcclxuICAgIHJldHVybiBhIC0gbiAqIE1hdGguZmxvb3IoYSAvIG4pO1xyXG4gIH07XHJcblxyXG4gIGlzVmFsdWUoeDogYW55KSB7XHJcbiAgICByZXR1cm4geCAhPT0gbnVsbCAmJiB4ICE9PSB1bmRlZmluZWQ7XHJcbiAgfTtcclxuXHJcbiAgYmlsaW5lYXJJbnRlcnBvbGF0ZVZlY3Rvcih4OiBudW1iZXIsIHk6IG51bWJlciwgZzAwOiBhbnksIGcxMDogYW55LCBnMDE6IGFueSwgZzExOiBhbnkpIHtcclxuICAgIHZhciByeCA9ICgxIC0geCk7XHJcbiAgICB2YXIgcnkgPSAoMSAtIHkpO1xyXG4gICAgdmFyIGEgPSByeCAqIHJ5LCBiID0geCAqIHJ5LCBjID0gcnggKiB5LCBkID0geCAqIHk7XHJcbiAgICB2YXIgdSA9IGcwMC51ICogYSArIGcxMC51ICogYiArIGcwMS51ICogYyArIGcxMS51ICogZDtcclxuICAgIHZhciB2ID0gZzAwLnYgKiBhICsgZzEwLnYgKiBiICsgZzAxLnYgKiBjICsgZzExLnYgKiBkO1xyXG4gICAgcmV0dXJuIFt1LCB2LCBNYXRoLnNxcnQodSAqIHUgKyB2ICogdildO1xyXG4gIH07XHJcblxyXG4gIC8qIEdldCBpbnRlcnBvbGF0ZWQgZ3JpZCB2YWx1ZSBmcm9tIExvbi9MYXQgcG9zaXRpb25cclxuICAqIEBwYXJhbSDOuyB7RmxvYXR9IExvbmdpdHVkZVxyXG4gICogQHBhcmFtIM+GIHtGbG9hdH0gTGF0aXR1ZGVcclxuICAqIEByZXR1cm5zIHtPYmplY3R9XHJcbiAgKi9cclxuICBpbnRlcnBvbGF0ZSjOuzogbnVtYmVyLCDPhjogbnVtYmVyKTogYW55IHtcclxuICAgIGlmICghdGhpcy5ncmlkKSB7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgdmFyIGkgPSB0aGlzLmZsb29yTW9kKM67IC0gdGhpcy7OuzAsIDM2MCkgLyB0aGlzLs6Uzrs7IC8vIGNhbGN1bGF0ZSBsb25naXR1ZGUgaW5kZXggaW4gd3JhcHBlZCByYW5nZSBbMCwgMzYwKVxyXG4gICAgdmFyIGogPSAodGhpcy7PhjAgLSDPhikgLyB0aGlzLs6Uz4Y7IC8vIGNhbGN1bGF0ZSBsYXRpdHVkZSBpbmRleCBpbiBkaXJlY3Rpb24gKzkwIHRvIC05MFxyXG5cclxuICAgIHZhciBmaSA9IE1hdGguZmxvb3IoaSk7XHJcbiAgICB2YXIgY2kgPSBmaSArIDE7XHJcbiAgICB2YXIgZmogPSBNYXRoLmZsb29yKGopO1xyXG4gICAgdmFyIGNqID0gZmogKyAxO1xyXG4gICAgdmFyIHJvdyA9IHRoaXMuZ3JpZFtmal07Ly9Eb250IGtub3cgd2h5IGhlIGRvc2VudCBmb3VuZCBhbnkgcm93IEVSUlJST1JcclxuICAgIGlmIChyb3cpIHtcclxuICAgICAgdmFyIGcwMCA9IHJvd1tmaV07XHJcbiAgICAgIHZhciBnMTAgPSByb3dbY2ldO1xyXG4gICAgICBpZiAodGhpcy5pc1ZhbHVlKGcwMCkgJiYgdGhpcy5pc1ZhbHVlKGcxMCkgJiYgKHJvdyA9IHRoaXMuZ3JpZFtjal0pKSB7XHJcbiAgICAgICAgdmFyIGcwMSA9IHJvd1tmaV07XHJcbiAgICAgICAgdmFyIGcxMSA9IHJvd1tjaV07XHJcbiAgICAgICAgaWYgKHRoaXMuaXNWYWx1ZShnMDEpICYmIHRoaXMuaXNWYWx1ZShnMTEpKSB7XHJcbiAgICAgICAgICAvLyBBbGwgZm91ciBwb2ludHMgZm91bmQsIHNvIGludGVycG9sYXRlIHRoZSB2YWx1ZS5cclxuICAgICAgICAgIHJldHVybiB0aGlzLmJpbGluZWFySW50ZXJwb2xhdGVWZWN0b3IoaSAtIGZpLCBqIC0gZmosIGcwMCwgZzEwLCBnMDEsIGcxMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9O1xyXG5cclxuICBnZXRQYXJ0aWN1bGVXaW5kKHA6IFBhcnRpY3VsZSk6IFZlY3RvciB7XHJcbiAgICBjb25zdCBsbmdMYXQgPSB0aGlzLmxheWVyLmNhbnZhc1RvTWFwKHAueCwgcC55KTtcclxuICAgIGNvbnN0IHdpbmQgPSB0aGlzLmdyaWQuZ2V0KGxuZ0xhdFswXSwgbG5nTGF0WzFdKTtcclxuICAgIHAuaW50ZW5zaXR5ID0gd2luZC5pbnRlbnNpdHk7XHJcbiAgICBjb25zdCBtYXBBcmVhID0gdGhpcy5sYXllci5tYXBCb3VuZC5oZWlnaHQgKiB0aGlzLmxheWVyLm1hcEJvdW5kLndpZHRoO1xyXG4gICAgdmFyIHZlbG9jaXR5U2NhbGUgPSB0aGlzLnZlbG9jaXR5U2NhbGUgKiBNYXRoLnBvdyhtYXBBcmVhLCAwLjQpO1xyXG4gICAgdGhpcy5sYXllci5kaXN0b3J0KGxuZ0xhdFswXSwgbG5nTGF0WzFdLCBwLngsIHAueSwgdmVsb2NpdHlTY2FsZSwgd2luZCk7XHJcbiAgICByZXR1cm4gd2luZDtcclxuICB9XHJcblxyXG4gIHN0YXJ0KGxheWVyOiBMYXllcikge1xyXG4gICAgdGhpcy5jb250ZXh0MkQgPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XHJcbiAgICB0aGlzLmNvbnRleHQyRC5saW5lV2lkdGggPSB0aGlzLnBhcnRpY2xlTGluZVdpZHRoO1xyXG4gICAgdGhpcy5jb250ZXh0MkQuZmlsbFN0eWxlID0gXCJyZ2JhKDAsIDAsIDAsIDAuOTcpXCI7XHJcbiAgICB0aGlzLmNvbnRleHQyRC5nbG9iYWxBbHBoYSA9IDAuNjtcclxuXHJcbiAgICB0aGlzLmxheWVyID0gbGF5ZXI7XHJcbiAgICB0aGlzLmFuaW1hdGlvbkJ1Y2tldCA9IG5ldyBBbmltYXRpb25CdWNrZXQodGhpcy5jb2xvclNjYWxlKTtcclxuXHJcbiAgICB0aGlzLnBhcnRpY3VsZXMuc3BsaWNlKDAsIHRoaXMucGFydGljdWxlcy5sZW5ndGgpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnBhcnRpY3VsZUNvdW50OyBpKyspIHtcclxuICAgICAgdGhpcy5wYXJ0aWN1bGVzLnB1c2godGhpcy5sYXllci5jYW52YXNCb3VuZC5nZXRSYW5kb21QYXJ0aWN1bGUodGhpcy5wYXJ0aWNsZUFnZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMudGhlbiA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG5cclxuICAgIHRoaXMuZnJhbWUoKTtcclxuICB9XHJcblxyXG4gIGZyYW1lKCkge1xyXG4gICAgdGhpcy5hbmltYXRpb25Mb29wID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcclxuICAgICAgdGhpcy5mcmFtZSgpXHJcbiAgICB9KTtcclxuICAgIHZhciBub3cgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgIHZhciBkZWx0YSA9IG5vdyAtIHRoaXMudGhlbjtcclxuICAgIGlmIChkZWx0YSA+IHRoaXMuZnJhbWVUaW1lKSB7XHJcbiAgICAgIHRoaXMudGhlbiA9IG5vdyAtIChkZWx0YSAlIHRoaXMuZnJhbWVUaW1lKTtcclxuICAgICAgdGhpcy5ldm9sdmUoKTtcclxuICAgICAgdGhpcy5kcmF3KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBldm9sdmUoKSB7XHJcbiAgICB0aGlzLmFuaW1hdGlvbkJ1Y2tldC5jbGVhcigpO1xyXG4gICAgdGhpcy5wYXJ0aWN1bGVzLmZvckVhY2goKHA6IFBhcnRpY3VsZSkgPT4ge1xyXG4gICAgICBwLmdyb3coKTtcclxuICAgICAgaWYgKHAuaXNEZWFkKSB7XHJcbiAgICAgICAgdGhpcy5sYXllci5jYW52YXNCb3VuZC5yZXNldFBhcnRpY3VsZShwKTtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCB3aW5kID0gdGhpcy5nZXRQYXJ0aWN1bGVXaW5kKHApO1xyXG4gICAgICB0aGlzLmFuaW1hdGlvbkJ1Y2tldC5hZGQocCwgd2luZCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGRyYXcoKSB7XHJcbiAgICB0aGlzLmNvbnRleHQyRC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSBcImRlc3RpbmF0aW9uLWluXCI7XHJcbiAgICB0aGlzLmNvbnRleHQyRC5maWxsUmVjdChcclxuICAgICAgdGhpcy5sYXllci5jYW52YXNCb3VuZC54TWluLFxyXG4gICAgICB0aGlzLmxheWVyLmNhbnZhc0JvdW5kLnlNaW4sXHJcbiAgICAgIHRoaXMubGF5ZXIuY2FudmFzQm91bmQud2lkdGgsXHJcbiAgICAgIHRoaXMubGF5ZXIuY2FudmFzQm91bmQuaGVpZ2h0XHJcbiAgICApO1xyXG4gICAgLy8gRmFkZSBleGlzdGluZyBwYXJ0aWNsZSB0cmFpbHMuXHJcbiAgICB0aGlzLmNvbnRleHQyRC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSBcImxpZ2h0ZXJcIjtcclxuICAgIHRoaXMuY29udGV4dDJELmdsb2JhbEFscGhhID0gMC45O1xyXG5cclxuICAgIHRoaXMuYW5pbWF0aW9uQnVja2V0LmRyYXcodGhpcy5jb250ZXh0MkQpO1xyXG4gIH1cclxuXHJcbiAgc3RvcCgpIHtcclxuICAgIHRoaXMucGFydGljdWxlcy5zcGxpY2UoMCwgdGhpcy5wYXJ0aWN1bGVzLmxlbmd0aCk7XHJcbiAgICB0aGlzLmFuaW1hdGlvbkJ1Y2tldC5jbGVhcigpO1xyXG4gICAgaWYgKHRoaXMuYW5pbWF0aW9uTG9vcCkge1xyXG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5hbmltYXRpb25Mb29wKTtcclxuICAgICAgdGhpcy5hbmltYXRpb25Mb29wID0gbnVsbDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IENhbnZhc0JvdW5kIGZyb20gXCIuL2NhbnZhc0JvdW5kXCI7XHJcbmltcG9ydCBNYXBCb3VuZCBmcm9tIFwiLi9tYXBCb3VuZFwiO1xyXG5pbXBvcnQgV2luZHkgZnJvbSBcIi4vd2luZHlcIjtcclxuaW1wb3J0IENhbnZhc0xheWVyIGZyb20gXCIuL0wuQ2FudmFzTGF5ZXJcIjtcclxuaW1wb3J0IFZlbG9jaXR5TGF5ZXIgZnJvbSBcIi4vTC5WZWxvY2l0eUxheWVyXCI7XHJcbmltcG9ydCBDb250cm9sVmVsb2NpdHkgZnJvbSAnLi9MLkNvbnRyb2wuVmVsb2NpdHknO1xyXG5cclxuKDxhbnk+d2luZG93KS5DYW52YXNCb3VuZCA9IENhbnZhc0JvdW5kO1xyXG4oPGFueT53aW5kb3cpLk1hcEJvdW5kID0gTWFwQm91bmQ7XHJcbig8YW55PndpbmRvdykuV2luZHkgPSBXaW5keTtcclxuXHJcbmRlY2xhcmUgdmFyIEw6IGFueTtcclxuXHJcbkwuQ2FudmFzTGF5ZXIgPSAoTC5MYXllciA/IEwuTGF5ZXIgOiBMLkNsYXNzKS5leHRlbmQobmV3IENhbnZhc0xheWVyKCkpO1xyXG5MLmNhbnZhc0xheWVyID0gZnVuY3Rpb24gKCkge1xyXG5cdHJldHVybiBuZXcgTC5DYW52YXNMYXllcigpO1xyXG59O1xyXG5cclxuTC5Db250cm9sLlZlbG9jaXR5ID0gKEwuQ29udHJvbCkuZXh0ZW5kKG5ldyBDb250cm9sVmVsb2NpdHkpO1xyXG5MLmNvbnRyb2wudmVsb2NpdHkgPSBmdW5jdGlvbiAob3B0aW9uczogYW55KSB7XHJcblx0cmV0dXJuIG5ldyBMLkNvbnRyb2wuVmVsb2NpdHkob3B0aW9ucyk7XHJcbn07XHJcblxyXG5MLlZlbG9jaXR5TGF5ZXIgPSAoTC5MYXllciA/IEwuTGF5ZXIgOiBMLkNsYXNzKS5leHRlbmQobmV3IFZlbG9jaXR5TGF5ZXIoKSk7XHJcbkwudmVsb2NpdHlMYXllciA9IGZ1bmN0aW9uIChvcHRpb25zOiBhbnkpIHtcclxuXHRyZXR1cm4gbmV3IEwuVmVsb2NpdHlMYXllcihvcHRpb25zKTtcclxufTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9