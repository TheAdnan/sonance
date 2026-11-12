let selected = [];

$(function() { 
	$('.box').each(function() {
		const audio = this.querySelector('audio');
		const soundName = this.childNodes[0].textContent.trim();
		const volumeControl = document.createElement('label');
		volumeControl.className = 'volume-control';

		const label = document.createElement('span');
		label.textContent = 'Volume';

		const slider = document.createElement('input');
		slider.type = 'range';
		slider.min = '0';
		slider.max = '100';
		slider.step = '1';
		slider.value = String(Math.round(audio.volume * 100));
		slider.setAttribute('aria-label', soundName + ' volume');

		const value = document.createElement('output');
		value.value = slider.value + '%';
		value.textContent = value.value;

		slider.addEventListener('input', function() {
			audio.volume = Number(slider.value) / 100;
			value.value = slider.value + '%';
			value.textContent = value.value;
		});

		volumeControl.append(label, slider, value);
		this.appendChild(volumeControl);
	});

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

 	
	$('.box').on('click', function(event){
		if (event.target.closest('.volume-control')) {
			return;
		}

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
