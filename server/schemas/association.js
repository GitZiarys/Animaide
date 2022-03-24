const mongoose = require('mongoose');
const associationSchema = new mongoose.Schema({
    title: String,
    body1: String,
    body2: String,
    localisation: String,
    logo: String,
    image1: String,
    image2: String,
    contact: String,
    FB: String,
    slug: String,


});

module.exports = mongoose.model('Association', associationSchema, 'associations');