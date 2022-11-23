const router = require('express').Router();
const { validateUserInfo } = require('../middlewares/validations');
const { setUserInfo, getUserInfo } = require('../controllers/users');

router.get('/me', getUserInfo);

router.patch('/me', validateUserInfo, setUserInfo);

module.exports = router;
