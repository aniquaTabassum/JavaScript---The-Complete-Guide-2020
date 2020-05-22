const numbers = [1,2,3,4,5,6,6,7,6,5,7,7,9,10,131314]
const greaterThanFive = numbers.filter(num => num>5)
console.log(greaterThanFive)
const listOfObject = numbers.map(num => ({number : num}))
console.log(listOfObject)
const mulResult = numbers.reduce((prevNum, currentNum) => prevNum*currentNum,numbers[0])
console.log(mulResult)

const findMax = (numbers) =>  [Math.max(...numbers), Math.min(...numbers)]
console.log([max, min] = findMax(numbers))

const set = new Set(numbers)
console.log(set)