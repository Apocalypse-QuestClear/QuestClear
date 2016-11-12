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
        res.cookie('uid', data.uid, { maxAge: juration.parse(data.expiresIn) * 1000 });
        return res.json({
            uid: data.uid,
            username: data.username
        });
    }).catch(function (err) {
        next(err);
    });
});

router.post('/register', function (req, res, next) {
    request.post(req, res, '/users', {
        username: req.body.username,
        password: req.body.password,
        email: req.body.email
    }).then(function (data) {
        return request.post(req, res, '/login', {
            username: req.body.username,
            password: req.body.password
        });
    }).then(function (data) {
        res.cookie('access-token', data.token, { maxAge: juration.parse(data.expiresIn) * 1000, httpOnly: true });
        res.cookie('uid', data.uid, { maxAge: juration.parse(data.expiresIn) * 1000 });
        return res.json({
            uid: data.uid,
            username: data.username
        });
    }).catch(function (err) {
        next(err);
    });
});

router.post('/auth', function (req, res, next) {
    request.post(req, res, '/auth', {}).then(function (data) {
        if (data.uid == req.cookies.uid) {
            return res.json({
                uid: data.uid,
                username: data.username
            });
        }
        else {
            return res.status(401).json({message: 'uid mismatch.'});
        }
    }).catch(function (err) {
        next(err);
    });
});

router.post('/logout', function (req, res, next) {
    request.post(req, res, '/logout', {}).then(function (data) {
        res.clearCookie('access-token');
        res.clearCookie('uid');
        return res.json({});
    }).catch(function (err) {
        next(err);
    });
});

module.exports = router;
