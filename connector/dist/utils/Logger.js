'use strict';

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _coverage__file;

function _cover__() {
  if (!_coverage__file) _coverage__file = _coverage__getInitialState();
  return _coverage__file;
}

function _coverage__getInitialState() {
  var path = '/Users/slahir/Projects/bot-connector/src/utils/Logger.js',
      hash = '9a79536017c370c73393cd3259fef6c0';
  var global = new Function('return this')();
  var coverage = global['__coverage__'] || (global['__coverage__'] = {});
  if (coverage[path] && coverage[path].hash === hash) return coverage[path];
  var coverageData = global['JSON'].parse('{"path":"/Users/slahir/Projects/bot-connector/src/utils/Logger.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0},"b":{"1":[0,0],"2":[0,0],"3":[0,0]},"f":{"1":0,"2":0,"3":0,"4":0,"5":0},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":10,"column":1}},"2":{"start":{"line":15,"column":4},"end":{"line":15,"column":51}},"3":{"start":{"line":15,"column":43},"end":{"line":15,"column":49}},"4":{"start":{"line":17,"column":4},"end":{"line":17,"column":60}},"5":{"start":{"line":17,"column":28},"end":{"line":17,"column":59}},"6":{"start":{"line":21,"column":4},"end":{"line":21,"column":62}},"7":{"start":{"line":21,"column":28},"end":{"line":21,"column":61}},"8":{"start":{"line":25,"column":4},"end":{"line":25,"column":63}},"9":{"start":{"line":25,"column":28},"end":{"line":25,"column":62}},"10":{"start":{"line":29,"column":4},"end":{"line":29,"column":61}},"11":{"start":{"line":29,"column":28},"end":{"line":29,"column":60}},"12":{"start":{"line":33,"column":4},"end":{"line":33,"column":49}},"13":{"start":{"line":33,"column":28},"end":{"line":33,"column":48}},"14":{"start":{"line":37,"column":4},"end":{"line":43,"column":5}},"15":{"start":{"line":38,"column":6},"end":{"line":42,"column":7}},"16":{"start":{"line":39,"column":8},"end":{"line":39,"column":28}},"17":{"start":{"line":41,"column":8},"end":{"line":41,"column":62}},"18":{"start":{"line":47,"column":0},"end":{"line":47,"column":23}}},"fnMap":{"1":{"name":null,"line":17,"loc":{"start":{"line":17,"column":17},"end":{"line":17,"column":59}}},"2":{"name":null,"line":21,"loc":{"start":{"line":21,"column":17},"end":{"line":21,"column":61}}},"3":{"name":null,"line":25,"loc":{"start":{"line":25,"column":17},"end":{"line":25,"column":62}}},"4":{"name":null,"line":29,"loc":{"start":{"line":29,"column":17},"end":{"line":29,"column":60}}},"5":{"name":null,"line":33,"loc":{"start":{"line":33,"column":17},"end":{"line":33,"column":48}}}},"branchMap":{"1":{"line":15,"type":"if","locations":[{"start":{"line":15,"column":41},"end":{"line":15,"column":51}},{"start":{"line":15,"column":41},"end":{"line":15,"column":51}}]},"2":{"line":37,"type":"if","locations":[{"start":{"line":37,"column":41},"end":{"line":43,"column":5}},{"start":{"line":37,"column":41},"end":{"line":43,"column":5}}]},"3":{"line":38,"type":"if","locations":[{"start":{"line":38,"column":18},"end":{"line":40,"column":7}},{"start":{"line":40,"column":13},"end":{"line":42,"column":7}}]}}}');
  coverageData.hash = hash;
  return coverage[path] = coverageData;
}

++_cover__().s['1'];
var COLOR = {
  BLACK: '30',
  RED: '31',
  GREEN: '32',
  YELLOW: '33',
  BLUE: '34',
  PINK: '35',
  CYAN: '36',
  GREY: '37'
};

/* eslint-disable no-console */

var Logger = function () {
  function Logger() {
    (0, _classCallCheck3.default)(this, Logger);
  }

  (0, _createClass3.default)(Logger, null, [{
    key: 'error',
    value: function error() {
      ++_cover__().s['2'];

      if (process.env.NODE_ENV === 'test') {
        ++_cover__().b['1'][0];
        ++_cover__().s['3'];
        return;
      } else {
        ++_cover__().b['1'][1];
      }

      for (var _len = arguments.length, messages = Array(_len), _key = 0; _key < _len; _key++) {
        messages[_key] = arguments[_key];
      }

      ++_cover__().s['4'];
      messages.map(function (message) {
        return ++_cover__().f['1'], ++_cover__().s['5'], Logger.show(message, COLOR.RED);
      });
    }
  }, {
    key: 'success',
    value: function success() {
      for (var _len2 = arguments.length, messages = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        messages[_key2] = arguments[_key2];
      }

      ++_cover__().s['6'];

      messages.map(function (message) {
        return ++_cover__().f['2'], ++_cover__().s['7'], Logger.show(message, COLOR.GREEN);
      });
    }
  }, {
    key: 'warning',
    value: function warning() {
      for (var _len3 = arguments.length, messages = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        messages[_key3] = arguments[_key3];
      }

      ++_cover__().s['8'];

      messages.map(function (message) {
        return ++_cover__().f['3'], ++_cover__().s['9'], Logger.show(message, COLOR.YELLOW);
      });
    }
  }, {
    key: 'info',
    value: function info() {
      for (var _len4 = arguments.length, messages = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        messages[_key4] = arguments[_key4];
      }

      ++_cover__().s['10'];

      messages.map(function (message) {
        return ++_cover__().f['4'], ++_cover__().s['11'], Logger.show(message, COLOR.CYAN);
      });
    }
  }, {
    key: 'log',
    value: function log() {
      for (var _len5 = arguments.length, messages = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        messages[_key5] = arguments[_key5];
      }

      ++_cover__().s['12'];

      messages.map(function (message) {
        return ++_cover__().f['5'], ++_cover__().s['13'], Logger.show(message);
      });
    }
  }, {
    key: 'show',
    value: function show(message, color) {
      ++_cover__().s['14'];

      if (process.env.NODE_ENV !== 'test') {
        ++_cover__().b['2'][0];
        ++_cover__().s['15'];

        if (!color) {
          ++_cover__().b['3'][0];
          ++_cover__().s['16'];

          console.log(message);
        } else {
          ++_cover__().b['3'][1];
          ++_cover__().s['17'];

          console.log('\x1B[' + color + 'm', '' + message, '\x1b[0m');
        }
      } else {
        ++_cover__().b['2'][1];
      }
    }
  }]);
  return Logger;
}();

++_cover__().s['18'];


module.exports = Logger;
/* eslint-esable no-console */