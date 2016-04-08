$(function(){
	var geo = navigator.geolocation;
	var opciones = {};
	console.log(geo);

	function geo_error()
	{
		console.log("No se puede compi");
	}
	function geo_exito(posicion)
	{
		console.log(posicion);
		var lat = posicion.coords.latitude;
		var lon = posicion.coords.longitude;

		var mapa = new Image();
		mapa.src = "http://maps.googleapis.com/maps/api/staticmap?zoom=13&size=200x200&sensor=false&center="+lat+","+lon;

		$('#geo').append(mapa);

		obtenerGeoInfo(lat, lon);

	}



	geo.getCurrentPosition(geo_exito, geo_error, opciones);



})