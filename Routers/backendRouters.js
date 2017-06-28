var lib = require('../include/lib');
var backendNameSpace = '/backend/';
module.exports = function (app) {

    var homeModule = require('../controllers/backend/home/index');
    app.use(backendNameSpace+'home/index', homeModule.index);

    app.use(backendNameSpace+'users/index', require('../controllers/backend/users').index);
};