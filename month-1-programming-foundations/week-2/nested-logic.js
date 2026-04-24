// ======================================
// Week 2 Day 2
// Nested Logic & Decision Trees
// ======================================

// ex 1

let hasAccount = true;
let hasPassword = false;

if (hasAccount) {
    if (hasPassword) {
        console.log("Login successful");
    } else {
        console.log("Incorrect password");
    } 
} else {
    console.log("Create account");
}

// ex 2

let personAge = 30;
let hasLicense = true;

if (personAge >= 16) {
    if (hasLicense) {
        console.log("Can drive");
    } else {
        console.log("Need a license");
    }
} else {
    console.log("Too young to drive");
}

// ex 3

let isHungry = true;
let hasFood = false;

if (isHungry) {
    if (hasFood) {
        console.log("Eat");
    } else {
        console.log("Go shopping");
    }
} else {
    console.log("Relax");
}

// ex 4

let isWeekend = true;
let hasMoney = false;
let friendsFree = true;

if (isWeekend) {
    if (hasMoney) {
        if (friendsFree) {
            console.log("Go out");
        } else {
            console.log("Go solo");
        }
    } else {
        console.log("Stay home");
    }
} else {
    console.log("Work tomorrow");
}