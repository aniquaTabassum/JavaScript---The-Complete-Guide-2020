const defaultResult = 0;
let currentResult = defaultResult;

function add() {
  const currentDescription = getUserDescription("+");
  const result = currentResult + getUserInput();
  currentResult = result;
  outputResult(result, currentDescription);
}

function sutract() {
  const currentDescription = getUserDescription("-");
  const result = currentResult - getUserInput();
  currentResult = result;
  outputResult(result, currentDescription);

}

function getUserInput() {
  return parseInt(userInput.value);
}

function getUserDescription(operator) {
  return (
    currentResult.toString() + " " + operator + " " + getUserInput().toString()
  );
}
addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click",sutract);