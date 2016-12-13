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

router.get('/:eid', function(req, res, next) {
    return res.json({
        eid: 10001,
        uid: 10000,
        title: '增加了一个步骤',
        time: '2016-12-24T16:11:10.000Z',
        content: '增加了一个步骤，做了改进',
        version: '1',
        status: 'open',
        steps: [
            {
                index: 0,
                title: [{type: "delete", content: 'old'},{type: "add", content: 'new'},{type: "normal", content: ' title'}],
                isItem: {modified: true, old: false, new: true},
                count: {modified: true, old: 0, new: 2},
                detail: [{type: "delete", content: 'old'},{type: "add", content: 'new'},{type: "normal", content: ' content'}]
            },
            {
                index: 1,
                title: [{type: "delete", content: 'old'},{type: "add", content: 'new'},{type: "normal", content: ' title'}],
                isItem: {modified: true, old: true, new: false},
                count: {modified: true, old: 2, new: 2},
                detail: [{type: "delete", content: 'old'},{type: "add", content: 'new'},{type: "normal", content: ' content'}]
            },
            {
                index: 1,
                title: [{type: "delete", content: 'old'},{type: "add", content: 'new'},{type: "normal", content: ' title'}],
                isItem: {modified: false, old: true, new: true},
                count: {modified: true, old: 2, new: 3},
                detail: [{type: "delete", content: 'old'},{type: "add", content: 'new'},{type: "normal", content: ' content'}]
            },
            {
                index: 1,
                title: [{type: "delete", content: 'old'},{type: "add", content: 'new'},{type: "normal", content: ' title'}],
                isItem: {modified: false, old: true, new: true},
                count: {modified: false, old: 2, new: 2},
                detail: [{type: "delete", content: 'old'},{type: "add", content: 'new'},{type: "normal", content: ' content'}]
            }]
    });
});

router.patch('/:eid', function(req, res, next) {
    return res.json({});
});

module.exports = router;