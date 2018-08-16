var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var fs = ('fs');

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require('./app/routing/htmlRoutes')(app); //why .app?
require('./app/routing/apiRoutes')(app); //why .app?



var PORT = process.env.PORT || 500;

app.listen(PORT, function() {
    console.log("App listening on localhost:" + PORT);
  });
  

