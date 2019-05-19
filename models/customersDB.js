'user strict';

var Customers = {};

Customers.getAllCustomers = function getAllCustomers(res, result) {
    res.locals.connection.query('SELECT * from customers', function (err, response) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            console.log('tasks : ', response);
            result(null, response);
        }
    });
};

module.exports = Customers;
