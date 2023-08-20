/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/Alpha.png */ "./src/images/Alpha.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./images/Beta.png */ "./src/images/Beta.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./images/Gamma.png */ "./src/images/Gamma.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./images/Delta.png */ "./src/images/Delta.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./images/Epsilon.png */ "./src/images/Epsilon.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: green;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

:root {
    --cell-height: 40;
    --cell-width: 40;
}

body {
    margin-top: 20px;
    padding: 5px;
    background: black;
    display: grid; 
    place-items: center;
}

input {
    margin-top: 20px;
    background-color: black;
    border: 2px solid green;
    border-radius: 4px;
    padding: 2px 2px 2px 0.4rem;
}

button {
    margin-top: 20px;
    min-width: 80px;
    border-radius: 4px;
    padding: 4px 8px;
    background-color: transparent;
    border: 2px solid green;
}

button:hover {
    background-color: rgb(38, 38, 38);
}

.reset, .random {
    margin-left: 20px;
}

.submit {
    opacity: 0.5;
}

.cell:hover {
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.5);
}

.cell {
    position: relative;
    height: 40px;
    width: 40px;
    border: 2px solid grey;
    color: white;
    text-align: center;
    font-size: 1.5rem;
}

.gameboard {
    position: relative;
    display: grid;
    place-items: center;
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: repeat(10, 1fr);
    border: 2px solid green;
    margin-top: 20px;
    height: 444px;
    width: 448px;
}

.axis {
    margin-top: 20px;
    color: green;
}

.ship-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 400px;
    border: 2px solid green;  
    margin-top: 20px;
    padding-bottom: 20px;
}

.ship {
    margin: 20px 20px 0 20px;
    height: 40px;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    filter: invert(1);
    z-index: 2;
} 

.alpha {
    width: 84px;
    transform: scale(0.9, 1) translateX(-2px);
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

.beta {
    width: 98px;
    transform: scale(1.3, 0.9) translateX(13px);
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
}

.gamma {
    width: 117px;
    transform: scale(1.1, 0.9) translateX(7px);
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
}

.delta {
    width: 157px;
    transform: scale(1.1, 0.9) translateX(9px);
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_3___});
}

.epsilon {
    width: 181px;
    transform: scale(1.2, 0.9) translateX(16px);
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_4___});
}

.placed {
    margin: 0;
    position: absolute;
    z-index: -1;
}

.overlay-msg {
    position: absolute;
    width: 100%;
    background-color: rgba(200, 200, 200, 0.5);
    font-size: 3rem;
    text-align: center;
    color: blue; 
    top: 50%;
    transition: all 2s;
    transform: translateY(-50%);
    opacity: 0%;
    text-shadow: 2px 2px 8px black;
    pointer-events: none;
}

.end-screen {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: repeat(4, 25vh);
    place-items: center;
    background-color: black;
}

.end-msg {
    grid-row-start: 2;
    text-align: center;
    color: white;
    font-size: 4rem;
    place-self: bottom;
}

.replay {
    grid-row-start: 3;
    font-size: 4rem;
    padding: 1rem;
    padding-bottom: 1.5rem;
    border: 6px solid green;
    border-radius: 20px;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;IACtB,SAAS;IACT,UAAU;IACV,YAAY;IACZ,4DAA4D;AAChE;;AAEA;IACI,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;IAChB,YAAY;IACZ,iBAAiB;IACjB,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;IAChB,uBAAuB;IACvB,uBAAuB;IACvB,kBAAkB;IAClB,2BAA2B;AAC/B;;AAEA;IACI,gBAAgB;IAChB,eAAe;IACf,kBAAkB;IAClB,gBAAgB;IAChB,6BAA6B;IAC7B,uBAAuB;AAC3B;;AAEA;IACI,iCAAiC;AACrC;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,eAAe;IACf,0CAA0C;AAC9C;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,WAAW;IACX,sBAAsB;IACtB,YAAY;IACZ,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,mBAAmB;IACnB,sCAAsC;IACtC,mCAAmC;IACnC,uBAAuB;IACvB,gBAAgB;IAChB,aAAa;IACb,YAAY;AAChB;;AAEA;IACI,gBAAgB;IAChB,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,eAAe;IACf,uBAAuB;IACvB,mBAAmB;IACnB,YAAY;IACZ,uBAAuB;IACvB,gBAAgB;IAChB,oBAAoB;AACxB;;AAEA;IACI,wBAAwB;IACxB,YAAY;IACZ,2BAA2B;IAC3B,wBAAwB;IACxB,4BAA4B;IAC5B,iBAAiB;IACjB,UAAU;AACd;;AAEA;IACI,WAAW;IACX,yCAAyC;IACzC,yDAA2C;AAC/C;;AAEA;IACI,WAAW;IACX,2CAA2C;IAC3C,yDAA0C;AAC9C;;AAEA;IACI,YAAY;IACZ,0CAA0C;IAC1C,yDAA2C;AAC/C;;AAEA;IACI,YAAY;IACZ,0CAA0C;IAC1C,yDAA2C;AAC/C;;AAEA;IACI,YAAY;IACZ,2CAA2C;IAC3C,yDAA6C;AACjD;;AAEA;IACI,SAAS;IACT,kBAAkB;IAClB,WAAW;AACf;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,0CAA0C;IAC1C,eAAe;IACf,kBAAkB;IAClB,WAAW;IACX,QAAQ;IACR,kBAAkB;IAClB,2BAA2B;IAC3B,WAAW;IACX,8BAA8B;IAC9B,oBAAoB;AACxB;;AAEA;IACI,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,WAAW;IACX,YAAY;IACZ,aAAa;IACb,mCAAmC;IACnC,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,iBAAiB;IACjB,kBAAkB;IAClB,YAAY;IACZ,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,iBAAiB;IACjB,eAAe;IACf,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;AACvB","sourcesContent":["* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n    color: green;\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n}\n\n:root {\n    --cell-height: 40;\n    --cell-width: 40;\n}\n\nbody {\n    margin-top: 20px;\n    padding: 5px;\n    background: black;\n    display: grid; \n    place-items: center;\n}\n\ninput {\n    margin-top: 20px;\n    background-color: black;\n    border: 2px solid green;\n    border-radius: 4px;\n    padding: 2px 2px 2px 0.4rem;\n}\n\nbutton {\n    margin-top: 20px;\n    min-width: 80px;\n    border-radius: 4px;\n    padding: 4px 8px;\n    background-color: transparent;\n    border: 2px solid green;\n}\n\nbutton:hover {\n    background-color: rgb(38, 38, 38);\n}\n\n.reset, .random {\n    margin-left: 20px;\n}\n\n.submit {\n    opacity: 0.5;\n}\n\n.cell:hover {\n    cursor: pointer;\n    background-color: rgba(255, 255, 255, 0.5);\n}\n\n.cell {\n    position: relative;\n    height: 40px;\n    width: 40px;\n    border: 2px solid grey;\n    color: white;\n    text-align: center;\n    font-size: 1.5rem;\n}\n\n.gameboard {\n    position: relative;\n    display: grid;\n    place-items: center;\n    grid-template-columns: repeat(10, 1fr);\n    grid-template-rows: repeat(10, 1fr);\n    border: 2px solid green;\n    margin-top: 20px;\n    height: 444px;\n    width: 448px;\n}\n\n.axis {\n    margin-top: 20px;\n    color: green;\n}\n\n.ship-container {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    align-items: center;\n    width: 400px;\n    border: 2px solid green;  \n    margin-top: 20px;\n    padding-bottom: 20px;\n}\n\n.ship {\n    margin: 20px 20px 0 20px;\n    height: 40px;\n    background-position: center;\n    background-size: contain;\n    background-repeat: no-repeat;\n    filter: invert(1);\n    z-index: 2;\n} \n\n.alpha {\n    width: 84px;\n    transform: scale(0.9, 1) translateX(-2px);\n    background-image: url('./images/Alpha.png');\n}\n\n.beta {\n    width: 98px;\n    transform: scale(1.3, 0.9) translateX(13px);\n    background-image: url('./images/Beta.png');\n}\n\n.gamma {\n    width: 117px;\n    transform: scale(1.1, 0.9) translateX(7px);\n    background-image: url('./images/Gamma.png');\n}\n\n.delta {\n    width: 157px;\n    transform: scale(1.1, 0.9) translateX(9px);\n    background-image: url('./images/Delta.png');\n}\n\n.epsilon {\n    width: 181px;\n    transform: scale(1.2, 0.9) translateX(16px);\n    background-image: url('./images/Epsilon.png');\n}\n\n.placed {\n    margin: 0;\n    position: absolute;\n    z-index: -1;\n}\n\n.overlay-msg {\n    position: absolute;\n    width: 100%;\n    background-color: rgba(200, 200, 200, 0.5);\n    font-size: 3rem;\n    text-align: center;\n    color: blue; \n    top: 50%;\n    transition: all 2s;\n    transform: translateY(-50%);\n    opacity: 0%;\n    text-shadow: 2px 2px 8px black;\n    pointer-events: none;\n}\n\n.end-screen {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    display: grid;\n    grid-template-rows: repeat(4, 25vh);\n    place-items: center;\n    background-color: black;\n}\n\n.end-msg {\n    grid-row-start: 2;\n    text-align: center;\n    color: white;\n    font-size: 4rem;\n    place-self: bottom;\n}\n\n.replay {\n    grid-row-start: 3;\n    font-size: 4rem;\n    padding: 1rem;\n    padding-bottom: 1.5rem;\n    border: 6px solid green;\n    border-radius: 20px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


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

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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

"use strict";


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

"use strict";


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

"use strict";


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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

"use strict";


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

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startGame)
/* harmony export */ });
const { styleVertical, player1 } = __webpack_require__(/*! ./gameSetup */ "./src/gameSetup.js");
const Player = __webpack_require__(/*! ./player */ "./src/player.js");
const Ship = __webpack_require__(/*! ./ship */ "./src/ship.js");
const alphaImg = __webpack_require__(/*! ./images/Alpha.png */ "./src/images/Alpha.png");
const betaImg = __webpack_require__(/*! ./images/Beta.png */ "./src/images/Beta.png");
const gammaImg = __webpack_require__(/*! ./images/Gamma.png */ "./src/images/Gamma.png");
const deltaImg = __webpack_require__(/*! ./images/Delta.png */ "./src/images/Delta.png");
const epsilonImg = __webpack_require__(/*! ./images/Epsilon.png */ "./src/images/Epsilon.png");

// import  { styleVertical, player1 } from './gameSetup';
// import Player from './player';
// import Ship from './ship';
// import alphaImg from './images/Alpha.png';
// import betaImg from './images/Beta.png';
// import gammaImg from './images/Gamma.png';
// import deltaImg from './images/Delta.png';
// import epsilonImg from './images/Epsilon.png';

