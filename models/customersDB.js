'user strict';

var Customer = function (customer) {
    this.id = customer.id;
    this.email = customer.email;
    this.first_name = customer.first_name;
    this.last_name = customer.last_name;
    this.ip = customer.ip;
    this.latitude = customer.latitude;
    this.longitude = customer.longitude;
    this.created_at = new Date();
    this.updated_at = null;
};

Customer.getAllCustomers = function getAllCustomers(res, result) {
    res.locals.connection.query('SELECT * from customers', function (err, response) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            console.log('customers : ', response);
            result(null, response);
        }
    });
};

Customer.createCustomer = function createCustomer(res, newCustomer, result) {
    res.locals.connection.query("INSERT INTO customers set ?", newCustomer, function (err, response) {

        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            console.log(response.insertId);
            result(null, response.insertId);
        }
    });
};

Customer.getCustomerById = function getCustomerById(res, customerId, result) {
    res.locals.connection.query("Select * from customers where id = ? ", customerId, function (err, response) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, response);

        }
    });
};

Customer.updateById = function (res, id, customer, result) {
    res.locals.connection.query("UPDATE customers SET ? WHERE id = ?", [customer, id], function (err, response) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            result(null, response);
        }
    });
};

Customer.remove = function (res, id, result) {
    res.locals.connection.query("DELETE FROM customers WHERE id = ?", [id], function (err, response) {

        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {

            result(null, response);
        }
    });
};

module.exports = Customer;
