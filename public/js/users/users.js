var id,username,name,lastname,gender,mail,phone,rut,state,birthdate,role;
$(document).ready(function() {
	$.ajax({
		url: '/api/users',
		type: 'GET'
	})
	.done(function(data) {
		//iteramos el arreglo de objetos
		$.each(data,function(i, object) {
			//asignamos los campos de los objetos a variables
			id		  = object.id;
			username  = object.username;
			name 	  = object.name;
			lastname  = object.lastname;
			gender	  = object.gender;
			mail	  = object.mail;
			phone	  = object.phone;
			rut		  = object.rut;
			state	  = object.state;
			birthdate = object.birthdate;
			role      = object.role;

			$("#users").append("<tr>"+
									"<td>"+id+"</td>"+
									"<td>"+username+"</td>"+
									"<td>"+name+"</td>"+
									"<td>"+lastname+"</td>"+
									"<td>"+gender+"</td>"+
									"<td>"+mail+"</td>"+
									"<td>"+phone+"</td>"+
									"<td>"+rut+"</td>"+
									"<td>"+state+"</td>"+
									"<td>"+birthdate+"</td>"+
									"<td>"+role+"</td>"+
								"</tr>"
								);

		});			
	});
});