function startGame() {
    console.log('game started')
    const computer = new Player('Computer');
    const playerBoard = document.createElement('div');
    const computerBoard = document.createElement('div');


    renderBoards();

    const alpha = new Image()
    alpha.classList.add('alpha', 'ship', 'placed');
    alpha.src = alphaImg;
    const beta = new Image()
    beta.classList.add('beta', 'ship', 'placed');
    beta.src = betaImg;
    const gamma = new Image()
    gamma.classList.add('gamma', 'ship', 'placed');
    gamma.src = gammaImg;
    const delta = new Image()
    delta.classList.add('delta', 'ship', 'placed');
    delta.src = deltaImg;
    const epsilon = new Image()
    epsilon.classList.add('epsilon', 'ship', 'placed');
    epsilon.src = epsilonImg;

    let playerTurn = true;
    const shipImagePlaced = {alpha: false, beta: false, gamma: false, delta: false, epsilon: false};
    const shipNameToImage = {'alpha': alpha, 'beta': beta, 'gamma': gamma, 'delta': delta, 'epsilon': epsilon};

    setupEventListeners();
    


    function renderBoards() {
        const setupBoard = document.querySelector('.gameboard');
        playerBoard.classList.add('gameboard', 'player-board');
        computerBoard.classList.add('gameboard', 'computer-board');
        for (let i = 0; i < 100; i++) {
            const newPlayerCell = document.createElement('div');
            const newComputerCell = document.createElement('div');
            newPlayerCell.classList.add('cell');
            newComputerCell.classList.add('cell');
            playerBoard.appendChild(newPlayerCell)
            computerBoard.appendChild(newComputerCell);
            const x = i % 10;
            const y = Math.floor(i / 10);
        };
        const gameContainer = document.createElement('div');
        gameContainer.classList.add('game-container');

        const submit = document.querySelector('.submit');
        const reset = document.querySelector('.reset');
        const axis = document.querySelector('.axis-instructions');
        const buttons = document.querySelector('.buttons');
        submit.parentElement.removeChild(submit);
        reset.parentElement.removeChild(reset);
        axis.parentElement.removeChild(axis);
        buttons.parentElement.removeChild(buttons);
        setupBoard.parentElement.removeChild(setupBoard);

        computer.myBoard.setShip(computer.myBoard.ships['alpha'], [0, 0], [1, 0]);
        computer.myBoard.setShip(computer.myBoard.ships['beta'], [0, 1], [2, 1]);
        computer.myBoard.setShip(computer.myBoard.ships['gamma'], [0, 2], [2, 2]);
        computer.myBoard.setShip(computer.myBoard.ships['delta'], [0, 3], [3, 3]);
        computer.myBoard.setShip(computer.myBoard.ships['epsilon'], [0, 4], [4, 4]);

        gameContainer.appendChild(playerBoard);
        gameContainer.appendChild(computerBoard);
        document.body.appendChild(gameContainer);
    };
    
    function playerAttack(x, y) {
        if (!playerTurn) {
            return;
        };
        console.log('player makes attack');
        if (computer.myBoard.receiveAttack(x, y)) {
            return true;
        } else return false;
    };

    function computerAttack(x, y) {
        if (playerTurn) {
            return
        };
        console.log('computer makes attack');
        if (player1.myBoard.receiveAttack(x, y)) {
            return true;
        } else return false;
    };

    function displayMessage(message, element) {
        let oldOverlays = Array.from(document.querySelectorAll('.overlay-msg'));
        for (let i = 0; i < oldOverlays.length; i++) {
            oldOverlays[i].remove();
        };
        const overlayMsg = document.createElement('h1');
        overlayMsg.classList.add('overlay-msg');
        overlayMsg.textContent = message;
        element.appendChild(overlayMsg);
        overlayMsg.style.opacity = '100%';
        setTimeout(() => {overlayMsg.remove()}, 2000);
    };

    function setComputerBoard() {
        const computerCells = document.querySelectorAll('.computer-board > .cell');
        for (let i = 0; i < 100; i++) {
            computerCells[i].style.border = '2px solid red';
            const x = i % 10;
            const y = Math.floor(i / 10);
            computerCells[i].addEventListener('click', () => {
                if (playerTurn && playerAttack(x, y)) {
                    console.log('player hit computer ship');
                    computerCells[i].style.backgroundColor = 'rgba(255, 0, 0, 0.5)';
                    computerCells[i].textContent = 'X';
                    if (computer.myBoard.cells[y][x].isSunk()) {
                        for (let i = 0; i < 100; i++) {
                            const x = i % 10;
                            const y = Math.floor(i / 10);
                            if (computer.myBoard.cells[y][x].isSunk()) {
                                computerCells[i].style.borderColor = 'red';
                                computerCells[i].style.color = 'black';
                            };
                        };
                        console.log('computer ', computer.myBoard.cells[y][x].name, ' is sunk!');
                        displayMessage(`${computer.myBoard.cells[y][x].name.toUpperCase()} SUNK!`, computerBoard);
                        // add image of computer ship to computer board
                        // add some sort of cross out over it?
                        if (computer.myBoard.isGameOver()) {
                            endGame('PLAYER');
                            return
                        };
                    } else {
                        displayMessage('HIT', computerBoard);
                    }
                    playerTurn = !playerTurn;
                } else if (playerTurn) {
                    console.log('player missed');
                    displayMessage('MISS', computerBoard);
                    computerCells[i].style.backgroundColor = 'grey';
                    computerCells[i].textContent = 'O';
                    playerTurn = !playerTurn;
                } else {
                    console.log('not player turn');
                }
            });
        };
    };

    function endGame(winner) {
        console.log('game Over!');
        const endScreen = document.createElement('div');
        endScreen.classList.add('end-screen');
        const endMsg = document.createElement('h1');
        endMsg.classList.add('end-msg');
        endMsg.textContent = `${winner} WON!`;
        endScreen.appendChild(endMsg);
        const replayButton = document.createElement('button');
        replayButton.classList.add('replay');
        replayButton.textContent = 'Play Again';
        endScreen.appendChild(replayButton);
        document.body.appendChild(endScreen);
    };

    function setPlayerBoard() {
        const playerCells = document.querySelectorAll('.player-board > .cell');
        for (let i = 0; i < 100; i++) {
            const x = i % 10;
            const y = Math.floor(i / 10);
            if (player1.myBoard.cells[y][x] instanceof Ship) {
                playerCells[i].style.backgroundColor = 'rgba(0, 255, 0, 0.5)';
            };
            playerCells[i].addEventListener('click', () => {
                if (!playerTurn && computerAttack(x,y)) {
                    console.log('computer hit player ship');
                    displayMessage('HIT', playerBoard);
                    playerCells[i].style.backgroundColor = 'rgba(255, 0, 0, 0.5)';
                    const X = document.createElement('p');
                    X.textContent = 'X';
                    X.style.color = 'white';
                    X.style.fontSize = '1.5rem';
                    playerCells[i].appendChild(X);
                    if (player1.myBoard.cells[y][x].isSunk()) {
                        for (let i = 0; i < 100; i++) {
                            const x = i % 10;
                            const y = Math.floor(i / 10);
                            if (player1.myBoard.cells[y][x].isSunk()) {
                                playerCells[i].style.borderColor = 'red';
                                playerCells[i].children[playerCells[i].children.length - 1].style.color = 'black';
                            };
                        };
                        console.log('player ', player1.myBoard.cells[y][x].name, ' is sunk!');
                        displayMessage(`${player1.myBoard.cells[y][x].name.toUpperCase()} SUNK!`, playerBoard);
                        // add some sort of cross out over player ship?
                        if (player1.myBoard.isGameOver()) {
                            endGame('COMPUTER');
                            return;
                        };
                    };
                    playerTurn = !playerTurn;
                } else if (!playerTurn) {
                    console.log('computer missed');
                    displayMessage('MISS', playerBoard);
                    playerCells[i].style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
                    playerCells[i].textContent = 'O';
                    playerTurn = !playerTurn;
                } else {
                    console.log('not computer turn');
                };
            });
        };
    };


    function addShipImage(shipName) {
        const playerCells = document.querySelectorAll('.player-board > .cell');
        for (let i = 0; i < 100; i++) {
            const x = i % 10;
            const y = Math.floor(i / 10);
            if (player1.myBoard.cells[y][x] instanceof Ship && player1.myBoard.cells[y][x].name === shipName && !shipImagePlaced[shipName]) {
                if (player1.myBoard.cells[y][x+1] !== player1.myBoard.cells[y][x]) {
                    styleVertical(shipNameToImage[shipName], player1.myBoard.cells[y][x].length);
                };
                playerCells[i].appendChild(shipNameToImage[shipName]);
                shipImagePlaced[shipName] = true;
            };
        };
    };

    function setupEventListeners() {
        setComputerBoard();
        setPlayerBoard();
        addShipImage('alpha');
        addShipImage('beta');
        addShipImage('gamma');
        addShipImage('delta');
        addShipImage('epsilon');
    };
};


/***/ }),

/***/ "./src/gameSetup.js":
/*!**************************!*\
  !*** ./src/gameSetup.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   player1: () => (/* binding */ player1),
/* harmony export */   styleVertical: () => (/* binding */ styleVertical)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ "./src/player.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_player__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ship */ "./src/ship.js");
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ship__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./game */ "./src/game.js");
/* harmony import */ var _images_Alpha_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/Alpha.png */ "./src/images/Alpha.png");
/* harmony import */ var _images_Beta_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/Beta.png */ "./src/images/Beta.png");
/* harmony import */ var _images_Gamma_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/Gamma.png */ "./src/images/Gamma.png");
/* harmony import */ var _images_Delta_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/Delta.png */ "./src/images/Delta.png");
/* harmony import */ var _images_Epsilon_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/Epsilon.png */ "./src/images/Epsilon.png");










const player1 = new (_player__WEBPACK_IMPORTED_MODULE_1___default())('player1');
const random = document.querySelector('.random');
const reset = document.querySelector('.reset');
const submit = document.querySelector('.submit');
const shipContainer = document.querySelector('.ship-container');
const axis = document.querySelector('.axis');
const alpha = document.querySelector('.alpha');
const beta = document.querySelector('.beta');
const gamma = document.querySelector('.gamma');
const delta = document.querySelector('.delta');
const epsilon = document.querySelector('.epsilon');
const board = document.querySelector('.gameboard');
const ships = [alpha, beta, gamma, delta, epsilon];
const cells = Array.from(document.querySelectorAll('.cell'));
let currentShip;
let vertical = false;

function selectShip(event) { 
    const shipElem = event.target;
    currentShip = shipElem;
    alpha.style.border = beta.style.border = gamma.style.border = delta.style.border = epsilon.style.border = '';
    currentShip.style.border = '2px solid black';       
};

function updateCellStyling() {
    for (let i = 0; i < player1.myBoard.cells.length; i++) {
        for (let j = 0; j < player1.myBoard.cells[i].length; j++) {
            if (player1.myBoard.cells[i][j] instanceof (_ship__WEBPACK_IMPORTED_MODULE_2___default())) {
                cells[i * 10 + j].style.backgroundColor = 'rgba(0, 255, 0, 0.5)'
            } else {
                cells[i * 10 + j].style.backgroundColor = '';
            };
        };
    };
}

function removeShip(ship) { // needs work
    ship.parentElement.removeChild(ship);
    const shipName = ship.classList[1];
    player1.myBoard.removeShip(shipName);
    ship.style.pointerEvents = '';
    updateCellStyling();
    disallowSubmit();
};

function disallowSubmit() {
    submit.style.opacity = 0.5;
    submit.removeEventListener('click', submitBoard);
};

function allowSubmit() {
    submit.style.opacity = 1;
    submit.addEventListener('click', submitBoard);
};

function submitBoard() {
    (0,_game__WEBPACK_IMPORTED_MODULE_3__["default"])();
};

function flipAxis() { 
    vertical = !vertical;
    axis.textContent = vertical ? 'VERTICAL' : 'HORIZONTAL';
};

function clearBoard() { 
    player1.myBoard.resetBoard();
    alpha.parentElement.removeChild(alpha);
    if (alpha.classList.contains('placed')) alpha.classList.remove('placed');
    alpha.style.transform = '';
    beta.parentElement.removeChild(beta);
    if (beta.classList.contains('placed')) beta.classList.remove('placed');
    beta.style.transform = '';
    gamma.parentElement.removeChild(gamma);
    if (gamma.classList.contains('placed')) gamma.classList.remove('placed');
    gamma.style.transform= '';
    delta.parentElement.removeChild(delta);
    if (delta.classList.contains('placed')) delta.classList.remove('placed');
    delta.style.transform = '';
    epsilon.parentElement.removeChild(epsilon);
    if (epsilon.classList.contains('placed')) epsilon.classList.remove('placed');
    epsilon.style.transform = '';

    if (!shipContainer.parentElement !== document.body) {
        document.body.appendChild(shipContainer)
    };

    shipContainer.appendChild(alpha);
    shipContainer.appendChild(beta);
    shipContainer.appendChild(gamma);
    shipContainer.appendChild(delta);
    shipContainer.appendChild(epsilon);

    Array.from(document.querySelectorAll('.cell')).forEach((elem) => elem.style.backgroundColor = '');
};

function findIndex(cell) {
    const parent = cell.parentElement;
    const children = Array.from(parent.children);
    return children.indexOf(cell);
};

function placeShip(index) { 
    if (!currentShip) return;

    if (currentShip.classList.contains('placed')) {
        removeShip(currentShip);
    }
    const ship = currentShip.classList[1];
    const length = player1.myBoard.ships[ship].length
    const startX = index % 10;
    const startY = Math.floor(index / 10);
    let endX;
    let endY;
    if (vertical) {
        endX = startX     
        endY = startY + (length - 1);
    } else {
        endX = startX + (length - 1);
        endY = startY;
    };
    const start = [startX, startY];
    const end = [endX, endY];
    if (!player1.myBoard.setShip(player1[ship], start, end)) {
        return
    };
    cells[index].appendChild(currentShip);
    updateCellStyling();

    if (vertical) {
        styleVertical(currentShip, length);
    } else {
        currentShip.style.transform = '';
        currentShip.style.top = '';
        currentShip.style.left = '';
    };

    if (!currentShip.classList.contains('placed')) {
        currentShip.classList.add('placed');
        currentShip.pointerEvents = 'none';
    };

    let shipsPlacedCount = 0
    ships.forEach((ship) => {
        if (ship.classList.contains('placed')) {
            shipsPlacedCount++;
        };
    });
    if (shipsPlacedCount === 5) {
        document.body.removeChild(shipContainer);
        allowSubmit();
    };
    return true;
};

