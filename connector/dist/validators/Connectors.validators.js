'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateConnectorByBotId = exports.createConnector = undefined;

var _utils = require('../utils');

var _errors = require('../utils/errors');

var _coverage__file;

function _cover__() {
  if (!_coverage__file) _coverage__file = _coverage__getInitialState();
  return _coverage__file;
}

function _coverage__getInitialState() {
  var path = '/Users/slahir/Projects/bot-connector/src/validators/Connectors.validators.js',
      hash = 'd75d6e8eefc221b17e4d06dcc4ee2b0d';
  var global = new Function('return this')();
  var coverage = global['__coverage__'] || (global['__coverage__'] = {});
  if (coverage[path] && coverage[path].hash === hash) return coverage[path];
  var coverageData = global['JSON'].parse('{"path":"/Users/slahir/Projects/bot-connector/src/validators/Connectors.validators.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0},"b":{"1":[0,0],"2":[0,0],"3":[0,0],"4":[0,0]},"f":{"1":0,"2":0},"statementMap":{"1":{"start":{"line":5,"column":2},"end":{"line":5,"column":26}},"2":{"start":{"line":7,"column":2},"end":{"line":11,"column":3}},"3":{"start":{"line":8,"column":4},"end":{"line":8,"column":57}},"4":{"start":{"line":9,"column":9},"end":{"line":11,"column":3}},"5":{"start":{"line":10,"column":4},"end":{"line":10,"column":57}},"6":{"start":{"line":15,"column":2},"end":{"line":15,"column":26}},"7":{"start":{"line":17,"column":2},"end":{"line":19,"column":3}},"8":{"start":{"line":18,"column":4},"end":{"line":18,"column":57}}},"fnMap":{"1":{"name":null,"line":4,"loc":{"start":{"line":4,"column":31},"end":{"line":12,"column":1}}},"2":{"name":null,"line":14,"loc":{"start":{"line":14,"column":38},"end":{"line":20,"column":1}}}},"branchMap":{"1":{"line":7,"type":"if","locations":[{"start":{"line":7,"column":12},"end":{"line":9,"column":3}},{"start":{"line":7,"column":12},"end":{"line":9,"column":3}}]},"2":{"line":9,"type":"if","locations":[{"start":{"line":9,"column":32},"end":{"line":11,"column":3}},{"start":{"line":9,"column":32},"end":{"line":11,"column":3}}]},"3":{"line":17,"type":"if","locations":[{"start":{"line":17,"column":32},"end":{"line":19,"column":3}},{"start":{"line":17,"column":32},"end":{"line":19,"column":3}}]},"4":{"line":17,"type":"binary-expr","locations":[{"start":{"line":17,"column":6},"end":{"line":17,"column":9}},{"start":{"line":17,"column":13},"end":{"line":17,"column":30}}]}}}');
  coverageData.hash = hash;
  return coverage[path] = coverageData;
}

var createConnector = exports.createConnector = function createConnector(req) {
  ++_cover__().f['1'];
  ++_cover__().s['1'];
  var url = req.body.url;
  ++_cover__().s['2'];


  if (!url) {
    ++_cover__().b['1'][0];
    ++_cover__().s['3'];

    throw new _errors.BadRequestError('Parameter url is missing');
  } else {
      ++_cover__().b['1'][1];
      ++_cover__().s['4'];
      if ((0, _utils.isInvalidUrl)(url)) {
        ++_cover__().b['2'][0];
        ++_cover__().s['5'];

        throw new _errors.BadRequestError('Parameter url is invalid');
      } else {
        ++_cover__().b['2'][1];
      }
    }
};

var updateConnectorByBotId = exports.updateConnectorByBotId = function updateConnectorByBotId(req) {
  ++_cover__().f['2'];
  ++_cover__().s['6'];
  var url = req.body.url;
  ++_cover__().s['7'];


  if ((++_cover__().b['4'][0], url) && (++_cover__().b['4'][1], (0, _utils.isInvalidUrl)(url))) {
    ++_cover__().b['3'][0];
    ++_cover__().s['8'];

    throw new _errors.BadRequestError('Parameter url is invalid');
  } else {
    ++_cover__().b['3'][1];
  }
};