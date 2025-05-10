require('dotenv').config(); 
const express = require('express');
const app = express();
const connectDB = require('./config/database');

const PORT = process.env.PORT || 3000;
connectDB();

app.get('/', (req, res) => {
    res.json({ message: 'Hello from the POS server!'});
});

app.listen(PORT, () => {
    console.log(`POS Server is running on port ${PORT}`);
});