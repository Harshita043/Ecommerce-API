const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://harshitasinghpal:1234@ecommerceapi.zhssiml.mongodb.net/ecommerceApi?retryWrites=true&w=majority');

const db = mongoose.connection;

db.once('open', function(){
    console.log('database connected to the server successfully!');
});

module.exports = db;