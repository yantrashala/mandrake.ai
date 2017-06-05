'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createRouter = exports.routes = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _utils = require('../utils');

var _App = require('./App.routes');

var _App2 = _interopRequireDefault(_App);

var _Oauth = require('./Oauth.routes');

var _Oauth2 = _interopRequireDefault(_Oauth);

var _Connectors = require('./Connectors.routes');

var _Connectors2 = _interopRequireDefault(_Connectors);

var _Channels = require('./Channels.routes');

var _Channels2 = _interopRequireDefault(_Channels);

var _Messages = require('./Messages.routes');

var _Messages2 = _interopRequireDefault(_Messages);

var _Webhooks = require('./Webhooks.routes');

var _Webhooks2 = _interopRequireDefault(_Webhooks);

var _Conversations = require('./Conversations.routes');

var _Conversations2 = _interopRequireDefault(_Conversations);

var _Participants = require('./Participants.routes');

var _Participants2 = _interopRequireDefault(_Participants);

var _errors = require('../utils/errors');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _coverage__file;

function _cover__() {
  if (!_coverage__file) _coverage__file = _coverage__getInitialState();
  return _coverage__file;
}

function _coverage__getInitialState() {
  var path = '/Users/slahir/Projects/bot-connector/src/routes/index.js',
      hash = '18a820eab6c7c428abf1f400e710bcbc';
  var global = new Function('return this')();
  var coverage = global['__coverage__'] || (global['__coverage__'] = {});
  if (coverage[path] && coverage[path].hash === hash) return coverage[path];
  var coverageData = global['JSON'].parse('{"path":"/Users/slahir/Projects/bot-connector/src/routes/index.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0},"b":{},"f":{"1":0,"2":0,"3":0,"4":0,"5":0},"statementMap":{"1":{"start":{"line":27,"column":2},"end":{"line":27,"column":33}},"2":{"start":{"line":29,"column":2},"end":{"line":43,"column":4}},"3":{"start":{"line":30,"column":4},"end":{"line":42,"column":6}},"4":{"start":{"line":31,"column":6},"end":{"line":41,"column":7}},"5":{"start":{"line":33,"column":8},"end":{"line":35,"column":9}},"6":{"start":{"line":37,"column":8},"end":{"line":37,"column":33}},"7":{"start":{"line":34,"column":10},"end":{"line":34,"column":35}},"8":{"start":{"line":39,"column":8},"end":{"line":39,"column":25}},"9":{"start":{"line":40,"column":8},"end":{"line":40,"column":38}},"10":{"start":{"line":45,"column":2},"end":{"line":45,"column":17}}},"fnMap":{"1":{"name":null,"line":26,"loc":{"start":{"line":26,"column":28},"end":{"line":47,"column":1}}},"2":{"name":null,"line":29,"loc":{"start":{"line":29,"column":17},"end":{"line":43,"column":3}}},"3":{"name":null,"line":30,"loc":{"start":{"line":30,"column":43},"end":{"line":42,"column":5}}},"4":{"name":null,"line":30,"loc":{"start":{"line":30,"column":43},"end":{"line":42,"column":5}}},"5":{"name":null,"line":30,"loc":{"start":{"line":30,"column":43},"end":{"line":42,"column":5}}}},"branchMap":{}}');
  coverageData.hash = hash;
  return coverage[path] = coverageData;
}

var routes = exports.routes = [].concat((0, _toConsumableArray3.default)(_App2.default), (0, _toConsumableArray3.default)(_Oauth2.default), (0, _toConsumableArray3.default)(_Connectors2.default), (0, _toConsumableArray3.default)(_Channels2.default), (0, _toConsumableArray3.default)(_Messages2.default), (0, _toConsumableArray3.default)(_Webhooks2.default), (0, _toConsumableArray3.default)(_Conversations2.default), (0, _toConsumableArray3.default)(_Participants2.default));

var createRouter = exports.createRouter = function createRouter(app) {
  ++_cover__().f['1'];
  ++_cover__().s['1'];

  var router = _express2.default.Router();

  ++_cover__().s['2'];
  routes.forEach(function (r) {
    ++_cover__().f['2'];
    ++_cover__().s['3'];

    router[r.method.toLowerCase()](r.path, function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(req, res) {
        ++_cover__().f['5'];

        var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, validator;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                ++_cover__().f['4'];
                ++_cover__().f['3'];
                ++_cover__().s['4'];
                _context.prev = 3;
                ++_cover__().s['5'];

                // Validate the request parameters
                _iteratorNormalCompletion = true;
                _didIteratorError = false;
                _iteratorError = undefined;
                _context.prev = 8;
                _iterator = (0, _getIterator3.default)(r.validators);

              case 10:
                if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                  _context.next = 18;
                  break;
                }

                validator = _step.value;
                ++_cover__().s['7'];
                _context.next = 15;
                return validator(req, res);

              case 15:
                _iteratorNormalCompletion = true;
                _context.next = 10;
                break;

              case 18:
                _context.next = 24;
                break;

              case 20:
                _context.prev = 20;
                _context.t0 = _context['catch'](8);
                _didIteratorError = true;
                _iteratorError = _context.t0;

              case 24:
                _context.prev = 24;
                _context.prev = 25;

                if (!_iteratorNormalCompletion && _iterator.return) {
                  _iterator.return();
                }

              case 27:
                _context.prev = 27;

                if (!_didIteratorError) {
                  _context.next = 30;
                  break;
                }

                throw _iteratorError;

              case 30:
                return _context.finish(27);

              case 31:
                return _context.finish(24);

              case 32:
                ++_cover__().s['6'];
                _context.next = 35;
                return r.handler(req, res);

              case 35:
                _context.next = 43;
                break;

              case 37:
                _context.prev = 37;
                _context.t1 = _context['catch'](3);
                ++_cover__().s['8'];

                _utils.Logger.error(_context.t1);
                ++_cover__().s['9'];
                (0, _errors.renderConnectorError)(res, _context.t1);

              case 43:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, undefined, [[3, 37], [8, 20, 24, 32], [25,, 27, 31]]);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }());
  });

  ++_cover__().s['10'];
  app.use(router);
};