var elTitle = document.querySelector('.title')
var elResult = document.querySelector('.result')
var elVaqt = document.querySelector('.vaqt')
var elMosh = document.querySelector('.mosh')
var elSamal = document.querySelector('.samal')
var elInp = document.querySelector('.inp')

function fn() {
    var Inp = elInp.value * 1



    if (Inp / 4) {
        elResult.textContent = Inp / 4
    } else {
        elResult.textContent = "404 found"
    }
    if (Inp / 20) {
        elVaqt.textContent = Inp / 20
    } else {
        elVaqt.textContent = "404 found"
    }
    if (Inp / 100) {
        elMosh.textContent = Inp / 100
    } else {
        elMosh.textContent = "404 found"
    }
    if (Inp / 800) {
        elSamal.textContent = Inp / 800
    } else {
        elSamal.textContent = "404 found "
    }
    elInp.value = ''
    elInp.focus()
}


