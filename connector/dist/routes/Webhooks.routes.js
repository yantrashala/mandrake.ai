'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _coverage__file;

function _cover__() {
  if (!_coverage__file) _coverage__file = _coverage__getInitialState();
  return _coverage__file;
}

function _coverage__getInitialState() {
  var path = '/Users/slahir/Projects/bot-connector/src/routes/Webhooks.routes.js',
      hash = '246a83b567b6d55cb3c8d2a19e1ddf41';
  var global = new Function('return this')();
  var coverage = global['__coverage__'] || (global['__coverage__'] = {});
  if (coverage[path] && coverage[path].hash === hash) return coverage[path];
  var coverageData = global['JSON'].parse('{"path":"/Users/slahir/Projects/bot-connector/src/routes/Webhooks.routes.js","s":{},"b":{},"f":{},"statementMap":{},"fnMap":{},"branchMap":{}}');
  coverageData.hash = hash;
  return coverage[path] = coverageData;
}

exports.default = [

/*
* This route is the webhook shared with a channel
* Depending on incomming request, it automatically detect which channel message is comming from.
* In many cases, this webhook is automatically registered onto right channel (Kik for example).
* Check our documentation for more info.
*/
{
  method: 'POST',
  path: '/webhook/:channel_id',
  validators: [],
  handler: controllers.Webhooks.forwardMessage
},

/*
* This route is a specific Facebook endpoint.
* Facebook needs a GET endpoint on same route as webhook one to validate this webhook
*/
{
  method: 'GET',
  path: '/webhook/:channel_id',
  validators: [],
  handler: controllers.Webhooks.subscribeFacebookWebhook
}];