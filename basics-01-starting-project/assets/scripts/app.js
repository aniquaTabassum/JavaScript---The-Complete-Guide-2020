const defaultResult = 0;
let currentResult = defaultResult;
currentResult = currentResult + 10;
currentDescription = defaultResult + " + 10";
outputResult(currentResult, currentDescription);
add(1, 2);
function add(num1, num2) {
  const result = num1 + num2;
  alert("the result is " + result);
}
