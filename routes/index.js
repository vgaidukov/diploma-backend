const router = require('express').Router();

const routerUsers = require('./users');
const routerMovies = require('./movies');
const auth = require('../middlewares/auth');
const { login, createUser } = require('../controllers/users');
const { validateRegistration, validateAuthentication } = require('../middlewares/validations');

const NotFoundError = require('../errors/error-types/NotFoundError');

router.post('/signup', validateRegistration, createUser);
router.post('/signin', validateAuthentication, login);

router.use(auth);

router.use('/users', routerUsers);
router.use('/movies', routerMovies);

router.use((res, req, next) => {
  const err = new NotFoundError();
  next(err);
});

module.exports = router;
