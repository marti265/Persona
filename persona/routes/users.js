var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  let dataArray = [
      { name: "John", age: 12},
      { name : "Lisa", age: 25}
  ];

  res.json({
    data: dataArray
  });
});

module.exports = router;
