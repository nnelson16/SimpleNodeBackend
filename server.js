// require dependencies
const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const db = require('./config/db.js')

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

const port = 8000;

MongoClient.connect(db.url, function(err, database) {
  if(err) {
    return console.log(err);
  }
  require('./app/routes')(app, database);

  app.listen(port, function() {
    console.log('We are live on port: '+port);
  });
});
