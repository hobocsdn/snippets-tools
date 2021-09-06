(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["ListGroup"] = factory();
	else
		root["ListGroup"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/packages/listGroup.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/packages/list-group.scss":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./src/packages/list-group.scss ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".list .list-item {\n  position: relative;\n  display: block;\n  padding: .75rem 1.25rem;\n  margin-bottom: -1px;\n  background-color: #fff;\n  border: 1px solid rgba(0, 0, 0, 0.125); }\n  .list .list-item:first-child {\n    border-top-left-radius: .25rem;\n    border-top-right-radius: .25rem; }\n  .list .list-item:last-child {\n    border-top-left-radius: .25rem;\n    border-top-right-radius: .25rem; }\n", ""]);

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

/***/ "./src/packages/list-group.scss":
/*!**************************************!*\
  !*** ./src/packages/list-group.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader!../../node_modules/sass-loader/lib/loader.js!./list-group.scss */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/packages/list-group.scss");

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

/***/ "./src/packages/listGroup.js":
/*!***********************************!*\
  !*** ./src/packages/listGroup.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(/*! ./list-group.scss */ "./src/packages/list-group.scss");

var _event = __webpack_require__(/*! ../util/event.js */ "./src/util/event.js");

var _index = __webpack_require__(/*! ../util/index.js */ "./src/util/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var proxy = _index2.default.proxy;

var ListGroup = function (_EventBase) {
    _inherits(ListGroup, _EventBase);

    /**
     * 
     * @param {Object} opts 
     * @param {Array} opts.$parent 
     * @param {Array} opts.$el 
     * @param {Array} opts.className 
     * @param {String} opts.template 
     * @param {Array} opts.data 
     * @param {Object} opts.data[index] 
     * @param {String} opts.data[index].id 
     * @param {String} opts.data[index].label 
     * @param {Array} opts.data[index].subs 
     */
    function ListGroup(opts) {
        _classCallCheck(this, ListGroup);

        var _this = _possibleConstructorReturn(this, (ListGroup.__proto__ || Object.getPrototypeOf(ListGroup)).call(this));

        _this.$options = Object.assign(opts, _this.defaultOption());

        var keys = Object.keys(_this.$options);
        var self = _this;
        keys.forEach(function (key) {
            proxy(self, "$options", key);
        });
        _this.render();
        return _this;
    }

    _createClass(ListGroup, [{
        key: 'defaultOption',
        value: function defaultOption() {
            return {
                className: "list"
            };
        }
    }, {
        key: 'render',
        value: function render() {
            this.trigger("onRenderStart");

            var self = this;
            this.$el = $('<div/>').addClass(this.className);
            this.data.forEach(function (item) {
                var $item = self.createItem(item);
                if (item.subs && item.subs.length) {
                    item.subs.forEach(function (subItem) {
                        var $subItem = self.createItem(item);
                        self.$el.append($subItem);
                    });
                    self.$el.append($item);
                }
                self.$el.append($item);
            });
            this.$el.on("click", ".list-item", function () {
                var itemId = $(this).data("id");
                self.trigger("change", itemId);
            });
            this.$el.on("click", ".list-group", function () {
                // re-render
                self.toggleItem();
            });
            this.mount();
        }
    }, {
        key: 'mount',
        value: function mount() {
            this.$el.appendTo(this.$parent || document.body);
            this.trigger("onMounted");
        }
    }, {
        key: 'toggleItem',
        value: function toggleItem() {}
    }, {
        key: 'expandItem',
        value: function expandItem() {}
    }, {
        key: 'collapseItem',
        value: function collapseItem() {}
    }, {
        key: 'createItem',
        value: function createItem(item) {
            var tpl = this.template || this.getTpl();
            var $item = $(tpl).data("id", item.id).html(item.label);
            if (item.type === "group") {
                $item.addClass("list-group");
            }
            return $item;
        }
    }, {
        key: 'getTpl',
        value: function getTpl(itemType) {
            return '<div class="list-item"></div>';
        }
    }, {
        key: 'toString',
        value: function toString() {
            return ["Object ListGroup"];
        }
    }]);

    return ListGroup;
}(_event.EventBase);

exports.default = ListGroup;

/***/ }),

/***/ "./src/util/Drag.js":
/*!**************************!*\
  !*** ./src/util/Drag.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _event = __webpack_require__(/*! ./event.js */ "./src/util/event.js");

