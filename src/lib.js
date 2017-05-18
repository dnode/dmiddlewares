'use strict';

const dhandler = require('./dhandler');

module.exports = (app, middlewares) => {
  middlewares.map(middlewares => {
    if (!Array.isArray(middlewares)) {
      middlewares = [middlewares];
    }
    if (typeof middlewares[0] !== 'string') {
      middlewares = ['/', middlewares];
    }
    if (!Array.isArray(middlewares[1])) {
      middlewares[1] = [middlewares[1]];
    }
    middlewares[1].map(middleware => {
      app.use(middlewares[0], dhandler(middleware));
    });
  });
};
