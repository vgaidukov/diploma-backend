class ForbiddenError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ForbiddenError';
    this.statusCode = 403;
    this.message = 'Ошибка доступа, требуется авторизация';
  }
}

module.exports = ForbiddenError;
