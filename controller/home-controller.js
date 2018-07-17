window.app.controller('homeController', function($scope, APIService){
    $scope.usuario = {}

    $scope.acessar = function(){
        if(!$scope.usuario.login) return window.alert('Login nao informado!')
        if(!$scope.usuario.senha) return window.alert('Senha nao informada!')

        APIService.access($scope.usuario, function(err, data){
            if(err) return window.alert(JSON.stringify(err))

            $scope.usuario = data[0]

            console.log($scope.usuario)
            
            if($scope.usuario == undefined){
                return window.alert('Usuario nao encontrado!')
            }

            window.location.href = '#!/home'
        })
    }
})