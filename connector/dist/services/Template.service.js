'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _utils = require('../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _coverage__file;

function _cover__() {
  if (!_coverage__file) _coverage__file = _coverage__getInitialState();
  return _coverage__file;
}

function _coverage__getInitialState() {
  var path = '/Users/slahir/Projects/bot-connector/src/services/Template.service.js',
      hash = '86a95eef0cc6e7a349b19275ebd6fc3c';
  var global = new Function('return this')();
  var coverage = global['__coverage__'] || (global['__coverage__'] = {});
  if (coverage[path] && coverage[path].hash === hash) return coverage[path];
  var coverageData = global['JSON'].parse('{"path":"/Users/slahir/Projects/bot-connector/src/services/Template.service.js","s":{},"b":{},"f":{},"statementMap":{},"fnMap":{},"branchMap":{}}');
  coverageData.hash = hash;
  return coverage[path] = coverageData;
}

var ServiceTemplate = function ServiceTemplate() {
  (0, _classCallCheck3.default)(this, ServiceTemplate);
};

ServiceTemplate.onLaunch = _utils.noop;
ServiceTemplate.checkParamsValidity = _utils.noop;
ServiceTemplate.onChannelCreate = _utils.noop;
ServiceTemplate.onChannelUpdate = _utils.noop;
ServiceTemplate.onChannelDelete = _utils.noop;
ServiceTemplate.checkSecurity = _utils.noop;
ServiceTemplate.beforePipeline = _utils.noop;
ServiceTemplate.extractOptions = _utils.noop;
ServiceTemplate.parseChannelMessage = _utils.noop;
ServiceTemplate.formatMessage = _utils.noop;
ServiceTemplate.sendMessage = _utils.noop;
exports.default = ServiceTemplate;