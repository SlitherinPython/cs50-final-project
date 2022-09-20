
var demoMode = document.getElementById('demoMode');
var disabledOthers = false;
function switchDemoMode() {
    document.getElementById("timerDuration").disabled = !disabledOthers;
    document.getElementById("restDuration").disabled = !disabledOthers;
    disabledOthers = !disabledOthers;
}
demoMode.addEventListener("click", switchDemoMode);
window.electronAPI.editSetting("Test Setting", "Test Value");