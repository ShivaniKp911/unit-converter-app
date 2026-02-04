/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
/** on click of convert button
 * grab the value in the input field
 * call the functions to convert the value to respective values
 * display the values returned by the conversion functions to the display fields
 */
const CONVERSIONS = {
  length: {
    factor: 3.281,
    forward: "metersToFeet",
    backward: "feetToMeters",
  },
  volume: {
    factor: 0.264,
    forward: "litersToGallons",
    backward: "gallonsToLiters",
  },
  mass: {
    factor: 2.205,
    forward: "kgToPounds",
    backward: "poundsToKg",
  },
};

let inputEle = document.getElementById("input-field");
let convertBtn = document.getElementById("convert-btn");
let lengthTextEle = document.getElementById("length-text");
let volumeTextEle = document.getElementById("volume-text");
let massTextEle = document.getElementById("mass-text");
console.log(lengthTextEle);

convertBtn.addEventListener("click", function () {
  console.log("this is a convert butn");
  let inputValue = inputEle.value;
  let output = conversion(inputValue);
  let lenghtText = `${inputValue} meters = ${output.length.metersToFeet} feet | ${inputValue} feet = ${output.length.feetToMeters} meters`;
  lengthTextEle.innerText = lenghtText;
  let volumeText = `${inputValue} liters = ${output.volume.litersToGallons} gallons | ${inputValue} gallons = ${output.volume.gallonsToLiters} liters`;
  volumeTextEle.innerText = volumeText;
  let massText = `${inputValue} kg = ${output.mass.kgToPounds} pounds | ${inputValue} pounds = ${output.mass.poundsToKg} kg`;
  massTextEle.innerText = massText;
});

function round(value, precision = 3) {
  return Number(value.toFixed(precision));
}

function convertBothWays(value, factor) {
  return {
    forward: round(value * factor),
    backward: round(value / factor),
  };
}

function conversion(value) {
  let result = {};
  for (let type in CONVERSIONS) {
    let { factor, forward, backward } = CONVERSIONS[type];
    const { forward: fwdValue, backward: bwdValue } = convertBothWays(
      value,
      factor,
    );
    result[type] = {
      [forward]: fwdValue,
      [backward]: bwdValue,
    };
  }

  return result;
}
