'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

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

var _crypto = require('crypto');

var _crypto2 = _interopRequireDefault(_crypto);

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
  var path = '/Users/slahir/Projects/bot-connector/src/services/Twilio.service.js',
      hash = '4c3baf4b640c39b1a95d40c20ccf0a54';
  var global = new Function('return this')();
  var coverage = global['__coverage__'] || (global['__coverage__'] = {});
  if (coverage[path] && coverage[path].hash === hash) return coverage[path];
  var coverageData = global['JSON'].parse('{"path":"/Users/slahir/Projects/bot-connector/src/services/Twilio.service.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0,"26":0,"27":0,"28":0,"29":0,"30":0,"31":0,"32":0,"33":0,"34":0,"35":0,"36":0,"37":0,"38":0,"39":0,"40":0,"41":0,"42":0,"43":0,"44":0,"45":0,"46":0,"47":0,"48":0,"49":0,"50":0,"51":0,"52":0,"53":0,"54":0,"55":0,"56":0,"57":0,"58":0,"59":0,"60":0,"61":0,"62":0,"63":0,"64":0,"65":0,"66":0,"67":0},"b":{"1":[0,0],"2":[0,0],"3":[0,0],"4":[0,0],"5":[0,0],"6":[0,0],"7":[0,0],"8":[0,0],"9":[0,0],"10":[0,0],"11":[0,0],"12":[0,0],"13":[0,0],"14":[0,0],"15":[0,0],"16":[0,0],"17":[0,0],"18":[0,0]},"f":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0},"statementMap":{"1":{"start":{"line":10,"column":0},"end":{"line":10,"column":75}},"2":{"start":{"line":16,"column":4},"end":{"line":16,"column":57}},"3":{"start":{"line":17,"column":4},"end":{"line":17,"column":65}},"4":{"start":{"line":19,"column":4},"end":{"line":19,"column":83}},"5":{"start":{"line":19,"column":21},"end":{"line":19,"column":81}},"6":{"start":{"line":20,"column":4},"end":{"line":20,"column":91}},"7":{"start":{"line":20,"column":25},"end":{"line":20,"column":89}},"8":{"start":{"line":21,"column":4},"end":{"line":21,"column":85}},"9":{"start":{"line":21,"column":22},"end":{"line":21,"column":83}},"10":{"start":{"line":22,"column":4},"end":{"line":22,"column":97}},"11":{"start":{"line":22,"column":32},"end":{"line":22,"column":95}},"12":{"start":{"line":24,"column":4},"end":{"line":24,"column":15}},"13":{"start":{"line":28,"column":4},"end":{"line":28,"column":55}},"14":{"start":{"line":29,"column":4},"end":{"line":29,"column":35}},"15":{"start":{"line":30,"column":4},"end":{"line":30,"column":21}},"16":{"start":{"line":31,"column":4},"end":{"line":34,"column":6}},"17":{"start":{"line":32,"column":6},"end":{"line":32,"column":18}},"18":{"start":{"line":33,"column":6},"end":{"line":33,"column":28}},"19":{"start":{"line":35,"column":4},"end":{"line":35,"column":93}},"20":{"start":{"line":36,"column":4},"end":{"line":38,"column":5}},"21":{"start":{"line":37,"column":6},"end":{"line":37,"column":32}},"22":{"start":{"line":43,"column":4},"end":{"line":43,"column":26}},"23":{"start":{"line":44,"column":4},"end":{"line":44,"column":18}},"24":{"start":{"line":49,"column":4},"end":{"line":49,"column":24}},"25":{"start":{"line":51,"column":4},"end":{"line":54,"column":5}},"26":{"start":{"line":59,"column":4},"end":{"line":65,"column":5}},"27":{"start":{"line":66,"column":4},"end":{"line":66,"column":36}},"28":{"start":{"line":71,"column":4},"end":{"line":71,"column":35}},"29":{"start":{"line":72,"column":4},"end":{"line":72,"column":48}},"30":{"start":{"line":73,"column":4},"end":{"line":73,"column":28}},"31":{"start":{"line":75,"column":4},"end":{"line":75,"column":41}},"32":{"start":{"line":75,"column":25},"end":{"line":75,"column":39}},"33":{"start":{"line":77,"column":4},"end":{"line":84,"column":5}},"34":{"start":{"line":78,"column":6},"end":{"line":78,"column":125}},"35":{"start":{"line":78,"column":48},"end":{"line":78,"column":123}},"36":{"start":{"line":79,"column":6},"end":{"line":83,"column":24}},"37":{"start":{"line":81,"column":10},"end":{"line":81,"column":90}},"38":{"start":{"line":81,"column":24},"end":{"line":81,"column":88}},"39":{"start":{"line":82,"column":10},"end":{"line":82,"column":22}},"40":{"start":{"line":86,"column":4},"end":{"line":93,"column":5}},"41":{"start":{"line":87,"column":6},"end":{"line":87,"column":127}},"42":{"start":{"line":87,"column":48},"end":{"line":87,"column":125}},"43":{"start":{"line":88,"column":6},"end":{"line":92,"column":24}},"44":{"start":{"line":90,"column":10},"end":{"line":90,"column":92}},"45":{"start":{"line":90,"column":34},"end":{"line":90,"column":90}},"46":{"start":{"line":91,"column":10},"end":{"line":91,"column":38}},"47":{"start":{"line":95,"column":4},"end":{"line":107,"column":5}},"48":{"start":{"line":96,"column":6},"end":{"line":96,"column":20}},"49":{"start":{"line":97,"column":6},"end":{"line":105,"column":8}},"50":{"start":{"line":98,"column":8},"end":{"line":98,"column":129}},"51":{"start":{"line":98,"column":44},"end":{"line":98,"column":127}},"52":{"start":{"line":99,"column":8},"end":{"line":99,"column":67}},"53":{"start":{"line":99,"column":29},"end":{"line":99,"column":65}},"54":{"start":{"line":100,"column":8},"end":{"line":104,"column":27}},"55":{"start":{"line":102,"column":12},"end":{"line":102,"column":100}},"56":{"start":{"line":102,"column":36},"end":{"line":102,"column":98}},"57":{"start":{"line":103,"column":12},"end":{"line":103,"column":40}},"58":{"start":{"line":106,"column":6},"end":{"line":106,"column":29}},"59":{"start":{"line":109,"column":4},"end":{"line":109,"column":56}},"60":{"start":{"line":110,"column":4},"end":{"line":110,"column":71}},"61":{"start":{"line":110,"column":21},"end":{"line":110,"column":69}},"62":{"start":{"line":112,"column":4},"end":{"line":112,"column":75}},"63":{"start":{"line":117,"column":4},"end":{"line":122,"column":5}},"64":{"start":{"line":123,"column":4},"end":{"line":130,"column":5}},"65":{"start":{"line":124,"column":6},"end":{"line":124,"column":30}},"66":{"start":{"line":125,"column":6},"end":{"line":125,"column":26}},"67":{"start":{"line":126,"column":6},"end":{"line":129,"column":19}}},"fnMap":{"1":{"name":null,"line":31,"loc":{"start":{"line":31,"column":46},"end":{"line":34,"column":5}}},"2":{"name":null,"line":75,"loc":{"start":{"line":75,"column":17},"end":{"line":75,"column":41}}},"3":{"name":null,"line":77,"loc":{"start":{"line":77,"column":25},"end":{"line":84,"column":5}}},"4":{"name":null,"line":80,"loc":{"start":{"line":80,"column":36},"end":{"line":83,"column":9}}},"5":{"name":null,"line":86,"loc":{"start":{"line":86,"column":17},"end":{"line":93,"column":5}}},"6":{"name":null,"line":89,"loc":{"start":{"line":89,"column":36},"end":{"line":92,"column":9}}},"7":{"name":null,"line":95,"loc":{"start":{"line":95,"column":23},"end":{"line":107,"column":5}}},"8":{"name":null,"line":97,"loc":{"start":{"line":97,"column":25},"end":{"line":105,"column":7}}},"9":{"name":null,"line":101,"loc":{"start":{"line":101,"column":35},"end":{"line":104,"column":11}}}},"branchMap":{"1":{"line":19,"type":"if","locations":[{"start":{"line":19,"column":19},"end":{"line":19,"column":83}},{"start":{"line":19,"column":19},"end":{"line":19,"column":83}}]},"2":{"line":20,"type":"if","locations":[{"start":{"line":20,"column":23},"end":{"line":20,"column":91}},{"start":{"line":20,"column":23},"end":{"line":20,"column":91}}]},"3":{"line":21,"type":"if","locations":[{"start":{"line":21,"column":20},"end":{"line":21,"column":85}},{"start":{"line":21,"column":20},"end":{"line":21,"column":85}}]},"4":{"line":22,"type":"if","locations":[{"start":{"line":22,"column":30},"end":{"line":22,"column":97}},{"start":{"line":22,"column":30},"end":{"line":22,"column":97}}]},"5":{"line":36,"type":"if","locations":[{"start":{"line":36,"column":28},"end":{"line":38,"column":5}},{"start":{"line":36,"column":28},"end":{"line":38,"column":5}}]},"6":{"line":78,"type":"if","locations":[{"start":{"line":78,"column":46},"end":{"line":78,"column":125}},{"start":{"line":78,"column":46},"end":{"line":78,"column":125}}]},"7":{"line":78,"type":"binary-expr","locations":[{"start":{"line":78,"column":10},"end":{"line":78,"column":24}},{"start":{"line":78,"column":28},"end":{"line":78,"column":44}}]},"8":{"line":81,"type":"if","locations":[{"start":{"line":81,"column":22},"end":{"line":81,"column":90}},{"start":{"line":81,"column":22},"end":{"line":81,"column":90}}]},"9":{"line":87,"type":"if","locations":[{"start":{"line":87,"column":46},"end":{"line":87,"column":127}},{"start":{"line":87,"column":46},"end":{"line":87,"column":127}}]},"10":{"line":87,"type":"binary-expr","locations":[{"start":{"line":87,"column":10},"end":{"line":87,"column":24}},{"start":{"line":87,"column":28},"end":{"line":87,"column":44}}]},"11":{"line":90,"type":"if","locations":[{"start":{"line":90,"column":32},"end":{"line":90,"column":92}},{"start":{"line":90,"column":32},"end":{"line":90,"column":92}}]},"12":{"line":90,"type":"binary-expr","locations":[{"start":{"line":90,"column":14},"end":{"line":90,"column":20}},{"start":{"line":90,"column":24},"end":{"line":90,"column":30}}]},"13":{"line":98,"type":"if","locations":[{"start":{"line":98,"column":42},"end":{"line":98,"column":129}},{"start":{"line":98,"column":42},"end":{"line":98,"column":129}}]},"14":{"line":98,"type":"binary-expr","locations":[{"start":{"line":98,"column":12},"end":{"line":98,"column":23}},{"start":{"line":98,"column":27},"end":{"line":98,"column":40}}]},"15":{"line":99,"type":"if","locations":[{"start":{"line":99,"column":27},"end":{"line":99,"column":67}},{"start":{"line":99,"column":27},"end":{"line":99,"column":67}}]},"16":{"line":102,"type":"if","locations":[{"start":{"line":102,"column":34},"end":{"line":102,"column":100}},{"start":{"line":102,"column":34},"end":{"line":102,"column":100}}]},"17":{"line":102,"type":"binary-expr","locations":[{"start":{"line":102,"column":16},"end":{"line":102,"column":22}},{"start":{"line":102,"column":26},"end":{"line":102,"column":32}}]},"18":{"line":110,"type":"if","locations":[{"start":{"line":110,"column":19},"end":{"line":110,"column":71}},{"start":{"line":110,"column":19},"end":{"line":110,"column":71}}]}}}');
  coverageData.hash = hash;
  return coverage[path] = coverageData;
}

