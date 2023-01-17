let homeEl = document.getElementById("home")
let GuestEl = document.getElementById("Guest")
let count = 0
let sum = 0

function oneScore(){
    count = count + 1
    homeEl.textContent = count
}

function twoScore(){
    count += 2
    homeEl.textContent = count
}

function threeScore(){
    count += 3
    homeEl.textContent = count
}

function addOneScore(){
    sum = sum + 1
    GuestEl.textContent = sum
}

function addTwoScore(){
    sum = sum + 2
    GuestEl.textContent = sum
}

function addThreeScore(){
    sum = sum + 3
    GuestEl.textContent = sum
}

function newGame(){
    sum = 0
    count = 0
    GuestEl.textContent = sum
    homeEl.textContent = count
    
}