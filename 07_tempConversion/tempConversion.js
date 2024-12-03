const convertToCelsius = function(far) {
  let cel = (far - 32) * 5/9;

  cel = Math.round(cel * 10) / 10;

  return cel;
};

const convertToFahrenheit = function(cel) {
  let far = (cel * 9/5) + 32;

  far = Math.round(far * 10)/10;

  return far;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
