pessoas.controller('PessoasCtrl',
    [
        '$scope',
        'PessoasSrv',
        '$location',
        '$routeParams',
        // acima temos as dependencias

        function ($scope, PessoasSrv, $location, $routeParams) {

            $scope.load = function () { // GET HTTP vários registros
                $scope.registros = PessoasSrv.query();
            }

            $scope.clear = function () {
                $scope.item = "";
            }

            $scope.get = function () { // GET HTTP único registro

                $scope.item = PessoasSrv.get({id: $routeParams.id});
            }

            $scope.add = function (item) { // POST HTTP

                $scope.result = PessoasSrv.save(
                    {},
                    $jQuery.param(item),

                    function (data, status, headers, config) {

                        $location.path('/');
                    },

                    function (data, status, headers, config) {

                        alert('ocorreu um erro: ' + data.messages[0]);
                    }
                );
            }

            $scope.editar = function (item) { // PUT HTTP

                var params = $jQuery.param(JSON.parse(angular.toJson(item)));

                $scope.result = PessoasSrv.update(
                    {id: $routeParams.id},

                    params,

                    function (data, status, headers, config) {

                        $location.path('/');
                    },

                    function (data, status, headers, config) {

                        alert('ocorreu um erro: ' + data.messages[0]);
                    }
                );
            }

            $scope.delete = function (id) { // DELETE HTTP

                if (confirm('Deseja realmente deletar registro?')) {

                    PessoasSrv.remove(
                        {id: id},
                        {},

                        function (data, status, headers, config) {

                            $scope.load();
                        },

                        function (data, status, headers, config) {

                            alert('ocorreu um erro: ' + data.messages[0]);
                        }
                    );
                }else{

                    $scope.load();
                }
            }
        }
    ]
);