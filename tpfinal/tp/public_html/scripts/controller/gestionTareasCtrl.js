angular.module('appTP')
        .controller('GestionTareasCtrl',
                ['$scope', '$location', '$routeParams', 'proyectoService', 'tareaService',
                    function ($scope, $location, $routeParams, pryService, tareaService) {

                        $scope.hist = {};
                        $scope.prioridades = ['alta', 'media', 'baja'];
                        $scope.hist.prioridad = $scope.prioridades[0];

                        $scope.guardar = function () {
                            console.log($scope.hist);
                            if ($scope.hist._id) {
                                tareaService.actualizar($scope.hist).then(function () {
                                    $scope.msg = "Tarea actualizada correctamente.";
                                }, function (error) {
                                    $scope.msg = error;
                                });
                            } else {
                                tareaService.agregar($scope.hist).then(function () {
                                    $scope.msg = "Tarea creada correctamente.";
                                    $scope.hist = {};
                                }, function (error) {
                                    $scope.msg = error;
                                });
                            }
                        };

                        //funcion inicializadora
                        $scope.init = function () {
                            //Buscar los proyectos existentes
                            pryService.listar().then(function () {
                                $scope.proyectos = pryService.getLista();
                                //console.log($routeParams);
                                if ($routeParams.id) {
                                    //editar una tarea                                    
                                    tareaService.buscar($routeParams.id)
                                            .then(
                                                    function () {
                                                        $scope.hist = tareaService.get();
                                                        $scope.hist.proyecto = $scope.hist.proyecto;
                                                    }
                                            );
                                    $scope.operacion = "Editar Tarea";
                                } else {
                                    $scope.operacion = "Nueva Tarea";
                                    $scope.hist.proyecto = $scope.proyectos[0] ? $scope.proyectos[0] : null;

                                }
                                ;
                            });
                        };



                        $scope.init();
                        //console.log($scope.prioridades)
                    }]);
