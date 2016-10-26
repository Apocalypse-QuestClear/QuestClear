/**
 * Created by EdwardChor on 12/10/2016.
 */
var express = require('express');
var router = express.Router();
var juration = require('juration');

var request = require(__base + 'request');

router.post('/list', function (req, res, next) {
    request.post(req,res,'/panel/list', {
        msg: req.body.msg
    }).then(function(data) {
        console.log(data);
        return res.json({
            msg: data.msg
        })
    })
});

router.post('/fetch',function(req,res,next){
    request.get(req, res, '/questions?limit=' + req.body.num)
        .then(function(data) {
            return res.json(data);
        });
});

router.post('/post',function(req,res,next){
    request.post(req,res,'/questions',{
        title:req.body.tittle,
        category:req.body.category,
        hideUser: req.body.hideUser
    })
        .then(function(data){
            return data
        })
});

router.post('/answer',function(req,res,next){
    request.post(req,res,'/answer',{
        qid:req.body.ans.qid,
        title:req.body.ans.title,
        steps:req.body.ans.steps,
        hideUser: req.body.ans.hideUser
    })
        .then(function(data){
            return data
        })
});

router.post('/checkA',function(req,res,next){
    request.get(req,res,'/answer/'+req.body.qid)
        .then(function(data){

        })
});

router.post('/checkQ',function(req,res,next){
    request.get(req,res,'/questions/'+req.body.qid)
        .then(function(data){
            return data
        })
});

module.exports = router;