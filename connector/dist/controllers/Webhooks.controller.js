'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _superagent = require('superagent');

var _superagent2 = _interopRequireDefault(_superagent);

var _utils = require('../utils');

var _errors = require('../utils/errors');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _coverage__file;

function _cover__() {
  if (!_coverage__file) _coverage__file = _coverage__getInitialState();
  return _coverage__file;
}

function _coverage__getInitialState() {
  var path = '/Users/slahir/Projects/bot-connector/src/controllers/Webhooks.controller.js',
      hash = '3a423f383826fa3cc566ebfa0fa064ff';
  var global = new Function('return this')();
  var coverage = global['__coverage__'] || (global['__coverage__'] = {});
  if (coverage[path] && coverage[path].hash === hash) return coverage[path];
  var coverageData = global['JSON'].parse('{"path":"/Users/slahir/Projects/bot-connector/src/controllers/Webhooks.controller.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0,"26":0,"27":0,"28":0},"b":{"1":[0,0],"2":[0,0],"3":[0,0],"4":[0,0],"5":[0,0],"6":[0,0],"7":[0,0]},"f":{"1":0,"2":0},"statementMap":{"1":{"start":{"line":14,"column":4},"end":{"line":14,"column":37}},"2":{"start":{"line":15,"column":4},"end":{"line":15,"column":90}},"3":{"start":{"line":17,"column":4},"end":{"line":23,"column":5}},"4":{"start":{"line":18,"column":6},"end":{"line":18,"column":40}},"5":{"start":{"line":19,"column":11},"end":{"line":23,"column":5}},"6":{"start":{"line":20,"column":6},"end":{"line":20,"column":59}},"7":{"start":{"line":21,"column":11},"end":{"line":23,"column":5}},"8":{"start":{"line":22,"column":6},"end":{"line":22,"column":54}},"9":{"start":{"line":25,"column":4},"end":{"line":25,"column":79}},"10":{"start":{"line":27,"column":4},"end":{"line":27,"column":83}},"11":{"start":{"line":28,"column":4},"end":{"line":28,"column":66}},"12":{"start":{"line":30,"column":4},"end":{"line":30,"column":74}},"13":{"start":{"line":37,"column":4},"end":{"line":46,"column":6}},"14":{"start":{"line":38,"column":6},"end":{"line":45,"column":10}},"15":{"start":{"line":43,"column":10},"end":{"line":43,"column":41}},"16":{"start":{"line":43,"column":21},"end":{"line":43,"column":39}},"17":{"start":{"line":44,"column":10},"end":{"line":44,"column":61}},"18":{"start":{"line":53,"column":4},"end":{"line":53,"column":49}},"19":{"start":{"line":55,"column":4},"end":{"line":57,"column":5}},"20":{"start":{"line":59,"column":4},"end":{"line":59,"column":23}},"21":{"start":{"line":56,"column":6},"end":{"line":56,"column":77}},"22":{"start":{"line":64,"column":4},"end":{"line":64,"column":37}},"23":{"start":{"line":66,"column":4},"end":{"line":66,"column":61}},"24":{"start":{"line":67,"column":4},"end":{"line":67,"column":56}},"25":{"start":{"line":67,"column":20},"end":{"line":67,"column":54}},"26":{"start":{"line":69,"column":4},"end":{"line":73,"column":5}},"27":{"start":{"line":70,"column":6},"end":{"line":70,"column":54}},"28":{"start":{"line":72,"column":6},"end":{"line":72,"column":92}}},"fnMap":{"1":{"name":null,"line":37,"loc":{"start":{"line":37,"column":23},"end":{"line":46,"column":5}}},"2":{"name":null,"line":42,"loc":{"start":{"line":42,"column":13},"end":{"line":45,"column":9}}}},"branchMap":{"1":{"line":17,"type":"if","locations":[{"start":{"line":17,"column":18},"end":{"line":19,"column":5}},{"start":{"line":17,"column":18},"end":{"line":19,"column":5}}]},"2":{"line":19,"type":"if","locations":[{"start":{"line":19,"column":37},"end":{"line":21,"column":5}},{"start":{"line":19,"column":37},"end":{"line":21,"column":5}}]},"3":{"line":21,"type":"if","locations":[{"start":{"line":21,"column":30},"end":{"line":23,"column":5}},{"start":{"line":21,"column":30},"end":{"line":23,"column":5}}]},"4":{"line":43,"type":"if","locations":[{"start":{"line":43,"column":19},"end":{"line":43,"column":41}},{"start":{"line":43,"column":19},"end":{"line":43,"column":41}}]},"5":{"line":67,"type":"if","locations":[{"start":{"line":67,"column":18},"end":{"line":67,"column":56}},{"start":{"line":67,"column":18},"end":{"line":67,"column":56}}]},"6":{"line":69,"type":"if","locations":[{"start":{"line":69,"column":57},"end":{"line":71,"column":5}},{"start":{"line":71,"column":11},"end":{"line":73,"column":5}}]},"7":{"line":69,"type":"if","locations":[{"start":{"line":69,"column":57},"end":{"line":71,"column":5}},{"start":{"line":71,"column":11},"end":{"line":73,"column":5}}]}}}');
  coverageData.hash = hash;
  return coverage[path] = coverageData;
}

