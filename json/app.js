const person ={
    name:"john doe",
    age:20,
    email:"js@gmail",
    issubscribed: true,
    hobbies: ["cooking","rapping"],
    address: {
        "city":"new york",
        "idk":true
    }
}

const jsonobj=JSON.stringify(person)

console.log(jsonobj)
console.log(JSON.parse(jsonobj))