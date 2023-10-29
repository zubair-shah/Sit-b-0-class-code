/* alert("hello world!");
 alert("hello world!"); 
  */
//   alert("hello world!"); 
// console.log('zubair')

// prompt("plz enter your name");

// console.log(Math.random() * 100);
// console.log(Math.floor(Math.random() * 100));

// let , var , const 

// let name = "zubair";
// let name1 = 'zubair';
// let name2 = '32'
// let name3 = `shaikh`;
// let funActivity = "Let's learn JavaScript";
// let question = 'Do you want to learn JavaScript? "Yes!"';
// console.log(funActivity);

// let number = 34;
// let first_Name = "John";
// console.log(name)
// console.log(number);


// let PI = 3.142;
//  console.log(PI);
//  PI = 40;
//  console.log(PI)


// let language = "JavaScript";
// let message = `Let's learn ${language}`;
// console.log(message);

// let str3 = "New \nline.";
// let str4 = "I'm containing a backslash: \\!";
// console.log(str3);
// console.log(str4);

// let number = 34;
// let number1 = -34;
// let number2 = 3.4;


// let doYouHaveLaptop  = true;
// console.log(doYouHaveLaptop);

// let str1 = "JavaScript is fun!";
// let str2 = "JavaScript is fun!";
// console.log("These two strings are the same:", str1 === str2);

// let str1 = Symbol("JavaScript is fun!");
// let str2 = Symbol("JavaScript is fun!");

// console.log("These two strings are the same:", str1 === str2);

// let unassigned = undefined;

// console.log(unassigned);

// let terribleThingToDo = null;
// let lastName;
// console.log("Same undefined:", lastName === terribleThingToDo);

// basic data type in javascript

// let a = "zubair" //'zubair' or `zubair` string
// let b =  43 // 3.5 , -21  number datatype
// let booleanData =  true // false  boolean datatype
// let bigIntData =  232323043953n //bigInt datatype
// let unDefinedData = undefined // undefined datatype
// let nullData = null // null datatype
// let symbolData = Symbol('I am unique') // symbol datatype


// console.log("str", typeof nullData);
// console.log("nr", typeof nr);
// console.log("bigNr", typeof bigNr);
// console.log("bool", typeof bool);
// console.log("sym", typeof sym);
// console.log("undef", typeof undef);
// console.log("unknown", typeof unknown);


// let nr1 = 2;
// let nr2 = "2";
// console.log(typeof String(nr1))
 

// let nr1 = 2;
// let nr2 = Number("this");
// let nr3 = String(2323);
// console.log(nr2)

// console.log(typeof nr3);

// console.log(nr1 + nr2);


// let num = Boolean(0);
// let num1 = Boolean(null);
// let num2 = Boolean(undefined);
// let num3 = Boolean(2);
// let num4 = Boolean(nr2);
// let num5 = Boolean('zubair');   //true

// console.log(num)
// console.log(num1);
// console.log(num2);
// console.log(num3);
// console.log(num4);
// console.log(num5);

// let str1 = "Laurence";
// let str2 = "Svekis";
// let val1 = undefined;
// let val2 = null;
// let myNum = 1000;
// console.log(typeof val2)
// let nr1 = 2;
// let nr2 =6;
// let result1 = nr1 ** nr2;
// console.log(result1)


// let a = 8;
// console.log(a)
// a--;
// console.log(a)

// let nr = 10;
// console.log(nr--);
// console.log(--nr);

// let nr1 = 4;
// let nr2 = 5;
// let nr3 = 2;
// console.log(nr1++ + ++nr2 * nr3++);
// let b = 10 
// let a  = 3;
// console.log(a)
//  a *= 5;
//  console.log(a)
// console.log(b%a);

// let a = 5;
// let b = 10;
// let c = 15;
//  a += b;


//  let x = 5;
//  let y = "5";
//  console.log(x == y);
//  console.log(x === y); // recomended

//  let x = 5;
//  let y = "5";
//  console.log(x != y);
//  console.log(x !== y);

//  let age  = 18;
//  let gender  = "female";

//  console.log(age >= 18 && gender === "male");

//  console.log(age >= 18 || gender === "male");
// let x = false;
// console.log(!x);

// let a = "Hello";
// a = prompt("world");
// console.log(a);

// let result = 3 + 4 * 2 / 8; 
// console.log(result)


// let firstNum = 5324234234;
// let secondNum = 10;
// firstNum++;
// secondNum--;
// let total = ++firstNum + secondNum;
// console.log(total);
// let total2 = 2 + 10 / 5 + total--;
// console.log(total2);


// let input  = +prompt("Enter your number in miles")
// console.log("Your number in kilometer: " , input*1.60934);

// let std1Data = ["zubair" , 23 , 232323, "shamim"];
// let array = new Array("purple", "green", "yellow");
// var arr3 = new Array(10);  // [empty ,empty ,empty ,empty ,empty ,empty ,empty ,empty ,empty]
//  var arr4 = [10];   // [10]
// console.log(arr3);
// console.log(arr4);

// let arr = ["hi there", 5, "zubair"];

//  arr[0] = "new value"
// console.log(arr);

