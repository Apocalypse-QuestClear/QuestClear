var express = require('express');
var router = express.Router();

var request = require(__base + 'request');

router.post('/login', function (req, res, next) {
    request.post(req, res, '/login', req.body).then(function (data) {
        return res.json(data);
    }).catch(function (err) {
        return res.status(400).json({message: err.message});
    });
});

module.exports = router;
