'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _utils = require('../utils');

var _errors = require('../utils/errors');

var _Template = require('./Template.service');

var _Template2 = _interopRequireDefault(_Template);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _coverage__file;

function _cover__() {
  if (!_coverage__file) _coverage__file = _coverage__getInitialState();
  return _coverage__file;
}

function _coverage__getInitialState() {
  var path = '/Users/slahir/Projects/bot-connector/src/services/Messenger.service.js',
      hash = 'fffb2e02c60a1f145cb939c16c8867f0';
  var global = new Function('return this')();
  var coverage = global['__coverage__'] || (global['__coverage__'] = {});
  if (coverage[path] && coverage[path].hash === hash) return coverage[path];
  var coverageData = global['JSON'].parse('{"path":"/Users/slahir/Projects/bot-connector/src/services/Messenger.service.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0,"26":0,"27":0,"28":0,"29":0,"30":0,"31":0,"32":0,"33":0,"34":0,"35":0,"36":0,"37":0,"38":0,"39":0,"40":0,"41":0,"42":0,"43":0,"44":0,"45":0,"46":0,"47":0,"48":0,"49":0,"50":0,"51":0,"52":0,"53":0,"54":0,"55":0,"56":0,"57":0,"58":0,"59":0,"60":0,"61":0,"62":0,"63":0,"64":0,"65":0,"66":0,"67":0,"68":0,"69":0,"70":0,"71":0,"72":0,"73":0,"74":0,"75":0,"76":0,"77":0,"78":0,"79":0},"b":{"1":[0,0],"2":[0,0],"3":[0,0],"4":[0,0],"5":[0,0],"6":[0,0],"7":[0,0],"8":[0,0],"9":[0,0],"10":[0,0],"11":[0,0],"12":[0,0],"13":[0,0],"14":[0,0],"15":[0,0],"16":[0,0],"17":[0,0],"18":[0,0],"19":[0,0],"20":[0,0],"21":[0,0],"22":[0,0],"23":[0,0],"24":[0,0],"25":[0,0],"26":[0,0],"27":[0,0],"28":[0,0],"29":[0,0],"30":[0,0],"31":[0,0],"32":[0,0],"33":[0,0],"34":[0,0],"35":[0,0],"36":[0,0],"37":[0,0],"38":[0,0],"39":[0,0],"40":[0,0]},"f":{"1":0,"2":0,"3":0,"4":0},"statementMap":{"1":{"start":{"line":5,"column":0},"end":{"line":5,"column":75}},"2":{"start":{"line":13,"column":4},"end":{"line":13,"column":130}},"3":{"start":{"line":20,"column":4},"end":{"line":20,"column":26}},"4":{"start":{"line":27,"column":4},"end":{"line":27,"column":37}},"5":{"start":{"line":29,"column":4},"end":{"line":29,"column":75}},"6":{"start":{"line":29,"column":18},"end":{"line":29,"column":73}},"7":{"start":{"line":30,"column":4},"end":{"line":30,"column":77}},"8":{"start":{"line":30,"column":19},"end":{"line":30,"column":75}},"9":{"start":{"line":32,"column":4},"end":{"line":32,"column":15}},"10":{"start":{"line":39,"column":4},"end":{"line":39,"column":24}},"11":{"start":{"line":40,"column":4},"end":{"line":43,"column":5}},"12":{"start":{"line":50,"column":4},"end":{"line":50,"column":18}},"13":{"start":{"line":57,"column":4},"end":{"line":60,"column":5}},"14":{"start":{"line":62,"column":4},"end":{"line":71,"column":5}},"15":{"start":{"line":63,"column":6},"end":{"line":63,"column":45}},"16":{"start":{"line":64,"column":6},"end":{"line":64,"column":82}},"17":{"start":{"line":66,"column":6},"end":{"line":68,"column":7}},"18":{"start":{"line":67,"column":8},"end":{"line":67,"column":97}},"19":{"start":{"line":70,"column":6},"end":{"line":70,"column":51}},"20":{"start":{"line":73,"column":4},"end":{"line":77,"column":5}},"21":{"start":{"line":74,"column":6},"end":{"line":74,"column":37}},"22":{"start":{"line":75,"column":6},"end":{"line":75,"column":77}},"23":{"start":{"line":76,"column":6},"end":{"line":76,"column":51}},"24":{"start":{"line":79,"column":4},"end":{"line":81,"column":5}},"25":{"start":{"line":80,"column":6},"end":{"line":80,"column":30}},"26":{"start":{"line":83,"column":4},"end":{"line":83,"column":65}},"27":{"start":{"line":84,"column":4},"end":{"line":84,"column":93}},"28":{"start":{"line":86,"column":4},"end":{"line":98,"column":5}},"29":{"start":{"line":87,"column":6},"end":{"line":87,"column":83}},"30":{"start":{"line":88,"column":6},"end":{"line":88,"column":73}},"31":{"start":{"line":90,"column":6},"end":{"line":90,"column":34}},"32":{"start":{"line":92,"column":6},"end":{"line":97,"column":7}},"33":{"start":{"line":93,"column":8},"end":{"line":93,"column":68}},"34":{"start":{"line":94,"column":8},"end":{"line":94,"column":45}},"35":{"start":{"line":96,"column":8},"end":{"line":96,"column":53}},"36":{"start":{"line":100,"column":4},"end":{"line":100,"column":49}},"37":{"start":{"line":107,"column":4},"end":{"line":107,"column":18}},"38":{"start":{"line":109,"column":4},"end":{"line":190,"column":5}},"39":{"start":{"line":110,"column":6},"end":{"line":110,"column":22}},"40":{"start":{"line":111,"column":6},"end":{"line":119,"column":7}},"41":{"start":{"line":121,"column":6},"end":{"line":172,"column":7}},"42":{"start":{"line":122,"column":8},"end":{"line":122,"column":45}},"43":{"start":{"line":123,"column":8},"end":{"line":123,"column":71}},"44":{"start":{"line":124,"column":13},"end":{"line":172,"column":7}},"45":{"start":{"line":125,"column":8},"end":{"line":125,"column":61}},"46":{"start":{"line":126,"column":8},"end":{"line":126,"column":71}},"47":{"start":{"line":127,"column":13},"end":{"line":172,"column":7}},"48":{"start":{"line":128,"column":8},"end":{"line":128,"column":27}},"49":{"start":{"line":129,"column":8},"end":{"line":129,"column":48}},"50":{"start":{"line":130,"column":8},"end":{"line":130,"column":64}},"51":{"start":{"line":131,"column":8},"end":{"line":139,"column":10}},"52":{"start":{"line":132,"column":10},"end":{"line":138,"column":11}},"53":{"start":{"line":133,"column":12},"end":{"line":133,"column":42}},"54":{"start":{"line":134,"column":17},"end":{"line":138,"column":11}},"55":{"start":{"line":135,"column":12},"end":{"line":135,"column":72}},"56":{"start":{"line":136,"column":17},"end":{"line":138,"column":11}},"57":{"start":{"line":137,"column":12},"end":{"line":137,"column":76}},"58":{"start":{"line":140,"column":8},"end":{"line":146,"column":10}},"59":{"start":{"line":147,"column":8},"end":{"line":147,"column":58}},"60":{"start":{"line":148,"column":13},"end":{"line":172,"column":7}},"61":{"start":{"line":150,"column":8},"end":{"line":150,"column":27}},"62":{"start":{"line":151,"column":8},"end":{"line":151,"column":48}},"63":{"start":{"line":152,"column":8},"end":{"line":152,"column":64}},"64":{"start":{"line":153,"column":8},"end":{"line":169,"column":10}},"65":{"start":{"line":154,"column":10},"end":{"line":154,"column":22}},"66":{"start":{"line":155,"column":10},"end":{"line":161,"column":12}},"67":{"start":{"line":156,"column":12},"end":{"line":160,"column":13}},"68":{"start":{"line":157,"column":14},"end":{"line":157,"column":74}},"69":{"start":{"line":158,"column":19},"end":{"line":160,"column":13}},"70":{"start":{"line":159,"column":14},"end":{"line":159,"column":78}},"71":{"start":{"line":162,"column":10},"end":{"line":168,"column":12}},"72":{"start":{"line":171,"column":8},"end":{"line":171,"column":58}},"73":{"start":{"line":174,"column":11},"end":{"line":190,"column":5}},"74":{"start":{"line":175,"column":6},"end":{"line":181,"column":7}},"75":{"start":{"line":182,"column":6},"end":{"line":182,"column":163}},"76":{"start":{"line":182,"column":54},"end":{"line":182,"column":162}},"77":{"start":{"line":184,"column":6},"end":{"line":189,"column":7}},"78":{"start":{"line":191,"column":4},"end":{"line":191,"column":14}},"79":{"start":{"line":198,"column":4},"end":{"line":199,"column":20}}},"fnMap":{"1":{"name":null,"line":131,"loc":{"start":{"line":131,"column":51},"end":{"line":139,"column":9}}},"2":{"name":null,"line":153,"loc":{"start":{"line":153,"column":43},"end":{"line":169,"column":9}}},"3":{"name":null,"line":155,"loc":{"start":{"line":155,"column":34},"end":{"line":161,"column":11}}},"4":{"name":null,"line":182,"loc":{"start":{"line":182,"column":49},"end":{"line":182,"column":162}}}},"branchMap":{"1":{"line":13,"type":"binary-expr","locations":[{"start":{"line":13,"column":12},"end":{"line":13,"column":49}},{"start":{"line":13,"column":53},"end":{"line":13,"column":129}}]},"2":{"line":29,"type":"if","locations":[{"start":{"line":29,"column":16},"end":{"line":29,"column":75}},{"start":{"line":29,"column":16},"end":{"line":29,"column":75}}]},"3":{"line":30,"type":"if","locations":[{"start":{"line":30,"column":17},"end":{"line":30,"column":77}},{"start":{"line":30,"column":17},"end":{"line":30,"column":77}}]},"4":{"line":62,"type":"if","locations":[{"start":{"line":62,"column":55},"end":{"line":71,"column":5}},{"start":{"line":62,"column":55},"end":{"line":71,"column":5}}]},"5":{"line":66,"type":"if","locations":[{"start":{"line":66,"column":76},"end":{"line":68,"column":7}},{"start":{"line":66,"column":76},"end":{"line":68,"column":7}}]},"6":{"line":73,"type":"if","locations":[{"start":{"line":73,"column":48},"end":{"line":77,"column":5}},{"start":{"line":73,"column":48},"end":{"line":77,"column":5}}]},"7":{"line":79,"type":"if","locations":[{"start":{"line":79,"column":147},"end":{"line":81,"column":5}},{"start":{"line":79,"column":147},"end":{"line":81,"column":5}}]},"8":{"line":79,"type":"binary-expr","locations":[{"start":{"line":79,"column":8},"end":{"line":79,"column":46}},{"start":{"line":79,"column":51},"end":{"line":79,"column":144}}]},"9":{"line":79,"type":"binary-expr","locations":[{"start":{"line":79,"column":51},"end":{"line":79,"column":96}},{"start":{"line":79,"column":100},"end":{"line":79,"column":144}}]},"10":{"line":84,"type":"binary-expr","locations":[{"start":{"line":84,"column":27},"end":{"line":84,"column":54}},{"start":{"line":84,"column":58},"end":{"line":84,"column":93}}]},"11":{"line":86,"type":"if","locations":[{"start":{"line":86,"column":24},"end":{"line":89,"column":5}},{"start":{"line":89,"column":11},"end":{"line":98,"column":5}}]},"12":{"line":87,"type":"cond-expr","locations":[{"start":{"line":87,"column":57},"end":{"line":87,"column":66}},{"start":{"line":87,"column":69},"end":{"line":87,"column":83}}]},"13":{"line":92,"type":"if","locations":[{"start":{"line":92,"column":39},"end":{"line":95,"column":7}},{"start":{"line":95,"column":13},"end":{"line":97,"column":7}}]},"14":{"line":66,"type":"if","locations":[{"start":{"line":66,"column":76},"end":{"line":68,"column":7}},{"start":{"line":66,"column":76},"end":{"line":68,"column":7}}]},"15":{"line":79,"type":"binary-expr","locations":[{"start":{"line":79,"column":8},"end":{"line":79,"column":145}},{"start":{"line":79,"column":8},"end":{"line":79,"column":145}}]},"16":{"line":79,"type":"binary-expr","locations":[{"start":{"line":79,"column":51},"end":{"line":79,"column":144}},{"start":{"line":79,"column":51},"end":{"line":79,"column":144}}]},"17":{"line":84,"type":"binary-expr","locations":[{"start":{"line":84,"column":27},"end":{"line":84,"column":93}},{"start":{"line":84,"column":27},"end":{"line":84,"column":93}}]},"18":{"line":86,"type":"if","locations":[{"start":{"line":86,"column":24},"end":{"line":89,"column":5}},{"start":{"line":89,"column":11},"end":{"line":98,"column":5}}]},"19":{"line":87,"type":"cond-expr","locations":[{"start":{"line":87,"column":28},"end":{"line":87,"column":83}},{"start":{"line":87,"column":28},"end":{"line":87,"column":83}}]},"20":{"line":92,"type":"if","locations":[{"start":{"line":92,"column":39},"end":{"line":95,"column":7}},{"start":{"line":95,"column":13},"end":{"line":97,"column":7}}]},"21":{"line":109,"type":"if","locations":[{"start":{"line":109,"column":90},"end":{"line":174,"column":5}},{"start":{"line":109,"column":90},"end":{"line":174,"column":5}}]},"22":{"line":109,"type":"binary-expr","locations":[{"start":{"line":109,"column":8},"end":{"line":109,"column":42}},{"start":{"line":109,"column":46},"end":{"line":109,"column":88}}]},"23":{"line":121,"type":"if","locations":[{"start":{"line":121,"column":49},"end":{"line":124,"column":7}},{"start":{"line":121,"column":49},"end":{"line":124,"column":7}}]},"24":{"line":124,"type":"if","locations":[{"start":{"line":124,"column":93},"end":{"line":127,"column":7}},{"start":{"line":124,"column":93},"end":{"line":127,"column":7}}]},"25":{"line":124,"type":"binary-expr","locations":[{"start":{"line":124,"column":17},"end":{"line":124,"column":52}},{"start":{"line":124,"column":56},"end":{"line":124,"column":91}}]},"26":{"line":127,"type":"if","locations":[{"start":{"line":127,"column":53},"end":{"line":148,"column":7}},{"start":{"line":127,"column":53},"end":{"line":148,"column":7}}]},"27":{"line":132,"type":"if","locations":[{"start":{"line":132,"column":43},"end":{"line":134,"column":11}},{"start":{"line":132,"column":43},"end":{"line":134,"column":11}}]},"28":{"line":134,"type":"if","locations":[{"start":{"line":134,"column":72},"end":{"line":136,"column":11}},{"start":{"line":134,"column":72},"end":{"line":136,"column":11}}]},"29":{"line":134,"type":"binary-expr","locations":[{"start":{"line":134,"column":21},"end":{"line":134,"column":41}},{"start":{"line":134,"column":45},"end":{"line":134,"column":70}}]},"30":{"line":136,"type":"if","locations":[{"start":{"line":136,"column":103},"end":{"line":138,"column":11}},{"start":{"line":136,"column":103},"end":{"line":138,"column":11}}]},"31":{"line":136,"type":"binary-expr","locations":[{"start":{"line":136,"column":21},"end":{"line":136,"column":71}},{"start":{"line":136,"column":75},"end":{"line":136,"column":101}}]},"32":{"line":136,"type":"binary-expr","locations":[{"start":{"line":136,"column":21},"end":{"line":136,"column":42}},{"start":{"line":136,"column":46},"end":{"line":136,"column":71}}]},"33":{"line":148,"type":"if","locations":[{"start":{"line":148,"column":59},"end":{"line":172,"column":7}},{"start":{"line":148,"column":59},"end":{"line":172,"column":7}}]},"34":{"line":156,"type":"if","locations":[{"start":{"line":156,"column":67},"end":{"line":158,"column":13}},{"start":{"line":156,"column":67},"end":{"line":158,"column":13}}]},"35":{"line":156,"type":"binary-expr","locations":[{"start":{"line":156,"column":16},"end":{"line":156,"column":36}},{"start":{"line":156,"column":40},"end":{"line":156,"column":65}}]},"36":{"line":158,"type":"if","locations":[{"start":{"line":158,"column":105},"end":{"line":160,"column":13}},{"start":{"line":158,"column":105},"end":{"line":160,"column":13}}]},"37":{"line":158,"type":"binary-expr","locations":[{"start":{"line":158,"column":23},"end":{"line":158,"column":73}},{"start":{"line":158,"column":77},"end":{"line":158,"column":103}}]},"38":{"line":158,"type":"binary-expr","locations":[{"start":{"line":158,"column":23},"end":{"line":158,"column":44}},{"start":{"line":158,"column":48},"end":{"line":158,"column":73}}]},"39":{"line":174,"type":"if","locations":[{"start":{"line":174,"column":59},"end":{"line":183,"column":5}},{"start":{"line":183,"column":11},"end":{"line":190,"column":5}}]},"40":{"line":182,"type":"cond-expr","locations":[{"start":{"line":182,"column":110},"end":{"line":182,"column":116}},{"start":{"line":182,"column":119},"end":{"line":182,"column":125}}]}}}');
  coverageData.hash = hash;
  return coverage[path] = coverageData;
}

