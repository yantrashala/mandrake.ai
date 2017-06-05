'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderConnectorError = exports.StopPipeline = exports.ServiceError = exports.ConflictError = exports.NotFoundError = exports.UnauthorizedError = exports.ForbiddenError = exports.BadRequestError = undefined;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _utils = require('../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _coverage__file;

function _cover__() {
  if (!_coverage__file) _coverage__file = _coverage__getInitialState();
  return _coverage__file;
}

function _coverage__getInitialState() {
  var path = '/Users/slahir/Projects/bot-connector/src/utils/errors.js',
      hash = '315e959eea08e1c87d0636402d03ca41';
  var global = new Function('return this')();
  var coverage = global['__coverage__'] || (global['__coverage__'] = {});
  if (coverage[path] && coverage[path].hash === hash) return coverage[path];
  var coverageData = global['JSON'].parse('{"path":"/Users/slahir/Projects/bot-connector/src/utils/errors.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0},"b":{"1":[0,0],"2":[0,0],"3":[0,0],"4":[0,0],"5":[0,0],"6":[0,0],"7":[0,0],"8":[0,0],"9":[0,0],"10":[0,0],"11":[0,0],"12":[0,0]},"f":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0},"statementMap":{"1":{"start":{"line":19,"column":4},"end":{"line":19,"column":39}},"2":{"start":{"line":28,"column":4},"end":{"line":28,"column":39}},"3":{"start":{"line":37,"column":4},"end":{"line":37,"column":39}},"4":{"start":{"line":46,"column":4},"end":{"line":46,"column":62}},"5":{"start":{"line":55,"column":4},"end":{"line":55,"column":39}},"6":{"start":{"line":64,"column":4},"end":{"line":64,"column":39}},"7":{"start":{"line":73,"column":4},"end":{"line":73,"column":26}},"8":{"start":{"line":81,"column":2},"end":{"line":81,"column":33}},"9":{"start":{"line":81,"column":25},"end":{"line":81,"column":31}},"10":{"start":{"line":83,"column":2},"end":{"line":85,"column":3}},"11":{"start":{"line":84,"column":4},"end":{"line":84,"column":47}},"12":{"start":{"line":87,"column":2},"end":{"line":99,"column":3}},"13":{"start":{"line":88,"column":4},"end":{"line":88,"column":43}},"14":{"start":{"line":89,"column":9},"end":{"line":99,"column":3}},"15":{"start":{"line":90,"column":4},"end":{"line":90,"column":45}},"16":{"start":{"line":91,"column":9},"end":{"line":99,"column":3}},"17":{"start":{"line":92,"column":4},"end":{"line":92,"column":44}},"18":{"start":{"line":93,"column":9},"end":{"line":99,"column":3}},"19":{"start":{"line":94,"column":4},"end":{"line":94,"column":47}},"20":{"start":{"line":95,"column":9},"end":{"line":99,"column":3}},"21":{"start":{"line":96,"column":4},"end":{"line":96,"column":43}},"22":{"start":{"line":97,"column":9},"end":{"line":99,"column":3}},"23":{"start":{"line":98,"column":4},"end":{"line":98,"column":53}},"24":{"start":{"line":101,"column":2},"end":{"line":101,"column":90}},"25":{"start":{"line":102,"column":2},"end":{"line":102,"column":44}}},"fnMap":{"1":{"name":null,"line":18,"loc":{"start":{"line":18,"column":2},"end":{"line":20,"column":3}}},"2":{"name":null,"line":27,"loc":{"start":{"line":27,"column":2},"end":{"line":29,"column":3}}},"3":{"name":null,"line":36,"loc":{"start":{"line":36,"column":2},"end":{"line":38,"column":3}}},"4":{"name":null,"line":45,"loc":{"start":{"line":45,"column":2},"end":{"line":47,"column":3}}},"5":{"name":null,"line":54,"loc":{"start":{"line":54,"column":2},"end":{"line":56,"column":3}}},"6":{"name":null,"line":63,"loc":{"start":{"line":63,"column":2},"end":{"line":65,"column":3}}},"7":{"name":null,"line":72,"loc":{"start":{"line":72,"column":2},"end":{"line":74,"column":3}}},"8":{"name":null,"line":80,"loc":{"start":{"line":80,"column":36},"end":{"line":103,"column":1}}}},"branchMap":{"1":{"line":81,"type":"if","locations":[{"start":{"line":81,"column":23},"end":{"line":81,"column":33}},{"start":{"line":81,"column":23},"end":{"line":81,"column":33}}]},"2":{"line":83,"type":"if","locations":[{"start":{"line":83,"column":35},"end":{"line":85,"column":3}},{"start":{"line":83,"column":35},"end":{"line":85,"column":3}}]},"3":{"line":87,"type":"if","locations":[{"start":{"line":87,"column":36},"end":{"line":89,"column":3}},{"start":{"line":87,"column":36},"end":{"line":89,"column":3}}]},"4":{"line":89,"type":"if","locations":[{"start":{"line":89,"column":45},"end":{"line":91,"column":3}},{"start":{"line":89,"column":45},"end":{"line":91,"column":3}}]},"5":{"line":91,"type":"if","locations":[{"start":{"line":91,"column":44},"end":{"line":93,"column":3}},{"start":{"line":91,"column":44},"end":{"line":93,"column":3}}]},"6":{"line":93,"type":"if","locations":[{"start":{"line":93,"column":47},"end":{"line":95,"column":3}},{"start":{"line":93,"column":47},"end":{"line":95,"column":3}}]},"7":{"line":95,"type":"if","locations":[{"start":{"line":95,"column":43},"end":{"line":97,"column":3}},{"start":{"line":95,"column":43},"end":{"line":97,"column":3}}]},"8":{"line":97,"type":"if","locations":[{"start":{"line":97,"column":42},"end":{"line":99,"column":3}},{"start":{"line":97,"column":42},"end":{"line":99,"column":3}}]},"9":{"line":101,"type":"binary-expr","locations":[{"start":{"line":101,"column":40},"end":{"line":101,"column":82}},{"start":{"line":101,"column":86},"end":{"line":101,"column":89}}]},"10":{"line":101,"type":"binary-expr","locations":[{"start":{"line":101,"column":41},"end":{"line":101,"column":57}},{"start":{"line":101,"column":63},"end":{"line":101,"column":81}}]},"11":{"line":101,"type":"binary-expr","locations":[{"start":{"line":101,"column":41},"end":{"line":101,"column":44}},{"start":{"line":101,"column":48},"end":{"line":101,"column":57}}]},"12":{"line":101,"type":"binary-expr","locations":[{"start":{"line":101,"column":63},"end":{"line":101,"column":66}},{"start":{"line":101,"column":70},"end":{"line":101,"column":81}}]}}}');
  coverageData.hash = hash;
  return coverage[path] = coverageData;
}

