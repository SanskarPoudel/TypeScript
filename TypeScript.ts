// 1) Lets,const var

//let

let age = 40;

//we cannot update above variable age  to a string in ts but we can do it in js

// we cannot do age="fourty"

//but we can update it to number
age = 30;

// 2) Function
//we can define what type of argument that should be passed in the function
const circle = (diameter: number) => {
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
let character: string;
let age2: number;
let isLoggedIn: boolean;

//Array
let namess: string[]; //This just declares the array of string named namess and only strings can be initialized into this variable

namess = ["sanskar", "helloS"];

let rollNumbers: number[]; //Like above, this declears rollNumbers as an array of numbers only and only numbers can be initalized inside that array at the phase of initalization later on

//Mixed  / UNION TYPES

let mixerrd: (string | number | boolean)[]; //declaring array as string/number/boolean

mixerrd = ["ffdsaf", 1, "dga", 2, false];

let mixed_Ex: string | number; //declaring mixed_Ex as as string/number
mixed_Ex = "hello";
mixed_Ex = 123;

//Object
let namesssss: object; //declaring namesssss as object
namesssss = {
  name: "sansdkfa",
  rollno: 23,
};

let person_DEtails: {
  ///Declaring object which should contain specific properties with specific types
  name: string;
  roll: number;
  isTopper: boolean;
};

person_DEtails = {
  name: "sanskar",
  roll: 1,
  isTopper: false,
};

//DYNAMIC --> ANY
let ageee: any = 22; //TS to js haha
ageee = "twenty";
ageee = true;
ageee = {
  name: "ega",
  roll: 23,
};

let mixedArr: any[] = []; //array accepting all types of data just like normal JS

let hello: {
  name: any;
  roll: any;
};

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

let greet: Function; //declaring that greet will be function

greet = () => {
  console.log("Arrow function");
};

const func = (a: number, b: string) => {
  console.log(`${a} is a roll no. of ${b}`);
};

func(10, "sanskar");

//OPTION parameter in function like c in below function

const funcex = (a: number, b: number, c?: number | string) => {
  console.log(`${a} and ${b} and ${c ? c : "haha"}`);
};

funcex(1, 1);

//default value if argument is not passed

const def = (
  a: number,
  b: number,
  c: number | string = "user didn't pass this argument"
) => {
  console.log(`${a}, ${b}, ${c}`);
};

def(1, 3);

const minus = (a: number, b: number): number => {
  //:number after the parameters states that the return type will be number
  return a + b;
};

let result = minus(10, 3); //results type will be the return type of minus function

//Type Aliases
type StringOrNum = string | number;

type objectWithName = {
  //we can use type of obj to be  objectWithName in order to make the object to be exactly look like this
  name: string;
  roll: number;
};

const userDetails = (id: StringOrNum, details: objectWithName) => {
  console.log(
    `${id} is id , ${details.name} is name and ${details.roll} is roll number`
  );
};

userDetails(1, { name: "Sanskar", roll: 11 });

//Function Signatures

//

//eg 1

let details: (a: string, b: string) => void; //function which doesn't return anything

details = (name: string, roll: string) => {
  console.log(name, roll);
};

details("sanskar", "22");

//eg 2
let calc: (a: number, b: number) => number;

calc = (firstNumber: number, secondNumber: number) => {
  return firstNumber + secondNumber;
};

console.log(calc(1, 2));

//eg 3
let userDetailss: (obj: { name: string; age: number }) => void;
userDetailss = (detail: { name: string; age: number }) => {
  console.log(`${detail.name}is name and ${detail.age} is age`);
};

userDetailss({ name: "Sanskar", age: 22 });
