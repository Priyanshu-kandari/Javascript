// The spread operator is a new addition to the set of operators in JavaScript ES6.
// It takes in an iterable (e.g an array) and expands it into individual elements.
// The spread operator is commonly used to make shallow copies of JS objects.
// Using this operator makes the code concise and enhances its readability.

//function, array ,objects

// function giveMe4(a,b,c,d){
//     console.log("a",a);
//     console.log("b",b);
//     console.log("c",c);
//     console.log("d",d);
// }

// const colors = ["red","green","blue","teal"]
// giveMe4(...colors);

// const strnums = ["one","two","three"]
// const morestrnums = ["four","five","six"]
// const concat = [...strnums,...morestrnums]
// console.log(concat);

// let people = ["kumar","alex","HuXn","Jordan"];
// const allpeps = ["kumar",...people,"john"];
// console.log(allpeps)

// const obj1 = {x:1,y:2}
// const obj2 ={z:3}
// const obj3 ={...obj1,...obj2}
// console.log(obj3);

// let person = {
//     name: "priyanshu",
//     lastname: "kandari",
//     age:17,
// }

// const clone = {...person, work:"student",location:"delhi"};
// console.log(clone);

//------------------------------------------------------------

//1. make a clone of arr and arr2 by using spread operator
// let arr = [1,2,3];
// let arr2 = [4,5];
// const clone1 = [...arr,...arr2]
// console.log(clone1);


//2. make a clone of user object using spread operator
// const user = {
//     name: "jen",
//     age:22,
// };
// const clone2 = {...user};
// console.log(clone2);
