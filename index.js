const app = require('./src/app');

// port
const port = process.argv[2];

// start server here
const server = app.listen(port, function() {
  console.log(`Server started with port ${server.address().port}`);
});