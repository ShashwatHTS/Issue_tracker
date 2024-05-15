````javaScript
console.log("hi")

var foo = "bar"
~~~javaScript
console.log(foo)

var thisVar = 'first value'
var thatVar = 'second value'
~~~javaScript
console.log("thisVar: ",thisVar,"\nthatVar: ",thatVar)

var greet = "Hello", who = "World"
~~~javaScript
console.log("%s, %s!", greet, who)

~~~javaScript
console.log(document.body) ~~~javaScript
get the body no document here

~~~javaScript
Using the DOM API

~~~javaScript
document.getElementById("hello").innerHTML = "Hello, World!"
~~~javaScript
document.getElementById("hello").textContent = "Hello, World!"

~~~javaScript
var element = document.createElement("p")
~~~javaScript
element.textContent = "Hello, World!"
~~~javaScript
document.body.appendChild(element)

~~~javaScript
Using window.alert()

~~~javaScript
window.alert(message)

~~~javaScript
alert(message)

~~~javaScript
alert("Hello, World!")

~~~javaScript
Using window.prompt()

~~~javaScript
prompt(text,[default])

~~~javaScript
text:the text displayed in the prompt box.
~~~javaScript
default:the default value of the input field(optional)

~~~javaScript
Using window.confirm()

~~~javaScript
result = window.confirm(message)

~~~javaScript
if (window.confirm("Are you sure?")) {

~~~javaScript
 ~~~javaScript
do something

~~~javaScript
 deleteItem(itemId);

~~~javaScript
}

~~~javaScript
JS Variable

~~~javaScript
1. Using a Variable

var num = 1
num = 2
~~~javaScript
console.log(num)

num = num + 5
num = num - 6
var num2 = num \* 10
var num3 = num2 / num

~~~javaScript
console.log(num, num2, num3)

~~~javaScript
Type of Variable

var myInt = 12 ~~~javaScript
32-bit number(from -2,147,483,648 to 2,147,483,647)
var myFloat = 12.5 ~~~javaScript
32-bit floating point number (decimal)
var myDouble = 12.5 ~~~javaScript
64-bit floating point number (decimal)
var myString = "Hello World" ~~~javaScript
String
var myBoolean = true ~~~javaScript
Boolean
var myLong = 123456789 ~~~javaScript
64-bit number(from -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807)

var NaN_Ex = 0 / 0 ~~~javaScript
NaN: Division by zero is not possible.

var myNotANumber = NaN ~~~javaScript
NaN

var notDefined; ~~~javaScript
Undefined: we have not assigned any value to this variable

var myNull = null; ~~~javaScript
null: empty value

~~~javaScript
Arrays and Objects

var myArr = [] ~~~javaScript
empty array

var myObj = {} ~~~javaScript
empty object

var favoriteFruits = ["apple", "banana", "grape"]
var carsInParkingLot = ["bmw", "audi", "mercedes"]
var employees = ["john", "peter", "sarah"]
var primeNumbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]
var randomVariables = [2, "hello", true, null, undefined, NaN, myArr, myObj, 2.3]

myObject = {}
~~~javaScript
john = { firstname: "John", lastname: "Doe" }
~~~javaScript
billy = { firstname: "Billy", lastname: "Doe" }
~~~javaScript
console.log(john.firstname)

~~~javaScript
Built-in constructors

~~~javaScript
1.null

null == undefined ~~~javaScript
true
null === undefined ~~~javaScript
false

~~~javaScript
careful: the type of null is object

typeof null ~~~javaScript
object

var a = null
a === null ~~~javaScript
true

~~~javaScript
2. Testing for NaN using isNaN()

