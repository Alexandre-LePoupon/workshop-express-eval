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

    let mynumbers = req.query.mynumbers;
    let nums = contents.split('\n').join(', ').slice(0, -2);

    if(mynumbers != undefined) {
      var myNumbArray = JSON.parse("[" + mynumbers + "]");
      var numbArray = JSON.parse("[" + nums + "]");

      if(myNumbArray.sort().join(',') === numbArray.sort().join(',')){
        res.send('Bingo');
      }
      else {
        res.send('The bingo game is already started, sorry your numbers doesn t match with known numbers ' + nums + ' ; so you can not say Bingo');
      }
      
    } else {
      res.send('The bingo game is already started and known numbers are ' + nums)
    }
  });

});

module.exports = app;