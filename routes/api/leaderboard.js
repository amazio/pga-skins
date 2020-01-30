const express = require('express');
const router = express.Router();
const leaderboardCtrl = require('../../controllers/leaderboard');

router.post('/update', leaderboardCtrl.update);

module.exports = router;