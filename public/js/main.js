angular.module('alurapic', ['minhasDiretivas','ngAnimate','ngRoute','meusServicos'])
.config(function($routeProvider, $locationProvider){

	$locationProvider.html5Mode(true);

	$routeProvider.when('/fotos',{
		controller: 'FotosController',
		templateUrl: 'partials/principal.html'
	});

	$routeProvider.when('/fotos/new',{
		templateUrl: 'partials/fotos-new.html',
		controller: 'FotoController'
	});

	$routeProvider.when('/fotos/edit/:fotoId',{
		templateUrl: 'partials/fotos-new.html',
		controller: 'FotoController'
	});

	$routeProvider.otherwise({redirectTo:'/fotos'});

});