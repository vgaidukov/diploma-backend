const router = require('express').Router();
const { validateMovieAdd, validateMovieDelete } = require('../middlewares/validations');
const { getMovies, createMovie, deleteMovie } = require('../controllers/movies');

router.get('/', getMovies);

router.post('/', validateMovieAdd, createMovie);

router.delete('/:_id', validateMovieDelete, deleteMovie);

module.exports = router;
