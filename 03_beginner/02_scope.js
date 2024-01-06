
// var c = 56
// if(true){
//     let a = 10
//     const b = 23
//     var c = 45
// }

    // console.log(a);
    // console.log(b);
    // console.log(c);

    function one(){
    const username = "James"
    
    function two () {
    const website = "Instagram"
    console.log(username) ;
    }  
    // console. log (website) ;  
    two ()
}

// one()


if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
    const website = " youtube"
    // console. log (username + website);
    }
    // console. log (website);       
}
// console.log(username);



console.log(addone(5)); // we called hoisting this type of things

function addone(num){
    return num + 1
}



addtwo(5) //Cannot access 'addtwo' before initialization
const addtwo = function(num){
    return num+2
}

