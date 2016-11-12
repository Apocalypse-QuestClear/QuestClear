var express = require('express');
var router = express.Router();
var juration = require('juration');

var request = require(__base + 'request');

router.post('/fetch', function(req, res, next) {
    request.get(req, res, '/questions?limit=' + req.body.num)
        .then(function (data) {
            return res.json(data);
        }).catch(function (err) {
            next(err);
        });
});

router.post('/post', function(req, res, next) {
    request.post(req, res, '/questions', {
        title:req.body.title,
        category:req.body.category,
        hideUser: req.body.hideUser
    })
        .then(function (data){
            return res.json(data);
        })
        .catch(function (err) {
            next(err);
        });
});

router.post('/answer', function(req, res, next) {
    request.post(req,res,'/answers',{
        qid:req.body.ans.qid,
        title:req.body.ans.title,
        steps:req.body.ans.steps,
        hideUser: req.body.ans.hideUser
    })
        .then(function (data){
            return res.json(data);
        });
});

router.post('/checkA', function(req, res, next) {
    request.get(req, res, '/answer/' + req.body.qid)
        .then(function (data){

        })
});

router.post('/checkQ', function(req, res, next) {
    request.get(req, res, '/questions/' + req.body.qid)
        .then(function (data){
            return res.json(data);
        })
});

module.exports = router;