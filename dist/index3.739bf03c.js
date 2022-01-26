// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"l4AUa":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "ba60c367739bf03c";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"ebWYT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _utils = require("./utils");
var _locomotiveScroll = require("locomotive-scroll");
var _locomotiveScrollDefault = parcelHelpers.interopDefault(_locomotiveScroll);
const MAX_SCROLL_DISTANCE = 400;
const LAYER_BOUNDS = {
    min: 0,
    max: 101
}; // percentage values
const shiftEl = document.querySelector('.shift');
let shiftDirection = 'h';
if (shiftEl.classList.contains('shift--vertical')) shiftDirection = 'v';
else if (shiftEl.classList.contains('shift--rotated')) shiftDirection = 'r';
const layers = [
    ...shiftEl.querySelectorAll('.shift__layer-inner')
];
const triggerEl = document.querySelector('#trigger');
let currentScroll = 0;
let winsize;
let triggerTop;
let cache = {
};
let layersTranslation = {
    x: 0,
    y: 0
};
const calcTriggerTop = ()=>triggerEl.getBoundingClientRect()['top'] + currentScroll
;
const init = ()=>{
    winsize = _utils.calcWinsize();
    triggerTop = calcTriggerTop();
};
// Preload images then remove loader (loading class) from body
_utils.preloadImages('.projects__img, .footer__img, .intro__gallery-item').then(()=>{
    document.body.classList.remove('loading');
    const lscroll = new _locomotiveScrollDefault.default({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true,
        smartphone: {
            smooth: true
        },
        tablet: {
            smooth: true
        }
    });
    init();
    // Locomotive Scroll event
    lscroll.on('scroll', (obj)=>{
        currentScroll = obj.scroll.y;
        layersTranslation.x = shiftDirection !== 'v' ? 0 : _utils.map(currentScroll + winsize.height - triggerTop, 0, MAX_SCROLL_DISTANCE, -1 * LAYER_BOUNDS.max, LAYER_BOUNDS.min);
        layersTranslation.y = shiftDirection === 'v' ? 0 : _utils.map(currentScroll + winsize.height - triggerTop, 0, MAX_SCROLL_DISTANCE, shiftDirection === 'h' ? LAYER_BOUNDS.max : -1 * LAYER_BOUNDS.max, LAYER_BOUNDS.min);
        // only update for different values
        if (cache.layersTranslation && _utils.deepEqual(layersTranslation, cache.layersTranslation)) layers.forEach((layer)=>layer.style.transform = `translate3d(${layersTranslation.x}%, ${layersTranslation.y}%, 0)`
        );
        // cache the last translation
        cache.layersTranslation = layersTranslation;
    });
    window.addEventListener('resize', init);
});

},{"./utils":"72Dku","locomotive-scroll":"iDXE3","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"72Dku":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "clamp", ()=>clamp
);
parcelHelpers.export(exports, "map", ()=>map
);
parcelHelpers.export(exports, "calcWinsize", ()=>calcWinsize
);
parcelHelpers.export(exports, "preloadImages", ()=>preloadImages
);
parcelHelpers.export(exports, "deepEqual", ()=>deepEqual
);
const imagesLoaded = require('imagesloaded');
// Clamps a value between an upper and lower bound
const clamp = (num, min, max)=>num <= min ? min : num >= max ? max : num
;
// Map number x from range [a, b] to [c, d]
const map = (x, a, b, c, d)=>clamp((x - a) * (d - c) / (b - a) + c, Math.min(c, d), Math.max(c, d))
;
// Viewport size
const calcWinsize = ()=>{
    return {
        width: window.innerWidth,
        height: window.innerHeight
    };
};
// Preload images
const preloadImages = (selector = 'img')=>{
    return new Promise((resolve)=>{
        imagesLoaded(document.querySelectorAll(selector), {
            background: true
        }, resolve);
    });
};
// from https://dmitripavlutin.com/how-to-compare-objects-in-javascript/
const isObject = (object)=>object != null && typeof object === 'object'
;
const deepEqual = (object1, object2)=>{
    const keys1 = Object.keys(object1);
    const keys2 = Object.keys(object2);
    if (keys1.length !== keys2.length) return false;
    for (const key of keys1){
        const val1 = object1[key];
        const val2 = object2[key];
        const areObjects = isObject(val1) && isObject(val2);
        if (areObjects && !deepEqual(val1, val2) || !areObjects && val1 !== val2) return false;
    }
    return true;
};

},{"imagesloaded":"aYzyZ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aYzyZ":[function(require,module,exports) {
/*!
 * imagesLoaded v4.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */ (function(window, factory) {
    // universal module definition
    /*global define: false, module: false, require: false */ if (typeof define == 'function' && define.amd) // AMD
    define([
        'ev-emitter/ev-emitter'
    ], function(EvEmitter) {
        return factory(window, EvEmitter);
    });
    else if (typeof module == 'object' && module.exports) // CommonJS
    module.exports = factory(window, require('ev-emitter'));
    else // browser global
    window.imagesLoaded = factory(window, window.EvEmitter);
})(typeof window !== 'undefined' ? window : this, // --------------------------  factory -------------------------- //
function factory(window, EvEmitter) {
    'use strict';
    var $ = window.jQuery;
    var console = window.console;
    // -------------------------- helpers -------------------------- //
    // extend objects
    function extend(a, b) {
        for(var prop in b)a[prop] = b[prop];
        return a;
    }
    var arraySlice = Array.prototype.slice;
    // turn element or nodeList into an array
    function makeArray(obj) {
        if (Array.isArray(obj)) // use object if already an array
        return obj;
        var isArrayLike = typeof obj == 'object' && typeof obj.length == 'number';
        if (isArrayLike) // convert nodeList to array
        return arraySlice.call(obj);
        // array of single index
        return [
            obj
        ];
    }
    // -------------------------- imagesLoaded -------------------------- //
    /**
 * @param {Array, Element, NodeList, String} elem
 * @param {Object or Function} options - if function, use as callback
 * @param {Function} onAlways - callback function
 */ function ImagesLoaded(elem, options, onAlways) {
        // coerce ImagesLoaded() without new, to be new ImagesLoaded()
        if (!(this instanceof ImagesLoaded)) return new ImagesLoaded(elem, options, onAlways);
        // use elem as selector string
        var queryElem = elem;
        if (typeof elem == 'string') queryElem = document.querySelectorAll(elem);
        // bail if bad element
        if (!queryElem) {
            console.error('Bad element for imagesLoaded ' + (queryElem || elem));
            return;
        }
        this.elements = makeArray(queryElem);
        this.options = extend({
        }, this.options);
        // shift arguments if no options set
        if (typeof options == 'function') onAlways = options;
        else extend(this.options, options);
        if (onAlways) this.on('always', onAlways);
        this.getImages();
        if ($) // add jQuery Deferred object
        this.jqDeferred = new $.Deferred();
        // HACK check async to allow time to bind listeners
        setTimeout(this.check.bind(this));
    }
    ImagesLoaded.prototype = Object.create(EvEmitter.prototype);
    ImagesLoaded.prototype.options = {
    };
    ImagesLoaded.prototype.getImages = function() {
        this.images = [];
        // filter & find items if we have an item selector
        this.elements.forEach(this.addElementImages, this);
    };
    /**
 * @param {Node} element
 */ ImagesLoaded.prototype.addElementImages = function(elem) {
        // filter siblings
        if (elem.nodeName == 'IMG') this.addImage(elem);
        // get background image on element
        if (this.options.background === true) this.addElementBackgroundImages(elem);
        // find children
        // no non-element nodes, #143
        var nodeType = elem.nodeType;
        if (!nodeType || !elementNodeTypes[nodeType]) return;
        var childImgs = elem.querySelectorAll('img');
        // concat childElems to filterFound array
        for(var i = 0; i < childImgs.length; i++){
            var img = childImgs[i];
            this.addImage(img);
        }
        // get child background images
        if (typeof this.options.background == 'string') {
            var children = elem.querySelectorAll(this.options.background);
            for(i = 0; i < children.length; i++){
                var child = children[i];
                this.addElementBackgroundImages(child);
            }
        }
    };
    var elementNodeTypes = {
        1: true,
        9: true,
        11: true
    };
    ImagesLoaded.prototype.addElementBackgroundImages = function(elem) {
        var style = getComputedStyle(elem);
        if (!style) // Firefox returns null if in a hidden iframe https://bugzil.la/548397
        return;
        // get url inside url("...")
        var reURL = /url\((['"])?(.*?)\1\)/gi;
        var matches = reURL.exec(style.backgroundImage);
        while(matches !== null){
            var url = matches && matches[2];
            if (url) this.addBackground(url, elem);
            matches = reURL.exec(style.backgroundImage);
        }
    };
    /**
 * @param {Image} img
 */ ImagesLoaded.prototype.addImage = function(img) {
        var loadingImage = new LoadingImage(img);
        this.images.push(loadingImage);
    };
    ImagesLoaded.prototype.addBackground = function(url, elem) {
        var background = new Background(url, elem);
        this.images.push(background);
    };
    ImagesLoaded.prototype.check = function() {
        var _this = this;
        this.progressedCount = 0;
        this.hasAnyBroken = false;
        // complete if no images
        if (!this.images.length) {
            this.complete();
            return;
        }
        function onProgress(image, elem, message) {
            // HACK - Chrome triggers event before object properties have changed. #83
            setTimeout(function() {
                _this.progress(image, elem, message);
            });
        }
        this.images.forEach(function(loadingImage) {
            loadingImage.once('progress', onProgress);
            loadingImage.check();
        });
    };
    ImagesLoaded.prototype.progress = function(image, elem, message) {
        this.progressedCount++;
        this.hasAnyBroken = this.hasAnyBroken || !image.isLoaded;
        // progress event
        this.emitEvent('progress', [
            this,
            image,
            elem
        ]);
        if (this.jqDeferred && this.jqDeferred.notify) this.jqDeferred.notify(this, image);
        // check if completed
        if (this.progressedCount == this.images.length) this.complete();
        if (this.options.debug && console) console.log('progress: ' + message, image, elem);
    };
    ImagesLoaded.prototype.complete = function() {
        var eventName = this.hasAnyBroken ? 'fail' : 'done';
        this.isComplete = true;
        this.emitEvent(eventName, [
            this
        ]);
        this.emitEvent('always', [
            this
        ]);
        if (this.jqDeferred) {
            var jqMethod = this.hasAnyBroken ? 'reject' : 'resolve';
            this.jqDeferred[jqMethod](this);
        }
    };
    // --------------------------  -------------------------- //
    function LoadingImage(img) {
        this.img = img;
    }
    LoadingImage.prototype = Object.create(EvEmitter.prototype);
    LoadingImage.prototype.check = function() {
        // If complete is true and browser supports natural sizes,
        // try to check for image status manually.
        var isComplete = this.getIsImageComplete();
        if (isComplete) {
            // report based on naturalWidth
            this.confirm(this.img.naturalWidth !== 0, 'naturalWidth');
            return;
        }
        // If none of the checks above matched, simulate loading on detached element.
        this.proxyImage = new Image();
        this.proxyImage.addEventListener('load', this);
        this.proxyImage.addEventListener('error', this);
        // bind to image as well for Firefox. #191
        this.img.addEventListener('load', this);
        this.img.addEventListener('error', this);
        this.proxyImage.src = this.img.src;
    };
    LoadingImage.prototype.getIsImageComplete = function() {
        // check for non-zero, non-undefined naturalWidth
        // fixes Safari+InfiniteScroll+Masonry bug infinite-scroll#671
        return this.img.complete && this.img.naturalWidth;
    };
    LoadingImage.prototype.confirm = function(isLoaded, message) {
        this.isLoaded = isLoaded;
        this.emitEvent('progress', [
            this,
            this.img,
            message
        ]);
    };
    // ----- events ----- //
    // trigger specified handler for event type
    LoadingImage.prototype.handleEvent = function(event) {
        var method = 'on' + event.type;
        if (this[method]) this[method](event);
    };
    LoadingImage.prototype.onload = function() {
        this.confirm(true, 'onload');
        this.unbindEvents();
    };
    LoadingImage.prototype.onerror = function() {
        this.confirm(false, 'onerror');
        this.unbindEvents();
    };
    LoadingImage.prototype.unbindEvents = function() {
        this.proxyImage.removeEventListener('load', this);
        this.proxyImage.removeEventListener('error', this);
        this.img.removeEventListener('load', this);
        this.img.removeEventListener('error', this);
    };
    // -------------------------- Background -------------------------- //
    function Background(url, element) {
        this.url = url;
        this.element = element;
        this.img = new Image();
    }
    // inherit LoadingImage prototype
    Background.prototype = Object.create(LoadingImage.prototype);
    Background.prototype.check = function() {
        this.img.addEventListener('load', this);
        this.img.addEventListener('error', this);
        this.img.src = this.url;
        // check if image is already complete
        var isComplete = this.getIsImageComplete();
        if (isComplete) {
            this.confirm(this.img.naturalWidth !== 0, 'naturalWidth');
            this.unbindEvents();
        }
    };
    Background.prototype.unbindEvents = function() {
        this.img.removeEventListener('load', this);
        this.img.removeEventListener('error', this);
    };
    Background.prototype.confirm = function(isLoaded, message) {
        this.isLoaded = isLoaded;
        this.emitEvent('progress', [
            this,
            this.element,
            message
        ]);
    };
    // -------------------------- jQuery -------------------------- //
    ImagesLoaded.makeJQueryPlugin = function(jQuery) {
        jQuery = jQuery || window.jQuery;
        if (!jQuery) return;
        // set local variable
        $ = jQuery;
        // $().imagesLoaded()
        $.fn.imagesLoaded = function(options, callback) {
            var instance = new ImagesLoaded(this, options, callback);
            return instance.jqDeferred.promise($(this));
        };
    };
    // try making plugin
    ImagesLoaded.makeJQueryPlugin();
    // --------------------------  -------------------------- //
    return ImagesLoaded;
});

},{"ev-emitter":"7rCHo"}],"7rCHo":[function(require,module,exports) {
(function(global, factory) {
    // universal module definition
    /* jshint strict: false */ /* globals define, module, window */ if (typeof define == 'function' && define.amd) // AMD - RequireJS
    define(factory);
    else if (typeof module == 'object' && module.exports) // CommonJS - Browserify, Webpack
    module.exports = factory();
    else // Browser globals
    global.EvEmitter = factory();
})(typeof window != 'undefined' ? window : this, function() {
    "use strict";
    function EvEmitter() {
    }
    var proto = EvEmitter.prototype;
    proto.on = function(eventName, listener) {
        if (!eventName || !listener) return;
        // set events hash
        var events = this._events = this._events || {
        };
        // set listeners array
        var listeners = events[eventName] = events[eventName] || [];
        // only add once
        if (listeners.indexOf(listener) == -1) listeners.push(listener);
        return this;
    };
    proto.once = function(eventName, listener) {
        if (!eventName || !listener) return;
        // add event
        this.on(eventName, listener);
        // set once flag
        // set onceEvents hash
        var onceEvents = this._onceEvents = this._onceEvents || {
        };
        // set onceListeners object
        var onceListeners = onceEvents[eventName] = onceEvents[eventName] || {
        };
        // set flag
        onceListeners[listener] = true;
        return this;
    };
    proto.off = function(eventName, listener) {
        var listeners = this._events && this._events[eventName];
        if (!listeners || !listeners.length) return;
        var index = listeners.indexOf(listener);
        if (index != -1) listeners.splice(index, 1);
        return this;
    };
    proto.emitEvent = function(eventName, args) {
        var listeners = this._events && this._events[eventName];
        if (!listeners || !listeners.length) return;
        // copy over to avoid interference if .off() in listener
        listeners = listeners.slice(0);
        args = args || [];
        // once stuff
        var onceListeners = this._onceEvents && this._onceEvents[eventName];
        for(var i = 0; i < listeners.length; i++){
            var listener = listeners[i];
            var isOnce = onceListeners && onceListeners[listener];
            if (isOnce) {
                // remove listener
                // remove before trigger to prevent recursion
                this.off(eventName, listener);
                // unset once flag
                delete onceListeners[listener];
            }
            // trigger listener
            listener.apply(this, args);
        }
        return this;
    };
    proto.allOff = function() {
        delete this._events;
        delete this._onceEvents;
    };
    return EvEmitter;
});

},{}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"iDXE3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Native", ()=>Native
);
parcelHelpers.export(exports, "Smooth", ()=>Smooth
);
var global = arguments[3];
/* locomotive-scroll v4.1.2 | MIT License | https://github.com/locomotivemtl/locomotive-scroll */ function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread2(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {
        };
        if (i % 2) ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _getPrototypeOf(o1) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o1);
}
function _setPrototypeOf(o2, p1) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o2, p1);
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) return call;
    return _assertThisInitialized(self);
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn(this, result);
    };
}
function _superPropBase(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = _getPrototypeOf(object);
        if (object === null) break;
    }
    return object;
}
function _get(target1, property1, receiver1) {
    if (typeof Reflect !== "undefined" && Reflect.get) _get = Reflect.get;
    else _get = function _get(target, property, receiver) {
        var base = _superPropBase(target, property);
        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);
        if (desc.get) return desc.get.call(receiver);
        return desc.value;
    };
    return _get(target1, property1, receiver1 || target1);
}
function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}
function _iterableToArrayLimit(arr, i) {
    if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;
    try {
        for(var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
var defaults = {
    el: document,
    name: 'scroll',
    offset: [
        0,
        0
    ],
    repeat: false,
    smooth: false,
    initPosition: {
        x: 0,
        y: 0
    },
    direction: 'vertical',
    gestureDirection: 'vertical',
    reloadOnContextChange: false,
    lerp: 0.1,
    "class": 'is-inview',
    scrollbarContainer: false,
    scrollbarClass: 'c-scrollbar',
    scrollingClass: 'has-scroll-scrolling',
    draggingClass: 'has-scroll-dragging',
    smoothClass: 'has-scroll-smooth',
    initClass: 'has-scroll-init',
    getSpeed: false,
    getDirection: false,
    scrollFromAnywhere: false,
    multiplier: 1,
    firefoxMultiplier: 50,
    touchMultiplier: 2,
    resetNativeScroll: true,
    tablet: {
        smooth: false,
        direction: 'vertical',
        gestureDirection: 'vertical',
        breakpoint: 1024
    },
    smartphone: {
        smooth: false,
        direction: 'vertical',
        gestureDirection: 'vertical'
    }
};
var _default = /*#__PURE__*/ function() {
    function _default1() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        };
        _classCallCheck(this, _default1);
        Object.assign(this, defaults, options);
        this.smartphone = defaults.smartphone;
        if (options.smartphone) Object.assign(this.smartphone, options.smartphone);
        this.tablet = defaults.tablet;
        if (options.tablet) Object.assign(this.tablet, options.tablet);
        this.namespace = 'locomotive';
        this.html = document.documentElement;
        this.windowHeight = window.innerHeight;
        this.windowWidth = window.innerWidth;
        this.windowMiddle = {
            x: this.windowWidth / 2,
            y: this.windowHeight / 2
        };
        this.els = {
        };
        this.currentElements = {
        };
        this.listeners = {
        };
        this.hasScrollTicking = false;
        this.hasCallEventSet = false;
        this.checkScroll = this.checkScroll.bind(this);
        this.checkResize = this.checkResize.bind(this);
        this.checkEvent = this.checkEvent.bind(this);
        this.instance = {
            scroll: {
                x: 0,
                y: 0
            },
            limit: {
                x: this.html.offsetWidth,
                y: this.html.offsetHeight
            },
            currentElements: this.currentElements
        };
        if (this.isMobile) {
            if (this.isTablet) this.context = 'tablet';
            else this.context = 'smartphone';
        } else this.context = 'desktop';
        if (this.isMobile) this.direction = this[this.context].direction;
        if (this.direction === 'horizontal') this.directionAxis = 'x';
        else this.directionAxis = 'y';
        if (this.getDirection) this.instance.direction = null;
        if (this.getDirection) this.instance.speed = 0;
        this.html.classList.add(this.initClass);
        window.addEventListener('resize', this.checkResize, false);
    }
    _createClass(_default1, [
        {
            key: "init",
            value: function init() {
                this.initEvents();
            }
        },
        {
            key: "checkScroll",
            value: function checkScroll() {
                this.dispatchScroll();
            }
        },
        {
            key: "checkResize",
            value: function checkResize() {
                var _this = this;
                if (!this.resizeTick) {
                    this.resizeTick = true;
                    requestAnimationFrame(function() {
                        _this.resize();
                        _this.resizeTick = false;
                    });
                }
            }
        },
        {
            key: "resize",
            value: function resize() {
            }
        },
        {
            key: "checkContext",
            value: function checkContext() {
                if (!this.reloadOnContextChange) return;
                this.isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1 || this.windowWidth < this.tablet.breakpoint;
                this.isTablet = this.isMobile && this.windowWidth >= this.tablet.breakpoint;
                var oldContext = this.context;
                if (this.isMobile) {
                    if (this.isTablet) this.context = 'tablet';
                    else this.context = 'smartphone';
                } else this.context = 'desktop';
                if (oldContext != this.context) {
                    var oldSmooth = oldContext == 'desktop' ? this.smooth : this[oldContext].smooth;
                    var newSmooth = this.context == 'desktop' ? this.smooth : this[this.context].smooth;
                    if (oldSmooth != newSmooth) window.location.reload();
                }
            }
        },
        {
            key: "initEvents",
            value: function initEvents() {
                var _this2 = this;
                this.scrollToEls = this.el.querySelectorAll("[data-".concat(this.name, "-to]"));
                this.setScrollTo = this.setScrollTo.bind(this);
                this.scrollToEls.forEach(function(el) {
                    el.addEventListener('click', _this2.setScrollTo, false);
                });
            }
        },
        {
            key: "setScrollTo",
            value: function setScrollTo(event) {
                event.preventDefault();
                this.scrollTo(event.currentTarget.getAttribute("data-".concat(this.name, "-href")) || event.currentTarget.getAttribute('href'), {
                    offset: event.currentTarget.getAttribute("data-".concat(this.name, "-offset"))
                });
            }
        },
        {
            key: "addElements",
            value: function addElements() {
            }
        },
        {
            key: "detectElements",
            value: function detectElements(hasCallEventSet) {
                var _this3 = this;
                var scrollTop = this.instance.scroll.y;
                var scrollBottom = scrollTop + this.windowHeight;
                var scrollLeft = this.instance.scroll.x;
                var scrollRight = scrollLeft + this.windowWidth;
                Object.entries(this.els).forEach(function(_ref) {
                    var _ref2 = _slicedToArray(_ref, 2), i = _ref2[0], el = _ref2[1];
                    if (el && (!el.inView || hasCallEventSet)) {
                        if (_this3.direction === 'horizontal') {
                            if (scrollRight >= el.left && scrollLeft < el.right) _this3.setInView(el, i);
                        } else if (scrollBottom >= el.top && scrollTop < el.bottom) _this3.setInView(el, i);
                    }
                    if (el && el.inView) {
                        if (_this3.direction === 'horizontal') {
                            var width = el.right - el.left;
                            el.progress = (_this3.instance.scroll.x - (el.left - _this3.windowWidth)) / (width + _this3.windowWidth);
                            if (scrollRight < el.left || scrollLeft > el.right) _this3.setOutOfView(el, i);
                        } else {
                            var height = el.bottom - el.top;
                            el.progress = (_this3.instance.scroll.y - (el.top - _this3.windowHeight)) / (height + _this3.windowHeight);
                            if (scrollBottom < el.top || scrollTop > el.bottom) _this3.setOutOfView(el, i);
                        }
                    }
                }); // this.els = this.els.filter((current, i) => {
                //     return current !== null;
                // });
                this.hasScrollTicking = false;
            }
        },
        {
            key: "setInView",
            value: function setInView(current, i) {
                this.els[i].inView = true;
                current.el.classList.add(current["class"]);
                this.currentElements[i] = current;
                if (current.call && this.hasCallEventSet) {
                    this.dispatchCall(current, 'enter');
                    if (!current.repeat) this.els[i].call = false;
                } // if (!current.repeat && !current.speed && !current.sticky) {
            //     if (!current.call || current.call && this.hasCallEventSet) {
            //        this.els[i] = null
            //     }
            // }
            }
        },
        {
            key: "setOutOfView",
            value: function setOutOfView(current, i) {
                var _this4 = this;
                // if (current.repeat || current.speed !== undefined) {
                this.els[i].inView = false; // }
                Object.keys(this.currentElements).forEach(function(el) {
                    el === i && delete _this4.currentElements[el];
                });
                if (current.call && this.hasCallEventSet) this.dispatchCall(current, 'exit');
                if (current.repeat) current.el.classList.remove(current["class"]);
            }
        },
        {
            key: "dispatchCall",
            value: function dispatchCall(current, way) {
                this.callWay = way;
                this.callValue = current.call.split(',').map(function(item) {
                    return item.trim();
                });
                this.callObj = current;
                if (this.callValue.length == 1) this.callValue = this.callValue[0];
                var callEvent = new Event(this.namespace + 'call');
                this.el.dispatchEvent(callEvent);
            }
        },
        {
            key: "dispatchScroll",
            value: function dispatchScroll() {
                var scrollEvent = new Event(this.namespace + 'scroll');
                this.el.dispatchEvent(scrollEvent);
            }
        },
        {
            key: "setEvents",
            value: function setEvents(event, func) {
                if (!this.listeners[event]) this.listeners[event] = [];
                var list = this.listeners[event];
                list.push(func);
                if (list.length === 1) this.el.addEventListener(this.namespace + event, this.checkEvent, false);
                if (event === 'call') {
                    this.hasCallEventSet = true;
                    this.detectElements(true);
                }
            }
        },
        {
            key: "unsetEvents",
            value: function unsetEvents(event, func) {
                if (!this.listeners[event]) return;
                var list = this.listeners[event];
                var index = list.indexOf(func);
                if (index < 0) return;
                list.splice(index, 1);
                if (list.index === 0) this.el.removeEventListener(this.namespace + event, this.checkEvent, false);
            }
        },
        {
            key: "checkEvent",
            value: function checkEvent(event) {
                var _this5 = this;
                var name = event.type.replace(this.namespace, '');
                var list = this.listeners[name];
                if (!list || list.length === 0) return;
                list.forEach(function(func) {
                    switch(name){
                        case 'scroll':
                            return func(_this5.instance);
                        case 'call':
                            return func(_this5.callValue, _this5.callWay, _this5.callObj);
                        default:
                            return func();
                    }
                });
            }
        },
        {
            key: "startScroll",
            value: function startScroll() {
            }
        },
        {
            key: "stopScroll",
            value: function stopScroll() {
            }
        },
        {
            key: "setScroll",
            value: function setScroll(x, y) {
                this.instance.scroll = {
                    x: 0,
                    y: 0
                };
            }
        },
        {
            key: "destroy",
            value: function destroy() {
                var _this6 = this;
                window.removeEventListener('resize', this.checkResize, false);
                Object.keys(this.listeners).forEach(function(event) {
                    _this6.el.removeEventListener(_this6.namespace + event, _this6.checkEvent, false);
                });
                this.listeners = {
                };
                this.scrollToEls.forEach(function(el) {
                    el.removeEventListener('click', _this6.setScrollTo, false);
                });
                this.html.classList.remove(this.initClass);
            }
        }
    ]);
    return _default1;
}();
var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {
};
function createCommonjsModule(fn, module) {
    return module = {
        exports: {
        }
    }, fn(module, module.exports), module.exports;
}
var smoothscroll = createCommonjsModule(function(module, exports) {
    (function() {
        // polyfill
        function polyfill() {
            // aliases
            var w = window;
            var d = document;
            // return if scroll behavior is supported and polyfill is not forced
            if ('scrollBehavior' in d.documentElement.style && w.__forceSmoothScrollPolyfill__ !== true) return;
            // globals
            var Element = w.HTMLElement || w.Element;
            var SCROLL_TIME = 468;
            // object gathering original scroll methods
            var original = {
                scroll: w.scroll || w.scrollTo,
                scrollBy: w.scrollBy,
                elementScroll: Element.prototype.scroll || scrollElement,
                scrollIntoView: Element.prototype.scrollIntoView
            };
            // define timing method
            var now = w.performance && w.performance.now ? w.performance.now.bind(w.performance) : Date.now;
            /**
     * indicates if a the current browser is made by Microsoft
     * @method isMicrosoftBrowser
     * @param {String} userAgent
     * @returns {Boolean}
     */ function isMicrosoftBrowser(userAgent) {
                var userAgentPatterns = [
                    'MSIE ',
                    'Trident/',
                    'Edge/'
                ];
                return new RegExp(userAgentPatterns.join('|')).test(userAgent);
            }
            /*
     * IE has rounding bug rounding down clientHeight and clientWidth and
     * rounding up scrollHeight and scrollWidth causing false positives
     * on hasScrollableSpace
     */ var ROUNDING_TOLERANCE = isMicrosoftBrowser(w.navigator.userAgent) ? 1 : 0;
            /**
     * changes scroll position inside an element
     * @method scrollElement
     * @param {Number} x
     * @param {Number} y
     * @returns {undefined}
     */ function scrollElement(x, y) {
                this.scrollLeft = x;
                this.scrollTop = y;
            }
            /**
     * returns result of applying ease math function to a number
     * @method ease
     * @param {Number} k
     * @returns {Number}
     */ function ease(k) {
                return 0.5 * (1 - Math.cos(Math.PI * k));
            }
            /**
     * indicates if a smooth behavior should be applied
     * @method shouldBailOut
     * @param {Number|Object} firstArg
     * @returns {Boolean}
     */ function shouldBailOut(firstArg) {
                if (firstArg === null || typeof firstArg !== 'object' || firstArg.behavior === undefined || firstArg.behavior === 'auto' || firstArg.behavior === 'instant') // first argument is not an object/null
                // or behavior is auto, instant or undefined
                return true;
                if (typeof firstArg === 'object' && firstArg.behavior === 'smooth') // first argument is an object and behavior is smooth
                return false;
                // throw error when behavior is not supported
                throw new TypeError('behavior member of ScrollOptions ' + firstArg.behavior + ' is not a valid value for enumeration ScrollBehavior.');
            }
            /**
     * indicates if an element has scrollable space in the provided axis
     * @method hasScrollableSpace
     * @param {Node} el
     * @param {String} axis
     * @returns {Boolean}
     */ function hasScrollableSpace(el, axis) {
                if (axis === 'Y') return el.clientHeight + ROUNDING_TOLERANCE < el.scrollHeight;
                if (axis === 'X') return el.clientWidth + ROUNDING_TOLERANCE < el.scrollWidth;
            }
            /**
     * indicates if an element has a scrollable overflow property in the axis
     * @method canOverflow
     * @param {Node} el
     * @param {String} axis
     * @returns {Boolean}
     */ function canOverflow(el, axis) {
                var overflowValue = w.getComputedStyle(el, null)['overflow' + axis];
                return overflowValue === 'auto' || overflowValue === 'scroll';
            }
            /**
     * indicates if an element can be scrolled in either axis
     * @method isScrollable
     * @param {Node} el
     * @param {String} axis
     * @returns {Boolean}
     */ function isScrollable(el) {
                var isScrollableY = hasScrollableSpace(el, 'Y') && canOverflow(el, 'Y');
                var isScrollableX = hasScrollableSpace(el, 'X') && canOverflow(el, 'X');
                return isScrollableY || isScrollableX;
            }
            /**
     * finds scrollable parent of an element
     * @method findScrollableParent
     * @param {Node} el
     * @returns {Node} el
     */ function findScrollableParent(el) {
                while(el !== d.body && isScrollable(el) === false)el = el.parentNode || el.host;
                return el;
            }
            /**
     * self invoked function that, given a context, steps through scrolling
     * @method step
     * @param {Object} context
     * @returns {undefined}
     */ function step(context) {
                var time = now();
                var value;
                var currentX;
                var currentY;
                var elapsed = (time - context.startTime) / SCROLL_TIME;
                // avoid elapsed times higher than one
                elapsed = elapsed > 1 ? 1 : elapsed;
                // apply easing to elapsed time
                value = ease(elapsed);
                currentX = context.startX + (context.x - context.startX) * value;
                currentY = context.startY + (context.y - context.startY) * value;
                context.method.call(context.scrollable, currentX, currentY);
                // scroll more if we have not reached our destination
                if (currentX !== context.x || currentY !== context.y) w.requestAnimationFrame(step.bind(w, context));
            }
            /**
     * scrolls window or element with a smooth behavior
     * @method smoothScroll
     * @param {Object|Node} el
     * @param {Number} x
     * @param {Number} y
     * @returns {undefined}
     */ function smoothScroll(el, x, y) {
                var scrollable;
                var startX;
                var startY;
                var method;
                var startTime = now();
                // define scroll context
                if (el === d.body) {
                    scrollable = w;
                    startX = w.scrollX || w.pageXOffset;
                    startY = w.scrollY || w.pageYOffset;
                    method = original.scroll;
                } else {
                    scrollable = el;
                    startX = el.scrollLeft;
                    startY = el.scrollTop;
                    method = scrollElement;
                }
                // scroll looping over a frame
                step({
                    scrollable: scrollable,
                    method: method,
                    startTime: startTime,
                    startX: startX,
                    startY: startY,
                    x: x,
                    y: y
                });
            }
            // ORIGINAL METHODS OVERRIDES
            // w.scroll and w.scrollTo
            w.scroll = w.scrollTo = function() {
                // avoid action when no arguments are passed
                if (arguments[0] === undefined) return;
                // avoid smooth behavior if not required
                if (shouldBailOut(arguments[0]) === true) {
                    original.scroll.call(w, arguments[0].left !== undefined ? arguments[0].left : typeof arguments[0] !== 'object' ? arguments[0] : w.scrollX || w.pageXOffset, // use top prop, second argument if present or fallback to scrollY
                    arguments[0].top !== undefined ? arguments[0].top : arguments[1] !== undefined ? arguments[1] : w.scrollY || w.pageYOffset);
                    return;
                }
                // LET THE SMOOTHNESS BEGIN!
                smoothScroll.call(w, d.body, arguments[0].left !== undefined ? ~~arguments[0].left : w.scrollX || w.pageXOffset, arguments[0].top !== undefined ? ~~arguments[0].top : w.scrollY || w.pageYOffset);
            };
            // w.scrollBy
            w.scrollBy = function() {
                // avoid action when no arguments are passed
                if (arguments[0] === undefined) return;
                // avoid smooth behavior if not required
                if (shouldBailOut(arguments[0])) {
                    original.scrollBy.call(w, arguments[0].left !== undefined ? arguments[0].left : typeof arguments[0] !== 'object' ? arguments[0] : 0, arguments[0].top !== undefined ? arguments[0].top : arguments[1] !== undefined ? arguments[1] : 0);
                    return;
                }
                // LET THE SMOOTHNESS BEGIN!
                smoothScroll.call(w, d.body, ~~arguments[0].left + (w.scrollX || w.pageXOffset), ~~arguments[0].top + (w.scrollY || w.pageYOffset));
            };
            // Element.prototype.scroll and Element.prototype.scrollTo
            Element.prototype.scroll = Element.prototype.scrollTo = function() {
                // avoid action when no arguments are passed
                if (arguments[0] === undefined) return;
                // avoid smooth behavior if not required
                if (shouldBailOut(arguments[0]) === true) {
                    // if one number is passed, throw error to match Firefox implementation
                    if (typeof arguments[0] === 'number' && arguments[1] === undefined) throw new SyntaxError('Value could not be converted');
                    original.elementScroll.call(this, // use left prop, first number argument or fallback to scrollLeft
                    arguments[0].left !== undefined ? ~~arguments[0].left : typeof arguments[0] !== 'object' ? ~~arguments[0] : this.scrollLeft, // use top prop, second argument or fallback to scrollTop
                    arguments[0].top !== undefined ? ~~arguments[0].top : arguments[1] !== undefined ? ~~arguments[1] : this.scrollTop);
                    return;
                }
                var left = arguments[0].left;
                var top = arguments[0].top;
                // LET THE SMOOTHNESS BEGIN!
                smoothScroll.call(this, this, typeof left === 'undefined' ? this.scrollLeft : ~~left, typeof top === 'undefined' ? this.scrollTop : ~~top);
            };
            // Element.prototype.scrollBy
            Element.prototype.scrollBy = function() {
                // avoid action when no arguments are passed
                if (arguments[0] === undefined) return;
                // avoid smooth behavior if not required
                if (shouldBailOut(arguments[0]) === true) {
                    original.elementScroll.call(this, arguments[0].left !== undefined ? ~~arguments[0].left + this.scrollLeft : ~~arguments[0] + this.scrollLeft, arguments[0].top !== undefined ? ~~arguments[0].top + this.scrollTop : ~~arguments[1] + this.scrollTop);
                    return;
                }
                this.scroll({
                    left: ~~arguments[0].left + this.scrollLeft,
                    top: ~~arguments[0].top + this.scrollTop,
                    behavior: arguments[0].behavior
                });
            };
            // Element.prototype.scrollIntoView
            Element.prototype.scrollIntoView = function() {
                // avoid smooth behavior if not required
                if (shouldBailOut(arguments[0]) === true) {
                    original.scrollIntoView.call(this, arguments[0] === undefined ? true : arguments[0]);
                    return;
                }
                // LET THE SMOOTHNESS BEGIN!
                var scrollableParent = findScrollableParent(this);
                var parentRects = scrollableParent.getBoundingClientRect();
                var clientRects = this.getBoundingClientRect();
                if (scrollableParent !== d.body) {
                    // reveal element inside parent
                    smoothScroll.call(this, scrollableParent, scrollableParent.scrollLeft + clientRects.left - parentRects.left, scrollableParent.scrollTop + clientRects.top - parentRects.top);
                    // reveal parent in viewport unless is fixed
                    if (w.getComputedStyle(scrollableParent).position !== 'fixed') w.scrollBy({
                        left: parentRects.left,
                        top: parentRects.top,
                        behavior: 'smooth'
                    });
                } else // reveal element in viewport
                w.scrollBy({
                    left: clientRects.left,
                    top: clientRects.top,
                    behavior: 'smooth'
                });
            };
        }
        // commonjs
        module.exports = {
            polyfill: polyfill
        };
    })();
});
var smoothscroll_1 = smoothscroll.polyfill;
var _default$1 = /*#__PURE__*/ function(_Core) {
    _inherits(_default2, _Core);
    var _super = _createSuper(_default2);
    function _default2() {
        var _this;
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        };
        _classCallCheck(this, _default2);
        _this = _super.call(this, options);
        if (_this.resetNativeScroll) {
            if (history.scrollRestoration) history.scrollRestoration = 'manual';
            window.scrollTo(0, 0);
        }
        window.addEventListener('scroll', _this.checkScroll, false);
        if (window.smoothscrollPolyfill === undefined) {
            window.smoothscrollPolyfill = smoothscroll;
            window.smoothscrollPolyfill.polyfill();
        }
        return _this;
    }
    _createClass(_default2, [
        {
            key: "init",
            value: function init() {
                this.instance.scroll.y = window.pageYOffset;
                this.addElements();
                this.detectElements();
                _get(_getPrototypeOf(_default2.prototype), "init", this).call(this);
            }
        },
        {
            key: "checkScroll",
            value: function checkScroll() {
                var _this2 = this;
                _get(_getPrototypeOf(_default2.prototype), "checkScroll", this).call(this);
                if (this.getDirection) this.addDirection();
                if (this.getSpeed) {
                    this.addSpeed();
                    this.speedTs = Date.now();
                }
                this.instance.scroll.y = window.pageYOffset;
                if (Object.entries(this.els).length) {
                    if (!this.hasScrollTicking) {
                        requestAnimationFrame(function() {
                            _this2.detectElements();
                        });
                        this.hasScrollTicking = true;
                    }
                }
            }
        },
        {
            key: "addDirection",
            value: function addDirection() {
                if (window.pageYOffset > this.instance.scroll.y) {
                    if (this.instance.direction !== 'down') this.instance.direction = 'down';
                } else if (window.pageYOffset < this.instance.scroll.y) {
                    if (this.instance.direction !== 'up') this.instance.direction = 'up';
                }
            }
        },
        {
            key: "addSpeed",
            value: function addSpeed() {
                if (window.pageYOffset != this.instance.scroll.y) this.instance.speed = (window.pageYOffset - this.instance.scroll.y) / Math.max(1, Date.now() - this.speedTs);
                else this.instance.speed = 0;
            }
        },
        {
            key: "resize",
            value: function resize() {
                if (Object.entries(this.els).length) {
                    this.windowHeight = window.innerHeight;
                    this.updateElements();
                }
            }
        },
        {
            key: "addElements",
            value: function addElements() {
                var _this3 = this;
                this.els = {
                };
                var els = this.el.querySelectorAll('[data-' + this.name + ']');
                els.forEach(function(el, index) {
                    var BCR = el.getBoundingClientRect();
                    var cl = el.dataset[_this3.name + 'Class'] || _this3["class"];
                    var id = typeof el.dataset[_this3.name + 'Id'] === 'string' ? el.dataset[_this3.name + 'Id'] : index;
                    var top;
                    var left;
                    var offset = typeof el.dataset[_this3.name + 'Offset'] === 'string' ? el.dataset[_this3.name + 'Offset'].split(',') : _this3.offset;
                    var repeat = el.dataset[_this3.name + 'Repeat'];
                    var call = el.dataset[_this3.name + 'Call'];
                    var target = el.dataset[_this3.name + 'Target'];
                    var targetEl;
                    if (target !== undefined) targetEl = document.querySelector("".concat(target));
                    else targetEl = el;
                    var targetElBCR = targetEl.getBoundingClientRect();
                    top = targetElBCR.top + _this3.instance.scroll.y;
                    left = targetElBCR.left + _this3.instance.scroll.x;
                    var bottom = top + targetEl.offsetHeight;
                    var right = left + targetEl.offsetWidth;
                    if (repeat == 'false') repeat = false;
                    else if (repeat != undefined) repeat = true;
                    else repeat = _this3.repeat;
                    var relativeOffset = _this3.getRelativeOffset(offset);
                    top = top + relativeOffset[0];
                    bottom = bottom - relativeOffset[1];
                    var mappedEl = {
                        el: el,
                        targetEl: targetEl,
                        id: id,
                        "class": cl,
                        top: top,
                        bottom: bottom,
                        left: left,
                        right: right,
                        offset: offset,
                        progress: 0,
                        repeat: repeat,
                        inView: false,
                        call: call
                    };
                    _this3.els[id] = mappedEl;
                    if (el.classList.contains(cl)) _this3.setInView(_this3.els[id], id);
                });
            }
        },
        {
            key: "updateElements",
            value: function updateElements() {
                var _this4 = this;
                Object.entries(this.els).forEach(function(_ref) {
                    var _ref2 = _slicedToArray(_ref, 2), i = _ref2[0], el = _ref2[1];
                    var top = el.targetEl.getBoundingClientRect().top + _this4.instance.scroll.y;
                    var bottom = top + el.targetEl.offsetHeight;
                    var relativeOffset = _this4.getRelativeOffset(el.offset);
                    _this4.els[i].top = top + relativeOffset[0];
                    _this4.els[i].bottom = bottom - relativeOffset[1];
                });
                this.hasScrollTicking = false;
            }
        },
        {
            key: "getRelativeOffset",
            value: function getRelativeOffset(offset) {
                var relativeOffset = [
                    0,
                    0
                ];
                if (offset) {
                    for(var i = 0; i < offset.length; i++)if (typeof offset[i] == 'string') {
                        if (offset[i].includes('%')) relativeOffset[i] = parseInt(offset[i].replace('%', '') * this.windowHeight / 100);
                        else relativeOffset[i] = parseInt(offset[i]);
                    } else relativeOffset[i] = offset[i];
                }
                return relativeOffset;
            }
        },
        {
            key: "scrollTo",
            value: function scrollTo(target) {
                var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
                };
                // Parse options
                var offset = parseInt(options.offset) || 0; // An offset to apply on top of given `target` or `sourceElem`'s target
                var callback = options.callback ? options.callback : false; // function called when scrollTo completes (note that it won't wait for lerp to stabilize)
                if (typeof target === 'string') {
                    // Selector or boundaries
                    if (target === 'top') target = this.html;
                    else if (target === 'bottom') target = this.html.offsetHeight - window.innerHeight;
                    else {
                        target = document.querySelector(target); // If the query fails, abort
                        if (!target) return;
                    }
                } else if (typeof target === 'number') // Absolute coordinate
                target = parseInt(target);
                else if (target && target.tagName) ;
                else {
                    console.warn('`target` parameter is not valid');
                    return;
                } // We have a target that is not a coordinate yet, get it
                if (typeof target !== 'number') offset = target.getBoundingClientRect().top + offset + this.instance.scroll.y;
                else offset = target + offset;
                var isTargetReached = function isTargetReached() {
                    return parseInt(window.pageYOffset) === parseInt(offset);
                };
                if (callback) {
                    if (isTargetReached()) {
                        callback();
                        return;
                    } else {
                        var onScroll1 = function onScroll() {
                            if (isTargetReached()) {
                                window.removeEventListener('scroll', onScroll);
                                callback();
                            }
                        };
                        window.addEventListener('scroll', onScroll1);
                    }
                }
                window.scrollTo({
                    top: offset,
                    behavior: options.duration === 0 ? 'auto' : 'smooth'
                });
            }
        },
        {
            key: "update",
            value: function update() {
                this.addElements();
                this.detectElements();
            }
        },
        {
            key: "destroy",
            value: function destroy() {
                _get(_getPrototypeOf(_default2.prototype), "destroy", this).call(this);
                window.removeEventListener('scroll', this.checkScroll, false);
            }
        }
    ]);
    return _default2;
}(_default);
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/ /* eslint-disable no-unused-vars */ var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;
function toObject(val) {
    if (val === null || val === undefined) throw new TypeError('Object.assign cannot be called with null or undefined');
    return Object(val);
}
function shouldUseNative() {
    try {
        if (!Object.assign) return false;
        // Detect buggy property enumeration order in older V8 versions.
        // https://bugs.chromium.org/p/v8/issues/detail?id=4118
        var test1 = "abc"; // eslint-disable-line no-new-wrappers
        test1[5] = 'de';
        if (Object.getOwnPropertyNames(test1)[0] === '5') return false;
        // https://bugs.chromium.org/p/v8/issues/detail?id=3056
        var test2 = {
        };
        for(var i = 0; i < 10; i++)test2['_' + String.fromCharCode(i)] = i;
        var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
            return test2[n];
        });
        if (order2.join('') !== '0123456789') return false;
        // https://bugs.chromium.org/p/v8/issues/detail?id=3056
        var test3 = {
        };
        'abcdefghijklmnopqrst'.split('').forEach(function(letter) {
            test3[letter] = letter;
        });
        if (Object.keys(Object.assign({
        }, test3)).join('') !== 'abcdefghijklmnopqrst') return false;
        return true;
    } catch (err) {
        // We don't expect any of the above to throw, but better to be safe.
        return false;
    }
}
var objectAssign = shouldUseNative() ? Object.assign : function(target, source) {
    var from;
    var to = toObject(target);
    var symbols;
    for(var s = 1; s < arguments.length; s++){
        from = Object(arguments[s]);
        for(var key in from)if (hasOwnProperty.call(from, key)) to[key] = from[key];
        if (getOwnPropertySymbols) {
            symbols = getOwnPropertySymbols(from);
            for(var i = 0; i < symbols.length; i++)if (propIsEnumerable.call(from, symbols[i])) to[symbols[i]] = from[symbols[i]];
        }
    }
    return to;
};
function E() {
// Keep this empty so it's easier to inherit from
// (via https://github.com/lipsmack from https://github.com/scottcorgan/tiny-emitter/issues/3)
}
E.prototype = {
    on: function(name, callback, ctx) {
        var e = this.e || (this.e = {
        });
        (e[name] || (e[name] = [])).push({
            fn: callback,
            ctx: ctx
        });
        return this;
    },
    once: function(name, callback, ctx) {
        var self = this;
        function listener() {
            self.off(name, listener);
            callback.apply(ctx, arguments);
        }
        listener._ = callback;
        return this.on(name, listener, ctx);
    },
    emit: function(name) {
        var data = [].slice.call(arguments, 1);
        var evtArr = ((this.e || (this.e = {
        }))[name] || []).slice();
        var i = 0;
        var len = evtArr.length;
        for(; i < len; i++)evtArr[i].fn.apply(evtArr[i].ctx, data);
        return this;
    },
    off: function(name, callback) {
        var e = this.e || (this.e = {
        });
        var evts = e[name];
        var liveEvents = [];
        if (evts && callback) {
            for(var i = 0, len = evts.length; i < len; i++)if (evts[i].fn !== callback && evts[i].fn._ !== callback) liveEvents.push(evts[i]);
        }
        // Remove event from queue to prevent memory leak
        // Suggested by https://github.com/lazd
        // Ref: https://github.com/scottcorgan/tiny-emitter/commit/c6ebfaa9bc973b33d110a84a307742b7cf94c953#commitcomment-5024910
        liveEvents.length ? e[name] = liveEvents : delete e[name];
        return this;
    }
};
var tinyEmitter = E;
var lethargy = createCommonjsModule(function(module, exports) {
    // Generated by CoffeeScript 1.9.2
    (function() {
        var root;
        root = exports !== null ? exports : this;
        root.Lethargy = (function() {
            function Lethargy1(stability, sensitivity, tolerance, delay) {
                this.stability = stability != null ? Math.abs(stability) : 8;
                this.sensitivity = sensitivity != null ? 1 + Math.abs(sensitivity) : 100;
                this.tolerance = tolerance != null ? 1 + Math.abs(tolerance) : 1.1;
                this.delay = delay != null ? delay : 150;
                this.lastUpDeltas = (function() {
                    var i, ref, results;
                    results = [];
                    for(i = 1, ref = this.stability * 2; 1 <= ref ? i <= ref : i >= ref; 1 <= ref ? i++ : i--)results.push(null);
                    return results;
                }).call(this);
                this.lastDownDeltas = (function() {
                    var i, ref, results;
                    results = [];
                    for(i = 1, ref = this.stability * 2; 1 <= ref ? i <= ref : i >= ref; 1 <= ref ? i++ : i--)results.push(null);
                    return results;
                }).call(this);
                this.deltasTimestamp = (function() {
                    var i, ref, results;
                    results = [];
                    for(i = 1, ref = this.stability * 2; 1 <= ref ? i <= ref : i >= ref; 1 <= ref ? i++ : i--)results.push(null);
                    return results;
                }).call(this);
            }
            Lethargy1.prototype.check = function(e) {
                var lastDelta;
                e = e.originalEvent || e;
                if (e.wheelDelta != null) lastDelta = e.wheelDelta;
                else if (e.deltaY != null) lastDelta = e.deltaY * -40;
                else if (e.detail != null || e.detail === 0) lastDelta = e.detail * -40;
                this.deltasTimestamp.push(Date.now());
                this.deltasTimestamp.shift();
                if (lastDelta > 0) {
                    this.lastUpDeltas.push(lastDelta);
                    this.lastUpDeltas.shift();
                    return this.isInertia(1);
                } else {
                    this.lastDownDeltas.push(lastDelta);
                    this.lastDownDeltas.shift();
                    return this.isInertia(-1);
                }
            };
            Lethargy1.prototype.isInertia = function(direction) {
                var lastDeltas, lastDeltasNew, lastDeltasOld, newAverage, newSum, oldAverage, oldSum;
                lastDeltas = direction === -1 ? this.lastDownDeltas : this.lastUpDeltas;
                if (lastDeltas[0] === null) return direction;
                if (this.deltasTimestamp[this.stability * 2 - 2] + this.delay > Date.now() && lastDeltas[0] === lastDeltas[this.stability * 2 - 1]) return false;
                lastDeltasOld = lastDeltas.slice(0, this.stability);
                lastDeltasNew = lastDeltas.slice(this.stability, this.stability * 2);
                oldSum = lastDeltasOld.reduce(function(t, s) {
                    return t + s;
                });
                newSum = lastDeltasNew.reduce(function(t, s) {
                    return t + s;
                });
                oldAverage = oldSum / lastDeltasOld.length;
                newAverage = newSum / lastDeltasNew.length;
                if (Math.abs(oldAverage) < Math.abs(newAverage * this.tolerance) && this.sensitivity < Math.abs(newAverage)) return direction;
                else return false;
            };
            Lethargy1.prototype.showLastUpDeltas = function() {
                return this.lastUpDeltas;
            };
            Lethargy1.prototype.showLastDownDeltas = function() {
                return this.lastDownDeltas;
            };
            return Lethargy1;
        })();
    }).call(commonjsGlobal);
});
var support = function getSupport() {
    return {
        hasWheelEvent: 'onwheel' in document,
        hasMouseWheelEvent: 'onmousewheel' in document,
        hasTouch: 'ontouchstart' in window || window.TouchEvent || window.DocumentTouch && document instanceof DocumentTouch,
        hasTouchWin: navigator.msMaxTouchPoints && navigator.msMaxTouchPoints > 1,
        hasPointer: !!window.navigator.msPointerEnabled,
        hasKeyDown: 'onkeydown' in document,
        isFirefox: navigator.userAgent.indexOf('Firefox') > -1
    };
}();
var toString = Object.prototype.toString, hasOwnProperty$1 = Object.prototype.hasOwnProperty;
var bindallStandalone = function(object) {
    if (!object) return console.warn('bindAll requires at least one argument.');
    var functions = Array.prototype.slice.call(arguments, 1);
    if (functions.length === 0) for(var method in object){
        if (hasOwnProperty$1.call(object, method)) {
            if (typeof object[method] == 'function' && toString.call(object[method]) == "[object Function]") functions.push(method);
        }
    }
    for(var i = 0; i < functions.length; i++){
        var f = functions[i];
        object[f] = bind(object[f], object);
    }
};
/*
    Faster bind without specific-case checking. (see https://coderwall.com/p/oi3j3w).
    bindAll is only needed for events binding so no need to make slow fixes for constructor
    or partial application.
*/ function bind(func, context) {
    return function() {
        return func.apply(context, arguments);
    };
}
var Lethargy = lethargy.Lethargy;
var EVT_ID = 'virtualscroll';
var src = VirtualScroll;
var keyCodes = {
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
    SPACE: 32
};
function VirtualScroll(options) {
    bindallStandalone(this, '_onWheel', '_onMouseWheel', '_onTouchStart', '_onTouchMove', '_onKeyDown');
    this.el = window;
    if (options && options.el) {
        this.el = options.el;
        delete options.el;
    }
    this.options = objectAssign({
        mouseMultiplier: 1,
        touchMultiplier: 2,
        firefoxMultiplier: 15,
        keyStep: 120,
        preventTouch: false,
        unpreventTouchClass: 'vs-touchmove-allowed',
        limitInertia: false,
        useKeyboard: true,
        useTouch: true
    }, options);
    if (this.options.limitInertia) this._lethargy = new Lethargy();
    this._emitter = new tinyEmitter();
    this._event = {
        y: 0,
        x: 0,
        deltaX: 0,
        deltaY: 0
    };
    this.touchStartX = null;
    this.touchStartY = null;
    this.bodyTouchAction = null;
    if (this.options.passive !== undefined) this.listenerOptions = {
        passive: this.options.passive
    };
}
VirtualScroll.prototype._notify = function(e) {
    var evt = this._event;
    evt.x += evt.deltaX;
    evt.y += evt.deltaY;
    this._emitter.emit(EVT_ID, {
        x: evt.x,
        y: evt.y,
        deltaX: evt.deltaX,
        deltaY: evt.deltaY,
        originalEvent: e
    });
};
VirtualScroll.prototype._onWheel = function(e) {
    var options = this.options;
    if (this._lethargy && this._lethargy.check(e) === false) return;
    var evt = this._event;
    // In Chrome and in Firefox (at least the new one)
    evt.deltaX = e.wheelDeltaX || e.deltaX * -1;
    evt.deltaY = e.wheelDeltaY || e.deltaY * -1;
    // for our purpose deltamode = 1 means user is on a wheel mouse, not touch pad
    // real meaning: https://developer.mozilla.org/en-US/docs/Web/API/WheelEvent#Delta_modes
    if (support.isFirefox && e.deltaMode == 1) {
        evt.deltaX *= options.firefoxMultiplier;
        evt.deltaY *= options.firefoxMultiplier;
    }
    evt.deltaX *= options.mouseMultiplier;
    evt.deltaY *= options.mouseMultiplier;
    this._notify(e);
};
VirtualScroll.prototype._onMouseWheel = function(e) {
    if (this.options.limitInertia && this._lethargy.check(e) === false) return;
    var evt = this._event;
    // In Safari, IE and in Chrome if 'wheel' isn't defined
    evt.deltaX = e.wheelDeltaX ? e.wheelDeltaX : 0;
    evt.deltaY = e.wheelDeltaY ? e.wheelDeltaY : e.wheelDelta;
    this._notify(e);
};
VirtualScroll.prototype._onTouchStart = function(e) {
    var t = e.targetTouches ? e.targetTouches[0] : e;
    this.touchStartX = t.pageX;
    this.touchStartY = t.pageY;
};
VirtualScroll.prototype._onTouchMove = function(e) {
    var options = this.options;
    if (options.preventTouch && !e.target.classList.contains(options.unpreventTouchClass)) e.preventDefault();
    var evt = this._event;
    var t = e.targetTouches ? e.targetTouches[0] : e;
    evt.deltaX = (t.pageX - this.touchStartX) * options.touchMultiplier;
    evt.deltaY = (t.pageY - this.touchStartY) * options.touchMultiplier;
    this.touchStartX = t.pageX;
    this.touchStartY = t.pageY;
    this._notify(e);
};
VirtualScroll.prototype._onKeyDown = function(e) {
    var evt = this._event;
    evt.deltaX = evt.deltaY = 0;
    var windowHeight = window.innerHeight - 40;
    switch(e.keyCode){
        case keyCodes.LEFT:
        case keyCodes.UP:
            evt.deltaY = this.options.keyStep;
            break;
        case keyCodes.RIGHT:
        case keyCodes.DOWN:
            evt.deltaY = -this.options.keyStep;
            break;
        case e.shiftKey:
            evt.deltaY = windowHeight;
            break;
        case keyCodes.SPACE:
            evt.deltaY = -windowHeight;
            break;
        default:
            return;
    }
    this._notify(e);
};
VirtualScroll.prototype._bind = function() {
    if (support.hasWheelEvent) this.el.addEventListener('wheel', this._onWheel, this.listenerOptions);
    if (support.hasMouseWheelEvent) this.el.addEventListener('mousewheel', this._onMouseWheel, this.listenerOptions);
    if (support.hasTouch && this.options.useTouch) {
        this.el.addEventListener('touchstart', this._onTouchStart, this.listenerOptions);
        this.el.addEventListener('touchmove', this._onTouchMove, this.listenerOptions);
    }
    if (support.hasPointer && support.hasTouchWin) {
        this.bodyTouchAction = document.body.style.msTouchAction;
        document.body.style.msTouchAction = 'none';
        this.el.addEventListener('MSPointerDown', this._onTouchStart, true);
        this.el.addEventListener('MSPointerMove', this._onTouchMove, true);
    }
    if (support.hasKeyDown && this.options.useKeyboard) document.addEventListener('keydown', this._onKeyDown);
};
VirtualScroll.prototype._unbind = function() {
    if (support.hasWheelEvent) this.el.removeEventListener('wheel', this._onWheel);
    if (support.hasMouseWheelEvent) this.el.removeEventListener('mousewheel', this._onMouseWheel);
    if (support.hasTouch) {
        this.el.removeEventListener('touchstart', this._onTouchStart);
        this.el.removeEventListener('touchmove', this._onTouchMove);
    }
    if (support.hasPointer && support.hasTouchWin) {
        document.body.style.msTouchAction = this.bodyTouchAction;
        this.el.removeEventListener('MSPointerDown', this._onTouchStart, true);
        this.el.removeEventListener('MSPointerMove', this._onTouchMove, true);
    }
    if (support.hasKeyDown && this.options.useKeyboard) document.removeEventListener('keydown', this._onKeyDown);
};
VirtualScroll.prototype.on = function(cb, ctx) {
    this._emitter.on(EVT_ID, cb, ctx);
    var events = this._emitter.e;
    if (events && events[EVT_ID] && events[EVT_ID].length === 1) this._bind();
};
VirtualScroll.prototype.off = function(cb, ctx) {
    this._emitter.off(EVT_ID, cb, ctx);
    var events = this._emitter.e;
    if (!events[EVT_ID] || events[EVT_ID].length <= 0) this._unbind();
};
VirtualScroll.prototype.reset = function() {
    var evt = this._event;
    evt.x = 0;
    evt.y = 0;
};
VirtualScroll.prototype.destroy = function() {
    this._emitter.off();
    this._unbind();
};
function lerp(start, end, amt) {
    return (1 - amt) * start + amt * end;
}
function getTranslate(el) {
    var translate = {
    };
    if (!window.getComputedStyle) return;
    var style = getComputedStyle(el);
    var transform = style.transform || style.webkitTransform || style.mozTransform;
    var mat = transform.match(/^matrix3d\((.+)\)$/);
    if (mat) {
        translate.x = mat ? parseFloat(mat[1].split(', ')[12]) : 0;
        translate.y = mat ? parseFloat(mat[1].split(', ')[13]) : 0;
    } else {
        mat = transform.match(/^matrix\((.+)\)$/);
        translate.x = mat ? parseFloat(mat[1].split(', ')[4]) : 0;
        translate.y = mat ? parseFloat(mat[1].split(', ')[5]) : 0;
    }
    return translate;
}
/**
 * Returns an array containing all the parent nodes of the given node
 * @param  {object} node
 * @return {array} parent nodes
 */ function getParents(elem) {
    // Set up a parent array
    var parents = []; // Push each parent element to the array
    for(; elem && elem !== document; elem = elem.parentNode)parents.push(elem);
     // Return our parent array
    return parents;
} // https://gomakethings.com/how-to-get-the-closest-parent-element-with-a-matching-selector-using-vanilla-javascript/
/**
 * https://github.com/gre/bezier-easing
 * BezierEasing - use bezier curve for transition easing function
 * by Gaëtan Renaudeau 2014 - 2015 – MIT License
 */ // These values are established by empiricism with tests (tradeoff: performance VS precision)
