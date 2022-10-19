const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const validator = require('validator');

const movieSchema = new mongoose.Schema(
  {
    country: {
      type: String,
      required: [true],
    },
    director: {
      type: String,
      required: [true],
    },
    duration: {
      type: Number,
      required: [true],
    },
    year: {
      type: String,
      required: [true],
    },
    description: {
      type: String,
      required: [true],
    },
    image: {
      type: String,
      validate: {
        validator(value) {
          return urlPattern.test(value);
        },
        message: 'URL is not valid',
      },
      required: [true],
    },
    trailerLink: {
      type: String,
      validate: {
        validator(value) {
          return urlPattern.test(value);
        },
        message: 'URL is not valid',
      },
      required: [true],
    },
    thumbnail: {
      type: String,
      validate: {
        validator(value) {
          return urlPattern.test(value);
        },
        message: 'URL is not valid',
      },
      required: [true],
    },
    owner: {
      type: mongoose.ObjectId,
      ref: User,
      required: [true],
    },
    movieId: {
      type: mongoose.ObjectId,
      required: [true],
    },
    nameRU: {
      type: String,
      required: [true],
    },
    nameEN: {
      type: String,
      required: [true],
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

module.exports = mongoose.model('user', movieSchema);
