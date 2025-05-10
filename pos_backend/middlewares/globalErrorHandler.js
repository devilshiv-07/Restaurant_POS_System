const config = require('../config/config');
// This middleware function is used to handle errors in an Express application.

const globalErrorHandler = (err, req, res, next) => {
    const statusCode = err.statusCode || 500; //An Internal Server Error (HTTP 500) is a general error message that indicates something has gone wrong on the web server, but the server can't provide more specific details about the issue.

    return res.status(statusCode).json({
        status: statusCode,
        message: err.message || 'Internal Server Error',
        errorStack: config.nodeEnv === 'development' ? err.stack : "",
    })


}

module.exports = globalErrorHandler;