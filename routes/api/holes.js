const express = require('express');
const router = express.Router();
const holesCtrl = require('../../controllers/holes');

router.post('/update', holesCtrl.update);

module.exports = router;