const { CONFLICT_ERR } = require('../errorTextMessages');

class ConflictError extends Error {
  constructor() {
    super();
    this.name = 'ConflictError';
    this.statusCode = 409;
    this.message = CONFLICT_ERR;
  }
}

module.exports = ConflictError;
