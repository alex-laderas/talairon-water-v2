var express = require('express');
var router = express.Router();

const admin = [
    {
        "first_name": String,
        "last_name": String,
        "email": String,
        "role": String
    }
]

router.get('/', function (req, res, next) {
    res.send('this is admin route');
});

module.exports = router;