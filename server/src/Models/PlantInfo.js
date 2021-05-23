const mongoose = require('mongoose');

const PlantInfoSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    family: {
        type: String,
        required: true
    },
    background: {
        type: [String],
        required: true
    },
    tips: {
        type: [String],
        required: true
    },
    temperature: {
        type: String,
        required: false
    },
    moisture: {
        type: String,
        required: false
    },
    pressure: {
        type: String,
        required: false
    },
    solarIntensity: {
        type: String,
        required: false
    },
    /* image: {
        type: image, //no se como representar esto help
        required: false
    } */
});

module.exports = mongoose.model('PlantInfo', PlantInfoSchema);