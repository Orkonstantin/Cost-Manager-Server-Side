const mongoose = require('mongoose');

// A Mongoose schema for a "Report"
const ReportsSchema = new mongoose.Schema({
    user_id: {
        type: Number,
        required: true,
    },
    year: {
        type: Number,
        required: true,
    },
    month: {
        type: Number,
        required: true,
    },
    food: [{ type: Object }],
    health: [{ type: Object }],
    housing: [{ type: Object }],
    sport: [{ type: Object }],
    education: [{ type: Object }],
    transportation: [{ type: Object }],
    other: [{ type: Object }],
});

// creating a "Reports" Mongoose model
module.exports = mongoose.model('Reports', ReportsSchema);