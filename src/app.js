const express = require('express');
const fs = require('fs');
const app = express();

app.use(express.static('public'));

app.get('/', function(req, res) {
  res.send('You need to go to /bingo');
});

app.get('/bingo', function(req, res) {

  fs.readFile('src\\numbers.txt', 'utf8', function(err, contents) {
    if (err) {
        return console.log(err)
    }
    res.send(contents.split('\n').join(', ').slice(0, -2))
  });

});

module.exports = app;