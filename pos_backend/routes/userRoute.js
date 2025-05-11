const express = require('express');
const { register, login, getUserData, logout } = require('../controllers/userController');
const { isVerifiedUser } = require('../middlewares/tokenVerification');
const router = express.Router();

// Authentication Routes
router.route('/register').post(register);
router.route('/login').post(login);
router.route('/').get(isVerifiedUser, getUserData);
router.route("/logout").post(isVerifiedUser, logout);

module.exports = router;