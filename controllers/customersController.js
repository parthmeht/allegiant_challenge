'use strict';

var Customers = require('../models/customersDB');

exports.list_all_customers = function (req, res, next) {
    Customers.getAllCustomers(res, function (err, results) {

        console.log('controller')
        if (err)
            res.send(JSON.stringify({ "status": 500, "error": error, "response": null }));
        console.log('res', results);
        res.send(JSON.stringify({ "status": 200, "error": null, "response": results }));
    });
};