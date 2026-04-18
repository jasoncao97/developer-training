// ======================================
// Week 1 Day 5
// Practice & Logic Building
// ======================================

// ex 1

let age = 25;

if (age >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}

// ex 2

let number1 = 7;

if (number1 % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}

// ex 3

let temperature = 27; 

if (temperature >= 30) {
    console.log("Hot");
} else if (temperature >= 20) {
    console.log("Warm");
} else {
    console.log("Cold");
}

// ex 4

let score = 96;

if (score + 5 >= 100) {
    console.log("Level Up!");
} else if (score >= 80) {
    console.log("Almost There!");
} else {
    console.log("Keep Going");
}

// ex 5

let number2 = 105;

if (number2 > 100 && number2 % 2 === 0) {
    console.log("Big Even");
} else {
    console.log("Other");
}

// ex 6

let testScore = 81;

if (testScore >= 80 && testScore <= 100) {
    console.log("Pass");
} else {
    console.log("Fail");
}

// ex 7

let springTemperature = 19;

if (springTemperature >= 30) {
    console.log("Hot");
} else if (springTemperature >= 20 && springTemperature < 30) {
    console.log("Warm");
} else if (springTemperature >= 10 && springTemperature < 20) { 
    console.log("Cool");
} else {
    console.log("Cold");
}

// ex 7 better way to write 
// (since checks top to bot and moves on if previous conditions fails)

let springTemperature2 = 19;

if (springTemperature2 >= 30) {
    console.log("Hot");
} else if (springTemperature2 >= 20) {
    console.log("Warm");
} else if (springTemperature2 >= 10) {
    console.log("Cool");
} else {
    console.log("Cold");
}

// ex 8

let personAge = 18;

if (personAge < 13) { 
    console.log("Child");
} else if (personAge < 18) {
    console.log("Teen");
} else if (personAge < 64) {
    console.log("Adult");
} else {
    console.log("Senior");
}

// ex 9

let testValue = 15;

if ((testValue % 3 === 0) && (testValue % 5 === 0)) {
    console.log("FizzBuzz");
} else if (testValue % 3 === 0) {
    console.log("Fizz");
} else if (testValue % 5 === 0) {
    console.log("Buzz");
} else {
    console.log("None");
}