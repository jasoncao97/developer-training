// ======================================
// Week 2 Day 3
// Intro to Functions
// ======================================

// ex 1 

function sayBye() {
    console.log("Bye!");
}

sayBye();
sayBye();

// ex 2

function sayWelcome() {
    console.log("Welcome to coding");
}

sayWelcome();
sayWelcome();
sayWelcome();

// ex 3 

function showRules() {
    console.log("Write clean code");
    console.log("Test your code");
}

showRules();

// ex 4

function sayName(name) {
    console.log("My name is " + name);
}

sayName("Archibald");
sayName("Douglas");

// ex 5

function doubleNumber(number) {
    console.log(number * 2);
}

doubleNumber(9);
doubleNumber(25);

// ex 6

function checkAge(age) {
    if (age >= 19) {
        console.log("Adult access");
    } else {
        console.log("Denied");
    }
}

checkAge(17);
checkAge(22);

// ex 7 

function square(number) {
    return number * number; 
}

let squaredNumber = square(5);

console.log(squaredNumber);

// ex 8

function addNumbers(a,b) {
    return a + b;
}

// let addedValues = addNumbers(10,9);

console.log(addNumbers(10,9));
console.log(addNumbers(89,8));

// ex 9

// function isAdult(age) {
//     if (age >= 19) {
//         return true;
//     } else {
//         return false;
//     }
// }

function isAdult(age) {
    return age >= 19;
}

let youngAge = isAdult(15);
let oldAge = isAdult(25);

console.log(youngAge);
console.log(oldAge);

// ex 10

function triple(n) {
    return n * 3;
}

console.log(
    triple(5) + triple (3)
);

// ex 11

function estimateProcedureTime(procedureType) {
    if (procedureType === "exam") {
        return 30;
    } else if (procedureType === "filling") {
        return 60;
    } else if (procedureType === "crown") {
        return 90;
    } else {
        return "Unknown procedure";
    }
}

console.log(estimateProcedureTime("exam"));
console.log(estimateProcedureTime("filling"));
console.log(estimateProcedureTime("crown"));
console.log(estimateProcedureTime("cleaning"));
