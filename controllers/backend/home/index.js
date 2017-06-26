var lib = require('../../../include/lib');
var NameSpace = 'backend/home/';
/*******S L A S H**********/
exports.index = function (req, res) {

    res.render(NameSpace+'index',{
        title: 'index'
    });
};