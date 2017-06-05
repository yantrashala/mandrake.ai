'use strict';

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _Logger = require('../utils/Logger');

var _Logger2 = _interopRequireDefault(_Logger);

var _utils = require('../utils');

var _format = require('../utils/format');

var _errors = require('../utils/errors');

var _responses = require('../utils/responses');

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _coverage__file;

function _cover__() {
  if (!_coverage__file) _coverage__file = _coverage__getInitialState();
  return _coverage__file;
}

function _coverage__getInitialState() {
  var path = '/Users/slahir/Projects/bot-connector/src/controllers/Messages.controller.js',
      hash = '4fcfe1b7181e0561d1264b841bd46963';
  var global = new Function('return this')();
  var coverage = global['__coverage__'] || (global['__coverage__'] = {});
  if (coverage[path] && coverage[path].hash === hash) return coverage[path];
  var coverageData = global['JSON'].parse('{"path":"/Users/slahir/Projects/bot-connector/src/controllers/Messages.controller.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0,"26":0,"27":0,"28":0,"29":0,"30":0,"31":0,"32":0,"33":0,"34":0,"35":0,"36":0,"37":0,"38":0,"39":0,"40":0,"41":0,"42":0,"43":0,"44":0,"45":0,"46":0,"47":0,"48":0,"49":0,"50":0,"51":0,"52":0,"53":0,"54":0,"55":0,"56":0,"57":0,"58":0,"59":0,"60":0,"61":0,"62":0,"63":0,"64":0,"65":0,"66":0,"67":0,"68":0,"69":0,"70":0,"71":0,"72":0,"73":0,"74":0,"75":0,"76":0,"77":0,"78":0,"79":0,"80":0,"81":0,"82":0},"b":{"1":[0,0],"2":[0,0],"3":[0,0],"4":[0,0],"5":[0,0],"6":[0,0],"7":[0,0],"8":[0,0],"9":[0,0],"10":[0,0],"11":[0,0],"12":[0,0],"13":[0,0],"14":[0,0],"15":[0,0]},"f":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0},"statementMap":{"1":{"start":{"line":11,"column":4},"end":{"line":14,"column":50}},"2":{"start":{"line":22,"column":4},"end":{"line":22,"column":101}},"3":{"start":{"line":27,"column":4},"end":{"line":27,"column":93}},"4":{"start":{"line":29,"column":4},"end":{"line":34,"column":5}},"5":{"start":{"line":30,"column":6},"end":{"line":30,"column":87}},"6":{"start":{"line":32,"column":6},"end":{"line":32,"column":111}},"7":{"start":{"line":33,"column":6},"end":{"line":33,"column":49}},"8":{"start":{"line":36,"column":4},"end":{"line":40,"column":6}},"9":{"start":{"line":42,"column":4},"end":{"line":42,"column":42}},"10":{"start":{"line":44,"column":4},"end":{"line":49,"column":6}},"11":{"start":{"line":56,"column":4},"end":{"line":58,"column":5}},"12":{"start":{"line":57,"column":6},"end":{"line":57,"column":63}},"13":{"start":{"line":60,"column":4},"end":{"line":64,"column":5}},"14":{"start":{"line":66,"column":4},"end":{"line":66,"column":54}},"15":{"start":{"line":61,"column":6},"end":{"line":63,"column":7}},"16":{"start":{"line":62,"column":8},"end":{"line":62,"column":65}},"17":{"start":{"line":73,"column":4},"end":{"line":73,"column":69}},"18":{"start":{"line":74,"column":4},"end":{"line":77,"column":5}},"19":{"start":{"line":75,"column":6},"end":{"line":75,"column":110}},"20":{"start":{"line":76,"column":6},"end":{"line":76,"column":49}},"21":{"start":{"line":79,"column":4},"end":{"line":87,"column":7}},"22":{"start":{"line":80,"column":6},"end":{"line":84,"column":8}},"23":{"start":{"line":85,"column":6},"end":{"line":85,"column":44}},"24":{"start":{"line":86,"column":6},"end":{"line":86,"column":30}},"25":{"start":{"line":89,"column":4},"end":{"line":93,"column":6}},"26":{"start":{"line":100,"column":4},"end":{"line":100,"column":49}},"27":{"start":{"line":102,"column":4},"end":{"line":104,"column":97}},"28":{"start":{"line":103,"column":25},"end":{"line":103,"column":104}},"29":{"start":{"line":104,"column":22},"end":{"line":104,"column":96}},"30":{"start":{"line":106,"column":4},"end":{"line":106,"column":61}},"31":{"start":{"line":113,"column":4},"end":{"line":113,"column":49}},"32":{"start":{"line":115,"column":4},"end":{"line":131,"column":5}},"33":{"start":{"line":133,"column":4},"end":{"line":133,"column":43}},"34":{"start":{"line":116,"column":6},"end":{"line":116,"column":20}},"35":{"start":{"line":119,"column":6},"end":{"line":128,"column":7}},"36":{"start":{"line":119,"column":29},"end":{"line":119,"column":32}},"37":{"start":{"line":120,"column":8},"end":{"line":127,"column":9}},"38":{"start":{"line":121,"column":10},"end":{"line":121,"column":81}},"39":{"start":{"line":122,"column":10},"end":{"line":122,"column":15}},"40":{"start":{"line":125,"column":10},"end":{"line":125,"column":65}},"41":{"start":{"line":126,"column":10},"end":{"line":126,"column":18}},"42":{"start":{"line":130,"column":6},"end":{"line":130,"column":77}},"43":{"start":{"line":130,"column":17},"end":{"line":130,"column":75}},"44":{"start":{"line":140,"column":4},"end":{"line":140,"column":56}},"45":{"start":{"line":141,"column":4},"end":{"line":141,"column":31}},"46":{"start":{"line":143,"column":4},"end":{"line":151,"column":5}},"47":{"start":{"line":144,"column":6},"end":{"line":144,"column":65}},"48":{"start":{"line":145,"column":11},"end":{"line":151,"column":5}},"49":{"start":{"line":146,"column":6},"end":{"line":150,"column":7}},"50":{"start":{"line":147,"column":8},"end":{"line":147,"column":39}},"51":{"start":{"line":149,"column":8},"end":{"line":149,"column":67}},"52":{"start":{"line":153,"column":4},"end":{"line":154,"column":60}},"53":{"start":{"line":156,"column":4},"end":{"line":156,"column":69}},"54":{"start":{"line":157,"column":4},"end":{"line":157,"column":64}},"55":{"start":{"line":157,"column":24},"end":{"line":157,"column":62}},"56":{"start":{"line":159,"column":4},"end":{"line":162,"column":5}},"57":{"start":{"line":164,"column":4},"end":{"line":167,"column":50}},"58":{"start":{"line":169,"column":4},"end":{"line":169,"column":89}},"59":{"start":{"line":173,"column":4},"end":{"line":188,"column":5}},"60":{"start":{"line":174,"column":31},"end":{"line":174,"column":39}},"61":{"start":{"line":174,"column":6},"end":{"line":174,"column":41}},"62":{"start":{"line":174,"column":31},"end":{"line":174,"column":39}},"63":{"start":{"line":176,"column":6},"end":{"line":179,"column":7}},"64":{"start":{"line":181,"column":6},"end":{"line":187,"column":8}},"65":{"start":{"line":182,"column":8},"end":{"line":186,"column":24}},"66":{"start":{"line":195,"column":4},"end":{"line":195,"column":39}},"67":{"start":{"line":196,"column":4},"end":{"line":196,"column":31}},"68":{"start":{"line":198,"column":4},"end":{"line":206,"column":5}},"69":{"start":{"line":199,"column":6},"end":{"line":199,"column":61}},"70":{"start":{"line":200,"column":11},"end":{"line":206,"column":5}},"71":{"start":{"line":201,"column":6},"end":{"line":205,"column":7}},"72":{"start":{"line":202,"column":8},"end":{"line":202,"column":39}},"73":{"start":{"line":204,"column":8},"end":{"line":204,"column":63}},"74":{"start":{"line":208,"column":4},"end":{"line":208,"column":93}},"75":{"start":{"line":210,"column":4},"end":{"line":210,"column":60}},"76":{"start":{"line":210,"column":22},"end":{"line":210,"column":58}},"77":{"start":{"line":212,"column":4},"end":{"line":218,"column":5}},"78":{"start":{"line":219,"column":4},"end":{"line":219,"column":82}},"79":{"start":{"line":213,"column":6},"end":{"line":217,"column":7}},"80":{"start":{"line":214,"column":8},"end":{"line":214,"column":77}},"81":{"start":{"line":216,"column":8},"end":{"line":216,"column":61}},"82":{"start":{"line":223,"column":0},"end":{"line":223,"column":35}}},"fnMap":{"1":{"name":null,"line":12,"loc":{"start":{"line":12,"column":12},"end":{"line":12,"column":100}}},"2":{"name":null,"line":12,"loc":{"start":{"line":12,"column":12},"end":{"line":12,"column":100}}},"3":{"name":null,"line":27,"loc":{"start":{"line":27,"column":56},"end":{"line":27,"column":92}}},"4":{"name":null,"line":27,"loc":{"start":{"line":27,"column":56},"end":{"line":27,"column":92}}},"5":{"name":null,"line":73,"loc":{"start":{"line":73,"column":56},"end":{"line":73,"column":68}}},"6":{"name":null,"line":79,"loc":{"start":{"line":79,"column":46},"end":{"line":87,"column":5}}},"7":{"name":null,"line":73,"loc":{"start":{"line":73,"column":56},"end":{"line":73,"column":68}}},"8":{"name":null,"line":79,"loc":{"start":{"line":79,"column":46},"end":{"line":87,"column":5}}},"9":{"name":null,"line":103,"loc":{"start":{"line":103,"column":14},"end":{"line":103,"column":104}}},"10":{"name":null,"line":104,"loc":{"start":{"line":104,"column":11},"end":{"line":104,"column":96}}},"11":{"name":null,"line":125,"loc":{"start":{"line":125,"column":28},"end":{"line":125,"column":64}}},"12":{"name":null,"line":125,"loc":{"start":{"line":125,"column":28},"end":{"line":125,"column":64}}},"13":{"name":null,"line":156,"loc":{"start":{"line":156,"column":55},"end":{"line":156,"column":68}}},"14":{"name":null,"line":156,"loc":{"start":{"line":156,"column":55},"end":{"line":156,"column":68}}},"15":{"name":null,"line":181,"loc":{"start":{"line":181,"column":24},"end":{"line":187,"column":7}}},"16":{"name":null,"line":181,"loc":{"start":{"line":181,"column":24},"end":{"line":187,"column":7}}},"17":{"name":null,"line":181,"loc":{"start":{"line":181,"column":24},"end":{"line":187,"column":7}}}},"branchMap":{"1":{"line":29,"type":"if","locations":[{"start":{"line":29,"column":22},"end":{"line":34,"column":5}},{"start":{"line":29,"column":22},"end":{"line":34,"column":5}}]},"2":{"line":56,"type":"if","locations":[{"start":{"line":56,"column":34},"end":{"line":58,"column":5}},{"start":{"line":56,"column":34},"end":{"line":58,"column":5}}]},"3":{"line":61,"type":"if","locations":[{"start":{"line":61,"column":42},"end":{"line":63,"column":7}},{"start":{"line":61,"column":42},"end":{"line":63,"column":7}}]},"4":{"line":74,"type":"if","locations":[{"start":{"line":74,"column":22},"end":{"line":77,"column":5}},{"start":{"line":74,"column":22},"end":{"line":77,"column":5}}]},"5":{"line":103,"type":"binary-expr","locations":[{"start":{"line":103,"column":25},"end":{"line":103,"column":49}},{"start":{"line":103,"column":53},"end":{"line":103,"column":104}}]},"6":{"line":130,"type":"if","locations":[{"start":{"line":130,"column":15},"end":{"line":130,"column":77}},{"start":{"line":130,"column":15},"end":{"line":130,"column":77}}]},"7":{"line":143,"type":"if","locations":[{"start":{"line":143,"column":19},"end":{"line":145,"column":5}},{"start":{"line":143,"column":19},"end":{"line":145,"column":5}}]},"8":{"line":145,"type":"if","locations":[{"start":{"line":145,"column":45},"end":{"line":151,"column":5}},{"start":{"line":145,"column":45},"end":{"line":151,"column":5}}]},"9":{"line":157,"type":"if","locations":[{"start":{"line":157,"column":22},"end":{"line":157,"column":64}},{"start":{"line":157,"column":22},"end":{"line":157,"column":64}}]},"10":{"line":174,"type":"if","locations":[{"start":{"line":174,"column":29},"end":{"line":174,"column":41}},{"start":{"line":174,"column":29},"end":{"line":174,"column":41}}]},"11":{"line":198,"type":"if","locations":[{"start":{"line":198,"column":47},"end":{"line":200,"column":5}},{"start":{"line":198,"column":47},"end":{"line":200,"column":5}}]},"12":{"line":198,"type":"binary-expr","locations":[{"start":{"line":198,"column":8},"end":{"line":198,"column":17}},{"start":{"line":198,"column":21},"end":{"line":198,"column":45}}]},"13":{"line":200,"type":"if","locations":[{"start":{"line":200,"column":45},"end":{"line":206,"column":5}},{"start":{"line":200,"column":45},"end":{"line":206,"column":5}}]},"14":{"line":210,"type":"if","locations":[{"start":{"line":210,"column":20},"end":{"line":210,"column":60}},{"start":{"line":210,"column":20},"end":{"line":210,"column":60}}]},"15":{"line":198,"type":"binary-expr","locations":[{"start":{"line":198,"column":8},"end":{"line":198,"column":45}},{"start":{"line":198,"column":8},"end":{"line":198,"column":45}}]}}}');
  coverageData.hash = hash;
  return coverage[path] = coverageData;
}

