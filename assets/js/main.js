
$(document).ready(function(){
	var contador = 0;
	$("#add").click(function(e){
		e.preventDefault();
		
		var tarea= $("#ingresaTarea").val();
		if(tarea == ""){
			alert("Debes ingresar una tarea");
			 return false;
		}
        
		var contenido ='<div class="nuevo"><input type="checkbox" class="filled-in" id="box'+ contador+'"/><label for="box'+ contador+'"></label>' + tarea + '<button class="btn right botoncito">Remove</button></div>';
		$('#agregarTarea').append(contenido);
		$("#ingresaTarea").val("");
		contador++;
        
	
		$(document).on('click', '.botoncito', function(){
			$(this).parent().remove();
		})

	});
});