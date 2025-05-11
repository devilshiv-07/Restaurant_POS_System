const express = require('express');
const app = express();
const config = require("./config/config");
const connectDB = require('./config/database');
const globalErrorHandler = require('./middlewares/globalErrorHandler');
const cookieParser = require('cookie-parser');

// Module to get errors
// const createHttpError = require('http-errors');

const PORT = config.port;
connectDB();

// Middleware
app.use(express.json()); // Parse JSON data
app.use(cookieParser()); // Parse cookies

// Root EndPoint
app.get('/', (req, res) => {

    // const err = createHttpError(404, "Something went wrong!");
    // throw err;

    res.json({ message: 'Hello from the POS server!'});
});

// Other EndPoints
app.use('/api/user', require('./routes/userRoute'));
app.use('/api/order', require('./routes/orderRoute'));

// Global Error Handler
app.use(globalErrorHandler);

// Server
app.listen(PORT, () => {
    console.log(`POS Server is running on port ${PORT}`);
});