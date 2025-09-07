//the rest parameter syntax allows a function to accept an indefinite number of arguments.
//as an arrya, providing a way to reprersent variadic functions in javascript.

// function user(...userdata){
//     console.log(userdata);
// }
// user("Priyanshu",17,"student","programmer")

// function user(x,...userdata){
//     console.log(x);
//     console.log(userdata);
// }
// user("Priyanshu",17,"student","programmer")

//create a function which will take unlimited amount of parameters & log all of that params to the console

function unlimited(...x){
    console.log(x);
}

unlimited("priyanshu",
    "kunal",
    "jatin",
    20
    ,34
)