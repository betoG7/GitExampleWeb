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

function agregarPost()
{
	var url = $link.val(),
		titulo = $titulo.val(),
		$clone = $post.clone();


	$clone.find(".titulo_item a")
		.text(titulo)
		.attr('href', url);

	$clone.hide();

	$list.prepend($clone);

	$clone.fadeIn();

	return false;
}


//EVENTOS
$button.click( mostrarFormulario );
$formulario.on('submit', agregarPost);