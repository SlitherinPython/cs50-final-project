var audio = new Audio("../assets/timerbacktostartmenu.mp3");
var audio2 = new Audio("../assets/timertomusic.mp3");
class Time {
	constructor(minutes, seconds) {
		if (seconds > 59) {
			while (seconds > 59) {
				seconds -= 60;
				minutes += 1;
			}
		}
		this.minutes = minutes;
		this.seconds = seconds;
	}
	minus_one() {
		if (this.seconds == 0 && this.minutes == 0) {
			return "X";
		}
		if (this.seconds == 0) {
			this.seconds = 59;
			this.minutes -= 1;
		} else {
			this.seconds -= 1;
		}
		return "Y";
	}
	print_time() {
		var min_string = this.minutes.toString(10);
		var sec_string = this.seconds.toString(10);

		if (min_string.length == 1) {
			min_string = "0" + min_string;
		}
		if (sec_string.length == 1) {
			sec_string = "0" + sec_string;
		}
		return min_string + ":" + sec_string;
	}
}
function redirect() {
	window.location.href = "startMenu.html";
}
function stopbutton() {
    
	clearInterval();
    audio.play();
	document.getElementById("outer").remove();
	var tag = document.createElement("div");
	var element = document.getElementById("body");
	element.appendChild(tag);

	tag.classList.add("x");
	setTimeout(redirect, 1000);
}
function sleep(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

var p = new Time(0, 1);

document.getElementById("timer-text").innerHTML = p.print_time();
function minus_one_sec_in_timer() {
	var minus_result = p.minus_one();
	var result = p.print_time();
	var timer_text = document.getElementById("timer-text");
	timer_text.innerHTML = result;

	if (minus_result == "X") {
		document.getElementById("outer").remove();
		var tag = document.createElement("div");
		var element = document.getElementById("body");
		tag.classList.add("takeup");
		tag.classList.add("animate__animated");
		tag.classList.add("animate__fadeInDown");
		
		element.appendChild(tag);
		audio2.play()
		setTimeout(() => {window.location.href = "music.html";}, 5000);
		
	}
}
setInterval(minus_one_sec_in_timer, 1000);
