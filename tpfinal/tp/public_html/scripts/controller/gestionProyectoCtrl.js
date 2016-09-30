angular.module('appTP')
        .controller('GestionProyectosCtrl',
                ['$scope', '$location', '$routeParams', 'clienteService', 'proyectoService',
                    function ($scope, $location, $routeParams, clienteService, pryService) {
//                     $scope.mostrarAlertas = false;
                        $scope.msgError = $scope.guardado = false;

                        //funcion inicializadora
                        $scope.init = function () {
                            $scope.proyecto = {}; // creo el proyecto como un objeto vacio cuando inicia el controlador
                            if ($routeParams.id) {
                                $scope.proyecto._id = $routeParams.id;
                                $scope.operacion = "Editar";
                            } else
                                $scope.operacion = "Nuevo";

                            clienteService.listar().then(
                                    function () {
                                        $scope.listaClientes = clienteService.getLista();
                                        if ($scope.proyecto._id)
                                            $scope.buscarCliente();
                                    }
                            );
                        };

                        $scope.guardar = function () {
                            $scope.guardado = false;
                            $scope.msgError = false;
                            if ($scope.proyecto._id) {
                                pryService.actualizar($scope.proyecto).then(function () {
                                    $scope.msg = "Proyecto modificado correctamente.";
                                }, function (error) {
                                    $scope.msg = error;
                                });
//                                console.log("actualizar");
//                                console.log($scope.proyecto);
                            } else {
//                                console.log("nuevo");
//                                console.log($scope.proyecto);
                                pryService.guardar($scope.proyecto).then(function() {
                                    $scope.msg = "Proyecto creado correctamente";
                                }, function (err) {
                                    $scope.msg = err;
                                });
                            }
                        };
                        





                        $scope.buscarCliente = function () {
                            pryService.buscar($scope.proyecto._id)
                                    .then(
                                            function () {
                                                $scope.proyecto = pryService.get();
                                                $scope.proyecto.fechaInicio = new Date($scope.proyecto.fechaInicio);
                                            }
                                    );
                        };

                        $scope.init();


                    }]);