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
  var path = '/Users/slahir/Projects/bot-connector/src/routes/Participants.routes.js',
      hash = '4fc45fa86b5edf1847312a89e3c8523c';
  var global = new Function('return this')();
  var coverage = global['__coverage__'] || (global['__coverage__'] = {});
  if (coverage[path] && coverage[path].hash === hash) return coverage[path];
  var coverageData = global['JSON'].parse('{"path":"/Users/slahir/Projects/bot-connector/src/routes/Participants.routes.js","s":{},"b":{},"f":{},"statementMap":{},"fnMap":{},"branchMap":{}}');
  coverageData.hash = hash;
  return coverage[path] = coverageData;
}

exports.default = [
/**
* @api {get} /participants Index Connector's Participants
* @apiName List participants
* @apiGroup Participants
*
* @apiDescription Index connector participants (for all conversations and all channels)
*
* @apiSuccess (Success 200 with at least one participant) {Array} results Array of participants
* @apiSuccess (Success 200 with at least one participant) {ObjectId} results.id Participant objectId
* @apiSuccess (Success 200 with at least one participant) {String} results.name Participant name
* @apiSuccess (Success 200 with at least one participant) {String} results.slug Participant slug
* @apiSuccess (Success 200 with at least one participant) {Object} results.information Particpant information
* @apiSuccess (Success 200 with at least one participant) {Boolean} results.isBot Is this particpant a bot ?
* @apiSuccess (Success 200 with at least one participant) {String} message Participants successfully rendered
*
*
* @apiSuccess (Success 200 with no participant) {null} results Response data
* @apiSuccess (Success 200 with no participant) {String} message No participants
*/
{
  method: 'GET',
  path: '/connectors/:connector_id/participants',
  validators: [],
  handler: controllers.Participants.getParticipantsByConnectorId
},

/**
* @api {get} /participants/:participant_id Show a specific participant (for a connector)
* @apiName Show participant
* @apiGroup Participants
*
* @apiDescription Show a specific participant (for a connector)
*
* @apiParam (Route Parameters) {ObjectId} participant_id Participant ObjectId
*
* @apiSuccess (Success 200) {Participant} results Participant
* @apiSuccess (Success 200) {ObjectId} results.id Participant objectId
* @apiSuccess (Success 200) {String} results.name Participant name
* @apiSuccess (Success 200) {String} results.slug Participant slug
* @apiSuccess (Success 200) {Object} results.information Particpant information
* @apiSuccess (Success 200) {Boolean} results.isBot Is this particpant a bot ?
* @apiSuccess (Success 200) {String} message Participant successfully rendered
*
* @apiError (Bad Request 400 for participant_id) {String} message Parameter participant_id is invalid
*/
{
  method: 'GET',
  path: '/connectors/:connector_id/participants/:participant_id',
  validators: [],
  handler: controllers.Participants.getParticipantByConnectorId
}];