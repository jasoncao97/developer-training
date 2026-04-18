// ======================================
// Week 2 Day 1
// Logical Operators (AND, OR, NOT)
// ======================================

// ex 1

let userAge = 27;

if (userAge < 18 || userAge > 65) {
    console.log("Discount");
} else {
    console.log("Regular");
}

// ex 2

let isLoggedIn = false;

if (!isLoggedIn) {
    console.log("Please log in");
} else {
    console.log("Welcome");
}

// ex 3

let isAdmin = false;
let hasPass = false;

if (isAdmin || hasPass) {
    console.log("Access granted");
} else {
    console.log("Access denied");
}

// ex 4

let temperature = 30;
let isRaining = false;

if ((temperature > 25) && (!isRaining)) {
    console.log("Go outside");
} else {
    console.log("Stay inside");
}

// ex 5

let hasTicket = true;
let isVip = false;

if (hasTicket || isVip) {
    console.log("Enter");
} else {
    console.log("Denied");
}

// ex 6

let age = 19;
let hasID = true;

if (age >= 19 && hasID) {
    console.log("Allowed");
} else {
    console.log("Not allowed");
}

// ex 7

let boughtTicket = false;
let boughtVip = true;
let isBanned = false;

if (isBanned) {
    console.log("Denied");
} else if (boughtTicket || boughtVip) {
    console.log("Enter");
} else {
    console.log("Denied");
}