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
// -- L.DomUtil.setTransform from leaflet 1.0.0 to work on 0.0.7
if (!L.DomUtil.setTransform) {
    L.DomUtil.setTransform = function (el, offset, scale) {
        var pos = offset || new L.Point(0, 0);
        el.style[L.DomUtil.TRANSFORM] =
            (L.Browser.ie3d
                ? "translate(" + pos.x + "px," + pos.y + "px)"
                : "translate3d(" + pos.x + "px," + pos.y + "px,0)") +
                (scale ? " scale(" + scale + ")" : "");
    };
}
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
    CanvasLayer.prototype.getEvents = function () {
        var events = {
            resize: this.onLayerDidResize,
            moveend: this.onLayerDidMove,
            zoomanim: undefined
        };
        if (this._map.options.zoomAnimation && L.Browser.any3d) {
            events.zoomanim = this.animateZoom;
        }
        return events;
    };
    CanvasLayer.prototype.onAdd = function (map) {
        var _this = this;
        this._map = map;
        this._canvas = L.DomUtil.create('canvas', 'leaflet-layer');
        var size = this._map.getSize();
        this._canvas.width = size.x;
        this._canvas.height = size.y;
        var animated = this._map.options.zoomAnimation && L.Browser.any3d;
        L.DomUtil.addClass(this._canvas, 'leaflet-zoom-' + (animated ? 'animated' : 'hide'));
        map.getPanes().overlayPane.appendChild(this._canvas);
        map.on(this.getEvents(), this);
        var del = this._delegate || this;
        del.onLayerDidMount && del.onLayerDidMount(); // -- callback
        this.needRedraw();
        setTimeout(function () {
            _this.onLayerDidMove();
        }, 0);
    };
    CanvasLayer.prototype.onRemove = function (map) {
        var del = this._delegate || this;
        del.onLayerWillUnmount && del.onLayerWillUnmount(); // -- callback
        map.getPanes().overlayPane.removeChild(this._canvas);
        map.off(this.getEvents(), this);
        this._canvas = null;
    };
    CanvasLayer.prototype.addTo = function (map) {
        map.addLayer(this);
        return this;
    };
    CanvasLayer.prototype.drawLayer = function () {
        // -- todo make the viewInfo properties  flat objects.
        var size = this._map.getSize();
        var bounds = this._map.getBounds();
        var zoom = this._map.getZoom();
        var center = this._map.options.crs.project(this._map.getCenter());
        var corner = this._map.options.crs.project(this._map.containerPointToLatLng(this._map.getSize()));
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
    CanvasLayer.prototype.animateZoom = function (e) {
        var scale = this._map.getZoomScale(e.zoom);
        // -- different calc of offset in leaflet 1.0.0 and 0.0.7 thanks for 1.0.0-rc2 calc @jduggan1
        var offset = L.Layer ? this._map._latLngToNewLayerPoint(this._map.getBounds().getNorthWest(), e.zoom, e.center) :
            this._map._getCenterOffset(e.center)._multiplyBy(-scale).subtract(this._map._getMapPanePos());
        L.DomUtil.setTransform(this._canvas, offset, scale);
    };
    CanvasLayer.prototype.onLayerDidResize = function (resizeEvent) {
        this._canvas.width = resizeEvent.newSize.x;
        this._canvas.height = resizeEvent.newSize.y;
    };
    CanvasLayer.prototype.onLayerDidMove = function () {
        var topLeft = this._map.containerPointToLayerPoint([0, 0]);
        L.DomUtil.setPosition(this._canvas, topLeft);
        this.drawLayer();
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
        if (unit === "k/h") {
            return this.meterSec2kilometerHour(velocityAbs);
        }
        else if (unit === "kt") {
            return this.meterSec2Knots(velocityAbs);
        }
        else if (unit === "mph") {
            return this.meterSec2milesHour(velocityAbs);
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
    ControlVelocity.prototype.meterSec2milesHour = function (meters) {
        return meters * 2.23694;
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
        this._paneName = null;
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
            data: null,
            paneName: "overlayPane"
        };
    }
    VelocityLayer.prototype.initialize = function (options) {
        L.Util.setOptions(this, options);
    };
    VelocityLayer.prototype.setOptions = function (options) {
        L.Util.setOptions(this, options);
        if (options.displayOptions) {
            this.initMouseHandler(true);
        }
        if (options.data) {
            this.options.data = options.data;
        }
        if (this._windy) {
            this._windy.setOptions(options);
            if (options.data) {
                this._windy.setData(options.data);
            }
            this.clearAndRestart();
        }
        this.fire("load");
    };
    VelocityLayer.prototype.onAdd = function (map) {
        // determine where to add the layer
        this._paneName = this.options.paneName || "overlayPane";
        // fall back to overlayPane for leaflet < 1
        var pane = map.getPanes().overlayPane;
        if (map.getPane) {
            // attempt to get pane first to preserve parent (createPane voids this)
            pane = map.getPane(this._paneName);
            if (!pane) {
                pane = map.createPane(this._paneName);
            }
        }
        // create canvas, add overlay control
        this._canvasLayer = L.canvasLayer().delegate(this);
        this._canvasLayer.addTo(map);
        this._map = map;
        if (this.options.onAdd)
            this.options.onAdd();
    };
    VelocityLayer.prototype.onRemove = function (map) {
        this.destroyWind();
        if (this.options.onRemove)
            this.options.onRemove();
    };
    VelocityLayer.prototype.setData = function (data) {
        this.options.data = data;
        if (this._windy) {
            this._windy.setData(data);
            this.clearAndRestart();
        }
        this.fire('load');
    };
    VelocityLayer.prototype.onDrawLayer = function () {
        var _this = this;
        if (!this._windy) {
            this.initWindy();
            return;
        }
        if (!this.options.data) {
            return;
        }
        if (this._displayTimeout)
            clearTimeout(this._displayTimeout);
        this._displayTimeout = setTimeout(function () {
            _this.startWindy();
        }, 150); // showing velocity is delayed
    };
    VelocityLayer.prototype.toggleEvents = function (bind) {
        var _this = this;
        if (bind === void 0) { bind = true; }
        if (this._mapEvents === null) {
            this._mapEvents = {
                'dragstart': function () {
                    _this._windy.stop();
                },
                'dragend': function () {
                    _this.clearAndRestart();
                },
                'zoomstart': function () {
                    _this._windy.stop();
                },
                'zoomend': function () {
                    _this.clearAndRestart();
                },
                'resize': function () {
                    _this.clearWind();
                }
            };
        }
        for (var e in this._mapEvents) {
            if (this._mapEvents.hasOwnProperty(e)) {
                this._map[bind ? 'on' : 'off'](e, this._mapEvents[e]);
            }
        }
    };
    VelocityLayer.prototype.initWindy = function () {
        var options = __assign(__assign({}, this.options), { canvas: this._canvasLayer._canvas });
        this._windy = new windy_1.default(options);
        // prepare context global var, start drawing
        this._context = this._canvasLayer._canvas.getContext('2d');
        this._canvasLayer._canvas.classList.add("velocity-overlay");
        this.onDrawLayer();
        this.toggleEvents(true);
        this.initMouseHandler();
    };
    VelocityLayer.prototype.initMouseHandler = function (unbind) {
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
    VelocityLayer.prototype.startWindy = function () {
        var bounds = this._map.getBounds();
        var size = this._map.getSize();
        // bounds, width, height, extent
        this._windy.start(new layer_1.default(new mapBound_1.default(this._map, bounds.getNorthEast().lat, bounds.getNorthEast().lng, bounds.getSouthWest().lat, bounds.getSouthWest().lng), new canvasBound_1.default(0, 0, size.x, size.y)));
    };
    VelocityLayer.prototype.clearAndRestart = function () {
        if (this._context)
            this._context.clearRect(0, 0, 3000, 3000);
        if (this._windy)
            this.startWindy();
    };
    VelocityLayer.prototype.clearWind = function () {
        if (this._windy)
            this._windy.stop();
        if (this._context)
            this._context.clearRect(0, 0, 3000, 3000);
    };
    VelocityLayer.prototype.destroyWind = function () {
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
        this.toggleEvents(false);
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
    **/
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
    **/
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
    layer.prototype.rad2deg = function (rad) {
        return rad * 180 / Math.PI;
    };
    ;
    layer.prototype.deg2rad = function (deg) {
        return deg * Math.PI / 180;
    };
    ;
    /**
     * EXPERIMENTAL from
     * https://github.com/onaci/leaflet-velocity/commit/bd45ea9c399021851ecc98b97d4b126b64adcc8f
     canvasToMap(x: number, y: number): number[] {
        const latlon = this.mapBound.map.containerPointToLatLng(L.point(x,y));
        return [latlon.lng, latlon.lat];
    };
    
    mapToCanvas(lat: number, lon: number): number[] {
        const xy = this.mapBound.map.latLngToContainerPoint(L.latLng(lat,lon));
        return [xy.x, xy.y];
    }
    **/
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
        //    var H = Math.pow(10, -5.2); // 0.00000630957344480193
        //    var H = 0.0000360;          // 0.0000360°φ ~= 4m  (from https://github.com/cambecc/earth/blob/master/public/libs/earth/1.0.0/micro.js#L13)
        //@see https://github.com/danwild/leaflet-velocity/issues/15#issuecomment-345260768
        var H = 5;
        var hλ = λ < 0 ? H : -H;
        var hφ = φ < 0 ? H : -H;
        // TODO: finish
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
    function MapBound(map, north, east, south, west) {
        this._map = map;
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
    Object.defineProperty(MapBound.prototype, "map", {
        get: function () {
            return this._map;
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
        this.opacity = +options.opacity || 0.97;
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
        this.context2D.fillStyle = "rgba(0, 0, 0, ".concat(this.opacity, ")");
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
        this.context2D.globalAlpha = this.opacity === 0 ? 0 : this.opacity * 0.9;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztRQUM1RCxJQUFNLGNBQWMsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2xHLElBQU0sVUFBVSxHQUFHLENBQUMsY0FBYyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM5SCxJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxVQUFVLENBQUM7UUFDdEQsSUFBTSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLEdBQUcsY0FBYyxDQUFDO1FBRTFDLElBQU0sQ0FBQyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDckUsSUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3BHLE9BQU8sQ0FBQyxDQUFDLEVBQUUs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QUFDLElBQUksdUJBQVcsRUFBRSxDQUFDLENBQUM7QUFDeEUsQ0FBQyxDQUFDLFdBQVcsR0FBRztJQUNmLE9BQU8sSUFBSSxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7QUFDNUIsQ0FBQyxDQUFDO0FBRUYsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksNEJBQWUsQ0FBQyxDQUFDO0FBQzdELENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxHQUFHLFVBQVUsT0FBWTtJQUMxQyxPQUFPLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDeEMsQ0FBQyxDQUFDO0FBRUYsQ0FBQyxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSx5QkFBYSxFQUFFLENBQUMsQ0FBQztBQUM1RSxDQUFDLENBQUMsYUFBYSxHQUFHLFVBQVUsT0FBWTtJQUN2QyxPQUFPLElBQUksQ0FBQyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUNyQyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZWFmbGV0LXZlbG9jaXR5LXRzLy4vc3JjL2xlYWZsZXQtdmVsb2NpdHkuY3NzIiwid2VicGFjazovL2xlYWZsZXQtdmVsb2NpdHktdHMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2xlYWZsZXQtdmVsb2NpdHktdHMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9sZWFmbGV0LXZlbG9jaXR5LXRzLy4vc3JjL2xlYWZsZXQtdmVsb2NpdHkuY3NzP2JhZjQiLCJ3ZWJwYWNrOi8vbGVhZmxldC12ZWxvY2l0eS10cy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9sZWFmbGV0LXZlbG9jaXR5LXRzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9sZWFmbGV0LXZlbG9jaXR5LXRzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2xlYWZsZXQtdmVsb2NpdHktdHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vbGVhZmxldC12ZWxvY2l0eS10cy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2xlYWZsZXQtdmVsb2NpdHktdHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9sZWFmbGV0LXZlbG9jaXR5LXRzLy4vc3JjL0wuQ2FudmFzTGF5ZXIudHMiLCJ3ZWJwYWNrOi8vbGVhZmxldC12ZWxvY2l0eS10cy8uL3NyYy9MLkNvbnRyb2wuVmVsb2NpdHkudHMiLCJ3ZWJwYWNrOi8vbGVhZmxldC12ZWxvY2l0eS10cy8uL3NyYy9MLlZlbG9jaXR5TGF5ZXIudHMiLCJ3ZWJwYWNrOi8vbGVhZmxldC12ZWxvY2l0eS10cy8uL3NyYy9hbmltYXRpb25CdWNrZXQudHMiLCJ3ZWJwYWNrOi8vbGVhZmxldC12ZWxvY2l0eS10cy8uL3NyYy9jYW52YXNCb3VuZC50cyIsIndlYnBhY2s6Ly9sZWFmbGV0LXZlbG9jaXR5LXRzLy4vc3JjL2NvbG9yU2NhbGUudHMiLCJ3ZWJwYWNrOi8vbGVhZmxldC12ZWxvY2l0eS10cy8uL3NyYy9ncmlkLnRzIiwid2VicGFjazovL2xlYWZsZXQtdmVsb2NpdHktdHMvLi9zcmMvbGF5ZXIudHMiLCJ3ZWJwYWNrOi8vbGVhZmxldC12ZWxvY2l0eS10cy8uL3NyYy9tYXBCb3VuZC50cyIsIndlYnBhY2s6Ly9sZWFmbGV0LXZlbG9jaXR5LXRzLy4vc3JjL3BhcnRpY2xlLnRzIiwid2VicGFjazovL2xlYWZsZXQtdmVsb2NpdHktdHMvLi9zcmMvdmVjdG9yLnRzIiwid2VicGFjazovL2xlYWZsZXQtdmVsb2NpdHktdHMvLi9zcmMvd2luZHkudHMiLCJ3ZWJwYWNrOi8vbGVhZmxldC12ZWxvY2l0eS10cy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9sZWFmbGV0LXZlbG9jaXR5LXRzL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2xlYWZsZXQtdmVsb2NpdHktdHMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2xlYWZsZXQtdmVsb2NpdHktdHMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9sZWFmbGV0LXZlbG9jaXR5LXRzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbGVhZmxldC12ZWxvY2l0eS10cy93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vbGVhZmxldC12ZWxvY2l0eS10cy8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5Jb1d3aU9KYTNwUVRBWlVhd1BlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XFxuICBwYWRkaW5nOiAwIDVweDtcXG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xcbiAgY29sb3I6ICMzMzM7XFxuICBmb250OiAxMXB4LzEuNSBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvbGVhZmxldC12ZWxvY2l0eS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSwwQ0FBMEM7RUFDMUMsY0FBYztFQUNkLG9CQUFvQjtFQUNwQixXQUFXO0VBQ1gsNkRBQTZEO0FBQy9EXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5sZWFmbGV0Q29udHJvbFZlbG9jaXR5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcXG4gIHBhZGRpbmc6IDAgNXB4O1xcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XFxuICBjb2xvcjogIzMzMztcXG4gIGZvbnQ6IDExcHgvMS41IFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcImxlYWZsZXRDb250cm9sVmVsb2NpdHlcIjogXCJJb1d3aU9KYTNwUVRBWlVhd1BlclwiXG59O1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9AdGVhbXN1cGVyY2VsbC90eXBpbmdzLWZvci1jc3MtbW9kdWxlcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnVzZVsxXSEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbMl0hLi9sZWFmbGV0LXZlbG9jaXR5LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9AdGVhbXN1cGVyY2VsbC90eXBpbmdzLWZvci1jc3MtbW9kdWxlcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnVzZVsxXSEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbMl0hLi9sZWFmbGV0LXZlbG9jaXR5LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBMYXllciB9IGZyb20gXCJsZWFmbGV0XCI7XG5cbmRlY2xhcmUgdmFyIEw6IGFueTtcblxuLy8gLS0gTC5Eb21VdGlsLnNldFRyYW5zZm9ybSBmcm9tIGxlYWZsZXQgMS4wLjAgdG8gd29yayBvbiAwLjAuN1xuaWYgKCFMLkRvbVV0aWwuc2V0VHJhbnNmb3JtKSB7XG5cdEwuRG9tVXRpbC5zZXRUcmFuc2Zvcm0gPSAoZWw6IGFueSwgb2Zmc2V0OiBhbnksIHNjYWxlOiBhbnkpICA9Pntcblx0ICB2YXIgcG9zID0gb2Zmc2V0IHx8IG5ldyBMLlBvaW50KDAsIDApO1xuICBcblx0ICBlbC5zdHlsZVtMLkRvbVV0aWwuVFJBTlNGT1JNXSA9XG5cdFx0KEwuQnJvd3Nlci5pZTNkXG5cdFx0ICA/IFwidHJhbnNsYXRlKFwiICsgcG9zLnggKyBcInB4LFwiICsgcG9zLnkgKyBcInB4KVwiXG5cdFx0ICA6IFwidHJhbnNsYXRlM2QoXCIgKyBwb3MueCArIFwicHgsXCIgKyBwb3MueSArIFwicHgsMClcIikgK1xuXHRcdChzY2FsZSA/IFwiIHNjYWxlKFwiICsgc2NhbGUgKyBcIilcIiA6IFwiXCIpO1xuXHR9O1xufVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FudmFzTGF5ZXIge1xuXHRwcml2YXRlIF9tYXA6IGFueTtcblx0cHJpdmF0ZSBfY2FudmFzOiBhbnk7XG5cdHByaXZhdGUgX2ZyYW1lOiBhbnk7XG5cdHByaXZhdGUgX2RlbGVnYXRlOiBhbnk7XG5cblx0aW5pdGlhbGl6ZShvcHRpb25zOiBhbnkpIHtcblx0XHR0aGlzLl9tYXAgPSBudWxsO1xuXHRcdHRoaXMuX2NhbnZhcyA9IG51bGw7XG5cdFx0dGhpcy5fZnJhbWUgPSBudWxsO1xuXHRcdHRoaXMuX2RlbGVnYXRlID0gbnVsbDtcblx0XHRMLlV0aWwuc2V0T3B0aW9ucyh0aGlzLCBvcHRpb25zKTtcblx0fVxuXG5cdGRlbGVnYXRlKGRlbDogYW55KTogQ2FudmFzTGF5ZXIge1xuXHRcdHRoaXMuX2RlbGVnYXRlID0gZGVsO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0bmVlZFJlZHJhdygpIHtcblx0XHRpZiAoIXRoaXMuX2ZyYW1lKSB7XG5cdFx0XHR0aGlzLl9mcmFtZSA9IEwuVXRpbC5yZXF1ZXN0QW5pbUZyYW1lKHRoaXMuZHJhd0xheWVyLCB0aGlzKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRnZXRFdmVudHMoKSB7XG5cdFx0Y29uc3QgZXZlbnRzID0ge1xuXHRcdFx0cmVzaXplOiB0aGlzLm9uTGF5ZXJEaWRSZXNpemUsXG5cdFx0XHRtb3ZlZW5kOiB0aGlzLm9uTGF5ZXJEaWRNb3ZlLFxuXHRcdFx0em9vbWFuaW06IDxhbnk+dW5kZWZpbmVkXG5cdFx0fTtcblx0XHRpZiAodGhpcy5fbWFwLm9wdGlvbnMuem9vbUFuaW1hdGlvbiAmJiBMLkJyb3dzZXIuYW55M2QpIHtcblx0XHRcdGV2ZW50cy56b29tYW5pbSA9IHRoaXMuYW5pbWF0ZVpvb207XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGV2ZW50cztcblx0fVxuXG5cdG9uQWRkKG1hcDogTC5NYXApIHtcblx0XHR0aGlzLl9tYXAgPSBtYXA7XG5cdFx0dGhpcy5fY2FudmFzID0gTC5Eb21VdGlsLmNyZWF0ZSgnY2FudmFzJywgJ2xlYWZsZXQtbGF5ZXInKTtcblxuXHRcdGNvbnN0IHNpemUgPSB0aGlzLl9tYXAuZ2V0U2l6ZSgpO1xuXHRcdHRoaXMuX2NhbnZhcy53aWR0aCA9IHNpemUueDtcblx0XHR0aGlzLl9jYW52YXMuaGVpZ2h0ID0gc2l6ZS55O1xuXG5cdFx0Y29uc3QgYW5pbWF0ZWQgPSB0aGlzLl9tYXAub3B0aW9ucy56b29tQW5pbWF0aW9uICYmIEwuQnJvd3Nlci5hbnkzZDtcblx0XHRMLkRvbVV0aWwuYWRkQ2xhc3ModGhpcy5fY2FudmFzLCAnbGVhZmxldC16b29tLScgKyAoYW5pbWF0ZWQgPyAnYW5pbWF0ZWQnIDogJ2hpZGUnKSk7XG5cblxuXHRcdG1hcC5nZXRQYW5lcygpLm92ZXJsYXlQYW5lLmFwcGVuZENoaWxkKHRoaXMuX2NhbnZhcyk7XG5cdFx0bWFwLm9uKHRoaXMuZ2V0RXZlbnRzKCkgYXMgYW55LCB0aGlzIGFzIGFueSk7XG5cblx0XHRjb25zdCBkZWwgPSB0aGlzLl9kZWxlZ2F0ZSB8fCB0aGlzO1xuXHRcdGRlbC5vbkxheWVyRGlkTW91bnQgJiYgZGVsLm9uTGF5ZXJEaWRNb3VudCgpOyAvLyAtLSBjYWxsYmFja1xuXHRcdHRoaXMubmVlZFJlZHJhdygpO1xuXG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHR0aGlzLm9uTGF5ZXJEaWRNb3ZlKCk7XG5cdFx0fSwgMCk7XG5cdH1cblxuXHRvblJlbW92ZShtYXA6IEwuTWFwKSB7XG5cdFx0Y29uc3QgZGVsID0gdGhpcy5fZGVsZWdhdGUgfHwgdGhpcztcblx0XHRkZWwub25MYXllcldpbGxVbm1vdW50ICYmIGRlbC5vbkxheWVyV2lsbFVubW91bnQoKTsgLy8gLS0gY2FsbGJhY2tcblxuXG5cdFx0bWFwLmdldFBhbmVzKCkub3ZlcmxheVBhbmUucmVtb3ZlQ2hpbGQodGhpcy5fY2FudmFzKTtcblxuXHRcdG1hcC5vZmYodGhpcy5nZXRFdmVudHMoKWFzIGFueSwgdGhpcyBhcyBhbnkpO1xuXG5cdFx0dGhpcy5fY2FudmFzID0gbnVsbDtcblxuXHR9XG5cblx0YWRkVG8obWFwOiBMLk1hcCkge1xuXHRcdG1hcC5hZGRMYXllcih0aGlzIGFzIHVua25vd24gYXMgTGF5ZXIpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0ZHJhd0xheWVyKCkge1xuXHRcdC8vIC0tIHRvZG8gbWFrZSB0aGUgdmlld0luZm8gcHJvcGVydGllcyAgZmxhdCBvYmplY3RzLlxuXHRcdGNvbnN0IHNpemUgPSB0aGlzLl9tYXAuZ2V0U2l6ZSgpO1xuXHRcdGNvbnN0IGJvdW5kcyA9IHRoaXMuX21hcC5nZXRCb3VuZHMoKTtcblx0XHRjb25zdCB6b29tID0gdGhpcy5fbWFwLmdldFpvb20oKTtcblxuXHRcdGNvbnN0IGNlbnRlciA9IHRoaXMuX21hcC5vcHRpb25zLmNycy5wcm9qZWN0KHRoaXMuX21hcC5nZXRDZW50ZXIoKSk7XG5cdFx0Y29uc3QgY29ybmVyID0gdGhpcy5fbWFwLm9wdGlvbnMuY3JzLnByb2plY3QodGhpcy5fbWFwLmNvbnRhaW5lclBvaW50VG9MYXRMbmcodGhpcy5fbWFwLmdldFNpemUoKSkpO1xuXG5cdFx0Y29uc3QgZGVsID0gdGhpcy5fZGVsZWdhdGUgfHwgdGhpcztcblx0XHRkZWwub25EcmF3TGF5ZXIgJiYgZGVsLm9uRHJhd0xheWVyKHtcblx0XHRcdGxheWVyOiB0aGlzLFxuXHRcdFx0Y2FudmFzOiB0aGlzLl9jYW52YXMsXG5cdFx0XHRib3VuZHM6IGJvdW5kcyxcblx0XHRcdHNpemU6IHNpemUsXG5cdFx0XHR6b29tOiB6b29tLFxuXHRcdFx0Y2VudGVyOiBjZW50ZXIsXG5cdFx0XHRjb3JuZXI6IGNvcm5lclxuXHRcdH0pO1xuXHRcdHRoaXMuX2ZyYW1lID0gbnVsbDtcblx0fVxuXG5cdC8vIC0tIEwuRG9tVXRpbC5zZXRUcmFuc2Zvcm0gZnJvbSBsZWFmbGV0IDEuMC4wIHRvIHdvcmsgb24gMC4wLjdcblx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0X3NldFRyYW5zZm9ybShlbDogYW55LCBvZmZzZXQ6IGFueSwgc2NhbGU6IGFueSkge1xuXHRcdHZhciBwb3MgPSBvZmZzZXQgfHwgbmV3IEwuUG9pbnQoMCwgMCk7XG5cblx0XHRlbC5zdHlsZVtMLkRvbVV0aWwuVFJBTlNGT1JNXSA9XG5cdFx0XHQoTC5Ccm93c2VyLmllM2QgP1xuXHRcdFx0XHQndHJhbnNsYXRlKCcgKyBwb3MueCArICdweCwnICsgcG9zLnkgKyAncHgpJyA6XG5cdFx0XHRcdCd0cmFuc2xhdGUzZCgnICsgcG9zLnggKyAncHgsJyArIHBvcy55ICsgJ3B4LDApJykgK1xuXHRcdFx0KHNjYWxlID8gJyBzY2FsZSgnICsgc2NhbGUgKyAnKScgOiAnJyk7XG5cdH1cblxuXHRwcml2YXRlIGFuaW1hdGVab29tKGU6IGFueSkge1xuXHRcdGNvbnN0IHNjYWxlID0gdGhpcy5fbWFwLmdldFpvb21TY2FsZShlLnpvb20pO1xuXHRcdC8vIC0tIGRpZmZlcmVudCBjYWxjIG9mIG9mZnNldCBpbiBsZWFmbGV0IDEuMC4wIGFuZCAwLjAuNyB0aGFua3MgZm9yIDEuMC4wLXJjMiBjYWxjIEBqZHVnZ2FuMVxuXHRcdGNvbnN0IG9mZnNldCA9IEwuTGF5ZXIgPyB0aGlzLl9tYXAuX2xhdExuZ1RvTmV3TGF5ZXJQb2ludCh0aGlzLl9tYXAuZ2V0Qm91bmRzKCkuZ2V0Tm9ydGhXZXN0KCksIGUuem9vbSwgZS5jZW50ZXIpIDpcblx0XHRcdHRoaXMuX21hcC5fZ2V0Q2VudGVyT2Zmc2V0KGUuY2VudGVyKS5fbXVsdGlwbHlCeSgtc2NhbGUpLnN1YnRyYWN0KHRoaXMuX21hcC5fZ2V0TWFwUGFuZVBvcygpKTtcblxuXHRcdEwuRG9tVXRpbC5zZXRUcmFuc2Zvcm0odGhpcy5fY2FudmFzLCBvZmZzZXQsIHNjYWxlKTtcblx0fVxuXG5cdHByaXZhdGUgb25MYXllckRpZFJlc2l6ZShyZXNpemVFdmVudDogYW55KSB7XG5cdFx0dGhpcy5fY2FudmFzLndpZHRoID0gcmVzaXplRXZlbnQubmV3U2l6ZS54O1xuXHRcdHRoaXMuX2NhbnZhcy5oZWlnaHQgPSByZXNpemVFdmVudC5uZXdTaXplLnk7XG5cdH1cblxuXHRwcml2YXRlIG9uTGF5ZXJEaWRNb3ZlKCkge1xuXHRcdHZhciB0b3BMZWZ0ID0gdGhpcy5fbWFwLmNvbnRhaW5lclBvaW50VG9MYXllclBvaW50KFswLCAwXSk7XG5cdFx0TC5Eb21VdGlsLnNldFBvc2l0aW9uKHRoaXMuX2NhbnZhcywgdG9wTGVmdCk7XG5cdFx0dGhpcy5kcmF3TGF5ZXIoKTtcblx0fVxufVxuIiwiaW1wb3J0IFdpbmR5IGZyb20gJy4vd2luZHknO1xuZGVjbGFyZSB2YXIgTDogYW55O1xuaW1wb3J0IHZlbG9jaXR5Y3NzIGZyb20gJy4vbGVhZmxldC12ZWxvY2l0eS5jc3MnO1xuXG5pbnRlcmZhY2UgRGlzcGxheU9wdGlvbnMge1xuICBwb3NpdGlvbjogc3RyaW5nLFxuICBlbXB0eVN0cmluZzogc3RyaW5nLFxuICBhbmdsZUNvbnZlbnRpb246IHN0cmluZyxcbiAgc3BlZWRVbml0OiBzdHJpbmcsXG4gIHNob3dDYXJkaW5hbDogYm9vbGVhblxuICB2ZWxvY2l0eVR5cGU/OiBzdHJpbmdcbiAgZGlyZWN0aW9uU3RyaW5nOiBzdHJpbmdcbiAgc3BlZWRTdHJpbmc6IHN0cmluZ1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250cm9sVmVsb2NpdHkge1xuICBwcml2YXRlIG9wdGlvbnM6IERpc3BsYXlPcHRpb25zO1xuICBwcml2YXRlIF93aW5keTogV2luZHkgPSBudWxsO1xuICBwcml2YXRlIF9tYXA6IGFueSA9IG51bGw7XG4gIHByaXZhdGUgX2NvbnRhaW5lcjogYW55ID0gbnVsbDtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICBwb3NpdGlvbjogJ2JvdHRvbWxlZnQnLFxuICAgICAgZW1wdHlTdHJpbmc6ICdVbmF2YWlsYWJsZScsXG4gICAgICB2ZWxvY2l0eVR5cGU6ICcnLFxuICAgICAgLy8gQ291bGQgYmUgYW55IGNvbWJpbmF0aW9uIG9mICdiZWFyaW5nJyAoYW5nbGUgdG93YXJkIHdoaWNoIHRoZSBmbG93IGdvZXMpIG9yICdtZXRlbycgKGFuZ2xlIGZyb20gd2hpY2ggdGhlIGZsb3cgY29tZXMpXG4gICAgICAvLyBhbmQgJ0NXJyAoYW5nbGUgdmFsdWUgaW5jcmVhc2VzIGNsb2NrLXdpc2UpIG9yICdDQ1cnIChhbmdsZSB2YWx1ZSBpbmNyZWFzZXMgY291bnRlciBjbG9jay13aXNlKVxuICAgICAgYW5nbGVDb252ZW50aW9uOiAnYmVhcmluZ0NDVycsXG4gICAgICAvLyBDb3VsZCBiZSAnbS9zJyBmb3IgbWV0ZXIgcGVyIHNlY29uZCwgJ2svaCcgZm9yIGtpbG9tZXRlciBwZXIgaG91ciBvciAna3QnIGZvciBrbm90c1xuICAgICAgc3BlZWRVbml0OiAnbS9zJyxcbiAgICAgIGRpcmVjdGlvblN0cmluZzogXCJEaXJlY3Rpb25cIixcbiAgICAgIHNwZWVkU3RyaW5nOiBcIlNwZWVkXCIsXG4gICAgICBzaG93Q2FyZGluYWw6IGZhbHNlLFxuICAgIH07XG4gIH1cblxuICBzZXRXaW5keShfd2luZHk6IGFueSkge1xuICAgIGlmICghdGhpcy5fd2luZHkgJiYgX3dpbmR5KSB0aGlzLl93aW5keSA9IF93aW5keTtcbiAgfVxuXG4gIHNldE9wdGlvbnMob3B0aW9uczogYW55KSB7XG4gICAgTC5VdGlsLnNldE9wdGlvbnModGhpcywgb3B0aW9ucyk7XG4gIH1cblxuICBvbkFkZChtYXA6IGFueSkge1xuICAgIHRoaXMuX21hcCA9IG1hcDtcbiAgICB0aGlzLl9jb250YWluZXIgPSBMLkRvbVV0aWwuY3JlYXRlKCdkaXYnLCB2ZWxvY2l0eWNzcy5sZWFmbGV0Q29udHJvbFZlbG9jaXR5KTtcbiAgICBMLkRvbUV2ZW50LmRpc2FibGVDbGlja1Byb3BhZ2F0aW9uKHRoaXMuX2NvbnRhaW5lcik7XG4gICAgdGhpcy5fbWFwLm9uKCdtb3VzZW1vdmUnLCB0aGlzLmRyYXdXaW5kU3BlZWQsIHRoaXMpO1xuICAgIHRoaXMuX2NvbnRhaW5lci5pbm5lckhUTUwgPSB0aGlzLm9wdGlvbnMuZW1wdHlTdHJpbmc7XG4gICAgcmV0dXJuIHRoaXMuX2NvbnRhaW5lcjtcbiAgfVxuXG4gIG9uUmVtb3ZlKG1hcDogYW55KSB7XG4gICAgdGhpcy5fbWFwLm9mZignbW91c2Vtb3ZlJywgdGhpcy5kcmF3V2luZFNwZWVkLCB0aGlzKTtcbiAgfVxuXG4gIHZlY3RvclRvU3BlZWQodU1zOiBudW1iZXIsIHZNczogbnVtYmVyLCB1bml0OiBzdHJpbmcpIHtcbiAgICB2YXIgdmVsb2NpdHlBYnMgPSBNYXRoLnNxcnQoTWF0aC5wb3codU1zLCAyKSArIE1hdGgucG93KHZNcywgMikpO1xuICAgIC8vIERlZmF1bHQgaXMgbS9zXG4gICAgaWYgKHVuaXQgPT09IFwiay9oXCIpIHtcbiAgICAgIHJldHVybiB0aGlzLm1ldGVyU2VjMmtpbG9tZXRlckhvdXIodmVsb2NpdHlBYnMpO1xuICAgIH0gZWxzZSBpZiAodW5pdCA9PT0gXCJrdFwiKSB7XG4gICAgICByZXR1cm4gdGhpcy5tZXRlclNlYzJLbm90cyh2ZWxvY2l0eUFicyk7XG4gICAgfSBlbHNlIGlmICh1bml0ID09PSBcIm1waFwiKSB7XG4gICAgICByZXR1cm4gdGhpcy5tZXRlclNlYzJtaWxlc0hvdXIodmVsb2NpdHlBYnMpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdmVsb2NpdHlBYnM7XG4gICAgfVxuICB9XG5cbiAgdmVjdG9yVG9EZWdyZWVzKHVNczogbnVtYmVyLCB2TXM6IG51bWJlciwgYW5nbGVDb252ZW50aW9uOiBzdHJpbmcpIHtcbiAgICAvLyBEZWZhdWx0IGFuZ2xlIGNvbnZlbnRpb24gaXMgQ1dcbiAgICBpZiAoYW5nbGVDb252ZW50aW9uLmVuZHNXaXRoKCdDQ1cnKSkge1xuICAgICAgLy8gdk1zIGNvbWVzIG91dCB1cHNpZGUtZG93bi4uXG4gICAgICB2TXMgPSB2TXMgPiAwID8gdk1zID0gLXZNcyA6IE1hdGguYWJzKHZNcyk7XG4gICAgfVxuICAgIHZhciB2ZWxvY2l0eUFicyA9IE1hdGguc3FydChNYXRoLnBvdyh1TXMsIDIpICsgTWF0aC5wb3codk1zLCAyKSk7XG5cbiAgICB2YXIgdmVsb2NpdHlEaXIgPSBNYXRoLmF0YW4yKHVNcyAvIHZlbG9jaXR5QWJzLCB2TXMgLyB2ZWxvY2l0eUFicyk7XG4gICAgdmFyIHZlbG9jaXR5RGlyVG9EZWdyZWVzID0gdmVsb2NpdHlEaXIgKiAxODAgLyBNYXRoLlBJICsgMTgwO1xuXG4gICAgaWYgKGFuZ2xlQ29udmVudGlvbiA9PT0gJ2JlYXJpbmdDVycgfHwgYW5nbGVDb252ZW50aW9uID09PSAnbWV0ZW9DQ1cnKSB7XG4gICAgICB2ZWxvY2l0eURpclRvRGVncmVlcyArPSAxODA7XG4gICAgICBpZiAodmVsb2NpdHlEaXJUb0RlZ3JlZXMgPj0gMzYwKSB2ZWxvY2l0eURpclRvRGVncmVlcyAtPSAzNjA7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlbG9jaXR5RGlyVG9EZWdyZWVzO1xuICB9XG5cbiAgbWV0ZXJTZWMyS25vdHMobWV0ZXJzOiBudW1iZXIpIHtcbiAgICByZXR1cm4gbWV0ZXJzIC8gMC41MTRcbiAgfVxuXG4gIG1ldGVyU2VjMmtpbG9tZXRlckhvdXIobWV0ZXJzOiBudW1iZXIpIHtcbiAgICByZXR1cm4gbWV0ZXJzICogMy42XG4gIH1cblxuICBtZXRlclNlYzJtaWxlc0hvdXIobWV0ZXJzOiBudW1iZXIpIHtcbiAgICByZXR1cm4gbWV0ZXJzICogMi4yMzY5NDtcbiAgfVxuXG5cbiAgZGVncmVlc1RvQ2FyZGluYWxEaXJlY3Rpb24oZGVnOiBudW1iZXIpIHtcbiAgICBsZXQgY2FyZGluYWxEaXJlY3Rpb24gPSAnJ1xuICAgIGlmIChkZWcgPj0gMCAmJiBkZWcgPCAxMS4yNSB8fCBkZWcgPj0gMzQ4Ljc1KSB7XG4gICAgICBjYXJkaW5hbERpcmVjdGlvbiA9ICdOJ1xuICAgIH1cbiAgICBlbHNlIGlmIChkZWcgPj0gMTEuMjUgJiYgZGVnIDwgMzMuNzUpIHtcbiAgICAgIGNhcmRpbmFsRGlyZWN0aW9uID0gJ05OVydcbiAgICB9XG4gICAgZWxzZSBpZiAoZGVnID49IDMzLjc1ICYmIGRlZyA8IDU2LjI1KSB7XG4gICAgICBjYXJkaW5hbERpcmVjdGlvbiA9ICdOVydcbiAgICB9XG4gICAgZWxzZSBpZiAoZGVnID49IDU2LjI1ICYmIGRlZyA8IDc4Ljc1KSB7XG4gICAgICBjYXJkaW5hbERpcmVjdGlvbiA9ICdXTlcnXG4gICAgfVxuICAgIGVsc2UgaWYgKGRlZyA+PSA3OC4yNSAmJiBkZWcgPCAxMDEuMjUpIHtcbiAgICAgIGNhcmRpbmFsRGlyZWN0aW9uID0gJ1cnXG4gICAgfVxuICAgIGVsc2UgaWYgKGRlZyA+PSAxMDEuMjUgJiYgZGVnIDwgMTIzLjc1KSB7XG4gICAgICBjYXJkaW5hbERpcmVjdGlvbiA9ICdXU1cnXG4gICAgfVxuICAgIGVsc2UgaWYgKGRlZyA+PSAxMjMuNzUgJiYgZGVnIDwgMTQ2LjI1KSB7XG4gICAgICBjYXJkaW5hbERpcmVjdGlvbiA9ICdTVydcbiAgICB9XG4gICAgZWxzZSBpZiAoZGVnID49IDE0Ni4yNSAmJiBkZWcgPCAxNjguNzUpIHtcbiAgICAgIGNhcmRpbmFsRGlyZWN0aW9uID0gJ1NTVydcbiAgICB9XG4gICAgZWxzZSBpZiAoZGVnID49IDE2OC43NSAmJiBkZWcgPCAxOTEuMjUpIHtcbiAgICAgIGNhcmRpbmFsRGlyZWN0aW9uID0gJ1MnXG4gICAgfVxuICAgIGVsc2UgaWYgKGRlZyA+PSAxOTEuMjUgJiYgZGVnIDwgMjEzLjc1KSB7XG4gICAgICBjYXJkaW5hbERpcmVjdGlvbiA9ICdTU0UnXG4gICAgfVxuICAgIGVsc2UgaWYgKGRlZyA+PSAyMTMuNzUgJiYgZGVnIDwgMjM2LjI1KSB7XG4gICAgICBjYXJkaW5hbERpcmVjdGlvbiA9ICdTRSdcbiAgICB9XG4gICAgZWxzZSBpZiAoZGVnID49IDIzNi4yNSAmJiBkZWcgPCAyNTguNzUpIHtcbiAgICAgIGNhcmRpbmFsRGlyZWN0aW9uID0gJ0VTRSdcbiAgICB9XG4gICAgZWxzZSBpZiAoZGVnID49IDI1OC43NSAmJiBkZWcgPCAyODEuMjUpIHtcbiAgICAgIGNhcmRpbmFsRGlyZWN0aW9uID0gJ0UnXG4gICAgfVxuICAgIGVsc2UgaWYgKGRlZyA+PSAyODEuMjUgJiYgZGVnIDwgMzAzLjc1KSB7XG4gICAgICBjYXJkaW5hbERpcmVjdGlvbiA9ICdFTkUnXG4gICAgfVxuICAgIGVsc2UgaWYgKGRlZyA+PSAzMDMuNzUgJiYgZGVnIDwgMzI2LjI1KSB7XG4gICAgICBjYXJkaW5hbERpcmVjdGlvbiA9ICdORSdcbiAgICB9XG4gICAgZWxzZSBpZiAoZGVnID49IDMyNi4yNSAmJiBkZWcgPCAzNDguNzUpIHtcbiAgICAgIGNhcmRpbmFsRGlyZWN0aW9uID0gJ05ORSdcbiAgICB9XG5cbiAgICByZXR1cm4gY2FyZGluYWxEaXJlY3Rpb247XG4gIH1cblxuICBkcmF3V2luZFNwZWVkKGV2OiBhbnkpIHtcbiAgICBjb25zdCBwb3MgPSB0aGlzLl9tYXAuY29udGFpbmVyUG9pbnRUb0xhdExuZyhMLnBvaW50KGV2LmNvbnRhaW5lclBvaW50LngsIGV2LmNvbnRhaW5lclBvaW50LnkpKTtcbiAgICBjb25zdCBncmlkVmFsdWUgPSB0aGlzLl93aW5keS5pbnRlcnBvbGF0ZShwb3MubG5nLCBwb3MubGF0KTtcbiAgICB2YXIgdGVtcGxhdGUgPSBcIlwiO1xuICAgIGlmIChncmlkVmFsdWUgJiYgIWlzTmFOKGdyaWRWYWx1ZVswXSkgJiYgIWlzTmFOKGdyaWRWYWx1ZVsxXSkgJiYgZ3JpZFZhbHVlWzJdKSB7XG4gICAgICBjb25zdCBkZWcgPSB0aGlzLnZlY3RvclRvRGVncmVlcyhncmlkVmFsdWVbMF0sIGdyaWRWYWx1ZVsxXSwgdGhpcy5vcHRpb25zLmFuZ2xlQ29udmVudGlvbik7XG4gICAgICBjb25zdCBjYXJkaW5hbCA9IHRoaXMub3B0aW9ucy5zaG93Q2FyZGluYWwgPyBgICgke3RoaXMuZGVncmVlc1RvQ2FyZGluYWxEaXJlY3Rpb24oZGVnKX0pIGAgOiAnJztcbiAgICAgIHRlbXBsYXRlID0gYDxzdHJvbmc+ICR7dGhpcy5vcHRpb25zLnZlbG9jaXR5VHlwZX0gJHt0aGlzLm9wdGlvbnMuZGlyZWN0aW9uU3RyaW5nXG4gICAgICAgIH06IDwvc3Ryb25nPiAke2RlZy50b0ZpeGVkKDIpfcKwJHtjYXJkaW5hbH0sIDxzdHJvbmc+ICR7dGhpcy5vcHRpb25zLnZlbG9jaXR5VHlwZX0gJHt0aGlzLm9wdGlvbnMuc3BlZWRTdHJpbmdcbiAgICAgICAgfTogPC9zdHJvbmc+ICR7dGhpcy52ZWN0b3JUb1NwZWVkKGdyaWRWYWx1ZVswXSwgZ3JpZFZhbHVlWzFdLCB0aGlzLm9wdGlvbnMuc3BlZWRVbml0KS50b0ZpeGVkKDIpfSAke3RoaXMub3B0aW9ucy5zcGVlZFVuaXR9YDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBpZiAodGhpcy5vcHRpb25zLmVtcHR5U3RyaW5nKVxuICAgICAgICB0ZW1wbGF0ZSA9IHRoaXMub3B0aW9ucy5lbXB0eVN0cmluZztcbiAgICB9XG4gICAgdGhpcy5fY29udGFpbmVyLmlubmVySFRNTCA9IHRlbXBsYXRlO1xuICB9XG59XG4iLCJpbXBvcnQgV2luZHksIHsgV2luZHlPcHRpb25zIH0gZnJvbSAnLi93aW5keSc7XHJcbmltcG9ydCBDYW52YXNCb3VuZCBmcm9tICcuL2NhbnZhc0JvdW5kJ1xyXG5pbXBvcnQgTWFwQm91bmQgZnJvbSAnLi9tYXBCb3VuZCc7XHJcbmltcG9ydCBMYXllciBmcm9tIFwiLi9sYXllclwiO1xyXG5cclxuZGVjbGFyZSB2YXIgTDogYW55O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmVsb2NpdHlMYXllciB7XHJcbiAgcHJpdmF0ZSBvcHRpb25zOiBhbnk7XHJcbiAgcHJpdmF0ZSBfbWFwOiBMLk1hcCA9IG51bGw7XHJcbiAgcHJpdmF0ZSBfY2FudmFzTGF5ZXI6IGFueSA9IG51bGw7XHJcbiAgcHJpdmF0ZSBfd2luZHk6IFdpbmR5ID0gbnVsbDtcclxuICBwcml2YXRlIF9jb250ZXh0OiBhbnkgPSBudWxsO1xyXG4gIHByaXZhdGUgX2Rpc3BsYXlUaW1lb3V0OiBSZXR1cm5UeXBlPHR5cGVvZiBzZXRUaW1lb3V0PiA9IG51bGw7XHJcbiAgcHJpdmF0ZSBfbWFwRXZlbnRzOiBhbnkgPSBudWxsXHJcbiAgcHJpdmF0ZSBfbW91c2VDb250cm9sOiBhbnkgPSBudWxsO1xyXG4gIHByaXZhdGUgX3BhbmVOYW1lOiBzdHJpbmcgPSBudWxsO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMub3B0aW9ucyA9IHtcclxuICAgICAgZGlzcGxheVZhbHVlczogdHJ1ZSxcclxuICAgICAgZGlzcGxheU9wdGlvbnM6IHtcclxuICAgICAgICB2ZWxvY2l0eVR5cGU6ICdWZWxvY2l0eScsXHJcbiAgICAgICAgcG9zaXRpb246ICdib3R0b21sZWZ0JyxcclxuICAgICAgICBlbXB0eVN0cmluZzogJ05vIHZlbG9jaXR5IGRhdGEnLFxyXG4gICAgICAgIGFuZ2xlQ29udmVudGlvbjogJ2JlYXJpbmdDQ1cnLFxyXG4gICAgICAgIHNwZWVkVW5pdDogJ20vcydcclxuICAgICAgfSxcclxuICAgICAgbWF4VmVsb2NpdHk6IDEwLCAvLyB1c2VkIHRvIGFsaWduIGNvbG9yIHNjYWxlXHJcbiAgICAgIGNvbG9yU2NhbGU6IG51bGwsXHJcbiAgICAgIG9uQWRkOiBudWxsLFxyXG4gICAgICBvblJlbW92ZTogbnVsbCxcclxuICAgICAgZGF0YTogbnVsbCxcclxuICAgICAgcGFuZU5hbWU6IFwib3ZlcmxheVBhbmVcIlxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGluaXRpYWxpemUob3B0aW9uczogYW55KSB7XHJcbiAgICBMLlV0aWwuc2V0T3B0aW9ucyh0aGlzLCBvcHRpb25zKTtcclxuICB9XHJcblxyXG4gIHNldE9wdGlvbnMob3B0aW9uczogYW55KSB7XHJcbiAgICBMLlV0aWwuc2V0T3B0aW9ucyh0aGlzLCBvcHRpb25zKTtcclxuICAgIGlmIChvcHRpb25zLmRpc3BsYXlPcHRpb25zKSB7XHJcbiAgICAgIHRoaXMuaW5pdE1vdXNlSGFuZGxlcih0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAob3B0aW9ucy5kYXRhKSB7XHJcbiAgICAgIHRoaXMub3B0aW9ucy5kYXRhID0gb3B0aW9ucy5kYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLl93aW5keSkge1xyXG4gICAgICB0aGlzLl93aW5keS5zZXRPcHRpb25zKG9wdGlvbnMpO1xyXG4gICAgICBpZiAob3B0aW9ucy5kYXRhKSB7XHJcbiAgICAgICAgdGhpcy5fd2luZHkuc2V0RGF0YShvcHRpb25zLmRhdGEpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuY2xlYXJBbmRSZXN0YXJ0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgKDxhbnk+dGhpcykuZmlyZShcImxvYWRcIik7XHJcbiAgfVxyXG5cclxuICBvbkFkZChtYXA6IEwuTWFwKSB7XHJcbiAgICAvLyBkZXRlcm1pbmUgd2hlcmUgdG8gYWRkIHRoZSBsYXllclxyXG4gICAgdGhpcy5fcGFuZU5hbWUgPSB0aGlzLm9wdGlvbnMucGFuZU5hbWUgfHwgXCJvdmVybGF5UGFuZVwiO1xyXG5cclxuICAgIC8vIGZhbGwgYmFjayB0byBvdmVybGF5UGFuZSBmb3IgbGVhZmxldCA8IDFcclxuICAgIGxldCBwYW5lID0gbWFwLmdldFBhbmVzKCkub3ZlcmxheVBhbmU7XHJcbiAgICBpZiAobWFwLmdldFBhbmUpIHtcclxuICAgICAgLy8gYXR0ZW1wdCB0byBnZXQgcGFuZSBmaXJzdCB0byBwcmVzZXJ2ZSBwYXJlbnQgKGNyZWF0ZVBhbmUgdm9pZHMgdGhpcylcclxuICAgICAgcGFuZSA9IG1hcC5nZXRQYW5lKHRoaXMuX3BhbmVOYW1lKTtcclxuICAgICAgaWYgKCFwYW5lKSB7XHJcbiAgICAgICAgcGFuZSA9IG1hcC5jcmVhdGVQYW5lKHRoaXMuX3BhbmVOYW1lKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gY3JlYXRlIGNhbnZhcywgYWRkIG92ZXJsYXkgY29udHJvbFxyXG4gICAgdGhpcy5fY2FudmFzTGF5ZXIgPSBMLmNhbnZhc0xheWVyKCkuZGVsZWdhdGUodGhpcyk7XHJcbiAgICB0aGlzLl9jYW52YXNMYXllci5hZGRUbyhtYXApO1xyXG5cclxuICAgIHRoaXMuX21hcCA9IG1hcDtcclxuXHJcbiAgICBpZiAodGhpcy5vcHRpb25zLm9uQWRkKVxyXG4gICAgICB0aGlzLm9wdGlvbnMub25BZGQoKTtcclxuICB9XHJcblxyXG4gIG9uUmVtb3ZlKG1hcDogYW55KSB7XHJcbiAgICB0aGlzLmRlc3Ryb3lXaW5kKCk7XHJcblxyXG4gICAgaWYgKHRoaXMub3B0aW9ucy5vblJlbW92ZSlcclxuICAgICAgdGhpcy5vcHRpb25zLm9uUmVtb3ZlKCk7XHJcbiAgfVxyXG5cclxuICBzZXREYXRhKGRhdGE6IGFueSkge1xyXG4gICAgdGhpcy5vcHRpb25zLmRhdGEgPSBkYXRhO1xyXG5cclxuICAgIGlmICh0aGlzLl93aW5keSkge1xyXG4gICAgICB0aGlzLl93aW5keS5zZXREYXRhKGRhdGEpO1xyXG4gICAgICB0aGlzLmNsZWFyQW5kUmVzdGFydCgpO1xyXG4gICAgfVxyXG5cclxuICAgICg8YW55PnRoaXMpLmZpcmUoJ2xvYWQnKTtcclxuICB9XHJcblxyXG4gIG9uRHJhd0xheWVyKCkge1xyXG4gICAgaWYgKCF0aGlzLl93aW5keSkge1xyXG4gICAgICB0aGlzLmluaXRXaW5keSgpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF0aGlzLm9wdGlvbnMuZGF0YSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuX2Rpc3BsYXlUaW1lb3V0KSBjbGVhclRpbWVvdXQodGhpcy5fZGlzcGxheVRpbWVvdXQpO1xyXG5cclxuICAgIHRoaXMuX2Rpc3BsYXlUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMuc3RhcnRXaW5keSgpO1xyXG4gICAgfSwgMTUwKTsgLy8gc2hvd2luZyB2ZWxvY2l0eSBpcyBkZWxheWVkXHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHRvZ2dsZUV2ZW50cyhiaW5kOiBib29sZWFuID0gdHJ1ZSkge1xyXG4gICAgaWYgKHRoaXMuX21hcEV2ZW50cyA9PT0gbnVsbCkge1xyXG4gICAgICB0aGlzLl9tYXBFdmVudHMgPSB7XHJcbiAgICAgICAgJ2RyYWdzdGFydCc6ICgpID0+IHtcclxuICAgICAgICAgIHRoaXMuX3dpbmR5LnN0b3AoKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgICdkcmFnZW5kJzogKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5jbGVhckFuZFJlc3RhcnQoKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgICd6b29tc3RhcnQnOiAoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLl93aW5keS5zdG9wKCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAnem9vbWVuZCc6ICgpID0+IHtcclxuICAgICAgICAgIHRoaXMuY2xlYXJBbmRSZXN0YXJ0KCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAncmVzaXplJzogKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5jbGVhcldpbmQoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgZm9yIChsZXQgZSBpbiB0aGlzLl9tYXBFdmVudHMpIHtcclxuICAgICAgaWYgKHRoaXMuX21hcEV2ZW50cy5oYXNPd25Qcm9wZXJ0eShlKSkge1xyXG4gICAgICAgIHRoaXMuX21hcFtiaW5kID8gJ29uJyA6ICdvZmYnXShlLCB0aGlzLl9tYXBFdmVudHNbZV0pXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgaW5pdFdpbmR5KCkge1xyXG4gICAgY29uc3Qgb3B0aW9uczogV2luZHlPcHRpb25zID0ge1xyXG4gICAgICAuLi50aGlzLm9wdGlvbnMsXHJcbiAgICAgIGNhbnZhczogdGhpcy5fY2FudmFzTGF5ZXIuX2NhbnZhc1xyXG4gICAgfVxyXG4gICAgdGhpcy5fd2luZHkgPSBuZXcgV2luZHkob3B0aW9ucyk7XHJcblxyXG4gICAgLy8gcHJlcGFyZSBjb250ZXh0IGdsb2JhbCB2YXIsIHN0YXJ0IGRyYXdpbmdcclxuICAgIHRoaXMuX2NvbnRleHQgPSB0aGlzLl9jYW52YXNMYXllci5fY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICB0aGlzLl9jYW52YXNMYXllci5fY2FudmFzLmNsYXNzTGlzdC5hZGQoXCJ2ZWxvY2l0eS1vdmVybGF5XCIpO1xyXG4gICAgdGhpcy5vbkRyYXdMYXllcigpO1xyXG5cclxuICAgIHRoaXMudG9nZ2xlRXZlbnRzKHRydWUpO1xyXG5cclxuICAgIHRoaXMuaW5pdE1vdXNlSGFuZGxlcigpO1xyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgaW5pdE1vdXNlSGFuZGxlcih1bmJpbmQ6IGJvb2xlYW4gPSBmYWxzZSkge1xyXG4gICAgaWYgKHVuYmluZCkge1xyXG4gICAgICB0aGlzLl9tYXAucmVtb3ZlQ29udHJvbCh0aGlzLl9tb3VzZUNvbnRyb2wpO1xyXG4gICAgICB0aGlzLl9tb3VzZUNvbnRyb2wgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXRoaXMuX21vdXNlQ29udHJvbCAmJiB0aGlzLm9wdGlvbnMuZGlzcGxheVZhbHVlcykge1xyXG4gICAgICBjb25zdCBvcHRpb25zID0gdGhpcy5vcHRpb25zLmRpc3BsYXlPcHRpb25zIHx8IHt9O1xyXG4gICAgICB0aGlzLl9tb3VzZUNvbnRyb2wgPSBMLmNvbnRyb2wudmVsb2NpdHkob3B0aW9ucyk7XHJcbiAgICAgIHRoaXMuX21vdXNlQ29udHJvbC5zZXRXaW5keSh0aGlzLl93aW5keSk7XHJcbiAgICAgIHRoaXMuX21vdXNlQ29udHJvbC5zZXRPcHRpb25zKHRoaXMub3B0aW9ucy5kaXNwbGF5T3B0aW9ucyk7XHJcbiAgICAgIHRoaXMuX21vdXNlQ29udHJvbC5hZGRUbyh0aGlzLl9tYXApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzdGFydFdpbmR5KCkge1xyXG4gICAgdmFyIGJvdW5kcyA9IHRoaXMuX21hcC5nZXRCb3VuZHMoKTtcclxuICAgIHZhciBzaXplID0gdGhpcy5fbWFwLmdldFNpemUoKTtcclxuXHJcbiAgICAvLyBib3VuZHMsIHdpZHRoLCBoZWlnaHQsIGV4dGVudFxyXG4gICAgdGhpcy5fd2luZHkuc3RhcnQoXHJcbiAgICAgIG5ldyBMYXllcihcclxuICAgICAgICBuZXcgTWFwQm91bmQoXHJcbiAgICAgICAgICB0aGlzLl9tYXAsXHJcbiAgICAgICAgICBib3VuZHMuZ2V0Tm9ydGhFYXN0KCkubGF0LFxyXG4gICAgICAgICAgYm91bmRzLmdldE5vcnRoRWFzdCgpLmxuZyxcclxuICAgICAgICAgIGJvdW5kcy5nZXRTb3V0aFdlc3QoKS5sYXQsXHJcbiAgICAgICAgICBib3VuZHMuZ2V0U291dGhXZXN0KCkubG5nXHJcbiAgICAgICAgKSxcclxuICAgICAgICBuZXcgQ2FudmFzQm91bmQoMCwgMCwgc2l6ZS54LCBzaXplLnkpXHJcbiAgICAgIClcclxuXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjbGVhckFuZFJlc3RhcnQoKSB7XHJcbiAgICBpZiAodGhpcy5fY29udGV4dCkgdGhpcy5fY29udGV4dC5jbGVhclJlY3QoMCwgMCwgMzAwMCwgMzAwMCk7XHJcbiAgICBpZiAodGhpcy5fd2luZHkpIHRoaXMuc3RhcnRXaW5keSgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjbGVhcldpbmQoKSB7XHJcbiAgICBpZiAodGhpcy5fd2luZHkpIHRoaXMuX3dpbmR5LnN0b3AoKTtcclxuICAgIGlmICh0aGlzLl9jb250ZXh0KSB0aGlzLl9jb250ZXh0LmNsZWFyUmVjdCgwLCAwLCAzMDAwLCAzMDAwKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZGVzdHJveVdpbmQoKSB7XHJcbiAgICBpZiAodGhpcy5fZGlzcGxheVRpbWVvdXQpXHJcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9kaXNwbGF5VGltZW91dCk7XHJcbiAgICBpZiAodGhpcy5fd2luZHkpXHJcbiAgICAgIHRoaXMuX3dpbmR5LnN0b3AoKTtcclxuICAgIGlmICh0aGlzLl9jb250ZXh0KVxyXG4gICAgICB0aGlzLl9jb250ZXh0LmNsZWFyUmVjdCgwLCAwLCAzMDAwLCAzMDAwKTtcclxuICAgIGlmICh0aGlzLl9tb3VzZUNvbnRyb2wpXHJcbiAgICAgIHRoaXMuX21hcC5yZW1vdmVDb250cm9sKHRoaXMuX21vdXNlQ29udHJvbCk7XHJcbiAgICB0aGlzLl9tb3VzZUNvbnRyb2wgPSBudWxsO1xyXG4gICAgdGhpcy5fd2luZHkgPSBudWxsO1xyXG4gICAgdGhpcy50b2dnbGVFdmVudHMoZmFsc2UpO1xyXG4gICAgdGhpcy5fbWFwLnJlbW92ZUxheWVyKHRoaXMuX2NhbnZhc0xheWVyKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IENvbG9yU2NhbGUgZnJvbSBcIi4vY29sb3JTY2FsZVwiO1xuaW1wb3J0IFBhcnRpY3VsZSBmcm9tIFwiLi9wYXJ0aWNsZVwiO1xuaW1wb3J0IFZlY3RvciBmcm9tIFwiLi92ZWN0b3JcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQW5pbWF0aW9uQnVja2V0IHtcbiAgICBwcml2YXRlIGNvbG9yU2NhbGU6IENvbG9yU2NhbGU7XG4gICAgcHJpdmF0ZSBidWNrZXRzOiBQYXJ0aWN1bGVbXVtdID0gW107XG5cbiAgICBjb25zdHJ1Y3Rvcihjb2xvclNjYWxlOiBDb2xvclNjYWxlKSB7XG4gICAgICAgIHRoaXMuY29sb3JTY2FsZSA9IGNvbG9yU2NhbGU7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29sb3JTY2FsZS5zaXplOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuYnVja2V0cy5wdXNoKFtdKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNsZWFyKCkge1xuICAgICAgICB0aGlzLmJ1Y2tldHMuZm9yRWFjaCgocGFydGljdWxlU2V0OiBQYXJ0aWN1bGVbXSkgPT4ge1xuICAgICAgICAgICAgcGFydGljdWxlU2V0LnNwbGljZSgwLCBwYXJ0aWN1bGVTZXQubGVuZ3RoKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGFkZChwOiBQYXJ0aWN1bGUsIHY6IFZlY3Rvcikge1xuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuY29sb3JTY2FsZS5nZXRDb2xvckluZGV4KHAuaW50ZW5zaXR5KVxuICAgICAgICBpZiAoaW5kZXggPCAwIHx8IGluZGV4ID49IHRoaXMuYnVja2V0cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGluZGV4KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBwLnh0ID0gcC54ICsgdi51O1xuICAgICAgICBwLnl0ID0gcC55ICsgdi52O1xuICAgICAgICB0aGlzLmJ1Y2tldHNbaW5kZXhdLnB1c2gocCk7XG4gICAgfVxuXG4gICAgZHJhdyhjb250ZXh0MkQ6IGFueSkge1xuICAgICAgICB0aGlzLmJ1Y2tldHMuZm9yRWFjaCgoYnVja2V0OiBQYXJ0aWN1bGVbXSwgaTogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICBpZiAoYnVja2V0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBjb250ZXh0MkQuYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgICAgY29udGV4dDJELnN0cm9rZVN0eWxlID0gdGhpcy5jb2xvclNjYWxlLmNvbG9yQXQoaSk7XG4gICAgICAgICAgICAgICAgYnVja2V0LmZvckVhY2goZnVuY3Rpb24gKHBhcnRpY2xlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQyRC5tb3ZlVG8ocGFydGljbGUueCwgcGFydGljbGUueSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQyRC5saW5lVG8ocGFydGljbGUueHQsIHBhcnRpY2xlLnl0KTtcbiAgICAgICAgICAgICAgICAgICAgcGFydGljbGUueCA9IHBhcnRpY2xlLnh0O1xuICAgICAgICAgICAgICAgICAgICBwYXJ0aWNsZS55ID0gcGFydGljbGUueXQ7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgY29udGV4dDJELnN0cm9rZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59IiwiaW1wb3J0IFBhcnRpY3VsZSBmcm9tIFwiLi9wYXJ0aWNsZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYW52YXNCb3VuZCB7XG4gICAgcHVibGljIHhNaW46IG51bWJlcjtcbiAgICBwdWJsaWMgeU1pbjogbnVtYmVyO1xuICAgIHB1YmxpYyB4TWF4OiBudW1iZXI7XG4gICAgcHVibGljIHlNYXg6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKHhNaW46IG51bWJlciwgeU1pbjogbnVtYmVyLCB4TWF4OiBudW1iZXIsIHlNYXg6IG51bWJlcikge1xuICAgICAgICB0aGlzLnhNaW4gPSB4TWluO1xuICAgICAgICB0aGlzLnlNaW4gPSB5TWluO1xuICAgICAgICB0aGlzLnhNYXggPSB4TWF4O1xuICAgICAgICB0aGlzLnlNYXggPSB5TWF4O1xuICAgIH1cblxuICAgIGdldCB3aWR0aCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy54TWF4IC0gdGhpcy54TWluO1xuICAgIH1cblxuICAgIGdldCBoZWlnaHQoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMueU1heCAtIHRoaXMueU1pbjtcbiAgICB9XG5cbiAgICBnZXRSYW5kb21QYXJ0aWN1bGUobWF4QWdlOiBudW1iZXIpOiBQYXJ0aWN1bGUge1xuICAgICAgICBjb25zdCB4ID0gTWF0aC5yb3VuZChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLndpZHRoKSArIHRoaXMueE1pbik7XG4gICAgICAgIGNvbnN0IHkgPSBNYXRoLnJvdW5kKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMuaGVpZ2h0KSArIHRoaXMueU1pbik7XG4gICAgICAgIHJldHVybiBuZXcgUGFydGljdWxlKHgsIHksIG1heEFnZSk7XG4gICAgfVxuXG4gICAgcmVzZXRQYXJ0aWN1bGUocDogUGFydGljdWxlKTogUGFydGljdWxlIHtcbiAgICAgICAgY29uc3QgeCA9IE1hdGgucm91bmQoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy53aWR0aCkgKyB0aGlzLnhNaW4pO1xuICAgICAgICBjb25zdCB5ID0gTWF0aC5yb3VuZChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLmhlaWdodCkgKyB0aGlzLnlNaW4pO1xuICAgICAgICBwLnJlc2V0KHgsIHkpO1xuICAgICAgICByZXR1cm4gcDtcbiAgICB9XG59XG5cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbG9yU2NhbGUge1xuICAgIHByaXZhdGUgc2NhbGU6IHN0cmluZ1tdID0gW1xuICAgICAgICBcInJnYigzNiwxMDQsIDE4MClcIixcbiAgICAgICAgXCJyZ2IoNjAsMTU3LCAxOTQpXCIsXG4gICAgICAgIFwicmdiKDEyOCwyMDUsMTkzIClcIixcbiAgICAgICAgXCJyZ2IoMTUxLDIxOCwxNjggKVwiLFxuICAgICAgICBcInJnYigxOTgsMjMxLDE4MSlcIixcbiAgICAgICAgXCJyZ2IoMjM4LDI0NywyMTcpXCIsXG4gICAgICAgIFwicmdiKDI1NSwyMzgsMTU5KVwiLFxuICAgICAgICBcInJnYigyNTIsMjE3LDEyNSlcIixcbiAgICAgICAgXCJyZ2IoMjU1LDE4MiwxMDApXCIsXG4gICAgICAgIFwicmdiKDI1MiwxNTAsNzUpXCIsXG4gICAgICAgIFwicmdiKDI1MCwxMTIsNTIpXCIsXG4gICAgICAgIFwicmdiKDI0NSw2NCwzMilcIixcbiAgICAgICAgXCJyZ2IoMjM3LDQ1LDI4KVwiLFxuICAgICAgICBcInJnYigyMjAsMjQsMzIpXCIsXG4gICAgICAgIFwicmdiKDE4MCwwLDM1KVwiXG4gICAgXVxuICAgIHByaXZhdGUgbWluVmFsdWU6IG51bWJlcjtcbiAgICBwcml2YXRlIG1heFZhbHVlOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihtaW5WYWx1ZTogbnVtYmVyLCBtYXhWYWx1ZTogbnVtYmVyLCBzY2FsZT86IHN0cmluZ1tdKSB7XG4gICAgICAgIHRoaXMuc2V0TWluTWF4KG1pblZhbHVlLCBtYXhWYWx1ZSk7XG4gICAgICAgIGlmICgoc2NhbGUgaW5zdGFuY2VvZiBBcnJheSkgJiYgc2NhbGUubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLnNjYWxlID0gc2NhbGU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRNaW5NYXgobWluVmFsdWU6IG51bWJlciwgbWF4VmFsdWU6IG51bWJlcikge1xuICAgICAgICB0aGlzLm1pblZhbHVlID0gbWluVmFsdWU7XG4gICAgICAgIHRoaXMubWF4VmFsdWUgPSBtYXhWYWx1ZTtcbiAgICB9XG5cbiAgICBnZXQgc2l6ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NhbGUubGVuZ3RoO1xuICAgIH1cblxuICAgIGdldENvbG9ySW5kZXgodmFsdWU6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIGlmICh2YWx1ZSA8PSB0aGlzLm1pblZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodmFsdWUgPj0gdGhpcy5tYXhWYWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2NhbGUubGVuZ3RoIC0gMTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuc2NhbGUubGVuZ3RoICogKHZhbHVlIC0gdGhpcy5taW5WYWx1ZSkgLyAodGhpcy5tYXhWYWx1ZSAtIHRoaXMubWluVmFsdWUpO1xuICAgICAgICBpZiAoaW5kZXggPCAwKSB7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaW5kZXggPiB0aGlzLnNjYWxlLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNjYWxlLmxlbmd0aCAtIDE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoaW5kZXgpO1xuICAgIH1cblxuICAgIGNvbG9yQXQoaW5kZXg6IG51bWJlcik6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLnNjYWxlW2luZGV4XTtcbiAgICB9XG5cbiAgICBnZXRDb2xvcih2YWx1ZTogbnVtYmVyKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NhbGVbdGhpcy5nZXRDb2xvckluZGV4KHZhbHVlKV07XG4gICAgfVxufVxuIiwiaW1wb3J0IFZlY3RvciBmcm9tIFwiLi92ZWN0b3JcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3JpZCB7XG4gICAgcHJpdmF0ZSBkYXRhOiBWZWN0b3JbXTtcbiAgICBwcml2YXRlIM+GMDogbnVtYmVyO1xuICAgIHByaXZhdGUgzrswOiBudW1iZXI7XG4gICAgcHJpdmF0ZSDOlM67OiBudW1iZXI7XG4gICAgcHJpdmF0ZSDOlM+GOiBudW1iZXI7XG4gICAgcHJpdmF0ZSBoZWlnaHQ6IG51bWJlcjtcbiAgICBwcml2YXRlIHdpZHRoOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhOiBWZWN0b3JbXSwgz4YwOiBudW1iZXIsIM67MDogbnVtYmVyLCDOlM+GOiBudW1iZXIsIM6Uzrs6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIsIHdpZHRoOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICAgICAgdGhpcy7PhjAgPSDPhjA7XG4gICAgICAgIHRoaXMuzrswID0gzrswO1xuICAgICAgICB0aGlzLs6UzrsgPSDOlM67O1xuICAgICAgICB0aGlzLs6Uz4YgPSDOlM+GO1xuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgIH1cblxuICAgIGdldCB2YWx1ZVJhbmdlKCk6IG51bWJlcltdIHtcbiAgICAgICAgaWYgKCF0aGlzLmRhdGEubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gWzAsIDBdO1xuICAgICAgICB9XG4gICAgICAgIGxldCBtaW4gPSB0aGlzLmRhdGFbMF0uaW50ZW5zaXR5O1xuICAgICAgICBsZXQgbWF4ID0gdGhpcy5kYXRhWzBdLmludGVuc2l0eTtcbiAgICAgICAgdGhpcy5kYXRhLmZvckVhY2goKHZhbHVlOiBWZWN0b3IpID0+IHtcbiAgICAgICAgICAgIG1pbiA9IE1hdGgubWluKG1pbiwgdmFsdWUuaW50ZW5zaXR5KTtcbiAgICAgICAgICAgIG1heCA9IE1hdGgubWF4KG1heCwgdmFsdWUuaW50ZW5zaXR5KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBbbWluLCBtYXhdO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXQgdmVjdG9yIGF0IGFueSBwb2ludFxuICAgICAqIEBwYXJhbSDOuyBMb25naXR1ZGVcbiAgICAgKiBAcGFyYW0gz4YgTGF0aXR1ZGVcbiAgICAgKi9cbiAgICBnZXQozrs6IG51bWJlciwgz4Y6IG51bWJlcik6IFZlY3RvciB7XG4gICAgICAgIGNvbnN0IGbOuyA9IHRoaXMuZmxvb3JNb2QozrsgLSB0aGlzLs67MCwgMzYwKSAvIHRoaXMuzpTOuzsgIC8vIGNhbGN1bGF0ZSBsb25naXR1ZGUgaW5kZXggaW4gd3JhcHBlZCByYW5nZSBbMCwgMzYwKVxuICAgICAgICBjb25zdCBmz4YgPSAodGhpcy7PhjAgLSDPhikgLyB0aGlzLs6Uz4Y7ICAgICAgICAgICAgICAgICAvLyBjYWxjdWxhdGUgbGF0aXR1ZGUgaW5kZXggaW4gZGlyZWN0aW9uICs5MCB0byAtOTBcblxuICAgICAgICBjb25zdCBpzrsgPSBNYXRoLmZsb29yKGbOuykgLy8gY29sIG5cbiAgICAgICAgbGV0IGrOuyA9IGnOuyArIDE7ICAgICAgICAvLyBjb2wgbisxXG4gICAgICAgIGlmIChqzrsgPj0gdGhpcy53aWR0aCkge1xuICAgICAgICAgICAgas67ID0gdGhpcy7OuzA7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgac+GID0gTWF0aC5mbG9vcihmz4YpIC8vIGxpbmUgbVxuICAgICAgICBsZXQgas+GID0gac+GICsgMTsgICAgICAgIC8vIGxpbmUgbSsxXG4gICAgICAgIGlmIChqz4YgPj0gdGhpcy5oZWlnaHQpIHtcbiAgICAgICAgICAgIGrPhiA9IGnPhjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHbOuyA9IGbOuyAtIGnOuzsgICAvLyBjb2wgdmFyaWF0aW9uIFswLi4xXVxuICAgICAgICBjb25zdCB2z4YgPSBmz4YgLSBpz4Y7ICAgLy8gbGluZSB2YXJpYXRpb24gWzAuLjFdXG5cbiAgICAgICAgaWYgKGnOuyA+PSAwICYmIGnPhiA+PSAwICYmIGnOuyA8IHRoaXMud2lkdGggJiYgac+GIDwgdGhpcy5oZWlnaHQpIHtcbiAgICAgICAgICAgIGxldCBnMDAgPSB0aGlzLmRhdGFbac67ICsgac+GICogdGhpcy53aWR0aF07XG4gICAgICAgICAgICBsZXQgZzEwID0gdGhpcy5kYXRhW2rOuyArIGnPhiAqIHRoaXMud2lkdGhdO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5pc1ZhbHVlKGcwMCkgJiYgdGhpcy5pc1ZhbHVlKGcxMCkpIHtcbiAgICAgICAgICAgICAgICBsZXQgZzAxID0gdGhpcy5kYXRhW2nOuyArIGrPhiAqIHRoaXMud2lkdGhdO1xuICAgICAgICAgICAgICAgIGxldCBnMTEgPSB0aGlzLmRhdGFbas67ICsgas+GICogdGhpcy53aWR0aF07XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNWYWx1ZShnMDEpICYmIHRoaXMuaXNWYWx1ZShnMTEpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb24oXG4gICAgICAgICAgICAgICAgICAgICAgICB2zrssXG4gICAgICAgICAgICAgICAgICAgICAgICB2z4YsXG4gICAgICAgICAgICAgICAgICAgICAgICBnMDAsIC8vbDBjMFxuICAgICAgICAgICAgICAgICAgICAgICAgZzEwLCAvL2wwYzFcbiAgICAgICAgICAgICAgICAgICAgICAgIGcwMSwgLy9sMWMwXG4gICAgICAgICAgICAgICAgICAgICAgICBnMTEgIC8vbDFjbFxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yKDAsIDApO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW50ZXJwb2xhdGUgdmFsdWVcbiAgICAgKiBAcGFyYW0geCB2YXJpYXRpb24gYmV0d2VlbiBnMCogYW5kIGcxKlxuICAgICAqIEBwYXJhbSB5IHZhcmlhdGlvbiBiZXR3ZWVuIGcqMCBkYW5zIGcqMVxuICAgICAqIEBwYXJhbSBnMDAgcG9pbnQgYXQgY29sXzAgYW5kIGxpbmVfMFxuICAgICAqIEBwYXJhbSBnMTAgcG9pbnQgYXQgY29sXzEgYW5kIGxpbmVfMFxuICAgICAqIEBwYXJhbSBnMDEgcG9pbnQgYXQgY29sXzAgYW5kIGxpbmVfMVxuICAgICAqIEBwYXJhbSBnMTEgcG9pbnQgYXQgY29sXzEgYW5kIGxpbmVfMVxuICAgICAqIEByZXR1cm4gaW50ZXJwb2xhdGVkIHZlY3RvclxuICAgICAqL1xuICAgIGludGVycG9sYXRpb24oeDogbnVtYmVyLCB5OiBudW1iZXIsIGcwMDogVmVjdG9yLCBnMTA6IFZlY3RvciwgZzAxOiBWZWN0b3IsIGcxMTogVmVjdG9yKTogVmVjdG9yIHtcbiAgICAgICAgdmFyIHJ4ID0gKDEgLSB4KTtcbiAgICAgICAgdmFyIHJ5ID0gKDEgLSB5KTtcbiAgICAgICAgdmFyIGEgPSByeCAqIHJ5LFxuICAgICAgICAgICAgYiA9IHggKiByeSxcbiAgICAgICAgICAgIGMgPSByeCAqIHksXG4gICAgICAgICAgICBkID0geCAqIHk7XG4gICAgICAgIHZhciB1ID0gZzAwLnUgKiBhICsgZzEwLnUgKiBiICsgZzAxLnUgKiBjICsgZzExLnUgKiBkO1xuICAgICAgICB2YXIgdiA9IGcwMC52ICogYSArIGcxMC52ICogYiArIGcwMS52ICogYyArIGcxMS52ICogZDtcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IodSwgdik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3VzdG9tIG1vZHVsb1xuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9IHJldHVybnMgcmVtYWluZGVyIG9mIGZsb29yZWQgZGl2aXNpb24sIGkuZS4sIGZsb29yKGEgLyBuKS4gVXNlZnVsIGZvciBjb25zaXN0ZW50IG1vZHVsb1xuICAgICAqICAgICAgICAgIG9mIG5lZ2F0aXZlIG51bWJlcnMuIFNlZSBodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL01vZHVsb19vcGVyYXRpb24uXG4gICAgICovXG4gICAgZmxvb3JNb2QoYTogbnVtYmVyLCBuOiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gYSAtIG4gKiBNYXRoLmZsb29yKGEgLyBuKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogRGV0ZWN0IGlmIHggaXMgYSB2YWx1ZVxuICAgICAqIEByZXR1cm5zIHtib29sZWFufSB0cnVlIGlmIHRoZSBzcGVjaWZpZWQgdmFsdWUgaXMgbm90IG51bGwgYW5kIG5vdCB1bmRlZmluZWQuXG4gICAgICovXG4gICAgaXNWYWx1ZSh4OiBhbnkpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHggIT09IG51bGwgJiYgeCAhPT0gdW5kZWZpbmVkO1xuICAgIH07XG59XG4iLCJpbXBvcnQgTWFwQm91bmQgZnJvbSBcIi4vbWFwQm91bmRcIjtcbmltcG9ydCBDYW52YXNCb3VuZCBmcm9tIFwiLi9jYW52YXNCb3VuZFwiO1xuaW1wb3J0IFZlY3RvciBmcm9tIFwiLi92ZWN0b3JcIjtcblxuZGVjbGFyZSB2YXIgTDogYW55O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBsYXllciB7XG5cbiAgICBwdWJsaWMgbWFwQm91bmQ6IE1hcEJvdW5kO1xuICAgIHB1YmxpYyBjYW52YXNCb3VuZDogQ2FudmFzQm91bmQ7XG5cbiAgICBjb25zdHJ1Y3RvcihtYXBCb3VuZDogTWFwQm91bmQsIGNhbnZhc0JvdW5kOiBDYW52YXNCb3VuZCkge1xuICAgICAgICB0aGlzLmNhbnZhc0JvdW5kID0gY2FudmFzQm91bmQ7XG4gICAgICAgIHRoaXMubWFwQm91bmQgPSBtYXBCb3VuZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBGaW5kIGdlb2Nvb3JkaW5hdGUgZnJvbSBjYW52YXMgcG9pbnRcbiAgICAgKiBAcGFyYW0geCBcbiAgICAgKiBAcGFyYW0geSBcbiAgICAgKiByZXR1cm4gW2xuZywgbGF0XVxuICAgICoqL1xuICAgIGNhbnZhc1RvTWFwKHg6IG51bWJlciwgeTogbnVtYmVyKTogbnVtYmVyW10ge1xuICAgICAgICBjb25zdCBtYXBMb25EZWx0YSA9IHRoaXMubWFwQm91bmQuZWFzdCAtIHRoaXMubWFwQm91bmQud2VzdDtcbiAgICAgICAgY29uc3Qgd29ybGRNYXBSYWRpdXMgPSAodGhpcy5jYW52YXNCb3VuZC53aWR0aCAvIHRoaXMucmFkMmRlZyhtYXBMb25EZWx0YSkpICogMzYwIC8gKDIgKiBNYXRoLlBJKTtcbiAgICAgICAgY29uc3QgbWFwT2Zmc2V0WSA9ICh3b3JsZE1hcFJhZGl1cyAvIDIgKiBNYXRoLmxvZygoMSArIE1hdGguc2luKHRoaXMubWFwQm91bmQuc291dGgpKSAvICgxIC0gTWF0aC5zaW4odGhpcy5tYXBCb3VuZC5zb3V0aCkpKSk7XG4gICAgICAgIGNvbnN0IGVxdWF0b3JZID0gdGhpcy5jYW52YXNCb3VuZC5oZWlnaHQgKyBtYXBPZmZzZXRZO1xuICAgICAgICBjb25zdCBhID0gKGVxdWF0b3JZIC0geSkgLyB3b3JsZE1hcFJhZGl1cztcblxuICAgICAgICBjb25zdCDPhiA9IDE4MCAvIE1hdGguUEkgKiAoMiAqIE1hdGguYXRhbihNYXRoLmV4cChhKSkgLSBNYXRoLlBJIC8gMik7XG4gICAgICAgIGNvbnN0IM67ID0gdGhpcy5yYWQyZGVnKHRoaXMubWFwQm91bmQud2VzdCkgKyB4IC8gdGhpcy5jYW52YXNCb3VuZC53aWR0aCAqIHRoaXMucmFkMmRlZyhtYXBMb25EZWx0YSk7XG4gICAgICAgIHJldHVybiBbzrssIM+GXTtcbiAgICB9O1xuXG4gICAgbWVyY1koz4Y6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIHJldHVybiBNYXRoLmxvZyhNYXRoLnRhbijPhiAvIDIgKyBNYXRoLlBJIC8gNCkpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBQcm9qZWN0IGEgcG9pbnQgb24gdGhlIG1hcFxuICAgICAqIEBwYXJhbSDOuyBMb25naXR1ZGVcbiAgICAgKiBAcGFyYW0gz4YgTGF0aXR1ZGVcbiAgICAgKiBAcmV0dXJuIFt4LCB5XVxuICAgICoqL1xuICAgIG1hcFRvQ2FudmFzKM67OiBudW1iZXIsIM+GOiBudW1iZXIpOiBudW1iZXJbXSB7XG4gICAgICAgIGNvbnN0IHltaW4gPSB0aGlzLm1lcmNZKHRoaXMubWFwQm91bmQuc291dGgpO1xuICAgICAgICBjb25zdCB5bWF4ID0gdGhpcy5tZXJjWSh0aGlzLm1hcEJvdW5kLm5vcnRoKTtcbiAgICAgICAgY29uc3QgeEZhY3RvciA9IHRoaXMuY2FudmFzQm91bmQud2lkdGggLyAodGhpcy5tYXBCb3VuZC5lYXN0IC0gdGhpcy5tYXBCb3VuZC53ZXN0KTtcbiAgICAgICAgY29uc3QgeUZhY3RvciA9IHRoaXMuY2FudmFzQm91bmQuaGVpZ2h0IC8gKHltYXggLSB5bWluKTtcblxuICAgICAgICBsZXQgeSA9IHRoaXMubWVyY1kodGhpcy5kZWcycmFkKM+GKSk7XG4gICAgICAgIGNvbnN0IHggPSAodGhpcy5kZWcycmFkKM67KSAtIHRoaXMubWFwQm91bmQud2VzdCkgKiB4RmFjdG9yO1xuICAgICAgICB5ID0gKHltYXggLSB5KSAqIHlGYWN0b3I7XG4gICAgICAgIHJldHVybiBbeCwgeV07XG4gICAgfTtcblxuICAgIHJhZDJkZWcocmFkOiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gcmFkICogMTgwIC8gTWF0aC5QSTtcbiAgICB9O1xuXG4gICAgZGVnMnJhZChkZWc6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIHJldHVybiBkZWcgKiBNYXRoLlBJIC8gMTgwO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBFWFBFUklNRU5UQUwgZnJvbVxuICAgICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9vbmFjaS9sZWFmbGV0LXZlbG9jaXR5L2NvbW1pdC9iZDQ1ZWE5YzM5OTAyMTg1MWVjYzk4Yjk3ZDRiMTI2YjY0YWRjYzhmXG4gICAgIGNhbnZhc1RvTWFwKHg6IG51bWJlciwgeTogbnVtYmVyKTogbnVtYmVyW10ge1xuICAgICAgICBjb25zdCBsYXRsb24gPSB0aGlzLm1hcEJvdW5kLm1hcC5jb250YWluZXJQb2ludFRvTGF0TG5nKEwucG9pbnQoeCx5KSk7XG4gICAgICAgIHJldHVybiBbbGF0bG9uLmxuZywgbGF0bG9uLmxhdF07XG4gICAgfTtcbiAgICBcbiAgICBtYXBUb0NhbnZhcyhsYXQ6IG51bWJlciwgbG9uOiBudW1iZXIpOiBudW1iZXJbXSB7XG4gICAgICAgIGNvbnN0IHh5ID0gdGhpcy5tYXBCb3VuZC5tYXAubGF0TG5nVG9Db250YWluZXJQb2ludChMLmxhdExuZyhsYXQsbG9uKSk7XG4gICAgICAgIHJldHVybiBbeHkueCwgeHkueV07XG4gICAgfVxuICAgICoqL1xuXG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHBhcmFtIM67IExvbmdpdHVkZVxuICAgICAqIEBwYXJhbSDPhiBMYXRpdHVkZVxuICAgICAqIEBwYXJhbSB4IFxuICAgICAqIEBwYXJhbSB5IFxuICAgICAqIEByZXR1cm4gW11cbiAgICAgKi9cbiAgICBkaXN0b3J0aW9uKM67OiBudW1iZXIsIM+GOiBudW1iZXIsIHg6IG51bWJlciwgeTogbnVtYmVyKTogbnVtYmVyW10ge1xuICAgICAgICBjb25zdCDPhCA9IDIgKiBNYXRoLlBJO1xuICAgICAgICAvLyAgICB2YXIgSCA9IE1hdGgucG93KDEwLCAtNS4yKTsgLy8gMC4wMDAwMDYzMDk1NzM0NDQ4MDE5M1xuICAgICAgICAvLyAgICB2YXIgSCA9IDAuMDAwMDM2MDsgICAgICAgICAgLy8gMC4wMDAwMzYwwrDPhiB+PSA0bSAgKGZyb20gaHR0cHM6Ly9naXRodWIuY29tL2NhbWJlY2MvZWFydGgvYmxvYi9tYXN0ZXIvcHVibGljL2xpYnMvZWFydGgvMS4wLjAvbWljcm8uanMjTDEzKVxuICAgICAgICAvL0BzZWUgaHR0cHM6Ly9naXRodWIuY29tL2RhbndpbGQvbGVhZmxldC12ZWxvY2l0eS9pc3N1ZXMvMTUjaXNzdWVjb21tZW50LTM0NTI2MDc2OFxuICAgICAgICBjb25zdCBIID0gNTtcbiAgICAgICAgY29uc3QgaM67ID0gzrsgPCAwID8gSCA6IC1IO1xuICAgICAgICBjb25zdCBoz4YgPSDPhiA8IDAgPyBIIDogLUg7XG5cbiAgICAgICAgLy8gVE9ETzogZmluaXNoXG4gICAgICAgIGNvbnN0IHDOuyA9IHRoaXMubWFwVG9DYW52YXMozrsgKyBozrssIM+GKTtcbiAgICAgICAgY29uc3QgcM+GID0gdGhpcy5tYXBUb0NhbnZhcyjOuywgz4YgKyBoz4YpO1xuXG4gICAgICAgIC8vIE1lcmlkaWFuIHNjYWxlIGZhY3RvciAoc2VlIFNueWRlciwgZXF1YXRpb24gNC0zKSwgd2hlcmUgUiA9IDEuIFRoaXMgaGFuZGxlcyBpc3N1ZSB3aGVyZSBsZW5ndGggb2YgMcK6IM67XG4gICAgICAgIC8vIGNoYW5nZXMgZGVwZW5kaW5nIG9uIM+GLiBXaXRob3V0IHRoaXMsIHRoZXJlIGlzIGEgcGluY2hpbmcgZWZmZWN0IGF0IHRoZSBwb2xlcy5cbiAgICAgICAgY29uc3QgayA9IE1hdGguY29zKM+GIC8gMzYwICogz4QpO1xuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgKHDOu1swXSAtIHgpIC8gaM67IC8gayxcbiAgICAgICAgICAgIChwzrtbMV0gLSB5KSAvIGjOuyAvIGssXG4gICAgICAgICAgICAocM+GWzBdIC0geCkgLyBoz4YsXG4gICAgICAgICAgICAocM+GWzFdIC0geSkgLyBoz4ZcbiAgICAgICAgXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYWxjdWxhdGUgZGlzdG9ydGlvbiBvZiB0aGUgd2luZCB2ZWN0b3IgY2F1c2VkIGJ5IHRoZSBzaGFwZSBvZiB0aGUgcHJvamVjdGlvbiBhdCBwb2ludCAoeCwgeSkuIFRoZSB3aW5kXG4gICAgICogdmVjdG9yIGlzIG1vZGlmaWVkIGluIHBsYWNlIGFuZCByZXR1cm5lZCBieSB0aGlzIGZ1bmN0aW9uLlxuICAgICAqIEBwYXJhbSDOuyBcbiAgICAgKiBAcGFyYW0gz4YgXG4gICAgICogQHBhcmFtIHggXG4gICAgICogQHBhcmFtIHkgXG4gICAgICogQHBhcmFtIHNjYWxlIHNjYWxlIGZhY3RvclxuICAgICAqIEBwYXJhbSB3aW5kIFt1LCB2XVxuICAgICAqIEByZXR1cm4gW11cbiAgICAgKi9cbiAgICBkaXN0b3J0KM67OiBudW1iZXIsIM+GOiBudW1iZXIsIHg6IG51bWJlciwgeTogbnVtYmVyLCBzY2FsZTogbnVtYmVyLCB3aW5kOiBWZWN0b3IpOiBWZWN0b3Ige1xuICAgICAgICBjb25zdCB1ID0gd2luZC51ICogc2NhbGU7XG4gICAgICAgIGNvbnN0IHYgPSB3aW5kLnYgKiBzY2FsZTtcbiAgICAgICAgY29uc3QgZCA9IHRoaXMuZGlzdG9ydGlvbijOuywgz4YsIHgsIHkpO1xuXG4gICAgICAgIC8vIFNjYWxlIGRpc3RvcnRpb24gdmVjdG9ycyBieSB1IGFuZCB2LCB0aGVuIGFkZC5cbiAgICAgICAgd2luZC51ID0gZFswXSAqIHUgKyBkWzJdICogdjtcbiAgICAgICAgd2luZC52ID0gZFsxXSAqIHUgKyBkWzNdICogdjtcbiAgICAgICAgcmV0dXJuIHdpbmQ7XG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hcEJvdW5kIHtcbiAgICBwdWJsaWMgX21hcDogTC5NYXA7XG4gICAgcHVibGljIHNvdXRoOiBudW1iZXI7XG4gICAgcHVibGljIG5vcnRoOiBudW1iZXI7XG4gICAgcHVibGljIGVhc3Q6IG51bWJlcjtcbiAgICBwdWJsaWMgd2VzdDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IobWFwOiBMLk1hcCwgbm9ydGg6IG51bWJlciwgZWFzdDogbnVtYmVyLCBzb3V0aDogbnVtYmVyLCB3ZXN0OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fbWFwID0gbWFwO1xuICAgICAgICB0aGlzLm5vcnRoID0gbm9ydGggKiBNYXRoLlBJIC8gMTgwO1xuICAgICAgICB0aGlzLmVhc3QgPSBlYXN0ICogTWF0aC5QSSAvIDE4MDtcbiAgICAgICAgdGhpcy5zb3V0aCA9IHNvdXRoICogTWF0aC5QSSAvIDE4MDtcbiAgICAgICAgdGhpcy53ZXN0ID0gd2VzdCAqIE1hdGguUEkgLyAxODA7XG4gICAgfVxuXG4gICAgZ2V0IHdpZHRoKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiAoNzIwICsgdGhpcy5lYXN0IC0gdGhpcy53ZXN0KSAlIDM2MDtcbiAgICB9XG5cbiAgICBnZXQgaGVpZ2h0KCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiAoMzYwICsgdGhpcy5ub3J0aCAtIHRoaXMuc291dGgpICUgMTgwO1xuICAgIH1cblxuICAgIGdldCBtYXAoKTogTC5NYXAge1xuICAgICAgICByZXR1cm4gdGhpcy5fbWFwO1xuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQYXJ0aWN1bGUge1xuICAgIHB1YmxpYyB4OiBudW1iZXI7XG4gICAgcHVibGljIHk6IG51bWJlcjtcbiAgICBwdWJsaWMgYWdlOiBudW1iZXI7XG4gICAgcHVibGljIG1heEFnZTogbnVtYmVyO1xuICAgIHB1YmxpYyB4dDogbnVtYmVyO1xuICAgIHB1YmxpYyB5dDogbnVtYmVyO1xuICAgIHB1YmxpYyBpbnRlbnNpdHk6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKHg6IG51bWJlciwgeTogbnVtYmVyLCBtYXhBZ2U6IG51bWJlcikge1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgICAgICB0aGlzLmFnZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG1heEFnZSk7XG4gICAgICAgIHRoaXMubWF4QWdlID0gbWF4QWdlO1xuICAgIH1cblxuICAgIHJlc2V0KHg6IG51bWJlciwgeTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgICAgIHRoaXMuYWdlID0gMDtcbiAgICB9XG5cbiAgICBnZXQgaXNEZWFkKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5hZ2UgPiB0aGlzLm1heEFnZTtcbiAgICB9XG5cbiAgICBncm93KCkge1xuICAgICAgICB0aGlzLmFnZSsrO1xuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBWZWN0b3Ige1xuICAgIHB1YmxpYyB1OiBudW1iZXI7XG4gICAgcHVibGljIHY6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKHU/OiBudW1iZXIsIHY/OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy51ID0gdSB8fCAwO1xuICAgICAgICB0aGlzLnYgPSB2IHx8IDA7XG4gICAgfVxuXG4gICAgZ2V0IGludGVuc2l0eSgpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydCh0aGlzLnUgKiB0aGlzLnUgKyB0aGlzLnYgKiB0aGlzLnYpO1xuICAgIH1cbn0iLCJpbXBvcnQgVmVjdG9yIGZyb20gXCIuL3ZlY3RvclwiO1xyXG5pbXBvcnQgR3JpZCBmcm9tIFwiLi9ncmlkXCI7XHJcbmltcG9ydCBDb2xvclNjYWxlIGZyb20gXCIuL2NvbG9yU2NhbGVcIjtcclxuaW1wb3J0IFBhcnRpY3VsZSBmcm9tIFwiLi9wYXJ0aWNsZVwiO1xyXG5pbXBvcnQgQW5pbWF0aW9uQnVja2V0IGZyb20gXCIuL2FuaW1hdGlvbkJ1Y2tldFwiO1xyXG5pbXBvcnQgTGF5ZXIgZnJvbSBcIi4vbGF5ZXJcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgV2luZHlPcHRpb25zIHtcclxuICBjYW52YXM6IGFueTtcclxuICBkYXRhOiBhbnk7XHJcbiAgY29sb3JTY2FsZTogc3RyaW5nW107XHJcbiAgbWF4VmVsb2NpdHk6IG51bWJlcjtcclxuICBtaW5WZWxvY2l0eTogbnVtYmVyO1xyXG4gIHZlbG9jaXR5U2NhbGU6IG51bWJlcjtcclxuICBwYXJ0aWNsZUFnZTogbnVtYmVyO1xyXG4gIHBhcnRpY2xlTXVsdGlwbGllcjogbnVtYmVyO1xyXG4gIHBhcnRpY2xlbGluZVdpZHRoOiBudW1iZXI7XHJcbiAgZnJhbWVSYXRlOiBudW1iZXI7XHJcbiAgb3BhY2l0eTogbnVtYmVyO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdpbmR5IHtcclxuXHJcbiAgcHJpdmF0ZSBncmlkOiBhbnk7XHJcbiAgcHJpdmF0ZSDOuzA6IG51bWJlcjtcclxuICBwcml2YXRlIM+GMDogbnVtYmVyO1xyXG4gIHByaXZhdGUgzpTOuzogbnVtYmVyO1xyXG4gIHByaXZhdGUgzpTPhjogbnVtYmVyO1xyXG4gIHByaXZhdGUgbmk6IG51bWJlcjtcclxuICBwcml2YXRlIG5qOiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBjYW52YXM6IGFueSA9IG51bGw7XHJcbiAgcHJpdmF0ZSBjb2xvclNjYWxlOiBDb2xvclNjYWxlO1xyXG4gIHByaXZhdGUgdmVsb2NpdHlTY2FsZTogbnVtYmVyO1xyXG4gIHByaXZhdGUgcGFydGljbGVNdWx0aXBsaWVyID0gMSAvIDMwMDtcclxuICBwcml2YXRlIHBhcnRpY2xlQWdlOiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBwYXJ0aWNsZUxpbmVXaWR0aDogbnVtYmVyO1xyXG4gIHByaXZhdGUgYXV0b0NvbG9yUmFuZ2UgPSBmYWxzZTtcclxuICBwcml2YXRlIG9wYWNpdHk6IG51bWJlcjtcclxuXHJcbiAgcHJpdmF0ZSBsYXllcjogTGF5ZXI7XHJcbiAgcHJpdmF0ZSBwYXJ0aWN1bGVzOiBQYXJ0aWN1bGVbXSA9IFtdO1xyXG4gIHByaXZhdGUgYW5pbWF0aW9uQnVja2V0OiBBbmltYXRpb25CdWNrZXQ7XHJcbiAgcHJpdmF0ZSBjb250ZXh0MkQ6IGFueTtcclxuICBwcml2YXRlIGFuaW1hdGlvbkxvb3A6IGFueSA9IG51bGw7XHJcbiAgcHJpdmF0ZSBmcmFtZVRpbWU6IG51bWJlcjtcclxuICBwcml2YXRlIHRoZW4gPSAwO1xyXG5cclxuXHJcbiAgY29uc3RydWN0b3Iob3B0aW9uczogV2luZHlPcHRpb25zKSB7XHJcbiAgICB0aGlzLnNldE9wdGlvbnMob3B0aW9ucyk7XHJcbiAgfVxyXG5cclxuICBzZXRPcHRpb25zKG9wdGlvbnM6IFdpbmR5T3B0aW9ucykge1xyXG4gICAgdGhpcy5jYW52YXMgPSBvcHRpb25zLmNhbnZhcztcclxuICAgIGlmIChvcHRpb25zLm1pblZlbG9jaXR5ID09PSB1bmRlZmluZWQgJiYgb3B0aW9ucy5tYXhWZWxvY2l0eSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRoaXMuYXV0b0NvbG9yUmFuZ2UgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jb2xvclNjYWxlID0gbmV3IENvbG9yU2NhbGUob3B0aW9ucy5taW5WZWxvY2l0eSB8fCAwLCBvcHRpb25zLm1heFZlbG9jaXR5IHx8IDEwLCBvcHRpb25zLmNvbG9yU2NhbGUpO1xyXG4gICAgdGhpcy52ZWxvY2l0eVNjYWxlID0gb3B0aW9ucy52ZWxvY2l0eVNjYWxlIHx8IDAuMDE7XHJcbiAgICB0aGlzLnBhcnRpY2xlQWdlID0gb3B0aW9ucy5wYXJ0aWNsZUFnZSB8fCA2NDtcclxuICAgIHRoaXMub3BhY2l0eSA9ICtvcHRpb25zLm9wYWNpdHkgfHwgMC45N1xyXG4gICAgdGhpcy5zZXREYXRhKG9wdGlvbnMuZGF0YSk7XHJcbiAgICB0aGlzLnBhcnRpY2xlTXVsdGlwbGllciA9IG9wdGlvbnMucGFydGljbGVNdWx0aXBsaWVyIHx8IDEgLyAzMDA7XHJcbiAgICB0aGlzLnBhcnRpY2xlTGluZVdpZHRoID0gb3B0aW9ucy5wYXJ0aWNsZWxpbmVXaWR0aCB8fCAxO1xyXG4gICAgY29uc3QgZnJhbWVSYXRlID0gb3B0aW9ucy5mcmFtZVJhdGUgfHwgMTU7XHJcbiAgICB0aGlzLmZyYW1lVGltZSA9IDEwMDAgLyBmcmFtZVJhdGU7XHJcbiAgfVxyXG5cclxuICBnZXQgcGFydGljdWxlQ291bnQoKSB7XHJcbiAgICBjb25zdCBwYXJ0aWN1bGVSZWR1Y3Rpb24gPSAoKC9hbmRyb2lkfGJsYWNrYmVycnl8aWVtb2JpbGV8aXBhZHxpcGhvbmV8aXBvZHxvcGVyYSBtaW5pfHdlYm9zL2kpLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkpID8gKE1hdGgucG93KHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvLCAxIC8gMykgfHwgMS42KSA6IDE7XHJcbiAgICByZXR1cm4gTWF0aC5yb3VuZCh0aGlzLmxheWVyLmNhbnZhc0JvdW5kLndpZHRoICogdGhpcy5sYXllci5jYW52YXNCb3VuZC5oZWlnaHQgKiB0aGlzLnBhcnRpY2xlTXVsdGlwbGllcikgKiBwYXJ0aWN1bGVSZWR1Y3Rpb247XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBMb2FkIGRhdGFcclxuICAgKiBAcGFyYW0gZGF0YVxyXG4gICAqL1xyXG4gIHNldERhdGEoZGF0YTogYW55W10pIHtcclxuICAgIGxldCB1RGF0YTogYW55ID0gbnVsbDtcclxuICAgIGxldCB2RGF0YTogYW55ID0gbnVsbDtcclxuICAgIGNvbnN0IGdyaWQ6IFZlY3RvcltdID0gW107XHJcblxyXG4gICAgZGF0YS5mb3JFYWNoKChyZWNvcmQpID0+IHtcclxuICAgICAgc3dpdGNoIChgJHtyZWNvcmQuaGVhZGVyLnBhcmFtZXRlckNhdGVnb3J5fSwke3JlY29yZC5oZWFkZXIucGFyYW1ldGVyTnVtYmVyfWApIHtcclxuICAgICAgICBjYXNlIFwiMSwyXCI6XHJcbiAgICAgICAgY2FzZSBcIjIsMlwiOlxyXG4gICAgICAgICAgdURhdGEgPSByZWNvcmQ7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwiMSwzXCI6XHJcbiAgICAgICAgY2FzZSBcIjIsM1wiOlxyXG4gICAgICAgICAgdkRhdGEgPSByZWNvcmQ7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoIXVEYXRhIHx8ICF2RGF0YSkge1xyXG4gICAgICBjb25zb2xlLndhcm4oXCJEYXRhIGFyZSBub3QgY29ycmVjdCBmb3JtYXRcIik7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB1RGF0YS5kYXRhLmZvckVhY2goKHU6IG51bWJlciwgaW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgICBncmlkLnB1c2gobmV3IFZlY3Rvcih1LCB2RGF0YS5kYXRhW2luZGV4XSkpO1xyXG4gICAgfSlcclxuXHJcbiAgICAvL2NvbnNvbGUubG9nKCd1RGF0YScsIHVEYXRhKTtcclxuICAgIC8vY29uc29sZS5sb2coJ3ZEYXRhJywgdkRhdGEpO1xyXG5cclxuICAgIHRoaXMuZ3JpZCA9IG5ldyBHcmlkKFxyXG4gICAgICBncmlkLFxyXG4gICAgICB1RGF0YS5oZWFkZXIubGExLFxyXG4gICAgICB1RGF0YS5oZWFkZXIubG8xLFxyXG4gICAgICB1RGF0YS5oZWFkZXIuZHksXHJcbiAgICAgIHVEYXRhLmhlYWRlci5keCxcclxuICAgICAgdURhdGEuaGVhZGVyLm55LFxyXG4gICAgICB1RGF0YS5oZWFkZXIubnhcclxuICAgICk7XHJcblxyXG4gICAgdGhpcy7OuzAgPSB1RGF0YS5oZWFkZXIubG8xO1xyXG4gICAgdGhpcy7PhjAgPSB1RGF0YS5oZWFkZXIubGExO1xyXG5cclxuICAgIHRoaXMuzpTOuyA9IHVEYXRhLmhlYWRlci5keDtcclxuICAgIHRoaXMuzpTPhiA9IHVEYXRhLmhlYWRlci5keVxyXG5cclxuICAgIHRoaXMubmkgPSB1RGF0YS5oZWFkZXIubng7XHJcbiAgICB0aGlzLm5qID0gdURhdGEuaGVhZGVyLm55OyAvLyBudW1iZXIgb2YgZ3JpZCBwb2ludHMgVy1FIGFuZCBOLVMgKGUuZy4sIDE0NCB4IDczKVxyXG5cclxuICAgIHZhciBwID0gMDtcclxuICAgIHZhciBpc0NvbnRpbnVvdXMgPSBNYXRoLmZsb29yKHRoaXMubmkgKiB0aGlzLs6UzrspID49IDM2MDtcclxuXHJcbiAgICBmb3IgKHZhciBqID0gMDsgaiA8IHRoaXMubmo7IGorKykge1xyXG4gICAgICB2YXIgcm93ID0gW107XHJcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5uaTsgaSsrLCBwKyspIHtcclxuICAgICAgICByb3dbaV0gPSB0aGlzLmdyaWQuZGF0YVtwXTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoaXNDb250aW51b3VzKSB7XHJcbiAgICAgICAgLy8gRm9yIHdyYXBwZWQgZ3JpZHMsIGR1cGxpY2F0ZSBmaXJzdCBjb2x1bW4gYXMgbGFzdCBjb2x1bW4gdG8gc2ltcGxpZnkgaW50ZXJwb2xhdGlvbiBsb2dpY1xyXG4gICAgICAgIHJvdy5wdXNoKHJvd1swXSk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5ncmlkW2pdID0gcm93O1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmF1dG9Db2xvclJhbmdlKSB7XHJcbiAgICAgIGNvbnN0IG1pbk1heCA9IHRoaXMuZ3JpZC52YWx1ZVJhbmdlO1xyXG4gICAgICB0aGlzLmNvbG9yU2NhbGUuc2V0TWluTWF4KG1pbk1heFswXSwgbWluTWF4WzFdKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZsb29yTW9kKGE6IG51bWJlciwgbjogbnVtYmVyKSB7XHJcbiAgICByZXR1cm4gYSAtIG4gKiBNYXRoLmZsb29yKGEgLyBuKTtcclxuICB9O1xyXG5cclxuICBpc1ZhbHVlKHg6IGFueSkge1xyXG4gICAgcmV0dXJuIHggIT09IG51bGwgJiYgeCAhPT0gdW5kZWZpbmVkO1xyXG4gIH07XHJcblxyXG4gIGJpbGluZWFySW50ZXJwb2xhdGVWZWN0b3IoeDogbnVtYmVyLCB5OiBudW1iZXIsIGcwMDogYW55LCBnMTA6IGFueSwgZzAxOiBhbnksIGcxMTogYW55KSB7XHJcbiAgICB2YXIgcnggPSAoMSAtIHgpO1xyXG4gICAgdmFyIHJ5ID0gKDEgLSB5KTtcclxuICAgIHZhciBhID0gcnggKiByeSwgYiA9IHggKiByeSwgYyA9IHJ4ICogeSwgZCA9IHggKiB5O1xyXG4gICAgdmFyIHUgPSBnMDAudSAqIGEgKyBnMTAudSAqIGIgKyBnMDEudSAqIGMgKyBnMTEudSAqIGQ7XHJcbiAgICB2YXIgdiA9IGcwMC52ICogYSArIGcxMC52ICogYiArIGcwMS52ICogYyArIGcxMS52ICogZDtcclxuICAgIHJldHVybiBbdSwgdiwgTWF0aC5zcXJ0KHUgKiB1ICsgdiAqIHYpXTtcclxuICB9O1xyXG5cclxuICAvKiBHZXQgaW50ZXJwb2xhdGVkIGdyaWQgdmFsdWUgZnJvbSBMb24vTGF0IHBvc2l0aW9uXHJcbiAgKiBAcGFyYW0gzrsge0Zsb2F0fSBMb25naXR1ZGVcclxuICAqIEBwYXJhbSDPhiB7RmxvYXR9IExhdGl0dWRlXHJcbiAgKiBAcmV0dXJucyB7T2JqZWN0fVxyXG4gICovXHJcbiAgaW50ZXJwb2xhdGUozrs6IG51bWJlciwgz4Y6IG51bWJlcik6IGFueSB7XHJcbiAgICBpZiAoIXRoaXMuZ3JpZCkge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIHZhciBpID0gdGhpcy5mbG9vck1vZCjOuyAtIHRoaXMuzrswLCAzNjApIC8gdGhpcy7OlM67OyAvLyBjYWxjdWxhdGUgbG9uZ2l0dWRlIGluZGV4IGluIHdyYXBwZWQgcmFuZ2UgWzAsIDM2MClcclxuICAgIHZhciBqID0gKHRoaXMuz4YwIC0gz4YpIC8gdGhpcy7OlM+GOyAvLyBjYWxjdWxhdGUgbGF0aXR1ZGUgaW5kZXggaW4gZGlyZWN0aW9uICs5MCB0byAtOTBcclxuXHJcbiAgICB2YXIgZmkgPSBNYXRoLmZsb29yKGkpO1xyXG4gICAgdmFyIGNpID0gZmkgKyAxO1xyXG4gICAgdmFyIGZqID0gTWF0aC5mbG9vcihqKTtcclxuICAgIHZhciBjaiA9IGZqICsgMTtcclxuICAgIHZhciByb3cgPSB0aGlzLmdyaWRbZmpdOy8vRG9udCBrbm93IHdoeSBoZSBkb3NlbnQgZm91bmQgYW55IHJvdyBFUlJSUk9SXHJcbiAgICBpZiAocm93KSB7XHJcbiAgICAgIHZhciBnMDAgPSByb3dbZmldO1xyXG4gICAgICB2YXIgZzEwID0gcm93W2NpXTtcclxuICAgICAgaWYgKHRoaXMuaXNWYWx1ZShnMDApICYmIHRoaXMuaXNWYWx1ZShnMTApICYmIChyb3cgPSB0aGlzLmdyaWRbY2pdKSkge1xyXG4gICAgICAgIHZhciBnMDEgPSByb3dbZmldO1xyXG4gICAgICAgIHZhciBnMTEgPSByb3dbY2ldO1xyXG4gICAgICAgIGlmICh0aGlzLmlzVmFsdWUoZzAxKSAmJiB0aGlzLmlzVmFsdWUoZzExKSkge1xyXG4gICAgICAgICAgLy8gQWxsIGZvdXIgcG9pbnRzIGZvdW5kLCBzbyBpbnRlcnBvbGF0ZSB0aGUgdmFsdWUuXHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5iaWxpbmVhckludGVycG9sYXRlVmVjdG9yKGkgLSBmaSwgaiAtIGZqLCBnMDAsIGcxMCwgZzAxLCBnMTEpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfTtcclxuXHJcbiAgZ2V0UGFydGljdWxlV2luZChwOiBQYXJ0aWN1bGUpOiBWZWN0b3Ige1xyXG4gICAgY29uc3QgbG5nTGF0ID0gdGhpcy5sYXllci5jYW52YXNUb01hcChwLngsIHAueSk7XHJcbiAgICBjb25zdCB3aW5kID0gdGhpcy5ncmlkLmdldChsbmdMYXRbMF0sIGxuZ0xhdFsxXSk7XHJcbiAgICBwLmludGVuc2l0eSA9IHdpbmQuaW50ZW5zaXR5O1xyXG4gICAgY29uc3QgbWFwQXJlYSA9IHRoaXMubGF5ZXIubWFwQm91bmQuaGVpZ2h0ICogdGhpcy5sYXllci5tYXBCb3VuZC53aWR0aDtcclxuICAgIHZhciB2ZWxvY2l0eVNjYWxlID0gdGhpcy52ZWxvY2l0eVNjYWxlICogTWF0aC5wb3cobWFwQXJlYSwgMC40KTtcclxuICAgIHRoaXMubGF5ZXIuZGlzdG9ydChsbmdMYXRbMF0sIGxuZ0xhdFsxXSwgcC54LCBwLnksIHZlbG9jaXR5U2NhbGUsIHdpbmQpO1xyXG4gICAgcmV0dXJuIHdpbmQ7XHJcbiAgfVxyXG5cclxuICBzdGFydChsYXllcjogTGF5ZXIpIHtcclxuICAgIHRoaXMuY29udGV4dDJEID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG4gICAgdGhpcy5jb250ZXh0MkQubGluZVdpZHRoID0gdGhpcy5wYXJ0aWNsZUxpbmVXaWR0aDtcclxuICAgIHRoaXMuY29udGV4dDJELmZpbGxTdHlsZSA9IGByZ2JhKDAsIDAsIDAsICR7dGhpcy5vcGFjaXR5fSlgO1xyXG4gICAgdGhpcy5jb250ZXh0MkQuZ2xvYmFsQWxwaGEgPSAwLjY7XHJcblxyXG4gICAgdGhpcy5sYXllciA9IGxheWVyO1xyXG4gICAgdGhpcy5hbmltYXRpb25CdWNrZXQgPSBuZXcgQW5pbWF0aW9uQnVja2V0KHRoaXMuY29sb3JTY2FsZSk7XHJcblxyXG4gICAgdGhpcy5wYXJ0aWN1bGVzLnNwbGljZSgwLCB0aGlzLnBhcnRpY3VsZXMubGVuZ3RoKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wYXJ0aWN1bGVDb3VudDsgaSsrKSB7XHJcbiAgICAgIHRoaXMucGFydGljdWxlcy5wdXNoKHRoaXMubGF5ZXIuY2FudmFzQm91bmQuZ2V0UmFuZG9tUGFydGljdWxlKHRoaXMucGFydGljbGVBZ2UpKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnRoZW4gPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuXHJcbiAgICB0aGlzLmZyYW1lKCk7XHJcbiAgfVxyXG5cclxuICBmcmFtZSgpIHtcclxuICAgIHRoaXMuYW5pbWF0aW9uTG9vcCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMuZnJhbWUoKVxyXG4gICAgfSk7XHJcbiAgICB2YXIgbm93ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICB2YXIgZGVsdGEgPSBub3cgLSB0aGlzLnRoZW47XHJcbiAgICBpZiAoZGVsdGEgPiB0aGlzLmZyYW1lVGltZSkge1xyXG4gICAgICB0aGlzLnRoZW4gPSBub3cgLSAoZGVsdGEgJSB0aGlzLmZyYW1lVGltZSk7XHJcbiAgICAgIHRoaXMuZXZvbHZlKCk7XHJcbiAgICAgIHRoaXMuZHJhdygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZXZvbHZlKCkge1xyXG4gICAgdGhpcy5hbmltYXRpb25CdWNrZXQuY2xlYXIoKTtcclxuICAgIHRoaXMucGFydGljdWxlcy5mb3JFYWNoKChwOiBQYXJ0aWN1bGUpID0+IHtcclxuICAgICAgcC5ncm93KCk7XHJcbiAgICAgIGlmIChwLmlzRGVhZCkge1xyXG4gICAgICAgIHRoaXMubGF5ZXIuY2FudmFzQm91bmQucmVzZXRQYXJ0aWN1bGUocCk7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3Qgd2luZCA9IHRoaXMuZ2V0UGFydGljdWxlV2luZChwKTtcclxuICAgICAgdGhpcy5hbmltYXRpb25CdWNrZXQuYWRkKHAsIHdpbmQpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBkcmF3KCkge1xyXG4gICAgdGhpcy5jb250ZXh0MkQuZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gXCJkZXN0aW5hdGlvbi1pblwiO1xyXG4gICAgdGhpcy5jb250ZXh0MkQuZmlsbFJlY3QoXHJcbiAgICAgIHRoaXMubGF5ZXIuY2FudmFzQm91bmQueE1pbixcclxuICAgICAgdGhpcy5sYXllci5jYW52YXNCb3VuZC55TWluLFxyXG4gICAgICB0aGlzLmxheWVyLmNhbnZhc0JvdW5kLndpZHRoLFxyXG4gICAgICB0aGlzLmxheWVyLmNhbnZhc0JvdW5kLmhlaWdodFxyXG4gICAgKTtcclxuICAgIC8vIEZhZGUgZXhpc3RpbmcgcGFydGljbGUgdHJhaWxzLlxyXG4gICAgdGhpcy5jb250ZXh0MkQuZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gXCJsaWdodGVyXCI7XHJcbiAgICB0aGlzLmNvbnRleHQyRC5nbG9iYWxBbHBoYSA9IHRoaXMub3BhY2l0eSA9PT0gMCA/IDAgOiB0aGlzLm9wYWNpdHkgKiAwLjk7XHJcblxyXG4gICAgdGhpcy5hbmltYXRpb25CdWNrZXQuZHJhdyh0aGlzLmNvbnRleHQyRCk7XHJcbiAgfVxyXG5cclxuICBzdG9wKCkge1xyXG4gICAgdGhpcy5wYXJ0aWN1bGVzLnNwbGljZSgwLCB0aGlzLnBhcnRpY3VsZXMubGVuZ3RoKTtcclxuICAgIHRoaXMuYW5pbWF0aW9uQnVja2V0LmNsZWFyKCk7XHJcbiAgICBpZiAodGhpcy5hbmltYXRpb25Mb29wKSB7XHJcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLmFuaW1hdGlvbkxvb3ApO1xyXG4gICAgICB0aGlzLmFuaW1hdGlvbkxvb3AgPSBudWxsO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgQ2FudmFzQm91bmQgZnJvbSBcIi4vY2FudmFzQm91bmRcIjtcclxuaW1wb3J0IE1hcEJvdW5kIGZyb20gXCIuL21hcEJvdW5kXCI7XHJcbmltcG9ydCBXaW5keSBmcm9tIFwiLi93aW5keVwiO1xyXG5pbXBvcnQgQ2FudmFzTGF5ZXIgZnJvbSBcIi4vTC5DYW52YXNMYXllclwiO1xyXG5pbXBvcnQgVmVsb2NpdHlMYXllciBmcm9tIFwiLi9MLlZlbG9jaXR5TGF5ZXJcIjtcclxuaW1wb3J0IENvbnRyb2xWZWxvY2l0eSBmcm9tICcuL0wuQ29udHJvbC5WZWxvY2l0eSc7XHJcblxyXG4oPGFueT53aW5kb3cpLkNhbnZhc0JvdW5kID0gQ2FudmFzQm91bmQ7XHJcbig8YW55PndpbmRvdykuTWFwQm91bmQgPSBNYXBCb3VuZDtcclxuKDxhbnk+d2luZG93KS5XaW5keSA9IFdpbmR5O1xyXG5cclxuZGVjbGFyZSB2YXIgTDogYW55O1xyXG5cclxuTC5DYW52YXNMYXllciA9IChMLkxheWVyID8gTC5MYXllciA6IEwuQ2xhc3MpLmV4dGVuZChuZXcgQ2FudmFzTGF5ZXIoKSk7XHJcbkwuY2FudmFzTGF5ZXIgPSBmdW5jdGlvbiAoKSB7XHJcblx0cmV0dXJuIG5ldyBMLkNhbnZhc0xheWVyKCk7XHJcbn07XHJcblxyXG5MLkNvbnRyb2wuVmVsb2NpdHkgPSAoTC5Db250cm9sKS5leHRlbmQobmV3IENvbnRyb2xWZWxvY2l0eSk7XHJcbkwuY29udHJvbC52ZWxvY2l0eSA9IGZ1bmN0aW9uIChvcHRpb25zOiBhbnkpIHtcclxuXHRyZXR1cm4gbmV3IEwuQ29udHJvbC5WZWxvY2l0eShvcHRpb25zKTtcclxufTtcclxuXHJcbkwuVmVsb2NpdHlMYXllciA9IChMLkxheWVyID8gTC5MYXllciA6IEwuQ2xhc3MpLmV4dGVuZChuZXcgVmVsb2NpdHlMYXllcigpKTtcclxuTC52ZWxvY2l0eUxheWVyID0gZnVuY3Rpb24gKG9wdGlvbnM6IGFueSkge1xyXG5cdHJldHVybiBuZXcgTC5WZWxvY2l0eUxheWVyKG9wdGlvbnMpO1xyXG59O1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=