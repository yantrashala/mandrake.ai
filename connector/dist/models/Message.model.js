'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var generateUUID = function () {
  var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(next) {
    ++_cover__().f['3'];
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            ++_cover__().f['2'];
            ++_cover__().f['1'];
            ++_cover__().s['2'];

            if (!this.isNew) {
              _context.next = 15;
              break;
            }

            ++_cover__().b['1'][0];
            ++_cover__().s['3'];

          case 6:
            _context.next = 8;
            return models.Message.findOne({ _id: this._id });

          case 8:
            if (!_context.sent) {
              _context.next = 13;
              break;
            }

            ++_cover__().s['4'];

            this._id = (0, _v2.default)();
            _context.next = 6;
            break;

          case 13:
            _context.next = 16;
            break;

          case 15:
            ++_cover__().b['1'][1];

          case 16:
            ++_cover__().s['5'];

            next();

          case 18:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function generateUUID(_x) {
    return _ref.apply(this, arguments);
  };
}();

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _v = require('uuid/v4');

var _v2 = _interopRequireDefault(_v);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _coverage__file;

function _cover__() {
  if (!_coverage__file) _coverage__file = _coverage__getInitialState();
  return _coverage__file;
}

function _coverage__getInitialState() {
  var path = '/Users/slahir/Projects/bot-connector/src/models/Message.model.js',
      hash = 'aa8a828249e59239e7583ea9ee8b36a4';
  var global = new Function('return this')();
  var coverage = global['__coverage__'] || (global['__coverage__'] = {});
  if (coverage[path] && coverage[path].hash === hash) return coverage[path];
  var coverageData = global['JSON'].parse('{"path":"/Users/slahir/Projects/bot-connector/src/models/Message.model.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0},"b":{"1":[0,0]},"f":{"1":0,"2":0,"3":0,"4":0},"statementMap":{"1":{"start":{"line":4,"column":0},"end":{"line":10,"column":2}},"2":{"start":{"line":13,"column":2},"end":{"line":17,"column":3}},"3":{"start":{"line":14,"column":4},"end":{"line":16,"column":5}},"4":{"start":{"line":15,"column":6},"end":{"line":15,"column":25}},"5":{"start":{"line":18,"column":2},"end":{"line":18,"column":8}},"6":{"start":{"line":21,"column":0},"end":{"line":21,"column":39}},"7":{"start":{"line":23,"column":0},"end":{"line":30,"column":2}},"8":{"start":{"line":24,"column":2},"end":{"line":29,"column":3}},"9":{"start":{"line":32,"column":0},"end":{"line":32,"column":56}},"10":{"start":{"line":34,"column":0},"end":{"line":34,"column":24}}},"fnMap":{"1":{"name":null,"line":12,"loc":{"start":{"line":12,"column":0},"end":{"line":19,"column":1}}},"2":{"name":null,"line":12,"loc":{"start":{"line":12,"column":0},"end":{"line":19,"column":1}}},"3":{"name":null,"line":12,"loc":{"start":{"line":12,"column":0},"end":{"line":19,"column":1}}},"4":{"name":null,"line":23,"loc":{"start":{"line":23,"column":39},"end":{"line":30,"column":1}}}},"branchMap":{"1":{"line":13,"type":"if","locations":[{"start":{"line":13,"column":18},"end":{"line":17,"column":3}},{"start":{"line":13,"column":18},"end":{"line":17,"column":3}}]}}}');
  coverageData.hash = hash;
  return coverage[path] = coverageData;
}

++_cover__().s['1'];


var MessageSchema = new _mongoose2.default.Schema({
  _id: { type: String, default: _v2.default },
  attachment: { type: Object },
  participant: { type: String, ref: 'Participant', required: true },
  conversation: { type: String, ref: 'Conversation', required: true },
  receivedAt: { type: Date, default: Date.now() }
});

++_cover__().s['6'];


MessageSchema.pre('save', generateUUID);

++_cover__().s['7'];
MessageSchema.virtual('serialize').get(function () {
  ++_cover__().f['4'];
  ++_cover__().s['8'];

  return {
    id: this._id,
    attachment: this.attachment,
    participant: this.participant,
    conversation: this.conversation
  };
});

++_cover__().s['9'];
var Message = _mongoose2.default.model('Message', MessageSchema);

++_cover__().s['10'];
module.exports = Message;