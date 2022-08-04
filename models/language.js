const mongoose = require('mongoose')
const languageSchema = new mongoose.Schema({
    name: {type: String, required: true},
    greeting: String,
    pangram: String,
    filler: String
})

module.exports = mongoose.model('Language', languageSchema)