
const sayHello = (name)=>{
  console.log("Hi, "+name);
}
const customMessage = (intro, name = "Jisan") =>{
  console.log(intro+" "+name);
}

const returnMessage = ()=>
   "hello aniqua";

const checkInput = (functionName,...stringValues) =>{
  allOkay = true;
    for(const a of stringValues)
    {
      if(a === "")
      {
        allOkay = false;
        break;
      }
    }

    if(allOkay == true)
    {
      functionName();
    }
    else{
      console.log("not okay")
    }
}

function printOkay()
{
  console.log("okay");
}
sayHello("aniqua");
customMessage("Hello", "aniqua");
customMessage("Hello");
console.log(returnMessage());
checkInput(printOkay, "bhau","ani","qua");