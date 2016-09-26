var express = require('express');
var router = express.Router();

router.use('/api', require(__base + 'api'));
router.use('/mock', require(__base +  'mock'));

module.exports = router;
