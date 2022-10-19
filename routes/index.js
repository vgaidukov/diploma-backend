const { celebrate, Joi } = require('celebrate');
const router = require('express').Router();

const routerUsers = require('./users');
const routerMovies = require('./movies');
const auth = require('../middlewares/auth');
const { login, createUser } = require('../controllers/users');

const NotFoundError = require('../errors/error-types/NotFoundError');

router.post(
  '/signup',
  celebrate({
    body: Joi.object().keys({
      email: Joi.string().required().email(),
      password: Joi.string().required(),
      name: Joi.string().required().min(2).max(30),
    }),
  }),
  createUser,
);

router.post(
  '/signin',
  celebrate({
    body: Joi.object().keys({
      email: Joi.string().required().email(),
      password: Joi.string().required(),
    }),
  }),
  login,
);

router.use(auth);

router.use('/users', routerUsers);
router.use('/movies', routerMovies);

router.use((res, req, next) => {
  const err = new NotFoundError();
  next(err);
});

module.exports = router;
