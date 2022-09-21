var settings;
var demoMode = document.getElementById("demoMode");
var timerDuration = document.getElementById("timerDuration");
var restDuration = document.getElementById("restDuration");
window.electronAPI.onHeresJson((_event, content) => {
	settings = content;
	timerDuration.value = settings.timerDuration;
	restDuration.value = settings.restDuration;
	if (settings.demoMode) {
        settings.demoMode = false;
		demoMode.click();
	}
});


function switchDemoMode() {
	document.getElementById("timerDuration").disabled = demoMode.checked;
	document.getElementById("restDuration").disabled = demoMode.checked;
    settings.demoMode = demoMode.checked;
    
    console.log(settings);
}



function updateTimerDuration() {
    settings.timerDuration = parseInt(timerDuration.value, 10);
    console.log(settings);
}
function updateRestDuration() {
    settings.restDuration = parseInt(restDuration.value, 10);
    console.log(settings);
}
function saveSettings(){
    if (settings.timerDuration == null || settings.timerDuration < 1){
        settings.timerDuration = 30;
    }
    if (settings.restDuration == null || settings.restDuration < 1){
        settings.restDuration = 30;
    }

    window.electronAPI.editSetting("demoMode", settings.demoMode);
    window.electronAPI.editSetting("timerDuration", settings.timerDuration);
    window.electronAPI.editSetting("restDuration", settings.restDuration);
    window.location.href = "startMenu.html";    
}
demoMode.addEventListener("click", switchDemoMode);
timerDuration.addEventListener("input", updateTimerDuration);
restDuration.addEventListener("input", updateRestDuration);
window.electronAPI.sendMeJson();
