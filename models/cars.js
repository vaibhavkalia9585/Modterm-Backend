const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CarSchema = new Schema({
    type: String,
    year: Number,
    make: String,
    model: String
});

module.exports = mongoose.model('Car', CarSchema);