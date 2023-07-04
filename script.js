/*

let js = "amazing";
console.log(40 + 30 + 20 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Jonas";

console.log(firstName);
console.log(firstName);
console.log(firstName);

// variable name conventions

let jonas_matilda = "JM";
let $function = 27;

let person = "jonas";

let myFirstJob = "Programmer";
let myCurrentJob = "Teacher";

console.log(myFirstJob);
*/
/*
let javascriptIsFun = true;
console.log(javascriptIsFun);

//console.log(typeof true);
console.log(typeof "javascriptIsFun");
//console.log(typeof 23);
//console.log(typeof "Jonas");

javascriptIsFun = "YES!";
console.log(javascriptIsFun);

/* UNDEFINED VARIABLE THAT DISPLAYS ON CONSOLE */
/*
let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);
*/

/*============ LET CONST AND VAR ======= */
/*
let age = 30;
age = 31;

const birthYear = 1991;
//birthYear = 1990;

//const job;

var job = "programmer";
job = "teacher";

lastName = "Bravo";
console.log(lastName);
*/

/*=========================== MATH OPERATORS ========================= */
/* 
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

const firstName = "Jonas";
const lastName = "Bravo";
console.log(firstName + " " + lastName);

/* =========================== ASSIGNMENT OPERATORS ========================= */
/* 
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--;
x--;
console.log(x);

/*=========================== COMPARISON OPERATORS ========================= */
/* 
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);


/* =========================== OPERATOR PRECEDENCE ========================= */
/* 
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

console.log(25 - 10 - 5);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

const averageAge = ageJonas + ageSarah / 2;
console.log(ageJonas, ageSarah);

/*============= CHALLENGE =============== */

// Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:

// BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).

// Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

//Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

/*============= CHALLENGE Code done  =============== */
/*
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, markHigherBMI);

/* ============= STRINGS AND TEMPLATE LITERALS =============== */
/*
const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;

const jonas =
	"I'm" + firstName + ", a " + (year - birthYear) + "years old" + "!";
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string....`);

console.log(
	"String with \n\
multiple \n\
lines",
);

console.log(`String
multiple
lines`);

/* ============= TAKING DECISIONS =============== */
/* 
const age = 15;

if (age >= 18) {
	console.log("Sarah can start driving license 🚘");
} else {
	const yearsLeft = 18 - age;
	console.log(`Sarah is to young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 2012;

let century;
if (birthYear <= 2000) {
	century = 20;
} else {
	century = 21;
}
console.log(century);

/* ============= CHALLENGE NUMBER 2 =============== */
//Print a nice output to the console, telling the user who has the higher BMI. The message can be either:

//"Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!".

//2. Modify the outputs above to use template literals to include the BMI values in the outputs.

//Example: "Mark's BMI (28.3) is higher than John's (23.9)!" or "John's BMI (29.1) is higher than Mark's (27)!".
/* 
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

if (BMIMark > BMIJohn) {
	console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
} else {
	console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
}
/* ============= Javascript fundamentals part 1  =============== */
//Type Conversion
/* 
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Jonas"));
console.log(typeof NaN);

console.log(String(23), 23);

// Type coercion

console.log("I am" + 23 + "years old");
console.log("23" - "10" - 3);
console.log("23" * "2");

// Guess the number

let n = "1" + 1; // the first number is a string the second is the number which is why it adds to '11'
n = n - 1; // then you minus 1 which when logged in it equals to 10
console.log(n);

"10" - "4" - "3" - 2 + "5"; // this equals 15

/* ============= BOOLEANS  =============== */

// 5 FALSY VALUES 0, '', UNDEFINED, NULL, NaN
/* 
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(Bravo));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 100;
if (money) {
	console.log("Don't spend it all ;)");
} else {
	console.log("You should get a job");
}

let height = 563;
if (height) {
	console.log("Yay! Height is defined");
} else {
	console.log("Height is undefined");
}
*/

/* ============= OPERATORS =============== */
/*
const age = 18;
if (age === 18) console.log("You just became and adult");
if (age == 18) console.log("You just became and adult (loose)");

const favorite = prompt("What's your favorite number?");
console.log(favorite);
console.log(typeof favorite);


const favorite = Number(prompt("what's you favorite number?"));
console.log(favorite);
console.log(typeof favorite);

if (favorite === 23) {
	console.log("cool! 23 is an amazing number!");
} else if (favorite === 7) {
	console.log("7 is also a cool number");
} else if (favorite === 9) {
	console.log("9 is also a cool number");
} else {
	console.log("Number is not 23 or 7 or 9");
}

if (favorite !== 23) console.log("why not 23");
*/
/* ============= LOGICAL OPERATORS =============== */
const hasDriversLicense = true; // A
const hasGoodVision = false; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);
/*
if (hasDriversLicense && hasGoodVision) {
	console.log("Sarah is able to drive!");
} else {
	console.log("Someone else should drive...");
} */

const isTired = false; // c
console.log(hasDriversLicense || hasGoodVision || isTired);

if (hasDriversLicense && hasGoodVision && isTired) {
	console.log("Sarah is able to drive!");
} else {
	console.log("Someone else should drive...");
}

/* =============== CHALLENGE 3 =============== */
const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas) {
	console.log("Dolphins win the trophy");
} else if (scoreKoalas > scoreDolphins) {
	console.log("Koalas win the trophy");
} else if (scoreDolphins === scoreKoalas) {
	console.log("Both win the trophy");
}
