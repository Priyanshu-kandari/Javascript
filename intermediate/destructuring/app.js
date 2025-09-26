// const foo = ["one","two","three"]; 

// const [a,b,c] = foo
// console.log(a);
// console.log(b);
// console.log(c);

// let x,y;
// [x=5,y=7] = ["first","second"];
// console.log(y);
// --------------------------------------------------------------------------


//function destructuring

// function f(){
//     return [1,2]
// }
// let a,b
// [a,b]=f()
// console.log(a,b);

// function f(){
//     return [1,2,3]
// }
// let a,b
// [a, ,b]=f()
// console.log(a,b);

//assigning the rest of an array to a variable
// const[a,...b] = ["one","two","three",true,12,["one"]]
// console.log(a);
// console.log(b);



// ----------------------------------------------------------------------------------------------------------------------------------------------------
// const colors = ["red", "green", "blue", "yellow", "orange"];
// Your task is to use array destructuring to extract the first three colors from the colors array and assign them to separate variables named color1, color2, and color3.
// After extracting the colors, log each variable's value to the console.
// const [color1,color2,color3] = colors;
// console.log(color1);
// console.log(color2);
// console.log(color3);


//object destructuring------------------------------------------------------
// const student = {name:"Priyanshu",position:"first"};
// const{name} = student;
// console.log(name);


// Your task is to use object destructuring to extract the name, age, and country properties from the person object.
// After extracting the properties, log each variable's value to the console.

// const person = {
// name: "John Doe",
// age: 30,
// gender: "male",
// country: "USA",
// };

// const {name,age,country} = person
// console.log(name);
// console.log(age);
// console.log(country);



//renaming variable
// const num = {x:100,y:200};
// const {x:first,y:second} = num;
// console.log(first);
// console.log(second);

// const person = {
// name: "John Doe",
// age: 30,
// gender: "male",
// country: "USA",
// };

// const {name:personname,age:personage,country:personcountry} = person
// console.log(personname);
// console.log(personage);
// console.log(personcountry);

//object destructuring and rest operator
// let{a,b,...rest} = {a:100, b:200, c:300, d:400}
// console.log(a);
// console.log(b);
// console.log(rest);

// const person = {
// name: "John Doe",
// age: 30,
// gender: "male",
// country: "USA",
// };

// function printpersoninfo({name,age,gender}){
//     console.log(name);
//     console.log(age);
//     console.log(gender);
// }

// printpersoninfo(person)

// let options = {
//     items: ["item1","item2"]
// };

// function showmenu({
//     title = "untitled",
//     width = 100,
//     height = 200,
//     items: [item1,item2]
// }){
//     console.log(title,width,height);
//     console.log(item1);
//     console.log(item2);
// }

// showmenu(options)

// const songs = [
// { name: "Lucky You", singer: "Joyner", duration: 4.34},
// { name: "Just like you", singer: "NF", duration: 3.23 },
// { name: "Humble singer", singer: "Kendrick Lamar", duration: 2.33},
// { name: "Old Town Road", singer: "Lil Nas X", duration: 1.43},
// { name: "Cold SHolder", singer: "Central Cee", duration: 5.23 },
// ];

// const [,,{singer}] = songs
// console.log(singer);

const data = {
user: {
id: 123,
name: "John Doe",
age: 30,
email: "john.doe@example.com",
address: {
city: "New York",
country: "USA",
},
hobbies: ["Reading", "Painting", "Cooking"],
scores: {
math: 95,
science: 88,
history: 75,
},
},
products: [
{ id: 1, name: "Laptop", price: 1000},]}

const{
    user:{
        name,
        age,
        email,
        address:{city,country},
        hobbies,
        scores:{math,science,history},
        
    },
    products:[product1]
} = data

console.log(name);
console.log(age);
console.log(product1);