'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

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

var _callr = require('callr');

var _callr2 = _interopRequireDefault(_callr);

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
  var path = '/Users/slahir/Projects/bot-connector/src/services/Callr.service.js',
      hash = 'd85279cb0e59bc1b311b73363c2c6959';
  var global = new Function('return this')();
  var coverage = global['__coverage__'] || (global['__coverage__'] = {});
  if (coverage[path] && coverage[path].hash === hash) return coverage[path];
  var coverageData = global['JSON'].parse('{"path":"/Users/slahir/Projects/bot-connector/src/services/Callr.service.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0,"26":0,"27":0,"28":0,"29":0,"30":0,"31":0,"32":0,"33":0,"34":0,"35":0,"36":0,"37":0,"38":0,"39":0,"40":0,"41":0,"42":0,"43":0,"44":0,"45":0,"46":0,"47":0,"48":0,"49":0,"50":0,"51":0,"52":0,"53":0,"54":0,"55":0,"56":0,"57":0,"58":0,"59":0,"60":0,"61":0,"62":0,"63":0,"64":0,"65":0,"66":0,"67":0,"68":0,"69":0,"70":0,"71":0,"72":0,"73":0,"74":0,"75":0},"b":{"1":[0,0],"2":[0,0],"3":[0,0],"4":[0,0],"5":[0,0],"6":[0,0],"7":[0,0],"8":[0,0],"9":[0,0],"10":[0,0],"11":[0,0],"12":[0,0],"13":[0,0],"14":[0,0],"15":[0,0],"16":[0,0],"17":[0,0],"18":[0,0],"19":[0,0],"20":[0,0],"21":[0,0]},"f":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0},"statementMap":{"1":{"start":{"line":10,"column":4},"end":{"line":10,"column":25}},"2":{"start":{"line":11,"column":4},"end":{"line":11,"column":74}},"3":{"start":{"line":12,"column":4},"end":{"line":12,"column":65}},"4":{"start":{"line":14,"column":4},"end":{"line":24,"column":5}},"5":{"start":{"line":15,"column":6},"end":{"line":21,"column":24}},"6":{"start":{"line":17,"column":10},"end":{"line":17,"column":41}},"7":{"start":{"line":18,"column":10},"end":{"line":18,"column":30}},"8":{"start":{"line":19,"column":10},"end":{"line":19,"column":22}},"9":{"start":{"line":23,"column":6},"end":{"line":23,"column":30}},"10":{"start":{"line":28,"column":4},"end":{"line":28,"column":25}},"11":{"start":{"line":29,"column":4},"end":{"line":29,"column":68}},"12":{"start":{"line":30,"column":4},"end":{"line":30,"column":60}},"13":{"start":{"line":31,"column":4},"end":{"line":31,"column":77}},"14":{"start":{"line":33,"column":4},"end":{"line":45,"column":5}},"15":{"start":{"line":34,"column":6},"end":{"line":34,"column":137}},"16":{"start":{"line":35,"column":6},"end":{"line":41,"column":23}},"17":{"start":{"line":37,"column":10},"end":{"line":37,"column":41}},"18":{"start":{"line":38,"column":10},"end":{"line":38,"column":30}},"19":{"start":{"line":39,"column":10},"end":{"line":39,"column":22}},"20":{"start":{"line":42,"column":6},"end":{"line":42,"column":31}},"21":{"start":{"line":44,"column":6},"end":{"line":44,"column":30}},"22":{"start":{"line":49,"column":4},"end":{"line":49,"column":65}},"23":{"start":{"line":51,"column":4},"end":{"line":51,"column":58}},"24":{"start":{"line":55,"column":4},"end":{"line":55,"column":42}},"25":{"start":{"line":57,"column":4},"end":{"line":57,"column":81}},"26":{"start":{"line":57,"column":21},"end":{"line":57,"column":79}},"27":{"start":{"line":58,"column":4},"end":{"line":58,"column":81}},"28":{"start":{"line":58,"column":21},"end":{"line":58,"column":79}},"29":{"start":{"line":60,"column":4},"end":{"line":60,"column":15}},"30":{"start":{"line":64,"column":4},"end":{"line":64,"column":18}},"31":{"start":{"line":68,"column":4},"end":{"line":68,"column":32}},"32":{"start":{"line":69,"column":4},"end":{"line":69,"column":44}},"33":{"start":{"line":70,"column":4},"end":{"line":70,"column":59}},"34":{"start":{"line":71,"column":4},"end":{"line":71,"column":87}},"35":{"start":{"line":73,"column":4},"end":{"line":73,"column":59}},"36":{"start":{"line":73,"column":31},"end":{"line":73,"column":57}},"37":{"start":{"line":74,"column":4},"end":{"line":74,"column":26}},"38":{"start":{"line":78,"column":4},"end":{"line":78,"column":24}},"39":{"start":{"line":80,"column":4},"end":{"line":83,"column":5}},"40":{"start":{"line":87,"column":4},"end":{"line":93,"column":5}},"41":{"start":{"line":94,"column":4},"end":{"line":94,"column":36}},"42":{"start":{"line":98,"column":4},"end":{"line":98,"column":20}},"43":{"start":{"line":99,"column":4},"end":{"line":99,"column":24}},"44":{"start":{"line":101,"column":4},"end":{"line":123,"column":5}},"45":{"start":{"line":102,"column":6},"end":{"line":102,"column":125}},"46":{"start":{"line":103,"column":11},"end":{"line":123,"column":5}},"47":{"start":{"line":104,"column":6},"end":{"line":104,"column":47}},"48":{"start":{"line":105,"column":6},"end":{"line":105,"column":119}},"49":{"start":{"line":105,"column":81},"end":{"line":105,"column":117}},"50":{"start":{"line":106,"column":6},"end":{"line":106,"column":125}},"51":{"start":{"line":107,"column":11},"end":{"line":123,"column":5}},"52":{"start":{"line":108,"column":6},"end":{"line":113,"column":7}},"53":{"start":{"line":109,"column":8},"end":{"line":109,"column":58}},"54":{"start":{"line":110,"column":8},"end":{"line":112,"column":10}},"55":{"start":{"line":111,"column":10},"end":{"line":111,"column":116}},"56":{"start":{"line":111,"column":49},"end":{"line":111,"column":114}},"57":{"start":{"line":114,"column":6},"end":{"line":116,"column":7}},"58":{"start":{"line":115,"column":8},"end":{"line":115,"column":116}},"59":{"start":{"line":117,"column":6},"end":{"line":119,"column":7}},"60":{"start":{"line":118,"column":8},"end":{"line":118,"column":119}},"61":{"start":{"line":120,"column":6},"end":{"line":120,"column":51}},"62":{"start":{"line":122,"column":6},"end":{"line":122,"column":68}},"63":{"start":{"line":124,"column":4},"end":{"line":124,"column":16}},"64":{"start":{"line":128,"column":4},"end":{"line":149,"column":6}},"65":{"start":{"line":129,"column":6},"end":{"line":129,"column":31}},"66":{"start":{"line":130,"column":6},"end":{"line":130,"column":46}},"67":{"start":{"line":131,"column":6},"end":{"line":131,"column":67}},"68":{"start":{"line":133,"column":6},"end":{"line":144,"column":12}},"69":{"start":{"line":134,"column":8},"end":{"line":136,"column":9}},"70":{"start":{"line":135,"column":10},"end":{"line":135,"column":46}},"71":{"start":{"line":138,"column":8},"end":{"line":141,"column":9}},"72":{"start":{"line":139,"column":10},"end":{"line":139,"column":56}},"73":{"start":{"line":140,"column":10},"end":{"line":140,"column":89}},"74":{"start":{"line":143,"column":8},"end":{"line":143,"column":18}},"75":{"start":{"line":146,"column":6},"end":{"line":148,"column":22}}},"fnMap":{"1":{"name":null,"line":15,"loc":{"start":{"line":15,"column":24},"end":{"line":21,"column":23}}},"2":{"name":null,"line":16,"loc":{"start":{"line":16,"column":17},"end":{"line":20,"column":9}}},"3":{"name":null,"line":16,"loc":{"start":{"line":16,"column":17},"end":{"line":20,"column":9}}},"4":{"name":null,"line":16,"loc":{"start":{"line":16,"column":17},"end":{"line":20,"column":9}}},"5":{"name":null,"line":15,"loc":{"start":{"line":15,"column":24},"end":{"line":21,"column":23}}},"6":{"name":null,"line":16,"loc":{"start":{"line":16,"column":17},"end":{"line":20,"column":9}}},"7":{"name":null,"line":34,"loc":{"start":{"line":34,"column":24},"end":{"line":34,"column":136}}},"8":{"name":null,"line":35,"loc":{"start":{"line":35,"column":24},"end":{"line":41,"column":22}}},"9":{"name":null,"line":36,"loc":{"start":{"line":36,"column":17},"end":{"line":40,"column":9}}},"10":{"name":null,"line":36,"loc":{"start":{"line":36,"column":17},"end":{"line":40,"column":9}}},"11":{"name":null,"line":36,"loc":{"start":{"line":36,"column":17},"end":{"line":40,"column":9}}},"12":{"name":null,"line":34,"loc":{"start":{"line":34,"column":24},"end":{"line":34,"column":136}}},"13":{"name":null,"line":35,"loc":{"start":{"line":35,"column":24},"end":{"line":41,"column":22}}},"14":{"name":null,"line":36,"loc":{"start":{"line":36,"column":17},"end":{"line":40,"column":9}}},"15":{"name":null,"line":105,"loc":{"start":{"line":105,"column":70},"end":{"line":105,"column":118}}},"16":{"name":null,"line":110,"loc":{"start":{"line":110,"column":51},"end":{"line":112,"column":9}}},"17":{"name":null,"line":128,"loc":{"start":{"line":128,"column":23},"end":{"line":149,"column":5}}},"18":{"name":null,"line":128,"loc":{"start":{"line":128,"column":23},"end":{"line":149,"column":5}}},"19":{"name":null,"line":133,"loc":{"start":{"line":133,"column":36},"end":{"line":144,"column":7}}},"20":{"name":null,"line":140,"loc":{"start":{"line":140,"column":26},"end":{"line":140,"column":88}}},"21":{"name":null,"line":128,"loc":{"start":{"line":128,"column":23},"end":{"line":149,"column":5}}},"22":{"name":null,"line":133,"loc":{"start":{"line":133,"column":36},"end":{"line":144,"column":7}}},"23":{"name":null,"line":140,"loc":{"start":{"line":140,"column":26},"end":{"line":140,"column":88}}}},"branchMap":{"1":{"line":57,"type":"if","locations":[{"start":{"line":57,"column":19},"end":{"line":57,"column":81}},{"start":{"line":57,"column":19},"end":{"line":57,"column":81}}]},"2":{"line":58,"type":"if","locations":[{"start":{"line":58,"column":19},"end":{"line":58,"column":81}},{"start":{"line":58,"column":19},"end":{"line":58,"column":81}}]},"3":{"line":73,"type":"if","locations":[{"start":{"line":73,"column":29},"end":{"line":73,"column":59}},{"start":{"line":73,"column":29},"end":{"line":73,"column":59}}]},"4":{"line":101,"type":"if","locations":[{"start":{"line":101,"column":124},"end":{"line":103,"column":5}},{"start":{"line":101,"column":124},"end":{"line":103,"column":5}}]},"5":{"line":101,"type":"binary-expr","locations":[{"start":{"line":101,"column":8},"end":{"line":101,"column":83}},{"start":{"line":101,"column":87},"end":{"line":101,"column":122}}]},"6":{"line":101,"type":"binary-expr","locations":[{"start":{"line":101,"column":8},"end":{"line":101,"column":42}},{"start":{"line":101,"column":46},"end":{"line":101,"column":83}}]},"7":{"line":103,"type":"if","locations":[{"start":{"line":103,"column":59},"end":{"line":107,"column":5}},{"start":{"line":103,"column":59},"end":{"line":107,"column":5}}]},"8":{"line":107,"type":"if","locations":[{"start":{"line":107,"column":51},"end":{"line":121,"column":5}},{"start":{"line":121,"column":11},"end":{"line":123,"column":5}}]},"9":{"line":108,"type":"if","locations":[{"start":{"line":108,"column":91},"end":{"line":113,"column":7}},{"start":{"line":108,"column":91},"end":{"line":113,"column":7}}]},"10":{"line":108,"type":"binary-expr","locations":[{"start":{"line":108,"column":10},"end":{"line":108,"column":44}},{"start":{"line":108,"column":48},"end":{"line":108,"column":89}}]},"11":{"line":111,"type":"if","locations":[{"start":{"line":111,"column":47},"end":{"line":111,"column":116}},{"start":{"line":111,"column":47},"end":{"line":111,"column":116}}]},"12":{"line":114,"type":"if","locations":[{"start":{"line":114,"column":44},"end":{"line":116,"column":7}},{"start":{"line":114,"column":44},"end":{"line":116,"column":7}}]},"13":{"line":117,"type":"if","locations":[{"start":{"line":117,"column":47},"end":{"line":119,"column":7}},{"start":{"line":117,"column":47},"end":{"line":119,"column":7}}]},"14":{"line":134,"type":"if","locations":[{"start":{"line":134,"column":49},"end":{"line":136,"column":9}},{"start":{"line":134,"column":49},"end":{"line":136,"column":9}}]},"15":{"line":134,"type":"binary-expr","locations":[{"start":{"line":134,"column":12},"end":{"line":134,"column":24}},{"start":{"line":134,"column":28},"end":{"line":134,"column":47}}]},"16":{"line":138,"type":"if","locations":[{"start":{"line":138,"column":52},"end":{"line":141,"column":9}},{"start":{"line":138,"column":52},"end":{"line":141,"column":9}}]},"17":{"line":138,"type":"binary-expr","locations":[{"start":{"line":138,"column":12},"end":{"line":138,"column":29}},{"start":{"line":138,"column":33},"end":{"line":138,"column":50}}]},"18":{"line":134,"type":"if","locations":[{"start":{"line":134,"column":49},"end":{"line":136,"column":9}},{"start":{"line":134,"column":49},"end":{"line":136,"column":9}}]},"19":{"line":134,"type":"binary-expr","locations":[{"start":{"line":134,"column":12},"end":{"line":134,"column":47}},{"start":{"line":134,"column":12},"end":{"line":134,"column":47}}]},"20":{"line":138,"type":"if","locations":[{"start":{"line":138,"column":52},"end":{"line":141,"column":9}},{"start":{"line":138,"column":52},"end":{"line":141,"column":9}}]},"21":{"line":138,"type":"binary-expr","locations":[{"start":{"line":138,"column":12},"end":{"line":138,"column":50}},{"start":{"line":138,"column":12},"end":{"line":138,"column":50}}]}}}');
  coverageData.hash = hash;
  return coverage[path] = coverageData;
}

