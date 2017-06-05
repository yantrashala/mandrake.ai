'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initServices = initServices;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _coverage__file;

function _cover__() {
  if (!_coverage__file) _coverage__file = _coverage__getInitialState();
  return _coverage__file;
}

function _coverage__getInitialState() {
  var path = '/Users/slahir/Projects/bot-connector/src/utils/init.js',
      hash = 'eb9025ce11f7b968e27ec1e619929721';
  var global = new Function('return this')();
  var coverage = global['__coverage__'] || (global['__coverage__'] = {});
  if (coverage[path] && coverage[path].hash === hash) return coverage[path];
  var coverageData = global['JSON'].parse('{"path":"/Users/slahir/Projects/bot-connector/src/utils/init.js","s":{"1":0,"2":0},"b":{},"f":{"1":0,"2":0},"statementMap":{"1":{"start":{"line":8,"column":2},"end":{"line":10,"column":4}},"2":{"start":{"line":9,"column":4},"end":{"line":9,"column":22}}},"fnMap":{"1":{"name":null,"line":6,"loc":{"start":{"line":6,"column":7},"end":{"line":11,"column":1}}},"2":{"name":null,"line":8,"loc":{"start":{"line":8,"column":21},"end":{"line":10,"column":3}}}},"branchMap":{}}');
  coverageData.hash = hash;
  return coverage[path] = coverageData;
}

/**
 * Starts all services
 */
function initServices() {
  ++_cover__().f['1'];
  ++_cover__().s['1'];


  _lodash2.default.forOwn(services, function (service) {
    ++_cover__().f['2'];
    ++_cover__().s['2'];

    service.onLaunch();
  });
}