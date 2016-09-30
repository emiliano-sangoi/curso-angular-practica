angular.module('appTP').factory('tareaService',
        ['$http', '$q', 'URL_TAREAS',
            function ($http, $q, baseUrl) {
                // completar!!!		
                var _lista = [];
                var _elementoEncontrado;
                var _tareasPorProyecto = [];


                /*
                 * Obtiene el listado de todas las tareas existentes
                 */
                var _listar = function () {
                    var deffered = $q.defer();
                    $http.get(baseUrl).success(
                            function (data, status, headers, config) {
                                _lista = data;
                                deffered.resolve();
                            }).
                            error(function (data, status, headers, config) {
                                deffered.reject(data);
                            });
                    return deffered.promise;
                };

                var _agregar = function (objeto) {
                    var deffered = $q.defer();
                    $http.post(baseUrl, objeto).
                            success(function (data, status, headers, config) {
                                _lista.push(objeto);
                                deffered.resolve();
                            }).
                            error(function (data, status, headers, config) {
                                deffered.reject(data);
                            });
                    return deffered.promise;
                };

                var _actualizar = function (objeto) {
                    var deffered = $q.defer();
                    $http.put(baseUrl, objeto).
                            success(function (data, status, headers, config) {
                                _listar();
                                deffered.resolve();
                            }).
                            error(function (data, status, headers, config) {
                                deffered.reject(data);
                            });
                    return deffered.promise;
                };

                var _buscar = function (objeto) {
                    var deffered = $q.defer();
                    $http.get(baseUrl + "/" + objeto).success(
                            function (data, status, headers, config) {
                                _elementoEncontrado = data;
                                deffered.resolve();
                            }).
                            error(function (data, status, headers, config) {
                                deffered.reject(data);
                            });
                    return deffered.promise;
                };
                
                var _buscarTareasPorProyecto = function (objeto) {
                    var deffered = $q.defer();
                    $http.get(baseUrl + "/proyecto/" + objeto).success(
                            function (data, status, headers, config) {
                                _tareasPorProyecto = data;
                                deffered.resolve();
                            }).
                            error(function (data, status, headers, config) {
                                deffered.reject(data);
                            });
                    return deffered.promise;
                };

                var _borrar = function (objeto) {
                    var deffered = $q.defer();
                    $http.delete(baseUrl + "/" + objeto._id).
                            success(function (data, status, headers, config) {
                                // actualizo la lista
                                _listar();
                                deffered.resolve();
                            }).
                            error(function (data, status, headers, config) {
                                deffered.reject(data);
                            });
                    return deffered.promise;

                };

                return {
                    listar: _listar,                    
                    buscar: _buscar,
                    buscarPorProyecto: _buscarTareasPorProyecto,
                    agregar: _agregar,
                    actualizar: _actualizar,
                    borrar: _borrar,
                    get: function () {
                        return _elementoEncontrado;
                    },
                    getLista: function () {
                        return _lista;
                    },
                    getTareasPorProyecto: function () {
                        return _tareasPorProyecto;
                    }
                };

            }]);