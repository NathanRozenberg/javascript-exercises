const convertToFahrenheit = function(temp) {
  let tempC = (temp * 9 / 5) + 32
  tempC = Number(tempC.toFixed(1))
  return tempC
};

const convertToCelsius = function(temp) {
  let tempF = (temp - 32) * 5 / 9
  tempF = Number(tempF.toFixed(1))
  return tempF
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
