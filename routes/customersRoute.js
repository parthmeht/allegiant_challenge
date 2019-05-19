var express = require('express');
var router = express.Router();

var customersController = require('../controllers/customersController');

/* GET users listing. */

/* router.get('/', function(req, res, next) {
	res.locals.connection.query('SELECT * from customers', function (error, results) {
	  	if(error){
	  		res.send(JSON.stringify({"status": 500, "error": error, "response": null})); 
	  		//If there is error, we send the error in the error section with 500 status
	  	} else {
  			res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  			//If there is no error, all is good and response is 200OK.
	  	}
  	});
}); */

router.get('/',customersController.list_all_customers);


module.exports = router;
