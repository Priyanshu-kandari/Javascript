// The "for...in" loop in JavaScript is used to iterate over the enumerable properties of an object. It is a way to loop through the keys (property names) of an object.
// for (let key in object) {...}


let person = {
    name: "huxn",
    age:19,
    gender:"male"
}

for (let keys in person){
    console.log(keys, person[keys]);
}

let list = ["one","two","three"]
for (let index in list){
    console.log(index,list[index]);
}


// Iterate over object & log the property and the value of that
// object using for in loop.
const object = { a: 1, b: 2, c: 3};
for(let keys in object){
    console.log(`${keys}: ${object[keys]}`);
}