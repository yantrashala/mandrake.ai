'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _App = require('./App.controller');

var _App2 = _interopRequireDefault(_App);

var _Connectors = require('./Connectors.controller');

var _Connectors2 = _interopRequireDefault(_Connectors);

var _Channels = require('./Channels.controller');

var _Channels2 = _interopRequireDefault(_Channels);

var _Messages = require('./Messages.controller');

var _Messages2 = _interopRequireDefault(_Messages);

var _Webhooks = require('./Webhooks.controller');

var _Webhooks2 = _interopRequireDefault(_Webhooks);

var _Conversations = require('./Conversations.controller');

var _Conversations2 = _interopRequireDefault(_Conversations);

var _Participants = require('./Participants.controller');

var _Participants2 = _interopRequireDefault(_Participants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _coverage__file;

function _cover__() {
  if (!_coverage__file) _coverage__file = _coverage__getInitialState();
  return _coverage__file;
}

function _coverage__getInitialState() {
  var path = '/Users/slahir/Projects/bot-connector/src/controllers/index.js',
      hash = '5ff7904346c2b0944bf77389d7130dac';
  var global = new Function('return this')();
  var coverage = global['__coverage__'] || (global['__coverage__'] = {});
  if (coverage[path] && coverage[path].hash === hash) return coverage[path];
  var coverageData = global['JSON'].parse('{"path":"/Users/slahir/Projects/bot-connector/src/controllers/index.js","s":{},"b":{},"f":{},"statementMap":{},"fnMap":{},"branchMap":{}}');
  coverageData.hash = hash;
  return coverage[path] = coverageData;
}

exports.default = {
  App: _App2.default,
  Connectors: _Connectors2.default,
  Channels: _Channels2.default,
  Messages: _Messages2.default,
  Webhooks: _Webhooks2.default,
  Conversations: _Conversations2.default,
  Participants: _Participants2.default
};