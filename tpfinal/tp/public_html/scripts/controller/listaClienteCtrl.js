angular.module('appTP')
.controller('ListaClientesCtrl',
	['$scope','$location','clienteService','proyectoService','filterFilter',
		 function($scope,  $location,clienteService, pryService, filterFilter) {
			$scope.showMsgOk=false;
			$scope.showMsgError=false;

			$scope.refrescar = function(){ 
				clienteService.listar().then(
					function() {
						$scope.listaClientes = clienteService.getLista();
					}
				);
			};
			$scope.elegir = function(cli){
				$scope.clienteSeleccionado = cli;
                                $scope.cantPry = 0;
                                
                                pryService.listar().then(function(){
                                    var tmp = filterFilter(pryService.getLista(), { cliente : { "nombre" : cli.nombre} });
                                    $scope.cantPry = tmp.length;
                                    
                                    var sum = 0;
                                    tmp.forEach(function(item){
                                        sum += item.presupuesto;
                                    });
                                    $scope.costo = sum;
                                });
                                
                                //buscar aca la cantidad de proyectos asignados
                                $scope.cantProyectos = 0;
                                
                                
			};
			$scope.editar = function(cli){
				console.log(cli._id);
				$location.path("/clientes/"+cli._id);
			};
			$scope.nuevo = function(){ 
				$location.path("/clientes/add");
			};
			$scope.borrar = function(cli){ 
				clienteService.borrar(cli).then(
					function(){
					 $scope.showMsgOk=true;
					 $scope.msgOk=" cliente borrado exitosamente";
					 $scope.clienteSeleccionado=null;
					},
					function(errMsg){ 
						$scope.showMsgError=true;
						$scope.msgError=errMsg;
					}	
				)
				$scope.refrescar();
			};
			$scope.refrescar();
		}

	]
);