++_cover__().s['1'];


var agent = require('superagent-promise')(require('superagent'), _promise2.default);

var MessengerService = function (_ServiceTemplate) {
  (0, _inherits3.default)(MessengerService, _ServiceTemplate);

  function MessengerService() {
    (0, _classCallCheck3.default)(this, MessengerService);
    return (0, _possibleConstructorReturn3.default)(this, (MessengerService.__proto__ || (0, _getPrototypeOf2.default)(MessengerService)).apply(this, arguments));
  }

  (0, _createClass3.default)(MessengerService, null, [{
    key: 'connectWebhook',


    /**
     * Suscribe webhook
     */
    value: function connectWebhook(req, channel) {
      ++_cover__().s['2'];

      return (++_cover__().b['1'][0], req.query['hub.mode'] === 'subscribe') && (++_cover__().b['1'][1], req.query['hub.verify_token'] === (0, _utils.getWebhookToken)(channel._id, channel.slug));
    }

    /**
     * Check to see if the message is form a valid webhook
     */

  }, {
    key: 'checkSecurity',
    value: function checkSecurity(req, res) {
      ++_cover__().s['3'];

      res.status(200).send();
    }

    /**
     * Check to see if the message is form a valid webhook
     */

  }, {
    key: 'checkParamsValidity',
    value: function checkParamsValidity(channel) {
      ++_cover__().s['4'];
      var token = channel.token,
          apiKey = channel.apiKey;
      ++_cover__().s['5'];


      if (!token) {
        ++_cover__().b['2'][0];
        ++_cover__().s['6'];
        throw new _errors.BadRequestError('Parameter token is missing');
      } else {
        ++_cover__().b['2'][1];
      }
      ++_cover__().s['7'];
      if (!apiKey) {
        ++_cover__().b['3'][0];
        ++_cover__().s['8'];
        throw new _errors.BadRequestError('Parameter apiKey is missing');
      } else {
        ++_cover__().b['3'][1];
      }

      ++_cover__().s['9'];
      return true;
    }

    /**
     * Extract information from the request before the pipeline
     */

  }, {
    key: 'extractOptions',
    value: function extractOptions(req) {
      ++_cover__().s['10'];
      var body = req.body;
      ++_cover__().s['11'];

      return {
        chatId: body.entry[0].messaging[0].recipient.id + '-' + body.entry[0].messaging[0].sender.id,
        senderId: body.entry[0].messaging[0].sender.id
      };
    }

    /**
     * Send directly a 200 to avoid the echo
     */

  }, {
    key: 'beforePipeline',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(req, res, channel) {
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                ++_cover__().s['12'];
                return _context.abrupt('return', channel);

              case 2:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function beforePipeline(_x, _x2, _x3) {
        return _ref.apply(this, arguments);
      }

      return beforePipeline;
    }()

    /**
     * Parse message to connector format
     */

  }, {
    key: 'parseChannelMessage',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(conversation, message, opts) {
        var msg, facebookMessage, attachmentType;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                ++_cover__().s['13'];
                msg = {
                  attachment: {},
                  channelType: 'messenger'
                };
                ++_cover__().s['14'];

                if (!message.entry[0].messaging[0].account_linking) {
                  _context2.next = 15;
                  break;
                }

                ++_cover__().b['4'][0];
                ++_cover__().s['15'];

                msg.attachment.type = 'account_linking';
                ++_cover__().s['16'];
                msg.attachment.status = message.entry[0].messaging[0].account_linking.status;

                ++_cover__().s['17'];
                if (message.entry[0].messaging[0].account_linking.authorization_code) {
                  ++_cover__().b['14'][0];
                  ++_cover__().b['5'][0];
                  ++_cover__().s['18'];

                  msg.attachment.content = message.entry[0].messaging[0].account_linking.authorization_code;
                } else {
                  ++_cover__().b['14'][1];
                  ++_cover__().b['5'][1];
                }

                ++_cover__().s['19'];
                return _context2.abrupt('return', _promise2.default.all([conversation, msg, opts]));

              case 15:
                ++_cover__().b['4'][1];

              case 16:
                ++_cover__().s['20'];

                if (!message.entry[0].messaging[0].postback) {
                  _context2.next = 27;
                  break;
                }

                ++_cover__().b['6'][0];
                ++_cover__().s['21'];

                msg.attachment.type = 'payload';
                ++_cover__().s['22'];
                msg.attachment.content = message.entry[0].messaging[0].postback.payload;
                ++_cover__().s['23'];
                return _context2.abrupt('return', _promise2.default.all([conversation, msg, opts]));

              case 27:
                ++_cover__().b['6'][1];

              case 28:
                ++_cover__().s['24'];

                if (!((++_cover__().b['15'][0], (++_cover__().b['8'][0], !message.entry[0].messaging[0].message)) || (++_cover__().b['15'][1], (++_cover__().b['8'][1], (++_cover__().b['16'][0], (++_cover__().b['9'][0], message.entry[0].messaging[0].message.is_echo)) && (++_cover__().b['16'][1], (++_cover__().b['9'][1], message.entry[0].messaging[0].message.app_id)))))) {
                  _context2.next = 35;
                  break;
                }

                ++_cover__().b['7'][0];
                ++_cover__().s['25'];
                throw new _errors.StopPipeline();

              case 35:
                ++_cover__().b['7'][1];

              case 36:
                ++_cover__().s['26'];
                facebookMessage = message.entry[0].messaging[0].message;
                ++_cover__().s['27'];
                attachmentType = (++_cover__().b['17'][0], (++_cover__().b['10'][0], facebookMessage.attachments)) && (++_cover__().b['17'][1], (++_cover__().b['10'][1], facebookMessage.attachments[0].type));
                ++_cover__().s['28'];


                if (attachmentType) {
                  ++_cover__().b['18'][0];
                  ++_cover__().b['11'][0];
                  ++_cover__().s['29'];

                  msg.attachment.type = attachmentType === 'image' ? (++_cover__().b['19'][0], (++_cover__().b['12'][0], 'picture')) : (++_cover__().b['19'][1], (++_cover__().b['12'][1], attachmentType));
                  ++_cover__().s['30'];
                  msg.attachment.content = facebookMessage.attachments[0].payload.url;
                } else {
                  ++_cover__().b['18'][1];
                  ++_cover__().b['11'][1];
                  ++_cover__().s['31'];

                  msg.attachment.type = 'text';

                  ++_cover__().s['32'];
                  if (facebookMessage.quick_reply) {
                    ++_cover__().b['20'][0];
                    ++_cover__().b['13'][0];
                    ++_cover__().s['33'];

                    msg.attachment.content = facebookMessage.quick_reply.payload;
                    ++_cover__().s['34'];
                    msg.attachment.is_button_click = true;
                  } else {
                    ++_cover__().b['20'][1];
                    ++_cover__().b['13'][1];
                    ++_cover__().s['35'];

                    msg.attachment.content = facebookMessage.text;
                  }
                }

                ++_cover__().s['36'];
                return _context2.abrupt('return', _promise2.default.all([conversation, msg, opts]));

              case 44:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function parseChannelMessage(_x4, _x5, _x6) {
        return _ref2.apply(this, arguments);
      }

      return parseChannelMessage;
    }()

    /*
     * Parse message from bot-connector format to bot-connecto format
     */

  }, {
    key: 'formatMessage',
    value: function formatMessage(conversation, message, opts) {
      ++_cover__().s['37'];

      var msg = null;

      ++_cover__().s['38'];
      if ((++_cover__().b['22'][0], message.attachment.type !== 'text') && (++_cover__().b['22'][1], message.attachment.type !== 'quickReplies')) {
        (function () {
          ++_cover__().b['21'][0];
          ++_cover__().s['39'];

          var buttons = [];
          ++_cover__().s['40'];
          msg = {
            recipient: { id: opts.senderId },
            message: {
              attachment: {
                type: String,
                payload: {}
              }
            }
          };

          ++_cover__().s['41'];
          if (message.attachment.type === 'picture') {
            ++_cover__().b['23'][0];
            ++_cover__().s['42'];

            msg.message.attachment.type = 'image';
            ++_cover__().s['43'];
            msg.message.attachment.payload.url = message.attachment.content;
          } else {
              ++_cover__().b['23'][1];
              ++_cover__().s['44'];
              if ((++_cover__().b['25'][0], message.attachment.type === 'video') || (++_cover__().b['25'][1], message.attachment.type === 'audio')) {
                ++_cover__().b['24'][0];
                ++_cover__().s['45'];

                msg.message.attachment.type = message.attachment.type;
                ++_cover__().s['46'];
                msg.message.attachment.payload.url = message.attachment.content;
              } else {
                  ++_cover__().b['24'][1];
                  ++_cover__().s['47'];
                  if (message.attachment.type === 'card') {
                    ++_cover__().b['26'][0];
                    ++_cover__().s['48'];

                    var elements = [];
                    ++_cover__().s['49'];
                    msg.message.attachment.type = 'template';
                    ++_cover__().s['50'];
                    msg.message.attachment.payload.template_type = 'generic';
                    ++_cover__().s['51'];
                    message.attachment.content.buttons.forEach(function (e) {
                      ++_cover__().f['1'];
                      ++_cover__().s['52'];

                      if (e.type === 'account_unlink') {
                        ++_cover__().b['27'][0];
                        ++_cover__().s['53'];

                        buttons.push({ type: e.type });
                      } else {
                          ++_cover__().b['27'][1];
                          ++_cover__().s['54'];
                          if ((++_cover__().b['29'][0], e.type === 'web_url') || (++_cover__().b['29'][1], e.type === 'account_link')) {
                            ++_cover__().b['28'][0];
                            ++_cover__().s['55'];

                            buttons.push({ type: e.type, title: e.title, url: e.value });
                          } else {
                              ++_cover__().b['28'][1];
                              ++_cover__().s['56'];
                              if ((++_cover__().b['31'][0], (++_cover__().b['32'][0], e.type === 'postback') || (++_cover__().b['32'][1], e.type === 'phone_number')) || (++_cover__().b['31'][1], e.type === 'element_share')) {
                                ++_cover__().b['30'][0];
                                ++_cover__().s['57'];

                                buttons.push({ type: e.type, title: e.title, payload: e.value });
                              } else {
                                ++_cover__().b['30'][1];
                              }
                            }
                        }
                    });
                    ++_cover__().s['58'];
                    elements.push({
                      title: message.attachment.content.title,
                      item_url: message.attachment.content.itemUrl,
                      image_url: message.attachment.content.imageUrl,
                      subtitle: message.attachment.content.subtitle,
                      buttons: buttons
                    });
                    ++_cover__().s['59'];
                    msg.message.attachment.payload.elements = elements;
                  } else {
                      ++_cover__().b['26'][1];
                      ++_cover__().s['60'];
                      if (message.attachment.type === 'carouselle') {
                        (function () {
                          ++_cover__().b['33'][0];
                          ++_cover__().s['61'];


                          var elements = [];
                          ++_cover__().s['62'];
                          msg.message.attachment.type = 'template';
                          ++_cover__().s['63'];
                          msg.message.attachment.payload.template_type = 'generic';
                          ++_cover__().s['64'];
                          message.attachment.content.forEach(function (content) {
                            ++_cover__().f['2'];
                            ++_cover__().s['65'];

                            buttons = [];
                            ++_cover__().s['66'];
                            content.buttons.forEach(function (e) {
                              ++_cover__().f['3'];
                              ++_cover__().s['67'];

                              if ((++_cover__().b['35'][0], e.type === 'web_url') || (++_cover__().b['35'][1], e.type === 'account_link')) {
                                ++_cover__().b['34'][0];
                                ++_cover__().s['68'];

                                buttons.push({ type: e.type, title: e.title, url: e.value });
                              } else {
                                  ++_cover__().b['34'][1];
                                  ++_cover__().s['69'];
                                  if ((++_cover__().b['37'][0], (++_cover__().b['38'][0], e.type === 'postback') || (++_cover__().b['38'][1], e.type === 'phone_number')) || (++_cover__().b['37'][1], e.type === 'element_share')) {
                                    ++_cover__().b['36'][0];
                                    ++_cover__().s['70'];

                                    buttons.push({ type: e.type, title: e.title, payload: e.value });
                                  } else {
                                    ++_cover__().b['36'][1];
                                  }
                                }
                            });
                            ++_cover__().s['71'];
                            elements.push({
                              subtitle: content.subtitle,
                              title: content.title,
                              item_url: content.itemUrl,
                              image_url: content.imageUrl,
                              buttons: buttons
                            });
                          });

                          ++_cover__().s['72'];
                          msg.message.attachment.payload.elements = elements;
                        })();
                      } else {
                        ++_cover__().b['33'][1];
                      }
                    }
                }
            }
        })();
      } else {
          ++_cover__().b['21'][1];
          ++_cover__().s['73'];
          if (message.attachment.type === 'quickReplies') {
            ++_cover__().b['39'][0];
            ++_cover__().s['74'];

            msg = {
              recipient: { id: opts.senderId },
              message: {
                text: message.attachment.content.title,
                quick_replies: []
              }
            };
            ++_cover__().s['75'];
            message.attachment.content.buttons.forEach(function (e) {
              return ++_cover__().f['4'], ++_cover__().s['76'], msg.message.quick_replies.push({ content_type: e.type ? (++_cover__().b['40'][0], e.type) : (++_cover__().b['40'][1], 'text'), title: e.title, payload: e.value });
            });
          } else {
            ++_cover__().b['39'][1];
            ++_cover__().s['77'];

            msg = {
              recipient: { id: opts.senderId },
              message: {
                text: message.attachment.content
              }
            };
          }
        }++_cover__().s['78'];
      return msg;
    }

    /*
     * Send message back to facebook
     */

  }, {
    key: 'sendMessage',
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3(conversation, message) {
        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                ++_cover__().s['79'];
                _context3.next = 3;
                return agent('POST', 'https://graph.facebook.com/v2.6/me/messages?access_token=' + conversation.channel.token).send(message);

              case 3:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function sendMessage(_x7, _x8) {
        return _ref3.apply(this, arguments);
      }

      return sendMessage;
    }()
  }]);
  return MessengerService;
}(_Template2.default);

exports.default = MessengerService;