function styleVertical(ship, length) { 
    ship.style.transform = 'rotate(90deg)';
    ship.style.top = `${(44 * (0.5 * (length - 1)))}px`;
    ship.style.left = `-${(44 * (0.5 * (length - 1))) - (length - 2) * 6}px`;
    if (ship.classList[1] === 'beta') {
        ship.style.left = `-${(44 * (0.5 * (length - 1))) - (length - 2) * 18}px`;
    };
};

function handleCellClick(event) {
    if (event.target.classList.contains('cell')) {
        placeShip(findIndex(event.target));
    };
};

function setupEventListeners() {

    for (let i = 0; i < ships.length; i++) {
        ships[i].addEventListener('click', selectShip);
    };

    for (let i = 0; i < cells.length; i++) {
        cells[i].addEventListener('click', handleCellClick);



        cells[i].addEventListener('mouseenter', e => {
            if (!currentShip) {
                updateCellStyling();
                return;
            };

            currentShip.style.pointerEvents = 'none';
            updateCellStyling();

            const ship = currentShip.classList[1];
            const length = player1.myBoard.ships[ship].length;
            for (let j = 0; j < length; j++) {
                if (vertical) {
                    if (i + (length - 1) * 10 > 99 && i + j * 10 < 99) { // if the end of the ship goes out of bounds
                        cells[i + j * 10].style.backgroundColor = 'red';
                    } else if (i + j * 10 < 100) {
                        if (cells[i + j * 10].style.backgroundColor === 'rgba(0, 255, 0, 0.5') {
                            cells[i + j * 10].style.backgroundColor = 'rgba(255, 0, 0, 0.5)';
                        } else {
                            cells[i + j * 10].style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
                        }
                    };
                } else {
                    if (i % 10 + length > 10 && i % 10 + j < 10) {
                        cells[i + j].style.backgroundColor = 'rgba(255, 0, 0, 0.5)';
                    } else if (i % 10 + j < 10) {
                        if (cells[i + j].style.backgroundColor === 'rgba(0, 255, 0, 0.5)') {
                            for (let k = 0; k < length; k++) {
                            cells[i + j].style.backgroundColor = 'rgba(255, 0, 0, 0.5)';
                            }
                        } else {
                            cells[i + j].style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
                        };
                    };
                };
            };
        });
    };

    function getRandomTFIndex() {
        return Math.floor(Math.random() * 2);
    };

    function getRandomCellIndex() {
        return Math.floor(Math.random() * 100);
    };

    function placeShipsRandomly() {
        clearBoard(); 
        const tf = [true, false];
        currentShip = alpha;
        vertical = tf[getRandomTFIndex()];
        while (!placeShip(getRandomCellIndex())) {
        };
        vertical = tf[getRandomTFIndex()];
        currentShip = beta; 
        while (!placeShip(getRandomCellIndex())) {
        };
        vertical = tf[getRandomTFIndex()];
        currentShip = gamma;
        while (!placeShip(getRandomCellIndex())) {
        };
        vertical = tf[getRandomTFIndex()];
        currentShip = delta;
        while (!placeShip(getRandomCellIndex())) {
        };
        vertical = tf[getRandomTFIndex()];
        currentShip = epsilon;
        while (!placeShip(getRandomCellIndex())) {
        };
        vertical = false;
    };

    board.addEventListener('mouseleave', e => {
        updateCellStyling();
    });

    reset.addEventListener('click', clearBoard);
    random.addEventListener('click', placeShipsRandomly);

    window.addEventListener('click', e => {
        if (!e.target.classList.contains('ship') && currentShip) {
            currentShip.style.border = 'none';
            if (!e.target.classList.contains('cell')) {
                currentShip = undefined;
            };
        };
        if (!currentShip) {
            ships.forEach((ship) => ship.style.pointerEvents = '');
        };
    });

    window.addEventListener('keydown', (e) => {
        if (e.key === 'Shift' && !vertical) {
            flipAxis();
        };
    });

    window.addEventListener('keyup', (e) => {
        if (e.key === 'Shift' && vertical) {
            flipAxis();
        };
    });
};

setupEventListeners();



/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const Ship = __webpack_require__(/*! ./ship.js */ "./src/ship.js");

// export default class Gameboard {
class Gameboard {
    ships = this.#createShips();
    cells = this.#createEmptyBoard();
    #attacks = [];
    #misses = [];
    #placedShips = [];

    resetBoard() {
        this.cells = this.#createEmptyBoard();
    };

    #createShips() {
        const shipObject = {};
        shipObject['alpha'] = new Ship(2);
        shipObject['alpha'].name = 'alpha';
        shipObject['beta'] = new Ship(3);
        shipObject['beta'].name = 'beta';
        shipObject['gamma'] = new Ship(3);
        shipObject['gamma'].name = 'gamma';
        shipObject['delta'] = new Ship(4);
        shipObject['delta'].name = 'delta';
        shipObject['epsilon'] = new Ship(5)
        shipObject['epsilon'].name = 'epsilon';

        return shipObject;
    };

    #createEmptyBoard() {
        const w = 10;
        const h = 10;
        const board = [];
        for (let i = 0; i < w; i++) {
            board.push([])
            for (let j = 0; j < h; j++) {
                const emptyCell = {
                    hit: () => {
                        return false
                    }, 
                    isSunk: () => null,
                };
                board[i].push(emptyCell);
            };
        };
        return board;
    };

    receiveAttack(x, y) {
        const attackCoord = [y, x];
        for (let i = 0; i < this.#attacks.length; i++) {
            if (attackCoord.every((val, index) => val === this.#attacks[i][index])) {
                return;
            }
        }
        if (this.cells[y][x].hit()) {
            this.#attacks.push([y, x]);
            return true
        } else {
            this.#attacks.push([y, x]);
            this.#misses.push([y, x]);
            return false
        };
    };

    removeShip(shipName) {
        const emptyCell = {
            hit: () => {
                return false
            }, 
            isSunk: () => null
        };

        for (let i = 0; i < this.cells.length; i++) {
            for (let j = 0; j < this.cells[i].length; j++) {
                if (this.cells[i][j] instanceof Ship) {
                    if (this.cells[i][j].name === shipName) {
                        this.cells[i][j] = emptyCell
                    };
                };
            };
        };

        for (let i = 0; i < this.#placedShips.length; i++) {
            if (shipName === this.#placedShips[i]) {
                this.#placedShips.splice(i, 1);
            };
        };
    };

    setShip(ship, start, end) {
        if (
        start[1] > 9 || start[0] > 9 ||
        end[1] > 9 || end[0] > 9 ||
        start[1] < 0 || start[0] < 0 ||
        end[1] < 0 || end[0] < 0
        ) return false; 

        if (this.#placedShips.includes(ship.name)) {
            this.removeShip(ship);
        }

        if (start[1] === end[1]) {
            // vertical
            if (start[0] < end[0]) {
                // go down
                for (let i = 0; i < ship.length; i++) {
                    if (this.cells[start[1]][start[0] + i] instanceof Ship) {
                        this.removeShip(ship.name);
                        return false; 
                    };
                    this.cells[start[1]][start[0] + i] = ship;
                };
            } else {
                // go up
                for (let i = 0; i < ship.length; i++) {
                    if (this.cells[start[1]][start[0] - i] instanceof Ship) {
                        this.removeShip(ship.name);
                        return false; 
                    };
                    this.cells[start[1]][start[0] - i] = ship;
                };
            };
        } else {
            // horizontal
            if (start[1] < end[1]) {
                // go right
                for (let i = 0; i < ship.length; i++) {
                    if (this.cells[start[1] + i][start[0]] instanceof Ship) {
                        this.removeShip(ship.name);
                        return false; 
                    };
                    this.cells[start[1] + i][start[0]] = ship;
                };
            } else {
                // go left
                for (let i = 0; i < ship.length; i++) {
                    if (this.cells[start[1] - i][start[0]] instanceof Ship) {
                        this.removeShip(ship.name);
                        return false;
                    };
                    this.cells[start[1] - i][start[0]] = ship;
                };
            };
        };
        this.#placedShips.push(ship.name);
        return true;
    };

    isGameOver() {
        for (let ship in this.ships) {
            if (!this.ships[ship].isSunk()) {
                return false;
            };
        };
        return true;
    };
};
module.exports = Gameboard;


/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const Gameboard = __webpack_require__(/*! ./gameboard.js */ "./src/gameboard.js");

// export default class Player {
class Player {
    myName; 
    myBoard = new Gameboard;
    alpha = this.myBoard.ships['alpha'];
    beta = this.myBoard.ships['beta'];
    gamma = this.myBoard.ships['gamma'];
    delta = this.myBoard.ships['delta'];
    epsilon = this.myBoard.ships['epsilon'];

    constructor(name) {
        this.myName = name;
    }

    attackCell(x, y) {
        return this.myBoard.receiveAttack(x, y);
    }
    
    placeAlpha(start, end) {
        this.myBoard.setShip(this.alpha, start, end)
    }

    placeBeta(start, end) {
        this.myBoard.setShip(this.beta, start, end)
    }

    placeGamma(start, end) {
        this.myBoard.setShip(this.gamma, start, end)
    }

    placeDelta(start, end) {
        this.myBoard.setShip(this.delta, start, end)
    }

    placeEpsilon(start, end) {
        this.myBoard.setShip(this.epsilon, start, end)
    }
};
module.exports = Player;


/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((module) => {

//export default class Ship {
class Ship {
    length;
    numOfHits;
    name;

    constructor(len) {
        this.length = len;
        this.numOfHits = 0;
    };

    hit() {
        this.numOfHits++;
        return true;
    };

    isSunk() {
        if (this.numOfHits >= this.length) return true;
        else return false;
    };

};
module.exports = Ship;


/***/ }),

/***/ "./src/images/Alpha.png":
/*!******************************!*\
  !*** ./src/images/Alpha.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "4fd2861d699db13279b4.png";

/***/ }),

/***/ "./src/images/Beta.png":
/*!*****************************!*\
  !*** ./src/images/Beta.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "b5854524bb6935fd4b11.png";

/***/ }),

/***/ "./src/images/Delta.png":
/*!******************************!*\
  !*** ./src/images/Delta.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "7e996c8742f62e4b551c.png";

/***/ }),

/***/ "./src/images/Epsilon.png":
/*!********************************!*\
  !*** ./src/images/Epsilon.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "7767f265e2abd982553f.png";

/***/ }),

