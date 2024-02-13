const arr = [1, 2, 3, 4, 5 ];

for(const num of arr){
    // console.log(num);
}

//  Maps

const map = new Map();
map.set('In', "India")
map.set('Us', "United states of america")
map.set('Fr', "France")

// console.log(map);

for(const [key, val] of map){
    console.log(key, ':-', val);
}