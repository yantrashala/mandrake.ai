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

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

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
  var path = '/Users/slahir/Projects/bot-connector/src/services/SlackApp.service.js',
      hash = '9318b11b71841af4ecc9d54562cd6cae';
  var global = new Function('return this')();
  var coverage = global['__coverage__'] || (global['__coverage__'] = {});
  if (coverage[path] && coverage[path].hash === hash) return coverage[path];
  var coverageData = global['JSON'].parse('{"path":"/Users/slahir/Projects/bot-connector/src/services/SlackApp.service.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0,"26":0,"27":0,"28":0,"29":0,"30":0,"31":0,"32":0,"33":0,"34":0,"35":0,"36":0,"37":0,"38":0,"39":0,"40":0,"41":0,"42":0},"b":{"1":[0,0],"2":[0,0],"3":[0,0],"4":[0,0],"5":[0,0],"6":[0,0],"7":[0,0],"8":[0,0],"9":[0,0],"10":[0,0],"11":[0,0],"12":[0,0],"13":[0,0],"14":[0,0],"15":[0,0],"16":[0,0],"17":[0,0],"18":[0,0],"19":[0,0],"20":[0,0],"21":[0,0],"22":[0,0]},"f":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0},"statementMap":{"1":{"start":{"line":11,"column":4},"end":{"line":11,"column":70}},"2":{"start":{"line":12,"column":4},"end":{"line":12,"column":18}},"3":{"start":{"line":17,"column":4},"end":{"line":19,"column":5}},"4":{"start":{"line":18,"column":6},"end":{"line":18,"column":48}},"5":{"start":{"line":22,"column":4},"end":{"line":24,"column":5}},"6":{"start":{"line":23,"column":6},"end":{"line":23,"column":55}},"7":{"start":{"line":27,"column":4},"end":{"line":27,"column":80}},"8":{"start":{"line":28,"column":4},"end":{"line":28,"column":56}},"9":{"start":{"line":28,"column":20},"end":{"line":28,"column":54}},"10":{"start":{"line":31,"column":4},"end":{"line":33,"column":5}},"11":{"start":{"line":32,"column":6},"end":{"line":32,"column":30}},"12":{"start":{"line":36,"column":4},"end":{"line":38,"column":5}},"13":{"start":{"line":37,"column":6},"end":{"line":37,"column":30}},"14":{"start":{"line":40,"column":4},"end":{"line":40,"column":18}},"15":{"start":{"line":44,"column":4},"end":{"line":44,"column":46}},"16":{"start":{"line":46,"column":4},"end":{"line":46,"column":81}},"17":{"start":{"line":46,"column":21},"end":{"line":46,"column":79}},"18":{"start":{"line":47,"column":4},"end":{"line":47,"column":89}},"19":{"start":{"line":47,"column":25},"end":{"line":47,"column":87}},"20":{"start":{"line":49,"column":4},"end":{"line":49,"column":15}},"21":{"start":{"line":53,"column":4},"end":{"line":53,"column":47}},"22":{"start":{"line":55,"column":4},"end":{"line":68,"column":6}},"23":{"start":{"line":72,"column":4},"end":{"line":75,"column":5}},"24":{"start":{"line":73,"column":6},"end":{"line":73,"column":50}},"25":{"start":{"line":74,"column":6},"end":{"line":74,"column":41}},"26":{"start":{"line":74,"column":19},"end":{"line":74,"column":39}},"27":{"start":{"line":79,"column":4},"end":{"line":79,"column":37}},"28":{"start":{"line":80,"column":4},"end":{"line":80,"column":30}},"29":{"start":{"line":81,"column":4},"end":{"line":81,"column":61}},"30":{"start":{"line":83,"column":4},"end":{"line":87,"column":5}},"31":{"start":{"line":84,"column":6},"end":{"line":84,"column":93}},"32":{"start":{"line":85,"column":6},"end":{"line":85,"column":28}},"33":{"start":{"line":86,"column":6},"end":{"line":86,"column":12}},"34":{"start":{"line":88,"column":4},"end":{"line":88,"column":26}},"35":{"start":{"line":90,"column":4},"end":{"line":113,"column":8}},"36":{"start":{"line":92,"column":8},"end":{"line":112,"column":9}},"37":{"start":{"line":93,"column":10},"end":{"line":93,"column":59}},"38":{"start":{"line":95,"column":10},"end":{"line":95,"column":53}},"39":{"start":{"line":96,"column":10},"end":{"line":111,"column":14}},"40":{"start":{"line":106,"column":14},"end":{"line":106,"column":53}},"41":{"start":{"line":107,"column":14},"end":{"line":107,"column":28}},"42":{"start":{"line":110,"column":14},"end":{"line":110,"column":77}}},"fnMap":{"1":{"name":null,"line":27,"loc":{"start":{"line":27,"column":39},"end":{"line":27,"column":79}}},"2":{"name":null,"line":27,"loc":{"start":{"line":27,"column":39},"end":{"line":27,"column":79}}},"3":{"name":null,"line":91,"loc":{"start":{"line":91,"column":11},"end":{"line":113,"column":7}}},"4":{"name":null,"line":105,"loc":{"start":{"line":105,"column":18},"end":{"line":108,"column":13}}},"5":{"name":null,"line":109,"loc":{"start":{"line":109,"column":19},"end":{"line":111,"column":13}}},"6":{"name":null,"line":91,"loc":{"start":{"line":91,"column":11},"end":{"line":113,"column":7}}},"7":{"name":null,"line":105,"loc":{"start":{"line":105,"column":18},"end":{"line":108,"column":13}}},"8":{"name":null,"line":109,"loc":{"start":{"line":109,"column":19},"end":{"line":111,"column":13}}}},"branchMap":{"1":{"line":17,"type":"if","locations":[{"start":{"line":17,"column":58},"end":{"line":19,"column":5}},{"start":{"line":17,"column":58},"end":{"line":19,"column":5}}]},"2":{"line":17,"type":"binary-expr","locations":[{"start":{"line":17,"column":8},"end":{"line":17,"column":16}},{"start":{"line":17,"column":20},"end":{"line":17,"column":56}}]},"3":{"line":22,"type":"if","locations":[{"start":{"line":22,"column":26},"end":{"line":24,"column":5}},{"start":{"line":22,"column":26},"end":{"line":24,"column":5}}]},"4":{"line":28,"type":"if","locations":[{"start":{"line":28,"column":18},"end":{"line":28,"column":56}},{"start":{"line":28,"column":18},"end":{"line":28,"column":56}}]},"5":{"line":31,"type":"if","locations":[{"start":{"line":31,"column":101},"end":{"line":33,"column":5}},{"start":{"line":31,"column":101},"end":{"line":33,"column":5}}]},"6":{"line":31,"type":"binary-expr","locations":[{"start":{"line":31,"column":8},"end":{"line":31,"column":62}},{"start":{"line":31,"column":66},"end":{"line":31,"column":99}}]},"7":{"line":31,"type":"binary-expr","locations":[{"start":{"line":31,"column":8},"end":{"line":31,"column":44}},{"start":{"line":31,"column":48},"end":{"line":31,"column":62}}]},"8":{"line":31,"type":"binary-expr","locations":[{"start":{"line":31,"column":8},"end":{"line":31,"column":32}},{"start":{"line":31,"column":36},"end":{"line":31,"column":44}}]},"9":{"line":36,"type":"if","locations":[{"start":{"line":36,"column":49},"end":{"line":38,"column":5}},{"start":{"line":36,"column":49},"end":{"line":38,"column":5}}]},"10":{"line":17,"type":"binary-expr","locations":[{"start":{"line":17,"column":8},"end":{"line":17,"column":56}},{"start":{"line":17,"column":8},"end":{"line":17,"column":56}}]},"11":{"line":22,"type":"if","locations":[{"start":{"line":22,"column":26},"end":{"line":24,"column":5}},{"start":{"line":22,"column":26},"end":{"line":24,"column":5}}]},"12":{"line":31,"type":"binary-expr","locations":[{"start":{"line":31,"column":8},"end":{"line":31,"column":99}},{"start":{"line":31,"column":8},"end":{"line":31,"column":99}}]},"13":{"line":31,"type":"binary-expr","locations":[{"start":{"line":31,"column":8},"end":{"line":31,"column":62}},{"start":{"line":31,"column":8},"end":{"line":31,"column":62}}]},"14":{"line":31,"type":"binary-expr","locations":[{"start":{"line":31,"column":8},"end":{"line":31,"column":44}},{"start":{"line":31,"column":8},"end":{"line":31,"column":44}}]},"15":{"line":46,"type":"if","locations":[{"start":{"line":46,"column":19},"end":{"line":46,"column":81}},{"start":{"line":46,"column":19},"end":{"line":46,"column":81}}]},"16":{"line":47,"type":"if","locations":[{"start":{"line":47,"column":23},"end":{"line":47,"column":89}},{"start":{"line":47,"column":23},"end":{"line":47,"column":89}}]},"17":{"line":74,"type":"if","locations":[{"start":{"line":74,"column":17},"end":{"line":74,"column":41}},{"start":{"line":74,"column":17},"end":{"line":74,"column":41}}]},"18":{"line":83,"type":"if","locations":[{"start":{"line":83,"column":18},"end":{"line":87,"column":5}},{"start":{"line":83,"column":18},"end":{"line":87,"column":5}}]},"19":{"line":92,"type":"if","locations":[{"start":{"line":92,"column":42},"end":{"line":94,"column":9}},{"start":{"line":94,"column":15},"end":{"line":112,"column":9}}]},"20":{"line":92,"type":"binary-expr","locations":[{"start":{"line":92,"column":12},"end":{"line":92,"column":15}},{"start":{"line":92,"column":19},"end":{"line":92,"column":40}}]},"21":{"line":92,"type":"if","locations":[{"start":{"line":92,"column":42},"end":{"line":94,"column":9}},{"start":{"line":94,"column":15},"end":{"line":112,"column":9}}]},"22":{"line":92,"type":"binary-expr","locations":[{"start":{"line":92,"column":12},"end":{"line":92,"column":40}},{"start":{"line":92,"column":12},"end":{"line":92,"column":40}}]}}}');
  coverageData.hash = hash;
  return coverage[path] = coverageData;
}

