function randomNumber(){
    // Generate number from 1 to 6
    return Math.ceil(Math.random() * 6)
}


// Generate two random number for 



document.querySelector('.button button').onclick = function(){
    let dice1 = randomNumber();
    let dice2 = randomNumber();
    if (dice1 < dice2){
        document.querySelector('h1').innerHTML = 'Player 2 wins'
    }else if (dice1 > dice2){
        document.querySelector('h1').innerHTML = 'Player 1 wins';
    }else{
        document.querySelector('h1').innerHTML = 'Draw!'
    }
    // Set dice value for player 1
    document.querySelector('.dice>.img1').setAttribute('src',`./images/dice${dice1}.png` )
    // document.getElementsByTagName('img')[0].src = `./images/dice${dice1}.png`;
    document.getElementsByTagName('img')[1].src=`./images/dice${dice2}.png`;
}