var _index = __webpack_require__(/*! ./index.js */ "./src/util/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var proxy = _index2.default.proxy;


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
// 全部绝对定位 相对于容器

var Drag = function (_EventBase) {
    _inherits(Drag, _EventBase);

    /**
     * 
     * @param {Object} opts 
     * @param {String} opts.ns 
     * @param {DOM} opts.$el    可拖动对象
     * @param {DOM} opts.$holder 可拖动对象活动的容器
     * @param {DOM} opts.mouseHandler 当前鼠标被劫持的对象
     */
    function Drag(opts) {
        _classCallCheck(this, Drag);

        var _this = _possibleConstructorReturn(this, (Drag.__proto__ || Object.getPrototypeOf(Drag)).call(this));

        _this.$options = Object.assign(opts, _this.defaultOption());
        var keys = Object.keys(_this.$options);
        var self = _this;
        keys.forEach(function (key) {
            proxy(self, "$options", key);
        });
        _this.dragInit();
        return _this;
    }

    _createClass(Drag, [{
        key: 'defaultOption',
        value: function defaultOption() {
            return {
                ns: "drag",
                $holder: document.body,
                mouseHandler: null,
                dragging: false,
                mouse: {
                    startX: 0,
                    startY: 0,
                    currentX: 0,
                    currentY: 0,
                    OffsetX: 0,
                    OffsetY: 0,
                    moveX: 0,
                    moveY: 0
                }
            };
        }
    }, {
        key: 'dragInit',
        value: function dragInit() {
            var _this2 = this;

            this.$el.on("mousedown." + this.ns, function (e) {
                _this2.dragStartHandler(e);
            });
        }
    }, {
        key: 'dragStartHandler',
        value: function dragStartHandler(e) {
            if (this.mouseHandler) {
                // 不可同时拖动多个对象
                return;
            }
            // 记住鼠标当前位置
            var mouse = this.mouse;
            mouse.startX = e.pageX;
            mouse.startY = e.pageY;
            mouse.currentX = mouse.startX;
            mouse.currentY = mouse.startY;

            // 由于鼠标可能离开了可拖动操作的区域，触发了mouseLeave导致mouseup丢失, 
            // mouseup可以只触发一次就解绑， 但是mousemove不可以 

            this.$holder.on("mousemove", this.dragUpdateHandler);
            this.$holder.one("mouseup", this.dragCompletedHandler);
            this.$holder.one("mouseleave", this.dragCompletedHandler); // 可停留在最终位置也可以还原
            this.mouseHandler = this.$el;
            // 防止触发多个嵌套的可拖动对象
            event.preventDefault();
            this.trigger(E.DRAG_START, this.mouse);
        }
    }, {
        key: 'dragCompletedHandler',
        value: function dragCompletedHandler(e) {
            this.updateMouseInfo(e);
            this.$holder.off("mousemove");
            // 释放句柄，计算最终位置
            this.mouseHandler = null;
            this.trigger(E.DRAG_COMPLETE, mouse);
        }
    }, {
        key: 'dragUpdateHandler',
        value: function dragUpdateHandler(e) {
            this.updateMouseInfo(e);
            this.trigger(E.DRAG_UPDATE, mouse);
        }
    }, {
        key: 'updateMouseInfo',
        value: function updateMouseInfo() {
            var mouse = this.mouse;
            mouse.previousX = mouse.currentX;
            mouse.currentY = mouse.currentY;
            mouse.currentX = e.pageX;
            mouse.currentY = e.pageY;

            mouse.offsetX = mouse.currentX - mouse.startX;
            mouse.offsetY = mouse.currentY - mouse.startY;
            mouse.moveX = mouse.currentX - mouse.previousX;
            mouse.moveY = mouse.currentY - mouse.previousY;
        }
    }]);

    return Drag;
}(_event.EventBase);

exports.default = Drag;

/***/ }),

