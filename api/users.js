var express = require('express');
var router = express.Router();

var request = require(__base + 'request');

router.get('/:uid', function (req, res, next) {
    request.get(req, res, '/users/' + req.params.uid).then(function (data) {
        return res.json({
            username: data.username,
            email: data.email
        });
    }).catch(function (err) {
        return res.status(err.status).json({message: err.message});
    });
});

router.post('/:uid/edit', function (req, res, next) {
    request.put(req, res, '/users/' + req.params.uid, {
        username: req.body.username,
        password: req.body.password,
        email: req.body.email
    }).then(function (data) {
        return res.json({});
    }).catch(function (err) {
        return res.status(err.status).json({message: err.message});
    });
});

module.exports = router;
