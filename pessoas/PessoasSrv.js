pessoas.factory('PessoasSrv', function ($resource) {
    // se não passar o caminho completo não da certo!
    return $resource('http://localhost/projeto-final-angular/index.php/pessoas/:id',
        {
            id: '@id'
        },

        {
            update: {

                method: "PUT",
                // caminho no windows wamp server precisa ser completo
                url: "http://localhost/projeto-final-angular/index.php/pessoas/:id"
            }
        }
    );
});