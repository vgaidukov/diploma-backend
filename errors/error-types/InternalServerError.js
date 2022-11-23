const { INTERNAL_SERVER_ERR } = require('../errorTextMessages');

class InternalServerError extends Error {
  constructor() {
    super();
    this.name = 'DefaultError';
    this.statusCode = 500;
    this.message = INTERNAL_SERVER_ERR;
  }
}

module.exports = InternalServerError;
