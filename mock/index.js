var express = require('express');
var router = express.Router();

router.use('/login', require('./login'));
router.use('/logout', require('./logout'));
router.use('/auth', require('./auth'));

module.exports = router;
