function playMusic() {
	window.electronAPI.sendPlaySignal();
}
function stopMusic() {
	window.electronAPI.sendStopSignal();
}
var timer = document.querySelector('#countdown-timer');
var count = 0;
function changeTimer(){
	console.log(count);
	var time = parseInt(timer.innerHTML, 10);
	time -= 1;
	timer.innerHTML = time.toString();
	if (count >= 28){
		stopMusic();
		window.location.href = "timer.html";
	}
	else{
		count += 1;
	}
}
playMusic();
setInterval(changeTimer, 1000);




