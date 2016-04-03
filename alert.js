//$('.item').click(function(){ alert("Presionado")});
//$('.item').animate({ opacity:0.2});
var $formulario = $('#formulario'),
	$titulo = $('#titulo'),
	$link = $('#url'),
	$button = $('#mostrar-form'),
	$list = $('#contenido'),
	$post = $('.item').first();



function mostrarFormulario()
{
	$formulario.slideToggle();
	return false;
}



//EVENTOS
$button.click( mostrarFormulario );