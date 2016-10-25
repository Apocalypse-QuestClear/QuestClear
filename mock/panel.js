/**
 * Created by EdwardChor on 12/10/2016.
 */
var express = require('express');
var router = express.Router();

router.post('/', function (req, res, next) {
    return res.json({msg:'helloworld'});
});

module.exports = router;
