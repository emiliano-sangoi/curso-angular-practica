angular.module('appConsultas')
.controller('consultaController',
		['$scope','consultaService',
		 function($scope,  consultaService) {
			$scope.consultaDB={
				coleccionMongoDB : "jugadores",
				condiciones :  "{}"
			};
			$scope.consultarDB = function(){
				console.log("llama a la promesa del servicio consultar");			
				consultaService.********($scope.consultaDB).then(
					function(){ //funcion asincronica que se ejecuta cuando se resuelve la promesa en el servicio						
						console.log("actualizar controlador consultar");			
						$scope.resultadoConsulta = consultaService.*********();
					}
				);
			};
			$scope.insertarDB = function(){
				console.log("llama a la promesa del servicio insertar");			
				consultaService.***********($scope.consultaDB).then(
					function(){ //funcion asincronica que se ejecuta cuando se resuelve la promesa en el servicio			
						console.log("actualizar controlador insertar");			
						$scope.resultadoConsulta = consultaService.***********();
					}
				);
			};
			$scope.actualizarDB = function(){
				console.log("llama a la promesa del servicio actualizar");							
				consultaService.*************($scope.consultaDB).then(
					function(){ //funcion asincronica que se ejecuta cuando se resuelve la promesa en el servicio						
						console.log("actualizar controlador actualizar");			
						$scope.resultadoConsulta = consultaService.************();
					}
				);
			};
			$scope.borrarDB = function(){
				console.log("llama a la promesa del servicio borrar");			
				consultaService.**********($scope.consultaDB).then(
					function(){ //funcion asincronica que se ejecuta cuando se resuelve la promesa en el servicio						
						console.log("actualizar controlador borrar");			
						$scope.resultadoConsulta = consultaService.***********();
					}
				);
			};			
		}]);