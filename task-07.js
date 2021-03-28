// Temperature conversion to Fahrenheit
function tempToFahrenheit(celsius){
    var fahrenheit = (celsius * 1.8) + 32;
    console.log("The Temperature is " + fahrenheit + "\u00B0 F");
}

// Temperature conversion to Celcius
function tempToCelcius(fahrenheit){
    var celcius = (fahrenheit - 32) / 1.8;
    console.log("The Temperature is " + celcius + "\u00B0 C");
}
tempToCelcius(230);
tempToFahrenheit(20);