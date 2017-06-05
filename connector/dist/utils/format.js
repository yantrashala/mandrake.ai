'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.messageTypes = undefined;
exports.isValidFormatMessage = isValidFormatMessage;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _coverage__file;

function _cover__() {
  if (!_coverage__file) _coverage__file = _coverage__getInitialState();
  return _coverage__file;
}

function _coverage__getInitialState() {
  var path = '/Users/slahir/Projects/bot-connector/src/utils/format.js',
      hash = '3fcdff4f14c82bfef7b28437fdc73a9e';
  var global = new Function('return this')();
  var coverage = global['__coverage__'] || (global['__coverage__'] = {});
  if (coverage[path] && coverage[path].hash === hash) return coverage[path];
  var coverageData = global['JSON'].parse('{"path":"/Users/slahir/Projects/bot-connector/src/utils/format.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0},"b":{"1":[0,0],"2":[0,0],"3":[0,0],"4":[0,0],"5":[0,0],"6":[0,0],"7":[0,0],"8":[0,0],"9":[0,0],"10":[0,0],"11":[0,0],"12":[0,0],"13":[0,0],"14":[0,0]},"f":{"1":0},"statementMap":{"1":{"start":{"line":6,"column":2},"end":{"line":10,"column":3}},"2":{"start":{"line":9,"column":4},"end":{"line":9,"column":16}},"3":{"start":{"line":12,"column":2},"end":{"line":12,"column":79}},"4":{"start":{"line":12,"column":65},"end":{"line":12,"column":77}},"5":{"start":{"line":13,"column":2},"end":{"line":13,"column":82}},"6":{"start":{"line":13,"column":68},"end":{"line":13,"column":80}},"7":{"start":{"line":14,"column":2},"end":{"line":14,"column":80}},"8":{"start":{"line":14,"column":66},"end":{"line":14,"column":78}},"9":{"start":{"line":15,"column":2},"end":{"line":15,"column":87}},"10":{"start":{"line":15,"column":73},"end":{"line":15,"column":85}},"11":{"start":{"line":16,"column":2},"end":{"line":16,"column":79}},"12":{"start":{"line":16,"column":65},"end":{"line":16,"column":77}},"13":{"start":{"line":18,"column":2},"end":{"line":18,"column":13}}},"fnMap":{"1":{"name":null,"line":5,"loc":{"start":{"line":5,"column":7},"end":{"line":19,"column":1}}}},"branchMap":{"1":{"line":6,"type":"if","locations":[{"start":{"line":8,"column":52},"end":{"line":10,"column":3}},{"start":{"line":8,"column":52},"end":{"line":10,"column":3}}]},"2":{"line":6,"type":"binary-expr","locations":[{"start":{"line":6,"column":6},"end":{"line":7,"column":42}},{"start":{"line":8,"column":9},"end":{"line":8,"column":50}}]},"3":{"line":6,"type":"binary-expr","locations":[{"start":{"line":6,"column":6},"end":{"line":7,"column":22}},{"start":{"line":7,"column":26},"end":{"line":7,"column":42}}]},"4":{"line":6,"type":"binary-expr","locations":[{"start":{"line":6,"column":6},"end":{"line":6,"column":26}},{"start":{"line":7,"column":9},"end":{"line":7,"column":22}}]},"5":{"line":12,"type":"if","locations":[{"start":{"line":12,"column":63},"end":{"line":12,"column":79}},{"start":{"line":12,"column":63},"end":{"line":12,"column":79}}]},"6":{"line":12,"type":"binary-expr","locations":[{"start":{"line":12,"column":6},"end":{"line":12,"column":29}},{"start":{"line":12,"column":33},"end":{"line":12,"column":61}}]},"7":{"line":13,"type":"if","locations":[{"start":{"line":13,"column":66},"end":{"line":13,"column":82}},{"start":{"line":13,"column":66},"end":{"line":13,"column":82}}]},"8":{"line":13,"type":"binary-expr","locations":[{"start":{"line":13,"column":6},"end":{"line":13,"column":32}},{"start":{"line":13,"column":36},"end":{"line":13,"column":64}}]},"9":{"line":14,"type":"if","locations":[{"start":{"line":14,"column":64},"end":{"line":14,"column":80}},{"start":{"line":14,"column":64},"end":{"line":14,"column":80}}]},"10":{"line":14,"type":"binary-expr","locations":[{"start":{"line":14,"column":6},"end":{"line":14,"column":30}},{"start":{"line":14,"column":34},"end":{"line":14,"column":62}}]},"11":{"line":15,"type":"if","locations":[{"start":{"line":15,"column":71},"end":{"line":15,"column":87}},{"start":{"line":15,"column":71},"end":{"line":15,"column":87}}]},"12":{"line":15,"type":"binary-expr","locations":[{"start":{"line":15,"column":6},"end":{"line":15,"column":37}},{"start":{"line":15,"column":41},"end":{"line":15,"column":69}}]},"13":{"line":16,"type":"if","locations":[{"start":{"line":16,"column":63},"end":{"line":16,"column":79}},{"start":{"line":16,"column":63},"end":{"line":16,"column":79}}]},"14":{"line":16,"type":"binary-expr","locations":[{"start":{"line":16,"column":6},"end":{"line":16,"column":29}},{"start":{"line":16,"column":33},"end":{"line":16,"column":61}}]}}}');
  coverageData.hash = hash;
  return coverage[path] = coverageData;
}

