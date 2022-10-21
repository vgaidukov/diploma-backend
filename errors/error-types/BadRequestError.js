const { BAD_REQUEST_ERR } = require('../errorTextMessages');

class BadRequestError extends Error {
  constructor() {
    super();
    this.name = 'ValidationError';
    this.statusCode = 400;
    this.message = BAD_REQUEST_ERR;
  }
}

module.exports = BadRequestError;
