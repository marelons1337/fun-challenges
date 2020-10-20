const ageButton = document.getElementById("age-button-count");
const resetButton = document.getElementById("age-button-reset");
const ageInput = document.getElementById("age-input-box");
const resultBox = document.getElementById("age-result");
const catButton = document.getElementById("cats-button")
const catsContainer = document.getElementById("cats-container")
const rock = document.getElementById("rock-image")
const paper = document.getElementById("paper-image")
const scissors = document.getElementById("scissors-image")
const rpsResultBox = document.getElementById("rps-score")
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

const startGame = (e) => {
    paper.style.display = "none";
    rpsResultBox.style.display ="inline"
    const winningClick = () => {
        rpsResultBox.innerHTML = "You Win!";
        rpsResultBox.className = '';
        rpsResultBox.className = "winner";
    }
    const losingClick = () => {
        rpsResultBox.innerHTML= "You Lose!";
        rpsResultBox.className = '';
        rpsResultBox.className = "loser";
    }
    const tiedClick = () => {
        rpsResultBox.innerHTML = "You tied!";
        rpsResultBox.className = '';
        rpsResultBox.className = "tied";
    }
    const scoreRandomizer = () => {
        const randomScore = getRndInteger(1,3);
        switch (randomScore) {
            case 1:
                return "rock";
                break;
            case 2:
                return "paper";
                break;
            case 3:
                return "scissors";
                break;
        
            default:
                console.log("error");
                break;
        }
    }
    const score = scoreRandomizer();
    console.log(score);
    if(e.target.matches("#rock-image")){
        console.log("rock");
        if (score=="rock"){
            console.log("you tied");
            tiedClick();
        }
        else if (score=="paper"){
            console.log("you lost");
            losingClick();
        }
        else {
            console.log("you win");
            winningClick();
        }
    }
    else if (e.target.matches("#scissors-image")){
        console.log("scissors");
        if (score=="rock")
            console.log("you lost");
        else if (score=="paper")
            console.log("you win");
        else console.log("you tied");
    }
    else if(e.target.matches("#paper-image")){
        console.log("paper");
        if (score=="rock")
            console.log("you win");
        else if (score=="paper")
            console.log("you tied");
        else console.log("you lost");
    }

}

ageInput.addEventListener("change", readAgeInput);
ageButton.addEventListener("click", calculateAge);
resetButton.addEventListener("click", resetAge);
catButton.addEventListener("click", generateCat);
rock.addEventListener("click", startGame);
paper.addEventListener("click", startGame);
scissors.addEventListener("click", startGame);



