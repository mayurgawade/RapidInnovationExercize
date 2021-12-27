const express = require('express')
const playersController = require('../controllers/player');
const router = express.Router();
router.get('/', playersController.get_all_player_details)
router.get('/:coachName', playersController.get_players_by_coachName)
router.post('/', playersController.add_player_details)
module.exports = router;