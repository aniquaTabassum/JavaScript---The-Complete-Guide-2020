const defaultResult = 0;
let currentResult = defaultResult;
currentResult = add(1,3);
currentDescription = defaultResult + " + 10";
outputResult(currentResult, currentDescription);

function add(num1, num2) {
  const result = num1 + num2;
  return result;
}
