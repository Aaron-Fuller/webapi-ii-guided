const express = require('express');
const server = express();
const hubsRouter= require('./hubs/hubs-router.js');

//Global configuration
server.use(express.json());
server.use('/api/hubs', hubsRouter);
//server.user('/api/messages', messageRputer);
//server.user('/api/users', userRouter);

server.get('/', (req, res) => {
  res.send(`
    <h2>Lambda Hubs API</h>
    <p>Welcome to the Lambda Hubs API</p>
  `);
});



module.exports = server;