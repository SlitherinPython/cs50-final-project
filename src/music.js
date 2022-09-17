
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
	if (count >= 29){
		stopMusic();
		var x = document.getElementById('outer');
		x.remove();
		var tag = document.createElement("div");
		var element = document.getElementById("body");
		tag.classList.add("takeup");
		tag.classList.add("animate__animated");
		tag.classList.add("animate__fadeInDown");
		element.appendChild(tag);

		setTimeout(() => {window.location.href = "timer.html";}, 1000)
		
	}
	else{
		count += 1;
	}
}
playMusic();
setInterval(changeTimer, 2000);




