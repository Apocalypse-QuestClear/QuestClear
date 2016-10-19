var express = require('express');
var router = express.Router();

router.use('/login', require('./login'));
router.use('/logout', require('./logout'));
router.use('/auth', require('./auth'));
router.use('/panel',require('./panel'));
router.use('/list',require('./list'));

module.exports = router;
