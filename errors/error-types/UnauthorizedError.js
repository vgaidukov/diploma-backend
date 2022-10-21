const { UNAUTHORIZED_ERR } = require('../errorTextMessages');

class UnauthorizedError extends Error {
  constructor() {
    super();
    this.name = 'UnauthorizedError';
    this.statusCode = 401;
    this.message = UNAUTHORIZED_ERR;
  }
}

module.exports = UnauthorizedError;
