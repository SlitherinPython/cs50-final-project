var audio = new Audio("../assets/startSound.mp3");
function playMusic() {
	window.electronAPI.sendMusicSignal();
}
function redirect(){
    window.location.href = "music.html";
}
function playStartSound() {
    console.log("test");
	audio.play();
    document.getElementById("outer").remove();
    
    var tag = document.createElement("div");
    var element = document.getElementById("body");
    element.appendChild(tag);
    element.classList.remove("body");
    element.classList.add("body2");
    tag.classList.add("x");
    setTimeout(redirect, 5000);
}
