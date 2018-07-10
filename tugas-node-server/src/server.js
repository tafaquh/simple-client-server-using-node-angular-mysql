const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors')

const app = express()
app.use(bodyParser.json())
app.use(cors())

require('./routes.js')(app)

var server = app.listen(8081, function () {
  var port = server.address().port;
  console.log('Web App Hosted at http://localhost:%s',port);
});