const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let newNums = myNums.map((nums) => (nums + 10));

newNums = myNums
                .map((nums) => (nums * 10 ))
                .map((nums) => (nums + nums))
                .filter((nums) => (nums >= 60));

console.log(newNums);