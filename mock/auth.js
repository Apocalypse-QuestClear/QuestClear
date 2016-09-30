var express = require('express');
var router = express.Router();

router.post('/', function (req, res, next) {
    if (req.header('x-access-token')) {
        return res.json({uid: 123, username: 'user'});
    }
    else {
        return res.status(401).json({message: 'Authentication failed.'});
    }
});

module.exports = router;
