// ======================================
// Week 4 Review
// Objects, Arrays of Objects,
// Finding Items, Updating Data
// ======================================

// ex 1

let movies = [
    {
        title: "Interstellar",
        rating: 8.7
    },
    {
        title: "The Dark Knight",
        rating: 9.0
    },
    {
        title: "Inception",
        rating: 8.8
    }
];

function findMovieRating(movies) {
    for (let i = 0; i < movies.length; i++) {
        if (movies[i].title === "The Dark Knight") {
            return "Rating: " + movies[i].rating;
        }
    }
}

let movieRating = findMovieRating(movies);

console.log(movieRating);

// ex 2

let qbs = [
    {
        name: "Josh Allen",
        tds: 28
    },
    {
        name: "Lamar Jackson",
        tds: 24
    },
    {
        name: "Joe Burrow",
        tds: 31
    }
];

function findTotalTouchdowns(qbs) {
    let totalTds = 0;

    for (let i = 0; i < qbs.length; i++) {
        totalTds += qbs[i].tds;
    }
    return "Total TDS: " + totalTds;
}

let totalTouchdowns = findTotalTouchdowns(qbs);

console.log(totalTouchdowns);

// ex 3

let nbaPlayers = [
    {
        name: "Nikola Jokic",
        ppg: 27
    },
    {
        name: "Jayson Tatum",
        ppg: 26
    },
    {
        name: "Stephen Curry",
        ppg: 24
    },
    {
        name: "Shai Gilgeous-Alexander",
        ppg: 32
    }
];

function findHighestPPG(players) {
    let highestPpg = 0;

    for (let i = 0; i < players.length; i++) {
        if (players[i].ppg > highestPpg) {
            highestPpg = players[i].ppg;
        }
    }
    return "Highest PPG: " + highestPpg;
}

let highestPointsPerGame = findHighestPPG(nbaPlayers);

console.log(highestPointsPerGame);

// ex 4

let nflTeams = [
    {
        name: "Kansas City Chiefs",
        wins: 15
    },
    {
        name: "Buffalo Bills",
        wins: 13
    },
    {
        name: "Detroit Lions",
        wins: 12
    },
    {
        name: "Carolina Panthers",
        wins: 5
    }
];

function analyzePlayoffTeams(teams) {
    let countPlayoffTeams = 0;

    for (let i = 0; i < teams.length; i++) {
        if (teams[i].wins >= 12) {
            countPlayoffTeams++;
            console.log("Playoff Team: " + teams[i].name);
        }
    }
    return "Playoff Teams: " + countPlayoffTeams;
}

let playoffTeamsSummary = analyzePlayoffTeams(nflTeams);

console.log(playoffTeamsSummary);

// ex 5

let nationalParks = [
    {
        name: "Banff",
        visitors: 4300000
    },
    {
        name: "Jasper",
        visitors: 2500000
    },
    {
        name: "Yellowstone",
        visitors: 4700000
    },
    {
        name: "Yosemite",
        visitors: 3900000
    }
];

function analyzeNationalParks(parks) {
    let totalVisitors = 0;
    let mostVisitors = 0;

    for (let i = 0; i < parks.length; i++) {
        totalVisitors += parks[i].visitors;
        
        if (parks[i].visitors > mostVisitors) {
            mostVisitors = parks[i].visitors;
        }
    }
    return "Total Visitors: " +
    totalVisitors +
    ", Highest Visitors: " +
    mostVisitors;
}

let nationalParksSummary = analyzeNationalParks(nationalParks);

console.log(nationalParksSummary);

// ex 6

let nhlPlayers = [
    {
        name: "Connor McDavid",
        pts: 100,
        active: true
    },
    {
        name: "Nathan MacKinnon",
        pts: 115,
        active: true
    },
    {
        name: "Sidney Crosby",
        pts: 88,
        active: true
    },
    {
        name: "Auston Matthews",
        pts: 95,
        active: true
    },
    {
        name: "Jack Eichel",
        pts: 82,
        active: true
    }
];

function analyzeNhlPlayers(players) {
    let totalPoints = 0;
    let countInactivePlayers = 0;
    let totalInactivePoints = 0;
    let highestPoints = 0;

    for (let i = 0; i < players.length; i++) {
        totalPoints += players[i].pts;

        if (players[i].pts < 90) {
            players[i].active = false;
            countInactivePlayers++;
            totalInactivePoints += players[i].pts;
            console.log("Inactive Player: " + players[i].name);
        }
        if (players[i].pts > highestPoints) {
            highestPoints = players[i].pts;
        }
    }
    return "Inactive Players: " +
    countInactivePlayers +
    ", Total Points: " +
    totalPoints +
    ", Inactive Points: " +
    totalInactivePoints +
    ", Highest Points: " + 
    highestPoints;
}

let nhlPlayersSummary = analyzeNhlPlayers(nhlPlayers);

console.log(nhlPlayersSummary);