const mongoose = require('mongoose');
const Player = require('../models/player')

exports.get_all_player_details = async (req, res, next) => {
    try {
    let doc = await Player.find().select('coach sport playerDetails').exec();
    const result = {
                    count: doc.length,
                    members: doc.map(doc => {
                        return {
                            coach : doc.coach,
                            sport : doc.sport,
                            playerDetails: JSON.stringify(doc.playerDetails), 
                        }
                    })
                    }
        res.status(200).json(result)
    }
    catch (err) {
        res.status(500).json({
            error: err
        })
    }
}

exports.add_player_details = async (req, res, next) => {
    const player = new Player({
        _id: new mongoose.Types.ObjectId(),
        coach: req.body.coach,
        sport: req.body.sport,
        playerDetails: [{
            playerName : req.body.playerDetails.playerName,
            matchesPlayed : req.body.playerDetails.matchesPlayed,
            matchesWon : req.body.playerDetails.matchesWon,
            matchesLost : req.body.playerDetails.matchesLost,
        }]
    });
    try {
        const result = await player.save();
        res.status(201).json({
            message: 'Product added successfully',
            createdPlayer:{
                coach: player.coach,
                sport: player.sport,
                _id: player._id,
                playerDetails: player.playerDetails,
                request: {
                    type: 'GET',
                    url:'http://localhost:3000/players/'
                }
            }
        });
    } catch (err) {
            res.status(500).json({
            error: err
        });
    }
}

exports.get_players_by_coachName = async (req, res, next) => {
    const coach = req.params.coachName;
    const playerName = req.query.playerName;
    const sportName = req.query.sportName;
    try {
    let doc = await Player.find({coach}).select('coach playerDetails').exec();
    // TODO: add filter in doc using playerName and sportName
    if (doc.length) {
                res.status(200).json({
                    doc,
                    request: {
                        type: 'GET',
                        description: 'get all players',
                        url:'http://localhost:3000/players'
                    }
                });
            } else {
                res.status(404).json({
                    message: 'No record present with this player Name'
                })
        }
    }
    catch (err) {
        res.status(500).json({
            error : err
        });
    }
}