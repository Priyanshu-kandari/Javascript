// function declaration
// function greet(){
//     console.log("hello from a function")
// }

//calling function
// greet();
// greet();
// greet();

// function sayhello(name){
//     console.log(`hello ${name}`);
//     console.log("hello" + " "+ name);
// }

// sayhello("priyanshu")
// sayhello("alex")

// return --> function
// function add(a,b){
//     return a+b;
// }

// const res = add(10,20);
// console.log(res)


// 1. Create function name (myFunction)
// 2. This function will take 2 parameters
// 3. Any number we pass as argument it will multiply that number.
// 4. As argument pass your favorite numbers.
// 5. log the value.

// function myfunction(a,b){
//     return a*b;
// }

// const c = myfunction(4,9)
// console.log(c)

//---------------------------------------------------------

//function declaration
// function declare(name){
//     console.log(`hello ${name} i am declare function`)
// }
// declare("Priyanshu");

//function expression
// const expression = function(name){
//     console.log(`hii ${name} i am function expression`)
// }

// expression("Priyanshu")

//-----------------------------------------------------------

// when we pass a function as a argument to other function that function is known as callback function.

// function showcallfunc(fn){
//     const value = 10;
//     fn(value)
// }

// showcallfunc(function(value){
//     console.log(value);
// });

// function greet(name, cb){
//     console.log(`hello ${name}`);
//     cb()
// }



// greet("priyanshu",function callme(){
//     console.log("i am callback function")
// });

// 1. Create a function name (showCallFunc)
// 2. pass "fn" as parameter
// 3. inside that function, create variable which holdes value of 10
// 4. pass that value to the callback function
// 5. Now create callback function & print that value which you
//pass as parameter to the callback func.

// function showCallFunc(fn){
//     var a = 10;
//     fn(a)
// }

// showCallFunc(function(x){
//     console.log(x)
// })


//------------------------------------------------------------

// scope in javascript refers to the current context of code, which determines the accessibility of variable of javascript.
//there are two types of scopes in javascript.
//global scope variable are those declared outside of a block.
//local scope variable are those declared inside of a block

// let textmessage = "hii"; //global
// console.log(textmessage); //hii

// {
//     let mymessage = "namaste"//local
//     console.log(mymessage);//namaste
//     console.log(textmessage);//hii
// }
// console.log(mymessage); //error

const person ={
    name: "huxn",
    age: 19,
    greet: function(){
        return `hello , my name is ${person.name} & i am ${person.age} year old.`;
    }
    };

console.log(person.greet())
