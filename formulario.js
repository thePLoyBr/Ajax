
function salvar(){
var dados = document.querySelector("#nome").value

$('#formulario').submit(function(){
	event.preventDefault();
})

$.ajax({

		url: 'server.php',
		method: 'POST',
		data: {
				'nome': $('#nome').val(),
				}
	}).done(function(resposta){
		$('#texto').text(resposta)
})


}