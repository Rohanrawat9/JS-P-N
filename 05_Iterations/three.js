const values = ["jimmy", "vicky", "mohan", "Jake", "Johnny"]

values.forEach(function(val){
    // console.log(val);
})


values.forEach((item, index, arr)=> {
    // console.log(item, index, arr);
})

function name(item){
    console.log(item);
}

values.forEach(name);