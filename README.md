#allegiant_challenge

This repository contains the code for the challenge given by allegiant for their internship.

I have developed an application where I have used technologies like Node.js, Express.js, AngularJS 1.6, Bootstrap 3, MySQL.

You can run the application by running a command on the command prompt.

macOS & linux - DEBUG=challenge:* npm run devstart

windows - set DEBUG=challenge:* & npm run devstart

indexRoutes.js - This file for etl process of the two data files i.e. 'data1.csv' and 'data2.csv'.

Restful API has been developed and they can be accessed by following urls :-

localhost:3000/api/v1/customers - GET & POST
GET - access data of all customers
POST - create a new customer

localhost:3000/api/v1/customers/:customerID - GET, PUT & DELETE
GET - access data for a specific customer.
PUT - update that customer.
DELETE - delete that a specific customer.

Customer Search
localhost:3000 - This url will a page where we will displayed a customer table and we will be able to perform search operations on that table.
