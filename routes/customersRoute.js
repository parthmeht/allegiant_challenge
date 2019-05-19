var express = require('express');
var router = express.Router();

var customersController = require('../controllers/customersController');

router.get('/',customersController.list_all_customers);

router.post('/',customersController.create_a_customer);

router.get('/:customerId',customersController.read_a_customer);

router.put('/:customerId',customersController.update_a_customer);

router.delete('/:customerId',customersController.delete_a_customer);

module.exports = router;
