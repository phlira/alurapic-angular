angular.module('minhasDiretivas', [])
.directive('meuPainel', function(){
	var ddo = {};
	ddo.restric = 'AE';
	ddo.transclude = true;
	ddo.scope = {
		titulo: '@'
	};

	ddo.templateUrl = 'js/directives/meu-painel.html';

	return ddo;
}).directive('minhaFoto', function(){
	var ddo = {};
	ddo.restric = 'AE';
	ddo.transclude = true;
	ddo.scope = {
		titulo: '@',
		url:'@'
	};

	ddo.templateUrl = 'js/directives/minha-foto.html';
	return ddo;
}).directive('meuBotaoPerigo', function(){
	var ddo = {};
	ddo.restric = 'E';
	ddo.scope = {
		valor: '@',
		acao:'&'
	};

	ddo.template = '<button ng-click="acao(foto)" class="btn btn-danger btn-block">{{valor}}</button>';
	return ddo;
});