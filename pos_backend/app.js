const express = require('express');
const app = express();
const config = require("./config/config");
const connectDB = require('./config/database');
const globalErrorHandler = require('./middlewares/globalErrorHandler');

// Module to get errors
// const createHttpError = require('http-errors');

const PORT = config.port;
connectDB();

// Root EndPoint
app.get('/', (req, res) => {

    // const err = createHttpError(404, "Something went wrong!");
    // throw err;

    res.json({ message: 'Hello from the POS server!'});
});

// Global Error Handler
app.use(globalErrorHandler);

// Server
app.listen(PORT, () => {
    console.log(`POS Server is running on port ${PORT}`);
});