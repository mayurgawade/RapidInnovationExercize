const mongoose = require('mongoose');
const playerSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    coach: { type: String, required: true },
    sport: { type: String, required: true },
    playerDetails: [{
        playerName: {type: String},
        matchesPlayed: {type: Number},
        matchesWon: {type: Number},
        matchesLost: {type: Number}
    }]
})

module.exports = mongoose.model('Player', playerSchema);
