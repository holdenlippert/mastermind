var canvas = $('canvas');
var context = canvas.getContext('2d');
var width = canvas.width;
var height = canvas.height;

function colorCodeFromString(string) {
        if (string == "Red")
                return "#ff0000";
        if (string == "Green")
                return "#00ff00";
        if (string == "Blue")
                return "#0000ff";
        if (string == "Yellow")
                return "#ffff00";
        if (string == "Purple")
                return "#7401DF";
        if (string == "Orange")
                return "#ff8000";
}
function fill_canvas(color) {
        context.clearRect(0, 0, width, height);
}
function drawGuess(guess, tries) {
        var w = width / 2;
        var i = 0;
        for (var x = w/8 + 15; i < 4; x += w / 4, i++) {
                context.beginPath();
                context.arc(x, tries * 30, 10, 0, 100);
                context.fillStyle = colorCodeFromString(guess[i]);
                context.fill();
                context.lineWidth = 1;
                context.strokeStyle = colorCodeFromString(guess[i]);
                context.stroke();
        }
}
function drawResponse(black, white, tries) {
        var w = width / 2;
        var i = 0;
        var drawn = 0;
        for (var i = 0; i < black; i++) {
                context.beginPath();
                context.arc(9 * (w)/8 + 15 + i * (w / 4), tries * 30, 5, 0, 100);
                context.fillStyle = 'black';
                context.fill();
                context.lineWidth = 1;
                context.strokeStyle = 'black';
                context.stroke();
        }
        for (; i < black + white; i++) {
                context.beginPath();
                context.arc(9 * (w)/8 + 15 + i * (w / 4), tries * 30, 5, 0, 100);
                context.fillStyle = 'white';
                context.fill();
                context.lineWidth = 1;
                context.strokeStyle = 'black';
                context.stroke();
        }
}
