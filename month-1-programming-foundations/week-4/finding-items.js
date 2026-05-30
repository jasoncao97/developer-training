// ======================================
// Week 4 Day 4
// Finding Specific Items
// ======================================

// ex 1 

let animals = [
    {
        name: "Panda",
        age: 5
    },
    {
        name: "Tiger",
        age: 8
    },
    {
        name: "Koala",
        age: 3
    }
];

function printTigersAge(animalsList) {
    for (let i = 0; i < animalsList.length; i++) {
        if (animalsList[i].name === "Tiger") {
            console.log(animalsList[i].age);
        }
    }
}

printTigersAge(animals);

// ex 2

let restaurants = [
    {
        name: "Sushi Kawa",
        rating: 4.6
    },
    {
        name: "Pizza Palace",
        rating: 4.2
    },
    {
        name: "Burger Barn",
        rating: 4.8
    }
];

function analyzeBurgerRating(restaurantsList) {
    for (let i = 0; i < restaurantsList.length; i++) {
        if (restaurantsList[i].name === "Burger Barn") {
            return "Rating: " + restaurantsList[i].rating;
        }
    } 
}

let burgerRatingSummary = analyzeBurgerRating(restaurants);

console.log(burgerRatingSummary);

// ex 3

let nbaPlayers = [
    {
        name: "Stephen Curry",
        ppg: 24
    },
    {
        name: "Nikola Jokic",
        ppg: 27
    },
    {
        name: "Jayson Tatum",
        ppg: 26
    }
];

function analyzeJokicStats(players) {
    for (let i = 0; i < players.length; i++) {
        if (players[i].name === "Nikola Jokic") {
            return players[i].name + " scores " + players[i].ppg + " points per game"
        }
    }
}

let jokicSummary = analyzeJokicStats(nbaPlayers);

console.log(jokicSummary);

// ex 4

let flights = [
    {
        flightNumber: "AC101",
        destination: "Toronto"
    },
    {
        flightNumber: "WS220",
        destination: "Calgary"
    },
    {
        flightNumber: "AC555",
        destination: "Vancouver"
    },
    {
        flightNumber: "DL300",
        destination: "Seattle"
    }
];

function analyzeFlights(flightsList) {
    let countDomesticFlights = 0;

    for (let i = 0; i < flightsList.length; i++) {
        if (flightsList[i].destination === "Vancouver" || flightsList[i].destination === "Calgary") {
            console.log("Domestic Flight: " + flightsList[i].flightNumber);
            countDomesticFlights++;
        }
    }
    return "Domestic Flights: " + countDomesticFlights;
}

let domesticFlightSummary = analyzeFlights(flights);

console.log(domesticFlightSummary);

// ex 5

let countries = [
    {
        name: "Canada",
        goldMedals: 9
    },
    {
        name: "Japan",
        goldMedals: 20
    },
    {
        name: "Australia",
        goldMedals: 18
    },
    {
        name: "France",
        goldMedals: 16
    }
];

function analyzeTopCountries(olympics) {
    let countTopCountries = 0;

    for (let i = 0; i < olympics.length; i++) {
        if (olympics[i].goldMedals >= 18) {
            console.log("Top Country: " + olympics[i].name);
            countTopCountries++;
        }
    }
    return "Top Countries: " + countTopCountries;
}

let topCountriesSummary = analyzeTopCountries(countries);

console.log(topCountriesSummary);

// ex 6

let wideReceivers = [
    {
        player: "Justin Jefferson",
        tds: 10 
    },
    {
        player: "Ja'Marr Chase",
        tds: 13
    },
    {
        player: "Amon-Ra St. Brown",
        tds: 8
    },
    {
        player: "Mike Evans",
        tds: 11
    },
    {
        player: "Ceedee Lamb",
        tds: 9
    }
];

function analyzeWideReceivers(wrs) {
    let countTopReceivers = 0;
    let totalTouchdowns = 0;
    let mostTouchdowns = 0;
    
    for (let i = 0; i < wrs.length; i++) {
        totalTouchdowns += wrs[i].tds;

        if (wrs[i].tds >= 10) {
            console.log("Top WR: " + wrs[i].player);
            countTopReceivers++;
        }
        if (wrs[i].tds > mostTouchdowns) {
            mostTouchdowns = wrs[i].tds;
        }
    }
    return "Top WRs: " + 
    countTopReceivers + 
    ", Total TDs: " + 
    totalTouchdowns + 
    ", Most TDs: " + 
    mostTouchdowns;
}

let wideReceiversSummary = analyzeWideReceivers(wideReceivers);

console.log(wideReceiversSummary);