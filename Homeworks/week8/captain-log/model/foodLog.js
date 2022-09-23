const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const foodLogSchema = new Schema({
    entree: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: true
    }
}, {timestamps: true})

const FoodLog = mongoose.model('FoodLog', foodLogSchema);
module.exports = FoodLog;