/**
 * 400 - Bad request
 */
var BadRequestError = exports.BadRequestError = function BadRequestError() {
  var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var results = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  ++_cover__().f['1'];
  (0, _classCallCheck3.default)(this, BadRequestError);
  ++_cover__().s['1'];

  this.content = { message: message, results: results };
};

/**
 * 401 - Forbidden
 */


var ForbiddenError = exports.ForbiddenError = function ForbiddenError() {
  var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Request can not be processed with your role';
  var results = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  ++_cover__().f['2'];
  (0, _classCallCheck3.default)(this, ForbiddenError);
  ++_cover__().s['2'];

  this.content = { message: message, results: results };
};

/**
 * 403 - Unauthorized
 */


var UnauthorizedError = exports.UnauthorizedError = function UnauthorizedError() {
  var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Request can not be processed without authentication';
  var results = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  ++_cover__().f['3'];
  (0, _classCallCheck3.default)(this, UnauthorizedError);
  ++_cover__().s['3'];

  this.content = { message: message, results: results };
};

/**
 * 404 - Not found
 */


var NotFoundError = exports.NotFoundError = function NotFoundError() {
  var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Model';
  var results = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  ++_cover__().f['4'];
  (0, _classCallCheck3.default)(this, NotFoundError);
  ++_cover__().s['4'];

  this.content = { results: results, message: target + ' not found' };
};

