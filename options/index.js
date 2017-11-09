var selected;

$(function() { 
 	$("#play").on('click', function(){
		
	});

 	
 	$('.box').on('click', function(){
 		selected = $(this).attr("data-src");
 		$("#sonance").attr('src', selected);
 		var audio = $('#player');
    	audio[0].pause();
    	audio[0].load();
    	audio[0].oncanplaythrough = audio[0].play();
 	});

});
