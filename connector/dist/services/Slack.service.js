'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

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

var _superagent = require('superagent');

var _superagent2 = _interopRequireDefault(_superagent);

var _Template = require('./Template.service');

var _Template2 = _interopRequireDefault(_Template);

var _Logger = require('../utils/Logger');

var _Logger2 = _interopRequireDefault(_Logger);

var _errors = require('../utils/errors');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _coverage__file;

function _cover__() {
  if (!_coverage__file) _coverage__file = _coverage__getInitialState();
  return _coverage__file;
}

function _coverage__getInitialState() {
  var path = '/Users/slahir/Projects/bot-connector/src/services/Slack.service.js',
      hash = '0051e149cab280066f376935a2832589';
  var global = new Function('return this')();
  var coverage = global['__coverage__'] || (global['__coverage__'] = {});
  if (coverage[path] && coverage[path].hash === hash) return coverage[path];
  var coverageData = global['JSON'].parse('{"path":"/Users/slahir/Projects/bot-connector/src/services/Slack.service.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0,"26":0,"27":0,"28":0,"29":0,"30":0,"31":0,"32":0,"33":0,"34":0,"35":0,"36":0,"37":0,"38":0,"39":0,"40":0,"41":0,"42":0,"43":0,"44":0,"45":0,"46":0,"47":0,"48":0,"49":0,"50":0,"51":0,"52":0,"53":0,"54":0,"55":0,"56":0,"57":0,"58":0,"59":0,"60":0,"61":0,"62":0,"63":0},"b":{"1":[0,0],"2":[0,0],"3":[0,0],"4":[0,0],"5":[0,0,0,0,0,0],"6":[0,0],"7":[0,0],"8":[0,0]},"f":{"1":0,"2":0,"3":0,"4":0,"5":0},"statementMap":{"1":{"start":{"line":10,"column":4},"end":{"line":10,"column":24}},"2":{"start":{"line":12,"column":4},"end":{"line":15,"column":5}},"3":{"start":{"line":19,"column":4},"end":{"line":19,"column":26}},"4":{"start":{"line":23,"column":4},"end":{"line":23,"column":29}},"5":{"start":{"line":25,"column":4},"end":{"line":25,"column":75}},"6":{"start":{"line":25,"column":18},"end":{"line":25,"column":73}},"7":{"start":{"line":27,"column":4},"end":{"line":27,"column":15}},"8":{"start":{"line":34,"column":4},"end":{"line":52,"column":6}},"9":{"start":{"line":35,"column":6},"end":{"line":37,"column":7}},"10":{"start":{"line":38,"column":6},"end":{"line":38,"column":25}},"11":{"start":{"line":39,"column":6},"end":{"line":49,"column":7}},"12":{"start":{"line":40,"column":8},"end":{"line":46,"column":9}},"13":{"start":{"line":41,"column":10},"end":{"line":41,"column":83}},"14":{"start":{"line":42,"column":15},"end":{"line":46,"column":9}},"15":{"start":{"line":43,"column":10},"end":{"line":43,"column":83}},"16":{"start":{"line":45,"column":10},"end":{"line":45,"column":91}},"17":{"start":{"line":48,"column":8},"end":{"line":48,"column":66}},"18":{"start":{"line":50,"column":6},"end":{"line":50,"column":43}},"19":{"start":{"line":51,"column":6},"end":{"line":51,"column":57}},"20":{"start":{"line":57,"column":4},"end":{"line":57,"column":48}},"21":{"start":{"line":58,"column":4},"end":{"line":58,"column":36}},"22":{"start":{"line":59,"column":4},"end":{"line":106,"column":5}},"23":{"start":{"line":60,"column":9},"end":{"line":60,"column":15}},"24":{"start":{"line":63,"column":9},"end":{"line":63,"column":16}},"25":{"start":{"line":66,"column":9},"end":{"line":66,"column":18}},"26":{"start":{"line":69,"column":9},"end":{"line":69,"column":23}},"27":{"start":{"line":86,"column":9},"end":{"line":86,"column":15}},"28":{"start":{"line":61,"column":6},"end":{"line":61,"column":47}},"29":{"start":{"line":62,"column":6},"end":{"line":62,"column":11}},"30":{"start":{"line":64,"column":6},"end":{"line":64,"column":47}},"31":{"start":{"line":65,"column":6},"end":{"line":65,"column":11}},"32":{"start":{"line":67,"column":6},"end":{"line":67,"column":47}},"33":{"start":{"line":68,"column":6},"end":{"line":68,"column":11}},"34":{"start":{"line":70,"column":6},"end":{"line":72,"column":7}},"35":{"start":{"line":73,"column":6},"end":{"line":84,"column":8}},"36":{"start":{"line":78,"column":10},"end":{"line":78,"column":36}},"37":{"start":{"line":79,"column":10},"end":{"line":79,"column":36}},"38":{"start":{"line":80,"column":10},"end":{"line":80,"column":32}},"39":{"start":{"line":81,"column":10},"end":{"line":81,"column":29}},"40":{"start":{"line":82,"column":10},"end":{"line":82,"column":23}},"41":{"start":{"line":85,"column":6},"end":{"line":85,"column":11}},"42":{"start":{"line":87,"column":6},"end":{"line":87,"column":32}},"43":{"start":{"line":88,"column":6},"end":{"line":102,"column":8}},"44":{"start":{"line":96,"column":10},"end":{"line":96,"column":36}},"45":{"start":{"line":97,"column":10},"end":{"line":97,"column":36}},"46":{"start":{"line":98,"column":10},"end":{"line":98,"column":32}},"47":{"start":{"line":99,"column":10},"end":{"line":99,"column":29}},"48":{"start":{"line":100,"column":10},"end":{"line":100,"column":23}},"49":{"start":{"line":103,"column":6},"end":{"line":103,"column":11}},"50":{"start":{"line":105,"column":6},"end":{"line":105,"column":45}},"51":{"start":{"line":107,"column":4},"end":{"line":107,"column":32}},"52":{"start":{"line":114,"column":4},"end":{"line":131,"column":6}},"53":{"start":{"line":115,"column":6},"end":{"line":115,"column":106}},"54":{"start":{"line":116,"column":6},"end":{"line":116,"column":21}},"55":{"start":{"line":117,"column":6},"end":{"line":119,"column":7}},"56":{"start":{"line":118,"column":8},"end":{"line":118,"column":40}},"57":{"start":{"line":120,"column":6},"end":{"line":122,"column":7}},"58":{"start":{"line":121,"column":8},"end":{"line":121,"column":79}},"59":{"start":{"line":123,"column":6},"end":{"line":130,"column":8}},"60":{"start":{"line":125,"column":8},"end":{"line":128,"column":9}},"61":{"start":{"line":126,"column":10},"end":{"line":126,"column":62}},"62":{"start":{"line":127,"column":10},"end":{"line":127,"column":28}},"63":{"start":{"line":129,"column":8},"end":{"line":129,"column":31}}},"fnMap":{"1":{"name":null,"line":34,"loc":{"start":{"line":34,"column":23},"end":{"line":52,"column":5}}},"2":{"name":null,"line":77,"loc":{"start":{"line":77,"column":37},"end":{"line":83,"column":9}}},"3":{"name":null,"line":95,"loc":{"start":{"line":95,"column":37},"end":{"line":101,"column":9}}},"4":{"name":null,"line":114,"loc":{"start":{"line":114,"column":23},"end":{"line":131,"column":5}}},"5":{"name":null,"line":124,"loc":{"start":{"line":124,"column":11},"end":{"line":130,"column":7}}}},"branchMap":{"1":{"line":25,"type":"if","locations":[{"start":{"line":25,"column":16},"end":{"line":25,"column":75}},{"start":{"line":25,"column":16},"end":{"line":25,"column":75}}]},"2":{"line":39,"type":"if","locations":[{"start":{"line":39,"column":30},"end":{"line":47,"column":7}},{"start":{"line":47,"column":13},"end":{"line":49,"column":7}}]},"3":{"line":40,"type":"if","locations":[{"start":{"line":40,"column":61},"end":{"line":42,"column":9}},{"start":{"line":40,"column":61},"end":{"line":42,"column":9}}]},"4":{"line":42,"type":"if","locations":[{"start":{"line":42,"column":68},"end":{"line":44,"column":9}},{"start":{"line":44,"column":15},"end":{"line":46,"column":9}}]},"5":{"line":59,"type":"switch","locations":[{"start":{"line":60,"column":4},"end":{"line":62,"column":11}},{"start":{"line":63,"column":4},"end":{"line":65,"column":11}},{"start":{"line":66,"column":4},"end":{"line":68,"column":11}},{"start":{"line":69,"column":4},"end":{"line":85,"column":11}},{"start":{"line":86,"column":4},"end":{"line":103,"column":11}},{"start":{"line":104,"column":4},"end":{"line":105,"column":45}}]},"6":{"line":117,"type":"if","locations":[{"start":{"line":117,"column":24},"end":{"line":119,"column":7}},{"start":{"line":117,"column":24},"end":{"line":119,"column":7}}]},"7":{"line":120,"type":"if","locations":[{"start":{"line":120,"column":31},"end":{"line":122,"column":7}},{"start":{"line":120,"column":31},"end":{"line":122,"column":7}}]},"8":{"line":125,"type":"if","locations":[{"start":{"line":125,"column":17},"end":{"line":128,"column":9}},{"start":{"line":125,"column":17},"end":{"line":128,"column":9}}]}}}');
  coverageData.hash = hash;
  return coverage[path] = coverageData;
}

