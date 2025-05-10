const createHttpError = require("http-errors");
const config = require("../config/config");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const isVerifiedUser = async (req, res, next) => {
    try {
        const token = req.cookies.accessToken;
        if (!token) {
            const error = createHttpError(401, "Unauthorized user");
            return next(error);
        }

        const verifiedUser = jwt.verify(token, config.accessTokenSecret);
        if (!verifiedUser) {
            const error = createHttpError(401, "Unauthorized user");
            return next(error);
        }

        const user = await User.findById(verifiedUser._id);
        if(!user) {
            const error = createHttpError(401, "User not exist!");
            return next(error);
        }

        req.user = user;
        next();

    } catch (error) {
        const err = createHttpError(401, "Invalid token");
        next(err);
    }
}

module.exports = {isVerifiedUser};