/***/ "./src/images/Gamma.png":
/*!******************************!*\
  !*** ./src/images/Gamma.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "513724afc04b9264c6f6.png";

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/gameSetup.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUN4Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ3RCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7OztVRUFBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL2dhbWUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL2dhbWVTZXR1cC5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL3NoaXAuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vaW1hZ2VzL0FscGhhLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vaW1hZ2VzL0JldGEucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMvR2FtbWEucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMvRGVsdGEucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMvRXBzaWxvbi5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGNvbG9yOiBncmVlbjtcbiAgICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG59XG5cbjpyb290IHtcbiAgICAtLWNlbGwtaGVpZ2h0OiA0MDtcbiAgICAtLWNlbGwtd2lkdGg6IDQwO1xufVxuXG5ib2R5IHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgICBkaXNwbGF5OiBncmlkOyBcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xufVxuXG5pbnB1dCB7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBib3JkZXI6IDJweCBzb2xpZCBncmVlbjtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgcGFkZGluZzogMnB4IDJweCAycHggMC40cmVtO1xufVxuXG5idXR0b24ge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgbWluLXdpZHRoOiA4MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBwYWRkaW5nOiA0cHggOHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIGdyZWVuO1xufVxuXG5idXR0b246aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzOCwgMzgsIDM4KTtcbn1cblxuLnJlc2V0LCAucmFuZG9tIHtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbn1cblxuLnN1Ym1pdCB7XG4gICAgb3BhY2l0eTogMC41O1xufVxuXG4uY2VsbDpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbn1cblxuLmNlbGwge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgYm9yZGVyOiAycHggc29saWQgZ3JleTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuXG4uZ2FtZWJvYXJkIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIGdyZWVuO1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgaGVpZ2h0OiA0NDRweDtcbiAgICB3aWR0aDogNDQ4cHg7XG59XG5cbi5heGlzIHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIGNvbG9yOiBncmVlbjtcbn1cblxuLnNoaXAtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiA0MDBweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCBncmVlbjsgIFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG5cbi5zaGlwIHtcbiAgICBtYXJnaW46IDIwcHggMjBweCAwIDIwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBmaWx0ZXI6IGludmVydCgxKTtcbiAgICB6LWluZGV4OiAyO1xufSBcblxuLmFscGhhIHtcbiAgICB3aWR0aDogODRweDtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOSwgMSkgdHJhbnNsYXRlWCgtMnB4KTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG59XG5cbi5iZXRhIHtcbiAgICB3aWR0aDogOThweDtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMywgMC45KSB0cmFuc2xhdGVYKDEzcHgpO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KTtcbn1cblxuLmdhbW1hIHtcbiAgICB3aWR0aDogMTE3cHg7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEsIDAuOSkgdHJhbnNsYXRlWCg3cHgpO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX199KTtcbn1cblxuLmRlbHRhIHtcbiAgICB3aWR0aDogMTU3cHg7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEsIDAuOSkgdHJhbnNsYXRlWCg5cHgpO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX199KTtcbn1cblxuLmVwc2lsb24ge1xuICAgIHdpZHRoOiAxODFweDtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMiwgMC45KSB0cmFuc2xhdGVYKDE2cHgpO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX199KTtcbn1cblxuLnBsYWNlZCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAtMTtcbn1cblxuLm92ZXJsYXktbXNnIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMDAsIDIwMCwgMjAwLCAwLjUpO1xuICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6IGJsdWU7IFxuICAgIHRvcDogNTAlO1xuICAgIHRyYW5zaXRpb246IGFsbCAycztcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgb3BhY2l0eTogMCU7XG4gICAgdGV4dC1zaGFkb3c6IDJweCAycHggOHB4IGJsYWNrO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4uZW5kLXNjcmVlbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDQsIDI1dmgpO1xuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG59XG5cbi5lbmQtbXNnIHtcbiAgICBncmlkLXJvdy1zdGFydDogMjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogNHJlbTtcbiAgICBwbGFjZS1zZWxmOiBib3R0b207XG59XG5cbi5yZXBsYXkge1xuICAgIGdyaWQtcm93LXN0YXJ0OiAzO1xuICAgIGZvbnQtc2l6ZTogNHJlbTtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIHBhZGRpbmctYm90dG9tOiAxLjVyZW07XG4gICAgYm9yZGVyOiA2cHggc29saWQgZ3JlZW47XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxzQkFBc0I7SUFDdEIsU0FBUztJQUNULFVBQVU7SUFDVixZQUFZO0lBQ1osNERBQTREO0FBQ2hFOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLDZCQUE2QjtJQUM3Qix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLDBDQUEwQztBQUM5Qzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osV0FBVztJQUNYLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHNDQUFzQztJQUN0QyxtQ0FBbUM7SUFDbkMsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixZQUFZO0lBQ1osMkJBQTJCO0lBQzNCLHdCQUF3QjtJQUN4Qiw0QkFBNEI7SUFDNUIsaUJBQWlCO0lBQ2pCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFdBQVc7SUFDWCx5Q0FBeUM7SUFDekMseURBQTJDO0FBQy9DOztBQUVBO0lBQ0ksV0FBVztJQUNYLDJDQUEyQztJQUMzQyx5REFBMEM7QUFDOUM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osMENBQTBDO0lBQzFDLHlEQUEyQztBQUMvQzs7QUFFQTtJQUNJLFlBQVk7SUFDWiwwQ0FBMEM7SUFDMUMseURBQTJDO0FBQy9DOztBQUVBO0lBQ0ksWUFBWTtJQUNaLDJDQUEyQztJQUMzQyx5REFBNkM7QUFDakQ7O0FBRUE7SUFDSSxTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsMENBQTBDO0lBQzFDLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFFBQVE7SUFDUixrQkFBa0I7SUFDbEIsMkJBQTJCO0lBQzNCLFdBQVc7SUFDWCw4QkFBOEI7SUFDOUIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUNBQW1DO0lBQ25DLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgY29sb3I6IGdyZWVuO1xcbiAgICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxufVxcblxcbjpyb290IHtcXG4gICAgLS1jZWxsLWhlaWdodDogNDA7XFxuICAgIC0tY2VsbC13aWR0aDogNDA7XFxufVxcblxcbmJvZHkge1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xcbiAgICBkaXNwbGF5OiBncmlkOyBcXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuaW5wdXQge1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgYm9yZGVyOiAycHggc29saWQgZ3JlZW47XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgcGFkZGluZzogMnB4IDJweCAycHggMC40cmVtO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgICBtaW4td2lkdGg6IDgwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgcGFkZGluZzogNHB4IDhweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGdyZWVuO1xcbn1cXG5cXG5idXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzgsIDM4LCAzOCk7XFxufVxcblxcbi5yZXNldCwgLnJhbmRvbSB7XFxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xcbn1cXG5cXG4uc3VibWl0IHtcXG4gICAgb3BhY2l0eTogMC41O1xcbn1cXG5cXG4uY2VsbDpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xcbn1cXG5cXG4uY2VsbCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICB3aWR0aDogNDBweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgZ3JleTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4uZ2FtZWJvYXJkIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGdyZWVuO1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgICBoZWlnaHQ6IDQ0NHB4O1xcbiAgICB3aWR0aDogNDQ4cHg7XFxufVxcblxcbi5heGlzIHtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG4gICAgY29sb3I6IGdyZWVuO1xcbn1cXG5cXG4uc2hpcC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogNDAwcHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGdyZWVuOyAgXFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xcbn1cXG5cXG4uc2hpcCB7XFxuICAgIG1hcmdpbjogMjBweCAyMHB4IDAgMjBweDtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgZmlsdGVyOiBpbnZlcnQoMSk7XFxuICAgIHotaW5kZXg6IDI7XFxufSBcXG5cXG4uYWxwaGEge1xcbiAgICB3aWR0aDogODRweDtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjksIDEpIHRyYW5zbGF0ZVgoLTJweCk7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi9pbWFnZXMvQWxwaGEucG5nJyk7XFxufVxcblxcbi5iZXRhIHtcXG4gICAgd2lkdGg6IDk4cHg7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4zLCAwLjkpIHRyYW5zbGF0ZVgoMTNweCk7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi9pbWFnZXMvQmV0YS5wbmcnKTtcXG59XFxuXFxuLmdhbW1hIHtcXG4gICAgd2lkdGg6IDExN3B4O1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSwgMC45KSB0cmFuc2xhdGVYKDdweCk7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi9pbWFnZXMvR2FtbWEucG5nJyk7XFxufVxcblxcbi5kZWx0YSB7XFxuICAgIHdpZHRoOiAxNTdweDtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEsIDAuOSkgdHJhbnNsYXRlWCg5cHgpO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vaW1hZ2VzL0RlbHRhLnBuZycpO1xcbn1cXG5cXG4uZXBzaWxvbiB7XFxuICAgIHdpZHRoOiAxODFweDtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIsIDAuOSkgdHJhbnNsYXRlWCgxNnB4KTtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL2ltYWdlcy9FcHNpbG9uLnBuZycpO1xcbn1cXG5cXG4ucGxhY2VkIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHotaW5kZXg6IC0xO1xcbn1cXG5cXG4ub3ZlcmxheS1tc2cge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwMCwgMjAwLCAyMDAsIDAuNSk7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBjb2xvcjogYmx1ZTsgXFxuICAgIHRvcDogNTAlO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMnM7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG4gICAgb3BhY2l0eTogMCU7XFxuICAgIHRleHQtc2hhZG93OiAycHggMnB4IDhweCBibGFjaztcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi5lbmQtc2NyZWVuIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDQsIDI1dmgpO1xcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuXFxuLmVuZC1tc2cge1xcbiAgICBncmlkLXJvdy1zdGFydDogMjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogNHJlbTtcXG4gICAgcGxhY2Utc2VsZjogYm90dG9tO1xcbn1cXG5cXG4ucmVwbGF5IHtcXG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDM7XFxuICAgIGZvbnQtc2l6ZTogNHJlbTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgcGFkZGluZy1ib3R0b206IDEuNXJlbTtcXG4gICAgYm9yZGVyOiA2cHggc29saWQgZ3JlZW47XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgeyBzdHlsZVZlcnRpY2FsLCBwbGF5ZXIxIH0gPSByZXF1aXJlKCcuL2dhbWVTZXR1cCcpO1xuY29uc3QgUGxheWVyID0gcmVxdWlyZSgnLi9wbGF5ZXInKTtcbmNvbnN0IFNoaXAgPSByZXF1aXJlKCcuL3NoaXAnKTtcbmNvbnN0IGFscGhhSW1nID0gcmVxdWlyZSgnLi9pbWFnZXMvQWxwaGEucG5nJyk7XG5jb25zdCBiZXRhSW1nID0gcmVxdWlyZSgnLi9pbWFnZXMvQmV0YS5wbmcnKTtcbmNvbnN0IGdhbW1hSW1nID0gcmVxdWlyZSgnLi9pbWFnZXMvR2FtbWEucG5nJyk7XG5jb25zdCBkZWx0YUltZyA9IHJlcXVpcmUoJy4vaW1hZ2VzL0RlbHRhLnBuZycpO1xuY29uc3QgZXBzaWxvbkltZyA9IHJlcXVpcmUoJy4vaW1hZ2VzL0Vwc2lsb24ucG5nJyk7XG5cbi8vIGltcG9ydCAgeyBzdHlsZVZlcnRpY2FsLCBwbGF5ZXIxIH0gZnJvbSAnLi9nYW1lU2V0dXAnO1xuLy8gaW1wb3J0IFBsYXllciBmcm9tICcuL3BsYXllcic7XG4vLyBpbXBvcnQgU2hpcCBmcm9tICcuL3NoaXAnO1xuLy8gaW1wb3J0IGFscGhhSW1nIGZyb20gJy4vaW1hZ2VzL0FscGhhLnBuZyc7XG4vLyBpbXBvcnQgYmV0YUltZyBmcm9tICcuL2ltYWdlcy9CZXRhLnBuZyc7XG4vLyBpbXBvcnQgZ2FtbWFJbWcgZnJvbSAnLi9pbWFnZXMvR2FtbWEucG5nJztcbi8vIGltcG9ydCBkZWx0YUltZyBmcm9tICcuL2ltYWdlcy9EZWx0YS5wbmcnO1xuLy8gaW1wb3J0IGVwc2lsb25JbWcgZnJvbSAnLi9pbWFnZXMvRXBzaWxvbi5wbmcnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydEdhbWUoKSB7XG4gICAgY29uc29sZS5sb2coJ2dhbWUgc3RhcnRlZCcpXG4gICAgY29uc3QgY29tcHV0ZXIgPSBuZXcgUGxheWVyKCdDb21wdXRlcicpO1xuICAgIGNvbnN0IHBsYXllckJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgY29tcHV0ZXJCb2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG5cbiAgICByZW5kZXJCb2FyZHMoKTtcblxuICAgIGNvbnN0IGFscGhhID0gbmV3IEltYWdlKClcbiAgICBhbHBoYS5jbGFzc0xpc3QuYWRkKCdhbHBoYScsICdzaGlwJywgJ3BsYWNlZCcpO1xuICAgIGFscGhhLnNyYyA9IGFscGhhSW1nO1xuICAgIGNvbnN0IGJldGEgPSBuZXcgSW1hZ2UoKVxuICAgIGJldGEuY2xhc3NMaXN0LmFkZCgnYmV0YScsICdzaGlwJywgJ3BsYWNlZCcpO1xuICAgIGJldGEuc3JjID0gYmV0YUltZztcbiAgICBjb25zdCBnYW1tYSA9IG5ldyBJbWFnZSgpXG4gICAgZ2FtbWEuY2xhc3NMaXN0LmFkZCgnZ2FtbWEnLCAnc2hpcCcsICdwbGFjZWQnKTtcbiAgICBnYW1tYS5zcmMgPSBnYW1tYUltZztcbiAgICBjb25zdCBkZWx0YSA9IG5ldyBJbWFnZSgpXG4gICAgZGVsdGEuY2xhc3NMaXN0LmFkZCgnZGVsdGEnLCAnc2hpcCcsICdwbGFjZWQnKTtcbiAgICBkZWx0YS5zcmMgPSBkZWx0YUltZztcbiAgICBjb25zdCBlcHNpbG9uID0gbmV3IEltYWdlKClcbiAgICBlcHNpbG9uLmNsYXNzTGlzdC5hZGQoJ2Vwc2lsb24nLCAnc2hpcCcsICdwbGFjZWQnKTtcbiAgICBlcHNpbG9uLnNyYyA9IGVwc2lsb25JbWc7XG5cbiAgICBsZXQgcGxheWVyVHVybiA9IHRydWU7XG4gICAgY29uc3Qgc2hpcEltYWdlUGxhY2VkID0ge2FscGhhOiBmYWxzZSwgYmV0YTogZmFsc2UsIGdhbW1hOiBmYWxzZSwgZGVsdGE6IGZhbHNlLCBlcHNpbG9uOiBmYWxzZX07XG4gICAgY29uc3Qgc2hpcE5hbWVUb0ltYWdlID0geydhbHBoYSc6IGFscGhhLCAnYmV0YSc6IGJldGEsICdnYW1tYSc6IGdhbW1hLCAnZGVsdGEnOiBkZWx0YSwgJ2Vwc2lsb24nOiBlcHNpbG9ufTtcblxuICAgIHNldHVwRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICBcblxuXG4gICAgZnVuY3Rpb24gcmVuZGVyQm9hcmRzKCkge1xuICAgICAgICBjb25zdCBzZXR1cEJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWVib2FyZCcpO1xuICAgICAgICBwbGF5ZXJCb2FyZC5jbGFzc0xpc3QuYWRkKCdnYW1lYm9hcmQnLCAncGxheWVyLWJvYXJkJyk7XG4gICAgICAgIGNvbXB1dGVyQm9hcmQuY2xhc3NMaXN0LmFkZCgnZ2FtZWJvYXJkJywgJ2NvbXB1dGVyLWJvYXJkJyk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTAwOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IG5ld1BsYXllckNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGNvbnN0IG5ld0NvbXB1dGVyQ2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgbmV3UGxheWVyQ2VsbC5jbGFzc0xpc3QuYWRkKCdjZWxsJyk7XG4gICAgICAgICAgICBuZXdDb21wdXRlckNlbGwuY2xhc3NMaXN0LmFkZCgnY2VsbCcpO1xuICAgICAgICAgICAgcGxheWVyQm9hcmQuYXBwZW5kQ2hpbGQobmV3UGxheWVyQ2VsbClcbiAgICAgICAgICAgIGNvbXB1dGVyQm9hcmQuYXBwZW5kQ2hpbGQobmV3Q29tcHV0ZXJDZWxsKTtcbiAgICAgICAgICAgIGNvbnN0IHggPSBpICUgMTA7XG4gICAgICAgICAgICBjb25zdCB5ID0gTWF0aC5mbG9vcihpIC8gMTApO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCBnYW1lQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGdhbWVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZ2FtZS1jb250YWluZXInKTtcblxuICAgICAgICBjb25zdCBzdWJtaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3VibWl0Jyk7XG4gICAgICAgIGNvbnN0IHJlc2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc2V0Jyk7XG4gICAgICAgIGNvbnN0IGF4aXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXhpcy1pbnN0cnVjdGlvbnMnKTtcbiAgICAgICAgY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b25zJyk7XG4gICAgICAgIHN1Ym1pdC5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKHN1Ym1pdCk7XG4gICAgICAgIHJlc2V0LnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQocmVzZXQpO1xuICAgICAgICBheGlzLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoYXhpcyk7XG4gICAgICAgIGJ1dHRvbnMucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChidXR0b25zKTtcbiAgICAgICAgc2V0dXBCb2FyZC5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKHNldHVwQm9hcmQpO1xuXG4gICAgICAgIGNvbXB1dGVyLm15Qm9hcmQuc2V0U2hpcChjb21wdXRlci5teUJvYXJkLnNoaXBzWydhbHBoYSddLCBbMCwgMF0sIFsxLCAwXSk7XG4gICAgICAgIGNvbXB1dGVyLm15Qm9hcmQuc2V0U2hpcChjb21wdXRlci5teUJvYXJkLnNoaXBzWydiZXRhJ10sIFswLCAxXSwgWzIsIDFdKTtcbiAgICAgICAgY29tcHV0ZXIubXlCb2FyZC5zZXRTaGlwKGNvbXB1dGVyLm15Qm9hcmQuc2hpcHNbJ2dhbW1hJ10sIFswLCAyXSwgWzIsIDJdKTtcbiAgICAgICAgY29tcHV0ZXIubXlCb2FyZC5zZXRTaGlwKGNvbXB1dGVyLm15Qm9hcmQuc2hpcHNbJ2RlbHRhJ10sIFswLCAzXSwgWzMsIDNdKTtcbiAgICAgICAgY29tcHV0ZXIubXlCb2FyZC5zZXRTaGlwKGNvbXB1dGVyLm15Qm9hcmQuc2hpcHNbJ2Vwc2lsb24nXSwgWzAsIDRdLCBbNCwgNF0pO1xuXG4gICAgICAgIGdhbWVDb250YWluZXIuYXBwZW5kQ2hpbGQocGxheWVyQm9hcmQpO1xuICAgICAgICBnYW1lQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbXB1dGVyQm9hcmQpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGdhbWVDb250YWluZXIpO1xuICAgIH07XG4gICAgXG4gICAgZnVuY3Rpb24gcGxheWVyQXR0YWNrKHgsIHkpIHtcbiAgICAgICAgaWYgKCFwbGF5ZXJUdXJuKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH07XG4gICAgICAgIGNvbnNvbGUubG9nKCdwbGF5ZXIgbWFrZXMgYXR0YWNrJyk7XG4gICAgICAgIGlmIChjb21wdXRlci5teUJvYXJkLnJlY2VpdmVBdHRhY2soeCwgeSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2UgcmV0dXJuIGZhbHNlO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBjb21wdXRlckF0dGFjayh4LCB5KSB7XG4gICAgICAgIGlmIChwbGF5ZXJUdXJuKSB7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfTtcbiAgICAgICAgY29uc29sZS5sb2coJ2NvbXB1dGVyIG1ha2VzIGF0dGFjaycpO1xuICAgICAgICBpZiAocGxheWVyMS5teUJvYXJkLnJlY2VpdmVBdHRhY2soeCwgeSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2UgcmV0dXJuIGZhbHNlO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBkaXNwbGF5TWVzc2FnZShtZXNzYWdlLCBlbGVtZW50KSB7XG4gICAgICAgIGxldCBvbGRPdmVybGF5cyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm92ZXJsYXktbXNnJykpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9sZE92ZXJsYXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBvbGRPdmVybGF5c1tpXS5yZW1vdmUoKTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3Qgb3ZlcmxheU1zZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgICAgIG92ZXJsYXlNc2cuY2xhc3NMaXN0LmFkZCgnb3ZlcmxheS1tc2cnKTtcbiAgICAgICAgb3ZlcmxheU1zZy50ZXh0Q29udGVudCA9IG1lc3NhZ2U7XG4gICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQob3ZlcmxheU1zZyk7XG4gICAgICAgIG92ZXJsYXlNc2cuc3R5bGUub3BhY2l0eSA9ICcxMDAlJztcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7b3ZlcmxheU1zZy5yZW1vdmUoKX0sIDIwMDApO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBzZXRDb21wdXRlckJvYXJkKCkge1xuICAgICAgICBjb25zdCBjb21wdXRlckNlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbXB1dGVyLWJvYXJkID4gLmNlbGwnKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDA7IGkrKykge1xuICAgICAgICAgICAgY29tcHV0ZXJDZWxsc1tpXS5zdHlsZS5ib3JkZXIgPSAnMnB4IHNvbGlkIHJlZCc7XG4gICAgICAgICAgICBjb25zdCB4ID0gaSAlIDEwO1xuICAgICAgICAgICAgY29uc3QgeSA9IE1hdGguZmxvb3IoaSAvIDEwKTtcbiAgICAgICAgICAgIGNvbXB1dGVyQ2VsbHNbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHBsYXllclR1cm4gJiYgcGxheWVyQXR0YWNrKHgsIHkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdwbGF5ZXIgaGl0IGNvbXB1dGVyIHNoaXAnKTtcbiAgICAgICAgICAgICAgICAgICAgY29tcHV0ZXJDZWxsc1tpXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmdiYSgyNTUsIDAsIDAsIDAuNSknO1xuICAgICAgICAgICAgICAgICAgICBjb21wdXRlckNlbGxzW2ldLnRleHRDb250ZW50ID0gJ1gnO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY29tcHV0ZXIubXlCb2FyZC5jZWxsc1t5XVt4XS5pc1N1bmsoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDA7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHggPSBpICUgMTA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgeSA9IE1hdGguZmxvb3IoaSAvIDEwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29tcHV0ZXIubXlCb2FyZC5jZWxsc1t5XVt4XS5pc1N1bmsoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wdXRlckNlbGxzW2ldLnN0eWxlLmJvcmRlckNvbG9yID0gJ3JlZCc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXB1dGVyQ2VsbHNbaV0uc3R5bGUuY29sb3IgPSAnYmxhY2snO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2NvbXB1dGVyICcsIGNvbXB1dGVyLm15Qm9hcmQuY2VsbHNbeV1beF0ubmFtZSwgJyBpcyBzdW5rIScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheU1lc3NhZ2UoYCR7Y29tcHV0ZXIubXlCb2FyZC5jZWxsc1t5XVt4XS5uYW1lLnRvVXBwZXJDYXNlKCl9IFNVTkshYCwgY29tcHV0ZXJCb2FyZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBhZGQgaW1hZ2Ugb2YgY29tcHV0ZXIgc2hpcCB0byBjb21wdXRlciBib2FyZFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYWRkIHNvbWUgc29ydCBvZiBjcm9zcyBvdXQgb3ZlciBpdD9cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb21wdXRlci5teUJvYXJkLmlzR2FtZU92ZXIoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZEdhbWUoJ1BMQVlFUicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlNZXNzYWdlKCdISVQnLCBjb21wdXRlckJvYXJkKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBwbGF5ZXJUdXJuID0gIXBsYXllclR1cm47XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwbGF5ZXJUdXJuKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdwbGF5ZXIgbWlzc2VkJyk7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXlNZXNzYWdlKCdNSVNTJywgY29tcHV0ZXJCb2FyZCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbXB1dGVyQ2VsbHNbaV0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2dyZXknO1xuICAgICAgICAgICAgICAgICAgICBjb21wdXRlckNlbGxzW2ldLnRleHRDb250ZW50ID0gJ08nO1xuICAgICAgICAgICAgICAgICAgICBwbGF5ZXJUdXJuID0gIXBsYXllclR1cm47XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ25vdCBwbGF5ZXIgdHVybicpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBlbmRHYW1lKHdpbm5lcikge1xuICAgICAgICBjb25zb2xlLmxvZygnZ2FtZSBPdmVyIScpO1xuICAgICAgICBjb25zdCBlbmRTY3JlZW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZW5kU2NyZWVuLmNsYXNzTGlzdC5hZGQoJ2VuZC1zY3JlZW4nKTtcbiAgICAgICAgY29uc3QgZW5kTXNnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICAgICAgZW5kTXNnLmNsYXNzTGlzdC5hZGQoJ2VuZC1tc2cnKTtcbiAgICAgICAgZW5kTXNnLnRleHRDb250ZW50ID0gYCR7d2lubmVyfSBXT04hYDtcbiAgICAgICAgZW5kU2NyZWVuLmFwcGVuZENoaWxkKGVuZE1zZyk7XG4gICAgICAgIGNvbnN0IHJlcGxheUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICByZXBsYXlCdXR0b24uY2xhc3NMaXN0LmFkZCgncmVwbGF5Jyk7XG4gICAgICAgIHJlcGxheUJ1dHRvbi50ZXh0Q29udGVudCA9ICdQbGF5IEFnYWluJztcbiAgICAgICAgZW5kU2NyZWVuLmFwcGVuZENoaWxkKHJlcGxheUJ1dHRvbik7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZW5kU2NyZWVuKTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gc2V0UGxheWVyQm9hcmQoKSB7XG4gICAgICAgIGNvbnN0IHBsYXllckNlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBsYXllci1ib2FyZCA+IC5jZWxsJyk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTAwOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHggPSBpICUgMTA7XG4gICAgICAgICAgICBjb25zdCB5ID0gTWF0aC5mbG9vcihpIC8gMTApO1xuICAgICAgICAgICAgaWYgKHBsYXllcjEubXlCb2FyZC5jZWxsc1t5XVt4XSBpbnN0YW5jZW9mIFNoaXApIHtcbiAgICAgICAgICAgICAgICBwbGF5ZXJDZWxsc1tpXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmdiYSgwLCAyNTUsIDAsIDAuNSknO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHBsYXllckNlbGxzW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghcGxheWVyVHVybiAmJiBjb21wdXRlckF0dGFjayh4LHkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjb21wdXRlciBoaXQgcGxheWVyIHNoaXAnKTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheU1lc3NhZ2UoJ0hJVCcsIHBsYXllckJvYXJkKTtcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyQ2VsbHNbaV0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JnYmEoMjU1LCAwLCAwLCAwLjUpJztcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgWCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgICAgICAgICAgWC50ZXh0Q29udGVudCA9ICdYJztcbiAgICAgICAgICAgICAgICAgICAgWC5zdHlsZS5jb2xvciA9ICd3aGl0ZSc7XG4gICAgICAgICAgICAgICAgICAgIFguc3R5bGUuZm9udFNpemUgPSAnMS41cmVtJztcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyQ2VsbHNbaV0uYXBwZW5kQ2hpbGQoWCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwbGF5ZXIxLm15Qm9hcmQuY2VsbHNbeV1beF0uaXNTdW5rKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTAwOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB4ID0gaSAlIDEwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHkgPSBNYXRoLmZsb29yKGkgLyAxMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBsYXllcjEubXlCb2FyZC5jZWxsc1t5XVt4XS5pc1N1bmsoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXJDZWxsc1tpXS5zdHlsZS5ib3JkZXJDb2xvciA9ICdyZWQnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXJDZWxsc1tpXS5jaGlsZHJlbltwbGF5ZXJDZWxsc1tpXS5jaGlsZHJlbi5sZW5ndGggLSAxXS5zdHlsZS5jb2xvciA9ICdibGFjayc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygncGxheWVyICcsIHBsYXllcjEubXlCb2FyZC5jZWxsc1t5XVt4XS5uYW1lLCAnIGlzIHN1bmshJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5TWVzc2FnZShgJHtwbGF5ZXIxLm15Qm9hcmQuY2VsbHNbeV1beF0ubmFtZS50b1VwcGVyQ2FzZSgpfSBTVU5LIWAsIHBsYXllckJvYXJkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFkZCBzb21lIHNvcnQgb2YgY3Jvc3Mgb3V0IG92ZXIgcGxheWVyIHNoaXA/XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocGxheWVyMS5teUJvYXJkLmlzR2FtZU92ZXIoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZEdhbWUoJ0NPTVBVVEVSJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyVHVybiA9ICFwbGF5ZXJUdXJuO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoIXBsYXllclR1cm4pIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2NvbXB1dGVyIG1pc3NlZCcpO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5TWVzc2FnZSgnTUlTUycsIHBsYXllckJvYXJkKTtcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyQ2VsbHNbaV0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSc7XG4gICAgICAgICAgICAgICAgICAgIHBsYXllckNlbGxzW2ldLnRleHRDb250ZW50ID0gJ08nO1xuICAgICAgICAgICAgICAgICAgICBwbGF5ZXJUdXJuID0gIXBsYXllclR1cm47XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ25vdCBjb21wdXRlciB0dXJuJyk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgIH07XG5cblxuICAgIGZ1bmN0aW9uIGFkZFNoaXBJbWFnZShzaGlwTmFtZSkge1xuICAgICAgICBjb25zdCBwbGF5ZXJDZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wbGF5ZXItYm9hcmQgPiAuY2VsbCcpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwMDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCB4ID0gaSAlIDEwO1xuICAgICAgICAgICAgY29uc3QgeSA9IE1hdGguZmxvb3IoaSAvIDEwKTtcbiAgICAgICAgICAgIGlmIChwbGF5ZXIxLm15Qm9hcmQuY2VsbHNbeV1beF0gaW5zdGFuY2VvZiBTaGlwICYmIHBsYXllcjEubXlCb2FyZC5jZWxsc1t5XVt4XS5uYW1lID09PSBzaGlwTmFtZSAmJiAhc2hpcEltYWdlUGxhY2VkW3NoaXBOYW1lXSkge1xuICAgICAgICAgICAgICAgIGlmIChwbGF5ZXIxLm15Qm9hcmQuY2VsbHNbeV1beCsxXSAhPT0gcGxheWVyMS5teUJvYXJkLmNlbGxzW3ldW3hdKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlVmVydGljYWwoc2hpcE5hbWVUb0ltYWdlW3NoaXBOYW1lXSwgcGxheWVyMS5teUJvYXJkLmNlbGxzW3ldW3hdLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBwbGF5ZXJDZWxsc1tpXS5hcHBlbmRDaGlsZChzaGlwTmFtZVRvSW1hZ2Vbc2hpcE5hbWVdKTtcbiAgICAgICAgICAgICAgICBzaGlwSW1hZ2VQbGFjZWRbc2hpcE5hbWVdID0gdHJ1ZTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIHNldHVwRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICAgIHNldENvbXB1dGVyQm9hcmQoKTtcbiAgICAgICAgc2V0UGxheWVyQm9hcmQoKTtcbiAgICAgICAgYWRkU2hpcEltYWdlKCdhbHBoYScpO1xuICAgICAgICBhZGRTaGlwSW1hZ2UoJ2JldGEnKTtcbiAgICAgICAgYWRkU2hpcEltYWdlKCdnYW1tYScpO1xuICAgICAgICBhZGRTaGlwSW1hZ2UoJ2RlbHRhJyk7XG4gICAgICAgIGFkZFNoaXBJbWFnZSgnZXBzaWxvbicpO1xuICAgIH07XG59O1xuIiwiaW1wb3J0ICcuL3N0eWxlLmNzcydcbmltcG9ydCBQbGF5ZXIgZnJvbSAnLi9wbGF5ZXInXG5pbXBvcnQgU2hpcCBmcm9tICcuL3NoaXAnXG5pbXBvcnQgc3RhcnRHYW1lIGZyb20gJy4vZ2FtZSc7XG5pbXBvcnQgJy4vaW1hZ2VzL0FscGhhLnBuZydcbmltcG9ydCAnLi9pbWFnZXMvQmV0YS5wbmcnXG5pbXBvcnQgJy4vaW1hZ2VzL0dhbW1hLnBuZydcbmltcG9ydCAnLi9pbWFnZXMvRGVsdGEucG5nJ1xuaW1wb3J0ICcuL2ltYWdlcy9FcHNpbG9uLnBuZydcblxuY29uc3QgcGxheWVyMSA9IG5ldyBQbGF5ZXIoJ3BsYXllcjEnKTtcbmNvbnN0IHJhbmRvbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yYW5kb20nKTtcbmNvbnN0IHJlc2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc2V0Jyk7XG5jb25zdCBzdWJtaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3VibWl0Jyk7XG5jb25zdCBzaGlwQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNoaXAtY29udGFpbmVyJyk7XG5jb25zdCBheGlzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmF4aXMnKTtcbmNvbnN0IGFscGhhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFscGhhJyk7XG5jb25zdCBiZXRhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJldGEnKTtcbmNvbnN0IGdhbW1hID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbW1hJyk7XG5jb25zdCBkZWx0YSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZWx0YScpO1xuY29uc3QgZXBzaWxvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lcHNpbG9uJyk7XG5jb25zdCBib2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lYm9hcmQnKTtcbmNvbnN0IHNoaXBzID0gW2FscGhhLCBiZXRhLCBnYW1tYSwgZGVsdGEsIGVwc2lsb25dO1xuY29uc3QgY2VsbHMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jZWxsJykpO1xubGV0IGN1cnJlbnRTaGlwO1xubGV0IHZlcnRpY2FsID0gZmFsc2U7XG5cbmZ1bmN0aW9uIHNlbGVjdFNoaXAoZXZlbnQpIHsgXG4gICAgY29uc3Qgc2hpcEVsZW0gPSBldmVudC50YXJnZXQ7XG4gICAgY3VycmVudFNoaXAgPSBzaGlwRWxlbTtcbiAgICBhbHBoYS5zdHlsZS5ib3JkZXIgPSBiZXRhLnN0eWxlLmJvcmRlciA9IGdhbW1hLnN0eWxlLmJvcmRlciA9IGRlbHRhLnN0eWxlLmJvcmRlciA9IGVwc2lsb24uc3R5bGUuYm9yZGVyID0gJyc7XG4gICAgY3VycmVudFNoaXAuc3R5bGUuYm9yZGVyID0gJzJweCBzb2xpZCBibGFjayc7ICAgICAgIFxufTtcblxuZnVuY3Rpb24gdXBkYXRlQ2VsbFN0eWxpbmcoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwbGF5ZXIxLm15Qm9hcmQuY2VsbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBwbGF5ZXIxLm15Qm9hcmQuY2VsbHNbaV0ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIGlmIChwbGF5ZXIxLm15Qm9hcmQuY2VsbHNbaV1bal0gaW5zdGFuY2VvZiBTaGlwKSB7XG4gICAgICAgICAgICAgICAgY2VsbHNbaSAqIDEwICsgal0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JnYmEoMCwgMjU1LCAwLCAwLjUpJ1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjZWxsc1tpICogMTAgKyBqXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnJztcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgfTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU2hpcChzaGlwKSB7IC8vIG5lZWRzIHdvcmtcbiAgICBzaGlwLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoc2hpcCk7XG4gICAgY29uc3Qgc2hpcE5hbWUgPSBzaGlwLmNsYXNzTGlzdFsxXTtcbiAgICBwbGF5ZXIxLm15Qm9hcmQucmVtb3ZlU2hpcChzaGlwTmFtZSk7XG4gICAgc2hpcC5zdHlsZS5wb2ludGVyRXZlbnRzID0gJyc7XG4gICAgdXBkYXRlQ2VsbFN0eWxpbmcoKTtcbiAgICBkaXNhbGxvd1N1Ym1pdCgpO1xufTtcblxuZnVuY3Rpb24gZGlzYWxsb3dTdWJtaXQoKSB7XG4gICAgc3VibWl0LnN0eWxlLm9wYWNpdHkgPSAwLjU7XG4gICAgc3VibWl0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3VibWl0Qm9hcmQpO1xufTtcblxuZnVuY3Rpb24gYWxsb3dTdWJtaXQoKSB7XG4gICAgc3VibWl0LnN0eWxlLm9wYWNpdHkgPSAxO1xuICAgIHN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN1Ym1pdEJvYXJkKTtcbn07XG5cbmZ1bmN0aW9uIHN1Ym1pdEJvYXJkKCkge1xuICAgIHN0YXJ0R2FtZSgpO1xufTtcblxuZnVuY3Rpb24gZmxpcEF4aXMoKSB7IFxuICAgIHZlcnRpY2FsID0gIXZlcnRpY2FsO1xuICAgIGF4aXMudGV4dENvbnRlbnQgPSB2ZXJ0aWNhbCA/ICdWRVJUSUNBTCcgOiAnSE9SSVpPTlRBTCc7XG59O1xuXG5mdW5jdGlvbiBjbGVhckJvYXJkKCkgeyBcbiAgICBwbGF5ZXIxLm15Qm9hcmQucmVzZXRCb2FyZCgpO1xuICAgIGFscGhhLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoYWxwaGEpO1xuICAgIGlmIChhbHBoYS5jbGFzc0xpc3QuY29udGFpbnMoJ3BsYWNlZCcpKSBhbHBoYS5jbGFzc0xpc3QucmVtb3ZlKCdwbGFjZWQnKTtcbiAgICBhbHBoYS5zdHlsZS50cmFuc2Zvcm0gPSAnJztcbiAgICBiZXRhLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoYmV0YSk7XG4gICAgaWYgKGJldGEuY2xhc3NMaXN0LmNvbnRhaW5zKCdwbGFjZWQnKSkgYmV0YS5jbGFzc0xpc3QucmVtb3ZlKCdwbGFjZWQnKTtcbiAgICBiZXRhLnN0eWxlLnRyYW5zZm9ybSA9ICcnO1xuICAgIGdhbW1hLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoZ2FtbWEpO1xuICAgIGlmIChnYW1tYS5jbGFzc0xpc3QuY29udGFpbnMoJ3BsYWNlZCcpKSBnYW1tYS5jbGFzc0xpc3QucmVtb3ZlKCdwbGFjZWQnKTtcbiAgICBnYW1tYS5zdHlsZS50cmFuc2Zvcm09ICcnO1xuICAgIGRlbHRhLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoZGVsdGEpO1xuICAgIGlmIChkZWx0YS5jbGFzc0xpc3QuY29udGFpbnMoJ3BsYWNlZCcpKSBkZWx0YS5jbGFzc0xpc3QucmVtb3ZlKCdwbGFjZWQnKTtcbiAgICBkZWx0YS5zdHlsZS50cmFuc2Zvcm0gPSAnJztcbiAgICBlcHNpbG9uLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoZXBzaWxvbik7XG4gICAgaWYgKGVwc2lsb24uY2xhc3NMaXN0LmNvbnRhaW5zKCdwbGFjZWQnKSkgZXBzaWxvbi5jbGFzc0xpc3QucmVtb3ZlKCdwbGFjZWQnKTtcbiAgICBlcHNpbG9uLnN0eWxlLnRyYW5zZm9ybSA9ICcnO1xuXG4gICAgaWYgKCFzaGlwQ29udGFpbmVyLnBhcmVudEVsZW1lbnQgIT09IGRvY3VtZW50LmJvZHkpIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzaGlwQ29udGFpbmVyKVxuICAgIH07XG5cbiAgICBzaGlwQ29udGFpbmVyLmFwcGVuZENoaWxkKGFscGhhKTtcbiAgICBzaGlwQ29udGFpbmVyLmFwcGVuZENoaWxkKGJldGEpO1xuICAgIHNoaXBDb250YWluZXIuYXBwZW5kQ2hpbGQoZ2FtbWEpO1xuICAgIHNoaXBDb250YWluZXIuYXBwZW5kQ2hpbGQoZGVsdGEpO1xuICAgIHNoaXBDb250YWluZXIuYXBwZW5kQ2hpbGQoZXBzaWxvbik7XG5cbiAgICBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jZWxsJykpLmZvckVhY2goKGVsZW0pID0+IGVsZW0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJycpO1xufTtcblxuZnVuY3Rpb24gZmluZEluZGV4KGNlbGwpIHtcbiAgICBjb25zdCBwYXJlbnQgPSBjZWxsLnBhcmVudEVsZW1lbnQ7XG4gICAgY29uc3QgY2hpbGRyZW4gPSBBcnJheS5mcm9tKHBhcmVudC5jaGlsZHJlbik7XG4gICAgcmV0dXJuIGNoaWxkcmVuLmluZGV4T2YoY2VsbCk7XG59O1xuXG5mdW5jdGlvbiBwbGFjZVNoaXAoaW5kZXgpIHsgXG4gICAgaWYgKCFjdXJyZW50U2hpcCkgcmV0dXJuO1xuXG4gICAgaWYgKGN1cnJlbnRTaGlwLmNsYXNzTGlzdC5jb250YWlucygncGxhY2VkJykpIHtcbiAgICAgICAgcmVtb3ZlU2hpcChjdXJyZW50U2hpcCk7XG4gICAgfVxuICAgIGNvbnN0IHNoaXAgPSBjdXJyZW50U2hpcC5jbGFzc0xpc3RbMV07XG4gICAgY29uc3QgbGVuZ3RoID0gcGxheWVyMS5teUJvYXJkLnNoaXBzW3NoaXBdLmxlbmd0aFxuICAgIGNvbnN0IHN0YXJ0WCA9IGluZGV4ICUgMTA7XG4gICAgY29uc3Qgc3RhcnRZID0gTWF0aC5mbG9vcihpbmRleCAvIDEwKTtcbiAgICBsZXQgZW5kWDtcbiAgICBsZXQgZW5kWTtcbiAgICBpZiAodmVydGljYWwpIHtcbiAgICAgICAgZW5kWCA9IHN0YXJ0WCAgICAgXG4gICAgICAgIGVuZFkgPSBzdGFydFkgKyAobGVuZ3RoIC0gMSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZW5kWCA9IHN0YXJ0WCArIChsZW5ndGggLSAxKTtcbiAgICAgICAgZW5kWSA9IHN0YXJ0WTtcbiAgICB9O1xuICAgIGNvbnN0IHN0YXJ0ID0gW3N0YXJ0WCwgc3RhcnRZXTtcbiAgICBjb25zdCBlbmQgPSBbZW5kWCwgZW5kWV07XG4gICAgaWYgKCFwbGF5ZXIxLm15Qm9hcmQuc2V0U2hpcChwbGF5ZXIxW3NoaXBdLCBzdGFydCwgZW5kKSkge1xuICAgICAgICByZXR1cm5cbiAgICB9O1xuICAgIGNlbGxzW2luZGV4XS5hcHBlbmRDaGlsZChjdXJyZW50U2hpcCk7XG4gICAgdXBkYXRlQ2VsbFN0eWxpbmcoKTtcblxuICAgIGlmICh2ZXJ0aWNhbCkge1xuICAgICAgICBzdHlsZVZlcnRpY2FsKGN1cnJlbnRTaGlwLCBsZW5ndGgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGN1cnJlbnRTaGlwLnN0eWxlLnRyYW5zZm9ybSA9ICcnO1xuICAgICAgICBjdXJyZW50U2hpcC5zdHlsZS50b3AgPSAnJztcbiAgICAgICAgY3VycmVudFNoaXAuc3R5bGUubGVmdCA9ICcnO1xuICAgIH07XG5cbiAgICBpZiAoIWN1cnJlbnRTaGlwLmNsYXNzTGlzdC5jb250YWlucygncGxhY2VkJykpIHtcbiAgICAgICAgY3VycmVudFNoaXAuY2xhc3NMaXN0LmFkZCgncGxhY2VkJyk7XG4gICAgICAgIGN1cnJlbnRTaGlwLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7XG4gICAgfTtcblxuICAgIGxldCBzaGlwc1BsYWNlZENvdW50ID0gMFxuICAgIHNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgICAgaWYgKHNoaXAuY2xhc3NMaXN0LmNvbnRhaW5zKCdwbGFjZWQnKSkge1xuICAgICAgICAgICAgc2hpcHNQbGFjZWRDb3VudCsrO1xuICAgICAgICB9O1xuICAgIH0pO1xuICAgIGlmIChzaGlwc1BsYWNlZENvdW50ID09PSA1KSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoc2hpcENvbnRhaW5lcik7XG4gICAgICAgIGFsbG93U3VibWl0KCk7XG4gICAgfTtcbiAgICByZXR1cm4gdHJ1ZTtcbn07XG5cbmZ1bmN0aW9uIHN0eWxlVmVydGljYWwoc2hpcCwgbGVuZ3RoKSB7IFxuICAgIHNoaXAuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSg5MGRlZyknO1xuICAgIHNoaXAuc3R5bGUudG9wID0gYCR7KDQ0ICogKDAuNSAqIChsZW5ndGggLSAxKSkpfXB4YDtcbiAgICBzaGlwLnN0eWxlLmxlZnQgPSBgLSR7KDQ0ICogKDAuNSAqIChsZW5ndGggLSAxKSkpIC0gKGxlbmd0aCAtIDIpICogNn1weGA7XG4gICAgaWYgKHNoaXAuY2xhc3NMaXN0WzFdID09PSAnYmV0YScpIHtcbiAgICAgICAgc2hpcC5zdHlsZS5sZWZ0ID0gYC0keyg0NCAqICgwLjUgKiAobGVuZ3RoIC0gMSkpKSAtIChsZW5ndGggLSAyKSAqIDE4fXB4YDtcbiAgICB9O1xufTtcblxuZnVuY3Rpb24gaGFuZGxlQ2VsbENsaWNrKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2NlbGwnKSkge1xuICAgICAgICBwbGFjZVNoaXAoZmluZEluZGV4KGV2ZW50LnRhcmdldCkpO1xuICAgIH07XG59O1xuXG5mdW5jdGlvbiBzZXR1cEV2ZW50TGlzdGVuZXJzKCkge1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBzaGlwc1tpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNlbGVjdFNoaXApO1xuICAgIH07XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNlbGxzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNlbGxzW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQ2VsbENsaWNrKTtcblxuXG5cbiAgICAgICAgY2VsbHNbaV0uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIGUgPT4ge1xuICAgICAgICAgICAgaWYgKCFjdXJyZW50U2hpcCkge1xuICAgICAgICAgICAgICAgIHVwZGF0ZUNlbGxTdHlsaW5nKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgY3VycmVudFNoaXAuc3R5bGUucG9pbnRlckV2ZW50cyA9ICdub25lJztcbiAgICAgICAgICAgIHVwZGF0ZUNlbGxTdHlsaW5nKCk7XG5cbiAgICAgICAgICAgIGNvbnN0IHNoaXAgPSBjdXJyZW50U2hpcC5jbGFzc0xpc3RbMV07XG4gICAgICAgICAgICBjb25zdCBsZW5ndGggPSBwbGF5ZXIxLm15Qm9hcmQuc2hpcHNbc2hpcF0ubGVuZ3RoO1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBsZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIGlmICh2ZXJ0aWNhbCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaSArIChsZW5ndGggLSAxKSAqIDEwID4gOTkgJiYgaSArIGogKiAxMCA8IDk5KSB7IC8vIGlmIHRoZSBlbmQgb2YgdGhlIHNoaXAgZ29lcyBvdXQgb2YgYm91bmRzXG4gICAgICAgICAgICAgICAgICAgICAgICBjZWxsc1tpICsgaiAqIDEwXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmVkJztcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpICsgaiAqIDEwIDwgMTAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2VsbHNbaSArIGogKiAxMF0uc3R5bGUuYmFja2dyb3VuZENvbG9yID09PSAncmdiYSgwLCAyNTUsIDAsIDAuNScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZWxsc1tpICsgaiAqIDEwXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmdiYSgyNTUsIDAsIDAsIDAuNSknO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZWxsc1tpICsgaiAqIDEwXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpJztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaSAlIDEwICsgbGVuZ3RoID4gMTAgJiYgaSAlIDEwICsgaiA8IDEwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjZWxsc1tpICsgal0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JnYmEoMjU1LCAwLCAwLCAwLjUpJztcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpICUgMTAgKyBqIDwgMTApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjZWxsc1tpICsgal0uc3R5bGUuYmFja2dyb3VuZENvbG9yID09PSAncmdiYSgwLCAyNTUsIDAsIDAuNSknKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCBsZW5ndGg7IGsrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbGxzW2kgKyBqXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmdiYSgyNTUsIDAsIDAsIDAuNSknO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VsbHNbaSArIGpdLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSknO1xuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGdldFJhbmRvbVRGSW5kZXgoKSB7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gZ2V0UmFuZG9tQ2VsbEluZGV4KCkge1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwKTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gcGxhY2VTaGlwc1JhbmRvbWx5KCkge1xuICAgICAgICBjbGVhckJvYXJkKCk7IFxuICAgICAgICBjb25zdCB0ZiA9IFt0cnVlLCBmYWxzZV07XG4gICAgICAgIGN1cnJlbnRTaGlwID0gYWxwaGE7XG4gICAgICAgIHZlcnRpY2FsID0gdGZbZ2V0UmFuZG9tVEZJbmRleCgpXTtcbiAgICAgICAgd2hpbGUgKCFwbGFjZVNoaXAoZ2V0UmFuZG9tQ2VsbEluZGV4KCkpKSB7XG4gICAgICAgIH07XG4gICAgICAgIHZlcnRpY2FsID0gdGZbZ2V0UmFuZG9tVEZJbmRleCgpXTtcbiAgICAgICAgY3VycmVudFNoaXAgPSBiZXRhOyBcbiAgICAgICAgd2hpbGUgKCFwbGFjZVNoaXAoZ2V0UmFuZG9tQ2VsbEluZGV4KCkpKSB7XG4gICAgICAgIH07XG4gICAgICAgIHZlcnRpY2FsID0gdGZbZ2V0UmFuZG9tVEZJbmRleCgpXTtcbiAgICAgICAgY3VycmVudFNoaXAgPSBnYW1tYTtcbiAgICAgICAgd2hpbGUgKCFwbGFjZVNoaXAoZ2V0UmFuZG9tQ2VsbEluZGV4KCkpKSB7XG4gICAgICAgIH07XG4gICAgICAgIHZlcnRpY2FsID0gdGZbZ2V0UmFuZG9tVEZJbmRleCgpXTtcbiAgICAgICAgY3VycmVudFNoaXAgPSBkZWx0YTtcbiAgICAgICAgd2hpbGUgKCFwbGFjZVNoaXAoZ2V0UmFuZG9tQ2VsbEluZGV4KCkpKSB7XG4gICAgICAgIH07XG4gICAgICAgIHZlcnRpY2FsID0gdGZbZ2V0UmFuZG9tVEZJbmRleCgpXTtcbiAgICAgICAgY3VycmVudFNoaXAgPSBlcHNpbG9uO1xuICAgICAgICB3aGlsZSAoIXBsYWNlU2hpcChnZXRSYW5kb21DZWxsSW5kZXgoKSkpIHtcbiAgICAgICAgfTtcbiAgICAgICAgdmVydGljYWwgPSBmYWxzZTtcbiAgICB9O1xuXG4gICAgYm9hcmQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIGUgPT4ge1xuICAgICAgICB1cGRhdGVDZWxsU3R5bGluZygpO1xuICAgIH0pO1xuXG4gICAgcmVzZXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbGVhckJvYXJkKTtcbiAgICByYW5kb20uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwbGFjZVNoaXBzUmFuZG9tbHkpO1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgIGlmICghZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaGlwJykgJiYgY3VycmVudFNoaXApIHtcbiAgICAgICAgICAgIGN1cnJlbnRTaGlwLnN0eWxlLmJvcmRlciA9ICdub25lJztcbiAgICAgICAgICAgIGlmICghZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjZWxsJykpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50U2hpcCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgICAgIGlmICghY3VycmVudFNoaXApIHtcbiAgICAgICAgICAgIHNoaXBzLmZvckVhY2goKHNoaXApID0+IHNoaXAuc3R5bGUucG9pbnRlckV2ZW50cyA9ICcnKTtcbiAgICAgICAgfTtcbiAgICB9KTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHtcbiAgICAgICAgaWYgKGUua2V5ID09PSAnU2hpZnQnICYmICF2ZXJ0aWNhbCkge1xuICAgICAgICAgICAgZmxpcEF4aXMoKTtcbiAgICAgICAgfTtcbiAgICB9KTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChlKSA9PiB7XG4gICAgICAgIGlmIChlLmtleSA9PT0gJ1NoaWZ0JyAmJiB2ZXJ0aWNhbCkge1xuICAgICAgICAgICAgZmxpcEF4aXMoKTtcbiAgICAgICAgfTtcbiAgICB9KTtcbn07XG5cbnNldHVwRXZlbnRMaXN0ZW5lcnMoKTtcblxuZXhwb3J0IHsgcGxheWVyMSwgc3R5bGVWZXJ0aWNhbCB9OyIsImNvbnN0IFNoaXAgPSByZXF1aXJlKCcuL3NoaXAuanMnKTtcblxuLy8gZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZWJvYXJkIHtcbmNsYXNzIEdhbWVib2FyZCB7XG4gICAgc2hpcHMgPSB0aGlzLiNjcmVhdGVTaGlwcygpO1xuICAgIGNlbGxzID0gdGhpcy4jY3JlYXRlRW1wdHlCb2FyZCgpO1xuICAgICNhdHRhY2tzID0gW107XG4gICAgI21pc3NlcyA9IFtdO1xuICAgICNwbGFjZWRTaGlwcyA9IFtdO1xuXG4gICAgcmVzZXRCb2FyZCgpIHtcbiAgICAgICAgdGhpcy5jZWxscyA9IHRoaXMuI2NyZWF0ZUVtcHR5Qm9hcmQoKTtcbiAgICB9O1xuXG4gICAgI2NyZWF0ZVNoaXBzKCkge1xuICAgICAgICBjb25zdCBzaGlwT2JqZWN0ID0ge307XG4gICAgICAgIHNoaXBPYmplY3RbJ2FscGhhJ10gPSBuZXcgU2hpcCgyKTtcbiAgICAgICAgc2hpcE9iamVjdFsnYWxwaGEnXS5uYW1lID0gJ2FscGhhJztcbiAgICAgICAgc2hpcE9iamVjdFsnYmV0YSddID0gbmV3IFNoaXAoMyk7XG4gICAgICAgIHNoaXBPYmplY3RbJ2JldGEnXS5uYW1lID0gJ2JldGEnO1xuICAgICAgICBzaGlwT2JqZWN0WydnYW1tYSddID0gbmV3IFNoaXAoMyk7XG4gICAgICAgIHNoaXBPYmplY3RbJ2dhbW1hJ10ubmFtZSA9ICdnYW1tYSc7XG4gICAgICAgIHNoaXBPYmplY3RbJ2RlbHRhJ10gPSBuZXcgU2hpcCg0KTtcbiAgICAgICAgc2hpcE9iamVjdFsnZGVsdGEnXS5uYW1lID0gJ2RlbHRhJztcbiAgICAgICAgc2hpcE9iamVjdFsnZXBzaWxvbiddID0gbmV3IFNoaXAoNSlcbiAgICAgICAgc2hpcE9iamVjdFsnZXBzaWxvbiddLm5hbWUgPSAnZXBzaWxvbic7XG5cbiAgICAgICAgcmV0dXJuIHNoaXBPYmplY3Q7XG4gICAgfTtcblxuICAgICNjcmVhdGVFbXB0eUJvYXJkKCkge1xuICAgICAgICBjb25zdCB3ID0gMTA7XG4gICAgICAgIGNvbnN0IGggPSAxMDtcbiAgICAgICAgY29uc3QgYm9hcmQgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB3OyBpKyspIHtcbiAgICAgICAgICAgIGJvYXJkLnB1c2goW10pXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGg7IGorKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVtcHR5Q2VsbCA9IHtcbiAgICAgICAgICAgICAgICAgICAgaGl0OiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfSwgXG4gICAgICAgICAgICAgICAgICAgIGlzU3VuazogKCkgPT4gbnVsbCxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGJvYXJkW2ldLnB1c2goZW1wdHlDZWxsKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBib2FyZDtcbiAgICB9O1xuXG4gICAgcmVjZWl2ZUF0dGFjayh4LCB5KSB7XG4gICAgICAgIGNvbnN0IGF0dGFja0Nvb3JkID0gW3ksIHhdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuI2F0dGFja3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChhdHRhY2tDb29yZC5ldmVyeSgodmFsLCBpbmRleCkgPT4gdmFsID09PSB0aGlzLiNhdHRhY2tzW2ldW2luZGV4XSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuY2VsbHNbeV1beF0uaGl0KCkpIHtcbiAgICAgICAgICAgIHRoaXMuI2F0dGFja3MucHVzaChbeSwgeF0pO1xuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuI2F0dGFja3MucHVzaChbeSwgeF0pO1xuICAgICAgICAgICAgdGhpcy4jbWlzc2VzLnB1c2goW3ksIHhdKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9O1xuICAgIH07XG5cbiAgICByZW1vdmVTaGlwKHNoaXBOYW1lKSB7XG4gICAgICAgIGNvbnN0IGVtcHR5Q2VsbCA9IHtcbiAgICAgICAgICAgIGhpdDogKCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgfSwgXG4gICAgICAgICAgICBpc1N1bms6ICgpID0+IG51bGxcbiAgICAgICAgfTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY2VsbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5jZWxsc1tpXS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNlbGxzW2ldW2pdIGluc3RhbmNlb2YgU2hpcCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jZWxsc1tpXVtqXS5uYW1lID09PSBzaGlwTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jZWxsc1tpXVtqXSA9IGVtcHR5Q2VsbFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy4jcGxhY2VkU2hpcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChzaGlwTmFtZSA9PT0gdGhpcy4jcGxhY2VkU2hpcHNbaV0pIHtcbiAgICAgICAgICAgICAgICB0aGlzLiNwbGFjZWRTaGlwcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgIH07XG5cbiAgICBzZXRTaGlwKHNoaXAsIHN0YXJ0LCBlbmQpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICBzdGFydFsxXSA+IDkgfHwgc3RhcnRbMF0gPiA5IHx8XG4gICAgICAgIGVuZFsxXSA+IDkgfHwgZW5kWzBdID4gOSB8fFxuICAgICAgICBzdGFydFsxXSA8IDAgfHwgc3RhcnRbMF0gPCAwIHx8XG4gICAgICAgIGVuZFsxXSA8IDAgfHwgZW5kWzBdIDwgMFxuICAgICAgICApIHJldHVybiBmYWxzZTsgXG5cbiAgICAgICAgaWYgKHRoaXMuI3BsYWNlZFNoaXBzLmluY2x1ZGVzKHNoaXAubmFtZSkpIHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlU2hpcChzaGlwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzdGFydFsxXSA9PT0gZW5kWzFdKSB7XG4gICAgICAgICAgICAvLyB2ZXJ0aWNhbFxuICAgICAgICAgICAgaWYgKHN0YXJ0WzBdIDwgZW5kWzBdKSB7XG4gICAgICAgICAgICAgICAgLy8gZ28gZG93blxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jZWxsc1tzdGFydFsxXV1bc3RhcnRbMF0gKyBpXSBpbnN0YW5jZW9mIFNoaXApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlU2hpcChzaGlwLm5hbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlOyBcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jZWxsc1tzdGFydFsxXV1bc3RhcnRbMF0gKyBpXSA9IHNoaXA7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gZ28gdXBcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY2VsbHNbc3RhcnRbMV1dW3N0YXJ0WzBdIC0gaV0gaW5zdGFuY2VvZiBTaGlwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZVNoaXAoc2hpcC5uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTsgXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2VsbHNbc3RhcnRbMV1dW3N0YXJ0WzBdIC0gaV0gPSBzaGlwO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gaG9yaXpvbnRhbFxuICAgICAgICAgICAgaWYgKHN0YXJ0WzFdIDwgZW5kWzFdKSB7XG4gICAgICAgICAgICAgICAgLy8gZ28gcmlnaHRcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY2VsbHNbc3RhcnRbMV0gKyBpXVtzdGFydFswXV0gaW5zdGFuY2VvZiBTaGlwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZVNoaXAoc2hpcC5uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTsgXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2VsbHNbc3RhcnRbMV0gKyBpXVtzdGFydFswXV0gPSBzaGlwO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIGdvIGxlZnRcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY2VsbHNbc3RhcnRbMV0gLSBpXVtzdGFydFswXV0gaW5zdGFuY2VvZiBTaGlwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZVNoaXAoc2hpcC5uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jZWxsc1tzdGFydFsxXSAtIGldW3N0YXJ0WzBdXSA9IHNoaXA7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuI3BsYWNlZFNoaXBzLnB1c2goc2hpcC5uYW1lKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcblxuICAgIGlzR2FtZU92ZXIoKSB7XG4gICAgICAgIGZvciAobGV0IHNoaXAgaW4gdGhpcy5zaGlwcykge1xuICAgICAgICAgICAgaWYgKCF0aGlzLnNoaXBzW3NoaXBdLmlzU3VuaygpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcbn07XG5tb2R1bGUuZXhwb3J0cyA9IEdhbWVib2FyZDtcbiIsImNvbnN0IEdhbWVib2FyZCA9IHJlcXVpcmUoJy4vZ2FtZWJvYXJkLmpzJyk7XG5cbi8vIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciB7XG5jbGFzcyBQbGF5ZXIge1xuICAgIG15TmFtZTsgXG4gICAgbXlCb2FyZCA9IG5ldyBHYW1lYm9hcmQ7XG4gICAgYWxwaGEgPSB0aGlzLm15Qm9hcmQuc2hpcHNbJ2FscGhhJ107XG4gICAgYmV0YSA9IHRoaXMubXlCb2FyZC5zaGlwc1snYmV0YSddO1xuICAgIGdhbW1hID0gdGhpcy5teUJvYXJkLnNoaXBzWydnYW1tYSddO1xuICAgIGRlbHRhID0gdGhpcy5teUJvYXJkLnNoaXBzWydkZWx0YSddO1xuICAgIGVwc2lsb24gPSB0aGlzLm15Qm9hcmQuc2hpcHNbJ2Vwc2lsb24nXTtcblxuICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICAgICAgdGhpcy5teU5hbWUgPSBuYW1lO1xuICAgIH1cblxuICAgIGF0dGFja0NlbGwoeCwgeSkge1xuICAgICAgICByZXR1cm4gdGhpcy5teUJvYXJkLnJlY2VpdmVBdHRhY2soeCwgeSk7XG4gICAgfVxuICAgIFxuICAgIHBsYWNlQWxwaGEoc3RhcnQsIGVuZCkge1xuICAgICAgICB0aGlzLm15Qm9hcmQuc2V0U2hpcCh0aGlzLmFscGhhLCBzdGFydCwgZW5kKVxuICAgIH1cblxuICAgIHBsYWNlQmV0YShzdGFydCwgZW5kKSB7XG4gICAgICAgIHRoaXMubXlCb2FyZC5zZXRTaGlwKHRoaXMuYmV0YSwgc3RhcnQsIGVuZClcbiAgICB9XG5cbiAgICBwbGFjZUdhbW1hKHN0YXJ0LCBlbmQpIHtcbiAgICAgICAgdGhpcy5teUJvYXJkLnNldFNoaXAodGhpcy5nYW1tYSwgc3RhcnQsIGVuZClcbiAgICB9XG5cbiAgICBwbGFjZURlbHRhKHN0YXJ0LCBlbmQpIHtcbiAgICAgICAgdGhpcy5teUJvYXJkLnNldFNoaXAodGhpcy5kZWx0YSwgc3RhcnQsIGVuZClcbiAgICB9XG5cbiAgICBwbGFjZUVwc2lsb24oc3RhcnQsIGVuZCkge1xuICAgICAgICB0aGlzLm15Qm9hcmQuc2V0U2hpcCh0aGlzLmVwc2lsb24sIHN0YXJ0LCBlbmQpXG4gICAgfVxufTtcbm1vZHVsZS5leHBvcnRzID0gUGxheWVyO1xuIiwiLy9leHBvcnQgZGVmYXVsdCBjbGFzcyBTaGlwIHtcbmNsYXNzIFNoaXAge1xuICAgIGxlbmd0aDtcbiAgICBudW1PZkhpdHM7XG4gICAgbmFtZTtcblxuICAgIGNvbnN0cnVjdG9yKGxlbikge1xuICAgICAgICB0aGlzLmxlbmd0aCA9IGxlbjtcbiAgICAgICAgdGhpcy5udW1PZkhpdHMgPSAwO1xuICAgIH07XG5cbiAgICBoaXQoKSB7XG4gICAgICAgIHRoaXMubnVtT2ZIaXRzKys7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG5cbiAgICBpc1N1bmsoKSB7XG4gICAgICAgIGlmICh0aGlzLm51bU9mSGl0cyA+PSB0aGlzLmxlbmd0aCkgcmV0dXJuIHRydWU7XG4gICAgICAgIGVsc2UgcmV0dXJuIGZhbHNlO1xuICAgIH07XG5cbn07XG5tb2R1bGUuZXhwb3J0cyA9IFNoaXA7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2dhbWVTZXR1cC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==