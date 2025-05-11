const express = require('express');
const router = express.Router();
const { addOrder, getOrders, getOrderById, updateOrder, } = require('../controllers/orderController');
const { isVerifiedUser } = require('../middlewares/tokenVerification');

router.route("/").post(isVerifiedUser, addOrder);
router.route("/").get(isVerifiedUser, getOrders);
router.route("/:id").get(isVerifiedUser, getOrderById);
router.route("/:id").put(isVerifiedUser, updateOrder);

module.exports = router;