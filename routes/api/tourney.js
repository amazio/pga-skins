const express = require('express');
const router = express.Router();
const tourneyCtrl = require('../../controllers/tourney');

router.get('/current', tourneyCtrl.current);
router.post('/update', tourneyCtrl.update);

module.exports = router;