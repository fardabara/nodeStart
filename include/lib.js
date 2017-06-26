var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var fs = require('fs');
var http = require('http');
var path = require('path');
var bodyParser = require('body-parser');
var session = require('express-session');
var cookieParser = require('cookie-parser');
module.exports = {
    express: express,
    port: port,
    app: app,
    fs: fs,
    http: http,
    path: path,
    bodyParser: bodyParser,
    session: session,
    cookieParser: cookieParser
};