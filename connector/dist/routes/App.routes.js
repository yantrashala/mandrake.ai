'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _coverage__file;

function _cover__() {
  if (!_coverage__file) _coverage__file = _coverage__getInitialState();
  return _coverage__file;
}

function _coverage__getInitialState() {
  var path = '/Users/slahir/Projects/bot-connector/src/routes/App.routes.js',
      hash = '9b58c0e7e2774fe32bc67a9f64b1e3bc';
  var global = new Function('return this')();
  var coverage = global['__coverage__'] || (global['__coverage__'] = {});
  if (coverage[path] && coverage[path].hash === hash) return coverage[path];
  var coverageData = global['JSON'].parse('{"path":"/Users/slahir/Projects/bot-connector/src/routes/App.routes.js","s":{},"b":{},"f":{},"statementMap":{},"fnMap":{},"branchMap":{}}');
  coverageData.hash = hash;
  return coverage[path] = coverageData;
}

exports.default = [{
  method: 'GET',
  path: '/',
  validators: [],
  handler: controllers.App.index
}, {
  method: 'POST',
  path: '/',
  validators: [],
  handler: controllers.App.index
}];