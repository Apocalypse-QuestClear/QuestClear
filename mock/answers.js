var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    return res.json([]);
});

router.get('/:aid', function (req, res, next) {
    return res.json({title: 'title'});
});

module.exports = router;
