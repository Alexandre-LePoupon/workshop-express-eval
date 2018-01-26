let chalk = require('chalk');

const app = require('./src/app');

// port
const port = 3000;

// start server here
const server = app.listen(port, function() {
  console.log(`Server started with port ${server.address().port}`)
})