// let arr1 = ["Milk", "Bread", "Apples"];
// console.log(arr1.length);
// arr1[1] = "Bananas"
// arr1.push("mango" , "Berry")   // add from last
//  console.log(arr1);
//  arr1.pop();   // remove from last
// arr1.shift();   // remove from first
// arr1.unshift("mango" , "Berry")   // add from first
//  console.log(arr1);

//  let arr5 = [1, 2, 3];
//  let arr6 = [4, 5, 6];


//  let arr7 = arr5.concat(arr6);
//  console.log(arr7);


// let arr1 = ["Milk", "Bread", "Apples" , "banana" , "Mango"];

// arr1.splice(0 , 1 , "Bananas" , "Eggs")
// console.log(arr1.indexOf("Apples"));

// let names = ["James", "Alicia", "Fatiha", "Maria", "Bert"];
// names.sort();
// console.log(names);
// names.reverse();
// console.log(names);


// let weight  = +prompt("Enter your weight in kg:");
// let height  = +prompt("Enter your height in Feet:");
// let heightInMeter = height * 0.304;
// let BMI = weight / heightInMeter**2;
// console.log(BMI)


// let arrOfArrays2 = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// console.log(arrOfArrays2[0][2]);
// console.log(arrOfArrays2[2][2]);
// console.log(arrOfArrays2[1][0]);
// console.log(arrOfArrays2[2][1]);
// let arrOfArrays3 = [
//   [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ],
//   [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ],
//   [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ],
// ];



// arrOfArrays3[1][1][1] = 11

// console.log(typeof arrOfArrays3)
// let arr = [1,2,3]
// let newArray = [arr ,arr ,arr]

// let dog = {
//   dogName: "tommy",
//   weight: 2.4,
//   color: "brown",
//   breed: "chihuahua",
//   age: 3,
//   burglarBiter: true,

// };

// console.log(dog["breed"]);
// console.log(dog.dogName);

// dog.forSale = true;
// console.log(dog);

// dog.age = 13;
//  console.log(dog)


// let company = {
//   companyName: "Healthy Candy",
//   activity: "food manufacturing",
//   address: {
//     street: "2nd street",
//     number: "123",
//     zipcode: "33116",
//     city: "Miami",
//     state: "Florida",
//   },
//   yearOfEstablishment: 2021,
// };
// company.zubair.city = "karachi"


// let company1 = {
//   companyName: "Healthy Candy",
//   activities: [
//     "food manufacturing",
//     "improving kids' health",
//     "manufacturing toys",
//   ],
//   address: {
//     street: "2nd street",
//     number: "123",
//     zipcode: "33116",
//     city: "Miami",
//     state: "Florida",
//   },
//   yearOfEstablishment: 2021,
// };

// console.log(company1.activities[1]);
// let addresses = [
//   {
//     street: "2nd street",
//     number: "123",
//     zipcode: "33116",
//     city: "Miami",
//     state: "Florida",
//   },
//   {
//     street: "1st West avenue",
//     number: "5",
//     zipcode: "75001",
//     city: "Addison",
//     state: "Texas",
//   },
// ];
// console.log(addresses[1].number)


// let company = {
//   companyName: "Healthy Candy",
//   activities: [
//     "food manufacturing",
//     "improving kids' health",
//     "manufacturing toys",
//   ],
//   address: [
//     {
//       street: "2nd street",
//       number: "123",
//       zipcode: "33116",
//       city: "Miami",
//       state: "Florida",
//     },
//     {
//       street: "1st West avenue",
//       number: "5",
//       zipcode: "75001",
//       city: "Addison",
//       state: "Texas",
//     },
//   ],
//   yearOfEstablishment: 2021,
// };
// company.address[1].city = "karachi"
// console.log(company);


// let people = {
//   friends: []
// }
// let friend1 = {
//   firstName:"shahbaz",
//   lastName:"Niaz",
//   ID:12
// }
// let friend2 = {
//   firstName: "hamza",
//   lastName: "owais",
//   ID: 13,
// };
// let friend3 = {
//   firstName: "umar",
//   lastName: "khan",
//   ID: 14,
// };

// people.friends.push(friend1 , friend2 , friend3);
// console.log(people);


// const myArr1 = [1, 3, 5, 6, 8, 9, 15];
// console.log(myArr1.indexOf(0));
// console.log(myArr1.indexOf(3));

// const myArr3 = [3, 6, 8, 9, 3, 55, 553, 434];
// myArr3.sort();
// myArr3.length = 0;
// console.log(myArr3);

// let age = +prompt("enter your age")
// let gender = prompt("enter your Gender");

// if (age < 18) {
//   console.log("We're very sorry, but you can't get in under 18");
// } else if(gender === "female"){
//     console.log("Female is not allowed ");
// }
// else {
//   console.log("Welcome!");
// }

// let hobby = "dancing";
// if (hobby == "coding") {
//   console.log("** I love coding too! **");
// } else {
//   console.log("** Can you teach me that? **");
// }

// let a = false;
// console.log(a)
// if(a){
//   console.log("hi")
// }

// if (!a) {
//   console.log("Bi");
// }

