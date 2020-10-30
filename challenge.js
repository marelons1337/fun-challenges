const ageButton = document.getElementById("age-button-count");
const resetButton = document.getElementById("age-button-reset");
const ageInput = document.getElementById("age-input-box");
const resultBox = document.getElementById("age-result");
const catButton = document.getElementById("cats-button")
const catsContainer = document.getElementById("cats-container")
const rock = document.getElementById("rock")
const paper = document.getElementById("paper")
const scissors = document.getElementById("scissors")
const rpsBox = document.getElementById("rps-body")
const buttonsDropdown = document.getElementById("buttons-dropdown")
var buttons = document.querySelectorAll("button");
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

function startGame(yourChoice) {
    var humanChoice = yourChoice.id;
    var botChoice = resultRandomizer(getRndInteger(0, 2));
    results = decideWinner(humanChoice, botChoice);
    message = finalMessage(results);

    console.log('computer choice ', botChoice);
    console.log(results);
    console.log(message);
    rpsFrontEnd(humanChoice, botChoice, message);

}

function resultRandomizer(number) {
    return ['rock', 'paper', 'scissors'][number];
}
function decideWinner(yourChoice, botChoice) {
    var rpsDatabase = {
        'rock': { 'scissors': 1, 'rock': 0.5, 'paper': 0 },
        'scissors': { 'paper': 1, 'scissors': 0.5, 'rock': 0 },
        'paper': { 'rock': 1, 'paper': 0.5, 'scissors': 0 }
    };
    var yourScore = rpsDatabase[yourChoice][botChoice];
    var computerScore = rpsDatabase[botChoice][yourChoice];
    
    return [yourScore, computerScore];
}
function finalMessage(yourScore) {
    if(yourScore === 0) {
        return {'message': 'You lost!', 'color': 'red'};
    }else if(yourScore === 0.5) {
        return {'message': 'You tied!', 'color': 'yellow'}
    }
    else{
        return {'message': 'You won!', 'color': 'green'}
    }
    
}
function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage) {
    var imagesDataBase = {
        'rock': rock.src,
        'paper': paper.src,
        'scissors': scissors.src
    }
    rock.remove();
    paper.remove();
    scissors.remove();
    
    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='"+ imagesDataBase[humanImageChoice] + "'height=150px width=150px style='box-shadow: 2px 2px 37px 22px rgba(22,161,9,1);'>"
    messageDiv.innerHTML= "<h1 style='color: " + finalMessage['color'] + "; font-size: 3rem; padding: 30px; '>" + finalMessage['message'] + "</h1>"
    botDiv.innerHTML = "<img src='"+ imagesDataBase[botImageChoice] + "' height=150px width=150px style='box-shadow: 2px 2px 37px 22px rgb(243, 6, 6);'>"
    
    rpsBox.appendChild(humanDiv);
    rpsBox.appendChild(messageDiv);
    rpsBox.appendChild(botDiv);
}


const buttonsClone = {};
for (let i = 0; i < buttons.length; i++) {
    buttonsClone[i] = buttons[i].classList.value
}

function changeColor(choice) {
    const randomColorsData = {
        '0':'btn btn-primary',
        '1':'btn btn-secondary',
        '2':'btn btn-success',
        '3':'btn btn-danger',
        '4':'btn btn-warning',
        '5':'btn btn-info',
        '6':'btn btn-light',
        '7':'btn btn-dark'
    }
    if (choice.valu ==='random') {   
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].className = randomColorsData[getRndInteger(0,7)];                
        }
    }
    else if (choice.value ==='red') {
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].className = randomColorsData[3];                
        }
    }
    if (choice.value ==='reset') {
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].className = buttonsClone[i];                
        }
    }
}

ageInput.addEventListener("change", readAgeInput);
ageButton.addEventListener("click", calculateAge);
resetButton.addEventListener("click", resetAge);
catButton.addEventListener("click", generateCat);


