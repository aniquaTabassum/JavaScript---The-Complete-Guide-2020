const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)
const rn2 = Math.random();
if(randomNumber>0.7){
    alert("number is greater than 0.7")
}

let arrayOfNumbers = [1,2,3,4,5];
for(let i=0; i<arrayOfNumbers.length;i++)
{
    console.log(arrayOfNumbers[i]);
}

for(element of arrayOfNumbers){
    console.log(element);
}

for(let i = arrayOfNumbers.length-1; i>=0;i--)
{
    console.log(arrayOfNumbers[i]);
}

if((randomNumber>0.7 && rn2>0.7) || (randomNumber<0.2 || rn2<0.2))
{
    alert("Conditions met");
}