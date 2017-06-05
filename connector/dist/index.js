'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

var _utils = require('./utils');

var _models2 = require('./models');

var _models3 = _interopRequireDefault(_models2);

var _controllers2 = require('./controllers');

var _controllers3 = _interopRequireDefault(_controllers2);

var _services2 = require('./services');

var _services3 = _interopRequireDefault(_services2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

// Load the mongoose Schemas

global.models = _models3.default;
global.controllers = _controllers3.default;
global.services = {};

_lodash2.default.forOwn(_services3.default, function (service, serviceName) {
  services[serviceName.toLowerCase()] = service;
});

var createRouter = require('./routes').createRouter;

// Load the configuration
global.config = _config2.default;

// Enable Cross Origin Resource Sharing
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*, X-Expiry, X-Client, X-Access-Token, X-Uuid, Content-Type, Authorization');
  res.header('Access-Control-Expose-Headers', 'X-Client, X-Access-Token, X-Expiry, X-Uuid');
  res.header('Access-Control-Allow-Methods', 'GET, DELETE, POST, PUT, OPTIONS');
  res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
  res.header('Expires', '-1');
  res.header('Pragma', 'no-cache');
  next();
});

// Enable auto parsing of json content
app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: true }));

// Use native promise API with mongoose
_mongoose2.default.Promise = global.Promise;

// Mongoose connection
var dbUrl = 'mongodb://';

if (config.db.username) {
  dbUrl = '' + dbUrl + config.db.username + ':' + config.db.password + '@';
}
dbUrl = '' + dbUrl + config.db.host + ':' + config.db.port + '/' + config.db.dbName + '?ssl=' + (config.db.ssl || 'false');

_mongoose2.default.connect(dbUrl);
var db = _mongoose2.default.connection;
db.on('error', function (err) {
  _utils.Logger.error('FAILED TO CONNECT', err);
  process.exit(1);
});

// Launch the application
db.once('open', function () {
  createRouter(app);
  (0, _utils.initServices)();
  app.listen(config.server.port, function () {
    app.emit('ready');
    _utils.Logger.info('App is running and listening to port ' + config.server.port);
  });
});