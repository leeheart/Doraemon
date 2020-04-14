// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
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
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"doraemon-css.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var string = "\n/* \n * \u672C\u9879\u76EE\u4F7F\u7528 CSS \u6765\u753B\u4E00\u4E2A\u84DD\u80D6\u5B50\uFF08\u54C6\u5566A\u68A6\uFF09\n * \u4E0B\u9762\u5F00\u59CB\u5F00\u59CB\u7ED8\u753B\n * \n * \u9996\u5148\u51C6\u5907\u4E00\u5F20\u84DD\u76AE\u80A4\n * \n*/\n.doraemon{\n  background: #93B8CA;\n  min-height: 70vh;\n  position: relative;\n}\n/* \n *\n * \u7136\u540E\u753B\u51FA\u84DD\u80D6\u5B50\u7684\u5706\u8111\u888B\n * \n*/\n.doraemon .head{\n  border: 2px solid black;\n  background: #1E90FF;\n  width: 420px;\n  height: 400px;\n  position: absolute;\n  left: 50%;\n  top: 50px;\n  margin-left: -210px;\n  border-radius: 200px / 190px;\n}\n\n/*\n *\n * \u767D\u8138\u86CB\n *\n*/\n\n.doraemon .head .face{\n  border: 2px solid #000;\n  background: #fff;\n  width: 360px;\n  height: 300px;\n  position: absolute;\n  bottom: 5px;\n  left: 50%;\n  margin-left: -180px;\n  border-radius: 170px / 140px;\n}\n/* \n *\n * \u63A5\u4E0B\u6765\u662F\u5B83\u7684\u4E24\u53EA\u773C\u775B\n * \n*/\n.doraemon .head .face .eye{\n  border: 2px solid #000;\n  background: #fff;\n  width: 90px;\n  height: 110px;\n  position: absolute;\n  top: -45px;\n  left: 50%;\n  margin-left: -45px;\n  border-radius: 40px / 50px;\n}\n.doraemon .head .face .eye::before{\n  content: '';\n  display: block;\n  background: #000;\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  position: absolute;\n  top: 55%;\n}\n.doraemon .head .face .eye.left::before{\n  right: 10px;\n}\n.doraemon .head .face .eye.right::before{\n  left: 10px;\n}\n.doraemon .head .face .eye.left{\n  transform: translateX(-45px);\n}\n.doraemon .head .face .eye.right{\n  transform: translateX(45px);\n}\n\n/*\n *\n * \u6309\u4E0A\u4E00\u4E2A\u7EA2\u9F3B\u5B50\n *\n*/\n\n.doraemon .head .face .nose{\n  border: 2px solid #000;\n  background: #FF0000;\n  width: 50px;\n  height: 50px;\n  position: absolute;\n  left: 50%;\n  top: 48px;\n  margin-left: -25px;\n  border-radius: 50%;\n}\n\n/*\n *\n * \u7EA2\u9F3B\u5B50\u81EA\u5E26\u53CD\u5149\u6548\u679C\n * \n*/\n\n.doraemon .head .face .nose::before{\n  content: '';\n  display: block;\n  background: #fff;\n  box-shadow: 0 0 2px 2px rgba(255,255,255,0.4);\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  position: absolute;\n  top: 10px;\n  right: 5px;\n}\n.doraemon .head .face .noseBottom{\n  border-left: 2px solid #000;\n  width: 2px;\n  height: 130px;\n  position: absolute;\n  left: 50%;\n  top: 96px;\n}\n\n/*\n * \u63A5\u4E0B\u6765\u662F\u5B83\u7684\u5634\u5DF4\n *\n*/\n\n.doraemon .head .face .mouth{\n  border: 2px solid #000;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  width: 260px;\n  height: 200px;\n  position: absolute;\n  left: 50%;\n  top: 27px;\n  margin-left: -130px;\n  border-radius: 125px / 100px;\n}\n\n/*\n * \u8138\u7684\u4E24\u8FB9\u5404\u63D23\u6839\u80E1\u5B50\n *\n*/\n\n.doraemon .head .face .beard{\n  width: 180px;\n  height: 180px;\n  position: absolute;\n  left: 50%;\n  top: 40px;\n  margin-left: -90px;\n}\n.doraemon .head .face .beard.left{\n  transform: translateX(-130px);\n}\n.doraemon .head .face .beard.right{\n  transform: translateX(130px) rotate(180deg);\n}\n.doraemon .head .face .beard .beardLine{\n  border-top: 2px solid black;\n  width: 100px;\n  height: 3px;\n  position: absolute;\n  top: 50%;\n  right: 0;\n}\n.doraemon .head .face .beard .beardLine:nth-child(1){\n  transform: rotate(20deg);\n  top: 30%;\n}\n.doraemon .head .face .beard .beardLine:nth-child(3){\n  transform: rotate(-20deg);\n  top: 70%;\n}\n\n/*\n * \u6234\u4E0A\u4E00\u4E2A\u9879\u5708\n *\n*/\n\n.doraemon .collar{\n  border: 2px solid #000;\n  background: #FF0000;\n  width: 320px;\n  height: 50px;\n  position: absolute;\n  top: 400px;\n  left: 50%;\n  margin-left: -160px;\n  border-radius: 25px;\n}\n\n/*\n * \u518D\u6302\u4E2A\u94C3\u94DB\n *\n*/\n\n.doraemon .bell{\n  border: 2px solid #000;\n  background: #FFFF00;\n  width: 60px;\n  height: 60px;\n  position: absolute;\n  left: 50%;\n  top: 420px;\n  margin-left: -30px;\n  border-radius: 50%;\n  overflow: hidden;\n}\n.doraemon .bell .bell-1{\n  border: 2px solid #000;\n  height: 8px;\n  width: 60px;\n  margin-top: 14px;\n  margin-left: -2px;\n}\n.doraemon .bell .bell-2{\n  background: #000;\n  width: 16px;\n  height: 10px;\n  border-radius: 8px/5px;\n  position: absolute;\n  top: 28px;\n  left: 50%;\n  margin-left: -8px;\n}\n.doraemon .bell .bell-3{\n  border-left: 2px solid #000;\n  width: 2px;\n  height: 18px;\n  position: absolute;\n  left: 50%;\n  top: 38px;\n  margin-left: -1px;\n}\n\n/*\n *\n * \u4F60\u597D\u5927\u96C4\uFF0C\u6211\u53EB\u54C6\u5566A\u68A6\uFF0C\u8BF7\u591A\u5173\u7167\uFF01\n *\n*/\n\n";
var _default = string;
exports.default = _default;
},{}],"main.js":[function(require,module,exports) {
"use strict";

var _doraemonCss = _interopRequireDefault(require("./doraemon-css.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var player = {
  n: 1,
  time: 30,
  id: undefined,
  ui: {
    text: document.querySelector('#text'),
    doraemonStyle: document.querySelector('#doraemonStyle')
  },
  init: function init() {
    player.play();
    player.bindEvents();
  },
  events: {
    '#btnPlay': 'play',
    '#btnPause': 'pause',
    '#btnSlow': 'slow',
    '#btnNormal': 'normal',
    '#btnFast': 'fast',
    '#btnReset': 'reset'
  },
  bindEvents: function bindEvents() {
    for (var key in player.events) {
      if (player.events.hasOwnProperty(key)) {
        var value = player.events[key];
        document.querySelector(key).onclick = player[value];
      }
    }
  },
  run: function run() {
    player.ui.text.innerText = _doraemonCss.default.substring(0, player.n);
    player.ui.doraemonStyle.innerHTML = _doraemonCss.default.substring(0, player.n);
    text.scrollTop = text.scrollHeight;

    if (player.n >= _doraemonCss.default.length) {
      clearInterval(player.id);
    }

    player.n += 1;
  },
  play: function play() {
    window.clearInterval(player.id);
    player.id = setInterval(player.run, player.time);
  },
  pause: function pause() {
    clearInterval(player.id);
  },
  slow: function slow() {
    player.pause();
    player.time = 100;
    player.play();
  },
  normal: function normal() {
    player.pause();
    player.time = 30;
    player.play();
  },
  fast: function fast() {
    player.pause();
    player.time = 0;
    player.play();
  },
  reset: function reset() {
    player.pause();
    player.n = 1;
    player.ui.text.innerText = '';
    player.ui.doraemonStyle.innerHTML = '';
  }
};
player.init();
},{"./doraemon-css.js":"doraemon-css.js"}],"../../../AppData/Local/Yarn/Data/global/node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "14812" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../AppData/Local/Yarn/Data/global/node_modules/parcel/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.1f19ae8e.js.map