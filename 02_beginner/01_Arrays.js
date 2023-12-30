// Arrays

const myArr = [0, 6, 8, 86, 7, 78]
const my_Heroes = ["Ironman", "Thor", "Hulk", "Deadpool" ]

const my_buddy = new Array(1, 6, 8, 6, 54, 87);

console.log(my_Heroes)

myArr.push(876)
myArr.pop()

myArr.unshift(9)
myArr.shift()


console.log(myArr.includes(10))
console.log(myArr.indexOf(7))

const newArr = myArr.join()

console.log(myArr)
console.log(typeof newArr)


console.log("A", myArr)
const myn1 = myArr.slice(1, 3)

console.log(myn1)
console.log("b", myArr)

const myn2 = myArr.splice(1, 3)
console.log(myn2)
console.log("C", myArr)


const marvel_heros = ["spidy", "loki", "wanda", "Dr. strange"]
const dc_heros = ["superman", "joker", "Batman", "Aaquaman"]

marvel_heros.push(dc_heros)

const heroes = marvel_heros.concat(dc_heros);

const new_heroes = [...marvel_heros, ...dc_heros]
console.log(new_heroes)

const newArr = [1, 2, 3, [4, 5, 6], 7, [3, 5, [7, 65], 8], 9]

const mynewArr = newArr.flat(Infinity)

console.log(mynewArr);


console.log(Array.isArray("Toji Fushigoro"));
console.log(Array.from("Toji Fushigoro"));


console. log (Array. from({name: "hitesh"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console. log(Array. of (score1, score2, score3) );
