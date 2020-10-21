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
    // setting styles for 3 different scenarios
    paper.style.display = "none";
    rpsResultBox.style.display ="inline";

    const winningClick = () => {
        rpsResultBox.className = '';
        rpsResultBox.innerHTML = "You Win!";
        rpsResultBox.className = "winner";
        scissors.style = "box-shadow: 2px 2px 37px 22px rgb(255, 0, 0)"
        rock.style = "box-shadow: 2px 2px 37px 22px rgba(22,161,9,1)"
    }
    const losingClick = () => {
        rpsResultBox.className = '';
        rpsResultBox.innerHTML = "You Lose!";
        rpsResultBox.className = "loser";
        scissors.style = "box-shadow: 2px 2px 37px 22px rgba(22,161,9,1)"
        rock.style = "box-shadow: 2px 2px 37px 22px rgb(255, 0, 0)"
    }
    const tiedClick = () => {
        rpsResultBox.className = '';
        rpsResultBox.innerHTML = "You tied!";
        rpsResultBox.className = "tied";
        scissors.style = "box-shadow: 2px 2px 37px 22px rgb(255, 165, 0)"
        rock.style = "box-shadow: 2px 2px 37px 22px rgb(255, 165, 0)"
    }
    const enemyPaper = () => {
        scissors.src = "paper.jpg";
    }
    const enemyRock = () => {
        scissors.src = "rock.jpg";
    }
    const enemyScissors = () => {
        scissors.src = "scissors.jpg";
    }

    // randomizing enemy score
    const resultRandomizer = () => {
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
    const result = resultRandomizer();
    console.log(result);
    if(e.target.matches("#rock-image")){
        rock.src = "rock.jpg";
        console.log("rock");
        if (result=="rock"){
            console.log("you tied");
            tiedClick();
            enemyRock();
        }
        else if (result=="paper"){
            console.log("you lost");
            losingClick();
            enemyPaper();
        }
        else {
            console.log("you win");
            winningClick();
            enemyScissors();
        }
    }
    else if (e.target.matches("#scissors-image")){
        rock.src = "scissors.jpg";
        console.log("scissors");
        if (result=="rock"){
            console.log("you lost");
            losingClick();
            enemyRock();
        }
        else if (result=="paper"){
            console.log("you win");
            winningClick();
            enemyPaper();
        }
        else {
            console.log("you tied");
            tiedClick();
            enemyScissors();
        }
    }
    else if(e.target.matches("#paper-image")){
        rock.src = "paper.jpg";
        console.log("paper");
        if (result=="rock"){
            console.log("you win");
            winningClick();
            enemyRock();
        }
        else if (result=="paper"){
            console.log("you tied");
            tiedClick();
            enemyPaper();
        }
        else { console.log("you lost");
            losingClick();
            enemyScissors();
        }
    }

}
const resetGame = () => {
    rpsResultBox.style.display = "none"
    paper.style.display = "inline"
    scissors.className = "rps-element"
    scissors.src = "scissors.jpg"
    rock.className = "rps-element"
    rock.src = "rock.jpg"
}

ageInput.addEventListener("change", readAgeInput);
ageButton.addEventListener("click", calculateAge);
resetButton.addEventListener("click", resetAge);
catButton.addEventListener("click", generateCat);
rock.addEventListener("click", startGame);
paper.addEventListener("click", startGame);
scissors.addEventListener("click", startGame);



