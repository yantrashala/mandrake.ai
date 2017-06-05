'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

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

var _superagent = require('superagent');

var _superagent2 = _interopRequireDefault(_superagent);

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
  var path = '/Users/slahir/Projects/bot-connector/src/services/Kik.service.js',
      hash = '05ac19999585b66d5c3c94e29cc3699c';
  var global = new Function('return this')();
  var coverage = global['__coverage__'] || (global['__coverage__'] = {});
  if (coverage[path] && coverage[path].hash === hash) return coverage[path];
  var coverageData = global['JSON'].parse('{"path":"/Users/slahir/Projects/bot-connector/src/services/Kik.service.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0,"26":0,"27":0,"28":0,"29":0,"30":0,"31":0,"32":0,"33":0,"34":0,"35":0,"36":0,"37":0,"38":0,"39":0,"40":0,"41":0,"42":0,"43":0,"44":0,"45":0,"46":0,"47":0,"48":0,"49":0,"50":0,"51":0,"52":0,"53":0,"54":0,"55":0,"56":0,"57":0,"58":0,"59":0,"60":0,"61":0,"62":0,"63":0,"64":0,"65":0,"66":0,"67":0,"68":0,"69":0,"70":0,"71":0,"72":0,"73":0,"74":0,"75":0},"b":{"1":[0,0],"2":[0,0],"3":[0,0],"4":[0,0],"5":[0,0],"6":[0,0],"7":[0,0,0,0,0],"8":[0,0],"9":[0,0],"10":[0,0],"11":[0,0],"12":[0,0],"13":[0,0],"14":[0,0],"15":[0,0],"16":[0,0],"17":[0,0],"18":[0,0],"19":[0,0],"20":[0,0],"21":[0,0],"22":[0,0]},"f":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0},"statementMap":{"1":{"start":{"line":6,"column":0},"end":{"line":6,"column":75}},"2":{"start":{"line":17,"column":4},"end":{"line":25,"column":5}},"3":{"start":{"line":27,"column":4},"end":{"line":37,"column":5}},"4":{"start":{"line":28,"column":6},"end":{"line":33,"column":8}},"5":{"start":{"line":29,"column":8},"end":{"line":32,"column":54}},"6":{"start":{"line":34,"column":6},"end":{"line":34,"column":31}},"7":{"start":{"line":36,"column":6},"end":{"line":36,"column":30}},"8":{"start":{"line":41,"column":4},"end":{"line":41,"column":45}},"9":{"start":{"line":48,"column":4},"end":{"line":50,"column":5}},"10":{"start":{"line":49,"column":6},"end":{"line":49,"column":32}},"11":{"start":{"line":51,"column":4},"end":{"line":51,"column":26}},"12":{"start":{"line":58,"column":4},"end":{"line":58,"column":40}},"13":{"start":{"line":60,"column":4},"end":{"line":60,"column":77}},"14":{"start":{"line":60,"column":19},"end":{"line":60,"column":75}},"15":{"start":{"line":61,"column":4},"end":{"line":61,"column":81}},"16":{"start":{"line":61,"column":21},"end":{"line":61,"column":79}},"17":{"start":{"line":63,"column":4},"end":{"line":63,"column":15}},"18":{"start":{"line":70,"column":4},"end":{"line":70,"column":24}},"19":{"start":{"line":72,"column":4},"end":{"line":75,"column":5}},"20":{"start":{"line":82,"column":4},"end":{"line":82,"column":18}},"21":{"start":{"line":89,"column":4},"end":{"line":89,"column":44}},"22":{"start":{"line":90,"column":4},"end":{"line":93,"column":5}},"23":{"start":{"line":95,"column":4},"end":{"line":110,"column":5}},"24":{"start":{"line":96,"column":9},"end":{"line":96,"column":15}},"25":{"start":{"line":99,"column":9},"end":{"line":99,"column":15}},"26":{"start":{"line":102,"column":9},"end":{"line":102,"column":18}},"27":{"start":{"line":105,"column":9},"end":{"line":105,"column":16}},"28":{"start":{"line":97,"column":6},"end":{"line":97,"column":67}},"29":{"start":{"line":98,"column":6},"end":{"line":98,"column":11}},"30":{"start":{"line":100,"column":6},"end":{"line":100,"column":66}},"31":{"start":{"line":101,"column":6},"end":{"line":101,"column":11}},"32":{"start":{"line":103,"column":6},"end":{"line":103,"column":72}},"33":{"start":{"line":104,"column":6},"end":{"line":104,"column":11}},"34":{"start":{"line":106,"column":6},"end":{"line":106,"column":72}},"35":{"start":{"line":107,"column":6},"end":{"line":107,"column":11}},"36":{"start":{"line":109,"column":6},"end":{"line":109,"column":55}},"37":{"start":{"line":111,"column":4},"end":{"line":111,"column":36}},"38":{"start":{"line":118,"column":4},"end":{"line":118,"column":20}},"39":{"start":{"line":119,"column":4},"end":{"line":119,"column":24}},"40":{"start":{"line":121,"column":4},"end":{"line":164,"column":5}},"41":{"start":{"line":122,"column":6},"end":{"line":122,"column":125}},"42":{"start":{"line":124,"column":11},"end":{"line":164,"column":5}},"43":{"start":{"line":125,"column":6},"end":{"line":125,"column":127}},"44":{"start":{"line":127,"column":11},"end":{"line":164,"column":5}},"45":{"start":{"line":128,"column":6},"end":{"line":128,"column":129}},"46":{"start":{"line":130,"column":11},"end":{"line":164,"column":5}},"47":{"start":{"line":131,"column":6},"end":{"line":131,"column":41}},"48":{"start":{"line":132,"column":6},"end":{"line":132,"column":119}},"49":{"start":{"line":132,"column":81},"end":{"line":132,"column":117}},"50":{"start":{"line":133,"column":6},"end":{"line":133,"column":125}},"51":{"start":{"line":135,"column":11},"end":{"line":164,"column":5}},"52":{"start":{"line":136,"column":6},"end":{"line":141,"column":7}},"53":{"start":{"line":137,"column":8},"end":{"line":137,"column":58}},"54":{"start":{"line":138,"column":8},"end":{"line":140,"column":10}},"55":{"start":{"line":139,"column":10},"end":{"line":139,"column":116}},"56":{"start":{"line":139,"column":49},"end":{"line":139,"column":114}},"57":{"start":{"line":142,"column":6},"end":{"line":144,"column":7}},"58":{"start":{"line":143,"column":8},"end":{"line":143,"column":116}},"59":{"start":{"line":145,"column":6},"end":{"line":147,"column":7}},"60":{"start":{"line":146,"column":8},"end":{"line":146,"column":124}},"61":{"start":{"line":148,"column":6},"end":{"line":148,"column":51}},"62":{"start":{"line":149,"column":11},"end":{"line":164,"column":5}},"63":{"start":{"line":150,"column":6},"end":{"line":153,"column":7}},"64":{"start":{"line":151,"column":8},"end":{"line":151,"column":43}},"65":{"start":{"line":152,"column":8},"end":{"line":152,"column":114}},"66":{"start":{"line":152,"column":70},"end":{"line":152,"column":112}},"67":{"start":{"line":154,"column":6},"end":{"line":162,"column":8}},"68":{"start":{"line":156,"column":8},"end":{"line":158,"column":9}},"69":{"start":{"line":157,"column":10},"end":{"line":157,"column":104}},"70":{"start":{"line":159,"column":8},"end":{"line":161,"column":9}},"71":{"start":{"line":160,"column":10},"end":{"line":160,"column":101}},"72":{"start":{"line":163,"column":6},"end":{"line":163,"column":51}},"73":{"start":{"line":166,"column":4},"end":{"line":166,"column":16}},"74":{"start":{"line":173,"column":4},"end":{"line":177,"column":5}},"75":{"start":{"line":174,"column":6},"end":{"line":176,"column":38}}},"fnMap":{"1":{"name":null,"line":28,"loc":{"start":{"line":28,"column":24},"end":{"line":33,"column":7}}},"2":{"name":null,"line":32,"loc":{"start":{"line":32,"column":15},"end":{"line":32,"column":53}}},"3":{"name":null,"line":28,"loc":{"start":{"line":28,"column":24},"end":{"line":33,"column":7}}},"4":{"name":null,"line":32,"loc":{"start":{"line":32,"column":15},"end":{"line":32,"column":53}}},"5":{"name":null,"line":132,"loc":{"start":{"line":132,"column":70},"end":{"line":132,"column":118}}},"6":{"name":null,"line":138,"loc":{"start":{"line":138,"column":51},"end":{"line":140,"column":9}}},"7":{"name":null,"line":152,"loc":{"start":{"line":152,"column":64},"end":{"line":152,"column":113}}},"8":{"name":null,"line":154,"loc":{"start":{"line":154,"column":41},"end":{"line":162,"column":7}}}},"branchMap":{"1":{"line":32,"type":"cond-expr","locations":[{"start":{"line":32,"column":30},"end":{"line":32,"column":41}},{"start":{"line":32,"column":44},"end":{"line":32,"column":53}}]},"2":{"line":32,"type":"cond-expr","locations":[{"start":{"line":32,"column":24},"end":{"line":32,"column":53}},{"start":{"line":32,"column":24},"end":{"line":32,"column":53}}]},"3":{"line":48,"type":"if","locations":[{"start":{"line":48,"column":127},"end":{"line":50,"column":5}},{"start":{"line":48,"column":127},"end":{"line":50,"column":5}}]},"4":{"line":48,"type":"binary-expr","locations":[{"start":{"line":48,"column":8},"end":{"line":48,"column":71}},{"start":{"line":48,"column":75},"end":{"line":48,"column":125}}]},"5":{"line":60,"type":"if","locations":[{"start":{"line":60,"column":17},"end":{"line":60,"column":77}},{"start":{"line":60,"column":17},"end":{"line":60,"column":77}}]},"6":{"line":61,"type":"if","locations":[{"start":{"line":61,"column":19},"end":{"line":61,"column":81}},{"start":{"line":61,"column":19},"end":{"line":61,"column":81}}]},"7":{"line":95,"type":"switch","locations":[{"start":{"line":96,"column":4},"end":{"line":98,"column":11}},{"start":{"line":99,"column":4},"end":{"line":101,"column":11}},{"start":{"line":102,"column":4},"end":{"line":104,"column":11}},{"start":{"line":105,"column":4},"end":{"line":107,"column":11}},{"start":{"line":108,"column":4},"end":{"line":109,"column":55}}]},"8":{"line":121,"type":"if","locations":[{"start":{"line":121,"column":44},"end":{"line":124,"column":5}},{"start":{"line":121,"column":44},"end":{"line":124,"column":5}}]},"9":{"line":124,"type":"if","locations":[{"start":{"line":124,"column":54},"end":{"line":127,"column":5}},{"start":{"line":124,"column":54},"end":{"line":127,"column":5}}]},"10":{"line":127,"type":"if","locations":[{"start":{"line":127,"column":52},"end":{"line":130,"column":5}},{"start":{"line":127,"column":52},"end":{"line":130,"column":5}}]},"11":{"line":130,"type":"if","locations":[{"start":{"line":130,"column":59},"end":{"line":135,"column":5}},{"start":{"line":130,"column":59},"end":{"line":135,"column":5}}]},"12":{"line":135,"type":"if","locations":[{"start":{"line":135,"column":51},"end":{"line":149,"column":5}},{"start":{"line":135,"column":51},"end":{"line":149,"column":5}}]},"13":{"line":136,"type":"if","locations":[{"start":{"line":136,"column":91},"end":{"line":141,"column":7}},{"start":{"line":136,"column":91},"end":{"line":141,"column":7}}]},"14":{"line":136,"type":"binary-expr","locations":[{"start":{"line":136,"column":10},"end":{"line":136,"column":44}},{"start":{"line":136,"column":48},"end":{"line":136,"column":89}}]},"15":{"line":139,"type":"if","locations":[{"start":{"line":139,"column":47},"end":{"line":139,"column":116}},{"start":{"line":139,"column":47},"end":{"line":139,"column":116}}]},"16":{"line":142,"type":"if","locations":[{"start":{"line":142,"column":44},"end":{"line":144,"column":7}},{"start":{"line":142,"column":44},"end":{"line":144,"column":7}}]},"17":{"line":145,"type":"if","locations":[{"start":{"line":145,"column":47},"end":{"line":147,"column":7}},{"start":{"line":145,"column":47},"end":{"line":147,"column":7}}]},"18":{"line":149,"type":"if","locations":[{"start":{"line":149,"column":57},"end":{"line":164,"column":5}},{"start":{"line":149,"column":57},"end":{"line":164,"column":5}}]},"19":{"line":150,"type":"if","locations":[{"start":{"line":150,"column":75},"end":{"line":153,"column":7}},{"start":{"line":150,"column":75},"end":{"line":153,"column":7}}]},"20":{"line":150,"type":"binary-expr","locations":[{"start":{"line":150,"column":10},"end":{"line":150,"column":36}},{"start":{"line":150,"column":40},"end":{"line":150,"column":73}}]},"21":{"line":156,"type":"if","locations":[{"start":{"line":156,"column":21},"end":{"line":158,"column":9}},{"start":{"line":156,"column":21},"end":{"line":158,"column":9}}]},"22":{"line":159,"type":"if","locations":[{"start":{"line":159,"column":24},"end":{"line":161,"column":9}},{"start":{"line":159,"column":24},"end":{"line":161,"column":9}}]}}}');
  coverageData.hash = hash;
  return coverage[path] = coverageData;
}

