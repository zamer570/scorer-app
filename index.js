let homeEl = document.getElementById("homeScore");
let guestEl = document.getElementById("guestScore");
let newGameEl = document.getElementById("nameGame");
let homeScore = 0, guestScore = 0;

function oneHome(){
    homeScore += 1;
    homeEl.textContent = homeScore;
    changeColor();
}

function twoHome(){
    homeScore += 2;
    homeEl.textContent = homeScore;
    changeColor();
}

function threeHome(){
    homeScore += 3;
    homeEl.textContent = homeScore;
    changeColor();
}

function oneGuest(){
    guestScore += 1;
    guestEl.textContent = guestScore;
    changeColor();
}

function twoGuest(){
    guestScore += 2;
    guestEl.textContent = guestScore;
    changeColor();
}

function threeGuest(){
    guestScore += 3;
    guestEl.textContent = guestScore;
    changeColor();
}

function changeColor(){
    if(homeScore > guestScore){
        guestEl.style.color = 'whitesmoke';
        homeEl.style.color = '#F94F6D';
    }
    else if(homeScore < guestScore){
        homeEl.style.color = 'whitesmoke';
        guestEl.style.color = '#F94F6D';
    }
    else{
        guestEl.style.color = '#F94F6D';
        homeEl.style.color = '#F94F6D';
    }
}

function newGame(){
    homeScore = 0;
    guestScore=0;
    homeEl.textContent = 0;
    guestEl.textContent = 0;
    changeColor();
}