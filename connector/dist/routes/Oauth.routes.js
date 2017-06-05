'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _SlackApp = require('../services/SlackApp.service');

var _SlackApp2 = _interopRequireDefault(_SlackApp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _coverage__file;

function _cover__() {
  if (!_coverage__file) _coverage__file = _coverage__getInitialState();
  return _coverage__file;
}

function _coverage__getInitialState() {
  var path = '/Users/slahir/Projects/bot-connector/src/routes/Oauth.routes.js',
      hash = '729eb88f476f53d7bd10d5566931017b';
  var global = new Function('return this')();
  var coverage = global['__coverage__'] || (global['__coverage__'] = {});
  if (coverage[path] && coverage[path].hash === hash) return coverage[path];
  var coverageData = global['JSON'].parse('{"path":"/Users/slahir/Projects/bot-connector/src/routes/Oauth.routes.js","s":{},"b":{},"f":{},"statementMap":{},"fnMap":{},"branchMap":{}}');
  coverageData.hash = hash;
  return coverage[path] = coverageData;
}

exports.default = [{
  method: 'GET',
  path: '/oauth/slack/:channel_id',
  validators: [],
  handler: _SlackApp2.default.receiveOauth
}];