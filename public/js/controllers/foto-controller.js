angular.module('alurapic').controller('FotoController', function($scope, recursoFoto, cadastroDeFoto, $routeParams) {

	$scope.foto = {};
	$scope.mensagem = '';

	var idGet = $routeParams.fotoId;

	if (idGet) {
		recursoFoto.get({fotoId: idGet}, function(foto){
			$scope.foto = foto;
		}, function(erro){
			$scope.mensagem = 'Erro carregar foto.';
		});
	};

	$scope.submeter = function() {
		if ($scope.formulario.$valid) {
			cadastroDeFoto.cadastrar($scope.foto)
			.then(function(dados){
				$scope.mensagem = dados.mensagem
				if (dados.inclusao) $scope.foto = {};
			})
			.catch(function(dados){
				$scope.mensagem = dados.mensagem
			});
		}
	}
});