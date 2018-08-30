//------- Index JS for Behance API
$(function(){

	let key = 'dzZgAZranf7MqvWYJZPpgnFw9uaaZVcZ';

	if($('#index').length > 0){

		let mariaUser = 'https://api.behance.net/v2/users/laislerner?client_id='+key;
		$.ajax({
			url:mariaUser,
			dataType:'jsonp', // p means padded json . 
			success:function(res){
				console.log(res)
				var user = res.user;
				$('<img src="'+user.images[230]+'">').appendTo('.container .mariaimg')
				
			}
	
		});

		let claireUser = 'https://api.behance.net/v2/users/cat-lv?client_id='+key;
		$.ajax({
			url:claireUser,
			dataType:'jsonp', // p means padded json . 
			success:function(res){
				console.log(res)
				var user = res.user;
				$('<img src="'+user.images[230]+'">').appendTo('.container .claireimg')
				
			}
	
		});

		let alexUser = 'https://api.behance.net/v2/users/primoperezg?client_id='+key;
		$.ajax({
			url:alexUser,
			dataType:'jsonp', // p means padded json . 
			success:function(res){
				console.log(res)
				var user = res.user;
				$('<img src="'+user.images[230]+'">').appendTo('.container .aleximg')
				
			}
	
		});
	}

});

//---- Claire JS for Behance API

$(function(){

	let key = 'dzZgAZranf7MqvWYJZPpgnFw9uaaZVcZ';

	if($('#claire').length > 0){

		let urlProjects = 'https://api.behance.net/v2/users/claireu5da2/projects?client_id='+key;

		$.ajax({
			url:urlProjects,
			dataType:'jsonp', // p means padded json . 
			success:function(res){ // res stands for response
			
			_(res.projects).each(function(project){ 
				console.log(project);
				$('<li>'+project.name+'	<img src="'+project.covers[404]+'" alt=""></li>').appendTo('ul.projects');
				});

			}		

		});

		let claireStarkUser = 'https://api.behance.net/v2/users/claireu5da2?client_id='+key;
		$.ajax({
			url:claireStarkUser,
			dataType:'jsonp', // p means padded json . 
			success:function(res){
				console.log(res)
				var user = res.user;
				$('<h1>'+user.display_name+'</h1>').appendTo('.name')
				$('<p>'+user.sections["About Me"]+'</p>').appendTo('.aboutme')
				
			}
	
		});	

	}

});

