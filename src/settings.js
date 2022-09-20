var settings;
var demoMode = document.getElementById("demoMode");
var timerDuration = document.getElementById("timerDuration");
var restDuration = document.getElementById("restDuration");
window.electronAPI.onHeresJson((_event, content) => {
	settings = content;
	timerDuration.value = settings.timerDuration;
	restDuration.value = settings.restDuration;
	if (settings.demoMode) {
        window.electronAPI.editSetting('demoMode', false);
        settings.demoMode = false;
		demoMode.click();
	}
});

var disabledOthers = false;
function switchDemoMode() {
	document.getElementById("timerDuration").disabled = !disabledOthers;
	document.getElementById("restDuration").disabled = !disabledOthers;
	disabledOthers = !disabledOthers;

	window.electronAPI.editSetting("demoMode", !settings.demoMode);
    settings.demoMode = !settings.demoMode;
}
function updateTimerDuration() {
    if (timerDuration.value == null) {
        timerDuration.value = 30;
    }
    var curr_val = parseInt(timerDuration.value, 10);
    
    if (curr_val > 120){
        curr_val = 120;
        timerDuration.value = 120;
    }
    else if (curr_val < 10){
        curr_val = 10;
        timerDuration.value = 10;
    }
    
    
	window.electronAPI.editSetting(
		"timerDuration",
		curr_val
	);
    settings.timerDuration = curr_val;
}
function updateRestDuration() {
    if (restDuration.value == null){
        restDuration.value = 30;
    }
    var curr_val = parseInt(restDuration.value, 10);
    if (curr_val > 120){
        curr_val = 120;
        restDuration.value = 120;
    }
    else if (curr_val < 10){
        curr_val = 10;
        restDuration.value = 10;
    }
	window.electronAPI.editSetting(
		"restDuration",
		curr_val
	);
    settings.restDuration = parseInt(restDuration.value, 10);
}
demoMode.addEventListener("click", switchDemoMode);
timerDuration.addEventListener("input", updateTimerDuration);
restDuration.addEventListener("input", updateRestDuration);
window.electronAPI.sendMeJson();
// window.electronAPI.editSetting("demoMode", false);
