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

var _responses = require('../utils/responses');

var _errors = require('../utils/errors');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _coverage__file;

function _cover__() {
  if (!_coverage__file) _coverage__file = _coverage__getInitialState();
  return _coverage__file;
}

function _coverage__getInitialState() {
  var path = '/Users/slahir/Projects/bot-connector/src/controllers/Conversations.controller.js',
      hash = '0fb9a247fc82c3c67791dd3e2c941aa8';
  var global = new Function('return this')();
  var coverage = global['__coverage__'] || (global['__coverage__'] = {});
  if (coverage[path] && coverage[path].hash === hash) return coverage[path];
  var coverageData = global['JSON'].parse('{"path":"/Users/slahir/Projects/bot-connector/src/controllers/Conversations.controller.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0,"26":0,"27":0,"28":0,"29":0,"30":0,"31":0},"b":{"1":[0,0],"2":[0,0],"3":[0,0],"4":[0,0],"5":[0,0],"6":[0,0],"7":[0,0],"8":[0,0]},"f":{"1":0,"2":0},"statementMap":{"1":{"start":{"line":10,"column":4},"end":{"line":10,"column":39}},"2":{"start":{"line":12,"column":4},"end":{"line":12,"column":85}},"3":{"start":{"line":14,"column":4},"end":{"line":17,"column":6}},"4":{"start":{"line":24,"column":4},"end":{"line":24,"column":56}},"5":{"start":{"line":26,"column":4},"end":{"line":26,"column":143}},"6":{"start":{"line":28,"column":4},"end":{"line":28,"column":66}},"7":{"start":{"line":28,"column":25},"end":{"line":28,"column":64}},"8":{"start":{"line":30,"column":4},"end":{"line":33,"column":6}},"9":{"start":{"line":40,"column":4},"end":{"line":40,"column":56}},"10":{"start":{"line":42,"column":4},"end":{"line":42,"column":109}},"11":{"start":{"line":44,"column":4},"end":{"line":44,"column":66}},"12":{"start":{"line":44,"column":25},"end":{"line":44,"column":64}},"13":{"start":{"line":46,"column":4},"end":{"line":46,"column":31}},"14":{"start":{"line":48,"column":4},"end":{"line":48,"column":59}},"15":{"start":{"line":55,"column":4},"end":{"line":59,"column":13}},"16":{"start":{"line":61,"column":4},"end":{"line":61,"column":45}},"17":{"start":{"line":61,"column":24},"end":{"line":61,"column":43}},"18":{"start":{"line":63,"column":4},"end":{"line":63,"column":89}},"19":{"start":{"line":65,"column":4},"end":{"line":69,"column":5}},"20":{"start":{"line":66,"column":6},"end":{"line":66,"column":40}},"21":{"start":{"line":67,"column":11},"end":{"line":69,"column":5}},"22":{"start":{"line":68,"column":6},"end":{"line":68,"column":59}},"23":{"start":{"line":71,"column":4},"end":{"line":71,"column":33}},"24":{"start":{"line":73,"column":4},"end":{"line":75,"column":5}},"25":{"start":{"line":74,"column":6},"end":{"line":74,"column":42}},"26":{"start":{"line":77,"column":4},"end":{"line":77,"column":115}},"27":{"start":{"line":78,"column":4},"end":{"line":78,"column":50}},"28":{"start":{"line":79,"column":4},"end":{"line":79,"column":105}},"29":{"start":{"line":81,"column":4},"end":{"line":81,"column":38}},"30":{"start":{"line":82,"column":4},"end":{"line":82,"column":34}},"31":{"start":{"line":83,"column":4},"end":{"line":83,"column":23}}},"fnMap":{"1":{"name":null,"line":15,"loc":{"start":{"line":15,"column":33},"end":{"line":15,"column":49}}},"2":{"name":null,"line":15,"loc":{"start":{"line":15,"column":33},"end":{"line":15,"column":49}}}},"branchMap":{"1":{"line":16,"type":"cond-expr","locations":[{"start":{"line":16,"column":38},"end":{"line":16,"column":75}},{"start":{"line":16,"column":78},"end":{"line":16,"column":96}}]},"2":{"line":16,"type":"cond-expr","locations":[{"start":{"line":16,"column":15},"end":{"line":16,"column":96}},{"start":{"line":16,"column":15},"end":{"line":16,"column":96}}]},"3":{"line":28,"type":"if","locations":[{"start":{"line":28,"column":23},"end":{"line":28,"column":66}},{"start":{"line":28,"column":23},"end":{"line":28,"column":66}}]},"4":{"line":44,"type":"if","locations":[{"start":{"line":44,"column":23},"end":{"line":44,"column":66}},{"start":{"line":44,"column":23},"end":{"line":44,"column":66}}]},"5":{"line":61,"type":"if","locations":[{"start":{"line":61,"column":22},"end":{"line":61,"column":45}},{"start":{"line":61,"column":22},"end":{"line":61,"column":45}}]},"6":{"line":65,"type":"if","locations":[{"start":{"line":65,"column":18},"end":{"line":67,"column":5}},{"start":{"line":65,"column":18},"end":{"line":67,"column":5}}]},"7":{"line":67,"type":"if","locations":[{"start":{"line":67,"column":37},"end":{"line":69,"column":5}},{"start":{"line":67,"column":37},"end":{"line":69,"column":5}}]},"8":{"line":73,"type":"if","locations":[{"start":{"line":73,"column":20},"end":{"line":75,"column":5}},{"start":{"line":73,"column":20},"end":{"line":75,"column":5}}]}}}');
  coverageData.hash = hash;
  return coverage[path] = coverageData;
}

