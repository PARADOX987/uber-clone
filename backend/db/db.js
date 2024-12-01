const mongoose = require('mongoose');

function connectToDb() {
    mongoose.connect(process.env.DB_CONNECT, )
    .then(() => console.log('Database connection successful'))
    .catch((err) => console.log('Database connection error:', err));
}

module.exports = connectToDb;
