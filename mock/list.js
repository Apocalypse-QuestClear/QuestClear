/**
 * Created by EdwardChor on 17/10/2016.
 */
var express = require('express');
var router = express.Router();

router.post('/list', function (req, res, next) {
    console.log('test');
    setTimeout(function () {
        return res.json({msg:'frommocklist'});
    }, 1000);
});


module.exports = router;
