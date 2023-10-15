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


let arr1 = ["Milk", "Bread", "Apples" , "banana" , "Mango"];

// arr1.splice(0 , 1 , "Bananas" , "Eggs")
console.log(arr1.indexOf("Apples"));

let names = ["James", "Alicia", "Fatiha", "Maria", "Bert"];
names.sort();
console.log(names);
names.reverse();
console.log(names);


