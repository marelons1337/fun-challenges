const ageButton = document.getElementById("age-button-count");
const resetButton = document.getElementById("age-button-reset");
const ageInput = document.getElementById("age-input-box");
const resultBox = document.getElementById("age-result");
const catButton = document.getElementById("cats-button")
const catsContainer = document.getElementById("cats-container")
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

const getRndInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

const generateCat = () => {
    const images = document.querySelectorAll(".cat-image")
    images.forEach(function(image) {
      image.src = "http://theoldreader.com/kittens/"+getRndInteger(500,600)+"/"+getRndInteger(500,600)+""
    })
}

ageInput.addEventListener("change", readAgeInput);
ageButton.addEventListener("click", calculateAge);
resetButton.addEventListener("click", resetAge);
catButton.addEventListener("click", generateCat)


