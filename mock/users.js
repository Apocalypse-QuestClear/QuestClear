var express = require('express');
var router = express.Router();

router.post('/', function (req, res, next) {
    return res.json({uid: '123'});
});

router.get('/:uid', function (req, res, next) {
    return res.json({username: 'user', email: 'user@test.com'});
});

router.put('/:uid', function (req, res, next) {
    setTimeout(function () {
        return res.json({});
    }, 1000);
});

router.get('/:uid/watches/questions', function (req, res, next) {
    return res.json([10013, 10014]);
});

router.get('/:uid/watches/answers', function (req, res, next) {
    return res.json([]);
});

router.get('/:uid/quests', function (req, res, next) {
    return res.json([
        {aid: 10001, title: 'Answer Test', status: false},
        {aid: 10002, title: 'Answer Test', status: false}
    ]);
});

router.get('/:uid/quests/:aid', function (req, res, next) {
    return res.json({
        status: false,
        steps: [
            {progress: 1},
            {progress: 0}
        ]
    });
});

router.post('/:uid/quests/:aid', function (req, res, next) {
    return res.json({});
});

router.delete('/:uid/quests/:aid', function (req, res, next) {
    return res.json({});
});

router.patch('/:uid/quests/:aid/steps/:step_id', function (req, res, next) {
    return res.json({});
});

module.exports = router;
