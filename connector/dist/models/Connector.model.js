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
            return models.Connector.findOne({ _id: this._id });

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
  var path = '/Users/slahir/Projects/bot-connector/src/models/Connector.model.js',
      hash = '30642611f0af8b6a087d92592430dc71';
  var global = new Function('return this')();
  var coverage = global['__coverage__'] || (global['__coverage__'] = {});
  if (coverage[path] && coverage[path].hash === hash) return coverage[path];
  var coverageData = global['JSON'].parse('{"path":"/Users/slahir/Projects/bot-connector/src/models/Connector.model.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0},"b":{"1":[0,0],"2":[0,0]},"f":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0},"statementMap":{"1":{"start":{"line":4,"column":0},"end":{"line":12,"column":2}},"2":{"start":{"line":15,"column":2},"end":{"line":19,"column":3}},"3":{"start":{"line":16,"column":4},"end":{"line":18,"column":5}},"4":{"start":{"line":17,"column":6},"end":{"line":17,"column":25}},"5":{"start":{"line":20,"column":2},"end":{"line":20,"column":8}},"6":{"start":{"line":23,"column":0},"end":{"line":24,"column":28}},"7":{"start":{"line":26,"column":0},"end":{"line":33,"column":2}},"8":{"start":{"line":27,"column":2},"end":{"line":32,"column":3}},"9":{"start":{"line":31,"column":37},"end":{"line":31,"column":53}},"10":{"start":{"line":35,"column":0},"end":{"line":40,"column":2}},"11":{"start":{"line":36,"column":2},"end":{"line":39,"column":3}},"12":{"start":{"line":42,"column":0},"end":{"line":42,"column":62}},"13":{"start":{"line":44,"column":0},"end":{"line":44,"column":26}}},"fnMap":{"1":{"name":null,"line":14,"loc":{"start":{"line":14,"column":0},"end":{"line":21,"column":1}}},"2":{"name":null,"line":14,"loc":{"start":{"line":14,"column":0},"end":{"line":21,"column":1}}},"3":{"name":null,"line":14,"loc":{"start":{"line":14,"column":0},"end":{"line":21,"column":1}}},"4":{"name":null,"line":26,"loc":{"start":{"line":26,"column":41},"end":{"line":33,"column":1}}},"5":{"name":null,"line":31,"loc":{"start":{"line":31,"column":32},"end":{"line":31,"column":53}}},"6":{"name":null,"line":35,"loc":{"start":{"line":35,"column":46},"end":{"line":40,"column":1}}}},"branchMap":{"1":{"line":15,"type":"if","locations":[{"start":{"line":15,"column":18},"end":{"line":19,"column":3}},{"start":{"line":15,"column":18},"end":{"line":19,"column":3}}]},"2":{"line":31,"type":"binary-expr","locations":[{"start":{"line":31,"column":37},"end":{"line":31,"column":48}},{"start":{"line":31,"column":52},"end":{"line":31,"column":53}}]}}}');
  coverageData.hash = hash;
  return coverage[path] = coverageData;
}

++_cover__().s['1'];


var ConnectorSchema = new _mongoose2.default.Schema({
  _id: { type: String, default: _v2.default },
  url: { type: String, required: true },
  channels: [{ type: String, ref: 'Channel' }],
  conversations: [{ type: String, ref: 'Conversation' }]
}, {
  usePushEach: true,
  timestamps: true
});

++_cover__().s['6'];


ConnectorSchema.pre('save', generateUUID);

++_cover__().s['7'];
ConnectorSchema.virtual('serialize').get(function () {
  ++_cover__().f['4'];
  ++_cover__().s['8'];

  return {
    id: this._id,
    url: this.url,
    conversations: this.conversations,
    channels: this.channels.map(function (c) {
      return ++_cover__().f['5'], ++_cover__().s['9'], (++_cover__().b['2'][0], c.serialize) || (++_cover__().b['2'][1], c);
    })
  };
});

++_cover__().s['10'];
ConnectorSchema.virtual('lightSerialize').get(function () {
  ++_cover__().f['6'];
  ++_cover__().s['11'];

  return {
    id: this._id,
    url: this.url
  };
});

++_cover__().s['12'];
var Connector = _mongoose2.default.model('Connector', ConnectorSchema);

++_cover__().s['13'];
module.exports = Connector;