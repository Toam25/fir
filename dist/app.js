fir();
function change() {
    fir();
}
function fir() {
    var heightOfOneBody = document.getElementById("height");
    var nomberOfBody = document.getElementById("branch");
    var html;
    html = setBody(parseInt(heightOfOneBody.value), parseInt(nomberOfBody.value));
    html = setFoot(parseInt(heightOfOneBody.value), html);
    document.getElementById('fir').innerHTML = html;
}
function setBody(LIMIT, stage) {
    var html = "";
    var space = "";
    for (var s = 0; s < stage; s++) {
        var start = "*";
        for (var i = 0; i < LIMIT; i++) {
            for (var k = LIMIT - i; k > 0; k--) {
                space += "&nbsp&nbsp";
            }
            html += "<p>" + space + start + "</p>";
            start += "**";
            space = "";
        }
    }
    space = "";
    return html;
}
function setFoot(LIMIT, html) {
    var space = "";
    for (var k = LIMIT - 1; k > 0; k--) {
        space += "&nbsp&nbsp";
    }
    for (var i = 0; i < 5; i++) {
        html += space + "***" + "<br>";
    }
    return html;
}
