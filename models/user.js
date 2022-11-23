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
      required: [true, 'Please feel in email'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Please feel in password'],
      select: false,
    },
    name: {
      type: String,
      required: [true, 'Please feel in name'],
      minlength: [2, 'Name must be at least 2, got {VALUE}'],
      maxlength: [30, 'Name must be not more then 30, got {VALUE}'],
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
