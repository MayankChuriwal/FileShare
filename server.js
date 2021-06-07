const express = require('express');
const app = express();
const path = require('path');

//Database Connection
const connnectDB = require('./config/db.js');
connnectDB();

//Template Engine
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

//Public assets set
app.use(express.static('public'));

//Parse JSON files
app.use(express.json());

//Routes
app.use('/api/files', require('./routes/files'));
app.use('/files', require('./routes/show'));
app.use('/files/download', require('./routes/download'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Listening on Port: ${PORT}`);
});