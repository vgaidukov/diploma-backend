const Movie = require('../models/movie');

const NotFoundError = require('../errors/error-types/NotFoundError');
const ForbiddenError = require('../errors/error-types/ForbiddenError');

const { setErrorType } = require('../errors/setErrorType');

const getMovies = (req, res, next) => {
  Movie.find({})
    .then((movies) => {
      res.send(movies);
    })
    .catch(next);
};

const createMovie = (req, res, next) => {
  req.body.owner = req.user._id;
  const {
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    thumbnail,
    id,
    nameRU,
    nameEN,
    owner,
  } = req.body;

  Movie.create({
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    thumbnail,
    id,
    nameRU,
    nameEN,
    owner,
  })
    .then((movie) => {
      res.send(movie);
    })
    .catch((err) => {
      next(setErrorType(err));
    });
};

const deleteMovie = (req, res, next) => {
  Movie.findById(req.params._id)
    .then((movie) => {
      if (!movie) {
        throw new NotFoundError();
      }
      if (movie.owner.toString() !== req.user._id) {
        throw new ForbiddenError();
      }

      return movie;
    })
    .then((movie) => Movie.deleteOne(movie))

    .then((movie) => res.send(movie))

    .catch(next);
};

module.exports = {
  getMovies,
  createMovie,
  deleteMovie,
};
