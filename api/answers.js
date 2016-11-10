var express = require('express');
var router = express.Router();

var request = require(__base + 'request');

router.get('/:aid', function(req, res, next) {
    request.get(req, res, '/answers/' + req.params.aid)
        .then(function (data) {
            return res.json(data);
        }).catch(function (err) {
            next(err);
        });
});

module.exports = router;