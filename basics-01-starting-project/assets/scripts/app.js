const defaultResult = 0;
let currentResult = defaultResult;
let entriesLog = [];
function add() {
  const currentDescription = getUserDescription("+");
  const result = currentResult + getUserInput();
  currentResult = result;
  outputResult(result, currentDescription);
  enterIntoLog(currentDescription);
}

function sutract() {
  const currentDescription = getUserDescription("-");
  const result = currentResult - getUserInput();
  currentResult = result;
  outputResult(result, currentDescription);
  enterIntoLog(currentDescription);
}

function multiply() {
  const currentDescription = getUserDescription("*");
  const result = currentResult * getUserInput();
  currentResult = result;
  outputResult(result, currentDescription);
  enterIntoLog(currentDescription);
}

function divide() {
  if (getUserInput() > 0) {
    const currentDescription = getUserDescription("/");
    const result = currentResult / getUserInput();
    currentResult = result;
    outputResult(result, currentDescription);
    enterIntoLog(currentDescription);
  } else {
    alert("diviend needs to be greater than 0");
  }
}

function getUserInput() {
  return parseInt(userInput.value);
}

function getUserDescription(operator) {
  return (
    currentResult.toString() + " " + operator + " " + getUserInput().toString()
  );
}

function enterIntoLog(operation)
{
  entriesLog.push(operation);
  console.log(entriesLog);
}
addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", sutract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);