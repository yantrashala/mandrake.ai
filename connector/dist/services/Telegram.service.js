'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _superagent = require('superagent');

var _superagent2 = _interopRequireDefault(_superagent);

var _superagentPromise = require('superagent-promise');

var _superagentPromise2 = _interopRequireDefault(_superagentPromise);

var _Template = require('./Template.service');

var _Template2 = _interopRequireDefault(_Template);

var _errors = require('../utils/errors');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _coverage__file;

function _cover__() {
  if (!_coverage__file) _coverage__file = _coverage__getInitialState();
  return _coverage__file;
}

function _coverage__getInitialState() {
  var path = '/Users/slahir/Projects/bot-connector/src/services/Telegram.service.js',
      hash = '03c78ef39a5dc33d5578397f2420694e';
  var global = new Function('return this')();
  var coverage = global['__coverage__'] || (global['__coverage__'] = {});
  if (coverage[path] && coverage[path].hash === hash) return coverage[path];
  var coverageData = global['JSON'].parse('{"path":"/Users/slahir/Projects/bot-connector/src/services/Telegram.service.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0,"26":0,"27":0,"28":0,"29":0,"30":0,"31":0,"32":0,"33":0,"34":0,"35":0,"36":0,"37":0,"38":0,"39":0,"40":0,"41":0,"42":0,"43":0,"44":0,"45":0,"46":0,"47":0,"48":0,"49":0,"50":0},"b":{"1":[0,0],"2":[0,0],"3":[0,0],"4":[0,0,0,0,0],"5":[0,0],"6":[0,0],"7":[0,0],"8":[0,0],"9":[0,0]},"f":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0},"statementMap":{"1":{"start":{"line":8,"column":0},"end":{"line":8,"column":52}},"2":{"start":{"line":13,"column":4},"end":{"line":13,"column":65}},"3":{"start":{"line":14,"column":4},"end":{"line":14,"column":62}},"4":{"start":{"line":16,"column":4},"end":{"line":18,"column":5}},"5":{"start":{"line":17,"column":6},"end":{"line":17,"column":82}},"6":{"start":{"line":23,"column":4},"end":{"line":25,"column":5}},"7":{"start":{"line":24,"column":6},"end":{"line":24,"column":51}},"8":{"start":{"line":30,"column":4},"end":{"line":34,"column":5}},"9":{"start":{"line":31,"column":6},"end":{"line":31,"column":54}},"10":{"start":{"line":33,"column":6},"end":{"line":33,"column":30}},"11":{"start":{"line":42,"column":4},"end":{"line":50,"column":5}},"12":{"start":{"line":43,"column":6},"end":{"line":43,"column":94}},"13":{"start":{"line":45,"column":6},"end":{"line":47,"column":7}},"14":{"start":{"line":46,"column":8},"end":{"line":46,"column":87}},"15":{"start":{"line":49,"column":6},"end":{"line":49,"column":30}},"16":{"start":{"line":55,"column":4},"end":{"line":55,"column":47}},"17":{"start":{"line":56,"column":4},"end":{"line":56,"column":18}},"18":{"start":{"line":61,"column":4},"end":{"line":64,"column":5}},"19":{"start":{"line":69,"column":4},"end":{"line":69,"column":50}},"20":{"start":{"line":70,"column":4},"end":{"line":70,"column":59}},"21":{"start":{"line":71,"column":4},"end":{"line":71,"column":49}},"22":{"start":{"line":73,"column":4},"end":{"line":78,"column":6}},"23":{"start":{"line":83,"column":4},"end":{"line":83,"column":40}},"24":{"start":{"line":84,"column":4},"end":{"line":84,"column":49}},"25":{"start":{"line":85,"column":4},"end":{"line":90,"column":5}},"26":{"start":{"line":92,"column":4},"end":{"line":117,"column":5}},"27":{"start":{"line":93,"column":9},"end":{"line":93,"column":18}},"28":{"start":{"line":95,"column":9},"end":{"line":95,"column":23}},"29":{"start":{"line":96,"column":9},"end":{"line":96,"column":15}},"30":{"start":{"line":107,"column":9},"end":{"line":107,"column":21}},"31":{"start":{"line":94,"column":6},"end":{"line":94,"column":55}},"32":{"start":{"line":97,"column":6},"end":{"line":106,"column":7}},"33":{"start":{"line":103,"column":52},"end":{"line":103,"column":73}},"34":{"start":{"line":108,"column":6},"end":{"line":114,"column":7}},"35":{"start":{"line":110,"column":71},"end":{"line":113,"column":9}},"36":{"start":{"line":112,"column":65},"end":{"line":112,"column":86}},"37":{"start":{"line":116,"column":6},"end":{"line":116,"column":40}},"38":{"start":{"line":122,"column":4},"end":{"line":122,"column":54}},"39":{"start":{"line":123,"column":4},"end":{"line":123,"column":80}},"40":{"start":{"line":125,"column":4},"end":{"line":141,"column":5}},"41":{"start":{"line":126,"column":6},"end":{"line":138,"column":7}},"42":{"start":{"line":127,"column":8},"end":{"line":129,"column":9}},"43":{"start":{"line":128,"column":10},"end":{"line":128,"column":70}},"44":{"start":{"line":130,"column":8},"end":{"line":130,"column":99}},"45":{"start":{"line":131,"column":13},"end":{"line":138,"column":7}},"46":{"start":{"line":132,"column":8},"end":{"line":135,"column":10}},"47":{"start":{"line":133,"column":10},"end":{"line":133,"column":103}},"48":{"start":{"line":134,"column":10},"end":{"line":134,"column":95}},"49":{"start":{"line":137,"column":8},"end":{"line":137,"column":75}},"50":{"start":{"line":140,"column":6},"end":{"line":140,"column":30}}},"fnMap":{"1":{"name":null,"line":103,"loc":{"start":{"line":103,"column":30},"end":{"line":103,"column":73}}},"2":{"name":null,"line":110,"loc":{"start":{"line":110,"column":26},"end":{"line":113,"column":10}}},"3":{"name":null,"line":112,"loc":{"start":{"line":112,"column":43},"end":{"line":112,"column":86}}},"4":{"name":null,"line":132,"loc":{"start":{"line":132,"column":21},"end":{"line":135,"column":9}}},"5":{"name":null,"line":132,"loc":{"start":{"line":132,"column":21},"end":{"line":135,"column":9}}},"6":{"name":null,"line":132,"loc":{"start":{"line":132,"column":21},"end":{"line":135,"column":9}}},"7":{"name":null,"line":132,"loc":{"start":{"line":132,"column":21},"end":{"line":135,"column":9}}}},"branchMap":{"1":{"line":16,"type":"if","locations":[{"start":{"line":16,"column":24},"end":{"line":18,"column":5}},{"start":{"line":16,"column":24},"end":{"line":18,"column":5}}]},"2":{"line":23,"type":"if","locations":[{"start":{"line":23,"column":20},"end":{"line":25,"column":5}},{"start":{"line":23,"column":20},"end":{"line":25,"column":5}}]},"3":{"line":45,"type":"if","locations":[{"start":{"line":45,"column":26},"end":{"line":47,"column":7}},{"start":{"line":45,"column":26},"end":{"line":47,"column":7}}]},"4":{"line":92,"type":"switch","locations":[{"start":{"line":93,"column":4},"end":{"line":94,"column":55}},{"start":{"line":95,"column":4},"end":{"line":95,"column":24}},{"start":{"line":96,"column":4},"end":{"line":106,"column":7}},{"start":{"line":107,"column":4},"end":{"line":114,"column":7}},{"start":{"line":115,"column":4},"end":{"line":116,"column":40}}]},"5":{"line":123,"type":"cond-expr","locations":[{"start":{"line":123,"column":37},"end":{"line":123,"column":50}},{"start":{"line":123,"column":53},"end":{"line":123,"column":80}}]},"6":{"line":126,"type":"if","locations":[{"start":{"line":126,"column":27},"end":{"line":131,"column":7}},{"start":{"line":126,"column":27},"end":{"line":131,"column":7}}]},"7":{"line":127,"type":"if","locations":[{"start":{"line":127,"column":35},"end":{"line":129,"column":9}},{"start":{"line":127,"column":35},"end":{"line":129,"column":9}}]},"8":{"line":131,"type":"if","locations":[{"start":{"line":131,"column":40},"end":{"line":136,"column":7}},{"start":{"line":136,"column":13},"end":{"line":138,"column":7}}]},"9":{"line":123,"type":"cond-expr","locations":[{"start":{"line":123,"column":19},"end":{"line":123,"column":80}},{"start":{"line":123,"column":19},"end":{"line":123,"column":80}}]}}}');
  coverageData.hash = hash;
  return coverage[path] = coverageData;
}

