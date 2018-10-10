var COLORS = ['Red', 'Blue', 'Green', 'Yellow', 'Orange', 'Purple'];
var inputs = [$('color1'), $('color2'), $('color3'), $('color4')];
var guess = [];
var pattern = [];
var tries = 1;
for (var i = 0; i < inputs.length; i++)
        pattern.push(choice(COLORS));

function end() {
        $('submit').onclick = function () {replay()};
        $('submit').childNodes[0].data = "Replay";
}

function replay() {
        console.log("replay");
        guess = [];
        pattern = [];
        tries = 1;
        for (var i = 0; i < inputs.length; i++)
                pattern.push(choice(COLORS));
        $('submit').onclick = function () {main()};
        $('submit').childNodes[0].data="Submit";
        fill_canvas('#ffffff');
}

function validateInput(input) {
        return search(input.value, COLORS);
}

function getGuess() {
        guess = [];
        for (var i = 0; i < inputs.length; i++) {
                if (!validateInput(inputs[i]))
                        throw new Error('Box ' + (i + 1) + ' is not a color.');
                guess.push(inputs[i].value);
        }
}

function main() {
        var black = 0;
        var white = 0;
        getGuess();
        var pattern_copy = pattern;
        for (var i = 0; i < guess.length; i++)
                console.log(guess[i]);
        for (var i = 0; i < pattern.length; i++) {
                if (guess[i] == pattern[i]) {
                        black += 1;
                        pattern_copy = pattern_copy.filter(function (color) { return color != pattern[i];});
                }
                else if (search(guess[i], pattern_copy)) {
                        white += 1;
                }
        }
        if (black == inputs.length) {
                console.log("=== You Win! ===");
                end();
        }
        if (tries == 10) {
                console.log("=== You Lose ===");
                end();
        }
                
        console.log('Black: ' + black, 'White: ' + white);
        drawGuess(guess, tries);
        drawResponse(black, white, tries);
        tries += 1;
}
