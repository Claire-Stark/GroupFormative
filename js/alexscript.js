$(function(){
	let key = 'M0VKGUySTYGPYpuMrc2jNMaWgc37lAA5';
	let projectHTML = $('#templateProject').text();
	let urlProjects = 'https://api.behance.net/v2/users/primoperezg/projects?client_id='+key;
	let projectTemplate = Template7(projectHTML).compile();

	$.ajax({
			url:urlProjects,
			dataType:'jsonp',
			success:function(res){			
			_(res.projects).each(function(project){

				let output = projectTemplate(project);
				$('.project-container').append(output);
				

			});

		}		
	});

	//Show individual projects
	let singleProjectHTML = $('#templateSingleProject').text();
	let singleProjectTemplate = Template7(singleProjectHTML).compile();
	$('#portfolioModal1').on('show.bs.modal',function(e){
		
		let target = e.relatedTarget;
		let projectid = $(target).data('projectid');
		let urlProject = 'http://www.behance.net/v2/projects/'+projectid+'?api_key='+key;
		$.ajax({
			url:urlProject,
			dataType:'jsonp',
			success:function(res){
				let project = res.project;				
				var output = singleProjectTemplate(project);
				$('.single-project-container').empty();
				$('.single-project-container').append(output);
			}
		});

	});

});