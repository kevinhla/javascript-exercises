const convertToCelsius = function(tempFah) {
  let newCel = (tempFah - 32) * (5/9);
  let roundedTemp = Math.round(newCel * 10)/10;
  return roundedTemp;
};

const convertToFahrenheit = function(tempCel) {
  let newFah = (tempCel * (9/5) + 32);
  let roundedTemp = Math.round(newFah * 10)/10;
  return roundedTemp;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
