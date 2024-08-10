let arr = new Array();
console.log(arr);

const arrr = [];
console.log(arrr);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
alert(`numbers: ${numbers}`);

const countries = ["Ghana", "Albenia", "Japan"];
alert(`countries:${countries}`);

const people = [
  { name: "john", age: "16" },
  { name: "kofi", age: "24" },
  { name: "Yaw", age: "43" },
  { name: "john", age: "16" },
];

console.log(people.length);

let js = "javascript";
console.log(js.split(" ,"));

const schools = [
  "New world",
  "High Academy",
  "Presec",
  "Accra Academy",
  "KNUST",
  "GloryVel",
];
let mySchool = schools[0];

const fruits = ["banana", "mango", "orange", "lemon", "cashew"];
let firstFruit = fruits[0];
let secondFruit = fruits[1];
let thirdFruit = fruits[2];
let lastFruit = fruits.length - 1;
let last = fruits[lastFruit];
alert(`${firstFruit} ${thirdFruit} ${last}`);

const webTech = [
  "HTML",
  "CSS",
  "javascript",
  "React",
  "Redux",
  "Node",
  "Node",
  "MangoDB",
];

console.log(webTech);
console.log(webTech[0]);
console.log(webTech[1]);
console.log(webTech[2]);
console.log(webTech[3]);
console.log(webTech[4]);
console.log(webTech[5]);
console.log(webTech[6]);

let lastTech = webTech.length - 1;
let lasst = webTech[lastTech];
console.log(lasst);

const numb = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numb[0] = 43;
numb[3] = 22;
numb[5] = 66;

console.log(numb);

let llast = numb.length - 1;
lastlast = numb[llast];
console.log(lastlast);

numb[llast] = 99;
console.log(numb);

const teacher = ["Asante", "Amponsah", "Takyi", "Kusi"];
teacher.push("Poku");
console.log(teacher);

console.log(teacher.pop());

console.log(teacher.shift());

teacher.unshift("Tanu", "Gyamfi", "Ato");

console.log(teacher);

const firstList = [1, 2, 3];
const secondList = [4, 5, 6];
const thirdlist = `${firstList} ${secondList}`;
console.log(thirdlist);

// Exercise

const Animals = [];

const ages = [2, 6, 5, 6, 5, 4];

let arrayLenght = ages.length;
console.log(arrayLenght);

console.log(ages[0]);

console.log(ages.shift());

console.log(ages.pop());

// The middle element are two
let mid1 = ages.length / 2 - 1;
let mid2 = ages.length / 2;

let midAges = [ages[mid1], ages[mid2]];
console.log(midAges);
