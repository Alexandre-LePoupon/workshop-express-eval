const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', function(req, res) {
  res.send('You need to go to /bingo');
});

app.get('/bingo', function(req, res) {
  res.send('Bingo');
});
  

module.exports = app;