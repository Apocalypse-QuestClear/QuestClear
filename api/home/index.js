var express = require('express');
var router = express.Router();
var juration = require('juration');

var request = require(__base + 'request');

router.post('/login', function (req, res, next) {
    request.post(req, res, '/login', {
        username: req.body.username,
        password: req.body.password
    }).then(function (data) {
        res.cookie('access-token', data.token, { maxAge: juration.parse(data.expiresIn) * 1000, httpOnly: true });
        return res.json({
            uid: data.uid,
            username: data.username
        });
    }).catch(function (err) {
        return res.status(err.status).json({message: err.message});
    });
});

router.post('/auth', function (req, res, next) {
    request.post(req, res, '/auth', {}).then(function (data) {
        return res.json({
            uid: data.uid,
            username: data.username
        });
    }).catch(function (err) {
        return res.status(err.status).json({message: err.message});
    });
});

router.post('/logout', function (req, res, next) {
    request.post(req, res, '/logout', {}).then(function (data) {
        res.clearCookie('access-token');
        return res.json({});
    }).catch(function (err) {
        return res.status(err.status).json({message: err.message});
    });
});

module.exports = router;
