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

		let claireUser = 'https://api.behance.net/v2/users/michalskar0a49?client_id='+key;
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