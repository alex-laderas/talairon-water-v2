var express = require('express');
var router = express.Router();

const appointment = [
    {
        "customer_id": String,
        "field": String,
        "date": String,
        "time": String,
    }
]

router.get('/', function (req, res, next) {
    res.send('this is appoinment route');
});

module.exports = router;