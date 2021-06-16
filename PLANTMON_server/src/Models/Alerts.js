const mongoose = require('mongoose');

const AlertSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    reason: {
        type: String,
        required: true
    },
    affectedPlant: {
        type: String,
        required: false
    }
});

module.exports = mongoose.model('Alert', AlertSchema);