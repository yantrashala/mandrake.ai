'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _filterObject = require('filter-object');

var _filterObject2 = _interopRequireDefault(_filterObject);

var _utils = require('../utils');

var _errors = require('../utils/errors');

var _responses = require('../utils/responses');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _coverage__file;

function _cover__() {
  if (!_coverage__file) _coverage__file = _coverage__getInitialState();
  return _coverage__file;
}

function _coverage__getInitialState() {
  var path = '/Users/slahir/Projects/bot-connector/src/controllers/Channels.controller.js',
      hash = '204e958445b80ad65ad65cb817ec123c';
  var global = new Function('return this')();
  var coverage = global['__coverage__'] || (global['__coverage__'] = {});
  if (coverage[path] && coverage[path].hash === hash) return coverage[path];
  var coverageData = global['JSON'].parse('{"path":"/Users/slahir/Projects/bot-connector/src/controllers/Channels.controller.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0,"26":0,"27":0,"28":0,"29":0,"30":0,"31":0,"32":0,"33":0,"34":0,"35":0,"36":0,"37":0,"38":0,"39":0,"40":0,"41":0,"42":0,"43":0},"b":{"1":[0,0],"2":[0,0],"3":[0,0],"4":[0,0],"5":[0,0],"6":[0,0],"7":[0,0],"8":[0,0]},"f":{"1":0,"2":0,"3":0,"4":0},"statementMap":{"1":{"start":{"line":18,"column":0},"end":{"line":18,"column":134}},"2":{"start":{"line":26,"column":4},"end":{"line":26,"column":39}},"3":{"start":{"line":27,"column":4},"end":{"line":27,"column":46}},"4":{"start":{"line":28,"column":4},"end":{"line":28,"column":29}},"5":{"start":{"line":30,"column":4},"end":{"line":30,"column":88}},"6":{"start":{"line":32,"column":4},"end":{"line":32,"column":60}},"7":{"start":{"line":32,"column":22},"end":{"line":32,"column":58}},"8":{"start":{"line":34,"column":4},"end":{"line":34,"column":63}},"9":{"start":{"line":35,"column":4},"end":{"line":35,"column":77}},"10":{"start":{"line":35,"column":19},"end":{"line":35,"column":75}},"11":{"start":{"line":37,"column":4},"end":{"line":37,"column":79}},"12":{"start":{"line":38,"column":4},"end":{"line":38,"column":65}},"13":{"start":{"line":39,"column":4},"end":{"line":39,"column":40}},"14":{"start":{"line":41,"column":4},"end":{"line":44,"column":6}},"15":{"start":{"line":45,"column":4},"end":{"line":45,"column":60}},"16":{"start":{"line":47,"column":4},"end":{"line":50,"column":6}},"17":{"start":{"line":57,"column":4},"end":{"line":57,"column":39}},"18":{"start":{"line":59,"column":4},"end":{"line":60,"column":31}},"19":{"start":{"line":62,"column":4},"end":{"line":62,"column":60}},"20":{"start":{"line":62,"column":22},"end":{"line":62,"column":58}},"21":{"start":{"line":63,"column":4},"end":{"line":65,"column":5}},"22":{"start":{"line":64,"column":6},"end":{"line":64,"column":67}},"23":{"start":{"line":67,"column":4},"end":{"line":70,"column":6}},"24":{"start":{"line":77,"column":4},"end":{"line":77,"column":53}},"25":{"start":{"line":79,"column":4},"end":{"line":79,"column":97}},"26":{"start":{"line":81,"column":4},"end":{"line":81,"column":56}},"27":{"start":{"line":81,"column":20},"end":{"line":81,"column":54}},"28":{"start":{"line":83,"column":4},"end":{"line":86,"column":6}},"29":{"start":{"line":93,"column":4},"end":{"line":93,"column":53}},"30":{"start":{"line":95,"column":4},"end":{"line":95,"column":100}},"31":{"start":{"line":97,"column":4},"end":{"line":97,"column":59}},"32":{"start":{"line":97,"column":23},"end":{"line":97,"column":57}},"33":{"start":{"line":99,"column":4},"end":{"line":103,"column":5}},"34":{"start":{"line":104,"column":4},"end":{"line":104,"column":56}},"35":{"start":{"line":104,"column":20},"end":{"line":104,"column":54}},"36":{"start":{"line":106,"column":4},"end":{"line":106,"column":72}},"37":{"start":{"line":108,"column":4},"end":{"line":111,"column":6}},"38":{"start":{"line":118,"column":4},"end":{"line":118,"column":53}},"39":{"start":{"line":120,"column":4},"end":{"line":120,"column":97}},"40":{"start":{"line":121,"column":4},"end":{"line":121,"column":56}},"41":{"start":{"line":121,"column":20},"end":{"line":121,"column":54}},"42":{"start":{"line":123,"column":4},"end":{"line":126,"column":6}},"43":{"start":{"line":128,"column":4},"end":{"line":128,"column":54}}},"fnMap":{"1":{"name":null,"line":34,"loc":{"start":{"line":34,"column":42},"end":{"line":34,"column":62}}},"2":{"name":null,"line":34,"loc":{"start":{"line":34,"column":42},"end":{"line":34,"column":62}}},"3":{"name":null,"line":68,"loc":{"start":{"line":68,"column":38},"end":{"line":68,"column":54}}},"4":{"name":null,"line":68,"loc":{"start":{"line":68,"column":38},"end":{"line":68,"column":54}}}},"branchMap":{"1":{"line":32,"type":"if","locations":[{"start":{"line":32,"column":20},"end":{"line":32,"column":60}},{"start":{"line":32,"column":20},"end":{"line":32,"column":60}}]},"2":{"line":35,"type":"if","locations":[{"start":{"line":35,"column":17},"end":{"line":35,"column":77}},{"start":{"line":35,"column":17},"end":{"line":35,"column":77}}]},"3":{"line":62,"type":"if","locations":[{"start":{"line":62,"column":20},"end":{"line":62,"column":60}},{"start":{"line":62,"column":20},"end":{"line":62,"column":60}}]},"4":{"line":63,"type":"if","locations":[{"start":{"line":63,"column":36},"end":{"line":65,"column":5}},{"start":{"line":63,"column":36},"end":{"line":65,"column":5}}]},"5":{"line":81,"type":"if","locations":[{"start":{"line":81,"column":18},"end":{"line":81,"column":56}},{"start":{"line":81,"column":18},"end":{"line":81,"column":56}}]},"6":{"line":97,"type":"if","locations":[{"start":{"line":97,"column":21},"end":{"line":97,"column":59}},{"start":{"line":97,"column":21},"end":{"line":97,"column":59}}]},"7":{"line":104,"type":"if","locations":[{"start":{"line":104,"column":18},"end":{"line":104,"column":56}},{"start":{"line":104,"column":18},"end":{"line":104,"column":56}}]},"8":{"line":121,"type":"if","locations":[{"start":{"line":121,"column":18},"end":{"line":121,"column":56}},{"start":{"line":121,"column":18},"end":{"line":121,"column":56}}]}}}');
  coverageData.hash = hash;
  return coverage[path] = coverageData;
}

