var express = require('express');
var router = express.Router();

router.use('/', require('./home'));
router.use('/panel',require('./panel'));
router.use('/users', require('./users'));

module.exports = router;
