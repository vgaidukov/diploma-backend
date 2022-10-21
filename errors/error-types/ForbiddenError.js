const { FORBIDDEN_ERR } = require('../errorTextMessages');

class ForbiddenError extends Error {
  constructor() {
    super();
    this.name = 'ForbiddenError';
    this.statusCode = 403;
    this.message = FORBIDDEN_ERR;
  }
}

module.exports = ForbiddenError;
