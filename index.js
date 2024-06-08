

let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")
let counthome = 0
let countguest = 0


function home(){
    counthome += 1
    homeScore.textContent = counthome
}

function hometwo(){
    counthome += 2
    homeScore.textContent = counthome
}

function homethree(){
    counthome += 3
    homeScore.textContent = counthome
}

function guest(){
    countguest += 1
    guestScore.textContent = countguest
}

function guesttwo(){
    countguest += 2
    guestScore.textContent = countguest
}

function guestthree(){
    countguest += 3
    guestScore.textContent = countguest
}

function clearhome() {
    counthome = 0
    homeScore.textContent = counthome
}

function clearguest() {
    countguest = 0
    guestScore.textContent = countguest
}





