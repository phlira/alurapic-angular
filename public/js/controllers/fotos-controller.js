angular.module('alurapic').controller('FotosController',function($scope, $http, recursoFoto) {
	
	$scope.fotos = [];
	$scope.filtro = '';

	$scope.remover = function(foto) {
		recursoFoto.delete({fotoId: foto._id}, function(){
			var indexFoto = $scope.fotos.indexOf(foto);
			$scope.fotos.splice(indexFoto,1);
			$scope.mensagem	= ' Foto removida com sucesso!';
		}, function(erro){
			$scope.mensagem	= ' Erro ocorrido ao remover a foto.';
			console.log(erro);
		});
	};

	recursoFoto.query(function(fotos){
		$scope.fotos = fotos;
	}, function(erro){
		console.log(erro);
	});
});