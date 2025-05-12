const convertToCelsius = function(f) {
  const convertToC = (f - 32) * 5 / 9;
  return parseFloat(convertToC.toFixed(1));
};

const convertToFahrenheit = function(c) {
  const convertToF = (c * 9 / 5) + 32;
  return parseFloat(convertToF.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
