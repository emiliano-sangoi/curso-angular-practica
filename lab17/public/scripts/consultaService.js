angular.module('appConsultas')
.factory('consultaService',
	['$http','$q',
	function($http,$q) {
		var baseUrl = 'http://localhost:8000/dbquery';
		var _resultado = [];
		var _consultar= function(query){
			var deffered = $q.defer();
			$http.post(baseUrl+"/consultar",query).
			success(function(data, status, headers, config) {
				_resultado= data;
				console.log("resuelto consulta"+data);
				deffered.resolve();
			}).
			error(function(data, status, headers, config) {
				console.log(data);
			});
			return deffered.promise;
		};
		var _insertar= function(query){
			var deffered = $q.defer();
			$http.post(baseUrl+"/insertar",query).
			success(function(data, status, headers, config) {
				_resultado= data;
				console.log("resuelto insertar"+data);				
				deffered.resolve();
			}).
			error(function(data, status, headers, config) {
				console.log(data);
			});
			return deffered.promise;
		};
		var _actualizar= function(query){
			var deffered = $q.defer();
			$http.post(baseUrl+"/actualizar",query).
			success(function(data, status, headers, config) {
				_resultado= data;
				console.log("resuelto actualizar"+data);				
				deffered.resolve();
			}).
			error(function(data, status, headers, config) {
				console.log(data);
			});
			return deffered.promise;
		};
		var _borrar= function(query){
			var deffered = $q.defer();
			$http.post(baseUrl+"/borrar",query).
			success(function(data, status, headers, config) {
				_resultado= data;
				console.log("resuelto borrar"+data);				
				deffered.resolve();
			}).
			error(function(data, status, headers, config) {
				console.log(data);
			});
			return deffered.promise;
		};
		return{
			consultar:_consultar,
			borrar:_borrar,
			actualizar:_actualizar,
			insertar:_insertar,
			getResultado : function() { return _resultado; }
		}
	}]);
