var MongoClient = require('mongodb').MongoClient;
var config = require('./conf');
var _db;

module.exports.conectar = function (funcionCallback){
	if(_db){ 
		console.log("db estaba seteado");
		funcionCallback(_db);
	} else{
		console.log("crear conexion"); 
		var urlConn = 'mongodb://'+config.servidor+':'+config.puerto+'/'+config.db;
		MongoClient.connect( urlConn, function(err, database) {
			if(err) throw err; 
			_db = database;
			console.log("voy a retornar la conexion a "+urlConn);
			funcionCallback(_db);
		});
	}	
}