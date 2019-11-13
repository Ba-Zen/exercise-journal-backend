const express = require('express');

const server = require('./api/server');

server.listen(8000, () =>
  console.log("Holy Toledo Batman, we're up and running on port 8k")
);
