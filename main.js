/*
1 meter = 3.2808399 feet
1 liter = 0.264172052 gallon
1 kilogram = 2.20462262 pound
*/

let convertBtn = document.querySelector("#convert-btn");
let lengthText = document.querySelector("#length-text");
let volumeText = document.querySelector("#volume-text");
let massText = document.querySelector("#mass-text");

convertBtn.addEventListener("click", function() {

let input = document.querySelector("#input").value
console.log(input)
converter(input);
})


function converter(num) {
    if (num > 0) {
        feet = Math.round(num * 3.2808399 * 1000) / 1000
        meter = Math.round(num / 3.2808399 * 1000) / 1000
        lengthText.innerHTML = `${num} meters = ${feet} feet | ${num} feet = ${meter} meters`
        

        liter = Math.round(num / 0.264172052 * 1000) / 1000
        gallon = Math.round(num * 0.264172052 * 1000) / 1000
        volumeText.innerHTML = `${num} liters = ${gallon} gallons | ${num} gallons = ${liter} liters`

        kilos = Math.round(num / 2.20462262 * 1000) / 1000
        pounds = Math.round(num * 2.20462262 * 1000) / 1000
        massText.innerHTML = `${num} kilos = ${pounds} pounds | ${num} pounds = ${kilos} kilos`
    }
}
