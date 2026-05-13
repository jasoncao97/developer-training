// ======================================
// Week 3 Day 4
// While Loops
// ======================================

// ex 1 

let i = 0;

while (i < 5) {
    console.log(i);
    i++;
}

// ex 2

let count = 10;

while (count >= 2) {
    console.log(count);
    count -= 2;
}

// ex 3

let energy = 100;

while (energy > 0) {
    console.log(energy);
    energy -= 10;
}

// ex 4

let cities = ["Calgary", "Vancouver", "Toronto"];

let cityIndex = 0;

while (cityIndex < cities.length) {
    console.log(cities[cityIndex]);
    cityIndex++;
}

// ex 5

let prices = [10, 20, 30];

let priceIndex = 0;
let priceTotal = 0;

while (priceIndex < prices.length) {
    priceTotal += prices[priceIndex];
    priceIndex++;
}

console.log(priceTotal);

// ex 6: Battery Drain Simulator - Create reusable battery simulator

function simulateBattery(batteryLevel) {
    while (batteryLevel > 0) {
        console.log(batteryLevel);
        batteryLevel -= 20;
    }
    return "Battery Empty";
}

let batteryStatus = simulateBattery(100);

console.log(batteryStatus);




