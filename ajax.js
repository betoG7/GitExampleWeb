$(function()
{
	//$.get('logos_footer.html', peticion);

	$('footer .logos').load('logos_footer.html #maestros');

	$.get('usuario.json', json);
}
);


var base_url = "https://query.yahooapis.com/v1/public/yql?";


function obtenerGeoInfo(lat, lon)
{
	var query;

	var query = 'SELECT * FROM geo.places WHERE text="'+lat+', '+lon+'" AND gflags="R"';
	query = encodeURIComponent(query);

	var objeto = 
	{
		url : base_url+"q="+query,
		dataType : 'jsonp',
		jsonpCallback : 'procesarGeoInfo',
		data : 
		{
				format: 'json'
		}
	}
	$.ajax(objeto);

}

function procesarGeoInfo (datos)
{
	console.log(datos);
	var res = datos.query.results;
	console.log(res);
	//var barrio = res.neighborhood;
	//var ciudad = res.city;
	//var pais = res.country;

	

	if(res!=null){
		$('#geo').append('<p><Strong>'+barrio+'<br>'+ciudad+'<br>'+pais+'</Strong></p>');
	}else{
		console.log("NOOO");
	}
	


}

function json (info)
{
	var avatar = new Image();
	avatar.src = info.avatar;
	avatar.title = info.nombre+' '+info.apellido;

	$('#avatar').append(avatar);
}


function peticion (codigo)
{
	$('footer').append(codigo);
	console.log(codigo);
}