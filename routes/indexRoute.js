var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/api', (request, response) => {
  response.status(200).send({message: 'Hello World!'})
});

module.exports = router;
