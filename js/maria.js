$(function(){
	let key = 'i86JBjK9lJ5Dy03SecOXhCEnCZAz4ap7';

	let urlUser = 'https://www.behance.net/v2/users/laislerner?client_id='+key;
	let urlUserProjects = 'https://api.behance.net/v2/users/laislerner/projects?client_id='+key;

	$.ajax({
			url: urlUser,
			dataType: 'jsonp',
			success: function(res){

				console.log(res);

				// $('.user-avatar').css('background-image', 'url('+res.user.images['276']+')');
				// $('.user-name').html(res.user.display_name);

				// var fields = res.user.fields.join(' - ');
				// $('.user-fields').html(fields);

				// $('.staff-followers').html('<h3>'+res.user.stats.views+'</h3> <span class="small-text">views</span>');
				$('.staff-name').html('<i class="fab fa-fly"></i> Meet '+res.user.display_name+' <i class="fab fa-fly"></i>');
				$('.staff-followers').html('<h3>'+res.user.stats.followers+'</h3> <span class="small-text">followers</span>');
				$('.staff-following').html('<h3>'+res.user.stats.following+'</h3> <span class="small-text">following</span>');

				$('<img src="'+res.user.images['276']+'">').appendTo('.about-middle');

				$('.staff-location').html('<h3>'+res.user.location+'</h3> <span class="small-text">location</span>');
				$('.staff-occupation').html('<h3>'+res.user.occupation+'</h3> <span class="small-text">occupation</span>');
				
			}
		}),

		$.ajax({
			url: urlUserProjects,
			dataType: 'jsonp',
			success: function(res){

				_(res.projects).each(function(project,i){

					console.log(project);

					$('<div class="project'+(i+1)+'" data-src="'+project.covers['404']+'" data-pr-name="'+project.name+'"></div>').appendTo('.projects');


					$('.slide1').css('background-image', 'url('+$('.project1').data('src')+')');
					$('.slide2').css('background-image', 'url('+$('.project2').data('src')+')');

					$('.project1').addClass('current1');
					$('.project2').addClass('current2');

					$('#project-name1').html(''+$('.current1').data('pr-name')+'');
					$('#project-name2').html($('.current2').data('pr-name'));
				});
			}
		})

		$('#next').on('click', function(){
			var oCurrent1 = $('.current1');
			var oCurrent2 = $('.current2');

			oCurrent1.removeClass('current1');
			oCurrent2.removeClass('current2');

			var oNext1;

			if( oCurrent2.next().length > 0) {
				oNext1 = oCurrent2.next();
			}
			else{
				oNext1 = oCurrent2.parent().find('.project1');
			}

			// var oNext1 = oCurrent2.next();
			var oNext2 = oNext1.next();
			oNext1.addClass('current1');
			oNext2.addClass('current2');

			$('.slide1').css('background-image', 'url('+$('.current1').data('src')+')');
			$('.slide2').css('background-image', 'url('+$('.current2').data('src')+')');

			$('#project-name1').html(''+$('.current1').data('pr-name')+'');
			$('#project-name2').html($('.current2').data('pr-name'));
		});

		$('#previous').on('click', function(){
			var oCurrent1 = $('.current1');
			var oCurrent2 = $('.current2');

			oCurrent1.removeClass('current1');
			oCurrent2.removeClass('current2');

			var oPrev1;

			if( oCurrent1.prev().prev().length > 0) {
				oPrev1 = oCurrent1.prev();
			}
			else{
				oPrev1 = oCurrent1.parent().find('.project'+$('.projects').children().length+'');
			}

			var oPrev2 = oPrev1.prev();
			oPrev1.addClass('current2');
			oPrev2.addClass('current1');

			$('.slide1').css('background-image', 'url('+$('.current1').data('src')+')');
			$('.slide2').css('background-image', 'url('+$('.current2').data('src')+')');

			$('#project-name1').html(''+$('.current1').data('pr-name')+'');
			$('#project-name2').html($('.current2').data('pr-name'));
		});
});