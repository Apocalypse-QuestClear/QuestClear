var express = require('express');
var router = express.Router();

var request = require(__base + 'request');

router.post('/login', function (req, res, next) {
    request.post(req, res, '/login', {
        username: req.body.username,
        password: req.body.password
    }).then(function (data) {
        return res.json({
            uid: data.uid
        });
    }).catch(function (err) {
        return res.status(400).json({message: err.message});
    });
});

module.exports = router;
