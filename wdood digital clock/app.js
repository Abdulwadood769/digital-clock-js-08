function updateClock(){
    const now = new Date();

    var h = now.getHours();
    var m = now.getMinutes();
    var s = now.getSeconds();
    var ampm = h >= 12 ? "P.M." : "A.M.";

    h = h % 12;
    h = h ? h : 12;

    document.getElementById("hour").innerText = String(h).padStart(2,"0");
    document.getElementById("minute").innerText = String(m).padStart(2,"0");
    document.getElementById("second").innerText = String(s).padStart(2,"0");
    document.getElementById("ampm").innerText = ampm;
}

setInterval(updateClock,1000);
updateClock();
