var express = require('express');
var router = express.Router();

var request = require(__base + 'request');

router.get('/:aid/edits', function(req, res, next) {
    request.get(req, res, '/answers/' + req.params.aid + '/edits').then(function (edits) {
        return Promise.all(edits.map(function (edit) {
            return request.get(req, res, '/users/' + edit.uid).then(function (user) {
                edit.username = user.username;
                return edit;
            });
        }));
    }).then(function (edits) {
        return res.json(edits);
    }).catch(function (err) {
        next(err);
    });
});

router.get('/:aid/edits/:eid', function(req, res, next) {
    Promise.all([
        request.get(req, res, '/answers/' + req.params.aid),
        request.get(req, res, '/answers/' + req.params.aid + '/edits/' + req.params.eid)
    ]).then(function (args) {
        var answer = args[0];
        var edit = args[1];
        edit.answerUid = answer.uid;

        return request.get(req, res, '/users/' + edit.uid).then(function (user) {
            edit.username = user.username;
            return edit;
        });
    }).then(function (edits) {
        return res.json(edits);
    }).catch(function (err) {
        next(err);
    });
});

router.post('/:aid/edits/:eid/accept', function (req, res, next) {
    request.patch(req, res, '/answers/' + req.params.aid + '/edits/' + req.params.eid, {status: "accept"}).then(function (data) {
        return res.json({});
    }).catch(function (err) {
        next(err);
    });
});

router.post('/:aid/edits/:eid/reject', function (req, res, next) {
    request.patch(req, res, '/answers/' + req.params.aid + '/edits/' + req.params.eid, {status: "reject"}).then(function (data) {
        return res.json({});
    }).catch(function (err) {
        next(err);
    });
});

module.exports = router;