/**
 * 409 - Conflict
 */


var ConflictError = exports.ConflictError = function ConflictError(message) {
  var results = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  ++_cover__().f['5'];
  (0, _classCallCheck3.default)(this, ConflictError);
  ++_cover__().s['5'];

  this.content = { results: results, message: message };
};

/**
 * 503 - Service unavailable
 */


var ServiceError = exports.ServiceError = function ServiceError(message) {
  var results = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  ++_cover__().f['6'];
  (0, _classCallCheck3.default)(this, ServiceError);
  ++_cover__().s['6'];

  this.content = { message: message, results: results };
};

/**
 * Used to stop the pipeline
 */


var StopPipeline = exports.StopPipeline = function StopPipeline(content) {
  ++_cover__().f['7'];
  (0, _classCallCheck3.default)(this, StopPipeline);
  ++_cover__().s['7'];

  this.content = content;
};

/**
 * Render the appropriate error
 */


var renderConnectorError = exports.renderConnectorError = function renderConnectorError(res, err) {
  ++_cover__().f['8'];
  ++_cover__().s['8'];

  if (res.headersSent) {
    ++_cover__().b['1'][0];
    ++_cover__().s['9'];
    return;
  } else {
    ++_cover__().b['1'][1];
  }

  ++_cover__().s['10'];
  if (err instanceof StopPipeline) {
    ++_cover__().b['2'][0];
    ++_cover__().s['11'];

    return (0, _utils.renderStopPipeline)(res, err.content);
  } else {
    ++_cover__().b['2'][1];
  }

  ++_cover__().s['12'];
  if (err instanceof NotFoundError) {
    ++_cover__().b['3'][0];
    ++_cover__().s['13'];

    return (0, _utils.renderNotFound)(res, err.content);
  } else {
      ++_cover__().b['3'][1];
      ++_cover__().s['14'];
      if (err instanceof BadRequestError) {
        ++_cover__().b['4'][0];
        ++_cover__().s['15'];

        return (0, _utils.renderBadRequest)(res, err.content);
      } else {
          ++_cover__().b['4'][1];
          ++_cover__().s['16'];
          if (err instanceof ForbiddenError) {
            ++_cover__().b['5'][0];
            ++_cover__().s['17'];

            return (0, _utils.renderForbidden)(res, err.content);
          } else {
              ++_cover__().b['5'][1];
              ++_cover__().s['18'];
              if (err instanceof UnauthorizedError) {
                ++_cover__().b['6'][0];
                ++_cover__().s['19'];

                return (0, _utils.renderUnauthorized)(res, err.content);
              } else {
                  ++_cover__().b['6'][1];
                  ++_cover__().s['20'];
                  if (err instanceof ConflictError) {
                    ++_cover__().b['7'][0];
                    ++_cover__().s['21'];

                    return (0, _utils.renderConflict)(res, err.content);
                  } else {
                      ++_cover__().b['7'][1];
                      ++_cover__().s['22'];
                      if (err instanceof ServiceError) {
                        ++_cover__().b['8'][0];
                        ++_cover__().s['23'];

                        return (0, _utils.renderServiceUnavailable)(res, err.content);
                      } else {
                        ++_cover__().b['8'][1];
                      }
                    }
                }
            }
        }
    }++_cover__().s['24'];
  _utils.Logger.error('Internal server error', (++_cover__().b['9'][0], (++_cover__().b['10'][0], (++_cover__().b['11'][0], err) && (++_cover__().b['11'][1], err.stack)) || (++_cover__().b['10'][1], (++_cover__().b['12'][0], err) && (++_cover__().b['12'][1], err.message))) || (++_cover__().b['9'][1], err));
  ++_cover__().s['25'];
  return (0, _utils.renderInternalServerError)(res, err);
};