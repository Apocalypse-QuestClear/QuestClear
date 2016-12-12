var express = require('express');
var router = express.Router();

var request = require(__base + 'request');

router.get('/:aid', function(req, res, next) {
    Promise.all([
        request.get(req, res, '/answers/' + req.params.aid),
        request.get(req, res, '/users/' + req.cookies.uid + '/quests'),
        request.get(req, res, '/answers/' + req.params.aid + '/comments').then(function (comments) {
            return Promise.all(comments.map(function (comment) {
                return request.get(req, res, '/users/' + comment.uid).then(function (user) {
                    comment.username = user.username;
                    return comment;
                });
            }));
        })
    ])
        .then(function (args) {
            var answer = args[0];
            var quests = args[1];
            var comments = args[2];

            if (quests.some(quest => quest.aid === parseInt(req.params.aid)))
            {
                answer.accepted = true;
            }

            answer.comments = comments;

            var myComments = comments.filter((comment) => comment.uid == req.cookies.uid);

            if (myComments.length > 0) {
                answer.rating = myComments[0].rate;
            }
            else {
                answer.rating = 0;
            }

            return res.json(answer);

        }).catch(function (err) {
            next(err);
        });
});

router.post('/:aid/rate', function (req, res, next) {
    request.post(req, res, '/answers/' + req.params.aid + '/rate', {rate: req.body.rate}).then(function (data) {
        return res.json({});
    }).catch(function (err) {
        next(err);
    });
});

router.post('/:aid/comments', function (req, res, next) {
    request.post(req, res, '/answers/' + req.params.aid + '/comments', {content: req.body.content}).then(function (data) {
        return res.json({});
    }).catch(function (err) {
        next(err);
    });
});

router.post('/:aid/watch', function (req, res, next) {
    request.post(req, res, '/users/' + req.cookies.uid + '/watches/answers/' + req.params.aid, {}).then(function (data) {
        return res.json({});
    }).catch(function (err) {
        next(err);
    });
});

router.post('/:aid/edit', function (req, res, next) {
    request.post(req, res, '/answers/' + req.params.aid + '/edits', req.body).then(function (data) {
        return res.json({});
    }).catch(function (err) {
        next(err);
    });
});

router.use(require('./edits'));

module.exports = router;