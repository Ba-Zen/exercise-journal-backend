const express = require('express');
const server = express();

server.use(express.json());
const exerciseRouter = require('../exercises/exerciseRouter');

server.get('/', (req, res) => {
  res.send('Hey Batman');
});

server.use('/api/exercises', exerciseRouter);

module.exports = server;
