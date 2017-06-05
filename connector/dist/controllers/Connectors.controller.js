'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _filterObject = require('filter-object');

var _filterObject2 = _interopRequireDefault(_filterObject);

var _errors = require('../utils/errors');

var _responses = require('../utils/responses');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _coverage__file;

function _cover__() {
  if (!_coverage__file) _coverage__file = _coverage__getInitialState();
  return _coverage__file;
}

function _coverage__getInitialState() {
  var path = '/Users/slahir/Projects/bot-connector/src/controllers/Connectors.controller.js',
      hash = '1976b69ee70553038473cb6ab07ed42b';
  var global = new Function('return this')();
  var coverage = global['__coverage__'] || (global['__coverage__'] = {});
  if (coverage[path] && coverage[path].hash === hash) return coverage[path];
  var coverageData = global['JSON'].parse('{"path":"/Users/slahir/Projects/bot-connector/src/controllers/Connectors.controller.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0},"b":{"1":[0,0],"2":[0,0],"3":[0,0]},"f":{"1":0,"2":0,"3":0,"4":0},"statementMap":{"1":{"start":{"line":13,"column":0},"end":{"line":13,"column":28}},"2":{"start":{"line":14,"column":0},"end":{"line":14,"column":31}},"3":{"start":{"line":22,"column":4},"end":{"line":22,"column":50}},"4":{"start":{"line":24,"column":4},"end":{"line":24,"column":64}},"5":{"start":{"line":26,"column":4},"end":{"line":29,"column":6}},"6":{"start":{"line":36,"column":4},"end":{"line":36,"column":39}},"7":{"start":{"line":38,"column":4},"end":{"line":38,"column":67}},"8":{"start":{"line":40,"column":4},"end":{"line":40,"column":60}},"9":{"start":{"line":40,"column":22},"end":{"line":40,"column":58}},"10":{"start":{"line":42,"column":4},"end":{"line":45,"column":6}},"11":{"start":{"line":52,"column":4},"end":{"line":52,"column":39}},"12":{"start":{"line":54,"column":4},"end":{"line":56,"column":26}},"13":{"start":{"line":58,"column":4},"end":{"line":58,"column":60}},"14":{"start":{"line":58,"column":22},"end":{"line":58,"column":58}},"15":{"start":{"line":60,"column":4},"end":{"line":63,"column":6}},"16":{"start":{"line":70,"column":4},"end":{"line":70,"column":39}},"17":{"start":{"line":72,"column":4},"end":{"line":73,"column":45}},"18":{"start":{"line":75,"column":4},"end":{"line":75,"column":60}},"19":{"start":{"line":75,"column":22},"end":{"line":75,"column":58}},"20":{"start":{"line":77,"column":4},"end":{"line":81,"column":6}},"21":{"start":{"line":83,"column":4},"end":{"line":83,"column":63}}},"fnMap":{"1":{"name":null,"line":78,"loc":{"start":{"line":78,"column":37},"end":{"line":78,"column":52}}},"2":{"name":null,"line":79,"loc":{"start":{"line":79,"column":32},"end":{"line":79,"column":47}}},"3":{"name":null,"line":78,"loc":{"start":{"line":78,"column":37},"end":{"line":78,"column":52}}},"4":{"name":null,"line":79,"loc":{"start":{"line":79,"column":32},"end":{"line":79,"column":47}}}},"branchMap":{"1":{"line":40,"type":"if","locations":[{"start":{"line":40,"column":20},"end":{"line":40,"column":60}},{"start":{"line":40,"column":20},"end":{"line":40,"column":60}}]},"2":{"line":58,"type":"if","locations":[{"start":{"line":58,"column":20},"end":{"line":58,"column":60}},{"start":{"line":58,"column":20},"end":{"line":58,"column":60}}]},"3":{"line":75,"type":"if","locations":[{"start":{"line":75,"column":20},"end":{"line":75,"column":60}},{"start":{"line":75,"column":20},"end":{"line":75,"column":60}}]}}}');
  coverageData.hash = hash;
  return coverage[path] = coverageData;
}

++_cover__().s['1'];


var permittedAdd = '{url}';
++_cover__().s['2'];
var permittedUpdate = '{url}';

