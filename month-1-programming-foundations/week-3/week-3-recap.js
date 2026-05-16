// ======================================
// Week 3 Recap
// Loops + While Loops + Nested Loops
// ======================================

// ex 1

let temperatures = [18, 32, 25, 15, 30];

let total = 0;
let hotDays = 0;

for (let i = 0; i < temperatures.length; i++) {
    total += temperatures[i];

    if (temperatures[i] > 25) {
        hotDays++;
    }
}

console.log("Hot Days: ", hotDays);
console.log("Total Temperature: ", total);

// ex 2

let movies = [90, 150, 110, 180, 125];

function countLongMovies(movieLengths) {
    let count = 0;

    for (let i = 0; i < movieLengths.length; i++) {
        if (movieLengths[i] >= 120) {
            count++;
        }
    }
    return count;
}

let longMoviesCount = countLongMovies(movies);

console.log(longMoviesCount);

// ex 3: Road Trip Hotel Planner

let tripStops = [
    ["Kelowna", "Hotel"],
    ["Banff", "Airbnb"],
    ["Calgary", "Hotel"]
];

function analyzeTrips(stops) {
    let count = 0;

    for (let i = 0; i < stops.length; i++) {
        console.log(stops[i][0]);

        if (stops[i][1] === "Hotel") {
            count++;
        }
    }
    return "Hotels: " + count
}

let tripAnalysis = analyzeTrips(tripStops);

console.log(tripAnalysis);