'use strict';

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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
            return models.Channel.findOne({ _id: this._id });

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

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _utils = require('../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _coverage__file;

function _cover__() {
  if (!_coverage__file) _coverage__file = _coverage__getInitialState();
  return _coverage__file;
}

function _coverage__getInitialState() {
  var path = '/Users/slahir/Projects/bot-connector/src/models/Channel.model.js',
      hash = 'cd7216e5b6629239dda0de9daedf2b14';
  var global = new Function('return this')();
  var coverage = global['__coverage__'] || (global['__coverage__'] = {});
  if (coverage[path] && coverage[path].hash === hash) return coverage[path];
  var coverageData = global['JSON'].parse('{"path":"/Users/slahir/Projects/bot-connector/src/models/Channel.model.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0},"b":{"1":[0,0],"2":[0,0]},"f":{"1":0,"2":0,"3":0,"4":0,"5":0},"statementMap":{"1":{"start":{"line":7,"column":0},"end":{"line":31,"column":2}},"2":{"start":{"line":34,"column":2},"end":{"line":38,"column":3}},"3":{"start":{"line":35,"column":4},"end":{"line":37,"column":5}},"4":{"start":{"line":36,"column":6},"end":{"line":36,"column":25}},"5":{"start":{"line":39,"column":2},"end":{"line":39,"column":8}},"6":{"start":{"line":42,"column":0},"end":{"line":42,"column":39}},"7":{"start":{"line":44,"column":0},"end":{"line":56,"column":2}},"8":{"start":{"line":46,"column":2},"end":{"line":46,"column":69}},"9":{"start":{"line":46,"column":63},"end":{"line":46,"column":68}},"10":{"start":{"line":47,"column":2},"end":{"line":47,"column":28}},"11":{"start":{"line":49,"column":2},"end":{"line":55,"column":3}},"12":{"start":{"line":58,"column":0},"end":{"line":58,"column":56}},"13":{"start":{"line":60,"column":0},"end":{"line":60,"column":24}}},"fnMap":{"1":{"name":null,"line":33,"loc":{"start":{"line":33,"column":0},"end":{"line":40,"column":1}}},"2":{"name":null,"line":33,"loc":{"start":{"line":33,"column":0},"end":{"line":40,"column":1}}},"3":{"name":null,"line":33,"loc":{"start":{"line":33,"column":0},"end":{"line":40,"column":1}}},"4":{"name":null,"line":44,"loc":{"start":{"line":44,"column":39},"end":{"line":56,"column":1}}},"5":{"name":null,"line":46,"loc":{"start":{"line":46,"column":52},"end":{"line":46,"column":68}}}},"branchMap":{"1":{"line":34,"type":"if","locations":[{"start":{"line":34,"column":18},"end":{"line":38,"column":3}},{"start":{"line":34,"column":18},"end":{"line":38,"column":3}}]},"2":{"line":54,"type":"cond-expr","locations":[{"start":{"line":54,"column":46},"end":{"line":54,"column":82}},{"start":{"line":54,"column":85},"end":{"line":54,"column":102}}]}}}');
  coverageData.hash = hash;
  return coverage[path] = coverageData;
}

++_cover__().s['1'];


var ChannelSchema = new _mongoose2.default.Schema({
  _id: { type: String, default: _v2.default },
  connector: { type: String, ref: 'Connector', required: true },
  slug: { type: String, required: true },
  type: { type: String, required: true },
  isErrored: { type: Boolean, required: true, default: false },
  isActivated: { type: Boolean, required: true, default: true },

  token: String,
  clientId: String,
  clientSecret: String,
  botuser: String,
  userName: String,
  password: String,
  serviceId: String,
  phoneNumber: String,
  apiKey: String,
  webhook: String,
  oAuthUrl: String,
  webhookToken: String,
  app: { type: String, ref: 'Channel' },
  children: [{ type: String, ref: 'Channel' }]
}, {
  timestamps: true
});

++_cover__().s['6'];


ChannelSchema.pre('save', generateUUID);

++_cover__().s['7'];
ChannelSchema.virtual('serialize').get(function () {
  ++_cover__().f['4'];
  ++_cover__().s['8'];

  // Filter the content of the Channel to keep only the initialized field
  var filteredChannel = _lodash2.default.pickBy(this.toObject(), function (value) {
    return ++_cover__().f['5'], ++_cover__().s['9'], value;
  });
  ++_cover__().s['10'];
  delete filteredChannel._id;

  ++_cover__().s['11'];
  return (0, _extends3.default)({
    id: this._id
  }, filteredChannel, {
    isActivated: this.isActivated,
    isErrored: this.isErrored,
    webhookToken: this.type === 'messenger' ? (++_cover__().b['2'][0], (0, _utils.getWebhookToken)(this._id, this.slug)) : (++_cover__().b['2'][1], this.webhookToken)
  });
});

++_cover__().s['12'];
var Channel = _mongoose2.default.model('Channel', ChannelSchema);

++_cover__().s['13'];
module.exports = Channel;