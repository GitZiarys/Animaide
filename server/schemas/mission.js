const mongoose = require('mongoose');
const missionSchema = new mongoose.Schema({
    title: String,
    body: String,
    tag: String,
    localisation: String,
    localisationTag: String,
    link: String,
    image: String
});

module.exports = mongoose.model('Mission', missionSchema, 'missions');