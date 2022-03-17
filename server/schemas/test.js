const mongoose = require('mongoose');
const testSchema = new mongoose.Schema({
    title: String,
    body: String,
    tag: String
});

module.exports = mongoose.model('Test', testSchema, 'tests');