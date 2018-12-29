const mongoose = require('mongoose');

const schema = {
    id: {
        type: Number,
        required: true,
    },

    winnings: {
        type: Number,
        required: true,
    },

    playSince: {
        type: Number,
        required: true
    },

    properties: {
        name: { type: String, required: true },
        age: { type: Number, required: true },
        weight: { type: Number, required: true }
    }

}

const Athlete_schema = new mongoose.Schema(schema, { strict: false });

const Athlete = mongoose.model('Athlete', Athlete_schema);

module.exports = Athlete