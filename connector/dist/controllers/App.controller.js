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
  var path = '/Users/slahir/Projects/bot-connector/src/controllers/App.controller.js',
      hash = '01aea9cf1f730c5b6f35f02c1a8aa705';
  var global = new Function('return this')();
  var coverage = global['__coverage__'] || (global['__coverage__'] = {});
  if (coverage[path] && coverage[path].hash === hash) return coverage[path];
  var coverageData = global['JSON'].parse('{"path":"/Users/slahir/Projects/bot-connector/src/controllers/App.controller.js","s":{"1":0,"2":0},"b":{},"f":{},"statementMap":{"1":{"start":{"line":4,"column":4},"end":{"line":4,"column":31}},"2":{"start":{"line":9,"column":0},"end":{"line":9,"column":30}}},"fnMap":{},"branchMap":{}}');
  coverageData.hash = hash;
  return coverage[path] = coverageData;
}

var AppController = function () {
  function AppController() {
    (0, _classCallCheck3.default)(this, AppController);
  }

  (0, _createClass3.default)(AppController, null, [{
    key: 'index',
    value: function index(req, res) {
      ++_cover__().s['1'];

      res.status(200).send('Hi!');
    }
  }]);
  return AppController;
}();

++_cover__().s['2'];


module.exports = AppController;