var audio = new Audio("../assets/musicbacktotimer.mp3");

function playMusic() {
	window.electronAPI.sendPlaySignal();
}
function stopMusic() {
	window.electronAPI.sendStopSignal();
}
window.electronAPI.onHeresJson((_event, content) => {
	var timer = document.querySelector("#countdown-timer");
	if (content.demoMode){
		timer.innerHTML = 5;
	}
	else{
		timer.innerHTML = content.restDuration;
	}
	var count = 0;
	function changeTimer() {
		console.log(count);
		var time = parseInt(timer.innerHTML, 10);
		time -= 1;
		timer.innerHTML = time.toString();
		if (count >= content.restDuration) {
			stopMusic();
			var x = document.getElementById("outer");
			x.remove();
			var tag = document.createElement("div");
			var element = document.getElementById("body");
			tag.classList.add("takeup");
			tag.classList.add("animate__animated");
			tag.classList.add("animate__fadeInDown");
			element.appendChild(tag);
			audio.play();
			setTimeout(() => {
				window.location.href = "timer.html";
			}, 6000);
		} else {
			count += 1;
		}
	}
	playMusic();
	setInterval(changeTimer, 2000);
});
window.electronAPI.sendMeJson();

