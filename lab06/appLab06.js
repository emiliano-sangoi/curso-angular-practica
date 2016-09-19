// creamos el modulo
angular.module("appLab06", []);
//lo referenciamos al módulo para agregar un controlador
angular.module("appLab06")
        .controller("tareasController",
                function ($scope) {

                    $scope.agenda = {propietario: undefined, tareas: []};
                    $scope.titulo = "Gestion de tareas";

                    $scope.crearPropietario = function () {
                        this.agenda.propietario = $scope.nombrePropietario;
                    }

                    $scope.unaTarea = {};

                    $scope.agregarTarea = function () {
                        $scope.agenda.tareas.push($scope.unaTarea);
                        //console.log($scope.unaTarea);
                        // limpiar la tarea agregada.
                        $scope.unaTarea = {};
                    }

                    $scope.seleccionar = function (tarea) {
                        $scope.unaTarea = tarea;
                    }
                    
                    $scope.borrarTarea = function(indice){
                        $scope.agenda.tareas.splice(indice,1);
                    };
                    
//                    $scope.actualizarTarea = function(nuevaTarea){
//                        $scope
//                    }

                }
        );