/***/ "./src/util/event.js":
/*!***************************!*\
  !*** ./src/util/event.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @file 事件消息系统 (观察者模式,发布/订阅模式:解决主题对象与观察之间功能的耦合))
 * @author Tim Guo(tim.guo@morningstar.com)
 * 
 */

/**
 * 描述
 *
 * @class
 * 
 */

var Event = exports.Event = function () {
    function Event(o) {
        _classCallCheck(this, Event);

        this.isDefaultPrevented = false;
        this.isPropagationStopped = false;
        this.isImmediatePropagationStopped = false;

        /**
         * 属性描述
         *
         * @type {String} type 事件类型
         * @type {Object} data 事件需要传递的信息
         * @type {Object} target 事件目标对象
         * @type {String} namespace 命名空间
         * @type {RegExp} rnamespace 命名空间匹配规则
         * @type {Object/Array} parent 指定事件冒泡对象/广播列表
         * @type {Object} currentTarget 当前目标对象
         * @type {Object} delegateTarget 代理目标对象
         * @private
         */
        this.type = o.type;
        this.data = o.data;
        this.target = o.target;
        this.namespace = o.namespace;
        this.rnamespace = o.rnamespace;
        this.parent = o.parent || null;
        this.currentTarget = o.target;
        this.delegateTarget = o.target;
        this.timeStamp = new Date().getTime();
    }
    /**
     * 阻止默认事件
     *
     * @private
     */


    _createClass(Event, [{
        key: "preventDefault",
        value: function preventDefault() {
            this.isDefaultPrevented = true;
        }
        /**
         * 在执行完当前事件处理程序之后,停止所有后续节点的事件处理程序的运行
         *
         * @private
         */

    }, {
        key: "stopPropagation",
        value: function stopPropagation() {
            this.isPropagationStopped = true;
        }
        /**
         * 在执行完当前事件处理程序之后，停止当前节点以及所有后续节点的事件处理程序的运行
         *
         * @private
         */

    }, {
        key: "stopImmediatePropagation",
        value: function stopImmediatePropagation() {
            this.isImmediatePropagationStopped = true;
            this.stopPropagation();
        }
    }]);

    return Event;
}();

var addEvents = function addEvents(eventListeners, eventList, maxListeners) {
    eventList.forEach(function (event) {
        var type = event.type;
        if (eventListeners[type] === undefined) {
            eventListeners[type] = {
                events: [],
                defaultEvent: null
            };
        }
        var handler = event.handler;
        if (typeof handler !== "function") {
            return;
        }
        var eventListener = eventListeners[type];
        addEvent(eventListener, event, maxListeners);
    });
};

var addEvent = function addEvent(eventListener, event, maxListeners) {
    if (event.defaultEvent) {
        eventListener.defaultEvent = event;
        return;
    }
    var events = eventListener.events;
    if (events.length > maxListeners) {
        console.warn("max Event listener limit!!");
        return;
    }
    if (event.prepend) {
        events.unshift(event);
    } else {
        events.push(event);
    }
};

var removeEvents = function removeEvents(eventListeners, eventList) {
    eventList.forEach(function (event) {
        removeEvent(eventListeners, event);
    });
};

var removeEvent = function removeEvent(eventListeners, event) {
    // by namespace --- by handler -- by type
    var type = event.type;
    if (event.defaultEvent) {
        removeEventByDefault(eventListeners, type);
        return;
    }

    var namespace = event.namespace;
    if (!type && namespace) {
        removeEventByNameSpace(eventListeners, namespace);
        return;
    }
    var handler = event.handler;
    if (typeof handler == "function") {
        removeEventByHandler(eventListeners, type, handler);
        return;
    }
    removeEventByType();
};

