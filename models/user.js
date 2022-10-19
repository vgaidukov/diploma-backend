const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const validator = require('validator');

const UnauthorizedError = require('../errors/error-types/UnauthorizedError');

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      validate: {
        validator(value) {
          return validator.isEmail(value);
        },
        message: 'Email is not valid',
      },
      required: [true, 'Please feel in'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Please feel in'],
      select: false,
    },
    name: {
      type: String,
      minlength: [2, 'Must be at least 2, got {VALUE}'],
      maxlength: [30, 'Must be not more then 30, got {VALUE}'],
      default: 'Жак-Ив Кусто',
    },
  },
  {
    toObject:
    {
      versionKey: false,
      useProjection: true,
    },
  },
);

userSchema.statics.findUserByCredentials = function (email, password) {
  return this.findOne({ email }).select('+password')
    .then((user) => {
      if (!user) {
        return Promise.reject(new UnauthorizedError());
      }

      return bcrypt.compare(password, user.password)
        .then((matched) => {
          if (!matched) {
            return Promise.reject(new UnauthorizedError());
          }
          return user;
        });
    });
};

module.exports = mongoose.model('user', userSchema);
