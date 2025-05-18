require("dotenv").config();

// This file contains the configuration settings for the application.
// It uses environment variables to set the values, with defaults provided for development purposes.
// The config object is frozen to prevent any modifications to its properties.
// The config object is exported for use in other parts of the application.
const config = Object.freeze({
  port: process.env.PORT || 3000,
  databaseURI: process.env.MONGODB_URI,
  nodeEnv: process.env.NODE_ENV || "development",
  accessTokenSecret : process.env.JWT_SECRET,
  razorpayKeyId: process.env.RAZORPAY_KEY_ID,
  razorpaySecretKey: process.env.RAZORPAY_KEY_SECRET,
  razorpayWebhookSecret: process.env.RAZORPAY_WEBHOOK_SECRET
})

module.exports = config;
