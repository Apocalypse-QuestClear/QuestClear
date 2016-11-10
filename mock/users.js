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

router.get('/:uid/watches/questions', function (req, res, next) {
    return res.json([10013, 10014]);
});

router.get('/:uid/watches/answers', function (req, res, next) {
    return res.json([]);
});

module.exports = router;