var SlackAppService = function (_ServiceTemplate) {
  (0, _inherits3.default)(SlackAppService, _ServiceTemplate);

  function SlackAppService() {
    (0, _classCallCheck3.default)(this, SlackAppService);
    return (0, _possibleConstructorReturn3.default)(this, (SlackAppService.__proto__ || (0, _getPrototypeOf2.default)(SlackAppService)).apply(this, arguments));
  }

  (0, _createClass3.default)(SlackAppService, null, [{
    key: 'onChannelCreate',
    value: function onChannelCreate(channel) {
      ++_cover__().s['1'];

      channel.oAuthUrl = config.base_url + '/oauth/slack/' + channel._id;
      ++_cover__().s['2'];
      channel.save();
    }
  }, {
    key: 'beforePipeline',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(req, res, channel) {
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                ++_cover__().s['3'];

                if (!((++_cover__().b['10'][0], (++_cover__().b['2'][0], req.body)) && (++_cover__().b['10'][1], (++_cover__().b['2'][1], req.body.type === 'url_verification')))) {
                  _context.next = 7;
                  break;
                }

                ++_cover__().b['1'][0];
                ++_cover__().s['4'];
                throw new _errors.StopPipeline(req.body.challenge);

              case 7:
                ++_cover__().b['1'][1];

              case 8:
                ++_cover__().s['5'];


                /* handle action (buttons) to format them */
                if (req.body.payload) {
                  ++_cover__().b['11'][0];
                  ++_cover__().b['3'][0];
                  ++_cover__().s['6'];

                  req.body = SlackAppService.parsePayload(req.body);
                } else {
                  ++_cover__().b['11'][1];
                  ++_cover__().b['3'][1];
                }

                /* Search for the App children */
                ++_cover__().s['7'];
                channel = _lodash2.default.find(channel.children, function (child) {
                  ++_cover__().f['2'];
                  ++_cover__().f['1'];
                  return child.slug === req.body.team_id;
                });
                ++_cover__().s['8'];

                if (channel) {
                  _context.next = 19;
                  break;
                }

                ++_cover__().b['4'][0];
                ++_cover__().s['9'];
                throw new _errors.NotFoundError('Channel');

              case 19:
                ++_cover__().b['4'][1];

              case 20:
                ++_cover__().s['10'];

                if (!((++_cover__().b['12'][0], (++_cover__().b['6'][0], (++_cover__().b['13'][0], (++_cover__().b['7'][0], (++_cover__().b['14'][0], (++_cover__().b['8'][0], channel.type === 'slack')) && (++_cover__().b['14'][1], (++_cover__().b['8'][1], req.body)))) && (++_cover__().b['13'][1], (++_cover__().b['7'][1], req.body.event)))) && (++_cover__().b['12'][1], (++_cover__().b['6'][1], req.body.event.type !== 'message')))) {
                  _context.next = 27;
                  break;
                }

                ++_cover__().b['5'][0];
                ++_cover__().s['11'];
                throw new _errors.StopPipeline();

              case 27:
                ++_cover__().b['5'][1];

              case 28:
                ++_cover__().s['12'];

                if (!(req.body.event.user === channel.botuser)) {
                  _context.next = 35;
                  break;
                }

                ++_cover__().b['9'][0];
                ++_cover__().s['13'];
                throw new _errors.StopPipeline();

              case 35:
                ++_cover__().b['9'][1];

              case 36:
                ++_cover__().s['14'];
                return _context.abrupt('return', channel);

              case 38:
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
  }, {
    key: 'checkParamsValidity',
    value: function checkParamsValidity(channel) {
      ++_cover__().s['15'];
      var clientId = channel.clientId,
          clientSecret = channel.clientSecret;
      ++_cover__().s['16'];


      if (!clientId) {
        ++_cover__().b['15'][0];
        ++_cover__().s['17'];
        throw new _errors.BadRequestError('Parameter clientId is missing');
      } else {
        ++_cover__().b['15'][1];
      }
      ++_cover__().s['18'];
      if (!clientSecret) {
        ++_cover__().b['16'][0];
        ++_cover__().s['19'];
        throw new _errors.BadRequestError('Parameter clientSecret is missing');
      } else {
        ++_cover__().b['16'][1];
      }

      ++_cover__().s['20'];
      return true;
    }
  }, {
    key: 'parsePayload',
    value: function parsePayload(body) {
      ++_cover__().s['21'];

      var parsedBody = JSON.parse(body.payload);

      ++_cover__().s['22'];
      return {
        team_id: parsedBody.team.id,
        token: parsedBody.token,
        event: {
          type: 'message',
          is_button_click: parsedBody.actions[0].type === 'button',
          user: parsedBody.user.id,
          text: parsedBody.actions[0].value,
          ts: parsedBody.action_ts,
          channel: parsedBody.channel.id,
          event_ts: parsedBody.action_ts
        },
        type: 'event_callback'
      };
    }
  }, {
    key: 'onChannelDelete',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(channel) {
        var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, child;

        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                ++_cover__().s['23'];
                _iteratorNormalCompletion = true;
                _didIteratorError = false;
                _iteratorError = undefined;
                _context2.prev = 4;
                _iterator = (0, _getIterator3.default)(channel.children);

              case 6:
                if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                  _context2.next = 24;
                  break;
                }

                child = _step.value;
                ++_cover__().s['24'];
                _context2.next = 11;
                return models.Channel.findById(child);

              case 11:
                child = _context2.sent;
                ++_cover__().s['25'];

                if (!child) {
                  _context2.next = 20;
                  break;
                }

                ++_cover__().b['17'][0];
                ++_cover__().s['26'];
                _context2.next = 18;
                return child.remove();

              case 18:
                _context2.next = 21;
                break;

              case 20:
                ++_cover__().b['17'][1];

              case 21:
                _iteratorNormalCompletion = true;
                _context2.next = 6;
                break;

              case 24:
                _context2.next = 30;
                break;

              case 26:
                _context2.prev = 26;
                _context2.t0 = _context2['catch'](4);
                _didIteratorError = true;
                _iteratorError = _context2.t0;

              case 30:
                _context2.prev = 30;
                _context2.prev = 31;

                if (!_iteratorNormalCompletion && _iterator.return) {
                  _iterator.return();
                }

              case 33:
                _context2.prev = 33;

                if (!_didIteratorError) {
                  _context2.next = 36;
                  break;
                }

                throw _iteratorError;

              case 36:
                return _context2.finish(33);

              case 37:
                return _context2.finish(30);

              case 38:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this, [[4, 26, 30, 38], [31,, 33, 37]]);
      }));

      function onChannelDelete(_x4) {
        return _ref2.apply(this, arguments);
      }

      return onChannelDelete;
    }()
  }, {
    key: 'receiveOauth',
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3(req, res) {
        var channel_id, code, channel;
        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                ++_cover__().s['27'];
                channel_id = req.params.channel_id;
                ++_cover__().s['28'];
                code = req.query.code;
                ++_cover__().s['29'];
                _context3.next = 7;
                return models.Channel.findById(channel_id);

              case 7:
                channel = _context3.sent;
                ++_cover__().s['30'];

                if (channel) {
                  _context3.next = 19;
                  break;
                }

                ++_cover__().b['18'][0];
                ++_cover__().s['31'];

                _Logger2.default.info('Received request for oauth but no channel was found for id ' + channel_id);
                ++_cover__().s['32'];
                res.status(404).send();
                ++_cover__().s['33'];
                return _context3.abrupt('return');

              case 19:
                ++_cover__().b['18'][1];

              case 20:
                ++_cover__().s['34'];

                res.status(200).send();

                ++_cover__().s['35'];
                _superagent2.default.post('https://slack.com/api/oauth.access?client_id=' + channel.clientId + '&client_secret=' + channel.clientSecret + '&code=' + code).end(function (err, res) {
                  ++_cover__().f['6'];
                  ++_cover__().f['3'];
                  ++_cover__().s['36'];

                  if ((++_cover__().b['22'][0], (++_cover__().b['20'][0], err)) || (++_cover__().b['22'][1], (++_cover__().b['20'][1], res.body.ok === false))) {
                    ++_cover__().b['21'][0];
                    ++_cover__().b['19'][0];
                    ++_cover__().s['37'];

                    _Logger2.default.error('Failed to identify to slack oauth');
                  } else {
                    ++_cover__().b['21'][1];
                    ++_cover__().b['19'][1];
                    ++_cover__().s['38'];

                    var token = res.body.bot.bot_access_token;
                    ++_cover__().s['39'];
                    new models.Channel({
                      token: token,
                      type: 'slack',
                      slug: res.body.team_id,
                      isActivated: true,
                      connector: channel.connector,
                      botuser: res.body.bot.bot_user_id,
                      app: channel_id
                    }).save().then(function (channelChild) {
                      ++_cover__().f['7'];
                      ++_cover__().f['4'];
                      ++_cover__().s['40'];

                      channel.children.push(channelChild._id);
                      ++_cover__().s['41'];
                      channel.save();
                    }).catch(function (err) {
                      ++_cover__().f['8'];
                      ++_cover__().f['5'];
                      ++_cover__().s['42'];

                      _Logger2.default.error('An error occured while creating channel: ' + err);
                    });
                  }
                });

              case 24:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function receiveOauth(_x5, _x6) {
        return _ref3.apply(this, arguments);
      }

      return receiveOauth;
    }()
  }]);
  return SlackAppService;
}(_Template2.default);

exports.default = SlackAppService;