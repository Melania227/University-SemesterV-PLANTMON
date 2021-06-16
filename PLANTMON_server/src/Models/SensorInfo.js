const mongoose = require('mongoose');

const SensorInfoSchema = mongoose.Schema({
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
    type: {
        type: String,
        required: true
    },
    data: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('SensorInfo', SensorInfoSchema);