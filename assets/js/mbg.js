(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["mbg"] = factory();
	else
		root["mbg"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/grid-view/grid-view.scss":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./src/grid-view/grid-view.scss ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".tg-mbg {\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  height: 100%;\n  outline: 0;\n  padding: 0;\n  margin: 0;\n  z-index: 0;\n  font-size: 14px;\n  /*\r\n    ================================================\r\n    global box-sizing\r\n    */\n  /*\r\n    ================================================\r\n    loading\r\n    */\n  /*\r\n    ================================================\r\n    checkbox\r\n    */\n  /*\r\n    ================================================\r\n    scrollbar\r\n    */\n  /*\r\n    ================================================\r\n    scrollpane\r\n    */\n  /*\r\n    ================================================\r\n    common css\r\n    */\n  /*\r\n    ================================================\r\n    column table\r\n    */\n  /*\r\n    ================================================\r\n    column\r\n    */\n  /*\r\n    ================================================\r\n    column group\r\n    */\n  /*\r\n    ================================================\r\n    column sort\r\n    */\n  /* \r\n    ================================================\r\n    column line, column resize\r\n    */\n  /*\r\n    ================================================\r\n    tree\r\n    */\n  /*\r\n    ================================================\r\n    pane\r\n    */\n  /*\r\n    ================================================\r\n    canvas\r\n    */\n  /*\r\n    ================================================\r\n    row\r\n    */\n  /*\r\n    ================================================\r\n    cell\r\n    */\n  /*\r\n    ================================================\r\n    editor\r\n    */\n  /* normal style for editor */ }\n  .tg-mbg *,\n  .tg-mbg *:before,\n  .tg-mbg *:after {\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box; }\n  .tg-mbg svg {\n    pointer-events: none; }\n  .tg-mbg .tg-loading {\n    display: none;\n    pointer-events: none;\n    position: absolute;\n    width: 30px;\n    height: 30px;\n    left: 50%;\n    top: 50%;\n    margin-left: -15px;\n    margin-top: -15px;\n    font-size: 2px;\n    z-index: 100; }\n  .tg-mbg .tg-loading-item {\n    height: 15em;\n    left: 50%;\n    position: absolute;\n    top: 0;\n    width: 2em;\n    z-index: 0; }\n\n@keyframes tg-loading-animation {\n  0% {\n    height: 2em;\n    top: 6.5em; }\n  10% {\n    height: 7em;\n    top: 6.5em; }\n  25% {\n    height: 7em;\n    top: 15em; }\n  75% {\n    height: 2em;\n    top: 20em; }\n  100% {\n    height: 2em;\n    top: 20em; } }\n  .tg-mbg .tg-loading-item:after {\n    animation-iteration-count: infinite;\n    animation-name: tg-loading-animation;\n    animation-timing-function: ease-out;\n    background: #0077cf;\n    border-radius: 2em;\n    content: '';\n    height: 0;\n    position: absolute;\n    transform-origin: 50% 100%;\n    width: 2em; }\n  .tg-mbg .tg-loading-static .tg-loading-item:after {\n    animation: none;\n    height: 7em;\n    top: 20em; }\n  .tg-mbg .tg-loading-item-0 {\n    transform: rotate(0); }\n  .tg-mbg .tg-loading-item-0:after {\n    animation-delay: -.1s;\n    animation-duration: 1.44s; }\n  .tg-mbg .tg-loading-item-1 {\n    transform: rotate(45deg); }\n  .tg-mbg .tg-loading-item-1:after {\n    animation-delay: 0s;\n    animation-duration: 1.44s; }\n  .tg-mbg .tg-loading-item-2 {\n    transform: rotate(90deg); }\n  .tg-mbg .tg-loading-item-2:after {\n    animation-delay: .1s;\n    animation-duration: 1.44s; }\n  .tg-mbg .tg-loading-item-3 {\n    transform: rotate(135deg); }\n  .tg-mbg .tg-loading-item-3:after {\n    animation-delay: .2s;\n    animation-duration: 1.44s; }\n  .tg-mbg .tg-loading-item-4 {\n    transform: rotate(180deg); }\n  .tg-mbg .tg-loading-item-4:after {\n    animation-delay: .3s;\n    animation-duration: 1.44s; }\n  .tg-mbg .tg-loading-item-5 {\n    transform: rotate(225deg); }\n  .tg-mbg .tg-loading-item-5:after {\n    animation-delay: .4s;\n    animation-duration: 1.44s; }\n  .tg-mbg .tg-loading-item-6 {\n    transform: rotate(270deg); }\n  .tg-mbg .tg-loading-item-6:after {\n    animation-delay: .5s;\n    animation-duration: 1.44s; }\n  .tg-mbg .tg-loading-item-7 {\n    transform: rotate(315deg); }\n  .tg-mbg .tg-loading-item-7:after {\n    animation-delay: .6s;\n    animation-duration: 1.44s; }\n  .tg-mbg .tg-loading-item-8 {\n    transform: rotate(360deg); }\n  .tg-mbg .tg-loading-item-8:after {\n    animation-delay: .7s;\n    animation-duration: 1.44s; }\n  .tg-mbg .tg-checkbox {\n    overflow: hidden;\n    cursor: pointer; }\n    .tg-mbg .tg-checkbox .tg-icon {\n      transform: scale(0.8); }\n    .tg-mbg .tg-checkbox .tg-icon-item {\n      fill: #808080;\n      display: none; }\n    .tg-mbg .tg-checkbox .tg-select-none {\n      display: block; }\n  .tg-mbg .tg-checkbox.tg-selected .tg-select-checkbox {\n    fill: #0077cf;\n    display: block; }\n  .tg-mbg .tg-checkbox.tg-mixed .tg-select-mixed {\n    fill: #0077cf;\n    display: block; }\n  .tg-mbg .tg-checkbox:hover .tg-icon-item {\n    fill: #005ba1; }\n  .tg-mbg .tg-checkbox-all {\n    height: 18px; }\n  .tg-mbg .tg-scrollbar {\n    position: absolute;\n    overflow: hidden;\n    z-index: 100; }\n  .tg-mbg .tg-scrollbar-v {\n    right: 0px;\n    top: 0px; }\n  .tg-mbg .tg-scrollbar-h {\n    left: 0px;\n    bottom: 0px; }\n  .tg-mbg .tg-scrollbar-track {\n    position: relative;\n    overflow: hidden;\n    background: #F9F9F9;\n    width: 100%;\n    height: 100%; }\n  .tg-mbg .tg-scrollbar-thumb {\n    user-select: none;\n    -ms-user-select: none;\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    position: absolute;\n    overflow: hidden;\n    top: 0;\n    left: 0;\n    background: #999999;\n    border-radius: 1px; }\n  .tg-mbg .tg-scrollbar-thumb:hover {\n    background: #888888; }\n  .tg-mbg .tg-scrollbar-thumb-hold {\n    background: #666666; }\n  .tg-mbg .tg-scrollbar-thumb-hold:hover {\n    background: #666666; }\n  .tg-mbg .tg-scrollpane {\n    position: relative;\n    overflow: hidden;\n    outline: none;\n    margin: 0px 0px;\n    padding: 0px 0px;\n    border: none; }\n  .tg-mbg .tg-scrollview {\n    position: relative;\n    overflow: hidden;\n    width: 100%;\n    height: 100%;\n    margin: 0px 0px;\n    padding: 0px 0px;\n    border: none; }\n  .tg-mbg .tg-scrollbody {\n    position: absolute; }\n  .tg-mbg .tg-focus {\n    position: fixed;\n    width: 0;\n    height: 0;\n    top: 0;\n    left: 0;\n    outline: 0; }\n  .tg-mbg .tg-header {\n    border-left: 0px;\n    overflow: hidden;\n    position: relative;\n    cursor: default;\n    width: 10000px; }\n  .tg-mbg .tg-symbols {\n    font-family: MorningstarSymbols; }\n  .tg-mbg .tg-header-table {\n    border-collapse: collapse;\n    table-layout: fixed; }\n    .tg-mbg .tg-header-table td {\n      vertical-align: bottom;\n      overflow: hidden;\n      font-size: 12px;\n      font-weight: bold;\n      line-height: 16px;\n      color: #555; }\n  .tg-mbg .tg-column-item {\n    position: relative;\n    overflow: hidden; }\n  .tg-mbg .tg-header-column {\n    position: relative;\n    overflow: hidden; }\n  .tg-mbg .tg-column-name {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    padding: 10px 5px 5px 5px;\n    border-right: 1px solid #ffffff; }\n  .tg-mbg .tg-nowrap {\n    white-space: nowrap; }\n  .tg-mbg .tg-align-left {\n    text-align: left; }\n  .tg-mbg .tg-align-center {\n    text-align: center; }\n  .tg-mbg .tg-align-right {\n    text-align: right; }\n    .tg-mbg .tg-align-right .tg-sort-indicator-icon {\n      left: inherit;\n      right: -1px; }\n  .tg-mbg .tg-column-group-item {\n    overflow: hidden; }\n  .tg-mbg .tg-column-group-name {\n    text-overflow: ellipsis;\n    border-bottom: 1px solid #ccc;\n    padding: 5px 0px;\n    margin: 0px 5px;\n    font-weight: bold; }\n  .tg-mbg .tg-header-table-sortable .tg-column-name {\n    padding-bottom: 20px; }\n  .tg-mbg .tg-header-table-sortable .tg-column-group-name {\n    padding-bottom: 5px; }\n  .tg-mbg .tg-header-column-sortable {\n    cursor: pointer; }\n  .tg-mbg .tg-header-column-sorted {\n    color: #000000; }\n    .tg-mbg .tg-header-column-sorted .tg-sort-indicator {\n      display: block; }\n    .tg-mbg .tg-header-column-sorted .tg-tree-icon-all .tg-icon-item {\n      fill: #000000; }\n  .tg-mbg .tg-sort-placeholder {\n    position: absolute;\n    height: 17px;\n    padding: 0px 5px;\n    overflow: hidden;\n    left: 0px;\n    right: 0px;\n    bottom: 0px; }\n  .tg-mbg .tg-sort-indicator {\n    position: relative;\n    display: none;\n    height: 7px;\n    border-bottom: 1px solid #000000; }\n  .tg-mbg .tg-sort-indicator-icon {\n    position: absolute;\n    cursor: pointer;\n    width: 7px;\n    height: 7px;\n    left: 0px;\n    right: inherit;\n    top: 0px; }\n  .tg-mbg .tg-sort-indicator-icon svg {\n    display: block; }\n  .tg-mbg .tg-sort-indicator-icon .tg-icon-item {\n    fill: #000000;\n    display: none; }\n  .tg-mbg .tg-sort-asc .tg-sort-indicator-icon {\n    top: 7px; }\n  .tg-mbg .tg-sort-asc .tg-asc {\n    display: block; }\n  .tg-mbg .tg-sort-desc .tg-desc {\n    display: block; }\n  .tg-mbg .tg-column-line {\n    position: absolute;\n    z-index: 10;\n    top: 0;\n    left: 0;\n    height: 100%;\n    display: none; }\n  .tg-mbg .tg-column-line-header {\n    position: absolute;\n    display: block;\n    cursor: ew-resize;\n    width: 11px;\n    opacity: 0; }\n  .tg-mbg .tg-column-line-item {\n    position: absolute;\n    display: block;\n    width: 1px;\n    top: 0px;\n    bottom: 0px;\n    height: 100%;\n    opacity: 0; }\n    .tg-mbg .tg-column-line-item.tg-hover {\n      background-color: #e5e5e5;\n      opacity: 1; }\n    .tg-mbg .tg-column-line-item.tg-active {\n      background-color: #0077cf;\n      opacity: 1; }\n  .tg-mbg .tg-ew-resize {\n    cursor: ew-resize; }\n    .tg-mbg .tg-ew-resize * {\n      cursor: ew-resize; }\n  .tg-mbg .tg-tree {\n    position: relative;\n    width: 100%; }\n    .tg-mbg .tg-tree .tg-tree-level {\n      padding-left: 15px; }\n  .tg-mbg .tg-tree-row-number {\n    position: absolute;\n    left: 5px;\n    top: 0px;\n    text-align: right; }\n  .tg-mbg .tg-tree-level {\n    width: 100%; }\n    .tg-mbg .tg-tree-level .tg-tree-item {\n      padding-left: 0px; }\n  .tg-mbg .tg-tree-item {\n    width: 100%;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    position: relative;\n    padding-left: 15px; }\n  .tg-mbg .tg-tree-group {\n    padding-left: 15px; }\n  .tg-mbg .tg-tree-icon {\n    overflow: hidden;\n    cursor: pointer;\n    display: inline-table;\n    width: 15px;\n    height: 25px;\n    padding-left: 1px;\n    text-align: left; }\n  .tg-mbg .tg-tree-icon .tg-icon-item {\n    fill: #000000;\n    display: none; }\n  .tg-mbg .tg-tree-icon-all {\n    width: 10px; }\n  .tg-mbg .tg-tree-icon-all .tg-icon-item {\n    fill: #666; }\n  .tg-mbg .tg-tree-icon-collapsed .tg-collapsed {\n    display: block; }\n  .tg-mbg .tg-tree-icon-expanded .tg-expanded {\n    display: block; }\n  .tg-mbg .tg-tree-header {\n    position: absolute;\n    top: 0px;\n    left: 0px;\n    padding-top: 10px;\n    text-align: right;\n    overflow: hidden; }\n  .tg-mbg .tg-pane {\n    position: absolute;\n    outline: 0;\n    overflow: hidden;\n    width: 100%; }\n  .tg-mbg .tg-pane-header {\n    position: relative;\n    outline: 0;\n    overflow: hidden;\n    display: block; }\n  .tg-mbg .tg-pane-header .tg-pane {\n    height: 100%; }\n  .tg-mbg .tg-pane-bodyer {\n    position: relative;\n    outline: 0;\n    width: 100%; }\n  .tg-mbg .tg-canvas {\n    position: absolute;\n    outline: 0; }\n  .tg-mbg .tg-frozen-h {\n    overflow: hidden; }\n    .tg-mbg .tg-frozen-h .tg-row.tg-total {\n      background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAASRJREFUeNrEl8ENwjAMRc0GXMqZEToCI7AB6SaMwAaEDRiBEToCV9pLNwjfxZbSCKpKpA7Sp3WI/bBcYkNd97qEEAjXGhqgFtqKWlmrZY+HAuTEdmJ7sdVnjBH5xDFGnw0bfd/VRPSAntCBPi+292xX1a7FHo/7E9TA9rAd7q/QDbaDvRUfEp9BfI5RDPVpzDPVGFQCyuv8dreG8ueUBDCB8r4iUK2xOZT9yBA6eYCpBJTX9ADJejhIjNlDaUmmk2/9b6bqQyWg+nMyh8ZNIq3ppD45apo2GvNM4yZhDuUrlYD+HATWqGl6PphnGjcJc6gOAkug55zQcRBYAPW5oWN3KgHVfmwOjR+uNaFf+ziVgMaDwGyTWOOfhXmm6SBgCmW9BRgAXCcoCCvD8VgAAAAASUVORK5CYII=\");\n      border-top: none;\n      font-weight: bold;\n      color: #151515; }\n    .tg-mbg .tg-frozen-h .tg-row.tg-benchmark {\n      border-top: none;\n      color: #666666; }\n    .tg-mbg .tg-frozen-h .tg-row.tg-cash {\n      border-top: none;\n      font-weight: bold;\n      color: #151515; }\n  .tg-mbg .tg-frozen-v {\n    overflow: hidden; }\n  .tg-mbg .tg-row {\n    position: absolute;\n    border: 0px;\n    width: 100%;\n    border-top: #666; }\n    .tg-mbg .tg-row.tg-group {\n      overflow: hidden;\n      font-weight: bold;\n      border-top: 1px solid #1e1e1e; }\n      .tg-mbg .tg-row.tg-group .tg-tree-item {\n        padding-left: 0px; }\n      .tg-mbg .tg-row.tg-group .tg-cell.tg-align-left.tg-cell-negative {\n        padding-left: 0px; }\n      .tg-mbg .tg-row.tg-group .tg-cell.tg-align-right.tg-cell-negative {\n        padding-right: 0px; }\n    .tg-mbg .tg-row.tg-hover {\n      background: #eaeaea; }\n      .tg-mbg .tg-row.tg-hover .tg-cell .tg-cell-hover-icon {\n        display: inherit; }\n    .tg-mbg .tg-row.tg-draggable .tg-cell {\n      cursor: move; }\n    .tg-mbg .tg-row.tg-active {\n      outline: none; }\n    .tg-mbg .tg-row.tg-selected {\n      z-index: 10;\n      background: #dddddd; }\n      .tg-mbg .tg-row.tg-selected.tg-hover {\n        background: #cccccc; }\n    .tg-mbg .tg-row.tg-focused {\n      border-bottom: 1px solid #00a8e0; }\n    .tg-mbg .tg-row.tg-focused + .tg-row {\n      border-top-color: transparent; }\n    .tg-mbg .tg-row.tg-highlight {\n      color: initial;\n      background: #87cefa;\n      transition: all 0.2s; }\n    .tg-mbg .tg-row.tg-waiting {\n      opacity: 0.5; }\n    .tg-mbg .tg-row.tg-dragging {\n      opacity: 0.1; }\n    .tg-mbg .tg-row.tg-dropping {\n      background: #eaeaea; }\n    .tg-mbg .tg-row.tg-clone {\n      border: 1px dashed #cccccc;\n      border-left: none;\n      border-right: none;\n      background: #ffffff;\n      z-index: 9998;\n      opacity: 0.5; }\n    .tg-mbg .tg-row.tg-pane-first {\n      border-top: none; }\n    .tg-mbg .tg-row.tg-list-first {\n      border-top: none; }\n  .tg-mbg .tg-row-placeholder {\n    position: absolute;\n    width: 100%;\n    border-top: 2px solid #00A8E1;\n    z-index: 9999; }\n  .tg-mbg .tg-cell {\n    position: absolute;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    vertical-align: middle;\n    z-index: 1;\n    margin: 0;\n    white-space: nowrap;\n    cursor: default;\n    padding: 0 5px;\n    border-right: 1px solid #ffffff;\n    height: 100%; }\n    .tg-mbg .tg-cell:focus {\n      outline: none; }\n    .tg-mbg .tg-cell.tg-highlight {\n      background: lightskyblue;\n      transition: all 0.2s; }\n    .tg-mbg .tg-cell.tg-flashing {\n      border: 1px solid red !important; }\n    .tg-mbg .tg-cell.tg-selected {\n      background-color: beige; }\n    .tg-mbg .tg-cell.tg-active {\n      outline: none; }\n    .tg-mbg .tg-cell.tg-align-left.tg-cell-negative {\n      padding-left: 1px; }\n    .tg-mbg .tg-cell.tg-align-right.tg-cell-negative {\n      padding-right: 1px; }\n  .tg-mbg .tg-cell-hover-icon {\n    display: none; }\n  .tg-mbg .tg-editable {\n    /* text */\n    /* list */ }\n    .tg-mbg .tg-editable .tg-editor-text-container {\n      z-index: 11;\n      overflow: visible;\n      height: 100%; }\n    .tg-mbg .tg-editable .tg-editor-text {\n      top: 0px;\n      left: 0px;\n      width: 100%;\n      height: 100%;\n      border-radius: 0;\n      border: 0;\n      outline: 0;\n      border-bottom: 1px solid #999999;\n      box-shadow: none;\n      outline: none;\n      background: #dddddd;\n      font-size: 14px;\n      color: #151515;\n      padding: 0 3px; }\n      .tg-mbg .tg-editable .tg-editor-text::-ms-clear {\n        display: none; }\n      .tg-mbg .tg-editable .tg-editor-text::-ms-reveal {\n        display: none; }\n    .tg-mbg .tg-editable .tg-editor-text:focus {\n      border-color: #66afe9;\n      outline: 0; }\n    .tg-mbg .tg-editable .tg-editor-list-container {\n      z-index: 11;\n      overflow: visible;\n      width: 100%;\n      height: 100%; }\n      .tg-mbg .tg-editable .tg-editor-list-container .select2-selection {\n        border: 0;\n        border-radius: 0;\n        padding: 0;\n        background: #eaeaea;\n        height: 100%; }\n        .tg-mbg .tg-editable .tg-editor-list-container .select2-selection .select2-selection__rendered {\n          height: 100%;\n          line-height: inherit; }\n        .tg-mbg .tg-editable .tg-editor-list-container .select2-selection .select2-selection__arrow {\n          height: 100%;\n          top: -1px; }\n    .tg-mbg .tg-editable .tg-editor-list {\n      outline: 0; }\n  .tg-mbg .tg-editor-cell-normal {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    padding: 0 3px; }\n  .tg-mbg .tg-editor-cell-text {\n    background: #dddddd;\n    color: #151515;\n    overflow: hidden;\n    padding: 0 3px; }\n  .tg-mbg .tg-editor-cell-list .select2-selection {\n    border: 0;\n    border-radius: 0;\n    padding: 0;\n    background: #eaeaea;\n    height: 100%; }\n    .tg-mbg .tg-editor-cell-list .select2-selection .select2-selection__rendered {\n      height: 100%;\n      line-height: inherit; }\n    .tg-mbg .tg-editor-cell-list .select2-selection .select2-selection__arrow {\n      height: 100%;\n      top: -1px; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
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

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
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

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

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
		var nextSibling = getElement(options.insertAt.before, target);
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

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
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

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
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

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
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
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
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


/***/ }),

/***/ "./src/core/cache.js":
/*!***************************!*\
  !*** ./src/core/cache.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Util = __webpack_require__(/*! ./util.js */ "./src/core/util.js");
var OptionBase = __webpack_require__(/*! ./option-base.js */ "./src/core/option-base.js");

var Cache = OptionBase.extend({

    previousTimestamp: 0,

    defaultOption: function() {
        return {
            //default expires time 1d / 24 hours
            expiresTime: 24 * 60 * 60 * 1000,
            //default max size
            maxSize: 1000
        };
    },

    constructor: function(option) {
        this.setOption(option);
        this.init();
    },

    //=============================================================================

    init: function() {
        this.initExpiresTime();
        this.initMaxSize();
        this.empty();
        return this;
    },

    initExpiresTime: function() {
        var expiresTime = Util.tonum(this.option.expiresTime, true);
        this.expiresTime = this.getExpiresTime(expiresTime);
        return this;
    },

    getExpiresTime: function(expiresTime) {
        //20 ms < expiresTime < 24 hours * 60 * 60 * 1000
        expiresTime = Math.max(20, Math.min(24 * 60 * 60 * 1000, expiresTime));
        return expiresTime;
    },

    initMaxSize: function() {
        var maxSize = Util.tonum(this.option.maxSize, true);
        //2 < maxSize < 10000
        this.maxSize = Math.max(2, Math.min(10000, maxSize));
        return this;
    },

    empty: function() {
        this.data = {};
        return this;
    },

    //=============================================================================

    key: function(arr) {
        return arr.join("_");
    },

    //=============================================================================

    get: function(key) {
        var item = this.data[key];
        if (!item) {
            return null;
        }
        //check item expires
        var now = new Date().getTime();
        if (now > item.expires) {
            this.remove(key);
            return null;
        }

        item.count += 1;
        return item.data;
    },

    set: function(key, data, expiresTime) {
        if (!key) {
            return this;
        }

        if (Util.isnum(expiresTime)) {
            expiresTime = this.getExpiresTime(expiresTime);
        } else {
            expiresTime = this.expiresTime;
        }
        var now = new Date().getTime();
        var expires = now + expiresTime;

        var item = {
            expires: expires,
            count: 0,
            data: data
        };

        //previous
        if (this.data[key]) {
            this.remove(key);
        }

        //add
        this.data[key] = item;

        this.clean(now);

        return this;
    },

    //=============================================================================

    remove: function(key) {
        delete this.data[key];
        return this;
    },

    removeByPrefix: function(prefix) {
        if (!prefix) {
            return this;
        }
        var keys = Object.keys(this.data);
        for (var i = 0, l = keys.length; i < l; i++) {
            var key = keys[i];
            if (key.indexOf(prefix) === 0) {
                this.remove(key);
            }
        }
        return this;
    },

    //=============================================================================

    clean: function(now) {
        if (now - this.previousTimestamp < 1000) {
            return this;
        }
        this.previousTimestamp = now;

        this.cleanByExpires();
        this.cleanBySize();

        return this;
    },

    cleanByExpires: function() {
        var now = new Date().getTime();
        var keys = Object.keys(this.data);
        for (var i = 0, l = keys.length; i < l; i++) {
            var key = keys[i];
            var item = this.data[key];
            if (now > item.expires) {
                this.remove(key);
            }
        }
        return this;
    },

    cleanBySize: function() {
        var keys = Object.keys(this.data);
        var size = keys.length;
        if (size < this.maxSize) {
            return this;
        }

        //sort by count
        var list = [];
        for (var i = 0; i < size; i++) {
            var key = keys[i];
            var item = this.data[key];
            list.push({
                key: key,
                count: item.count
            });
        }
        list.sort(function(a, b) {
            return a.count - b.count;
        });

        list.length -= this.maxSize;

        for (var j = 0, l = list.length; j < l; j++) {
            this.remove(list[j].key);
        }

        return this;

    },

    //=============================================================================

    destroy: function() {
        this.empty();
    },

    toString: function() {
        return "[object Cache]";
    }
});

module.exports = Cache;

/***/ }),

/***/ "./src/core/drag.js":
/*!**************************!*\
  !*** ./src/core/drag.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ./query.js */ "./src/core/query.js");

var E = {
    MOUSEDOWN: "mousedown",
    MOUSEMOVE: "mousemove",
    MOUSEUP: "mouseup",
    //drag
    DRAG_INIT: "drag_init",
    DRAG_START: "drag_start",
    DRAG_UPDATE: "drag_update",
    DRAG_COMPLETE: "drag_complete"
};
var Util = __webpack_require__(/*! ./util.js */ "./src/core/util.js");

var EventBase = __webpack_require__(/*! ./event-base.js */ "./src/core/event-base.js");

//====================================================================================================
/**
 * @constructor
 * @returns {Drag}
 */

var Drag = EventBase.extend({

    E: E,
    dragging: false,

    constructor: function() {
        this.init();
    },

    init: function() {
        this.ns = ".drag_" + Util.token(8);
        this.MOUSEMOVE = E.MOUSEMOVE + this.ns;
        this.MOUSEUP = E.MOUSEUP + this.ns;
        this.initOption();
        return this;
    },

    initOption: function() {
        this.option = {
            mouseStartX: 0,
            mouseStartY: 0,
            mousePreviousX: 0,
            mousePreviousY: 0,
            mouseCurrentX: 0,
            mouseCurrentY: 0,
            mouseOffsetX: 0,
            mouseOffsetY: 0,
            mouseMoveX: 0,
            mouseMoveY: 0,
            valid: false,
            state: null
        };
    },

    setOption: function(option) {
        var o = this.option;
        Object.keys(option).forEach(function(k) {
            o[k] = option[k];
        });
        return this;
    },

    updateOption: function(e) {
        //sometimes no event for example force complete previous
        if (!e) {
            return;
        }
        var o = this.option;
        //keep previous position
        o.mousePreviousX = o.mouseCurrentX;
        o.mousePreviousY = o.mouseCurrentY;
        //current position
        o.mouseCurrentX = e.pageX;
        o.mouseCurrentY = e.pageY;
        //current offset from start
        o.mouseOffsetX = o.mouseCurrentX - o.mouseStartX;
        o.mouseOffsetY = o.mouseCurrentY - o.mouseStartY;
        //position nothing change
        o.valid = (o.mouseOffsetX === 0 && o.mouseOffsetY === 0) ? false : true;
        //current move offset from previous
        o.mouseMoveX = o.mouseCurrentX - o.mousePreviousX;
        o.mouseMoveY = o.mouseCurrentY - o.mousePreviousY;
    },

    //============================================================================

    start: function(option) {

        this.previousHandler();

        this.initOption();
        this.setOption(option);

        var o = this.option;
        if (!o.e) {
            return this;
        }

        //init target to event current target
        if (!o.target) {
            o.target = $(o.e.currentTarget);
        }

        //namespace event type for mouse move
        var holder = $(window);
        holder.unbind(this.ns);

        var self = this;
        //only one so no need ns events
        holder.one(this.MOUSEUP, function(e) {
            holder.unbind(self.ns);
            self.dragCompleteHandler(e);
        });

        //namespaces events
        holder.bind(this.MOUSEMOVE, function(e) {
            self.dragUpdateHandler(e);
        });

        this.dragInitHandler(o.e);

        return this;
    },

    //previous state clean
    previousHandler: function() {
        //if previous valid and do NOT complete then force to complete
        var o = this.option;
        if (o.valid && o.state !== E.DRAG_COMPLETE) {
            this.dragCompleteHandler();
        }
    },

    preventDefault: function(e) {
        if (e && e.preventDefault) {
            e.preventDefault();
        }
    },

    //============================================================================

    dragInitHandler: function(e) {
        var o = this.option;
        //start position
        o.mouseStartX = e.pageX;
        o.mouseStartY = e.pageY;
        o.mouseCurrentX = o.mouseStartX;
        o.mouseCurrentY = o.mouseStartY;
        o.valid = false;
        //mouse down but not drag start because the positon do not change
        this.dragging = false;
        //stop select
        this.preventDefault(e);
        o.state = E.DRAG_INIT;
        this.trigger(E.DRAG_INIT, o);
        return this;
    },

    dragUpdateHandler: function(e) {
        this.updateOption(e);
        var o = this.option;
        //already start or update
        if (o.state === E.DRAG_START || o.state === E.DRAG_UPDATE) {
            //drag when mouse move after drag start
            this.preventDefault(e);
            o.state = E.DRAG_UPDATE;
            this.trigger(E.DRAG_UPDATE, o);
            return this;
        }

        if (!o.valid) {
            return this;
        }

        //drag start when mouse move first time 
        this.dragging = true;
        this.preventDefault(e);
        o.state = E.DRAG_START;
        this.trigger(E.DRAG_START, o);
        return this;
    },

    dragCompleteHandler: function(e) {
        this.updateOption(e);
        var o = this.option;
        //always complete, but valid could be true or false
        this.dragging = false;
        this.preventDefault(e);
        o.state = E.DRAG_COMPLETE;
        this.trigger(E.DRAG_COMPLETE, o);
        return this;
    },

    //class print
    toString: function() {
        return "[object Drag]";
    }

});


module.exports = Drag;

/***/ }),

/***/ "./src/core/easing.js":
/*!****************************!*\
  !*** ./src/core/easing.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

var Easing = {
    Linear: {
        None: function(k) {
            return k;
        }
    }
    /*
    ,
    Quadratic: {
        In: function(k) {
            return k * k;
        },
        Out: function(k) {
            return k * (2 - k);
        },
        InOut: function(k) {
            if ((k *= 2) < 1) {
                return 0.5 * k * k;
            }
            return -0.5 * (--k * (k - 2) - 1);
        }
    },
    Cubic: {
        In: function(k) {
            return k * k * k;
        },
        Out: function(k) {
            return --k * k * k + 1;
        },
        InOut: function(k) {
            if ((k *= 2) < 1) {
                return 0.5 * k * k * k;
            }
            return 0.5 * ((k -= 2) * k * k + 2);
        }
    },
    Quartic: {
        In: function(k) {
            return k * k * k * k;
        },
        Out: function(k) {
            return 1 - (--k * k * k * k);
        },
        InOut: function(k) {
            if ((k *= 2) < 1) {
                return 0.5 * k * k * k * k;
            }
            return -0.5 * ((k -= 2) * k * k * k - 2);
        }
    },
    Quintic: {
        In: function(k) {
            return k * k * k * k * k;
        },
        Out: function(k) {
            return --k * k * k * k * k + 1;
        },
        InOut: function(k) {
            if ((k *= 2) < 1) {
                return 0.5 * k * k * k * k * k;
            }
            return 0.5 * ((k -= 2) * k * k * k * k + 2);
        }
    },
    Circular: {
        In: function(k) {
            return 1 - Math.sqrt(1 - k * k);
        },
        Out: function(k) {
            return Math.sqrt(1 - (--k * k));
        },
        InOut: function(k) {
            if ((k *= 2) < 1) {
                return -0.5 * (Math.sqrt(1 - k * k) - 1);
            }
            return 0.5 * (Math.sqrt(1 - (k -= 2) * k) + 1);
        }
    }
    */
};

module.exports = Easing;

/***/ }),

/***/ "./src/core/event-base.js":
/*!********************************!*\
  !*** ./src/core/event-base.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Extend = __webpack_require__(/*! ./extend.js */ "./src/core/extend.js");

//=====================================================================================
var Event = function(o) {
    this.type = o.type;
    this.data = o.data;
    this.target = o.target;
    this.currentTarget = o.target;
    this.delegateTarget = o.target;
    this.timeStamp = new Date().getTime();
};

Event.prototype = {
    constructor: Event,
    isDefaultPrevented: false,
    isPropagationStopped: false,
    isImmediatePropagationStopped: false,
    preventDefault: function() {
        this.isDefaultPrevented = true;
    },
    stopPropagation: function() {
        this.isPropagationStopped = true;
    },
    stopImmediatePropagation: function() {
        this.isImmediatePropagationStopped = true;
        this.stopPropagation();
    }
};

//=====================================================================================
function getEventItem(context, handler, option) {
    context += "";
    if (!context) {
        return null;
    }
    option = option || {};
    var arr = context.split(".");
    var type = arr.shift();
    var namespace = "";
    if (arr.length) {
        namespace = arr.join(".");
    }
    var eventItem = {
        context: context,
        type: type,
        namespace: namespace,
        handler: handler,
        one: option.one,
        prepend: option.prepend,
        defaultEvent: option.defaultEvent
    };
    return eventItem;
}
/* eslint-disable complexity*/
function getEventList(types, handler, option) {
    if (!types) {
        return [];
    }

    if (handler && typeof(handler) === "object") {
        option = handler;
    }
    var list = [];

    if (typeof(types) === "object") {
        var keys = Object.keys(types);
        keys.forEach(function(type) {
            var eventItem = getEventItem(type, types[type], option);
            if (eventItem) {
                list.push(eventItem);
            }
        });
        return list;
    }

    if (typeof(types) === "string") {
        var arr = types.split(" ");
        arr.forEach(function(type) {
            var eventItem = getEventItem(type, handler, option);
            if (eventItem) {
                list.push(eventItem);
            }
        });
    }
    return list;
}
/* eslint-enable*/
//=====================================================================================
function addEvent(eventListener, event, maxListeners) {
    if (event.defaultEvent) {
        eventListener.defaultEvent = event;
        return;
    }
    if (eventListener.events.length >= maxListeners) {
        var msg = "Possible Event memory leak detected. ";
        msg += "More than " + maxListeners + " (max limit) listeners added. ";
        msg += "Use setMaxListeners(n) to increase limit.";
        console.warn(msg);
        return;
    }
    if (event.prepend) {
        eventListener.events.unshift(event);
    } else {
        eventListener.events.push(event);
    }
}

function addEvents(eventListeners, eventList, maxListeners) {
    eventList.forEach(function(event) {
        var type = event.type;
        if (typeof(eventListeners[type]) === "undefined") {
            eventListeners[type] = {
                events: [],
                defaultEvent: null
            };
        }
        var handler = event.handler;
        if (typeof(handler) !== "function") {
            return;
        }
        var eventListener = eventListeners[type];
        addEvent(eventListener, event, maxListeners);
    });
}

//=====================================================================================

function removeEventByDefault(eventListeners, type) {
    var eventListener = eventListeners[type];
    if (!eventListener) {
        return;
    }
    if (eventListener.defaultEvent) {
        eventListener.defaultEvent = null;
    }
}

function removeEventByNamespace(eventListeners, namespace) {
    var types = Object.keys(eventListeners);
    types.forEach(function(type) {
        var eventListener = eventListeners[type];
        var newEvents = [];
        eventListener.events.forEach(function(item) {
            if (item && item.namespace !== namespace) {
                newEvents.push(item);
            }
        });
        eventListener.events = newEvents;
    });
}

function removeEventByHandler(eventListeners, type, handler) {
    var eventListener = eventListeners[type];
    if (!eventListener) {
        return;
    }
    var newEvents = [];
    eventListener.events.forEach(function(item) {
        if (item && item.handler !== handler) {
            newEvents.push(item);
        }
    });
    eventListener.events = newEvents;
}

function removeEventByType(eventListeners, type) {
    var eventListener = eventListeners[type];
    if (!eventListener) {
        return;
    }
    if (eventListener.defaultEvent) {
        eventListener.events = [];
    } else {
        delete eventListeners[type];
    }
}

function removeEvent(eventListeners, event) {
    var type = event.type;
    if (event.defaultEvent) {
        removeEventByDefault(eventListeners, type);
        return;
    }
    var namespace = event.namespace;
    if (!type && namespace) {
        removeEventByNamespace(eventListeners, namespace);
        return;
    }
    var handler = event.handler;
    if (typeof(handler) === "function") {
        removeEventByHandler(eventListeners, type, handler);
        return;
    }
    removeEventByType(eventListeners, type);
}

function removeEvents(eventListeners, eventList) {
    eventList.forEach(function(event) {
        removeEvent(eventListeners, event);
    });
}

function removeAllEvents(eventListeners) {
    var types = Object.keys(eventListeners);
    types.forEach(function(type) {
        removeEventByType(eventListeners, type);
    });
}

//=====================================================================================
function sendEventList(eventListener, event, target, data) {

    //call each handler if not stopped
    var events = eventListener.events;
    for (var i = 0; i < events.length; i++) {
        var item = events[i];
        event.handleObj = item;
        event.namespace = item.namespace;
        item.handler.call(target, event, data);
        if (event.isPropagationStopped) {
            break;
        }
    }

    //remove "one" event
    var newEvents = [];
    events.forEach(function(item) {
        if (item && !item.one) {
            newEvents.push(item);
        }
    });
    eventListener.events = newEvents;

}

function sendEventDefault(eventListener, event, target, data) {
    var defaultEvent = eventListener.defaultEvent;
    if (!defaultEvent || event.isDefaultPrevented) {
        return;
    }
    defaultEvent.handler.call(target, event, data);
}

function sendEvent(eventListeners, type, data, target) {
    var eventListener = eventListeners[type];
    if (!eventListener) {
        return;
    }
    var event = new Event({
        type: type,
        target: target,
        data: data
    });
    sendEventList(eventListener, event, target, data);
    sendEventDefault(eventListener, event, target, data);
}

//=====================================================================================
var EventBase = Extend.extend({

    maxListeners: 10,

    setMaxListeners: function(n) {
        this.maxListeners = Number(n) || 10;
    },

    getMaxListeners: function() {
        return this.maxListeners;
    },

    getEventListeners: function() {
        if (!this.eventListeners) {
            this.eventListeners = {};
        }
        return this.eventListeners;
    },

    //=======================================================

    bind: function(types, handler, option) {
        var eventList = getEventList(types, handler, option);
        if (!eventList.length) {
            return this;
        }
        var eventListeners = this.getEventListeners();
        addEvents(eventListeners, eventList, this.maxListeners);
        return this;
    },

    on: function() {
        return this.bind.apply(this, arguments);
    },

    //=======================================================

    one: function(types, handler) {
        this.bind(types, handler, {
            one: true
        });
        return this;
    },

    once: function() {
        return this.one.apply(this, arguments);
    },

    //=======================================================

    unbind: function(types, handler, option) {
        var eventListeners = this.getEventListeners();
        if (!arguments.length) {
            removeAllEvents(eventListeners);
            return this;
        }
        var eventList = getEventList(types, handler, option);
        if (!eventList.length) {
            return this;
        }
        removeEvents(eventListeners, eventList);
        return this;
    },

    off: function() {
        return this.unbind.apply(this, arguments);
    },

    //=======================================================

    trigger: function(type, data) {
        var eventListeners = this.getEventListeners();
        sendEvent(eventListeners, type, data, this);
        return this;
    },

    emit: function() {
        return this.trigger.apply(this, arguments);
    },

    //=======================================================

    toString: function() {
        return "[object EventBase]";
    }

});

module.exports = EventBase;

/***/ }),

/***/ "./src/core/event-type.js":
/*!********************************!*\
  !*** ./src/core/event-type.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

//All Events
var EventType = {

    //header
    onHeaderRendered: "onHeaderRendered",

    onHeaderMouseOver: "onHeaderMouseOver",
    onHeaderMouseOut: "onHeaderMouseOut",
    onHeaderMouseEnter: "onHeaderMouseEnter",
    onHeaderMouseLeave: "onHeaderMouseLeave",

    onHeaderClick: "onHeaderClick",
    onHeaderDblClick: "onHeaderDblClick",
    onHeaderContextMenu: "onHeaderContextMenu",

    onHeadersMouseMove: "onHeadersMouseMove",
    onHeadersMouseEnter: "onHeadersMouseEnter",
    onHeadersMouseLeave: "onHeadersMouseLeave",

    onHeadersTouchStart: "onHeadersTouchStart",

    onSort: "onSort",

    //column
    onColumnWidthChanged: "onColumnWidthChanged",

    onColumnWidthDragStart: "onColumnWidthDragStart",
    onColumnWidthDragUpdate: "onColumnWidthDragUpdate",
    onColumnWidthDragComplete: "onColumnWidthDragComplete",
    onColumnWidthDropped: "onColumnWidthDropped",

    //row
    onRowMouseEnter: "onRowMouseEnter",
    onRowMouseLeave: "onRowMouseLeave",

    onRowRequestSubs: "onRowRequestSubs",

    onRowDragStart: "onRowDragStart",
    onRowDragUpdate: "onRowDragUpdate",
    onRowDragComplete: "onRowDragComplete",
    onRowDropped: "onRowDropped",

    onRowAdded: "onRowAdded",
    onRowRemoved: "onRowRemoved",

    onRowExpand: "onRowExpand",
    onRowCollapse: "onRowCollapse",

    //cell

    onCellRendered: "onCellRendered",

    onCellMouseOver: "onCellMouseOver",
    onCellMouseOut: "onCellMouseOut",
    onCellMouseEnter: "onCellMouseEnter",
    onCellMouseLeave: "onCellMouseLeave",

    onClick: "onClick",
    onDblClick: "onDblClick",
    onContextMenu: "onContextMenu",

    //scroll
    onMouseWheel: "onMouseWheel",
    onScroll: "onScroll",
    onScrollStatusChanged: "onScrollStatusChanged",

    onKeyDown: "onKeyDown",

    //cell tree
    onTreeIconClick: "onTreeIconClick",
    onTreeIconAllClick: "onTreeIconAllClick",

    onCheckboxClick: "onCheckboxClick",
    onCheckboxAllClick: "onCheckboxAllClick",
    onSelectedChanged: "onSelectedChanged",

    onFocusedChanged: "onFocusedChanged",

    //active
    onActiveCellChanged: "onActiveCellChanged",

    //editor
    onCellEditStart: "onCellEditStart",
    onCellEditRendered: "onCellEditRendered",
    onCellEditValueChanging: "onCellEditValueChanging",
    onCellEditValueChanged: "onCellEditValueChanged",
    onCellEditComplete: "onCellEditComplete",
    onCellEditError: "onCellEditError",
    onCellEditDestroy: "onCellEditDestroy",

    //other
    onRenderStart: "onRenderStart",
    onRenderUpdate: "onRenderUpdate",
    onRenderComplete: "onRenderComplete",
    onDestroy: "onDestroy"

};

module.exports = EventType;

/***/ }),

/***/ "./src/core/extend.js":
/*!****************************!*\
  !*** ./src/core/extend.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

function mergeProps(target, list) {
    for (var i = 0, l = list.length; i < l; i++) {
        var item = list[i];
        if (!item) {
            continue;
        }
        for (var k in item) {
            if (target[k] !== item[k]) {
                target[k] = item[k];
            }
        }
    }
    return target;
}

var Extend = function() {

};

Extend.extend = function(protoProps, staticProps) {

    var Super = this;

    //============================================================
    //constructor
    var Sub = function() {
        return Super.apply(this, arguments);
    };

    //if custom constructor
    if (protoProps && protoProps.hasOwnProperty("constructor") && typeof(protoProps.constructor) === 'function') {
        Sub = protoProps.constructor;
    }

    //============================================================

    //add static properties to the constructor
    mergeProps(Sub, [Super, staticProps]);

    //============================================================
    //prototype handler

    var parentProps = Object.create(Super.prototype);
    parentProps.constructor = Sub;

    mergeProps(Sub.prototype, [parentProps, protoProps]);

    //============================================================

    return Sub;

};

Extend.mixin = function() {
    var protoProps = mergeProps({}, arguments);
    return Extend.extend.call(this, protoProps);
};

module.exports = Extend;

/***/ }),

/***/ "./src/core/icon.js":
/*!**************************!*\
  !*** ./src/core/icon.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var SVG = __webpack_require__(/*! ./svg.js */ "./src/core/svg.js");

//========================================================================

var checkbox_border = "M150,450 q0,-300 300,-300 h1100 q300,0 300,300 v1100 q0,300 -300,300 h-1100 q-300,0 -300,-300 v-1100 z";
var checkbox = {
    width: 2000,
    height: 2000,
    data: [{
        "class": "tg-icon-item tg-select-none",
        d: checkbox_border + " M450,250 q-200,0 -200,200 v1100 q0,200 200,200 h1100 q200,0 200,-200 v-1100 q0,-200 -200,-200 h-1100 z"
    }, {
        "class": "tg-icon-item tg-select-checkbox",
        d: checkbox_border + " M1550 450 l-660 950-370-360-70 70 450 440 730-1050 z"
    }, {
        "class": "tg-icon-item tg-select-mixed",
        d: checkbox_border + " M400 950 v100 h1200 v-100 z"
    }]
};

//========================================================================

var tree_icon = {
    width: 2000,
    height: 2000,
    data: [{
        "class": "tg-icon-item tg-collapsed",
        d: "M0,0 l2000,1000 l-2000,1000 z"
    }, {
        "class": "tg-icon-item tg-expanded",
        d: "M0,0 l1000,2000 l1000,-2000 z"
    }]
};

//========================================================================

var sort_icon = {
    width: 2000,
    height: 2000,
    data: [{
        "class": "tg-icon-item tg-asc",
        d: "M0,0 l1000,2000 l1000,-2000 z"
    }, {
        "class": "tg-icon-item tg-desc",
        d: "M1000,0 l-1000,2000 l2000,0 z"
    }]
};

//========================================================================

var icons = {
    checkbox: checkbox,
    tree_icon: tree_icon,
    sort_icon: sort_icon
};

var cache = {};

var Icon = {

    icons: icons,

    createIcon: function(data, option) {
        if (!data) {
            return null;
        }
        var svg = new SVG();
        if (typeof(data) !== "object") {
            data = icons[data];
        }
        svg.draw(data, option);
        return svg;
    },

    getIcon: function(type, option) {
        var icon = Icon.createIcon(type, option);
        if (icon) {
            return icon.svg_root;
        }
        return "";
    },

    getIconString: function(type, option, cacheId) {
        if (cacheId && cache[cacheId]) {
            return cache[cacheId];
        }
        var icon = Icon.createIcon(type, option);
        if (icon) {
            var str = icon.toXMLString();
            if (cacheId) {
                cache[cacheId] = str;
            }
            return str;
        }
        return "";
    }

};

module.exports = Icon;

/***/ }),

/***/ "./src/core/is-object.js":
/*!*******************************!*\
  !*** ./src/core/is-object.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* eslint-disable complexity*/
//if is plain object or array
var isObject = function(obj) {
    if (!obj || typeof(obj) !== "object" || typeof(obj.constructor) !== "function") {
        return false;
    }
    var isAO = function(o) {
        //remove d3 object
        if (o.attr) {
            return false;
        }
        //does not need toString in Array
        if (o.constructor === Array) {
            return true;
        }
        if (o.constructor === Object && typeof(o.toString) === "function" && o.toString() === "[object Object]") {
            //remove like Math Window ...
            return true;
        }
        return false;
    };

    if (isAO(obj)) {
        return true;
    }

    return false;
};
/* eslint-enable*/
module.exports = isObject;

/***/ }),

/***/ "./src/core/merge.js":
/*!***************************!*\
  !*** ./src/core/merge.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./is-object.js */ "./src/core/is-object.js");

var merge;

var mergeArray = function(item, base, deep) {
    //merge array to base
    var size = item.length;
    for (var k = 0; k < size; k++) {
        var vk = item[k];
        if (deep && isObject(vk)) {
            base[k] = merge(base[k], vk);
        } else {
            base[k] = vk;
        }
    }
    //length fixing for array
    base.length = size;
};

var mergeObject = function(item, base, deep) {
    //merge object to base
    Object.keys(item).forEach(function(n) {
        var v = item[n];
        if (base.hasOwnProperty(n) && deep && isObject(v)) {
            base[n] = merge(base[n], v);
        } else {
            base[n] = v;
        }
    });
};

var mergeAO = function(item, base, deep) {
    //merge to base
    if (item instanceof Array) {
        mergeArray(item, base, deep);
    } else {
        mergeObject(item, base, deep);
    }
};

var mergeList = function(len, arg, deep) {
    //base merge result
    var base = null;
    for (var i = 0; i < len; i++) {
        var item = arg[i];
        //only for valid object or array
        if (!isObject(item)) {
            continue;
        }
        //base type depend on first parameter
        if (base === null) {
            base = (item instanceof Array) ? [] : {};
        }
        mergeAO(item, base, deep);
    }
    return base;
};

//merge JSON
merge = function() {
    var arg = arguments;
    var len = arg.length;
    //no parameters
    if (!len) {
        return {};
    }
    //deep merge depend on last parameter 
    var deep = true;
    if (arg[len - 1] === false) {
        deep = false;
    }

    var base = mergeList(len, arg, deep);

    return base;
};

module.exports = merge;

/***/ }),

/***/ "./src/core/motion.js":
/*!****************************!*\
  !*** ./src/core/motion.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var OptionBase = __webpack_require__(/*! ./option-base.js */ "./src/core/option-base.js");
var Util = __webpack_require__(/*! ./util.js */ "./src/core/util.js");
var Easing = __webpack_require__(/*! ./easing.js */ "./src/core/easing.js");

var E = {
    MOTION_BEFORE: "motion_before",
    MOTION_START: "motion_start",
    MOTION_UPDATE: "motion_update",
    MOTION_COMPLETE: "motion_complete",
    MOTION_STOP: "motion_stop"
};


var Motion = OptionBase.extend({

    //if stopped then stop everything
    stopped: true,

    constructor: function() {
        this.initRequestAnimationFrame();
        if (arguments.length) {
            this.setOption.apply(this, arguments);
        }
    },

    defaultOption: function() {
        return {
            //default is Easing.linear
            easing: null,
            //delay time before run
            delay: 0,
            //total time
            duration: 100,

            //from data
            from: 0,
            //till data
            till: 1,
            //current data(private)
            data: 0
        };
    },

    //init requestAnimationFrame
    initRequestAnimationFrame: function() {
        if (window.requestAnimationFrame) {
            this.requestAnimationFrame = function(callback) {
                return window.requestAnimationFrame(callback);
            };
            this.cancelAnimationFrame = function(id) {
                window.cancelAnimationFrame(id);
            };
            return;
        }

        this.requestAnimationFrame = function(callback) {
            return setTimeout(callback, 16);
        };
        this.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };

    },

    stop: function() {
        if (this.stopped) {
            return this;
        }
        //force to till info, but not call complete function
        if (arguments[0]) {
            this.update(this.option.till);
        }
        //stop everything now
        this.stopped = true;
        clearTimeout(this.timeout);
        this.cancelAnimationFrame(this.time_loop);
        this.trigger(E.MOTION_STOP);
        return this;
    },

    start: function() {
        if (arguments.length) {
            this.setOption.apply(this, arguments);
        }

        this.option = this.getOption();

        this.stopped = false;
        this.trigger(E.MOTION_BEFORE);
        if (this.stopped) {
            return this;
        }

        var delay = Util.tonum(this.option.delay, true);

        if (delay > 0) {
            var self = this;
            this.timeout = setTimeout(function() {
                self.startNow();
            }, delay);
        } else {
            this.startNow();
        }
    },

    getEasing: function(easing) {
        if (typeof(easing) !== "function") {
            easing = Util.getValue(Easing, easing, Easing.Linear.None);
        }
        return easing;
    },

    startNow: function() {
        //if call stop before delay time
        if (this.stopped) {
            return this;
        }
        //ready
        var o = this.option;
        this.duration = Util.tonum(o.duration, true) || 100;
        this.easing = this.getEasing(o.easing);
        //console.log(this.easing);
        //start callback, maybe cost musch time outside
        this.trigger(E.MOTION_START);
        //if call stop in start callback
        if (this.stopped) {
            return this;
        }

        //init start time
        this.time = null;

        this.runAnimation();

        return this;
    },

    runAnimation: function() {
        var self = this;
        this.time_loop = this.requestAnimationFrame(function() {
            self.loop();
        });
        return this;
    },

    loop: function() {
        //if call stop in running
        if (this.stopped) {
            this.cancelAnimationFrame(this.time_loop);
            return this;
        }
        //====================================
        //update
        if (!this.time) {
            this.time = new Date().getTime();
        }
        var o = this.option;
        var now = new Date().getTime();
        var t = now - this.time;
        var d = this.duration;
        if (t < d) {
            var k = t / d;
            var p = this.easing.call(this, k);
            var data = this.calculate(p, o.from, o.till, o.from);
            //update callback
            this.update(data);
            this.runAnimation();
            return this;
        }
        //====================================
        //finish
        this.cancelAnimationFrame(this.time_loop);
        //last time update callback
        this.update(o.till);
        //complete callback
        this.complete();
        return this;
    },

    calculate_array: function(p, from, till, self) {
        //if array
        var v = [];
        for (var i = 0, l = from.length; i < l; i++) {
            if (till[i] === undefined || from[i] === self) {
                v[i] = from[i];
            } else {
                v[i] = this.calculate(p, from[i], till[i], self);
            }
        }
        return v;
    },

    calculate_object: function(p, from, till, self) {
        //if object
        var v = {};
        for (var k in from) {
            if (till[k] === undefined || from[k] === self) {
                v[k] = from[k];
            } else {
                v[k] = this.calculate(p, from[k], till[k], self);
            }
        }
        return v;
    },

    /* eslint-disable max-statements,complexity */
    //stop loop calculate if back to self
    calculate: function(p, from, till, self) {
        if (typeof(from) === "object" && typeof(till) === "object") {
            if (from instanceof Array && till instanceof Array) {
                return this.calculate_array(p, from, till, self);
            } else {
                return this.calculate_object(p, from, till, self);
            }
        } else if (Util.isnum(from) && Util.isnum(till)) {
            //must be number
            var v = (till - from) * p + from;
            return v;
        } else {
            //just return from value if NOT number
            return from;
        }
    },
    /* eslint-enable */

    update: function(data) {
        this.data = data;
        this.trigger(E.MOTION_UPDATE, data);
        return this;
    },

    complete: function() {
        this.trigger(E.MOTION_COMPLETE);
        return this;
    },

    toString: function() {
        return "[object Motion]";
    }
});

module.exports = Motion;

/***/ }),

/***/ "./src/core/option-base.js":
/*!*********************************!*\
  !*** ./src/core/option-base.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var merge = __webpack_require__(/*! ./merge.js */ "./src/core/merge.js");
var EventBase = __webpack_require__(/*! ./event-base.js */ "./src/core/event-base.js");

var OptionBase = EventBase.extend({
    option: null,
    defaultOption: function() {
        return {};
    },
    setOption: function() {
        this.option = this.getOption.apply(this, arguments);
        return this;
    },
    getOption: function() {
        var option = this.option;
        //default option from class self
        var def_option = this.defaultOption();
        //merge option
        if (arguments.length && arguments[0]) {
            //new option form custom
            var new_option = arguments[0];
            //if append the option to current option
            if (arguments[1]) {
                def_option = this.option;
            }
            option = merge(def_option, new_option);
        }
        return option || def_option;
    }
});

module.exports = OptionBase;

/***/ }),

/***/ "./src/core/query.js":
/*!***************************!*\
  !*** ./src/core/query.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

var query = window.jQuery || window.$;

// make sure required JavaScript modules are loaded
if (typeof(query) === "undefined") {
    throw "Requires jQuery module to be loaded";
}

module.exports = query;

/***/ }),

/***/ "./src/core/rhythm.js":
/*!****************************!*\
  !*** ./src/core/rhythm.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

//http://demo.nimius.net/debounce_throttle/

var Rhythm = function(context) {
    this.context = context;
    this.delay = 100;
    this.callback = function() {};
    this.arguments = [];
};

Rhythm.prototype = {

    constructor: Rhythm,

    destroy: function() {
        clearTimeout(this.timeout);
        this.context = null;
        this.delay = null;
        this.callback = null;
        this.arguments = null;
    },

    changeHandler: function() {
        this.callback.apply(this.context, this.arguments);
    },

    initOption: function(option) {
        if (typeof(option.delay) === "number" && option.delay > 0) {
            this.delay = option.delay;
        }
        if (typeof(option.callback) === "function") {
            this.callback = option.callback;
        }
        if (option.arguments) {
            this.arguments = option.arguments;
        }
    },

    throttle: function(option) {
        this.initOption(option);
        clearTimeout(this.timeout);
        var now = new Date().getTime();
        if (this.last && now < this.last + this.delay) {
            var self = this;
            this.timeout = setTimeout(function() {
                self.last = now + self.delay;
                self.changeHandler();
            }, this.delay);
        } else {
            this.last = now;
            this.changeHandler();
        }
    },

    debounce: function(option) {
        this.initOption(option);
        clearTimeout(this.timeout);
        var self = this;
        this.timeout = setTimeout(function() {
            self.changeHandler();
        }, this.delay);
    }

};

//all rhythm listeners for a context
var RhythmListeners = function(context) {
    this.context = context;
    this.listeners = {};
};

RhythmListeners.prototype = {
    constructor: RhythmListeners,
    getRhythm: function(name) {
        var item = this.listeners[name];
        //uncreated or destroyed
        if (!item || !item.context) {
            item = new Rhythm(this.context);
            this.listeners[name] = item;
        }
        return item;
    },

    destroy: function() {
        var listeners = this.listeners;
        Object.keys(listeners).forEach(function(k) {
            var item = listeners[k];
            item.destroy();
        });
        this.listeners = {};
    }

};

//static method
Rhythm.getRhythm = function(context, name) {
    //require context
    if (!context.rhythmListeners) {
        context.rhythmListeners = new RhythmListeners(context);
    }
    if (!name) {
        return context.rhythmListeners;
    }
    var item = context.rhythmListeners.getRhythm(name);
    return item;
};

module.exports = Rhythm;

/***/ }),

/***/ "./src/core/svg.js":
/*!*************************!*\
  !*** ./src/core/svg.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ./query.js */ "./src/core/query.js");

var Util = __webpack_require__(/*! ./util.js */ "./src/core/util.js");

var EventBase = __webpack_require__(/*! ./event-base.js */ "./src/core/event-base.js");

var SVG = EventBase.extend({
    SVG_NS: "http://www.w3.org/2000/svg",
    SVG_LINK: "http://www.w3.org/1999/xlink",

    constructor: function() {

    },

    defaultOption: function() {
        return {
            width: 20,
            height: 20,
            pointerEvents: "none",
            cursor: "pointer",
            fill: "#666666",
            scalemode: 1,
            pxfix: true
        };
    },

    draw: function(data, option) {

        option = Util.merge(this.defaultOption(), option);
        this.option = option;

        this.svg_root = this.create("svg", {
            "class": "tg-icon",
            "pointer-events": option.pointerEvents,
            overflow: "hidden",
            xmlns: this.SVG_NS,
            "xmlns:xlink": this.SVG_LINK,
            version: 1.1,
            width: option.width,
            height: option.height
        });

        this.svg_back = this.create("rect", {
            "class": "tg-icon-back",
            opacity: "0",
            cursor: option.cursor,
            width: option.width,
            height: option.height
        }, this.svg_root);

        //scalemode
        var ow = Util.tonum(data.width);
        var oh = Util.tonum(data.height);
        var fit = this.fit(option.width, option.height, ow, oh, option.scalemode);

        var px = fit.x;
        var py = fit.y;
        if (option.pxfix) {
            px = this.pxfix(px, 1);
            py = this.pxfix(py, 1);
        }

        var translate = this.translate(px, py);
        var scale = this.scale(fit.sx, fit.sy);

        this.svg_list = this.create("g", {
            "class": "tg-icon-list",
            "pointer-events": "none",
            transform: translate + " " + scale
        }, this.svg_root);

        var dataList = data.data;
        if (!Util.islist(dataList)) {
            if (dataList && typeof(dataList) === "object") {
                dataList = [dataList];
            } else {
                dataList = [{
                    d: dataList
                }];
            }
        }

        this.drawDataList(dataList);

    },

    drawDataList: function(dataList) {

        for (var i = 0, l = dataList.length; i < l; i++) {
            var item = dataList[i];
            if (!item) {
                continue;
            }
            var data = Util.merge({
                "class": "tg-icon-item",
                fill: this.option.fill
            }, item);

            this.create("path", data, this.svg_list);
        }

    },

    /* eslint-disable complexity*/
    create: function(name, data, parent, child) {
        name = name || "g";
        var node = this.createElement(name);

        /* jshint ignore:start */
        // attrs
        if (data) {
            for (var k in data) {
                var v = data[k];
                if (v === undefined || v === null || typeof(v) === "object") {
                    continue;
                }
                if (name === "image" && (k === "href" || k === "xlink:href")) {
                    //only for href image
                    node.setAttributeNS(this.SVG_LINK, "href", v);
                } else {
                    node.setAttribute(k, v);
                }
            }
        }
        /* jshint ignore:end */

        // append text or children
        if (name === "text" || child) {
            $(node).append(child);
        }
        // append to parent
        if (parent) {
            $(parent).append(node);
        }
        return node;
    },
    /* eslint-enable*/

    createElement: function(name) {
        if (document.createElementNS) {
            return document.createElementNS(this.SVG_NS, name);
        } else {
            return document.createElement(name);
        }
    },

    //svg related
    //0: no scale
    //1: scale with keep width/height (default)
    //2: scale without keep width/height
    //3: scale with keep width/height and cut outside
    fit: function(pw, ph, tw, th, scalemode) {
        scalemode = Util.tonum(scalemode, true);
        var rect = {
            x: 0,
            y: 0,
            width: tw,
            height: th,
            sx: 1,
            sy: 1,
            pw: pw,
            ph: ph
        };

        var checkSize = function() {
            if (tw <= 0 || th <= 0 || pw <= 0 || ph <= 0) {
                return false;
            }
            return true;
        };

        if (!checkSize()) {
            return rect;
        }

        //============================
        //no scale 0
        if (scalemode <= 0 || scalemode > 3) {
            return rect;
        }
        //============================
        //scale 1,2,3

        var scalemode1 = function() {
            if (rect.sx > rect.sy) {
                rect.sx = rect.sy;
            } else if (rect.sx < rect.sy) {
                rect.sy = rect.sx;
            }
            rect.x = (pw - tw * rect.sx) * 0.5;
            rect.y = (ph - th * rect.sy) * 0.5;
        };

        var scalemode3 = function() {
            if (rect.sx > rect.sy) {
                rect.sy = rect.sx;
            } else if (rect.sx < rect.sy) {
                rect.sx = rect.sy;
            }
            rect.x = (pw - tw * rect.sx) * 0.5;
            rect.y = (ph - th * rect.sy) * 0.5;
        };

        var scalemode2 = function() {
            rect.sx = pw / tw;
            rect.sy = ph / th;
            if (scalemode === 1) {
                //1: scale with keep width/height
                scalemode1();
            } else if (scalemode === 3) {
                //3: scale with keep width/height and cut outside
                scalemode3();
            }
        };

        //2: scale without keep width/height
        scalemode2();

        return rect;
    },

    //pixel fixing for line
    pxfix: function(_linePos, _lineWidth, _lineAlign) {
        //always to int
        var linePos = Util.tonum(_linePos, true);
        var lineWidth = Math.max(Util.tonum(_lineWidth, true), 1);
        var lineAlign = Util.tonum(_lineAlign);

        //mid align, always + offset, for example pos 0 draw in 0.5
        if (lineAlign === 0) {
            var fix = (lineWidth % 2) * 0.5;
            //snap to 0.5 of pos
            if (linePos >= _linePos) {
                return linePos - fix;
            }
            return linePos + fix;
        }

        //left align, start
        if (lineAlign > 0) {
            return linePos + lineWidth * 0.5;
        }

        //right align, end
        return linePos - lineWidth * 0.5;
    },

    point: function(x, y) {
        return [Util.tonum(x), Util.tonum(y)].join(",");
    },

    //transform
    translate: function(x, y) {
        return "translate(" + [Util.tonum(x), Util.tonum(y)] + ")";
    },
    scale: function(x, y) {
        return "scale(" + [Util.tonum(x), Util.tonum(y)] + ")";
    },

    toXMLString: function() {
        var str = "";
        if (this.svg_root) {
            str = this.svg_root.outerHTML;
            if (!str) {
                var parent = this.svg_root.parentNode;
                if (parent) {
                    str = parent.innerHTML;
                } else {
                    var temp = document.createElement("div");
                    temp.appendChild(this.svg_root);
                    str = temp.innerHTML;
                }
            }
            if (str) {
                // SVG format sanitize
                str = str.replace(/ href=/g, ' xlink:href=');
            }
        }
        return str;
    },

    toString: function() {
        return "[object SVG]";
    }

});

module.exports = SVG;

/***/ }),

/***/ "./src/core/touch.js":
/*!***************************!*\
  !*** ./src/core/touch.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ./query.js */ "./src/core/query.js");

var Util = __webpack_require__(/*! ./util.js */ "./src/core/util.js");
var E = {
    TOUCHMOVE: "touchmove",
    TOUCHEND: "touchend",
    //touch
    TOUCH_START: "touch_start",
    TOUCH_MOVE: "touch_move",
    TOUCH_END: "touch_end",
    TOUCH_INERTIA: "touch_inertia"
};

var Motion = __webpack_require__(/*! ./motion.js */ "./src/core/motion.js");

var EventBase = __webpack_require__(/*! ./event-base.js */ "./src/core/event-base.js");
var Touch = EventBase.extend({
    E: E,
    constructor: function() {
        this.init();
    },

    init: function() {
        this.ns = ".drag_" + Util.token(8);
        this.TOUCHMOVE = E.TOUCHMOVE + this.ns;
        this.TOUCHEND = E.TOUCHEND + this.ns;
        this.initOption();
        return this;
    },

    initOption: function() {
        this.option = {
            holder: null,
            touchLength: 0,
            touchStartX: 0,
            touchStartY: 0,
            touchPreviousX: 0,
            touchPreviousY: 0,
            touchCurrentX: 0,
            touchCurrentY: 0,
            touchOffsetX: 0,
            touchOffsetY: 0,
            touchMoveX: 0,
            touchMoveY: 0,
            valid: false
        };
    },

    setOption: function(option) {
        var o = this.option;
        Object.keys(option).forEach(function(k) {
            o[k] = option[k];
        });
        return this;
    },

    //============================================================================

    start: function(option) {

        this.initOption();
        this.setOption(option);

        var o = this.option;
        if (!o.e) {
            return this;
        }

        //namespace event type for touch move
        var holder = $(o.holder || window);
        holder.unbind(this.ns);

        var self = this;
        //only one so no need ns events
        holder.one(this.TOUCHEND, function(e) {
            holder.unbind(self.ns);
            self.touchEndHandler(e);
        });

        //namespaces events
        holder.bind(this.TOUCHMOVE, function(e) {
            self.touchMoveHandler(e);
        });

        this.touchStartHandler(o.e);

        return this;
    },

    //============================================================================

    getTouches: function(e) {
        if (!e) {
            return [];
        }
        e = e.originalEvent || e;
        return e.touches || [];
    },

    getChangedTouches: function(e) {
        if (!e) {
            return [];
        }
        e = e.originalEvent || e;
        return e.changedTouches || [];
    },

    touchStartHandler: function(e) {
        this.motionStop();
        var touches = this.getTouches(e);
        var touchItem = touches[0];
        if (!touchItem) {
            return;
        }
        var o = this.option;
        o.touchLength = touches.length;
        //start position
        o.touchStartX = touchItem.clientX;
        o.touchStartY = touchItem.clientY;
        o.touchCurrentX = o.touchStartX;
        o.touchCurrentY = o.touchStartY;
        o.touchInertiaStartX = o.touchCurrentX;
        o.touchInertiaStartY = o.touchCurrentY;
        o.valid = false;

        this.currentEvent = e;
        this.touching = false;
        this.trigger(E.TOUCH_START, o);

        return this;
    },

    touchMoveHandler: function(e) {
        var touches = this.getTouches(e);
        var touchItem = touches[0];
        if (!touchItem) {
            return;
        }
        var o = this.option;
        o.touchLength = touches.length;
        //keep previous position
        o.touchPreviousX = o.touchCurrentX;
        o.touchPreviousY = o.touchCurrentY;
        //current position
        o.touchCurrentX = touchItem.clientX;
        o.touchCurrentY = touchItem.clientY;
        //current offset from start
        o.touchOffsetX = o.touchCurrentX - o.touchStartX;
        o.touchOffsetY = o.touchCurrentY - o.touchStartY;
        //position nothing change
        o.valid = (o.touchOffsetX === 0 && o.touchOffsetY === 0) ? false : true;
        //current move offset from previous
        o.touchMoveX = o.touchCurrentX - o.touchPreviousX;
        o.touchMoveY = o.touchCurrentY - o.touchPreviousY;

        this.currentEvent = e;
        this.touching = true;
        this.trigger(E.TOUCH_MOVE, o);

        Util.getRhythm(this, "inertiaTime").throttle({
            delay: 50,
            callback: this.inertiaTimeHandler
        });
        return this;
    },

    inertiaTimeHandler: function() {
        var o = this.option;
        o.touchInertiaStartX = o.touchCurrentX;
        o.touchInertiaStartY = o.touchCurrentY;
    },

    touchEndHandler: function(e) {
        var o = this.option;

        this.currentEvent = e;
        this.touching = false;
        this.trigger(E.TOUCH_END, o);

        var changedTouches = this.getChangedTouches(e);
        var touchItem = changedTouches[0];
        if (!touchItem) {
            return;
        }

        var touches = this.getTouches(e);
        o.touchLength = touches.length;

        var touchEndX = touchItem.clientX;
        var touchEndY = touchItem.clientY;
        o.touchInertiaX = touchEndX - o.touchInertiaStartX;
        o.touchInertiaY = touchEndY - o.touchInertiaStartY;

        this.motionStart();

        return this;
    },

    motionStart: function() {
        this.motionStop();

        var o = this.option;
        var from = {
            x: o.touchInertiaX,
            y: o.touchInertiaY
        };
        var till = {
            x: 0,
            y: 0
        };

        var self = this;
        this.motion = new Motion();
        this.motion.bind("motion_update", function(e, d) {
            o.touchInertiaX = d.x;
            o.touchInertiaY = d.y;
            self.trigger(E.TOUCH_INERTIA, o);
        });
        this.motion.start({
            duration: 500,
            from: from,
            till: till
        });
        return this;
    },

    motionStop: function() {
        if (this.motion) {
            this.motion.stop();
            this.motion = null;
        }
        return this;
    },

    preventDefault: function(e) {
        e = e || this.currentEvent;
        if (e && e.preventDefault) {
            e.preventDefault();
        }
    },

    //class print
    toString: function() {
        return "[object Touch]";
    }

});


module.exports = Touch;

/***/ }),

/***/ "./src/core/util.js":
/*!**************************!*\
  !*** ./src/core/util.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./is-object.js */ "./src/core/is-object.js");
var merge = __webpack_require__(/*! ./merge.js */ "./src/core/merge.js");
var Rhythm = __webpack_require__(/*! ./rhythm.js */ "./src/core/rhythm.js");

var uniqValue = 0;

var Util = {

    isObject: isObject,
    merge: merge,

    //=================================================================================
    //strings

    uniq: function(len) {
        uniqValue += 1;
        var t = Util.token(len);
        return t + uniqValue;
    },

    //get a token string
    token: function(len) {
        var str = Math.random().toString().substr(2);
        if (len) {
            str = str.substr(0, Util.tonum(len));
        }
        return str;
    },

    //=================================================================================
    //number
    //if is valid number
    isnum: function(num) {
        if (typeof(num) !== "number" || isNaN(num)) {
            return false;
        }
        var isInvalid = function(n) {
            if (n === Number.MAX_VALUE || n === Number.MIN_VALUE || n === Number.NEGATIVE_INFINITY || n === Number.POSITIVE_INFINITY) {
                return true;
            }
            return false;
        };
        if (isInvalid(num)) {
            return false;
        }
        return true;
    },
    // format to a valid number
    tonum: function(num, toInt) {
        if (typeof(num) !== "number") {
            num = parseFloat(num);
        }
        if (isNaN(num)) {
            num = 0;
        }
        if (toInt) {
            num = Math.round(num);
        }
        return num;
    },

    //try to convert number if it is a string number
    convertNum: function(str) {
        if (typeof(str) === "string") {
            //keep string if can not be converted
            var reg = /^[-+]?\d+(\.\d+)?$/ig;
            if (reg.test(str)) {
                return parseFloat(str);
            }
        }
        return str;
    },

    clamp: function(num, min, max) {
        return Math.max(Math.min(num, max), min);
    },

    per: function(num) {
        num = Util.tonum(num);
        num = Util.clamp(num, 0, 1);
        return num;
    },

    //string replace {name}
    replace: function(str, obj) {
        str = "" + str;
        if (!obj) {
            return str;
        }
        str = str.replace(/\{([^}]+)\}/g, function(match, key) {
            if (!obj.hasOwnProperty(key)) {
                return match;
            }
            return obj[key];
        });
        return str;
    },

    //whether data is array with length
    isarr: function(data) {
        if (data && data instanceof Array) {
            return true;
        }
        return false;
    },

    tolist: function(data) {
        if (!data) {
            return [];
        }
        if (data instanceof Array) {
            return data;
        }
        return [data];
    },

    islist: function(data) {
        if (Util.isarr(data) && data.length > 0) {
            return true;
        }
        return false;
    },
    //whether item in list
    inlist: function(item, list) {
        if (!Util.islist(list)) {
            return false;
        }

        for (var i = 0, l = list.length; i < l; i++) {
            if (list[i] === item) {
                return true;
            }
        }

        return false;
    },

    listToMap: function(list) {
        var map = {};
        if (Util.islist(list)) {
            list.forEach(function(item) {
                map[item] = true;
            });
        }
        return map;
    },

    isdate: function(date) {
        if (!date || !(date instanceof Date)) {
            return false;
        }
        //is Date Object but Date {Invalid Date}
        if (isNaN(date.getTime())) {
            return false;
        }
        return true;
    },
    /* eslint-disable complexity*/
    //getValue({a:{b:1}}, "a.b", 0)
    getValue: function(data, path, defaultValue) {
        if (!path) {
            return defaultValue;
        }
        var current = data;
        var list = path.split(".");
        var lastKey = list.pop();
        while (current && list.length) {
            var item = list.shift();
            current = current[item];
        }
        if (current && current.hasOwnProperty(lastKey)) {
            var value = current[lastKey];
            if (typeof(value) !== "undefined") {
                return value;
            }
        }
        return defaultValue;
    },
    /* eslint-enable*/

    isMatch: function(item, attr) {
        if (!item || !attr) {
            return false;
        }
        for (var k in attr) {
            if (item[k] !== attr[k]) {
                return false;
            }
        }
        return true;
    },

    getListItem: function(list, attr) {
        if (Util.islist(list)) {
            for (var i = 0, l = list.length; i < l; i++) {
                var item = list[i];
                if (Util.isMatch(item, attr)) {
                    return item;
                }
            }
        }
        return null;
    },

    delListItem: function(list, attr) {
        if (!Util.islist(list)) {
            return list;
        }
        for (var i = 0; i < list.length; i++) {
            var item = list[i];
            if (Util.isMatch(item, attr)) {
                list.splice(i, 1);
                i--;
            }
        }
        return list;
    },

    removePrevious: function(target) {
        if (!target) {
            return;
        }
        //remove all previous property
        for (var k in target) {
            if (k.indexOf("previous") === 0) {
                delete target[k];
            }
        }
    },

    hasCtrlKey: function(e) {
        var ctrlKey = false;
        if (e) {
            ctrlKey = e.ctrlKey || e.metaKey;
        }
        return ctrlKey;
    },

    hasShiftKey: function(e) {
        var shiftKey = false;
        if (e) {
            shiftKey = e.shiftKey;
        }
        return shiftKey;
    },

    getRhythm: function(context, name) {
        return Rhythm.getRhythm(context, name);
    }

};

module.exports = Util;

/***/ }),

/***/ "./src/grid-view/grid-view.html":
/*!**************************************!*\
  !*** ./src/grid-view/grid-view.html ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"tg-mbg\">\r\n    <div class=\"tg-focus tg-focus-start\" tabIndex='0' hideFocus></div>\r\n\r\n    <div class=\"tg-pane-header\">\r\n        <div class='tg-scrollpane tg-pane tg-pane-left tg-pane-header-left'>\r\n            <div class=\"tg-scrollview\">\r\n                <div class='tg-scrollbody tg-header tg-header-left'></div>\r\n            </div>\r\n        </div>\r\n        <div class='tg-scrollpane tg-pane tg-pane-right tg-pane-header-right'>\r\n            <div class=\"tg-scrollview\">\r\n                <div class='tg-scrollbody tg-header tg-header-right'></div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"tg-pane-bodyer\">\r\n\r\n        <div class='tg-scrollpane tg-pane tg-pane-top tg-pane-left tg-pane-top-left'>\r\n            <div class=\"tg-scrollview\">\r\n                <div class='tg-scrollbody tg-canvas tg-canvas-top tg-canvas-left tg-canvas-top-left'></div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class='tg-scrollpane tg-pane tg-pane-top tg-pane-right tg-pane-top-right'>\r\n            <div class=\"tg-scrollview\">\r\n                <div class='tg-scrollbody tg-canvas tg-canvas-top tg-canvas-right tg-canvas-top-right'></div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class='tg-scrollpane tg-pane tg-pane-bottom tg-pane-left tg-pane-bottom-left'>\r\n            <div class=\"tg-scrollview\">\r\n                <div class='tg-scrollbody tg-canvas tg-canvas-bottom tg-canvas-left tg-canvas-bottom-left'></div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class='tg-scrollpane tg-pane tg-pane-bottom tg-pane-right tg-pane-bottom-right'>\r\n            <div class=\"tg-scrollview\">\r\n                <div class='tg-scrollbody tg-canvas tg-canvas-bottom tg-canvas-right tg-canvas-bottom-right'></div>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"tg-focus tg-focus-end\" tabIndex='0' hideFocus></div>\r\n\r\n    <div class=\"tg-column-line\">\r\n        <div class=\"tg-column-line-item tg-column-line-l\"></div>\r\n        <div class=\"tg-column-line-item tg-column-line-r\"></div>\r\n        <div class=\"tg-column-line-header\"></div>\r\n    </div>\r\n\r\n    <div class=\"tg-loading\">\r\n        <div class=\"tg-loading-item tg-loading-item-1\"></div>\r\n        <div class=\"tg-loading-item tg-loading-item-2\"></div>\r\n        <div class=\"tg-loading-item tg-loading-item-3\"></div>\r\n        <div class=\"tg-loading-item tg-loading-item-4\"></div>\r\n        <div class=\"tg-loading-item tg-loading-item-5\"></div>\r\n        <div class=\"tg-loading-item tg-loading-item-6\"></div>\r\n        <div class=\"tg-loading-item tg-loading-item-7\"></div>\r\n        <div class=\"tg-loading-item tg-loading-item-8\"></div>\r\n    </div>\r\n\r\n</div>";

/***/ }),

/***/ "./src/grid-view/grid-view.js":
/*!************************************!*\
  !*** ./src/grid-view/grid-view.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// base css
__webpack_require__(/*! ./grid-view.scss */ "./src/grid-view/grid-view.scss");

//=============================================================================
var $ = __webpack_require__(/*! ../core/query.js */ "./src/core/query.js");
var E = __webpack_require__(/*! ../core/event-type.js */ "./src/core/event-type.js");
var Util = __webpack_require__(/*! ../core/util.js */ "./src/core/util.js");

var templateHtml = __webpack_require__(/*! ./grid-view.html */ "./src/grid-view/grid-view.html");

var ViewBase = __webpack_require__(/*! ./view/view-base.js */ "./src/grid-view/view/view-base.js");

//=============================================================================

var GridView = ViewBase.extend({

    timestamp_render: 0,

    //totalRowsHeight = frozenRowsHeight + scrollRowsHeight
    frozenRowsHeight: 0,
    totalRowsHeight: 0,
    scrollRowsHeight: 0,

    paneWidthL: 0,
    paneWidthR: 0,
    paneHeightT: 0,
    paneHeightB: 0,

    //has scroll bar
    hasHScroll: true,
    hasVScroll: true,

    //scroll position
    scrollLeft: 0,
    scrollTop: 0,
    scrollTopOffset: 0,

    //
    tabbingDirection: 1,

    //=================================================================================

    constructor: function(container) {
        this.create(container);
    },

    create: function(container) {
        if (!container) {
            return this;
        }

        //this uniq id
        this.uid = "tg-" + Util.uniq(3);
        this.rowsCache = {};

        //init container
        this.$container = $(container);
        if (this.$container.length < 1) {
            throw new Error("GridView requires a valid container");
        }
        this.$container.empty();

        this.initTemplate();
    },

    initTemplate: function() {

        this.$template = $(templateHtml).appendTo(this.$container);

        this.$focusSinkStart = this.find(".tg-focus-start");
        this.$focusSinkEnd = this.find(".tg-focus-end");
        this.$focusSink = $().add(this.$focusSinkStart).add(this.$focusSinkEnd);

        //===============================================================
        this.$paneHeader = this.find(".tg-pane-header");

        //===============================================================
        this.$paneHeaderL = this.$paneHeader.find(".tg-pane-header-left");
        this.$paneHeaderR = this.$paneHeader.find(".tg-pane-header-right");

        // Append the columnn containers to the headers
        this.$headerL = this.$paneHeaderL.find(".tg-header-left");
        this.$headerR = this.$paneHeaderR.find(".tg-header-right");

        // Cache the header columns
        this.$headers = $().add(this.$headerL).add(this.$headerR);

        //===============================================================
        this.$paneBodyer = this.find(".tg-pane-bodyer");

        //===============================================================
        this.$paneTopL = this.$paneBodyer.find(".tg-pane-top-left");
        this.$paneTopR = this.$paneBodyer.find(".tg-pane-top-right");
        this.$paneBottomL = this.$paneBodyer.find(".tg-pane-bottom-left");
        this.$paneBottomR = this.$paneBodyer.find(".tg-pane-bottom-right");

        //===============================================================

        this.$canvasTopL = this.$paneTopL.find(".tg-canvas");
        this.$canvasTopR = this.$paneTopR.find(".tg-canvas");
        this.$canvasBottomL = this.$paneBottomL.find(".tg-canvas");
        this.$canvasBottomR = this.$paneBottomR.find(".tg-canvas");

        //===============================================================
        this.$panes = $().add(this.$paneTopL).add(this.$paneTopR).add(this.$paneBottomL).add(this.$paneBottomR);

        this.$canvas = $().add(this.$canvasTopL).add(this.$canvasTopR).add(this.$canvasBottomL).add(this.$canvasBottomR);

        return this;
    },

    //=================================================================================

    init: function(option) {

        this.initialized = false;
        this.resetStatus();

        this.option = option;
        this.initOption();

        this.initCssRules();

        this.initScrollpane();

        this.initColumnLine();

        this.bindEvents();

        //========================================================
        this.renderCompleted = false;
        this.trigger(E.onRenderStart, this.renderCompleted);

        //init headers
        this.initHeaders();

        return this;
    },

    resetStatus: function() {
        //clean before init
        Util.removePrevious(this);

        //to rebuild css rules
        this.canvasWidthL = 0;
        this.canvasWidthR = 0;

        //to clean size cache
        this.canvasHeightT = 0;
        this.canvasHeightB = 0;

        this.$canvas.width(0).height(0);

        this.paneWidthL = 0;
        this.paneWidthR = 0;
        this.paneHeightT = 0;
        this.paneHeightB = 0;

        this.$panes.width(0).height(0);

        //reset scroll status
        this.scrollLeft = 0;
        this.scrollTop = 0;
        this.scrollTopOffset = 0;

        this.invalidateAll();
    },

    initOption: function() {

        var o = this.option;

        // remove previous first
        this.$template.removeClass();
        // always require
        this.$template.addClass("tg-mbg");

        //id and className handler, for private column width/left CSS
        var tg_id = this.$template.attr("tg_id");
        if (tg_id) {
            this.removeCssRules(tg_id);
        }
        this.$template.addClass(this.uid).attr("tg_id", this.uid);

        // customize from option
        if (o.theme) {
            this.$template.addClass("tg-" + o.theme);
        }
        this.$template.addClass(o.className);

        this.initScrollbarSize();

    },

    //======================================================================================

    render: function() {
        Util.getRhythm(this, "render").debounce({
            delay: 20,
            callback: this.renderNow,
            arguments: arguments
        });
    },

    renderNow: function() {

        if (!this.initialized) {
            return;
        }

        //console.log("render now");

        var visibleRange = this.getVisibleRange();

        //keep for current range property
        this.visibleRange = visibleRange;

        //clean out of range
        this.clearRowCacheByRange(visibleRange);

        this.renderRows(visibleRange.rowList);

        this.renderCells(visibleRange.rowList, visibleRange.columnList);

        //update everytime update
        this.trigger(E.onRenderUpdate, visibleRange);
        //complete only one time
        if (!this.renderCompleted) {
            this.renderCompleted = true;
            this.trigger(E.onRenderComplete, this.renderCompleted);
        }

        //last render timestamp
        this.timestamp_render = new Date().getTime();

    },

    showLoading: function() {
        if (this.$container) {
            this.$container.find(".tg-loading").show();
        }
        return this;
    },

    hideLoading: function() {
        if (this.$container) {
            this.$container.find(".tg-loading").hide();
        }
        return this;
    },

    destroy: function() {
        this.initialized = false;
        Util.getRhythm(this).destroy();
        this.trigger(E.onDestroy);
        this.cancelCurrentEdit();
        this.$container.removeAttr("tg_id");
        this.$container.unbind(".tg");
        this.removeCssRules();
        this.unbind();
        this.$container.empty().removeClass(this.uid);
    },

    toString: function() {
        return "[object GridView]";
    }

});

module.exports = GridView;

/***/ }),

/***/ "./src/grid-view/grid-view.scss":
/*!**************************************!*\
  !*** ./src/grid-view/grid-view.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader!../../node_modules/sass-loader/lib/loader.js!./grid-view.scss */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/grid-view/grid-view.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/grid-view/ui/scroll-bar/scroll-bar-h.js":
/*!*****************************************************!*\
  !*** ./src/grid-view/ui/scroll-bar/scroll-bar-h.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ScrollBar = __webpack_require__(/*! ./scroll-bar.js */ "./src/grid-view/ui/scroll-bar/scroll-bar.js");

var ScrollBarH = ScrollBar.extend({
    mode: "h",
    type: {
        className: "tg-scrollbar-h",
        offset: "left",
        size: "width",
        page: "pageX",
        axis: "x",
        mouseOffset: "mouseOffsetX"
    }
});

module.exports = ScrollBarH;

/***/ }),

/***/ "./src/grid-view/ui/scroll-bar/scroll-bar-v.js":
/*!*****************************************************!*\
  !*** ./src/grid-view/ui/scroll-bar/scroll-bar-v.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ScrollBar = __webpack_require__(/*! ./scroll-bar.js */ "./src/grid-view/ui/scroll-bar/scroll-bar.js");

var ScrollBarV = ScrollBar.extend({
    mode: "v",
    type: {
        className: "tg-scrollbar-v",
        offset: "top",
        size: "height",
        page: "pageY",
        axis: "y",
        mouseOffset: "mouseOffsetY"
    }
});

module.exports = ScrollBarV;

/***/ }),

/***/ "./src/grid-view/ui/scroll-bar/scroll-bar.html":
/*!*****************************************************!*\
  !*** ./src/grid-view/ui/scroll-bar/scroll-bar.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"tg-scrollbar\">\r\n    <div class=\"tg-scrollbar-track\"></div>\r\n    <div class=\"tg-scrollbar-thumb\"></div>\r\n</div>";

/***/ }),

/***/ "./src/grid-view/ui/scroll-bar/scroll-bar.js":
/*!***************************************************!*\
  !*** ./src/grid-view/ui/scroll-bar/scroll-bar.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../../../core/query.js */ "./src/core/query.js");
var Util = __webpack_require__(/*! ../../../core/util.js */ "./src/core/util.js");

var OptionBase = __webpack_require__(/*! ../../../core/option-base.js */ "./src/core/option-base.js");

var Drag = __webpack_require__(/*! ../../../core/drag.js */ "./src/core/drag.js");

var Motion = __webpack_require__(/*! ../../../core/motion.js */ "./src/core/motion.js");

var template = __webpack_require__(/*! ./scroll-bar.html */ "./src/grid-view/ui/scroll-bar/scroll-bar.html");

var ScrollBar = OptionBase.extend({
    //v, h
    //mode: "",
    //type: {},

    //final value from option
    size: 0,
    viewSize: 0,
    bodySize: 0,

    //scroll position
    position: 0,

    //thumb scale: thumb size / track size
    scale: 0,

    thumbPosition: 0,
    thumbScale: 0,

    constructor: function(holder) {
        this.uid = "scrollbar_" + Util.token(4);
        this.option = this.defaultOption();
        this.holder = $(holder);
        //some clean
        this.holder.find("." + this.type.className).remove();
    },

    defaultOption: function() {
        return {
            //width or height for scrollbar
            //0 means invisible
            size: 15,

            //for invisible but takes up space 
            //false: without blank (default)
            //true: with blank, without scroll view extension
            //1: with blank, with scroll view extension
            blank: false,

            //TODO disable event and hover
            //disabled: false,

            //motion
            motionDelay: 200,
            motionDuration: 200

        };
    },

    //========================================================================

    create: function() {

        this.container = $(template).appendTo(this.holder);
        this.container.addClass("tg-scrollbar " + this.type.className);

        this.track = this.container.find(".tg-scrollbar-track");
        this.thumb = this.container.find(".tg-scrollbar-thumb");

        var self = this;

        //track hold/click events
        this.track.bind("selectstart", function(e) {
            return false;
        }).bind("mousedown", function(e) {
            self.trigger("onFocus", e);
            self.trackMousedownHandler(e);
            $(window).one("mouseup", function(e) {
                self.trackMouseupHandler(e);
            });
            return false;
        });

        //thumb drag events
        this.thumbDrag = new Drag();
        this.thumbDrag.bind("drag_start", function(e, d) {
            self.thumbDragStart(d);
        }).bind("drag_update", function(e, d) {
            self.thumbDragUpdate(d);
        }).bind("drag_complete", function(e, d) {
            self.thumbDragComplete(d);
        });

        this.thumb.bind("selectstart", function(e) {
            return false;
        }).bind("mousedown", function(e) {
            self.trigger("onFocus", e);
            self.thumbDragInit(e);
        });

        return this;
    },

    //========================================================================
    //API

    getBlank: function() {
        return this.option.blank;
    },

    getSize: function() {
        return this.size;
    },

    getViewSize: function() {
        return this.viewSize;
    },

    getBodySize: function() {
        return this.bodySize;
    },

    //========================================================================

    getTrackMouseDirection: function() {
        var direction = 1;
        if (this.trackMousePosition < this.thumbPosition) {
            direction = -1;
        }
        return direction;
    },

    getTrackMousePos: function(e) {
        var offset = this.track.offset();
        var mousePos = e[this.type.page] - offset[this.type.offset];
        return mousePos;
    },

    //========================================================================

    getMaxThumbPosition: function() {
        var maxThumbPosition = this.viewSize - this.thumbSize;
        return maxThumbPosition;
    },

    setThumbPosition: function(thumbPosition) {
        if (thumbPosition === this.thumbPosition) {
            return this;
        }
        this.thumbPosition = thumbPosition;
        if (this.thumb) {
            this.thumb.css(this.type.offset, thumbPosition);
        }
        return this;
    },

    //update thumb pos
    updateThumbPosition: function() {
        var thumbPosition = 0;
        var maxPosition = this.getMaxPosition();
        if (maxPosition > 0) {
            var maxThumbPosition = this.getMaxThumbPosition();
            thumbPosition = Math.round(maxThumbPosition * this.position / maxPosition);
            thumbPosition = Util.clamp(thumbPosition, 0, maxThumbPosition);
        }
        this.setThumbPosition(thumbPosition);
        return this;
    },

    //=====================================================================
    //track

    trackMousedownHandler: function(e) {
        this.motionStop();
        this.trackMousePosition = this.getTrackMousePos(e);
        this.motionStart();
        return this;
    },

    trackMouseupHandler: function(e) {
        this.motionStop();
        if (this.motionStarted) {
            return this;
        }
        this.trackMousePosition = this.getTrackMousePos(e);
        //track click scroll
        this.trackScrollHandler();
        this.triggerEvent();
        return this;
    },

    trackScrollHandler: function() {
        var viewSize = Math.max(0, this.viewSize - 20);
        //thumb current postion
        var direction = this.getTrackMouseDirection();
        var offset = viewSize * direction;
        this.setOffset(offset);
        return this;
    },

    //===================================================================
    //motion

    motionStop: function() {
        if (this.motion) {
            this.motion.stop();
            this.motion = null;
        }
        return this;
    },

    motionStart: function() {
        var from = this.position;
        var till = Math.round(this.trackMousePosition / this.viewSize * this.getMaxPosition());
        this.motionStarted = false;
        var self = this;
        this.motion = new Motion();
        this.motion.bind("motion_start", function(e, d) {
            self.motionStarted = true;
        });
        this.motion.bind("motion_update", function(e, d) {
            self.motionUpdateHandler(e, d);
        });
        this.motion.start({
            delay: this.option.motionDelay,
            duration: this.option.motionDuration,
            from: from,
            till: till
        });
        return this;
    },

    motionUpdateHandler: function(e, pos) {
        //update position, change thumb, trigger event
        if (pos === this.position) {
            return;
        }
        this.setPosition(pos);
        this.triggerEvent();
    },

    //=====================================================================
    //thumb drag

    thumbDragInit: function(e) {
        this.thumb.addClass("tg-scrollbar-thumb-hold");
        this.thumbDrag.start({
            e: e,
            target: this.thumb
        });
    },

    thumbDragStart: function(d) {
        this.motionStop();
        d.thumbPositionStart = this.thumbPosition;
    },

    thumbDragUpdate: function(d) {

        //change thumb position
        var thumbPosition = d.thumbPositionStart + d[this.type.mouseOffset];
        var maxThumbPosition = this.getMaxThumbPosition();
        thumbPosition = Util.clamp(thumbPosition, 0, maxThumbPosition);
        this.setThumbPosition(thumbPosition);

        //new position
        var newPosition = 0;
        if (maxThumbPosition > 0) {
            newPosition = Util.per(thumbPosition / maxThumbPosition) * this.getMaxPosition();
            newPosition = Math.round(newPosition);
        }
        this.position = newPosition;
        //update position and event change
        this.triggerEvent();
    },

    thumbDragComplete: function(d) {
        //no matter if d.valid always remove, because added on init not start
        if (this.thumb) {
            this.thumb.removeClass("tg-scrollbar-thumb-hold");
        }
    },

    //===================================================================

    //from inside change trigger
    triggerEvent: function() {
        this.trigger("onChange", this.position);
    },

    //===================================================================
    //px position

    getPosition: function() {
        return this.position;
    },

    setPosition: function(position) {
        position = Util.tonum(position, true);
        var maxPosition = this.getMaxPosition();
        position = Util.clamp(position, 0, maxPosition);
        //console.log(this.position, position);
        this.position = position;
        this.updateThumbPosition();
    },

    getMaxPosition: function() {
        var maxPosition = this.bodySize - this.viewSize;
        return maxPosition;
    },

    updatePosition: function() {
        var maxPosition = this.getMaxPosition();
        var position = Util.clamp(this.position, 0, maxPosition);
        this.position = position;
    },

    //offset position +/-
    setOffset: function(offset) {
        offset = Util.tonum(offset);
        var position = this.position + offset;
        this.setPosition(position);
        return this;
    },

    //===================================================================
    //scale for thumb

    getScale: function() {
        return this.scale;
    },

    setScale: function(scale) {
        scale = Util.per(scale);
        this.scale = scale;
        this.scaleChangeHandler();
        return this;
    },

    scaleChangeHandler: function() {
        var thumbSize = Math.round(this.viewSize * this.scale);
        thumbSize = Math.max(thumbSize, this.option.size);
        thumbSize = Math.min(thumbSize, this.viewSize);
        this.thumbSize = thumbSize;
        if (this.thumb) {
            var thumbData = {};
            if (this.mode === "h") {
                thumbData.height = this.size;
                thumbData.width = this.thumbSize;
            } else {
                thumbData.width = this.size;
                thumbData.height = this.thumbSize;
            }
            this.thumb.css(thumbData);
        }
    },

    //===================================================================

    //container and track size
    updateTrackSize: function() {
        var trackData = {};
        if (this.mode === "h") {
            trackData.width = this.viewSize;
            trackData.height = this.size;
        } else {
            trackData.height = this.viewSize;
            trackData.width = this.size;
        }
        this.container.css(trackData);
        return this;
    },

    //thumb size
    updateThumbSize: function() {
        var scale = 0;
        if (this.bodySize) {
            scale = this.viewSize / this.bodySize;
        }
        this.setScale(scale);
        return this;
    },

    //===================================================================

    //do twice: calculate size and show size
    updateOption: function(option) {

        this.setOption(option);

        //init size
        var size = this.option.size;
        if (!Util.isnum(size)) {
            size = Util.tonum(size);
        }
        size = Math.round(size);
        //range 0 - 30
        size = Math.max(size, 0);
        size = Math.min(size, 30);
        this.size = size;

        return;
    },

    //for view size and body size
    updateSize: function(viewSize, bodySize) {
        //init viewSize and bodySize
        if (!Util.isnum(viewSize)) {
            viewSize = Util.tonum(viewSize);
        }
        viewSize = Math.round(viewSize);
        viewSize = Math.max(viewSize, 0);
        this.viewSize = viewSize;

        if (!Util.isnum(bodySize)) {
            bodySize = Util.tonum(bodySize);
        }
        bodySize = Math.round(bodySize);
        bodySize = Math.max(bodySize, 0);
        this.bodySize = bodySize;
    },

    show: function() {
        this.updatePosition();
        if (this.getBlank()) {
            this.remove();
            return;
        }

        if (!this.container && this.size > 0) {
            this.create();
        }

        if (!this.container) {
            return this;
        }
        this.updateTrackSize();
        this.updateThumbSize();

        return this;
    },


    hide: function() {
        this.updatePosition();
        this.remove();
        return this;
    },

    remove: function() {
        this.motionStop();
        if (!this.container) {
            return this;
        }
        this.thumb.unbind();
        this.thumb = null;
        this.track.unbind();
        this.track = null;
        this.container.unbind();
        this.container.remove();
        this.container = null;
    },

    //===================================================================

    destroy: function() {
        this.remove();
        this.unbind();
        return this;
    },

    //===================================================================

    toString: function() {
        return "[object ScrollBar]";
    }
});


module.exports = ScrollBar;

/***/ }),

/***/ "./src/grid-view/ui/scroll-pane/scroll-pane.js":
/*!*****************************************************!*\
  !*** ./src/grid-view/ui/scroll-pane/scroll-pane.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../../../core/query.js */ "./src/core/query.js");
var Util = __webpack_require__(/*! ../../../core/util.js */ "./src/core/util.js");

var OptionBase = __webpack_require__(/*! ../../../core/option-base.js */ "./src/core/option-base.js");

var ScrollBarV = __webpack_require__(/*! ../scroll-bar/scroll-bar-v.js */ "./src/grid-view/ui/scroll-bar/scroll-bar-v.js");
var ScrollBarH = __webpack_require__(/*! ../scroll-bar/scroll-bar-h.js */ "./src/grid-view/ui/scroll-bar/scroll-bar-h.js");

var ScrollPane = OptionBase.extend({

    visible: true,

    defaultOption: function() {
        return {
            scrollBarH: {
                //size: 10
            },
            scrollBarV: {
                //size: 10
            },
            scrollSizeOnKeyPress: 20
        };
    },

    constructor: function(container, name) {
        this.uid = "scrollpane_" + name + "_" + Util.token(4);
        this.option = this.defaultOption();
        this.container = $(container);
        this.init();
    },

    initContainer: function() {
        this.container.addClass("tg-scrollpane");
        this.scrollpane = this.container;

        var $scrollview = this.scrollpane.find(".tg-scrollview");
        if (!$scrollview.length) {
            $scrollview = $("<div></div>").addClass("tg-scrollview").appendTo(this.scrollpane);
        }
        this.scrollview = $scrollview.get(0);

        var $scrollbody = $scrollview.find(".tg-scrollbody");
        if (!$scrollbody.length) {
            $scrollbody = $("<div></div>").addClass("tg-scrollbody").appendTo($scrollview);
        }
        this.scrollbody = $scrollbody.get(0);
    },

    init: function() {

        this.initContainer();

        var self = this;

        //h scrollbar bottom
        this.scrollBarH = new ScrollBarH(this.container);
        this.scrollBarH.bind("onFocus", function(e, d) {
            self.scrollbarFocusHandler(e, d);
        }).bind("onChange", function(e, d) {
            //console.log(self.uid, this.uid, d);
            self.scrollHChangeHandler();
        });

        //v scrollbar right
        this.scrollBarV = new ScrollBarV(this.container);
        this.scrollBarV.bind("onFocus", function(e, d) {
            self.scrollbarFocusHandler(e, d);
        }).bind("onChange", function(e, d) {
            //console.log(self.uid, this.uid, d);
            self.scrollVChangeHandler();
        });

        return this;
    },

    //==========================================================================

    show: function() {
        this.container.show();
        this.visible = true;
        return this;
    },

    hide: function() {
        this.container.hide();
        this.visible = false;
        return this;
    },

    //==========================================================================

    width: function() {
        return this.scrollpaneW;
    },

    height: function() {
        return this.scrollpaneH;
    },

    //==========================================================================

    setFocus: function() {
        this.scrollpane.focus();
        return this;
    },

    scrollbarFocusHandler: function(e, d) {
        this.setFocus();
    },

    //==========================================================================

    render: function(option) {
        if (!this.visible) {
            return this;
        }

        if (option) {
            this.setOption(option);
        }

        this.update();

        return this;
    },

    update: function() {
        this.scrollpaneW = this.option.scrollpaneW;
        this.scrollpaneH = this.option.scrollpaneH;
        this.scrollbodyW = this.option.scrollbodyW;
        this.scrollbodyH = this.option.scrollbodyH;

        //console.log(this.uid);
        this.updateScrollBar();
    },

    //==========================================================================
    //set sync group list

    setGroupH: function(scrollpaneList) {
        this.groupH = Util.tolist(scrollpaneList);
    },

    setGroupV: function(scrollpaneList) {
        this.groupV = Util.tolist(scrollpaneList);
    },

    //==========================================================================
    //sync to list

    updateGroupH: function() {
        if (!Util.islist(this.groupH)) {
            return this;
        }
        var positionH = this.scrollBarH.getPosition();
        this.groupH.forEach(function(scrollpane) {
            if (!scrollpane) {
                return;
            }
            scrollpane.updateScrollHFromGroup(positionH);
        });
        return this;
    },

    updateGroupV: function() {
        if (!Util.islist(this.groupV)) {
            return this;
        }
        var positionV = this.scrollBarV.getPosition();
        this.groupV.forEach(function(scrollpane) {
            if (!scrollpane) {
                return;
            }
            scrollpane.updateScrollVFromGroup(positionV);
        });
        return this;
    },

    updateGroupList: function() {
        this.updateGroupH();
        this.updateGroupV();
    },

    //==========================================================================
    //sync from group scrollpane

    updateScrollHFromGroup: function(positionH) {
        var posH = this.scrollBarH.getPosition();
        if (posH === positionH) {
            return;
        }
        this.scrollBarH.setPosition(positionH);
        this.updateScrollLeft();
        this.triggerEvent();
    },

    updateScrollVFromGroup: function(positionV) {
        var posV = this.scrollBarV.getPosition();
        if (posV === positionV) {
            return;
        }
        this.scrollBarV.setPosition(positionV);
        this.updateScrollTop();
        this.triggerEvent();
    },

    //==========================================================================

    //set position from outside 
    setPosition: function(scrollLeft, scrollTop) {
        this.scrollBarH.setPosition(scrollLeft);
        this.scrollBarV.setPosition(scrollTop);

        this.updateScrollLeft();
        this.updateScrollTop();

        this.updateGroupList();

        return this;
    },

    //==========================================================================

    updateScrollBar: function() {

        //set option for calculation
        this.scrollBarH.updateOption(this.option.scrollBarH);
        this.scrollBarV.updateOption(this.option.scrollBarV);

        //start to calculate status and size
        this.updateStatus();

        //update new size
        this.scrollBarH.updateSize(this.scrollviewW, this.scrollbodyW);
        this.scrollBarV.updateSize(this.scrollviewH, this.scrollbodyH);

        //update visible and set with last position
        if (this.scrollVisibleH) {
            this.scrollBarH.show();
            this.scrollBarH.setPosition(this.scrollBarH.getPosition());
        } else {
            this.scrollBarH.hide();
        }
        if (this.scrollVisibleV) {
            this.scrollBarV.show();
            this.scrollBarV.setPosition(this.scrollBarV.getPosition());
        } else {
            this.scrollBarV.hide();
        }

        this.updateScrollLeft();
        this.updateScrollTop();

        //console.log("updateScrollBar", this.uid);

        this.updateGroupList();

    },

    updateStatus: function() {

        var scrollbarSizeH = this.scrollBarH.getSize();
        var scrollbarSizeV = this.scrollBarV.getSize();

        var blankH = this.scrollBarH.getBlank();
        var blankV = this.scrollBarV.getBlank();

        //========================================
        //scrollH fixing
        var scrollVisibleH = false;
        var scrollSizeH = 0;
        var scrollHStatusHandler = function() {
            if (this.scrollpaneW < this.scrollbodyW || blankH) {
                scrollVisibleH = true;
                scrollSizeH = scrollbarSizeH;
            }
        };
        scrollHStatusHandler.call(this);

        //========================================
        //scrollV fixing
        var scrollVisibleV = false;
        var scrollSizeV = 0;
        var scrollVStatusHandler = function() {
            if (this.scrollpaneH < this.scrollbodyH + scrollSizeH || blankV) {
                scrollVisibleV = true;
                scrollSizeV = scrollbarSizeV;
                //scrollH fixing again for scrollSizeV change
                if (!scrollVisibleH) {
                    if (this.scrollpaneW < this.scrollbodyW + scrollSizeV) {
                        scrollVisibleH = true;
                        scrollSizeH = scrollbarSizeH;
                    }
                }
            }
        };
        scrollVStatusHandler.call(this);

        //========================================
        this.scrollVisibleH = scrollVisibleH;
        this.scrollVisibleV = scrollVisibleV;

        this.scrollSizeH = scrollSizeH;
        this.scrollSizeV = scrollSizeV;

        this.updateScrollView(blankH, blankV);

        return this;
    },
    /* eslint-disable complexity*/
    updateScrollView: function(blankH, blankV) {
        this.scrollviewW = this.scrollpaneW;
        if (this.scrollVisibleV) {
            this.scrollviewW = this.scrollpaneW - this.scrollSizeV;
        }
        this.scrollviewH = this.scrollpaneH;
        if (this.scrollVisibleH) {
            this.scrollviewH = this.scrollpaneH - this.scrollSizeH;
        }

        //blank type fixing
        var width = this.scrollviewW;
        if (blankV && blankV !== true) {
            width = this.scrollpaneW;
        }

        var height = this.scrollviewH;
        if (blankH && blankH !== true) {
            height = this.scrollpaneH;
        }

        this.scrollview.style.width = width + "px";
        this.scrollview.style.height = height + "px";
        return this;
    },
    /* eslint-enable*/
    //==========================================================================
    updateScrollLeft: function() {
        var scrollLeft = this.getScrollLeft();
        this.scrollbody.style.left = -scrollLeft + "px";
        return this;
    },

    updateScrollTop: function() {
        var scrollTop = this.getScrollTop();

        var scrollTopOffset = this.getScrollTopOffset();
        var top = scrollTop - scrollTopOffset;

        this.scrollbody.style.top = -top + "px";
        return this;
    },

    getScrollLeft: function() {
        var scrollLeft = this.scrollBarH.getPosition();
        return scrollLeft;
    },

    getScrollTop: function() {
        var scrollTop = this.scrollBarV.getPosition();
        return scrollTop;
    },

    // max height fixing for IE
    getScrollTopOffset: function() {
        var scrollTop = this.getScrollTop();

        //max size, bigger than 8K screen
        var top = scrollTop % 10000;
        var scrollTopOffset = scrollTop - top;

        return scrollTopOffset;
    },

    triggerEvent: function() {
        this.trigger("onChange", {
            scrollLeft: this.getScrollLeft(),
            scrollTop: this.getScrollTop(),
            scrollTopOffset: this.getScrollTopOffset()
        });
    },

    //==========================================================================

    scrollHChangeHandler: function() {
        this.updateScrollLeft();
        this.updateGroupList();
        this.triggerEvent();
    },

    scrollVChangeHandler: function() {
        this.updateScrollTop();
        this.updateGroupList();
        this.triggerEvent();
    },

    //==========================================================================
    //set offset from mouse wheel, key up/down/left/right, pageup/pagedown/home/end
    setOffsetH: function(offset) {
        var scrollLeft = this.getScrollLeft();
        this.scrollBarH.setOffset(offset);
        var newScrollLeft = this.getScrollLeft();
        if (newScrollLeft === scrollLeft) {
            return false;
        }
        this.updateScrollLeft();
        this.updateGroupList();
        this.triggerEvent();
        return true;
    },

    setOffsetV: function(offset) {
        var scrollTop = this.getScrollTop();
        this.scrollBarV.setOffset(offset);
        var newScrollTop = this.getScrollTop();
        if (newScrollTop === scrollTop) {
            return false;
        }
        this.updateScrollTop();
        this.updateGroupList();
        this.triggerEvent();
        return true;
    },

    //==========================================================================

    mouseWheelHandler: function(e) {

        if (!e) {
            return false;
        }

        var deltaX = e.deltaX;
        var deltaY = e.deltaY;

        var dx = Math.abs(deltaX);
        var dy = Math.abs(deltaY);

        //only choose one direction
        if (dx > dy) {
            if (this.scrollVisibleH) {
                return this.setOffsetH(deltaX);
            }
        } else {
            if (this.scrollVisibleV) {
                return this.setOffsetV(deltaY);
            }
        }

        return false;
    },

    //==========================================================================

    keyPageUpHandler: function(e) {
        return this.setOffsetV(-this.scrollviewH);
    },

    keyPageDownHandler: function(e) {
        return this.setOffsetV(this.scrollviewH);
    },

    keyEndHandler: function(e) {
        return this.setOffsetV(this.scrollbodyH);
    },

    keyHomeHandler: function(e) {
        return this.setOffsetV(-this.scrollbodyH);
    },

    //==========================================================================

    keyLeftHandler: function(e) {
        return this.setOffsetH(-this.option.scrollSizeOnKeyPress);
    },

    keyUpHandler: function(e) {
        return this.setOffsetV(-this.option.scrollSizeOnKeyPress);
    },

    keyRightHandler: function(e) {
        return this.setOffsetH(this.option.scrollSizeOnKeyPress);
    },

    keyDownHandler: function(e) {
        return this.setOffsetV(this.option.scrollSizeOnKeyPress);
    },

    //==========================================================================

    destroy: function() {
        this.groupH = null;
        this.groupV = null;
        this.unbind();
        this.scrollBarV.destroy();
        this.scrollBarV = null;
        this.scrollBarH.destroy();
        this.scrollBarH = null;
        this.scrollpane.unbind();
        this.scrollpane = null;
        this.scrollview = null;
        this.scrollbody = null;
        this.container = null;
        return this;
    },

    //==========================================================================

    toString: function() {
        return "[object ScrollPane]";
    }
});

module.exports = ScrollPane;

/***/ }),

/***/ "./src/grid-view/view/view-base.js":
/*!*****************************************!*\
  !*** ./src/grid-view/view/view-base.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var EventBase = __webpack_require__(/*! ../../core/event-base.js */ "./src/core/event-base.js");

var ViewCells = __webpack_require__(/*! ./view-cells.js */ "./src/grid-view/view/view-cells.js");
var ViewColumnLine = __webpack_require__(/*! ./view-column-line.js */ "./src/grid-view/view/view-column-line.js");
var ViewColumns = __webpack_require__(/*! ./view-columns.js */ "./src/grid-view/view/view-columns.js");

var ViewCss = __webpack_require__(/*! ./view-css.js */ "./src/grid-view/view/view-css.js");
var ViewEditor = __webpack_require__(/*! ./view-editor.js */ "./src/grid-view/view/view-editor.js");
var ViewEvents = __webpack_require__(/*! ./view-events.js */ "./src/grid-view/view/view-events.js");

var ViewHeaderTable = __webpack_require__(/*! ./view-header-table.js */ "./src/grid-view/view/view-header-table.js");
var ViewHeaders = __webpack_require__(/*! ./view-headers.js */ "./src/grid-view/view/view-headers.js");

var ViewInvalidate = __webpack_require__(/*! ./view-invalidate.js */ "./src/grid-view/view/view-invalidate.js");
var ViewNavigate = __webpack_require__(/*! ./view-navigate.js */ "./src/grid-view/view/view-navigate.js");
var ViewNode = __webpack_require__(/*! ./view-node.js */ "./src/grid-view/view/view-node.js");
var ViewResize = __webpack_require__(/*! ./view-resize.js */ "./src/grid-view/view/view-resize.js");

var ViewRowCache = __webpack_require__(/*! ./view-row-cache.js */ "./src/grid-view/view/view-row-cache.js");
var ViewRows = __webpack_require__(/*! ./view-rows.js */ "./src/grid-view/view/view-rows.js");

var ViewScroll = __webpack_require__(/*! ./view-scroll.js */ "./src/grid-view/view/view-scroll.js");
var ViewScrollpaneStatus = __webpack_require__(/*! ./view-scrollpane-status.js */ "./src/grid-view/view/view-scrollpane-status.js");
var ViewScrollpane = __webpack_require__(/*! ./view-scrollpane.js */ "./src/grid-view/view/view-scrollpane.js");

var ViewVisibleRange = __webpack_require__(/*! ./view-visible-range.js */ "./src/grid-view/view/view-visible-range.js");

var ViewBase = EventBase.mixin(

    ViewCells,

    ViewColumnLine,
    ViewColumns,

    ViewCss,
    ViewEditor,
    ViewEvents,

    ViewHeaderTable,
    ViewHeaders,

    ViewInvalidate,
    ViewNavigate,
    ViewNode,
    ViewResize,

    ViewRowCache,
    ViewRows,

    ViewScroll,
    ViewScrollpaneStatus,
    ViewScrollpane,

    ViewVisibleRange
);

module.exports = ViewBase;

/***/ }),

/***/ "./src/grid-view/view/view-cells.js":
/*!******************************************!*\
  !*** ./src/grid-view/view/view-cells.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../../core/query.js */ "./src/core/query.js");
var E = __webpack_require__(/*! ../../core/event-type.js */ "./src/core/event-type.js");
var Util = __webpack_require__(/*! ../../core/util.js */ "./src/core/util.js");

var Cells = {

    renderCells: function(rowList, columnList) {
        //var t1 = new Date();

        var self = this;
        rowList.forEach(function(rowIndex) {
            self.drawRowCells(rowIndex, columnList);
        });

        //console.log(new Date() - t1);
    },

    getPreRenderColumnList: function(rowIndex, columnList) {
        var list = [];
        if (!columnList.length) {
            return list;
        }
        for (var i = 0, l = columnList.length; i < l; i++) {
            var columnIndex = columnList[i];
            var cellNode = this.getCellNode(rowIndex, columnIndex);
            if (!cellNode) {
                list.push(columnIndex);
            }
        }
        return list;
    },

    isFrozenColumm: function(columnIndex) {
        if (this.hasFrozenColumns && columnIndex <= this.option.frozenColumn) {
            return true;
        }
        return false;
    },

    drawRowCells: function(rowIndex, columnList) {
        var columns = this.getPreRenderColumnList(rowIndex, columnList);
        if (!columns.length) {
            return;
        }
        var self = this;
        columns.forEach(function(columnIndex) {
            self.drawCell(rowIndex, columnIndex);
        });
    },

    getColumnItem: function(columnIndex) {
        var columnData = this.allColumns[columnIndex];
        return columnData;
    },
    /* eslint-disable complexity*/
    getCellClass: function(rowData, columnData) {
        var rowIndex = rowData.tg_index;
        var columnIndex = columnData.tg_index;

        var cellCss = ["tg-cell"];

        cellCss.push("tg-c-" + columnIndex);

        //level class
        cellCss.push("tg-level-" + columnData.tg_level);

        if (columnData.align) {
            cellCss.push("tg-align-" + columnData.align);
        }

        if (columnData.cellClass) {
            cellCss.push(columnData.cellClass);
        }

        /* jshint ignore:start */
        //list index first
        if (columnData.tg_list_index === 0) {
            cellCss.push("tg-list-first");
        } else if (columnData.tg_list_index === columnData.tg_list_length - 1) {
            cellCss.push("tg-list-last");
        }
        /* jshint ignore:end */

        if (rowIndex === this.activeRow && columnIndex === this.activeColumn) {
            cellCss.push("tg-active");
        }

        var cellClass = cellCss.join(" ");
        return cellClass;
    },
    /* eslint-enable*/
    createCellNode: function(rowData, columnData) {
        var cellClass = this.getCellClass(rowData, columnData);
        var cellNode = document.createElement("div");
        cellNode.className = cellClass;
        cellNode.setAttribute("index", columnData.tg_index);
        return cellNode;
    },

    drawCell: function(rowIndex, columnIndex) {

        var rowCache = this.getRowCache(rowIndex);
        if (!rowCache || !rowCache.rowNodes) {
            return;
        }

        var rowData = this.getRowItem(rowIndex);
        var columnData = this.getColumnItem(columnIndex);
        if (!rowData || !columnData) {
            return;
        }



        var cellNode = this.createCellNode(rowData, columnData);
        this.appendCellNode(rowCache, columnIndex, cellNode);

        this.cellContentHandler(rowData, columnData, cellNode);

    },

    appendCellNode: function(rowCache, columnIndex, cellNode) {
        var rowNodes = rowCache.rowNodes;
        if (!this.hasFrozenColumns || this.isFrozenColumm(columnIndex)) {
            this.appendNode(rowNodes[0], cellNode);
        } else {
            this.appendNode(rowNodes[1], cellNode);
        }
        //cache
        rowCache.cellNodes[columnIndex] = cellNode;
    },
    /* eslint-disable complexity*/

    cellContentHandler: function(rowData, columnData, cellNode) {

        //blank row
        if (rowData.rowType === "blank") {
            return;
        }

        this.cellStyleHandler(rowData, columnData, cellNode);

        var value = this.getCellValue(rowData, columnData);
        var rowIndex = rowData.tg_index;
        var columnIndex = columnData.tg_index;

        //add content
        if (typeof(columnData.tg_formatter) === "function") {

            var content = columnData.tg_formatter(value, rowData, columnData, rowIndex, columnIndex, cellNode);

            this.drawCellContent(cellNode, content);

            this.trigger(E.onCellRendered, {
                value: value,
                row: rowIndex,
                column: columnIndex,
                rowItem: rowData,
                columnItem: columnData,
                node: cellNode
            });

        }

        //add title
        if (columnData.titleable && typeof(columnData.tg_titleFormatter) === "function") {
            var title = columnData.tg_titleFormatter(value, rowData, columnData, rowIndex, columnIndex, cellNode);
            if (title) {
                cellNode.setAttribute("title", title);
            }
        }

    },
    /* eslint-enable*/
    //Conditional Formatting
    cellStyleHandler: function(rowData, columnData, cellNode) {
        var conditionalStyleList = this.option.conditionalStyleList;
        if (!Util.islist(conditionalStyleList)) {
            return;
        }
        var id = columnData.id;
        var cellStyle = cellNode.style;
        conditionalStyleList.forEach(function(item) {
            var key = id + "_" + item;
            if (rowData.hasOwnProperty(key)) {
                cellStyle[item] = rowData[key];
            }
        });

        //backgroundColor for hover blend 
        this.rowHoverCellInitHandler(rowData, columnData, cellStyle);

    },

    drawCellContent: function(cellNode, content) {
        //high performance code
        if (typeof(content) === "string") {
            cellNode.innerHTML = content;
        } else {
            //empty first, and append for dom content
            cellNode.innerHTML = "";
            $(cellNode).append(content);
        }
    },

    //=============================================================================================

    rowHoverCellInitHandler: function(rowData, columnData, cellStyle) {
        var keyColor = "tg_" + columnData.id + "_backgroundColor";
        var keyHover = keyColor + "_hover";
        var backgroundColor = cellStyle.backgroundColor;
        if (backgroundColor) {
            rowData[keyColor] = backgroundColor;
            var backgroundColorHover = this.getBlendColor(backgroundColor);
            //console.log(backgroundColorHover);
            rowData[keyHover] = backgroundColorHover;
        } else if (rowData[keyColor]) {
            delete rowData[keyColor];
            delete rowData[keyHover];
        }

    },

    getBlendColor: function(rgb) {
        //current back color #eaeaea after blend #ffffff
        //parseInt("ea", 16) = 234
        //255 - 234 = 21;
        var rgbBack = 21;

        //234 / 255 = 0.9176470588235294
        var opacity = 0.92;

        //rgb(224, 156, 175)
        var list = rgb.match(/\d+/g);
        if (!list || list.length < 3) {
            list = [255, 255, 255];
        }

        var mergeColor = function(c, b, a) {
            var v = c * a + b * (1 - a);
            return Math.round(v);
        };

        list[0] = mergeColor(list[0], rgbBack, opacity);
        list[1] = mergeColor(list[1], rgbBack, opacity);
        list[2] = mergeColor(list[2], rgbBack, opacity);

        var newRGB = "rgb(" + list.join(", ") + ")";

        return newRGB;
    },

    rowHoverCellHandler: function(rowIndex, hover) {
        var rowItem = this.getRowItem(rowIndex);
        if (!rowItem) {
            return this;
        }
        var self = this;
        var columnList = this.visibleRange.columnList;
        columnList.forEach(function(columnIndex) {
            var columnItem = self.getColumnItem(columnIndex);
            var keyColor = "tg_" + columnItem.id + "_backgroundColor";
            var keyHover = keyColor + "_hover";
            if (hover) {
                self.setCellBackgroundColor(rowIndex, columnIndex, rowItem[keyHover]);
            } else {
                self.setCellBackgroundColor(rowIndex, columnIndex, rowItem[keyColor]);
            }
        });
        return this;
    },

    setCellBackgroundColor: function(rowIndex, columnIndex, backgroundColor) {
        if (!backgroundColor) {
            return this;
        }
        var cellNode = this.getCellNode(rowIndex, columnIndex);
        if (cellNode) {
            cellNode.style.backgroundColor = backgroundColor;
        }
        return this;
    },

    //=============================================================================================

    getPositionByNode: function(node) {
        var $cell = $(node).closest(".tg-cell", this.$canvas);
        if (!$cell.length) {
            return null;
        }
        var column = this.getNodeIndex($cell);

        var $row = $cell.closest(".tg-row", this.$canvas);
        if (!$row.length) {
            return null;
        }
        var row = this.getNodeIndex($row);

        var position = {
            row: row,
            column: column,
            rowNode: $row,
            cellNode: $cell
        };
        return position;
    },

    getPositionByEvent: function(e) {
        if (!e) {
            return null;
        }
        var position = this.getPositionByNode(e.target);
        if (position) {
            position.e = e;
        }
        return position;
    },

    //=============================================================================================
    // Cell switching

    getActiveCell: function() {
        if (!this.activeNode) {
            return null;
        }

        var active = {
            row: this.activeRow,
            column: this.activeColumn
        };

        return active;
    },

    resetActiveCell: function() {
        this.setActiveCellNode(null);
    },

    setActiveCell: function(rowIndex, columnIndex, forceEdit) {

        var rowItem = this.getRowItem(rowIndex);
        var columnItem = this.getColumnItem(columnIndex);
        if (!rowItem || !columnItem) {
            return;
        }

        this.scrollItemIntoView(rowItem, columnItem);

        var cellNode = this.getCellNode(rowIndex, columnIndex);
        this.setActiveCellNode(cellNode, forceEdit);

        var activeCell = this.getActiveCell();
        this.trigger(E.onActiveCellChanged, activeCell);

    },

    //=============================================================================================

    setActiveCellNode: function(newActiveNode, forceEdit) {

        //prev active node handler 
        this.previousActiveCellNodeHandler();

        //remove active
        if (!newActiveNode) {
            this.activeNode = null;
            this.activeRow = null;
            this.activeColumn = null;
            return;
        }

        //change active
        this.activeNode = newActiveNode;

        //current active cell node handler
        this.currentActiveCellNodeHandler();

        //edit mode handler
        this.editActiveCellNodeHandler(forceEdit);

    },

    previousActiveCellNodeHandler: function() {
        if (!this.activeNode) {
            return;
        }
        //remove edit
        this.removeCellEditor();
        //remove className active
        $(this.activeNode).removeClass("tg-active");
        var rowCache = this.getRowCache(this.activeRow);
        if (rowCache) {
            $(rowCache.rowNodes).removeClass("tg-active");
        }
    },

    currentActiveCellNodeHandler: function() {
        if (!this.activeNode) {
            return;
        }

        var position = this.getPositionByNode(this.activeNode);

        this.activeRow = position.row;
        this.activeColumn = position.column;

        this.activePosX = position.column;

        //add className
        $(this.activeNode).addClass("tg-active");
        var rowCache = this.getRowCache(this.activeRow);
        if (rowCache) {
            $(rowCache.rowNodes).addClass('tg-active');
        }
    },

    //=============================================================================================

    findFirstFocusableCell: function(row) {
        var columns = this.columns;
        var column = 0;
        while (column < columns.length) {
            if (this.isCellEditable(row, column)) {
                return column;
            }
            column += 1;
        }
        return null;
    },

    findLastFocusableCell: function(row) {
        var columns = this.columns;
        var column = 0;
        var lastFocusableCell = null;
        while (column < columns.length) {
            if (this.isCellEditable(row, column)) {
                lastFocusableCell = column;
            }
            column += 1;
        }
        return lastFocusableCell;
    }

};

module.exports = Cells;

/***/ }),

/***/ "./src/grid-view/view/view-column-line.js":
/*!************************************************!*\
  !*** ./src/grid-view/view/view-column-line.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//var E = require("../../core/event-type.js");
var Util = __webpack_require__(/*! ../../core/util.js */ "./src/core/util.js");

var ColumnLine = {

    setResizingColumn: function(column) {
        if (!column || !this.isColumnResizable(column)) {
            this.hideColumnLine();
            return;
        }
        if (column.tg_group) {
            //TODO get last column
            return;
        }
        this.showColumnLine(column);
    },

    initColumnLine: function() {
        this.columnLineContainer = this.find(".tg-column-line");
        this.columnLineHeader = this.find(".tg-column-line-header");
        this.columnLineItem = this.find(".tg-column-line-item");
        this.columnLineItemL = this.find(".tg-column-line-l");
        this.columnLineItemR = this.find(".tg-column-line-r");

        var self = this;
        this.columnLineHeader.bind("mouseenter", function(e) {
            self.setColumnLineHover(true);
        }).bind("mouseleave", function(e) {
            self.setColumnLineHover(false);
        }).bind("mousedown", function(e) {
            self.setColumnLineActive(true);
            self.columnWidthDrag.start({
                e: e,
                column: self.columnLineColumn
            });
        }).bind("mouseup", function(e) {
            self.setColumnLineActive(false);
        }).bind("touchstart", function(e) {
            self.columnWidthTouch.start({
                e: e,
                column: self.columnLineColumn,
                holder: self.$container
            });
        }).bind("touchend", function(e) {
            self.setColumnLineActive(false);
            self.setColumnLineHover(false);
        });

    },

    setColumnLineHover: function(hover) {
        Util.getRhythm(this, "hide_column_line").destroy();
        if (hover) {
            this.columnLineItem.addClass("tg-hover");
        } else {
            this.columnLineItem.removeClass("tg-hover");
        }
    },

    setColumnLineActive: function(active) {
        this.columnLineActive = active;
        if (active) {
            this.columnLineItem.addClass("tg-active");
        } else {
            this.columnLineItem.removeClass("tg-active");
        }
    },


    showColumnLine: function(column) {
        if (this.columnLineActive) {
            return;
        }

        this.columnLineColumn = column;

        //console.log("showColumnLine");

        this.updateColumnLine();

        this.columnLineContainer.show();

        //stop hide
        Util.getRhythm(this, "hide_column_line").destroy();

        return this;
    },

    /* eslint-disable complexity*/
    updateColumnLine: function() {

        var column = this.columnLineColumn;
        if (!column) {
            return;
        }

        var left = column.tg_left;
        if (!column.tg_frozen) {
            left -= this.scrollLeft;
        }

        var node = this.getHeaderNode(column);
        var elem = node.parent().get(0);

        var height = elem.clientHeight;
        var top = elem.offsetTop;
        var width = column.width;

        //console.log(left);

        this.columnLineItemL.css({
            top: top,
            left: left
        });

        if (this.hasFrozenColumns && !column.tg_frozen && left < this.paneWidthL) {
            //hide left line if has scroll left less than frozen left
            this.columnLineItemL.hide();
        } else {
            this.columnLineItemL.show();
        }

        this.columnLineItemR.css({
            top: top,
            left: left + width - 1
        });

        this.columnLineHeader.css({
            top: top,
            height: height,
            left: left + width - 5
        });
    },
    /* eslint-enable*/

    hideColumnLine: function() {
        //console.log("hide");
        Util.getRhythm(this, "hide_column_line").debounce({
            delay: 100,
            callback: this.hideColumnLineNow
        });
    },

    hideColumnLineNow: function() {
        if (this.columnLineActive) {
            return;
        }
        //console.log("hideNow");
        this.columnLineContainer.hide();
    }

};

module.exports = ColumnLine;

/***/ }),

/***/ "./src/grid-view/view/view-columns.js":
/*!********************************************!*\
  !*** ./src/grid-view/view/view-columns.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var E = __webpack_require__(/*! ../../core/event-type.js */ "./src/core/event-type.js");
var Util = __webpack_require__(/*! ../../core/util.js */ "./src/core/util.js");

var Columns = {

    setColumns: function(columns, allColumns) {
        this.columns = columns;
        this.allColumns = allColumns;
        //init column list cache
        this.blankColumn = this.getBlankColumn();
        this.headerNodeCache = {};
        this.columnsById = {};
        for (var i = 0, l = allColumns.length; i < l; i++) {
            var m = allColumns[i];
            this.columnsById[m.id] = i;
        }
        return this;
    },

    getColumns: function() {
        return this.columns;
    },

    //get column index by id
    getColumnIndex: function(id) {
        return this.columnsById[id];
    },

    getBlankColumn: function() {
        return this.columns[this.columns.length - 1];
    },

    //==========================================================================================

    isColumnSortable: function(column) {
        if (!column) {
            return false;
        }
        //default is true
        if (!column.hasOwnProperty("sortable")) {
            return true;
        }
        return column.sortable ? true : false;
    },

    isColumnResizable: function(column) {
        if (!column) {
            return false;
        }
        //default is true
        if (!column.hasOwnProperty("resizable")) {
            return true;
        }
        return column.resizable ? true : false;
    },

    //==========================================================================================

    setSortColumn: function(sortColumn) {

        if (!sortColumn) {
            return this;
        }

        if (!this.isColumnSortable(sortColumn)) {
            return this;
        }

        this.removeSortColumn();

        this.sortColumn = sortColumn;

        //add new column sorted
        var sortColumnElem = this.$headers.find(".tg-header-column[index='" + sortColumn.tg_index + "']");
        sortColumnElem.addClass("tg-header-column-sorted");

        //update placeholder for sortAsc
        var sortPlaceholder = sortColumnElem.find(".tg-sort-placeholder");
        sortPlaceholder.removeClass("tg-sort-asc");
        sortPlaceholder.removeClass("tg-sort-desc");

        var classSortAsc = sortColumn.sortAsc ? "tg-sort-asc" : "tg-sort-desc";
        sortPlaceholder.addClass(classSortAsc);

        return this;
    },

    removeSortColumn: function() {
        this.sortColumn = null;

        //remove column sorted 
        var sorted = this.$headers.find(".tg-header-column-sorted");
        sorted.removeClass("tg-header-column-sorted");

        return this;
    },

    //==========================================================================================

    setColumnWidth: function(columnItem, width) {

        //change width for column data
        var newWidth = Util.clamp(width, columnItem.minWidth, columnItem.maxWidth);
        if (columnItem.width === newWidth) {
            return;
        }
        columnItem.width = newWidth;

        //change width for column elements, both for all parent container
        var $node = this.getHeaderNode(columnItem);
        this.setColumnNodeWidth($node, newWidth);

        var columnTopGroup = this.getColumnTopGroup(columnItem);
        this.updateColumnGroupWidth(columnTopGroup);

        //update bodyer, true: force update css rules
        this.updateBodyerSize(true);

        this.trigger(E.onColumnWidthChanged, columnItem);

    },

    //==========================================================================================

    setColumnNodeWidth: function($node, width) {
        if (!$node || !$node.get(0)) {
            return;
        }

        //do NOT use $node.width(width), it has column border issue

        var node = $node.get(0);
        node.style.width = width + "px";

        var td = node.parentNode;
        td.style.width = width + "px";

        //if width is 0, height fix
        if (width <= 0) {
            node.style.display = "none";
        } else {
            node.style.display = "";
        }

    },

    getColumnTopGroup: function(column) {
        if (!column || !column.tg_parent) {
            return null;
        }
        var group = column;
        while (group.tg_parent) {
            group = group.tg_parent;
        }
        return group;
    },

    updateColumnGroupWidth: function(group) {
        if (!group || !Util.islist(group.subs)) {
            return;
        }
        var width = 0;
        var self = this;
        group.subs.forEach(function(item) {
            if (item.tg_group) {
                self.updateColumnGroupWidth(item);
            }
            if (Util.isnum(item.width)) {
                width += item.width;
            }
        });
        var $node = this.getHeaderNode(group);
        this.setColumnNodeWidth($node, width);
        group.width = width;
    }

};

module.exports = Columns;

/***/ }),

/***/ "./src/grid-view/view/view-css.js":
/*!****************************************!*\
  !*** ./src/grid-view/view/view-css.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../../core/query.js */ "./src/core/query.js");

var CssRules = {

    //grid css rules

    initCssRules: function() {
        this.removeCssRules();
        this.$style = $("<style type='text/css' rel='stylesheet' />").appendTo($("head"));
        this.$style.attr("uid", this.uid);
        //common
        var ns = "." + this.uid + " ";
        var rules = [];

        //rows
        var h = this.option.rowHeight;
        rules.push(ns + ".tg-row { height : " + h + "px; line-height : " + h + "px; }");

        //columns
        var columns = this.columns;
        for (var i = 0; i < columns.length; i++) {
            rules.push(ns + ".tg-c-" + i + " { }");
        }

        this.$style.append(rules.join(" "));

        var sheet = this.$style[0].sheet;
        if (!sheet) {
            console.log("Your browser do NOT support style sheet");
            return;
        }

        this.updateCssRulesCache(sheet.cssRules, ns);

    },

    updateCssRulesCache: function(cssRules, ns) {
        this.cssRulesCache = {};
        if (!cssRules) {
            return;
        }
        for (var i = 0, l = cssRules.length; i < l; i++) {
            var rule = cssRules[i];
            var selector = (rule.selectorText + "").split(ns).join("");
            this.cssRulesCache[selector] = rule;
        }

    },

    getCssRule: function(className) {
        return this.cssRulesCache[className];
    },

    updateCssRuleItem: function(i, left, width) {
        var rule = this.getCssRule(".tg-c-" + i);
        if (!rule) {
            return;
        }
        rule.style.left = left + "px";
        rule.style.width = width + "px";
        if (width === 0) {
            rule.style.display = "none";
        } else {
            rule.style.display = "";
        }
    },

    getColumnNodeWidth: function(column) {
        var width = column.width;
        if (column.tg_hidden || width <= 0) {
            width = 0;
        }
        return width;
    },

    updateCssRules: function() {
        var option = this.option;
        var columns = this.columns;
        var left = 0;
        for (var i = 0, l = columns.length; i < l; i++) {
            var column = columns[i];
            var width = this.getColumnNodeWidth(column);
            this.updateCssRuleItem(i, left, width);
            if (option.frozenColumn === i) {
                left = 0;
            } else {
                left += width;
            }
        }
    },

    removeCssRules: function(uid) {
        if (this.$style) {
            this.$style.remove();
            this.$style = null;
        }
        if (uid) {
            $('style[uid="' + uid + '"]').remove();
        }

        this.cssRulesCache = null;
    }

};

module.exports = CssRules;

/***/ }),

/***/ "./src/grid-view/view/view-editor.js":
/*!*******************************************!*\
  !*** ./src/grid-view/view/view-editor.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../../core/query.js */ "./src/core/query.js");
var E = __webpack_require__(/*! ../../core/event-type.js */ "./src/core/event-type.js");
var Editor = {

    getEditor: function(columnIndex) {
        var column = this.columns[columnIndex];
        return column.tg_editor;
    },

    setFocus: function() {
        if (this.tabbingDirection === -1) {
            this.$focusSinkStart.focus();
        } else {
            this.$focusSinkEnd.focus();
        }
    },

    //=============================================================================

    updateCell: function(rowIndex, columnIndex) {

        var cellNode = this.getCellNode(rowIndex, columnIndex);
        if (!cellNode) {
            return;
        }

        var rowData = this.getRowItem(rowIndex);
        var columnData = this.getColumnItem(columnIndex);

        if (this.isCellEditActive(rowIndex, columnIndex)) {
            //if in editing
            this.currentEditor.updateData(rowData, columnData);
        } else {
            this.cellContentHandler(rowData, columnData, cellNode);
        }
    },

    updateRow: function(rowIndex) {
        var rowCache = this.getRowCache(rowIndex);
        if (!rowCache) {
            return;
        }
        var cellNodes = rowCache.cellNodes;
        for (var i = 0, l = cellNodes.length; i < l; i++) {
            var cellNode = cellNodes[i];
            if (cellNode) {
                this.updateCell(rowIndex, i);
            }
        }
    },

    //=============================================================================

    isCellEditActive: function(rowIndex, columnIndex) {
        if (this.currentEditor && this.activeRow === rowIndex && this.activeColumn === columnIndex) {
            return true;
        }
        return false;
    },

    isCellEditable: function(rowIndex, columnIndex) {

        if (!this.getEditor(columnIndex)) {
            return false;
        }

        var rowItem = this.getRowItem(rowIndex);
        var columnItem = this.getColumnItem(columnIndex);

        var editable = true;

        //for row 
        if (rowItem.hasOwnProperty("editable")) {
            editable = rowItem.editable;
        }

        //for cell, high priority
        var cell_editable_key = columnItem.id + "_editable";
        if (rowItem.hasOwnProperty(cell_editable_key)) {
            editable = rowItem[cell_editable_key];
        }

        return editable ? true : false;
    },

    //=============================================================================
    // IEditor implementation for the editor lock

    commitCurrentEdit: function() {
        if (!this.currentEditor) {
            return false;
        }

        if (this.currentEditor.isValueChanged()) {
            var newValue = this.currentEditor.getValue();
            var validationResults = this.currentEditor.validate(newValue);
            if (validationResults.valid) {

                this.currentEditor.applyValue();
                this.currentEditor.completed = true;

                this.onCellEditValueChangedHandler();
                this.onCellEditCompleteHandler();

                return true;
            } else {

                $(this.activeNode).addClass("tg-invalid");
                this.currentEditor.focus();

                this.onCellEditErrorHandler(validationResults);

                return false;
            }
        }

        this.onCellEditCompleteHandler();

        return true;
    },

    cancelCurrentEdit: function() {
        this.removeCellEditor();
        return true;
    },

    //=============================================================================

    removeCellEditor: function() {
        if (!this.currentEditor) {
            return;
        }

        this.onCellEditDestroyHandler();

        this.currentEditor.destroy();
        this.currentEditor = null;

        if (this.activeNode) {
            $(this.activeNode).removeClass("tg-editable").removeClass("tg-invalid");
            this.updateCell(this.activeRow, this.activeColumn);
        }

    },

    createCellEditor: function() {
        if (!this.activeNode) {
            return;
        }

        if (!this.isCellEditable(this.activeRow, this.activeColumn)) {
            return;
        }

        //cancel previous editor and removed it
        if (this.currentEditor) {
            this.doCancelCurrentEdit();
            this.removeCellEditor();
        }

        var rowItem = this.getRowItem(this.activeRow);
        var columnItem = this.getColumnItem(this.activeColumn);

        //scroll into view
        this.scrollItemIntoView(rowItem, columnItem);

        var holder = $(this.activeNode);
        holder.addClass("tg-editable").html("");

        //create new editor
        var Editor = this.getEditor(this.activeColumn);
        this.currentEditor = new Editor({
            holder: holder,
            rowItem: rowItem,
            columnItem: columnItem
        });

        var self = this;
        this.currentEditor.bind("onCommit", function(e, d) {

            if (self.commitCurrentEdit()) {
                self.setFocus();
            } else {
                self.cancelCurrentEdit();
            }

        }).bind("onChanging", function(e, d) {
            self.onCellEditValueChangingHandler(e, d);
        }).bind("onRendered", function(e, d) {
            self.onCellEditRenderedHandler();
        });

        this.onCellEditStartHandler();

        this.currentEditor.render();

    },

    //=============================================================================

    onCellEditEventHandler: function(type, info) {
        var eventData = {
            editor: this.currentEditor,
            node: this.activeNode,
            row: this.activeRow,
            column: this.activeColumn,
            rowItem: this.currentEditor.rowItem,
            columnItem: this.currentEditor.columnItem
        };
        if (info) {
            eventData.info = info;
        }
        this.trigger(type, eventData);
    },

    onCellEditStartHandler: function() {
        this.onCellEditEventHandler(E.onCellEditStart);
    },

    onCellEditRenderedHandler: function() {
        this.onCellEditEventHandler(E.onCellEditRendered);
    },

    onCellEditValueChangingHandler: function(e, d) {
        this.onCellEditEventHandler(E.onCellEditValueChanging);
    },

    onCellEditValueChangedHandler: function() {
        this.onCellEditEventHandler(E.onCellEditValueChanged);
    },

    onCellEditCompleteHandler: function() {
        this.onCellEditEventHandler(E.onCellEditComplete);
        this.removeCellEditor();
    },

    onCellEditErrorHandler: function(info) {
        this.onCellEditEventHandler(E.onCellEditError, info);
    },

    onCellEditDestroyHandler: function() {
        this.onCellEditEventHandler(E.onCellEditDestroy);
    },

    //=============================================================================

    commitEditAndSetFocus: function() {
        // if the commit fails, it would do so due to a validation error
        // if so, do not steal the focus from the editor
        if (this.commitCurrentEdit()) {
            this.setFocus();
            this.keyDownHandler({
                autoEditNextOnEnter: this.option.autoEditNextOnEnter
            });
        }
    },

    cancelEditAndSetFocus: function() {
        if (this.cancelCurrentEdit()) {
            this.setFocus();
        }
    },

    doCancelCurrentEdit: function() {
        if (this.currentEditor) {
            if (this.cancelCurrentEdit()) {
                this.setFocus();
            }
        }
    },

    //by dbl click, seems no useless for now
    editCellHandler: function(row, column) {

        if (!this.isCellEditable(row, column)) {
            return;
        }

        if (!this.commitCurrentEdit()) {
            return;
        }

        this.setActiveCell(row, column, true);

        // if no editor was created, set the focus back on the grid
        if (!this.currentEditor) {
            this.setFocus();
        }
    },

    editActiveCellNodeHandler: function(forceEdit) {
        var o = this.option;
        var editable = false;
        if (!forceEdit) {
            editable = (this.activeRow === this.getRowsLength()) || o.autoEditNextOnEnter;
        }
        if (editable && this.isCellEditable(this.activeRow, this.activeColumn)) {
            this.createCellEditor();
        }
    }

};

module.exports = Editor;

/***/ }),

/***/ "./src/grid-view/view/view-events.js":
/*!*******************************************!*\
  !*** ./src/grid-view/view/view-events.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../../core/query.js */ "./src/core/query.js");
var Util = __webpack_require__(/*! ../../core/util.js */ "./src/core/util.js");
var E = __webpack_require__(/*! ../../core/event-type.js */ "./src/core/event-type.js");
var Drag = __webpack_require__(/*! ../../core/drag.js */ "./src/core/drag.js");
var Touch = __webpack_require__(/*! ../../core/touch.js */ "./src/core/touch.js");
var Events = {
    bindEvents: function() {

        var self = this;

        //==============================================================

        //column drag events
        //require defined as global for handleHeaderEvent 
        this.columnWidthDrag = new Drag();
        var DE = this.columnWidthDrag.E;
        this.columnWidthDrag.bind(DE.DRAG_START, function(e, d) {
            self.trigger(E.onColumnWidthDragStart, d);
        }).bind(DE.DRAG_UPDATE, function(e, d) {
            self.trigger(E.onColumnWidthDragUpdate, d);
        }).bind(DE.DRAG_COMPLETE, function(e, d) {
            self.trigger(E.onColumnWidthDragComplete, d);
        });

        //row drag events
        this.rowDrag = new Drag();
        this.rowDrag.bind(DE.DRAG_START, function(e, d) {
            self.trigger(E.onRowDragStart, d);
        }).bind(DE.DRAG_UPDATE, function(e, d) {
            self.trigger(E.onRowDragUpdate, d);
        }).bind(DE.DRAG_COMPLETE, function(e, d) {
            self.trigger(E.onRowDragComplete, d);
        });

        //scroll touch events
        this.scrollTouch = new Touch();
        var SE = this.scrollTouch.E;
        this.scrollTouch.bind(SE.TOUCH_START, function(e, d) {
            self.handleScrollTouchStart(e, d);
        }).bind(SE.TOUCH_MOVE, function(e, d) {
            self.handleScrollTouchMove(e, d);
        }).bind(SE.TOUCH_INERTIA, function(e, d) {
            self.handleScrollTouchInertia(e, d);
        });

        //column width touch
        this.columnWidthTouch = new Touch();
        this.columnWidthTouch.bind(SE.TOUCH_START, function(e, d) {
            self.handleColumnWidthTouchStart(e, d);
        }).bind(SE.TOUCH_MOVE, function(e, d) {
            self.handleColumnWidthTouchMove(e, d);
        }).bind(SE.TOUCH_END, function(e, d) {
            self.handleColumnWidthTouchEnd(e, d);
        });

        //==============================================================

        // disable all text selection (except input and textarea)
        this.$headers.unbind().bind("selectstart", function(e) {
            return $(e.target).is("input,textarea");
        });
        this.$panes.unbind().bind("selectstart", function(e) {
            return $(e.target).is("input,textarea");
        });

        //==============================================================
        //header events

        this.$headers.delegate(".tg-column-item", "contextmenu", function(e) {
            self.handleHeaderEvent(e, E.onHeaderContextMenu);
        }).delegate(".tg-column-item", "click", function(e) {
            self.handleHeaderEvent(e, E.onHeaderClick);
        }).delegate(".tg-column-item", "dblclick", function(e) {
            self.handleHeaderEvent(e, E.onHeaderDblClick);
        }).delegate(".tg-column-item", "mouseover", function(e) {
            self.handleHeaderEvent(e, E.onHeaderMouseOver);
        }).delegate(".tg-column-item", "mouseout", function(e) {
            self.handleHeaderEvent(e, E.onHeaderMouseOut);
        }).delegate(".tg-column-item", "mouseenter", function(e) {
            self.handleHeaderEvent(e, E.onHeaderMouseEnter);
        }).delegate(".tg-column-item", "mouseleave", function(e) {
            self.handleHeaderEvent(e, E.onHeaderMouseLeave);
        });

        this.$headers.bind("mousemove", function(e) {
            self.handleHeaderEvent(e, E.onHeadersMouseMove);
        }).bind("mouseenter", function(e) {
            self.handleHeaderEvent(e, E.onHeadersMouseEnter);
        }).bind("mouseleave", function(e) {
            self.handleHeaderEvent(e, E.onHeadersMouseLeave);
        }).bind("touchstart", function(e) {
            self.handleHeaderEvent(e, E.onHeadersTouchStart);
        });

        //==============================================================

        this.$panes.bind("wheel", function(e) {
            self.handleWheel(e);
        }).bind("touchstart", function(e) {
            //require in panes cause canvas maybe not full height
            self.scrollTouch.start({
                e: e,
                holder: self.$container
            });
        });

        //bind active scrollpane events
        this.scrollpane.bind("onChange", function(e, d) {
            //console.log("onChange", this.uid, d);
            self.handleScrollpaneChange(e, d);
        });

        //==============================================================
        //cell events
        this.$canvas.unbind().bind("keydown", function(e) {
            self.handleKeyDown(e);
        }).bind("click", function(e) {
            self.handleClick(e);
        }).bind("dblclick", function(e) {
            self.handleDblClick(e);
        }).bind("contextmenu", function(e) {
            self.handleContextMenu(e);
        }).delegate(".tg-cell", "mouseover", function(e) {
            self.handleCellNodeHover(e, true);
        }).delegate(".tg-cell", "mouseout", function(e) {
            self.handleCellNodeHover(e, false);
        }).delegate(".tg-cell", "mouseenter", function(e) {
            self.handleCellHover(e, true);
        }).delegate(".tg-cell", "mouseleave", function(e) {
            self.handleCellHover(e, false);
        }).delegate(".tg-row", "mouseenter", function(e) {
            self.handleRowHover(e, true);
        }).delegate(".tg-row", "mouseleave", function(e) {
            self.handleRowHover(e, false);
        }).delegate(".tg-row", "mousedown", function(e) {
            self.handleRowDrag(e);
        });

        this.$focusSink.unbind().bind("keydown", function(e) {
            self.handleKeyDown(e);
        });

    },

    isEventStopped: function(e) {
        var stopped = false;
        if (e && e.isImmediatePropagationStopped) {
            stopped = e.isImmediatePropagationStopped();
        }
        return stopped;
    },

    preventEventDefault: function(e) {
        if (e && e.preventDefault) {
            e.preventDefault();
        }
    },

    //======================================================================================

    handleScrollTouchStart: function(e, d) {
        //hide column line when starting touch scroll
        this.hideColumnLine();
        //start position
        this.scrollTouchLeft = this.getScrollLeft();
        this.scrollTouchTop = this.getScrollTop();
    },

    handleScrollTouchMove: function(e, d) {

        if (d.touchLength > 1) {
            return;
        }

        var pl = this.getScrollLeft();
        var pt = this.getScrollTop();

        var tsl = this.scrollTouchLeft - d.touchOffsetX;
        var tst = this.scrollTouchTop - d.touchOffsetY;
        this.setScroll(tsl, tst);

        var cl = this.getScrollLeft();
        var ct = this.getScrollTop();

        //console.log("scroll position", pl, pt, "new:", cl, ct);

        if (pl !== cl || pt !== ct) {
            //console.log("preventDefault");
            this.scrollTouch.preventDefault();
        }
    },

    handleScrollTouchInertia: function(e, d) {

        if (d.touchLength > 0) {
            return;
        }

        var cl = this.getScrollLeft();
        var ct = this.getScrollTop();
        var tsl = cl - d.touchInertiaX;
        var tst = ct - d.touchInertiaY;
        this.setScroll(tsl, tst);
    },

    //======================================================================================

    handleColumnWidthTouchStart: function(e, d) {
        this.setColumnLineActive(true);
        var column = d.column;
        d.index = column.tg_index;
        var $node = this.getHeaderNode(column);
        d.width = $node.width();
        //console.log("touch start", d);
    },

    handleColumnWidthTouchMove: function(e, d) {
        var newWidth = d.width + d.touchOffsetX;
        var column = d.column;
        this.setColumnWidth(column, newWidth);
        this.updateColumnLine();
    },

    handleColumnWidthTouchEnd: function(e, d) {
        //console.log("touch end", d);
        this.setColumnLineActive(false);
        this.setColumnLineHover(false);
    },

    /* eslint-disable complexity*/
    //======================================================================================
    handleHeaderEvent: function(e, eventType) {
        //console.log(eventType);

        var $elem = $(e.target);

        var $node = $elem.closest(".tg-column-item", this.$headers);
        var $column = $node.find(".tg-header-column");
        var columnIndex = this.getNodeIndex($column);
        var columnItem = this.getColumnItem(columnIndex);
        if (!columnItem) {
            return;
        }

        var d = {
            e: e,
            columnItem: columnItem,
            node: $node
        };

        if (eventType === E.onHeaderClick) {
            this.handleHeaderClick(d, $elem);
            return;
        }

        this.trigger(eventType, d);
    },

    /* eslint-enable*/
    handleHeaderClick: function(d, $elem) {

        var currentTarget = d.e.currentTarget;

        //tree icon
        var inTreeIconAll = $elem.closest(".tg-tree-icon-all", currentTarget);
        if (inTreeIconAll.length) {
            d.node = $elem;
            this.trigger(E.onTreeIconAllClick, d);
            return;
        }

        //checkbox icon
        var inCheckboxAll = $elem.closest(".tg-checkbox-all", currentTarget);
        if (inCheckboxAll.length) {
            d.node = $elem;
            this.trigger(E.onCheckboxAllClick, d);
            return;
        }

        //click just can cancel onSort
        this.trigger(E.onHeaderClick, d);
        if (this.isEventStopped(d.e)) {
            return;
        }

        this.handleColumnSort(d, $elem, currentTarget);

    },

    /* eslint-disable complexity*/
    handleColumnSort: function(d, $elem, currentTarget) {
        //column sort
        var inColumnName = $elem.closest(".tg-column-name", currentTarget);
        var inSortablePlaceholder = $elem.closest(".tg-sort-placeholder", currentTarget);
        var isSortElem = inColumnName.length || inSortablePlaceholder.length;
        var columnItem = d.columnItem;
        if (isSortElem && this.isColumnSortable(columnItem) && !columnItem.tg_group) {

            if (this.sortColumn && this.sortColumn.id === columnItem.id) {
                //change sortAsc if click same column
                columnItem.sortAsc = !columnItem.sortAsc;
            } else {

                //set default sortAsc 
                if (typeof(columnItem.sortAsc) !== "boolean") {
                    columnItem.sortAsc = this.option.sortAsc;
                }

            }

            this.sortColumn = columnItem;
            this.trigger(E.onSort, d);
        }
    },
    /* eslint-enable*/
    //======================================================================================
    handleWheel: function(e) {
        //init mouse wheel data
        var originalEvent = e.originalEvent || e;
        var lineHeight = this.option.rowHeight;
        var pageHeight = this.bodyerHeight;
        var wd = this.getWheelDelta(originalEvent, lineHeight, pageHeight);

        //e.deltaMode = 0;
        //console.log("delta", wd);

        this.trigger(E.onMouseWheel, {
            e: e,
            deltaX: wd.deltaX,
            deltaY: wd.deltaY
        });

        //can cancel wheel
        if (this.isEventStopped(e)) {
            return;
        }

        var handled = this.scrollpane.mouseWheelHandler(wd);
        if (handled) {
            //require to prevent default for MAC OS
            //it's very different default handler between windows and Mac
            this.preventEventDefault(e);
        }

    },
    /* eslint-disable complexity*/
    getWheelDelta: function(e, lineHeight, pageHeight) {

        //New wheel delta (wheel event)
        var deltaX = e.deltaX;
        var deltaY = e.deltaY;


        //wheelDeltaX/wheelDeltaY is old property
        if (!Util.isnum(deltaX)) {
            deltaX = Util.tonum(e.wheelDeltaX);
        }

        /* jshint ignore:start */
        if (!Util.isnum(deltaY)) {
            deltaY = Util.tonum(e.wheelDeltaY || e.wheelDelta);
        }
        /* jshint ignore:end */

        //deltaMode fixing to px
        // 0 is by pixel, nothing to do
        // 1 is by line
        // 2 is by page
        if (e.deltaMode === 1) {
            deltaY *= lineHeight;
            deltaX *= lineHeight;
        } else if (e.deltaMode === 2) {
            deltaY *= pageHeight;
            deltaX *= pageHeight;
        }

        var wd = {
            deltaX: deltaX,
            deltaY: deltaY
        };

        return wd;
    },
    /* eslint-enable*/
    //======================================================================================
    handleScrollpaneChange: function(e, d) {
        //hide column line when starting touch scroll
        this.hideColumnLine();

        this.scrollLeft = d.scrollLeft;
        this.scrollTop = d.scrollTop;
        this.scrollTopOffset = d.scrollTopOffset;
        this.scrollRenderHandler();
    },

    //======================================================================================
    handleKeyDown: function(e) {
        this.trigger(E.onKeyDown, {
            e: e,
            row: this.activeRow,
            column: this.activeColumn
        });

        //can cancel keydown
        if (this.isEventStopped(e)) {
            return;
        }

        var keyCode = e.keyCode;
        //console.log(keyCode);
        //9: tab
        //13: enter
        //27: esc
        //33,34: page up,page down
        //35,36: end,home
        //37,38,39,40: left,up,right,down
        var keyCodeList = {
            "9": this.keyTabHandler,
            "13": this.keyEnterHandler,
            "27": this.keyEscHandler,

            "33": this.keyPageUpHandler,
            "34": this.keyPageDownHandler,
            "35": this.keyEndHandler,
            "36": this.keyHomeHandler,

            "37": this.keyLeftHandler,
            "38": this.keyUpHandler,
            "39": this.keyRightHandler,
            "40": this.keyDownHandler
        };

        var handler = keyCodeList[keyCode];
        if (!handler) {
            return;
        }

        var handled = handler.call(this, e);
        if (handled) {
            this.preventEventDefault(e);
        }

    },

    //======================================================================================

    handleCellNodeHover: function(e, hover) {
        var position = this.getPositionByEvent(e);
        if (!position) {
            return;
        }
        if (!hover) {
            this.trigger(E.onCellMouseOut, position);
            return;
        }
        this.trigger(E.onCellMouseOver, position);
    },

    handleCellHover: function(e, hover) {
        var position = this.getPositionByEvent(e);
        if (!position) {
            return;
        }
        if (!hover) {
            this.trigger(E.onCellMouseLeave, position);
            return;
        }
        this.trigger(E.onCellMouseEnter, position);
    },

    handleRowHover: function(e, hover) {

        var rowIndex = parseInt($(e.currentTarget).attr("index"), 10);
        var rowItem = this.getRowItem(rowIndex);

        if (!rowItem) {
            return this;
        }

        //row class handler
        this.setHoverRow(rowItem, hover);

        //trigger event
        var eventData = {
            e: e,
            row: rowIndex,
            rowItem: rowItem
        };
        if (hover) {
            this.trigger(E.onRowMouseEnter, eventData);
        } else {
            this.trigger(E.onRowMouseLeave, eventData);
        }

        return this;
    },

    setHoverRow: function(rowItem, hover) {

        //remove previous hover row, both for left and right pane
        var hoverRow = this.$canvas.find(".tg-hover");
        if (hoverRow.length) {
            hoverRow.removeClass("tg-hover");
            var hoverRowIndex = parseInt(hoverRow.attr("index"), 10);
            this.rowHoverCellHandler(hoverRowIndex, false);
        }

        if (!hover) {
            return this;
        }

        //add hover row not frozen, both for left and right pane
        if (!rowItem.tg_frozen) {
            this.$canvas.find(".tg-row[index='" + rowItem.tg_index + "']").addClass('tg-hover');
            this.rowHoverCellHandler(rowItem.tg_index, true);
        }

        return this;
    },

    //======================================================================================

    handleRowDrag: function(e) {

        var elem = $(e.currentTarget);
        var rowIndex = this.getNodeIndex(elem);
        var rowItem = this.getRowItem(rowIndex);
        if (!rowItem || !rowItem.draggable) {
            return;
        }

        //do NOT drag checkbox
        var cellNode = $(e.target).closest(".tg-cell", elem);
        var columnIndex = this.getNodeIndex(cellNode);
        var columnItem = this.getColumnItem(columnIndex);
        if (!columnItem || columnItem.id === "tg_checkbox_column") {
            return;
        }

        this.rowDrag.start({
            e: e,
            target: elem,
            dragRow: rowItem
        });
    },

    //======================================================================================
    /* eslint-disable max-statements,complexity */
    handleClick: function(e) {

        var position = this.getPositionByEvent(e);
        if (!position) {
            return;
        }

        /* jshint ignore:start */
        var column = this.columns[position.column];
        if (!column) {
            return;
        }

        var target = e.target;
        var $target = $(target);
        var currentTarget = e.currentTarget;
        //=============================================
        //tree icon
        var inTreeIcon = $target.closest(".tg-tree-icon", currentTarget);
        if (inTreeIcon.length) {
            position.node = $target;
            this.trigger(E.onTreeIconClick, position);
            return;
        }

        //checkbox icon
        var inCheckboxIcon = $target.closest(".tg-checkbox", currentTarget);
        if (inCheckboxIcon.length) {
            position.node = $target;
            this.trigger(E.onCheckboxClick, position);
            return;
        }

        //just can cancel edit, do NOT cancel checkbox and treeicon
        this.trigger(E.onClick, position);
        if (this.isEventStopped(e)) {
            return;
        }

        //=============================================
        //editor

        if (this.currentEditor !== null && this.activeRow === position.row && this.activeColumn === position.column) {
            return;
        }

        if (!this.currentEditor) {
            // if this click resulted in some cell child node getting focus,
            // don't steal it back - keyboard events will still bubble up
            // IE9+ seems to default DIVs to tabIndex=0 instead of -1, so check for cell clicks directly.
            if (target !== document.activeElement || $target.hasClass("tg-cell")) {
                this.setFocus();
            }
        }

        if (this.isCellEditable(position.row, position.column)) {
            if (!this.currentEditor || this.commitCurrentEdit()) {
                if (!this.isFrozenRow(position.row)) {
                    var rowItem = this.getRowItem(position.row);
                    this.scrollItemIntoView(rowItem, null);
                }
                var cellNode = this.getCellNode(position.row, position.column);
                this.setActiveCellNode(cellNode);
            }
        }

        /* jshint ignore:end */
    },
    /* eslint-enable*/
    //======================================================================================
    handleContextMenu: function(e) {
        var position = this.getPositionByEvent(e);
        if (!position) {
            return;
        }
        this.trigger(E.onContextMenu, position);
    },

    //======================================================================================
    /* eslint-disable complexity*/
    handleDblClick: function(e) {
        var position = this.getPositionByEvent(e);
        if (!position) {
            return;
        }
        this.trigger(E.onDblClick, position);
        if (this.isEventStopped(e)) {
            return;
        }

        if (this.currentEditor !== null && this.activeRow === position.row && this.activeColumn === position.column) {
            return;
        }

        this.editCellHandler(position.row, position.column);
    }
    /* eslint-enable*/

};

module.exports = Events;

/***/ }),

/***/ "./src/grid-view/view/view-header-table.js":
/*!*************************************************!*\
  !*** ./src/grid-view/view/view-header-table.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//var E = require("../../core/event-type.js");
//var Util = require("../../core/util.js");
var Icon = __webpack_require__(/*! ../../core/icon.js */ "./src/core/icon.js");
var HeaderTable = {

    createAttr: function(attr) {
        if (!attr) {
            return "";
        }
        var arr = [];
        for (var k in attr) {
            if (attr.hasOwnProperty(k)) {
                arr.push(k + '="' + attr[k] + '"');
            }
        }
        var str = arr.join(" ");
        return str;
    },

    createTag: function(name, attr, content) {
        var arr = [];
        arr.push('<' + name);
        var str = this.createAttr(attr);
        if (str) {
            arr.push(' ' + str);
        }
        arr.push('>');
        if (content) {
            arr.push(content);
        }
        arr.push('</' + name + '>');
        var s = arr.join("");
        return s;
    },

    getHeaderTableData: function(columnsList) {

        var tableData = [];
        var maxLevel = this.option.columnsInfo.maxLevel;
        var level = 0;
        while (level <= maxLevel) {
            tableData.push([]);
            level++;
        }

        var addToLevelList = function(column) {
            var levelList = tableData[column.tg_tr];
            if (levelList) {
                levelList.push(column);
            }
        };

        columnsList.forEach(function(column, index) {
            addToLevelList(column);
            if (!column.tg_parent) {
                return;
            }
            var currentItem = column;
            while (currentItem.tg_parent) {
                currentItem = currentItem.tg_parent;
                if (!currentItem.tg_tr_mark) {
                    addToLevelList(currentItem);
                    currentItem.tg_tr_mark = true;
                }
            }
        });

        return tableData;
    },

    createHeaderItemName: function(column) {
        var value = column.name;
        var content = value;
        //formatter
        if (typeof(column.tg_headerFormatter) === "function") {
            //value, rowData, columnData, rowIndex, columnIndex, cellNode
            content = column.tg_headerFormatter(value, null, column, -1, column.tg_index, null);
        }

        var headerNameClass = "tg-column-name";
        if (column.tg_group) {
            headerNameClass += " tg-column-group-name";
        }

        if (column.headerNameClass) {
            headerNameClass += " " + column.headerNameClass;
        }
        var nameAttr = {
            "class": headerNameClass
        };
        var name = this.createTag("div", nameAttr, content);
        return name;
    },

    createHeaderItemSort: function(column) {

        if (!this.isColumnSortable(column)) {
            return "";
        }

        if (column.tg_group) {
            return "";
        }

        var sort_icon = Icon.getIconString("sort_icon", {
            width: 7,
            height: 7
        }, "sort_icon");

        var icon = this.createTag("div", {
            "class": "tg-sort-indicator-icon"
        }, sort_icon);

        var indicator = this.createTag("div", {
            "class": "tg-sort-indicator"
        }, icon);

        var sort = this.createTag("div", {
            "class": "tg-sort-placeholder"
        }, indicator);

        return sort;

    },

    getHeaderItemClass: function(column) {

        var headerCss = ["tg-header-column"];

        if (column.tg_group) {
            headerCss.push("tg-header-group");
        } else if (this.isColumnSortable(column)) {
            headerCss.push("tg-header-column-sortable");
        }

        if (column.align) {
            headerCss.push("tg-align-" + column.align);
        }

        if (column.headerClass) {
            headerCss.push(column.headerClass);
        }

        var headerClass = headerCss.join(" ");

        return headerClass;
    },

    createHeaderItem: function(column) {

        var name = this.createHeaderItemName(column);
        var sort = this.createHeaderItemSort(column);

        var headerClass = this.getHeaderItemClass(column);
        var itemAttr = {
            "class": headerClass,
            data: column.id,
            index: column.tg_index,
            style: "width:" + column.width + "px;"
        };

        if (column.title) {
            itemAttr.title = column.title;
        }

        var item = this.createTag("div", itemAttr, name + sort);

        return item;
    },
    /* eslint-disable complexity*/
    createHeaderTd: function(column) {

        var item = this.createHeaderItem(column);

        var itemClass = "tg-column-item";
        if (column.tg_group) {
            itemClass += " tg-column-group-item";
        }

        if (column.headerItemClass) {
            itemClass += " " + column.headerItemClass;
        }

        var tdAttr = {
            "class": itemClass,
            style: "width:" + column.width + "px;"
        };

        var rowspan = column.tg_rowspan;
        if (rowspan && rowspan > 1) {
            tdAttr.rowspan = rowspan;
        }

        var colspan = column.tg_colspan;
        if (colspan && colspan > 1) {
            tdAttr.colspan = colspan;
        }

        var td = this.createTag("td", tdAttr, item);

        return td;
    },
    /* eslint-enable*/
    createHeaderTable: function(columnsList, container) {

        var tableData = this.getHeaderTableData(columnsList);

        //console.log(tableData);

        var self = this;
        var trList = [];
        tableData.forEach(function(levelList) {
            if (!levelList.length) {
                return;
            }
            var tdList = [];
            levelList.forEach(function(column) {
                var td = self.createHeaderTd(column);
                tdList.push(td);
            });
            var tds = tdList.join("");
            var tr = self.createTag("tr", null, tds);
            trList.push(tr);
        });

        var trs = trList.join("");
        var tbody = this.createTag("tbody", null, trs);

        var tableClass = "tg-header-table";
        if (this.hasSortColumn) {
            tableClass += " tg-header-table-sortable";
        }
        var table = this.createTag("table", {
            "class": tableClass,
            cellpadding: 0,
            cellspacing: 0,
            border: 0
        }, tbody);

        container.html(table);

    }

};

module.exports = HeaderTable;

/***/ }),

/***/ "./src/grid-view/view/view-headers.js":
/*!********************************************!*\
  !*** ./src/grid-view/view/view-headers.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var E = __webpack_require__(/*! ../../core/event-type.js */ "./src/core/event-type.js");
var Util = __webpack_require__(/*! ../../core/util.js */ "./src/core/util.js");
var Headers = {

    getHeaderNode: function(column) {
        var index = column.tg_index;
        var node = this.headerNodeCache[index];
        if (!node) {
            node = this.$headers.find(".tg-header-column[index='" + index + "']");
            this.headerNodeCache[index] = node;
        }
        return node;
    },

    initHeaders: function() {

        var self = this;

        var headerL = this.$headerL.get(0);
        var headerR = this.$headerR.get(0);

        headerL.innerHTML = "";
        headerR.innerHTML = "";

        headerL.style.visibility = "hidden";
        headerR.style.visibility = "hidden";

        this.renderHeaderColumns();

        //async render headers
        Util.getRhythm(this, "initHeaders").debounce({
            delay: 20,
            callback: function() {
                headerL.style.visibility = "";
                headerR.style.visibility = "";
                self.headersCompleteHandler();
            }
        });

        return this;
    },

    headersCompleteHandler: function() {

        //header completed
        this.initialized = true;
        //console.log("initialized");

        //header sort and resize
        this.setSortColumn(this.sortColumn);

        this.resize();

    },

    //render headers
    renderHeaderColumns: function() {
        var option = this.option;
        var columns = this.columns;

        this.hasSortColumn = false;
        var columnsL = [];
        var columnsR = [];

        for (var i = 0, l = columns.length; i < l; i++) {
            var column = columns[i];
            if (this.isColumnSortable(column)) {
                this.hasSortColumn = true;
            }
            if (this.hasFrozenColumns && i > option.frozenColumn) {
                columnsR.push(column);
            } else {
                columnsL.push(column);
            }
        }

        //console.log(this.hasSortColumn);

        //left list
        this.createHeaderTable(columnsL, this.$headerL);
        //right list
        this.createHeaderTable(columnsR, this.$headerR);

        //column rendered
        this.trigger(E.onHeaderRendered, {
            node: this.$headers
        });

    }

};

module.exports = Headers;

/***/ }),

/***/ "./src/grid-view/view/view-invalidate.js":
/*!***********************************************!*\
  !*** ./src/grid-view/view/view-invalidate.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Util = __webpack_require__(/*! ../../core/util.js */ "./src/core/util.js");
var Invalidate = {

    //invalidate public API

    invalidateRow: function(row) {
        this.removeRowFromCache(row);
    },

    invalidateRows: function(rows) {
        if (!Util.islist(rows)) {
            return;
        }
        var self = this;
        rows.forEach(function(row) {
            self.removeRowFromCache(row);
        });
    },

    invalidateRowsExcept: function(rows) {
        if (!Util.islist(rows)) {
            return;
        }
        var map = Util.listToMap(rows);
        var allCacheRows = this.getAllCacheRows();
        var self = this;
        allCacheRows.forEach(function(row) {
            if (!map[row]) {
                self.removeRowFromCache(row);
            }
        });
    },

    invalidateRowsFrom: function(fromRow) {
        if (!Util.isnum(fromRow)) {
            return;
        }
        var allCacheRows = this.getAllCacheRows();
        var self = this;
        allCacheRows.forEach(function(row) {
            if (row >= fromRow) {
                self.removeRowFromCache(row);
            }
        });
    },

    //=============================================================================

    invalidateColumn: function(column) {
        var allCacheRows = this.getAllCacheRows();
        var self = this;
        allCacheRows.forEach(function(row) {
            self.removeCellFromCache(row, column);
        });
    },

    invalidateColumns: function(columns) {
        if (!Util.islist(columns)) {
            return;
        }
        var allCacheRows = this.getAllCacheRows();
        var self = this;
        allCacheRows.forEach(function(row) {
            columns.forEach(function(column) {
                self.removeCellFromCache(row, column);
            });
        });
    },

    invalidateColumnsExcept: function(columns) {
        if (!Util.islist(columns)) {
            return;
        }
        var map = Util.listToMap(columns);
        var allCacheRows = this.getAllCacheRows();
        var self = this;
        allCacheRows.forEach(function(row) {
            var cellNodes = self.getCellNodes(row);
            if (!cellNodes) {
                return;
            }
            cellNodes.forEach(function(node, column) {
                if (!map[column]) {
                    self.removeCellFromCache(row, column);
                }
            });
        });
    },

    invalidateColumnsFrom: function(fromColumn) {
        if (!Util.isnum(fromColumn)) {
            return;
        }
        var allCacheRows = this.getAllCacheRows();
        var self = this;
        allCacheRows.forEach(function(row) {
            var cellNodes = self.getCellNodes(row);
            if (!cellNodes) {
                return;
            }
            cellNodes.forEach(function(node, column) {
                if (column >= fromColumn) {
                    self.removeCellFromCache(row, column);
                }
            });
        });
    },

    //=============================================================================

    invalidateCell: function(row, column) {
        this.removeCellFromCache(row, column);
    },

    invalidateCells: function(rows, columns) {
        if (!Util.islist(rows) || !Util.islist(columns)) {
            return;
        }
        var self = this;
        rows.forEach(function(row) {
            columns.forEach(function(column) {
                self.removeCellFromCache(row, column);
            });
        });
    },

    //=============================================================================

    invalidateAll: function() {
        var allCacheRows = this.getAllCacheRows();
        this.invalidateRows(allCacheRows);
    }

};

module.exports = Invalidate;

/***/ }),

/***/ "./src/grid-view/view/view-navigate.js":
/*!*********************************************!*\
  !*** ./src/grid-view/view/view-navigate.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var Navigate = {

    keyTabHandler: function(e) {
        if (e.shiftKey) {
            return this.navigate("prev");
        }
        return this.navigate("next");
    },

    keyEnterHandler: function(e) {

        if (this.currentEditor) {
            if (this.currentEditor.toString() !== "text") {
                return false;
            }
            this.commitEditAndSetFocus();
            return true;
        }

        if (this.commitCurrentEdit()) {
            this.createCellEditor();
            return true;
        }
    },

    keyEscHandler: function(e) {
        this.cancelEditAndSetFocus();
        return false;
    },

    //============================================================================================

    keyPageUpHandler: function(e) {
        return this.scrollpane.keyPageUpHandler(e);
    },

    keyPageDownHandler: function(e) {
        return this.scrollpane.keyPageDownHandler(e);
    },

    keyEndHandler: function(e) {
        return this.scrollpane.keyEndHandler(e);
    },

    keyHomeHandler: function(e) {
        return this.scrollpane.keyHomeHandler(e);
    },

    //============================================================================================

    keyLeftHandler: function(e) {
        if (this.currentEditor) {
            return this.navigate("left");
        }
        if (this.hideScrollPane) {
            return this.scrollpaneFrozen.keyLeftHandler(e);
        }
        return this.scrollpane.keyLeftHandler(e);
    },

    keyUpHandler: function(e) {
        if (this.currentEditor) {
            return this.navigate("up");
        }
        return this.scrollpane.keyUpHandler(e);
    },

    keyRightHandler: function(e) {
        if (this.currentEditor) {
            return this.navigate("right");
        }
        if (this.hideScrollPane) {
            return this.scrollpaneFrozen.keyRightHandler(e);
        }
        return this.scrollpane.keyRightHandler(e);
    },

    keyDownHandler: function(e) {
        if (this.currentEditor || e.autoEditNextOnEnter) {
            return this.navigate("down");
        }
        return this.scrollpane.keyDownHandler(e);
    },

    //============================================================================================

    gotoRight: function(row, column, posX) {
        var columns = this.columns;
        if (column >= columns.length) {
            return null;
        }

        do {
            column += 1;
        } while (column < columns.length && !this.isCellEditable(row, column));

        if (column < columns.length) {
            return {
                "row": row,
                "column": column,
                "posX": column
            };
        }
        return null;
    },
    /* eslint-disable complexity*/
    gotoLeft: function(row, column, posX) {

        if (column <= 0) {
            return null;
        }

        var firstFocusableCell = this.findFirstFocusableCell(row);
        if (firstFocusableCell === null || firstFocusableCell >= column) {
            return null;
        }

        /* jshint ignore:start */
        var prev = {
            "row": row,
            "column": firstFocusableCell,
            "posX": firstFocusableCell
        };

        var pos;
        while (true) {
            pos = this.gotoRight(prev.row, prev.column, prev.posX);
            if (!pos) {
                return null;
            }
            if (pos.column >= column) {
                return prev;
            }
            prev = pos;
        }
        /* jshint ignore:end */
    },
    /* eslint-enable*/
    gotoDown: function(row, column, posX) {
        var prevCell;
        var dataLength = this.getRowsLength();
        while (true) {
            if (++row >= dataLength) {
                return null;
            }

            prevCell = column = 0;
            while (column <= posX) {
                prevCell = column;
                column += 1;
            }

            if (this.isCellEditable(row, prevCell)) {
                return {
                    "row": row,
                    "column": prevCell,
                    "posX": posX
                };
            }
        }
    },

    gotoUp: function(row, column, posX) {
        var prevCell;
        while (true) {
            if (--row < 0) {
                return null;
            }

            prevCell = column = 0;
            while (column <= posX) {
                prevCell = column;
                column += 1;
            }

            if (this.isCellEditable(row, prevCell)) {
                return {
                    "row": row,
                    "column": prevCell,
                    "posX": posX
                };
            }
        }
    },
    /* eslint-disable complexity*/
    gotoNext: function(row, column, posX) {
        /* jshint ignore:start */
        if (row === null && column === null) {
            row = column = posX = 0;
            if (this.isCellEditable(row, column)) {
                return {
                    "row": row,
                    "column": column,
                    "posX": column
                };
            }
        }
        /* jshint ignore:end */
        var pos = this.gotoRight(row, column, posX);
        if (pos) {
            return pos;
        }

        var firstFocusableCell;
        var dataLength = this.getRowsLength();
        while (++row < dataLength) {
            firstFocusableCell = this.findFirstFocusableCell(row);
            if (firstFocusableCell !== null) {
                return {
                    "row": row,
                    "column": firstFocusableCell,
                    "posX": firstFocusableCell
                };
            }
        }
        return null;
    },

    gotoPrev: function(row, column, posX) {

        /* jshint ignore:start */
        if (row === null && column === null) {
            row = this.getRowsLength() - 1;
            column = posX = this.columns.length - 1;
            if (this.isCellEditable(row, column)) {
                return {
                    "row": row,
                    "column": column,
                    "posX": column
                };
            }
        }
        /* jshint ignore:end */

        var pos;
        var lastSelectableCell;
        while (!pos) {
            pos = this.gotoLeft(row, column, posX);
            if (pos) {
                break;
            }
            if (--row < 0) {
                return null;
            }

            column = 0;
            lastSelectableCell = this.findLastFocusableCell(row);
            if (lastSelectableCell !== null) {
                pos = {
                    "row": row,
                    "column": lastSelectableCell,
                    "posX": lastSelectableCell
                };
            }
        }
        return pos;
    },


    navigate: function(dir) {

        if (!this.activeNode && dir !== "prev" && dir !== "next") {
            return false;
        }

        if (this.currentEditor && !this.commitCurrentEdit()) {
            return true;
        }

        this.setFocus();

        var tabbingDirections = {
            "up": -1,
            "down": 1,
            "left": -1,
            "right": 1,
            "prev": -1,
            "next": 1
        };
        this.tabbingDirection = tabbingDirections[dir];

        /* jshint ignore:start */
        var stepFunctions = {
            "up": this.gotoUp,
            "down": this.gotoDown,
            "left": this.gotoLeft,
            "right": this.gotoRight,
            "prev": this.gotoPrev,
            "next": this.gotoNext
        };

        var stepFn = stepFunctions[dir];
        if (stepFn) {
            var pos = stepFn.call(this, this.activeRow, this.activeColumn, this.activePosX);
            if (pos) {
                if (this.hasFrozenRows && this.option.frozenBottom && pos.row === this.getRowsLength()) {
                    return false;
                }
                this.setActiveCell(pos.row, pos.column);
                return true;
            }
        }
        /* jshint ignore:end */

        this.setActiveCell(this.activeRow, this.activeColumn);
        return false;

    }
    /* eslint-enable*/
};

module.exports = Navigate;

/***/ }),

/***/ "./src/grid-view/view/view-node.js":
/*!*****************************************!*\
  !*** ./src/grid-view/view/view-node.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../../core/query.js */ "./src/core/query.js");

var CssRules = {

    removeNode: function(node) {
        if (node && node.parentNode) {
            node.parentNode.removeChild(node);
        }
    },

    appendNode: function(parentNode, node) {
        if (parentNode && node) {
            parentNode.appendChild(node);
        }
    },

    find: function(context, container) {
        return $(container || this.$container).find(context);
    },

    getNodeIndex: function(node) {
        var index = parseInt($(node).attr("index"), 10);
        return index;
    },

    getTextWidth: function(text) {

        var $text = $("<span/>").css("visibility", "hidden").html(text).appendTo(this.$container);
        var width = $text.width();
        $text.remove();

        return width;
    }

};

module.exports = CssRules;

/***/ }),

/***/ "./src/grid-view/view/view-resize.js":
/*!*******************************************!*\
  !*** ./src/grid-view/view/view-resize.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var ViewResize = {

    resize: function(w, h) {
        if (!this.initialized) {
            return;
        }

        if (arguments.length === 1) {
            if (typeof(w) === "object") {
                this.$container.css(w);
            } else {
                this.$container.css({
                    width: w
                });
            }
        } else if (arguments.length === 2) {
            this.$container.css({
                width: w,
                height: h
            });
        }

        this.updateContainerSize();

        this.updateHeaderSize();
        this.updateBodyerSize();

        this.render();
    },

    //=======================================================================================

    updateContainerSize: function() {
        this.containerWidth = this.$container.width();
        this.containerHeight = this.$container.height();
        //same width
        this.headerWidth = this.containerWidth;
        this.bodyerWidth = this.containerWidth;
    },

    //==========================================================================================
    //only height need update, width is same as container always
    updateHeaderSize: function() {

        //update width
        this.$paneHeader.width(this.headerWidth);

        //update height
        this.headerHeight = 0;
        //require a valid container height
        if (this.option.showHeader) {
            if (this.containerHeight > 0 || this.option.autoHeight) {
                this.updateHeaderTableHeight();
            }
        }

        this.$paneHeader.height(this.headerHeight);

    },

    updateHeaderTableHeight: function() {
        //set header table same height
        var TL = this.$headerL.find(".tg-header-table");
        var TR = this.$headerR.find(".tg-header-table");

        //reset height
        TL.css({
            display: "block",
            height: ""
        });
        TR.css({
            display: "block",
            height: ""
        });

        var TLH = TL.height();
        var TRH = TR.height();
        var TH = Math.max(TLH, TRH);

        //fixed height
        TL.css({
            display: "",
            height: TH
        });
        TR.css({
            display: "",
            height: TH
        });

        this.headerHeight = TH;

    },

    //=======================================================================================

    // update pane height for all rows
    // for collapse and expand too
    updateBodyerSize: function(updateCssRules) {

        //update 3 status: h/v scrollbar and hide scrollpane
        this.updateScrollStatus();

        //update bodyer size
        //bodyer height depends on header height and auto height
        this.bodyerHeight = this.containerHeight - this.headerHeight;
        this.$paneBodyer.width(this.bodyerWidth);
        this.$paneBodyer.height(this.bodyerHeight);

        //for update css rules
        this.canvasWidthChanged = false;

        //update pane size
        this.updatePaneWidth();
        this.updatePaneHeight();

        // update width first
        this.updateCanvasWidth();
        // then update height
        this.updateCanvasHeight();

        // update scrollpane
        this.updateScrollpane();

        //update css rules cache if canvas width changed
        if (updateCssRules || this.canvasWidthChanged) {
            this.updateCssRules();
        }

    },

    //=======================================================================================

    updatePaneWidth: function() {

        this.updateScrollHeaderVisibility();

        //no frozen pane
        var paneWidthL = this.bodyerWidth;
        var paneWidthR = 0;

        //has frozen pane
        if (this.hasFrozenColumns) {
            paneWidthL = this.columnsWidthL;
            paneWidthR = this.bodyerWidth - paneWidthL;

            if (this.hideScrollPane) {
                var scrollbarW = this.getScrollBarWidth();
                if (paneWidthR < scrollbarW) {
                    paneWidthR = scrollbarW;
                }
                paneWidthL = Math.max(0, this.bodyerWidth - paneWidthR);
            }
        }

        this.paneWidthL = paneWidthL;
        this.paneWidthR = paneWidthR;

        //console.log("paneWidthL: " + paneWidthL, "paneWidthR: " + paneWidthR);

        this.$paneHeaderL.css({
            left: 0,
            width: this.paneWidthL
        });
        this.$paneHeaderR.css({
            left: this.paneWidthL,
            width: this.paneWidthR
        });

        this.$paneTopL.css({
            left: 0,
            width: this.paneWidthL
        });
        this.$paneTopR.css({
            left: this.paneWidthL,
            width: this.paneWidthR
        });

        this.$paneBottomL.css({
            left: 0,
            width: this.paneWidthL
        });
        this.$paneBottomR.css({
            left: this.paneWidthL,
            width: this.paneWidthR
        });

    },

    updateScrollHeaderVisibility: function() {
        if (this.previousHasScrollHeader === this.hideScrollPane) {
            return;
        }
        this.previousHasScrollHeader = this.hideScrollPane;

        //update header pane right
        var headerR = this.$headerR.get(0);
        if (this.hideScrollPane) {
            headerR.style.visibility = "hidden";
        } else {
            headerR.style.visibility = "";
        }

        //update hidden columns
        this.updateScrollPaneColumnsHidden(this.hideScrollPane);

        //always changed if hide/show scroll header
        this.canvasWidthChanged = true;

    },

    //update tg_hidden to set display to none in css rule 
    updateScrollPaneColumnsHidden: function(hidden) {
        var frozenColumn = this.option.frozenColumn;
        var columns = this.columns;
        for (var i = frozenColumn + 1, l = columns.length - 1; i < l; i++) {
            var column = columns[i];
            column.tg_hidden = hidden;
        }
    },

    //=======================================================================================

    updatePaneHeight: function() {

        var paneHeightT = this.bodyerHeight;
        var paneHeightB = 0;

        if (this.hasFrozenRows) {
            if (this.option.frozenBottom) {
                var scrollbarH = this.getScrollBarHeight();
                paneHeightT = this.bodyerHeight - this.frozenRowsHeight - scrollbarH;
                paneHeightB = this.frozenRowsHeight + scrollbarH;
            } else {
                paneHeightT = this.frozenRowsHeight;
                paneHeightB = this.bodyerHeight - this.frozenRowsHeight;
            }
        }

        this.paneHeightT = paneHeightT;
        this.paneHeightB = paneHeightB;

        //resize pane
        this.$paneTopL.css({
            top: 0,
            height: this.paneHeightT
        });
        this.$paneTopR.css({
            top: 0,
            height: this.paneHeightT
        });
        this.$paneBottomL.css({
            top: this.paneHeightT,
            height: this.paneHeightB
        });
        this.$paneBottomR.css({
            top: this.paneHeightT,
            height: this.paneHeightB
        });

    },

    //=======================================================================================

    updateCanvasWidth: function() {

        //new canvas width
        var canvasWidthL = this.columnsWidthL;
        var canvasWidthR = this.columnsWidthR;

        if (canvasWidthL !== this.canvasWidthL || canvasWidthR !== this.canvasWidthR) {
            this.canvasWidthL = canvasWidthL;
            this.canvasWidthR = canvasWidthR;
            this.canvasWidthChanged = true;
        }

        //console.log("canvasWidthL: " + this.canvasWidthL, "canvasWidthR: " + this.canvasWidthR);

        //scrollStatusChanged to fix frozen row right blank
        if (this.canvasWidthChanged || this.scrollStatusChanged) {
            this.updateHeaderCanvasWidth();
            this.updateBodyerCanvasWidth();
        }

    },

    updateCanvasHeight: function() {

        var option = this.option;

        //new canvas height
        var canvasHeightT;
        var canvasHeightB;

        if (this.hasFrozenRows) {
            if (option.frozenBottom) {
                canvasHeightT = this.scrollRowsHeight;
                canvasHeightB = this.frozenRowsHeight;
            } else {
                canvasHeightT = this.frozenRowsHeight;
                canvasHeightB = this.scrollRowsHeight;
            }
        } else {
            canvasHeightT = this.totalRowsHeight;
            canvasHeightB = 0;
        }

        this.canvasHeightT = canvasHeightT;
        this.canvasHeightB = canvasHeightB;

        this.updateBodyerCanvasHeight();

    },

    //=======================================================================================

    updateHeaderCanvasWidth: function() {
        //always add scroll bar width
        this.$headerL.width(this.canvasWidthL);
        this.$headerR.width(this.canvasWidthR);
    },

    updateBodyerCanvasWidth: function() {
        this.$canvasTopL.width(this.canvasWidthL);
        this.$canvasBottomL.width(this.canvasWidthL);
        this.$canvasTopR.width(this.canvasWidthR);
        this.$canvasBottomR.width(this.canvasWidthR);
    },

    updateBodyerCanvasHeight: function() {
        this.$canvasTopL.height(this.canvasHeightT);
        this.$canvasTopR.height(this.canvasHeightT);
        this.$canvasBottomL.height(this.canvasHeightB);
        this.$canvasBottomR.height(this.canvasHeightB);
    }


};

module.exports = ViewResize;

/***/ }),

/***/ "./src/grid-view/view/view-row-cache.js":
/*!**********************************************!*\
  !*** ./src/grid-view/view/view-row-cache.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var RowCache = {

    createRowCache: function(rowIndex) {
        var rowCache = {
            rowNodes: null,
            cellNodes: []
        };
        this.rowsCache[rowIndex] = rowCache;
        return rowCache;
    },

    getRowCache: function(rowIndex) {
        var rowsCache = this.rowsCache[rowIndex];
        return rowsCache;
    },

    //=============================================================================

    //there are 2 rows if hasFrozenRows (left and right)
    getRowNodes: function(rowIndex) {
        var rowCache = this.getRowCache(rowIndex);
        if (rowCache) {
            return rowCache.rowNodes;
        }
        return null;
    },

    getAllCacheRows: function() {
        var allCacheRows = Object.keys(this.rowsCache);
        return allCacheRows;
    },

    //=============================================================================

    getCellNodes: function(rowIndex) {
        var rowCache = this.getRowCache(rowIndex);
        if (rowCache) {
            return rowCache.cellNodes;
        }
        return null;
    },

    getCellNode: function(rowIndex, columnIndex) {
        var cellNodes = this.getCellNodes(rowIndex);
        if (cellNodes) {
            return cellNodes[columnIndex];
        }
        return null;
    },

    //=============================================================================

    removeRowFromCache: function(rowIndex) {
        var rowNodes = this.getRowNodes(rowIndex);
        if (rowNodes) {
            this.removeNode(rowNodes[0]);
            this.removeNode(rowNodes[1]);
        }
        delete this.rowsCache[rowIndex];
    },

    removeCellFromCache: function(rowIndex, columnIndex) {
        var cellNodes = this.getCellNodes(rowIndex);
        if (cellNodes) {
            this.removeNode(cellNodes[columnIndex]);
            delete cellNodes[columnIndex];
        }
    },

    //=============================================================================

    //clean handler, remove out of range
    clearRowCacheByRange: function(range) {
        var rowInfo = range.rowInfo;
        var columnInfo = range.columnInfo;

        var allCacheRows = this.getAllCacheRows();
        var self = this;

        allCacheRows.forEach(function(rowIndex) {
            if (rowInfo[rowIndex]) {
                //remove out of columns
                var cellNodes = self.getCellNodes(rowIndex);
                if (cellNodes) {
                    for (var i = 0, l = cellNodes.length; i < l; i++) {
                        if (!columnInfo[i]) {
                            self.removeNode(cellNodes[i]);
                            delete cellNodes[i];
                        }
                    }
                }
                return;
            }
            //remove out of rows (include all columns)
            self.removeRowFromCache(rowIndex);
        });
    }

};

module.exports = RowCache;

/***/ }),

/***/ "./src/grid-view/view/view-rows.js":
/*!*****************************************!*\
  !*** ./src/grid-view/view/view-rows.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../../core/query.js */ "./src/core/query.js");
var Util = __webpack_require__(/*! ../../core/util.js */ "./src/core/util.js");
var Rows = {

    setRows: function(rows) {
        if (!Util.islist(rows)) {
            rows = [];
        }
        this.rows = rows;
        return this;
    },

    getRows: function() {
        return this.rows;
    },

    //==========================================================================

    getRowsLength: function() {
        return this.rows.length;
    },

    getRowItem: function(rowIndex) {
        var rowData = this.rows[rowIndex];
        return rowData;
    },

    getCellValue: function(rowItem, columnItem) {
        return rowItem[columnItem.id];
    },

    //=============================================================================

    isFrozenRow: function(rowIndex) {
        if (this.hasFrozenRows && rowIndex <= this.option.frozenRow) {
            return true;
        }
        return false;
    },

    //==========================================================================

    getPreRenderRowList: function(rowList) {
        var list = [];
        if (!rowList.length) {
            return list;
        }
        for (var i = 0, l = rowList.length; i < l; i++) {
            var rowIndex = rowList[i];
            if (this.getRowCache(rowIndex)) {
                continue;
            }
            this.createRowCache(rowIndex);
            list.push(rowIndex);
        }
        return list;
    },

    renderRows: function(rowList) {

        var rows = this.getPreRenderRowList(rowList);
        if (!rows.length) {
            return;
        }

        var needToReselectCell = false;

        var self = this;
        rows.forEach(function(rowIndex) {

            self.renderRowNodes(rowIndex);

            if (self.activeNode && self.activeRow === rowIndex) {
                needToReselectCell = true;
            }
        });

        if (needToReselectCell) {
            this.activeNode = this.getCellNode(this.activeRow, this.activeColumn);
        }

    },

    createRowNode: function(rowData, rowClass, rowTop) {
        var rowNode = document.createElement("div");
        rowNode.className = rowClass;
        rowNode.style.top = rowTop + "px";
        rowNode.setAttribute("index", rowData.tg_index);
        return rowNode;
    },

    renderRowNodes: function(rowIndex) {

        var rowData = this.getRowItem(rowIndex);
        if (!rowData) {
            return;
        }

        var rowNodes = $();

        var vPos = this.getRowVPos(rowIndex);
        var rowClass = this.getRowClass(rowData);
        var rowTop = this.getRowTop(rowIndex);

        //left
        var rowNodeL = this.createRowNode(rowData, rowClass, rowTop);
        var $canvasL = this.getRowCanvas(vPos, "left");
        $canvasL.append(rowNodeL);
        rowNodes = rowNodes.add(rowNodeL);

        //right
        if (this.hasFrozenColumns) {
            var rowNodeR = this.createRowNode(rowData, rowClass, rowTop);
            var $canvasR = this.getRowCanvas(vPos, "right");
            $canvasR.append(rowNodeR);
            rowNodes = rowNodes.add(rowNodeR);
        }

        var rowCache = this.getRowCache(rowIndex);
        if (rowCache) {
            rowCache.rowNodes = rowNodes;
        }

    },

    //==========================================================================
    /* eslint-disable max-statements,complexity */
    getRowClass: function(rowData) {

        var rowIndex = rowData.tg_index;

        var rowCss = ["tg-row"];

        //level class
        rowCss.push("tg-level-" + rowData.tg_level);

        //odd/even line, can NOT use :nth-child(even/odd), because not all rows are rendered
        rowCss.push(rowIndex % 2 === 1 ? "tg-odd" : "tg-even");

        /* jshint ignore:start */
        //pane index first and last
        if (rowIndex === this.option.frozenRow + 1) {
            rowCss.push("tg-pane-first");
        }
        //not else, if only one line
        if (rowIndex === this.rows.length - 1) {
            rowCss.push("tg-pane-last");
        }

        //list index first and last
        if (rowData.tg_list_index === 0) {
            rowCss.push("tg-list-first");
        }
        if (rowData.tg_list_index === rowData.tg_list_length - 1) {
            rowCss.push("tg-list-last");
        }

        //group, has subs
        if (rowData.tg_group || rowData.rowType === "group") {
            rowCss.push("tg-group");

            //collapsed and expanded status for group
            if (rowData.collapsed || !rowData.tg_subs_length) {
                rowCss.push("tg-collapsed");
            } else {
                rowCss.push("tg-expanded");
            }

        }
        /* jshint ignore:end */

        //custom type class name
        if (rowData.rowType) {
            rowCss.push("tg-" + rowData.rowType);
        }

        //custom class name
        if (rowData.rowClass) {
            rowCss.push(rowData.rowClass);
        }

        //all row status
        var rowStatus = [
            "selected",
            "focused",
            "highlight",
            "draggable",
            "waiting"
        ];

        rowStatus.forEach(function(status) {
            if (rowData[status]) {
                rowCss.push("tg-" + status);
            }
        });

        //active row
        if (rowIndex === this.activeRow) {
            rowCss.push("tg-active");
        }

        var rowClass = rowCss.join(" ");

        return rowClass;
    },
    /* eslint-enable*/
    getRowTop: function(rowIndex) {
        var o = this.option;

        var top = o.rowHeight * rowIndex;

        top -= this.scrollTopOffset;

        if (this.hasFrozenRows && rowIndex > o.frozenRow) {
            top -= this.frozenRowsHeight;
        }

        return top;

    },

    getRowVPos: function(rowIndex) {
        var option = this.option;
        var vPos = "top";
        //frozen rows
        if (this.hasFrozenRows) {
            //frozened
            if (rowIndex <= option.frozenRow) {
                if (option.frozenBottom) {
                    vPos = "bottom";
                }
            } else {
                if (!option.frozenBottom) {
                    vPos = "bottom";
                }
            }
        }
        return vPos;
    },

    getRowCanvas: function(vPos, hPos) {
        if (vPos === "top") {
            if (hPos === "left") {
                return this.$canvasTopL;
            } else {
                return this.$canvasTopR;
            }
        } else {
            if (hPos === "left") {
                return this.$canvasBottomL;
            } else {
                return this.$canvasBottomR;
            }
        }
    }

};

module.exports = Rows;

/***/ }),

/***/ "./src/grid-view/view/view-scroll.js":
/*!*******************************************!*\
  !*** ./src/grid-view/view/view-scroll.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var E = __webpack_require__(/*! ../../core/event-type.js */ "./src/core/event-type.js");
var Util = __webpack_require__(/*! ../../core/util.js */ "./src/core/util.js");
var Scroll = {
    //scroll public API

    //========================================================================================
    //set scroll by postion

    setScroll: function(x, y) {
        if (x === this.scrollLeft && y === this.scrollTop) {
            return this;
        }
        this.scrollLeft = x;
        this.scrollTop = y;
        this.scrollHandler();
        return this;
    },

    setScrollLeft: function(x) {
        if (x === this.scrollLeft) {
            return this;
        }
        this.scrollLeft = x;
        this.scrollHandler();
        return this;
    },

    setScrollTop: function(y) {
        if (y === this.scrollTop) {
            return this;
        }
        this.scrollTop = y;
        this.scrollHandler();
        return this;
    },

    //========================================================================================
    //get scroll position

    getScrollRowPosition: function(rowItem) {
        if (!rowItem) {
            return null;
        }
        var o = this.option;
        var rowIndex = rowItem.tg_index;
        if (this.hasFrozenRows) {
            rowIndex -= o.frozenRow + 1;
        }
        if (rowIndex >= 0) {
            var rowPosition = rowIndex * o.rowHeight;
            return rowPosition;
        }
        return null;
    },

    getScrollColumnPosition: function(columnItem) {
        if (!columnItem) {
            return null;
        }
        var x = columnItem.tg_left;
        if (this.hasFrozenColumns) {
            x -= this.canvasWidthL;
        }
        //console.log(columnItem);
        if (x >= 0) {
            return x;
        }
        return null;
    },

    //========================================================================================
    //scroll to item

    scrollToItem: function(rowItem, columnItem) {
        this.scrollToChanged = false;
        this.scrollToRowHandler(rowItem);
        this.scrollToColumnHandler(columnItem);
        if (!this.scrollToChanged) {
            return this;
        }
        this.scrollHandler();
        return this;
    },

    scrollToRowHandler: function(rowItem) {
        if (!rowItem) {
            return;
        }
        var rowPosition = this.getScrollRowPosition(rowItem);
        if (!Util.isnum(rowPosition)) {
            return;
        }
        if (rowPosition === this.scrollTop) {
            return;
        }
        this.scrollTop = rowPosition;
        this.scrollToChanged = true;
    },

    scrollToColumnHandler: function(columnItem) {
        if (!columnItem) {
            return;
        }
        var columnPosition = this.getScrollColumnPosition(columnItem);
        if (!Util.isnum(columnPosition)) {
            return;
        }
        if (columnPosition === this.scrollLeft) {
            return;
        }
        this.scrollLeft = columnPosition;
        this.scrollToChanged = true;
    },

    //========================================================================================
    //scroll item into view

    scrollItemIntoView: function(rowItem, columnItem) {
        this.scrollIntoViewChanged = false;
        this.scrollRowIntoViewHandler(rowItem);
        this.scrollColumnIntoViewHandler(columnItem);
        if (!this.scrollIntoViewChanged) {
            return this;
        }
        this.scrollHandler();
        return this;
    },

    scrollRowIntoViewHandler: function(rowItem) {
        if (!rowItem) {
            return;
        }
        var rowPosition = this.getScrollRowPosition(rowItem);
        if (!Util.isnum(rowPosition)) {
            return;
        }

        //top in view
        if (rowPosition < this.scrollTop) {
            this.scrollTop = rowPosition;
            this.scrollIntoViewChanged = true;
            return;
        }

        //bottom in view
        var rowHeight = this.option.rowHeight;
        var scrollViewHeight = this.getScrollViewHeight();

        if (rowPosition + rowHeight > this.scrollTop + scrollViewHeight) {
            var top = rowPosition - (scrollViewHeight - rowHeight);
            this.scrollTop = top;
            this.scrollIntoViewChanged = true;
            return;
        }

    },

    scrollColumnIntoViewHandler: function(columnItem) {
        if (!columnItem) {
            return;
        }
        var columnPosition = this.getScrollColumnPosition(columnItem);
        if (!Util.isnum(columnPosition)) {
            return;
        }

        //left in view
        if (columnPosition < this.scrollLeft) {
            this.scrollLeft = columnPosition;
            this.scrollIntoViewChanged = true;
            return;
        }

        //right in view
        var columnWidth = columnItem.width;
        var scrollViewWidth = this.getScrollViewWidth();
        if (columnPosition + columnWidth > this.scrollLeft + scrollViewWidth) {
            var left = columnPosition - (scrollViewWidth - columnWidth);
            this.scrollLeft = left;
            this.scrollIntoViewChanged = true;
            return;
        }

    },

    //========================================================================================
    //scroll handler by scrollLeft and scrollTop

    scrollHandler: function() {

        //sets new position with team sync
        this.scrollpane.setPosition(this.scrollLeft, this.scrollTop);
        //require update scrollTopOffset when scrollTop changed
        this.scrollTopOffset = this.scrollpane.getScrollTopOffset();

        this.scrollRenderHandler();
    },

    scrollRenderHandler: function() {

        if (this.previousScrollTopOffset !== this.scrollTopOffset) {
            this.previousScrollTopOffset = this.scrollTopOffset;
            this.updateCacheTopOffset();
        }

        if (this.previousScrollLeft === this.scrollLeft && this.previousScrollTop === this.scrollTop) {
            return;
        }

        var distanceLeft = Math.abs(Util.tonum(this.scrollLeft - this.previousScrollLeft));
        var distanceTop = Math.abs(Util.tonum(this.scrollTop - this.previousScrollTop));

        this.previousScrollLeft = this.scrollLeft;
        this.previousScrollTop = this.scrollTop;

        this.debonceRenderHandler(distanceLeft, distanceTop);

        this.trigger(E.onScroll, {
            scrollLeft: this.scrollLeft,
            scrollTop: this.scrollTop
        });

    },

    debonceRenderHandler: function(distanceLeft, distanceTop) {
        //check if need render
        //time < 20ms
        //distance < 20px
        var timestamp_now = new Date().getTime();
        var d = timestamp_now - this.timestamp_render;
        if (d < 20 || (distanceLeft < 20 && distanceTop < 20)) {
            //console.log("< 20");
            this.render();
            return false;
        }

        this.renderNow();
        return true;
    },

    //max height fixing
    updateCacheTopOffset: function() {
        //console.log("updateCacheTopOffset", this.scrollTopOffset);
        var self = this;
        var allCacheRows = this.getAllCacheRows();
        allCacheRows.forEach(function(rowIndex) {
            //do NOT update frozen row
            if (rowIndex <= self.option.frozenRow) {
                return;
            }
            var rowNodes = self.getRowNodes(rowIndex);
            if (rowNodes) {
                var rowTop = self.getRowTop(rowIndex);
                rowNodes.css("top", rowTop);
            }
        });

    },

    //====================================================================================

    getScrollViewWidth: function() {
        var scrollViewWidth = this.getScrollPaneWidth();
        scrollViewWidth -= this.getScrollBarWidth();
        return scrollViewWidth;
    },

    getScrollViewHeight: function() {
        var scrollViewHeight = this.getScrollPaneHeight();
        if (!this.option.frozenBottom) {
            scrollViewHeight -= this.getScrollBarHeight();
        }
        return scrollViewHeight;
    },

    getScrollPaneWidth: function() {
        var scrollPaneWidth = this.scrollpane.width();
        return scrollPaneWidth;
    },

    getScrollPaneHeight: function() {
        var scrollpaneHeight = this.scrollpane.height();
        return scrollpaneHeight;
    },

    getScrollBarWidth: function() {
        if (this.hasVScroll) {
            return this.scrollbarSizeV;
        }
        return 0;
    },

    getScrollBarHeight: function() {
        if (this.hasHScroll) {
            return this.scrollbarSizeH;
        }
        return 0;
    },

    getScrollLeft: function() {
        var scrollLeft = this.scrollpane.getScrollLeft();
        return scrollLeft;
    },

    getScrollTop: function() {
        var scrollTop = this.scrollpane.getScrollTop();
        return scrollTop;
    }

};

module.exports = Scroll;

/***/ }),

/***/ "./src/grid-view/view/view-scrollpane-status.js":
/*!******************************************************!*\
  !*** ./src/grid-view/view/view-scrollpane-status.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var E = __webpack_require__(/*! ../../core/event-type.js */ "./src/core/event-type.js");
var Util = __webpack_require__(/*! ../../core/util.js */ "./src/core/util.js");
var ViewLayout = {

    //update all scroll bar status first
    //h scroll depends on blank column
    //v scroll depends on rows num
    updateScrollStatus: function() {

        //global info, reset blank column
        this.updateGlobalScrollInfo();

        //update scroll status
        this.updateHScrollStatus();
        this.updateVScrollStatus();

        //h scroll fix again if has v scroll
        this.updateBlankColumnWidth();

        this.scrollStatusChanged = false;

        if (this.previousHasHScroll !== this.hasHScroll || this.previousHasVScroll !== this.hasVScroll) {
            this.scrollStatusChanged = true;

            this.previousHasHScroll = this.hasHScroll;
            this.previousHasVScroll = this.hasVScroll;

            this.trigger(E.onScrollStatusChanged, {
                hasHScroll: this.hasHScroll,
                hasVScroll: this.hasVScroll
            });

        }

        //console.log("scrollStatusChanged", this.scrollStatusChanged);

        //all for update those 3 status
        //console.log("hasHScroll: " + this.hasHScroll, "hasVScroll: " + this.hasVScroll, "hideScrollPane: " + this.hideScrollPane);

    },

    //=======================================================================================

    updateGlobalScrollInfo: function() {

        //all rows height
        this.totalRowsLength = this.getRowsLength();
        this.totalRowsHeight = this.totalRowsLength * this.option.rowHeight;

        //scroll rows height, require frozenRowsHeight on init pane
        this.scrollRowsHeight = this.totalRowsHeight - this.frozenRowsHeight;

        //zero height fixing
        this.totalRowsHeight = Math.max(this.totalRowsHeight, 1);
        this.scrollRowsHeight = Math.max(this.scrollRowsHeight, 1);

        //clean if outside of the data range
        this.invalidateRowsFrom(this.totalRowsLength);
        if (this.activeNode && this.activeRow > this.totalRowsLength - 1) {
            this.resetActiveCell();
        }

    },

    //=======================================================================================

    updateHScrollStatus: function() {
        //h scroll status
        this.hasHScroll = true;

        //reset column width and update width again
        this.updateColumnsWidth();

        this.updateHideScrollPaneStatus();

        if (this.hideScrollPane) {
            return;
        }

        //console.log("containerWidth: " + this.containerWidth, "columnsWidth: " + this.columnsWidth);

        var blankColumnWidth = this.containerWidth - this.columnsWidth;

        //console.log("blankColumnWidth: " + blankColumnWidth, "blankColumn.width: " + this.blankColumn.width);

        if (blankColumnWidth >= 0) {
            this.hasHScroll = false;
        }

    },

    updateHideScrollPaneStatus: function() {

        this.hideScrollPane = false;

        if (this.hasFrozenColumns) {
            //has frozen pane
            var scrollPanewidth = this.bodyerWidth - this.columnsWidthL;
            var scrollPaneMinWidth = this.getScrollPaneMinWidth();
            if (scrollPanewidth < scrollPaneMinWidth) {
                //hide right scrollpane
                this.hideScrollPane = true;
                this.hasHScroll = false;
                var scrollbarW = this.getScrollBarWidth();
                if (scrollPanewidth < scrollbarW) {
                    //has left h scroll
                    this.hasHScroll = true;
                }
            }
        }
    },

    getScrollPaneMinWidth: function() {
        var scrollPaneMinWidth = this.option.scrollPaneMinWidth;
        if (!Util.isnum(scrollPaneMinWidth) || scrollPaneMinWidth < 0) {
            scrollPaneMinWidth = this.scrollbarSizeV;
        }
        return scrollPaneMinWidth;
    },

    //=======================================================================================

    updateVScrollStatus: function() {
        //v scroll status
        this.hasVScroll = true;

        var scrollbarH = this.getScrollBarHeight();

        if (this.option.autoHeight) {
            this.hasVScroll = false;

            //update container height again
            this.containerHeight = this.headerHeight + this.totalRowsHeight + scrollbarH;
            this.$container.height(this.containerHeight);

        } else {

            var tempBodyerHeight = this.containerHeight - this.headerHeight - scrollbarH;
            if (tempBodyerHeight >= this.totalRowsHeight) {
                this.hasVScroll = false;
            }

        }

    },

    //=======================================================================================

    updateColumnsWidth: function() {

        //reset blank column
        this.blankColumn.width = 0;

        var option = this.option;
        var columns = this.columns;

        //update left right total width
        var columnsWidthL = 0;
        var columnsWidthR = 0;

        var len = columns.length;
        //x position
        var left = 0;
        for (var i = 0; i < len; i++) {
            var column = columns[i];
            column.tg_left = left;
            var width = column.width;
            if (width > 0) {
                left += width;
                if (this.hasFrozenColumns && i > option.frozenColumn) {
                    columnsWidthR += width;
                } else {
                    columnsWidthL += width;
                }
            }
        }

        this.columnsWidthL = columnsWidthL;
        this.columnsWidthR = columnsWidthR;

        //total width
        this.columnsWidth = columnsWidthL + columnsWidthR;

    },

    /* eslint-disable complexity */
    updateBlankColumnWidth: function() {

        var blankColumnWidth = this.containerWidth - this.columnsWidth;
        if (this.hasVScroll && !this.hasHScroll) {
            blankColumnWidth = this.containerWidth - this.columnsWidth - this.scrollbarSizeV;
        }

        //console.log(blankColumnWidth);

        //fix h scroll status again, and fix columns width 
        if (!this.hasHScroll) {

            if (blankColumnWidth >= 0) {

                //no h scroll, has blank or blank = 0
                if (this.hasFrozenColumns) {
                    this.columnsWidthR += blankColumnWidth;
                } else {
                    this.columnsWidthL += blankColumnWidth;
                }
                this.blankColumn.width = blankColumnWidth;

            } else {
                //has h scroll, fix status again
                this.hasHScroll = true;
            }

        }

        //console.log("columnsWidthL: " + this.columnsWidthL, "columnsWidthR: " + this.columnsWidthR);

    }
    /* eslint-enable */

};

module.exports = ViewLayout;

/***/ }),

/***/ "./src/grid-view/view/view-scrollpane.js":
/*!***********************************************!*\
  !*** ./src/grid-view/view/view-scrollpane.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Util = __webpack_require__(/*! ../../core/util.js */ "./src/core/util.js");
var ScrollPane = __webpack_require__(/*! ../ui/scroll-pane/scroll-pane.js */ "./src/grid-view/ui/scroll-pane/scroll-pane.js");

var ViewScrollpane = {

    //=============================================================================================

    initScrollbarSize: function() {
        var o = this.option;
        var size = Util.tonum(o.scrollbarSize);
        this.scrollbarSizeH = size;
        if (Util.isnum(o.scrollbarSizeH)) {
            this.scrollbarSizeH = o.scrollbarSizeH;
        }

        this.scrollbarSizeV = size;
        if (Util.isnum(o.scrollbarSizeV)) {
            this.scrollbarSizeV = o.scrollbarSizeV;
        }
    },

    //init all pane 
    initScrollpane: function() {
        this.initFrozenInfo();
        this.initFrozenStyle();

        this.createScrollpane();
    },

    initFrozenInfo: function() {
        var o = this.option;

        if (o.frozenColumn > -1) {
            this.hasFrozenColumns = true;
            o.frozenColumns = Math.max(0, o.frozenColumn + 1);
        } else {
            this.hasFrozenColumns = false;
            o.frozenColumns = 0;
        }

        if (o.frozenRow > -1) {
            this.hasFrozenRows = true;
            o.frozenRows = Math.max(0, o.frozenRow + 1);
            this.frozenRowsHeight = o.frozenRows * o.rowHeight;
        } else {
            this.hasFrozenRows = false;
            o.frozenRows = 0;
            this.frozenRowsHeight = 0;
        }
    },

    initFrozenStyle: function() {

        var map = {
            TL: "",
            TR: "",
            BL: "",
            BR: ""
        };

        if (this.hasFrozenRows) {
            if (this.option.frozenBottom) {
                map.BL = "tg-frozen tg-frozen-h";
                map.BR = "tg-frozen tg-frozen-h";
            } else {
                map.TL = "tg-frozen tg-frozen-h";
                map.TR = "tg-frozen tg-frozen-h";
            }
        }

        if (this.hasFrozenColumns) {
            map.TL += " tg-frozen tg-frozen-v";
            map.BL += " tg-frozen tg-frozen-v";
        }

        //frozen row style
        this.$canvasTopL.addClass(map.TL);
        this.$canvasTopR.addClass(map.TR);
        this.$canvasBottomL.addClass(map.BL);
        this.$canvasBottomR.addClass(map.BR);

    },

    //=============================================================================================

    removeScrollpane: function() {
        if (!this.scrollpaneList) {
            return this;
        }
        this.scrollpaneList.forEach(function(scrollpane) {
            if (scrollpane) {
                scrollpane.destroy();
            }
        });
        this.scrollpaneList = null;
    },

    //init all scrollpane 
    createScrollpane: function() {

        //remove previous scrollpane
        this.removeScrollpane();

        //create new scrollpane
        this.scrollpaneHeaderL = new ScrollPane(this.$paneHeaderL, "header_left");
        this.scrollpaneHeaderR = new ScrollPane(this.$paneHeaderR, "header_right");
        this.scrollpaneTopL = new ScrollPane(this.$paneTopL, "top_left");
        this.scrollpaneTopR = new ScrollPane(this.$paneTopR, "top_right");
        this.scrollpaneBottomL = new ScrollPane(this.$paneBottomL, "bottom_left");
        this.scrollpaneBottomR = new ScrollPane(this.$paneBottomR, "bottom_right");

        this.scrollpaneList = [
            this.scrollpaneHeaderL,
            this.scrollpaneHeaderR,
            this.scrollpaneTopL,
            this.scrollpaneTopR,
            this.scrollpaneBottomL,
            this.scrollpaneBottomR
        ];

        //sync scrollpane team
        //h sync handler, with header
        //for right
        this.scrollpaneBottomR.setGroupH([this.scrollpaneHeaderR, this.scrollpaneTopR]);
        this.scrollpaneTopR.setGroupH([this.scrollpaneHeaderR, this.scrollpaneBottomR]);
        //for left 
        this.scrollpaneBottomL.setGroupH([this.scrollpaneHeaderL, this.scrollpaneTopL]);
        this.scrollpaneTopL.setGroupH([this.scrollpaneHeaderL, this.scrollpaneBottomL]);

        //v sync handler
        //for bottom
        this.scrollpaneBottomR.setGroupV(this.scrollpaneBottomL);
        this.scrollpaneBottomL.setGroupV(this.scrollpaneBottomR);
        //for top frozen bottom case
        this.scrollpaneTopR.setGroupV(this.scrollpaneTopL);
        this.scrollpaneTopL.setGroupV(this.scrollpaneTopR);

        this.initActiveScrollpane();
        this.initPaneVisibility();

    },

    //active scrollpane and frozen scrollpane (for hideScrollPane key left/right handler)
    initActiveScrollpane: function() {
        if (this.hasFrozenRows && !this.option.frozenBottom) {
            if (this.hasFrozenColumns) {
                this.scrollpane = this.scrollpaneBottomR;
            } else {
                this.scrollpane = this.scrollpaneBottomL;
            }
            this.scrollpaneFrozen = this.scrollpaneBottomL;
        } else {
            if (this.hasFrozenColumns) {
                this.scrollpane = this.scrollpaneTopR;
            } else {
                this.scrollpane = this.scrollpaneTopL;
            }
            this.scrollpaneFrozen = this.scrollpaneTopL;
        }
    },

    initPaneVisibility: function() {

        this.scrollpaneHeaderL.show();
        this.scrollpaneTopL.show();

        if (this.hasFrozenColumns) {

            this.scrollpaneHeaderR.show();
            this.scrollpaneTopR.show();

            if (this.hasFrozenRows) {
                this.scrollpaneBottomL.show();
                this.scrollpaneBottomR.show();
            } else {
                this.scrollpaneBottomL.hide();
                this.scrollpaneBottomR.hide();
            }
        } else {

            this.scrollpaneHeaderR.hide();
            this.scrollpaneTopR.hide();
            this.scrollpaneBottomR.hide();

            if (this.hasFrozenRows) {
                this.scrollpaneBottomL.show();
            } else {
                this.scrollpaneBottomL.hide();
            }
        }

    },

    //=============================================================================================
    //update 

    updateScrollpane: function() {

        var scrollpaneOption = this.getScrollpaneOption();

        this.scrollpaneHeaderL.render({
            scrollpaneW: this.paneWidthL,
            scrollpaneH: this.headerHeight,
            scrollbodyW: this.canvasWidthL,
            scrollbodyH: this.headerHeight,
            scrollBarV: scrollpaneOption.HLV,
            scrollBarH: scrollpaneOption.HLH
        });
        this.scrollpaneHeaderR.render({
            scrollpaneW: this.paneWidthR,
            scrollpaneH: this.headerHeight,
            scrollbodyW: this.canvasWidthR,
            scrollbodyH: this.headerHeight,
            scrollBarV: scrollpaneOption.HRV,
            scrollBarH: scrollpaneOption.HRH
        });

        this.scrollpaneTopL.render({
            scrollpaneW: this.paneWidthL,
            scrollpaneH: this.paneHeightT,
            scrollbodyW: this.canvasWidthL,
            scrollbodyH: this.canvasHeightT,
            scrollBarV: scrollpaneOption.TLV,
            scrollBarH: scrollpaneOption.TLH
        });
        this.scrollpaneTopR.render({
            scrollpaneW: this.paneWidthR,
            scrollpaneH: this.paneHeightT,
            scrollbodyW: this.canvasWidthR,
            scrollbodyH: this.canvasHeightT,
            scrollBarV: scrollpaneOption.TRV,
            scrollBarH: scrollpaneOption.TRH
        });

        this.scrollpaneBottomL.render({
            scrollpaneW: this.paneWidthL,
            scrollpaneH: this.paneHeightB,
            scrollbodyW: this.canvasWidthL,
            scrollbodyH: this.canvasHeightB,
            scrollBarV: scrollpaneOption.BLV,
            scrollBarH: scrollpaneOption.BLH
        });
        this.scrollpaneBottomR.render({
            scrollpaneW: this.paneWidthR,
            scrollpaneH: this.paneHeightB,
            scrollbodyW: this.canvasWidthR,
            scrollbodyH: this.canvasHeightB,
            scrollBarV: scrollpaneOption.BRV,
            scrollBarH: scrollpaneOption.BRH
        });

        //update scroll position if column resize and scroll position is max right or bottom
        this.scrollLeft = this.getScrollLeft();
        this.scrollTop = this.getScrollTop();
    },

    getScrollpaneOption: function() {

        //blank:
        //false: without blank (default)
        //true: with blank, without scroll view extension
        //1: with blank, with scroll view extension

        //default scrollpane option
        var spo = {
            HLH: {
                size: 0,
                blank: false
            },
            HLV: {
                size: 0,
                blank: false
            },

            HRH: {
                size: 0,
                blank: false
            },
            HRV: {
                size: 0,
                blank: false
            },

            TLH: {
                size: 0,
                blank: false
            },
            TLV: {
                size: 0,
                blank: false
            },

            TRH: {
                size: 0,
                blank: false
            },
            TRV: {
                size: 0,
                blank: false
            },

            BLH: {
                size: 0,
                blank: false
            },
            BLV: {
                size: 0,
                blank: false
            },

            BRH: {
                size: 0,
                blank: false
            },
            BRV: {
                size: 0,
                blank: false
            }
        };

        this.scrollbarOptionHandler(spo);
        //console.log(spo);

        return spo;
    },

    scrollbarOptionHandler: function(spo) {

        var sizeH = this.scrollbarSizeH;
        var sizeV = this.scrollbarSizeV;

        //always handle header
        this.scrollbarHeaderHandler(spo, sizeH, sizeV);

        if (this.hasFrozenColumns) {
            if (this.hasFrozenRows) {
                this.scrollbarC1R1Handler(spo, sizeH, sizeV);
            } else {
                this.scrollbarC1R0Handler(spo, sizeH, sizeV);
            }
        } else {
            if (this.hasFrozenRows) {
                this.scrollbarC0R1Handler(spo, sizeH, sizeV);
            } else {
                this.scrollbarC0R0Handler(spo, sizeH, sizeV);
            }
        }
    },

    //===============================================
    scrollbarHeaderHandler: function(spo, sizeH, sizeV) {
        if (this.hasVScroll) {
            if (this.hasFrozenColumns) {
                spo.HRV.size = sizeV;
                spo.HRV.blank = 1;
            } else {
                spo.HLV.size = sizeV;
                spo.HLV.blank = 1;
            }
        }
    },

    //===============================================
    //frozen column 0, frozen row 0
    scrollbarC0R0Handler: function(spo, sizeH, sizeV) {
        spo.TLH.size = sizeH;
        spo.TLV.size = sizeV;
    },

    //===============================================
    //frozen column 0, frozen row 1
    scrollbarC0R1Handler: function(spo, sizeH, sizeV) {
        if (this.option.frozenBottom) {
            this.scrollbarC0R1B1Handler(spo, sizeH, sizeV);
        } else {
            this.scrollbarC0R1B0Handler(spo, sizeH, sizeV);
        }
    },

    //frozen column 0, frozen row 1, bottom
    scrollbarC0R1B1Handler: function(spo, sizeH, sizeV) {
        spo.BLH.size = sizeH;
        spo.TLV.size = sizeV;
        if (this.hasVScroll) {
            spo.BLV.size = sizeV;
            spo.BLV.blank = 1;
        }
    },

    //frozen column 0, frozen row 1, top
    scrollbarC0R1B0Handler: function(spo, sizeH, sizeV) {
        spo.BLH.size = sizeH;
        spo.BLV.size = sizeV;
        if (this.hasVScroll) {
            spo.TLV.size = sizeV;
            spo.TLV.blank = 1;
        }
    },

    //===============================================
    //frozen column 1, frozen row 0
    scrollbarC1R0Handler: function(spo, sizeH, sizeV) {
        spo.TRH.size = sizeH;
        spo.TRV.size = sizeV;
        if (this.hasHScroll) {
            if (this.hideScrollPane) {
                spo.TLH.size = sizeH;
                spo.TRH.size = sizeH;
                spo.TRH.blank = true;
            } else {
                spo.TLH.size = sizeH;
                spo.TLH.blank = true;
            }
        }
    },

    //===============================================
    //frozen column 1, frozen row 1
    scrollbarC1R1Handler: function(spo, sizeH, sizeV) {
        if (this.option.frozenBottom) {
            this.scrollbarC1R1B1Handler(spo, sizeH, sizeV);
        } else {
            this.scrollbarC1R1B0Handler(spo, sizeH, sizeV);
        }
    },

    //frozen column 1, frozen row 1, bottom
    scrollbarC1R1B1Handler: function(spo, sizeH, sizeV) {
        spo.BRH.size = sizeH;
        spo.TRV.size = sizeV;
        if (this.hasVScroll) {
            spo.BRV.size = sizeV;
            spo.BRV.blank = 1;
        }
        if (this.hasHScroll) {
            if (this.hideScrollPane) {
                spo.BLH.size = sizeH;
                spo.BRH.blank = true;
            }
        }
    },

    //frozen column 1, frozen row 1, top
    scrollbarC1R1B0Handler: function(spo, sizeH, sizeV) {
        spo.BRH.size = sizeH;
        spo.BRV.size = sizeV;
        if (this.hasVScroll) {
            spo.TRV.size = sizeV;
            spo.TRV.blank = 1;
        }
        if (this.hasHScroll) {
            if (this.hideScrollPane) {
                spo.BLH.size = sizeH;
                spo.BRH.blank = true;
            } else {
                spo.BLH.size = sizeH;
                spo.BLH.blank = true;
            }
        }
    }

};

module.exports = ViewScrollpane;

/***/ }),

/***/ "./src/grid-view/view/view-visible-range.js":
/*!**************************************************!*\
  !*** ./src/grid-view/view/view-visible-range.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Util = __webpack_require__(/*! ../../core/util.js */ "./src/core/util.js");
var ViewVisibleRange = {

    getVisibleRange: function() {

        //update scroll position
        this.scrollLeft = this.getScrollLeft();
        this.scrollTop = this.getScrollTop();

        var rowList = this.getVisibleRowList();
        var columnList = this.getVisibleColumnList();

        var rowInfo = {};
        rowList.forEach(function(index) {
            rowInfo[index] = true;
        });

        var columnInfo = {};
        columnList.forEach(function(index) {
            columnInfo[index] = true;
        });

        var range = {
            rowList: rowList,
            rowInfo: rowInfo,
            columnList: columnList,
            columnInfo: columnInfo
        };

        //console.log(range);

        return range;
    },

    getVisibleRowList: function() {

        var list = [];

        //distance for scroll render cache
        var distance = 20;
        var rowsLength = this.getRowsLength();

        var rowHeight = this.option.rowHeight;

        // > 0 and < max row length
        var rowCacheLength = this.option.rowCacheLength;
        rowCacheLength = Util.clamp(Util.tonum(rowCacheLength, true), 0, rowsLength);

        //console.log(rowCacheLength);

        var from = Math.floor((this.scrollTop - distance) / rowHeight);
        from = Math.max(from - rowCacheLength, 0);

        var till = Math.ceil((this.scrollTop + this.bodyerHeight + distance) / rowHeight);
        till = Math.min(till + rowCacheLength, rowsLength);

        if (this.hasFrozenRows) {
            var frozenRows = this.option.frozenRows;
            var index = 0;
            while (index < frozenRows) {
                list.push(index);
                index++;
            }
            from += frozenRows;
        }

        if (from < till) {
            for (var i = from; i < till; i++) {
                list.push(i);
            }
        }

        //console.log("visible row list:", list);

        return list;
    },

    getVisibleColumnList: function() {

        var list = [];

        //distance for scroll render cache
        var distance = 20;

        //normal case, no frozen list
        var from = this.scrollLeft - distance;
        from = Math.max(from, 0);

        var till = this.scrollLeft + this.bodyerWidth + distance;
        till = Math.min(till, this.columnsWidth);

        var index = 0;
        if (this.hasFrozenColumns) {
            var frozenColumns = this.option.frozenColumns;
            while (index < frozenColumns) {
                list.push(index);
                index++;
            }
            from += this.columnsWidthL;
        }

        //console.log("from: " + from, "till: " + till);
        if (from < till) {
            this.getColumnListFromRange(list, index, from, till);
        }

        //console.log(list);

        return list;
    },

    getColumnListFromRange: function(list, index, from, till) {

        var columns = this.columns;
        for (var i = index, l = columns.length; i < l; i++) {
            var column = columns[i];
            if (this.isColumnInRange(column, from, till)) {
                list.push(i);
            }
        }
    },

    isColumnInRange: function(column, from, till) {

        //remove hidden column
        if (column.tg_hidden) {
            return false;
        }

        var left = column.tg_left;
        var right = left + column.width;

        //out of range
        if (left > till) {
            return false;
        }
        if (right < from) {
            return false;
        }

        //in range
        return true;

    }


};

module.exports = ViewVisibleRange;

/***/ }),

/***/ "./src/grid/config/default-editor.js":
/*!*******************************************!*\
  !*** ./src/grid/config/default-editor.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var editor = {
    text: __webpack_require__(/*! ./editor/text.js */ "./src/grid/config/editor/text.js"),
    list: __webpack_require__(/*! ./editor/list.js */ "./src/grid/config/editor/list.js")
};

module.exports = editor;

/***/ }),

/***/ "./src/grid/config/default-formatter.js":
/*!**********************************************!*\
  !*** ./src/grid/config/default-formatter.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var formatter = {

    //header formatter
    header: function(value, rowData, columnData, rowIndex, columnIndex, cellNode) {
        return value;
    },

    //====================================================================================
    //cell title formatter
    title: function(value, rowData, columnData, rowIndex, columnIndex, cellNode) {
        return value;
    },

    //====================================================================================
    //cell formatter by dataType

    string: function(value, rowData, columnData, rowIndex, columnIndex, cellNode) {
        var valueFormat = this.getValueFormat(value, rowData, columnData);
        var formatedValue = valueFormat.apply(this, arguments);
        return formatedValue;
    },

    number: function(value, rowData, columnData, rowIndex, columnIndex, cellNode) {
        var valueFormat = this.getValueFormat(value, rowData, columnData);
        var formatedValue = valueFormat.apply(this, arguments);

        //for Negative Number Align
        if (formatedValue) {
            var reg = /^\(.*\)$/g;
            var isNegative = reg.test(formatedValue + "");
            if (isNegative && cellNode) {
                cellNode.className += " tg-cell-negative";
            }
        }

        return formatedValue;
    },

    date: function(value, rowData, columnData, rowIndex, columnIndex, cellNode) {
        var valueFormat = this.getValueFormat(value, rowData, columnData);
        var formatedValue = valueFormat.apply(this, arguments);
        return formatedValue;
    },

    icon: function(value, rowData, columnData, rowIndex, columnIndex, cellNode) {
        var valueFormat = this.getValueFormat(value, rowData, columnData);
        var formatedValue = valueFormat.apply(this, arguments);
        return formatedValue;
    },

    //====================================================================================

    checkbox: function(value, rowData, columnData, rowIndex, columnIndex, cellNode) {
        if (!this.isRowSelectable(rowData)) {
            return "";
        }
        var html = this.getCheckboxFormatterContent(rowData);
        return html;
    },

    //====================================================================================

    blank: function(value, rowData, columnData, rowIndex, columnIndex, cellNode) {
        return "";
    },

    //====================================================================================
    tree: function(value, rowData, columnData, rowIndex, columnIndex, cellNode) {
        var valueFormat = this.getValueFormat(value, rowData, columnData);
        var formatedValue = valueFormat.apply(this, arguments);
        var html = this.getTreeFormatterContent(rowData, formatedValue);
        return html;
    },

    //===================================================================================
    // editor
    text: function(value, rowData, columnData, rowIndex, columnIndex, cellNode) {

        var valueFormat = this.getValueFormat(value, rowData, columnData);
        var formatedValue = valueFormat.apply(this, arguments);

        var editable = this.isCellEditable(rowIndex, columnIndex);

        var domStr = "";
        if (editable) {
            domStr += "<div class='tg-editor-cell-text'>" + formatedValue + "</div>";
        } else {
            domStr += "<div class='tg-editor-cell-normal'>" + formatedValue + "</div>";
        }
        return domStr;
    },

    list: function(value, rowData, columnData, rowIndex, columnIndex, cellNode) {
        var valueFormat = this.getValueFormat(value, rowData, columnData);
        var formatedValue = valueFormat.apply(this, arguments);

        var editable = this.isCellEditable(rowIndex, columnIndex);

        if (editable) {
            var str = '<div class="tg-editor-cell-list">';
            str += '<span class="select2-container select2-container--default select2-container--focus><span class="selection">';
            str += '<span class="select2-selection select2-selection--single"><span class="select2-selection__rendered" title="' + formatedValue + '">' + formatedValue + '</span>';
            str += '<span class="select2-selection__arrow"><b role="presentation"></b></span></span></span></span></div>';
            return str;
        } else {
            return "<div class='tg-editor-cell-normal'>" + formatedValue + "</div>";
        }
    },

    arrow: function(value, rowData, columnData, rowIndex, columnIndex, cellNode) {
        return "";
    }

};

module.exports = formatter;

/***/ }),

/***/ "./src/grid/config/default-option.js":
/*!*******************************************!*\
  !*** ./src/grid/config/default-option.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var option = {
    //==========================================================
    className: "tg-mbg",

    //namespace for theme class name
    theme: "mds",

    rowHeight: 23,
    rowCacheLength: 0,

    autoHeight: false,

    showHeader: true,

    //==========================================================
    // true/false, or a custom icon handler
    showCollapseAllIcon: true,
    collapseAll: false,

    //==========================================================
    // select

    showCheckbox: false,
    showCheckboxAll: false,

    // true: select all, false: unselect all, or do nothing
    selectedAll: null,

    multiSelect: true,
    //"shift" or none: always keeping existing selections
    //"ctrl,shift" or "ctrl": hold ctrl/shift key for keeping existing selections
    multiSelectKey: "shift",

    //==========================================================
    // true for default handler, or a handler function(rowData, listNumber, leafNumber)
    showRowNumber: true,
    // list or leaf (default is leaf)
    rowNumberType: "leaf",

    //==========================================================

    rowDragDropMultiLevel: false,

    //columnDragDropMultiLevel: false,

    rowsInfo: {},

    //==========================================================

    // single field, or a list for multiple compare
    sortField: "",
    sortAsc: true,

    //Configuration for Sort Blank Value Logic
    //true: Rows with blank values should always be at the bottom of the grid
    //false: Rows with blank values sort at the bottom for Descending Sort and at the Top for Ascending Sort
    sortBlankValueBottom: true,

    sortFast: false,
    sortOnInit: false,
    //customize own sort comparers, check sort-comparers.js for default comparers 
    sortComparers: null,
    //if convert rows value by column's dataType
    convertDataType: false,

    //==========================================================
    //Sets column default option
    columnDefaults: {

        //id is require
        //id : "",

        //title: "",

        // dataType expect to be a string, for example: "string", "number", "date" etc.
        // be used for sorting, value formatting
        //dataType: "",

        // formatter expect to be a function, but also can be a string like dataType
        // priority is higher than dataType
        // be used for cell formatting
        //formatter: null,

        //align: undefined,

        //Customize class name
        //headerItemClass: "",
        //headerClass: "",
        //headerNameClass: "",
        //cellClass: ""

        //able
        //titleable: false,
        //sortable: true,
        //resizable: true,
        //exportable: false,

        minWidth: 73,
        maxWidth: 300,
        //width: Number,
        //originalWidth: Number,

        //name is require
        name: ""
    },

    //Sets special formatter defaults
    columnFormatterDefaults: {
        tree: {
            dataType: "tree",
            formatter: "tree",
            width: 300,
            minWidth: 120,
            maxWidth: 500
        },
        number: {
            align: "right"
        },
        date: {
            align: "right"
        }
    },

    //Sets column default formatter by id
    columnDefaultFormatter: {
        name: "tree"
    },

    //==========================================================
    //editor, click to edit
    autoEditNextOnEnter: true,

    //==========================================================
    //frozen
    frozenColumn: -1,
    frozenRow: -1,
    frozenBottom: false,
    frozenRowTypeList: null,
    frozenColumnMax: 10,
    frozenRowMax: 10,

    //==========================================================
    //other

    //correct data, set false for huge data with higher performance
    correctable: true,

    //for conditional formatting, for example: ["background", "border", "color"]
    conditionalStyleList: null,

    //==========================================================
    //scroll

    scrollbarSize: 15,
    scrollbarSizeH: null,
    scrollbarSizeV: null,

    //scroll pane min width and will be auto hide if less than it
    //two scrollbarSize
    scrollPaneMinWidth: 30,

    //==========================================================

    //return true:visible or false:invisible
    rowFilter: function(rowItem) {
        return true;
    },

    //==========================================================
    //for global value format
    stringFormat: function(value) {
        return value;
    },

    numberFormat: function(value) {
        return value;
    },

    dateFormat: function(value) {
        return value;
    },

    iconFormat: function(value) {
        var v = '<span class="tg-symbols">' + value + '</span>';
        return v;
    },

    treeFormat: function(value) {
        return value;
    },

    //==========================================================
    nullMatch: function(value) {
        if (value === null || typeof(value) === "undefined") {
            return true;
        }
        return false;
    },

    nullFormat: function(value) {
        var v = "—";
        return v;
    }

};


module.exports = option;

/***/ }),

/***/ "./src/grid/config/default-sort-comparers.js":
/*!***************************************************!*\
  !*** ./src/grid/config/default-sort-comparers.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Util = __webpack_require__(/*! ../../core/util.js */ "./src/core/util.js");

//=======================================================================

var emptyMatch = function(value) {
    if (!value && value !== 0) {
        return true;
    }
    return false;
};

var emptyComparer = function(av, bv, o) {
    var ae = emptyMatch(av);
    var be = emptyMatch(bv);

    if (ae && be) {
        return 0;
    }

    if (ae) {
        return 1;
    }

    if (be) {
        return -1;
    }

};

//=======================================================================

var nullMatch = function(value) {
    if (value === null || typeof(value) === "undefined") {
        return true;
    }
    return false;
};

var blankComparer = function(av, bv, o) {
    var an = nullMatch(av);
    var bn = nullMatch(bv);

    if (an && bn) {
        return 0;
    }

    if (an) {
        return 1;
    }

    if (bn) {
        return -1;
    }

    return emptyComparer(av, bv, o);

};

//=======================================================================
/* eslint-disable max-statements,complexity */
var stringComparer = function(av, bv, o) {
    var ai = typeof(av) === "string";
    var bi = typeof(bv) === "string";
    //both are string
    if (ai && bi) {
        // ignore case sort
        var au = av.toUpperCase();
        var bu = bv.toUpperCase();
        if (au !== bu) {
            return au > bu ? -1 : 1;
        }
    }
    return av > bv ? -1 : 1;
};
/* eslint-enable*/

var diffTypeComparer = function(ai, bi, av, bv, o) {
    if (ai) {
        return -1;
    }
    if (bi) {
        return 1;
    }
    return stringComparer(av, bv, o);
};

var numberComparer = function(av, bv, o) {
    var ai = typeof(av) === "number";
    var bi = typeof(bv) === "number";
    //both are number
    if (ai && bi) {
        return av > bv ? -1 : 1;
    }
    return diffTypeComparer(ai, bi, av, bv, o);
};

var dateComparer = function(av, bv, o) {
    var ad = new Date(av);
    var bd = new Date(bv);
    var ai = Util.isdate(ad);
    var bi = Util.isdate(bd);
    //both are date
    if (ai && bi) {
        var am = ad.getTime();
        var bm = bd.getTime();
        if (am === bm) {
            return;
        } else {
            return am > bm ? -1 : 1;
        }
    }
    return diffTypeComparer(ai, bi, av, bv, o);
};

//=======================================================================

// tg_index is require be created every time
var indexComparer = function(a, b, o) {
    //There is no tg_index in first time, set tg_sort_index every time
    var ci = a.tg_sort_index > b.tg_sort_index ? 1 : -1;
    return ci;
};

// multiple comparers handler if value equal
var equalComparer = function(a, b, o, comparers) {

    if (comparers.length) {
        //next sort
        var sortNextIndex = o.sortNextIndex || 0;
        var sortItem = comparers[sortNextIndex];
        if (sortItem) {
            //for next index
            o.sortNextIndex = sortNextIndex + 1;
            //for new sortField
            o.sortField = sortItem.sortField;
            //console.log(o.sortField);
            return sortItem.comparer(a, b, o, comparers);
        }
    }

    return indexComparer(a, b, o);
};

//=======================================================================

var defaultSortComparers = {

    string: function(a, b, o, comparers) {
        var av = a[o.sortField];
        var bv = b[o.sortField];

        var cb = blankComparer(av, bv, o);
        if (cb) {
            return o.sortBlankFactor * cb;
        }

        if (cb !== 0 && av !== bv) {
            var cs = stringComparer(av, bv, o);
            if (typeof(cs) === "number") {
                return o.sortFactor * cs;
            }
        }

        return equalComparer(a, b, o, comparers);
    },

    number: function(a, b, o, comparers) {
        var av = a[o.sortField];
        var bv = b[o.sortField];

        var cb = blankComparer(av, bv, o);
        if (cb) {
            return o.sortBlankFactor * cb;
        }

        if (cb !== 0 && av !== bv) {
            var cn = numberComparer(av, bv, o);
            if (typeof(cn) === "number") {
                return o.sortFactor * cn;
            }
        }

        return equalComparer(a, b, o, comparers);
    },

    date: function(a, b, o, comparers) {
        var av = a[o.sortField];
        var bv = b[o.sortField];

        var cb = blankComparer(av, bv, o);
        if (cb) {
            return o.sortBlankFactor * cb;
        }

        if (cb !== 0 && av !== bv) {
            var cd = dateComparer(av, bv, o);
            if (typeof(cd) === "number") {
                return o.sortFactor * cd;
            }
        }

        return equalComparer(a, b, o, comparers);
    }

};

module.exports = defaultSortComparers;

/***/ }),

/***/ "./src/grid/config/editor/editor-base.js":
/*!***********************************************!*\
  !*** ./src/grid/config/editor/editor-base.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//var Util = require('../../core/util.js');

var EventBase = __webpack_require__(/*! ../../../core/event-base.js */ "./src/core/event-base.js");

var EditorBase = EventBase.extend({

    type: "",

    completed: false,

    constructor: function(option) {
        this.holder = option.holder;
        this.rowItem = option.rowItem;
        this.columnItem = option.columnItem;
        this.initData();
    },

    initData: function() {
        //init
        this.id = this.columnItem.id;
        this.dataType = this.columnItem.dataType;
        //original value
        this.value = this.rowItem[this.id] || "";
    },

    updateData: function(rowItem, columnItem) {
        this.rowItem = rowItem;
        this.columnItem = columnItem;
        this.initData();
        this.updateValue();
    },

    render: function() {

    },

    focus: function() {

    },

    updateValue: function() {

    },

    getValue: function() {
        return this.value;
    },

    applyValue: function() {
        var newValue = this.getValue();
        this.rowItem[this.columnItem.id] = newValue;
    },

    isValueChanged: function() {
        var newValue = this.getValue();
        if (newValue === this.value) {
            return false;
        }
        return true;
    },

    validate: function(value) {
        return {
            valid: true,
            msg: ""
        };
    },

    commit: function(e) {
        if (this.completed) {
            return this;
        }
        this.completed = true;
        this.trigger("onCommit", e);
    },

    destroy: function() {
        if (this.container) {
            this.container.remove();
            this.container = null;
        }
    },

    toString: function() {
        return this.type;
    }

});

module.exports = EditorBase;

/***/ }),

/***/ "./src/grid/config/editor/list.js":
/*!****************************************!*\
  !*** ./src/grid/config/editor/list.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../../../core/query.js */ "./src/core/query.js");
var EditorBase = __webpack_require__(/*! ./editor-base.js */ "./src/grid/config/editor/editor-base.js");

var ListEditor = EditorBase.extend({

    type: "list",

    render: function() {

        this.container = $("<div class='tg-editor-list-container'></div>").appendTo(this.holder);

        var listOptions = this.columnItem.editorData || [{
            id: "true",
            name: "True"
        }, {
            id: "false",
            name: "False"
        }];

        var html = "<select tabIndex='0' class='tg-editor-list'><option value=''>–</option>";
        listOptions.forEach(function(item) {
            html += "<option value='" + item.id + "'>" + item.name + "</option>";
        });
        html += "</select>";

        //jquery select
        this.$select = $(html).appendTo(this.container);
        this.$select.val(this.value);

        //select2
        if (this.$select.select2) {
            this.supportSelect2 = true;
            this.renderSelect2();
        } else {
            //normal select
            var self = this;
            this.$select.on("change", function(e) {
                self.commit(e);
            });
            this.focus();
        }

        this.trigger("onRendered");

    },

    renderSelect2: function() {

        this.$select.select2({
            selectOnClose: true,
            width: "100%"
        });

        var self = this;
        this.$select.on("select2:open", function(e) {
            //console.log(e);
        }).on("select2:close", function(e) {
            //console.log(e);
            self.commit(e);
        }).on("select2:select", function(e) {
            //console.log(e);
        }).on("select2:unselect", function(e) {
            //console.log(e);
        });

        this.$select.select2("open");

    },

    focus: function() {
        //console.log("select2 focus");
        this.$select.focus();
    },

    updateValue: function() {
        this.$select.val(this.value);
    },

    getValue: function() {
        return this.$select.val();
    },

    validate: function(value) {
        if (value === "" || value === null) {
            return {
                valid: false,
                msg: "Please choose one"
            };
        }
        return {
            valid: true,
            msg: ""
        };
    },

    destroy: function() {
        if (this.supportSelect2) {
            this.$select.select2("destroy");
        }
        this.$select.remove();
        EditorBase.prototype.destroy.apply(this, arguments);
    }

});

module.exports = ListEditor;

/***/ }),

/***/ "./src/grid/config/editor/text.js":
/*!****************************************!*\
  !*** ./src/grid/config/editor/text.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../../../core/query.js */ "./src/core/query.js");
var EditorBase = __webpack_require__(/*! ./editor-base.js */ "./src/grid/config/editor/editor-base.js");

var TextEditor = EditorBase.extend({

    type: "text",

    render: function() {

        this.container = $("<div class='tg-editor-text-container'></div>").appendTo(this.holder);

        this.$input = $("<input type='text' class='tg-editor-text' />").appendTo(this.container);

        if (this.columnItem.align) {
            this.$input.addClass("tg-align-" + this.columnItem.align);
        }

        var self = this;
        this.$input.bind("keydown", function(e) {
            if (e.keyCode === 37 || e.keyCode === 39) {
                e.stopImmediatePropagation();
            }
        }).bind("keyup", function(e) {
            self.trigger("onChanging", e);
        }).bind("blur", function(e) {
            self.commit(e);
        });

        this.focus();
        this.updateValue();
        this.$input.select();

        this.trigger("onRendered");

    },

    focus: function() {
        this.$input.focus();
    },

    updateValue: function() {
        this.$input.val(this.value);
    },

    getValue: function() {
        var value = this.$input.val();
        if (this.dataType === "number") {
            if (value) {
                value = Number(value);
            }
        }
        return value;
    },

    validate: function(value) {
        if (this.dataType === "number") {

            if (typeof(value) !== "number" || isNaN(value)) {
                return {
                    valid: false,
                    msg: "Please enter a valid number"
                };
            }

        }
        return {
            valid: true,
            msg: ""
        };
    },

    destroy: function() {
        this.$input.remove();
        EditorBase.prototype.destroy.apply(this, arguments);
    },

    toString: function() {
        return "text";
    }

});

module.exports = TextEditor;

/***/ }),

/***/ "./src/grid/grid.js":
/*!**************************!*\
  !*** ./src/grid/grid.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var E = __webpack_require__(/*! ../core/event-type.js */ "./src/core/event-type.js");
var Util = __webpack_require__(/*! ../core/util.js */ "./src/core/util.js");
var Cache = __webpack_require__(/*! ../core/cache.js */ "./src/core/cache.js");

var GridView = __webpack_require__(/*! ../grid-view/grid-view.js */ "./src/grid-view/grid-view.js");

//=============================================================================
// config
var defaultOption = __webpack_require__(/*! ./config/default-option.js */ "./src/grid/config/default-option.js");
var defaultEditor = __webpack_require__(/*! ./config/default-editor.js */ "./src/grid/config/default-editor.js");
var defaultFormatter = __webpack_require__(/*! ./config/default-formatter.js */ "./src/grid/config/default-formatter.js");

//=============================================================================
// service
var ServiceExport = __webpack_require__(/*! ./service/service-export.js */ "./src/grid/service/service-export.js");

//=============================================================================
//model extend
var ModelBase = __webpack_require__(/*! ./model/model-base.js */ "./src/grid/model/model-base.js");

//=============================================================================

var Grid = ModelBase.extend({

    constructor: function(container) {
        this.create(container);
    },

    create: function(container) {
        if (!container) {
            return this;
        }

        //cache server
        this.cache = new Cache({
            //maxSize: 1000,
            //default expires time 1 hour
            expiresTime: 1 * 60 * 60 * 1000
        });

        //init
        this.gridAllColumnsData = [];
        this.gridColumnsData = [];
        this.gridRowsData = [];

        var self = this;

        //bind default events
        //defaultEvent for isDefaultPrevented
        var defaultEvent = {
            defaultEvent: true
        };
        this.bind(E.onTreeIconClick, function(e, d) {
            self.toggleItem(d.row);
        }, defaultEvent).bind(E.onTreeIconAllClick, function(e, d) {
            self.toggleAll();
        }, defaultEvent);

        this.bind(E.onSort, function(e, d) {
            self.setSortColumn(d.columnItem);
        }, defaultEvent).bind(E.onHeaderRendered, function(e, d) {
            self.initCollapseAllHandler(e, d);
            self.initCheckboxAllHandler(e, d);
        }, defaultEvent).bind(E.onCheckboxClick, function(e, d) {
            self.setSelectedRow(d.row, d.e);
        }, defaultEvent).bind(E.onCheckboxAllClick, function(e, d) {
            self.checkboxAllClickHandler(e, d);
        }, defaultEvent);

        this.bind(E.onHeadersMouseMove, function(e, d) {
            self.columnResizingHandler(e, d);
        }, defaultEvent).bind(E.onHeadersMouseLeave, function(e, d) {
            self.columnResizingHandler(e, d);
        }, defaultEvent).bind(E.onHeadersTouchStart, function(e, d) {
            self.columnTouchResizingHandler(e, d);
        }, defaultEvent);

        this.bind(E.onColumnWidthDragStart, function(e, d) {
            self.columnWidthDragStartHandler(e, d);
        }, defaultEvent).bind(E.onColumnWidthDragUpdate, function(e, d) {
            self.columnWidthDragUpdateHandler(e, d);
        }, defaultEvent).bind(E.onColumnWidthDragComplete, function(e, d) {
            self.columnWidthDragCompleteHandler(e, d);
        }, defaultEvent);

        this.bind(E.onRowDragStart, function(e, d) {
            self.rowDragStartHandler(e, d);
        }, defaultEvent).bind(E.onRowDragUpdate, function(e, d) {
            self.rowDragUpdateHandler(e, d);
        }, defaultEvent).bind(E.onRowDragComplete, function(e, d) {
            self.rowDragCompleteHandler(e, d);
        }, defaultEvent);

        //create grid view
        this.gridView = new Grid.GridView(container);
        //proxy all events from grid view
        var events = this.getAllEvents();
        events.forEach(function(type) {
            self.gridView.bind(type, function(e, d) {
                self.trigger(type, d);
                //console.log(type, d);
            });
        });

        //default config
        this.setEditor();
        this.setFormatter();
        this.setOption();
        this.setData();
    },

    //=============================================================================

    getAllEvents: function() {
        var events = Object.keys(E);
        return events;
    },

    getGridView: function() {
        return this.gridView;
    },

    getGridViewValue: function(name) {
        return this.gridView[name];
    },

    //=============================================================================

    //tree format rows data
    getRowsData: function(reload) {
        if (reload) {
            this.rows = null;
        }
        if (this.rows) {
            return this.rows;
        }
        this.rows = Util.getValue(this.data, "rows", []);

        //dynamic length rows
        if (Util.isnum(this.data.rowsLength)) {
            this.rows.length = this.data.rowsLength;
            this.initDynamicRowsData(this.rows);
        }

        this.correctTreeData(this.rows);
        this.initRowsData();
        return this.rows;
    },

    //grid list format rows data;
    getGridRowsData: function() {
        return this.gridRowsData;
    },

    //=============================================================================

    //tree format columns data
    getColumnsData: function(reload) {
        if (reload) {
            this.columns = null;
        }
        if (this.columns) {
            return this.columns;
        }
        var columns = Util.getValue(this.data, "columns", []);
        this.correctTreeData(columns);
        this.columns = this.createColumns(columns);
        this.initColumnsData();
        return this.columns;
    },

    createColumns: function(columns) {

        //use new array reference, reduce external operation
        //sometimes grid1, grid2 use same columns and render at same time
        var columnList = [];

        //private columns and remove from user columns
        var checkbox = this.gridPrivateColumns.checkbox;
        var blank = this.gridPrivateColumns.blank;
        Util.delListItem(columns, {
            id: checkbox.id
        });
        Util.delListItem(columns, {
            id: blank.id
        });

        //first, add checkbox column if option showCheckbox
        if (this.option.showCheckbox) {
            columnList.push(checkbox);
        }

        columns.forEach(function(item) {
            columnList.push(item);
        });

        //last, add blank column always
        columnList.push(blank);

        return columnList;
    },

    //grid list format columns data
    getGridColumnsData: function() {
        return this.gridColumnsData;
    },

    //========================================================================================
    //update API

    updateGridView: function() {
        if (!this.gridView.initialized) {
            return;
        }

        this.gridRowsDataHandler();
        this.gridView.setRows(this.gridRowsData);

        this.gridView.updateBodyerSize();

        //invalid row handler
        this.invalidRowHandler();

        return this;
    },

    //=============================================================================

    initDynamicRowsData: function(treeList) {
        var initTree = function(list, parent) {
            if (!Util.islist(list)) {
                return;
            }
            for (var i = 0, l = list.length; i < l; i++) {
                var item = list[i];
                //create dynamic data item
                if (!item) {
                    item = {};
                    list[i] = item;
                    continue;
                }
                initTree(item.subs, item);
            }
        };
        initTree(treeList);

        return this;
    },

    //=============================================================================

    initRowsData: function() {
        var o = this.option;

        //init frozen row
        var frozenRow = o.frozenRow;
        if (!Util.isnum(frozenRow)) {
            frozenRow = -1;
        }
        var frozenRowMax = Math.min(o.frozenRowMax, this.rows.length - 1);
        frozenRow = Util.clamp(Util.tonum(frozenRow, true), -1, frozenRowMax);
        if (Util.islist(o.frozenRowTypeList)) {
            this.sortRowsByRowTypeList(this.rows, o.frozenRowTypeList);
            if (frozenRow === -1) {
                frozenRow = this.getFrozenRowByRowTypeList(this.rows, o.frozenRowTypeList);
            }
        }
        this.option.frozenRow = frozenRow;

        this.option.rowsInfo = this.initTreeData(this.rows, this.option.frozenRow);
    },

    initColumnsData: function() {
        var o = this.option;

        //init forzen column
        var frozenColumn = o.frozenColumn;
        if (!Util.isnum(frozenColumn)) {
            frozenColumn = -1;
        }
        var frozenColumnMax = Math.min(o.frozenColumnMax, this.columns.length - 1);
        frozenColumn = Util.clamp(Util.tonum(frozenColumn, true), -1, frozenColumnMax);
        this.option.frozenColumn = frozenColumn;

        this.option.columnsInfo = this.initTreeData(this.columns, this.option.frozenColumn);
    },

    //=============================================================================
    //option API

    defaultOption: function() {
        return defaultOption;
    },

    initOption: function() {
        if (!this.data.option) {
            return this;
        }
        // merge option from data.option
        this.option = Util.merge(this.option, this.data.option);
        return this;
    },

    setOption: function(option) {
        this.option = Util.merge(this.defaultOption(), option);
        this.resetAll = true;
        return this;
    },

    getOption: function() {
        return this.option;
    },

    //=============================================================================
    //editor API

    defaultEditor: function() {
        return defaultEditor;
    },

    setEditor: function(editors) {
        this.editors = Util.merge(this.defaultEditor(), editors);
        this.resetAll = true;
        return this;
    },

    getEditor: function(type) {
        if (arguments.length) {
            return this.editors[type];
        }
        return this.editors;
    },

    //=============================================================================
    //formatter API

    defaultFormatter: function() {
        return defaultFormatter;
    },

    setFormatter: function(formatters) {
        this.formatters = Util.merge(this.defaultFormatter(), formatters);
        this.resetAll = true;
        return this;
    },

    getFormatter: function(type) {
        if (arguments.length) {
            return this.formatters[type];
        }
        return this.formatters;
    },

    //for value, global setting
    getValueFormat: function(value, rowData, columnData) {
        var type = this.getColumnType(columnData);
        var format = this.option[type + "Format"];
        var nullMatch = this.option.nullMatch;
        if (typeof(nullMatch) !== "function") {
            nullMatch = function(v) {
                return v === null;
            };
        }
        if (nullMatch(value, rowData, columnData)) {
            format = this.option.nullFormat;
        }
        format = format || this.option.stringFormat;
        if (typeof(format) !== "function") {
            format = function(v) {
                return v;
            };
        }
        return format;
    },

    //=============================================================================

    setData: function(data) {
        this.data = data || {};
        this.resetAll = true;
        return this;
    },

    getData: function() {
        return this.data;
    },

    //=============================================================================
    //get column item
    getColumnItem: function(context) {
        if (Util.isnum(context)) {
            return this.gridAllColumnsData[context];
        }
        if (!context) {
            return null;
        }
        if (Util.isnum(context.tg_index)) {
            return this.gridAllColumnsData[context.tg_index];
        }
        return this.getColumnItemById(context.id || context);
    },

    getColumnItemById: function(id) {
        if (!id) {
            return null;
        }
        return this.getColumnItemBy({
            id: id
        });
    },

    getColumnItemBy: function(condition) {
        var columnItem = Util.getListItem(this.gridAllColumnsData, condition);
        return columnItem;
    },

    //=============================================================================
    //get row item

    getRowItem: function(context) {
        if (Util.isnum(context)) {
            return this.gridRowsData[context];
        }
        if (!context) {
            return null;
        }
        if (Util.isnum(context.tg_index)) {
            return this.gridRowsData[context.tg_index];
        }
        return this.getRowItemById(context.id || context);
    },

    getRowItemById: function(id) {
        if (!id) {
            return null;
        }
        return this.getRowItemBy({
            id: id
        });
    },

    getRowItemBy: function(condition) {
        var rowItem = Util.getListItem(this.gridRowsData, condition);
        return rowItem;
    },

    //=============================================================================
    //data snapshot for export excel
    getExportData: function(customData) {
        var data = customData || this.getData();
        var exportData = ServiceExport.getExportData(data);
        return exportData;
    },

    getItemSnapshot: function(item) {
        var itemSnapshot = ServiceExport.getItemSnapshot(item);
        return itemSnapshot;
    },

    //=============================================================================

    render: function(resetAll) {
        Util.getRhythm(this, "render").debounce({
            delay: 20,
            callback: this.renderNow,
            arguments: arguments
        });
        return this;
    },

    renderNow: function(resetAll) {

        if (resetAll) {
            this.resetAll = true;
        }

        //merge data.option
        this.initOption();

        if (this.resetAll) {
            this.initGridView();
        } else {
            this.updateGridView();
        }

        this.gridView.renderNow();

        //do not reset again
        this.resetAll = false;

        return this;
    },

    initGridView: function() {

        this.clean();

        this.gridColumnsDataHandler();

        this.gridInitRowsDataHandler();
        this.gridRowsDataHandler();

        //init columns and rows data
        this.gridView.setColumns(this.gridColumnsData, this.gridAllColumnsData);
        this.gridView.setRows(this.gridRowsData);

        //init option
        this.gridView.init(this.option);

    },

    //=============================================================================

    //reset all
    reset: function() {
        this.render(true);
        return this;
    },

    //update all rows
    update: function() {
        this.gridView.invalidateAll();
        this.render();
        return this;
    },

    //=============================================================================

    resize: function() {
        Util.getRhythm(this, "resize").throttle({
            delay: 200,
            callback: this.resizeNow,
            arguments: arguments
        });
        return this;
    },

    resizeNow: function() {
        //console.log("grid resize now " + this.gridView.uid);
        if (this.gridView) {
            this.gridView.resize.apply(this.gridView, arguments);
        }
        return this;
    },

    //=============================================================================

    clean: function() {
        Util.getRhythm(this).destroy();
        Util.removePrevious(this);
        this.removeSortStatus();

        this.rows = null;
        this.columns = null;

        return this;
    },

    destroy: function() {

        this.clean();
        this.unbind();

        if (this.cache) {
            this.cache.destroy();
            this.cache = null;
        }

        if (this.gridView) {
            this.gridView.unbind();
            this.gridView.destroy();
            this.gridView = null;
        }

        //require for GC after destroy
        this.gridPrivateColumns = null;
        this.gridAllColumnsData = null;
        this.gridColumnsData = null;
        this.gridRowsData = null;
        this.formatters = null;
        this.editors = null;
        this.option = null;
        this.data = null;

        return this;
    },

    //=============================================================================
    toString: function() {
        return "[object Grid]";
    }

}, {
    GridView: GridView
});

module.exports = Grid;

/***/ }),

/***/ "./src/grid/model/model-base.js":
/*!**************************************!*\
  !*** ./src/grid/model/model-base.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var EventBase = __webpack_require__(/*! ../../core/event-base.js */ "./src/core/event-base.js");


var ModelColumnHeader = __webpack_require__(/*! ./model-column-header.js */ "./src/grid/model/model-column-header.js");
var ModelColumnPrivate = __webpack_require__(/*! ./model-column-private.js */ "./src/grid/model/model-column-private.js");
var ModelColumnResizing = __webpack_require__(/*! ./model-column-resizing.js */ "./src/grid/model/model-column-resizing.js");
var ModelColumn = __webpack_require__(/*! ./model-column.js */ "./src/grid/model/model-column.js");


var ModelCommon = __webpack_require__(/*! ./model-common.js */ "./src/grid/model/model-common.js");
var ModelCopy = __webpack_require__(/*! ./model-copy.js */ "./src/grid/model/model-copy.js");
var ModelFormatter = __webpack_require__(/*! ./model-formatter.js */ "./src/grid/model/model-formatter.js");
var ModelProxy = __webpack_require__(/*! ./model-proxy.js */ "./src/grid/model/model-proxy.js");


var ModelRowCollapse = __webpack_require__(/*! ./model-row-collapse.js */ "./src/grid/model/model-row-collapse.js");
var ModelRowDragDrop = __webpack_require__(/*! ./model-row-dragdrop.js */ "./src/grid/model/model-row-dragdrop.js");
var ModelRowFocus = __webpack_require__(/*! ./model-row-focus.js */ "./src/grid/model/model-row-focus.js");
var ModelRowNumber = __webpack_require__(/*! ./model-row-number.js */ "./src/grid/model/model-row-number.js");
var ModelRowSelect = __webpack_require__(/*! ./model-row-select.js */ "./src/grid/model/model-row-select.js");
var ModelRow = __webpack_require__(/*! ./model-row.js */ "./src/grid/model/model-row.js");


var ModelScroll = __webpack_require__(/*! ./model-scroll.js */ "./src/grid/model/model-scroll.js");
var ModelSort = __webpack_require__(/*! ./model-sort.js */ "./src/grid/model/model-sort.js");


var ModelBase = EventBase.mixin(

    ModelColumnHeader,
    ModelColumnPrivate,
    ModelColumnResizing,
    ModelColumn,

    ModelCommon,
    ModelCopy,
    ModelFormatter,
    ModelProxy,

    ModelRowCollapse,
    ModelRowDragDrop,
    ModelRowFocus,
    ModelRowNumber,
    ModelRowSelect,
    ModelRow,

    ModelScroll,
    ModelSort
);

module.exports = ModelBase;

/***/ }),

/***/ "./src/grid/model/model-column-header.js":
/*!***********************************************!*\
  !*** ./src/grid/model/model-column-header.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var ModelColumnHeader = {

    //grid column header
    initColumnHeaderHandler: function(columns, gridColumnsData, gridColumnGroupsData) {

        //console.log(gridColumnsData);

        //output:

        //tg_tr_mark: sets to false, add group only one time for tableData
        //tg_colspan: td col span
        //width: sets group width

        //tg_tr: push "td" to which "tr" in table
        //tg_rowspan: td row span

        //tg_deep: reverse level
        //tg_top_offset: first level sets tg_top_offset for top offset

        var maxLevel = this.option.columnsInfo.maxLevel;

        //init column
        gridColumnsData.forEach(function(column) {
            //column colspan always 1, not require
            //column.tg_colspan = 1;

            column.tg_deep = maxLevel;
            if (column.tg_parent) {
                column.tg_parent.tg_deep = maxLevel - 1;
            }

        });

        //init group, colspan and width, depends on subs
        var groupLength = gridColumnGroupsData.length;
        if (groupLength) {
            //from last to first, for best performance
            for (var i = groupLength - 1; i >= 0; i--) {
                var group = gridColumnGroupsData[i];
                group.tg_tr_mark = false;
                group.tg_colspan = this.getColumnGroupColspan(group);
                group.width = this.getColumnGroupSubsWidth(group);

                if (group.tg_parent) {
                    group.tg_parent.tg_deep = group.tg_deep - 1;
                } else {
                    //top level offset
                    group.tg_top_offset = group.tg_deep;
                    //console.log(group.tg_deep);
                }
            }
        }

        //column tr, rowspan, depends on maxLevel
        this.initHeaderRowspanHandler(columns);

    },

    initHeaderRowspanHandler: function(columns) {

        var maxLevel = this.option.columnsInfo.maxLevel;

        this.initColumnRowspanHandler(columns, 0, maxLevel, 0);

    },

    initColumnRowspanHandler: function(columns, rowLevel, maxLevel, trOffset) {

        var self = this;
        //init column
        columns.forEach(function(column) {

            column.tg_tr = rowLevel + trOffset;
            //is group, has child
            if (column.tg_group) {

                //top level offset
                var offset = column.tg_top_offset;
                if (offset) {
                    column.tg_rowspan = offset + 1;
                } else {
                    //all subs have offset from parent
                    offset = trOffset;
                }

                self.initColumnRowspanHandler(column.subs, rowLevel + 1, maxLevel, offset);
            } else {
                //last leaf
                var rowspan = maxLevel + 1 - rowLevel - trOffset;
                if (rowspan > 1) {
                    column.tg_rowspan = rowspan;
                }
            }

        });

    },

    getColumnGroupColspan: function(column) {
        if (!column || !column.subs) {
            return 0;
        }
        var colspan = 0;
        column.subs.forEach(function(item) {
            colspan += item.tg_colspan || 1;
        });
        return colspan;
    },

    getColumnGroupSubsWidth: function(column) {
        if (!column || !column.subs) {
            return 0;
        }
        var w = 0;
        column.subs.forEach(function(item) {
            w += item.width;
        });
        return w;
    },

    getHeaderNode: function(columnIndex) {
        var columnItem = this.getColumnItem(columnIndex);
        var node = this.gridView.getHeaderNode(columnItem);
        return node;
    }

};

module.exports = ModelColumnHeader;

/***/ }),

/***/ "./src/grid/model/model-column-private.js":
/*!************************************************!*\
  !*** ./src/grid/model/model-column-private.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var ModelColumnPrivate = {

    getPrivateColumns: function() {
        var privateColumns = {

            // for selection checkbox
            checkbox: {
                id: "tg_checkbox_column",
                name: "",
                formatter: "checkbox",
                headerClass: "tg-header-checkbox",
                headerNameClass: "tg-header-name-checkbox",
                cellClass: "tg-cell-checkbox",
                width: 30,
                resizable: false,
                sortable: false,
                exportable: false
            },

            // for last blank fixing
            blank: {
                id: "tg_blank_column",
                name: "",
                formatter: "blank",
                headerClass: "tg-header-blank",
                headerNameClass: "tg-header-name-blank",
                cellClass: "tg-cell-blank",
                width: 0,
                minWidth: 0,
                maxWidth: 2000,
                resizable: false,
                sortable: false,
                exportable: false
            }

        };

        return privateColumns;
    }

};

module.exports = ModelColumnPrivate;

/***/ }),

/***/ "./src/grid/model/model-column-resizing.js":
/*!*************************************************!*\
  !*** ./src/grid/model/model-column-resizing.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var E = __webpack_require__(/*! ../../core/event-type.js */ "./src/core/event-type.js");

var ModelColumnResizing = {

    setResizingColumn: function(columnItem) {
        //allow null, means remove resize column
        if (this.previousResizingColumn === columnItem) {
            return;
        }
        this.previousResizingColumn = columnItem;
        this.gridView.setResizingColumn(columnItem);
        return this;
    },

    getResizingColumnItem: function(x, d) {
        var columnItem = d.columnItem;
        var currentIndex = columnItem.tg_index;
        var columnIndex = currentIndex;
        //get best resize column
        if (x < columnItem.width * 0.5) {
            var visibleRange = this.getVisibleRange();
            var columnList = visibleRange.columnList;
            var index = columnList.indexOf(columnIndex);
            index -= 1;
            if (index >= 0) {
                columnIndex = columnList[index];
                columnItem = this.getColumnItem(columnIndex);
            }
        }
        return columnItem;
    },

    columnResizingHandler: function(e, d) {
        //console.log(e.type);
        if (e.type === E.onHeadersMouseLeave) {
            this.setResizingColumn(null);
            return;
        }
        //if touch started
        if (this.columnTouchStarted) {
            return;
        }
        //get best column by mouse offset x
        var columnItem = this.getResizingColumnItem(d.e.offsetX, d);
        //console.log(columnIndex);
        this.setResizingColumn(columnItem);
    },

    columnTouchResizingHandler: function(e, d) {
        //console.log(e.type);
        //for disable onHeadersMouseMove event after touchstart 
        this.columnTouchStarted = true;

        //before setResizingColumn for hide item if resizable = false
        this.gridView.setColumnLineHover(true);

        //no need cache previousResizingColumn
        this.gridView.setResizingColumn(d.columnItem);
    },

    columnWidthDragStartHandler: function(e, d) {
        this.gridView.$headers.addClass("tg-ew-resize");
        var column = d.column;
        d.index = column.tg_index;
        var $node = this.getHeaderNode(column);
        d.width = $node.width();
    },

    columnWidthDragUpdateHandler: function(e, d) {
        var newWidth = d.width + d.mouseOffsetX;
        var column = d.column;
        this.gridView.setColumnWidth(column, newWidth);
        this.gridView.updateColumnLine();
    },

    columnWidthDragCompleteHandler: function(e, d) {
        if (!d.valid) {
            return;
        }
        this.gridView.$headers.removeClass("tg-ew-resize");
        this.gridView.resize();
        this.gridView.updateColumnLine();
        this.gridView.setColumnLineActive(false);
        this.trigger(E.onColumnWidthDropped, d);
    }

};

module.exports = ModelColumnResizing;

/***/ }),

/***/ "./src/grid/model/model-column.js":
/*!****************************************!*\
  !*** ./src/grid/model/model-column.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Util = __webpack_require__(/*! ../../core/util.js */ "./src/core/util.js");

var ModelColumn = {

    //grid columns data handler

    gridColumnsDataHandler: function() {

        this.gridPrivateColumns = this.getPrivateColumns();

        //reset list
        this.gridAllColumnsData.length = 0;
        this.gridColumnsData.length = 0;

        var gridColumnGroupsData = [];

        var columns = this.getColumnsData();
        var self = this;
        var appendColumns = function(columns) {
            if (!Util.islist(columns)) {
                return;
            }
            var list_length = columns.length;
            var list_index = 0;
            columns.forEach(function(column) {

                //for last, 0 is first
                column.tg_list_length = list_length;
                //update list index
                column.tg_list_index = list_index;
                list_index++;

                self.gridColumnItemHandler(column);

                if (column.tg_group) {
                    //column group item
                    gridColumnGroupsData.push(column);
                    //next subs
                    appendColumns(column.subs);
                } else {
                    //column item
                    self.gridColumnsData.push(column);
                }

            });
        };
        appendColumns(columns);

        //grid column list include all columns and groups
        this.gridAllColumnsData = this.gridAllColumnsData.concat(this.gridColumnsData).concat(gridColumnGroupsData);

        //update column and column group index
        this.initListData(this.gridAllColumnsData);

        //init column header data
        this.initColumnHeaderHandler(columns, this.gridColumnsData, gridColumnGroupsData);

        //console.log(this.gridColumnsData);

        return this;
    },

    gridColumnItemHandler: function(column) {
        //option handler
        this.initColumnOption(column);
        //editor handler
        this.initColumnEditor(column);
        //formatter handler
        this.initColumnFormatter(column);
        //width handler
        this.initColumnWidth(column);
    },

    //=============================================================================
    initColumnOption: function(column) {

        //require id
        if (!column.id) {
            column.id = "tg_" + Util.token(5);
        }

        //init formatter and dataType
        this.initColumnDefaultFormatter(column);

        //init default option
        this.initColumnDefaultOption(column);

    },

    initColumnDefaultFormatter: function(column) {
        if (column.formatter) {
            return;
        }
        //set tree formatter by id name
        var defaultFormatter = this.option.columnDefaultFormatter[column.id];
        if (defaultFormatter) {
            column.formatter = defaultFormatter;
        }
        //Do NOT set formatter to dataType, Editor will set new formatter
    },

    initColumnDefaultOption: function(column) {
        if (column.tg_group) {
            return;
        }
        var columnDefaults = this.option.columnDefaults;
        var columnFormatterDefaults = this.option.columnFormatterDefaults;
        var columnFormatter = this.getColumnFormatter(column);
        var formatterOption = columnFormatterDefaults[columnFormatter];
        if (formatterOption) {
            columnDefaults = Util.merge(columnDefaults, formatterOption);
        }
        //sets default column option
        for (var k in columnDefaults) {
            if (!column.hasOwnProperty(k)) {
                column[k] = columnDefaults[k];
            }
        }
    },

    //=============================================================================
    /* eslint-disable max-statements,complexity*/
    //editor handler
    initColumnEditor: function(column) {
        if (column.tg_group) {
            return;
        }
        var editor = column.editor;
        if (editor && typeof(editor) === "string") {
            var editorHandler = this.getEditor(editor);
            if (editorHandler) {
                column.tg_editor = editorHandler;
                if (!column.formatter) {
                    column.formatter = editor;
                }
            } else {
                column.editor = null;
                column.tg_editor = null;
            }
        }
    },
    /* eslint-enable*/
    //=============================================================================
    //formatter handler
    initColumnFormatter: function(column) {

        //header formatter
        this.initColumnFormatterByType(column, "headerFormatter", "header");

        //cell title formatter
        this.initColumnFormatterByType(column, "titleFormatter", "title");

        //cell formatter
        var columnFormatter = this.getColumnFormatter(column);
        this.initColumnFormatterByType(column, "formatter", columnFormatter);

        return column;
    },

    initColumnFormatterByType: function(column, name, type) {

        var formatter;
        if (typeof(column[name]) === "function") {
            formatter = column[name];
        } else {
            formatter = this.getFormatter(type);
        }

        //string is default formatter
        if (!formatter) {
            formatter = this.formatters.string;
        }

        column["tg_" + name] = formatter.bind(this);
        return this;
    },

    //=============================================================================

    initColumnWidth: function(column) {
        if (column.tg_group) {
            return;
        }
        //do NOT change blank column width
        if (column.id === this.gridPrivateColumns.blank.id) {
            column.width = 0;
            return;
        }

        //fix min and max width
        if (Util.isnum(column.width) && column.width >= 0) {
            column.minWidth = Math.min(column.minWidth, column.width);
            column.maxWidth = Math.max(column.maxWidth, column.width);
            return;
        }

        //calculate width by text
        this.initColumnWidthByName(column);

    },

    initColumnWidthByName: function(column) {
        var name = column.name;
        var len = name.length;
        var charWidth = 15;
        if (len > 50) {
            charWidth = 8;
        } else if (len > 25) {
            charWidth = 10;
        }
        var width = Math.ceil((len * charWidth) / 3);
        width = Util.clamp(width, column.minWidth, column.maxWidth);
        column.width = width;
    },

    //=============================================================================

    setColumnWidth: function(columnIndex, width, keepRange, resize) {
        var column = this.getColumnItem(columnIndex);
        if (!column) {
            return this;
        }
        if (!Util.isnum(width)) {
            return this;
        }

        width = Math.max(0, width);
        width = Math.round(width);

        if (!keepRange) {
            column.minWidth = Math.min(column.minWidth, width);
            column.maxWidth = Math.max(column.maxWidth, width);
        }

        this.gridView.setColumnWidth(column, width);

        if (resize) {
            this.resize();
        }

        return this;
    },

    //=============================================================================

    showColumn: function(columnIndex, newWidth, resize) {
        var columnItem = this.getColumnItem(columnIndex);
        if (!columnItem) {
            return this;
        }
        var node = this.getHeaderNode(columnItem);
        var nodeWidth = node.width();
        var width = columnItem.originalWidth || columnItem.width || nodeWidth;
        if (Util.isnum(newWidth)) {
            width = newWidth;
            columnItem.originalWidth = newWidth;
        }
        this.setColumnWidth(columnItem.tg_index, width, resize);
        return this;
    },

    hideColumn: function(columnIndex, resize) {
        var columnItem = this.getColumnItem(columnIndex);
        if (!columnItem) {
            return this;
        }
        var node = this.getHeaderNode(columnItem);
        var nodeWidth = node.width();
        if (!Util.isnum(columnItem.originalWidth)) {
            columnItem.originalWidth = columnItem.width || nodeWidth;
        }
        this.setColumnWidth(columnItem.tg_index, 0, resize);
        return this;
    },

    //=============================================================================

    showColumns: function(columnList, newWidth, resize) {
        if (!Util.islist(columnList)) {
            return this;
        }
        for (var i = 0, l = columnList.length; i < l; i++) {
            this.showColumn(columnList[i], newWidth);
        }
        if (resize) {
            this.resize();
        }
        return this;
    },

    hideColumns: function(columnList, resize) {
        if (!Util.islist(columnList)) {
            return this;
        }
        for (var i = 0, l = columnList.length; i < l; i++) {
            this.hideColumn(columnList[i]);
        }
        if (resize) {
            this.resize();
        }
        return this;
    },

    //=============================================================================

    getColumnType: function(column) {
        if (!column) {
            return "";
        }
        var type = column.dataType;
        if (!type && typeof(column.formatter) === "string") {
            type = column.formatter;
        }
        return type;
    },

    getColumnFormatter: function(column) {
        if (!column) {
            return "";
        }
        var formatter = column.formatter;
        if (!formatter && column.dataType) {
            formatter = column.dataType;
        }
        return formatter;
    }

};

module.exports = ModelColumn;

/***/ }),

/***/ "./src/grid/model/model-common.js":
/*!****************************************!*\
  !*** ./src/grid/model/model-common.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Util = __webpack_require__(/*! ../../core/util.js */ "./src/core/util.js");

var ModelCommon = {

    // correct tree item, remove tg_, init null item
    correctTreeData: function(treeList) {
        //set false for huge data with higher performance
        if (!this.option.correctable) {
            return this;
        }

        //do NOT correct if length great than 5w
        if (treeList.length > 50000) {
            return this;
        }

        var cleanItem = function(item) {
            //remove all tg_ properties
            for (var k in item) {
                if (k.indexOf("tg_") === 0) {
                    delete item[k];
                }
            }
        };

        var initTree = function(list, parent) {

            for (var i = 0, l = list.length; i < l; i++) {
                var item = list[i];
                //correct invalid data item
                if (!item || typeof(item) !== "object") {
                    item = {};
                    list[i] = item;
                    continue;
                }

                cleanItem(item);

                //correct subs, require type is Array
                if (!Util.isarr(item.subs)) {
                    delete item.subs;
                    continue;
                }

                initTree(item.subs, item);
            }
        };

        initTree(treeList);

        return this;
    },

    // init tree data, frozen, group, level, parent, subs_length
    initTreeData: function(treeList, frozenIndex) {
        var level = 0;
        var index = 0;
        /* eslint-disable max-statements,complexity*/
        var initItem = function(item, parent) {
            //frozen handler
            item.tg_frozen = false;
            if (frozenIndex > -1 && index <= frozenIndex) {
                item.tg_frozen = true;
            }

            //allow length === 0;
            item.tg_group = false;
            item.tg_subs_length = 0;
            if (item.subs) {
                item.tg_group = true;
                item.tg_subs_length = item.subs.length;
            }

            //root tg_parent = undefined and tg_level = 0
            item.tg_parent = parent;
            var tg_level = 0;
            if (parent) {
                tg_level = parent.tg_level + 1;
                if (tg_level > level) {
                    level = tg_level;
                }
            }
            item.tg_level = tg_level;

            //next frozen index
            index += 1;
        };
        /* eslint-enable*/
        var initTree = function(list, parent) {
            //do NOT use forEach, because it doesn't support [].length = num
            var i = 0;
            var l = list.length;
            while (i < l) {
                var item = list[i];
                initItem(item, parent);
                if (item.subs) {
                    initTree(item.subs, item);
                }
                i++;
            }
        };

        initTree(treeList);

        // if is tree
        var isTree = false;
        var i = 0;
        var l = treeList.length;
        while (i < l) {
            var item = treeList[i];
            if (item.tg_group || item.rowType === "group") {
                isTree = true;
                break;
            }
            i++;
        }

        var treeInfo = {
            isTree: isTree,
            //for render column header
            maxLevel: level,
            maxIndex: index
        };

        return treeInfo;
    },

    // init list related, index
    initListData: function(list) {
        var i = 0;
        var l = list.length;
        while (i < l) {
            var item = list[i];
            item.tg_index = i;
            i++;
        }
        return this;
    },

    //=============================================================================

    forEachTree: function(tree, callback) {
        if (typeof(callback) !== "function") {
            return this;
        }
        var forEachAll = function(tree, parent) {
            if (!Util.islist(tree)) {
                return;
            }
            for (var i = 0, l = tree.length; i < l; i++) {
                var item = tree[i];
                var result = callback.call(this, item, i, parent);
                if (result === false) {
                    return false;
                }
                var subResult = forEachAll(item.subs, item);
                if (subResult === false) {
                    return false;
                }
            }
        };
        forEachAll(tree);
        return this;
    },

    forEachRow: function(callback) {
        var rows = this.getRowsData();
        this.forEachTree(rows, callback);
        return this;
    },

    forEachColumn: function(callback) {
        var columns = this.getColumnsData();
        this.forEachTree(columns, callback);
        return this;
    },

    //=============================================================================

    isRowFrozen: function(rowData) {
        if (!rowData) {
            return false;
        }
        var frozen = rowData.tg_frozen ? true : false;
        return frozen;
    },

    //=============================================================================
    //1,group
    isRowGroup: function(rowData) {
        if (!rowData) {
            return false;
        }
        if (rowData.tg_group || rowData.rowType === "group") {
            return true;
        }
        return false;
    },

    //2,empty group: no icon
    isRowEmptyGroup: function(rowData) {
        if (this.isRowGroup(rowData)) {
            if (rowData.subs && rowData.tg_subs_length === 0) {
                return true;
            }
        }
        return false;
    },

    //3,dynamic group, with icon
    isRowDynamicGroup: function(rowData) {
        if (this.isRowGroup(rowData)) {
            if (!rowData.subs) {
                return true;
            }
        }
        return false;
    },

    //=============================================================================

    isRowLeaf: function(rowData) {
        if (!rowData) {
            return false;
        }
        if (rowData.rowType === "blank") {
            return false;
        }
        if (this.isRowFrozen(rowData) || this.isRowGroup(rowData)) {
            return false;
        }
        return true;
    },

    isRowSelectable: function(rowData) {
        if (!rowData) {
            return false;
        }

        if (rowData.hasOwnProperty("selectable")) {
            var selectable = rowData.selectable ? true : false;
            return selectable;
        }

        return this.isRowLeaf(rowData);
    },

    isCellEditable: function(rowIndex, columnIndex) {
        var rowItem = this.getRowItem(rowIndex);
        if (!rowItem) {
            return false;
        }
        var columnItem = this.getColumnItem(columnIndex);
        if (!columnItem) {
            return false;
        }
        return this.gridView.isCellEditable(rowItem.tg_index, columnItem.tg_index);
    },

    //=============================================================================

    getActiveCell: function() {
        var ac = {
            row: this.gridView.activeRow,
            column: this.gridView.activeColumn,
            node: this.gridView.activeNode
        };
        return ac;
    },

    //=============================================================================
    //edit api

    updateRow: function(rowIndex, rowData) {
        var rowItem = this.getRowItem(rowIndex);
        if (!rowItem) {
            return this;
        }
        if (rowData && typeof(rowData) === "object") {
            Object.keys(rowData).forEach(function(k) {
                rowItem[k] = rowData[k];
            });
        }
        this.gridView.updateRow(rowItem.tg_index);
        return this;
    },

    updateCell: function(rowIndex, columnIndex, value) {
        var rowItem = this.getRowItem(rowIndex);
        if (!rowItem) {
            return this;
        }
        var columnItem = this.getColumnItem(columnIndex);
        if (!columnItem) {
            return this;
        }
        if (arguments.length > 2) {
            rowItem[columnItem.id] = value;
        }
        this.gridView.updateCell(rowItem.tg_index, columnItem.tg_index);
        return this;
    }



};

module.exports = ModelCommon;

/***/ }),

/***/ "./src/grid/model/model-copy.js":
/*!**************************************!*\
  !*** ./src/grid/model/model-copy.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var ModelCopy = {

    copyContent: function(content) {
        var container = this.gridView.$container.get(0);
        if (!container) {
            return false;
        }
        var textarea = document.createElement("textarea");
        textarea.style.position = "absolute";
        textarea.style.top = "-1000px";
        textarea.value = content;
        container.appendChild(textarea);

        textarea.focus();
        textarea.select();

        var succeeded = false;
        try {
            succeeded = document.execCommand("copy");
        } catch (e) {}

        container.removeChild(textarea);

        return succeeded;
    },

    copyCellText: function(rowIndex, columnIndex) {
        var cellNode = this.getCellNode(rowIndex, columnIndex);
        if (!cellNode) {
            return false;
        }
        return this.copyContent(cellNode.innerText);
    },

    copyCellHTML: function(rowIndex, columnIndex) {
        var cellNode = this.getCellNode(rowIndex, columnIndex);
        if (!cellNode) {
            return false;
        }
        return this.copyContent(cellNode.innerHTML);
    },

    copyCellValue: function(rowIndex, columnIndex) {
        var rowData = this.getRowItem(rowIndex);
        var columnData = this.getColumnItem(columnIndex);
        if (!rowData || !columnData) {
            return false;
        }
        var value = this.gridView.getCellValue(rowData, columnData);
        return this.copyContent(value);
    },

    copyRowJSON: function(rowIndex) {
        var json = this.getRowJSON(rowIndex);
        if (!json) {
            return false;
        }
        var str = JSON.stringify(json);
        return this.copyContent(str);
    }

};

module.exports = ModelCopy;

/***/ }),

/***/ "./src/grid/model/model-formatter.js":
/*!*******************************************!*\
  !*** ./src/grid/model/model-formatter.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Icon = __webpack_require__(/*! ../../core/icon.js */ "./src/core/icon.js");
var Util = __webpack_require__(/*! ../../core/util.js */ "./src/core/util.js");

var ModelFormatter = {

    //======================================================================================
    //checkbox

    getCheckboxFormatterContent: function(rowData) {

        var height = this.option.rowHeight;
        var selected = rowData.selected;

        var key = this.cache.key(["formatter", "checkbox", height, selected]);
        var html = this.cache.get(key);
        if (html) {
            return html;
        }

        var icon = Icon.getIconString("checkbox", {
            width: 20,
            height: height
        }, "checkbox_20_" + height);

        var htmlList = [];
        htmlList.push('<div class="tg-checkbox');
        if (selected) {
            htmlList.push(' tg-selected');
        }
        htmlList.push('">');
        htmlList.push(icon);
        htmlList.push('</div>');

        var content = htmlList.join("");
        this.cache.set(key, content);

        return content;
    },

    //======================================================================================
    //tree

    getTreeFormatterContent: function(rowData, formatedValue) {

        var template = this.getTreeFormatterItemTemplate(rowData);

        var content = Util.replace(template, {
            value: formatedValue,
            rowNumber: rowData.tg_row_number
        });

        return content;
    },

    getTreeFormatterItemTemplate: function(rowData) {
        var o = this.option;
        var showRowNumber = o.showRowNumber;
        var indentWidth = this.getCurrentIndentWidth();
        //console.log("getTreeFormatterItemTemplate", indentWidth);
        var isTree = o.rowsInfo.isTree;
        var isGroup = this.isRowGroup(rowData);
        var isEmptyGroup = this.isRowEmptyGroup(rowData);
        var isDynamicGroup = this.isRowDynamicGroup(rowData);
        if (isDynamicGroup) {
            //only for dynamic group
            rowData.collapsed = true;
        }
        var isCollapsed = rowData.collapsed;
        var rowLevel = Util.tonum(rowData.tg_level);

        var key = this.cache.key([
            "formatter",
            "tree",
            showRowNumber,
            indentWidth,
            isTree,
            isGroup,
            isEmptyGroup,
            isCollapsed,
            rowLevel
        ]);
        var html = this.cache.get(key);
        if (html) {
            return html;
        }

        var template = this.generateTreeFormatterItemTemplate(
            showRowNumber,
            indentWidth,
            isTree,
            isGroup,
            isEmptyGroup,
            isCollapsed,
            rowLevel
        );

        this.cache.set(key, template);

        return template;
    },

    generateTreeFormatterItemTemplate: function(
        showRowNumber,
        indentWidth,
        isTree,
        isGroup,
        isEmptyGroup,
        isCollapsed,
        rowLevel
    ) {
        // icon and level width
        var leftWidth = 15;
        // 5 space and 4px arrow center width
        var spaceWidth = 5;
        var arrowWidth = 4;

        var htmlList = [];
        var paddingLeft = indentWidth - leftWidth;
        //console.log("paddingLeft", paddingLeft);

        // add tree item first
        var itemHandler = function() {
            var itemHtmlList = [];
            var groupClass = "";
            var iconElem = "";

            if (isGroup) {
                groupClass = " tg-tree-group";

                var iconType = isCollapsed ? "tg-tree-icon-collapsed" : "tg-tree-icon-expanded";
                if (isEmptyGroup) {
                    iconType = "";
                }
                var icon = Icon.getIconString("tree_icon", {
                    width: 9,
                    height: 9
                }, "tree_icon");
                iconElem = '<div class="tg-tree-icon ' + iconType + '">' + icon + '</div>';

            }

            itemHtmlList.push('<div class="tg-tree-item' + groupClass + '" ');
            if (paddingLeft < 0) {
                itemHtmlList.push('style="padding-left:' + (leftWidth + paddingLeft) + 'px;"');
            }
            itemHtmlList.push('>');
            itemHtmlList.push(iconElem);
            itemHtmlList.push("{value}");
            itemHtmlList.push('</div>');

            var itemHtml = itemHtmlList.join("");
            htmlList.push(itemHtml);
        };
        itemHandler();

        // wapped tree level container
        var levelHandler = function() {
            while (rowLevel > 0) {
                htmlList.unshift('<div class="tg-tree-level">');
                htmlList.push('</div>');
                rowLevel -= 1;
            }
        };
        levelHandler();

        // wapped tree container
        var treeHandler = function() {
            if (paddingLeft < 0) {
                paddingLeft = 0;
            }
            htmlList.unshift('<div class="tg-tree" style="padding-left:' + paddingLeft + 'px;">');
            htmlList.push('</div>');
        };
        treeHandler();

        // add row number container finaly
        var rowNumberHandler = function() {

            if (!showRowNumber || isGroup) {
                return;
            }

            //has space between with name
            var rw = indentWidth - spaceWidth;
            // tree icon arrow center fixing
            if (isTree) {
                // do NOT overflow hidden here
                rw -= arrowWidth * 0.5;
                // min width is 12px, because collapse icon is 15px
                //rw = Math.max(rw, 12);
            }

            var rowNumberElem = '<div class="tg-tree-row-number" style="width:' + rw + 'px;">';
            rowNumberElem += "{rowNumber}";
            rowNumberElem += '</div>';
            htmlList.unshift(rowNumberElem);
        };
        rowNumberHandler();

        var template = htmlList.join("");

        return template;
    }

};

module.exports = ModelFormatter;

/***/ }),

/***/ "./src/grid/model/model-proxy.js":
/*!***************************************!*\
  !*** ./src/grid/model/model-proxy.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var ModelProxy = {

    //loading

    showLoading: function() {
        return this.gridView.showLoading.apply(this.gridView, arguments);
    },
    hideLoading: function() {
        return this.gridView.hideLoading.apply(this.gridView, arguments);
    },

    //scroll

    setScroll: function() {
        return this.gridView.setScroll.apply(this.gridView, arguments);
    },
    setScrollTop: function() {
        return this.gridView.setScrollTop.apply(this.gridView, arguments);
    },
    setScrollLeft: function() {
        return this.gridView.setScrollLeft.apply(this.gridView, arguments);
    },
    getScrollTop: function() {
        return this.gridView.getScrollTop.apply(this.gridView, arguments);
    },
    getScrollLeft: function() {
        return this.gridView.getScrollLeft.apply(this.gridView, arguments);
    },


    //property

    getScrollBarWidth: function() {
        return this.gridView.getScrollBarWidth.apply(this.gridView, arguments);
    },
    getScrollBarHeight: function() {
        return this.gridView.getScrollBarHeight.apply(this.gridView, arguments);
    },

    getScrollViewWidth: function() {
        return this.gridView.getScrollViewWidth.apply(this.gridView, arguments);
    },
    getScrollViewHeight: function() {
        return this.gridView.getScrollViewHeight.apply(this.gridView, arguments);
    },

    getScrollPaneWidth: function() {
        return this.gridView.getScrollPaneWidth.apply(this.gridView, arguments);
    },
    getScrollPaneHeight: function() {
        return this.gridView.getScrollPaneHeight.apply(this.gridView, arguments);
    },

    getVisibleRange: function() {
        return this.gridView.getVisibleRange.apply(this.gridView, arguments);
    },


    //invalidate api

    invalidateRow: function() {
        return this.gridView.invalidateRow.apply(this.gridView, arguments);
    },
    invalidateRows: function() {
        return this.gridView.invalidateRows.apply(this.gridView, arguments);
    },
    invalidateRowsExcept: function() {
        return this.gridView.invalidateRowsExcept.apply(this.gridView, arguments);
    },
    invalidateRowsFrom: function() {
        return this.gridView.invalidateRowsFrom.apply(this.gridView, arguments);
    },

    invalidateColumn: function() {
        return this.gridView.invalidateColumn.apply(this.gridView, arguments);
    },
    invalidateColumns: function() {
        return this.gridView.invalidateColumns.apply(this.gridView, arguments);
    },
    invalidateColumnsExcept: function() {
        return this.gridView.invalidateColumnsExcept.apply(this.gridView, arguments);
    },
    invalidateColumnsFrom: function() {
        return this.gridView.invalidateColumnsFrom.apply(this.gridView, arguments);
    },

    invalidateCell: function() {
        return this.gridView.invalidateCell.apply(this.gridView, arguments);
    },
    invalidateCells: function() {
        return this.gridView.invalidateCells.apply(this.gridView, arguments);
    },
    invalidateAll: function() {
        return this.gridView.invalidateAll.apply(this.gridView, arguments);
    },

    setFocus: function() {
        this.gridView.setFocus();
        return this;
    }

};

module.exports = ModelProxy;

/***/ }),

/***/ "./src/grid/model/model-row-collapse.js":
/*!**********************************************!*\
  !*** ./src/grid/model/model-row-collapse.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../../core/query.js */ "./src/core/query.js");
var E = __webpack_require__(/*! ../../core/event-type.js */ "./src/core/event-type.js");
var Util = __webpack_require__(/*! ../../core/util.js */ "./src/core/util.js");
var Icon = __webpack_require__(/*! ../../core/icon.js */ "./src/core/icon.js");

var ModelRowCollapse = {

    gridInitCollapseHandler: function() {
        var collapseAll = this.option.collapseAll;
        //collapse all tree, only handle true and false
        if (collapseAll === true) {
            this.collapseAllToData();
            return;
        }
        if (collapseAll === false) {
            this.expandAllToData();
            return;
        }
    },

    //=============================================================================
    //header

    initCollapseAllHandler: function(e, d) {

        this.option.collapseAllIconWidth = 0;

        //only for tree column
        var columnData = this.getColumnItemBy({
            formatter: "tree"
        });

        if (!columnData) {
            return;
        }
        var $node = this.getHeaderNode(columnData);

        //check and create tree-header first
        $node.find(".tg-tree-header").remove();
        var $treeHeader = $("<div/>").addClass("tg-tree-header").appendTo($node);

        //render tree-header
        this.updateCollapseAllIcon(columnData, $treeHeader);

        //save icon width
        this.option.collapseAllIconWidth = $treeHeader.width();

        //update width
        var indentWidth = this.getCurrentIndentWidth();
        $node.find(".tg-column-name").css({
            "margin-left": indentWidth + "px"
        });
        $node.find(".tg-sort-placeholder").css({
            "margin-left": indentWidth + "px"
        });
        $treeHeader.width(indentWidth);

    },

    updateCollapseAllIcon: function(columnData, $treeHeader) {
        var isTree = this.option.rowsInfo.isTree;
        var showCollapseAllIcon = this.option.showCollapseAllIcon;
        if (!isTree || !showCollapseAllIcon) {
            return;
        }

        if (typeof(showCollapseAllIcon) !== "function") {
            showCollapseAllIcon = this.showCollapseAllIconHandler;
        }

        showCollapseAllIcon.call(this, columnData, $treeHeader);

    },

    showCollapseAllIconHandler: function(columnData, $treeHeader) {
        var icon = Icon.getIconString("tree_icon", {
            width: 9,
            height: 9
        }, "tree_icon");
        var $iconElem = $('<div/>').append(icon).addClass("tg-tree-icon tg-tree-icon-all").appendTo($treeHeader);
        this.setNodeTreeIcon($iconElem, this.option.collapseAll);
    },

    //========================================================================================
    //tree handler collapsed

    expandAll: function() {
        this.option.collapseAll = false;
        this.expandAllToData();
        this.collapseAllIconHandler();
        this.gridView.invalidateAll();
        this.renderNow();
    },

    expandAllToData: function() {
        this.collapseAllToDataHandler(false);
    },

    collapseAll: function() {
        this.option.collapseAll = true;
        this.collapseAllToData();
        this.collapseAllIconHandler();
        this.gridView.invalidateAll();
        this.renderNow();
    },

    collapseAllToData: function() {
        this.collapseAllToDataHandler(true);
    },

    toggleAll: function() {
        if (this.option.collapseAll) {
            this.expandAll();
        } else {
            this.collapseAll();
        }
    },

    collapseAllToDataHandler: function(collapsed) {
        var rows = this.getRowsData();
        var setAll = function(rows, parent) {
            if (!Util.islist(rows)) {
                return;
            }
            rows.forEach(function(row) {
                if (row.subs) {
                    row.collapsed = collapsed;
                    setAll(row.subs, row);
                }
            });
        };
        setAll(rows);
    },

    collapseAllIconHandler: function() {
        if (!this.gridView.initialized) {
            return;
        }
        var collapsed = this.option.collapseAll;
        var $node = this.gridView.$headers.find(".tg-tree-icon-all");
        this.setNodeTreeIcon($node, collapsed);
    },

    //========================================================================================

    expandItem: function(rowIndex) {
        var item = this.getRowItem(rowIndex);
        if (!item) {
            return;
        }

        // no subs
        if (!item.subs) {
            this.trigger(E.onRowRequestSubs, item);
            return;
        }

        //has subs but length = 0
        if (!Util.islist(item.subs)) {
            return;
        }

        item.collapsed = false;
        this.setInvalidRow(item);
        this.collapsedItemStyleHandler(item);
        this.renderNow();
    },

    collapseItem: function(rowIndex) {
        var item = this.getRowItem(rowIndex);
        if (!item) {
            return;
        }

        //has subs but length = 0
        if (!Util.islist(item.subs)) {
            return;
        }

        item.collapsed = true;
        this.setInvalidRow(item);
        this.collapsedItemStyleHandler(item);
        this.renderNow();
    },

    toggleItem: function(rowIndex) {
        var item = this.getRowItem(rowIndex);
        if (!item) {
            return;
        }
        if (item.collapsed) {
            this.expandItem(item.tg_index);
            this.trigger(E.onRowExpand, item);
        } else {
            this.collapseItem(item.tg_index);
            this.trigger(E.onRowCollapse, item);
        }
    },

    collapsedItemStyleHandler: function(item) {
        if (!this.gridView.initialized) {
            return;
        }
        var rowNodes = this.gridView.getRowNodes(item.tg_index);
        if (!rowNodes) {
            return;
        }
        var collapsed = item.collapsed;
        //class handler
        if (collapsed) {
            rowNodes.removeClass("tg-expanded").addClass("tg-collapsed");
        } else {
            rowNodes.removeClass("tg-collapsed").addClass("tg-expanded");
        }
        //icon handler
        var $node = rowNodes.find(".tg-tree-icon");
        this.setNodeTreeIcon($node, collapsed);
    },

    //========================================================================================

    collapseParentSubs: function(rowIndex) {
        var subs = this.getRowParentSubs(rowIndex);
        if (!subs) {
            return;
        }
        this.collapseList(subs);
    },

    collapseList: function(list) {
        if (!Util.islist(list)) {
            return;
        }
        var self = this;
        var invalidItem = null;
        list.forEach(function(item) {
            if (item.collapsed || !Util.islist(item.subs)) {
                return;
            }
            item.collapsed = true;
            self.collapsedItemStyleHandler(item);
            if (!invalidItem) {
                invalidItem = item;
            }
        });
        if (invalidItem) {
            this.setInvalidRow(invalidItem);
            this.renderNow();
        }
    },

    //========================================================================================

    expandLevel: function(level) {
        level = Util.tonum(level);
        this.expandLevelData(level);
        this.gridView.invalidateAll();
        this.renderNow();
    },

    expandLevelData: function(level) {
        var rows = this.getRowsData();
        var setAll = function(rows, parent) {
            if (!Util.islist(rows)) {
                return;
            }
            rows.forEach(function(row) {
                if (row.subs) {
                    if (row.tg_level <= level) {
                        row.collapsed = false;
                    } else {
                        row.collapsed = true;
                    }
                    setAll(row.subs, row);
                }
            });
        };
        setAll(rows);
    },

    //========================================================================================

    setNodeTreeIcon: function($node, collapsed) {
        if (!$node) {
            return;
        }
        $node.removeClass("tg-tree-icon-collapsed tg-tree-icon-expanded");
        if (collapsed) {
            $node.addClass("tg-tree-icon-collapsed");
        } else {
            $node.addClass("tg-tree-icon-expanded");
        }
    }

};

module.exports = ModelRowCollapse;

/***/ }),

/***/ "./src/grid/model/model-row-dragdrop.js":
/*!**********************************************!*\
  !*** ./src/grid/model/model-row-dragdrop.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../../core/query.js */ "./src/core/query.js");
var E = __webpack_require__(/*! ../../core/event-type.js */ "./src/core/event-type.js");
var Util = __webpack_require__(/*! ../../core/util.js */ "./src/core/util.js");

var ModelRowDragdrop = {

    //row drag handler
    rowDragStartHandler: function(e, d) {

        //console.log(e.type, d);
        var dragRow = d.dragRow;
        //console.log(row);
        if (!dragRow) {
            return;
        }

        var rowTop = this.gridView.getRowTop(dragRow.tg_index);
        d.dragStartTop = rowTop;
        d.dragRowHeight = this.option.rowHeight;
        //half row height if no offsetY
        d.dragOffsetY = d.e.offsetY || d.dragRowHeight * 0.5;

        var dragNodes = this.gridView.getRowNodes(dragRow.tg_index);
        if (!dragNodes) {
            return;
        }
        d.dragNodes = dragNodes;

        var dragCloneNodes = this.getRowDragCloneNodes(dragNodes);
        d.dragCloneNodes = dragCloneNodes;

        var dropPlaceholder = this.getRowDropPlaceholder(dragNodes);
        d.dropPlaceholder = dropPlaceholder;

        this.rowDragPositionHandler(d);

        this.rowDragCollapseHandler(dragRow);

        this.addRowStatus(dragRow, "dragging");

        this.rowDragDropListHandler(d);

    },

    rowDragUpdateHandler: function(e, d) {
        //console.log(e.type, d);
        this.rowDragPositionHandler(d);

        this.rowDragPlaceholderHandler(d);

        //TODO
        this.rowDragAutoScrollHandler(d);

    },

    rowDragCompleteHandler: function(e, d) {

        if (!d.valid) {
            return;
        }

        //console.log(e.type, d);
        this.rowDragCleanHandler(d);

        //sort
        this.rowDragSortHandler(d);

        //drag drop
        this.trigger(E.onRowDropped, d);

    },

    rowDragCleanHandler: function(d) {

        if (d.dragRow) {
            this.removeRowStatus(d.dragRow, "dragging");
        }

        if (d.dragCloneNodes) {
            d.dragCloneNodes.remove();
            d.dragCloneNodes = null;
        }

        if (d.dropPlaceholder) {
            d.dropPlaceholder.remove();
            d.dropPlaceholder = null;
        }
    },

    rowDragPositionHandler: function(d) {
        var currentTop = d.dragStartTop + d.mouseOffsetY;
        d.dragCurrentTop = currentTop;
        //console.log(d);
        //move
        d.dragCloneNodes.each(function(index, elem) {
            var node = $(elem);
            node.css("top", currentTop);
        });
    },

    rowDragCollapseHandler: function(item) {

        //parent subs, include self
        if (!this.option.rowDragDropMultiLevel) {
            this.collapseParentSubs(item);
            return;
        }

        //always collapse self
        this.collapseItem(item);

    },

    rowDragDropListHandler: function(d) {
        var dropList = [];
        var rows = this.getRowDragDropList(d);
        //console.log(rows);
        if (Util.islist(rows)) {
            var self = this;
            rows.forEach(function(row) {
                var top = self.gridView.getRowTop(row.tg_index);
                dropList.push({
                    row: row,
                    top: top
                });
            });
        }
        d.dropList = dropList;
    },

    getRowDragDropList: function(d) {
        var multiLevel = this.option.rowDragDropMultiLevel;

        //default only parent subs
        if (!multiLevel) {
            var parentSubs = this.getRowParentSubs(d.dragRow);
            return parentSubs;
        }

        //custom filter
        if (typeof(multiLevel) === "function") {
            var results = multiLevel.call(this, d);
            return results;
        }

        //all visible rows
        var rows = [];
        var visibleRows = this.gridView.getVisibleRowList();
        var self = this;
        visibleRows.forEach(function(rowIndex) {
            var row = self.getRowItem(rowIndex);
            rows.push(row);
        });

        return rows;
    },

    getRowDragCloneNodes: function(dragNodes) {
        var dragCloneNodes = $();
        dragNodes.each(function(index, elem) {
            var node = $(elem);
            var nodeCopy = node.clone();
            nodeCopy.appendTo(node.parent());
            dragCloneNodes = dragCloneNodes.add(nodeCopy);
        });
        dragCloneNodes.removeClass("tg-pane-first").addClass("tg-clone");
        return dragCloneNodes;
    },

    getRowDropPlaceholder: function(dragNodes) {
        var dropPlaceholder = $();
        dragNodes.each(function(index, elem) {
            var node = $(elem);
            var holder = $("<div/>").addClass("tg-row-placeholder").hide();
            holder.appendTo(node.parent());
            dropPlaceholder = dropPlaceholder.add(holder);
        });
        return dropPlaceholder;
    },
    /* eslint-disable max-statements,complexity*/
    rowDropInfoHandler: function(d) {

        var dropList = d.dropList;
        if (!Util.islist(dropList)) {
            return;
        }

        d.dropRow = null;
        d.dropBottom = false;
        d.dropLast = false;

        /* jshint ignore:start */

        var dragCurrentTop = d.dragCurrentTop;
        var dragOffsetY = d.dragOffsetY;
        var dragRowHeight = d.dragRowHeight;

        var pos = dragCurrentTop + dragOffsetY;

        var i, item;
        var length = dropList.length;
        for (i = 0; i < length; i++) {
            item = dropList[i];
            if (!item.row.draggable) {
                continue;
            }
            if (pos <= item.top + dragRowHeight * 0.5) {
                d.dropRow = item.row;
                break;
            }
            if (pos <= item.top + dragRowHeight) {
                d.dropRow = item.row;
                d.dropBottom = true;
                break;
            }
        }

        if (!d.dropRow) {
            if (item) {
                d.dropRow = item.row;
            }
            d.dropBottom = true;
            d.dropLast = true;
        }

        if (i === length - 1) {
            d.dropLast = true;
        }

        /* jshint ignore:end */

    },
    /* eslint-enable*/
    rowDragPlaceholderHandler: function(d) {

        var previousDropRow = null;
        if (d.dropRow) {
            previousDropRow = d.dropRow;
        }

        this.rowDropInfoHandler(d);

        var dropRow = d.dropRow;
        if (!dropRow) {
            return;
        }

        //update placeholder
        var updatePlaceholderTop = function(d, dropRow) {
            var top = this.gridView.getRowTop(dropRow.tg_index);
            if (d.dropBottom) {
                top += d.dragRowHeight;
            }
            if (d.dropLast) {
                top -= 2;
            }
            var dropPlaceholder = d.dropPlaceholder;
            if (dropPlaceholder) {
                dropPlaceholder.css("top", top).show();
            }
        };
        updatePlaceholderTop.call(this, d, dropRow);


        //update dropping row
        var updateDroppingRow = function(d, dropRow, previousDropRow) {
            if (dropRow === previousDropRow) {
                return;
            }
            if (previousDropRow) {
                this.removeRowStatus(previousDropRow, "dropping");
            }
            this.addRowStatus(dropRow, "dropping");
        };
        updateDroppingRow.call(this, d, dropRow, previousDropRow);

    },

    rowDragAutoScrollHandler: function(d) {

        //var dropList = d.dropList;


    },

    rowDragSortHandler: function(d) {

        var dragRow = d.dragRow;
        var dropRow = d.dropRow;
        //no change
        if (!dropRow || dragRow === dropRow) {
            return;
        }

        //remove from current list
        var removeFromPreviousList = function(dragRow) {
            var currentList = this.getRowParentSubs(dragRow);
            if (!Util.islist(currentList)) {
                return;
            }
            for (var i = 0, l = currentList.length; i < l; i++) {
                if (dragRow === currentList[i]) {
                    currentList.splice(i, 1);
                    break;
                }
            }
        };
        removeFromPreviousList.call(this, dragRow);
        /* eslint-disable max-statements,complexity*/
        //add to target list
        var addToTargetList = function(dragRow, dropBottom) {

            //add below group first
            if (dropBottom && dropRow.subs && (!dropRow.collapsed || !dropRow.subs.length)) {
                dropRow.subs.unshift(dragRow);
                return;
            }

            //insert to parent subs position
            var targetList = this.getRowParentSubs(dropRow);
            if (!Util.islist(targetList)) {
                return;
            }
            var insertToTargetList = function(targetList, dragRow, dropBottom) {
                for (var i = 0, l = targetList.length; i < l; i++) {
                    if (dropRow === targetList[i]) {
                        if (dropBottom) {
                            targetList.splice(i + 1, 0, dragRow);
                        } else {
                            targetList.splice(i, 0, dragRow);
                        }
                        break;
                    }
                }
            };
            insertToTargetList(targetList, dragRow, dropBottom);

        };
        /* eslint-enable*/

        addToTargetList.call(this, dragRow, d.dropBottom);


        //invalidate first
        var dragIndex = dragRow.tg_index;
        if (dragRow.tg_parent) {
            dragIndex -= 1;
        }
        var index = Math.min(dragIndex, dropRow.tg_index);
        this.invalidateRowsFrom(index);

        //fresh data index
        this.removeSortStatus();
        this.initRowsData();

        this.renderNow();

    }

};

module.exports = ModelRowDragdrop;

/***/ }),

/***/ "./src/grid/model/model-row-focus.js":
/*!*******************************************!*\
  !*** ./src/grid/model/model-row-focus.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Util = __webpack_require__(/*! ../../core/util.js */ "./src/core/util.js");
var E = __webpack_require__(/*! ../../core/event-type.js */ "./src/core/event-type.js");

var ModelRowFocus = {

    //focus row
    setFocusedRow: function(rowIndex, e) {
        var item = this.getRowItem(rowIndex);
        if (!item) {
            return;
        }
        if (Util.hasCtrlKey(e)) {
            this.multiFocusHandler(item);
            return;
        }
        this.singleFocusHandler(item);
    },

    //==============================================================================

    getFocusedRow: function() {
        var focusedRow = null;
        var focusedRows = this.getFocusedRows();
        if (focusedRows.length) {
            focusedRow = focusedRows[0];
        }
        return focusedRow;
    },

    getFocusedRows: function() {
        var focusedRows = [];
        this.forEachRow(function(row, i, parent) {
            if (row.focused) {
                focusedRows.push(row);
            }
        });
        if (focusedRows.length > 1) {
            //sort by order
            focusedRows.sort(function(a, b) {
                var av = a.tg_focused_order;
                var bv = b.tg_focused_order;
                if (av > bv) {
                    return 1;
                }
                if (av < bv) {
                    return -1;
                }
                return 0;
            });
        }
        return focusedRows;
    },

    //==============================================================================

    unsetFocusedRow: function(rowIndex) {
        //single focused
        if (arguments.length) {
            var item = this.getRowItem(rowIndex);
            if (item) {
                this.removeRowFocused(item);
            }
            return this;
        }
        //focused all rows
        this.unsetAllFocusedRows();
        return this;
    },

    unsetAllFocusedRows: function() {
        var self = this;
        this.forEachRow(function(row, i, parent) {
            if (row.focused) {
                self.removeRowFocused(row);
            }
        });
        return this;
    },

    //==============================================================================

    singleFocusHandler: function(item) {
        this.unsetAllFocusedRows(false);
        this.addRowFocused(item);
        this.updateFocusedStatus();
    },

    multiFocusHandler: function(item) {
        if (item.focused) {
            this.unsetFocusedRow(item.tg_index);
        } else {
            this.addRowFocused(item);
        }
        this.updateFocusedStatus();
    },

    updateFocusedStatus: function() {
        //onFocusedChanged
        var focusedRows = this.getFocusedRows();
        var focusedLength = focusedRows.length;
        var focusedRow = focusedRows[0];

        if (focusedLength === this.previousFocusedLength && focusedRow === this.previousFocusedRow) {
            return;
        }
        this.previousFocusedLength = focusedLength;
        this.previousFocusedRow = focusedRow;

        var d = {
            focusedLength: focusedLength,
            focusedRow: focusedRow,
            focusedRows: focusedRows
        };

        this.trigger(E.onFocusedChanged, d);
    },

    //==============================================================================

    //init global order for multi sorting
    global_tg_focused_order: 0,

    //change row focused
    addRowFocused: function(rowItem) {
        if (!rowItem) {
            return this;
        }
        this.addRowStatus(rowItem, "focused");
        // add order for multipe items order
        rowItem.tg_focused_order = this.global_tg_focused_order++;

        return this;
    },

    removeRowFocused: function(rowItem) {
        if (!rowItem) {
            return this;
        }
        this.removeRowStatus(rowItem, "focused");
        return this;
    }

};

module.exports = ModelRowFocus;

/***/ }),

/***/ "./src/grid/model/model-row-number.js":
/*!********************************************!*\
  !*** ./src/grid/model/model-row-number.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Util = __webpack_require__(/*! ../../core/util.js */ "./src/core/util.js");

var ModelRowNumber = {

    //row number handler

    isShowRowNumber: function(rowData) {
        if (rowData.tg_invisible) {
            return false;
        }
        if (rowData.tg_frozen) {
            return false;
        }
        if (rowData.rowType === "blank") {
            return false;
        }
        //default is undefined for true
        if (rowData.showRowNumber === false) {
            return false;
        }
        return true;
    },

    showRowNumberHandler: function(rowData, listNumber, leafNumber) {

        if (!this.isShowRowNumber(rowData)) {
            return "";
        }

        // default use leaf number
        if (this.option.rowNumberType === "list") {
            return listNumber;
        }
        return leafNumber;
    },

    gridRowNumberHandler: function() {

        this.option.rowNumber = "";
        this.option.rowNumberWidth = 0;

        // should be a function
        var showRowNumber = this.option.showRowNumber;
        if (!showRowNumber) {
            return this;
        }
        if (typeof(showRowNumber) !== "function") {
            showRowNumber = this.showRowNumberHandler;
        }

        var rows = this.getRowsData();

        var rowNumber = "";
        var leafNumber = 1;

        var self = this;

        var rowAll = function(rows, parent) {
            if (!Util.islist(rows)) {
                return;
            }

            var listNumber = 1;
            rows.forEach(function(rowData) {

                if (self.isRowGroup(rowData)) {

                    rowData.tg_row_number = "";
                    rowAll(rowData.subs, rowData);

                } else {

                    var number = showRowNumber.call(self, rowData, listNumber, leafNumber);
                    rowData.tg_row_number = number;

                    // number ++
                    if (number) {
                        // current number for width
                        number += "";
                        if (rowNumber.length <= number.length) {
                            rowNumber = number;
                        }

                        listNumber += 1;
                        leafNumber += 1;

                    }
                }

            });
        };

        rowAll(rows);

        this.option.rowNumber = rowNumber;
        this.option.rowNumberWidth = this.gridView.getTextWidth(rowNumber);

        //console.log("gridRowNumberHandler", this.option.rowNumberWidth);

    }

};

module.exports = ModelRowNumber;

/***/ }),

/***/ "./src/grid/model/model-row-select.js":
/*!********************************************!*\
  !*** ./src/grid/model/model-row-select.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../../core/query.js */ "./src/core/query.js");
var E = __webpack_require__(/*! ../../core/event-type.js */ "./src/core/event-type.js");
var Util = __webpack_require__(/*! ../../core/util.js */ "./src/core/util.js");
var Icon = __webpack_require__(/*! ../../core/icon.js */ "./src/core/icon.js");

var ModelRowSelect = {

    gridInitSelectedHandler: function() {
        if (!this.option.multiSelect) {
            return;
        }
        var selectedAll = this.option.selectedAll;
        //specified true
        if (selectedAll === true) {
            this.selectAllToData();
            return;
        }
        //specified false
        if (selectedAll === false) {
            this.unselectAllToData();
            return;
        }
    },

    //=============================================================================
    //checkbox all handler

    isShowCheckboxAll: function() {
        var showCheckbox = this.option.showCheckbox;
        var showCheckboxAll = this.option.showCheckboxAll;
        var multiSelect = this.option.multiSelect;
        if (!showCheckbox || !showCheckboxAll || !multiSelect) {
            return false;
        }
        return true;
    },

    initCheckboxAllHandler: function(e, d) {
        if (!this.isShowCheckboxAll()) {
            return;
        }
        //only for checkbox column
        var columnData = this.gridPrivateColumns.checkbox;
        var showCheckboxAll = this.option.showCheckboxAll;
        if (typeof(showCheckboxAll) !== "function") {
            showCheckboxAll = this.showCheckboxAllHandler;
        }
        var $node = this.getHeaderNode(columnData);
        var $name = $node.find(".tg-column-name");
        showCheckboxAll.call(this, columnData, $name);
    },

    showCheckboxAllHandler: function(columnData, $node) {
        //header size is 12px
        var icon = Icon.getIconString("checkbox", {
            width: 20,
            height: 20
        }, "checkbox_20_20");
        var $checkboxAll = $("<div/>").append(icon).addClass("tg-checkbox tg-checkbox-all");
        if (this.option.selectedAll) {
            $checkboxAll.addClass("tg-selected");
        }
        $node.empty().append($checkboxAll);
    },

    updateCheckboxAll: function(selectedAll) {
        if (!this.isShowCheckboxAll()) {
            return;
        }
        var columnData = this.gridPrivateColumns.checkbox;
        var $node = this.getHeaderNode(columnData);
        var $checkboxAll = $node.find(".tg-checkbox-all");
        if (!$checkboxAll.length) {
            return;
        }
        $checkboxAll.removeClass("tg-mixed");
        $checkboxAll.removeClass("tg-selected");
        if (selectedAll === false) {
            return;
        }
        if (selectedAll === true) {
            $checkboxAll.addClass("tg-selected");
            return;
        }
        $checkboxAll.addClass("tg-mixed");
    },

    updateSelectedAll: function(selectedLength, selectedAll) {
        var selectedChanged = false;
        if (selectedAll !== this.previousSelectedAll) {
            this.previousSelectedAll = selectedAll;
            this.updateCheckboxAll(selectedAll);
            selectedChanged = true;
        }

        if (selectedLength !== this.previousSelectedLength) {
            this.previousSelectedLength = selectedLength;
            selectedChanged = true;
        }

        if (!selectedChanged) {
            return this;
        }

        this.trigger(E.onSelectedChanged, {
            selectedLength: selectedLength,
            totalSelectable: this.totalSelectable,
            selectedAll: selectedAll
        });

        return this;
    },

    checkboxAllClickHandler: function(e, d) {

        //toggle selected status
        var selectedAll = false;
        var $checkboxAll = $(d.node);
        if ($checkboxAll.hasClass("tg-selected") || $checkboxAll.hasClass("tg-mixed")) {
            selectedAll = true;
        }
        selectedAll = !selectedAll;

        //update new status
        this.option.selectedAll = selectedAll;

        //update all status
        if (selectedAll) {
            this.selectAll();
        } else {
            this.unselectAll();
        }
    },

    //=============================================================================
    //select/unselect all

    selectAll: function() {
        if (!this.option.multiSelect) {
            return;
        }
        this.selectAllToData();
        this.updateVisibleSelectableRowsStatus();
        this.totalSelectable = this.getTotalSelectable();
        this.updateSelectedAll(this.totalSelectable, true);
        return this;
    },

    selectAllToData: function() {
        //reset global order for selected all
        this.global_tg_selected_order = 0;
        var self = this;
        this.forEachSelectableRows(function(row, i, parent) {
            row.selected = true;
            row.tg_selected_order = self.global_tg_selected_order++;
        });
        return this;
    },

    unselectAll: function() {
        this.unselectAllToData();
        this.updateVisibleSelectableRowsStatus();
        this.totalSelectable = this.getTotalSelectable();
        this.updateSelectedAll(0, false);
        return this;
    },

    unselectAllToData: function() {
        this.forEachSelectableRows(function(row, i, parent) {
            row.selected = false;
        });
        return this;
    },

    updateVisibleSelectableRowsStatus: function() {
        var visibleRange = this.getVisibleRange();
        var rowList = visibleRange.rowList;
        var self = this;
        rowList.forEach(function(rowIndex) {
            var rowItem = self.getRowItem(rowIndex);
            if (self.isRowSelectable(rowItem)) {
                self.updateRowSelected(rowItem);
            }
        });
        return this;
    },

    //=============================================================================

    //init global order for multi selection sorting
    global_tg_selected_order: 0,

    //change row selected
    addRowSelected: function(rowItem) {
        if (!rowItem) {
            return this;
        }
        this.addRowStatus(rowItem, "selected");
        // add order for multipe items order
        rowItem.tg_selected_order = this.global_tg_selected_order++;

        this.updateRowCheckbox(rowItem);

        return this;
    },

    removeRowSelected: function(rowItem) {
        if (!rowItem) {
            return this;
        }
        this.removeRowStatus(rowItem, "selected");
        this.updateRowCheckbox(rowItem);
        return this;
    },

    updateRowSelected: function(rowItem) {
        if (!rowItem) {
            return this;
        }
        this.updateRowStatus(rowItem, "selected");
        this.updateRowCheckbox(rowItem);
        return this;
    },

    updateRowCheckbox: function(rowItem) {

        var showCheckbox = this.option.showCheckbox;
        if (!showCheckbox) {
            return this;
        }

        // update row checkbox
        this.updateCell(rowItem.tg_index, this.gridPrivateColumns.checkbox.tg_index);

        this.updateSelectedStatus();

    },

    updateSelectedStatus: function() {
        // async update for checkbox all
        Util.getRhythm(this, "updateSelectedStatus").debounce({
            delay: 100,
            callback: this.updateSelectedStatusNow
        });
    },

    updateSelectedStatusNow: function() {
        this.totalSelectable = this.getTotalSelectable();
        var selectedRows = this.getSelectedRows();
        var selectedLength = selectedRows.length;
        var selectedAll = null;
        if (selectedLength === 0) {
            selectedAll = false;
            //remove shift status for multi selection if noting selected
            this.multiSelectShiftFocus = null;
        } else if (selectedLength === this.totalSelectable) {
            selectedAll = true;
        }
        this.updateSelectedAll(selectedLength, selectedAll);
        return this;
    },

    //=============================================================================

    //set selected row
    setSelectedRow: function(rowIndex, e) {

        var toBeSelectedRows = this.getToBeSelectedRows(rowIndex, e);
        if (!toBeSelectedRows.length) {
            return this;
        }

        if (!this.isKeepExistSelections(e)) {
            this.unsetAllSelectedRows();
        }

        //select or unselect to be selected list
        var rowItem = this.getRowItem(rowIndex);
        var toBeSelected = !rowItem.selected;
        var self = this;
        toBeSelectedRows.forEach(function(item) {
            self.multiSelectShiftFocus = item;
            if (toBeSelected) {
                self.addRowSelected(item);
            } else {
                self.removeRowSelected(item);
            }
        });
        return this;
    },

    //=============================================================================

    getTotalToBeSelected: function(rowIndex, e) {
        var hasSelectedRows = this.getSelectedRows();
        var hasLength = hasSelectedRows.length;

        var toBeSelectedRows = this.getToBeSelectedRows(rowIndex, e);
        var toBeLength = toBeSelectedRows.length;
        if (!toBeLength) {
            return hasLength;
        }

        var currentRow = this.getRowItem(rowIndex);
        if (this.isKeepExistSelections(e)) {

            //repetitive selected fixing
            var repetitive = 0;
            toBeSelectedRows.forEach(function(row) {
                if (row.selected) {
                    repetitive += 1;
                }
            });
            hasLength -= repetitive;

            if (currentRow.selected) {
                return hasLength;
            }
            return hasLength + toBeLength;

        }

        return toBeLength;

    },

    getToBeSelectedRows: function(rowIndex, e) {
        var rowItem = this.getRowItem(rowIndex);
        if (!rowItem) {
            return [];
        }
        if (!this.isRowSelectable(rowItem)) {
            return [];
        }
        var toBeList = [rowItem];
        if (this.option.multiSelect) {
            toBeList = this.getMultiToBeSelectedRows(rowItem, e);
        }
        return toBeList;
    },

    getMultiToBeSelectedRows: function(rowItem, e) {
        var toBeList = [rowItem];
        var multiSelectModel = this.getMultiSelectModel();
        if (multiSelectModel === "shift") {
            toBeList = this.getMultiShiftToBeSelectedRows(rowItem, e);
        } else if (multiSelectModel === "ctrl,shift") {
            toBeList = this.getMultiCtrlShiftToBeSelectedRows(rowItem, e);
        }
        return toBeList;
    },

    //=============================================================================

    getMultiShiftToBeSelectedRows: function(rowItem, e) {
        var toBeList = [rowItem];
        if (Util.hasShiftKey(e)) {
            var focus = this.multiSelectShiftFocus;
            if (focus) {
                var index1 = focus.tg_index;
                var index2 = rowItem.tg_index;
                if (index1 !== index2) {
                    toBeList = this.generateMultiShiftToBeSelectedRows(index1, index2);
                }
            }
        }
        return toBeList;
    },

    generateMultiShiftToBeSelectedRows: function(index1, index2) {
        var toBeList = [];
        var self = this;
        var pushItem = function(index) {
            var item = self.getRowItem(index);
            if (item && self.isRowSelectable(item)) {
                toBeList.push(item);
            }
        };
        if (index1 < index2) {
            for (var i = index1; i <= index2; i++) {
                pushItem(i);
            }
        } else {
            for (var j = index1; j >= index2; j--) {
                pushItem(j);
            }
        }
        return toBeList;
    },

    //=============================================================================

    getMultiCtrlShiftToBeSelectedRows: function(rowItem, e) {
        var toBeList = [rowItem];
        if (Util.hasShiftKey(e)) {
            toBeList = this.getMultiShiftToBeSelectedRows(rowItem, e);
        }
        return toBeList;
    },

    //=============================================================================

    /* eslint-disable complexity */
    isKeepExistSelections: function(e) {
        if (this.option.multiSelect) {
            var multiSelectModel = this.getMultiSelectModel();
            if (multiSelectModel === "" || multiSelectModel === "shift") {
                return true;
            }
            if (multiSelectModel === "ctrl" && Util.hasCtrlKey(e)) {
                return true;
            }
            if (multiSelectModel === "ctrl,shift" && (Util.hasCtrlKey(e) || Util.hasShiftKey(e))) {
                return true;
            }
        }
        return false;
    },
    /* eslint-enable */

    //=============================================================================

    //depends on multiSelectKey option
    getMultiSelectModel: function() {
        var model = this.option.multiSelectModel;
        if (typeof(model) === "string") {
            return model;
        }

        var keys = ["has"];
        var multiSelectKey = (this.option.multiSelectKey + "").toLowerCase();
        if (multiSelectKey.indexOf("ctrl") !== -1) {
            keys.push("ctrl");
        }
        if (multiSelectKey.indexOf("shift") !== -1) {
            keys.push("shift");
        }

        var key = keys.join("_");
        var models = {
            has_shift: "shift",
            has: "",
            has_ctrl_shift: "ctrl,shift",
            has_ctrl: "ctrl"
        };

        model = models[key];
        this.option.multiSelectModel = model;

        return model;
    },

    //=============================================================================

    //get single/first selected row
    getSelectedRow: function() {
        var selectedRow = null;
        var selectedRows = this.getSelectedRows();
        if (selectedRows.length) {
            selectedRow = selectedRows[0];
        }
        return selectedRow;
    },

    //get all selected rows
    getSelectedRows: function() {
        var selectedRows = [];
        this.forEachSelectableRows(function(row, i, parent) {
            if (row.selected) {
                selectedRows.push(row);
            }
        });
        if (selectedRows.length > 1) {
            //sort by order
            selectedRows.sort(function(a, b) {
                var av = a.tg_selected_order;
                var bv = b.tg_selected_order;
                if (av > bv) {
                    return 1;
                }
                if (av < bv) {
                    return -1;
                }
                return 0;
            });
        }
        return selectedRows;
    },

    //=============================================================================

    //unselected
    unsetSelectedRow: function(rowIndex) {
        //single unselected
        if (arguments.length) {
            var item = this.getRowItem(rowIndex);
            if (item) {
                this.removeRowSelected(item);
            }
            return;
        }
        //unselected all rows
        this.unsetAllSelectedRows();
    },

    unsetAllSelectedRows: function() {
        var self = this;
        this.forEachSelectableRows(function(row, i, parent) {
            if (row.selected) {
                self.removeRowSelected(row);
            }
        });
    },

    //=============================================================================
    //for each all selectable rows
    //update total selectable number, for checkbox all status

    forEachSelectableRows: function(callback) {
        if (typeof(callback) !== "function") {
            return this;
        }
        var self = this;
        this.forEachRow(function(item, i, parent) {
            if (self.isRowSelectable(item)) {
                callback.call(this, item, i, parent);
            }
        });
        return this;
    },

    getTotalSelectable: function() {
        var total = 0;
        var self = this;
        this.forEachRow(function(item) {
            if (self.isRowSelectable(item)) {
                total += 1;
            }
        });
        return total;
    }

};

module.exports = ModelRowSelect;

/***/ }),

/***/ "./src/grid/model/model-row.js":
/*!*************************************!*\
  !*** ./src/grid/model/model-row.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var E = __webpack_require__(/*! ../../core/event-type.js */ "./src/core/event-type.js");
var Util = __webpack_require__(/*! ../../core/util.js */ "./src/core/util.js");
var ServiceExport = __webpack_require__(/*! ../service/service-export.js */ "./src/grid/service/service-export.js");

var ModelRow = {

    //=============================================================================
    //rows handler

    //init data before created, only for first time
    gridInitRowsDataHandler: function() {
        this.gridInitDataTypeHandler();
        this.gridInitSortHandler();
        this.gridInitSelectedHandler();
        this.gridInitCollapseHandler();
        return this;
    },

    gridInitDataTypeHandler: function() {

        if (!this.option.convertDataType) {
            return;
        }

        //for now only convert: dataType === "number"
        var idList = [];
        this.gridColumnsData.forEach(function(column) {
            if (column.dataType === "number") {
                idList.push(column.id);
            }
        });

        if (!idList.length) {
            return;
        }

        this.forEachRow(function(row, i, parent) {
            idList.forEach(function(key) {
                row[key] = Util.convertNum(row[key]);
            });
        });

    },

    //========================================================================================

    gridRowsDataHandler: function() {

        //row filter
        this.gridRowFilterHandler();

        //sort
        this.gridSortHandler();

        //row number
        this.gridRowNumberHandler();

        this.gridRowsData.length = 0;

        var self = this;
        var rows = this.getRowsData();

        var appendRows = function(rows, parent) {
            if (!Util.islist(rows)) {
                return;
            }
            var list_length = rows.length;
            var list_index = 0;
            rows.forEach(function(row) {

                if (row.tg_invisible) {
                    return;
                }

                //for last, 0 is first
                row.tg_list_length = list_length;
                //update list index for current subs list after sort
                row.tg_list_index = list_index;
                list_index++;

                self.gridRowsData.push(row);

                //collapsed filter
                if (row.tg_group && row.collapsed) {
                    return;
                }

                appendRows(row.subs, row);

            });
        };

        appendRows(rows);

        //console.log(this.gridRowsData, rows);

        //update row index
        this.initListData(this.gridRowsData);

        return this;
    },

    //=============================================================================
    //filter handler

    gridRowFilterHandler: function() {

        var rowFilter = this.option.rowFilter;
        if (typeof(rowFilter) !== "function") {
            rowFilter = function(rowItem) {
                return true;
            };
        }
        //return true:visible or false:invisible

        //set tg_invisible
        this.forEachRow(function(row, i, parent) {

            var invisible = false;

            if (typeof(row.invisible) === "boolean") {
                invisible = row.invisible;
            } else {
                var visible = rowFilter.call(this, row);
                invisible = !visible;
            }

            row.tg_invisible = invisible;

            //parent should be visible if subs is visible
            if (!invisible) {
                var current = row;
                while (current.tg_parent) {
                    current.tg_parent.tg_invisible = false;
                    current = current.tg_parent;
                }
            }

        });
        return this;
    },

    //=============================================================================

    getCurrentIndentWidth: function() {
        var o = this.option;
        var showRowNumber = o.showRowNumber;
        var isTree = o.rowsInfo.isTree;

        //1, tree icon width
        var treeIconWidth = 0;
        if (isTree) {
            treeIconWidth = 15;
        }

        //2, row number width
        var rowNumberWidth = 0;
        if (showRowNumber) {
            rowNumberWidth = o.rowNumberWidth;
        }

        //3, all icon width
        var collapseAllIconWidth = 0;
        if (isTree) {
            collapseAllIconWidth = o.collapseAllIconWidth;
        }

        var indentWidth = Math.max(treeIconWidth, rowNumberWidth, collapseAllIconWidth);

        //4, space width
        var spaceWidth = 5;
        if (indentWidth) {
            indentWidth += spaceWidth;
        }

        return indentWidth;
    },

    //=============================================================================
    //add/insert rows

    initRowInfo: function(rowInfo) {
        if (!rowInfo) {
            return null;
        }
        if (typeof(rowInfo) !== "object") {
            rowInfo = {
                name: rowInfo
            };
        }
        return rowInfo;
    },

    initRowList: function(rowList) {
        var list = [];
        if (!Util.islist(rowList)) {
            return list;
        }
        var self = this;
        rowList.forEach(function(rowInfo) {
            rowInfo = self.initRowInfo(rowInfo);
            if (!rowInfo) {
                return;
            }
            list.push(rowInfo);
        });
        return list;
    },

    initRowSubs: function(rowIndex) {
        var subs = this.rows;
        if (rowIndex !== null) {
            var rowItem = this.getRowItem(rowIndex);
            if (!rowItem) {
                return null;
            }
            //update row to group
            if (!rowItem.subs) {
                rowItem.subs = [];
                //invalidate to group
                this.invalidateRow(rowItem.tg_index);
            }
            subs = rowItem.subs;
        }
        return subs;
    },

    //=============================================================================

    insertRowBefore: function(rowInfo, rowIndex, scrollTo) {
        return this.insertRowsBefore([rowInfo], rowIndex, scrollTo);
    },

    insertRowsBefore: function(rowList, rowIndex, scrollTo) {
        return this.insertRowsTo(rowList, rowIndex, scrollTo, 0);
    },

    insertRowAfter: function(rowInfo, rowIndex, scrollTo) {
        return this.insertRowsAfter([rowInfo], rowIndex, scrollTo);
    },

    insertRowsAfter: function(rowList, rowIndex, scrollTo) {
        return this.insertRowsTo(rowList, rowIndex, scrollTo, 1);
    },

    insertRowsTo: function(rowList, rowIndex, scrollTo, offset) {
        var rowItem = this.getRowItem(rowIndex);
        if (!rowItem) {
            return false;
        }

        var insertList = this.initRowList(rowList);
        if (!insertList.length) {
            return false;
        }

        var parentSubs = this.getRowParentSubs(rowItem.tg_index);
        var index = rowItem.tg_list_index + offset;
        this.addRowsHandler(insertList, parentSubs, index, scrollTo);
        return true;
    },

    //=============================================================================

    //push to root
    addRow: function(rowItem, scrollTo) {
        return this.addRows([rowItem], scrollTo);
    },

    addRows: function(rowList, scrollTo) {
        return this.addRowsTo(rowList, null, scrollTo);
    },

    //add to parent/root
    addRowsTo: function(rowList, rowIndex, scrollTo) {
        var addList = this.initRowList(rowList);
        if (!addList.length) {
            return false;
        }

        var subs = this.initRowSubs(rowIndex);
        if (!subs) {
            return false;
        }

        this.addRowsHandler(addList, subs, subs.length, scrollTo);
        return true;
    },

    //private API
    addRowsHandler: function(rows, list, index, scrollTo) {
        var args = [index, 0].concat(rows);
        list.splice.apply(list, args);

        var firstRow = rows[0];
        this.setInvalidRow(firstRow);
        //any rows data change should call this again
        //tree, parent, group, level
        this.initRowsData();

        this.one(E.onRenderUpdate, function(e, d) {
            // fire an event to indicate that the new rows are in the DOM
            this.emit(E.onRowAdded, rows);

            if (scrollTo) {
                var lastRow = rows[rows.length - 1];
                this.scrollRowIntoView(firstRow);
                if (lastRow !== firstRow) {
                    this.scrollRowIntoView(lastRow);
                }
            }
        });
        this.updateSelectedStatus();
        this.render();
    },

    //=============================================================================
    //add/delete rows

    deleteRow: function(rowItem) {
        return this.deleteRows([rowItem]);
    },

    deleteRows: function(rowList) {
        if (!Util.islist(rowList)) {
            return false;
        }
        var deletedIndexList = [];
        var deletedRowsList = [];
        var self = this;
        rowList.forEach(function(rowIndex) {
            var rowItem = self.getRowItem(rowIndex);
            if (!rowItem) {
                return;
            }
            //keep index for invalidate from
            deletedIndexList.push(rowItem.tg_index);
            // for "onRowRemoved" event
            deletedRowsList.push(rowItem);
        });
        if (!deletedIndexList.length) {
            return false;
        }

        this.removeRows(deletedRowsList);

        //choose min index to invalidate
        var minIndex = Math.min.apply(null, deletedIndexList);
        //console.log(deletedIndexList, minIndex);
        this.invalidateRowsFrom(minIndex);

        this.one(E.onRenderUpdate, function(e, d) {
            this.emit(E.onRowRemoved, deletedRowsList);
        });

        this.updateSelectedStatus();
        this.render();

        return true;
    },

    removeRows: function(deletedRowsList) {

        //remove with high performance, desc index
        var list = [].concat(deletedRowsList);
        list.sort(function(a, b) {
            return b.tg_index - a.tg_index;
        });

        //console.log(list);

        var self = this;
        list.forEach(function(row) {
            var parentSubs = self.getRowParentSubs(row.tg_index);
            parentSubs.splice(row.tg_list_index, 1);
        });

    },

    //=============================================================================

    getRowNodes: function(rowIndex) {
        var item = this.getRowItem(rowIndex);
        if (!item) {
            return null;
        }
        return this.gridView.getRowNodes(item.tg_index);
    },

    getCellNodes: function(rowIndex) {
        var item = this.getRowItem(rowIndex);
        if (!item) {
            return null;
        }
        return this.gridView.getCellNodes(item.tg_index);
    },

    getCellNode: function(rowIndex, columnIndex) {
        var rowItem = this.getRowItem(rowIndex);
        if (!rowItem) {
            return null;
        }
        var columnItem = this.getColumnItem(columnIndex);
        if (!columnItem) {
            return null;
        }
        return this.gridView.getCellNode(rowItem.tg_index, columnItem.tg_index);
    },

    //=============================================================================

    //row subs
    setRowSubs: function(rowIndex, subs) {
        var item = this.getRowItem(rowIndex);
        if (!item) {
            return this;
        }
        var position = item.tg_index;
        //update data
        if (Util.islist(subs)) {
            //open subs default
            item.collapsed = false;
        }
        item.subs = subs;
        this.getRowsData(true);
        //render
        this.invalidateRowsFrom(position);
        this.updateSelectedStatus();
        this.render();
        return this;
    },

    //dynamic set new row list
    setRows: function(rows) {
        if (!Util.islist(rows)) {
            rows = [];
        }
        //update data
        this.data.rows = rows;
        this.getRowsData(true);
        //render
        this.invalidateAll();
        this.updateSelectedStatus();
        this.render();
    },

    //=============================================================================

    //set invalid row before render
    setInvalidRow: function(invalidRow) {
        this.invalidRow = invalidRow;
    },

    //invalidate row from invalid row after init rows data
    invalidRowHandler: function() {

        if (!this.invalidRow) {
            return;
        }

        var invalidIndex = this.invalidRow.tg_index;
        this.invalidateRowsFrom(invalidIndex);

        //remove every time
        this.invalidRow = null;
    },

    //=============================================================================

    getRowParentSubs: function(rowIndex) {
        var item = this.getRowItem(rowIndex);
        if (!item) {
            return null;
        }
        //root.subs
        var subs = this.rows;
        if (item.tg_parent) {
            subs = item.tg_parent.subs;
        }
        return subs;
    },

    getRowJSON: function(rowIndex) {
        var item = this.getRowItem(rowIndex);
        if (!item) {
            return null;
        }
        var json = ServiceExport.getItemSnapshot(item);
        return json;
    },

    setRowData: function(rowIndex, rowData) {
        var rowItem = this.getRowItem(rowIndex);
        if (!rowItem) {
            return;
        }
        if (!rowData || typeof(rowData) !== "object") {
            return;
        }
        Object.keys(rowData).forEach(function(k) {
            rowItem[k] = rowData[k];
        });
    },

    //=============================================================================
    //frozen row
    getFrozenRowByRowTypeList: function(rows, frozenRowTypeList) {
        var frozenRow = -1;
        if (!Util.islist(rows) || !Util.islist(frozenRowTypeList)) {
            return frozenRow;
        }
        for (var i = 0, l = rows.length; i < l; i++) {
            var row = rows[i];
            if (Util.inlist(row.rowType, frozenRowTypeList)) {
                frozenRow += 1;
                continue;
            }
            break;
        }
        return frozenRow;
    },

    //TODO should be sort by back-end
    sortRowsByRowTypeList: function(rows, rowTypeList) {
        if (!Util.islist(rows) || !Util.islist(rowTypeList)) {
            return;
        }
        var tempList = [];
        rowTypeList.forEach(function(rowType) {
            for (var i = 0, l = rows.length; i < l; i++) {
                var row = rows[i];
                if (row.rowType === rowType) {
                    tempList.unshift(row);
                    rows.splice(i, 1);
                    break;
                }
            }
        });
        if (!tempList.length) {
            return;
        }
        tempList.forEach(function(item) {
            rows.unshift(item);
        });
    },

    //=============================================================================
    //highlight single row

    setHighlightRow: function(rowIndex, highlight) {
        var item = this.getRowItem(rowIndex);
        if (!item) {
            return this;
        }

        //remove highlight row
        if (highlight === false) {
            this.removeRowStatus(item, "highlight");
            return;
        }

        //add highlight row
        if (item.highlight) {
            return this;
        }
        //remove all previous highlight rows
        this.removeAllHighlightRows();
        this.addRowStatus(item, "highlight");
        return this;
    },

    removeAllHighlightRows: function() {
        var self = this;
        this.forEachRow(function(row, i, parent) {
            if (row.highlight) {
                self.removeRowStatus(row, "highlight");
            }
        });
        return this;
    },

    getHighlightRow: function() {
        var rowItem = null;
        this.forEachRow(function(row, i, parent) {
            if (row.highlight) {
                rowItem = row;
                return false;
            }
        });
        return rowItem;
    },

    //=============================================================================
    //hover single row

    setHoverRow: function(rowIndex, hover) {
        var item = this.getRowItem(rowIndex);
        if (!item) {
            return this;
        }
        this.gridView.setHoverRow(item, hover);
        return this;
    },

    //=============================================================================

    setLoadingRow: function(rowIndex, loading) {
        var item = this.getRowItem(rowIndex);
        if (!item) {
            return this;
        }

        if (loading === false) {
            this.removeRowStatus(item, "waiting");
            return;
        }

        this.addRowStatus(item, "waiting");
        return this;
    },

    //=============================================================================
    //change row status, the status will be add/remove as className
    //current support: selected, highlight

    addRowStatus: function(rowItem, status) {
        if (!rowItem) {
            return;
        }
        rowItem[status] = true;
        this.updateRowStatus(rowItem, status);
    },

    removeRowStatus: function(rowItem, status) {
        if (!rowItem) {
            return;
        }
        rowItem[status] = false;
        this.updateRowStatus(rowItem, status);
    },

    updateRowStatus: function(rowItem, status) {
        if (!this.gridView.initialized) {
            return;
        }
        // update row class
        var rowNodes = this.gridView.getRowNodes(rowItem.tg_index);
        if (rowNodes) {
            var hasStatus = rowItem[status];
            var className = "tg-" + status;
            if (hasStatus) {
                rowNodes.addClass(className);
            } else {
                rowNodes.removeClass(className);
            }
        }
    }

};

module.exports = ModelRow;

/***/ }),

/***/ "./src/grid/model/model-scroll.js":
/*!****************************************!*\
  !*** ./src/grid/model/model-scroll.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var ModelScroll = {

    //=============================================================================
    //scroll to row/column/cell

    scrollToRow: function(row) {
        var rowItem = this.getRowItem(row);
        this.gridView.scrollToItem(rowItem, null);
        return this;
    },

    scrollToColumn: function(column) {
        var columnItem = this.getColumnItem(column);
        this.gridView.scrollToItem(null, columnItem);
        return this;
    },

    scrollToCell: function(row, column) {
        var rowItem = this.getRowItem(row);
        var columnItem = this.getColumnItem(column);
        this.gridView.scrollToItem(rowItem, columnItem);
        return this;
    },

    //=============================================================================
    //scroll row/column/cell into view

    scrollRowIntoView: function(row) {
        var rowItem = this.getRowItem(row);
        this.gridView.scrollItemIntoView(rowItem, null);
        return this;
    },

    scrollColumnIntoView: function(column) {
        var columnItem = this.getColumnItem(column);
        this.gridView.scrollItemIntoView(null, columnItem);
        return this;
    },

    scrollCellIntoView: function(row, column) {
        var rowItem = this.getRowItem(row);
        var columnItem = this.getColumnItem(column);
        this.gridView.scrollItemIntoView(rowItem, columnItem);
        return this;
    }

};

module.exports = ModelScroll;

/***/ }),

/***/ "./src/grid/model/model-sort.js":
/*!**************************************!*\
  !*** ./src/grid/model/model-sort.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defaultSortComparers = __webpack_require__(/*! ../config/default-sort-comparers.js */ "./src/grid/config/default-sort-comparers.js");
var ServiceSort = __webpack_require__(/*! ../service/service-sort.js */ "./src/grid/service/service-sort.js");
var Util = __webpack_require__(/*! ../../core/util.js */ "./src/core/util.js");

var ModelSort = {

    gridInitSortHandler: function() {
        var o = this.option;

        var optionSortField = o.sortField;
        if (!optionSortField) {
            return this;
        }

        // if multiple sortFields, get primary sortField
        var primarySortField = optionSortField;
        if (Util.islist(optionSortField)) {
            primarySortField = optionSortField[0];
        }

        var sortColumn = this.getSortColumn(primarySortField);
        if (!sortColumn) {
            return this;
        }

        sortColumn.sortAsc = o.sortAsc;

        //if sort on init
        if (!o.sortOnInit) {
            //just set sort column, do NOT sort data
            this.gridView.setSortColumn(sortColumn);
            return this;
        }

        //for sort data every time
        this.sortColumn = sortColumn;

        return this;
    },

    //=============================================================================

    invalidateSortRows: function() {
        if (this.gridView.hasFrozenRows) {
            this.gridView.invalidateRowsFrom(this.option.frozenRows);
        } else {
            this.gridView.invalidateAll();
        }
    },

    //sort API
    setSortColumn: function(sortColumn) {
        this.sortColumn = sortColumn;

        if (!this.gridView.initialized) {
            return;
        }

        this.gridView.setSortColumn(this.sortColumn);

        var frozenRows = this.option.frozenRows;
        var rowsLength = this.gridView.getRowsLength();
        if (rowsLength - frozenRows < 2) {
            return;
        }

        this.invalidateSortRows();

        //do NOT sync if length great than 5w
        if (rowsLength < 50000) {
            this.renderNow();
        } else {
            this.render();
        }
    },

    getSortColumn: function(id) {
        var sortColumn = Util.getListItem(this.gridColumnsData, {
            id: id
        });
        return sortColumn;
    },

    getSortComparers: function() {
        var sortComparers = Util.merge(defaultSortComparers, this.option.sortComparers);
        return sortComparers;
    },

    // for multiple compares
    getMultipleSortFields: function(currentSortField) {
        var multipleSortFields = [];
        var sortField = this.option.sortField;
        if (Util.islist(sortField)) {
            // copy to do not change the option sortFields list
            var optionSortField = sortField.concat([]);
            // remove first primary sortField
            optionSortField.shift();
            var self = this;
            optionSortField.forEach(function(field) {
                // do NOT sort again if use clicked field in multipleSortFields
                if (field === currentSortField) {
                    return;
                }
                var columnData = self.getColumnItemById(field);
                if (columnData) {
                    multipleSortFields.push({
                        sortFieldType: columnData.dataType,
                        sortField: field
                    });
                }
            });
        }
        return multipleSortFields;
    },

    //remove fast sort status
    removeSortStatus: function() {
        this.sortField = null;
        this.sortAsc = null;
        this.sortComparers = null;
        this.sortColumn = null;
        this.gridView.removeSortColumn();
        return this;
    },

    //without sort if dynamic data loaded
    setSortDisabled: function() {
        this.sortDisabled = true;
        return this;
    },

    //=============================================================================

    gridSortHandler: function() {

        if (this.sortDisabled) {
            //disabled once
            this.sortDisabled = false;
            return;
        }

        this.sortRowData();

        //update sort column status for header
        //TODO check gridView.setSortColumn if multiple call 
        this.gridView.setSortColumn(this.sortColumn);

    },

    //just deep sort data
    sortRowData: function() {
        var sortColumn = this.sortColumn;
        if (!sortColumn) {
            return;
        }

        //console.log("sortRowData");

        // just use dataType, do NOT use formatter, this is only for sorting
        var sortFieldType = this.getColumnType(sortColumn);
        var sortField = sortColumn.id;
        var sortAsc = sortColumn.sortAsc;
        var sortBlankValueBottom = this.option.sortBlankValueBottom;
        var sortComparers = this.getSortComparers();
        var multipleSortFields = this.getMultipleSortFields(sortField);

        //if support sort fast
        var sortFast = false;
        if (this.option.sortFast) {
            sortFast = this.sortField === sortField ? true : false;
        }

        var sortOption = {
            ignore: function(item) {
                //frozen always top
                if (item.tg_frozen) {
                    return {
                        item: item,
                        top: true
                    };
                }
                if (item.unsorted) {
                    return {
                        item: item,
                        top: item.unsortedTop
                    };
                }
                return null;
            },

            sortFieldType: sortFieldType,
            sortField: sortField,
            sortAsc: sortAsc,
            sortBlankValueBottom: sortBlankValueBottom,
            sortComparers: sortComparers,
            multipleSortFields: multipleSortFields,
            sortFast: sortFast,
            sortFastAsc: this.sortAsc
        };

        //remenber for fast sort
        this.sortField = sortField;
        this.sortAsc = sortAsc;

        //sort handler
        var hasSorted = false;
        var sortHandler = new ServiceSort(sortOption);
        var sortAll = function(rows, parent) {
            if (!Util.islist(rows)) {
                return;
            }
            if (rows.length > 1) {
                hasSorted = sortHandler.sortList(rows);
            }
            rows.forEach(function(row) {
                if (!row) {
                    return;
                }
                sortAll(row.subs, row);
            });
        };

        var rows = this.getRowsData();
        sortAll(rows);

        if (hasSorted) {
            this.invalidateSortRows();
        }

    }

};

module.exports = ModelSort;

/***/ }),

/***/ "./src/grid/service/service-export.js":
/*!********************************************!*\
  !*** ./src/grid/service/service-export.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Util = __webpack_require__(/*! ../../core/util.js */ "./src/core/util.js");

var Export = {

    getExportData: function(data) {
        var columns = Export.getTreeSnapshot(data.columns);
        var rows = Export.getTreeSnapshot(data.rows);
        var exportData = {
            columns: columns,
            rows: rows
        };
        return exportData;
    },

    isExportable: function(item) {
        if (!item) {
            return false;
        }
        if (!item.hasOwnProperty("exportable")) {
            return true;
        }
        return item.exportable ? true : false;
    },

    getTreeSnapshot: function(tree) {
        var list = [];
        var snapshotAll = function(tree, list) {
            if (!Util.islist(tree)) {
                return list;
            }
            tree.forEach(function(item) {
                if (!Export.isExportable(item)) {
                    return;
                }
                var newItem = Export.getItemSnapshot(item);
                if (item.subs) {
                    newItem.subs = [];
                    snapshotAll(item.subs, newItem.subs);
                }
                list.push(newItem);
            });
        };
        snapshotAll(tree, list);
        return list;
    },

    getItemSnapshot: function(item) {
        var excludeKeys = {
            subs: true
        };
        var newItem = {};
        // remove all private info start with "tg_", and no subs
        for (var k in item) {
            if (item.hasOwnProperty(k)) {
                if (excludeKeys[k] || k.indexOf("tg_") === 0) {
                    continue;
                }
                newItem[k] = item[k];
            }
        }
        return newItem;
    }

};

module.exports = Export;

/***/ }),

/***/ "./src/grid/service/service-sort.js":
/*!******************************************!*\
  !*** ./src/grid/service/service-sort.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Extend = __webpack_require__(/*! ../../core/extend.js */ "./src/core/extend.js");
var Util = __webpack_require__(/*! ../../core/util.js */ "./src/core/util.js");

var Sort = Extend.extend({

    constructor: function(option) {
        this.option = Util.merge(this.defaultOption(), option);
    },

    defaultOption: function() {
        return {
            sortFieldType: null,
            sortField: "",
            sortAsc: true,
            sortBlankValueBottom: true,
            sortComparers: null,
            multipleSortFields: [],
            sortFast: null,
            sortFastAsc: true,

            ignore: null
        };
    },

    //=============================================================

    sortList: function(list) {
        if (!Util.islist(list)) {
            return false;
        }
        this.list = list;

        var o = this.option;

        if (!o.sortField) {
            return false;
        }

        this.sortIndexHandler();

        var hasSorted = false;

        this.ignoreExcludeHandler();

        if (o.sortFast) {

            if (o.sortFastAsc !== o.sortAsc) {
                this.list.reverse();
                hasSorted = true;
            }

        } else {
            this.comparerHandler();
            hasSorted = true;
        }

        this.ignoreIncludeHandler();

        return hasSorted;
    },

    //=============================================================

    getMultipleComparers: function() {
        var multipleComparers = [];
        var multipleSortFields = this.option.multipleSortFields;
        if (Util.islist(multipleSortFields)) {
            var self = this;
            multipleSortFields.forEach(function(sortItem) {
                var comparer = self.getComparer(sortItem.sortFieldType);
                if (comparer) {
                    sortItem.comparer = comparer;
                    multipleComparers.push(sortItem);
                }
            });
        }
        return multipleComparers;
    },

    comparerHandler: function() {

        var o = this.option;
        var sortFieldType = o.sortFieldType;
        var comparer = this.getComparer(sortFieldType);
        if (!comparer) {
            return;
        }

        var sortFactor = o.sortAsc ? -1 : 1;
        var sortBlankFactor = o.sortBlankValueBottom ? 1 : sortFactor;

        var multipleComparers = this.getMultipleComparers();
        var self = this;
        this.list.sort(function(a, b) {
            //sortField will be changed if multiple comparers
            var option = {
                sortField: o.sortField,
                sortFactor: sortFactor,
                sortBlankFactor: sortBlankFactor
            };
            return comparer.call(self, a, b, option, multipleComparers);
        });
    },

    getComparer: function(sortFieldType) {
        var sortComparers = this.option.sortComparers;
        var comparer = null;
        if (sortFieldType) {
            comparer = sortComparers[sortFieldType];
        }
        comparer = comparer || sortComparers.string;

        if (typeof(comparer) !== "function") {
            return null;
        }

        return comparer;
    },

    //=============================================================

    sortIndexHandler: function() {
        for (var i = 0, l = this.list.length; i < l; i++) {
            var item = this.list[i];
            item.tg_sort_index = i;
        }
    },

    ignoreExcludeHandler: function() {
        this.ignoreListTop = [];
        this.ignoreListBottom = [];
        var ignoreHandler = this.option.ignore;
        if (typeof(ignoreHandler) !== "function") {
            return;
        }
        for (var i = 0, l = this.list.length; i < l; i++) {
            var item = this.list[i];
            var ignoreItem = ignoreHandler(item);
            if (ignoreItem) {

                if (ignoreItem.top) {
                    this.ignoreListTop.unshift(ignoreItem);
                } else {
                    this.ignoreListBottom.push(ignoreItem);
                }

                //remove from old list
                this.list.splice(i, 1);
                i--;
                l--;
            }
        }
    },

    ignoreIncludeHandler: function(list) {

        var self = this;
        this.ignoreListTop.forEach(function(ignoreItem) {
            self.list.unshift(ignoreItem.item);
        });

        this.ignoreListBottom.forEach(function(ignoreItem) {
            self.list.push(ignoreItem.item);
        });

    }

});

module.exports = Sort;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Grid = __webpack_require__(/*! ./grid/grid.js */ "./src/grid/grid.js");

var Util = __webpack_require__(/*! ./core/util.js */ "./src/core/util.js");
var Icon = __webpack_require__(/*! ./core/icon.js */ "./src/core/icon.js");
var EditorBase = __webpack_require__(/*! ./grid/config/editor/editor-base.js */ "./src/grid/config/editor/editor-base.js");

var gridPackage = {

    VERSION: "1.41.21",

    //new name
    MBG: Grid,

    //old name
    TreeGrid: Grid,
    EditGrid: Grid,

    //other
    Util: Util,
    Icon: Icon,
    EditorBase: EditorBase

};


var getNamespace = function(path) {
    path = path || "morningstar.components";
    var item = window || {};
    if (path) {
        (path + "").split(".").forEach(function(key) {
            item[key] = item[key] || {};
            item = item[key];
        });
    }
    return item;
};

var registerComponent = function(name, component, path) {
    if (!name || !component) {
        return;
    }
    var namespace = getNamespace(path);
    if (namespace[name]) {
        console.warn("[Overwrite Warning] Duplicated " + name + " loaded: v" + namespace[name].VERSION + " => v" + component.VERSION + " ");
        namespace["_" + name] = namespace[name];
    }
    namespace[name] = component;
};

registerComponent("mbg", gridPackage);

module.exports = gridPackage;

/***/ })

/******/ });
});
//# sourceMappingURL=mbg.js.map