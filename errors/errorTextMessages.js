const BAD_REQUEST_ERR = 'Ошибка валидации, переданы некорректные данные';
const CONFLICT_ERR = 'Ошибка, пользователь уже существует';
const FORBIDDEN_ERR = 'Ошибка доступа, требуется авторизация';
const INTERNAL_SERVER_ERR = 'На сервере произошла ошибка';
const NOT_FOUND_ERR = 'Фильм или пользователь не найден, или был запрошен несуществующий роут';
const UNAUTHORIZED_ERR = 'Ошибка доступа, неправильные почта или пароль';

module.exports = {
  BAD_REQUEST_ERR,
  CONFLICT_ERR,
  FORBIDDEN_ERR,
  INTERNAL_SERVER_ERR,
  NOT_FOUND_ERR,
  UNAUTHORIZED_ERR,
};
