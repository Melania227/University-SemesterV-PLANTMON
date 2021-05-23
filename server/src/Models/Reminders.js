const mongoose = require('mongoose');

const ReminderSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    reason: {
        type: String,
        required: true
    },
    day: {
        type: [String],
        required: true
    },
    repeat: {
        type: boolean,
        required: true
    }
});

module.exports = mongoose.model('Reminder', ReminderSchema);