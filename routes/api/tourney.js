const express = require('express');
const router = express.Router();
const tourneyCtrl = require('../../controllers/tourney');

router.post('/update', tourneyCtrl.update);

module.exports = router;