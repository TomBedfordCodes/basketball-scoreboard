
let scoreHomeEl = document.getElementById("score-home")
let scoreGuestEl = document.getElementById("score-guest")

let homeScore = 0
let guestScore = 0


function homeScore1() {
    homeScore += 1
    scoreHomeEl.textContent = homeScore
}

function homeScore2() {
    homeScore += 2
    scoreHomeEl.textContent = homeScore
}

function homeScore3() {
    homeScore += 3
    scoreHomeEl.textContent = homeScore
}


function guestScore1() {
    guestScore += 1
    scoreGuestEl.textContent = guestScore
}

function guestScore2() {
    guestScore += 2
    scoreGuestEl.textContent = guestScore
}

function guestScore3() {
    guestScore += 3
    scoreGuestEl.textContent = guestScore
}


function newgame() {
    guestScore = 0
    scoreGuestEl.textContent = guestScore
    homeScore = 0
    scoreHomeEl.textContent = homeScore
}


