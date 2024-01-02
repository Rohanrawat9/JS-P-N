// Singleton


// object user
// Creating a symbol
const mySymbol = Symbol('description');


const jsuser = {
    name : "Rohan",
    "Full name": "Rohan Rawat",     // This work only on square brackets.
    age : 24,
    [mySymbol]: 'This is a symbol property',
    Location: "Shivrajpur",
    email: "rrq657@gmail.com",
    isLoggedIn: true,
    LastLoggeninDays: ["Monday", "Tuesday"]
}

// console.log(jsuser.Location)
// console.log(jsuser["name"])
// console.log(jsuser["Full name"]) 
// // Accessing the symbol property
// console.log(jsuser[mySymbol]);   // Output: This is a symbol property

jsuser.email = "Rohan@gpt.com"
// object.freeze(jsuser);  // this function shows that now object is freeze we can't change anything now on
jsuser.email = "rohan@micro.com"
console.log(jsuser)


jsuser.greeting = function (){
    console.log("Hello bhaai kaisa hai")
}

jsuser.greeting2 = function(){
    console.log(`Hello brother ${this.name} this side`)
}

console.log(jsuser.greeting())
console.log(jsuser.greeting2())
