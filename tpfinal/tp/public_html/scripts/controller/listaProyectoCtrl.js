angular.module('appTP')
.controller('ListaProyectosCtrl',
	['$scope','$location','proyectoService','tareaService',
		function($scope,  $location, pryService, tareaService) {
                    $scope.msg = false; 
                    //$scope.tareasDeProyecto = [];
                    
			$scope.refrescar = function(){ 
				pryService.listar().then(
					function() {
						$scope.listaProyectos = pryService.getLista();
					}
				);
			};
			$scope.editar = function(pry){
				$location.path("/proyectos/"+pry._id);
			};
			$scope.nuevo = function(){ 
				$location.path("/proyectos/add");
			};
                        
                        /*
                         * Busca la cantidad de tareas asociadas al proyecto                          
                         */
                        $scope.elegir = function(pry){
				$scope.proyectoSeleccionado = pry;
                                
                                //buscar aca la cantidad de proyectos asignados
                                $scope.cantProyectos = 0;
                                
                                //lista de tareas asociadas:
                                tareaService.buscarPorProyecto(pry._id).then(function(){
                                    $scope.tareasDeProyecto = tareaService.getTareasPorProyecto();
                                });
                                console.log(pry);
                                
                                
			};
                        
                        //completar...
			$scope.borrar = function(pry){
                                $scope.msg = false;
                                pryService.borrar(pry).then(function(){
                                   $scope.msg = "Proyecto borrado correctamente.";
                                   $scope.refrescar();
                                }, function(err){
                                   $scope.msg = err;
                                });
                        };
				
			$scope.refrescar();
		}
	]
);
