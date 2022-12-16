var express = require('express')
var app = express()
var port = 8080;
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.get('/', function (req, res) {
  res.send('Hello Worldaaaaaaa')
})
 // POST http://localhost:8080/api/users
app.post('/api/users', function(req, res) {
  var user_id = req.body.id;
  var token = req.body.token;
  var geo = req.body.geo;
  res.send(user_id + ' ' + token + ' ' + geo);
  });
  // start the server
  app.listen(port);
  console.log('Server started! At http://localhost:' + port);



    