var removeEventByDefault = function removeEventByDefault(eventListeners, type) {
    var eventListener = eventListeners[type];
    if (!eventListener) {
        return;
    }
    if (eventListener.defaultEvent) {
        eventListener.defaultEvent = null;
    }
};

var removeEventByNameSpace = function removeEventByNameSpace(eventListeners, namespace) {
    var types = Object.keys(eventListeners);
    types.forEach(function (type) {
        var eventListener = eventListeners[type];
        var events = eventListener.events;
        for (var i = 0; i < events.length; i++) {
            var item = events[i];
            if (item && item.namespace === namespace) {
                events.splice(i, 1);
                i--;
            }
        }
    });
};

var removeEventByHandler = function removeEventByHandler(eventListeners, type, handler) {
    var eventListener = eventListeners[type];
    var events = eventListener.events;
    for (var i = 0; i < events.length; i++) {
        var item = events[i];
        if (item && item.handler === handler) {
            events.splice(i, 1);
            i--;
        }
    }
};

var removeEventByType = function removeEventByType(eventListeners, type) {
    var eventListener = eventListeners[type];
    if (!eventListener) {
        return;
    }
    // 保留默认事件
    if (eventListener.defaultEvent) {
        eventListener.events = [];
    } else {
        delete eventListeners[type];
    }
};

var removeAllEvents = function removeAllEvents(eventListeners) {
    var types = Object.keys(eventListeners);
    types.forEach(function (type) {
        removeEventByType(eventListeners, type);
    });
};

var sendEvent = function sendEvent(eventListener, event, data, target) {
    // trigger events/defaultEvent
    sendEventList(eventListener, event, data, target);
    sendDefaultEvent(eventListener, event, data, target);
};

var sendEventList = function sendEventList(eventListener, event, data, target) {
    var events = eventListener.events;
    for (var i = 0; i < events.length; i++) {
        var item = events[i];
        event.handleObj = item;
        var res = void 0;
        // Triggered event must either 1) have no namespace, or 2) have namespace(s)
        // a subset or equal to those in the bound event (both can have no namespace).
        if (!event.rnamespace || event.rnamespace.test(item.namespace)) {
            // TODO need toCopy ??
            event.namespace = item.namespace;
            res = item.handler.call(target, event, data);
        }
        // 只促发一次的事件
        if (item.one) {
            events.splice(i, 1);
            i--;
        }
        if (event.isImmediatePropagationStopped || res === false) {
            break;
        }
    }
};

var sendDefaultEvent = function sendDefaultEvent(eventListener, event, data, target) {
    var defaultEvent = eventListener.defaultEvent;
    if (!defaultEvent || event.isDefaultPrevented) {
        return;
    }
    defaultEvent.handler.call(target, event, data);
};

var getEventItem = function getEventItem(context, handler) {
    var option = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    context += "";
    if (!context) {
        return null;
    }
    var arr = context.split('.');
    var type = arr.shift();
    var namespace = arr.join('.');
    var eventItem = {
        context: context,
        namespace: namespace,
        type: type,
        handler: handler,
        one: option.one,
        prepend: option.prepend,
        defaultEvent: option.defaultEvent
    };
    return eventItem;
};

var getEventList = function getEventList(types, handler, option) {
    if (handler && (typeof handler === "undefined" ? "undefined" : _typeof(handler)) === "object") {
        option = handler;
    }
    var eventList = [];
    if ((typeof types === "undefined" ? "undefined" : _typeof(types)) === "object") {
        var keys = Object.keys(types);
        keys.forEach(function (type) {
            var eventItem = getEventItem(type, types[key], option);
            if (eventItem) {
                eventList.push(eventItem);
            }
        });
    }
    if (typeof types === "string") {
        var arr = types.split(" ");
        arr.forEach(function (type) {
            var eventItem = getEventItem(type, handler, option);
            if (eventItem) {
                eventList.push(eventItem);
            }
        });
    }
    return eventList;
};

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

