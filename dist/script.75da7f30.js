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
})({"script.js":[function(require,module,exports) {
var monChart = document.getElementById("square__mon");
var tueChart = document.getElementById("square__tue");
var wedChart = document.getElementById("square__wed");
var thuChart = document.getElementById("square__thu");
var friChart = document.getElementById("square__fri");
var satChart = document.getElementById("square__sat");
var sunChart = document.getElementById("square__sun");
var spendingMon = document.getElementById("square__price__1");
var spendingTue = document.getElementById("square__price__2");
var spendingWed = document.getElementById("square__price__3");
var spendingThu = document.getElementById("square__price__4");
var spendingFri = document.getElementById("square__price__5");
var spendingSat = document.getElementById("square__price__6");
var spendingSun = document.getElementById("square__price__7");
var days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

var checktoday = function checktoday() {
  var d = new Date();
  var day = days[d.getDay()];
  console.log(day);

  if (day === "sun") {
    sunChart.style.backgroundColor = "hsl(186, 34%, 60%)";
  } else if (day === "mon") {
    monChart.style.backgroundColor = "hsl(186, 34%, 60%)";
  } else if (day === "tue") {
    tueChart.style.backgroundColor = "hsl(186, 34%, 60%)";
  } else if (day === "wed") {
    wedChart.style.backgroundColor = "hsl(186, 34%, 60%)";
  } else if (day === "thu") {
    thuChart.style.backgroundColor = "hsl(186, 34%, 60%)";
  } else if (day === "fri") {
    friChart.style.backgroundColor = "hsl(186, 34%, 60%)";
  } else {
    satChart.style.backgroundColor = "hsl(186, 34%, 60%)";
  }
};

checktoday();
setInterval(function () {
  checktoday();
}, 600000); // Repeats every 10 mins

/* For devices with mouse or a pointing device */

monChart.addEventListener("mouseover", function () {
  spendingMon.style.display = "block";
  spendingMon.innerText = "$17.45";
});
monChart.addEventListener("mouseout", function () {
  spendingMon.style.display = "none";
});
tueChart.addEventListener("mouseover", function () {
  spendingTue.style.display = "block";
  spendingTue.innerText = "$34.91";
});
tueChart.addEventListener("mouseout", function () {
  spendingTue.style.display = "none";
});
wedChart.addEventListener("mouseover", function () {
  spendingWed.style.display = "block";
  spendingWed.innerText = "$52.36";
});
wedChart.addEventListener("mouseout", function () {
  spendingWed.style.display = "none";
});
thuChart.addEventListener("mouseover", function () {
  spendingThu.style.display = "block";
  spendingThu.innerText = "$31.07";
});
thuChart.addEventListener("mouseout", function () {
  spendingThu.style.display = "none";
});
friChart.addEventListener("mouseover", function () {
  spendingFri.style.display = "block";
  spendingFri.innerText = "$23.39";
});
friChart.addEventListener("mouseout", function () {
  spendingFri.style.display = "none";
});
satChart.addEventListener("mouseover", function () {
  spendingSat.style.display = "block";
  spendingSat.innerText = "$43.28";
});
satChart.addEventListener("mouseout", function () {
  spendingSat.style.display = "none";
});
sunChart.addEventListener("mouseover", function () {
  spendingSun.style.display = "block";
  spendingSun.innerText = "$25.48";
});
sunChart.addEventListener("mouseout", function () {
  spendingSun.style.display = "none";
});
/* On touch screens */

monChart.addEventListener("click", function () {
  spendingMon.style.display = "block";
  spendingMon.innerText = "17.45";
  spendingTue.style.display = "none";
  spendingWed.style.display = "none";
  spendingThu.style.display = "none";
  spendingFri.style.display = "none";
  spendingSat.style.display = "none";
  spendingSun.style.display = "none";
});
tueChart.addEventListener("click", function () {
  spendingMon.style.display = "none";
  spendingTue.style.display = "block";
  spendingWed.style.display = "none";
  spendingThu.style.display = "none";
  spendingFri.style.display = "none";
  spendingSat.style.display = "none";
  spendingSun.style.display = "none";
});
wedChart.addEventListener("click", function () {
  spendingMon.style.display = "none";
  spendingTue.style.display = "none";
  spendingWed.style.display = "block";
  spendingThu.style.display = "none";
  spendingFri.style.display = "none";
  spendingSat.style.display = "none";
  spendingSun.style.display = "none";
});
thuChart.addEventListener("click", function () {
  spendingMon.style.display = "none";
  spendingTue.style.display = "none";
  spendingWed.style.display = "none";
  spendingThu.style.display = "block";
  spendingFri.style.display = "none";
  spendingSat.style.display = "none";
  spendingSun.style.display = "none";
});
friChart.addEventListener("click", function () {
  spendingMon.style.display = "none";
  spendingTue.style.display = "none";
  spendingWed.style.display = "none";
  spendingThu.style.display = "none";
  spendingFri.style.display = "block";
  spendingSat.style.display = "none";
  spendingSun.style.display = "none";
});
satChart.addEventListener("click", function () {
  spendingMon.style.display = "none";
  spendingTue.style.display = "none";
  spendingWed.style.display = "none";
  spendingThu.style.display = "none";
  spendingFri.style.display = "none";
  spendingSat.style.display = "block";
  spendingSun.style.display = "none";
});
sunChart.addEventListener("click", function () {
  spendingMon.style.display = "none";
  spendingTue.style.display = "none";
  spendingWed.style.display = "none";
  spendingThu.style.display = "none";
  spendingFri.style.display = "none";
  spendingSat.style.display = "none";
  spendingSun.style.display = "block";
});
/* Fetching data from json file*/

var totalSum = 0;

function processdata(data) {
  var sum = 0;
  data.forEach(function (obj) {
    sum += obj.amount;
    console.log(sum);
  });
  return sum;
}

function setHeight(data, sum) {
  data.forEach(function (obj) {
    if (obj.day === "mon") {
      var newH = obj.amount / sum * 100;
      monChart.style.height = "".concat(newH, "%");
    } else if (obj.day === "tue") {
      var _newH = obj.amount / sum * 100;

      tueChart.style.height = "".concat(_newH, "%");
    } else if (obj.day === "wed") {
      var _newH2 = obj.amount / sum * 100;

      wedChart.style.height = "".concat(_newH2, "%");
    } else if (obj.day === "thu") {
      var _newH3 = obj.amount / sum * 100;

      thuChart.style.height = "".concat(_newH3, "%");
    } else if (obj.day === "fri") {
      var _newH4 = obj.amount / sum * 100;

      friChart.style.height = "".concat(_newH4, "%");
    } else if (obj.day === "sat") {
      var _newH5 = obj.amount / sum * 100;

      satChart.style.height = "".concat(_newH5, "%");
    } else if (obj.day === "sun") {
      var _newH6 = obj.amount / sum * 100;

      sunChart.style.height = "".concat(_newH6, "%");
    }
  });
}

fetch("../data.json").then(function (response) {
  return response.json();
}).then(function (obj) {
  console.log(obj);
  totalSum = processdata(obj);
  console.log(totalSum);
  setHeight(obj, totalSum);
}).catch(function (error) {
  console.error("Something went wrong with fetching data");
  console.error(error);
});
},{}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "55161" + '/');

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
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","script.js"], null)
//# sourceMappingURL=/script.75da7f30.js.map