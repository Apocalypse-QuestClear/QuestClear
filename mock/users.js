var express = require('express');
var router = express.Router();

router.post('/', function (req, res, next) {
    return res.json({uid: '123'});
});

router.get('/:uid', function (req, res, next) {
    return res.json({username: 'user', email: 'user@test.com'});
});

router.put('/:uid', function (req, res, next) {
    setTimeout(function () {
        return res.json({});
    }, 1000);
});

module.exports = router;
