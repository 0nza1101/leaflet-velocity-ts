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

/***/ "./src/L.ControlVelocity.ts":
/*!**********************************!*\
  !*** ./src/L.ControlVelocity.ts ***!
  \**********************************/
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
var L_CanvasLayer_1 = __webpack_require__(/*! ./L.CanvasLayer */ "./src/L.CanvasLayer.ts");
var L_ControlVelocity_1 = __webpack_require__(/*! ./L.ControlVelocity */ "./src/L.ControlVelocity.ts");
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
        console.log('velocityLayer', options);
        L.Util.setOptions(this, options);
    };
    VelocityLayer.prototype.onAdd = function (map) {
        // create canvas, add overlay control
        this._canvasLayer = L_canvasLayer().delegate(this);
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
    VelocityLayer.prototype._initMouseHandler = function () {
        if (!this._mouseControl && this.options.displayValues) {
            var options = this.options.displayOptions || {};
            // options['leafletVelocity'] = this;
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
var L_ControlVelocity_1 = __webpack_require__(/*! ./L.ControlVelocity */ "./src/L.ControlVelocity.ts");
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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2xHLElBQU0sVUFBVSxHQUFHLENBQUMsY0FBYyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM5SCxJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxVQUFVLENBQUM7UUFDdEQsSUFBTSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLEdBQUcsY0FBYyxDQUFDO1FBRTFDLElBQU0sQ0FBQyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDckUsSUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3BHLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDbEIsQ0FBQztJQUFBLENBQUM7SUFFRixxQkFBSyxHQUFMLFVBQU0sQ0FBUztRQUNYLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFD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RSxDQUFDLENBQUMsYUFBYSxHQUFHLFVBQVUsT0FBWTtJQUN2QyxPQUFPLElBQUksQ0FBQyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUNyQyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZWFmbGV0LXZlbG9jaXR5LXRzLy4vc3JjL2xlYWZsZXQtdmVsb2NpdHkuY3NzIiwid2VicGFjazovL2xlYWZsZXQtdmVsb2NpdHktdHMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2xlYWZsZXQtdmVsb2NpdHktdHMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9sZWFmbGV0LXZlbG9jaXR5LXRzLy4vc3JjL2xlYWZsZXQtdmVsb2NpdHkuY3NzP2JhZjQiLCJ3ZWJwYWNrOi8vbGVhZmxldC12ZWxvY2l0eS10cy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9sZWFmbGV0LXZlbG9jaXR5LXRzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9sZWFmbGV0LXZlbG9jaXR5LXRzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2xlYWZsZXQtdmVsb2NpdHktdHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vbGVhZmxldC12ZWxvY2l0eS10cy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2xlYWZsZXQtdmVsb2NpdHktdHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9sZWFmbGV0LXZlbG9jaXR5LXRzLy4vc3JjL0wuQ2FudmFzTGF5ZXIudHMiLCJ3ZWJwYWNrOi8vbGVhZmxldC12ZWxvY2l0eS10cy8uL3NyYy9MLkNvbnRyb2xWZWxvY2l0eS50cyIsIndlYnBhY2s6Ly9sZWFmbGV0LXZlbG9jaXR5LXRzLy4vc3JjL0wuVmVsb2NpdHlMYXllci50cyIsIndlYnBhY2s6Ly9sZWFmbGV0LXZlbG9jaXR5LXRzLy4vc3JjL2FuaW1hdGlvbkJ1Y2tldC50cyIsIndlYnBhY2s6Ly9sZWFmbGV0LXZlbG9jaXR5LXRzLy4vc3JjL2NhbnZhc0JvdW5kLnRzIiwid2VicGFjazovL2xlYWZsZXQtdmVsb2NpdHktdHMvLi9zcmMvY29sb3JTY2FsZS50cyIsIndlYnBhY2s6Ly9sZWFmbGV0LXZlbG9jaXR5LXRzLy4vc3JjL2dyaWQudHMiLCJ3ZWJwYWNrOi8vbGVhZmxldC12ZWxvY2l0eS10cy8uL3NyYy9sYXllci50cyIsIndlYnBhY2s6Ly9sZWFmbGV0LXZlbG9jaXR5LXRzLy4vc3JjL21hcEJvdW5kLnRzIiwid2VicGFjazovL2xlYWZsZXQtdmVsb2NpdHktdHMvLi9zcmMvcGFydGljbGUudHMiLCJ3ZWJwYWNrOi8vbGVhZmxldC12ZWxvY2l0eS10cy8uL3NyYy92ZWN0b3IudHMiLCJ3ZWJwYWNrOi8vbGVhZmxldC12ZWxvY2l0eS10cy8uL3NyYy93aW5keS50cyIsIndlYnBhY2s6Ly9sZWFmbGV0LXZlbG9jaXR5LXRzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2xlYWZsZXQtdmVsb2NpdHktdHMvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vbGVhZmxldC12ZWxvY2l0eS10cy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbGVhZmxldC12ZWxvY2l0eS10cy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2xlYWZsZXQtdmVsb2NpdHktdHMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9sZWFmbGV0LXZlbG9jaXR5LXRzL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9sZWFmbGV0LXZlbG9jaXR5LXRzLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLklvV3dpT0phM3BRVEFaVWF3UGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcXG4gIHBhZGRpbmc6IDAgNXB4O1xcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XFxuICBjb2xvcjogIzMzMztcXG4gIGZvbnQ6IDExcHgvMS41IFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9sZWFmbGV0LXZlbG9jaXR5LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLDBDQUEwQztFQUMxQyxjQUFjO0VBQ2Qsb0JBQW9CO0VBQ3BCLFdBQVc7RUFDWCw2REFBNkQ7QUFDL0RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmxlYWZsZXRDb250cm9sVmVsb2NpdHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xcbiAgcGFkZGluZzogMCA1cHg7XFxuICBtYXJnaW46IDAgIWltcG9ydGFudDtcXG4gIGNvbG9yOiAjMzMzO1xcbiAgZm9udDogMTFweC8xLjUgXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwibGVhZmxldENvbnRyb2xWZWxvY2l0eVwiOiBcIklvV3dpT0phM3BRVEFaVWF3UGVyXCJcbn07XG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL0B0ZWFtc3VwZXJjZWxsL3R5cGluZ3MtZm9yLWNzcy1tb2R1bGVzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzFdIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnVzZVsyXSEuL2xlYWZsZXQtdmVsb2NpdHkuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL0B0ZWFtc3VwZXJjZWxsL3R5cGluZ3MtZm9yLWNzcy1tb2R1bGVzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzFdIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnVzZVsyXSEuL2xlYWZsZXQtdmVsb2NpdHkuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImRlY2xhcmUgdmFyIEw6IGFueTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FudmFzTGF5ZXIge1xuXHRwcml2YXRlIF9tYXA6IGFueTtcblx0cHJpdmF0ZSBfY2FudmFzOiBhbnk7XG5cdHByaXZhdGUgX2ZyYW1lOiBhbnk7XG5cdHByaXZhdGUgX2RlbGVnYXRlOiBhbnk7XG5cdHByaXZhdGUgdGlsZXM6IGFueTtcblxuXHRpbml0aWFsaXplKG9wdGlvbnM6IGFueSkge1xuXHRcdHRoaXMuX21hcCA9IG51bGw7XG5cdFx0dGhpcy5fY2FudmFzID0gbnVsbDtcblx0XHR0aGlzLl9mcmFtZSA9IG51bGw7XG5cdFx0dGhpcy5fZGVsZWdhdGUgPSBudWxsO1xuXHRcdEwuVXRpbC5zZXRPcHRpb25zKHRoaXMsIG9wdGlvbnMpO1xuXHR9XG5cblx0ZGVsZWdhdGUoZGVsOiBhbnkpOiBDYW52YXNMYXllciB7XG5cdFx0dGhpcy5fZGVsZWdhdGUgPSBkZWw7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRuZWVkUmVkcmF3KCkge1xuXHRcdGlmICghdGhpcy5fZnJhbWUpIHtcblx0XHRcdHRoaXMuX2ZyYW1lID0gTC5VdGlsLnJlcXVlc3RBbmltRnJhbWUodGhpcy5kcmF3TGF5ZXIsIHRoaXMpO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHRfb25MYXllckRpZFJlc2l6ZShyZXNpemVFdmVudDogYW55KSB7XG5cdFx0dGhpcy5fY2FudmFzLndpZHRoID0gcmVzaXplRXZlbnQubmV3U2l6ZS54O1xuXHRcdHRoaXMuX2NhbnZhcy5oZWlnaHQgPSByZXNpemVFdmVudC5uZXdTaXplLnk7XG5cdH1cblxuXHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0X29uTGF5ZXJEaWRNb3ZlKCkge1xuXHRcdHZhciB0b3BMZWZ0ID0gdGhpcy5fbWFwLmNvbnRhaW5lclBvaW50VG9MYXllclBvaW50KFswLCAwXSk7XG5cdFx0TC5Eb21VdGlsLnNldFBvc2l0aW9uKHRoaXMuX2NhbnZhcywgdG9wTGVmdCk7XG5cdFx0dGhpcy5kcmF3TGF5ZXIoKTtcblx0fVxuXG5cdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHRnZXRFdmVudHMoKSB7XG5cdFx0dmFyIGV2ZW50cyA9IHtcblx0XHRcdHJlc2l6ZTogdGhpcy5fb25MYXllckRpZFJlc2l6ZSxcblx0XHRcdG1vdmVlbmQ6IHRoaXMuX29uTGF5ZXJEaWRNb3ZlLFxuXHRcdFx0em9vbWFuaW06IDxhbnk+dW5kZWZpbmVkXG5cdFx0fTtcblx0XHRpZiAodGhpcy5fbWFwLm9wdGlvbnMuem9vbUFuaW1hdGlvbiAmJiBMLkJyb3dzZXIuYW55M2QpIHtcblx0XHRcdGV2ZW50cy56b29tYW5pbSA9IHRoaXMuX2FuaW1hdGVab29tO1xuXHRcdH1cblxuXHRcdHJldHVybiBldmVudHM7XG5cdH1cblxuXHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0b25BZGQobWFwOiBhbnkpIHtcblx0XHR0aGlzLl9tYXAgPSBtYXA7XG5cdFx0dGhpcy5fY2FudmFzID0gTC5Eb21VdGlsLmNyZWF0ZSgnY2FudmFzJywgJ2xlYWZsZXQtbGF5ZXInKTtcblx0XHR0aGlzLnRpbGVzID0ge307XG5cblx0XHR2YXIgc2l6ZSA9IHRoaXMuX21hcC5nZXRTaXplKCk7XG5cdFx0dGhpcy5fY2FudmFzLndpZHRoID0gc2l6ZS54O1xuXHRcdHRoaXMuX2NhbnZhcy5oZWlnaHQgPSBzaXplLnk7XG5cblx0XHR2YXIgYW5pbWF0ZWQgPSB0aGlzLl9tYXAub3B0aW9ucy56b29tQW5pbWF0aW9uICYmIEwuQnJvd3Nlci5hbnkzZDtcblx0XHRMLkRvbVV0aWwuYWRkQ2xhc3ModGhpcy5fY2FudmFzLCAnbGVhZmxldC16b29tLScgKyAoYW5pbWF0ZWQgPyAnYW5pbWF0ZWQnIDogJ2hpZGUnKSk7XG5cblxuXHRcdG1hcC5fcGFuZXMub3ZlcmxheVBhbmUuYXBwZW5kQ2hpbGQodGhpcy5fY2FudmFzKTtcblx0XHRtYXAub24odGhpcy5nZXRFdmVudHMoKSwgdGhpcyk7XG5cblx0XHR2YXIgZGVsID0gdGhpcy5fZGVsZWdhdGUgfHwgdGhpcztcblx0XHRkZWwub25MYXllckRpZE1vdW50ICYmIGRlbC5vbkxheWVyRGlkTW91bnQoKTsgLy8gLS0gY2FsbGJhY2tcblx0XHR0aGlzLm5lZWRSZWRyYXcoKTtcblxuXHRcdHZhciBzZWxmID0gdGhpcztcblx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcblx0XHRcdHNlbGYuX29uTGF5ZXJEaWRNb3ZlKCk7XG5cdFx0fSwgMCk7XG5cdH1cblxuXHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0b25SZW1vdmUobWFwOiBhbnkpIHtcblx0XHR2YXIgZGVsID0gdGhpcy5fZGVsZWdhdGUgfHwgdGhpcztcblx0XHRkZWwub25MYXllcldpbGxVbm1vdW50ICYmIGRlbC5vbkxheWVyV2lsbFVubW91bnQoKTsgLy8gLS0gY2FsbGJhY2tcblxuXG5cdFx0bWFwLmdldFBhbmVzKCkub3ZlcmxheVBhbmUucmVtb3ZlQ2hpbGQodGhpcy5fY2FudmFzKTtcblxuXHRcdG1hcC5vZmYodGhpcy5nZXRFdmVudHMoKSwgdGhpcyk7XG5cblx0XHR0aGlzLl9jYW52YXMgPSBudWxsO1xuXG5cdH1cblxuXHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHRhZGRUbyhtYXA6IGFueSkge1xuXHRcdG1hcC5hZGRMYXllcih0aGlzKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdExhdExvblRvTWVyY2F0b3IobGF0bG9uOiBMLkxhdExuZykge1xuXHRcdHJldHVybiB7XG5cdFx0XHR4OiBsYXRsb24ubG5nICogNjM3ODEzNyAqIE1hdGguUEkgLyAxODAsXG5cdFx0XHR5OiBNYXRoLmxvZyhNYXRoLnRhbigoOTAgKyBsYXRsb24ubGF0KSAqIE1hdGguUEkgLyAzNjApKSAqIDYzNzgxMzdcblx0XHR9O1xuXHR9XG5cblx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0ZHJhd0xheWVyKCkge1xuXHRcdC8vIC0tIHRvZG8gbWFrZSB0aGUgdmlld0luZm8gcHJvcGVydGllcyAgZmxhdCBvYmplY3RzLlxuXHRcdHZhciBzaXplID0gdGhpcy5fbWFwLmdldFNpemUoKTtcblx0XHR2YXIgYm91bmRzID0gdGhpcy5fbWFwLmdldEJvdW5kcygpO1xuXHRcdHZhciB6b29tID0gdGhpcy5fbWFwLmdldFpvb20oKTtcblxuXHRcdHZhciBjZW50ZXIgPSB0aGlzLkxhdExvblRvTWVyY2F0b3IodGhpcy5fbWFwLmdldENlbnRlcigpKTtcblx0XHR2YXIgY29ybmVyID0gdGhpcy5MYXRMb25Ub01lcmNhdG9yKHRoaXMuX21hcC5jb250YWluZXJQb2ludFRvTGF0TG5nKHRoaXMuX21hcC5nZXRTaXplKCkpKTtcblxuXHRcdHZhciBkZWwgPSB0aGlzLl9kZWxlZ2F0ZSB8fCB0aGlzO1xuXHRcdGRlbC5vbkRyYXdMYXllciAmJiBkZWwub25EcmF3TGF5ZXIoe1xuXHRcdFx0bGF5ZXI6IHRoaXMsXG5cdFx0XHRjYW52YXM6IHRoaXMuX2NhbnZhcyxcblx0XHRcdGJvdW5kczogYm91bmRzLFxuXHRcdFx0c2l6ZTogc2l6ZSxcblx0XHRcdHpvb206IHpvb20sXG5cdFx0XHRjZW50ZXI6IGNlbnRlcixcblx0XHRcdGNvcm5lcjogY29ybmVyXG5cdFx0fSk7XG5cdFx0dGhpcy5fZnJhbWUgPSBudWxsO1xuXHR9XG5cblx0Ly8gLS0gTC5Eb21VdGlsLnNldFRyYW5zZm9ybSBmcm9tIGxlYWZsZXQgMS4wLjAgdG8gd29yayBvbiAwLjAuN1xuXHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHRfc2V0VHJhbnNmb3JtKGVsOiBhbnksIG9mZnNldDogYW55LCBzY2FsZTogYW55KSB7XG5cdFx0dmFyIHBvcyA9IG9mZnNldCB8fCBuZXcgTC5Qb2ludCgwLCAwKTtcblxuXHRcdGVsLnN0eWxlW0wuRG9tVXRpbC5UUkFOU0ZPUk1dID1cblx0XHRcdChMLkJyb3dzZXIuaWUzZCA/XG5cdFx0XHRcdCd0cmFuc2xhdGUoJyArIHBvcy54ICsgJ3B4LCcgKyBwb3MueSArICdweCknIDpcblx0XHRcdFx0J3RyYW5zbGF0ZTNkKCcgKyBwb3MueCArICdweCwnICsgcG9zLnkgKyAncHgsMCknKSArXG5cdFx0XHQoc2NhbGUgPyAnIHNjYWxlKCcgKyBzY2FsZSArICcpJyA6ICcnKTtcblx0fVxuXG5cdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdF9hbmltYXRlWm9vbShlOiBhbnkpIHtcblx0XHR2YXIgc2NhbGUgPSB0aGlzLl9tYXAuZ2V0Wm9vbVNjYWxlKGUuem9vbSk7XG5cdFx0Ly8gLS0gZGlmZmVyZW50IGNhbGMgb2Ygb2Zmc2V0IGluIGxlYWZsZXQgMS4wLjAgYW5kIDAuMC43IHRoYW5rcyBmb3IgMS4wLjAtcmMyIGNhbGMgQGpkdWdnYW4xXG5cdFx0dmFyIG9mZnNldCA9IEwuTGF5ZXIgPyB0aGlzLl9tYXAuX2xhdExuZ1RvTmV3TGF5ZXJQb2ludCh0aGlzLl9tYXAuZ2V0Qm91bmRzKCkuZ2V0Tm9ydGhXZXN0KCksIGUuem9vbSwgZS5jZW50ZXIpIDpcblx0XHRcdHRoaXMuX21hcC5fZ2V0Q2VudGVyT2Zmc2V0KGUuY2VudGVyKS5fbXVsdGlwbHlCeSgtc2NhbGUpLnN1YnRyYWN0KHRoaXMuX21hcC5fZ2V0TWFwUGFuZVBvcygpKTtcblxuXHRcdEwuRG9tVXRpbC5zZXRUcmFuc2Zvcm0odGhpcy5fY2FudmFzLCBvZmZzZXQsIHNjYWxlKTtcblx0fVxufVxuIiwiaW1wb3J0IFdpbmR5IGZyb20gJy4vd2luZHknO1xuZGVjbGFyZSB2YXIgTDogYW55O1xuaW1wb3J0IHZlbG9jaXR5Y3NzIGZyb20gJy4vbGVhZmxldC12ZWxvY2l0eS5jc3MnO1xuXG5pbnRlcmZhY2UgRGlzcGxheU9wdGlvbnMge1xuICAgIHBvc2l0aW9uOiBzdHJpbmcsXG4gICAgZW1wdHlTdHJpbmc6IHN0cmluZyxcbiAgICBhbmdsZUNvbnZlbnRpb246IHN0cmluZyxcbiAgICBzcGVlZFVuaXQ6IHN0cmluZyxcbiAgICBzaG93Q2FyZGluYWw6IGJvb2xlYW5cbiAgICB2ZWxvY2l0eVR5cGU/OiBzdHJpbmdcbiAgICBkaXJlY3Rpb25TdHJpbmc6IHN0cmluZ1xuICAgIHNwZWVkU3RyaW5nOiBzdHJpbmdcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udHJvbFZlbG9jaXR5IHtcbiAgcHJpdmF0ZSBvcHRpb25zOiBEaXNwbGF5T3B0aW9ucztcbiAgcHJpdmF0ZSBfd2luZHk6IFdpbmR5ID0gbnVsbDtcbiAgcHJpdmF0ZSBfbWFwOiBhbnkgPSBudWxsO1xuICBwcml2YXRlIF9kZWxlZ2F0ZTogYW55O1xuICBwcml2YXRlIF9jb250YWluZXI6IGFueSA9IG51bGw7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5vcHRpb25zID0ge1xuICAgICAgcG9zaXRpb246ICdib3R0b21sZWZ0JyxcbiAgICAgIGVtcHR5U3RyaW5nOiAnVW5hdmFpbGFibGUnLFxuICAgICAgLy8gQ291bGQgYmUgYW55IGNvbWJpbmF0aW9uIG9mICdiZWFyaW5nJyAoYW5nbGUgdG93YXJkIHdoaWNoIHRoZSBmbG93IGdvZXMpIG9yICdtZXRlbycgKGFuZ2xlIGZyb20gd2hpY2ggdGhlIGZsb3cgY29tZXMpXG4gICAgICAvLyBhbmQgJ0NXJyAoYW5nbGUgdmFsdWUgaW5jcmVhc2VzIGNsb2NrLXdpc2UpIG9yICdDQ1cnIChhbmdsZSB2YWx1ZSBpbmNyZWFzZXMgY291bnRlciBjbG9jay13aXNlKVxuICAgICAgYW5nbGVDb252ZW50aW9uOiAnYmVhcmluZ0NDVycsXG4gICAgICAvLyBDb3VsZCBiZSAnbS9zJyBmb3IgbWV0ZXIgcGVyIHNlY29uZCwgJ2svaCcgZm9yIGtpbG9tZXRlciBwZXIgaG91ciBvciAna3QnIGZvciBrbm90c1xuICAgICAgc3BlZWRVbml0OiAnbS9zJyxcbiAgICAgIGRpcmVjdGlvblN0cmluZzogXCJEaXJlY3Rpb25cIixcbiAgICAgIHNwZWVkU3RyaW5nOiBcIlNwZWVkXCIsXG4gICAgICBzaG93Q2FyZGluYWw6IGZhbHNlLFxuICAgIH07XG4gIH1cblxuICBzZXRXaW5keShfd2luZHk6IGFueSkge1xuICAgIGlmICghdGhpcy5fd2luZHkgJiYgX3dpbmR5KSB0aGlzLl93aW5keSA9IF93aW5keTtcbiAgfVxuXG4gIHNldE9wdGlvbnMob3B0aW9uczogYW55KSB7XG4gICAgTC5VdGlsLnNldE9wdGlvbnModGhpcywgb3B0aW9ucyk7XG4gIH1cblxuICBvbkFkZChtYXA6IGFueSkge1xuICAgIHRoaXMuX21hcCA9IG1hcDtcbiAgICB0aGlzLl9jb250YWluZXIgPSBMLkRvbVV0aWwuY3JlYXRlKCdkaXYnLCB2ZWxvY2l0eWNzcy5sZWFmbGV0Q29udHJvbFZlbG9jaXR5KTtcbiAgICBMLkRvbUV2ZW50LmRpc2FibGVDbGlja1Byb3BhZ2F0aW9uKHRoaXMuX2NvbnRhaW5lcik7XG4gICAgdGhpcy5fbWFwLm9uKCdtb3VzZW1vdmUnLCB0aGlzLmRyYXdXaW5kU3BlZWQsIHRoaXMpO1xuICAgIHRoaXMuX2NvbnRhaW5lci5pbm5lckhUTUwgPSB0aGlzLm9wdGlvbnMuZW1wdHlTdHJpbmc7XG4gICAgcmV0dXJuIHRoaXMuX2NvbnRhaW5lcjtcbiAgfVxuXG4gIG9uUmVtb3ZlKG1hcDogYW55KSB7XG4gICAgdGhpcy5fbWFwLm9mZignbW91c2Vtb3ZlJywgdGhpcy5kcmF3V2luZFNwZWVkLCB0aGlzKTtcbiAgfVxuXG4gIHZlY3RvclRvU3BlZWQodU1zOiBudW1iZXIsIHZNczogbnVtYmVyLCB1bml0OiBzdHJpbmcpIHtcbiAgICB2YXIgdmVsb2NpdHlBYnMgPSBNYXRoLnNxcnQoTWF0aC5wb3codU1zLCAyKSArIE1hdGgucG93KHZNcywgMikpO1xuICAgIC8vIERlZmF1bHQgaXMgbS9zXG4gICAgaWYgKHVuaXQgPT09ICdrL2gnKSB7XG4gICAgICByZXR1cm4gdGhpcy5tZXRlclNlYzJraWxvbWV0ZXJIb3VyKHZlbG9jaXR5QWJzKTtcbiAgICB9IGVsc2UgaWYgKHVuaXQgPT09ICdrdCcpIHtcbiAgICAgIHJldHVybiB0aGlzLm1ldGVyU2VjMktub3RzKHZlbG9jaXR5QWJzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHZlbG9jaXR5QWJzO1xuICAgIH1cbiAgfVxuXG4gIHZlY3RvclRvRGVncmVlcyh1TXM6IG51bWJlciwgdk1zOiBudW1iZXIsIGFuZ2xlQ29udmVudGlvbjogc3RyaW5nKSB7XG4gICAgLy8gRGVmYXVsdCBhbmdsZSBjb252ZW50aW9uIGlzIENXXG4gICAgaWYgKGFuZ2xlQ29udmVudGlvbi5lbmRzV2l0aCgnQ0NXJykpIHtcbiAgICAgIC8vIHZNcyBjb21lcyBvdXQgdXBzaWRlLWRvd24uLlxuICAgICAgdk1zID0gdk1zID4gMCA/IHZNcyA9IC12TXMgOiBNYXRoLmFicyh2TXMpO1xuICAgIH1cbiAgICB2YXIgdmVsb2NpdHlBYnMgPSBNYXRoLnNxcnQoTWF0aC5wb3codU1zLCAyKSArIE1hdGgucG93KHZNcywgMikpO1xuXG4gICAgdmFyIHZlbG9jaXR5RGlyID0gTWF0aC5hdGFuMih1TXMgLyB2ZWxvY2l0eUFicywgdk1zIC8gdmVsb2NpdHlBYnMpO1xuICAgIHZhciB2ZWxvY2l0eURpclRvRGVncmVlcyA9IHZlbG9jaXR5RGlyICogMTgwIC8gTWF0aC5QSSArIDE4MDtcblxuICAgIGlmIChhbmdsZUNvbnZlbnRpb24gPT09ICdiZWFyaW5nQ1cnIHx8IGFuZ2xlQ29udmVudGlvbiA9PT0gJ21ldGVvQ0NXJykge1xuICAgICAgdmVsb2NpdHlEaXJUb0RlZ3JlZXMgKz0gMTgwO1xuICAgICAgaWYgKHZlbG9jaXR5RGlyVG9EZWdyZWVzID49IDM2MCkgdmVsb2NpdHlEaXJUb0RlZ3JlZXMgLT0gMzYwO1xuICAgIH1cblxuICAgIHJldHVybiB2ZWxvY2l0eURpclRvRGVncmVlcztcbiAgfVxuXG4gIG1ldGVyU2VjMktub3RzKG1ldGVyczogbnVtYmVyKSB7XG4gICAgcmV0dXJuIG1ldGVycyAvIDAuNTE0XG4gIH1cblxuICBtZXRlclNlYzJraWxvbWV0ZXJIb3VyKG1ldGVyczogbnVtYmVyKSB7XG4gICAgcmV0dXJuIG1ldGVycyAqIDMuNlxuICB9XG5cbiAgZGVncmVlc1RvQ2FyZGluYWxEaXJlY3Rpb24oZGVnOiBudW1iZXIpIHtcbiAgICBsZXQgY2FyZGluYWxEaXJlY3Rpb24gPSAnJ1xuICAgIGlmIChkZWcgPj0gMCAmJiBkZWcgPCAxMS4yNSB8fCBkZWcgPj0gMzQ4Ljc1KSB7XG4gICAgICBjYXJkaW5hbERpcmVjdGlvbiA9ICdOJ1xuICAgIH1cbiAgICBlbHNlIGlmIChkZWcgPj0gMTEuMjUgJiYgZGVnIDwgMzMuNzUpIHtcbiAgICAgIGNhcmRpbmFsRGlyZWN0aW9uID0gJ05OVydcbiAgICB9XG4gICAgZWxzZSBpZiAoZGVnID49IDMzLjc1ICYmIGRlZyA8IDU2LjI1KSB7XG4gICAgICBjYXJkaW5hbERpcmVjdGlvbiA9ICdOVydcbiAgICB9XG4gICAgZWxzZSBpZiAoZGVnID49IDU2LjI1ICYmIGRlZyA8IDc4Ljc1KSB7XG4gICAgICBjYXJkaW5hbERpcmVjdGlvbiA9ICdXTlcnXG4gICAgfVxuICAgIGVsc2UgaWYgKGRlZyA+PSA3OC4yNSAmJiBkZWcgPCAxMDEuMjUpIHtcbiAgICAgIGNhcmRpbmFsRGlyZWN0aW9uID0gJ1cnXG4gICAgfVxuICAgIGVsc2UgaWYgKGRlZyA+PSAxMDEuMjUgJiYgZGVnIDwgMTIzLjc1KSB7XG4gICAgICBjYXJkaW5hbERpcmVjdGlvbiA9ICdXU1cnXG4gICAgfVxuICAgIGVsc2UgaWYgKGRlZyA+PSAxMjMuNzUgJiYgZGVnIDwgMTQ2LjI1KSB7XG4gICAgICBjYXJkaW5hbERpcmVjdGlvbiA9ICdTVydcbiAgICB9XG4gICAgZWxzZSBpZiAoZGVnID49IDE0Ni4yNSAmJiBkZWcgPCAxNjguNzUpIHtcbiAgICAgIGNhcmRpbmFsRGlyZWN0aW9uID0gJ1NTVydcbiAgICB9XG4gICAgZWxzZSBpZiAoZGVnID49IDE2OC43NSAmJiBkZWcgPCAxOTEuMjUpIHtcbiAgICAgIGNhcmRpbmFsRGlyZWN0aW9uID0gJ1MnXG4gICAgfVxuICAgIGVsc2UgaWYgKGRlZyA+PSAxOTEuMjUgJiYgZGVnIDwgMjEzLjc1KSB7XG4gICAgICBjYXJkaW5hbERpcmVjdGlvbiA9ICdTU0UnXG4gICAgfVxuICAgIGVsc2UgaWYgKGRlZyA+PSAyMTMuNzUgJiYgZGVnIDwgMjM2LjI1KSB7XG4gICAgICBjYXJkaW5hbERpcmVjdGlvbiA9ICdTRSdcbiAgICB9XG4gICAgZWxzZSBpZiAoZGVnID49IDIzNi4yNSAmJiBkZWcgPCAyNTguNzUpIHtcbiAgICAgIGNhcmRpbmFsRGlyZWN0aW9uID0gJ0VTRSdcbiAgICB9XG4gICAgZWxzZSBpZiAoZGVnID49IDI1OC43NSAmJiBkZWcgPCAyODEuMjUpIHtcbiAgICAgIGNhcmRpbmFsRGlyZWN0aW9uID0gJ0UnXG4gICAgfVxuICAgIGVsc2UgaWYgKGRlZyA+PSAyODEuMjUgJiYgZGVnIDwgMzAzLjc1KSB7XG4gICAgICBjYXJkaW5hbERpcmVjdGlvbiA9ICdFTkUnXG4gICAgfVxuICAgIGVsc2UgaWYgKGRlZyA+PSAzMDMuNzUgJiYgZGVnIDwgMzI2LjI1KSB7XG4gICAgICBjYXJkaW5hbERpcmVjdGlvbiA9ICdORSdcbiAgICB9XG4gICAgZWxzZSBpZiAoZGVnID49IDMyNi4yNSAmJiBkZWcgPCAzNDguNzUpIHtcbiAgICAgIGNhcmRpbmFsRGlyZWN0aW9uID0gJ05ORSdcbiAgICB9XG5cbiAgICByZXR1cm4gY2FyZGluYWxEaXJlY3Rpb247XG4gIH1cblxuICBkcmF3V2luZFNwZWVkKGV2OiBhbnkpIHtcbiAgICBjb25zdCBwb3MgPSB0aGlzLl9tYXAuY29udGFpbmVyUG9pbnRUb0xhdExuZyhMLnBvaW50KGV2LmNvbnRhaW5lclBvaW50LngsIGV2LmNvbnRhaW5lclBvaW50LnkpKTtcbiAgICBjb25zdCBncmlkVmFsdWUgPSB0aGlzLl93aW5keS5pbnRlcnBvbGF0ZShwb3MubG5nLCBwb3MubGF0KTtcbiAgICB2YXIgdGVtcGxhdGUgPSBcIlwiO1xuICAgIGlmIChncmlkVmFsdWUgJiYgIWlzTmFOKGdyaWRWYWx1ZVswXSkgJiYgIWlzTmFOKGdyaWRWYWx1ZVsxXSkgJiYgZ3JpZFZhbHVlWzJdKSB7XG4gICAgICBjb25zdCBkZWcgPSB0aGlzLnZlY3RvclRvRGVncmVlcyhncmlkVmFsdWVbMF0sIGdyaWRWYWx1ZVsxXSwgdGhpcy5vcHRpb25zLmFuZ2xlQ29udmVudGlvbik7XG4gICAgICBjb25zdCBjYXJkaW5hbCA9IHRoaXMub3B0aW9ucy5zaG93Q2FyZGluYWwgPyBgICgke3RoaXMuZGVncmVlc1RvQ2FyZGluYWxEaXJlY3Rpb24oZGVnKX0pIGAgOiAnJztcbiAgICAgIHRlbXBsYXRlID0gYDxzdHJvbmc+ICR7dGhpcy5vcHRpb25zLnZlbG9jaXR5VHlwZX0gJHt0aGlzLm9wdGlvbnMuZGlyZWN0aW9uU3RyaW5nXG4gICAgICAgIH06IDwvc3Ryb25nPiAke2RlZy50b0ZpeGVkKDIpfcKwJHtjYXJkaW5hbH0sIDxzdHJvbmc+ICR7dGhpcy5vcHRpb25zLnZlbG9jaXR5VHlwZX0gJHt0aGlzLm9wdGlvbnMuc3BlZWRTdHJpbmdcbiAgICAgICAgfTogPC9zdHJvbmc+ICR7dGhpcy52ZWN0b3JUb1NwZWVkKGdyaWRWYWx1ZVswXSwgZ3JpZFZhbHVlWzFdLCB0aGlzLm9wdGlvbnMuc3BlZWRVbml0KS50b0ZpeGVkKDIpfSAke3RoaXMub3B0aW9ucy5zcGVlZFVuaXR9YDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBpZiAodGhpcy5vcHRpb25zLmVtcHR5U3RyaW5nKVxuICAgICAgICB0ZW1wbGF0ZSA9IHRoaXMub3B0aW9ucy5lbXB0eVN0cmluZztcbiAgICB9XG4gICAgdGhpcy5fY29udGFpbmVyLmlubmVySFRNTCA9IHRlbXBsYXRlO1xuICB9XG59XG4iLCJpbXBvcnQgV2luZHksIHsgV2luZHlPcHRpb25zIH0gZnJvbSAnLi93aW5keSc7XHJcbmltcG9ydCBDYW52YXNCb3VuZCBmcm9tICcuL2NhbnZhc0JvdW5kJ1xyXG5pbXBvcnQgTWFwQm91bmQgZnJvbSAnLi9tYXBCb3VuZCc7XHJcbmltcG9ydCBMYXllciBmcm9tIFwiLi9sYXllclwiO1xyXG5pbXBvcnQgQ2FudmFzTGF5ZXIgZnJvbSAnLi9MLkNhbnZhc0xheWVyJztcclxuaW1wb3J0IENvbnRyb2xWZWxvY2l0eSBmcm9tICcuL0wuQ29udHJvbFZlbG9jaXR5J1xyXG5kZWNsYXJlIHZhciBMOiBhbnk7XHJcblxyXG5cclxuY29uc3QgTF9DYW52YXNMYXllciA9IChMLkxheWVyID8gTC5MYXllciA6IEwuQ2xhc3MpLmV4dGVuZChuZXcgQ2FudmFzTGF5ZXIoKSk7XHJcbmNvbnN0IExfY2FudmFzTGF5ZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgcmV0dXJuIG5ldyBMX0NhbnZhc0xheWVyKCk7XHJcbn07XHJcblxyXG5jb25zdCBMX0NvbnRyb2xWZWxvY2l0eSA9IChMLkNvbnRyb2wpLmV4dGVuZChuZXcgQ29udHJvbFZlbG9jaXR5KTtcclxuY29uc3QgTF9jb250cm9sVmVsb2NpdHkgPSBmdW5jdGlvbiAoKSB7XHJcbiAgcmV0dXJuIG5ldyBMX0NvbnRyb2xWZWxvY2l0eSgpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmVsb2NpdHlMYXllciB7XHJcbiAgcHJpdmF0ZSBvcHRpb25zOiBhbnk7XHJcbiAgcHJpdmF0ZSBfbWFwOiBMLk1hcCA9IG51bGw7XHJcbiAgcHJpdmF0ZSBfY2FudmFzTGF5ZXI6IGFueSA9IG51bGw7XHJcbiAgcHJpdmF0ZSBfd2luZHk6IFdpbmR5ID0gbnVsbDtcclxuICBwcml2YXRlIF9jb250ZXh0OiBhbnkgPSBudWxsO1xyXG4gIHByaXZhdGUgX2Rpc3BsYXlUaW1lb3V0OiBSZXR1cm5UeXBlPHR5cGVvZiBzZXRUaW1lb3V0PiA9IG51bGw7XHJcbiAgcHJpdmF0ZSBfbWFwRXZlbnRzOiBhbnkgPSBudWxsXHJcbiAgcHJpdmF0ZSBfbW91c2VDb250cm9sOiBhbnkgPSBudWxsO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMub3B0aW9ucyA9IHtcclxuICAgICAgZGlzcGxheVZhbHVlczogdHJ1ZSxcclxuICAgICAgZGlzcGxheU9wdGlvbnM6IHtcclxuICAgICAgICB2ZWxvY2l0eVR5cGU6ICdWZWxvY2l0eScsXHJcbiAgICAgICAgcG9zaXRpb246ICdib3R0b21sZWZ0JyxcclxuICAgICAgICBlbXB0eVN0cmluZzogJ05vIHZlbG9jaXR5IGRhdGEnLFxyXG4gICAgICAgIGFuZ2xlQ29udmVudGlvbjogJ2JlYXJpbmdDQ1cnLFxyXG4gICAgICAgIHNwZWVkVW5pdDogJ20vcydcclxuICAgICAgfSxcclxuICAgICAgbWF4VmVsb2NpdHk6IDEwLCAvLyB1c2VkIHRvIGFsaWduIGNvbG9yIHNjYWxlXHJcbiAgICAgIGNvbG9yU2NhbGU6IG51bGwsXHJcbiAgICAgIG9uQWRkOiBudWxsLFxyXG4gICAgICBvblJlbW92ZTogbnVsbCxcclxuICAgICAgZGF0YTogbnVsbFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGluaXRpYWxpemUob3B0aW9uczogYW55KSB7XHJcbiAgICBjb25zb2xlLmxvZygndmVsb2NpdHlMYXllcicsIG9wdGlvbnMpXHJcbiAgICBMLlV0aWwuc2V0T3B0aW9ucyh0aGlzLCBvcHRpb25zKTtcclxuICB9XHJcblxyXG4gIG9uQWRkKG1hcDogTC5NYXApIHtcclxuICAgIC8vIGNyZWF0ZSBjYW52YXMsIGFkZCBvdmVybGF5IGNvbnRyb2xcclxuICAgIHRoaXMuX2NhbnZhc0xheWVyID0gTF9jYW52YXNMYXllcigpLmRlbGVnYXRlKHRoaXMpO1xyXG4gICAgdGhpcy5fY2FudmFzTGF5ZXIuYWRkVG8obWFwKTtcclxuXHJcbiAgICB0aGlzLl9tYXAgPSBtYXA7XHJcblxyXG4gICAgaWYgKHRoaXMub3B0aW9ucy5vbkFkZClcclxuICAgICAgdGhpcy5vcHRpb25zLm9uQWRkKCk7XHJcbiAgfVxyXG5cclxuICBvblJlbW92ZShtYXA6IGFueSkge1xyXG4gICAgdGhpcy5fZGVzdHJveVdpbmQoKTtcclxuXHJcbiAgICBpZiAodGhpcy5vcHRpb25zLm9uUmVtb3ZlKVxyXG4gICAgICB0aGlzLm9wdGlvbnMub25SZW1vdmUoKTtcclxuICB9XHJcblxyXG4gIHNldERhdGEoZGF0YTogYW55KSB7XHJcbiAgICB0aGlzLm9wdGlvbnMuZGF0YSA9IGRhdGE7XHJcblxyXG4gICAgaWYgKHRoaXMuX3dpbmR5KSB7XHJcbiAgICAgIHRoaXMuX3dpbmR5LnNldERhdGEoZGF0YSk7XHJcbiAgICAgIHRoaXMuX2NsZWFyQW5kUmVzdGFydCgpO1xyXG4gICAgfVxyXG5cclxuICAgICg8YW55PnRoaXMpLmZpcmUoJ2xvYWQnKTtcclxuICB9XHJcblxyXG4gIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFBSSVZBVEUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcbiAgb25EcmF3TGF5ZXIoKSB7XHJcbiAgICB2YXIgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgaWYgKCF0aGlzLl93aW5keSkge1xyXG4gICAgICB0aGlzLl9pbml0V2luZHkoKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghdGhpcy5vcHRpb25zLmRhdGEpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLl9kaXNwbGF5VGltZW91dCkgY2xlYXJUaW1lb3V0KHNlbGYuX2Rpc3BsYXlUaW1lb3V0KTtcclxuXHJcbiAgICB0aGlzLl9kaXNwbGF5VGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICBzZWxmLl9zdGFydFdpbmR5KCk7XHJcbiAgICB9LCAxNTApOyAvLyBzaG93aW5nIHZlbG9jaXR5IGlzIGRlbGF5ZWRcclxuICB9XHJcblxyXG4gIF90b2dnbGVFdmVudHMoYmluZDogYm9vbGVhbiA9IHRydWUpIHtcclxuICAgIGlmICh0aGlzLl9tYXBFdmVudHMgPT09IG51bGwpIHtcclxuICAgICAgdGhpcy5fbWFwRXZlbnRzID0ge1xyXG4gICAgICAgICdkcmFnc3RhcnQnOiAoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLl93aW5keS5zdG9wKCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAnZHJhZ2VuZCc6ICgpID0+IHtcclxuICAgICAgICAgIHRoaXMuX2NsZWFyQW5kUmVzdGFydCgpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJ3pvb21zdGFydCc6ICgpID0+IHtcclxuICAgICAgICAgIHRoaXMuX3dpbmR5LnN0b3AoKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgICd6b29tZW5kJzogKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5fY2xlYXJBbmRSZXN0YXJ0KCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAncmVzaXplJzogKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5fY2xlYXJXaW5kKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGZvciAobGV0IGUgaW4gdGhpcy5fbWFwRXZlbnRzKSB7XHJcbiAgICAgIGlmICh0aGlzLl9tYXBFdmVudHMuaGFzT3duUHJvcGVydHkoZSkpIHtcclxuICAgICAgICB0aGlzLl9tYXBbYmluZCA/ICdvbicgOiAnb2ZmJ10oZSwgdGhpcy5fbWFwRXZlbnRzW2VdKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBfc3RhcnRXaW5keSgpIHtcclxuICAgIHZhciBib3VuZHMgPSB0aGlzLl9tYXAuZ2V0Qm91bmRzKCk7XHJcbiAgICB2YXIgc2l6ZSA9IHRoaXMuX21hcC5nZXRTaXplKCk7XHJcblxyXG4gICAgLy8gYm91bmRzLCB3aWR0aCwgaGVpZ2h0LCBleHRlbnRcclxuICAgIHRoaXMuX3dpbmR5LnN0YXJ0KFxyXG4gICAgICBuZXcgTGF5ZXIoXHJcbiAgICAgICAgbmV3IE1hcEJvdW5kKFxyXG4gICAgICAgICAgYm91bmRzLmdldE5vcnRoRWFzdCgpLmxhdCxcclxuICAgICAgICAgIGJvdW5kcy5nZXROb3J0aEVhc3QoKS5sbmcsXHJcbiAgICAgICAgICBib3VuZHMuZ2V0U291dGhXZXN0KCkubGF0LFxyXG4gICAgICAgICAgYm91bmRzLmdldFNvdXRoV2VzdCgpLmxuZ1xyXG4gICAgICAgICksXHJcbiAgICAgICAgbmV3IENhbnZhc0JvdW5kKDAsIDAsIHNpemUueCwgc2l6ZS55KVxyXG4gICAgICApXHJcblxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIF9pbml0V2luZHkoKSB7XHJcbiAgICBjb25zdCBvcHRpb25zOiBXaW5keU9wdGlvbnMgPSB7XHJcbiAgICAgIC4uLnRoaXMub3B0aW9ucyxcclxuICAgICAgY2FudmFzOiB0aGlzLl9jYW52YXNMYXllci5fY2FudmFzXHJcbiAgICB9XHJcbiAgICB0aGlzLl93aW5keSA9IG5ldyBXaW5keShvcHRpb25zKTtcclxuXHJcbiAgICAvLyBwcmVwYXJlIGNvbnRleHQgZ2xvYmFsIHZhciwgc3RhcnQgZHJhd2luZ1xyXG4gICAgdGhpcy5fY29udGV4dCA9IHRoaXMuX2NhbnZhc0xheWVyLl9jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgIHRoaXMuX2NhbnZhc0xheWVyLl9jYW52YXMuY2xhc3NMaXN0LmFkZChcInZlbG9jaXR5LW92ZXJsYXlcIik7XHJcbiAgICB0aGlzLm9uRHJhd0xheWVyKCk7XHJcblxyXG4gICAgdGhpcy5fdG9nZ2xlRXZlbnRzKHRydWUpO1xyXG5cclxuICAgIHRoaXMuX2luaXRNb3VzZUhhbmRsZXIoKTtcclxuICB9XHJcblxyXG4gIF9pbml0TW91c2VIYW5kbGVyKCkge1xyXG4gICAgaWYgKCF0aGlzLl9tb3VzZUNvbnRyb2wgJiYgdGhpcy5vcHRpb25zLmRpc3BsYXlWYWx1ZXMpIHtcclxuICAgICAgdmFyIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnMuZGlzcGxheU9wdGlvbnMgfHwge307XHJcbiAgICAgIC8vIG9wdGlvbnNbJ2xlYWZsZXRWZWxvY2l0eSddID0gdGhpcztcclxuICAgICAgdGhpcy5fbW91c2VDb250cm9sID0gTF9jb250cm9sVmVsb2NpdHkoKTtcclxuICAgICAgdGhpcy5fbW91c2VDb250cm9sLnNldFdpbmR5KHRoaXMuX3dpbmR5KTtcclxuICAgICAgdGhpcy5fbW91c2VDb250cm9sLnNldE9wdGlvbnModGhpcy5vcHRpb25zLmRpc3BsYXlPcHRpb25zKTtcclxuICAgICAgdGhpcy5fbW91c2VDb250cm9sLmFkZFRvKHRoaXMuX21hcCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBfY2xlYXJBbmRSZXN0YXJ0KCkge1xyXG4gICAgaWYgKHRoaXMuX2NvbnRleHQpIHRoaXMuX2NvbnRleHQuY2xlYXJSZWN0KDAsIDAsIDMwMDAsIDMwMDApO1xyXG4gICAgaWYgKHRoaXMuX3dpbmR5KSB0aGlzLl9zdGFydFdpbmR5KCk7XHJcbiAgfVxyXG5cclxuICBfY2xlYXJXaW5kKCkge1xyXG4gICAgaWYgKHRoaXMuX3dpbmR5KSB0aGlzLl93aW5keS5zdG9wKCk7XHJcbiAgICBpZiAodGhpcy5fY29udGV4dCkgdGhpcy5fY29udGV4dC5jbGVhclJlY3QoMCwgMCwgMzAwMCwgMzAwMCk7XHJcbiAgfVxyXG5cclxuICBfZGVzdHJveVdpbmQoKSB7XHJcbiAgICBpZiAodGhpcy5fZGlzcGxheVRpbWVvdXQpXHJcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9kaXNwbGF5VGltZW91dCk7XHJcbiAgICBpZiAodGhpcy5fd2luZHkpXHJcbiAgICAgIHRoaXMuX3dpbmR5LnN0b3AoKTtcclxuICAgIGlmICh0aGlzLl9jb250ZXh0KVxyXG4gICAgICB0aGlzLl9jb250ZXh0LmNsZWFyUmVjdCgwLCAwLCAzMDAwLCAzMDAwKTtcclxuICAgIGlmICh0aGlzLl9tb3VzZUNvbnRyb2wpXHJcbiAgICAgIHRoaXMuX21hcC5yZW1vdmVDb250cm9sKHRoaXMuX21vdXNlQ29udHJvbCk7XHJcbiAgICB0aGlzLl9tb3VzZUNvbnRyb2wgPSBudWxsO1xyXG4gICAgdGhpcy5fd2luZHkgPSBudWxsO1xyXG4gICAgdGhpcy5fdG9nZ2xlRXZlbnRzKGZhbHNlKTtcclxuICAgIHRoaXMuX21hcC5yZW1vdmVMYXllcih0aGlzLl9jYW52YXNMYXllcik7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBDb2xvclNjYWxlIGZyb20gXCIuL2NvbG9yU2NhbGVcIjtcbmltcG9ydCBQYXJ0aWN1bGUgZnJvbSBcIi4vcGFydGljbGVcIjtcbmltcG9ydCBWZWN0b3IgZnJvbSBcIi4vdmVjdG9yXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFuaW1hdGlvbkJ1Y2tldCB7XG4gICAgcHJpdmF0ZSBjb2xvclNjYWxlOiBDb2xvclNjYWxlO1xuICAgIHByaXZhdGUgYnVja2V0czogUGFydGljdWxlW11bXSA9IFtdO1xuXG4gICAgY29uc3RydWN0b3IoY29sb3JTY2FsZTogQ29sb3JTY2FsZSkge1xuICAgICAgICB0aGlzLmNvbG9yU2NhbGUgPSBjb2xvclNjYWxlO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbG9yU2NhbGUuc2l6ZTsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmJ1Y2tldHMucHVzaChbXSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjbGVhcigpIHtcbiAgICAgICAgdGhpcy5idWNrZXRzLmZvckVhY2goKHBhcnRpY3VsZVNldDogUGFydGljdWxlW10pID0+IHtcbiAgICAgICAgICAgIHBhcnRpY3VsZVNldC5zcGxpY2UoMCwgcGFydGljdWxlU2V0Lmxlbmd0aClcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBhZGQocDogUGFydGljdWxlLCB2OiBWZWN0b3IpIHtcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmNvbG9yU2NhbGUuZ2V0Q29sb3JJbmRleChwLmludGVuc2l0eSlcbiAgICAgICAgaWYgKGluZGV4IDwgMCB8fCBpbmRleCA+PSB0aGlzLmJ1Y2tldHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhpbmRleCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgcC54dCA9IHAueCArIHYudTtcbiAgICAgICAgcC55dCA9IHAueSArIHYudjtcbiAgICAgICAgdGhpcy5idWNrZXRzW2luZGV4XS5wdXNoKHApO1xuICAgIH1cblxuICAgIGRyYXcoY29udGV4dDJEOiBhbnkpIHtcbiAgICAgICAgdGhpcy5idWNrZXRzLmZvckVhY2goKGJ1Y2tldDogUGFydGljdWxlW10sIGk6IG51bWJlcikgPT4ge1xuICAgICAgICAgICAgaWYgKGJ1Y2tldC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgY29udGV4dDJELmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgICAgIGNvbnRleHQyRC5zdHJva2VTdHlsZSA9IHRoaXMuY29sb3JTY2FsZS5jb2xvckF0KGkpO1xuICAgICAgICAgICAgICAgIGJ1Y2tldC5mb3JFYWNoKGZ1bmN0aW9uIChwYXJ0aWNsZSkge1xuICAgICAgICAgICAgICAgICAgICBjb250ZXh0MkQubW92ZVRvKHBhcnRpY2xlLngsIHBhcnRpY2xlLnkpO1xuICAgICAgICAgICAgICAgICAgICBjb250ZXh0MkQubGluZVRvKHBhcnRpY2xlLnh0LCBwYXJ0aWNsZS55dCk7XG4gICAgICAgICAgICAgICAgICAgIHBhcnRpY2xlLnggPSBwYXJ0aWNsZS54dDtcbiAgICAgICAgICAgICAgICAgICAgcGFydGljbGUueSA9IHBhcnRpY2xlLnl0O1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGNvbnRleHQyRC5zdHJva2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufSIsImltcG9ydCBQYXJ0aWN1bGUgZnJvbSBcIi4vcGFydGljbGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FudmFzQm91bmQge1xuICAgIHB1YmxpYyB4TWluOiBudW1iZXI7XG4gICAgcHVibGljIHlNaW46IG51bWJlcjtcbiAgICBwdWJsaWMgeE1heDogbnVtYmVyO1xuICAgIHB1YmxpYyB5TWF4OiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3Rvcih4TWluOiBudW1iZXIsIHlNaW46IG51bWJlciwgeE1heDogbnVtYmVyLCB5TWF4OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy54TWluID0geE1pbjtcbiAgICAgICAgdGhpcy55TWluID0geU1pbjtcbiAgICAgICAgdGhpcy54TWF4ID0geE1heDtcbiAgICAgICAgdGhpcy55TWF4ID0geU1heDtcbiAgICB9XG5cbiAgICBnZXQgd2lkdGgoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMueE1heCAtIHRoaXMueE1pbjtcbiAgICB9XG5cbiAgICBnZXQgaGVpZ2h0KCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLnlNYXggLSB0aGlzLnlNaW47XG4gICAgfVxuXG4gICAgZ2V0UmFuZG9tUGFydGljdWxlKG1heEFnZTogbnVtYmVyKTogUGFydGljdWxlIHtcbiAgICAgICAgY29uc3QgeCA9IE1hdGgucm91bmQoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy53aWR0aCkgKyB0aGlzLnhNaW4pO1xuICAgICAgICBjb25zdCB5ID0gTWF0aC5yb3VuZChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLmhlaWdodCkgKyB0aGlzLnlNaW4pO1xuICAgICAgICByZXR1cm4gbmV3IFBhcnRpY3VsZSh4LCB5LCBtYXhBZ2UpO1xuICAgIH1cblxuICAgIHJlc2V0UGFydGljdWxlKHA6IFBhcnRpY3VsZSk6IFBhcnRpY3VsZSB7XG4gICAgICAgIGNvbnN0IHggPSBNYXRoLnJvdW5kKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMud2lkdGgpICsgdGhpcy54TWluKTtcbiAgICAgICAgY29uc3QgeSA9IE1hdGgucm91bmQoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5oZWlnaHQpICsgdGhpcy55TWluKTtcbiAgICAgICAgcC5yZXNldCh4LCB5KTtcbiAgICAgICAgcmV0dXJuIHA7XG4gICAgfVxufVxuXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBDb2xvclNjYWxlIHtcbiAgICBwcml2YXRlIHNjYWxlOiBzdHJpbmdbXSA9IFtcbiAgICAgICAgXCJyZ2IoMzYsMTA0LCAxODApXCIsXG4gICAgICAgIFwicmdiKDYwLDE1NywgMTk0KVwiLFxuICAgICAgICBcInJnYigxMjgsMjA1LDE5MyApXCIsXG4gICAgICAgIFwicmdiKDE1MSwyMTgsMTY4IClcIixcbiAgICAgICAgXCJyZ2IoMTk4LDIzMSwxODEpXCIsXG4gICAgICAgIFwicmdiKDIzOCwyNDcsMjE3KVwiLFxuICAgICAgICBcInJnYigyNTUsMjM4LDE1OSlcIixcbiAgICAgICAgXCJyZ2IoMjUyLDIxNywxMjUpXCIsXG4gICAgICAgIFwicmdiKDI1NSwxODIsMTAwKVwiLFxuICAgICAgICBcInJnYigyNTIsMTUwLDc1KVwiLFxuICAgICAgICBcInJnYigyNTAsMTEyLDUyKVwiLFxuICAgICAgICBcInJnYigyNDUsNjQsMzIpXCIsXG4gICAgICAgIFwicmdiKDIzNyw0NSwyOClcIixcbiAgICAgICAgXCJyZ2IoMjIwLDI0LDMyKVwiLFxuICAgICAgICBcInJnYigxODAsMCwzNSlcIlxuICAgIF1cbiAgICBwcml2YXRlIG1pblZhbHVlOiBudW1iZXI7XG4gICAgcHJpdmF0ZSBtYXhWYWx1ZTogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IobWluVmFsdWU6IG51bWJlciwgbWF4VmFsdWU6IG51bWJlciwgc2NhbGU/OiBzdHJpbmdbXSkge1xuICAgICAgICB0aGlzLnNldE1pbk1heChtaW5WYWx1ZSwgbWF4VmFsdWUpO1xuICAgICAgICBpZiAoKHNjYWxlIGluc3RhbmNlb2YgQXJyYXkpICYmIHNjYWxlLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5zY2FsZSA9IHNjYWxlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0TWluTWF4KG1pblZhbHVlOiBudW1iZXIsIG1heFZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5taW5WYWx1ZSA9IG1pblZhbHVlO1xuICAgICAgICB0aGlzLm1heFZhbHVlID0gbWF4VmFsdWU7XG4gICAgfVxuXG4gICAgZ2V0IHNpemUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNjYWxlLmxlbmd0aDtcbiAgICB9XG5cbiAgICBnZXRDb2xvckluZGV4KHZhbHVlOiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICBpZiAodmFsdWUgPD0gdGhpcy5taW5WYWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZhbHVlID49IHRoaXMubWF4VmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNjYWxlLmxlbmd0aCAtIDE7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLnNjYWxlLmxlbmd0aCAqICh2YWx1ZSAtIHRoaXMubWluVmFsdWUpIC8gKHRoaXMubWF4VmFsdWUgLSB0aGlzLm1pblZhbHVlKTtcbiAgICAgICAgaWYgKGluZGV4IDwgMCkge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGluZGV4ID4gdGhpcy5zY2FsZS5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zY2FsZS5sZW5ndGggLSAxO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKGluZGV4KTtcbiAgICB9XG5cbiAgICBjb2xvckF0KGluZGV4OiBudW1iZXIpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5zY2FsZVtpbmRleF07XG4gICAgfVxuXG4gICAgZ2V0Q29sb3IodmFsdWU6IG51bWJlcik6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLnNjYWxlW3RoaXMuZ2V0Q29sb3JJbmRleCh2YWx1ZSldO1xuICAgIH1cbn1cbiIsImltcG9ydCBWZWN0b3IgZnJvbSBcIi4vdmVjdG9yXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdyaWQge1xuICAgIHByaXZhdGUgZGF0YTogVmVjdG9yW107XG4gICAgcHJpdmF0ZSDPhjA6IG51bWJlcjtcbiAgICBwcml2YXRlIM67MDogbnVtYmVyO1xuICAgIHByaXZhdGUgzpTOuzogbnVtYmVyO1xuICAgIHByaXZhdGUgzpTPhjogbnVtYmVyO1xuICAgIHByaXZhdGUgaGVpZ2h0OiBudW1iZXI7XG4gICAgcHJpdmF0ZSB3aWR0aDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YTogVmVjdG9yW10sIM+GMDogbnVtYmVyLCDOuzA6IG51bWJlciwgzpTPhjogbnVtYmVyLCDOlM67OiBudW1iZXIsIGhlaWdodDogbnVtYmVyLCB3aWR0aDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgICAgIHRoaXMuz4YwID0gz4YwO1xuICAgICAgICB0aGlzLs67MCA9IM67MDtcbiAgICAgICAgdGhpcy7OlM67ID0gzpTOuztcbiAgICAgICAgdGhpcy7OlM+GID0gzpTPhjtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICB9XG5cbiAgICBnZXQgdmFsdWVSYW5nZSgpOiBudW1iZXJbXSB7XG4gICAgICAgIGlmICghdGhpcy5kYXRhLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIFswLCAwXTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgbWluID0gdGhpcy5kYXRhWzBdLmludGVuc2l0eTtcbiAgICAgICAgbGV0IG1heCA9IHRoaXMuZGF0YVswXS5pbnRlbnNpdHk7XG4gICAgICAgIHRoaXMuZGF0YS5mb3JFYWNoKCh2YWx1ZTogVmVjdG9yKSA9PiB7XG4gICAgICAgICAgICBtaW4gPSBNYXRoLm1pbihtaW4sIHZhbHVlLmludGVuc2l0eSk7XG4gICAgICAgICAgICBtYXggPSBNYXRoLm1heChtYXgsIHZhbHVlLmludGVuc2l0eSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gW21pbiwgbWF4XTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0IHZlY3RvciBhdCBhbnkgcG9pbnRcbiAgICAgKiBAcGFyYW0gzrsgTG9uZ2l0dWRlXG4gICAgICogQHBhcmFtIM+GIExhdGl0dWRlXG4gICAgICovXG4gICAgZ2V0KM67OiBudW1iZXIsIM+GOiBudW1iZXIpOiBWZWN0b3Ige1xuICAgICAgICBjb25zdCBmzrsgPSB0aGlzLmZsb29yTW9kKM67IC0gdGhpcy7OuzAsIDM2MCkgLyB0aGlzLs6Uzrs7ICAvLyBjYWxjdWxhdGUgbG9uZ2l0dWRlIGluZGV4IGluIHdyYXBwZWQgcmFuZ2UgWzAsIDM2MClcbiAgICAgICAgY29uc3QgZs+GID0gKHRoaXMuz4YwIC0gz4YpIC8gdGhpcy7OlM+GOyAgICAgICAgICAgICAgICAgLy8gY2FsY3VsYXRlIGxhdGl0dWRlIGluZGV4IGluIGRpcmVjdGlvbiArOTAgdG8gLTkwXG5cbiAgICAgICAgY29uc3Qgac67ID0gTWF0aC5mbG9vcihmzrspIC8vIGNvbCBuXG4gICAgICAgIGxldCBqzrsgPSBpzrsgKyAxOyAgICAgICAgLy8gY29sIG4rMVxuICAgICAgICBpZiAoas67ID49IHRoaXMud2lkdGgpIHtcbiAgICAgICAgICAgIGrOuyA9IHRoaXMuzrswO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGnPhiA9IE1hdGguZmxvb3IoZs+GKSAvLyBsaW5lIG1cbiAgICAgICAgbGV0IGrPhiA9IGnPhiArIDE7ICAgICAgICAvLyBsaW5lIG0rMVxuICAgICAgICBpZiAoas+GID49IHRoaXMuaGVpZ2h0KSB7XG4gICAgICAgICAgICBqz4YgPSBpz4Y7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB2zrsgPSBmzrsgLSBpzrs7ICAgLy8gY29sIHZhcmlhdGlvbiBbMC4uMV1cbiAgICAgICAgY29uc3Qgds+GID0gZs+GIC0gac+GOyAgIC8vIGxpbmUgdmFyaWF0aW9uIFswLi4xXVxuXG4gICAgICAgIGlmIChpzrsgPj0gMCAmJiBpz4YgPj0gMCAmJiBpzrsgPCB0aGlzLndpZHRoICYmIGnPhiA8IHRoaXMuaGVpZ2h0KSB7XG4gICAgICAgICAgICBsZXQgZzAwID0gdGhpcy5kYXRhW2nOuyArIGnPhiAqIHRoaXMud2lkdGhdO1xuICAgICAgICAgICAgbGV0IGcxMCA9IHRoaXMuZGF0YVtqzrsgKyBpz4YgKiB0aGlzLndpZHRoXTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuaXNWYWx1ZShnMDApICYmIHRoaXMuaXNWYWx1ZShnMTApKSB7XG4gICAgICAgICAgICAgICAgbGV0IGcwMSA9IHRoaXMuZGF0YVtpzrsgKyBqz4YgKiB0aGlzLndpZHRoXTtcbiAgICAgICAgICAgICAgICBsZXQgZzExID0gdGhpcy5kYXRhW2rOuyArIGrPhiAqIHRoaXMud2lkdGhdO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzVmFsdWUoZzAxKSAmJiB0aGlzLmlzVmFsdWUoZzExKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uKFxuICAgICAgICAgICAgICAgICAgICAgICAgds67LFxuICAgICAgICAgICAgICAgICAgICAgICAgds+GLFxuICAgICAgICAgICAgICAgICAgICAgICAgZzAwLCAvL2wwYzBcbiAgICAgICAgICAgICAgICAgICAgICAgIGcxMCwgLy9sMGMxXG4gICAgICAgICAgICAgICAgICAgICAgICBnMDEsIC8vbDFjMFxuICAgICAgICAgICAgICAgICAgICAgICAgZzExICAvL2wxY2xcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcigwLCAwKTtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEludGVycG9sYXRlIHZhbHVlXG4gICAgICogQHBhcmFtIHggdmFyaWF0aW9uIGJldHdlZW4gZzAqIGFuZCBnMSpcbiAgICAgKiBAcGFyYW0geSB2YXJpYXRpb24gYmV0d2VlbiBnKjAgZGFucyBnKjFcbiAgICAgKiBAcGFyYW0gZzAwIHBvaW50IGF0IGNvbF8wIGFuZCBsaW5lXzBcbiAgICAgKiBAcGFyYW0gZzEwIHBvaW50IGF0IGNvbF8xIGFuZCBsaW5lXzBcbiAgICAgKiBAcGFyYW0gZzAxIHBvaW50IGF0IGNvbF8wIGFuZCBsaW5lXzFcbiAgICAgKiBAcGFyYW0gZzExIHBvaW50IGF0IGNvbF8xIGFuZCBsaW5lXzFcbiAgICAgKiBAcmV0dXJuIGludGVycG9sYXRlZCB2ZWN0b3JcbiAgICAgKi9cbiAgICBpbnRlcnBvbGF0aW9uKHg6IG51bWJlciwgeTogbnVtYmVyLCBnMDA6IFZlY3RvciwgZzEwOiBWZWN0b3IsIGcwMTogVmVjdG9yLCBnMTE6IFZlY3Rvcik6IFZlY3RvciB7XG4gICAgICAgIHZhciByeCA9ICgxIC0geCk7XG4gICAgICAgIHZhciByeSA9ICgxIC0geSk7XG4gICAgICAgIHZhciBhID0gcnggKiByeSxcbiAgICAgICAgICAgIGIgPSB4ICogcnksXG4gICAgICAgICAgICBjID0gcnggKiB5LFxuICAgICAgICAgICAgZCA9IHggKiB5O1xuICAgICAgICB2YXIgdSA9IGcwMC51ICogYSArIGcxMC51ICogYiArIGcwMS51ICogYyArIGcxMS51ICogZDtcbiAgICAgICAgdmFyIHYgPSBnMDAudiAqIGEgKyBnMTAudiAqIGIgKyBnMDEudiAqIGMgKyBnMTEudiAqIGQ7XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yKHUsIHYpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEN1c3RvbSBtb2R1bG9cbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfSByZXR1cm5zIHJlbWFpbmRlciBvZiBmbG9vcmVkIGRpdmlzaW9uLCBpLmUuLCBmbG9vcihhIC8gbikuIFVzZWZ1bCBmb3IgY29uc2lzdGVudCBtb2R1bG9cbiAgICAgKiAgICAgICAgICBvZiBuZWdhdGl2ZSBudW1iZXJzLiBTZWUgaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9Nb2R1bG9fb3BlcmF0aW9uLlxuICAgICAqL1xuICAgIGZsb29yTW9kKGE6IG51bWJlciwgbjogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIGEgLSBuICogTWF0aC5mbG9vcihhIC8gbik7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIERldGVjdCBpZiB4IGlzIGEgdmFsdWVcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gdHJ1ZSBpZiB0aGUgc3BlY2lmaWVkIHZhbHVlIGlzIG5vdCBudWxsIGFuZCBub3QgdW5kZWZpbmVkLlxuICAgICAqL1xuICAgIGlzVmFsdWUoeDogYW55KTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB4ICE9PSBudWxsICYmIHggIT09IHVuZGVmaW5lZDtcbiAgICB9O1xufVxuIiwiaW1wb3J0IE1hcEJvdW5kIGZyb20gXCIuL21hcEJvdW5kXCI7XG5pbXBvcnQgQ2FudmFzQm91bmQgZnJvbSBcIi4vY2FudmFzQm91bmRcIjtcbmltcG9ydCBWZWN0b3IgZnJvbSBcIi4vdmVjdG9yXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGxheWVyIHtcblxuICAgIHB1YmxpYyBtYXBCb3VuZDogTWFwQm91bmQ7XG4gICAgcHVibGljIGNhbnZhc0JvdW5kOiBDYW52YXNCb3VuZDtcblxuICAgIGNvbnN0cnVjdG9yKG1hcEJvdW5kOiBNYXBCb3VuZCwgY2FudmFzQm91bmQ6IENhbnZhc0JvdW5kKSB7XG4gICAgICAgIHRoaXMuY2FudmFzQm91bmQgPSBjYW52YXNCb3VuZDtcbiAgICAgICAgdGhpcy5tYXBCb3VuZCA9IG1hcEJvdW5kO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEZpbmQgZ2VvY29vcmRpbmF0ZSBmcm9tIGNhbnZhcyBwb2ludFxuICAgICAqIEBwYXJhbSB4IFxuICAgICAqIEBwYXJhbSB5IFxuICAgICAqIHJldHVybiBbbG5nLCBsYXRdXG4gICAgICovXG4gICAgY2FudmFzVG9NYXAoeDogbnVtYmVyLCB5OiBudW1iZXIpOiBudW1iZXJbXSB7XG4gICAgICAgIGNvbnN0IG1hcExvbkRlbHRhID0gdGhpcy5tYXBCb3VuZC5lYXN0IC0gdGhpcy5tYXBCb3VuZC53ZXN0O1xuICAgICAgICBjb25zdCB3b3JsZE1hcFJhZGl1cyA9ICh0aGlzLmNhbnZhc0JvdW5kLndpZHRoIC8gdGhpcy5yYWQyZGVnKG1hcExvbkRlbHRhKSkgKiAzNjAgLyAoMiAqIE1hdGguUEkpO1xuICAgICAgICBjb25zdCBtYXBPZmZzZXRZID0gKHdvcmxkTWFwUmFkaXVzIC8gMiAqIE1hdGgubG9nKCgxICsgTWF0aC5zaW4odGhpcy5tYXBCb3VuZC5zb3V0aCkpIC8gKDEgLSBNYXRoLnNpbih0aGlzLm1hcEJvdW5kLnNvdXRoKSkpKTtcbiAgICAgICAgY29uc3QgZXF1YXRvclkgPSB0aGlzLmNhbnZhc0JvdW5kLmhlaWdodCArIG1hcE9mZnNldFk7XG4gICAgICAgIGNvbnN0IGEgPSAoZXF1YXRvclkgLSB5KSAvIHdvcmxkTWFwUmFkaXVzO1xuXG4gICAgICAgIGNvbnN0IM+GID0gMTgwIC8gTWF0aC5QSSAqICgyICogTWF0aC5hdGFuKE1hdGguZXhwKGEpKSAtIE1hdGguUEkgLyAyKTtcbiAgICAgICAgY29uc3QgzrsgPSB0aGlzLnJhZDJkZWcodGhpcy5tYXBCb3VuZC53ZXN0KSArIHggLyB0aGlzLmNhbnZhc0JvdW5kLndpZHRoICogdGhpcy5yYWQyZGVnKG1hcExvbkRlbHRhKTtcbiAgICAgICAgcmV0dXJuIFvOuywgz4ZdO1xuICAgIH07XG5cbiAgICBtZXJjWSjPhjogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIE1hdGgubG9nKE1hdGgudGFuKM+GIC8gMiArIE1hdGguUEkgLyA0KSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFByb2plY3QgYSBwb2ludCBvbiB0aGUgbWFwXG4gICAgICogQHBhcmFtIM67IExvbmdpdHVkZVxuICAgICAqIEBwYXJhbSDPhiBMYXRpdHVkZVxuICAgICAqIEByZXR1cm4gW3gsIHldXG4gICAgICovXG4gICAgbWFwVG9DYW52YXMozrs6IG51bWJlciwgz4Y6IG51bWJlcik6IG51bWJlcltdIHtcbiAgICAgICAgY29uc3QgeW1pbiA9IHRoaXMubWVyY1kodGhpcy5tYXBCb3VuZC5zb3V0aCk7XG4gICAgICAgIGNvbnN0IHltYXggPSB0aGlzLm1lcmNZKHRoaXMubWFwQm91bmQubm9ydGgpO1xuICAgICAgICBjb25zdCB4RmFjdG9yID0gdGhpcy5jYW52YXNCb3VuZC53aWR0aCAvICh0aGlzLm1hcEJvdW5kLmVhc3QgLSB0aGlzLm1hcEJvdW5kLndlc3QpO1xuICAgICAgICBjb25zdCB5RmFjdG9yID0gdGhpcy5jYW52YXNCb3VuZC5oZWlnaHQgLyAoeW1heCAtIHltaW4pO1xuXG4gICAgICAgIGxldCB5ID0gdGhpcy5tZXJjWSh0aGlzLmRlZzJyYWQoz4YpKTtcbiAgICAgICAgY29uc3QgeCA9ICh0aGlzLmRlZzJyYWQozrspIC0gdGhpcy5tYXBCb3VuZC53ZXN0KSAqIHhGYWN0b3I7XG4gICAgICAgIHkgPSAoeW1heCAtIHkpICogeUZhY3RvcjtcbiAgICAgICAgcmV0dXJuIFt4LCB5XTtcbiAgICB9O1xuXG5cbiAgICBkZWcycmFkKGRlZzogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIGRlZyAqIE1hdGguUEkgLyAxODA7XG4gICAgfTtcblxuICAgIHJhZDJkZWcocmFkOiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gcmFkICogMTgwIC8gTWF0aC5QSTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHBhcmFtIM67IExvbmdpdHVkZVxuICAgICAqIEBwYXJhbSDPhiBMYXRpdHVkZVxuICAgICAqIEBwYXJhbSB4IFxuICAgICAqIEBwYXJhbSB5IFxuICAgICAqIEByZXR1cm4gW11cbiAgICAgKi9cbiAgICBkaXN0b3J0aW9uKM67OiBudW1iZXIsIM+GOiBudW1iZXIsIHg6IG51bWJlciwgeTogbnVtYmVyKTogbnVtYmVyW10ge1xuICAgICAgICBjb25zdCDPhCA9IDIgKiBNYXRoLlBJO1xuICAgICAgICAvL0BzZWUgaHR0cHM6Ly9naXRodWIuY29tL2RhbndpbGQvbGVhZmxldC12ZWxvY2l0eS9pc3N1ZXMvMTUjaXNzdWVjb21tZW50LTM0NTI2MDc2OFxuICAgICAgICBjb25zdCBIID0gNTtcbiAgICAgICAgY29uc3QgaM67ID0gzrsgPCAwID8gSCA6IC1IO1xuICAgICAgICBjb25zdCBoz4YgPSDPhiA8IDAgPyBIIDogLUg7XG5cbiAgICAgICAgY29uc3QgcM67ID0gdGhpcy5tYXBUb0NhbnZhcyjOuyArIGjOuywgz4YpO1xuICAgICAgICBjb25zdCBwz4YgPSB0aGlzLm1hcFRvQ2FudmFzKM67LCDPhiArIGjPhik7XG5cbiAgICAgICAgLy8gTWVyaWRpYW4gc2NhbGUgZmFjdG9yIChzZWUgU255ZGVyLCBlcXVhdGlvbiA0LTMpLCB3aGVyZSBSID0gMS4gVGhpcyBoYW5kbGVzIGlzc3VlIHdoZXJlIGxlbmd0aCBvZiAxwrogzrtcbiAgICAgICAgLy8gY2hhbmdlcyBkZXBlbmRpbmcgb24gz4YuIFdpdGhvdXQgdGhpcywgdGhlcmUgaXMgYSBwaW5jaGluZyBlZmZlY3QgYXQgdGhlIHBvbGVzLlxuICAgICAgICBjb25zdCBrID0gTWF0aC5jb3Moz4YgLyAzNjAgKiDPhCk7XG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAocM67WzBdIC0geCkgLyBozrsgLyBrLFxuICAgICAgICAgICAgKHDOu1sxXSAtIHkpIC8gaM67IC8gayxcbiAgICAgICAgICAgIChwz4ZbMF0gLSB4KSAvIGjPhixcbiAgICAgICAgICAgIChwz4ZbMV0gLSB5KSAvIGjPhlxuICAgICAgICBdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhbGN1bGF0ZSBkaXN0b3J0aW9uIG9mIHRoZSB3aW5kIHZlY3RvciBjYXVzZWQgYnkgdGhlIHNoYXBlIG9mIHRoZSBwcm9qZWN0aW9uIGF0IHBvaW50ICh4LCB5KS4gVGhlIHdpbmRcbiAgICAgKiB2ZWN0b3IgaXMgbW9kaWZpZWQgaW4gcGxhY2UgYW5kIHJldHVybmVkIGJ5IHRoaXMgZnVuY3Rpb24uXG4gICAgICogQHBhcmFtIM67IFxuICAgICAqIEBwYXJhbSDPhiBcbiAgICAgKiBAcGFyYW0geCBcbiAgICAgKiBAcGFyYW0geSBcbiAgICAgKiBAcGFyYW0gc2NhbGUgc2NhbGUgZmFjdG9yXG4gICAgICogQHBhcmFtIHdpbmQgW3UsIHZdXG4gICAgICogQHJldHVybiBbXVxuICAgICAqL1xuICAgIGRpc3RvcnQozrs6IG51bWJlciwgz4Y6IG51bWJlciwgeDogbnVtYmVyLCB5OiBudW1iZXIsIHNjYWxlOiBudW1iZXIsIHdpbmQ6IFZlY3Rvcik6IFZlY3RvciB7XG4gICAgICAgIGNvbnN0IHUgPSB3aW5kLnUgKiBzY2FsZTtcbiAgICAgICAgY29uc3QgdiA9IHdpbmQudiAqIHNjYWxlO1xuICAgICAgICBjb25zdCBkID0gdGhpcy5kaXN0b3J0aW9uKM67LCDPhiwgeCwgeSk7XG5cbiAgICAgICAgLy8gU2NhbGUgZGlzdG9ydGlvbiB2ZWN0b3JzIGJ5IHUgYW5kIHYsIHRoZW4gYWRkLlxuICAgICAgICB3aW5kLnUgPSBkWzBdICogdSArIGRbMl0gKiB2O1xuICAgICAgICB3aW5kLnYgPSBkWzFdICogdSArIGRbM10gKiB2O1xuICAgICAgICByZXR1cm4gd2luZDtcbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFwQm91bmQge1xuICAgIHB1YmxpYyBzb3V0aDogbnVtYmVyO1xuICAgIHB1YmxpYyBub3J0aDogbnVtYmVyO1xuICAgIHB1YmxpYyBlYXN0OiBudW1iZXI7XG4gICAgcHVibGljIHdlc3Q6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKG5vcnRoOiBudW1iZXIsIGVhc3Q6IG51bWJlciwgc291dGg6IG51bWJlciwgd2VzdDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMubm9ydGggPSBub3J0aCAqIE1hdGguUEkgLyAxODA7XG4gICAgICAgIHRoaXMuZWFzdCA9IGVhc3QgKiBNYXRoLlBJIC8gMTgwO1xuICAgICAgICB0aGlzLnNvdXRoID0gc291dGggKiBNYXRoLlBJIC8gMTgwO1xuICAgICAgICB0aGlzLndlc3QgPSB3ZXN0ICogTWF0aC5QSSAvIDE4MDtcbiAgICB9XG5cbiAgICBnZXQgd2lkdGgoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuICg3MjAgKyB0aGlzLmVhc3QgLSB0aGlzLndlc3QpICUgMzYwO1xuICAgIH1cblxuICAgIGdldCBoZWlnaHQoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuICgzNjAgKyB0aGlzLm5vcnRoIC0gdGhpcy5zb3V0aCkgJSAxODA7XG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhcnRpY3VsZSB7XG4gICAgcHVibGljIHg6IG51bWJlcjtcbiAgICBwdWJsaWMgeTogbnVtYmVyO1xuICAgIHB1YmxpYyBhZ2U6IG51bWJlcjtcbiAgICBwdWJsaWMgbWF4QWdlOiBudW1iZXI7XG4gICAgcHVibGljIHh0OiBudW1iZXI7XG4gICAgcHVibGljIHl0OiBudW1iZXI7XG4gICAgcHVibGljIGludGVuc2l0eTogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoeDogbnVtYmVyLCB5OiBudW1iZXIsIG1heEFnZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgICAgIHRoaXMuYWdlID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbWF4QWdlKTtcbiAgICAgICAgdGhpcy5tYXhBZ2UgPSBtYXhBZ2U7XG4gICAgfVxuXG4gICAgcmVzZXQoeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICAgICAgdGhpcy5hZ2UgPSAwO1xuICAgIH1cblxuICAgIGdldCBpc0RlYWQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmFnZSA+IHRoaXMubWF4QWdlO1xuICAgIH1cblxuICAgIGdyb3coKSB7XG4gICAgICAgIHRoaXMuYWdlKys7XG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFZlY3RvciB7XG4gICAgcHVibGljIHU6IG51bWJlcjtcbiAgICBwdWJsaWMgdjogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IodT86IG51bWJlciwgdj86IG51bWJlcikge1xuICAgICAgICB0aGlzLnUgPSB1IHx8IDA7XG4gICAgICAgIHRoaXMudiA9IHYgfHwgMDtcbiAgICB9XG5cbiAgICBnZXQgaW50ZW5zaXR5KCkge1xuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KHRoaXMudSAqIHRoaXMudSArIHRoaXMudiAqIHRoaXMudik7XG4gICAgfVxufSIsImltcG9ydCBNYXBCb3VuZCBmcm9tIFwiLi9tYXBCb3VuZFwiO1xyXG5pbXBvcnQgVmVjdG9yIGZyb20gXCIuL3ZlY3RvclwiO1xyXG5pbXBvcnQgR3JpZCBmcm9tIFwiLi9ncmlkXCI7XHJcbmltcG9ydCBDb2xvclNjYWxlIGZyb20gXCIuL2NvbG9yU2NhbGVcIjtcclxuaW1wb3J0IENhbnZhc0JvdW5kIGZyb20gXCIuL2NhbnZhc0JvdW5kXCI7XHJcbmltcG9ydCBQYXJ0aWN1bGUgZnJvbSBcIi4vcGFydGljbGVcIjtcclxuaW1wb3J0IEFuaW1hdGlvbkJ1Y2tldCBmcm9tIFwiLi9hbmltYXRpb25CdWNrZXRcIjtcclxuaW1wb3J0IExheWVyIGZyb20gXCIuL2xheWVyXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFdpbmR5T3B0aW9ucyB7XHJcbiAgY2FudmFzOiBhbnk7XHJcbiAgZGF0YTogYW55O1xyXG4gIGNvbG9yU2NhbGU6IHN0cmluZ1tdO1xyXG4gIG1heFZlbG9jaXR5OiBudW1iZXI7XHJcbiAgbWluVmVsb2NpdHk6IG51bWJlcjtcclxuICB2ZWxvY2l0eVNjYWxlOiBudW1iZXI7XHJcbiAgcGFydGljbGVBZ2U6IG51bWJlcjtcclxuICBwYXJ0aWNsZU11bHRpcGxpZXI6IG51bWJlcjtcclxuICBwYXJ0aWNsZWxpbmVXaWR0aDogbnVtYmVyO1xyXG4gIGZyYW1lUmF0ZTogbnVtYmVyO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdpbmR5IHtcclxuXHJcbiAgcHJpdmF0ZSBncmlkOiBhbnk7XHJcbiAgcHJpdmF0ZSDOuzA6IG51bWJlcjtcclxuICBwcml2YXRlIM+GMDogbnVtYmVyO1xyXG4gIHByaXZhdGUgzpTOuzogbnVtYmVyO1xyXG4gIHByaXZhdGUgzpTPhjogbnVtYmVyO1xyXG4gIHByaXZhdGUgbmk6IG51bWJlcjtcclxuICBwcml2YXRlIG5qOiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBjYW52YXM6IGFueSA9IG51bGw7XHJcbiAgcHJpdmF0ZSBjb2xvclNjYWxlOiBDb2xvclNjYWxlO1xyXG4gIHByaXZhdGUgdmVsb2NpdHlTY2FsZTogbnVtYmVyO1xyXG4gIHByaXZhdGUgcGFydGljbGVNdWx0aXBsaWVyID0gMSAvIDMwMDtcclxuICBwcml2YXRlIHBhcnRpY2xlQWdlOiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBwYXJ0aWNsZUxpbmVXaWR0aDogbnVtYmVyO1xyXG4gIHByaXZhdGUgYXV0b0NvbG9yUmFuZ2UgPSBmYWxzZTtcclxuXHJcbiAgcHJpdmF0ZSBsYXllcjogTGF5ZXI7XHJcbiAgcHJpdmF0ZSBwYXJ0aWN1bGVzOiBQYXJ0aWN1bGVbXSA9IFtdO1xyXG4gIHByaXZhdGUgYW5pbWF0aW9uQnVja2V0OiBBbmltYXRpb25CdWNrZXQ7XHJcbiAgcHJpdmF0ZSBjb250ZXh0MkQ6IGFueTtcclxuICBwcml2YXRlIGFuaW1hdGlvbkxvb3A6IGFueSA9IG51bGw7XHJcbiAgcHJpdmF0ZSBmcmFtZVRpbWU6IG51bWJlcjtcclxuICBwcml2YXRlIHRoZW4gPSAwO1xyXG5cclxuXHJcbiAgY29uc3RydWN0b3Iob3B0aW9uczogV2luZHlPcHRpb25zKSB7XHJcbiAgICB0aGlzLnNldE9wdGlvbnMob3B0aW9ucyk7XHJcbiAgfVxyXG5cclxuICBzZXRPcHRpb25zKG9wdGlvbnM6IFdpbmR5T3B0aW9ucykge1xyXG4gICAgdGhpcy5jYW52YXMgPSBvcHRpb25zLmNhbnZhcztcclxuICAgIGlmIChvcHRpb25zLm1pblZlbG9jaXR5ID09PSB1bmRlZmluZWQgJiYgb3B0aW9ucy5tYXhWZWxvY2l0eSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRoaXMuYXV0b0NvbG9yUmFuZ2UgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jb2xvclNjYWxlID0gbmV3IENvbG9yU2NhbGUob3B0aW9ucy5taW5WZWxvY2l0eSB8fCAwLCBvcHRpb25zLm1heFZlbG9jaXR5IHx8IDEwLCBvcHRpb25zLmNvbG9yU2NhbGUpO1xyXG4gICAgdGhpcy52ZWxvY2l0eVNjYWxlID0gb3B0aW9ucy52ZWxvY2l0eVNjYWxlIHx8IDAuMDE7XHJcbiAgICB0aGlzLnBhcnRpY2xlQWdlID0gb3B0aW9ucy5wYXJ0aWNsZUFnZSB8fCA2NDtcclxuICAgIHRoaXMuc2V0RGF0YShvcHRpb25zLmRhdGEpO1xyXG4gICAgdGhpcy5wYXJ0aWNsZU11bHRpcGxpZXIgPSBvcHRpb25zLnBhcnRpY2xlTXVsdGlwbGllciB8fCAxIC8gMzAwO1xyXG4gICAgdGhpcy5wYXJ0aWNsZUxpbmVXaWR0aCA9IG9wdGlvbnMucGFydGljbGVsaW5lV2lkdGggfHwgMTtcclxuICAgIGNvbnN0IGZyYW1lUmF0ZSA9IG9wdGlvbnMuZnJhbWVSYXRlIHx8IDE1O1xyXG4gICAgdGhpcy5mcmFtZVRpbWUgPSAxMDAwIC8gZnJhbWVSYXRlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHBhcnRpY3VsZUNvdW50KCkge1xyXG4gICAgY29uc3QgcGFydGljdWxlUmVkdWN0aW9uID0gKCgvYW5kcm9pZHxibGFja2JlcnJ5fGllbW9iaWxlfGlwYWR8aXBob25lfGlwb2R8b3BlcmEgbWluaXx3ZWJvcy9pKS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpKSA/IChNYXRoLnBvdyh3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbywgMSAvIDMpIHx8IDEuNikgOiAxO1xyXG4gICAgcmV0dXJuIE1hdGgucm91bmQodGhpcy5sYXllci5jYW52YXNCb3VuZC53aWR0aCAqIHRoaXMubGF5ZXIuY2FudmFzQm91bmQuaGVpZ2h0ICogdGhpcy5wYXJ0aWNsZU11bHRpcGxpZXIpICogcGFydGljdWxlUmVkdWN0aW9uO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTG9hZCBkYXRhXHJcbiAgICogQHBhcmFtIGRhdGFcclxuICAgKi9cclxuICBzZXREYXRhKGRhdGE6IGFueVtdKSB7XHJcbiAgICBsZXQgdURhdGE6IGFueSA9IG51bGw7XHJcbiAgICBsZXQgdkRhdGE6IGFueSA9IG51bGw7XHJcbiAgICBjb25zdCBncmlkOiBWZWN0b3JbXSA9IFtdO1xyXG5cclxuICAgIGRhdGEuZm9yRWFjaCgocmVjb3JkKSA9PiB7XHJcbiAgICAgIHN3aXRjaCAoYCR7cmVjb3JkLmhlYWRlci5wYXJhbWV0ZXJDYXRlZ29yeX0sJHtyZWNvcmQuaGVhZGVyLnBhcmFtZXRlck51bWJlcn1gKSB7XHJcbiAgICAgICAgY2FzZSBcIjEsMlwiOlxyXG4gICAgICAgIGNhc2UgXCIyLDJcIjpcclxuICAgICAgICAgIHVEYXRhID0gcmVjb3JkO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcIjEsM1wiOlxyXG4gICAgICAgIGNhc2UgXCIyLDNcIjpcclxuICAgICAgICAgIHZEYXRhID0gcmVjb3JkO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKCF1RGF0YSB8fCAhdkRhdGEpIHtcclxuICAgICAgY29uc29sZS53YXJuKFwiRGF0YSBhcmUgbm90IGNvcnJlY3QgZm9ybWF0XCIpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdURhdGEuZGF0YS5mb3JFYWNoKCh1OiBudW1iZXIsIGluZGV4OiBudW1iZXIpID0+IHtcclxuICAgICAgZ3JpZC5wdXNoKG5ldyBWZWN0b3IodSwgdkRhdGEuZGF0YVtpbmRleF0pKTtcclxuICAgIH0pXHJcblxyXG4gICAgLy9jb25zb2xlLmxvZygndURhdGEnLCB1RGF0YSk7XHJcbiAgICAvL2NvbnNvbGUubG9nKCd2RGF0YScsIHZEYXRhKTtcclxuXHJcbiAgICB0aGlzLmdyaWQgPSBuZXcgR3JpZChcclxuICAgICAgZ3JpZCxcclxuICAgICAgdURhdGEuaGVhZGVyLmxhMSxcclxuICAgICAgdURhdGEuaGVhZGVyLmxvMSxcclxuICAgICAgdURhdGEuaGVhZGVyLmR5LFxyXG4gICAgICB1RGF0YS5oZWFkZXIuZHgsXHJcbiAgICAgIHVEYXRhLmhlYWRlci5ueSxcclxuICAgICAgdURhdGEuaGVhZGVyLm54XHJcbiAgICApO1xyXG5cclxuICAgIHRoaXMuzrswID0gdURhdGEuaGVhZGVyLmxvMTtcclxuICAgIHRoaXMuz4YwID0gdURhdGEuaGVhZGVyLmxhMTtcclxuXHJcbiAgICB0aGlzLs6UzrsgPSB1RGF0YS5oZWFkZXIuZHg7XHJcbiAgICB0aGlzLs6Uz4YgPSB1RGF0YS5oZWFkZXIuZHlcclxuXHJcbiAgICB0aGlzLm5pID0gdURhdGEuaGVhZGVyLm54O1xyXG4gICAgdGhpcy5uaiA9IHVEYXRhLmhlYWRlci5ueTsgLy8gbnVtYmVyIG9mIGdyaWQgcG9pbnRzIFctRSBhbmQgTi1TIChlLmcuLCAxNDQgeCA3MylcclxuXHJcbiAgICB2YXIgcCA9IDA7XHJcbiAgICB2YXIgaXNDb250aW51b3VzID0gTWF0aC5mbG9vcih0aGlzLm5pICogdGhpcy7OlM67KSA+PSAzNjA7XHJcblxyXG4gICAgZm9yICh2YXIgaiA9IDA7IGogPCB0aGlzLm5qOyBqKyspIHtcclxuICAgICAgdmFyIHJvdyA9IFtdO1xyXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubmk7IGkrKywgcCsrKSB7XHJcbiAgICAgICAgcm93W2ldID0gdGhpcy5ncmlkLmRhdGFbcF07XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGlzQ29udGludW91cykge1xyXG4gICAgICAgIC8vIEZvciB3cmFwcGVkIGdyaWRzLCBkdXBsaWNhdGUgZmlyc3QgY29sdW1uIGFzIGxhc3QgY29sdW1uIHRvIHNpbXBsaWZ5IGludGVycG9sYXRpb24gbG9naWNcclxuICAgICAgICByb3cucHVzaChyb3dbMF0pO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuZ3JpZFtqXSA9IHJvdztcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5hdXRvQ29sb3JSYW5nZSkge1xyXG4gICAgICBjb25zdCBtaW5NYXggPSB0aGlzLmdyaWQudmFsdWVSYW5nZTtcclxuICAgICAgdGhpcy5jb2xvclNjYWxlLnNldE1pbk1heChtaW5NYXhbMF0sIG1pbk1heFsxXSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmbG9vck1vZChhOiBudW1iZXIsIG46IG51bWJlcikge1xyXG4gICAgcmV0dXJuIGEgLSBuICogTWF0aC5mbG9vcihhIC8gbik7XHJcbiAgfTtcclxuXHJcbiAgaXNWYWx1ZSh4OiBhbnkpIHtcclxuICAgIHJldHVybiB4ICE9PSBudWxsICYmIHggIT09IHVuZGVmaW5lZDtcclxuICB9O1xyXG5cclxuICBiaWxpbmVhckludGVycG9sYXRlVmVjdG9yKHg6IG51bWJlciwgeTogbnVtYmVyLCBnMDA6IGFueSwgZzEwOiBhbnksIGcwMTogYW55LCBnMTE6IGFueSkge1xyXG4gICAgdmFyIHJ4ID0gKDEgLSB4KTtcclxuICAgIHZhciByeSA9ICgxIC0geSk7XHJcbiAgICB2YXIgYSA9IHJ4ICogcnksIGIgPSB4ICogcnksIGMgPSByeCAqIHksIGQgPSB4ICogeTtcclxuICAgIHZhciB1ID0gZzAwLnUgKiBhICsgZzEwLnUgKiBiICsgZzAxLnUgKiBjICsgZzExLnUgKiBkO1xyXG4gICAgdmFyIHYgPSBnMDAudiAqIGEgKyBnMTAudiAqIGIgKyBnMDEudiAqIGMgKyBnMTEudiAqIGQ7XHJcbiAgICByZXR1cm4gW3UsIHYsIE1hdGguc3FydCh1ICogdSArIHYgKiB2KV07XHJcbiAgfTtcclxuXHJcbiAgLyogR2V0IGludGVycG9sYXRlZCBncmlkIHZhbHVlIGZyb20gTG9uL0xhdCBwb3NpdGlvblxyXG4gICogQHBhcmFtIM67IHtGbG9hdH0gTG9uZ2l0dWRlXHJcbiAgKiBAcGFyYW0gz4Yge0Zsb2F0fSBMYXRpdHVkZVxyXG4gICogQHJldHVybnMge09iamVjdH1cclxuICAqL1xyXG4gIGludGVycG9sYXRlKM67OiBudW1iZXIsIM+GOiBudW1iZXIpOiBhbnkge1xyXG4gICAgaWYgKCF0aGlzLmdyaWQpIHtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICB2YXIgaSA9IHRoaXMuZmxvb3JNb2QozrsgLSB0aGlzLs67MCwgMzYwKSAvIHRoaXMuzpTOuzsgLy8gY2FsY3VsYXRlIGxvbmdpdHVkZSBpbmRleCBpbiB3cmFwcGVkIHJhbmdlIFswLCAzNjApXHJcbiAgICB2YXIgaiA9ICh0aGlzLs+GMCAtIM+GKSAvIHRoaXMuzpTPhjsgLy8gY2FsY3VsYXRlIGxhdGl0dWRlIGluZGV4IGluIGRpcmVjdGlvbiArOTAgdG8gLTkwXHJcblxyXG4gICAgdmFyIGZpID0gTWF0aC5mbG9vcihpKTtcclxuICAgIHZhciBjaSA9IGZpICsgMTtcclxuICAgIHZhciBmaiA9IE1hdGguZmxvb3Ioaik7XHJcbiAgICB2YXIgY2ogPSBmaiArIDE7XHJcbiAgICB2YXIgcm93ID0gdGhpcy5ncmlkW2ZqXTsvL0RvbnQga25vdyB3aHkgaGUgZG9zZW50IGZvdW5kIGFueSByb3cgRVJSUlJPUlxyXG4gICAgaWYgKHJvdykge1xyXG4gICAgICB2YXIgZzAwID0gcm93W2ZpXTtcclxuICAgICAgdmFyIGcxMCA9IHJvd1tjaV07XHJcbiAgICAgIGlmICh0aGlzLmlzVmFsdWUoZzAwKSAmJiB0aGlzLmlzVmFsdWUoZzEwKSAmJiAocm93ID0gdGhpcy5ncmlkW2NqXSkpIHtcclxuICAgICAgICB2YXIgZzAxID0gcm93W2ZpXTtcclxuICAgICAgICB2YXIgZzExID0gcm93W2NpXTtcclxuICAgICAgICBpZiAodGhpcy5pc1ZhbHVlKGcwMSkgJiYgdGhpcy5pc1ZhbHVlKGcxMSkpIHtcclxuICAgICAgICAgIC8vIEFsbCBmb3VyIHBvaW50cyBmb3VuZCwgc28gaW50ZXJwb2xhdGUgdGhlIHZhbHVlLlxyXG4gICAgICAgICAgcmV0dXJuIHRoaXMuYmlsaW5lYXJJbnRlcnBvbGF0ZVZlY3RvcihpIC0gZmksIGogLSBmaiwgZzAwLCBnMTAsIGcwMSwgZzExKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBudWxsO1xyXG4gIH07XHJcblxyXG4gIGdldFBhcnRpY3VsZVdpbmQocDogUGFydGljdWxlKTogVmVjdG9yIHtcclxuICAgIGNvbnN0IGxuZ0xhdCA9IHRoaXMubGF5ZXIuY2FudmFzVG9NYXAocC54LCBwLnkpO1xyXG4gICAgY29uc3Qgd2luZCA9IHRoaXMuZ3JpZC5nZXQobG5nTGF0WzBdLCBsbmdMYXRbMV0pO1xyXG4gICAgcC5pbnRlbnNpdHkgPSB3aW5kLmludGVuc2l0eTtcclxuICAgIGNvbnN0IG1hcEFyZWEgPSB0aGlzLmxheWVyLm1hcEJvdW5kLmhlaWdodCAqIHRoaXMubGF5ZXIubWFwQm91bmQud2lkdGg7XHJcbiAgICB2YXIgdmVsb2NpdHlTY2FsZSA9IHRoaXMudmVsb2NpdHlTY2FsZSAqIE1hdGgucG93KG1hcEFyZWEsIDAuNCk7XHJcbiAgICB0aGlzLmxheWVyLmRpc3RvcnQobG5nTGF0WzBdLCBsbmdMYXRbMV0sIHAueCwgcC55LCB2ZWxvY2l0eVNjYWxlLCB3aW5kKTtcclxuICAgIHJldHVybiB3aW5kO1xyXG4gIH1cclxuXHJcbiAgc3RhcnQobGF5ZXI6IExheWVyKSB7XHJcbiAgICB0aGlzLmNvbnRleHQyRCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcclxuICAgIHRoaXMuY29udGV4dDJELmxpbmVXaWR0aCA9IHRoaXMucGFydGljbGVMaW5lV2lkdGg7XHJcbiAgICB0aGlzLmNvbnRleHQyRC5maWxsU3R5bGUgPSBcInJnYmEoMCwgMCwgMCwgMC45NylcIjtcclxuICAgIHRoaXMuY29udGV4dDJELmdsb2JhbEFscGhhID0gMC42O1xyXG5cclxuICAgIHRoaXMubGF5ZXIgPSBsYXllcjtcclxuICAgIHRoaXMuYW5pbWF0aW9uQnVja2V0ID0gbmV3IEFuaW1hdGlvbkJ1Y2tldCh0aGlzLmNvbG9yU2NhbGUpO1xyXG5cclxuICAgIHRoaXMucGFydGljdWxlcy5zcGxpY2UoMCwgdGhpcy5wYXJ0aWN1bGVzLmxlbmd0aCk7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucGFydGljdWxlQ291bnQ7IGkrKykge1xyXG4gICAgICB0aGlzLnBhcnRpY3VsZXMucHVzaCh0aGlzLmxheWVyLmNhbnZhc0JvdW5kLmdldFJhbmRvbVBhcnRpY3VsZSh0aGlzLnBhcnRpY2xlQWdlKSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy50aGVuID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcblxyXG4gICAgdGhpcy5mcmFtZSgpO1xyXG4gIH1cclxuXHJcbiAgZnJhbWUoKSB7XHJcbiAgICB0aGlzLmFuaW1hdGlvbkxvb3AgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xyXG4gICAgICB0aGlzLmZyYW1lKClcclxuICAgIH0pO1xyXG4gICAgdmFyIG5vdyA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgdmFyIGRlbHRhID0gbm93IC0gdGhpcy50aGVuO1xyXG4gICAgaWYgKGRlbHRhID4gdGhpcy5mcmFtZVRpbWUpIHtcclxuICAgICAgdGhpcy50aGVuID0gbm93IC0gKGRlbHRhICUgdGhpcy5mcmFtZVRpbWUpO1xyXG4gICAgICB0aGlzLmV2b2x2ZSgpO1xyXG4gICAgICB0aGlzLmRyYXcoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGV2b2x2ZSgpIHtcclxuICAgIHRoaXMuYW5pbWF0aW9uQnVja2V0LmNsZWFyKCk7XHJcbiAgICB0aGlzLnBhcnRpY3VsZXMuZm9yRWFjaCgocDogUGFydGljdWxlKSA9PiB7XHJcbiAgICAgIHAuZ3JvdygpO1xyXG4gICAgICBpZiAocC5pc0RlYWQpIHtcclxuICAgICAgICB0aGlzLmxheWVyLmNhbnZhc0JvdW5kLnJlc2V0UGFydGljdWxlKHApO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IHdpbmQgPSB0aGlzLmdldFBhcnRpY3VsZVdpbmQocCk7XHJcbiAgICAgIHRoaXMuYW5pbWF0aW9uQnVja2V0LmFkZChwLCB3aW5kKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZHJhdygpIHtcclxuICAgIHRoaXMuY29udGV4dDJELmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9IFwiZGVzdGluYXRpb24taW5cIjtcclxuICAgIHRoaXMuY29udGV4dDJELmZpbGxSZWN0KFxyXG4gICAgICB0aGlzLmxheWVyLmNhbnZhc0JvdW5kLnhNaW4sXHJcbiAgICAgIHRoaXMubGF5ZXIuY2FudmFzQm91bmQueU1pbixcclxuICAgICAgdGhpcy5sYXllci5jYW52YXNCb3VuZC53aWR0aCxcclxuICAgICAgdGhpcy5sYXllci5jYW52YXNCb3VuZC5oZWlnaHRcclxuICAgICk7XHJcbiAgICAvLyBGYWRlIGV4aXN0aW5nIHBhcnRpY2xlIHRyYWlscy5cclxuICAgIHRoaXMuY29udGV4dDJELmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9IFwibGlnaHRlclwiO1xyXG4gICAgdGhpcy5jb250ZXh0MkQuZ2xvYmFsQWxwaGEgPSAwLjk7XHJcblxyXG4gICAgdGhpcy5hbmltYXRpb25CdWNrZXQuZHJhdyh0aGlzLmNvbnRleHQyRCk7XHJcbiAgfVxyXG5cclxuICBzdG9wKCkge1xyXG4gICAgdGhpcy5wYXJ0aWN1bGVzLnNwbGljZSgwLCB0aGlzLnBhcnRpY3VsZXMubGVuZ3RoKTtcclxuICAgIHRoaXMuYW5pbWF0aW9uQnVja2V0LmNsZWFyKCk7XHJcbiAgICBpZiAodGhpcy5hbmltYXRpb25Mb29wKSB7XHJcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLmFuaW1hdGlvbkxvb3ApO1xyXG4gICAgICB0aGlzLmFuaW1hdGlvbkxvb3AgPSBudWxsO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgQ2FudmFzQm91bmQgZnJvbSBcIi4vY2FudmFzQm91bmRcIjtcclxuaW1wb3J0IE1hcEJvdW5kIGZyb20gXCIuL21hcEJvdW5kXCI7XHJcbmltcG9ydCBXaW5keSBmcm9tIFwiLi93aW5keVwiO1xyXG5pbXBvcnQgQ2FudmFzTGF5ZXIgZnJvbSBcIi4vTC5DYW52YXNMYXllclwiO1xyXG5pbXBvcnQgVmVsb2NpdHlMYXllciBmcm9tIFwiLi9MLlZlbG9jaXR5TGF5ZXJcIjtcclxuaW1wb3J0IENvbnRyb2xWZWxvY2l0eSBmcm9tICcuL0wuQ29udHJvbFZlbG9jaXR5JztcclxuXHJcbig8YW55PndpbmRvdykuQ2FudmFzQm91bmQgPSBDYW52YXNCb3VuZDtcclxuKDxhbnk+d2luZG93KS5NYXBCb3VuZCA9IE1hcEJvdW5kO1xyXG4oPGFueT53aW5kb3cpLldpbmR5ID0gV2luZHk7XHJcblxyXG5kZWNsYXJlIHZhciBMOiBhbnk7XHJcblxyXG5MLkNhbnZhc0xheWVyID0gKEwuTGF5ZXIgPyBMLkxheWVyIDogTC5DbGFzcykuZXh0ZW5kKG5ldyBDYW52YXNMYXllcigpKTtcclxuTC5jYW52YXNMYXllciA9IGZ1bmN0aW9uICgpIHtcclxuXHRyZXR1cm4gbmV3IEwuQ2FudmFzTGF5ZXIoKTtcclxufTtcclxuXHJcbkwuQ29udHJvbFZlbG9jaXR5ID0gKEwuQ29udHJvbCkuZXh0ZW5kKG5ldyBDb250cm9sVmVsb2NpdHkoKSk7XHJcbkwuY29udHJvbFZlbG9jaXR5ID0gZnVuY3Rpb24gKCkge1xyXG5cdHJldHVybiBuZXcgTC5Db250cm9sVmVsb2NpdHkoKTtcclxufTtcclxuXHJcbkwuVmVsb2NpdHlMYXllciA9IChMLkxheWVyID8gTC5MYXllciA6IEwuQ2xhc3MpLmV4dGVuZChuZXcgVmVsb2NpdHlMYXllcigpKTtcclxuTC52ZWxvY2l0eUxheWVyID0gZnVuY3Rpb24gKG9wdGlvbnM6IGFueSkge1xyXG5cdHJldHVybiBuZXcgTC5WZWxvY2l0eUxheWVyKG9wdGlvbnMpO1xyXG59O1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=