var NEWTON_ITERATIONS = 4;
var NEWTON_MIN_SLOPE = 0.001;
var SUBDIVISION_PRECISION = 0.0000001;
var SUBDIVISION_MAX_ITERATIONS = 10;
var kSplineTableSize = 11;
var kSampleStepSize = 1 / (kSplineTableSize - 1);
var float32ArraySupported = typeof Float32Array === 'function';
function A(aA1, aA2) {
    return 1 - 3 * aA2 + 3 * aA1;
}
function B(aA1, aA2) {
    return 3 * aA2 - 6 * aA1;
}
function C(aA1) {
    return 3 * aA1;
}
// Returns x(t) given t, x1, and x2, or y(t) given t, y1, and y2.
function calcBezier(aT, aA1, aA2) {
    return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT;
}
// Returns dx/dt given t, x1, and x2, or dy/dt given t, y1, and y2.
function getSlope(aT, aA1, aA2) {
    return 3 * A(aA1, aA2) * aT * aT + 2 * B(aA1, aA2) * aT + C(aA1);
}
function binarySubdivide(aX, aA, aB, mX1, mX2) {
    var currentX, currentT, i = 0;
    do {
        currentT = aA + (aB - aA) / 2;
        currentX = calcBezier(currentT, mX1, mX2) - aX;
        if (currentX > 0) aB = currentT;
        else aA = currentT;
    }while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS)
    return currentT;
}
function newtonRaphsonIterate(aX, aGuessT, mX1, mX2) {
    for(var i = 0; i < NEWTON_ITERATIONS; ++i){
        var currentSlope = getSlope(aGuessT, mX1, mX2);
        if (currentSlope === 0) return aGuessT;
        var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
        aGuessT -= currentX / currentSlope;
    }
    return aGuessT;
}
function LinearEasing(x) {
    return x;
}
var src$1 = function bezier(mX1, mY1, mX2, mY2) {
    if (!(0 <= mX1 && mX1 <= 1 && 0 <= mX2 && mX2 <= 1)) throw new Error('bezier x values must be in [0, 1] range');
    if (mX1 === mY1 && mX2 === mY2) return LinearEasing;
    // Precompute samples table
    var sampleValues = float32ArraySupported ? new Float32Array(kSplineTableSize) : new Array(kSplineTableSize);
    for(var i = 0; i < kSplineTableSize; ++i)sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
    function getTForX(aX) {
        var intervalStart = 0;
        var currentSample = 1;
        var lastSample = kSplineTableSize - 1;
        for(; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample)intervalStart += kSampleStepSize;
        --currentSample;
        // Interpolate to provide an initial guess for t
        var dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
        var guessForT = intervalStart + dist * kSampleStepSize;
        var initialSlope = getSlope(guessForT, mX1, mX2);
        if (initialSlope >= NEWTON_MIN_SLOPE) return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
        else if (initialSlope === 0) return guessForT;
        else return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
    }
    return function BezierEasing(x) {
        // Because JavaScript number are imprecise, we should guarantee the extremes are right.
        if (x === 0) return 0;
        if (x === 1) return 1;
        return calcBezier(getTForX(x), mY1, mY2);
    };
};
var keyCodes$1 = {
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
    SPACE: 32,
    TAB: 9,
    PAGEUP: 33,
    PAGEDOWN: 34,
    HOME: 36,
    END: 35
};
var _default$2 = /*#__PURE__*/ function(_Core) {
    _inherits(_default3, _Core);
    var _super = _createSuper(_default3);
    function _default3() {
        var _this;
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        };
        _classCallCheck(this, _default3);
        if (history.scrollRestoration) history.scrollRestoration = 'manual';
        window.scrollTo(0, 0);
        _this = _super.call(this, options);
        if (_this.inertia) _this.lerp = _this.inertia * 0.1;
        _this.isScrolling = false;
        _this.isDraggingScrollbar = false;
        _this.isTicking = false;
        _this.hasScrollTicking = false;
        _this.parallaxElements = {
        };
        _this.stop = false;
        _this.scrollbarContainer = options.scrollbarContainer;
        _this.checkKey = _this.checkKey.bind(_assertThisInitialized(_this));
        window.addEventListener('keydown', _this.checkKey, false);
        return _this;
    }
    _createClass(_default3, [
        {
            key: "init",
            value: function init() {
                var _this2 = this;
                this.html.classList.add(this.smoothClass);
                this.html.setAttribute("data-".concat(this.name, "-direction"), this.direction);
                this.instance = _objectSpread2({
                    delta: {
                        x: this.initPosition.x,
                        y: this.initPosition.y
                    },
                    scroll: {
                        x: this.initPosition.x,
                        y: this.initPosition.y
                    }
                }, this.instance);
                this.vs = new src({
                    el: this.scrollFromAnywhere ? document : this.el,
                    mouseMultiplier: navigator.platform.indexOf('Win') > -1 ? 1 : 0.4,
                    firefoxMultiplier: this.firefoxMultiplier,
                    touchMultiplier: this.touchMultiplier,
                    useKeyboard: false,
                    passive: true
                });
                this.vs.on(function(e) {
                    if (_this2.stop) return;
                    if (!_this2.isDraggingScrollbar) requestAnimationFrame(function() {
                        _this2.updateDelta(e);
                        if (!_this2.isScrolling) _this2.startScrolling();
                    });
                });
                this.setScrollLimit();
                this.initScrollBar();
                this.addSections();
                this.addElements();
                this.checkScroll(true);
                this.transformElements(true, true);
                _get(_getPrototypeOf(_default3.prototype), "init", this).call(this);
            }
        },
        {
            key: "setScrollLimit",
            value: function setScrollLimit() {
                this.instance.limit.y = this.el.offsetHeight - this.windowHeight;
                if (this.direction === 'horizontal') {
                    var totalWidth = 0;
                    var nodes = this.el.children;
                    for(var i = 0; i < nodes.length; i++)totalWidth += nodes[i].offsetWidth;
                    this.instance.limit.x = totalWidth - this.windowWidth;
                }
            }
        },
        {
            key: "startScrolling",
            value: function startScrolling() {
                this.startScrollTs = Date.now(); // Record timestamp
                this.isScrolling = true;
                this.checkScroll();
                this.html.classList.add(this.scrollingClass);
            }
        },
        {
            key: "stopScrolling",
            value: function stopScrolling() {
                cancelAnimationFrame(this.checkScrollRaf); // Prevent checkScroll to continue looping
                //Pevent scrollbar glitch/locking
                this.startScrollTs = undefined;
                if (this.scrollToRaf) {
                    cancelAnimationFrame(this.scrollToRaf);
                    this.scrollToRaf = null;
                }
                this.isScrolling = false;
                this.instance.scroll.y = Math.round(this.instance.scroll.y);
                this.html.classList.remove(this.scrollingClass);
            }
        },
        {
            key: "checkKey",
            value: function checkKey(e) {
                var _this3 = this;
                if (this.stop) {
                    // If we are stopped, we don't want any scroll to occur because of a keypress
                    // Prevent tab to scroll to activeElement
                    if (e.keyCode == keyCodes$1.TAB) requestAnimationFrame(function() {
                        // Make sure native scroll is always at top of page
                        _this3.html.scrollTop = 0;
                        document.body.scrollTop = 0;
                        _this3.html.scrollLeft = 0;
                        document.body.scrollLeft = 0;
                    });
                    return;
                }
                switch(e.keyCode){
                    case keyCodes$1.TAB:
                        // Do not remove the RAF
                        // It allows to override the browser's native scrollTo, which is essential
                        requestAnimationFrame(function() {
                            // Make sure native scroll is always at top of page
                            _this3.html.scrollTop = 0;
                            document.body.scrollTop = 0;
                            _this3.html.scrollLeft = 0;
                            document.body.scrollLeft = 0; // Request scrollTo on the focusedElement, putting it at the center of the screen
                            _this3.scrollTo(document.activeElement, {
                                offset: -window.innerHeight / 2
                            });
                        });
                        break;
                    case keyCodes$1.UP:
                        this.instance.delta[this.directionAxis] -= 240;
                        break;
                    case keyCodes$1.DOWN:
                        this.instance.delta[this.directionAxis] += 240;
                        break;
                    case keyCodes$1.PAGEUP:
                        this.instance.delta[this.directionAxis] -= window.innerHeight;
                        break;
                    case keyCodes$1.PAGEDOWN:
                        this.instance.delta[this.directionAxis] += window.innerHeight;
                        break;
                    case keyCodes$1.HOME:
                        this.instance.delta[this.directionAxis] -= this.instance.limit[this.directionAxis];
                        break;
                    case keyCodes$1.END:
                        this.instance.delta[this.directionAxis] += this.instance.limit[this.directionAxis];
                        break;
                    case keyCodes$1.SPACE:
                        if (!(document.activeElement instanceof HTMLInputElement) && !(document.activeElement instanceof HTMLTextAreaElement)) {
                            if (e.shiftKey) this.instance.delta[this.directionAxis] -= window.innerHeight;
                            else this.instance.delta[this.directionAxis] += window.innerHeight;
                        }
                        break;
                    default:
                        return;
                }
                if (this.instance.delta[this.directionAxis] < 0) this.instance.delta[this.directionAxis] = 0;
                if (this.instance.delta[this.directionAxis] > this.instance.limit[this.directionAxis]) this.instance.delta[this.directionAxis] = this.instance.limit[this.directionAxis];
                this.stopScrolling(); // Stop any movement, allows to kill any other `scrollTo` still happening
                this.isScrolling = true;
                this.checkScroll();
                this.html.classList.add(this.scrollingClass);
            }
        },
        {
            key: "checkScroll",
            value: function checkScroll() {
                var _this4 = this;
                var forced = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
                if (forced || this.isScrolling || this.isDraggingScrollbar) {
                    if (!this.hasScrollTicking) {
                        this.checkScrollRaf = requestAnimationFrame(function() {
                            return _this4.checkScroll();
                        });
                        this.hasScrollTicking = true;
                    }
                    this.updateScroll();
                    var distance = Math.abs(this.instance.delta[this.directionAxis] - this.instance.scroll[this.directionAxis]);
                    var timeSinceStart = Date.now() - this.startScrollTs; // Get the time since the scroll was started: the scroll can be stopped again only past 100ms
                    if (!this.animatingScroll && timeSinceStart > 100 && (distance < 0.5 && this.instance.delta[this.directionAxis] != 0 || distance < 0.5 && this.instance.delta[this.directionAxis] == 0)) this.stopScrolling();
                    Object.entries(this.sections).forEach(function(_ref) {
                        var _ref2 = _slicedToArray(_ref, 2), i = _ref2[0], section = _ref2[1];
                        if (section.persistent || _this4.instance.scroll[_this4.directionAxis] > section.offset[_this4.directionAxis] && _this4.instance.scroll[_this4.directionAxis] < section.limit[_this4.directionAxis]) {
                            if (_this4.direction === 'horizontal') _this4.transform(section.el, -_this4.instance.scroll[_this4.directionAxis], 0);
                            else _this4.transform(section.el, 0, -_this4.instance.scroll[_this4.directionAxis]);
                            if (!section.inView) {
                                section.inView = true;
                                section.el.style.opacity = 1;
                                section.el.style.pointerEvents = 'all';
                                section.el.setAttribute("data-".concat(_this4.name, "-section-inview"), '');
                            }
                        } else {
                            if (section.inView || forced) {
                                section.inView = false;
                                section.el.style.opacity = 0;
                                section.el.style.pointerEvents = 'none';
                                section.el.removeAttribute("data-".concat(_this4.name, "-section-inview"));
                            }
                            _this4.transform(section.el, 0, 0);
                        }
                    });
                    if (this.getDirection) this.addDirection();
                    if (this.getSpeed) {
                        this.addSpeed();
                        this.speedTs = Date.now();
                    }
                    this.detectElements();
                    this.transformElements();
                    if (this.hasScrollbar) {
                        var scrollBarTranslation = this.instance.scroll[this.directionAxis] / this.instance.limit[this.directionAxis] * this.scrollBarLimit[this.directionAxis];
                        if (this.direction === 'horizontal') this.transform(this.scrollbarThumb, scrollBarTranslation, 0);
                        else this.transform(this.scrollbarThumb, 0, scrollBarTranslation);
                    }
                    _get(_getPrototypeOf(_default3.prototype), "checkScroll", this).call(this);
                    this.hasScrollTicking = false;
                }
            }
        },
        {
            key: "resize",
            value: function resize() {
                this.windowHeight = window.innerHeight;
                this.windowWidth = window.innerWidth;
                this.checkContext();
                this.windowMiddle = {
                    x: this.windowWidth / 2,
                    y: this.windowHeight / 2
                };
                this.update();
            }
        },
        {
            key: "updateDelta",
            value: function updateDelta(e) {
                var delta;
                var gestureDirection = this[this.context] && this[this.context].gestureDirection ? this[this.context].gestureDirection : this.gestureDirection;
                if (gestureDirection === 'both') delta = e.deltaX + e.deltaY;
                else if (gestureDirection === 'vertical') delta = e.deltaY;
                else if (gestureDirection === 'horizontal') delta = e.deltaX;
                else delta = e.deltaY;
                this.instance.delta[this.directionAxis] -= delta * this.multiplier;
                if (this.instance.delta[this.directionAxis] < 0) this.instance.delta[this.directionAxis] = 0;
                if (this.instance.delta[this.directionAxis] > this.instance.limit[this.directionAxis]) this.instance.delta[this.directionAxis] = this.instance.limit[this.directionAxis];
            }
        },
        {
            key: "updateScroll",
            value: function updateScroll(e) {
                if (this.isScrolling || this.isDraggingScrollbar) this.instance.scroll[this.directionAxis] = lerp(this.instance.scroll[this.directionAxis], this.instance.delta[this.directionAxis], this.lerp);
                else {
                    if (this.instance.scroll[this.directionAxis] > this.instance.limit[this.directionAxis]) this.setScroll(this.instance.scroll[this.directionAxis], this.instance.limit[this.directionAxis]);
                    else if (this.instance.scroll.y < 0) this.setScroll(this.instance.scroll[this.directionAxis], 0);
                    else this.setScroll(this.instance.scroll[this.directionAxis], this.instance.delta[this.directionAxis]);
                }
            }
        },
        {
            key: "addDirection",
            value: function addDirection() {
                if (this.instance.delta.y > this.instance.scroll.y) {
                    if (this.instance.direction !== 'down') this.instance.direction = 'down';
                } else if (this.instance.delta.y < this.instance.scroll.y) {
                    if (this.instance.direction !== 'up') this.instance.direction = 'up';
                }
                if (this.instance.delta.x > this.instance.scroll.x) {
                    if (this.instance.direction !== 'right') this.instance.direction = 'right';
                } else if (this.instance.delta.x < this.instance.scroll.x) {
                    if (this.instance.direction !== 'left') this.instance.direction = 'left';
                }
            }
        },
        {
            key: "addSpeed",
            value: function addSpeed() {
                if (this.instance.delta[this.directionAxis] != this.instance.scroll[this.directionAxis]) this.instance.speed = (this.instance.delta[this.directionAxis] - this.instance.scroll[this.directionAxis]) / Math.max(1, Date.now() - this.speedTs);
                else this.instance.speed = 0;
            }
        },
        {
            key: "initScrollBar",
            value: function initScrollBar() {
                this.scrollbar = document.createElement('span');
                this.scrollbarThumb = document.createElement('span');
                this.scrollbar.classList.add("".concat(this.scrollbarClass));
                this.scrollbarThumb.classList.add("".concat(this.scrollbarClass, "_thumb"));
                this.scrollbar.append(this.scrollbarThumb);
                if (this.scrollbarContainer) this.scrollbarContainer.append(this.scrollbar);
                else document.body.append(this.scrollbar);
                 // Scrollbar Events
                this.getScrollBar = this.getScrollBar.bind(this);
                this.releaseScrollBar = this.releaseScrollBar.bind(this);
                this.moveScrollBar = this.moveScrollBar.bind(this);
                this.scrollbarThumb.addEventListener('mousedown', this.getScrollBar);
                window.addEventListener('mouseup', this.releaseScrollBar);
                window.addEventListener('mousemove', this.moveScrollBar); // Set scrollbar values
                this.hasScrollbar = false;
                if (this.direction == 'horizontal') {
                    if (this.instance.limit.x + this.windowWidth <= this.windowWidth) return;
                } else {
                    if (this.instance.limit.y + this.windowHeight <= this.windowHeight) return;
                }
                this.hasScrollbar = true;
                this.scrollbarBCR = this.scrollbar.getBoundingClientRect();
                this.scrollbarHeight = this.scrollbarBCR.height;
                this.scrollbarWidth = this.scrollbarBCR.width;
                if (this.direction === 'horizontal') this.scrollbarThumb.style.width = "".concat(this.scrollbarWidth * this.scrollbarWidth / (this.instance.limit.x + this.scrollbarWidth), "px");
                else this.scrollbarThumb.style.height = "".concat(this.scrollbarHeight * this.scrollbarHeight / (this.instance.limit.y + this.scrollbarHeight), "px");
                this.scrollbarThumbBCR = this.scrollbarThumb.getBoundingClientRect();
                this.scrollBarLimit = {
                    x: this.scrollbarWidth - this.scrollbarThumbBCR.width,
                    y: this.scrollbarHeight - this.scrollbarThumbBCR.height
                };
            }
        },
        {
            key: "reinitScrollBar",
            value: function reinitScrollBar() {
                this.hasScrollbar = false;
                if (this.direction == 'horizontal') {
                    if (this.instance.limit.x + this.windowWidth <= this.windowWidth) return;
                } else {
                    if (this.instance.limit.y + this.windowHeight <= this.windowHeight) return;
                }
                this.hasScrollbar = true;
                this.scrollbarBCR = this.scrollbar.getBoundingClientRect();
                this.scrollbarHeight = this.scrollbarBCR.height;
                this.scrollbarWidth = this.scrollbarBCR.width;
                if (this.direction === 'horizontal') this.scrollbarThumb.style.width = "".concat(this.scrollbarWidth * this.scrollbarWidth / (this.instance.limit.x + this.scrollbarWidth), "px");
                else this.scrollbarThumb.style.height = "".concat(this.scrollbarHeight * this.scrollbarHeight / (this.instance.limit.y + this.scrollbarHeight), "px");
                this.scrollbarThumbBCR = this.scrollbarThumb.getBoundingClientRect();
                this.scrollBarLimit = {
                    x: this.scrollbarWidth - this.scrollbarThumbBCR.width,
                    y: this.scrollbarHeight - this.scrollbarThumbBCR.height
                };
            }
        },
        {
            key: "destroyScrollBar",
            value: function destroyScrollBar() {
                this.scrollbarThumb.removeEventListener('mousedown', this.getScrollBar);
                window.removeEventListener('mouseup', this.releaseScrollBar);
                window.removeEventListener('mousemove', this.moveScrollBar);
                this.scrollbar.remove();
            }
        },
        {
            key: "getScrollBar",
            value: function getScrollBar(e) {
                this.isDraggingScrollbar = true;
                this.checkScroll();
                this.html.classList.remove(this.scrollingClass);
                this.html.classList.add(this.draggingClass);
            }
        },
        {
            key: "releaseScrollBar",
            value: function releaseScrollBar(e) {
                this.isDraggingScrollbar = false;
                if (this.isScrolling) this.html.classList.add(this.scrollingClass);
                this.html.classList.remove(this.draggingClass);
            }
        },
        {
            key: "moveScrollBar",
            value: function moveScrollBar(e) {
                var _this5 = this;
                if (this.isDraggingScrollbar) requestAnimationFrame(function() {
                    var x = (e.clientX - _this5.scrollbarBCR.left) * 100 / _this5.scrollbarWidth * _this5.instance.limit.x / 100;
                    var y = (e.clientY - _this5.scrollbarBCR.top) * 100 / _this5.scrollbarHeight * _this5.instance.limit.y / 100;
                    if (y > 0 && y < _this5.instance.limit.y) _this5.instance.delta.y = y;
                    if (x > 0 && x < _this5.instance.limit.x) _this5.instance.delta.x = x;
                });
            }
        },
        {
            key: "addElements",
            value: function addElements() {
                var _this6 = this;
                this.els = {
                };
                this.parallaxElements = {
                }; // this.sections.forEach((section, y) => {
                var els = this.el.querySelectorAll("[data-".concat(this.name, "]"));
                els.forEach(function(el, index) {
                    // Try and find the target's parent section
                    var targetParents = getParents(el);
                    var section1 = Object.entries(_this6.sections).map(function(_ref3) {
                        var _ref4 = _slicedToArray(_ref3, 2), key = _ref4[0], section = _ref4[1];
                        return section;
                    }).find(function(section) {
                        return targetParents.includes(section.el);
                    });
                    var cl = el.dataset[_this6.name + 'Class'] || _this6["class"];
                    var id = typeof el.dataset[_this6.name + 'Id'] === 'string' ? el.dataset[_this6.name + 'Id'] : 'el' + index;
                    var top;
                    var left;
                    var repeat = el.dataset[_this6.name + 'Repeat'];
                    var call = el.dataset[_this6.name + 'Call'];
                    var position = el.dataset[_this6.name + 'Position'];
                    var delay = el.dataset[_this6.name + 'Delay'];
                    var direction = el.dataset[_this6.name + 'Direction'];
                    var sticky = typeof el.dataset[_this6.name + 'Sticky'] === 'string';
                    var speed = el.dataset[_this6.name + 'Speed'] ? parseFloat(el.dataset[_this6.name + 'Speed']) / 10 : false;
                    var offset = typeof el.dataset[_this6.name + 'Offset'] === 'string' ? el.dataset[_this6.name + 'Offset'].split(',') : _this6.offset;
                    var target = el.dataset[_this6.name + 'Target'];
                    var targetEl;
                    if (target !== undefined) targetEl = document.querySelector("".concat(target));
                    else targetEl = el;
                    var targetElBCR = targetEl.getBoundingClientRect();
                    if (section1 === null) {
                        top = targetElBCR.top + _this6.instance.scroll.y - getTranslate(targetEl).y;
                        left = targetElBCR.left + _this6.instance.scroll.x - getTranslate(targetEl).x;
                    } else if (!section1.inView) {
                        top = targetElBCR.top - getTranslate(section1.el).y - getTranslate(targetEl).y;
                        left = targetElBCR.left - getTranslate(section1.el).x - getTranslate(targetEl).x;
                    } else {
                        top = targetElBCR.top + _this6.instance.scroll.y - getTranslate(targetEl).y;
                        left = targetElBCR.left + _this6.instance.scroll.x - getTranslate(targetEl).x;
                    }
                    var bottom = top + targetEl.offsetHeight;
                    var right = left + targetEl.offsetWidth;
                    var middle = {
                        x: (right - left) / 2 + left,
                        y: (bottom - top) / 2 + top
                    };
                    if (sticky) {
                        var elBCR = el.getBoundingClientRect();
                        var elTop = elBCR.top;
                        var elLeft = elBCR.left;
                        var elDistance = {
                            x: elLeft - left,
                            y: elTop - top
                        };
                        top += window.innerHeight;
                        left += window.innerWidth;
                        bottom = elTop + targetEl.offsetHeight - el.offsetHeight - elDistance[_this6.directionAxis];
                        right = elLeft + targetEl.offsetWidth - el.offsetWidth - elDistance[_this6.directionAxis];
                        middle = {
                            x: (right - left) / 2 + left,
                            y: (bottom - top) / 2 + top
                        };
                    }
                    if (repeat == 'false') repeat = false;
                    else if (repeat != undefined) repeat = true;
                    else repeat = _this6.repeat;
                    var relativeOffset = [
                        0,
                        0
                    ];
                    if (offset) {
                        if (_this6.direction === 'horizontal') {
                            for(var i = 0; i < offset.length; i++)if (typeof offset[i] == 'string') {
                                if (offset[i].includes('%')) relativeOffset[i] = parseInt(offset[i].replace('%', '') * _this6.windowWidth / 100);
                                else relativeOffset[i] = parseInt(offset[i]);
                            } else relativeOffset[i] = offset[i];
                            left = left + relativeOffset[0];
                            right = right - relativeOffset[1];
                        } else {
                            for(var i = 0; i < offset.length; i++)if (typeof offset[i] == 'string') {
                                if (offset[i].includes('%')) relativeOffset[i] = parseInt(offset[i].replace('%', '') * _this6.windowHeight / 100);
                                else relativeOffset[i] = parseInt(offset[i]);
                            } else relativeOffset[i] = offset[i];
                            top = top + relativeOffset[0];
                            bottom = bottom - relativeOffset[1];
                        }
                    }
                    var mappedEl = {
                        el: el,
                        id: id,
                        "class": cl,
                        section: section1,
                        top: top,
                        middle: middle,
                        bottom: bottom,
                        left: left,
                        right: right,
                        offset: offset,
                        progress: 0,
                        repeat: repeat,
                        inView: false,
                        call: call,
                        speed: speed,
                        delay: delay,
                        position: position,
                        target: targetEl,
                        direction: direction,
                        sticky: sticky
                    };
                    _this6.els[id] = mappedEl;
                    if (el.classList.contains(cl)) _this6.setInView(_this6.els[id], id);
                    if (speed !== false || sticky) _this6.parallaxElements[id] = mappedEl;
                }); // });
            }
        },
        {
            key: "addSections",
            value: function addSections() {
                var _this7 = this;
                this.sections = {
                };
                var sections = this.el.querySelectorAll("[data-".concat(this.name, "-section]"));
                if (sections.length === 0) sections = [
                    this.el
                ];
                sections.forEach(function(section, index) {
                    var id = typeof section.dataset[_this7.name + 'Id'] === 'string' ? section.dataset[_this7.name + 'Id'] : 'section' + index;
                    var sectionBCR = section.getBoundingClientRect();
                    var offset = {
                        x: sectionBCR.left - window.innerWidth * 1.5 - getTranslate(section).x,
                        y: sectionBCR.top - window.innerHeight * 1.5 - getTranslate(section).y
                    };
                    var limit = {
                        x: offset.x + sectionBCR.width + window.innerWidth * 2,
                        y: offset.y + sectionBCR.height + window.innerHeight * 2
                    };
                    var persistent = typeof section.dataset[_this7.name + 'Persistent'] === 'string';
                    section.setAttribute('data-scroll-section-id', id);
                    var mappedSection = {
                        el: section,
                        offset: offset,
                        limit: limit,
                        inView: false,
                        persistent: persistent,
                        id: id
                    };
                    _this7.sections[id] = mappedSection;
                });
            }
        },
        {
            key: "transform",
            value: function transform(element, x, y, delay) {
                var transform;
                if (!delay) transform = "matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,".concat(x, ",").concat(y, ",0,1)");
                else {
                    var start = getTranslate(element);
                    var lerpX = lerp(start.x, x, delay);
                    var lerpY = lerp(start.y, y, delay);
                    transform = "matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,".concat(lerpX, ",").concat(lerpY, ",0,1)");
                }
                element.style.webkitTransform = transform;
                element.style.msTransform = transform;
                element.style.transform = transform;
            }
        },
        {
            key: "transformElements",
            value: function transformElements(isForced) {
                var _this8 = this;
                var setAllElements = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
                var scrollRight = this.instance.scroll.x + this.windowWidth;
                var scrollBottom = this.instance.scroll.y + this.windowHeight;
                var scrollMiddle = {
                    x: this.instance.scroll.x + this.windowMiddle.x,
                    y: this.instance.scroll.y + this.windowMiddle.y
                };
                Object.entries(this.parallaxElements).forEach(function(_ref5) {
                    var _ref6 = _slicedToArray(_ref5, 2), i = _ref6[0], current = _ref6[1];
                    var transformDistance = false;
                    if (isForced) transformDistance = 0;
                    if (current.inView || setAllElements) switch(current.position){
                        case 'top':
                            transformDistance = _this8.instance.scroll[_this8.directionAxis] * -current.speed;
                            break;
                        case 'elementTop':
                            transformDistance = (scrollBottom - current.top) * -current.speed;
                            break;
                        case 'bottom':
                            transformDistance = (_this8.instance.limit[_this8.directionAxis] - scrollBottom + _this8.windowHeight) * current.speed;
                            break;
                        case 'left':
                            transformDistance = _this8.instance.scroll[_this8.directionAxis] * -current.speed;
                            break;
                        case 'elementLeft':
                            transformDistance = (scrollRight - current.left) * -current.speed;
                            break;
                        case 'right':
                            transformDistance = (_this8.instance.limit[_this8.directionAxis] - scrollRight + _this8.windowHeight) * current.speed;
                            break;
                        default:
                            transformDistance = (scrollMiddle[_this8.directionAxis] - current.middle[_this8.directionAxis]) * -current.speed;
                            break;
                    }
                    if (current.sticky) {
                        if (current.inView) {
                            if (_this8.direction === 'horizontal') transformDistance = _this8.instance.scroll.x - current.left + window.innerWidth;
                            else transformDistance = _this8.instance.scroll.y - current.top + window.innerHeight;
                        } else if (_this8.direction === 'horizontal') {
                            if (_this8.instance.scroll.x < current.left - window.innerWidth && _this8.instance.scroll.x < current.left - window.innerWidth / 2) transformDistance = 0;
                            else if (_this8.instance.scroll.x > current.right && _this8.instance.scroll.x > current.right + 100) transformDistance = current.right - current.left + window.innerWidth;
                            else transformDistance = false;
                        } else {
                            if (_this8.instance.scroll.y < current.top - window.innerHeight && _this8.instance.scroll.y < current.top - window.innerHeight / 2) transformDistance = 0;
                            else if (_this8.instance.scroll.y > current.bottom && _this8.instance.scroll.y > current.bottom + 100) transformDistance = current.bottom - current.top + window.innerHeight;
                            else transformDistance = false;
                        }
                    }
                    if (transformDistance !== false) {
                        if (current.direction === 'horizontal' || _this8.direction === 'horizontal' && current.direction !== 'vertical') _this8.transform(current.el, transformDistance, 0, isForced ? false : current.delay);
                        else _this8.transform(current.el, 0, transformDistance, isForced ? false : current.delay);
                    }
                });
            }
        },
        {
            key: "scrollTo",
            value: function scrollTo(target) {
                var _this9 = this;
                var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
                };
                // Parse options
                var offset = parseInt(options.offset) || 0; // An offset to apply on top of given `target` or `sourceElem`'s target
                var duration = !isNaN(parseInt(options.duration)) ? parseInt(options.duration) : 1000; // Duration of the scroll animation in milliseconds
                var easing = options.easing || [
                    0.25,
                    0,
                    0.35,
                    1
                ]; // An array of 4 floats between 0 and 1 defining the bezier curve for the animation's easing. See http://greweb.me/bezier-easing-editor/example/
                var disableLerp = options.disableLerp ? true : false; // Lerp effect won't be applied if set to true
                var callback = options.callback ? options.callback : false; // function called when scrollTo completes (note that it won't wait for lerp to stabilize)
                easing = src$1.apply(void 0, _toConsumableArray(easing));
                if (typeof target === 'string') {
                    // Selector or boundaries
                    if (target === 'top') target = 0;
                    else if (target === 'bottom') target = this.instance.limit.y;
                    else if (target === 'left') target = 0;
                    else if (target === 'right') target = this.instance.limit.x;
                    else {
                        target = document.querySelector(target); // If the query fails, abort
                        if (!target) return;
                    }
                } else if (typeof target === 'number') // Absolute coordinate
                target = parseInt(target);
                else if (target && target.tagName) ;
                else {
                    console.warn('`target` parameter is not valid');
                    return;
                } // We have a target that is not a coordinate yet, get it
                if (typeof target !== 'number') {
                    // Verify the given target belongs to this scroll scope
                    var targetInScope = getParents(target).includes(this.el);
                    if (!targetInScope) // If the target isn't inside our main element, abort any action
                    return;
                     // Get target offset from top
                    var targetBCR = target.getBoundingClientRect();
                    var offsetTop = targetBCR.top;
                    var offsetLeft = targetBCR.left; // Try and find the target's parent section
                    var targetParents = getParents(target);
                    var parentSection = targetParents.find(function(candidate) {
                        return Object.entries(_this9.sections) // Get sections associative array as a regular array
                        .map(function(_ref7) {
                            var _ref8 = _slicedToArray(_ref7, 2), key = _ref8[0], section = _ref8[1];
                            return section;
                        }) // map to section only (we dont need the key here)
                        .find(function(section) {
                            return section.el == candidate;
                        }); // finally find the section that matches the candidate
                    });
                    var parentSectionOffset = 0;
                    if (parentSection) parentSectionOffset = getTranslate(parentSection)[this.directionAxis]; // We got a parent section, store it's current offset to remove it later
                    else // if no parent section is found we need to use instance scroll directly
                    parentSectionOffset = -this.instance.scroll[this.directionAxis];
                     // Final value of scroll destination : offsetTop + (optional offset given in options) - (parent's section translate)
                    if (this.direction === 'horizontal') offset = offsetLeft + offset - parentSectionOffset;
                    else offset = offsetTop + offset - parentSectionOffset;
                } else offset = target + offset;
                 // Actual scrollto
                // ==========================================================================
                // Setup
                var scrollStart = parseFloat(this.instance.delta[this.directionAxis]);
                var scrollTarget = Math.max(0, Math.min(offset, this.instance.limit[this.directionAxis])); // Make sure our target is in the scroll boundaries
                var scrollDiff = scrollTarget - scrollStart;
                var render = function render(p) {
                    if (disableLerp) {
                        if (_this9.direction === 'horizontal') _this9.setScroll(scrollStart + scrollDiff * p, _this9.instance.delta.y);
                        else _this9.setScroll(_this9.instance.delta.x, scrollStart + scrollDiff * p);
                    } else _this9.instance.delta[_this9.directionAxis] = scrollStart + scrollDiff * p;
                }; // Prepare the scroll
                this.animatingScroll = true; // This boolean allows to prevent `checkScroll()` from calling `stopScrolling` when the animation is slow (i.e. at the beginning of an EaseIn)
                this.stopScrolling(); // Stop any movement, allows to kill any other `scrollTo` still happening
                this.startScrolling(); // Restart the scroll
                // Start the animation loop
                var start = Date.now();
                var loop1 = function loop() {
                    var p = (Date.now() - start) / duration; // Animation progress
                    if (p > 1) {
                        // Animation ends
                        render(1);
                        _this9.animatingScroll = false;
                        if (duration == 0) _this9.update();
                        if (callback) callback();
                    } else {
                        _this9.scrollToRaf = requestAnimationFrame(loop);
                        render(easing(p));
                    }
                };
                loop1();
            }
        },
        {
            key: "update",
            value: function update() {
                this.setScrollLimit();
                this.addSections();
                this.addElements();
                this.detectElements();
                this.updateScroll();
                this.transformElements(true);
                this.reinitScrollBar();
                this.checkScroll(true);
            }
        },
        {
            key: "startScroll",
            value: function startScroll() {
                this.stop = false;
            }
        },
        {
            key: "stopScroll",
            value: function stopScroll() {
                this.stop = true;
            }
        },
        {
            key: "setScroll",
            value: function setScroll(x, y) {
                this.instance = _objectSpread2(_objectSpread2({
                }, this.instance), {
                }, {
                    scroll: {
                        x: x,
                        y: y
                    },
                    delta: {
                        x: x,
                        y: y
                    },
                    speed: 0
                });
            }
        },
        {
            key: "destroy",
            value: function destroy() {
                _get(_getPrototypeOf(_default3.prototype), "destroy", this).call(this);
                this.stopScrolling();
                this.html.classList.remove(this.smoothClass);
                this.vs.destroy();
                this.destroyScrollBar();
                window.removeEventListener('keydown', this.checkKey, false);
            }
        }
    ]);
    return _default3;
}(_default);
var Smooth = /*#__PURE__*/ function() {
    function Smooth1() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        };
        _classCallCheck(this, Smooth1);
        this.options = options; // Override default options with given ones
        Object.assign(this, defaults, options);
        this.smartphone = defaults.smartphone;
        if (options.smartphone) Object.assign(this.smartphone, options.smartphone);
        this.tablet = defaults.tablet;
        if (options.tablet) Object.assign(this.tablet, options.tablet);
        if (!this.smooth && this.direction == 'horizontal') console.warn('🚨 `smooth:false` & `horizontal` direction are not yet compatible');
        if (!this.tablet.smooth && this.tablet.direction == 'horizontal') console.warn('🚨 `smooth:false` & `horizontal` direction are not yet compatible (tablet)');
        if (!this.smartphone.smooth && this.smartphone.direction == 'horizontal') console.warn('🚨 `smooth:false` & `horizontal` direction are not yet compatible (smartphone)');
        this.init();
    }
    _createClass(Smooth1, [
        {
            key: "init",
            value: function init() {
                this.options.isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1 || window.innerWidth < this.tablet.breakpoint;
                this.options.isTablet = this.options.isMobile && window.innerWidth >= this.tablet.breakpoint;
                if (this.smooth && !this.options.isMobile || this.tablet.smooth && this.options.isTablet || this.smartphone.smooth && this.options.isMobile && !this.options.isTablet) this.scroll = new _default$2(this.options);
                else this.scroll = new _default$1(this.options);
                this.scroll.init();
                if (window.location.hash) {
                    // Get the hash without the '#' and find the matching element
                    var id = window.location.hash.slice(1, window.location.hash.length);
                    var target = document.getElementById(id); // If found, scroll to the element
                    if (target) this.scroll.scrollTo(target);
                }
            }
        },
        {
            key: "update",
            value: function update() {
                this.scroll.update();
            }
        },
        {
            key: "start",
            value: function start() {
                this.scroll.startScroll();
            }
        },
        {
            key: "stop",
            value: function stop() {
                this.scroll.stopScroll();
            }
        },
        {
            key: "scrollTo",
            value: function scrollTo(target, options) {
                this.scroll.scrollTo(target, options);
            }
        },
        {
            key: "setScroll",
            value: function setScroll(x, y) {
                this.scroll.setScroll(x, y);
            }
        },
        {
            key: "on",
            value: function on(event, func) {
                this.scroll.setEvents(event, func);
            }
        },
        {
            key: "off",
            value: function off(event, func) {
                this.scroll.unsetEvents(event, func);
            }
        },
        {
            key: "destroy",
            value: function destroy() {
                this.scroll.destroy();
            }
        }
    ]);
    return Smooth1;
}();
var Native = /*#__PURE__*/ function() {
    function Native1() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        };
        _classCallCheck(this, Native1);
        this.options = options; // Override default options with given ones
        Object.assign(this, defaults, options);
        this.smartphone = defaults.smartphone;
        if (options.smartphone) Object.assign(this.smartphone, options.smartphone);
        this.tablet = defaults.tablet;
        if (options.tablet) Object.assign(this.tablet, options.tablet);
        this.init();
    }
    _createClass(Native1, [
        {
            key: "init",
            value: function init() {
                this.scroll = new _default$1(this.options);
                this.scroll.init();
                if (window.location.hash) {
                    // Get the hash without the '#' and find the matching element
                    var id = window.location.hash.slice(1, window.location.hash.length);
                    var target = document.getElementById(id); // If found, scroll to the element
                    if (target) this.scroll.scrollTo(target);
                }
            }
        },
        {
            key: "update",
            value: function update() {
                this.scroll.update();
            }
        },
        {
            key: "start",
            value: function start() {
                this.scroll.startScroll();
            }
        },
        {
            key: "stop",
            value: function stop() {
                this.scroll.stopScroll();
            }
        },
        {
            key: "scrollTo",
            value: function scrollTo(target, options) {
                this.scroll.scrollTo(target, options);
            }
        },
        {
            key: "setScroll",
            value: function setScroll(x, y) {
                this.scroll.setScroll(x, y);
            }
        },
        {
            key: "on",
            value: function on(event, func) {
                this.scroll.setEvents(event, func);
            }
        },
        {
            key: "off",
            value: function off(event, func) {
                this.scroll.unsetEvents(event, func);
            }
        },
        {
            key: "destroy",
            value: function destroy() {
                this.scroll.destroy();
            }
        }
    ]);
    return Native1;
}();
exports.default = Smooth;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["l4AUa","ebWYT"], "ebWYT", "parcelRequire349f")

//# sourceMappingURL=index3.739bf03c.js.map
