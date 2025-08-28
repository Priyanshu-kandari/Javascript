//conditional statements

//if(condition){...}
// else if (condition){....}
// else{...}

// let a = 20;
// let b = 20;
// if(a>b) {
//     console.log("a is greater than b")
// }
// else if(a<b){
//     console.log("b is greater than a")
// }
// else{
//     console.log("both are equal")
// }


// let time = 12;
// let greetings;

// if(time < 12){
//     greetings = "good morning"
//     console.log(greetings)
// }
// else if(time == 12){
//     greetings = "good noon"
//     console.log(greetings)
// }
// else if( time>12){
//     greetings = "its after 12"
//     console.log(greetings)
// }

// 1. Create variable name (password) store nothing.
// 2. If password is equal to 8 print "Welcome"
// 3. If password is less then or equal to 8 print "Password is too short"
// 4. If password is greater then or equal to 8 print "Too Long Password" & "Password should be 8 characters"
// 5. If all fails print "Please provide a password."

// let password = 1;
// if (password === 8){
//     console.log(welcome)
// }
// else if(password<8){
//     console.log("Password is too short")
// }
// else if(password>8){
//     console.log("Too Long Password")
//     console.log("Password should be 8 characters")
// }
// else{
//     console.log("Please provide a password.")
// }

//----------------------------------------------------------

//switch statements
// 1. Create variable name (fruit) & store "banana".
// 2. If case is "Banana" print "Banana is good!"
// 3. If case is "Orange" print "I am not a fan of orange."
// 4. If case is "Apple" print "How you like them apples?"
// 5. default "I have never heard of that fruit."

// let fruit = "Orange"
// switch(fruit){
//     case "banana":
//         console.log("Banana is good!");
//         break;
    
//     case "Orange":
//         console.log("I am not a fan of orange.");
//         break;
    
//     case "apple":{
//         console.log("How you like them apples?");
//         break;
//     }
//     default:
//         console.log("I have never heard of that fruit.")
    
// }

//------------------------------------------------------------


//for loop
// for(start; end ; change){
//     code block to be exec
// }

// for(let i = 0; i<11 ;i++){
//     console.log("hello",i)
//     for(let j = 0; j<5 ;j++){
//         console.log("namaste",j)
//     }
// }


//print your name & numbers from 0 through 1000
// for(let i=0; i<1001; i++){
//     console.log("priyanshu" , i)
// }

//while loop
//while(condition){
//  code block to be executed} 

// let i = 1;
// while(i<=5){
//     console.log("hello world", i)
//     i++
// }


//print "your name" 100 time using while loop itteration should start from 10
// let i = 10
// while(i<101){
//     console.log("priyanshu",i)
//     i++
// }

// print "your name" 400 time using do-while loop itteration should start from 20
// let i = 20
// do{
//     console.log("priyanshu",i)
//     i++
// }
// while(i<421);

//logical operator
// 1. logical AND(&&)
// true if both the operands value are true, else evalutes to false

// const a = 10;
// const b = true;
// const c = false;

// console.log(a>2 && b) //true
// console.log(a>2 && c) //false

// // 2. logical OR (||)
// // true if either of the opeerands are true, false if both are false

// console.log(b||c);


// // 3. logical NOT (!)
// //true if the operands is fals eand vice versa
// console.log(!b);
// console.log(!c);

// let password = "priyanshu"
// if(password.length == 8 || password.includes("pri")){
//     console.log("valid password")
// }
// else{
//     console.log("invalid")
// }

