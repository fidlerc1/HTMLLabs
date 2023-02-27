const numberList = [];


function addNumber() {
    var number = document.getElementById("numberInput");
    numberList.push(number.value);
    document.getElementById("numberInput").value = "";
};

function outputNumbers() {
    document.getElementById("numberOutput").innerHTML = "Your Numbers were: " + numberList;
    var large = 0;
    for (i=0;i<numberList.length;i++) {
        var currentValue = numberList[i];
        if (currentValue > large) {
            large = currentValue;
        }
    }
    document.getElementById("largestNumber").innerHTML = "The Largest Number was: " + large;
};

let xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.weather.gov/gridpoints/ILN/36,34/forecast");
xhr.responseType = "json";
xhr.send();
xhr.onload = function() {
    let forecastHourly = xhr.response;
    console.log(forecastHourly);
};