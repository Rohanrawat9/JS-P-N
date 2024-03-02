const myNums = [1, 2, 3];

const initialValue = 0;

// Using the reduce method to sum up
const newNums = myNums.reduce( (accumulator, currentValue) => accumulator +  currentValue, initialValue);
console.log(`The sum of ${myNums}  is ${newNums}`);