isNaN(NaN) ~~~javaScript
true
isNaN(123) ~~~javaScript
false: 123 is a number
isNaN(-2e-4) ~~~javaScript
false: -2e-4 is a number (-0.0002) in scientific notation
isNaN(Infinity) ~~~javaScript
false: Infinity is a number
isNaN(true) ~~~javaScript
false: true is a number converted to 1, which is a number
isNaN(false) ~~~javaScript
false: false is a number converted to 0, which is a number
isNaN("") ~~~javaScript
false: "" is a string, converted to 0, which is a number
isNaN(" ") ~~~javaScript
false: "" is a string, converted to 0, which is a number
isNaN("25.3") ~~~javaScript
false: "25.3" is a string, converted to 25.3, which is a number
isNaN("Infinity") ~~~javaScript
false: "Infinity" is a string, converted to Infinity, which is a number
isNaN(new Date) ~~~javaScript
false: Date object, converted to milliseconds since epoch
isNaN("10$") ~~~javaScript
true : conversion fails, the dollar sign is not a number
isNaN("hello") ~~~javaScript
true : conversion fails, the string "hello" is not a number
isNaN(undefined) ~~~javaScript
true: converted to NaN
isNaN() ~~~javaScript
true: converted to NaN(implicitly undefined)
isNaN(function () { }) ~~~javaScript
true: conversion fails
isNaN({}) ~~~javaScript
true: conversion fails
isNaN([]) ~~~javaScript
true: conversion fails
isNaN([1, 2, 3]) ~~~javaScript
true: conversion fails

console.log(typeof (undefined === 'undefined')) ~~~javaScript
'boolean'
console.log(typeof (null === 'object')) ~~~javaScript
'boolean'

console.log("b" _ 3) ~~~javaScript
NaN
console.log("cde" - "e") ~~~javaScript
NaN
console.log([1, 2, 3] _ 2) ~~~javaScript
NaN
console.log([2] \* [3]) ~~~javaScript
6
console.log("a" + "b") ~~~javaScript
ab
console.log(0 / 0) ~~~javaScript
NaN

console.log(Math.floor("a")) ~~~javaScript
NaN

console.log(Math.sqrt(-1)); ~~~javaScript
NaN

console.timeStamp()

~~~javaScript
till page 26

~~~javaScript
console.table(['hello','world'])

~~~javaScript
console.table({foo:'bar', baz:'qux'})

var personArr = [
{
name: 'John',
age: 30,
city: 'New York'
},
{
name: 'John',
age: 30,
city: 'New York'
}
]

console.table(personArr, ['name', 'city'])

var o1 = 1, o2 = '2', o3 = ''
console.count(o1)

console.count(42.3)

console.count('42.3')

console.count(console.constructor)
console.count(function () { });
console.count(Object);

var fn1 = function myfn() { };
~~~javaScript
console.count(fn1);
~~~javaScript
console.count(Number);

var myObject = {
"foo": {
"bar": "data"
}
};
~~~javaScript
console.dir(myObject);

~~~javaScript
Debugging with assertions - console.assert()

~~~javaScript
Writes an error message to the console if the assertion is false. Otherwise, if the assertion is true, this does nothing

console.assert('one' === 1);
console.log('hello')

