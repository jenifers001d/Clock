let hands = document.getElementsByTagName("img");

function clock() {
    // 因為setInterval會過一秒才開始執行，所以先執行一次
    setClockHands();
    setInterval(setClockHands, 1000);
}

function setClockHands() {
    let currentTime = new Date();
    let h = currentTime.getHours();
    let min = currentTime.getMinutes();
    let sec = currentTime.getSeconds();
    console.log(h, min, sec);
    let hDeg = (h + 9) % 12 * 30 + 30 / 60 * min;
    let minDeg = min % 60 * 6 + 6 / 60 * sec;
    let secDeg = (sec + 30) % 60 * 6;
    console.log(hDeg, minDeg, secDeg);
    hands[1].style.transform = "rotate(" + hDeg + "deg)";
    hands[2].style.transform = "rotate(" + minDeg + "deg)";
    hands[3].style.transform = "rotate(" + secDeg + "deg)";
}
window.addEventListener("load", clock);
