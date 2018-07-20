window.app.controller('eventoController', function($scope, APIService, $routeParams){
    var url = '#!/home'

    $scope.evento = {}
    $scope.usuario = {}

    if($routeParams.usuarioId){
        APIService.getUsuario($routeParams.usuarioId, function(err, data){
            if(err) return window.alert(JSON.stringify(err))
    
             $scope.usuario = data[0]
        })
    }

    $scope.salvar = function(){
        $scope.evento.usuarioId = $scope.usuario.id
        $scope.evento.usuarioLogin = $scope.usuario.login

        if(!$scope.evento.titulo) return window.alert('Fill in the field title!')
        if(!$scope.evento.descricao) return window.alert('Fill in the description field!')
        if(!$scope.evento.organizador) return window.alert('Fill in the producer field!')

        APIService.save($scope.evento, function(err, data){
            if(err) return window.alert(JSON.stringify(err))
    
            url = url + $routeParams.usuarioId

            window.location.href = url
        })
    }
})