var WebhooksController = function () {
  function WebhooksController() {
    (0, _classCallCheck3.default)(this, WebhooksController);
  }

  (0, _createClass3.default)(WebhooksController, null, [{
    key: 'forwardMessage',

    /**
     * Receive a new message from a channel
     * Retrieve the proper channel
     * Invoke beforePipeline, extractOptions and checkSecurity
     * Call the pipeline
     */
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(req, res) {
        var channel_id, channel, options;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                ++_cover__().s['1'];
                channel_id = req.params.channel_id;
                ++_cover__().s['2'];
                _context.next = 5;
                return models.Channel.findById(channel_id).populate({ path: 'children' });

              case 5:
                channel = _context.sent;
                ++_cover__().s['3'];

                if (channel) {
                  _context.next = 13;
                  break;
                }

                ++_cover__().b['1'][0];
                ++_cover__().s['4'];
                throw new _errors.NotFoundError('Channel');

              case 13:
                ++_cover__().b['1'][1];
                ++_cover__().s['5'];

                if (channel.isActivated) {
                  _context.next = 21;
                  break;
                }

                ++_cover__().b['2'][0];
                ++_cover__().s['6'];
                throw new _errors.BadRequestError('Channel is not activated');

              case 21:
                ++_cover__().b['2'][1];
                ++_cover__().s['7'];

                if (channel.type) {
                  _context.next = 29;
                  break;
                }

                ++_cover__().b['3'][0];
                ++_cover__().s['8'];
                throw new _errors.BadRequestError('Type is not defined');

              case 29:
                ++_cover__().b['3'][1];

              case 30:
                ++_cover__().s['9'];
                _context.next = 33;
                return (0, _utils.invoke)(channel.type, 'beforePipeline', [req, res, channel]);

              case 33:
                channel = _context.sent;
                ++_cover__().s['10'];
                options = (0, _utils.invokeSync)(channel.type, 'extractOptions', [req, res, channel]);
                ++_cover__().s['11'];

                (0, _utils.invokeSync)(channel.type, 'checkSecurity', [req, res, channel]);

                ++_cover__().s['12'];
                _context.next = 41;
                return controllers.Messages.pipeMessage(channel._id, req.body, options);

              case 41:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function forwardMessage(_x, _x2) {
        return _ref.apply(this, arguments);
      }

      return forwardMessage;
    }()

    /**
     * Send a message to a bot
     */

  }, {
    key: 'sendMessageToBot',
    value: function sendMessageToBot(_ref2) {
      var _ref3 = (0, _slicedToArray3.default)(_ref2, 3),
          conversation = _ref3[0],
          message = _ref3[1],
          opts = _ref3[2];

      ++_cover__().s['13'];

      return new _promise2.default(function (resolve, reject) {
        ++_cover__().f['1'];
        ++_cover__().s['14'];

        _superagent2.default.post(conversation.connector.url).set('Accept', 'application/json').set('Content-Type', 'application/json').send({ message: message, chatId: opts.chatId, senderId: opts.senderId }).end(function (err, response) {
          ++_cover__().f['2'];
          ++_cover__().s['15'];

          if (err) {
            ++_cover__().b['4'][0];
            ++_cover__().s['16'];
            return reject(err);
          } else {
            ++_cover__().b['4'][1];
          }
          ++_cover__().s['17'];
          return resolve([conversation, response.body, opts]);
        });
      });
    }

    /**
     * Send a message to a channel
     */

  }, {
    key: 'sendMessage',
    value: function () {
      var _ref4 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(_ref5) {
        var _ref6 = (0, _slicedToArray3.default)(_ref5, 3),
            conversation = _ref6[0],
            messages = _ref6[1],
            opts = _ref6[2];

        var channelType, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, message;

        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                ++_cover__().s['18'];
                channelType = conversation.channel.type;
                ++_cover__().s['19'];
                _iteratorNormalCompletion = true;
                _didIteratorError = false;
                _iteratorError = undefined;
                _context2.prev = 6;
                _iterator = (0, _getIterator3.default)(messages);

              case 8:
                if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                  _context2.next = 16;
                  break;
                }

                message = _step.value;
                ++_cover__().s['21'];
                _context2.next = 13;
                return (0, _utils.invoke)(channelType, 'sendMessage', [conversation, message, opts]);

              case 13:
                _iteratorNormalCompletion = true;
                _context2.next = 8;
                break;

              case 16:
                _context2.next = 22;
                break;

              case 18:
                _context2.prev = 18;
                _context2.t0 = _context2['catch'](6);
                _didIteratorError = true;
                _iteratorError = _context2.t0;

              case 22:
                _context2.prev = 22;
                _context2.prev = 23;

                if (!_iteratorNormalCompletion && _iterator.return) {
                  _iterator.return();
                }

              case 25:
                _context2.prev = 25;

                if (!_didIteratorError) {
                  _context2.next = 28;
                  break;
                }

                throw _iteratorError;

              case 28:
                return _context2.finish(25);

              case 29:
                return _context2.finish(22);

              case 30:
                ++_cover__().s['20'];
                return _context2.abrupt('return', conversation);

              case 32:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this, [[6, 18, 22, 30], [23,, 25, 29]]);
      }));

      function sendMessage(_x3) {
        return _ref4.apply(this, arguments);
      }

      return sendMessage;
    }()

    // TODO Abstract it!

  }, {
    key: 'subscribeFacebookWebhook',
    value: function () {
      var _ref7 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3(req, res) {
        var channel_id, channel;
        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                ++_cover__().s['22'];
                channel_id = req.params.channel_id;
                ++_cover__().s['23'];
                _context3.next = 5;
                return models.Channel.findById(channel_id);

              case 5:
                channel = _context3.sent;
                ++_cover__().s['24'];

                if (channel) {
                  _context3.next = 13;
                  break;
                }

                ++_cover__().b['5'][0];
                ++_cover__().s['25'];
                throw new _errors.NotFoundError('Channel');

              case 13:
                ++_cover__().b['5'][1];

              case 14:
                ++_cover__().s['26'];


                if (services.messenger.connectWebhook(req, channel)) {
                  ++_cover__().b['7'][0];
                  ++_cover__().b['6'][0];
                  ++_cover__().s['27'];

                  res.status(200).send(req.query['hub.challenge']);
                } else {
                  ++_cover__().b['7'][1];
                  ++_cover__().b['6'][1];
                  ++_cover__().s['28'];

                  res.status(403).json({ results: null, message: 'Error while connecting the webhook' });
                }

              case 16:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function subscribeFacebookWebhook(_x4, _x5) {
        return _ref7.apply(this, arguments);
      }

      return subscribeFacebookWebhook;
    }()
  }]);
  return WebhooksController;
}();

exports.default = WebhooksController;