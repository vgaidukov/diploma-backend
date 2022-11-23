const BadRequestError = require('./error-types/BadRequestError');
const NotFoundError = require('./error-types/NotFoundError');
const UnauthorizedError = require('./error-types/UnauthorizedError');
const ConflictError = require('./error-types/ConflictError');

const setErrorType = (err) => {
  if (err.name === 'ValidationError') {
    return new BadRequestError();
  }
  if (err.name === 'CastError') {
    return new NotFoundError();
  }
  if (err.name === 'UnauthorizedError') {
    return new UnauthorizedError();
  }
  if (err.name === 'ConflictError') {
    return new ConflictError();
  }
  if (err.code === 11000) {
    return new ConflictError();
  }
  return err;
};

module.exports = { setErrorType };
