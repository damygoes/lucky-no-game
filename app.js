const winnerDisplay = document.querySelector('.winner-card');
const resetBtn = document.querySelector('.reset-btn');
const boxOne = document.querySelector('.box-1');
const boxTwo = document.querySelector('.box-2');
const levelTarget = document.querySelector('.level-target');
let playerOneDisplay = document.querySelector('.player-one-score')
let playerTwoDisplay = document.querySelector('.player-two-score')
let playTimeSelect = document.querySelector('#play-time-select');


let playerOneScore = 0;
let playerTwoScore = 0;
let levelOne = 6;
let isGameOver = false;


// Setting Game Level Using Select HTML Tag
playTimeSelect.addEventListener('change', function () {
    resetScores();

    if(playTimeSelect.value === 'hard') {
        levelOne = getPrimeNum(1,12)
        levelTarget.innerText = `lucky no: a prime no. between 1 & 12`
        return
    }
    if(playTimeSelect.value === 'medium') {
        levelOne = getOddNum(1,12)
        levelTarget.innerText = `lucky no: an odd no. between 1 & 12`
        return
    }
    else{
        levelOne = 6;
        levelTarget.innerText = `lucky no: the no. 6`
        return
    }
})

// Level - Medium Target Function
function getOddNum (firstNum, secondNum) {
    let arr = [];

    while (firstNum <= secondNum) {
        if (firstNum % 2 !== 0) {
            arr.push(firstNum);
        }
      firstNum += 1;
    }


    return arr[Math.floor(Math.random()*arr.length)];
}

// Level - Hard Target Function
function getPrimeNum (firstNum, secondNum) {
    let arr = [];

    while (firstNum <= secondNum) {
        if (firstNum % firstNum === 0 && firstNum % 1 === 0) {
            arr.push(firstNum);
        }
      firstNum += 1;
    }


    return arr[Math.floor(Math.random()*arr.length)];
}

// Reset Function 
function resetScores () {
    isGameOver = false;
    playerOneScore = 0;
    playerTwoScore = 0;
    playerOneDisplay.textContent = 0;
    playerTwoDisplay.textContent = 0;
    playerOneDisplay.style.color = 'black';
    playerTwoDisplay.style.color = 'black';
    disableCard('box-1', false);
    disableCard('box-2', false);
    boxOne.style.backgroundColor = 'aliceblue';
    boxTwo.style.backgroundColor = 'aliceblue';
    boxOne.innerText = " ";
    boxTwo.innerText = " ";
    winnerDisplay.innerText = ' ';
    winnerDisplay.style.backgroundColor = '#fee1c7';
    winnerDisplay.style.color = ' ';
    levelTarget.innerText = ' ';
}


// Set Random Color on Card 
setRandColor = () => {
    let r = Math.floor(Math.random()*255);
    let g = Math.floor(Math.random()*255);
    let b = Math.floor(Math.random()*255);
    return `rgb(${r},${g},${b})`;    
}

// Set Random Number on Card 
setRandNumber = () => {
    let num = Math.floor(Math.random()*10 +1);
    return num;    
}

// Disables Card After a Winner is Detected 
const disableCard = function(cardId, secondValue) {
    let card = document.getElementsByClassName(cardId);
    return card[0].disabled = secondValue;    
}

// Set Click Event on Player One Card 
boxOne.addEventListener('click', function () {
        boxOne.style.backgroundColor = setRandColor();
        boxOne.innerText = setRandNumber();
        if(!isGameOver){
            playerOneScore += 1;
            playerOneDisplay.textContent = playerOneScore;
            if (parseInt(boxOne.innerText) === levelOne) {
                disableCard('box-1', true);
                disableCard('box-2', true);
                isGameOver = true;
                playerOneDisplay.style.color = 'green';
                playerTwoDisplay.style.color = 'red';
                winnerDisplay.innerText = 'PLAYER ONE WINS!!!'
                winnerDisplay.style.backgroundColor = 'green'
                winnerDisplay.style.color = 'white'
            }
        }
    });


// Set Click Event on Player Two Card 
boxTwo.addEventListener('click', function () {
        boxTwo.style.backgroundColor = setRandColor();
        boxTwo.innerText = setRandNumber();
        if(!isGameOver){
            playerTwoScore += 1;
            playerTwoDisplay.textContent = playerTwoScore;
            if (parseInt(boxTwo.innerText) === levelOne) {
                disableCard('box-2', true);
                disableCard('box-1', true);
                isGameOver = true;
                playerTwoDisplay.style.color = 'green';
                playerOneDisplay.style.color = 'red';
                winnerDisplay.innerText = 'PLAYER TWO WINS!!!'
                winnerDisplay.style.backgroundColor = 'green'
                winnerDisplay.style.color = 'white'
            }
        }
    });
 
// Reset Game Data 
resetBtn.addEventListener('click', resetScores)










