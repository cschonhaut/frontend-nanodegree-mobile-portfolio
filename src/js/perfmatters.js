function logCRP() {
    var a = window.performance.timing,
        b = a.domContentLoadedEventStart - a.domLoading,
        c = a.domComplete - a.domLoading,
        d = document.getElementById("crp-stats");
    d.textContent = "DCL: " + b + "ms, onload: " + c + "ms"
}
window.addEventListener("load", function(a) {
    logCRP()
});