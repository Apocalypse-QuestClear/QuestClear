var express = require('express');
var router = express.Router();

router.use('/', require('./home'));
router.use('/panel',require('./panel'));

module.exports = router;
