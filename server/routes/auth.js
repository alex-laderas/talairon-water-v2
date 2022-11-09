var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.send('this is auth route');
});

module.exports = router;