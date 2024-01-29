var activePlayer;
var score ;
var roundScore;
var diceNumber;
var diceDom;
var isGameOver = false;

newGame();

document.querySelector('.btn-roll').addEventListener('click', function(){
    if(!isGameOver){
        diceNumber = Math.floor(Math.random() * 6) + 1;
        diceDom.style.display = 'block';
        diceDom.src = 'dice-' + diceNumber + '.png';
        
        if(diceNumber != 1){
            roundScore += diceNumber;
            document.getElementById('current-' + activePlayer).textContent = roundScore;
        }
        else{
            roundScore = 0;
            switchPlayer();
            activePlayer == 0 ? activePlayer = 1 : activePlayer = 0;
        }
    }
});

function switchPlayer(){
    diceDom.style.display = 'none';
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.getElementById('current-' + activePlayer).textContent = 0;
}

document.querySelector('.btn-hold').addEventListener('click', function(){
    if(!isGameOver){
        score[activePlayer] += roundScore;
        document.getElementById('score-' + activePlayer).textContent = score[activePlayer];

        if(score[activePlayer] >= 10){
            document.getElementById('name-' + activePlayer).textContent = 'WINNER';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            isGameOver = true;
        }
        else{
            switchPlayer();
        }

        activePlayer == 1 ? activePlayer = 0: activePlayer = 1;
        roundScore = 0;
    }
})

document.querySelector('.btn-new').addEventListener('click', newGame);

function newGame(){
    isGameOver = false;
    activePlayer = 0;
    score = [0, 0];
    roundScore = 0;
    diceNumber;
    diceDom = document.querySelector('.dice');
    diceDom.style.display = 'none';

    document.getElementById('score-0').textContent = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('score-1').textContent = 0;
    document.getElementById('current-1').textContent = 0;

    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.remove('active');

    document.querySelector('.player-0-panel').classList.add('active');

    document.getElementById('name-0').textContent = 'PLAYER 1';
    document.getElementById('name-1').textContent = 'PLAYER 2';
}