var ConnectorsController = function () {
  function ConnectorsController() {
    (0, _classCallCheck3.default)(this, ConnectorsController);
  }

  (0, _createClass3.default)(ConnectorsController, null, [{
    key: 'createConnector',


    /**
     * Create a new connector
     */
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(req, res) {
        var payload, connector;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                ++_cover__().s['3'];
                payload = (0, _filterObject2.default)(req.body, permittedAdd);
                ++_cover__().s['4'];
                _context.next = 5;
                return new models.Connector(payload).save();

              case 5:
                connector = _context.sent;
                ++_cover__().s['5'];
                return _context.abrupt('return', (0, _responses.renderCreated)(res, {
                  results: connector.serialize,
                  message: 'Connector successfully created'
                }));

              case 8:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function createConnector(_x, _x2) {
        return _ref.apply(this, arguments);
      }

      return createConnector;
    }()

    /**
     * Show a connector
     */

  }, {
    key: 'getConnectorByBotId',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(req, res) {
        var connector_id, connector;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                ++_cover__().s['6'];
                connector_id = req.params.connector_id;
                ++_cover__().s['7'];
                _context2.next = 5;
                return models.Connector.findById(connector_id);

              case 5:
                connector = _context2.sent;
                ++_cover__().s['8'];

                if (connector) {
                  _context2.next = 13;
                  break;
                }

                ++_cover__().b['1'][0];
                ++_cover__().s['9'];
                throw new _errors.NotFoundError('Connector');

              case 13:
                ++_cover__().b['1'][1];

              case 14:
                ++_cover__().s['10'];
                return _context2.abrupt('return', (0, _responses.renderOk)(res, {
                  results: connector.serialize,
                  message: 'Connector successfully found'
                }));

              case 16:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getConnectorByBotId(_x3, _x4) {
        return _ref2.apply(this, arguments);
      }

      return getConnectorByBotId;
    }()

    /**
     * Update a connector
     */

  }, {
    key: 'updateConnectorByBotId',
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3(req, res) {
        var connector_id, connector;
        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                ++_cover__().s['11'];
                connector_id = req.params.connector_id;
                ++_cover__().s['12'];
                _context3.next = 5;
                return models.Connector.findOneAndUpdate({ _id: connector_id }, { $set: (0, _filterObject2.default)(req.body, permittedUpdate) }, { new: true }).populate('channels');

              case 5:
                connector = _context3.sent;
                ++_cover__().s['13'];

                if (connector) {
                  _context3.next = 13;
                  break;
                }

                ++_cover__().b['2'][0];
                ++_cover__().s['14'];
                throw new _errors.NotFoundError('Connector');

              case 13:
                ++_cover__().b['2'][1];

              case 14:
                ++_cover__().s['15'];
                return _context3.abrupt('return', (0, _responses.renderOk)(res, {
                  results: connector.serialize,
                  message: 'Connector successfully updated'
                }));

              case 16:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function updateConnectorByBotId(_x5, _x6) {
        return _ref3.apply(this, arguments);
      }

      return updateConnectorByBotId;
    }()

    /**
     * Delete a connector
     */

  }, {
    key: 'deleteConnectorByBotId',
    value: function () {
      var _ref4 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4(req, res) {
        var connector_id, connector;
        return _regenerator2.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                ++_cover__().s['16'];
                connector_id = req.params.connector_id;
                ++_cover__().s['17'];
                _context4.next = 5;
                return models.Connector.findById(connector_id).populate('channels conversations');

              case 5:
                connector = _context4.sent;
                ++_cover__().s['18'];

                if (connector) {
                  _context4.next = 13;
                  break;
                }

                ++_cover__().b['3'][0];
                ++_cover__().s['19'];
                throw new _errors.NotFoundError('Connector');

              case 13:
                ++_cover__().b['3'][1];

              case 14:
                ++_cover__().s['20'];
                _context4.next = 17;
                return _promise2.default.all([].concat((0, _toConsumableArray3.default)(connector.conversations.map(function (c) {
                  ++_cover__().f['3'];
                  ++_cover__().f['1'];
                  return c.remove();
                })), (0, _toConsumableArray3.default)(connector.channels.map(function (c) {
                  ++_cover__().f['4'];
                  ++_cover__().f['2'];
                  return c.remove();
                })), [connector.remove()]));

              case 17:
                ++_cover__().s['21'];
                return _context4.abrupt('return', (0, _responses.renderDeleted)(res, 'Connector successfully deleted'));

              case 19:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function deleteConnectorByBotId(_x7, _x8) {
        return _ref4.apply(this, arguments);
      }

      return deleteConnectorByBotId;
    }()
  }]);
  return ConnectorsController;
}();

exports.default = ConnectorsController;