++_cover__().s['1'];


var agent = require('superagent-promise')(require('superagent'), _promise2.default);

/**
 * Connector's Kik Service
 */

var KikService = function (_ServiceTemplate) {
  (0, _inherits3.default)(KikService, _ServiceTemplate);

  function KikService() {
    (0, _classCallCheck3.default)(this, KikService);
    return (0, _possibleConstructorReturn3.default)(this, (KikService.__proto__ || (0, _getPrototypeOf2.default)(KikService)).apply(this, arguments));
  }

  (0, _createClass3.default)(KikService, null, [{
    key: 'onChannelCreate',


    /*
     * Subscribe webhook
     */
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(channel) {
        var data;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                ++_cover__().s['2'];
                data = {
                  webhook: channel.webhook,
                  features: {
                    receiveReadReceipts: false,
                    receiveIsTyping: false,
                    manuallySendReadReceipts: false,
                    receiveDeliveryReceipts: false
                  }
                };
                ++_cover__().s['3'];
                _context.prev = 3;
                ++_cover__().s['4'];
                _context.next = 7;
                return new _promise2.default(function (resolve, reject) {
                  ++_cover__().f['3'];
                  ++_cover__().f['1'];
                  ++_cover__().s['5'];

                  _superagent2.default.post('https://api.kik.com/v1/config').auth(channel.userName, channel.apiKey).send(data).end(function (err) {
                    ++_cover__().f['4'];
                    ++_cover__().f['2'];
                    return err ? (++_cover__().b['2'][0], (++_cover__().b['1'][0], reject(err))) : (++_cover__().b['2'][1], (++_cover__().b['1'][1], resolve()));
                  });
                });

              case 7:
                ++_cover__().s['6'];

                channel.isErrored = false;
                _context.next = 15;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context['catch'](3);
                ++_cover__().s['7'];

                channel.isErrored = true;

              case 15:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[3, 11]]);
      }));

      function onChannelCreate(_x) {
        return _ref.apply(this, arguments);
      }

      return onChannelCreate;
    }()
  }, {
    key: 'onChannelUpdate',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(channel) {
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                ++_cover__().s['8'];
                _context2.next = 3;
                return KikService.onChannelCreate(channel);

              case 3:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function onChannelUpdate(_x2) {
        return _ref2.apply(this, arguments);
      }

      return onChannelUpdate;
    }()

    /**
     * Check if the message come from a valid webhook
     */

  }, {
    key: 'checkSecurity',
    value: function checkSecurity(req, res, channel) {
      ++_cover__().s['9'];

      if ((++_cover__().b['4'][0], config.base_url + '/webhook/' + channel._id !== channel.webhook) || (++_cover__().b['4'][1], req.headers['x-kik-username'] !== channel.userName)) {
        ++_cover__().b['3'][0];
        ++_cover__().s['10'];

        throw new _errors.ForbiddenError();
      } else {
        ++_cover__().b['3'][1];
      }
      ++_cover__().s['11'];
      res.status(200).send();
    }

    /**
     * Check if any params is missing
     */

  }, {
    key: 'checkParamsValidity',
    value: function checkParamsValidity(channel) {
      ++_cover__().s['12'];
      var userName = channel.userName,
          apiKey = channel.apiKey;
      ++_cover__().s['13'];


      if (!apiKey) {
        ++_cover__().b['5'][0];
        ++_cover__().s['14'];
        throw new _errors.BadRequestError('Parameter apiKey is missing');
      } else {
        ++_cover__().b['5'][1];
      }
      ++_cover__().s['15'];
      if (!userName) {
        ++_cover__().b['6'][0];
        ++_cover__().s['16'];
        throw new _errors.BadRequestError('Parameter userName is missing');
      } else {
        ++_cover__().b['6'][1];
      }

      ++_cover__().s['17'];
      return true;
    }

    /**
     * Extract information from the request before the pipeline
     */

  }, {
    key: 'extractOptions',
    value: function extractOptions(req) {
      ++_cover__().s['18'];
      var body = req.body;
      ++_cover__().s['19'];


      return {
        chatId: body.messages[0].chatId,
        senderId: body.messages[0].participants[0]
      };
    }

    /**
     * send 200 to kik to stop pipeline
     */

  }, {
    key: 'beforePipeline',
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3(req, res, channel) {
        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                ++_cover__().s['20'];
                return _context3.abrupt('return', channel);

              case 2:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function beforePipeline(_x3, _x4, _x5) {
        return _ref3.apply(this, arguments);
      }

      return beforePipeline;
    }()

    /**
     * Parse the message to the connector format
     */

  }, {
    key: 'parseChannelMessage',
    value: function parseChannelMessage(conversation, message, opts) {
      ++_cover__().s['21'];

      var firtsMessage = message.messages[0];
      ++_cover__().s['22'];
      var msg = {
        attachment: {},
        channelType: 'kik'
      };

      ++_cover__().s['23'];
      switch (firtsMessage.type) {
        case (++_cover__().s['24'], 'text'):
          ++_cover__().b['7'][0]
          ++_cover__().s['28'];

          msg.attachment = { type: 'text', content: firtsMessage.body };
          ++_cover__().s['29'];
          break;
        case (++_cover__().s['25'], 'link'):
          ++_cover__().b['7'][1]
          ++_cover__().s['30'];

          msg.attachment = { type: 'link', content: firtsMessage.url };
          ++_cover__().s['31'];
          break;
        case (++_cover__().s['26'], 'picture'):
          ++_cover__().b['7'][2]
          ++_cover__().s['32'];

          msg.attachment = { type: 'picture', content: firtsMessage.picUrl };
          ++_cover__().s['33'];
          break;
        case (++_cover__().s['27'], 'video'):
          ++_cover__().b['7'][3]
          ++_cover__().s['34'];

          msg.attachment = { type: 'video', content: firtsMessage.videoUrl };
          ++_cover__().s['35'];
          break;
        default:
          ++_cover__().b['7'][4]
          ++_cover__().s['36'];

          throw new _errors.BadRequestError('Format not supported');
      }
      ++_cover__().s['37'];
      return [conversation, msg, opts];
    }

    /**
     * Parse the message to the Connector format
     */

  }, {
    key: 'formatMessage',
    value: function formatMessage(conversation, message, opts) {
      ++_cover__().s['38'];

      var reply = [];
      ++_cover__().s['39'];
      var keyboards = null;

      ++_cover__().s['40'];
      if (message.attachment.type === 'text') {
        ++_cover__().b['8'][0];
        ++_cover__().s['41'];

        reply.push({ type: message.attachment.type, chatId: opts.chatId, to: opts.senderId, body: message.attachment.content });
      } else {
          ++_cover__().b['8'][1];
          ++_cover__().s['42'];
          if (message.attachment.type === 'picture') {
            ++_cover__().b['9'][0];
            ++_cover__().s['43'];

            reply.push({ type: message.attachment.type, chatId: opts.chatId, to: opts.senderId, picUrl: message.attachment.content });
          } else {
              ++_cover__().b['9'][1];
              ++_cover__().s['44'];
              if (message.attachment.type === 'video') {
                ++_cover__().b['10'][0];
                ++_cover__().s['45'];

                reply.push({ type: message.attachment.type, chatId: opts.chatId, to: opts.senderId, videoUrl: message.attachment.content });
              } else {
                  ++_cover__().b['10'][1];
                  ++_cover__().s['46'];
                  if (message.attachment.type === 'quickReplies') {
                    ++_cover__().b['11'][0];
                    ++_cover__().s['47'];

                    keyboards = [{ type: 'suggested' }];
                    ++_cover__().s['48'];
                    keyboards[0].responses = message.attachment.content.buttons.map(function (button) {
                      return ++_cover__().f['5'], ++_cover__().s['49'], { type: 'text', body: button.title };
                    });
                    ++_cover__().s['50'];
                    reply.push({ type: 'text', chatId: opts.chatId, to: opts.senderId, body: message.attachment.content.title, keyboards: keyboards });
                  } else {
                      ++_cover__().b['11'][1];
                      ++_cover__().s['51'];
                      if (message.attachment.type === 'card') {
                        ++_cover__().b['12'][0];
                        ++_cover__().s['52'];

                        if ((++_cover__().b['14'][0], message.attachment.content.buttons) && (++_cover__().b['14'][1], message.attachment.content.buttons.length)) {
                          ++_cover__().b['13'][0];
                          ++_cover__().s['53'];

                          keyboards = [{ type: 'suggested', responses: [] }];
                          ++_cover__().s['54'];
                          message.attachment.content.buttons.forEach(function (button) {
                            ++_cover__().f['6'];
                            ++_cover__().s['55'];

                            if (button.type !== 'element_share') {
                              ++_cover__().b['15'][0];
                              ++_cover__().s['56'];
                              keyboards[0].responses.push({ type: 'text', body: button.value });
                            } else {
                              ++_cover__().b['15'][1];
                            }
                          });
                        } else {
                          ++_cover__().b['13'][1];
                        }
                        ++_cover__().s['57'];
                        if (message.attachment.content.title) {
                          ++_cover__().b['16'][0];
                          ++_cover__().s['58'];

                          reply.push({ type: 'text', chatId: opts.chatId, to: opts.senderId, body: message.attachment.content.title });
                        } else {
                          ++_cover__().b['16'][1];
                        }
                        ++_cover__().s['59'];
                        if (message.attachment.content.imageUrl) {
                          ++_cover__().b['17'][0];
                          ++_cover__().s['60'];

                          reply.push({ type: 'picture', chatId: opts.chatId, to: opts.senderId, picUrl: message.attachment.content.imageUrl });
                        } else {
                          ++_cover__().b['17'][1];
                        }
                        ++_cover__().s['61'];
                        reply[reply.length - 1].keyboards = keyboards;
                      } else {
                          ++_cover__().b['12'][1];
                          ++_cover__().s['62'];
                          if (message.attachment.type === 'carouselle') {
                            ++_cover__().b['18'][0];
                            ++_cover__().s['63'];

                            if ((++_cover__().b['20'][0], message.attachment.content) && (++_cover__().b['20'][1], message.attachment.content.length)) {
                              ++_cover__().b['19'][0];
                              ++_cover__().s['64'];

                              keyboards = [{ type: 'suggested' }];
                              ++_cover__().s['65'];
                              keyboards[0].responses = message.attachment.content.map(function (c) {
                                return ++_cover__().f['7'], ++_cover__().s['66'], { type: 'text', body: c.buttons[0].value };
                              });
                            } else {
                              ++_cover__().b['19'][1];
                            }
                            ++_cover__().s['67'];
                            message.attachment.content.forEach(function (c) {
                              ++_cover__().f['8'];
                              ++_cover__().s['68'];


                              if (c.title) {
                                ++_cover__().b['21'][0];
                                ++_cover__().s['69'];

                                reply.push({ type: 'text', chatId: opts.chatId, to: opts.senderId, body: c.buttons[0].title });
                              } else {
                                ++_cover__().b['21'][1];
                              }
                              ++_cover__().s['70'];
                              if (c.imageUrl) {
                                ++_cover__().b['22'][0];
                                ++_cover__().s['71'];

                                reply.push({ type: 'picture', chatId: opts.chatId, to: opts.senderId, picUrl: c.imageUrl });
                              } else {
                                ++_cover__().b['22'][1];
                              }
                            });
                            ++_cover__().s['72'];
                            reply[reply.length - 1].keyboards = keyboards;
                          } else {
                            ++_cover__().b['18'][1];
                          }
                        }
                    }
                }
            }
        }++_cover__().s['73'];
      return reply;
    }

    /**
     * Send the message to kik
     */

  }, {
    key: 'sendMessage',
    value: function () {
      var _ref4 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4(conversation, messages) {
        var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, message;

        return _regenerator2.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                ++_cover__().s['74'];
                _iteratorNormalCompletion = true;
                _didIteratorError = false;
                _iteratorError = undefined;
                _context4.prev = 4;
                _iterator = (0, _getIterator3.default)(messages);

              case 6:
                if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                  _context4.next = 14;
                  break;
                }

                message = _step.value;
                ++_cover__().s['75'];
                _context4.next = 11;
                return agent('POST', 'https://api.kik.com/v1/message').auth(conversation.channel.userName, conversation.channel.apiKey).send({ messages: [message] });

              case 11:
                _iteratorNormalCompletion = true;
                _context4.next = 6;
                break;

              case 14:
                _context4.next = 20;
                break;

              case 16:
                _context4.prev = 16;
                _context4.t0 = _context4['catch'](4);
                _didIteratorError = true;
                _iteratorError = _context4.t0;

              case 20:
                _context4.prev = 20;
                _context4.prev = 21;

                if (!_iteratorNormalCompletion && _iterator.return) {
                  _iterator.return();
                }

              case 23:
                _context4.prev = 23;

                if (!_didIteratorError) {
                  _context4.next = 26;
                  break;
                }

                throw _iteratorError;

              case 26:
                return _context4.finish(23);

              case 27:
                return _context4.finish(20);

              case 28:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this, [[4, 16, 20, 28], [21,, 23, 27]]);
      }));

      function sendMessage(_x6, _x7) {
        return _ref4.apply(this, arguments);
      }

      return sendMessage;
    }()
  }]);
  return KikService;
}(_Template2.default);

exports.default = KikService;