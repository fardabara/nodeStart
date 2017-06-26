var lib = require('../include/lib');
var webServiceNameSpace = '/app/';
/******** S L A S H**********/
module.exports = function (app) {

    var sampleModule = require('../controllers/app/sample');
    app.get(webServiceNameSpace+'sample/index', sampleModule.index);


};