// *check for input
// step 1 - get input
// 2 - determine conversion
// 3 - to celsius or fahrenheit
// 4 - color text
// 5 - output to dom
// 6 - reset


// define global variables

var SubmitButton = document.getElementById("SubmitButton");
var ClearButton = document.getElementById("ClearButton");

// functions

function checkInput() {
  var userInput = document.getElementById("userInput").value;
    if (userInput) {
      determineConverter(userInput);
    } else {
      console.log("no input");
    }
  }


function determineConverter (userInput) {
  var FahrRadio = document.getElementById("FahrRadio");
  var CelRadio = document.getElementById("CelRadio");

    if (FahrRadio.checked) {
      toFahrenheit(userInput);
    } else if (CelRadio.checked) {
        toCelsius(userInput);
    } else {
        alert("Please select a conversion type")
    }
  }



function toCelsius (userInput) {
  var outputTemp = ((userInput - 32) / 1.8).toFixed(1);
  outputToDom(outputTemp, "c");
}

function toFahrenheit (userInput) {
  var outputTemp = ((userInput * 1.8) + 32).toFixed(1);
  outputToDom(outputTemp, "f");
}


function outputToDom (outputTemp, type) {
  var ouput = document.getElementById("output");
  // console.log("color text", outputTemp.toFixed(1), type);

  if (type === "c") {
      if (outputTemp > 32) {
        output.innerHTML = "<p class='red'>" + outputTemp + "</p>";
      } else if (outputTemp < 0) {
        output.innerHTML = "<p class='blue'>" + outputTemp + "</p>";
      } else {
        output.innerHTML = "<p class='green'>" + outputTemp + "</p>";
    }
  } else {
      if (outputTemp > 90) {
        output.innerHTML = "<p class='red'>" + outputTemp + "</p>";
      } else if (outputTemp < 32) {
        output.innerHTML = "<p class='blue'>" + outputTemp + "</p>";
      } else {
        output.innerHTML = "<p class='green'>" + outputTemp + "</p>";
      }
    }
  }

//-- CLEAR BUTTON --//

function reset () {

    userInput.value = "";
    output.innerHTML = "";
    FahrRadio.checked = false;
    CelRadio.checked = false;

}


// event handlers go after functions here so they run last-
// Assign a function to be executed when the button is clicked

SubmitButton.addEventListener("click", checkInput);

ClearButton.addEventListener("click", reset);




