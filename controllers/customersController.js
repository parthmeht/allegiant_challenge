'use strict';

var Customer = require('../models/customersDB');

exports.list_all_customers = function (req, res, next) {
    Customer.getAllCustomers(res, function (err, results) {
        console.log('controller')
        if (err)
            res.json({ "status": 500, "error": error, "response": null });
        console.log('res', results);
        res.json({ "status": 200, "error": null, "response": results });
    });
};

exports.create_a_customer = function (req, res, next) {
    var new_customer = new Customer(req.body);
    //handles null error 
    if (!new_customer.email || !new_customer.first_name || !new_customer.last_name || !new_customer.ip
        || !new_customer.latitude || !new_customer.longitude || !new_customer.id) {
        res.status(400).json({ error: true, message: 'Please provide all details' });
    }
    else {
        Customer.createCustomer(res, new_customer, function (err, customer) {
            if (err)
                res.send(err);
            res.json({ "status": 200, "error": null, "response": customer });
        });
    }
};

exports.read_a_customer = function (req, res, next) {
    Customer.getCustomerById(res, req.params.customerId, function (err, customer) {
        if (err)
            res.send(err);
        res.json({ "status": 200, "error": null, "response": customer });
    });
};


exports.update_a_customer = function (req, res, next) {
    var new_customer = new Customer(req.body);
    new_customer.updated_at = new Date();
    //handles null error 
    if (!new_customer.email || !new_customer.first_name || !new_customer.last_name || !new_customer.ip
        || !new_customer.latitude || !new_customer.longitude || !new_customer.id) {
        res.status(400).json({ error: true, message: 'Please provide all details' });
    }else{
        Customer.updateById(res, req.params.customerId, new_customer, function (err, customer) {
            if (err)
                res.send(err);
            res.json({ "status": 200, "error": null, "response": customer });
        });
    }
};


exports.delete_a_customer = function (req, res, next) {
    Customer.remove(res, req.params.customerId, function (err, customer) {
        if (err)
            res.send(err);
        res.json({ "status": 200, "error": null, "response": customer, message: 'Customer successfully deleted' });
    });
};