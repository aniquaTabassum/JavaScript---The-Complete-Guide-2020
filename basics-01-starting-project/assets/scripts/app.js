const defaultResult = 0;
let currentResult = defaultResult;
let entriesLog = [];
function add() {
  const currentDescription = getUserDescription("+");
  const result = currentResult + getUserInput(); 
  outputResult(result, currentDescription);
  var logEntry =  {
    name : "ADD",
    number1 : currentResult,
    number2 : getUserInput()
  };
  enterIntoLog(logEntry);
  currentResult = result;
}

function sutract() {
  const currentDescription = getUserDescription("-");
  const result = currentResult - getUserInput();
  outputResult(result, currentDescription);
  var logEntry =  {
    name : "SUBTRACT",
    number1 : currentResult,
    number2 : getUserInput()
  };
  enterIntoLog(logEntry);
  currentResult = result;
}

function multiply() {
  const currentDescription = getUserDescription("*");
  const result = currentResult * getUserInput();
  outputResult(result, currentDescription);
  var logEntry =  {
    name : "ADD",
    number1 : currentResult,
    number2 : getUserInput()
  };
  enterIntoLog(logEntry);
  currentResult = result;
}

function divide() {
  if (getUserInput() > 0) {
    const currentDescription = getUserDescription("/");
    const result = currentResult / getUserInput();
    outputResult(result, currentDescription);
    var logEntry =  {
      name : "ADD",
      number1 : currentResult,
      number2 : getUserInput()
    };
    enterIntoLog(logEntry);
    currentResult = result;
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