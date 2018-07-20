window.app.controller('eventoController', function($scope, APIService, $routeParams){
    $scope.evento = {}

    if($routeParams.id){
        APIService.get($routeParams.id, function(err, data){
            if(err) return window.alert(JSON.stringify(err))

            $scope.eventos = data
        })
    }
    
    $scope.salvar = function(){
        if(!$scope.evento.titulo) return window.alert('Preencha o campo titulo!')
        if(!$scope.evento.descricao) return window.alert('Preencha o campo descricao!')
        if(!$scope.evento.organizador) return window.alert('Preencha o campo organizador!')
        
        APIService.save($scope.evento, function(err, data){
            if(err) return window.alert(JSON.stringify(err))
    
            window.location.href = '#!/home'
        })
    }    

    $scope.excluir = function(){
        var confirmar = confirm('Deseja realmente excluir esta nota?')

        if(confirmar){
            APIService.delete($scope.evento, function(err, data){
                if(err) return window.alert(JSON.stringify(err))
                
                window.location.href = '#!/home'
            })
        }
    } 
})