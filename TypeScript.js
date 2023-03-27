"use strict";
// 1) Lets,const var
//let
let age = 40;
//we cannot update above variable age  to a string in ts but we can do it in js
// we cannot do age="fourty"
//but we can update it to number
age = 30;
// 2) Function
//we can define what type of argument that should be passed in the function
const circle = (diameter) => {
    return diameter * Math.PI;
};
//Now we cannot call the function like circle("helo") which we can do in js, now we should pass number as a parameter otherwise it will throw error
circle(4);
// 3) Arrays
const names = ["dflka", "faskodf", "fsdg"];
//When we declare an array with only one types of data at first, we cannot add any other types of  data in it
names.push("trs");
//But we can declare mixed type of array at first and it will let us add any types of data we want
const mixed = [1, "hello", 2, "hi", true];
mixed.push(2);
mixed.push("hello");
// 4) Objects
let obj = {
    name: "sanskar",
    age: 20,
    roll: 33,
    address: "fdasgsadg",
};
//we cannot change the type of value of the key inside the object
//We cannot add extra properties in the object after declaration like obj.lastname = 'poudel'
//But we can override whole object and create new object but with same properties and same data type of properties
//And obviously we know that is only for let not for const object
obj = {
    name: "hellp",
    age: 55,
    roll: 234,
    address: "dgssdg",
};
//EXPLICIT TYPES
let character;
let age2;
let isLoggedIn;
//Array
let namess; //This just declares the array of string named namess and only strings can be initialized into this variable
namess = ["sanskar", "helloS"];
let rollNumbers; //Like above, this declears rollNumbers as an array of numbers only and only numbers can be initalized inside that array at the phase of initalization later on
//Mixed  / UNION TYPES
let mixerrd; //declaring array as string/number/boolean
mixerrd = ["ffdsaf", 1, "dga", 2, false];
let mixed_Ex; //declaring mixed_Ex as as string/number
mixed_Ex = "hello";
mixed_Ex = 123;
//Object
let namesssss; //declaring namesssss as object
namesssss = {
    name: "sansdkfa",
    rollno: 23,
};
let person_DEtails;
person_DEtails = {
    name: "sanskar",
    roll: 1,
    isTopper: false,
};
//DYNAMIC --> ANY
let ageee = 22; //TS to js haha
ageee = "twenty";
ageee = true;
ageee = {
    name: "ega",
    roll: 23,
};
let mixedArr = []; //array accepting all types of data just like normal JS
let hello;
hello = {
    name: 23123,
    roll: "fasdfsad",
};
console.log(hello);
//FUNCTIONS
const greet33 = () => {
    console.log("Hello world");
};
greet33();
let greet; //declaring that greet will be function
greet = () => {
    console.log("Arrow function");
};
const func = (a, b) => {
    console.log(`${a} is a roll no. of ${b}`);
};
func(10, "sanskar");
//OPTION parameter in function like c in below function
const funcex = (a, b, c) => {
    console.log(`${a} and ${b} and ${c ? c : "haha"}`);
};
funcex(1, 1);
//default value if argument is not passed
const def = (a, b, c = "user didn't pass this argument") => {
    console.log(`${a}, ${b}, ${c}`);
};
def(1, 3);
