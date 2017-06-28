var lib = require('../../include/lib');
var NameSpace  = 'backend/users/';
/*******************************************/

exports.index = (req, res) => {
    lib.dbConnection.users.findAll().then(function (users) {
        res.render(NameSpace+'index',{
           users: users,
        });
    }).catch(function (error) {
        console.log('an error:', error);
    });
};
