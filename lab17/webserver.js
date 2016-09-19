var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var myQuery = require('./util/dao/consulta');
var myInsert = require('./util/dao/insertar');
/***
HACER !!!! completar los modulos de borrado y de actualizacion en la carpeta util
***/

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.use('/dbquery/consultar',function(req, res, next) {
  myQuery(req.body.coleccionMongoDB,JSON.parse(req.body.condiciones), function(dataQry){ 
      res.setHeader('Content-Type', 'application/json');
      res.write(JSON.stringify(dataQry));
      res.end();
   });
})
.use('/dbquery/insertar',function(req, res, next) {
 myInsert(req.body.coleccionMongoDB,JSON.parse(req.body.condiciones), function(dataQry){ 
      res.setHeader('Content-Type', 'application/json');
      res.write("se insertaron "+dataQry+" documentos");
      res.end();
   });
})
.use('/dbquery/actualizar',function(req, res, next) {
  //****completar para que funcione haciendo una actualizacion en la base de datos*****/
  console.log("datos actualizados");
  res.end("datos actualizados! ");
})
.use('/dbquery/borrar',function(req, res, next) {
  //****completar para que funcione haciendo un borrado en la base de datos*****/
  console.log("datos borrados");
  res.end("datos borrados! ");
});
//app.use(express.static('public'));
app.listen(8000, function(){
  console.log("Express server listening en puerto 8000");
});