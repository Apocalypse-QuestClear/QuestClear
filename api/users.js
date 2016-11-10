var express = require('express');
var router = express.Router();

var request = require(__base + 'request');

router.get('/:uid', function (req, res, next) {
    Promise.all([
        request.get(req, res, '/users/' + req.params.uid),
        request.get(req, res, '/questions', {
            uid: req.params.uid,
            limit: 5
        }),
        request.get(req, res, '/answers', {
            uid: req.params.uid,
            limit: 5
        }),
        request.get(req, res, '/users/' + req.params.uid + '/watches/questions').then(function (questions) {
            return Promise.all(questions.map(function (questionID) {
                return request.get(req, res, '/questions/' + questionID).then(function (question) {
                    return {
                        qid: questionID,
                        title: question.title
                    };
                });
            }));
        }),
        request.get(req, res, '/users/' + req.params.uid + '/watches/answers').then(function (answers) {
            return Promise.all(answers.map(function (answerID) {
                return request.get(req, res, '/answers/' + answerID).then(function (answer) {
                    return {
                        aid: answerID,
                        title: answer.title
                    };
                });
            }));
        })
    ]).then(function (args) {
        var userData = args[0];
        var userQuestions = args[1];
        var userAnswers = args[2];
        var watchQuestions = args[3];
        var watchAnswers = args[4];

        return res.json({
            username: userData.username,
            email: userData.email,
            userQuestions: userQuestions,
            userAnswers:　userAnswers,
            watchQuestions: watchQuestions,
            watchAnswers: watchAnswers
        });
    }).catch(function (err) {
        next(err);
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
