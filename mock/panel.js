/**
 * Created by EdwardChor on 12/10/2016.
 */
var express = require('express');
var router = express.Router();


router.post('/list', function (req, res, next) {
    return res.json({msg:'helloworld'});
});

router.post('/answer',function(req,res,next){
   return res.json({
       msg:'answering'
   })
});


router.post('/answer/:qid',function(req,res,next){
    return res.json({
        msg:'gotTheAnswer'
    })
});


router.get('/questions/:keywords/:category/:uid/:qid/:limit/:after', function (req, res, next) {
    params=req.param;
    var card1={
        tittle:'How to set up Apache2,PHP,MySql on Ubuntu 14.14?',
        time:'2015-09-23',
        category:'Study',
        uid:'0001'
    };
    var card2={
        tittle:'How can I run faster than H.K. journalist?',
        time:'2015-09-23',
        category:'Study',
        uid:'0002'
    };
    var card3={
        tittle:'How to make a Hawaii pizza?',
        time:'2015-09-23',
        category:'Study',
        uid:'0003'
    };
    var card4={
        tittle:'What is the professional way to chat with Wallace? ',
        time:'2015-09-23',
        category:'Study',
        uid:'0004'
    };
    return res.json([card1,card2,card3,card4]);
});


module.exports = router;