var ConversationController = function () {
  function ConversationController() {
    (0, _classCallCheck3.default)(this, ConversationController);
  }

  (0, _createClass3.default)(ConversationController, null, [{
    key: 'getConversationsByConnectorId',


    /*
    * Index all connector conversations
    */
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(req, res) {
        var connector_id, conversations;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                ++_cover__().s['1'];
                connector_id = req.params.connector_id;
                ++_cover__().s['2'];
                _context.next = 5;
                return models.Conversation.find({ connector: connector_id });

              case 5:
                conversations = _context.sent;
                ++_cover__().s['3'];


                (0, _responses.renderOk)(res, {
                  results: conversations.map(function (c) {
                    ++_cover__().f['2'];
                    ++_cover__().f['1'];
                    return c.serialize;
                  }),
                  message: conversations.length ? (++_cover__().b['2'][0], (++_cover__().b['1'][0], 'Conversations rendered with success')) : (++_cover__().b['2'][1], (++_cover__().b['1'][1], 'No conversations'))
                });

              case 8:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getConversationsByConnectorId(_x, _x2) {
        return _ref.apply(this, arguments);
      }

      return getConversationsByConnectorId;
    }()

    /*
    * Show a conversation
    */

  }, {
    key: 'getConversationByConnectorId',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(req, res) {
        var _req$params, connector_id, conversation_id, conversation;

        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                ++_cover__().s['4'];
                _req$params = req.params, connector_id = _req$params.connector_id, conversation_id = _req$params.conversation_id;
                ++_cover__().s['5'];
                _context2.next = 5;
                return models.Conversation.findOne({ _id: conversation_id, connector: connector_id }).populate('participants messages');

              case 5:
                conversation = _context2.sent;
                ++_cover__().s['6'];

                if (conversation) {
                  _context2.next = 13;
                  break;
                }

                ++_cover__().b['3'][0];
                ++_cover__().s['7'];
                throw new _errors.NotFoundError('Conversation');

              case 13:
                ++_cover__().b['3'][1];

              case 14:
                ++_cover__().s['8'];
                return _context2.abrupt('return', (0, _responses.renderOk)(res, {
                  results: conversation.full,
                  message: 'Conversation rendered with success'
                }));

              case 16:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getConversationByConnectorId(_x3, _x4) {
        return _ref2.apply(this, arguments);
      }

      return getConversationByConnectorId;
    }()

    /*
    * Delete a conversation
    */

  }, {
    key: 'deleteConversationByConnectorId',
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3(req, res) {
        var _req$params2, connector_id, conversation_id, conversation;

        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                ++_cover__().s['9'];
                _req$params2 = req.params, connector_id = _req$params2.connector_id, conversation_id = _req$params2.conversation_id;
                ++_cover__().s['10'];
                _context3.next = 5;
                return models.Conversation.findOne({ _id: conversation_id, connector: connector_id });

              case 5:
                conversation = _context3.sent;
                ++_cover__().s['11'];

                if (conversation) {
                  _context3.next = 13;
                  break;
                }

                ++_cover__().b['4'][0];
                ++_cover__().s['12'];
                throw new _errors.NotFoundError('Conversation');

              case 13:
                ++_cover__().b['4'][1];

              case 14:
                ++_cover__().s['13'];
                _context3.next = 17;
                return conversation.remove();

              case 17:
                ++_cover__().s['14'];


                (0, _responses.renderDeleted)(res, 'Conversation deleted with success');

              case 19:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function deleteConversationByConnectorId(_x5, _x6) {
        return _ref3.apply(this, arguments);
      }

      return deleteConversationByConnectorId;
    }()

    /*
     * Find or create a conversation
     */

  }, {
    key: 'findOrCreateConversation',
    value: function () {
      var _ref4 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4(channelId, chatId) {
        var conversation, channel, connector;
        return _regenerator2.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                ++_cover__().s['15'];
                _context4.next = 3;
                return models.Conversation.findOne({ channel: channelId, chatId: chatId }).populate('channel').populate('connector', 'url _id').populate('participants').exec();

              case 3:
                conversation = _context4.sent;
                ++_cover__().s['16'];

                if (!conversation) {
                  _context4.next = 11;
                  break;
                }

                ++_cover__().b['5'][0];
                ++_cover__().s['17'];
                return _context4.abrupt('return', conversation);

              case 11:
                ++_cover__().b['5'][1];

              case 12:
                ++_cover__().s['18'];
                _context4.next = 15;
                return models.Channel.findById(channelId).populate('connector').exec();

              case 15:
                channel = _context4.sent;
                ++_cover__().s['19'];

                if (channel) {
                  _context4.next = 23;
                  break;
                }

                ++_cover__().b['6'][0];
                ++_cover__().s['20'];
                throw new _errors.NotFoundError('Channel');

              case 23:
                ++_cover__().b['6'][1];
                ++_cover__().s['21'];

                if (channel.isActivated) {
                  _context4.next = 31;
                  break;
                }

                ++_cover__().b['7'][0];
                ++_cover__().s['22'];
                throw new _errors.BadRequestError('Channel is not activated');

              case 31:
                ++_cover__().b['7'][1];

              case 32:
                ++_cover__().s['23'];
                connector = channel.connector;
                ++_cover__().s['24'];

                if (connector) {
                  _context4.next = 41;
                  break;
                }

                ++_cover__().b['8'][0];
                ++_cover__().s['25'];
                throw new _errors.NotFoundError('Connector');

              case 41:
                ++_cover__().b['8'][1];

              case 42:
                ++_cover__().s['26'];
                _context4.next = 45;
                return new models.Conversation({ connector: connector._id, chatId: chatId, channel: channel._id }).save();

              case 45:
                conversation = _context4.sent;
                ++_cover__().s['27'];

                connector.conversations.push(conversation._id);
                ++_cover__().s['28'];
                _context4.next = 51;
                return models.Connector.update({ _id: connector._id }, { $push: { conversations: conversation._id } });

              case 51:
                ++_cover__().s['29'];


                conversation.connector = connector;
                ++_cover__().s['30'];
                conversation.channel = channel;
                ++_cover__().s['31'];
                return _context4.abrupt('return', conversation);

              case 57:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function findOrCreateConversation(_x7, _x8) {
        return _ref4.apply(this, arguments);
      }

      return findOrCreateConversation;
    }()
  }]);
  return ConversationController;
}();

exports.default = ConversationController;