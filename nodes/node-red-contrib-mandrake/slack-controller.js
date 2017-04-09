'use strict';
module.exports = function(RED) {
    function SlackNode(n) {
        RED.nodes.createNode(this,n);
        this.bot_token = n.bot_token;
    }
    RED.nodes.registerType("slack-controller", SlackNode);
}
