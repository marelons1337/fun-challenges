var ageButton = document.getElementById("age-button-count");
var resetButton = document.getElementById("age-button-reset");
var ageInput = document.getElementById("age-input-box");
var resultBox = document.getElementById("age-result");
// Date input

var input;
function readAgeInput() {
    input = this.value;
    return input;
}

function calculateAge(e) {
    const target = e.target;
    if (target.matches("button")) {
        var today = new Date().getTime();
        var msec = new Date(input).getTime();
        var result = Math.trunc((today - msec) / 86400000);
        resultBox.innerHTML = "Result: " + result;
    }
}

function resetAge(e) {
    const target = e.target;
    if (target.matches("button")) {
        resultBox.innerHTML = "Your result will go here";
    }
}

ageInput.addEventListener("change", readAgeInput);
ageButton.addEventListener("click", calculateAge);
resetButton.addEventListener("click", resetAge);

