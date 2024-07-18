/*1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let convertOne = document.getElementById("convert-one");
let convertTwo = document.getElementById("convert-two");
let convertThree = document.getElementById("convert-three");
let btnEl = document.getElementById("btn-el");
let inputEl = document.getElementById("input-el");

btnEl.addEventListener("click", function() {
  let value = parseFloat(inputEl.value); // Parse input as float
  
  if (!isNaN(value)) { // Check if value is a valid number
    let v1 = 3.281 * value;
    let v2 = value / 3.281;
    let v3 = 0.264 * value;
    let v4 = value / 0.264;
    let v5 = 2.204 * value;
    let v6 = value / 2.204;

    convertOne.innerHTML = `
      ${value} meters = ${v1.toFixed(3)} feet | ${value} feet = ${v2.toFixed(3)} meters
    `;
    convertTwo.innerHTML = `
      ${value} gallons = ${v3.toFixed(3)} liters | ${value} liters = ${v4.toFixed(3)} gallons
    `;
    convertThree.innerHTML = `
      ${value} pounds = ${v5.toFixed(3)} kilograms | ${value} kilograms = ${v6.toFixed(3)} pounds
    `;
  } else {
    // Handle case where input is not a valid number
    alert("Please enter a valid number.");
  }
});
