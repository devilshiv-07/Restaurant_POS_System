const express = require('express');
const router = express.Router();
const { addTable, getTable, updateTable } = require('../controllers/tableController');
const { isVerifiedUser } = require('../middlewares/tokenVerification');

router.route('/').post(isVerifiedUser, addTable);
router.route('/').get(isVerifiedUser, getTable);
router.route('/:id').put(isVerifiedUser, updateTable);

module.exports = router;