/*
 * Laboratorio 15
 * 
 * Operaciones simples con MongoDB
 * 
 * Recordar:
 *  - mongod es el daemon y mongo es el shell.
 *  - El comando use combina el CREATE IF NOT EXIST y el USE.
 *  - En el shell se pueden usar codigo JS tranquilamente.
 *  - Los _id creado por mongo son del tipo ObjectId. Ocupa 12 bytes y esta pensado para ser creados rapidamente y de 
 *      manera unica en sistemas distribuidos (compuesto por maquinas con distintos entornos operativos).
 *  
 *  Ayuda:
 *  > help
    HELP
        show dbs                    show database names
        show collections            show collections in current database
        show users                  show users in current database
        show profile                show recent system.profile entries w. time >= 1ms
        use <db name>               set current database to <db name>
        db.help()                   help on DB methods
        db.foo.help()               help on collection methods 
        db.foo.find()               list objects in collection foo 
        db.foo.find( { a : 1 } )    list objects in foo where a == 1 
        it                          result of the last line evaluated

 *  
 *  Alumno: Emiliano Sangoi (emiliano.sangoi@gmail.com)
 */

//El comando use permite crear una base de datos y conectarse a la misma en una sola sentencia.
// Si la bd existe no la crea
use demo;

//insertando datos...
db.people.insert({"nombre":"martin", "codigo": 999});
//WriteResult({ "nInserted" : 1 })
db.people.insert({"nombre":"pepe", "codigo": 998});
//WriteResult({ "nInserted" : 1 })
db.people.insert({"nombre":"juan", "codigo": 997});
//WriteResult({ "nInserted" : 1 })

//mostrar los documentos de la tabla:
db.people.find();
/*
{ "_id" : ObjectId("57b651e6c6d17fe0e4dac3c1"), "nombre" : "martin", "codigo" : 999 }
{ "_id" : ObjectId("57b65229c6d17fe0e4dac3c2"), "nombre" : "pepe", "codigo" : 998 }
{ "_id" : ObjectId("57b65257c6d17fe0e4dac3c3"), "nombre" : "juan", "codigo" : 997 }
*/
//devuelve un unico registro
db.people.findOne();

//update
//modificando el valor de los registros...
var criteria = {"codigo":997};
var new_value = {$set:{"nombre":"john"};
db.people.update(criteria, new_value);

//remove
db.people.remove({"codigo":997});



