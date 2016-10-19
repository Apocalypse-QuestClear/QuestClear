var express = require('express');
var router = express.Router();

router.use('/', require('./home'));
router.use('/list',require('./panel'));

module.exports = router;