const data = [
{
id: 1,
title: "The Lord of the Rings",
publicationDate: "1954-07-29",
author: "J. R. R. Tolkien",
genres: [
"fantasy",
"high-fantasy",
"adventure",
"fiction",
"novels",
"literature",
],
hasMovieAdaptation: true,
pages: 1216,
translations: {
spanish: "El señor de los anillos",
chinese: "魔戒",
french: "Le Seigneur des anneaux",
},
reviews: {
goodreads: {
rating: 4.52,
ratingsCount: 630994,
reviewsCount: 13417,
},
librarything: {
rating: 4.53,
ratingsCount: 47166,
reviewsCount: 452,
},
},
},
{
id: 2,
title: "The Cyberiad",
publicationDate: "1965-01-01",
author: "Stanislaw Lem",
genres: [
"science fiction",
"humor",
"speculative fiction",
"short stories",
"fantasy",
],
hasMovieAdaptation: false,
pages: 295,
translations: {},
reviews: {
goodreads: {
rating: 4.16,
ratingsCount: 11663,
reviewsCount: 812,
},
librarything: {
rating: 4.13,
ratingsCount: 2434,
reviewsCount: 0,
},
},
},
{
id: 3,
title: "Dune",
publicationDate: "1965-01-01",
author: "Frank Herbert",
genres: ["science fiction", "novel", "adventure"],
hasMovieAdaptation: false,
pages: 658,
translations: {
spanish: "",
},
reviews: {
goodreads: {
rating: 4.25,
ratingsCount: 1142893,
reviewsCount: 49701,
},
},
},
{
id: 4,
title: "Harry Potter and the Philosopher's Stone",
publicationDate: "1997-06-26",
author: "J. K. Rowling",
genres: ["fantasy", "adventure"],
hasMovieAdaptation: true,
pages: 223,
translations: {
spanish: "Harry Potter y la piedra filosofal",
korean: "해리 포터와 마법사의 돌",
bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
portuguese: "Harry Potter e a Pedra Filosofal",
},
reviews: {
goodreads: {
rating: 4.47,
ratingsCount: 8910059,
reviewsCount: 140625,
},
librarything: {
rating: 4.29,
ratingsCount: 120941,
reviewsCount: 1960,
},
},
},
{
id: 5,
title: "A Game of Thrones",
publicationDate: "1996-08-01",
author: "George R. R. Martin",
genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
hasMovieAdaptation: true,
pages: 835,
translations: {
korean: "왕좌의 게임",
polish: "Gra o tron",
portuguese: "A Guerra dos Tronos",
spanish: "Juego de tronos",
},
reviews: {
goodreads: {
rating: 4.44,
ratingsCount: 2295233,
reviewsCount: 59058,
},
librarything: {
rating: 4.36,
ratingsCount: 38358,
reviewsCount: 1095,
},
},
},
];

function getBooks() {
return data;
}

function getBook(id) {
return data.find((d) => d.id === id)
}

console.log(getBook(1))

~~~javaScript
Destructuring

const book = getBook(3);
book;

~~~javaScript
const title = book.title;
~~~javaScript
const author = book.author;

const { title, author, pages, publicationDate, genres, hasMovieAdaptation } = book;

console.log(title, author, pages)

~~~javaScript
const primaryGenere = genres[0];
~~~javaScript
const secondaryGenere = genres[1];

const [primaryGenere, secondaryGenere, ...otherGenres] = genres;

~~~javaScript
console.log(primaryGenere, secondaryGenere, otherGenres)

~~~javaScript
function getYear(str){

~~~javaScript
 return str.split("-")[0];

~~~javaScript
}
const getYear = (str) => str.split("-")[0];

console.log(getYear(publicationDate));

console.log(true && "some string")
console.log(false && "some string")
console.log("johnas" && "some string");

~~~javaScript
falsy: 0,"",undefined,null,NaN

console.log(true || "some string")
console.log(false || "some string")

~~~javaScript
console.log(book.reviews.librarything.reviewsCount);

const x = [1, 2, 3, 4, 5].map((e) => e \* 2)
x;

const arr = [3, 7, 1, 9, 6];
arr
const withAffectArr = arr.slice().sort((a, b) => a - b)
withAffectArr
arr
const sorted = arr.sort((a, b) => a - b);
arr
sorted

~~~javaScript
async function getTodos() {

~~~javaScript
 const res = await fetch("https://jsonplaceholder.typicode.com/todos")

~~~javaScript
 const data = await res.json();

~~~javaScript
 console.log(data);

~~~javaScript
 return data;

~~~javaScript
}

~~~javaScript
const todos = getTodos();
~~~javaScript
todos

class Rectangle {
constructor(height, width) {
this.height = height;
this.width = width;
}

~~~javaScript
Getter
get area() {
return this.calcArea();
}
~~~javaScript
Method
calcArea() {
return this.height \* this.width;
}
}

const square = new Rectangle(20, 30);

console.log(square.area);

function main() {
console.log('A');
setTimeout(
function print() { console.log('B'); }
, 0);
console.log('C');
}
main();

console.log(0.1 + 0.2 === 0.3);

function User(name, age) {
this.name = name;
this.age = age;

this.getProfile = function () {
~~~javaScript
Outer function context
console.log(this.constructor.name); ~~~javaScript
User
return () => {
~~~javaScript
Inner function context
console.log(this.constructor.name);
console.log("I'm " + this.name + ", " + this.age + " yrs old");
};
}
}

let user = new User('John', 25);
let profile = user.getProfile();
console.log(profile);

