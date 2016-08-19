/*
 * curso-angular-practica/clase6/http-server.js
 * 
 * Este archivo muestra un servidor basico realizado en nodejs.
 */

//modulos necesarios:
var http = require('http');
var fs = require('fs');

//crear servidor:
var server = http.createServer(function (request, response) {
    var msg = "Usted ha hecho un request a " + request.url + " utilizando como metodo: " + request.method;
    //console.log("Llego un request de " + request.headers.referer);
    //console.log(request.headers);
    response.writeHead(200, {'content-type': 'text/html'});
    //leo el contenido del archivo y lo "entubo" al response:
    fs.createReadStream('template.html').pipe(response);


    //console.log(request);
    //request.on("data", function (chunck) {
        // console.log(chunck);
    //});

    //response.write(msg);
    //response.end();
});

var port = 3000;
server.listen(port);

console.log("Servidor corriendo en http://localhost:"+port+"...");