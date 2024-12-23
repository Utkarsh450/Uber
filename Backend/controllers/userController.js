const userModel = require("../models/userModel");
const userService = require("../services/user.services");
const { validationResult} = require("express-validator")

module.exports.registerUser = async function(req,res,next){
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array()});
        }
    } catch (error) {
        res.status(500).json({error: "Registration failed", message: error.message});
    }
}