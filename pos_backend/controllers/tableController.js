const createHttpError = require("http-errors");
const Table = require("../models/tableModel");
const mongoose = require("mongoose");


const addTable = async (req, res, next) => {
    try {
        const { tableNo, seats } = req.body;
        if(!tableNo) {
            const error = createHttpError(400, "Table number is required");
            return next(error);
        }

        const table = await Table.findOne({ tableNo });
        if(table) {
            const error = createHttpError(400, "Table already exists");
            return next(error);
        }

        const newTable = await Table({tableNo, seats});
        await newTable.save();

        res.status(201).json({success: true, message: "Table added successfully", table: newTable});

    } catch (error) {
        next(error);        
    }
}

const getTable = async (req, res, next) => {
    try {
        const tables = await Table.find().populate({
            path: "currentOrder",
            select: "cutomerDetails"
    });
        res.status(200).json({success: true, message: "Tables fetched successfully", tables});

    } catch (error) {
        next(error);        
    }
}

const updateTable = async (req, res, next) => {
    try {
        const { status, orderId } = req.body;
        const { id } = req.params;
        if(!mongoose.Types.ObjectId.isValid(id)) {
            const error = createHttpError(404, "Invalid table ID");
            return next(error);
        }

        const table = await Table.findByIdAndUpdate(
            id,
            { status, currentOrder: orderId },
            { new: true } 
        );
        if(!table) {
            const error = createHttpError(404, "Table not found");
            return next(error);
        }

        res.status(200).json({success: true, message: "Table updated successfully", table});

    } catch (error) {
        next(error);                
    }
}

module.exports = { addTable, getTable, updateTable };