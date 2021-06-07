require('dotenv').config();
const mongoose = require('mongoose');
MONGO_CONNECTION_URL = "mongodb+srv://inShare:qwerty123@cluster0.dkujq.mongodb.net/inshare?retryWrites=true&w=majority"

function connectDB() {
    // Database connection
    mongoose.connect(MONGO_CONNECTION_URL, { useNewUrlParser: true, useCreateIndex:true, useUnifiedTopology: true, useFindAndModify : true });
    const connection = mongoose.connection;
    connection.once('open', () => {
        console.log('Database connected');
    }).catch(err => {
        console.log('Connection failed');
    });
}

module.exports = connectDB;