var SlackService = function (_ServiceTemplate) {
  (0, _inherits3.default)(SlackService, _ServiceTemplate);

  function SlackService() {
    (0, _classCallCheck3.default)(this, SlackService);
    return (0, _possibleConstructorReturn3.default)(this, (SlackService.__proto__ || (0, _getPrototypeOf2.default)(SlackService)).apply(this, arguments));
  }

  (0, _createClass3.default)(SlackService, null, [{
    key: 'extractOptions',
    value: function extractOptions(req) {
      ++_cover__().s['1'];
      var body = req.body;
      ++_cover__().s['2'];


      return {
        chatId: body.event.channel,
        senderId: body.event.user
      };
    }
  }, {
    key: 'checkSecurity',
    value: function checkSecurity(req, res) {
      ++_cover__().s['3'];

      res.status(200).send();
    }
  }, {
    key: 'checkParamsValidity',
    value: function checkParamsValidity(channel) {
      ++_cover__().s['4'];
      var token = channel.token;
      ++_cover__().s['5'];


      if (!token) {
        ++_cover__().b['1'][0];
        ++_cover__().s['6'];
        throw new _errors.BadRequestError('Parameter token is missing');
      } else {
        ++_cover__().b['1'][1];
      }

      ++_cover__().s['7'];
      return true;
    }

    /**
     * Parse the message received by Slack to connector format
     */

  }, {
    key: 'parseChannelMessage',
    value: function parseChannelMessage(conversation, message, opts) {
      ++_cover__().s['8'];

      return new _promise2.default(function (resolve, reject) {
        ++_cover__().f['1'];
        ++_cover__().s['9'];

        var parsedMessage = {
          channelType: 'slack'
        };
        ++_cover__().s['10'];
        var attachment = {};
        ++_cover__().s['11'];
        if (message.event.file) {
          ++_cover__().b['2'][0];
          ++_cover__().s['12'];

          if (message.event.file.mimetype.startsWith('image')) {
            ++_cover__().b['3'][0];
            ++_cover__().s['13'];

            attachment = { type: 'picture', content: message.event.file.url_private };
          } else {
              ++_cover__().b['3'][1];
              ++_cover__().s['14'];
              if (message.event.file.mimetype.startsWith('video')) {
                ++_cover__().b['4'][0];
                ++_cover__().s['15'];

                attachment = { type: 'picture', content: message.event.file.url_private };
              } else {
                ++_cover__().b['4'][1];
                ++_cover__().s['16'];

                return reject(new _errors.ConnectorError('Sorry but we don\'t handle such type of file'));
              }
            }
        } else {
          ++_cover__().b['2'][1];
          ++_cover__().s['17'];

          attachment = { type: 'text', content: message.event.text };
        }
        ++_cover__().s['18'];
        parsedMessage.attachment = attachment;
        ++_cover__().s['19'];
        return resolve([conversation, parsedMessage, opts]);
      });
    }

    // Transforms a message from connector universal format to slack format

  }, {
    key: 'formatMessage',
    value: function formatMessage(conversation, message) {
      ++_cover__().s['20'];
      var _message$attachment = message.attachment,
          type = _message$attachment.type,
          content = _message$attachment.content;
      ++_cover__().s['21'];

      var slackFormattedMessage = null;
      ++_cover__().s['22'];
      switch (type) {
        case (++_cover__().s['23'], 'text'):
          ++_cover__().b['5'][0]
          ++_cover__().s['28'];

          slackFormattedMessage = { text: content };
          ++_cover__().s['29'];
          break;
        case (++_cover__().s['24'], 'video'):
          ++_cover__().b['5'][1]
          ++_cover__().s['30'];

          slackFormattedMessage = { text: content };
          ++_cover__().s['31'];
          break;
        case (++_cover__().s['25'], 'picture'):
          ++_cover__().b['5'][2]
          ++_cover__().s['32'];

          slackFormattedMessage = { text: content };
          ++_cover__().s['33'];
          break;
        case (++_cover__().s['26'], 'quickReplies'):
          ++_cover__().b['5'][3]
          ++_cover__().s['34'];

          slackFormattedMessage = {
            text: content.title
          };
          ++_cover__().s['35'];
          slackFormattedMessage.attachments = [{
            fallback: 'Sorry but I can\'t display buttons',
            attachment_type: 'default',
            callback_id: 'callback_id',
            actions: content.buttons.map(function (button) {
              ++_cover__().f['2'];
              ++_cover__().s['36'];

              button.name = button.title;
              ++_cover__().s['37'];
              button.text = button.title;
              ++_cover__().s['38'];
              button.type = 'button';
              ++_cover__().s['39'];
              delete button.title;
              ++_cover__().s['40'];
              return button;
            })
          }];
          ++_cover__().s['41'];
          break;
        case (++_cover__().s['27'], 'card'):
          ++_cover__().b['5'][4]
          ++_cover__().s['42'];

          slackFormattedMessage = {};
          ++_cover__().s['43'];
          slackFormattedMessage.attachments = [{
            title: content.title,
            text: content.subtitle,
            image_url: content.imageUrl,
            fallback: 'Sorry but I can\'t display buttons',
            attachment_type: 'default',
            callback_id: 'callback_id',
            actions: content.buttons.map(function (button) {
              ++_cover__().f['3'];
              ++_cover__().s['44'];

              button.name = button.title;
              ++_cover__().s['45'];
              button.text = button.title;
              ++_cover__().s['46'];
              button.type = 'button';
              ++_cover__().s['47'];
              delete button.title;
              ++_cover__().s['48'];
              return button;
            })
          }];
          ++_cover__().s['49'];
          break;
        default:
          ++_cover__().b['5'][5]
          ++_cover__().s['50'];

          throw new Error('Invalid message type');
      }
      ++_cover__().s['51'];
      return slackFormattedMessage;
    }

    /**
     * Send a message to the Bot
     */

  }, {
    key: 'sendMessage',
    value: function sendMessage(conversation, message) {
      ++_cover__().s['52'];

      return new _promise2.default(function (resolve, reject) {
        ++_cover__().f['4'];
        ++_cover__().s['53'];

        var authParams = 'token=' + conversation.channel.token + '&channel=' + conversation.chatId + '&as_user=true';
        ++_cover__().s['54'];
        var params = '';
        ++_cover__().s['55'];
        if (message.text) {
          ++_cover__().b['6'][0];
          ++_cover__().s['56'];

          params = '&text=' + message.text;
        } else {
          ++_cover__().b['6'][1];
        }
        ++_cover__().s['57'];
        if (message.attachments) {
          ++_cover__().b['7'][0];
          ++_cover__().s['58'];

          params = params + '&attachments=' + (0, _stringify2.default)(message.attachments);
        } else {
          ++_cover__().b['7'][1];
        }
        ++_cover__().s['59'];
        _superagent2.default.post('https://slack.com/api/chat.postMessage?' + authParams + params).end(function (err) {
          ++_cover__().f['5'];
          ++_cover__().s['60'];

          if (err) {
            ++_cover__().b['8'][0];
            ++_cover__().s['61'];

            _Logger2.default.error('Error while sending message to slack');
            ++_cover__().s['62'];
            return reject(err);
          } else {
            ++_cover__().b['8'][1];
          }
          ++_cover__().s['63'];
          resolve('Message sent');
        });
      });
    }
  }]);
  return SlackService;
}(_Template2.default);

exports.default = SlackService;