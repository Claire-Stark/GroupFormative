$(function(){
	let key = 'M0VKGUySTYGPYpuMrc2jNMaWgc37lAA5';
	let urlProjects = 'https://api.behance.net/v2/users/primoperezg/projects?client_id='+key;
	// console.log(urlProject);
	if('#alex'){
		$.ajax({
			url:urlProjects,
			dataType:'jsonp',
			success:function(res){
			
			_(res.projects).each(function(project){
				
				$('<li><img src="'+project.covers.original+'" alt=""> '+project.name+'<a href="project.html?id='+project.id+'"></a></li>').appendTo('ul.alex-projects');  

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