// let age = 19;
// let cost = 0;
// let message;
// if (age < 3) {
//   cost = 0;
//   message = "Access is free under three.";
// } else if (age >= 3 && age < 12) {
//   cost = 5;
//   message = "With the child discount, the fee is 5 dollars";
// } else if (age >= 12 || age < 14) {
//   cost = 10;
//   message = "A regular ticket costs 10 dollars.";
// } else {
//   cost = 7;
//   message = "A ticket is 7 dollars.";
// }
// console.log(message);
// console.log("Your Total cost " + cost);
// let age = 17;
// let access = age < 18 ? "denied" : age == 18 ? "strictly allowed" : "allowed";
// console.log(access);

let activity = "zubair";

// if (activity === "Get up") {
//   console.log("It is 6:30AM");
// } else if (activity === "Breakfast") {
//   console.log("It is 7:00AM");
// } else if (activity === "Drive to work") {
//   console.log("It is 8:00AM");
// } else if (activity === "Lunch") {
//   console.log("It is 12.00PM");
// } else if (activity === "Drive home") {
//   console.log("It is 5:00PM");
// } else if (activity === "Dinner") {
//   console.log("It is 6:30PM");
// } 


// switch (activity) {
//   case "Get up":
//     console.log("It is 6:30AM");
//     break;
//   case "Breakfast":
//     console.log("It is 7:00AM");
//     break;
//   case "Drive to work":
//     console.log("It is 8:00AM");
//     break;
//   case "Lunch":
//     console.log("It is 12:00PM");
//     break;
//   case "Drive home":
//     console.log("It is 5:00PM");
//     break;
//   case "Dinner":
//     console.log("It is 6:30PM");
//     break;
//   default:
//     console.log("i am default")
//     // code to be executed when no cases match
//     break;
// }

// const randomNumber = Math.floor(Math.random() * 6);
// console.log(randomNumber)
// let answer = "Something went wrong";
// let question = prompt("Ask me anything");
// switch (randomNumber) {
//   case 0:
//     answer = "It will work out";
//     break;
//   case 1:
//     answer = "Maybe, maybe not";
//     break;
//   case 2:
//     answer = "Probably not";
//     break;
//   case 3:
//     answer = "Highly likely";
//     break;
//   default:
//     answer = "I don't know about that";
// }
// let output = "You asked me " + question + ". I think that " + answer;
// console.log(output);

// const userNames = ["Mike", "John", "Larry"];
// const userInput = "John";
// let htmlOutput = "";
// if (userNames.indexOf(userInput) > -1) {
//  htmlOutput = "Welcome, that is a user";
// } else {
//  htmlOutput = "Denied, not a user ";
// }
// console.log(htmlOutput + ": " + userInput);

// let val = 100;
// let message =
//   val > 100 ? `${val} was greater than 100` : `${val} was less than 100`;
// let check = val % 2 ? `Odd` : `Even`;
// check = `${val} is ${check}`; q q q
// console.log(check);
// let number = 10;

// let loopStart  = true;
// while (loopStart) {
//   let max = 10;
//   let randomNumber = Math.floor(Math.random() * max) + 1;
//   console.log(randomNumber);
//   let userInput = +prompt("Enter a number between 1 to 10");
//   if (userInput === randomNumber) {
//     console.log("congrats");
//     loopStart = false;
//   } else {
//     console.log("try again");
//      loopStart = false;
//   }
// }

// let number = 0;
// let step = 5
// do {
//   console.log("hello", number)
//   number += step;
// } while (number < 100);



// for (let i = 0; i < 10; i++) {

//   console.log(i);

// }


// let myWork = [];
// for (let i = 1; i <= 10; i++) {
//   let checkNum = i % 2;
//   let obj = {
//     name: `Lesson ${i}`,
//     status: checkNum === 1 ? true : false,
//   }
//   myWork.push(obj)
// }

// console.log(myWork)


// let arrOfArrays = [];

// for (let i = 0; i < 3; i++) {
//  //i = 3
//   arrOfArrays.push([]);
//   for (let j = 0; j < 2; j++) {
//       //j=2
//     arrOfArrays[i].push(j);

//   }


// }
// console.table(arrOfArrays);

// let names = ["Chantal", "John", "Maxime", "Bobbi", "Jair"];
// for (let i = 0; i < names.length; i++) {
//   console.log(names[i]);
// }


// let names = ["Chantal", "John", "Maxime", "Bobbi", "Jair"];
// for (let i = 0; i < names.length; i++) {
//   names[i] = "hello " + names[i];
// }


// console.log(names);

// let names = ["Chantal", "John", "Maxime", "Bobbi", "Jair"];
// for (let i = 0; i < names.length; i++) {
//   if (names[i].startsWith("M")) {
//      names[i] = null;
//     continue;
//   }
//   names[i] = "hello " + names[i];
// }
// console.log(names);

// let names = ["Chantal", "John", "Maxime", "Bobbi", "Jair"];
// for (let name of names) {
//   console.log(name);
// }


let car = {
  model: "Golf",
  make: "Volkswagen",
  year: 1999,
  color: "black",
};
for (let prop in car) {
    console.log(prop)
}
