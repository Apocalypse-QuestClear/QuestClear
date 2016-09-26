var express = require('express');
var router = express.Router();

router.post('/', function (req, res, next) {
    setTimeout(function () {
        return res.json({uid: 123});
    }, 1000);
});

module.exports = router;
