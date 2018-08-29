$(function(){
	let key = 'M0VKGUySTYGPYpuMrc2jNMaWgc37lAA5';
	let urlProjects = 'https://api.behance.net/v2/users/pervinozcan/projects?client_id='+key;
	// console.log(urlProject);
	if('#alex'){
		$.ajax({
			url:urlProjects,
			dataType:'jsonp',//bypass cross server security issue 'padded json'
			success:function(res){
			
			_(res.projects).each(function(project){//the list of the projects, each project
				
				$('<li>'+project.name+' <img src="'+project.covers.original+'" alt=""> <a href="project.html?id='+project.id+'">see more</a></li>').appendTo('ul.projects');// query string ;insert new tags   

			});

		}		
		});
	}

	// if($('#alex-project').length > 0){
	// 	//show a specific project
	// 	let pageURl = new URL(document.location);

	// 	let params = pageURl.searchParams;//a list of all query links
	// 	let id = params.get('id');//retrive

	// 	let urlProject = 'http://www.behance.net/v2/projects/'+id+'?api_key='+key
	// 	$.ajax({
	// 		url:urlProject,
	// 		dataType:'jsonp',
	// 		success:function(res){
	// 			// console.log(res);
	// 			let project = res.project;

	// 			$('<h1>'+project.name+'</h1>').appendTo('.container')
	// 			$('<p>'+project.description+'</p>').appendTo('.container')
	// 			$('<h3>'+project.published_on+'</h3>').appendTo('.container')
	// 			$('<img src="'+project.covers.original+'" alt="">').appendTo('.container')
	// 		}
	// 	});
	// }



});