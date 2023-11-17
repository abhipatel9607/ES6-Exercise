"use strict";

// Use the let keyword in an example function
function useLetKeyword() {
	let name = "Peter";
	name = "Peter Parker"; //We can reassign variable if we define with let keyword
}

// Use the const keyword in an example function
function useConstKeyword() {
	const name = "Peter"; // We can't reassign variable if we define with const keyword
}

// Create an arrow function that finds the square of a number
const getSquareNumber = (number) => {
	return number * number;
};

// Create an arrow function that adds two numbers
const addNumbers = (a, b) => {
	return a + b;
};

// Create a multi-line string and then split the string into the corresponding lines and print the lines
const multiLineString = `This is line one.
  This is line two.
  This is line three.`;

const lines = multiLineString.split("\n").map((line) => line.trim());

lines.forEach((line, index) => {
	console.log(`Line ${index + 1}: ${line}`);
});

// Create a function that calculates the area of a circle. If the radius of the circle is not provided assume that the default radius is 5. Use the JavaScript default parameter feature to implement the function
function calculateCircleArea(radius = 5) {
	const area = Math.PI * radius * radius;
	return area;
}

// Create a string that prints the name and location of the person in below format:
// "Harry Potter is located in London."
let person = {
	name: "Harry Potter",
	location: "London",
};

let personString = `${person.name} is located in ${person.location}.`;
console.log(personString);

// Show an example where an array is destructured using destructuring assignment
let cityPreference = ["Bengaluru", "Hydrabad", "Delhi", "Mumbai"];
let [first, second, third, fourth] = cityPreference;

// Show an example where an object is destructured using destructuring assignment in the function body
let favouriteMovie = {
	title: "Veer-Zaara",
	actor: "Shah Rukh Khan",
	actress: "Priti Zinta",
};

function getFavMovieDetail(favouriteMovie) {
	const { title, actor, actress } = favouriteMovie;
	console.log(`Movie: ${title}, Actor: ${actor}, Actress: ${actress}`);
}
getFavMovieDetail(favouriteMovie);

// Show an example where a function argument which is an object is destructured inside the parantheses of the function
let student = {
	firstName: "Peter",
	lastName: "Parker",
	age: 24,
};

function printPersonDetails({ firstName, lastName, age }) {
	console.log(`${firstName} ${lastName} is ${age} years old.`);
}
printPersonDetails(student);

// Show an example where enhanced object literals is used.
function createPerson(name, age) {
	return {
		name,
		age,
		sayHi() {
			console.log(`Hi, my name is ${this.name} and I'm ${this.age} years old.`);
		},
	};
}
const personOne = createPerson("Abhishek", 26);
personOne.sayHi();

// Create a function sum that takes any number of numbers as arguments and calculates the sum of the input numbers using the rest parameter syntax
function sumRest(...numbers) {
	return numbers.reduce((acc, num) => acc + num, 0);
}
console.log(sumRest(1, 2, 3, 4, 5));

// Use the spread syntax to expand an array of numbers and pass the elements of the array as arguments to the sum function created in the previous example
function sumSpread(...numbers) {
	return numbers.reduce((acc, num) => acc + num, 0);
}
const numbersArray = [1, 2, 3, 4, 5];
console.log(sumSpread(...numbersArray));

// Use the for..of loop to iterate through all values in an array
const fruits = ["apple", "banana", "orange", "grape"];
for (const fruit of fruits) {
	console.log(fruit);
}

// Iterate through all keys of an object using Object.keys
// Iterate through all values of an object using Object.values
// Iterate through all the key / value pairs of an object using Object.entries
const myDetails = {
	name: "Abhishek",
	age: 26,
	occupation: "Softwere Engneer",
};

Object.keys(myDetails).forEach((key) => {
	console.log(key);
});
Object.values(myDetails).forEach((value) => {
	console.log(value);
});
Object.entries(myDetails).forEach((entry) => {
	console.log(`${entry[0]} - ${entry[1]}`);
});
