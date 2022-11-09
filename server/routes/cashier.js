var express = require('express');
var router = express.Router();

const cashier = [
  {
    "first_name": String,
    "last_name": String,
    "email": String,
    "contact": String
  }
]

router.get('/', function(req, res, next) {
    res.send(cashier);
  });
  
  module.exports = router;