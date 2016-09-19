var dbConn = require('./connexion');

module.exports = function(coleccion,qry,callback){
	dbConn.conectar(function(db){
		db.collection(coleccion).
		find(qry).toArray(function(err, docs) {
    		console.log(docs)
    		callback(docs);
  		});      
	})
}