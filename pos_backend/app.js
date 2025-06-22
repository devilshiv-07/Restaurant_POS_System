const express = require('express');
const app = express();
const config = require("./config/config");
const connectDB = require('./config/database');
const globalErrorHandler = require('./middlewares/globalErrorHandler');
const cookieParser = require('cookie-parser');
const cors = require("cors");

// Environment config
const PORT = config.port || process.env.PORT || 10000;

// Connect to database
connectDB().catch(err => {
    console.error('Database connection failed:', err);
    process.exit(1);
});

// ✅ CORS Configuration
const allowedOrigins = [
    "https://restaurant-pos-system-omega.vercel.app",
    "http://localhost:5173", // Vite dev server
    "http://localhost:3000", // Alternative dev server
    "http://127.0.0.1:5173"  // Alternative localhost
];

app.use(cors({
    origin: function (origin, callback) {
        // Allow requests with no origin (mobile apps, curl, etc.)
        if (!origin) return callback(null, true);
        
        if (allowedOrigins.includes(origin)) {
            return callback(null, true);
        }
        
        // In development, allow all origins
        if (config.nodeEnv === 'development') {
            return callback(null, true);
        }
        
        const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
        return callback(new Error(msg), false);
    },
    credentials: true,
}));

// ✅ Handle preflight OPTIONS requests
app.options("*", cors({
    origin: true,
    credentials: true,
}));

// Middleware
app.use(express.json());
app.use(cookieParser());

// Root Endpoint
app.get('/', (req, res) => {
    res.json({ message: 'Hello from the POS server!' });
});

// Routes - with error handling
try {
    console.log('Loading routes...');
    app.use('/api/user', require('./routes/userRoute'));
    console.log('User routes loaded');
    
    app.use('/api/order', require('./routes/orderRoute'));
    console.log('Order routes loaded');
    
    app.use('/api/table', require('./routes/tableRoute'));
    console.log('Table routes loaded');
    
    app.use('/api/payment', require('./routes/paymentRoute'));
    console.log('Payment routes loaded');
    
    console.log('All routes loaded successfully');
} catch (error) {
    console.error('Error loading routes:', error);
    process.exit(1);
}

// Global Error Handler
app.use(globalErrorHandler);

// Start server
const server = app.listen(PORT, '0.0.0.0', () => {
    console.log(`POS Server is running on port ${PORT}`);
    console.log(`Environment: ${config.nodeEnv}`);
});

// Handle server errors
server.on('error', (err) => {
    console.error('Server error:', err);
});

// Graceful shutdown
process.on('SIGTERM', () => {
    console.log('SIGTERM received, shutting down gracefully');
    server.close(() => {
        console.log('Process terminated');
    });
});