var EventBase = exports.EventBase = function () {
    function EventBase() {
        _classCallCheck(this, EventBase);
    }

    _createClass(EventBase, [{
        key: "getEventListeners",
        value: function getEventListeners() {
            if (!this.eventListeners) {
                this.eventListeners = {};
            }
            return this.eventListeners;
        }
        /**
         * 
         * @param {String/Object} types 
         * @param {Function/Object} handler 
         * @param {Object} option 
         * @param {Boolean=} option.prepend 先触发/默认后触发(可选)
         * @param {Boolean=} option.one 触发一次即移除(可选)
         * 
         * bind("click.n1.n2",function,{})
         * 
         */

    }, {
        key: "bind",
        value: function bind(types, handler, option) {
            var eventListeners = this.getEventListeners();
            var eventList = getEventList(types, handler, option);
            if (eventList.length) {
                addEvents(eventListeners, eventList);
            }
            return this;
        }
    }, {
        key: "unbind",
        value: function unbind(types, handlers, option) {
            var eventListeners = this.getEventListeners();
            if (!arguments) {
                removeAllEvents(eventListeners);
                return this;
            }
            var eventList = getEventList(types, handlers, option);
            removeEvents(eventListeners, eventList);
        }

        // ===================================================

    }, {
        key: "on",
        value: function on() {
            return this.bind.apply(this, arguments);
        }
    }, {
        key: "off",
        value: function off() {
            return this.unbind.apply(this, arguments);
        }
        // ===================================================
        /**
         * 
         * @param {string} type 
         * @param {Object=} data (可选) 
         */

    }, {
        key: "trigger",
        value: function trigger(type, data) {
            var eventListeners = this.getEventListeners();

            var arr = type.split(".");
            var eventType = arr.shift();
            var namespace = arr.join(".");
            var rnamespace = namespace ? new RegExp("(^|\\.)" + arr.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
            var eventListener = eventListeners[eventType];
            if (!eventListener) {
                return;
            }
            var event = new Event({
                type: eventType,
                target: this,
                namespace: namespace,
                rnamespace: rnamespace,
                data: data
            });
            sendEvent(eventListener, event, data, this);

            // 阻止节点往上冒泡
            if (event.isPropagationStopped) {
                return this;
            }
            if (this.parent && this.parent instanceof EventBase) {
                this.parent.trigger(type, data);
            }
            return this;
        }
    }, {
        key: "emit",
        value: function emit() {
            return this.trigger.apply(this, arguments);
        }
        // ===================================================

    }], [{
        key: "extend",

        // static expando:"jQuery" + ( core_version + Math.random() ).replace( /\D/g, "" ),      

        value: function extend() {
            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            Object.assign.apply(Object, [this].concat(args));
        }
    }]);

    return EventBase;
}();

/***/ }),

/***/ "./src/util/index.js":
/*!***************************!*\
  !*** ./src/util/index.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _event = __webpack_require__(/*! ./event.js */ "./src/util/event.js");

var _log4j = __webpack_require__(/*! ./log4j.js */ "./src/util/log4j.js");

var _log4j2 = _interopRequireDefault(_log4j);

var _Drag = __webpack_require__(/*! ./Drag.js */ "./src/util/Drag.js");

