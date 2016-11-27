var express = require('express');
var router = express.Router();

var request = require(__base + 'request');

router.get('/:qid', function(req, res, next) {
    Promise.all([
        request.get(req, res, '/questions/' + req.params.qid),
        request.get(req, res, '/answers?qid=' + req.params.qid),
        request.get(req, res, '/users/' + req.cookies.uid + '/quests')
    ])
        .then(function (args) {
            var question = args[0];
            var answers = args[1];
            var quests = args[2];

            answers.forEach(function (answer) {
                if (quests.some(quest => quest.aid === answer.aid)) {
                    answer.accepted = true;
                }
            });

            return res.json({
                question: question,
                answers: answers
            });

        }).catch(function (err) {
            next(err);
        });
});

module.exports = router;