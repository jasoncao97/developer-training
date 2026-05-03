// ======================================
// Week 2 Day 5
// Arrays (Intro)
// ======================================

// ex 1

let numbers = [10, 20, 30, 40];

console.log(numbers[0]);
console.log(numbers[3]);

// ex 2

let cities = ["Vancouver", "Calgary", "Toronto"];

console.log(cities[1]);

// ex 3

let tasks = ["study", "gym", "cook"];

tasks[1] = "run";

console.log(tasks)

// ex 4 

let foods = ["pizza", "burger"];

foods.push("sushi");

console.log(foods)



// ex 5

let items = ["a", "b", "c", "d"];

console.log(items.length);
console.log(items[items.length -1]);

// ex 6

let numbersList = [5, 10, 15];

function getLastNumber() {
    return numbersList[numbersList.length - 1];
}

console.log(getLastNumber());

// ex 7

let cart = ["shoes", "shirt"];

function addToCart(item) {
    // return cart.push(item) ---> this returns array length
    cart.push(item)
}

addToCart("hat");

console.log(cart);

// ex 8

let scores = [80, 90, 70];

function getTotalScore() {
    return scores[0] + scores[1] + scores[2];
}

console.log(getTotalScore());

// ex 9: daily planner

let dailyTasks = ["study", "gym", "cook"];

function addDailyTask(task) {
    dailyTasks.push(task);
}

function showDailyTasks() {
    console.log(dailyTasks);
}

function showLastTask() {
    console.log(dailyTasks[dailyTasks.length - 1]);
}

addDailyTask("clean");
addDailyTask("call friend");

showDailyTasks();
showLastTask();