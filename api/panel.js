/**
 * Created by EdwardChor on 12/10/2016.
 */
var express = require('express');
var router = express.Router();
var juration = require('juration');

var request = require(__base + 'request');

router.post('/list', function (req, res, next) {
    request.post(req,res,'/list', {
        msg: req.body.msg
    }).then(function(data) {
        console.log(data);
        return res.json({
            msg: data.msg
        })
    }).catch(function(msg){
        console.log(msg)
    });
});



module.exports = router;