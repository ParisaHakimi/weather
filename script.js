// dismiss cookie
document.querySelector("#acceptCookie").addEventListener("click", function () {
  document.querySelector("#acceptCookie").remove();
});

// convert the tempreture
// document
//   .getElementById("Fahrenheit")
//   .addEventListener("click", function (celsius) {
//     console.log(document.querySelectorAll(".temp"));

// document.querySelector(".temp").innerText = celsius * (9 / 5) + 32;
// });

function convertToF() {
  var selectTempBox = document.getElementById("temp");
  var selectedValue = selectTempBox.options[selectTempBox.selectedIndex];

  // temp1
  var celsius = document.getElementById("temp1").innerText;
  if (selectedValue.value === "f") {
    var Fahrenheit = celsius * (9 / 5) + 32;
    document.getElementById("temp1").innerText = Fahrenheit;
  }
  // temp2
  var celsius = document.getElementById("temp2").innerText;
  if (selectedValue.value === "f") {
    var Fahrenheit = celsius * (9 / 5) + 32;
    document.getElementById("temp2").innerText = Fahrenheit;
  }
  // temp3
  var celsius = document.getElementById("temp3").innerText;
  if (selectedValue.value === "f") {
    var Fahrenheit = celsius * (9 / 5) + 32;
    document.getElementById("temp3").innerText = Fahrenheit;
  }
  // temp4
  var celsius = document.getElementById("temp4").innerText;
  if (selectedValue.value === "f") {
    var Fahrenheit = celsius * (9 / 5) + 32;
    document.getElementById("temp4").innerText = Fahrenheit;
  }
  // temp5
  var celsius = document.getElementById("temp5").innerText;
  if (selectedValue.value === "f") {
    var Fahrenheit = celsius * (9 / 5) + 32;
    var rounded = Math.round(Fahrenheit * 10) / 10;
    document.getElementById("temp5").innerText = rounded;
  }
  // temp6
  var celsius = document.getElementById("temp6").innerText;
  if (selectedValue.value === "f") {
    var Fahrenheit = celsius * (9 / 5) + 32;
    document.getElementById("temp6").innerText = Fahrenheit;
  }
  // temp7
  var celsius = document.getElementById("temp7").innerText;
  if (selectedValue.value === "f") {
    var Fahrenheit = celsius * (9 / 5) + 32;
    var rounded = Math.round(Fahrenheit * 10) / 10;
    document.getElementById("temp7").innerText = rounded;
  }
  // temp8
  var celsius = document.getElementById("temp8").innerText;
  if (selectedValue.value === "f") {
    var Fahrenheit = celsius * (9 / 5) + 32;
    var rounded = Math.round(Fahrenheit * 10) / 10;
    document.getElementById("temp8").innerText = rounded;
  }
}
