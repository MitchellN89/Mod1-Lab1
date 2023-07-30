//Storyboard

// User lands on home page.
// User types a number into the input field. This indicates the number of faces on the die they wish to roll.
// The 'die' rolls and a piece of text tells us what number it landed on.



const input = document.querySelector("#input");
const output = document.querySelector("#output");
const button = document.querySelector("#btn-calc");
const extra = document.querySelector("#extra-info");

function clearInput () {
    input.value = "";
}

function resetExtra () {
    extra.innerHTML = ""
}


function rollDie() {
    const faceCount = parseInt(input.value);
    if (!isNaN(faceCount)) {
        const result = Math.floor(Math.random()*faceCount)+1;
        output.innerHTML = `The die has landed on ${result}!`
        getDiceCount();
    } else {
        output.innerHTML = "Not a number, try again";
        clearInput();
        resetExtra();


    }
}

function getDiceCount () {
    switch (parseInt(input.value)) {
        case 4:
            extra.innerHTML = "You've rolled a 4 sided dic, a tetrahedron!!"
            break;
        case 6:
            extra.innerHTML = "You've rolled a 6 sided dice, the run-of-the-mill die"
            break;
        case 8:
            extra.innerHTML = "You've rolled an 8 sided dice. This one is an octahedron"
            break;
        case 10:
            extra.innerHTML = "You've rolled a 10 sided dice, otherwise known as a pentagonal trapezohedron"
            break;
        case 20:
            extra.innerHTML = "You've rolled a 20 sided dice!!! Wowwee!"
            break;
        default:    
            extra.innerHTML = `You've rolled a non-standard ${input.value} sided dice! It's probably not even a possible shape!`;
    }
}