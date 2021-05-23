const mongoose = require('mongoose');

const SensorInfoSchema = mongoose.Schema({
    //quite username porque no tiene sentido, ya tienen un identificador especifico
    sensorIdentifier: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    hour: {
        type: String,
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
        type: image, //no se cual es el tipo de esto
        required: false
    } */
});

module.exports = mongoose.model('SensorInfo', SensorInfoSchema);