var messageTypes = exports.messageTypes = ['text', 'picture', 'video', 'quickReplies', 'card', 'carouselle', 'audio'];

function isValidFormatMessage(message) {
  ++_cover__().f['1'];
  ++_cover__().s['1'];

  if ((++_cover__().b['2'][0], (++_cover__().b['3'][0], (++_cover__().b['4'][0], !_lodash2.default.isObject(message)) || (++_cover__().b['4'][1], !message.type)) || (++_cover__().b['3'][1], !message.content)) || (++_cover__().b['2'][1], messageTypes.indexOf(message.type) === -1)) {
    ++_cover__().b['1'][0];
    ++_cover__().s['2'];

    return false;
  } else {
    ++_cover__().b['1'][1];
  }

  ++_cover__().s['3'];
  if ((++_cover__().b['6'][0], message.type === 'text') && (++_cover__().b['6'][1], !_lodash2.default.isString(message.content))) {
    ++_cover__().b['5'][0];
    ++_cover__().s['4'];
    return false;
  } else {
    ++_cover__().b['5'][1];
  }
  ++_cover__().s['5'];
  if ((++_cover__().b['8'][0], message.type === 'picture') && (++_cover__().b['8'][1], !_lodash2.default.isString(message.content))) {
    ++_cover__().b['7'][0];
    ++_cover__().s['6'];
    return false;
  } else {
    ++_cover__().b['7'][1];
  }
  ++_cover__().s['7'];
  if ((++_cover__().b['10'][0], message.type === 'video') && (++_cover__().b['10'][1], !_lodash2.default.isString(message.content))) {
    ++_cover__().b['9'][0];
    ++_cover__().s['8'];
    return false;
  } else {
    ++_cover__().b['9'][1];
  }
  ++_cover__().s['9'];
  if ((++_cover__().b['12'][0], message.type === 'quickReplies') && (++_cover__().b['12'][1], !_lodash2.default.isObject(message.content))) {
    ++_cover__().b['11'][0];
    ++_cover__().s['10'];
    return false;
  } else {
    ++_cover__().b['11'][1];
  }
  ++_cover__().s['11'];
  if ((++_cover__().b['14'][0], message.type === 'card') && (++_cover__().b['14'][1], !_lodash2.default.isObject(message.content))) {
    ++_cover__().b['13'][0];
    ++_cover__().s['12'];
    return false;
  } else {
    ++_cover__().b['13'][1];
  }

  ++_cover__().s['13'];
  return true;
}