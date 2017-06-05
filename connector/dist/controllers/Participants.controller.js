'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _errors = require('../utils/errors');

var _responses = require('../utils/responses');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _coverage__file;

function _cover__() {
  if (!_coverage__file) _coverage__file = _coverage__getInitialState();
  return _coverage__file;
}

function _coverage__getInitialState() {
  var path = '/Users/slahir/Projects/bot-connector/src/controllers/Participants.controller.js',
      hash = 'e41c7a44fb04186dbc133bd3c5d67efa';
  var global = new Function('return this')();
  var coverage = global['__coverage__'] || (global['__coverage__'] = {});
  if (coverage[path] && coverage[path].hash === hash) return coverage[path];
  var coverageData = global['JSON'].parse('{"path":"/Users/slahir/Projects/bot-connector/src/controllers/Participants.controller.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0},"b":{"1":[0,0],"2":[0,0],"3":[0,0]},"f":{"1":0,"2":0,"3":0,"4":0},"statementMap":{"1":{"start":{"line":10,"column":4},"end":{"line":10,"column":39}},"2":{"start":{"line":11,"column":4},"end":{"line":11,"column":22}},"3":{"start":{"line":13,"column":4},"end":{"line":13,"column":110}},"4":{"start":{"line":15,"column":4},"end":{"line":17,"column":6}},"5":{"start":{"line":16,"column":6},"end":{"line":16,"column":60}},"6":{"start":{"line":19,"column":4},"end":{"line":22,"column":6}},"7":{"start":{"line":29,"column":4},"end":{"line":29,"column":41}},"8":{"start":{"line":31,"column":4},"end":{"line":31,"column":73}},"9":{"start":{"line":33,"column":4},"end":{"line":33,"column":64}},"10":{"start":{"line":33,"column":24},"end":{"line":33,"column":62}},"11":{"start":{"line":35,"column":4},"end":{"line":38,"column":6}}},"fnMap":{"1":{"name":null,"line":15,"loc":{"start":{"line":15,"column":26},"end":{"line":17,"column":5}}},"2":{"name":null,"line":16,"loc":{"start":{"line":16,"column":29},"end":{"line":16,"column":59}}},"3":{"name":null,"line":15,"loc":{"start":{"line":15,"column":26},"end":{"line":17,"column":5}}},"4":{"name":null,"line":16,"loc":{"start":{"line":16,"column":29},"end":{"line":16,"column":59}}}},"branchMap":{"1":{"line":21,"type":"cond-expr","locations":[{"start":{"line":21,"column":33},"end":{"line":21,"column":69}},{"start":{"line":21,"column":72},"end":{"line":21,"column":89}}]},"2":{"line":21,"type":"cond-expr","locations":[{"start":{"line":21,"column":16},"end":{"line":21,"column":89}},{"start":{"line":21,"column":16},"end":{"line":21,"column":89}}]},"3":{"line":33,"type":"if","locations":[{"start":{"line":33,"column":22},"end":{"line":33,"column":64}},{"start":{"line":33,"column":22},"end":{"line":33,"column":64}}]}}}');
  coverageData.hash = hash;
  return coverage[path] = coverageData;
}

var ParticipantController = function () {
  function ParticipantController() {
    (0, _classCallCheck3.default)(this, ParticipantController);
  }

  (0, _createClass3.default)(ParticipantController, null, [{
    key: 'getParticipantsByConnectorId',


    /*
    * Index all connector's participants
    */
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(req, res) {
        var connector_id, results, conversations;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                ++_cover__().s['1'];
                connector_id = req.params.connector_id;
                ++_cover__().s['2'];
                results = [];
                ++_cover__().s['3'];
                _context.next = 7;
                return models.Conversation.find({ connector: connector_id }).populate('participants');

              case 7:
                conversations = _context.sent;
                ++_cover__().s['4'];


                conversations.forEach(function (c) {
                  ++_cover__().f['3'];
                  ++_cover__().f['1'];
                  ++_cover__().s['5'];

                  c.participants.forEach(function (p) {
                    ++_cover__().f['4'];
                    ++_cover__().f['2'];
                    return results.push(p.serialize);
                  });
                });

                ++_cover__().s['6'];
                return _context.abrupt('return', (0, _responses.renderOk)(res, {
                  results: results,
                  messages: results.length ? (++_cover__().b['2'][0], (++_cover__().b['1'][0], 'Participants successfully rendered')) : (++_cover__().b['2'][1], (++_cover__().b['1'][1], 'No participants'))
                }));

              case 12:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getParticipantsByConnectorId(_x, _x2) {
        return _ref.apply(this, arguments);
      }

      return getParticipantsByConnectorId;
    }()

    /*
    * Show a participant
    */

  }, {
    key: 'getParticipantByConnectorId',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(req, res) {
        var participant_id, participant;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                ++_cover__().s['7'];
                participant_id = req.params.participant_id;
                ++_cover__().s['8'];
                _context2.next = 5;
                return models.Participant.findById(participant_id);

              case 5:
                participant = _context2.sent;
                ++_cover__().s['9'];

                if (participant) {
                  _context2.next = 13;
                  break;
                }

                ++_cover__().b['3'][0];
                ++_cover__().s['10'];
                throw new _errors.NotFoundError('Participant');

              case 13:
                ++_cover__().b['3'][1];

              case 14:
                ++_cover__().s['11'];
                return _context2.abrupt('return', (0, _responses.renderOk)(res, {
                  results: participant.serialize,
                  message: 'Participant successfully rendered'
                }));

              case 16:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getParticipantByConnectorId(_x3, _x4) {
        return _ref2.apply(this, arguments);
      }

      return getParticipantByConnectorId;
    }()
  }]);
  return ParticipantController;
}();

exports.default = ParticipantController;