angular.module('appTP')
        .controller('GestionClientesCtrl',
                ['$scope', '$location', 'clienteService', '$routeParams',
                    function ($scope, $location, cliService, $routeParams) {
                        //funcion inicializadora
                        $scope.init = function () {
                            $scope.showMsgOk = false;
                            $scope.showMsgError = false;
                            $scope.edicionHabilitada = true;
                            if ($routeParams.id === 'add') {
                                $scope.operacion = "Nuevo Cliente";
                            } else {
                                cliService.buscar($routeParams.id)
                                        .then(
                                                function () {
                                                    $scope.cliente = cliService.get();
                                                }
                                        );
                                $scope.operacion = "Editar Cliente";
                            }
                            ;
                        };
                        $scope.guardar = function () {
                            cliService.guardar($scope.cliente).then(
                                    function () {
                                        $scope.showMsgOk = true;  
                                        $scope.msgOk = "Cliente guardado correctamente.";
                                    },
                                    function (errMsg) {
                                        $scope.showMsgError = true;
                                        $scope.msgError = errMsg;
                                    }
                            );
                            $scope.edicionHabilitada = false;
                        };
                        $scope.actualizar = function () {
                            cliService.actualizar($scope.cliente);
                            $scope.edicionHabilitada = false;
                            $scope.showMsgOk = true;
                            $scope.msgOk = "Cliente modificado correctamente.";
                        }
                        $scope.init();
                    }]);
