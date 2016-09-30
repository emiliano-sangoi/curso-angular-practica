angular.module('appTP')
        .controller('ListaTareasCtrl',
                ['$scope', '$location', 'tareaService',
                    function ($scope, $location, tareaService) {

                        $scope.msg = false;

                        $scope.refrescar = function () {
                            // se conecta a un servicio para buscar la lista de tareas de la base de datos.
                            tareaService.listar().then(function (data) {
                                $scope.listaTareas = tareaService.getLista();
                            });

                        };

                        $scope.nuevo = function () {
                            $location.path("/tareas/add");
                        };

                        $scope.elegir = function (tarea) {
                            $scope.msg = false;
                            $scope.tareaSeleccionada = tarea;
                        };

                        $scope.editar = function (tarea) {
                            console.log(tarea._id);
                            $location.path("/tareas/" + tarea._id);
                        };

                        $scope.nuevo = function () {
                            $location.path("/tareas/add");
                        };

                        $scope.borrar = function (tarea) {
                            tareaService.borrar(tarea).then(
                                    function () {
                                        $scope.msg = "Tarea borrada correctamente.";
                                        //$scope.tareaSeleccionada = null;
                                        $scope.refrescar();
                                    },
                                    function (errMsg) {
                                        $scope.msg = errMsg;
                                    }
                            )                            
                        };                        

                        $scope.refrescar();
                    }

                ]
                );
