var express = require('express');
var app = express();
var connect = require('connect');
var fs = require('fs')
    , path = require('path')
    , lodash = require('lodash');

var appConfig = require('../config.json').development.db;
var Sequelize = require('sequelize');
var db = {};


var sequelize = new Sequelize(appConfig.database, appConfig.user, appConfig.pass, {
    host: appConfig.host,
    dialect: appConfig.dialect,
    // logging: false,
    define: {
        underscored: false,
        syncOnAssociation: true,
        charset: 'utf8',
        collate: 'utf8_general_ci',
        timestamps: true
    }
});

fs.readdirSync(__dirname).filter(function (file) {
        return (file.indexOf('.') !== 0) && (file !== 'index.js');
    }).forEach(function (file) {
        var model = sequelize.import(path.join(__dirname, file))
        db[model.name] = model
    });

Object.keys(db).forEach(function (modelName) {
    if ('associate' in db[modelName]) {
        db[modelName].associate(db);
    }
});

module.exports = lodash.extend({
    sequelize: sequelize,
    Sequelize: Sequelize
}, db);