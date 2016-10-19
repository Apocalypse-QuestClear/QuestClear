/**
 * Created by EdwardChor on 17/10/2016.
 */
var express = require('express');
var router = express.Router();

router.post('/panel', function (req, res, next) {
    setTimeout(function () {
        return res.json({msg:'frommocklist'});
    }, 1000);
});


module.exports = router;
