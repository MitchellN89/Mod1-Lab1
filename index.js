//Storyboard

// User lands on home page.
// User types a number into the input field. This indicates the number of faces on the die they wish to roll.
// The 'die' rolls and a piece of text tells us what number it landed on.



const input = document.querySelector("#input");
const output = document.querySelector("#output");
const button = document.querySelector("#btn-calc");


function clearInput () {
    input.value = "";
}

function rollDie() {
    const faceCount = parseInt(input.value);
    if (!isNaN(faceCount)) {
        const result = Math.floor(Math.random()*faceCount)+1;
        output.innerHTML = `The die has landed on ${result}!`
    } else {
        output.innerHTML = "Not a number, try again";
        clearInput();
    }
    
}

function testRollDie () {

}