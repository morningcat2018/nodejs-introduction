'use strict';

var express = require('express');
var app = express();

var mysql = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'nodejs'
});

connection.connect();

app.get('/', function (req, res) {
    connection.query('insert into test values(null,\'nodejs\')', function(err, rows, fields) {
            if (err) throw err;
            console.log('rows: ', rows);
            console.log('fields: ', fields);
        });
    res.send('Hello World!');
});

app.listen(30000, function () {
    console.log('127.0.0.1:30000');
});

// connection.end();