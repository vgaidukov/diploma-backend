const { NOT_FOUND_ERR } = require('../errorTextMessages');

class NotFoundError extends Error {
  constructor() {
    super();
    this.name = 'CastError';
    this.statusCode = 404;
    this.message = NOT_FOUND_ERR;
  }
}

module.exports = NotFoundError;
