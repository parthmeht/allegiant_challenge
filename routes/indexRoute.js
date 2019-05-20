var express = require('express');
var router = express.Router();
var etl = require('etl');

var mysql = require('mysql');
var pool = mysql.createPool({
  connectionLimit: 10,
  host: 'remotemysql.com',
  user: 'Rgp5U8PCDq',
  password: 'DQgiKXd9QI',
  database: 'Rgp5U8PCDq'
});

/* GET home page. */
router.get('/api', (request, response) => {
  response.status(200).send({ message: 'Hello World!' })
});

router.get('/api/load_data1', (request, response) => {
  etl.file('./etl/data1.csv')
    .pipe(etl.csv())
    .pipe(etl.map(d => {
      d.created_at = d.SignUpDate;
      d.first_name = d.First;
      d.last_name = d.Last;
      d.email = d.Email;
      d.latitude = d.Latitude;
      d.longitude = d.Longitude;
      d.ip = d.IP;
      return d;
    }))
    .pipe(etl.mysql.script(pool, 'Rgp5U8PCDq', 'Data1'))
    .pipe(etl.mysql.execute(pool, 10));

    response.send("ETL Process completed Successfully!!!");
});

router.get('/api/load_data2', (request, response) => {
  etl.file('./etl/data2.csv')
    .pipe(etl.csv())
    .pipe(etl.map(d => {
      d.created_at = d.createDatetime;
      d.ip = d.ipAddress;
      d.latitude = d.geoLat;
      d.longitude = d.geoLong;
      d.first_name = d.firstName;
      d.last_name = d.lastName;
      d.email = d.emailAddress;
      return d;
    }))
    .pipe(etl.mysql.script(pool, 'Rgp5U8PCDq', 'Data2'))
    .pipe(etl.mysql.execute(pool, 10));

    response.send("ETL Process completed Successfully!!!");
});

module.exports = router;
