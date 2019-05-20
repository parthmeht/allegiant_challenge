# allegiant_challenge

This repository contains the code for the challenge given by allegiant for their internship.

I have developed an application where I have used technologies like Node.js, Express.js, AngularJS 1.6, Bootstrap 3, MySQL.

You can run the application by running a command on the command prompt.

macOS & linux - __DEBUG=challenge:* npm run devstart__

windows - __set DEBUG=challenge:* & npm run devstart__

__indexRoutes.js__ - This file for etl process of the two data files i.e. 'data1.csv' and 'data2.csv'.

Restful API has been developed and they can be accessed by following urls :-

__localhost:3000/api/v1/customers__ - GET & POST

GET - access data of all customers

POST - create a new customer

__localhost:3000/api/v1/customers/:customerID__ - GET, PUT & DELETE

GET - access data for a specific customer.

PUT - update that customer.

DELETE - delete that a specific customer.

__Customer Search__

localhost:3000 - This url will a page where we will displayed a customer table and we will be able to perform search operations on that table.
