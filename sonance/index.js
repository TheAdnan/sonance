let selected = [];

$(function() { 
 	$("#play").on('click', function(){
		selected.forEach((elem) => {
			playAndSwap(elem);
	 });
	});

	$("#pause").on('click', function(){
		selected.forEach((elem) => {
			pauseAndSwap(elem);
		});
	});

 	
 	$('.box').on('click', function(){
		 const audio = $(this)[0].firstElementChild;
		 if (audio.paused) {
			selected.push($(this));
			playAndSwap($(this));
		 } else {
			selected = selected.filter(arg => arg[0] !== $(this)[0]);
			pauseAndSwap($(this));
		 }
	 });
	 
	 const playAndSwap = (elem) => {
			const audio = elem[0].firstElementChild;
			audio.play();
			elem.removeClass('paused');
			elem.addClass('playing');		 
	 }

	 const pauseAndSwap = (elem) => {
			const audio = elem[0].firstElementChild;
			audio.pause();
			elem.removeClass('playing');
			elem.addClass('paused');
	 }
});
