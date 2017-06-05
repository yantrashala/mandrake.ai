'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createChannelByConnectorId = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var createChannelByConnectorId = exports.createChannelByConnectorId = function () {
  var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(req) {
    ++_cover__().f['3'];

    var _req$body, slug, type, newChannel;

    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            ++_cover__().f['2'];
            ++_cover__().f['1'];
            ++_cover__().s['2'];
            _req$body = req.body, slug = _req$body.slug, type = _req$body.type;
            ++_cover__().s['3'];
            newChannel = new models.Channel((0, _filterObject2.default)(req.body, permitted));
            ++_cover__().s['4'];

            if (type) {
              _context.next = 13;
              break;
            }

            ++_cover__().b['1'][0];
            ++_cover__().s['5'];
            throw new _errors.BadRequestError('Parameter type is missing');

          case 13:
            ++_cover__().b['1'][1];
            ++_cover__().s['6'];

            if (slug) {
              _context.next = 21;
              break;
            }

            ++_cover__().b['2'][0];
            ++_cover__().s['7'];
            throw new _errors.BadRequestError('Parameter slug is missing');

          case 21:
            ++_cover__().b['2'][1];
            ++_cover__().s['8'];

            if (services[type]) {
              _context.next = 29;
              break;
            }

            ++_cover__().b['3'][0];
            ++_cover__().s['9'];
            throw new _errors.BadRequestError('Parameter type is invalid');

          case 29:
            ++_cover__().b['3'][1];

          case 30:
            ++_cover__().s['10'];
            _context.next = 33;
            return (0, _utils.invoke)(newChannel.type, 'checkParamsValidity', [newChannel]);

          case 33:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function createChannelByConnectorId(_x) {
    return _ref.apply(this, arguments);
  };
}();

var _filterObject = require('filter-object');

var _filterObject2 = _interopRequireDefault(_filterObject);

var _utils = require('../utils');

var _errors = require('../utils/errors');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _coverage__file;

function _cover__() {
  if (!_coverage__file) _coverage__file = _coverage__getInitialState();
  return _coverage__file;
}

function _coverage__getInitialState() {
  var path = '/Users/slahir/Projects/bot-connector/src/validators/Channels.validators.js',
      hash = '5f4ff7428a229318e5e6b4a8d72c4bdb';
  var global = new Function('return this')();
  var coverage = global['__coverage__'] || (global['__coverage__'] = {});
  if (coverage[path] && coverage[path].hash === hash) return coverage[path];
  var coverageData = global['JSON'].parse('{"path":"/Users/slahir/Projects/bot-connector/src/validators/Channels.validators.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0},"b":{"1":[0,0],"2":[0,0],"3":[0,0]},"f":{"1":0,"2":0,"3":0},"statementMap":{"1":{"start":{"line":6,"column":0},"end":{"line":6,"column":126}},"2":{"start":{"line":9,"column":2},"end":{"line":9,"column":33}},"3":{"start":{"line":10,"column":2},"end":{"line":10,"column":68}},"4":{"start":{"line":12,"column":2},"end":{"line":18,"column":3}},"5":{"start":{"line":13,"column":4},"end":{"line":13,"column":58}},"6":{"start":{"line":14,"column":9},"end":{"line":18,"column":3}},"7":{"start":{"line":15,"column":4},"end":{"line":15,"column":58}},"8":{"start":{"line":16,"column":9},"end":{"line":18,"column":3}},"9":{"start":{"line":17,"column":4},"end":{"line":17,"column":58}},"10":{"start":{"line":20,"column":2},"end":{"line":20,"column":68}}},"fnMap":{"1":{"name":null,"line":8,"loc":{"start":{"line":8,"column":7},"end":{"line":21,"column":1}}},"2":{"name":null,"line":8,"loc":{"start":{"line":8,"column":7},"end":{"line":21,"column":1}}},"3":{"name":null,"line":8,"loc":{"start":{"line":8,"column":7},"end":{"line":21,"column":1}}}},"branchMap":{"1":{"line":12,"type":"if","locations":[{"start":{"line":12,"column":13},"end":{"line":14,"column":3}},{"start":{"line":12,"column":13},"end":{"line":14,"column":3}}]},"2":{"line":14,"type":"if","locations":[{"start":{"line":14,"column":20},"end":{"line":16,"column":3}},{"start":{"line":14,"column":20},"end":{"line":16,"column":3}}]},"3":{"line":16,"type":"if","locations":[{"start":{"line":16,"column":30},"end":{"line":18,"column":3}},{"start":{"line":16,"column":30},"end":{"line":18,"column":3}}]}}}');
  coverageData.hash = hash;
  return coverage[path] = coverageData;
}

++_cover__().s['1'];


var permitted = '{type,slug,isActivated,token,userName,apiKey,webhook,clientId,clientSecret,password,phoneNumber,serviceId}';