/*
 * Ejemplo de Express 
 * 
 * curso-angular-practica/clase6/express_example.js
 */

var express = require('express');
var http = require('http');

//crear una aplicacion con express:
var app = express();

//registrar un middleware:
app.use(function(req, res, next){
    res.end('hello express!');
});

//registrar con $http:
var server = http.createServer(app);
server.listen(3000);