++_cover__().s['1'];


var permitted = '{type,slug,isActivated,token,userName,apiKey,webhook,clientId,clientSecret,botuser,password,phoneNumber,serviceId}';

var ChannelsController = function () {
  function ChannelsController() {
    (0, _classCallCheck3.default)(this, ChannelsController);
  }

  (0, _createClass3.default)(ChannelsController, null, [{
    key: 'createChannelByConnectorId',


    /**
    * Create a new channel
    */
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(req, res) {
        var connector_id, params, slug, connector, channel;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                ++_cover__().s['2'];
                connector_id = req.params.connector_id;
                ++_cover__().s['3'];
                params = (0, _filterObject2.default)(req.body, permitted);
                ++_cover__().s['4'];
                slug = req.body.slug;
                ++_cover__().s['5'];
                _context.next = 9;
                return models.Connector.findById(connector_id).populate('channels');

              case 9:
                connector = _context.sent;
                ++_cover__().s['6'];

                if (connector) {
                  _context.next = 17;
                  break;
                }

                ++_cover__().b['1'][0];
                ++_cover__().s['7'];
                throw new _errors.NotFoundError('Connector');

              case 17:
                ++_cover__().b['1'][1];

              case 18:
                ++_cover__().s['8'];
                channel = connector.channels.find(function (c) {
                  ++_cover__().f['2'];
                  ++_cover__().f['1'];
                  return c.slug === slug;
                });
                ++_cover__().s['9'];

                if (!channel) {
                  _context.next = 27;
                  break;
                }

                ++_cover__().b['2'][0];
                ++_cover__().s['10'];
                throw new _errors.ConflictError('Channel slug is already taken');

              case 27:
                ++_cover__().b['2'][1];

              case 28:
                ++_cover__().s['11'];
                _context.next = 31;
                return new models.Channel((0, _extends3.default)({}, params, { connector: connector._id }));

              case 31:
                channel = _context.sent;
                ++_cover__().s['12'];

                channel.webhook = config.base_url + '/webhook/' + channel._id;
                ++_cover__().s['13'];
                connector.channels.push(channel._id);

                ++_cover__().s['14'];
                _context.next = 39;
                return _promise2.default.all([connector.save(), channel.save()]);

              case 39:
                ++_cover__().s['15'];
                _context.next = 42;
                return (0, _utils.invoke)(channel.type, 'onChannelCreate', [channel]);

              case 42:
                ++_cover__().s['16'];
                return _context.abrupt('return', (0, _responses.renderCreated)(res, {
                  results: channel.serialize,
                  message: 'Channel successfully created'
                }));

              case 44:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function createChannelByConnectorId(_x, _x2) {
        return _ref.apply(this, arguments);
      }

      return createChannelByConnectorId;
    }()

    /**
    * Index bot's channels
    */

  }, {
    key: 'getChannelsByConnectorId',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(req, res) {
        var connector_id, connector;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                ++_cover__().s['17'];
                connector_id = req.params.connector_id;
                ++_cover__().s['18'];
                _context2.next = 5;
                return models.Connector.findById(connector_id).populate('channels');

              case 5:
                connector = _context2.sent;
                ++_cover__().s['19'];

                if (connector) {
                  _context2.next = 13;
                  break;
                }

                ++_cover__().b['3'][0];
                ++_cover__().s['20'];
                throw new _errors.NotFoundError('Connector');

              case 13:
                ++_cover__().b['3'][1];

              case 14:
                ++_cover__().s['21'];

                if (connector.channels.length) {
                  _context2.next = 21;
                  break;
                }

                ++_cover__().b['4'][0];
                ++_cover__().s['22'];
                return _context2.abrupt('return', (0, _responses.renderOk)(res, { results: [], message: 'No channels' }));

              case 21:
                ++_cover__().b['4'][1];

              case 22:
                ++_cover__().s['23'];
                return _context2.abrupt('return', (0, _responses.renderOk)(res, {
                  results: connector.channels.map(function (c) {
                    ++_cover__().f['4'];
                    ++_cover__().f['3'];
                    return c.serialize;
                  }),
                  message: 'Channels successfully rendered'
                }));

              case 24:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getChannelsByConnectorId(_x3, _x4) {
        return _ref2.apply(this, arguments);
      }

      return getChannelsByConnectorId;
    }()

    /**
    * Show a channel
    */

  }, {
    key: 'getChannelByConnectorId',
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3(req, res) {
        var _req$params, connector_id, channel_slug, channel;

        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                ++_cover__().s['24'];
                _req$params = req.params, connector_id = _req$params.connector_id, channel_slug = _req$params.channel_slug;
                ++_cover__().s['25'];
                _context3.next = 5;
                return models.Channel.findOne({ connector: connector_id, slug: channel_slug });

              case 5:
                channel = _context3.sent;
                ++_cover__().s['26'];

                if (channel) {
                  _context3.next = 13;
                  break;
                }

                ++_cover__().b['5'][0];
                ++_cover__().s['27'];
                throw new _errors.NotFoundError('Channel');

              case 13:
                ++_cover__().b['5'][1];

              case 14:
                ++_cover__().s['28'];
                return _context3.abrupt('return', (0, _responses.renderOk)(res, {
                  results: channel.serialize,
                  message: 'Channel successfully rendered'
                }));

              case 16:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getChannelByConnectorId(_x5, _x6) {
        return _ref3.apply(this, arguments);
      }

      return getChannelByConnectorId;
    }()

    /**
    * Update a channel
    */

  }, {
    key: 'updateChannelByConnectorId',
    value: function () {
      var _ref4 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4(req, res) {
        var _req$params2, connector_id, channel_slug, oldChannel, channel;

        return _regenerator2.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                ++_cover__().s['29'];
                _req$params2 = req.params, connector_id = _req$params2.connector_id, channel_slug = _req$params2.channel_slug;
                ++_cover__().s['30'];
                _context4.next = 5;
                return models.Channel.findOne({ slug: channel_slug, connector: connector_id });

              case 5:
                oldChannel = _context4.sent;
                ++_cover__().s['31'];

                if (oldChannel) {
                  _context4.next = 13;
                  break;
                }

                ++_cover__().b['6'][0];
                ++_cover__().s['32'];
                throw new _errors.NotFoundError('Channel');

              case 13:
                ++_cover__().b['6'][1];

              case 14:
                ++_cover__().s['33'];
                _context4.next = 17;
                return models.Channel.findOneAndUpdate({ slug: channel_slug, connector: connector_id }, { $set: (0, _filterObject2.default)(req.body, permitted) }, { new: true });

              case 17:
                channel = _context4.sent;
                ++_cover__().s['34'];

                if (channel) {
                  _context4.next = 25;
                  break;
                }

                ++_cover__().b['7'][0];
                ++_cover__().s['35'];
                throw new _errors.NotFoundError('Channel');

              case 25:
                ++_cover__().b['7'][1];

              case 26:
                ++_cover__().s['36'];
                _context4.next = 29;
                return (0, _utils.invoke)(channel.type, 'onChannelUpdate', [channel, oldChannel]);

              case 29:
                ++_cover__().s['37'];


                (0, _responses.renderOk)(res, {
                  results: channel.serialize,
                  message: 'Channel successfully updated'
                });

              case 31:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function updateChannelByConnectorId(_x7, _x8) {
        return _ref4.apply(this, arguments);
      }

      return updateChannelByConnectorId;
    }()

    /**
    * Delete a channel
    */

  }, {
    key: 'deleteChannelByConnectorId',
    value: function () {
      var _ref5 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee5(req, res) {
        var _req$params3, connector_id, channel_slug, channel;

        return _regenerator2.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                ++_cover__().s['38'];
                _req$params3 = req.params, connector_id = _req$params3.connector_id, channel_slug = _req$params3.channel_slug;
                ++_cover__().s['39'];
                _context5.next = 5;
                return models.Channel.findOne({ connector: connector_id, slug: channel_slug });

              case 5:
                channel = _context5.sent;
                ++_cover__().s['40'];

                if (channel) {
                  _context5.next = 13;
                  break;
                }

                ++_cover__().b['8'][0];
                ++_cover__().s['41'];
                throw new _errors.NotFoundError('Channel');

              case 13:
                ++_cover__().b['8'][1];

              case 14:
                ++_cover__().s['42'];
                _context5.next = 17;
                return _promise2.default.all([channel.remove(), (0, _utils.invoke)(channel.type, 'onChannelDelete', [channel])]);

              case 17:
                ++_cover__().s['43'];


                (0, _responses.renderDeleted)(res, 'Channel successfully deleted');

              case 19:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function deleteChannelByConnectorId(_x9, _x10) {
        return _ref5.apply(this, arguments);
      }

      return deleteChannelByConnectorId;
    }()
  }]);
  return ChannelsController;
}();

exports.default = ChannelsController;