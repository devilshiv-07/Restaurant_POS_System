const express = require('express');
const app = express();
const config = require("./config/config");
const connectDB = require('./config/database');
const globalErrorHandler = require('./middlewares/globalErrorHandler');
const cookieParser = require('cookie-parser');
const cors = require("cors");

// Environment config
const PORT = config.port;
connectDB();

// ✅ CORS Configuration
const allowedOrigins = ["https://restaurant-pos-system-omega.vercel.app"];

app.use(cors({
    origin: allowedOrigins,
    credentials: true,
}));

// ✅ Handle preflight OPTIONS requests
app.options("*", cors({
    origin: allowedOrigins,
    credentials: true,
}));

// Middleware
app.use(express.json());
app.use(cookieParser());

// Root Endpoint
app.get('/', (req, res) => {
    res.json({ message: 'Hello from the POS server!' });
});

// Routes
app.use('/api/user', require('./routes/userRoute'));
app.use('/api/order', require('./routes/orderRoute'));
app.use('/api/table', require('./routes/tableRoute'));
app.use('/api/payment', require('./routes/paymentRoute'));

// Global Error Handler
app.use(globalErrorHandler);

// Start server
app.listen(PORT, () => {
    console.log(`POS Server is running on port ${PORT}`);
});
