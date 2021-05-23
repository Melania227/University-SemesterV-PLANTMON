const mongoose = require('mongoose');

const ManualInventorySchema = mongoose.Schema({
    //esto automaticamente genera un id, podemos usar ese?
    username: {
        type: String,
        required: true
    },
    plantName: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    updates: [{
        date: {
            type: Date,
            default: Date.now
        },
        description: {
            type: [String],
            required: true
        }
    }],
    /* image: {
        type: image, //no se cual es el tipo de esto
        required: false
    } */
});

module.exports = mongoose.model('ManualInventory', ManualInventorySchema);