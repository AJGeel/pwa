function secondsToMs(input) {
    d = Number(input);
    var m = Math.floor(input % 3600 / 60);
    var s = Math.floor(input % 3600 % 60);

    var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
    var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
    return hDisplay + mDisplay + sDisplay;
}
