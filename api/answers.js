var express = require('express');
var router = express.Router();

var request = require(__base + 'request');

router.get('/:aid', function(req, res, next) {
    Promise.all([
        request.get(req, res, '/answers/' + req.params.aid),
        request.get(req, res, '/users/' + req.cookies.uid + '/quests'),
        request.get(req, res, '/answers/' + req.params.aid + '/comments')
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

            return res.json(answer);

        }).catch(function (err) {
            next(err);
        });
});

module.exports = router;