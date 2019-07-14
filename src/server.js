const express = require('express');
const morgan = require('morgan');

class App {
  constructor() {
    this.express = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.express.use(express.json());
    this.express.use(morgan('tiny'));
  }

  routes() {
    require('./routes').forEach(route => route(this.express));
  }
}

module.exports = new App().express;
