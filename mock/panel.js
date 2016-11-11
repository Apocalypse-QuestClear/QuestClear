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
        aid:'000'
    })
});


router.post('/questions/:qid',function(req,res,next){
    return res.json({
        msg:'gotTheAnswer'
    })
});

router.post('/questions/:keywords', function (req, res, next) {
    params=req.param;
    console.log(param);
    var card1={
        tittle:'怎样在Ubuntu 14.14搭建网络环境？',
        time:'2015-09-23',
        category:'学习',
        uid:'0001'
    };
    var card2={
        tittle:'test',
        time:'2015-09-23',
        category:'学习',
        uid:'0002'
    };
    var card3={
        tittle:'如何制作一个披萨？',
        time:'2015-09-23',
        category:'学习',
        uid:'0003'
    };
    var card4={
        tittle:'如何提高姿势水平? ',
        time:'2015-09-23',
        category:'学习',
        uid:'0004'
    };
    return res.json({list:[card1,card2,card3,card4]});
});

// router.post('/questions',function(req,res,next){
//
// });

module.exports = router;
