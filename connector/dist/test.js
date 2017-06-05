'use strict';

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _mocha = require('mocha');

var _mocha2 = _interopRequireDefault(_mocha);

var _istanbul = require('istanbul');

var _istanbul2 = _interopRequireDefault(_istanbul);

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

var _routes = require('./routes/');

var _init = require('./utils/init');

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _recursiveReaddir = require('recursive-readdir');

var _recursiveReaddir2 = _interopRequireDefault(_recursiveReaddir);

var _Logger = require('./utils/Logger');

var _Logger2 = _interopRequireDefault(_Logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable max-nested-callbacks*/


/* Test Framework */
global.Bot = require('./models/Bot.model');
global.Channel = require('./models/Channel.model');
global.Conversation = require('./models/Conversation.model');
global.Message = require('./models/Message.model');
global.Participant = require('./models/Participant.model');

var app = (0, _express2.default)();

// Load the configuration
var env = process.env.NODE_ENV || 'test';

var config = _config2.default[env];

// Enable Cross Origin Resource Sharing
app.use((0, _cors2.default)());

// Enable auto parsing of json content
app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: true }));

// Use native promise API with mongoose
_mongoose2.default.Promise = global.Promise;

// Mongoose connection
/* eslint-disable no-console */
/* eslint-disable max-nested-callbacks */
_mongoose2.default.connect('mongodb://' + config.db.host + ':' + config.db.port + '/' + config.db.dbName);
var db = _mongoose2.default.connection;
db.on('error', function (err) {
  _Logger2.default.error('FAILED TO CONNECT', err);
  process.exit(1);
});

// Launch the application
db.once('open', function () {
  (0, _routes.createRouter)(app);
  (0, _init.initServices)();
  global.app = app;
  var port = config.server.port;
  app.listen(port, function () {
    app.emit('ready');
    _Logger2.default.success('Test app listening on port ' + port + ' !');
    _Logger2.default.info('[TEST] Launching test runner...');

    var mocha = new _mocha2.default({
      reporter: 'dot',
      timeout: '2000'
    });
    var collector = new _istanbul2.default.Collector();
    var reporter = new _istanbul2.default.Reporter();
    var testsDirectory = './test';

    (0, _recursiveReaddir2.default)(testsDirectory, function (err, files) {
      if (err) {
        process.exit(2);
      }
      // Files is an array of filename
      _Logger2.default.info('[TEST] Listing test files...');
      files.filter(function (file) {
        return file.substr(-9) === '.tests.js';
      }).forEach(function (file) {
        mocha.addFile(_path2.default.join('./', file));
      });

      process.env.ROUTETEST = 'http://localhost:' + config.server.port;

      mocha.run(function (errCount) {
        _mongoose2.default.connection.db.dropDatabase();

        collector.add(global.__coverage__);
        reporter.addAll(['text-summary', 'html']);
        reporter.write(collector, true, function () {
          _Logger2.default.info('\nCoverage report saved to coverage/index.html');
        });

        if (errCount > 0) {
          _Logger2.default.info('Total error' + (errCount > 1 ? 's' : '') + ': ' + errCount);
          process.exit(1);
        }
        process.exit(0);
      });
    });
  });
});
/* eslint-enable max-nested-callbacks */
/* eslint-enable no-console */
/* eslint-enable max-nested-callbacks*/