angular.module('appTP')
        .controller('HomeCtrl',
                ['$scope', '$location', '$routeParams', 'proyectoService', 'clienteService', 'tareaService',
                    function ($scope, $location, $routeParams, pryService, cliService, tarService) {


                        pryService.listar().then(function () {
                            $scope.pryCant = pryService.getLista().length;
                        });

                        cliService.listar().then(function () {
                            $scope.cliCant = cliService.getLista().length;
                        });

                        tarService.listar().then(function () {
                            $scope.tarCant = tarService.getLista().length;
                        });



                        $scope.verClientes = function () {
                            $location.path("/clientes/lista");
                        };
                        $scope.verProyectos = function () {
                            $location.path("/proyectos/lista");
                        };
                        $scope.verTareas = function () {
                            $location.path("/tareas/lista");
                        };
                    }]);
