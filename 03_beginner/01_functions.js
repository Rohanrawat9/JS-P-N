// function numbers(number1, number2){
//     console.log(number1 + number2)
// }

// numbers(43, 8755) // for checking its number or not we use condition and loops 


// function numbers(number1 , number2){

//     // let result = number1 + number2;
//     return (number1 + number2);
//     console.log("HEman"); // this thing will not show any value because we already return the values
// }

// const result = numbers(765, 8755)

// console.log("Result: ", result)

// function LoggeInValues (username = "Bhaai"){
//     if(!username){
//         console.log(" Show me a username");
//         return 
//     }
//     return `${username} just logged in`
// }

// const result = LoggeInValues("Rohan");

// console.log("Result: ", result);

// // console.log(LoggeInValues("")); // IT means that it has some values
// console.log(LoggeInValues());  // now this thing show an undefined values

// function calulationCartValues (...num){
//     return num
// }

// const values = calulationCartValues(376, 764, 7689)

// console.log(values);

// const user = {
//     name: "iphone",
//     price: 76590
// }

function basicneed (anyone){
    console.log(`This Gadget name is ${anyone.name} and price is ${anyone.price}`);
}

// basicneed(user);

basicneed({
    name:"macabook",
    price: 250499
})

const myNewArray = [559, 986, 786, 7558]

function gettingNewthings(arr){
    return arr[3]
}

console.log(gettingNewthings([7488, 844, 7587, "uryr"]));