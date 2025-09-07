// function user(name,age,work){
//     return {
//         name,
//         age,
//         work,
//         intro:()=>{
//             console.log(`my name is ${name} i am ${age} years old ${work}`);
//         }
//     }
// }

// const Priyanshu = user("Priyanshu","17","Student");
// console.log(Priyanshu.intro());


//-----------------------------------------------------------
// REFACTOR ES5 CODE TO ES6 (Enhanced Object Literals)
// ES5 code
// var a = 1,
// b = 2,
// c = 3,
// obj = {
// a: a,
// b: b,
// c: c,
// };

// function variable(a,b,c){
//     return{
//     a,
//     b,
//     c,
// }
// }

// console.log(variable(1,2,3));


// ES5 code
// var lib = {
// sum: function (a, b) {
// return a + b;
// },
// mult: function (a, b) {
// return a * b;
// },
// };
// console.log(lib.sum(2, 3)); // 5
// console.log(lib.mult(2, 3)); // 6


// const op = {
//     sum: (a,b)=> a+b,
//     multi: (a,b)=> a*b,
// }
// console.log(op.sum(5,6));