var CallrService = function (_ServiceTemplate) {
  (0, _inherits3.default)(CallrService, _ServiceTemplate);

  function CallrService() {
    (0, _classCallCheck3.default)(this, CallrService);
    return (0, _possibleConstructorReturn3.default)(this, (CallrService.__proto__ || (0, _getPrototypeOf2.default)(CallrService)).apply(this, arguments));
  }

  (0, _createClass3.default)(CallrService, null, [{
    key: 'onChannelCreate',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(channel) {
        var _this2 = this;

        var type, options, api;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                ++_cover__().s['1'];
                type = 'sms.mo';
                ++_cover__().s['2'];
                options = { hmac_secret: channel.password, hmac_algo: 'SHA256' };
                ++_cover__().s['3'];
                api = new _callr2.default.api(channel.userName, channel.password);
                ++_cover__().s['4'];
                _context2.prev = 7;
                ++_cover__().s['5'];
                _context2.next = 11;
                return new _promise2.default(function (resolve, reject) {
                  ++_cover__().f['5'];
                  ++_cover__().f['1'];
                  return api.call('webhooks.subscribe', type, channel.webhook, options).success(function () {
                    var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(res) {
                      ++_cover__().f['6'];
                      ++_cover__().f['4'];
                      return _regenerator2.default.wrap(function _callee$(_context) {
                        while (1) {
                          switch (_context.prev = _context.next) {
                            case 0:
                              ++_cover__().f['3'];
                              ++_cover__().f['2'];
                              ++_cover__().s['6'];

                              channel.webhookToken = res.hash;
                              ++_cover__().s['7'];
                              _context.next = 7;
                              return channel.save();

                            case 7:
                              ++_cover__().s['8'];

                              resolve(res);

                            case 9:
                            case 'end':
                              return _context.stop();
                          }
                        }
                      }, _callee, _this2);
                    }));

                    return function (_x2) {
                      return _ref2.apply(this, arguments);
                    };
                  }()).error(reject);
                });

              case 11:
                _context2.next = 17;
                break;

              case 13:
                _context2.prev = 13;
                _context2.t0 = _context2['catch'](7);
                ++_cover__().s['9'];

                channel.isErrored = true;

              case 17:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this, [[7, 13]]);
      }));

      function onChannelCreate(_x) {
        return _ref.apply(this, arguments);
      }

      return onChannelCreate;
    }()
  }, {
    key: 'onChannelUpdate',
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4(channel, oldChannel) {
        var _this3 = this;

        var type, client, channelOptions, oldClient;
        return _regenerator2.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                ++_cover__().s['10'];
                type = 'sms.mo';
                ++_cover__().s['11'];
                client = new _callr2.default.api(channel.userName, channel.password);
                ++_cover__().s['12'];
                channelOptions = { hmac_secret: channel.password };
                ++_cover__().s['13'];
                oldClient = new _callr2.default.api(oldChannel.userName, oldChannel.password);
                ++_cover__().s['14'];
                _context4.prev = 9;
                ++_cover__().s['15'];
                _context4.next = 13;
                return new _promise2.default(function (resolve) {
                  ++_cover__().f['12'];
                  ++_cover__().f['7'];
                  return oldClient.call('webhooks.unsubscribe', oldChannel.webhookToken).success(resolve()).error(resolve());
                });

              case 13:
                ++_cover__().s['16'];
                _context4.next = 16;
                return new _promise2.default(function (resolve, reject) {
                  ++_cover__().f['13'];
                  ++_cover__().f['8'];
                  return client.call('webhooks.subscribe', type, channel.webhook, channelOptions).success(function () {
                    var _ref4 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3(res) {
                      ++_cover__().f['14'];
                      ++_cover__().f['11'];
                      return _regenerator2.default.wrap(function _callee3$(_context3) {
                        while (1) {
                          switch (_context3.prev = _context3.next) {
                            case 0:
                              ++_cover__().f['10'];
                              ++_cover__().f['9'];
                              ++_cover__().s['17'];

                              channel.webhookToken = res.hash;
                              ++_cover__().s['18'];
                              _context3.next = 7;
                              return channel.save();

                            case 7:
                              ++_cover__().s['19'];

                              resolve(res);

                            case 9:
                            case 'end':
                              return _context3.stop();
                          }
                        }
                      }, _callee3, _this3);
                    }));

                    return function (_x5) {
                      return _ref4.apply(this, arguments);
                    };
                  }()).error(reject);
                });

              case 16:
                ++_cover__().s['20'];

                channel.isErrored = false;
                _context4.next = 24;
                break;

              case 20:
                _context4.prev = 20;
                _context4.t0 = _context4['catch'](9);
                ++_cover__().s['21'];

                channel.isErrored = true;

              case 24:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this, [[9, 20]]);
      }));

      function onChannelUpdate(_x3, _x4) {
        return _ref3.apply(this, arguments);
      }

      return onChannelUpdate;
    }()
  }, {
    key: 'onChannelDelete',
    value: function onChannelDelete(channel) {
      ++_cover__().s['22'];

      var api = new _callr2.default.api(channel.userName, channel.password);

      ++_cover__().s['23'];
      api.call('webhooks.unsubscribe', channel.webhookToken);
    }
  }, {
    key: 'checkParamsValidity',
    value: function checkParamsValidity(channel) {
      ++_cover__().s['24'];
      var userName = channel.userName,
          password = channel.password;
      ++_cover__().s['25'];


      if (!password) {
        ++_cover__().b['1'][0];
        ++_cover__().s['26'];
        throw new _errors.BadRequestError('Parameter password is missing');
      } else {
        ++_cover__().b['1'][1];
      }
      ++_cover__().s['27'];
      if (!userName) {
        ++_cover__().b['2'][0];
        ++_cover__().s['28'];
        throw new _errors.BadRequestError('Parameter userName is missing');
      } else {
        ++_cover__().b['2'][1];
      }

      ++_cover__().s['29'];
      return true;
    }
  }, {
    key: 'beforePipeline',
    value: function () {
      var _ref5 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee5(req, res, channel) {
        return _regenerator2.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                ++_cover__().s['30'];
                return _context5.abrupt('return', channel);

              case 2:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function beforePipeline(_x6, _x7, _x8) {
        return _ref5.apply(this, arguments);
      }

      return beforePipeline;
    }()
  }, {
    key: 'checkSecurity',
    value: function checkSecurity(req, res, channel) {
      ++_cover__().s['31'];
      var password = channel.password;
      ++_cover__().s['32'];

      var payload = (0, _stringify2.default)(req.body);
      ++_cover__().s['33'];
      var webhookSig = req.headers['x-callr-hmacsignature'];
      ++_cover__().s['34'];
      var hash = _crypto2.default.createHmac('SHA256', password).update(payload).digest('base64');

      ++_cover__().s['35'];
      if (hash !== webhookSig) {
        ++_cover__().b['3'][0];
        ++_cover__().s['36'];
        throw new _errors.ForbiddenError();
      } else {
        ++_cover__().b['3'][1];
      }
      ++_cover__().s['37'];
      res.status(200).send();
    }
  }, {
    key: 'extractOptions',
    value: function extractOptions(req) {
      ++_cover__().s['38'];
      var body = req.body;
      ++_cover__().s['39'];


      return {
        chatId: body.data.to,
        senderId: body.data.from
      };
    }
  }, {
    key: 'parseChannelMessage',
    value: function parseChannelMessage(conversation, message, opts) {
      ++_cover__().s['40'];

      var msg = {
        attachment: {
          type: 'text',
          content: message.data.text
        },
        channelType: 'callr'
      };
      ++_cover__().s['41'];
      return [conversation, msg, opts];
    }
  }, {
    key: 'formatMessage',
    value: function formatMessage(conversation, message, opts) {
      ++_cover__().s['42'];

      var reply = [];
      ++_cover__().s['43'];
      var keyboards = null;

      ++_cover__().s['44'];
      if ((++_cover__().b['5'][0], (++_cover__().b['6'][0], message.attachment.type === 'text') || (++_cover__().b['6'][1], message.attachment.type === 'picture')) || (++_cover__().b['5'][1], message.attachment.type === 'video')) {
        ++_cover__().b['4'][0];
        ++_cover__().s['45'];

        reply.push({ type: message.attachment.type, chatId: opts.chatId, to: opts.senderId, body: message.attachment.content });
      } else {
          ++_cover__().b['4'][1];
          ++_cover__().s['46'];
          if (message.attachment.type === 'quickReplies') {
            ++_cover__().b['7'][0];
            ++_cover__().s['47'];

            var _keyboards = [{ type: 'suggested' }];
            ++_cover__().s['48'];
            _keyboards[0].responses = message.attachment.content.buttons.map(function (button) {
              return ++_cover__().f['15'], ++_cover__().s['49'], { type: 'text', body: button.title };
            });
            ++_cover__().s['50'];
            reply.push({ type: 'text', chatId: opts.chatId, to: opts.senderId, body: message.attachment.content.title, keyboards: _keyboards });
          } else {
              ++_cover__().b['7'][1];
              ++_cover__().s['51'];
              if (message.attachment.type === 'card') {
                ++_cover__().b['8'][0];
                ++_cover__().s['52'];

                if ((++_cover__().b['10'][0], message.attachment.content.buttons) && (++_cover__().b['10'][1], message.attachment.content.buttons.length)) {
                  ++_cover__().b['9'][0];
                  ++_cover__().s['53'];

                  keyboards = [{ type: 'suggested', responses: [] }];
                  ++_cover__().s['54'];
                  message.attachment.content.buttons.forEach(function (button) {
                    ++_cover__().f['16'];
                    ++_cover__().s['55'];

                    if (button.type !== 'element_share') {
                      ++_cover__().b['11'][0];
                      ++_cover__().s['56'];
                      keyboards[0].responses.push({ type: 'text', body: button.value });
                    } else {
                      ++_cover__().b['11'][1];
                    }
                  });
                } else {
                  ++_cover__().b['9'][1];
                }
                ++_cover__().s['57'];
                if (message.attachment.content.title) {
                  ++_cover__().b['12'][0];
                  ++_cover__().s['58'];

                  reply.push({ type: 'text', chatId: opts.chatId, to: opts.senderId, body: message.attachment.content.title });
                } else {
                  ++_cover__().b['12'][1];
                }
                ++_cover__().s['59'];
                if (message.attachment.content.subtitle) {
                  ++_cover__().b['13'][0];
                  ++_cover__().s['60'];

                  reply.push({ type: 'text', chatId: opts.chatId, to: opts.senderId, body: message.attachment.content.subtitle });
                } else {
                  ++_cover__().b['13'][1];
                }
                ++_cover__().s['61'];
                reply[reply.length - 1].keyboards = keyboards;
              } else {
                ++_cover__().b['8'][1];
                ++_cover__().s['62'];

                throw new _errors.BadRequestError('Message type unsupported by CallR');
              }
            }
        }++_cover__().s['63'];
      return reply;
    }
  }, {
    key: 'sendMessage',
    value: function sendMessage(conversation, messages, opts) {
      var _this4 = this;

      ++_cover__().s['64'];

      return new _promise2.default(function () {
        var _ref6 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee6(resolve, reject) {
          ++_cover__().f['21'];
          var senderId, chatId, channel, api, reply;
          return _regenerator2.default.wrap(function _callee6$(_context6) {
            while (1) {
              switch (_context6.prev = _context6.next) {
                case 0:
                  ++_cover__().f['18'];
                  ++_cover__().f['17'];
                  ++_cover__().s['65'];
                  senderId = opts.senderId;
                  ++_cover__().s['66'];
                  chatId = conversation.chatId, channel = conversation.channel;
                  ++_cover__().s['67'];
                  api = new _callr2.default.api(channel.userName, channel.password);
                  ++_cover__().s['68'];
                  reply = messages.reduce(function (str, message) {
                    ++_cover__().f['22'];
                    ++_cover__().f['19'];
                    ++_cover__().s['69'];

                    if ((++_cover__().b['19'][0], (++_cover__().b['15'][0], message.body)) && (++_cover__().b['19'][1], (++_cover__().b['15'][1], message.body.length))) {
                      ++_cover__().b['18'][0];
                      ++_cover__().b['14'][0];
                      ++_cover__().s['70'];

                      str = '' + str + message.body + '\n';
                    } else {
                      ++_cover__().b['18'][1];
                      ++_cover__().b['14'][1];
                    }

                    ++_cover__().s['71'];
                    if ((++_cover__().b['21'][0], (++_cover__().b['17'][0], message.keyboards)) && (++_cover__().b['21'][1], (++_cover__().b['17'][1], message.keyboards))) {
                      ++_cover__().b['20'][0];
                      ++_cover__().b['16'][0];
                      ++_cover__().s['72'];

                      var buttons = message.keyboards[0].responses;
                      ++_cover__().s['73'];
                      buttons.forEach(function (button, i) {
                        ++_cover__().f['23'];
                        ++_cover__().f['20'];
                        return str = '' + str + i + ' - ' + button.body + '\n';
                      });
                    } else {
                      ++_cover__().b['20'][1];
                      ++_cover__().b['16'][1];
                    }

                    ++_cover__().s['74'];
                    return str;
                  }, '');
                  ++_cover__().s['75'];


                  api.call('sms.send', chatId, senderId, reply, null).success(resolve).error(reject);

                case 12:
                case 'end':
                  return _context6.stop();
              }
            }
          }, _callee6, _this4);
        }));

        return function (_x9, _x10) {
          return _ref6.apply(this, arguments);
        };
      }());
    }
  }]);
  return CallrService;
}(_Template2.default);

exports.default = CallrService;