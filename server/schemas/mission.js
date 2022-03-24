const mongoose = require('mongoose');
const missionSchema = new mongoose.Schema({
    title: String,
    body1: String,
    body2: String,
    tag: String,
    localisation: String,
    localisationTag: String,
    link: String,
    image: String,
    image2: String,
    duree: String,
    prerequis: String,
    assoImg: String,
    assoTitle: String,
    assoBody: String,
    assoContact: String,
    assoFB: String,
    slug: String

});

module.exports = mongoose.model('Mission', missionSchema, 'missions');