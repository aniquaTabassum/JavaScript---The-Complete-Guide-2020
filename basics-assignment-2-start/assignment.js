const task3Element = document.getElementById("task-3");
name1 = "Aniqua";
name2 = "Faizah";
name3 = "Ashna";
task3Element.addEventListener("click", noParamsFunction);
noParamsFunction();
displayOneName(name1);
alert(displayThreeNames(name1, name2, name3));
function noParamsFunction() {
  alert("arrived at noParamsFunction");
}

function displayOneName(name) {
  alert("name is " + name);
}

function displayThreeNames(name1, name2, name3) {
  return name1 + " " + name2 + " " + name3;
}
