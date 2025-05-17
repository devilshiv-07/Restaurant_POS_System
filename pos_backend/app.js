const express = require('express');
const app = express();
const config = require("./config/config");
const connectDB = require('./config/database');
const globalErrorHandler = require('./middlewares/globalErrorHandler');
const cookieParser = require('cookie-parser');
const cors = require("cors")

// Module to get errors
// const createHttpError = require('http-errors');

const PORT = config.port;
connectDB();

// Middleware
app.use(cors({
    credentials: true,
    origin: ["http://localhost:5173"]
}));
app.use(express.json()); // Parse JSON data
app.use(cookieParser()); // Parse cookies


// Root EndPoint
app.get('/', (req, res) => {
    res.json({ message: 'Hello from the POS server!'});
});

// Other EndPoints
app.use('/api/user', require('./routes/userRoute'));
app.use('/api/order', require('./routes/orderRoute'));
app.use('/api/table', require('./routes/tableRoute'));
app.use('/api/payment', require('./routes/paymentRoute'));

// Global Error Handler
app.use(globalErrorHandler);

// Server
app.listen(PORT, () => {
    console.log(`POS Server is running on port ${PORT}`);
});