const mongoose = require('mongoose');

// A Mongoose schema for a "User"
const UsersSchema = new mongoose.Schema({
    id: { type: Number, required: true , unique: true},
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    birthday: { type: Date, required: true },
});

// creating a "Users" Mongoose model
module.exports = mongoose.model('Users', UsersSchema);




