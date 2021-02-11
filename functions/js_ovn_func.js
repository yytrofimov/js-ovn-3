//Uppgift 1
function showMeal(mealName) {
  return mealName;
}
console.log(showMeal("morgonmål"));
//Uppgift 2
var a = 4;
var b = 7;
function countResult(a, b, operation) {
  if (operation == "+") {
    document.getElementById("result").innerHTML = a + b;
  } else if (operation == "-") {
    document.getElementById("result").innerHTML = a - b;
  } else if (operation == "*") {
    document.getElementById("result").innerHTML = a * b;
  } else {
    document.getElementById("result").innerHTML = a / b;
  }
}
document.getElementById("addition").addEventListener("click", function () {
  countResult(10, 5, "+");
});
document.getElementById("subtraction").addEventListener("click", function () {
  countResult(10, 5, "-");
});
document.getElementById("multiplication").addEventListener("click", function () {
  countResult(10, 5, "*");
});
document.getElementById("division").addEventListener("click", function () {
  countResult(10, 5, "/");
});
//Uppgift 3
document.getElementById("get_date").addEventListener("click", function () {
  document.getElementById("today").innerHTML = new Date();
});
//Uppgift 4
//Den här metoden är mer exakt
function onLoadTime() {
  var loadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
  document.getElementById("loadtime").innerHTML = loadTime;
}
window.onload = onLoadTime;
