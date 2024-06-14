homeEl = document.getElementById("homescore")
guestEl = document.getElementById("guestscore")

let count = 0
let gcount = 0
function one() {
    count = count + 1
    homeEl.textContent = count
}
function two() {
    count = count + 2
    homeEl.textContent = count
}
function three() {
    count = count + 3
    homeEl.textContent = count
}
function gone() {
    gcount = gcount + 1
    guestEl.textContent = gcount
}
function gtwo() {
    gcount = gcount + 2
    guestEl.textContent = gcount
}
function gthree() {
    gcount = gcount + 3
    guestEl.textContent = gcount
}