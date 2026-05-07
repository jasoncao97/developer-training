// ======================================
// Week 3 Day 2
// Loop Patterns
// ======================================

// ex 1

let ages = [12, 18, 25, 15, 30];

for (let i = 0; i < ages.length; i++) {
    if (ages[i] >= 18) {
        console.log(ages[i]);
    }
}

// ex 2

let temperatures = [15, 22, 31, 18, 27];

for (let i = 0; i < temperatures.length; i++) {
    if (temperatures[i] > 20) {
        console.log(temperatures[i]);
    }
}

// ex 3

let prices = [5, 120, 15, 200, 8];

for (let i = 0; i < prices.length; i++) {
    if (prices[i] > 100) {
        console.log("Expensive");
    }
}

// ex 4

let scores = [70, 95, 82, 60, 100];
let passingScores = 0;

for (let i = 0; i < scores.length; i++) {
    if (scores[i] >= 80) {
        passingScores++;
    }
}

console.log(passingScores);

// ex 5

let orders = [15, 220, 35, 150, 10];
let totalExpensiveOrders = 0

for (let i = 0; i < orders.length; i++) {
    if (orders[i] > 100) {
        totalExpensiveOrders += orders[i];
    }
}

console.log(totalExpensiveOrders);

// ex 6: Patient Appointment Analyzer

let appointmentTimes = [30, 60, 45, 120, 20];
let totalClinicTime = 0;
let longAppointmentCount = 0;

for (let i = 0; i < appointmentTimes.length; i++) {
    totalClinicTime += appointmentTimes[i];

    if (appointmentTimes[i] >= 60) {
        longAppointmentCount ++;
        console.log("Long Appointment");
    }
}

console.log("Total Clinic Time:", totalClinicTime);
console.log("Long Appointments:", longAppointmentCount);
