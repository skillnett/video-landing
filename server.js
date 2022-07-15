// server.js
const next = require('next') 
const app = next({dev: process.env.NODE_ENV !== 'production'}) 
const handle = app.getRequestHandler();
const local = process.env.LOCAL;
const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;
const env = process.env.NODE_ENV;
​
// With express
const express = require('express')

app
  .prepare()
  .then(async () => {
    const server = express();

    server.get('*', (req, res) => handle(req, res));

    server.listen(port, local || 'localhost', () => {
      console.log(`> Ready on port ${port} [${env}]`);
    });
  })
  .catch((err) => {
    console.log('An error occurred, unable to start the server');
    console.log(err);
  });
