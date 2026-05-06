// ======================================
// Week 3 Day 1
// Loops (Intro)
// ======================================

// ex 1

for (let i = 0; i < 5; i++) {
    console.log("Hello");
}

// ex 2

for (let i = 1; i < 6; i++) {
    console.log(i);
}

// ex 3

for (let i = 0; i < 9; i += 2) {
    console.log(i);
}

// ex 4

let foods = ["pizza", "burger", "sushi"];

for (let i = 0; i < foods.length; i++) {
    console.log(foods[i]);
}

// ex 5

let cities = ["Vancouver", "Calgary", "Toronto", "Montreal"];

for (let i = 0; i < cities.length; i++) {
    console.log("City: " + cities[i]);
}

// ex 6

let prices = [10, 20, 30];
let total = 0

for (let i = 0; i < prices.length; i++) {
    total += prices[i];
}

console.log(total);

// ex 7

// let scores = [70, 80, 90, 100];

// for (let i = 0; i < scores.length; i++) {
//     console.log("High Score: " + (scores[i] > 85));
// }

let scores = [70, 80, 90, 100];

for (let i = 0; i < scores.length; i++) {
    if (scores[i] > 85) {
        console.log("High Score");
    }
}

// ex 8

let names = ["Alex", "Sam", "Jordan"];

for (let i = 0; i < names.length; i++) {
    console.log("Hello " + names[i]);
}

// ex 9

let temperatures = [15, 18, 21, 31];

for (let i = 0; i < temperatures.length; i++) {
    if (temperatures[i] >= 30) {
        console.log("Hot");
    } else if (temperatures[i] >= 20) {
        console.log("Warm");
    } else {
        console.log("Cold");
    }
}

// ex 10: expense tracker
// Goal: Analyze expenses and print summary

let expenses = [45, 120, 30, 200, 15];

let totalExpenses = 0;
let largeExpenseCount = 0;

for (let i = 0; i < expenses.length; i++) {
    totalExpenses += expenses[i];

    if (expenses[i] > 100) {
        largeExpenseCount++;
        console.log("Large Expense")
    }
}

console.log("Total Expense: " + totalExpenses);
console.log("Large Expenses: " + largeExpenseCount);

// ex 11: road trip analyzer

let distances = [120, 340, 90, 220];

function calculateTotalDistance() {
    let total = 0;
    for (let i = 0; i < distances.length; i++) {
        total += distances[i];
    }
    return total;
}

let totalDistance = calculateTotalDistance();

console.log(totalDistance);