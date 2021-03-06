const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    salt: {
        type: String,
        required: true
    },
    hash: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    birthDate: {
        type: Date,
        required: true
    }
});

module.exports = mongoose.model('User', UserSchema);