var MessagesController = function () {
  function MessagesController() {
    (0, _classCallCheck3.default)(this, MessagesController);
  }

  (0, _createClass3.default)(MessagesController, null, [{
    key: 'pipeMessage',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(id, message, options) {
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                ++_cover__().s['1'];
                return _context.abrupt('return', controllers.Conversations.findOrCreateConversation(id, options.chatId).then(function (conversation) {
                  ++_cover__().f['2'];
                  ++_cover__().f['1'];
                  return controllers.Messages.parseChannelMessage(conversation, message, options);
                }).then(controllers.Messages.saveMessage).then(controllers.Webhooks.sendMessageToBot));

              case 2:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function pipeMessage(_x, _x2, _x3) {
        return _ref.apply(this, arguments);
      }

      return pipeMessage;
    }()

    /**
     * Parse a message received
     * from a channel to the BC format
     */

  }, {
    key: 'parseChannelMessage',
    value: function parseChannelMessage(conversation, message, options) {
      ++_cover__().s['2'];

      return (0, _utils.invoke)(conversation.channel.type, 'parseChannelMessage', [conversation, message, options]);
    }

    /* Save a message in db and create the participant if necessary */

  }, {
    key: 'saveMessage',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(_ref3) {
        var _ref4 = (0, _slicedToArray3.default)(_ref3, 3),
            conversation = _ref4[0],
            message = _ref4[1],
            options = _ref4[2];

        var participant, newMessage;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                ++_cover__().s['3'];
                participant = _lodash2.default.find(conversation.participants, function (p) {
                  ++_cover__().f['4'];
                  ++_cover__().f['3'];
                  return p.senderId === options.senderId;
                });
                ++_cover__().s['4'];

                if (participant) {
                  _context2.next = 16;
                  break;
                }

                ++_cover__().b['1'][0];
                ++_cover__().s['5'];
                _context2.next = 8;
                return new models.Participant({ senderId: options.senderId }).save();

              case 8:
                participant = _context2.sent;
                ++_cover__().s['6'];
                _context2.next = 12;
                return models.Conversation.update({ _id: conversation._id }, { $push: { participants: participant._id } });

              case 12:
                ++_cover__().s['7'];

                conversation.participants.push(participant);
                _context2.next = 17;
                break;

              case 16:
                ++_cover__().b['1'][1];

              case 17:
                ++_cover__().s['8'];
                newMessage = new models.Message({
                  participant: participant._id,
                  conversation: conversation._id,
                  attachment: message.attachment
                });
                ++_cover__().s['9'];


                conversation.messages.push(newMessage);

                ++_cover__().s['10'];
                return _context2.abrupt('return', _promise2.default.all([conversation, newMessage.save(), options, models.Conversation.update({ _id: conversation._id }, { $push: { messages: newMessage._id } })]));

              case 23:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function saveMessage(_x4) {
        return _ref2.apply(this, arguments);
      }

      return saveMessage;
    }()

    /**
     * Check if all the messages received from the bot are well formatted
     */

  }, {
    key: 'bulkCheckMessages',
    value: function () {
      var _ref5 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3(_ref6) {
        var _ref7 = (0, _slicedToArray3.default)(_ref6, 3),
            conversation = _ref7[0],
            messages = _ref7[1],
            opts = _ref7[2];

        var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, message;

        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                ++_cover__().s['11'];

                if (Array.isArray(messages)) {
                  _context3.next = 7;
                  break;
                }

                ++_cover__().b['2'][0];
                ++_cover__().s['12'];
                throw new _errors.BadRequestError('Message is not well formated');

              case 7:
                ++_cover__().b['2'][1];

              case 8:
                ++_cover__().s['13'];
                _iteratorNormalCompletion = true;
                _didIteratorError = false;
                _iteratorError = undefined;
                _context3.prev = 12;
                _iterator = (0, _getIterator3.default)(messages);

              case 14:
                if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                  _context3.next = 27;
                  break;
                }

                message = _step.value;
                ++_cover__().s['15'];

                if ((0, _format.isValidFormatMessage)(message)) {
                  _context3.next = 23;
                  break;
                }

                ++_cover__().b['3'][0];
                ++_cover__().s['16'];
                throw new _errors.BadRequestError('Message is not well formated');

              case 23:
                ++_cover__().b['3'][1];

              case 24:
                _iteratorNormalCompletion = true;
                _context3.next = 14;
                break;

              case 27:
                _context3.next = 33;
                break;

              case 29:
                _context3.prev = 29;
                _context3.t0 = _context3['catch'](12);
                _didIteratorError = true;
                _iteratorError = _context3.t0;

              case 33:
                _context3.prev = 33;
                _context3.prev = 34;

                if (!_iteratorNormalCompletion && _iterator.return) {
                  _iterator.return();
                }

              case 36:
                _context3.prev = 36;

                if (!_didIteratorError) {
                  _context3.next = 39;
                  break;
                }

                throw _iteratorError;

              case 39:
                return _context3.finish(36);

              case 40:
                return _context3.finish(33);

              case 41:
                ++_cover__().s['14'];
                return _context3.abrupt('return', _promise2.default.all([conversation, messages, opts]));

              case 43:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this, [[12, 29, 33, 41], [34,, 36, 40]]);
      }));

      function bulkCheckMessages(_x5) {
        return _ref5.apply(this, arguments);
      }

      return bulkCheckMessages;
    }()

    /**
     * Save an array of message in db
     */

  }, {
    key: 'bulkSaveMessages',
    value: function () {
      var _ref8 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4(_ref9) {
        var _ref10 = (0, _slicedToArray3.default)(_ref9, 3),
            conversation = _ref10[0],
            messages = _ref10[1],
            opts = _ref10[2];

        var participant;
        return _regenerator2.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                ++_cover__().s['17'];
                participant = _lodash2.default.find(conversation.participants, function (p) {
                  ++_cover__().f['7'];
                  ++_cover__().f['5'];
                  return p.isBot;
                });
                ++_cover__().s['18'];

                if (participant) {
                  _context4.next = 13;
                  break;
                }

                ++_cover__().b['4'][0];
                ++_cover__().s['19'];
                _context4.next = 8;
                return new models.Participant({ senderId: conversation.connector._id, isBot: true }).save();

              case 8:
                participant = _context4.sent;
                ++_cover__().s['20'];

                conversation.participants.push(participant);
                _context4.next = 14;
                break;

              case 13:
                ++_cover__().b['4'][1];

              case 14:
                ++_cover__().s['21'];
                _context4.next = 17;
                return _promise2.default.all(messages.map(function (attachment) {
                  ++_cover__().f['8'];
                  ++_cover__().f['6'];
                  ++_cover__().s['22'];

                  var newMessage = new models.Message({
                    participant: participant._id,
                    conversation: conversation._id,
                    attachment: attachment
                  });
                  ++_cover__().s['23'];
                  conversation.messages.push(newMessage);
                  ++_cover__().s['24'];
                  return newMessage.save();
                }));

              case 17:
                messages = _context4.sent;
                ++_cover__().s['25'];
                return _context4.abrupt('return', _promise2.default.all([conversation.save(), messages, opts]));

              case 20:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function bulkSaveMessages(_x6) {
        return _ref8.apply(this, arguments);
      }

      return bulkSaveMessages;
    }()

    /**
     * Format an array of messages
     */

  }, {
    key: 'bulkFormatMessages',
    value: function bulkFormatMessages(_ref11) {
      var _ref12 = (0, _slicedToArray3.default)(_ref11, 3),
          conversation = _ref12[0],
          messages = _ref12[1],
          options = _ref12[2];

      ++_cover__().s['26'];

      var channelType = conversation.channel.type;

      ++_cover__().s['27'];
      messages = messages.filter(function (message) {
        return ++_cover__().f['9'], ++_cover__().s['28'], (++_cover__().b['5'][0], !message.attachment.only) || (++_cover__().b['5'][1], message.attachment.only.indexOf(channelType) !== -1);
      }).map(function (message) {
        return ++_cover__().f['10'], ++_cover__().s['29'], (0, _utils.invokeSync)(channelType, 'formatMessage', [conversation, message, options]);
      });

      ++_cover__().s['30'];
      return _promise2.default.resolve([conversation, messages, options]);
    }

    /**
     * Send an array of messages to the bot
     */

  }, {
    key: 'bulkSendMessages',
    value: function () {
      var _ref13 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee5(_ref14) {
        var _ref15 = (0, _slicedToArray3.default)(_ref14, 3),
            conversation = _ref15[0],
            messages = _ref15[1],
            opts = _ref15[2];

        var channelType, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, message, err, i;

        return _regenerator2.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                ++_cover__().s['31'];
                channelType = conversation.channel.type;
                ++_cover__().s['32'];
                _iteratorNormalCompletion2 = true;
                _didIteratorError2 = false;
                _iteratorError2 = undefined;
                _context5.prev = 6;
                _iterator2 = (0, _getIterator3.default)(messages);

              case 8:
                if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
                  _context5.next = 45;
                  break;
                }

                message = _step2.value;
                ++_cover__().s['34'];
                err = null;

                // Try 3 times to send the message

                ++_cover__().s['35'];
                i = 0;

              case 14:
                if (!(i < 3)) {
                  _context5.next = 34;
                  break;
                }

                ++_cover__().s['37'];
                _context5.prev = 16;
                ++_cover__().s['38'];
                _context5.next = 20;
                return (0, _utils.invoke)(channelType, 'sendMessage', [conversation, message, opts]);

              case 20:
                ++_cover__().s['39'];
                return _context5.abrupt('break', 34);

              case 24:
                _context5.prev = 24;
                _context5.t0 = _context5['catch'](16);
                ++_cover__().s['40'];
                _context5.next = 29;
                return new _promise2.default(function (resolve) {
                  ++_cover__().f['12'];
                  ++_cover__().f['11'];
                  return setTimeout(resolve, 2000);
                });

              case 29:
                ++_cover__().s['41'];

                err = _context5.t0;

              case 31:
                ++_cover__().s['36'], i++;
                _context5.next = 14;
                break;

              case 34:
                ++_cover__().s['42'];

                if (!err) {
                  _context5.next = 41;
                  break;
                }

                ++_cover__().b['6'][0];
                ++_cover__().s['43'];
                throw new _errors.ServiceError('Error while sending message', err);

              case 41:
                ++_cover__().b['6'][1];

              case 42:
                _iteratorNormalCompletion2 = true;
                _context5.next = 8;
                break;

              case 45:
                _context5.next = 51;
                break;

              case 47:
                _context5.prev = 47;
                _context5.t1 = _context5['catch'](6);
                _didIteratorError2 = true;
                _iteratorError2 = _context5.t1;

              case 51:
                _context5.prev = 51;
                _context5.prev = 52;

                if (!_iteratorNormalCompletion2 && _iterator2.return) {
                  _iterator2.return();
                }

              case 54:
                _context5.prev = 54;

                if (!_didIteratorError2) {
                  _context5.next = 57;
                  break;
                }

                throw _iteratorError2;

              case 57:
                return _context5.finish(54);

              case 58:
                return _context5.finish(51);

              case 59:
                ++_cover__().s['33'];
                return _context5.abrupt('return', [conversation, messages, opts]);

              case 61:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this, [[6, 47, 51, 59], [16, 24], [52,, 54, 58]]);
      }));

      function bulkSendMessages(_x7) {
        return _ref13.apply(this, arguments);
      }

      return bulkSendMessages;
    }()

    /**
     * Post from a bot to a channel
     */

  }, {
    key: 'postMessage',
    value: function () {
      var _ref16 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee6(req, res) {
        var _req$params, connector_id, conversation_id, messages, conversation, participant, opts;

        return _regenerator2.default.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                ++_cover__().s['44'];
                _req$params = req.params, connector_id = _req$params.connector_id, conversation_id = _req$params.conversation_id;
                ++_cover__().s['45'];
                messages = req.body.messages;
                ++_cover__().s['46'];

                if (messages) {
                  _context6.next = 11;
                  break;
                }

                ++_cover__().b['7'][0];
                ++_cover__().s['47'];
                throw new _errors.BadRequestError('Invalid \'messages\' parameter');

              case 11:
                ++_cover__().b['7'][1];
                ++_cover__().s['48'];

                if (!(typeof messages === 'string')) {
                  _context6.next = 27;
                  break;
                }

                ++_cover__().b['8'][0];
                ++_cover__().s['49'];
                _context6.prev = 16;
                ++_cover__().s['50'];

                messages = JSON.parse(messages);
                _context6.next = 25;
                break;

              case 21:
                _context6.prev = 21;
                _context6.t0 = _context6['catch'](16);
                ++_cover__().s['51'];
                throw new _errors.BadRequestError('Invalid \'messages\' parameter');

              case 25:
                _context6.next = 28;
                break;

              case 27:
                ++_cover__().b['8'][1];

              case 28:
                ++_cover__().s['52'];
                _context6.next = 31;
                return models.Conversation.findOne({ _id: conversation_id, connector: connector_id }).populate('participants channel connector').exec();

              case 31:
                conversation = _context6.sent;
                ++_cover__().s['53'];
                participant = conversation.participants.find(function (p) {
                  ++_cover__().f['14'];
                  ++_cover__().f['13'];
                  return !p.isBot;
                });
                ++_cover__().s['54'];

                if (participant) {
                  _context6.next = 41;
                  break;
                }

                ++_cover__().b['9'][0];
                ++_cover__().s['55'];
                throw new _errors.NotFoundError('Participant');

              case 41:
                ++_cover__().b['9'][1];

              case 42:
                ++_cover__().s['56'];
                opts = {
                  senderId: participant.senderId,
                  chatId: conversation.chatId
                };
                ++_cover__().s['57'];
                _context6.next = 47;
                return controllers.Messages.bulkCheckMessages([conversation, messages, opts]).then(controllers.Messages.bulkSaveMessages).then(controllers.Messages.bulkFormatMessages).then(controllers.Messages.bulkSendMessages);

              case 47:
                ++_cover__().s['58'];
                return _context6.abrupt('return', (0, _responses.renderCreated)(res, { results: null, message: 'Messages successfully posted' }));

              case 49:
              case 'end':
                return _context6.stop();
            }
          }
        }, _callee6, this, [[16, 21]]);
      }));

      function postMessage(_x8, _x9) {
        return _ref16.apply(this, arguments);
      }

      return postMessage;
    }()
  }, {
    key: 'postToConversation',
    value: function () {
      var _ref17 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee7(conversation, messages) {
        var _this = this;

        var _iteratorNormalCompletion3, _didIteratorError3, _iteratorError3, _loop, _iterator3, _step3, _ret;

        return _regenerator2.default.wrap(function _callee7$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                ++_cover__().s['59'];
                _iteratorNormalCompletion3 = true;
                _didIteratorError3 = false;
                _iteratorError3 = undefined;
                _context8.prev = 4;
                _loop = _regenerator2.default.mark(function _loop() {
                  var participant, opts;
                  return _regenerator2.default.wrap(function _loop$(_context7) {
                    while (1) {
                      switch (_context7.prev = _context7.next) {
                        case 0:
                          participant = _step3.value;
                          ++_cover__().s['61'];

                          if (!participant.isBot) {
                            _context7.next = 8;
                            break;
                          }

                          ++_cover__().b['10'][0];
                          ++_cover__().s['62'];
                          return _context7.abrupt('return', 'continue');

                        case 8:
                          ++_cover__().b['10'][1];

                        case 9:
                          ++_cover__().s['63'];
                          opts = {
                            chatId: conversation.chatId,
                            senderId: participant.senderId
                          };
                          ++_cover__().s['64'];
                          _context7.next = 14;
                          return new _promise2.default(function (resolve, reject) {
                            ++_cover__().f['17'];
                            ++_cover__().f['16'];
                            ++_cover__().f['15'];
                            ++_cover__().s['65'];

                            MessagesController.bulkSaveMessages([conversation, messages, opts]).then(MessagesController.bulkFormatMessages).then(MessagesController.bulkSendMessages).then(resolve).catch(reject);
                          });

                        case 14:
                        case 'end':
                          return _context7.stop();
                      }
                    }
                  }, _loop, _this);
                });
                _iterator3 = (0, _getIterator3.default)(conversation.participants);

              case 7:
                if (_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done) {
                  _context8.next = 16;
                  break;
                }

                return _context8.delegateYield(_loop(), 't0', 9);

              case 9:
                _ret = _context8.t0;

                if (!(_ret === 'continue')) {
                  _context8.next = 13;
                  break;
                }

                ++_cover__().s['60'];
                return _context8.abrupt('continue', 13);

              case 13:
                _iteratorNormalCompletion3 = true;
                _context8.next = 7;
                break;

              case 16:
                _context8.next = 22;
                break;

              case 18:
                _context8.prev = 18;
                _context8.t1 = _context8['catch'](4);
                _didIteratorError3 = true;
                _iteratorError3 = _context8.t1;

              case 22:
                _context8.prev = 22;
                _context8.prev = 23;

                if (!_iteratorNormalCompletion3 && _iterator3.return) {
                  _iterator3.return();
                }

              case 25:
                _context8.prev = 25;

                if (!_didIteratorError3) {
                  _context8.next = 28;
                  break;
                }

                throw _iteratorError3;

              case 28:
                return _context8.finish(25);

              case 29:
                return _context8.finish(22);

              case 30:
              case 'end':
                return _context8.stop();
            }
          }
        }, _callee7, this, [[4, 18, 22, 30], [23,, 25, 29]]);
      }));

      function postToConversation(_x10, _x11) {
        return _ref17.apply(this, arguments);
      }

      return postToConversation;
    }()

    /**
     * Post message to a bot
     */

  }, {
    key: 'postMessages',
    value: function () {
      var _ref18 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee8(req, res) {
        var connector_id, messages, connector, _iteratorNormalCompletion4, _didIteratorError4, _iteratorError4, _iterator4, _step4, conversation;

        return _regenerator2.default.wrap(function _callee8$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                ++_cover__().s['66'];
                connector_id = req.params.connector_id;
                ++_cover__().s['67'];
                messages = req.body.messages;
                ++_cover__().s['68'];

                if (!((++_cover__().b['15'][0], (++_cover__().b['12'][0], !messages)) || (++_cover__().b['15'][1], (++_cover__().b['12'][1], !Array.isArray(messages))))) {
                  _context9.next = 11;
                  break;
                }

                ++_cover__().b['11'][0];
                ++_cover__().s['69'];
                throw new _errors.BadRequestError('Invalid messages parameter');

              case 11:
                ++_cover__().b['11'][1];
                ++_cover__().s['70'];

                if (!(typeof messages === 'string')) {
                  _context9.next = 27;
                  break;
                }

                ++_cover__().b['13'][0];
                ++_cover__().s['71'];
                _context9.prev = 16;
                ++_cover__().s['72'];

                messages = JSON.parse(messages);
                _context9.next = 25;
                break;

              case 21:
                _context9.prev = 21;
                _context9.t0 = _context9['catch'](16);
                ++_cover__().s['73'];
                throw new _errors.BadRequestError('Invalid messages parameter');

              case 25:
                _context9.next = 28;
                break;

              case 27:
                ++_cover__().b['13'][1];

              case 28:
                ++_cover__().s['74'];
                _context9.next = 31;
                return models.Connector.findById(connector_id).populate('conversations');

              case 31:
                connector = _context9.sent;
                ++_cover__().s['75'];

                if (connector) {
                  _context9.next = 39;
                  break;
                }

                ++_cover__().b['14'][0];
                ++_cover__().s['76'];
                throw new _errors.NotFoundError('Connector');

              case 39:
                ++_cover__().b['14'][1];

              case 40:
                ++_cover__().s['77'];
                _iteratorNormalCompletion4 = true;
                _didIteratorError4 = false;
                _iteratorError4 = undefined;
                _context9.prev = 44;
                _iterator4 = (0, _getIterator3.default)(connector.conversations);

              case 46:
                if (_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done) {
                  _context9.next = 62;
                  break;
                }

                conversation = _step4.value;
                ++_cover__().s['79'];
                _context9.prev = 49;
                ++_cover__().s['80'];
                _context9.next = 53;
                return controllers.Messages.postToConversation(conversation, messages);

              case 53:
                _context9.next = 59;
                break;

              case 55:
                _context9.prev = 55;
                _context9.t1 = _context9['catch'](49);
                ++_cover__().s['81'];

                _Logger2.default.error('Error while broadcasting message', _context9.t1);

              case 59:
                _iteratorNormalCompletion4 = true;
                _context9.next = 46;
                break;

              case 62:
                _context9.next = 68;
                break;

              case 64:
                _context9.prev = 64;
                _context9.t2 = _context9['catch'](44);
                _didIteratorError4 = true;
                _iteratorError4 = _context9.t2;

              case 68:
                _context9.prev = 68;
                _context9.prev = 69;

                if (!_iteratorNormalCompletion4 && _iterator4.return) {
                  _iterator4.return();
                }

              case 71:
                _context9.prev = 71;

                if (!_didIteratorError4) {
                  _context9.next = 74;
                  break;
                }

                throw _iteratorError4;

              case 74:
                return _context9.finish(71);

              case 75:
                return _context9.finish(68);

              case 76:
                ++_cover__().s['78'];

                (0, _responses.renderCreated)(res, { results: null, message: 'Messages successfully posted' });

              case 78:
              case 'end':
                return _context9.stop();
            }
          }
        }, _callee8, this, [[16, 21], [44, 64, 68, 76], [49, 55], [69,, 71, 75]]);
      }));

      function postMessages(_x12, _x13) {
        return _ref18.apply(this, arguments);
      }

      return postMessages;
    }()
  }]);
  return MessagesController;
}();

++_cover__().s['82'];


module.exports = MessagesController;