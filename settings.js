'use strict';

var path = require("path");
var when = require("when");
console.log(path.join(__dirname, "nodes"));
var settings = module.exports = {
    uiPort: process.env.PORT || 1880,
    mqttReconnectTime: 15000,
    serialReconnectTime: 15000,
    debugMaxLength: 10000000,
    debugUseColors: true,
    nodesDir: path.join(__dirname, "nodes"),
    nodesExcludes:[
        '66-mongodb.js',
        '75-exec.js',
        '35-arduino.js',
        '36-rpi-gpio.js',
        '25-serial.js',
        '28-tail.js',
        '50-file.js',
        '31-tcpin.js',
        '32-udp.js',
        '23-watch.js',
        '72-sentiment.js',
        '32-feedparse.js',
        '27-twitter.js',
        '32-feedparse.js',
        '61-email.js',
        'node-red-node-serialport',
        'node-red-node-feedparser',
        'node-red-node-email',
        'node-red-node-twitter'],
    paletteCategories: ['subflows',
        'input',
        'output',
        'function',
        'social',
        'mobile',
        'storage',
        'analysis',
        'advanced'],
    autoInstallModules: false,
    httpAdminRoot: '/admin',
    httpStatic: path.join(__dirname,"public"),
    functionGlobalContext: { },
    flowFile: 'flows.json',
    flowFilePretty: true,
    userDir: './data',
    requireHttps: false,
    logging: {
        console: {
            level: "debug",
            metrics: false,
            audit: false
        }
    },
    editorTheme: {
        page: {
            title: "mandrake.ai"
        },
        header: {
            title: "mandrake.ai"
        }
    },
}

if (process.env.NODE_RED_USERNAME && process.env.NODE_RED_PASSWORD) {
    settings.adminAuth = {
        type: "credentials",
        users: function(username) {
            if (process.env.NODE_RED_USERNAME == username) {
                return when.resolve({username:username,permissions:"*"});
            } else {
                return when.resolve(null);
            }
        },
        authenticate: function(username, password) {
            if (process.env.NODE_RED_USERNAME == username &&
                process.env.NODE_RED_PASSWORD == password) {
                return when.resolve({username:username,permissions:"*"});
            } else {
                return when.resolve(null);
            }
        }
    }
}
