const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const stateSchema = new Schema({
    stateCode: {
    type: String,
    required: true,
    unique: true
},
funfact: [{type: String}]})

mondule.exports = mongoose.model('State', stateSchema);