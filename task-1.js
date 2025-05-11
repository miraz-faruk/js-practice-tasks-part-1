// Write a function to convert temperature from Celsius to Fahrenheit. 

function celsiusToFahrenheit(celsius) {
    const fahrenheit = (celsius * 9 / 5) + 32;
    return fahrenheit;
}

const celsius = 32;
const fahrenheit = celsiusToFahrenheit(celsius);
console.log(fahrenheit); // Output: 107.6