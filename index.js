const express = require('express');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
  res.send('Hey Batman');
});

server.listen(8000, () =>
  console.log("Holy Toledo Batman, we're up and running on port 8k")
);
