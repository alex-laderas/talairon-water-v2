var express = require('express');
var router = express.Router();

const customer = [
  {
    "first_name": String,
    "last_name": String,
    "purok_no": String,
    "contact": String,
    "email": String,
    "bill": {
      "Bill_no": String,
      "Bill_amount": String,
      "Bill_date": String
    },
  }
]

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(customer);
});

module.exports = router;
