$(document).ready(function(){
	$("button").click(function(e){
		e.preventDefault();
		var tarea= $("#ingresaTarea").val();
		if(tarea == ""){
			alert("Debes ingresar una tarea");
		}else{
			var contenido ='<div><input type="checkbox" class="filled-in" id="box"/><label for="box"></label>' + tarea + '</div>';
			$('#agregarTarea').append(contenido);
		}
	});
});