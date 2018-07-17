window.app.controller('usuariosController', function($scope, APIService, $routeParams){
    $scope.usuario = {}

    $scope.cadastrar = function(){
        if(!$scope.usuario.login) return window.alert('Preencha o campo usuario!')
        if(!$scope.usuario.senha) return window.alert('Preencha o campo senha!')


        APIService.register($scope.usuario, function(err, data){
            if(err) return window.alert(JSON.stringify(err))
    
            window.location.href = '/'
        })
    }
})