//$('.item').click(function(){ alert("Presionado")});
//$('.item').animate({ opacity:0.2});
var $formulario = $('#formulario'),
	$titulo = $('#titulo'),
	$link = $('#url'),
	$button = $('#mostrar-form'),
	$list = $('#contenido'),
	$post = $('.item').first();

if(localStorage.getItem('autosave'))
{
	$titulo.val(sessionStorage.getItem('titulo'));
	$link.val(sessionStorage.getItem('url'));
}

function guardar()
{
	sessionStorage.setItem('titulo', $titulo.val());
	sessionStorage.setItem('url', $link.val());
}

var id = setInterval(guardar, 1000);

function mostrarFormulario()
{
	$formulario.slideToggle();
	$list.slideToggle();
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

	mostrarFormulario();
	$titulo.val('');
	$url.val('');
	$clone.fadeIn();



	return false;
}


//EVENTOS
$button.click( mostrarFormulario );
$formulario.on('submit', agregarPost);