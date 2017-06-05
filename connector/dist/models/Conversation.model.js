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
            return models.Conversation.findOne({ _id: this._id });

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
  var path = '/Users/slahir/Projects/bot-connector/src/models/Conversation.model.js',
      hash = '4109724cf597334cb17b30bcddc87123';
  var global = new Function('return this')();
  var coverage = global['__coverage__'] || (global['__coverage__'] = {});
  if (coverage[path] && coverage[path].hash === hash) return coverage[path];
  var coverageData = global['JSON'].parse('{"path":"/Users/slahir/Projects/bot-connector/src/models/Conversation.model.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0},"b":{"1":[0,0]},"f":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0},"statementMap":{"1":{"start":{"line":4,"column":0},"end":{"line":14,"column":2}},"2":{"start":{"line":17,"column":2},"end":{"line":21,"column":3}},"3":{"start":{"line":18,"column":4},"end":{"line":20,"column":5}},"4":{"start":{"line":19,"column":6},"end":{"line":19,"column":25}},"5":{"start":{"line":22,"column":2},"end":{"line":22,"column":8}},"6":{"start":{"line":25,"column":0},"end":{"line":25,"column":44}},"7":{"start":{"line":27,"column":0},"end":{"line":34,"column":2}},"8":{"start":{"line":28,"column":2},"end":{"line":33,"column":3}},"9":{"start":{"line":36,"column":0},"end":{"line":45,"column":2}},"10":{"start":{"line":37,"column":2},"end":{"line":44,"column":3}},"11":{"start":{"line":42,"column":45},"end":{"line":42,"column":56}},"12":{"start":{"line":43,"column":37},"end":{"line":43,"column":48}},"13":{"start":{"line":47,"column":0},"end":{"line":47,"column":71}},"14":{"start":{"line":49,"column":0},"end":{"line":49,"column":29}}},"fnMap":{"1":{"name":null,"line":16,"loc":{"start":{"line":16,"column":0},"end":{"line":23,"column":1}}},"2":{"name":null,"line":16,"loc":{"start":{"line":16,"column":0},"end":{"line":23,"column":1}}},"3":{"name":null,"line":16,"loc":{"start":{"line":16,"column":0},"end":{"line":23,"column":1}}},"4":{"name":null,"line":27,"loc":{"start":{"line":27,"column":44},"end":{"line":34,"column":1}}},"5":{"name":null,"line":36,"loc":{"start":{"line":36,"column":39},"end":{"line":45,"column":1}}},"6":{"name":null,"line":42,"loc":{"start":{"line":42,"column":40},"end":{"line":42,"column":56}}},"7":{"name":null,"line":43,"loc":{"start":{"line":43,"column":32},"end":{"line":43,"column":48}}}},"branchMap":{"1":{"line":17,"type":"if","locations":[{"start":{"line":17,"column":18},"end":{"line":21,"column":3}},{"start":{"line":17,"column":18},"end":{"line":21,"column":3}}]}}}');
  coverageData.hash = hash;
  return coverage[path] = coverageData;
}

++_cover__().s['1'];


var ConversationSchema = new _mongoose2.default.Schema({
  _id: { type: String, default: _v2.default },
  channel: { type: String, ref: 'Channel', required: true },
  connector: { type: String, ref: 'Connector', required: true },
  chatId: { type: String, required: true },
  participants: [{ type: String, ref: 'Participant' }],
  messages: [{ type: String, ref: 'Message' }]
}, {
  usePushEach: true,
  timestamps: true
});

++_cover__().s['6'];


ConversationSchema.pre('save', generateUUID);

++_cover__().s['7'];
ConversationSchema.virtual('serialize').get(function () {
  ++_cover__().f['4'];
  ++_cover__().s['8'];

  return {
    id: this._id,
    channel: this.channel,
    connector: this.connector,
    chatId: this.chatId
  };
});

++_cover__().s['9'];
ConversationSchema.virtual('full').get(function () {
  ++_cover__().f['5'];
  ++_cover__().s['10'];

  return {
    id: this._id,
    connector: this.connector,
    chatId: this.chatId,
    channel: this.channel,
    participants: this.participants.map(function (p) {
      return ++_cover__().f['6'], ++_cover__().s['11'], p.serialize;
    }),
    messages: this.messages.map(function (m) {
      return ++_cover__().f['7'], ++_cover__().s['12'], m.serialize;
    })
  };
});

++_cover__().s['13'];
var Conversation = _mongoose2.default.model('Conversation', ConversationSchema);

++_cover__().s['14'];
module.exports = Conversation;