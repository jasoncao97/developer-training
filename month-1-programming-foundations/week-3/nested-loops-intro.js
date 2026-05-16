// ======================================
// Week 3 Day 5
// Nested Loops (Intro)
// ======================================

// ex 1

for (let i = 1; i <= 2; i++) {
    console.log("Row", i);

    for (let j = 1; j <= 2; j++) {
        console.log(j);
    }
}

// ex 2
let letters = ["A", "B", "C"];

for (let i = 1; i <= 3; i++) {
    for (let j = 0; j < letters.length; j ++) {
        console.log(i, letters[j]);
    }
}

// ex 3

let teams = [
    ["Mike", "Sarah"],
    ["John", "Emma"]
];

for (let i = 0; i < teams.length; i++) {
    console.log("Team", i + 1);

    for (let j = 0; j < teams[i].length; j++) {
        console.log(teams[i][j]);
    }
}

// ex 4

let numbers = [
    [1, 2],
    [3, 4]
];

let total = 0;

for (let i = 0; i < numbers.length; i ++) {
    for (let j = 0; j < numbers[i].length; j++) {
        total += numbers[i][j];
    } 
}

console.log(total);

// ex 5: Movie Theatre Seat Analyzer 

let seats = [
    ["Empty", "Taken", "Empty"],
    ["Taken", "Taken", "Empty"],
    ["Empty", "Empty", "Taken"]
];

function analyzeSeats(seats) {
    let emptySeats = 0;
    let takenSeats = 0;

    for (let i = 0; i < seats.length; i++) {
        for (let j = 0; j < seats[i].length; j++) {
            if (seats[i][j] === "Empty") {
                emptySeats++;
                console.log("Available Seat");
            }
            else if (seats[i][j] === "Taken") {
                takenSeats++;
            }
        }
    }
    return "Empty: " + emptySeats + ", Taken: " + takenSeats;
} 

let theatreSeats = analyzeSeats(seats);

console.log(theatreSeats);