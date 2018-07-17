window.app = window.angular.module('eventos', ['ngRoute'])

window.app.config(function($routeProvider, $locationProvider){
    $routeProvider
        .when('/', {
            templateUrl: 'view/login.html',
            controller: 'homeController'
        })
        .when('/usuarios', {
            templateUrl: 'view/cadastro-usuarios.html',
            controller: 'usuariosController'
        })
        .when('/home', {
            templateUrl: 'view/home.html',
            controller: 'homeController'
        })
        .when('/eventos', {
            templateUrl: 'view/evento.html',
            controller: 'eventoController'
        })
        .when('/eventos/:id', {
            templateUrl: 'view/manutencao-eventos.html',
            controller: 'eventoController'
        })
        .when('/excluir/evento/:id', {
            templateUrl: 'view/excluir-evento.html',
            controller: 'eventoController'
        })
        .otherwise('/')
})