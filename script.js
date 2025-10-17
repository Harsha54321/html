//task1
//var
console.log("1. Variables and Data types:");
var num = 10;
console.log(num);
document.writeln(num);
//let
let first = 20;
console.log(first);
//const
const hello = "hello";
console.log(hello);
console.log("");

//2.operators
console.log("2. Operators:");
let num1 = 10;
let num2 = 20;
if (num1 == 10 && num2 == 20) {
  if (num1 < num2) {
    console.log("num1+num2=", num1 + num2);
    console.log("num1*num2=", num1 * num2);
    console.log(num1 + "<" + num2 + " " + "is", num1 < num2);
  }
}
console.log("");

//3.comparsion and logical
console.log("3.Comparsion and Logical:");
let a = 5;
let b = 5;
console.log(a + "==" + b + " " + "is", a == b);
console.log(a + "===" + b + " " + "is", a === b);
console.log(
  "(" + a + "==" + b + ")&&(" + a + "!==" + b + ")" + " " + "is",
  a == b && a !== b
);
console.log("");

//4.Conditinal Statement
console.log("4.Conditinal Statement:");
let number = 5;
if (number > 0) {
  console.log("Positive");
} else if (number == 0) {
  console.log("zero");
} else {
  console.log("Negative");
}
console.log("");

//5.Switch Case
console.log("5.Switch Case:");
let trafficLight = "yellow";
switch (trafficLight) {
  case "red":
    console.log("Stop");
    break;
  case "yellow":
    console.log("Wait");
    break;
  case "green":
    console.log("Go");
    break;
}
console.log("");

// 6.Loops
console.log("6.Loops (7th table):");
for (let i = 1; i <= 10; i++) {
  console.log(i + "*7=" + 7 * i);
}
console.log("");

//7.Functions
console.log("7.Functions:");
function add(num3, num4) {
  let num5 = num3 + num4;
  console.log(num5);
}
add(200, 106);
console.log("");

//8.Array Manipulation
console.log("8.Array Manipulation:");
let arr = ["Apple", "Banana", "Orange", "Guava", "Mango"];
arr.push("Cherry");
console.log("Add one fruit:", arr);
arr.shift();
console.log("Remove first fruit:", arr);
console.log("Updated array:", arr);
console.log("");

//9.Array Method
console.log("9.Array Method:");
let arr1 = [1, 2, 3, 4, 5];
console.log(arr1);
arr1.splice(2, 0, 6, 7);
console.log("by using splice inserted two values:", arr1);
let arr2 = arr1.slice(0, 3);
console.log(
  "by using slice copied the first three elements into new array:",
  arr2
);
console.log("");

//10.Destructuring & Spread Operator
console.log("10.Destructuring & Spread Operator:");
let arr3 = [10, 20, 30, 40, 50];
console.log(arr3);
console.log("after destructuring and first three values into separate:");
let [a1, a2, a3, a4, a5] = arr3;
console.log(a1);
console.log(a2);
console.log(a3);
let arr4 = [1, 2];
let arr5 = [3, 4];
console.log("before merge:");
console.log("arr4=", arr4);
console.log("arr5=", arr5);
console.log("after merge:");
let totalArr = [...arr4, ...arr5];
console.log(totalArr);

console.clear();

let n = [10, 20, 30, 40];
let val = 0;
for (let i = 0; i < n.length; i++) {
  val += n[i];
}
console.log(val);

// let date1 = new Date();

// let year = prompt("Enter your birthday year:");

// let month = prompt("Enter your birthday month:");

// let date = prompt("Enter your birthday date:");
// console.log(date1);
// date1.setFullYear(year);
// console.log(year);
// date1.setMonth(month - 1);
// console.log(month);
// date1.setDate(date);
// console.log(date);
// let dayDate = date1.getDay();
// console.log(dayDate);
// let dayArr = [
//   "sunday",
//   "monday",
//   "tuesday",
//   "wednesday",
//   "thursday",
//   "friday",
//   "saturday",
// ];
// alert(dayArr[dayDate]);

console.clear();

console.log(Math.abs(-150));

console.log(Math.sqrt(361));

console.log(Math.cbrt(343));

console.log(Math.pow(2, 5));

console.log(Math.min(10, 40, 0, -8, -5));

console.log(Math.max(10, 40, 0, -8, -5));

console.log(Math.random(5));

console.log(Math.ceil(5.1));

console.log(Math.floor(4.2));

console.log(Math.round(4.5));
console.log(Math.round(4.2));

console.log(Math.trunc(5.4));
