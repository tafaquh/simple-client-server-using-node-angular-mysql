var user = require('../models/User.js');

module.exports = {
  getUser (req, res, next) {
    var id = req.params.userid;

    user.getUserById(id, function (err, result) {
      if (!err) {
        res.json(result);
      }else{
        res.status(500).send("Some error");
      }
    })
  } 
}