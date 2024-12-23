const mongoose = require('mongoose');

const db = async()=>{
    try {
        await mongoose.connect(process.env.DB_CONNECT);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

module.exports = db;