/*let name="priyanshu"
let age=17
let banana="banana"
console.log(name);
console.log(age);
console.log(banana);
let huxn_webdev10="priyanshu"
huxn_webdev10="huxn"
console.log(huxn_webdev10);*/



// 1. Create variable name (name) & store your name.
// 2. Create variable name (what Do whatDoYouWannaBecomeInYourLife) & store "programmer"
// 3. Create variable name (gender) & store your gender.
// 4. Create variable name (twitterHandle) & store your twitter handle.
// 5. Finally log all variables to the console.

/*var name = "Priyanshu";
var whatDoYouWannaBecomeInYourLife="programmer";
var gender="male";
var twitterHandle="priyanshukandriX";
console.log(name , whatDoYouWannaBecomeInYourLife ,gender , twitterHandle)

let num = 2;
console.log(typeof num)

let num1 = 2;
console.log(num)*/

//basic maths
//console.log(2+2)
//console.log(2-2)
//console.log(2*2)
//console.log(2/2)
//console.log(2**2)
//console.log(2%2)

/*let counter = 10;
counter++;
counter--;
counter++;
console.log(counter)*/

//1. Create Variable name (firstFavNum) & store your favorite number.
// 2. Create Variable name (secondFavNum) & store your second fav number.
// 3. Add (firstFavNum & secondFav Number).
// 4. Subtract (firstFavNum & secondFav Number).
// 5. Multiply (firstFavNum & secondFav Number).
// 6. Divided (firstFavNum & secondFav Number).
// 7. Check (firstFavNum Mod secondFav Number)
// 8. Check the power of (firstFavNum)

/*
var firstFavNum = 04;
var secondFavNum = 09;
console.log(firstFavNum + secondFavNum);
console.log(firstFavNum - secondFavNum);
console.log(firstFavNum * secondFavNum);
console.log(firstFavNum / secondFavNum);
console.log(firstFavNum % secondFavNum);
console.log(firstFavNum ** secondFavNum);*/

//boolean
//let notdefined = false;
//console.log(notdefined);

// 1. Create variable name (isJsProgramming Language) & store true as a value.
// 2. Create variable name (isJsHard) & store false as a value.
// 3. Create variable name (favNumb) & store your favorite number inside.
// 4. Now Add fav Number with the value of undefined.

/*var isJsProgrammingLanguage = true;
console.log(isJsProgrammingLanguage)
var isJsHard = false;
console.log(isJsHard)
var favnumb = 14;
console.log(favnumb + undefined);*/



// --------------------------------------------
//relational operators
// > greater than
// < less than
// >= gretaer equals to
// <= less than equals to

// console.log(10>10);  //false
// console.log(10<10);  //false
// console.log(10>=10);  // true
// console.log(10<=10);  // true
// --------------------------------------------


//equality operators
//===strict equality (type + value)
//!===strict non-equality operators (type + value)
//==lose equality operator (value)
//!==lose not equality operator (value)

// console.log(10===10); //true
// console.log(10==="10"); //false
// console.log(10===20); //false
// console.log(10!==10);//false
// console.log(10!=="10");//true
// console.log(10=="10");//true
// console.log(10!="10"); //false


//----------------------------------------------------------
// 1. Create variable name (firstFav Numb) & store your favorite number.
// 2. Create variable name (secondFavNumb) & store second fav Number.
// 3. Check (firstFav Numb is greater then secondFavNumb)
// 4. Check (firstFavNumb is less then secondFavNumb)
//5. Check (firstFav Numb is greater then & equal to secondFavNumb)
// 6. Check (firstFav Numb is less then & equal to secondFav Numb)
// 7. Check (firstFav Numb is equal to secondFavNumb) using strict equality operator.
// 8. Check (firstFav Numb is equal to second FavNumb) using loose equality operator.
// 9. Check (firstFavNumb is not equal to secondFavNumb) using strict non-equality operator.
// 10. Check is (firstFavNumb is not equal to secondFavNumb) using loose non-equality operator.

// let firstFavNumb = 4;
// let secondFavNumb = 9;
// console.log(firstFavNumb > secondFavNumb);
// console.log(firstFavNumb < secondFavNumb);
// console.log(firstFavNumb >= secondFavNumb);
// console.log(firstFavNumb <= secondFavNumb);
// console.log(firstFavNumb === secondFavNumb);
// console.log(firstFavNumb == secondFavNumb);
// console.log(firstFavNumb !== secondFavNumb);
// console.log(firstFavNumb != secondFavNumb);
//------------------------------------------------------------


//strings
let firstname = "   HuXnYouTuber   ";
let secondname = `webdev`;
// console.log(firstname + " " + secondname)

// 1. concatination
// let fullname = firstname.concat(secondname)
// console.log(fullname)

// 2. append
// firstname += " something else"
// console.log(firstname)

// 3. length
// console.log(firstname.length)

// 4.cases
// console.log(firstname.toLowerCase())
// console.log(firstname.toUpperCase())

// 5. slice
// console.log(firstname.slice(0,7))

// 6.split & join
// console.log(firstname.split("").join("-"));

// 7. includes
// console.log(firstname.includes("H"));

// 8.Trim
// console.log(firstname.trim());

// 1. Create variable name (favActorFirstName) & store your fav Actor name.
// 2. Create variable name (favActorLastName) & store the last name of (FA).
// 3. Create variable name (fullName) & concatenate (favActorFirstName, favActorLast Name)
// 4. Create variable name (uppercase) & CAPITALIZE your fav actor name.
// 5. Create a variable name (message) & store My favorite Actor Is (favActor Name) & say something about your fav actor name should be in UPPERCASE.
// 6. Now append this message to the (message variable) his best show is Silicon Valley`.
// 7. Now Log your Message.

// var favActorFirstName = "Shah Rukh";
// var favActorLastName = " Khan";
// var fullname = favActorFirstName.concat(favActorLastName);
// console.log(fullname);
// var uppercase = fullname.toUpperCase();
// console.log(uppercase);
// var message = "My favorite Actor Is " + fullname.toUpperCase() + " & say something about your fav actor";
// console.log(message);
// message += " his best show was in silicon valley"
// console.log(message);


//-----------------------------------------------------------


//type conversion

// 1. convert string to number
// var money = "50"
// console.log(typeof money) ;//string
// money = parseInt(money);
// console.log(typeof money); //number
// var money = "50"
// money = +money;
// console.log(typeof money); //number
// var money = "50"
// money = Number(money);
// console.log(typeof money); //number


// 2. number to string
// var money = 50
// console.log(money);
// console.log(typeof money);
// money = money.toString();
// console.log(money);
// console.log(typeof money);
// var money = 50;
// money = String(money);
// console.log(typeof money);

//3. string to decimal
let money = "50.35";
money = parseFloat(money)
console.log(typeof money)