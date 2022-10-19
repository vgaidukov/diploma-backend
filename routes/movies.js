const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');
Joi.objectId = require('joi-objectid')(Joi);

const { urlPattern } = require('../utils/constants');

// const {
// getCards,
//   createCard,
//   deleteCard,
//   likeCard,
//   dislikeCard,
// } = require('../controllers/movies');

// router.get('/', getCards);

// router.post(
//   '/',
//   celebrate({
//     body: Joi.object().keys({
//       name: Joi.string().required().min(2).max(30),
//       link: Joi.string().required().regex(urlPattern),
//     }),
//   }),
//   createCard,
// );

// router.delete(
//   '/:cardId',
//   celebrate({
//     params: Joi.object().keys({
//       cardId: Joi.objectId().required(),
//     }),
//   }),
//   deleteCard,
// );

// router.put(
//   '/:cardId/likes',
//   celebrate({
//     params: Joi.object().keys({
//       cardId: Joi.objectId().required(),
//     }),
//   }),
//   likeCard,
// );

// router.delete(
//   '/:cardId/likes',
//   celebrate({
//     params: Joi.object().keys({
//       cardId: Joi.objectId().required(),
//     }),
//   }),
//   dislikeCard,
// );

module.exports = router;
