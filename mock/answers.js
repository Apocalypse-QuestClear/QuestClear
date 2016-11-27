var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    return res.json([]);
});

router.get('/:aid', function (req, res, next) {
    return res.json({title: 'title'});
});

router.get('/:aid/comments',function(req,res,next){
   return res.json({
       cnt:'aaa'
   })
});
module.exports = router;
