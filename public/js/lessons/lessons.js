var id,name,description;
$(document).ready(function() {
	$.ajax({
		url: '/api/lessons',
		type: 'GET'
	})
	.done(function(data) {
		//iteramos el arreglo de objetos
		$.each(data,function(i, object) {
			//asignamos los campos de los objetos a variables
			id		  = object.id;
			name  = object.name;
			description	 = object.description;

			$("#lessons").append("<tr>"+
									"<td>"+id+"</td>"+
									"<td>"+name+"</td>"+
									"<td>"+description+"</td>"+
								"</tr>"
								);

		});			
	});
});