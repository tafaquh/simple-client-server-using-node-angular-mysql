var db = require('../config/databaseConfig.js');

var userDB = {
  getUserById: function(userid, callback){
    return db.query("select * from user where userid=?", [userid], callback);
  }
}
module.exports = userDB