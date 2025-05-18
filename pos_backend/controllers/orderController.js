const createHttpError = require('http-errors');
const Order = require('../models/orderModel');
const mongoose = require('mongoose');

const addOrder = async (req, res, next) => {
    try {
        const order = new Order(req.body);
         await order.save();
        res.status(201).json({
            status: 'success',
            message: 'Order created successfully',
            data: order
        });
    } catch (error) {
        next(error);
    }
}

const getOrderById = async (req, res, next) => {
    try {

        const { id } = req.params;
        if(!mongoose.Types.ObjectId.isValid(id)) {
            const error = createHttpError(404, 'Invalid order ID');
            return next(error);
        }

        const order = await Order.findById(id);
        if (!order) {
            const error = createHttpError(404, 'Order not found');
            return next(error);
        }

        res.status(200).json({success: true, message: 'Order retrieved successfully', data: order}); 

    } catch (error) {
        next(error);
    } 
}

const getOrders = async (req, res, next) => {
    try {
        const orders = await Order.find();
        res.status(200).json({status: 'success', message: 'Orders retrieved successfully', data: orders});

    } catch (error) {
        next(error);
    }
}

const updateOrder = async (req, res, next) => {
    try {
        const { orderStatus } = req.body;
        const { id } = req.params;

        if(!mongoose.Types.ObjectId.isValid(id)) {
            const error = createHttpError(404, 'Invalid ID');
            return next(error);
        }

        const order = await Order.findByIdAndUpdate(id, { orderStatus }, { new: true });

        if (!order) {
            const error = createHttpError(404, 'Order not found');
            return next(error);
        }

        res.status(200).json({success: true, message: 'Order updated successfully', data: order});
        
    } catch (error) {
        next(error);        
    }
}

module.exports = { addOrder, getOrderById, getOrders, updateOrder };