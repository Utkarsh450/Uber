const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

// Define the user schema
const userSchema = new mongoose.Schema({
    fullname: {
        firstname: {
            type: String,
            required: true,
            minlength: [3, 'First name must be at least 3 characters long'],
            maxlength: 30
        },
        lastname: {
            type: String,
            minlength: [3, 'Last name must be at least 3 characters long'],
            maxlength: 30
        }
    },
    email: {
        type: String,
        required: true,
        unique: true,
        minlength: [3, 'Email must be at least 3 characters long']
    },
    password: {
        type: String,
        required: true,
        select: false, // Ensures password is not returned in queries by default
    },
    socketId: {
        type: String
    }
});

// Generate JWT token
userSchema.methods.generateAuthToken = function() {
    const token = jwt.sign(
        { _id: this._id }, 
        process.env.JWT_SECRET, 
        { expiresIn: '7d' }
    );
    return token;
};

// Compare passwords
userSchema.methods.comparePassword = async function(password) {
    return await bcrypt.compare(password, this.password);
};

// Hash password (static method)
userSchema.statics.hashPassword = async function(password) {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
};

// Export the model
module.exports = mongoose.model('User', userSchema);
