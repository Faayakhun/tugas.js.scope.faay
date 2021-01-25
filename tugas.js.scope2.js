function multiplyByNineFifths(number) {
	return number * (9 / 5);
}

function getFahrenheit(celsius) {
	document.getElementById("resultF").innerHTML = "The temperature is " + (multiplyByNineFifths(celsius) + 32) + " °F"
}

function minusThirtyTwo(number) {
	return number - 32;
}

function getCelsius(fahrenheit) {
	document.getElementById("resultC").innerHTML = "The temperature is " + (minusThirtyTwo(fahrenheit) *5/9) + " °C"
}