function User1(name, age) {
this.name = name;
this.age = age;

this.getProfile = function () {
~~~javaScript
Outer function context
console.log(this.constructor.name); ~~~javaScript
User
return function () {
console.log(this.constructor.name);
console.log("I'm " + this.name + ", " + this.age + " yrs old");
};
}
}

var user1 = new User1('John', 25);
var profile1 = user1.getProfile();
console.log(profile1)
profile(); //I'm undefined, undefined yrs old

var y = 1;
if (function f() { }) {
y += typeof f;
}
console.log(y);

function Vehicle(model, color, year, country) {
this.model = model;
this.color = color;
this.year = year;
this.country = country;
}
var car = new Vehicle("Honda", "white", "2010", "UK");
console.log(car);

function sayHi() {
console.log(name);
~~~javaScript
console.log(age);
var name = 'Lydia';
let age = 21;
}

sayHi();
console.log('hi')

~~~javaScript
for (var i = 0; i < 3; i++) {

~~~javaScript
 setTimeout(() => console.log(i), 1); ~~~javaScript
333

~~~javaScript
}

~~~javaScript
for (let i = 0; i < 3; i++) {

~~~javaScript
 setTimeout(() => console.log(i), 1); ~~~javaScript
012

~~~javaScript
}

~~~javaScript
const shape = {

~~~javaScript
 radius: 10,

~~~javaScript
 diameter() {

~~~javaScript
 return this.radius \* 2;

~~~javaScript
 },

~~~javaScript
 perimeter: () => 2 _ Math.PI _ this.radius,

~~~javaScript
};

~~~javaScript
console.log(shape.diameter()); ~~~javaScript
20
~~~javaScript
console.log(shape.perimeter()); ~~~javaScript
62.83185307179586

let c = { greeting: 'Hey!' };
let d;

d = c;
c.greeting = 'Hello';
console.log(d.greeting);

let ab = 3;
let b = new Number(3);
let cs = 3;

console.log(ab == b);
console.log(ab === b);
console.log(b === cs);

class Chameleon {
static colorChange(newColor) {
this.newColor = newColor;
return this.newColor;
}

constructor({ newColor = 'green' } = {}) {
this.newColor = newColor;
}
}

const freddie = new Chameleon({ newColor: 'purple' });
~~~javaScript
console.log(freddie.colorChange('orange')); ~~~javaScript
freddie.colorChange() is not a function

let greeting;
greetign = {};
console.log(greetign); ~~~javaScript
{}

function bark() {
console.log('Woof!');
}

bark.animal = 'dog';

function Person12(firstName, lastName) {
this.firstName = firstName;
this.lastName = lastName;
}

const member = new Person12('Lydia', 'Hallie');
~~~javaScript
Person.getFullName = function() {

~~~javaScript
 return `${this.firstName} ${this.lastName}`;

~~~javaScript
};

~~~javaScript
console.log(member.getFullName()); ~~~javaScript
typeError

~~~javaScript
function Person123(firstName, lastName) {

~~~javaScript
 this.firstName = firstName;

~~~javaScript
 this.lastName = lastName;

~~~javaScript
}

~~~javaScript
const lydia = new Person123('Lydia', 'Hallie');
~~~javaScript
~~~javaScript
const sarah = Person123('Sarah', 'Smith');

~~~javaScript
console.log(lydia);
~~~javaScript
console.log(sarah); ~~~javaScript
: Person123 {firstName: "Lydia", lastName: "Hallie"} and undefined

~~~javaScript
function checkAge(data) {

~~~javaScript
 if (data === { age: 18 }) {

~~~javaScript
 console.log('You are an adult!');

~~~javaScript
 } else if (data == { age: 18 }) {

~~~javaScript
 console.log('You are still an adult.');

~~~javaScript
 } else {

~~~javaScript
 console.log(`Hmm.. You don't have an age I guess`);

~~~javaScript
 }

~~~javaScript
}

~~~javaScript
checkAge({ age: 18 }); ~~~javaScript
false third condition

~~~javaScript
function getAge(...args) {

~~~javaScript
 console.log(typeof args); ~~~javaScript
object

~~~javaScript
}

