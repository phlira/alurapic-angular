angular.module('meusServicos',['ngResource'])
.factory('recursoFoto',function($resource){
	return $resource('v1/fotos/:fotoId',null,{
		update: {
			method:'PUT'
		}
	});
})
.factory('cadastroDeFoto', function(recursoFoto, $q){
	var servico = {};

	servico.cadastrar = function(foto){
		return $q(function(resolve, reject){
			if (foto._id) {
				recursoFoto.update({fotoId: foto._id}, foto, function(){
					resolve({
						mensagem: 'Foto ' + foto.titulo + ' alterada com sucesso.',
						inclusao: false
					});
				}, function(erro){
					console.log(erro);
					reject({
						mensagem : 'Problema na alteração'
					});
				});
			} else {
				recursoFoto.save(foto, function(){
					resolve({
						mensagem: 'Foto ' + foto.titulo + ' incluida com sucesso.',
						inclusao: true
					});
				}, function(erro) {
					reject({
						mensagem: 'Problema na inclusão.'
					});
				});
			}
		})
	}
	return servico;
})
;