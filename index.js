/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convertBtn = document.getElementById('convert-btn')
const lengthEl = document.getElementById('length-el')
const volumeEl = document.getElementById('volume-el')
const massEl = document.getElementById('mass-el')

function length(value) {
    let metersToFeet = (value * 3.281).toFixed(3)
    let feetToMeters = (value / 3.281).toFixed(3)
    let sentence = `${value} meters = ${metersToFeet} feet | ${value} feet = ${feetToMeters} meters`
    lengthEl.textContent = sentence
}

function volume(value) {
    let litersToGallons = (value * 0.264).toFixed(3)
    let gallonsToLiters = (value / 0.264).toFixed(3)
    let sentence = `${value} liters = ${litersToGallons} gallons | ${value} gallons = ${gallonsToLiters} liters`
    volumeEl.textContent = sentence
}

function mass(value) {
    let kgsToPounds = (value * 2.204).toFixed(3)
    let poundsToKgs = (value / 2.204).toFixed(3)
    let sentence = `${value} kilos = ${kgsToPounds} pounds | ${value} pounds = ${poundsToKgs} kilos`
    massEl.textContent = sentence
}

function getInput() {
    return document.getElementById('unit-input').value
}

convertBtn.addEventListener("click", function() {
    let inputNumber = Number(getInput())
    if (inputNumber) {
        length(inputNumber)
        volume(inputNumber)
        mass(inputNumber)
    }
})