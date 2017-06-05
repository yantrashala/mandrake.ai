'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Kik = require('./Kik.service');

var _Kik2 = _interopRequireDefault(_Kik);

var _Slack = require('./Slack.service');

var _Slack2 = _interopRequireDefault(_Slack);

var _SlackApp = require('./SlackApp.service');

var _SlackApp2 = _interopRequireDefault(_SlackApp);

var _Messenger = require('./Messenger.service');

var _Messenger2 = _interopRequireDefault(_Messenger);

var _Callr = require('./Callr.service');

var _Callr2 = _interopRequireDefault(_Callr);

var _Twilio = require('./Twilio.service');

var _Twilio2 = _interopRequireDefault(_Twilio);

var _Telegram = require('./Telegram.service');

var _Telegram2 = _interopRequireDefault(_Telegram);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _coverage__file;

function _cover__() {
  if (!_coverage__file) _coverage__file = _coverage__getInitialState();
  return _coverage__file;
}

function _coverage__getInitialState() {
  var path = '/Users/slahir/Projects/bot-connector/src/services/index.js',
      hash = 'e828051d37855c814bad7e03f181a6d5';
  var global = new Function('return this')();
  var coverage = global['__coverage__'] || (global['__coverage__'] = {});
  if (coverage[path] && coverage[path].hash === hash) return coverage[path];
  var coverageData = global['JSON'].parse('{"path":"/Users/slahir/Projects/bot-connector/src/services/index.js","s":{},"b":{},"f":{},"statementMap":{},"fnMap":{},"branchMap":{}}');
  coverageData.hash = hash;
  return coverage[path] = coverageData;
}

exports.default = {
  Kik: _Kik2.default,
  Slack: _Slack2.default,
  SlackApp: _SlackApp2.default,
  Messenger: _Messenger2.default,
  Callr: _Callr2.default,
  Twilio: _Twilio2.default,
  Telegram: _Telegram2.default
};