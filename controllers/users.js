const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { NODE_ENV, JWT_SECRET } = process.env;

const { Joi } = require('celebrate');
Joi.objectId = require('joi-objectid')(Joi);

const User = require('../models/user');
const { setErrorType } = require('../errors/setErrorType');

const NotFoundError = require('../errors/error-types/NotFoundError');

const createUser = (req, res, next) => {
  const {
    email,
    password,
    name,
  } = req.body;
  bcrypt.hash(password, 10)
    .then((hash) => User.create({
      email,
      password: hash,
      name,
    }))
    .then((user) => {
      res.send({ data: user.toObject() });
    })
    .catch((err) => {
      next(setErrorType(err));
    });
};

const login = (req, res, next) => {
  const { email, password } = req.body;

  return User.findUserByCredentials(email, password)
    .then((user) => {
      const tokenValue = jwt.sign(
        { _id: user._id },
        NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret',
        { expiresIn: '1w' },
      );
      res
        .send({ token: tokenValue });
    })
    .catch(next);
};

const getUserInfo = (req, res, next) => {
  User.findById(req.user._id)
    .then((user) => {
      if (!user) {
        throw new NotFoundError();
      }

      res.send(user);
    })
    .catch(next);
};

const setUserInfo = (req, res, next) => {
  const { name, email } = req.body;

  User.findByIdAndUpdate(
    req.user._id,
    { name, email },
    {
      new: true,
      runValidators: true,
    },
  )
    .then((user) => {
      res.send(user);
    })
    .catch((err) => {
      next(setErrorType(err));
    });
};

module.exports = {
  createUser,
  login,
  getUserInfo,
  setUserInfo,
};
