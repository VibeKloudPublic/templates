const express = require('express');
const next = require('next');
const productsApi = require('./productsApi');

const port = parseInt(process.env.PORT || '8080', 10);
const dev = process.env.NODE_ENV !== 'production';

const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    server.use(express.json());
    server.use('/api', productsApi);

    server.all('*', (req, res) => handle(req, res));

    server.listen(port, () => {
      console.log(`Server listening on http://0.0.0.0:${port}`);
    });
  })
  .catch((error) => {
    console.error('Unable to start server:', error);
    process.exit(1);
  });
