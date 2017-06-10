var Botkit = require('botkit');

module.exports = function (RED) {
	'use strict';
	function Node(n) {
		RED.nodes.createNode(this, n);
		var node = this;
		var slack = RED.nodes.getNode(n.slack);
		if (slack.bot_token) {
			node.controller = Botkit.slackbot({
				debug: true,
			});
			node.bot = this.controller.spawn({
				token: slack.bot_token
			}).startRTM();
		}
		this.on('input', function (msg) {
			node.bot.reply(msg.message, msg.payload);
		});
	}
	RED.nodes.registerType('slack-reply', Node);
};
