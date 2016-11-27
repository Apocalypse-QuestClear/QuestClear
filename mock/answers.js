var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    return res.json([]);
});

router.get('/:aid', function (req, res, next) {
    return res.json({title: 'title'});
});

router.get('/:aid/comments',function(req,res,next){
    return res.json([
        {
            cid: 10000,
            uid: 10000,
            rate: 4,
            time: '2016-10-24T16:11:10.000Z',
            content: 'aaa'
        },
        {
            cid: 10001,
            uid: 10002,
            rate: 3,
            time: '2016-10-24T16:11:10.000Z',
            content: 'aaa'
        }
    ])
});

module.exports = router;
