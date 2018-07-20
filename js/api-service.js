window.app.service('APIService', function($http){
    var url = "http://localhost:3000"
    

    this.register = function(usuario, callback){
        var urlCadastro = url + '/usuarios'

        if(usuario.id){
            urlCadastro += '/' + usuario.id
        }

        $http({
            url : urlCadastro,
            data : usuario,
            method : usuario.id? 'PUT' : 'POST'
        }).then(
            function(res){
                callback(null, res.data)
            },
            function(err){
                callback(err)
            }
        )
    }

    this.access = function(usuario, callback){
        var urlConsulta = url + '/usuarios?login=' + usuario.login + '&senha=' + usuario.senha
        
        console.log(urlConsulta)

        $http.get(urlConsulta).then(
            function(res){
                callback(null, res.data)
            },
            function(err){
                callback(err)
            }
        )
    }

    this.save = function(evento, callback){
        var urlEvento = url + '/eventos'

        if(evento.id){
            urlEvento += '/' + evento.id
        }

        $http({
            url : urlEvento,
            data : evento,
            method : evento.id? 'PUT' : 'POST'
        }).then(
            function(res){
                callback(null, res.data)
            },
            function(err){
                callback(err)
            }
        )
    }
})