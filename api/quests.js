var express = require('express');
var router = express.Router();
var _ = require('lodash');

var request = require(__base + 'request');

router.get('/', function(req, res, next) {
    request.get(req, res, '/users/' + req.cookies.uid + '/quests')
        .then(function (data) {
            return Promise.all(data.map(function (item) {
                return Promise.all([
                    request.get(req, res, '/users/' + req.cookies.uid + '/quests/' + item.aid),
                    request.get(req, res, '/answers/' + item.aid)
                ]).then(function (args) {
                    var quest = _.merge(args[0], item);
                    quest.title = args[1].title;
                    return quest;
                });
            }));
        }).then(function (data) {
            return res.json(data);
        }).catch(function (err) {
            next(err);
        });
});

router.post('/cancel', function(req, res, next) {
    request.delete(req, res, '/users/' + req.cookies.uid + '/quests/' + req.body.aid)
        .then(function (data) {
            return res.json(data);
        }).catch(function (err) {
            next(err);
        });
});

router.post('/modifyProgress', function(req, res, next) {
    request.patch(req, res, '/users/' + req.cookies.uid + '/quests/' + req.body.aid + '/steps/' + req.body.step_id, {progress: req.body.progress})
        .then(function (data) {
            return res.json(data);
        }).catch(function (err) {
            next(err);
        });
});

router.post('/accept', function(req, res, next) {
    request.post(req, res, '/users/' + req.cookies.uid + '/quests/' + req.body.aid, {})
        .then(function (data) {
            return res.json(data);
        }).catch(function (err) {
            next(err);
        });
});

module.exports = router;