++_cover__().s['1'];


var agent = require('superagent-promise')(require('superagent'), _promise2.default);

var TwilioService = function (_ServiceTemplate) {
  (0, _inherits3.default)(TwilioService, _ServiceTemplate);

  function TwilioService() {
    (0, _classCallCheck3.default)(this, TwilioService);
    return (0, _possibleConstructorReturn3.default)(this, (TwilioService.__proto__ || (0, _getPrototypeOf2.default)(TwilioService)).apply(this, arguments));
  }

  (0, _createClass3.default)(TwilioService, null, [{
    key: 'checkParamsValidity',


    /* Check parameter validity to create a Channel */
    value: function checkParamsValidity(channel) {
      ++_cover__().s['2'];
      var clientId = channel.clientId,
          clientSecret = channel.clientSecret,
          serviceId = channel.serviceId;
      ++_cover__().s['3'];

      channel.phoneNumber = channel.phoneNumber.split(' ').join('');

      ++_cover__().s['4'];
      if (!clientId) {
        ++_cover__().b['1'][0];
        ++_cover__().s['5'];
        throw new _errors.BadRequestError('Parameter is missing: Client Id');
      } else {
        ++_cover__().b['1'][1];
      }
      ++_cover__().s['6'];
      if (!clientSecret) {
        ++_cover__().b['2'][0];
        ++_cover__().s['7'];
        throw new _errors.BadRequestError('Parameter is missing: Client Secret');
      } else {
        ++_cover__().b['2'][1];
      }
      ++_cover__().s['8'];
      if (!serviceId) {
        ++_cover__().b['3'][0];
        ++_cover__().s['9'];
        throw new _errors.BadRequestError('Parameter is missing: Service Id');
      } else {
        ++_cover__().b['3'][1];
      }
      ++_cover__().s['10'];
      if (!channel.phoneNumber) {
        ++_cover__().b['4'][0];
        ++_cover__().s['11'];
        throw new _errors.BadRequestError('Parameter is missing: Phone Number');
      } else {
        ++_cover__().b['4'][1];
      }

      ++_cover__().s['12'];
      return true;
    }
  }, {
    key: 'checkSecurity',
    value: function checkSecurity(req, res, channel) {
      ++_cover__().s['13'];

      var signature = req.headers['x-twilio-signature'];
      ++_cover__().s['14'];
      var webhook = channel.webhook;
      ++_cover__().s['15'];
      var str = webhook;
      ++_cover__().s['16'];
      _lodash2.default.forOwn(_lodash2.default.sortBy((0, _keys2.default)(req.body)), function (value) {
        ++_cover__().f['1'];
        ++_cover__().s['17'];

        str += value;
        ++_cover__().s['18'];
        str += req.body[value];
      });
      ++_cover__().s['19'];
      var hmac = _crypto2.default.createHmac('SHA1', channel.clientSecret).update(str).digest('base64');
      ++_cover__().s['20'];
      if (signature !== hmac) {
        ++_cover__().b['5'][0];
        ++_cover__().s['21'];

        throw new _errors.ForbiddenError();
      } else {
        ++_cover__().b['5'][1];
      }
    }

    /* Call when a message is received, before the pipeline */

  }, {
    key: 'beforePipeline',
    value: function beforePipeline(req, res, channel) {
      ++_cover__().s['22'];

      res.status(200).send();
      ++_cover__().s['23'];
      return channel;
    }

    /* Call before entering the pipeline, to build the options object */

  }, {
    key: 'extractOptions',
    value: function extractOptions(req) {
      ++_cover__().s['24'];
      var body = req.body;
      ++_cover__().s['25'];


      return {
        chatId: '' + body.To + body.From,
        senderId: body.From
      };
    }

    /* Call to parse a message received from a channel */

  }, {
    key: 'parseChannelMessage',
    value: function parseChannelMessage(conversation, message, opts) {
      ++_cover__().s['26'];

      var msg = {
        attachment: {
          type: 'text',
          content: message.Body
        },
        channelType: 'twilio'
      };
      ++_cover__().s['27'];
      return [conversation, msg, opts];
    }

    /* Call to format a message received by the bot */

  }, {
    key: 'formatMessage',
    value: function formatMessage(conversation, message, opts) {
      ++_cover__().s['28'];
      var chatId = conversation.chatId;
      ++_cover__().s['29'];
      var _message$attachment = message.attachment,
          type = _message$attachment.type,
          content = _message$attachment.content;
      ++_cover__().s['30'];

      var to = opts.senderId;

      ++_cover__().s['31'];
      var text = function text() {
        ++_cover__().f['2'];
        ++_cover__().s['32'];
        return content;
      };

      ++_cover__().s['33'];
      var quickReplies = function quickReplies() {
        ++_cover__().f['3'];
        ++_cover__().s['34'];

        if ((++_cover__().b['7'][0], !content.title) || (++_cover__().b['7'][1], !content.buttons)) {
          ++_cover__().b['6'][0];
          ++_cover__().s['35'];
          throw new _errors.BadRequestError('Missing buttons or title for quickReplies type');
        } else {
          ++_cover__().b['6'][1];
        }
        ++_cover__().s['36'];
        return [content.title + ':'].concat(content.buttons.map(function (_ref) {
          var title = _ref.title;
          ++_cover__().f['4'];
          ++_cover__().s['37'];

          if (!title) {
            ++_cover__().b['8'][0];
            ++_cover__().s['38'];
            throw new _errors.BadRequestError('Missing title for quickReplies type');
          } else {
            ++_cover__().b['8'][1];
          }
          ++_cover__().s['39'];
          return title;
        })).join('\r\n');
      };

      ++_cover__().s['40'];
      var card = function card() {
        ++_cover__().f['5'];
        ++_cover__().s['41'];

        if ((++_cover__().b['10'][0], !content.title) || (++_cover__().b['10'][1], !content.buttons)) {
          ++_cover__().b['9'][0];
          ++_cover__().s['42'];
          throw new _errors.BadRequestError('Missing buttons arguments or title for card type');
        } else {
          ++_cover__().b['9'][1];
        }
        ++_cover__().s['43'];
        return [content.title + ':'].concat(content.buttons.map(function (_ref2) {
          var title = _ref2.title,
              value = _ref2.value;
          ++_cover__().f['6'];
          ++_cover__().s['44'];

          if ((++_cover__().b['12'][0], !title) || (++_cover__().b['12'][1], !value)) {
            ++_cover__().b['11'][0];
            ++_cover__().s['45'];
            throw new _errors.BadRequestError('Missing title for card type');
          } else {
            ++_cover__().b['11'][1];
          }
          ++_cover__().s['46'];
          return value + ' - ' + title;
        })).join('\r\n');
      };

      ++_cover__().s['47'];
      var carouselle = function carouselle() {
        ++_cover__().f['7'];
        ++_cover__().s['48'];

        var ret = [];
        ++_cover__().s['49'];
        _lodash2.default.forEach(content, function (card) {
          ++_cover__().f['8'];
          ++_cover__().s['50'];

          if ((++_cover__().b['14'][0], !card.title) || (++_cover__().b['14'][1], !card.buttons)) {
            ++_cover__().b['13'][0];
            ++_cover__().s['51'];
            throw new _errors.BadRequestError('Missing buttons arguments or title for carouselle type');
          } else {
            ++_cover__().b['13'][1];
          }
          ++_cover__().s['52'];
          if (card.subtitle) {
            ++_cover__().b['15'][0];
            ++_cover__().s['53'];
            card.title += '\r\n' + card.subtitle;
          } else {
            ++_cover__().b['15'][1];
          }
          ++_cover__().s['54'];
          ret.push([card.title + ':'].concat(card.buttons.map(function (_ref3) {
            var title = _ref3.title,
                value = _ref3.value;
            ++_cover__().f['9'];
            ++_cover__().s['55'];

            if ((++_cover__().b['17'][0], !title) || (++_cover__().b['17'][1], !value)) {
              ++_cover__().b['16'][0];
              ++_cover__().s['56'];
              throw new _errors.BadRequestError('Missing title for carouselle type');
            } else {
              ++_cover__().b['16'][1];
            }
            ++_cover__().s['57'];
            return value + ' - ' + title;
          })).join('\r\n'));
        });
        ++_cover__().s['58'];
        return ret.join('\r\n');
      };

      ++_cover__().s['59'];
      var fns = { card: card, text: text, quickReplies: quickReplies, carouselle: carouselle };
      ++_cover__().s['60'];
      if (fns[type]) {
        ++_cover__().b['18'][0];
        ++_cover__().s['61'];
        return [{ chatId: chatId, to: to, body: fns[type](), type: type }];
      } else {
        ++_cover__().b['18'][1];
      }

      ++_cover__().s['62'];
      throw new _errors.BadRequestError('Message type ' + type + ' unsupported by Twilio');
    }

    /* Call to send a message to a bot */

  }, {
    key: 'sendMessage',
    value: function () {
      var _ref4 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(conversation, messages) {
        var data, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, message;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                ++_cover__().s['63'];
                data = {
                  From: conversation.channel.phoneNumber,
                  MessagingServiceSid: conversation.channel.serviceId,
                  To: '',
                  Body: ''
                };
                ++_cover__().s['64'];
                _iteratorNormalCompletion = true;
                _didIteratorError = false;
                _iteratorError = undefined;
                _context.prev = 6;
                _iterator = (0, _getIterator3.default)(messages);

              case 8:
                if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                  _context.next = 20;
                  break;
                }

                message = _step.value;
                ++_cover__().s['65'];

                data.Body = message.body;
                ++_cover__().s['66'];
                data.To = message.to;
                ++_cover__().s['67'];
                _context.next = 17;
                return agent('POST', 'https://api.twilio.com/2010-04-01/Accounts/' + conversation.channel.clientId + '/Messages.json').auth(conversation.channel.clientId, conversation.channel.clientSecret).type('form').send(data);

              case 17:
                _iteratorNormalCompletion = true;
                _context.next = 8;
                break;

              case 20:
                _context.next = 26;
                break;

              case 22:
                _context.prev = 22;
                _context.t0 = _context['catch'](6);
                _didIteratorError = true;
                _iteratorError = _context.t0;

              case 26:
                _context.prev = 26;
                _context.prev = 27;

                if (!_iteratorNormalCompletion && _iterator.return) {
                  _iterator.return();
                }

              case 29:
                _context.prev = 29;

                if (!_didIteratorError) {
                  _context.next = 32;
                  break;
                }

                throw _iteratorError;

              case 32:
                return _context.finish(29);

              case 33:
                return _context.finish(26);

              case 34:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[6, 22, 26, 34], [27,, 29, 33]]);
      }));

      function sendMessage(_x, _x2) {
        return _ref4.apply(this, arguments);
      }

      return sendMessage;
    }()
  }]);
  return TwilioService;
}(_Template2.default);

exports.default = TwilioService;