var _Drag2 = _interopRequireDefault(_Drag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Util = {}; // import Constant from '../constant.js'
// import Random from './random/index.js'

Util.extend = function () {
    Object.assign.apply(Object, arguments);
};
Util.extend(Util, {
    noop: function noop() {},

    /**
     * string | number | math
     */
    type: function type(obj) {
        return obj === null || obj === undefined ? String(obj) : Object.prototype.toString.call(obj).match(/\[object (\w+)\]/)[1].toLowerCase();
    },
    keys: function keys(obj) {
        // TODO ,it contains attr from prototype clain 
        return Object.keys(obj);
    },

    // 浅拷贝
    extend: function extend() {
        Object.assign.apply(Object, arguments);
    },
    getValue: function getValue(o, key) {
        if (this.type(o) === "object") {
            var value = o;
            var attrs = key.split(".");
            attrs.forEach(function (atrr) {
                if (value) {
                    value = value[atrr];
                }
            });
            return value;
        }
        return null;
    }
});

// type
"Boolean Number String Function Array Date RegExp Object Error Symbol".split(' ').forEach(function (value) {
    Util['is' + value] = function (obj) {
        return Util.type(obj) === value.toLowerCase();
    };
});

Util.extend(Util, {
    isPlainObject: function isPlainObject(obj) {
        return Object.prototype.toString.call(obj) === "[object Object]";
    },
    hasOwn: function hasOwn(obj, key) {
        return Object.prototype.hasOwnProperty.call(obj, key);
    }
});

Util.extend(Util, {
    EventBase: _event.EventBase,
    Event: _event.Event,
    log4j: _log4j2.default,
    Drag: _Drag2.default
});

// proxy
var sharedPropertyDefinition = {
    enumerable: true,
    configurable: true,
    get: Util.noop,
    set: Util.noop
};

Util.extend(Util, {
    /**
     * 
     * @param {Object} target 在指定的目标对象(vm)上访问get/修改set 
     * @param {String} sourcekey  实际访问的对象 _data
     * @param {String} key  属性名 
     */
    proxy: function proxy(target, sourceKey, key) {
        sharedPropertyDefinition.get = function proxyGetter() {
            return this[sourceKey][key];
        };
        sharedPropertyDefinition.set = function proxySetter(val) {
            this[sourceKey][key] = val;
        };
        Object.defineProperty(target, key, sharedPropertyDefinition);
    }
});

exports.default = Util;

/***/ }),

/***/ "./src/util/log4j.js":
/*!***************************!*\
  !*** ./src/util/log4j.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var merge = function merge() {
    return Object.assign.apply(Object, arguments);
};

var WebContextInfo = function () {
    function WebContextInfo() {
        _classCallCheck(this, WebContextInfo);

        this.cacheInfo = {};
        this.url();
        this.referrer();
        this.resolution();
        this.browser();
        this.os();
    }

    /**
     * 获取当前url
     * @returns {string|window.location.href|*}
     */


    _createClass(WebContextInfo, [{
        key: "url",
        value: function url() {
            return this.cacheInfo.url = document.location.href;
        }

        /**
         * 获取上一个访问页面
         * @returns {*}
         */

    }, {
        key: "referrer",
        value: function referrer() {
            return this.cacheInfo.referrer = document.referrer;
        }

        /**
         * 获取屏幕分辨率信息
         * @returns {string}
         */

    }, {
        key: "resolution",
        value: function resolution() {
            return this.cacheInfo.resolution = window.screen.width + "*" + window.screen.height;
        }

        /**
         * 获取操作系统信息(待更新)
         * @returns {string}
         */

    }, {
        key: "os",
        value: function os() {
            var ret = "Unknown";
            var sUA = navigator.userAgent.toLowerCase();
            if (sUA.indexOf('win') != -1) {
                ret = "Windows";
            } else if (sUA.indexOf('linux') != -1) {
                ret = 'Linux';
            } else if (sUA.indexOf('mac') != -1) {
                ret = "Mac";
            }
            return this.cacheInfo.os = ret;
        }

        /**
         * 获取浏览器信息
         * @returns {string}
         */

    }, {
        key: "browser",
        value: function browser() {
            var br = {
                type: "Unknown",
                version: "0"
            };
            var explorer = window.navigator.userAgent.toLowerCase();
            if (explorer.indexOf("msie") >= 0) {
                var ver = explorer.match(/msie ([\d.]+)/)[1];
                br = {
                    type: "IE",
                    version: ver
                };
            } else if (explorer.indexOf("firefox") >= 0) {
                var _ver = explorer.match(/firefox\/([\d.]+)/)[1];
                br = {
                    type: "Firefox",
                    version: _ver
                };
            } else if (explorer.indexOf("chrome") >= 0) {
                var _ver2 = explorer.match(/chrome\/([\d.]+)/)[1];
                br = {
                    type: "Chrome",
                    version: _ver2
                };
            } else if (explorer.indexOf("opera") >= 0) {
                var _ver3 = explorer.match(/opera.([\d.]+)/)[1];
                br = {
                    type: "Opera",
                    version: _ver3
                };
            } else if (explorer.indexOf("Safari") >= 0) {
                var _ver4 = explorer.match(/version\/([\d.]+)/)[1];
                br = {
                    type: "Safari",
                    version: _ver4
                };
            }
            return this.cacheInfo.browser = br.type + "," + br.version;
        }
    }]);

    return WebContextInfo;
}();

