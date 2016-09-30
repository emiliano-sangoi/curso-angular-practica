
/*
 * lab16.js
 * 
 * Este script se encarga de testear la conexion con la base de datos
 * 
 * Ejecutar:
 *      $ nodejs lab16.js
 * 
 */


/*Requerir el driver
 * (Se instala con npm install -g mongodb)
 * */
var MongoClient = require('mongodb').MongoClient;
// URL de conexion
var url = 'mongodb://localhost:27017/lab16';
// conectar al servidro
MongoClient.connect(url, function (err, db) {
    if (err) {
        console.log("Hubo un error");
        console.log(err);
    } else {
        console.log("Conectado correctamente al servidor !");
// creo un arreglo JSON con datos de jugadores de futbol para insertar
        var jugadoresInsertar = [
            {"nombre": "Messi", "numero": 10, "equipo": "barcelona", "goles": 45},
            {"nombre": "Ronaldo", "numero": 9, "equipo": "real madrid", "goles": 44},
            {"nombre": "Hazard", "numero": 8, "equipo": "chelsea", "goles": 28},
            {"nombre": "Ibrahimovic", "numero": 18, "equipo": "psg", "goles": 33}
        ];
        
        //crear coleccion
        var collection = db.collection('jugadores');

        // borro todos los registros que tenia y luego Insertar algunos jugadores
        collection.remove({});
        
        collection.insert(jugadoresInsertar, function (err, result) {
            if (err) {
                console.log("Hubo un error al insertar");
                console.log(err);
            } else {
                console.log("Se Insertaron " + result.result.n + " filas de jugadores");
            }

            db.close();

        });
    }
});