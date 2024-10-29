let config = require('./config');

// Database setup
const mongoose = require('mongoose');

module.exports = function(){
    mongoose.connect(config.ATLASDB, { useNewUrlParser: true, useUnifiedTopology: true });

    let mongodb = mongoose.connection;

    mongodb.on('error', console.error.bind(console, 'Connection Error: '));
    mongodb.once('open', ()=>{
        console.log("====> Connected to MongoDB.");
    });
}
