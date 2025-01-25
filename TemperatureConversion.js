//Question no  6
//Implement a program that converts temperatures between Celsius and Fahrenheit.



function farenheitToCelsius(fahrenheit){
    return (fahrenheit - 32) * 5 / 9;
}
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
  }


const celsiusTemp = 25;
const fahrenheitTemp = celsiusToFahrenheit(celsiusTemp);
console.log(`${celsiusTemp}°C is equal to ${fahrenheitTemp.toFixed(2)}.°F`);

const farenheitTemperature= 125;
const celsiusTemperature = farenheitToCelsius(farenheitTemperature);
console.log(`${farenheitTemperature}°C is equal to ${celsiusTemperature.toFixed(2)}°F`);