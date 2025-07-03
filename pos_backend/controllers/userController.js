const createHttpError = require("http-errors");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const config = require("../config/config");
const jwt = require("jsonwebtoken");

const register = async (req, res, next) => {
    try {
        const { name, phone, email, password, role } = req.body;
        if (!name || !email || !password || !role || !phone) {
            const error = createHttpError(400, "All fields are required!")
            return next(error);
        }

        const isUserPresent = await User.findOne({email});
        if(isUserPresent){
            const error = createHttpError(400, "User already exists!")
            return next(error);
        }

        const user = {name, phone, email, password, role};
        const newUser = User(user);
        await newUser.save();
    
        res.status(201).json({success: true,message: "New user created successfully!",user: newUser
        });

    } catch (error) {
        next(error);
    }
}


const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            const error = createHttpError(400, "All fields are required!")
            return next(error);
        }
        const isUserPresent = await User.findOne({ email });
        if (!isUserPresent) {
            const error = createHttpError(401, "Invalid Credentials");
            return next(error);
        }

        const isMatch = await bcrypt.compare(password, isUserPresent.password);
        if (!isMatch) {
            const error = createHttpError(401, "Invalid Credentials");
            return next(error);
        }

        const accessToken = jwt.sign({_id: isUserPresent._id}, config.accessTokenSecret, {
            expiresIn: "1d"
        });

        res.cookie("accessToken", accessToken, {
            maxAge: 1000 * 60 * 60 * 24 * 30,
            httpOnly: true,
            sameSite: "none",
            secure: true
        })

        res.status(200).json({
            success: true,
            message: "User login successfully!",
            data: isUserPresent
        })

    } catch (error) {
        next(error);
    }
}

const getUserData = async (req, res, next) => {
    try {
        const user = await User.findById(req.user._id);
        
        res.status(200).json({
            success: true,
            message: "User data fetched successfully!",
            data: user
        })
    } catch (error) {
        next(error);
    }
}

const logout = async (req, res, next) => {
    try {
        
        res.clearCookie('accessToken', {
            httpOnly: true,
            sameSite: "none",
            secure: true
        });
        res.status(200).json({success: true, message: "User logout successfull"});
        
    } catch (error) {
        next(error);
    }
}

module.exports = { register , login , getUserData, logout };