~~~javaScript
getAge(21);

~~~javaScript
const bca = {};
~~~javaScript
const bda = { key: 'bda' };
~~~javaScript
const cab = { key: 'cab' };

~~~javaScript
bca[bda] = 123;
~~~javaScript
bca[cab] = 456;

~~~javaScript
console.log(a[b]); ~~~javaScript
456

const foo123 = () => console.log('First');
const bar = () => setTimeout(() => console.log('Second'));
const baz = () => console.log('Third');

~~~javaScript
bar();
~~~javaScript
foo123();
~~~javaScript
baz();

~~~javaScript
const person = { name: 'Lydia' };

~~~javaScript
function sayHi(age) {

~~~javaScript
 return `${this.name} is ${age}`;

~~~javaScript
}

~~~javaScript
console.log(sayHi.call(person, 21));
~~~javaScript
console.log(sayHi.bind(person, 21)); ~~~javaScript
Lydia is 21 function

~~~javaScript
function sayHi() {

~~~javaScript
 return (() => 0)();

~~~javaScript
}

~~~javaScript
console.log(typeof sayHi()); ~~~javaScript
number

/\*

this :- keyword which is used in a function, refer to the object it belong to it makes function reusable by letting you decide the object value.
this value is determined entirely by how the function is called.

closure :- A closure is a function that has access to the parent scope, even after the parent function has closed.

callback hell :- When a function calls another function that calls another function that calls another function, it is called callback hell.

callback :- A callback is a function that is passed as an argument to another function.

higher order function :- A higher order function is a function that takes another function as an argument or returns a function.

promise :- A promise is an object that may produce a value sometime in the future. with either a resolved value or a rejected value.
they have 3 states: pending, fulfilled, and rejected.

pending - initial state, neither fulfilled nor rejected
fulfilled - meaning the operation completed successfully
rejected - meaning the operation failed

async/await :- The async keyword is used before a function that returns a promise.

async/await advantage over promise.then/catch :- The advantage of async/await is that it makes it easier to write asynchronous code.

asynchronous function:- A function that is not executed immediately. function is executed when it is called. it run parallel to the event loop.

event loop:- An event loop is an event-based virtual machine that allows JavaScript code to run in the background.

javascript:- JavaScript is a high-level, interpreted programming language. It is used to create dynamic and interactive websites. JavaScript is also used to create web applications.

Data -type in javascript:- string, number, boolean, null, undefined, symbol, object.
symbol::- A symbol is a unique and immutable data type. example: let id = Symbol('id'); output: Symbol(id)

null vs undefined:- null is a special value that represents the intentional absence of a value. undefined is a variable that has not been assigned a value.

window vs document:- window is the global object in a browser. document is a property of the window object.

global object:- The global object is the object that is available to all scripts in a web page.
window object:- The window object is the object that is available to all scripts in a web page.

json & its common operation:- JSON is a lightweight format for storing and transporting data. It is often used in web applications. JSON is often used in web APIs.
common operations on json:- parse, stringify and toJSON methods. example: JSON.parse(data); JSON.stringify(data); data.toJSON();

IIFE:- Immediately Invoked Function Expression. It is a function that runs as soon as it is defined. It is used to create a private scope. syntax: (function(){})();

first class function:- A function that can be passed as an argument or returned as a value.
first order function:- A function that doesn't accept or return any value.
higher order function:- A function that takes another function as an argument or returns a function.

hoisting :- Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.

temporal dead zone:- A temporal dead zone is a period of time during which a variable or function is inaccessible. It is created when a variable or function is declared but not assigned.

scope:- A scope is a region of a program where a variable is accessible. It is created when a variable is declared.

Event flow:- An event flow is a series of events that occur in a specific order. It is created when an event is triggered. example: button.click(); explaination: when button is clicked it will trigger click event.

event:- An event is an action that occurs in a specific time.

event bubbling:- An event bubbling is a way of propagating an event from an element to its parent.
event capturing:- An event capturing is a way of propagating an event from an element to its child.
stop propagation:- A stop propagation is a way of stopping the propagation of an event.

