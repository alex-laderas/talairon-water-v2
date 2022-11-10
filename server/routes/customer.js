var express = require('express');
var router = express.Router();

const Firestore = require('@google-cloud/firestore');

const db = new Firestore({
  projectId: 'YOUR_PROJECT_ID',
  keyFilename: '/path/to/keyfile.json',
});

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
  const qCustomers = db.collection('customer');
  const query = qCustomers.get();
  
  res.send(query.first_name);
});

module.exports = router;
