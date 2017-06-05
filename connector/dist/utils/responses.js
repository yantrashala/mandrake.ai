"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _coverage__file;

function _cover__() {
  if (!_coverage__file) _coverage__file = _coverage__getInitialState();
  return _coverage__file;
}

function _coverage__getInitialState() {
  var path = "/Users/slahir/Projects/bot-connector/src/utils/responses.js",
      hash = "e513fc778f28ad8e976d5a354a3284d3";
  var global = new Function('return this')();
  var coverage = global['__coverage__'] || (global['__coverage__'] = {});
  if (coverage[path] && coverage[path].hash === hash) return coverage[path];
  var coverageData = global['JSON'].parse("{\"path\":\"/Users/slahir/Projects/bot-connector/src/utils/responses.js\",\"s\":{\"1\":0,\"2\":0,\"3\":0,\"4\":0,\"5\":0,\"6\":0,\"7\":0,\"8\":0,\"9\":0,\"10\":0,\"11\":0},\"b\":{},\"f\":{\"1\":0,\"2\":0,\"3\":0,\"4\":0,\"5\":0,\"6\":0,\"7\":0,\"8\":0,\"9\":0,\"10\":0,\"11\":0},\"statementMap\":{\"1\":{\"start\":{\"line\":2,\"column\":2},\"end\":{\"line\":2,\"column\":38}},\"2\":{\"start\":{\"line\":6,\"column\":2},\"end\":{\"line\":6,\"column\":38}},\"3\":{\"start\":{\"line\":10,\"column\":2},\"end\":{\"line\":13,\"column\":4}},\"4\":{\"start\":{\"line\":17,\"column\":2},\"end\":{\"line\":17,\"column\":38}},\"5\":{\"start\":{\"line\":21,\"column\":2},\"end\":{\"line\":21,\"column\":38}},\"6\":{\"start\":{\"line\":25,\"column\":2},\"end\":{\"line\":25,\"column\":38}},\"7\":{\"start\":{\"line\":29,\"column\":2},\"end\":{\"line\":29,\"column\":38}},\"8\":{\"start\":{\"line\":33,\"column\":2},\"end\":{\"line\":33,\"column\":38}},\"9\":{\"start\":{\"line\":37,\"column\":2},\"end\":{\"line\":37,\"column\":38}},\"10\":{\"start\":{\"line\":41,\"column\":2},\"end\":{\"line\":41,\"column\":38}},\"11\":{\"start\":{\"line\":45,\"column\":2},\"end\":{\"line\":45,\"column\":38}}},\"fnMap\":{\"1\":{\"name\":null,\"line\":1,\"loc\":{\"start\":{\"line\":1,\"column\":24},\"end\":{\"line\":3,\"column\":1}}},\"2\":{\"name\":null,\"line\":5,\"loc\":{\"start\":{\"line\":5,\"column\":29},\"end\":{\"line\":7,\"column\":1}}},\"3\":{\"name\":null,\"line\":9,\"loc\":{\"start\":{\"line\":9,\"column\":29},\"end\":{\"line\":14,\"column\":1}}},\"4\":{\"name\":null,\"line\":16,\"loc\":{\"start\":{\"line\":16,\"column\":32},\"end\":{\"line\":18,\"column\":1}}},\"5\":{\"name\":null,\"line\":20,\"loc\":{\"start\":{\"line\":20,\"column\":31},\"end\":{\"line\":22,\"column\":1}}},\"6\":{\"name\":null,\"line\":24,\"loc\":{\"start\":{\"line\":24,\"column\":34},\"end\":{\"line\":26,\"column\":1}}},\"7\":{\"name\":null,\"line\":28,\"loc\":{\"start\":{\"line\":28,\"column\":30},\"end\":{\"line\":30,\"column\":1}}},\"8\":{\"name\":null,\"line\":32,\"loc\":{\"start\":{\"line\":32,\"column\":30},\"end\":{\"line\":34,\"column\":1}}},\"9\":{\"name\":null,\"line\":36,\"loc\":{\"start\":{\"line\":36,\"column\":41},\"end\":{\"line\":38,\"column\":1}}},\"10\":{\"name\":null,\"line\":40,\"loc\":{\"start\":{\"line\":40,\"column\":40},\"end\":{\"line\":42,\"column\":1}}},\"11\":{\"name\":null,\"line\":44,\"loc\":{\"start\":{\"line\":44,\"column\":34},\"end\":{\"line\":46,\"column\":1}}}},\"branchMap\":{}}");
  coverageData.hash = hash;
  return coverage[path] = coverageData;
}

var renderOk = exports.renderOk = function renderOk(res, content) {
  ++_cover__().f["1"];
  ++_cover__().s["1"];

  return res.status(200).json(content);
};

var renderCreated = exports.renderCreated = function renderCreated(res, content) {
  ++_cover__().f["2"];
  ++_cover__().s["2"];

  return res.status(201).json(content);
};

var renderDeleted = exports.renderDeleted = function renderDeleted(res, message) {
  ++_cover__().f["3"];
  ++_cover__().s["3"];

  return res.status(200).json({
    results: null,
    message: message
  });
};

var renderBadRequest = exports.renderBadRequest = function renderBadRequest(res, content) {
  ++_cover__().f["4"];
  ++_cover__().s["4"];

  return res.status(400).json(content);
};

var renderForbidden = exports.renderForbidden = function renderForbidden(res, content) {
  ++_cover__().f["5"];
  ++_cover__().s["5"];

  return res.status(401).json(content);
};

var renderUnauthorized = exports.renderUnauthorized = function renderUnauthorized(res, content) {
  ++_cover__().f["6"];
  ++_cover__().s["6"];

  return res.status(403).json(content);
};

var renderNotFound = exports.renderNotFound = function renderNotFound(res, content) {
  ++_cover__().f["7"];
  ++_cover__().s["7"];

  return res.status(404).json(content);
};

var renderConflict = exports.renderConflict = function renderConflict(res, content) {
  ++_cover__().f["8"];
  ++_cover__().s["8"];

  return res.status(409).json(content);
};

var renderInternalServerError = exports.renderInternalServerError = function renderInternalServerError(res, content) {
  ++_cover__().f["9"];
  ++_cover__().s["9"];

  return res.status(500).json(content);
};

var renderServiceUnavailable = exports.renderServiceUnavailable = function renderServiceUnavailable(res, content) {
  ++_cover__().f["10"];
  ++_cover__().s["10"];

  return res.status(503).json(content);
};

var renderStopPipeline = exports.renderStopPipeline = function renderStopPipeline(res, content) {
  ++_cover__().f["11"];
  ++_cover__().s["11"];

  return res.status(200).send(content);
};