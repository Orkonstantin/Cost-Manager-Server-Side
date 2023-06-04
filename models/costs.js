const mongoose = require('mongoose');

// A Mongoose schema for a "Cost"
const CostsSchema = new mongoose.Schema({
    id: { type: Number, required: true , unique: true},
    user_id: { type: Number, required: true , ref: "users"},
    year: { type: Number, required: true },
    month: { type: Number, required: true },
    day: { type: Number, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    sum: { type: Number, required: true,  default: 0 },
});

// creating a "Costs" Mongoose model
module.exports = mongoose.model('Costs', CostsSchema);