var audio = new Audio("../assets/startSound.mp3");

function redirect(){
    window.location.href = "timer.html";
}
function playStartSound() {
	audio.play();
    document.getElementById("outer").remove();
    document.getElementById("navbar").remove();
    document.getElementById("toRemove1").remove();
    document.getElementById("toRemove2").remove();
    var tag = document.createElement("div");
    var element = document.getElementById("body");
    element.appendChild(tag);
    element.classList.remove("body");
    element.classList.add("body2");
    tag.classList.add("x");
    setTimeout(redirect, 5000);
}
