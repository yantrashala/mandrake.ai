'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isInvalidUrl = exports.invoke = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

/**
 *  * Invoke an async service method
 *   */
var invoke = exports.invoke = function () {
  var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(serviceName, methodName, args) {
    var _global$services$serv;

    ++_cover__().f['5'];
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            ++_cover__().f['4'];
            ++_cover__().f['3'];
            ++_cover__().s['3'];
            return _context.abrupt('return', (_global$services$serv = global.services[serviceName])[methodName].apply(_global$services$serv, (0, _toConsumableArray3.default)(args)));

          case 4:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function invoke(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

/**
 *  * Invoke a sync service method
 *   */


exports.getWebhookToken = getWebhookToken;
exports.noop = noop;
exports.invokeSync = invokeSync;

var _is_js = require('is_js');

var _is_js2 = _interopRequireDefault(_is_js);

var _blueimpMd = require('blueimp-md5');

var _blueimpMd2 = _interopRequireDefault(_blueimpMd);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _coverage__file;

function _cover__() {
  if (!_coverage__file) _coverage__file = _coverage__getInitialState();
  return _coverage__file;
}

function _coverage__getInitialState() {
  var path = '/Users/slahir/Projects/bot-connector/src/utils/utils.js',
      hash = '82a7a451e02029321a012f63fa8b6d31';
  var global = new Function('return this')();
  var coverage = global['__coverage__'] || (global['__coverage__'] = {});
  if (coverage[path] && coverage[path].hash === hash) return coverage[path];
  var coverageData = global['JSON'].parse('{"path":"/Users/slahir/Projects/bot-connector/src/utils/utils.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0},"b":{"1":[0,0],"2":[0,0]},"f":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0},"statementMap":{"1":{"start":{"line":5,"column":2},"end":{"line":5,"column":62}},"2":{"start":{"line":9,"column":2},"end":{"line":9,"column":26}},"3":{"start":{"line":16,"column":2},"end":{"line":16,"column":58}},"4":{"start":{"line":23,"column":2},"end":{"line":23,"column":58}},"5":{"start":{"line":29,"column":36},"end":{"line":29,"column":86}}},"fnMap":{"1":{"name":null,"line":4,"loc":{"start":{"line":4,"column":7},"end":{"line":6,"column":1}}},"2":{"name":null,"line":8,"loc":{"start":{"line":8,"column":7},"end":{"line":10,"column":1}}},"3":{"name":null,"line":15,"loc":{"start":{"line":15,"column":7},"end":{"line":17,"column":1}}},"4":{"name":null,"line":15,"loc":{"start":{"line":15,"column":7},"end":{"line":17,"column":1}}},"5":{"name":null,"line":15,"loc":{"start":{"line":15,"column":7},"end":{"line":17,"column":1}}},"6":{"name":null,"line":22,"loc":{"start":{"line":22,"column":7},"end":{"line":24,"column":1}}},"7":{"name":null,"line":29,"loc":{"start":{"line":29,"column":28},"end":{"line":29,"column":87}}}},"branchMap":{"1":{"line":29,"type":"binary-expr","locations":[{"start":{"line":29,"column":36},"end":{"line":29,"column":40}},{"start":{"line":29,"column":45},"end":{"line":29,"column":85}}]},"2":{"line":29,"type":"binary-expr","locations":[{"start":{"line":29,"column":45},"end":{"line":29,"column":57}},{"start":{"line":29,"column":61},"end":{"line":29,"column":85}}]}}}');
  coverageData.hash = hash;
  return coverage[path] = coverageData;
}

function getWebhookToken(id, slug) {
  ++_cover__().f['1'];
  ++_cover__().s['1'];

  return (0, _blueimpMd2.default)(id.toString().split('').reverse().join(''), slug);
}

function noop() {
  ++_cover__().f['2'];
  ++_cover__().s['2'];

  return _promise2.default.resolve();
}function invokeSync(serviceName, methodName, args) {
  var _global$services$serv2;

  ++_cover__().f['6'];
  ++_cover__().s['4'];

  return (_global$services$serv2 = global.services[serviceName])[methodName].apply(_global$services$serv2, (0, _toConsumableArray3.default)(args));
}

/**
 *  * Check if an url is valid
 *   */
var isInvalidUrl = exports.isInvalidUrl = function isInvalidUrl(url) {
  return ++_cover__().f['7'], ++_cover__().s['5'], (++_cover__().b['1'][0], !url) || (++_cover__().b['1'][1], (++_cover__().b['2'][0], !_is_js2.default.url(url)) && (++_cover__().b['2'][1], !/localhost/.test(url)));
};