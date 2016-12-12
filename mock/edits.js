var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    return res.json([
        {
            eid: 10000,
            uid: 10000,
            time: '2016-12-24T16:11:10.000Z',
            title: '增加了一个步骤',
            content: '增加了一个步骤，做了改进',
            version: '1',
            status: 'open'
        },
        {
            eid: 10000,
            uid: 10000,
            time: '2016-12-24T16:11:10.000Z',
            title: '增加了一个步骤',
            content: '增加了一个步骤，做了改进',
            version: '1',
            status: 'accept'
        },
        {
            eid: 10000,
            uid: 10000,
            time: '2016-12-24T16:11:10.000Z',
            title: '增加了一个步骤',
            content: '增加了一个步骤，做了改进',
            version: '1',
            status: 'reject'
        }]);
});

router.patch('/:eid', function(req, res, next) {
    return res.json({});
});

module.exports = router;