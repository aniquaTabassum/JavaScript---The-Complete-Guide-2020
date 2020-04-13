const defaultResult = 0;
let currentResult = defaultResult;
currentDescription = "";
function add() {
  const result = currentResult + parseInt(userInput.value);
  outputResult(result, currentDescription);
  
}

addBtn.addEventListener('click',add);