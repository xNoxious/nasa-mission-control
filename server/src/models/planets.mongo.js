const mongoose = require('mongoose');

const planetsSchema = new mongoose.Schema({
    keplerName: {
        type: String,
        required: true
    }
});

// Mongoose connects planetsSchema with the "planets" collection.
// It takes 1st arg of model (Planet), makes it lowercase and adds plural.
// Some Mongoose magic happening here.
module.exports = mongoose.model('Planet', planetsSchema);