event delegation:- An event delegation is a way of delegating an event from an element to its child. example with explanation: button.addEventListener('click', function(e){});

slice:- A slice is a part of an array. It is created when an array is sliced. example: array.slice(0, 2);
splice:- A splice is a part of an array. It is created when an array is spliced. example: array.splice(0, 2);

splice vs slice:- splice is used to remove elements from an array. slice is used to create a copy of an array.

why js is called single threaded :- JavaScript is called single threaded because it is executed one line at a time. it has one call stack and one memory stack.

\*/

~~~javaScript
Explanation of closure

```javascript
const get_palindrom = (str) => {
return str === str.split('').reverse().join('');
}

console.log(get_palindrom("abcba"))

const get_revese = (str) => {
return str.split('').reverse().join('');
}

console.log(get_revese("abca"))

const get_Even = (num) => {
return num.filter((n) => n % 2 === 0);
}

console.log(get_Even([1, 2, 3, 4, 5]))

const get_factorial = (num) => {
if (num === 0 || num === 1) return 1
return num \* get_factorial(num - 1)
}

console.log(get_factorial(5))

const get_prime = (num) => {
if (num <= 1) { return false }
for (let i = 2; i < num; i++) {
if (num % i === 0) { return false }
}
return true
}

console.log(get_prime(5))

const get_fibonacci_sum = (num) => {
if (num <= 1) { return 1 }
return get_fibonacci_sum(num - 1) + get_fibonacci_sum(num - 2)
}

console.log(get_fibonacci_sum(5))

const get_fibonacci_sequence = (num) => {
const arr = [0, 1];
for (let i = 2; i <= num; i++) {
arr[i] = arr[i - 1] + arr[i - 2];
}
return arr;
}

console.log(get_fibonacci_sequence(5))

const get_sorted_array_key_based = (arr, key) => {
return arr.sort((a, b) => a[key] - b[key]);
}

console.log(get_sorted_array_key_based([1, 2, 3, 4, 5], 3))

const get_char_count = (str) => {
const obj = {};
for (let i = 0; i < str.length; i++) {
obj[str[i]] = (obj[str[i]] || 0) + 1;
}
return obj;
}

console.log(get_char_count("hitesh"))

const getRemoveDuplicates = (arr) => {
return arr.filter((item, index) => arr.indexOf(item) === index);
}

console.log(getRemoveDuplicates([1, 4, 2, 3, 4, 5, 6, 7, 9, 8, 9, 9, 9, 9]))

const get_largest_difference = (arr) => {
~~~javaScript
return Math.max(...arr) - Math.min(...arr);
let max = arr[0];
let min = arr[0];
for (let i = 0; i < arr.length; i++) {
if (arr[i] < min) {
min = arr[i];
}
if (arr[i] > max) {
max = arr[i];
}
}
return max - min;
}

console.log(get_largest_difference([1, 4, 2, 3, 4, 5, 6, 7, 9, 8, 9, 9, 9, 9]))

const get_flat = (arr) => {
return arr.flat(2);
}

console.log(get_flat([[1, 2, [4, 5], 3], [4, 5, 6], [7, 8, 9]]))

const get_anagram = (str1, str2) => {
return str1.split('').sort().join('') === str2.split('').sort().join('');
}

console.log(get_anagram("hitesh", "teshhi"))
~~~javascript
const get_sum_arr = (arr) => {
return arr.reduce((a, b) => a + b, 0);
}

console.log(get_sum_arr([1, 2, 3, 4, 5]))

const get_merge_two_arr = (arr1, arr2) => {
return arr1.concat(arr2);
}
~~~javascript
const find_missing_num = (arr) => {
let sum = 0;
for (let i = 0; i < arr.length; i++) {
sum += arr[i];
}
return sum - arr.length \* (arr.length + 1) / 2;
}

console.log(find_missing_num([1, 2, 4, 5, 6]))
```

```javascript
const find_duplicate_num = (arr) => {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]]) {
      return arr[i];
    } else {
      obj[arr[i]] = true;
    }
  }
};

console.log(find_duplicate_num([1, 2, 3, 4, 5, 6, 7, 5]));
```
````
