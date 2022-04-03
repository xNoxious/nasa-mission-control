const mongoose = require('mongoose');

const launchesSchema = new mongoose.Schema({
    flightNumber: {
        type: Number,
        required: true
    },
    launchDate: {
        type: Date,
        required: true
    },
    mission: {
        type: String,
        required: true
    },
    rocket: {
        type: String,
        required: true
    },
    target: {
        type: String
    },
    customers: {
        type: [String]
    },
    upcoming: {
        type: Boolean,
        required: true
    },
    success: {
        type: Boolean,
        required: true,
        default: true
    }
});

// Mongoose connects launchesSchema with the "launches" collection.
// It takes 1st arg of model (Launch), makes it lowercase and adds plural.
// Some Mongoose magic happening here.
module.exports = mongoose.model('Launch', launchesSchema);