++_cover__().s['1'];


var agent = (0, _superagentPromise2.default)(_superagent2.default, _promise2.default);

var TelegramService = function (_ServiceTemplate) {
  (0, _inherits3.default)(TelegramService, _ServiceTemplate);

  function TelegramService() {
    (0, _classCallCheck3.default)(this, TelegramService);
    return (0, _possibleConstructorReturn3.default)(this, (TelegramService.__proto__ || (0, _getPrototypeOf2.default)(TelegramService)).apply(this, arguments));
  }

  (0, _createClass3.default)(TelegramService, null, [{
    key: 'setWebhook',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(token, webhook) {
        var url, _ref2, status;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                ++_cover__().s['2'];
                url = 'https://api.telegram.org/bot' + token + '/setWebhook';
                ++_cover__().s['3'];
                _context.next = 5;
                return agent.post(url, { url: webhook });

              case 5:
                _ref2 = _context.sent;
                status = _ref2.status;
                ++_cover__().s['4'];

                if (!(status !== 200)) {
                  _context.next = 14;
                  break;
                }

                ++_cover__().b['1'][0];
                ++_cover__().s['5'];
                throw new _errors.BadRequestError('[Telegram][Status ' + status + '] Cannot set Webhook');

              case 14:
                ++_cover__().b['1'][1];

              case 15:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function setWebhook(_x, _x2) {
        return _ref.apply(this, arguments);
      }

      return setWebhook;
    }()

    /* Telegram token is required */

  }, {
    key: 'checkParamsValidity',
    value: function checkParamsValidity(req) {
      ++_cover__().s['6'];

      if (!req.token) {
        ++_cover__().b['2'][0];
        ++_cover__().s['7'];

        throw new _errors.ValidationError('token', 'missing');
      } else {
        ++_cover__().b['2'][1];
      }
    }

    /* Call when a channel is created, set webhook */

  }, {
    key: 'onChannelCreate',
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(_ref4) {
        var token = _ref4.token,
            webhook = _ref4.webhook,
            channel = (0, _objectWithoutProperties3.default)(_ref4, ['token', 'webhook']);
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                ++_cover__().s['8'];
                _context2.prev = 1;
                ++_cover__().s['9'];
                _context2.next = 5;
                return TelegramService.setWebhook(token, webhook);

              case 5:
                _context2.next = 11;
                break;

              case 7:
                _context2.prev = 7;
                _context2.t0 = _context2['catch'](1);
                ++_cover__().s['10'];

                channel.isErrored = true;

              case 11:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this, [[1, 7]]);
      }));

      function onChannelCreate(_x3) {
        return _ref3.apply(this, arguments);
      }

      return onChannelCreate;
    }()

    /* Call when a channel is updated, update webhook */

  }, {
    key: 'onChannelDelete',


    /* Call when a channel is deleted */
    value: function () {
      var _ref5 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3(_ref6) {
        var token = _ref6.token,
            channel = (0, _objectWithoutProperties3.default)(_ref6, ['token']);

        var _ref7, status;

        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                ++_cover__().s['11'];
                _context3.prev = 1;
                ++_cover__().s['12'];
                _context3.next = 5;
                return agent.get('https://api.telegram.org/bot' + token + '/deleteWebhook');

              case 5:
                _ref7 = _context3.sent;
                status = _ref7.status;
                ++_cover__().s['13'];

                if (!(status !== 200)) {
                  _context3.next = 14;
                  break;
                }

                ++_cover__().b['3'][0];
                ++_cover__().s['14'];
                throw new _errors.BadRequestError('[Telegram][Status ' + status + '] Cannot delete Webhook');

              case 14:
                ++_cover__().b['3'][1];

              case 15:
                _context3.next = 21;
                break;

              case 17:
                _context3.prev = 17;
                _context3.t0 = _context3['catch'](1);
                ++_cover__().s['15'];

                channel.isErrored = true;

              case 21:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this, [[1, 17]]);
      }));

      function onChannelDelete(_x4) {
        return _ref5.apply(this, arguments);
      }

      return onChannelDelete;
    }()

    /* Call when a message is received, before the pipeline */

  }, {
    key: 'beforePipeline',
    value: function beforePipeline(req, res, channel) {
      ++_cover__().s['16'];

      res.status(200).send({ status: 'success' });
      ++_cover__().s['17'];
      return channel;
    }

    // /* Call before entering the pipeline, to build the options object */

  }, {
    key: 'extractOptions',
    value: function extractOptions(_ref8) {
      var body = _ref8.body;
      ++_cover__().s['18'];

      return {
        chatId: _lodash2.default.get(body, 'message.chat.id'),
        senderId: _lodash2.default.get(body, 'message.chat.id')
      };
    }

    /* Call to parse a message received from a channel */

  }, {
    key: 'parseChannelMessage',
    value: function parseChannelMessage(conversation, _ref9, options) {
      var message = _ref9.message;
      ++_cover__().s['19'];

      var type = (0, _keys2.default)(message).slice(-1)[0]; // Get the key name of last message element
      ++_cover__().s['20'];
      var channelType = _lodash2.default.get(conversation, 'channel.type');
      ++_cover__().s['21'];
      var content = _lodash2.default.get(message, '' + type, '');

      ++_cover__().s['22'];
      return [conversation, {
        attachment: { type: type, content: content },
        channelType: channelType
      }, options];
    }

    /* Call to format a message received by the bot */

  }, {
    key: 'formatMessage',
    value: function formatMessage(_ref10, _ref11, _ref12) {
      var channel = _ref10.channel,
          chatId = _ref10.chatId;
      var attachment = _ref11.attachment;
      var senderId = _ref12.senderId;
      ++_cover__().s['23'];
      var type = attachment.type,
          content = attachment.content;
      ++_cover__().s['24'];

      var buttons = _lodash2.default.get(content, 'buttons', []);
      ++_cover__().s['25'];
      var reply = {
        chatId: chatId,
        type: type,
        to: senderId,
        token: _lodash2.default.get(channel, 'token')
      };

      ++_cover__().s['26'];
      switch (type) {
        case (++_cover__().s['27'], 'picture'):
          ++_cover__().b['4'][0]
          ++_cover__().s['31'];

          return (0, _extends3.default)({}, reply, { type: 'photo', body: content });
        case (++_cover__().s['28'], 'quickReplies'):
          ++_cover__().b['4'][1]

        case (++_cover__().s['29'], 'card'):
          ++_cover__().b['4'][2]
          ++_cover__().s['32'];

          return (0, _extends3.default)({}, reply, {
            type: 'card',
            photo: _lodash2.default.get(content, 'imageUrl'),
            body: ['*' + _lodash2.default.get(content, 'title', '') + '*'].concat('```').concat(buttons.map(function (_ref13) {
              var title = _ref13.title,
                  value = _ref13.value;
              return ++_cover__().f['1'], ++_cover__().s['33'], value + ' - ' + title;
            })).concat('```').join('\n')
          });
        case (++_cover__().s['30'], 'carouselle'):
          ++_cover__().b['4'][3]
          ++_cover__().s['34'];

          return (0, _extends3.default)({}, reply, {
            body: content.map(function (_ref14) {
              var imageUrl = _ref14.imageUrl,
                  buttons = _ref14.buttons,
                  title = _ref14.title,
                  subtitle = _ref14.subtitle;
              return ++_cover__().f['2'], ++_cover__().s['35'], {
                header: ['*' + title + '*'].concat('[' + subtitle + '](' + imageUrl + ')').join('\n'),
                text: ['```'].concat(buttons.map(function (_ref15) {
                  var title = _ref15.title,
                      value = _ref15.value;
                  return ++_cover__().f['3'], ++_cover__().s['36'], value + ' - ' + title;
                })).concat('```').join('\n')
              };
            })
          });
        default:
          ++_cover__().b['4'][4]
          ++_cover__().s['37'];

          return (0, _extends3.default)({}, reply, { body: content });
      }
    }

    /* Call to send a message to a bot */

  }, {
    key: 'sendMessage',
    value: function () {
      var _ref16 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee5(_ref17, _ref18) {
        var _this2 = this;

        var channel = _ref17.channel;
        var token = _ref18.token,
            type = _ref18.type,
            to = _ref18.to,
            body = _ref18.body,
            photo = _ref18.photo;
        var url, method;
        return _regenerator2.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                ++_cover__().s['38'];
                url = 'https://api.telegram.org/bot' + token;
                ++_cover__().s['39'];
                method = type === 'text' ? (++_cover__().b['9'][0], (++_cover__().b['5'][0], 'sendMessage')) : (++_cover__().b['9'][1], (++_cover__().b['5'][1], 'send' + _lodash2.default.capitalize(type)));
                ++_cover__().s['40'];
                _context5.prev = 5;
                ++_cover__().s['41'];

                if (!(type === 'card')) {
                  _context5.next = 23;
                  break;
                }

                ++_cover__().b['6'][0];
                ++_cover__().s['42'];

                if (_lodash2.default.isUndefined(photo)) {
                  _context5.next = 17;
                  break;
                }

                ++_cover__().b['7'][0];
                ++_cover__().s['43'];
                _context5.next = 15;
                return agent.post(url + '/sendPhoto', { chat_id: to, photo: photo });

              case 15:
                _context5.next = 18;
                break;

              case 17:
                ++_cover__().b['7'][1];

              case 18:
                ++_cover__().s['44'];
                _context5.next = 21;
                return agent.post(url + '/sendMessage', { chat_id: to, text: body, parse_mode: 'Markdown' });

              case 21:
                _context5.next = 35;
                break;

              case 23:
                ++_cover__().b['6'][1];
                ++_cover__().s['45'];

                if (!(type === 'carouselle')) {
                  _context5.next = 31;
                  break;
                }

                ++_cover__().b['8'][0];
                ++_cover__().s['46'];

                body.forEach(function () {
                  var _ref19 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4(_ref20) {
                    ++_cover__().f['7'];
                    ++_cover__().f['6'];
                    var header = _ref20.header,
                        text = _ref20.text;
                    return _regenerator2.default.wrap(function _callee4$(_context4) {
                      while (1) {
                        switch (_context4.prev = _context4.next) {
                          case 0:
                            ++_cover__().f['5'];
                            ++_cover__().f['4'];
                            ++_cover__().s['47'];
                            _context4.next = 5;
                            return agent.post(url + '/sendMessage', { chat_id: to, text: header, parse_mode: 'Markdown' });

                          case 5:
                            ++_cover__().s['48'];
                            _context4.next = 8;
                            return agent.post(url + '/sendMessage', { chat_id: to, text: text, parse_mode: 'Markdown' });

                          case 8:
                          case 'end':
                            return _context4.stop();
                        }
                      }
                    }, _callee4, _this2);
                  }));

                  return function (_x7) {
                    return _ref19.apply(this, arguments);
                  };
                }());
                _context5.next = 35;
                break;

              case 31:
                ++_cover__().b['8'][1];
                ++_cover__().s['49'];
                _context5.next = 35;
                return agent.post(url + '/' + method, (0, _defineProperty3.default)({ chat_id: to }, type, body));

              case 35:
                _context5.next = 41;
                break;

              case 37:
                _context5.prev = 37;
                _context5.t0 = _context5['catch'](5);
                ++_cover__().s['50'];

                channel.isErrored = true;

              case 41:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this, [[5, 37]]);
      }));

      function sendMessage(_x5, _x6) {
        return _ref16.apply(this, arguments);
      }

      return sendMessage;
    }()
  }]);
  return TelegramService;
}(_Template2.default);

TelegramService.onChannelUpdate = TelegramService.onChannelCreate;
exports.default = TelegramService;