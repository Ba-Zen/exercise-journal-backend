require('dotenv').config();

const server = require('./api/server');

const port = process.env.PORT;

server.listen(port, () =>
  console.log(`Holy Toledo Batman, we're up and running on port ${port}`)
);
