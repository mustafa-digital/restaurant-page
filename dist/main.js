/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/pattern-7175760.svg */ "./src/assets/pattern-7175760.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/plow-7565062_640-veed-remove-background.png */ "./src/assets/plow-7565062_640-veed-remove-background.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `
:root {
    /* --header-height: 75px; */
}

* {
    padding : 0px;
    margin: 0px;
    box-sizing: border-box;
}

a {
    text-decoration: none;
    color: inherit;
}

li {
    list-style-type: none;
}

body {
    width: 100vw;
    height: 100vh;
    background-color: #fafafa;
    font-size: 24px;
    font-family: sans-serif;
    overflow: hidden;
    color: #3b82f6;
    display: grid;
    grid-template-columns: 30vw 1fr;
    grid-template-rows: 100vh;
}

.home-page {
    position: relative;
    right: 0%;
    animation: 0.6s dropIn;
}

.home-intro {
    height: 100%;
    display: grid;
    grid-template-rows: 200px 50px 1fr;
    align-items: start;
    justify-items: center;
    gap: 20px;

    padding: 40px;
}

.home-intro-title,
.home-intro-content {
    color: #3b82f6;
}

.home-intro-title {
    position: relative;
    font-size: 2.5em;
    line-height: 0.9em;
    width: 350px;
    text-align: center;
    align-self: center;
}

.home-wave-img {
    position: absolute;
    transform: scale(2);
}

.wave-1 {
    left: 100px;
}

.wave-2 {
    transform: scale(2) rotate(180deg);
    bottom: 45px;
    right: 90px;
}


.home-intro-title::after {
    content: "DIVE IN!";
    color: #1e40af;
    transform: rotate(15deg);
    cursor: text;
    pointer-events: visible;
}

.home-intro-content {
    width: 500px;
    text-align: center;
}

.order-links {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 75px 1fr;
    align-items: center;
    justify-items: center;
    row-gap: 20px;
    column-gap: 50px;
}

.order-online-text {
    grid-area: 1 / 1 / 2 / 3;
    font-size: 1em;
    color: #1e40af;
    font-weight: bold;
}

.order-link-logo {
    height: 150px;
    width: 150px;
    cursor: pointer;
}

.doordash-logo {
    width: 300px;
}

.home-food-img {
    height: 400px;
    width: auto;
}

.home-side-div {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    background-size: cover;
    height: 100%;

    display: grid;
    grid-template-rows: 1fr 1fr;
    align-items: center;
    justify-items: center;
}

.home-side-title {
    position: relative;
    right: -25px;
    background: #1e40af;
    color: white;
    height: 100px;
    width: 400px;
    display: grid;
    justify-items: center;
    align-items: center;
    text-align: center;
    font-size: 1.5em;
    border-radius: 8px;
    box-shadow: 2px 2px 2px #343434;
    cursor: pointer;
}

.home-side-title::before {
    position: absolute;
    left: -425px;
    content: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
    zoom: 25%;
    display: inline;
    cursor: pointer;
}

.home-nav {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-self: start;
    padding-top: 50px;
    gap: 35px;
}

.nav-btn {
    height: 50px;
    width: 125px;
    background: #1e40af;
    color: white; 
    font-size: 1em;
    cursor: pointer;
    border-radius: 8px;
    box-shadow: 1px 1px 1px #343434;
}

.menu-page {
    background-color: #fafafa;
    height: 100%;
    padding: 30px;
}

.menu-selector {
    display: grid;
    grid-template-columns: repeat(4, minmax(150px, 1fr));
    justify-items: center;
    align-items: center;
}

.menu-section {
    display: grid;
    grid-template-rows: 50px 1fr;
    padding: 20px;
    align-items: center;
    justify-items: center;
}

.menu-link {
    cursor: pointer;
}

.menu-name {
    font-weight: bold;
    color: #1e40af;
}

.menu-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    width: 80%;
    gap: 40px;
    margin-top: 30px;
}

.menu-selected {
    opacity: 0.9;
    text-decoration: underline;
}

.menu-item {
    display: grid;
    grid-template-columns: 4fr 1fr;
    grid-template-rows: 1fr minmax(30px, 60px);
}

.menu-name {
    grid-area: 1 / 1 / 2 / 2;
}

.menu-price {
    grid-area: 1 / 2 / 2 / 3;
    justify-self: end;
}

.menu-price::before {
    content: "\$";
}

.menu-description {
    grid-area: 2 / 1 / -1 / 2;
    font-size: 0.8em;
    text-wrap: wrap;
}

.about-wrapper,
.contact-wrapper {
    position: relative;
    height: 100%;
    width: 100%;
    display: grid;
    align-items: center;
    justify-items: center;
    background-color: #eff6ff;

}

.about-wrapper {
    /* animation: 0.6s dropIn ease-out; */
}

.about-img-wrapper {
    animation: 0.6s dropIn;
}

.about-img-wrapper,
.contact-content {
    height: 874px;
    width: 1000px;
    background-size: contain;
}

.about-text-wrapper,
.contact-text-wrapper {
    height: 600px;
    width: 800px;
    position: relative;
    top: 150px;
    left: 150px;
    display: grid;
}

.about-text-wrapper {
    grid-template-rows: 1fr 8fr;
}

.about-text,
.contact-text-wrapper {
    color: #242424;

}

.about-heading {

}

.contact-wrapper {
    background-color: #eff6ff;
}

.contact-content {
    animation: 0.6s dropIn;
}

.contact-text-wrapper {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    top: 120px;
    left: 100px;
}

.contact-text {
    display: grid;
    justify-items: center;
    align-items: start;
    grid-template-rows: 30px 1fr;
    text-align: center;
    gap: 5px;
}

.hours-div {
    grid-area: 1 / 1 / 2 / 3;
    align-items: center;
    gap: -10px;
}

.location-div {
    justify-self: center;
    grid-area: 2 / 1 / 3 / 2;
    gap: 5px;
    width: 20ch;

}

.contact-div {
    grid-area: 2 / 2 / 3 / 3;
    gap: 5px;
}


@keyframes dropIn {
    from {
        /* right: -100%; */
        transform: scale(1.5);
    }
    to {
        /* right: 0%; */
        transform: scale(1);
    }
}

@keyframes slideDown {
    from {
        top: -100%;
    }
    to {
        top: 0%;
    }
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["\n:root {\n    /* --header-height: 75px; */\n}\n\n* {\n    padding : 0px;\n    margin: 0px;\n    box-sizing: border-box;\n}\n\na {\n    text-decoration: none;\n    color: inherit;\n}\n\nli {\n    list-style-type: none;\n}\n\nbody {\n    width: 100vw;\n    height: 100vh;\n    background-color: #fafafa;\n    font-size: 24px;\n    font-family: sans-serif;\n    overflow: hidden;\n    color: #3b82f6;\n    display: grid;\n    grid-template-columns: 30vw 1fr;\n    grid-template-rows: 100vh;\n}\n\n.home-page {\n    position: relative;\n    right: 0%;\n    animation: 0.6s dropIn;\n}\n\n.home-intro {\n    height: 100%;\n    display: grid;\n    grid-template-rows: 200px 50px 1fr;\n    align-items: start;\n    justify-items: center;\n    gap: 20px;\n\n    padding: 40px;\n}\n\n.home-intro-title,\n.home-intro-content {\n    color: #3b82f6;\n}\n\n.home-intro-title {\n    position: relative;\n    font-size: 2.5em;\n    line-height: 0.9em;\n    width: 350px;\n    text-align: center;\n    align-self: center;\n}\n\n.home-wave-img {\n    position: absolute;\n    transform: scale(2);\n}\n\n.wave-1 {\n    left: 100px;\n}\n\n.wave-2 {\n    transform: scale(2) rotate(180deg);\n    bottom: 45px;\n    right: 90px;\n}\n\n\n.home-intro-title::after {\n    content: \"DIVE IN!\";\n    color: #1e40af;\n    transform: rotate(15deg);\n    cursor: text;\n    pointer-events: visible;\n}\n\n.home-intro-content {\n    width: 500px;\n    text-align: center;\n}\n\n.order-links {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 75px 1fr;\n    align-items: center;\n    justify-items: center;\n    row-gap: 20px;\n    column-gap: 50px;\n}\n\n.order-online-text {\n    grid-area: 1 / 1 / 2 / 3;\n    font-size: 1em;\n    color: #1e40af;\n    font-weight: bold;\n}\n\n.order-link-logo {\n    height: 150px;\n    width: 150px;\n    cursor: pointer;\n}\n\n.doordash-logo {\n    width: 300px;\n}\n\n.home-food-img {\n    height: 400px;\n    width: auto;\n}\n\n.home-side-div {\n    background-image: url(\"./assets/pattern-7175760.svg\");\n    background-size: cover;\n    height: 100%;\n\n    display: grid;\n    grid-template-rows: 1fr 1fr;\n    align-items: center;\n    justify-items: center;\n}\n\n.home-side-title {\n    position: relative;\n    right: -25px;\n    background: #1e40af;\n    color: white;\n    height: 100px;\n    width: 400px;\n    display: grid;\n    justify-items: center;\n    align-items: center;\n    text-align: center;\n    font-size: 1.5em;\n    border-radius: 8px;\n    box-shadow: 2px 2px 2px #343434;\n    cursor: pointer;\n}\n\n.home-side-title::before {\n    position: absolute;\n    left: -425px;\n    content: url(\"./assets/plow-7565062_640-veed-remove-background.png\");\n    zoom: 25%;\n    display: inline;\n    cursor: pointer;\n}\n\n.home-nav {\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    align-self: start;\n    padding-top: 50px;\n    gap: 35px;\n}\n\n.nav-btn {\n    height: 50px;\n    width: 125px;\n    background: #1e40af;\n    color: white; \n    font-size: 1em;\n    cursor: pointer;\n    border-radius: 8px;\n    box-shadow: 1px 1px 1px #343434;\n}\n\n.menu-page {\n    background-color: #fafafa;\n    height: 100%;\n    padding: 30px;\n}\n\n.menu-selector {\n    display: grid;\n    grid-template-columns: repeat(4, minmax(150px, 1fr));\n    justify-items: center;\n    align-items: center;\n}\n\n.menu-section {\n    display: grid;\n    grid-template-rows: 50px 1fr;\n    padding: 20px;\n    align-items: center;\n    justify-items: center;\n}\n\n.menu-link {\n    cursor: pointer;\n}\n\n.menu-name {\n    font-weight: bold;\n    color: #1e40af;\n}\n\n.menu-list {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n    width: 80%;\n    gap: 40px;\n    margin-top: 30px;\n}\n\n.menu-selected {\n    opacity: 0.9;\n    text-decoration: underline;\n}\n\n.menu-item {\n    display: grid;\n    grid-template-columns: 4fr 1fr;\n    grid-template-rows: 1fr minmax(30px, 60px);\n}\n\n.menu-name {\n    grid-area: 1 / 1 / 2 / 2;\n}\n\n.menu-price {\n    grid-area: 1 / 2 / 2 / 3;\n    justify-self: end;\n}\n\n.menu-price::before {\n    content: \"$\";\n}\n\n.menu-description {\n    grid-area: 2 / 1 / -1 / 2;\n    font-size: 0.8em;\n    text-wrap: wrap;\n}\n\n.about-wrapper,\n.contact-wrapper {\n    position: relative;\n    height: 100%;\n    width: 100%;\n    display: grid;\n    align-items: center;\n    justify-items: center;\n    background-color: #eff6ff;\n\n}\n\n.about-wrapper {\n    /* animation: 0.6s dropIn ease-out; */\n}\n\n.about-img-wrapper {\n    animation: 0.6s dropIn;\n}\n\n.about-img-wrapper,\n.contact-content {\n    height: 874px;\n    width: 1000px;\n    background-size: contain;\n}\n\n.about-text-wrapper,\n.contact-text-wrapper {\n    height: 600px;\n    width: 800px;\n    position: relative;\n    top: 150px;\n    left: 150px;\n    display: grid;\n}\n\n.about-text-wrapper {\n    grid-template-rows: 1fr 8fr;\n}\n\n.about-text,\n.contact-text-wrapper {\n    color: #242424;\n\n}\n\n.about-heading {\n\n}\n\n.contact-wrapper {\n    background-color: #eff6ff;\n}\n\n.contact-content {\n    animation: 0.6s dropIn;\n}\n\n.contact-text-wrapper {\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr 1fr;\n    top: 120px;\n    left: 100px;\n}\n\n.contact-text {\n    display: grid;\n    justify-items: center;\n    align-items: start;\n    grid-template-rows: 30px 1fr;\n    text-align: center;\n    gap: 5px;\n}\n\n.hours-div {\n    grid-area: 1 / 1 / 2 / 3;\n    align-items: center;\n    gap: -10px;\n}\n\n.location-div {\n    justify-self: center;\n    grid-area: 2 / 1 / 3 / 2;\n    gap: 5px;\n    width: 20ch;\n\n}\n\n.contact-div {\n    grid-area: 2 / 2 / 3 / 3;\n    gap: 5px;\n}\n\n\n@keyframes dropIn {\n    from {\n        /* right: -100%; */\n        transform: scale(1.5);\n    }\n    to {\n        /* right: 0%; */\n        transform: scale(1);\n    }\n}\n\n@keyframes slideDown {\n    from {\n        top: -100%;\n    }\n    to {\n        top: 0%;\n    }\n}\n"],"sourceRoot":""}]);
// Exports
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

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createAboutTab: () => (/* binding */ createAboutTab)
/* harmony export */ });
/* harmony import */ var _assets_loren_biser_irDMyeyV4QE_unsplash_transparent_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/loren-biser-irDMyeyV4QE-unsplash-transparent.png */ "./src/assets/loren-biser-irDMyeyV4QE-unsplash-transparent.png");


function createAboutTab() {
    // clear the current tab
    const contentDiv = document.getElementById("content");
    contentDiv.textContent = "";

    // set class about-page to the content div
    contentDiv.setAttribute("class", "about-page");

    // create a wrapper for the whole content section
    const aboutWrapper = document.createElement("div");
    aboutWrapper.setAttribute("class", "about-wrapper");

    // create a wrapper for the scroll image, as well as the text
    const bgImgWrapper = document.createElement("div");
    bgImgWrapper.style.backgroundImage = `url(${_assets_loren_biser_irDMyeyV4QE_unsplash_transparent_png__WEBPACK_IMPORTED_MODULE_0__})`;
    bgImgWrapper.setAttribute("class", "about-img-wrapper");
    aboutWrapper.appendChild(bgImgWrapper);

    // create a div for the text portion of the page, which will be on the image
    const aboutTextWrapper = document.createElement("div");
    aboutTextWrapper.setAttribute("class", "about-text-wrapper");
    bgImgWrapper.appendChild(aboutTextWrapper);

    // create the heading
    const aboutHeading = document.createElement("h1");
    aboutHeading.textContent = "WHO WE ARE";
    aboutHeading.setAttribute("class", "about-text about-heading");
    aboutTextWrapper.appendChild(aboutHeading);

    // create the body text
    const aboutBody = document.createElement("p");
    aboutBody.textContent = "We are a pirate crew with a passion for seafood and a love for cooking delicious dishes that are the envy of the Seven Seas. Our skilled chefs expertly prepare the freshest catches of the day, from succulent grilled fish to mouth-watering seafood stews. As a crew, we are known for our unwavering commitment to quality, exceptional taste, and our ability to turn any meal into a memorable experience. So come aboard and join us for a culinary adventure that will leave you craving for more.";
    aboutBody.setAttribute("class", "about-text about-body");
    aboutTextWrapper.appendChild(aboutBody);

    contentDiv.appendChild(aboutWrapper);
}

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createContactTab: () => (/* binding */ createContactTab)
/* harmony export */ });
/* harmony import */ var _assets_loren_biser_irDMyeyV4QE_unsplash_transparent_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/loren-biser-irDMyeyV4QE-unsplash-transparent.png */ "./src/assets/loren-biser-irDMyeyV4QE-unsplash-transparent.png");


function createContactTab() {
    // clear the current tab
    const contentDiv = document.getElementById("content");
    contentDiv.textContent = "";

    // set class about-page to the content div
    contentDiv.setAttribute("class", "contact-page");

    // create a wrapper for the whole content section
    const contactWrapper = document.createElement("div");
    contactWrapper.setAttribute("class", "contact-wrapper");

    // create a wrapper for the scroll image, as well as the text
    const contactContentWrapper = document.createElement("div");
    contactContentWrapper.style.backgroundImage = `url(${_assets_loren_biser_irDMyeyV4QE_unsplash_transparent_png__WEBPACK_IMPORTED_MODULE_0__})`;
    contactContentWrapper.setAttribute("class", "contact-content");
    contactWrapper.appendChild(contactContentWrapper);

    // create a div for the text portion of the page, which will be on the image
    const contactTextWrapper = document.createElement("div");
    contactTextWrapper.setAttribute("class", "contact-text-wrapper");
    contactContentWrapper.appendChild(contactTextWrapper);

    // create divs for location, hours of business, and contact info
    const hoursDiv = document.createElement("div");
    hoursDiv.setAttribute("class", "contact-text hours-div");
    contactTextWrapper.appendChild(hoursDiv);

    const hoursHeader = document.createElement("h2");
    hoursHeader.textContent = "Hours of Business";
    hoursHeader.setAttribute("class", "hours-header");
    hoursDiv.appendChild(hoursHeader);

    const hoursList = document.createElement("ul");
    hoursList.setAttribute("class", "hours-list");
    hoursDiv.appendChild(hoursList);

    const hoursMon = document.createElement("li");
    hoursMon.textContent = "Monday - 11am to 8pm";
    const hoursTue = document.createElement("li");
    hoursTue.textContent = "Tuesday - 11am to 8pm";
    const hoursWed = document.createElement("li");
    hoursWed.textContent = "Wednesday - 11am to 8pm";
    const hoursThu = document.createElement("li");
    hoursThu.textContent = "Thursday - 11am to 8pm";
    const hoursFri = document.createElement("li");
    hoursFri.textContent = "Friday - 11am to 7pm";
    const hoursSat = document.createElement("li");
    hoursSat.textContent = "Saturday - 3pm to 8pm";
    const hoursSun = document.createElement("li");
    hoursSun.textContent = "Sunday - 3pm to 8pm";

    hoursList.appendChild(hoursMon);
    hoursList.appendChild(hoursTue);
    hoursList.appendChild(hoursWed);
    hoursList.appendChild(hoursThu);
    hoursList.appendChild(hoursFri);
    hoursList.appendChild(hoursSat);
    hoursList.appendChild(hoursSun);

    const locationDiv = document.createElement("div");
    locationDiv.setAttribute("class", "contact-text location-div");
    contactTextWrapper.appendChild(locationDiv);

    const locationHeader = document.createElement("h3");
    locationHeader.textContent = "Location";
    locationDiv.appendChild(locationHeader);

    const locationBody = document.createElement("p");
    locationBody.textContent = "1313 Middle of Nowhere, Atlantic Ocean";
    locationDiv.appendChild(locationBody);

    const contactDiv = document.createElement("div");
    contactDiv.setAttribute("class", "contact-text contact-div");
    contactTextWrapper.appendChild(contactDiv);

    const contactHeader = document.createElement("h3");
    contactHeader.textContent = "Contact";
    contactDiv.appendChild(contactHeader);
    
    const contactInfoWrapper = document.createElement("div");
    contactDiv.appendChild(contactInfoWrapper);

    const contactPhone = document.createElement("p");
    contactPhone.textContent = "555-555-1111";
    contactInfoWrapper.appendChild(contactPhone);

    const contactEmail = document.createElement("p");
    contactEmail.textContent = "fakeemail@notreal.com";
    contactInfoWrapper.appendChild(contactEmail);
    

    contentDiv.appendChild(contactWrapper);
}

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createHomeTab: () => (/* binding */ createHomeTab)
/* harmony export */ });
/* harmony import */ var _assets_uber_eats_logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/uber-eats-logo.png */ "./src/assets/uber-eats-logo.png");
/* harmony import */ var _assets_doordash_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/doordash-logo.png */ "./src/assets/doordash-logo.png");
/* harmony import */ var _assets_wave4_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/wave4.svg */ "./src/assets/wave4.svg");




function createHomeTab() {
    // clear the current tab
    const contentDiv = document.getElementById("content");
    contentDiv.textContent = "";

    const div = document.getElementById("content");
    div.setAttribute("class", "home-page");

    // create the right side of the page, containing a hero and links to order online
    const divHomeIntro = document.createElement("div");
    divHomeIntro.setAttribute("class", "home-intro");

    // wave svg images 
    const wave1 = new Image();
    wave1.src = _assets_wave4_svg__WEBPACK_IMPORTED_MODULE_2__;
    wave1.setAttribute("class", "home-wave-img wave-1");

    const wave2 = new Image();
    wave2.src = _assets_wave4_svg__WEBPACK_IMPORTED_MODULE_2__;
    wave2.setAttribute("class", "home-wave-img wave-2");

    divHomeIntro.appendChild(wave1);
    divHomeIntro.appendChild(wave2);

    const introTitle = document.createElement("h1");
    introTitle.setAttribute("class", "home-intro-title");
    introTitle.textContent = "IT'S TIME TO ";
    divHomeIntro.appendChild(introTitle);

    const introContent = document.createElement("h3");
    introContent.textContent = "We have the best seafood in town!";
    introContent.setAttribute("class", "home-intro-content");
    divHomeIntro.appendChild(introContent);

    const orderLinksDiv = document.createElement("div");
    orderLinksDiv.setAttribute("class", "order-links");
    divHomeIntro.appendChild(orderLinksDiv);

    const orderOnlinePara = document.createElement("p");
    orderOnlinePara.textContent = "Order online today!"
    orderOnlinePara.setAttribute("class", "order-online-text");
    orderLinksDiv.appendChild(orderOnlinePara);

    const uberEatsImg = new Image();
    uberEatsImg.src = _assets_uber_eats_logo_png__WEBPACK_IMPORTED_MODULE_0__;
    uberEatsImg.setAttribute("class", "order-link-logo");
    orderLinksDiv.appendChild(uberEatsImg);

    const doorDashImg = new Image();
    doorDashImg.src = _assets_doordash_logo_png__WEBPACK_IMPORTED_MODULE_1__;
    doorDashImg.setAttribute("class", "order-link-logo doordash-logo");
    orderLinksDiv.appendChild(doorDashImg);

    div.appendChild(divHomeIntro);
}

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createMenuTab: () => (/* binding */ createMenuTab)
/* harmony export */ });

function createMenuItem(name, price, description="") {
    const menuItem = document.createElement("div");
    menuItem.setAttribute("class", "menu-item");

    const itemName = document.createElement("div");
    itemName.setAttribute("class", "menu-name");
    itemName.textContent = name;
    menuItem.appendChild(itemName);
    
    const itemPrice = document.createElement("span");
    itemPrice.setAttribute("class", "menu-price");
    itemPrice.textContent = price;
    menuItem.appendChild(itemPrice);


    const itemDescription = document.createElement("div");
    itemDescription.setAttribute("class", "menu-description");
    itemDescription.textContent = description;
    menuItem.appendChild(itemDescription);

    return menuItem;
}

function createAppetizerMenu() {
    const menuSection = document.querySelector(".menu-section");
    
    if (!(menuSection.classList.contains("menu-appetizer"))){
        const appetizerLink = document.querySelector(".appetizer-link");
        const menuList = document.querySelector(".menu-list");
        const menuTitle = document.querySelector(".menu-title");

        // reset previous choices
        menuList.textContent = "";

        // select current link
        const menuLinks = document.querySelectorAll(".menu-link");
        menuLinks.forEach(link => link.classList.remove("menu-selected"));
        appetizerLink.classList.add("menu-selected");
        menuSection.setAttribute("class", "menu-section menu-appetizer");
        
        // set new menu title
        menuTitle.textContent = "Appetizers & Salads";

        // create menu item divs
        menuList.appendChild(createMenuItem("Fries", "5.49", "Golden, crispy fries"));
        menuList.appendChild(createMenuItem("Garlic Bread", "6.49"));
        menuList.appendChild(createMenuItem("Cheesy Bread", "6.49"));
        menuList.appendChild(createMenuItem("Breaded Shrimp", "9.99", "with marinara sauce"));
        menuList.appendChild(createMenuItem("Coconut Shrimp", "10.99", "with tartar sauce"));
        menuList.appendChild(createMenuItem("Poutine", "6.49", "Delicious fries topped with gravy and fresh cheese curds"));
        menuList.appendChild(createMenuItem("Sweet Potato Fries", "5.49", "with spicy mayo"));
        menuList.appendChild(createMenuItem("Onion Rings", "6.99"));
    }
}

function createFACMenu() {
    const menuSection = document.querySelector(".menu-section");

    if (!(menuSection.classList.contains("menu-fac"))){
        const FACLink = document.querySelector(".fac-link");
        const menuList = document.querySelector(".menu-list");
        const menuTitle = document.querySelector(".menu-title");

        // reset previous choices
        menuList.textContent = "";

        // select current link
        const menuLinks = document.querySelectorAll(".menu-link");
        menuLinks.forEach(link => link.classList.remove("menu-selected"));
        FACLink.classList.add("menu-selected");
        menuSection.setAttribute("class", "menu-section menu-fac");
        
        // set new menu title
        menuTitle.textContent = "Fish and Chips";

        // create menu items and add them to the menu list section
        menuList.appendChild(createMenuItem("Haddock (1 Pc)", "10.49"));
        menuList.appendChild(createMenuItem("Haddock (2 Pc)", "14.99"));
        menuList.appendChild(createMenuItem("Cod (1 Pc)", "14.49"));
        menuList.appendChild(createMenuItem("Cod (2 Pc)", "18.49"));
        menuList.appendChild(createMenuItem("Halibut (1 Pc)", "10.49"));
        menuList.appendChild(createMenuItem("Halibut (2 Pc)", "14.99"));
        menuList.appendChild(createMenuItem("Pollock (1 Pc)", "10.49"));
        menuList.appendChild(createMenuItem("Pollock (2 Pc)", "14.99"));

    }
}

function createCombosMenu() {
    const menuSection = document.querySelector(".menu-section");

    if (!(menuSection.classList.contains("menu-combos"))){
        const combosLink = document.querySelector(".combos-link");
        const menuList = document.querySelector(".menu-list");
        const menuTitle = document.querySelector(".menu-title");

        // reset previous choices
        menuList.textContent = "";

        // select current link
        const menuLinks = document.querySelectorAll(".menu-link");
        menuLinks.forEach(link => link.classList.remove("menu-selected"));
        combosLink.classList.add("menu-selected");
        menuSection.setAttribute("class", "menu-section menu-combos");
        
        // set new menu title
        menuTitle.textContent = "Seafood Combos";

        // create menu items and add them to the menu list section
        menuList.appendChild(createMenuItem("Shrimp Platter", "18.99", "10 pieces of grilled shrimp on a plate of fried rice"));
        menuList.appendChild(createMenuItem("Seafood Sampler", "27.99", "2 pieces of your choice of fish, 5 pieces of shrimp, and any 2 appetizers"));
    }
}

function createSandwichMenu() {
    const menuSection = document.querySelector(".menu-section");

    if (!(menuSection.classList.contains("menu-sandwich"))){
        const sandwichesLink = document.querySelector(".sandwiches-link");
        const menuList = document.querySelector(".menu-list");
        const menuTitle = document.querySelector(".menu-title");

        // reset previous choices
        menuList.textContent = "";

         // select current link
         const menuLinks = document.querySelectorAll(".menu-link");
         menuLinks.forEach(link => link.classList.remove("menu-selected"));
         sandwichesLink.classList.add("menu-selected");
         menuSection.setAttribute("class", "menu-section menu-sandwich");
         
         // set new menu title
         menuTitle.textContent = "Sandwiches & Burgers";

        // create menu items and add them to the menu list section
        menuList.appendChild(createMenuItem("Fish Burger", "15.25", "Breaded haddock with lettuce, tomato and mayo"));
        menuList.appendChild(createMenuItem("Chicken Breast Burger", "12.29", "Grilled chicken breast with lettuce and tomato on a sesame bun"));
        menuList.appendChild(createMenuItem("Shrimp Wrap", "12.49", "Breaded shrimp with lettuce, pickles and tartar sauce in a pita wrap"));
        menuList.appendChild(createMenuItem("Chicken Wrap", "11.49", "Grilled chicken pieces with lettuce and mayo wrapped in pita"));
    }
}

function createMenuTab() {
    // clear the current tab
    const contentDiv = document.getElementById("content");
    contentDiv.textContent = "";

    // set class of #content to get menu page styles
    contentDiv.setAttribute("class", "menu-page");

    // create the div that contains the meals
    const menuWrapper = document.createElement("div");
    menuWrapper.setAttribute("class", "menu-wrapper");

    //create the menu selector links and add event listeners to them to change the menu list
    const menuSelector = document.createElement("div");
    menuSelector.setAttribute("class", "menu-selector");
    menuWrapper.appendChild(menuSelector);

    // create appetizer link and add event listener
    const menuLinkAppetizer = document.createElement("a");
    menuLinkAppetizer.textContent = "Appetizers & Salads";
    menuLinkAppetizer.setAttribute("class", "menu-link appetizer-link");
    menuSelector.appendChild(menuLinkAppetizer);
    menuLinkAppetizer.addEventListener("click", createAppetizerMenu);

    // create fish n chips link
    const menuLinkFAC = document.createElement("a");
    menuLinkFAC.textContent = "Fish and Chips";
    menuLinkFAC.setAttribute("class", "menu-link fac-link");
    menuSelector.appendChild(menuLinkFAC);
    menuLinkFAC.addEventListener("click", createFACMenu);

    // create seafood combos link
    const menuLinkCombos = document.createElement("a");
    menuLinkCombos.textContent = "Seafood Combos";
    menuLinkCombos.setAttribute("class", "menu-link combos-link");
    menuSelector.appendChild(menuLinkCombos);
    menuLinkCombos.addEventListener("click", createCombosMenu);

    // create sandwiches link
    const menuLinkSandwiches = document.createElement("a");
    menuLinkSandwiches.textContent = "Sandwiches & Burgers";
    menuLinkSandwiches.setAttribute("class", "menu-link sandwiches-link");
    menuSelector.appendChild(menuLinkSandwiches);
    menuLinkSandwiches.addEventListener("click", createSandwichMenu);

    // create divs for where the menu items appear
    const menuSection = document.createElement("section");
    menuSection.setAttribute("class", "menu-section");
    menuWrapper.appendChild(menuSection);

    const menuTitle = document.createElement("header");
    menuTitle.setAttribute("class", "menu-title");
    menuSection.appendChild(menuTitle);

    const menuList = document.createElement("div");
    menuList.setAttribute("class", "menu-list");
    menuSection.appendChild(menuList);

    contentDiv.appendChild(menuWrapper);

    // this is called so that appetizer shows on initial "Menu" button click
    createAppetizerMenu();
}

/***/ }),

/***/ "./src/assets/doordash-logo.png":
/*!**************************************!*\
  !*** ./src/assets/doordash-logo.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c3cd6098c870d5d41d07.png";

/***/ }),

/***/ "./src/assets/loren-biser-irDMyeyV4QE-unsplash-transparent.png":
/*!*********************************************************************!*\
  !*** ./src/assets/loren-biser-irDMyeyV4QE-unsplash-transparent.png ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5aa1f771560bec105fe5.png";

/***/ }),

/***/ "./src/assets/pattern-7175760.svg":
/*!****************************************!*\
  !*** ./src/assets/pattern-7175760.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "328ec0c78302252203fd.svg";

/***/ }),

/***/ "./src/assets/plow-7565062_640-veed-remove-background.png":
/*!****************************************************************!*\
  !*** ./src/assets/plow-7565062_640-veed-remove-background.png ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "38f971de5e69d11605d9.png";

/***/ }),

/***/ "./src/assets/uber-eats-logo.png":
/*!***************************************!*\
  !*** ./src/assets/uber-eats-logo.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a73d9588f37b3092b534.png";

/***/ }),

/***/ "./src/assets/wave4.svg":
/*!******************************!*\
  !*** ./src/assets/wave4.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d8a906a2c52f1398a39f.svg";

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about */ "./src/about.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ "./src/contact.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ "./src/style.css");






document.addEventListener("DOMContentLoaded", _home__WEBPACK_IMPORTED_MODULE_0__.createHomeTab);

const homeButton = document.querySelector(".home-side-title");
homeButton.addEventListener("click", _home__WEBPACK_IMPORTED_MODULE_0__.createHomeTab);

const menuButton = document.querySelector(".home-menu-btn");
menuButton.addEventListener("click", _menu__WEBPACK_IMPORTED_MODULE_1__.createMenuTab);

const aboutButton = document.querySelector(".home-about-btn");
aboutButton.addEventListener("click", _about__WEBPACK_IMPORTED_MODULE_2__.createAboutTab);

const contactButton = document.querySelector(".home-contact-btn");
contactButton.addEventListener("click", _contact__WEBPACK_IMPORTED_MODULE_3__.createContactTab);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLHFJQUErQztBQUMzRiw0Q0FBNEMscUxBQXVFO0FBQ25ILDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0QkFBNEIsbUNBQW1DO0FBQy9EO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsbUNBQW1DO0FBQ3REO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSx3Q0FBd0M7QUFDeEM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLDRFQUE0RSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsWUFBWSxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxZQUFZLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFh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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvRnlEO0FBQ0Q7QUFDWjs7QUFFckM7QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdCQUFnQiw4Q0FBVTtBQUMxQjs7QUFFQTtBQUNBLGdCQUFnQiw4Q0FBVTtBQUMxQjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNCQUFzQix1REFBYztBQUNwQztBQUNBOztBQUVBO0FBQ0Esc0JBQXNCLHNEQUFjO0FBQ3BDO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDekRBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQzdNQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7Ozs7O0FDQXVDO0FBQ0E7QUFDRTtBQUNJO0FBQ3hCOztBQUVyQiw4Q0FBOEMsZ0RBQWE7O0FBRTNEO0FBQ0EscUNBQXFDLGdEQUFhOztBQUVsRDtBQUNBLHFDQUFxQyxnREFBYTs7QUFFbEQ7QUFDQSxzQ0FBc0Msa0RBQWM7O0FBRXBEO0FBQ0Esd0NBQXdDLHNEQUFnQixFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Fib3V0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9wYXR0ZXJuLTcxNzU3NjAuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvcGxvdy03NTY1MDYyXzY0MC12ZWVkLXJlbW92ZS1iYWNrZ3JvdW5kLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYFxuOnJvb3Qge1xuICAgIC8qIC0taGVhZGVyLWhlaWdodDogNzVweDsgKi9cbn1cblxuKiB7XG4gICAgcGFkZGluZyA6IDBweDtcbiAgICBtYXJnaW46IDBweDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5hIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6IGluaGVyaXQ7XG59XG5cbmxpIHtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG59XG5cbmJvZHkge1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgY29sb3I6ICMzYjgyZjY7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwdncgMWZyO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTAwdmg7XG59XG5cbi5ob21lLXBhZ2Uge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICByaWdodDogMCU7XG4gICAgYW5pbWF0aW9uOiAwLjZzIGRyb3BJbjtcbn1cblxuLmhvbWUtaW50cm8ge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMjAwcHggNTBweCAxZnI7XG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDIwcHg7XG5cbiAgICBwYWRkaW5nOiA0MHB4O1xufVxuXG4uaG9tZS1pbnRyby10aXRsZSxcbi5ob21lLWludHJvLWNvbnRlbnQge1xuICAgIGNvbG9yOiAjM2I4MmY2O1xufVxuXG4uaG9tZS1pbnRyby10aXRsZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGZvbnQtc2l6ZTogMi41ZW07XG4gICAgbGluZS1oZWlnaHQ6IDAuOWVtO1xuICAgIHdpZHRoOiAzNTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuXG4uaG9tZS13YXZlLWltZyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMik7XG59XG5cbi53YXZlLTEge1xuICAgIGxlZnQ6IDEwMHB4O1xufVxuXG4ud2F2ZS0yIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDIpIHJvdGF0ZSgxODBkZWcpO1xuICAgIGJvdHRvbTogNDVweDtcbiAgICByaWdodDogOTBweDtcbn1cblxuXG4uaG9tZS1pbnRyby10aXRsZTo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiRElWRSBJTiFcIjtcbiAgICBjb2xvcjogIzFlNDBhZjtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxNWRlZyk7XG4gICAgY3Vyc29yOiB0ZXh0O1xuICAgIHBvaW50ZXItZXZlbnRzOiB2aXNpYmxlO1xufVxuXG4uaG9tZS1pbnRyby1jb250ZW50IHtcbiAgICB3aWR0aDogNTAwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ub3JkZXItbGlua3Mge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNzVweCAxZnI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgcm93LWdhcDogMjBweDtcbiAgICBjb2x1bW4tZ2FwOiA1MHB4O1xufVxuXG4ub3JkZXItb25saW5lLXRleHQge1xuICAgIGdyaWQtYXJlYTogMSAvIDEgLyAyIC8gMztcbiAgICBmb250LXNpemU6IDFlbTtcbiAgICBjb2xvcjogIzFlNDBhZjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLm9yZGVyLWxpbmstbG9nbyB7XG4gICAgaGVpZ2h0OiAxNTBweDtcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZG9vcmRhc2gtbG9nbyB7XG4gICAgd2lkdGg6IDMwMHB4O1xufVxuXG4uaG9tZS1mb29kLWltZyB7XG4gICAgaGVpZ2h0OiA0MDBweDtcbiAgICB3aWR0aDogYXV0bztcbn1cblxuLmhvbWUtc2lkZS1kaXYge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGhlaWdodDogMTAwJTtcblxuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xufVxuXG4uaG9tZS1zaWRlLXRpdGxlIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcmlnaHQ6IC0yNXB4O1xuICAgIGJhY2tncm91bmQ6ICMxZTQwYWY7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgd2lkdGg6IDQwMHB4O1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGJveC1zaGFkb3c6IDJweCAycHggMnB4ICMzNDM0MzQ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uaG9tZS1zaWRlLXRpdGxlOjpiZWZvcmUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAtNDI1cHg7XG4gICAgY29udGVudDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xuICAgIHpvb206IDI1JTtcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uaG9tZS1uYXYge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcbiAgICBhbGlnbi1zZWxmOiBzdGFydDtcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcbiAgICBnYXA6IDM1cHg7XG59XG5cbi5uYXYtYnRuIHtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgd2lkdGg6IDEyNXB4O1xuICAgIGJhY2tncm91bmQ6ICMxZTQwYWY7XG4gICAgY29sb3I6IHdoaXRlOyBcbiAgICBmb250LXNpemU6IDFlbTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMXB4ICMzNDM0MzQ7XG59XG5cbi5tZW51LXBhZ2Uge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBhZGRpbmc6IDMwcHg7XG59XG5cbi5tZW51LXNlbGVjdG9yIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIG1pbm1heCgxNTBweCwgMWZyKSk7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5tZW51LXNlY3Rpb24ge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1MHB4IDFmcjtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xufVxuXG4ubWVudS1saW5rIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5tZW51LW5hbWUge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiAjMWU0MGFmO1xufVxuXG4ubWVudS1saXN0IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjUwcHgsIDFmcikpO1xuICAgIHdpZHRoOiA4MCU7XG4gICAgZ2FwOiA0MHB4O1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG59XG5cbi5tZW51LXNlbGVjdGVkIHtcbiAgICBvcGFjaXR5OiAwLjk7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbi5tZW51LWl0ZW0ge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0ZnIgMWZyO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIG1pbm1heCgzMHB4LCA2MHB4KTtcbn1cblxuLm1lbnUtbmFtZSB7XG4gICAgZ3JpZC1hcmVhOiAxIC8gMSAvIDIgLyAyO1xufVxuXG4ubWVudS1wcmljZSB7XG4gICAgZ3JpZC1hcmVhOiAxIC8gMiAvIDIgLyAzO1xuICAgIGp1c3RpZnktc2VsZjogZW5kO1xufVxuXG4ubWVudS1wcmljZTo6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlxcJFwiO1xufVxuXG4ubWVudS1kZXNjcmlwdGlvbiB7XG4gICAgZ3JpZC1hcmVhOiAyIC8gMSAvIC0xIC8gMjtcbiAgICBmb250LXNpemU6IDAuOGVtO1xuICAgIHRleHQtd3JhcDogd3JhcDtcbn1cblxuLmFib3V0LXdyYXBwZXIsXG4uY29udGFjdC13cmFwcGVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VmZjZmZjtcblxufVxuXG4uYWJvdXQtd3JhcHBlciB7XG4gICAgLyogYW5pbWF0aW9uOiAwLjZzIGRyb3BJbiBlYXNlLW91dDsgKi9cbn1cblxuLmFib3V0LWltZy13cmFwcGVyIHtcbiAgICBhbmltYXRpb246IDAuNnMgZHJvcEluO1xufVxuXG4uYWJvdXQtaW1nLXdyYXBwZXIsXG4uY29udGFjdC1jb250ZW50IHtcbiAgICBoZWlnaHQ6IDg3NHB4O1xuICAgIHdpZHRoOiAxMDAwcHg7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xufVxuXG4uYWJvdXQtdGV4dC13cmFwcGVyLFxuLmNvbnRhY3QtdGV4dC13cmFwcGVyIHtcbiAgICBoZWlnaHQ6IDYwMHB4O1xuICAgIHdpZHRoOiA4MDBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAxNTBweDtcbiAgICBsZWZ0OiAxNTBweDtcbiAgICBkaXNwbGF5OiBncmlkO1xufVxuXG4uYWJvdXQtdGV4dC13cmFwcGVyIHtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA4ZnI7XG59XG5cbi5hYm91dC10ZXh0LFxuLmNvbnRhY3QtdGV4dC13cmFwcGVyIHtcbiAgICBjb2xvcjogIzI0MjQyNDtcblxufVxuXG4uYWJvdXQtaGVhZGluZyB7XG5cbn1cblxuLmNvbnRhY3Qtd3JhcHBlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VmZjZmZjtcbn1cblxuLmNvbnRhY3QtY29udGVudCB7XG4gICAgYW5pbWF0aW9uOiAwLjZzIGRyb3BJbjtcbn1cblxuLmNvbnRhY3QtdGV4dC13cmFwcGVyIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xuICAgIHRvcDogMTIwcHg7XG4gICAgbGVmdDogMTAwcHg7XG59XG5cbi5jb250YWN0LXRleHQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDMwcHggMWZyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBnYXA6IDVweDtcbn1cblxuLmhvdXJzLWRpdiB7XG4gICAgZ3JpZC1hcmVhOiAxIC8gMSAvIDIgLyAzO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAtMTBweDtcbn1cblxuLmxvY2F0aW9uLWRpdiB7XG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gICAgZ3JpZC1hcmVhOiAyIC8gMSAvIDMgLyAyO1xuICAgIGdhcDogNXB4O1xuICAgIHdpZHRoOiAyMGNoO1xuXG59XG5cbi5jb250YWN0LWRpdiB7XG4gICAgZ3JpZC1hcmVhOiAyIC8gMiAvIDMgLyAzO1xuICAgIGdhcDogNXB4O1xufVxuXG5cbkBrZXlmcmFtZXMgZHJvcEluIHtcbiAgICBmcm9tIHtcbiAgICAgICAgLyogcmlnaHQ6IC0xMDAlOyAqL1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7XG4gICAgfVxuICAgIHRvIHtcbiAgICAgICAgLyogcmlnaHQ6IDAlOyAqL1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIH1cbn1cblxuQGtleWZyYW1lcyBzbGlkZURvd24ge1xuICAgIGZyb20ge1xuICAgICAgICB0b3A6IC0xMDAlO1xuICAgIH1cbiAgICB0byB7XG4gICAgICAgIHRvcDogMCU7XG4gICAgfVxufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFDQTtJQUNJLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixXQUFXO0lBQ1gsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsYUFBYTtJQUNiLCtCQUErQjtJQUMvQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0NBQWtDO0lBQ2xDLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsU0FBUzs7SUFFVCxhQUFhO0FBQ2pCOztBQUVBOztJQUVJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxrQ0FBa0M7SUFDbEMsWUFBWTtJQUNaLFdBQVc7QUFDZjs7O0FBR0E7SUFDSSxtQkFBbUI7SUFDbkIsY0FBYztJQUNkLHdCQUF3QjtJQUN4QixZQUFZO0lBQ1osdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsNEJBQTRCO0lBQzVCLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsYUFBYTtJQUNiLGdCQUFnQjtB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O0FBRWY7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsUUFBUTtBQUNaOzs7QUFHQTtJQUNJO1FBQ0ksa0JBQWtCO1FBQ2xCLHFCQUFxQjtJQUN6QjtJQUNBO1FBQ0ksZUFBZTtRQUNmLG1CQUFtQjtJQUN2QjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxVQUFVO0lBQ2Q7SUFDQTtRQUNJLE9BQU87SUFDWDtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcbjpyb290IHtcXG4gICAgLyogLS1oZWFkZXItaGVpZ2h0OiA3NXB4OyAqL1xcbn1cXG5cXG4qIHtcXG4gICAgcGFkZGluZyA6IDBweDtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmEge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGNvbG9yOiBpbmhlcml0O1xcbn1cXG5cXG5saSB7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG59XFxuXFxuYm9keSB7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgY29sb3I6ICMzYjgyZjY7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzB2dyAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTAwdmg7XFxufVxcblxcbi5ob21lLXBhZ2Uge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHJpZ2h0OiAwJTtcXG4gICAgYW5pbWF0aW9uOiAwLjZzIGRyb3BJbjtcXG59XFxuXFxuLmhvbWUtaW50cm8ge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMjAwcHggNTBweCAxZnI7XFxuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDIwcHg7XFxuXFxuICAgIHBhZGRpbmc6IDQwcHg7XFxufVxcblxcbi5ob21lLWludHJvLXRpdGxlLFxcbi5ob21lLWludHJvLWNvbnRlbnQge1xcbiAgICBjb2xvcjogIzNiODJmNjtcXG59XFxuXFxuLmhvbWUtaW50cm8tdGl0bGUge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGZvbnQtc2l6ZTogMi41ZW07XFxuICAgIGxpbmUtaGVpZ2h0OiAwLjllbTtcXG4gICAgd2lkdGg6IDM1MHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLmhvbWUtd2F2ZS1pbWcge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMik7XFxufVxcblxcbi53YXZlLTEge1xcbiAgICBsZWZ0OiAxMDBweDtcXG59XFxuXFxuLndhdmUtMiB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMikgcm90YXRlKDE4MGRlZyk7XFxuICAgIGJvdHRvbTogNDVweDtcXG4gICAgcmlnaHQ6IDkwcHg7XFxufVxcblxcblxcbi5ob21lLWludHJvLXRpdGxlOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6IFxcXCJESVZFIElOIVxcXCI7XFxuICAgIGNvbG9yOiAjMWU0MGFmO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxNWRlZyk7XFxuICAgIGN1cnNvcjogdGV4dDtcXG4gICAgcG9pbnRlci1ldmVudHM6IHZpc2libGU7XFxufVxcblxcbi5ob21lLWludHJvLWNvbnRlbnQge1xcbiAgICB3aWR0aDogNTAwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLm9yZGVyLWxpbmtzIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDc1cHggMWZyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIHJvdy1nYXA6IDIwcHg7XFxuICAgIGNvbHVtbi1nYXA6IDUwcHg7XFxufVxcblxcbi5vcmRlci1vbmxpbmUtdGV4dCB7XFxuICAgIGdyaWQtYXJlYTogMSAvIDEgLyAyIC8gMztcXG4gICAgZm9udC1zaXplOiAxZW07XFxuICAgIGNvbG9yOiAjMWU0MGFmO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLm9yZGVyLWxpbmstbG9nbyB7XFxuICAgIGhlaWdodDogMTUwcHg7XFxuICAgIHdpZHRoOiAxNTBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZG9vcmRhc2gtbG9nbyB7XFxuICAgIHdpZHRoOiAzMDBweDtcXG59XFxuXFxuLmhvbWUtZm9vZC1pbWcge1xcbiAgICBoZWlnaHQ6IDQwMHB4O1xcbiAgICB3aWR0aDogYXV0bztcXG59XFxuXFxuLmhvbWUtc2lkZS1kaXYge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4vYXNzZXRzL3BhdHRlcm4tNzE3NTc2MC5zdmdcXFwiKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmhvbWUtc2lkZS10aXRsZSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgcmlnaHQ6IC0yNXB4O1xcbiAgICBiYWNrZ3JvdW5kOiAjMWU0MGFmO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGhlaWdodDogMTAwcHg7XFxuICAgIHdpZHRoOiA0MDBweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMS41ZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAycHggIzM0MzQzNDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uaG9tZS1zaWRlLXRpdGxlOjpiZWZvcmUge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IC00MjVweDtcXG4gICAgY29udGVudDogdXJsKFxcXCIuL2Fzc2V0cy9wbG93LTc1NjUwNjJfNjQwLXZlZWQtcmVtb3ZlLWJhY2tncm91bmQucG5nXFxcIik7XFxuICAgIHpvb206IDI1JTtcXG4gICAgZGlzcGxheTogaW5saW5lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5ob21lLW5hdiB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxuICAgIGFsaWduLXNlbGY6IHN0YXJ0O1xcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcXG4gICAgZ2FwOiAzNXB4O1xcbn1cXG5cXG4ubmF2LWJ0biB7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgd2lkdGg6IDEyNXB4O1xcbiAgICBiYWNrZ3JvdW5kOiAjMWU0MGFmO1xcbiAgICBjb2xvcjogd2hpdGU7IFxcbiAgICBmb250LXNpemU6IDFlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMXB4ICMzNDM0MzQ7XFxufVxcblxcbi5tZW51LXBhZ2Uge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDMwcHg7XFxufVxcblxcbi5tZW51LXNlbGVjdG9yIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgbWlubWF4KDE1MHB4LCAxZnIpKTtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubWVudS1zZWN0aW9uIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1MHB4IDFmcjtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubWVudS1saW5rIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubWVudS1uYW1lIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGNvbG9yOiAjMWU0MGFmO1xcbn1cXG5cXG4ubWVudS1saXN0IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyNTBweCwgMWZyKSk7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGdhcDogNDBweDtcXG4gICAgbWFyZ2luLXRvcDogMzBweDtcXG59XFxuXFxuLm1lbnUtc2VsZWN0ZWQge1xcbiAgICBvcGFjaXR5OiAwLjk7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG4ubWVudS1pdGVtIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0ZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciBtaW5tYXgoMzBweCwgNjBweCk7XFxufVxcblxcbi5tZW51LW5hbWUge1xcbiAgICBncmlkLWFyZWE6IDEgLyAxIC8gMiAvIDI7XFxufVxcblxcbi5tZW51LXByaWNlIHtcXG4gICAgZ3JpZC1hcmVhOiAxIC8gMiAvIDIgLyAzO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG59XFxuXFxuLm1lbnUtcHJpY2U6OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCIkXFxcIjtcXG59XFxuXFxuLm1lbnUtZGVzY3JpcHRpb24ge1xcbiAgICBncmlkLWFyZWE6IDIgLyAxIC8gLTEgLyAyO1xcbiAgICBmb250LXNpemU6IDAuOGVtO1xcbiAgICB0ZXh0LXdyYXA6IHdyYXA7XFxufVxcblxcbi5hYm91dC13cmFwcGVyLFxcbi5jb250YWN0LXdyYXBwZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VmZjZmZjtcXG5cXG59XFxuXFxuLmFib3V0LXdyYXBwZXIge1xcbiAgICAvKiBhbmltYXRpb246IDAuNnMgZHJvcEluIGVhc2Utb3V0OyAqL1xcbn1cXG5cXG4uYWJvdXQtaW1nLXdyYXBwZXIge1xcbiAgICBhbmltYXRpb246IDAuNnMgZHJvcEluO1xcbn1cXG5cXG4uYWJvdXQtaW1nLXdyYXBwZXIsXFxuLmNvbnRhY3QtY29udGVudCB7XFxuICAgIGhlaWdodDogODc0cHg7XFxuICAgIHdpZHRoOiAxMDAwcHg7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG59XFxuXFxuLmFib3V0LXRleHQtd3JhcHBlcixcXG4uY29udGFjdC10ZXh0LXdyYXBwZXIge1xcbiAgICBoZWlnaHQ6IDYwMHB4O1xcbiAgICB3aWR0aDogODAwcHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiAxNTBweDtcXG4gICAgbGVmdDogMTUwcHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxufVxcblxcbi5hYm91dC10ZXh0LXdyYXBwZXIge1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA4ZnI7XFxufVxcblxcbi5hYm91dC10ZXh0LFxcbi5jb250YWN0LXRleHQtd3JhcHBlciB7XFxuICAgIGNvbG9yOiAjMjQyNDI0O1xcblxcbn1cXG5cXG4uYWJvdXQtaGVhZGluZyB7XFxuXFxufVxcblxcbi5jb250YWN0LXdyYXBwZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZmNmZmO1xcbn1cXG5cXG4uY29udGFjdC1jb250ZW50IHtcXG4gICAgYW5pbWF0aW9uOiAwLjZzIGRyb3BJbjtcXG59XFxuXFxuLmNvbnRhY3QtdGV4dC13cmFwcGVyIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxuICAgIHRvcDogMTIwcHg7XFxuICAgIGxlZnQ6IDEwMHB4O1xcbn1cXG5cXG4uY29udGFjdC10ZXh0IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMzBweCAxZnI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZ2FwOiA1cHg7XFxufVxcblxcbi5ob3Vycy1kaXYge1xcbiAgICBncmlkLWFyZWE6IDEgLyAxIC8gMiAvIDM7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogLTEwcHg7XFxufVxcblxcbi5sb2NhdGlvbi1kaXYge1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgZ3JpZC1hcmVhOiAyIC8gMSAvIDMgLyAyO1xcbiAgICBnYXA6IDVweDtcXG4gICAgd2lkdGg6IDIwY2g7XFxuXFxufVxcblxcbi5jb250YWN0LWRpdiB7XFxuICAgIGdyaWQtYXJlYTogMiAvIDIgLyAzIC8gMztcXG4gICAgZ2FwOiA1cHg7XFxufVxcblxcblxcbkBrZXlmcmFtZXMgZHJvcEluIHtcXG4gICAgZnJvbSB7XFxuICAgICAgICAvKiByaWdodDogLTEwMCU7ICovXFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7XFxuICAgIH1cXG4gICAgdG8ge1xcbiAgICAgICAgLyogcmlnaHQ6IDAlOyAqL1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNsaWRlRG93biB7XFxuICAgIGZyb20ge1xcbiAgICAgICAgdG9wOiAtMTAwJTtcXG4gICAgfVxcbiAgICB0byB7XFxuICAgICAgICB0b3A6IDAlO1xcbiAgICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IGFib3V0QmdJbWdTcmMgZnJvbSBcIi4vYXNzZXRzL2xvcmVuLWJpc2VyLWlyRE15ZXlWNFFFLXVuc3BsYXNoLXRyYW5zcGFyZW50LnBuZ1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQWJvdXRUYWIoKSB7XG4gICAgLy8gY2xlYXIgdGhlIGN1cnJlbnQgdGFiXG4gICAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbiAgICBjb250ZW50RGl2LnRleHRDb250ZW50ID0gXCJcIjtcblxuICAgIC8vIHNldCBjbGFzcyBhYm91dC1wYWdlIHRvIHRoZSBjb250ZW50IGRpdlxuICAgIGNvbnRlbnREaXYuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJhYm91dC1wYWdlXCIpO1xuXG4gICAgLy8gY3JlYXRlIGEgd3JhcHBlciBmb3IgdGhlIHdob2xlIGNvbnRlbnQgc2VjdGlvblxuICAgIGNvbnN0IGFib3V0V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYWJvdXRXcmFwcGVyLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiYWJvdXQtd3JhcHBlclwiKTtcblxuICAgIC8vIGNyZWF0ZSBhIHdyYXBwZXIgZm9yIHRoZSBzY3JvbGwgaW1hZ2UsIGFzIHdlbGwgYXMgdGhlIHRleHRcbiAgICBjb25zdCBiZ0ltZ1dyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGJnSW1nV3JhcHBlci5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7YWJvdXRCZ0ltZ1NyY30pYDtcbiAgICBiZ0ltZ1dyYXBwZXIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJhYm91dC1pbWctd3JhcHBlclwiKTtcbiAgICBhYm91dFdyYXBwZXIuYXBwZW5kQ2hpbGQoYmdJbWdXcmFwcGVyKTtcblxuICAgIC8vIGNyZWF0ZSBhIGRpdiBmb3IgdGhlIHRleHQgcG9ydGlvbiBvZiB0aGUgcGFnZSwgd2hpY2ggd2lsbCBiZSBvbiB0aGUgaW1hZ2VcbiAgICBjb25zdCBhYm91dFRleHRXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBhYm91dFRleHRXcmFwcGVyLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiYWJvdXQtdGV4dC13cmFwcGVyXCIpO1xuICAgIGJnSW1nV3JhcHBlci5hcHBlbmRDaGlsZChhYm91dFRleHRXcmFwcGVyKTtcblxuICAgIC8vIGNyZWF0ZSB0aGUgaGVhZGluZ1xuICAgIGNvbnN0IGFib3V0SGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICBhYm91dEhlYWRpbmcudGV4dENvbnRlbnQgPSBcIldITyBXRSBBUkVcIjtcbiAgICBhYm91dEhlYWRpbmcuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJhYm91dC10ZXh0IGFib3V0LWhlYWRpbmdcIik7XG4gICAgYWJvdXRUZXh0V3JhcHBlci5hcHBlbmRDaGlsZChhYm91dEhlYWRpbmcpO1xuXG4gICAgLy8gY3JlYXRlIHRoZSBib2R5IHRleHRcbiAgICBjb25zdCBhYm91dEJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBhYm91dEJvZHkudGV4dENvbnRlbnQgPSBcIldlIGFyZSBhIHBpcmF0ZSBjcmV3IHdpdGggYSBwYXNzaW9uIGZvciBzZWFmb29kIGFuZCBhIGxvdmUgZm9yIGNvb2tpbmcgZGVsaWNpb3VzIGRpc2hlcyB0aGF0IGFyZSB0aGUgZW52eSBvZiB0aGUgU2V2ZW4gU2Vhcy4gT3VyIHNraWxsZWQgY2hlZnMgZXhwZXJ0bHkgcHJlcGFyZSB0aGUgZnJlc2hlc3QgY2F0Y2hlcyBvZiB0aGUgZGF5LCBmcm9tIHN1Y2N1bGVudCBncmlsbGVkIGZpc2ggdG8gbW91dGgtd2F0ZXJpbmcgc2VhZm9vZCBzdGV3cy4gQXMgYSBjcmV3LCB3ZSBhcmUga25vd24gZm9yIG91ciB1bndhdmVyaW5nIGNvbW1pdG1lbnQgdG8gcXVhbGl0eSwgZXhjZXB0aW9uYWwgdGFzdGUsIGFuZCBvdXIgYWJpbGl0eSB0byB0dXJuIGFueSBtZWFsIGludG8gYSBtZW1vcmFibGUgZXhwZXJpZW5jZS4gU28gY29tZSBhYm9hcmQgYW5kIGpvaW4gdXMgZm9yIGEgY3VsaW5hcnkgYWR2ZW50dXJlIHRoYXQgd2lsbCBsZWF2ZSB5b3UgY3JhdmluZyBmb3IgbW9yZS5cIjtcbiAgICBhYm91dEJvZHkuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJhYm91dC10ZXh0IGFib3V0LWJvZHlcIik7XG4gICAgYWJvdXRUZXh0V3JhcHBlci5hcHBlbmRDaGlsZChhYm91dEJvZHkpO1xuXG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZChhYm91dFdyYXBwZXIpO1xufSIsImltcG9ydCBjb250YWN0QmdJbWdTcmMgZnJvbSBcIi4vYXNzZXRzL2xvcmVuLWJpc2VyLWlyRE15ZXlWNFFFLXVuc3BsYXNoLXRyYW5zcGFyZW50LnBuZ1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ29udGFjdFRhYigpIHtcbiAgICAvLyBjbGVhciB0aGUgY3VycmVudCB0YWJcbiAgICBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuICAgIGNvbnRlbnREaXYudGV4dENvbnRlbnQgPSBcIlwiO1xuXG4gICAgLy8gc2V0IGNsYXNzIGFib3V0LXBhZ2UgdG8gdGhlIGNvbnRlbnQgZGl2XG4gICAgY29udGVudERpdi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImNvbnRhY3QtcGFnZVwiKTtcblxuICAgIC8vIGNyZWF0ZSBhIHdyYXBwZXIgZm9yIHRoZSB3aG9sZSBjb250ZW50IHNlY3Rpb25cbiAgICBjb25zdCBjb250YWN0V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGFjdFdyYXBwZXIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJjb250YWN0LXdyYXBwZXJcIik7XG5cbiAgICAvLyBjcmVhdGUgYSB3cmFwcGVyIGZvciB0aGUgc2Nyb2xsIGltYWdlLCBhcyB3ZWxsIGFzIHRoZSB0ZXh0XG4gICAgY29uc3QgY29udGFjdENvbnRlbnRXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250YWN0Q29udGVudFdyYXBwZXIuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke2NvbnRhY3RCZ0ltZ1NyY30pYDtcbiAgICBjb250YWN0Q29udGVudFdyYXBwZXIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJjb250YWN0LWNvbnRlbnRcIik7XG4gICAgY29udGFjdFdyYXBwZXIuYXBwZW5kQ2hpbGQoY29udGFjdENvbnRlbnRXcmFwcGVyKTtcblxuICAgIC8vIGNyZWF0ZSBhIGRpdiBmb3IgdGhlIHRleHQgcG9ydGlvbiBvZiB0aGUgcGFnZSwgd2hpY2ggd2lsbCBiZSBvbiB0aGUgaW1hZ2VcbiAgICBjb25zdCBjb250YWN0VGV4dFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnRhY3RUZXh0V3JhcHBlci5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImNvbnRhY3QtdGV4dC13cmFwcGVyXCIpO1xuICAgIGNvbnRhY3RDb250ZW50V3JhcHBlci5hcHBlbmRDaGlsZChjb250YWN0VGV4dFdyYXBwZXIpO1xuXG4gICAgLy8gY3JlYXRlIGRpdnMgZm9yIGxvY2F0aW9uLCBob3VycyBvZiBidXNpbmVzcywgYW5kIGNvbnRhY3QgaW5mb1xuICAgIGNvbnN0IGhvdXJzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBob3Vyc0Rpdi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImNvbnRhY3QtdGV4dCBob3Vycy1kaXZcIik7XG4gICAgY29udGFjdFRleHRXcmFwcGVyLmFwcGVuZENoaWxkKGhvdXJzRGl2KTtcblxuICAgIGNvbnN0IGhvdXJzSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIGhvdXJzSGVhZGVyLnRleHRDb250ZW50ID0gXCJIb3VycyBvZiBCdXNpbmVzc1wiO1xuICAgIGhvdXJzSGVhZGVyLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiaG91cnMtaGVhZGVyXCIpO1xuICAgIGhvdXJzRGl2LmFwcGVuZENoaWxkKGhvdXJzSGVhZGVyKTtcblxuICAgIGNvbnN0IGhvdXJzTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICBob3Vyc0xpc3Quc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJob3Vycy1saXN0XCIpO1xuICAgIGhvdXJzRGl2LmFwcGVuZENoaWxkKGhvdXJzTGlzdCk7XG5cbiAgICBjb25zdCBob3Vyc01vbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBob3Vyc01vbi50ZXh0Q29udGVudCA9IFwiTW9uZGF5IC0gMTFhbSB0byA4cG1cIjtcbiAgICBjb25zdCBob3Vyc1R1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBob3Vyc1R1ZS50ZXh0Q29udGVudCA9IFwiVHVlc2RheSAtIDExYW0gdG8gOHBtXCI7XG4gICAgY29uc3QgaG91cnNXZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgaG91cnNXZWQudGV4dENvbnRlbnQgPSBcIldlZG5lc2RheSAtIDExYW0gdG8gOHBtXCI7XG4gICAgY29uc3QgaG91cnNUaHUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgaG91cnNUaHUudGV4dENvbnRlbnQgPSBcIlRodXJzZGF5IC0gMTFhbSB0byA4cG1cIjtcbiAgICBjb25zdCBob3Vyc0ZyaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBob3Vyc0ZyaS50ZXh0Q29udGVudCA9IFwiRnJpZGF5IC0gMTFhbSB0byA3cG1cIjtcbiAgICBjb25zdCBob3Vyc1NhdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBob3Vyc1NhdC50ZXh0Q29udGVudCA9IFwiU2F0dXJkYXkgLSAzcG0gdG8gOHBtXCI7XG4gICAgY29uc3QgaG91cnNTdW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgaG91cnNTdW4udGV4dENvbnRlbnQgPSBcIlN1bmRheSAtIDNwbSB0byA4cG1cIjtcblxuICAgIGhvdXJzTGlzdC5hcHBlbmRDaGlsZChob3Vyc01vbik7XG4gICAgaG91cnNMaXN0LmFwcGVuZENoaWxkKGhvdXJzVHVlKTtcbiAgICBob3Vyc0xpc3QuYXBwZW5kQ2hpbGQoaG91cnNXZWQpO1xuICAgIGhvdXJzTGlzdC5hcHBlbmRDaGlsZChob3Vyc1RodSk7XG4gICAgaG91cnNMaXN0LmFwcGVuZENoaWxkKGhvdXJzRnJpKTtcbiAgICBob3Vyc0xpc3QuYXBwZW5kQ2hpbGQoaG91cnNTYXQpO1xuICAgIGhvdXJzTGlzdC5hcHBlbmRDaGlsZChob3Vyc1N1bik7XG5cbiAgICBjb25zdCBsb2NhdGlvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbG9jYXRpb25EaXYuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJjb250YWN0LXRleHQgbG9jYXRpb24tZGl2XCIpO1xuICAgIGNvbnRhY3RUZXh0V3JhcHBlci5hcHBlbmRDaGlsZChsb2NhdGlvbkRpdik7XG5cbiAgICBjb25zdCBsb2NhdGlvbkhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICBsb2NhdGlvbkhlYWRlci50ZXh0Q29udGVudCA9IFwiTG9jYXRpb25cIjtcbiAgICBsb2NhdGlvbkRpdi5hcHBlbmRDaGlsZChsb2NhdGlvbkhlYWRlcik7XG5cbiAgICBjb25zdCBsb2NhdGlvbkJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBsb2NhdGlvbkJvZHkudGV4dENvbnRlbnQgPSBcIjEzMTMgTWlkZGxlIG9mIE5vd2hlcmUsIEF0bGFudGljIE9jZWFuXCI7XG4gICAgbG9jYXRpb25EaXYuYXBwZW5kQ2hpbGQobG9jYXRpb25Cb2R5KTtcblxuICAgIGNvbnN0IGNvbnRhY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnRhY3REaXYuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJjb250YWN0LXRleHQgY29udGFjdC1kaXZcIik7XG4gICAgY29udGFjdFRleHRXcmFwcGVyLmFwcGVuZENoaWxkKGNvbnRhY3REaXYpO1xuXG4gICAgY29uc3QgY29udGFjdEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICBjb250YWN0SGVhZGVyLnRleHRDb250ZW50ID0gXCJDb250YWN0XCI7XG4gICAgY29udGFjdERpdi5hcHBlbmRDaGlsZChjb250YWN0SGVhZGVyKTtcbiAgICBcbiAgICBjb25zdCBjb250YWN0SW5mb1dyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnRhY3REaXYuYXBwZW5kQ2hpbGQoY29udGFjdEluZm9XcmFwcGVyKTtcblxuICAgIGNvbnN0IGNvbnRhY3RQaG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGNvbnRhY3RQaG9uZS50ZXh0Q29udGVudCA9IFwiNTU1LTU1NS0xMTExXCI7XG4gICAgY29udGFjdEluZm9XcmFwcGVyLmFwcGVuZENoaWxkKGNvbnRhY3RQaG9uZSk7XG5cbiAgICBjb25zdCBjb250YWN0RW1haWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBjb250YWN0RW1haWwudGV4dENvbnRlbnQgPSBcImZha2VlbWFpbEBub3RyZWFsLmNvbVwiO1xuICAgIGNvbnRhY3RJbmZvV3JhcHBlci5hcHBlbmRDaGlsZChjb250YWN0RW1haWwpO1xuICAgIFxuXG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZChjb250YWN0V3JhcHBlcik7XG59IiwiaW1wb3J0IHViZXJFYXRzSW1nU3JjIGZyb20gXCIuL2Fzc2V0cy91YmVyLWVhdHMtbG9nby5wbmdcIjtcbmltcG9ydCBkb29yRGFzaEltZ1NyYyBmcm9tIFwiLi9hc3NldHMvZG9vcmRhc2gtbG9nby5wbmdcIjtcbmltcG9ydCB3YXZlSW1nU3JjIGZyb20gXCIuL2Fzc2V0cy93YXZlNC5zdmdcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUhvbWVUYWIoKSB7XG4gICAgLy8gY2xlYXIgdGhlIGN1cnJlbnQgdGFiXG4gICAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbiAgICBjb250ZW50RGl2LnRleHRDb250ZW50ID0gXCJcIjtcblxuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbiAgICBkaXYuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJob21lLXBhZ2VcIik7XG5cbiAgICAvLyBjcmVhdGUgdGhlIHJpZ2h0IHNpZGUgb2YgdGhlIHBhZ2UsIGNvbnRhaW5pbmcgYSBoZXJvIGFuZCBsaW5rcyB0byBvcmRlciBvbmxpbmVcbiAgICBjb25zdCBkaXZIb21lSW50cm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRpdkhvbWVJbnRyby5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImhvbWUtaW50cm9cIik7XG5cbiAgICAvLyB3YXZlIHN2ZyBpbWFnZXMgXG4gICAgY29uc3Qgd2F2ZTEgPSBuZXcgSW1hZ2UoKTtcbiAgICB3YXZlMS5zcmMgPSB3YXZlSW1nU3JjO1xuICAgIHdhdmUxLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiaG9tZS13YXZlLWltZyB3YXZlLTFcIik7XG5cbiAgICBjb25zdCB3YXZlMiA9IG5ldyBJbWFnZSgpO1xuICAgIHdhdmUyLnNyYyA9IHdhdmVJbWdTcmM7XG4gICAgd2F2ZTIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJob21lLXdhdmUtaW1nIHdhdmUtMlwiKTtcblxuICAgIGRpdkhvbWVJbnRyby5hcHBlbmRDaGlsZCh3YXZlMSk7XG4gICAgZGl2SG9tZUludHJvLmFwcGVuZENoaWxkKHdhdmUyKTtcblxuICAgIGNvbnN0IGludHJvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgaW50cm9UaXRsZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImhvbWUtaW50cm8tdGl0bGVcIik7XG4gICAgaW50cm9UaXRsZS50ZXh0Q29udGVudCA9IFwiSVQnUyBUSU1FIFRPIFwiO1xuICAgIGRpdkhvbWVJbnRyby5hcHBlbmRDaGlsZChpbnRyb1RpdGxlKTtcblxuICAgIGNvbnN0IGludHJvQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICBpbnRyb0NvbnRlbnQudGV4dENvbnRlbnQgPSBcIldlIGhhdmUgdGhlIGJlc3Qgc2VhZm9vZCBpbiB0b3duIVwiO1xuICAgIGludHJvQ29udGVudC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImhvbWUtaW50cm8tY29udGVudFwiKTtcbiAgICBkaXZIb21lSW50cm8uYXBwZW5kQ2hpbGQoaW50cm9Db250ZW50KTtcblxuICAgIGNvbnN0IG9yZGVyTGlua3NEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG9yZGVyTGlua3NEaXYuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJvcmRlci1saW5rc1wiKTtcbiAgICBkaXZIb21lSW50cm8uYXBwZW5kQ2hpbGQob3JkZXJMaW5rc0Rpdik7XG5cbiAgICBjb25zdCBvcmRlck9ubGluZVBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBvcmRlck9ubGluZVBhcmEudGV4dENvbnRlbnQgPSBcIk9yZGVyIG9ubGluZSB0b2RheSFcIlxuICAgIG9yZGVyT25saW5lUGFyYS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm9yZGVyLW9ubGluZS10ZXh0XCIpO1xuICAgIG9yZGVyTGlua3NEaXYuYXBwZW5kQ2hpbGQob3JkZXJPbmxpbmVQYXJhKTtcblxuICAgIGNvbnN0IHViZXJFYXRzSW1nID0gbmV3IEltYWdlKCk7XG4gICAgdWJlckVhdHNJbWcuc3JjID0gdWJlckVhdHNJbWdTcmM7XG4gICAgdWJlckVhdHNJbWcuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJvcmRlci1saW5rLWxvZ29cIik7XG4gICAgb3JkZXJMaW5rc0Rpdi5hcHBlbmRDaGlsZCh1YmVyRWF0c0ltZyk7XG5cbiAgICBjb25zdCBkb29yRGFzaEltZyA9IG5ldyBJbWFnZSgpO1xuICAgIGRvb3JEYXNoSW1nLnNyYyA9IGRvb3JEYXNoSW1nU3JjO1xuICAgIGRvb3JEYXNoSW1nLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwib3JkZXItbGluay1sb2dvIGRvb3JkYXNoLWxvZ29cIik7XG4gICAgb3JkZXJMaW5rc0Rpdi5hcHBlbmRDaGlsZChkb29yRGFzaEltZyk7XG5cbiAgICBkaXYuYXBwZW5kQ2hpbGQoZGl2SG9tZUludHJvKTtcbn0iLCJcbmZ1bmN0aW9uIGNyZWF0ZU1lbnVJdGVtKG5hbWUsIHByaWNlLCBkZXNjcmlwdGlvbj1cIlwiKSB7XG4gICAgY29uc3QgbWVudUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1lbnVJdGVtLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibWVudS1pdGVtXCIpO1xuXG4gICAgY29uc3QgaXRlbU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGl0ZW1OYW1lLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibWVudS1uYW1lXCIpO1xuICAgIGl0ZW1OYW1lLnRleHRDb250ZW50ID0gbmFtZTtcbiAgICBtZW51SXRlbS5hcHBlbmRDaGlsZChpdGVtTmFtZSk7XG4gICAgXG4gICAgY29uc3QgaXRlbVByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgaXRlbVByaWNlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibWVudS1wcmljZVwiKTtcbiAgICBpdGVtUHJpY2UudGV4dENvbnRlbnQgPSBwcmljZTtcbiAgICBtZW51SXRlbS5hcHBlbmRDaGlsZChpdGVtUHJpY2UpO1xuXG5cbiAgICBjb25zdCBpdGVtRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGl0ZW1EZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm1lbnUtZGVzY3JpcHRpb25cIik7XG4gICAgaXRlbURlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gZGVzY3JpcHRpb247XG4gICAgbWVudUl0ZW0uYXBwZW5kQ2hpbGQoaXRlbURlc2NyaXB0aW9uKTtcblxuICAgIHJldHVybiBtZW51SXRlbTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQXBwZXRpemVyTWVudSgpIHtcbiAgICBjb25zdCBtZW51U2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS1zZWN0aW9uXCIpO1xuICAgIFxuICAgIGlmICghKG1lbnVTZWN0aW9uLmNsYXNzTGlzdC5jb250YWlucyhcIm1lbnUtYXBwZXRpemVyXCIpKSl7XG4gICAgICAgIGNvbnN0IGFwcGV0aXplckxpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFwcGV0aXplci1saW5rXCIpO1xuICAgICAgICBjb25zdCBtZW51TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS1saXN0XCIpO1xuICAgICAgICBjb25zdCBtZW51VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtdGl0bGVcIik7XG5cbiAgICAgICAgLy8gcmVzZXQgcHJldmlvdXMgY2hvaWNlc1xuICAgICAgICBtZW51TGlzdC50ZXh0Q29udGVudCA9IFwiXCI7XG5cbiAgICAgICAgLy8gc2VsZWN0IGN1cnJlbnQgbGlua1xuICAgICAgICBjb25zdCBtZW51TGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm1lbnUtbGlua1wiKTtcbiAgICAgICAgbWVudUxpbmtzLmZvckVhY2gobGluayA9PiBsaW5rLmNsYXNzTGlzdC5yZW1vdmUoXCJtZW51LXNlbGVjdGVkXCIpKTtcbiAgICAgICAgYXBwZXRpemVyTGluay5jbGFzc0xpc3QuYWRkKFwibWVudS1zZWxlY3RlZFwiKTtcbiAgICAgICAgbWVudVNlY3Rpb24uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJtZW51LXNlY3Rpb24gbWVudS1hcHBldGl6ZXJcIik7XG4gICAgICAgIFxuICAgICAgICAvLyBzZXQgbmV3IG1lbnUgdGl0bGVcbiAgICAgICAgbWVudVRpdGxlLnRleHRDb250ZW50ID0gXCJBcHBldGl6ZXJzICYgU2FsYWRzXCI7XG5cbiAgICAgICAgLy8gY3JlYXRlIG1lbnUgaXRlbSBkaXZzXG4gICAgICAgIG1lbnVMaXN0LmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVJdGVtKFwiRnJpZXNcIiwgXCI1LjQ5XCIsIFwiR29sZGVuLCBjcmlzcHkgZnJpZXNcIikpO1xuICAgICAgICBtZW51TGlzdC5hcHBlbmRDaGlsZChjcmVhdGVNZW51SXRlbShcIkdhcmxpYyBCcmVhZFwiLCBcIjYuNDlcIikpO1xuICAgICAgICBtZW51TGlzdC5hcHBlbmRDaGlsZChjcmVhdGVNZW51SXRlbShcIkNoZWVzeSBCcmVhZFwiLCBcIjYuNDlcIikpO1xuICAgICAgICBtZW51TGlzdC5hcHBlbmRDaGlsZChjcmVhdGVNZW51SXRlbShcIkJyZWFkZWQgU2hyaW1wXCIsIFwiOS45OVwiLCBcIndpdGggbWFyaW5hcmEgc2F1Y2VcIikpO1xuICAgICAgICBtZW51TGlzdC5hcHBlbmRDaGlsZChjcmVhdGVNZW51SXRlbShcIkNvY29udXQgU2hyaW1wXCIsIFwiMTAuOTlcIiwgXCJ3aXRoIHRhcnRhciBzYXVjZVwiKSk7XG4gICAgICAgIG1lbnVMaXN0LmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVJdGVtKFwiUG91dGluZVwiLCBcIjYuNDlcIiwgXCJEZWxpY2lvdXMgZnJpZXMgdG9wcGVkIHdpdGggZ3JhdnkgYW5kIGZyZXNoIGNoZWVzZSBjdXJkc1wiKSk7XG4gICAgICAgIG1lbnVMaXN0LmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVJdGVtKFwiU3dlZXQgUG90YXRvIEZyaWVzXCIsIFwiNS40OVwiLCBcIndpdGggc3BpY3kgbWF5b1wiKSk7XG4gICAgICAgIG1lbnVMaXN0LmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVJdGVtKFwiT25pb24gUmluZ3NcIiwgXCI2Ljk5XCIpKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUZBQ01lbnUoKSB7XG4gICAgY29uc3QgbWVudVNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtc2VjdGlvblwiKTtcblxuICAgIGlmICghKG1lbnVTZWN0aW9uLmNsYXNzTGlzdC5jb250YWlucyhcIm1lbnUtZmFjXCIpKSl7XG4gICAgICAgIGNvbnN0IEZBQ0xpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZhYy1saW5rXCIpO1xuICAgICAgICBjb25zdCBtZW51TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS1saXN0XCIpO1xuICAgICAgICBjb25zdCBtZW51VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtdGl0bGVcIik7XG5cbiAgICAgICAgLy8gcmVzZXQgcHJldmlvdXMgY2hvaWNlc1xuICAgICAgICBtZW51TGlzdC50ZXh0Q29udGVudCA9IFwiXCI7XG5cbiAgICAgICAgLy8gc2VsZWN0IGN1cnJlbnQgbGlua1xuICAgICAgICBjb25zdCBtZW51TGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm1lbnUtbGlua1wiKTtcbiAgICAgICAgbWVudUxpbmtzLmZvckVhY2gobGluayA9PiBsaW5rLmNsYXNzTGlzdC5yZW1vdmUoXCJtZW51LXNlbGVjdGVkXCIpKTtcbiAgICAgICAgRkFDTGluay5jbGFzc0xpc3QuYWRkKFwibWVudS1zZWxlY3RlZFwiKTtcbiAgICAgICAgbWVudVNlY3Rpb24uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJtZW51LXNlY3Rpb24gbWVudS1mYWNcIik7XG4gICAgICAgIFxuICAgICAgICAvLyBzZXQgbmV3IG1lbnUgdGl0bGVcbiAgICAgICAgbWVudVRpdGxlLnRleHRDb250ZW50ID0gXCJGaXNoIGFuZCBDaGlwc1wiO1xuXG4gICAgICAgIC8vIGNyZWF0ZSBtZW51IGl0ZW1zIGFuZCBhZGQgdGhlbSB0byB0aGUgbWVudSBsaXN0IHNlY3Rpb25cbiAgICAgICAgbWVudUxpc3QuYXBwZW5kQ2hpbGQoY3JlYXRlTWVudUl0ZW0oXCJIYWRkb2NrICgxIFBjKVwiLCBcIjEwLjQ5XCIpKTtcbiAgICAgICAgbWVudUxpc3QuYXBwZW5kQ2hpbGQoY3JlYXRlTWVudUl0ZW0oXCJIYWRkb2NrICgyIFBjKVwiLCBcIjE0Ljk5XCIpKTtcbiAgICAgICAgbWVudUxpc3QuYXBwZW5kQ2hpbGQoY3JlYXRlTWVudUl0ZW0oXCJDb2QgKDEgUGMpXCIsIFwiMTQuNDlcIikpO1xuICAgICAgICBtZW51TGlzdC5hcHBlbmRDaGlsZChjcmVhdGVNZW51SXRlbShcIkNvZCAoMiBQYylcIiwgXCIxOC40OVwiKSk7XG4gICAgICAgIG1lbnVMaXN0LmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVJdGVtKFwiSGFsaWJ1dCAoMSBQYylcIiwgXCIxMC40OVwiKSk7XG4gICAgICAgIG1lbnVMaXN0LmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVJdGVtKFwiSGFsaWJ1dCAoMiBQYylcIiwgXCIxNC45OVwiKSk7XG4gICAgICAgIG1lbnVMaXN0LmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVJdGVtKFwiUG9sbG9jayAoMSBQYylcIiwgXCIxMC40OVwiKSk7XG4gICAgICAgIG1lbnVMaXN0LmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVJdGVtKFwiUG9sbG9jayAoMiBQYylcIiwgXCIxNC45OVwiKSk7XG5cbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbWJvc01lbnUoKSB7XG4gICAgY29uc3QgbWVudVNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtc2VjdGlvblwiKTtcblxuICAgIGlmICghKG1lbnVTZWN0aW9uLmNsYXNzTGlzdC5jb250YWlucyhcIm1lbnUtY29tYm9zXCIpKSl7XG4gICAgICAgIGNvbnN0IGNvbWJvc0xpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbWJvcy1saW5rXCIpO1xuICAgICAgICBjb25zdCBtZW51TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS1saXN0XCIpO1xuICAgICAgICBjb25zdCBtZW51VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtdGl0bGVcIik7XG5cbiAgICAgICAgLy8gcmVzZXQgcHJldmlvdXMgY2hvaWNlc1xuICAgICAgICBtZW51TGlzdC50ZXh0Q29udGVudCA9IFwiXCI7XG5cbiAgICAgICAgLy8gc2VsZWN0IGN1cnJlbnQgbGlua1xuICAgICAgICBjb25zdCBtZW51TGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm1lbnUtbGlua1wiKTtcbiAgICAgICAgbWVudUxpbmtzLmZvckVhY2gobGluayA9PiBsaW5rLmNsYXNzTGlzdC5yZW1vdmUoXCJtZW51LXNlbGVjdGVkXCIpKTtcbiAgICAgICAgY29tYm9zTGluay5jbGFzc0xpc3QuYWRkKFwibWVudS1zZWxlY3RlZFwiKTtcbiAgICAgICAgbWVudVNlY3Rpb24uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJtZW51LXNlY3Rpb24gbWVudS1jb21ib3NcIik7XG4gICAgICAgIFxuICAgICAgICAvLyBzZXQgbmV3IG1lbnUgdGl0bGVcbiAgICAgICAgbWVudVRpdGxlLnRleHRDb250ZW50ID0gXCJTZWFmb29kIENvbWJvc1wiO1xuXG4gICAgICAgIC8vIGNyZWF0ZSBtZW51IGl0ZW1zIGFuZCBhZGQgdGhlbSB0byB0aGUgbWVudSBsaXN0IHNlY3Rpb25cbiAgICAgICAgbWVudUxpc3QuYXBwZW5kQ2hpbGQoY3JlYXRlTWVudUl0ZW0oXCJTaHJpbXAgUGxhdHRlclwiLCBcIjE4Ljk5XCIsIFwiMTAgcGllY2VzIG9mIGdyaWxsZWQgc2hyaW1wIG9uIGEgcGxhdGUgb2YgZnJpZWQgcmljZVwiKSk7XG4gICAgICAgIG1lbnVMaXN0LmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVJdGVtKFwiU2VhZm9vZCBTYW1wbGVyXCIsIFwiMjcuOTlcIiwgXCIyIHBpZWNlcyBvZiB5b3VyIGNob2ljZSBvZiBmaXNoLCA1IHBpZWNlcyBvZiBzaHJpbXAsIGFuZCBhbnkgMiBhcHBldGl6ZXJzXCIpKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVNhbmR3aWNoTWVudSgpIHtcbiAgICBjb25zdCBtZW51U2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS1zZWN0aW9uXCIpO1xuXG4gICAgaWYgKCEobWVudVNlY3Rpb24uY2xhc3NMaXN0LmNvbnRhaW5zKFwibWVudS1zYW5kd2ljaFwiKSkpe1xuICAgICAgICBjb25zdCBzYW5kd2ljaGVzTGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2FuZHdpY2hlcy1saW5rXCIpO1xuICAgICAgICBjb25zdCBtZW51TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS1saXN0XCIpO1xuICAgICAgICBjb25zdCBtZW51VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtdGl0bGVcIik7XG5cbiAgICAgICAgLy8gcmVzZXQgcHJldmlvdXMgY2hvaWNlc1xuICAgICAgICBtZW51TGlzdC50ZXh0Q29udGVudCA9IFwiXCI7XG5cbiAgICAgICAgIC8vIHNlbGVjdCBjdXJyZW50IGxpbmtcbiAgICAgICAgIGNvbnN0IG1lbnVMaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubWVudS1saW5rXCIpO1xuICAgICAgICAgbWVudUxpbmtzLmZvckVhY2gobGluayA9PiBsaW5rLmNsYXNzTGlzdC5yZW1vdmUoXCJtZW51LXNlbGVjdGVkXCIpKTtcbiAgICAgICAgIHNhbmR3aWNoZXNMaW5rLmNsYXNzTGlzdC5hZGQoXCJtZW51LXNlbGVjdGVkXCIpO1xuICAgICAgICAgbWVudVNlY3Rpb24uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJtZW51LXNlY3Rpb24gbWVudS1zYW5kd2ljaFwiKTtcbiAgICAgICAgIFxuICAgICAgICAgLy8gc2V0IG5ldyBtZW51IHRpdGxlXG4gICAgICAgICBtZW51VGl0bGUudGV4dENvbnRlbnQgPSBcIlNhbmR3aWNoZXMgJiBCdXJnZXJzXCI7XG5cbiAgICAgICAgLy8gY3JlYXRlIG1lbnUgaXRlbXMgYW5kIGFkZCB0aGVtIHRvIHRoZSBtZW51IGxpc3Qgc2VjdGlvblxuICAgICAgICBtZW51TGlzdC5hcHBlbmRDaGlsZChjcmVhdGVNZW51SXRlbShcIkZpc2ggQnVyZ2VyXCIsIFwiMTUuMjVcIiwgXCJCcmVhZGVkIGhhZGRvY2sgd2l0aCBsZXR0dWNlLCB0b21hdG8gYW5kIG1heW9cIikpO1xuICAgICAgICBtZW51TGlzdC5hcHBlbmRDaGlsZChjcmVhdGVNZW51SXRlbShcIkNoaWNrZW4gQnJlYXN0IEJ1cmdlclwiLCBcIjEyLjI5XCIsIFwiR3JpbGxlZCBjaGlja2VuIGJyZWFzdCB3aXRoIGxldHR1Y2UgYW5kIHRvbWF0byBvbiBhIHNlc2FtZSBidW5cIikpO1xuICAgICAgICBtZW51TGlzdC5hcHBlbmRDaGlsZChjcmVhdGVNZW51SXRlbShcIlNocmltcCBXcmFwXCIsIFwiMTIuNDlcIiwgXCJCcmVhZGVkIHNocmltcCB3aXRoIGxldHR1Y2UsIHBpY2tsZXMgYW5kIHRhcnRhciBzYXVjZSBpbiBhIHBpdGEgd3JhcFwiKSk7XG4gICAgICAgIG1lbnVMaXN0LmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVJdGVtKFwiQ2hpY2tlbiBXcmFwXCIsIFwiMTEuNDlcIiwgXCJHcmlsbGVkIGNoaWNrZW4gcGllY2VzIHdpdGggbGV0dHVjZSBhbmQgbWF5byB3cmFwcGVkIGluIHBpdGFcIikpO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU1lbnVUYWIoKSB7XG4gICAgLy8gY2xlYXIgdGhlIGN1cnJlbnQgdGFiXG4gICAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbiAgICBjb250ZW50RGl2LnRleHRDb250ZW50ID0gXCJcIjtcblxuICAgIC8vIHNldCBjbGFzcyBvZiAjY29udGVudCB0byBnZXQgbWVudSBwYWdlIHN0eWxlc1xuICAgIGNvbnRlbnREaXYuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJtZW51LXBhZ2VcIik7XG5cbiAgICAvLyBjcmVhdGUgdGhlIGRpdiB0aGF0IGNvbnRhaW5zIHRoZSBtZWFsc1xuICAgIGNvbnN0IG1lbnVXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtZW51V3JhcHBlci5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm1lbnUtd3JhcHBlclwiKTtcblxuICAgIC8vY3JlYXRlIHRoZSBtZW51IHNlbGVjdG9yIGxpbmtzIGFuZCBhZGQgZXZlbnQgbGlzdGVuZXJzIHRvIHRoZW0gdG8gY2hhbmdlIHRoZSBtZW51IGxpc3RcbiAgICBjb25zdCBtZW51U2VsZWN0b3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1lbnVTZWxlY3Rvci5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm1lbnUtc2VsZWN0b3JcIik7XG4gICAgbWVudVdyYXBwZXIuYXBwZW5kQ2hpbGQobWVudVNlbGVjdG9yKTtcblxuICAgIC8vIGNyZWF0ZSBhcHBldGl6ZXIgbGluayBhbmQgYWRkIGV2ZW50IGxpc3RlbmVyXG4gICAgY29uc3QgbWVudUxpbmtBcHBldGl6ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICBtZW51TGlua0FwcGV0aXplci50ZXh0Q29udGVudCA9IFwiQXBwZXRpemVycyAmIFNhbGFkc1wiO1xuICAgIG1lbnVMaW5rQXBwZXRpemVyLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibWVudS1saW5rIGFwcGV0aXplci1saW5rXCIpO1xuICAgIG1lbnVTZWxlY3Rvci5hcHBlbmRDaGlsZChtZW51TGlua0FwcGV0aXplcik7XG4gICAgbWVudUxpbmtBcHBldGl6ZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNyZWF0ZUFwcGV0aXplck1lbnUpO1xuXG4gICAgLy8gY3JlYXRlIGZpc2ggbiBjaGlwcyBsaW5rXG4gICAgY29uc3QgbWVudUxpbmtGQUMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICBtZW51TGlua0ZBQy50ZXh0Q29udGVudCA9IFwiRmlzaCBhbmQgQ2hpcHNcIjtcbiAgICBtZW51TGlua0ZBQy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm1lbnUtbGluayBmYWMtbGlua1wiKTtcbiAgICBtZW51U2VsZWN0b3IuYXBwZW5kQ2hpbGQobWVudUxpbmtGQUMpO1xuICAgIG1lbnVMaW5rRkFDLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjcmVhdGVGQUNNZW51KTtcblxuICAgIC8vIGNyZWF0ZSBzZWFmb29kIGNvbWJvcyBsaW5rXG4gICAgY29uc3QgbWVudUxpbmtDb21ib3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICBtZW51TGlua0NvbWJvcy50ZXh0Q29udGVudCA9IFwiU2VhZm9vZCBDb21ib3NcIjtcbiAgICBtZW51TGlua0NvbWJvcy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm1lbnUtbGluayBjb21ib3MtbGlua1wiKTtcbiAgICBtZW51U2VsZWN0b3IuYXBwZW5kQ2hpbGQobWVudUxpbmtDb21ib3MpO1xuICAgIG1lbnVMaW5rQ29tYm9zLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjcmVhdGVDb21ib3NNZW51KTtcblxuICAgIC8vIGNyZWF0ZSBzYW5kd2ljaGVzIGxpbmtcbiAgICBjb25zdCBtZW51TGlua1NhbmR3aWNoZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICBtZW51TGlua1NhbmR3aWNoZXMudGV4dENvbnRlbnQgPSBcIlNhbmR3aWNoZXMgJiBCdXJnZXJzXCI7XG4gICAgbWVudUxpbmtTYW5kd2ljaGVzLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibWVudS1saW5rIHNhbmR3aWNoZXMtbGlua1wiKTtcbiAgICBtZW51U2VsZWN0b3IuYXBwZW5kQ2hpbGQobWVudUxpbmtTYW5kd2ljaGVzKTtcbiAgICBtZW51TGlua1NhbmR3aWNoZXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNyZWF0ZVNhbmR3aWNoTWVudSk7XG5cbiAgICAvLyBjcmVhdGUgZGl2cyBmb3Igd2hlcmUgdGhlIG1lbnUgaXRlbXMgYXBwZWFyXG4gICAgY29uc3QgbWVudVNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgICBtZW51U2VjdGlvbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm1lbnUtc2VjdGlvblwiKTtcbiAgICBtZW51V3JhcHBlci5hcHBlbmRDaGlsZChtZW51U2VjdGlvbik7XG5cbiAgICBjb25zdCBtZW51VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xuICAgIG1lbnVUaXRsZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm1lbnUtdGl0bGVcIik7XG4gICAgbWVudVNlY3Rpb24uYXBwZW5kQ2hpbGQobWVudVRpdGxlKTtcblxuICAgIGNvbnN0IG1lbnVMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtZW51TGlzdC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm1lbnUtbGlzdFwiKTtcbiAgICBtZW51U2VjdGlvbi5hcHBlbmRDaGlsZChtZW51TGlzdCk7XG5cbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKG1lbnVXcmFwcGVyKTtcblxuICAgIC8vIHRoaXMgaXMgY2FsbGVkIHNvIHRoYXQgYXBwZXRpemVyIHNob3dzIG9uIGluaXRpYWwgXCJNZW51XCIgYnV0dG9uIGNsaWNrXG4gICAgY3JlYXRlQXBwZXRpemVyTWVudSgpO1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgY3JlYXRlSG9tZVRhYiB9IGZyb20gXCIuL2hvbWVcIjtcbmltcG9ydCB7IGNyZWF0ZU1lbnVUYWIgfSBmcm9tIFwiLi9tZW51XCI7XG5pbXBvcnQgeyBjcmVhdGVBYm91dFRhYiB9IGZyb20gXCIuL2Fib3V0XCI7XG5pbXBvcnQgeyBjcmVhdGVDb250YWN0VGFiIH0gZnJvbSBcIi4vY29udGFjdFwiO1xuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgY3JlYXRlSG9tZVRhYik7XG5cbmNvbnN0IGhvbWVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhvbWUtc2lkZS10aXRsZVwiKTtcbmhvbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNyZWF0ZUhvbWVUYWIpO1xuXG5jb25zdCBtZW51QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ob21lLW1lbnUtYnRuXCIpO1xubWVudUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY3JlYXRlTWVudVRhYik7XG5cbmNvbnN0IGFib3V0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ob21lLWFib3V0LWJ0blwiKTtcbmFib3V0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjcmVhdGVBYm91dFRhYik7XG5cbmNvbnN0IGNvbnRhY3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhvbWUtY29udGFjdC1idG5cIik7XG5jb250YWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjcmVhdGVDb250YWN0VGFiKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=