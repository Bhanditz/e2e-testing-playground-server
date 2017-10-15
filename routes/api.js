var express = require('express');
var router = express.Router();

/* GET API reponse. */
router.get('/', function(req, res, next) {
  	res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ name: "Dani" }));
});

module.exports = router;
