var dbConn = require('./connexion');

module.exports = function(coleccion,objeto,callback){
	dbConn.conectar(function(db){
		db.collection(coleccion).
		insert(objeto, function(err, resultadoInsert) {
    		if(err) throw err;
    		callback(resultadoInsert.nInserted);
  		});      
	})
}