var VERSION = "1.0.0";
var levelList = ['log', 'debug', 'info', 'warn', 'error', 'silent'];
var __config = {
    level: "info", //日志级别，silent(5) error(4)、warn(3)、info(2)、log(1)、debug(0),级别越高，输出的日志越少。
    tagFilter: "", //日志tag筛选,正则表达式字符串
    post: 0, //当发生异常是是否post到服务器
    postContextInfo: 0, //是否提交环境数据
    postUrl: "" //异常信息提交的服务器地址
};

var log4j = function () {
    function log4j() {
        var _this = this;

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        _classCallCheck(this, log4j);

        this.version = VERSION;
        this.__config = merge.apply(undefined, [__config].concat(args));
        ["log", 'debug', 'info', 'warn', 'error'].forEach(function (level) {
            _this[level] = function () {
                for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                    args[_key2] = arguments[_key2];
                }

                _this.exec.apply(_this, [level].concat(args));
            };
        });
    }

    _createClass(log4j, [{
        key: "config",
        value: function config() {
            for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
                args[_key3] = arguments[_key3];
            }

            if (arguments.length == 0) {
                return this.__config;
            }
            this.__config = merge.apply(undefined, [__config].concat(args));
        }

        /*
         * 
         * 日志级别,级别越高，输出的日志越少。比如：当前级别如果是WARN，则只输出ERROR,WARN的日志
         * 
         * @param {String} level 输出级别 
         * @param {String} msg 输出信息
         * @param {String} tag 标记
         */

    }, {
        key: "exec",
        value: function exec(level, msg, tag) {

            var configLevel = levelList.indexOf(level);
            var outputLevel = levelList.indexOf(this.__config.level);

            if (outputLevel > configLevel) return;
            var needLog = false;
            //过滤打印信息
            if (!tag) {
                var reg = new RegExp(this.__config.tagFilter);
                needLog = reg.test(tag);
            } else {
                needLog = true;
            }
            if (needLog) {
                console ? console[level](msg) : !0;
                if (msg instanceof Error && this.__config.post) {
                    this.post(msg); //上报服务器
                }
            }
        }
    }, {
        key: "post",
        value: function post(msg) {
            var body = getPostData(msg);
            try {
                $.post(this.__config.postUrl, body);
            } catch (e) {
                console ? console.error(e) : !0;
            }
        }
    }, {
        key: "getPostData",
        value: function getPostData(msg) {
            var body = {};
            if (this.__config.postContextInfo) {
                body = new WebContextInfo();
            }
            if (msg instanceof Error) {
                body = merge(body, {
                    name: msg.name,
                    message: msg.message,
                    stack: msg.stack
                });
            } else {
                body = merge(body, {
                    name: "",
                    message: msg + "",
                    stack: ""
                });
            }
            return body;
        }

        /*防冲突处理*/

    }], [{
        key: "noConflict",
        value: function noConflict() {
            window.log4j = oldLog4j;
            return log4j;
        }
    }]);

    return log4j;
}();

exports.default = log4j;

/***/ })

/******/ })["default"];
});
//# sourceMappingURL=ListGroup.js.map