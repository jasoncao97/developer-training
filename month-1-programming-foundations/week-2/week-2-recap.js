// ======================================
// Week 2 Recap
// Functions, Composition, Arrays
// ======================================

// SECTION 1 — Rapid Fire

// Q1: console log prints the value whereas return gives the value back
// console.log → outputs to console
// return → sends value back to caller

// Q2: true

// Q3: 10

// Q4: c

// ======================================

// SECTION 2 — Real-World Thinking

// Scenario 1: calculateBaseFare(), calculateDistanceCost(), applyTax()
// applyTax(
//     calculateBaseFare() + calculateDistanceCost()
// )

// Scenario 2: 
// function showLastWorkout() {
//     return workouts[workouts.length - 1];
// }

// showLastWorkout();

// Scenario 3: all three
// Arrays store items in the cart,
// functions add or calculate items,
// composition combines steps like subtotal → tax → discount

// ======================================

// SECTION 3 — practice problems

// ex 1

let prices = [10, 20, 30];

function getTotal() {
    return prices[0] + prices[1] + prices[2];
}

// console.log(getTotal());

let totalPrice = getTotal();

console.log(totalPrice);


// ex 2

let names = ["Alex", "Sam"];

function addName(name) {
    names.push(name);
}

function getLastName() {
    return names[names.length - 1];
}

addName("Doug");

// console.log(getLastName());

let lastName = getLastName();

console.log(lastName);

// ex 3

let numbers = [2, 4];

function addNumber(number) {
    numbers.push(number);
}

function getLastNumber() {
    return numbers[numbers.length - 1];
}

function doubleLastNumber() {
    return getLastNumber() * 2;
}

addNumber(10);

// console.log(getLastNumber());
// console.log(doubleLastNumber());

let lastNumber = getLastNumber();
let doubledLastNumber = doubleLastNumber();

console.log(lastNumber);
console.log(doubledLastNumber);

// ex 4

let tasks = ["study", "gym", "cook"];

function addTask(task) {
    tasks.push(task);
}

function getTaskCount() {
    return tasks.length;
}

addTask("feed cats");

// console.log(tasks);
// console.log(getTaskCount());

let taskCount = getTaskCount();

console.log(tasks);
console.log(taskCount);

// ex 5: Road Trip Stop Tracker

let roadTripStops = ["Kelowna", "Revelstoke"];

function addRoadTripStop(city) {
    roadTripStops.push(city);
}

function getLastRoadTripStop() {
    return roadTripStops[roadTripStops.length - 1];
}

function getStopCount() {
    return roadTripStops.length;
}

// function createTripSummary() {
//     if (getStopCount() > 2) {
//         return "Your road trip has " + getStopCount() + " stops. " + 
//                 "Your latest stop is " + getLastRoadTripStop() + ".";
//     } else {
//         return "Your road trip is too short! You should visit more cities.";
//     }
// }

function createTripSummary() {
    let count = getStopCount();
    let last = getLastRoadTripStop();

    if (count > 2) {
        return "Your road trip has " + count + " stops. " +
                "Your latest stop is " + last + ".";
    } else {
        return "Your road trip is too short! You should visit more cities.";
    }
}

addRoadTripStop("Golden");
addRoadTripStop("Banff");
addRoadTripStop("Calgary");

let latestStop = getLastRoadTripStop();
let totalStops = getStopCount();
let tripSummary = createTripSummary();

console.log("Road Trip Stops:", roadTripStops);
console.log("Latest Stop:", latestStop);
console.log("Total Stops:", totalStops);
console.log(tripSummary);

