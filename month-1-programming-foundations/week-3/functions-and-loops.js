// ======================================
// Week 3 Day 3
// Functions + Loops
// ======================================

// ex 1

function printFoods() {
    let foods = ["pizza", "burger", "sushi"];

    for (let i = 0; i < foods.length; i++) {
        console.log(foods[i]);
    }
}

printFoods();

// ex 2

function printEvenNumbers() {
    for (let i = 0; i <= 8; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}

printEvenNumbers();

// ex 3

function countPassingScores() {
    let scores = [70, 90, 85, 100];
    let count = 0;

    for (let i = 0; i < scores.length; i++) {
        if (scores[i] >= 80) {
            count++;
        }
    }
    return count;
}

let passingCount = countPassingScores();

console.log(passingCount);

// ex 4

let foods = ["pizza", "burger"];
let cities = ["Calgary", "Vancouver"];

function printItems(items) {
    for (let i = 0; i < items.length; i++) {
        console.log(items[i]);
    }
}

printItems(foods);
printItems(cities);

// ex 5

let prices = [10, 20, 30];
let distances = [100, 200, 50];

function calculateTotal(numbers) {
    let total = 0;

    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    return total;
}

let priceTotal = calculateTotal(prices);
let distanceTotal = calculateTotal(distances);

console.log(priceTotal);
console.log(distanceTotal);

// ex 6: Universal Expense Analyzer - Build reusable expense analyzer function

let week1 = [45, 120, 30, 200, 15];
let week2 = [10, 20, 150, 90];

function analyzeExpenses(expenses) {
    let totalExpenses = 0;
    let largeExpenseCount = 0;

    for (let i = 0; i < expenses.length; i++) {
        totalExpenses += expenses[i];

        if (expenses[i] > 100) {
            largeExpenseCount++;
            console.log("Large Expense");
        }
    }
    return "Total: " + totalExpenses + ", Large Expenses: " + largeExpenseCount;

}

let week1Expenses = analyzeExpenses(week1);
let week2Expenses = analyzeExpenses(week2);

console.log(week1Expenses);
console.log(week2Expenses);
