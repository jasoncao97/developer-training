// ======================================
// Week 4 Day 3
// Functions + Arrays of Objects
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

function printAnimalNames(animalsList) {
    for (let i = 0; i < animalsList.length; i++) {
        console.log(animalsList[i].name);
    }
}

printAnimalNames(animals);

// ex 2

let phones = [
    {
        brand: "iPhone",
        price: 1200
    },
    {
        brand: "Samsung",
        price: 1000
    },
    {
        brand: "Google",
        price: 900
    }
];

function calculatePhoneTotal(phoneList) {
    let phonePriceTotal = 0;

    for (let i = 0; i < phoneList.length; i++) {
        phonePriceTotal += phoneList[i].price;
    } 
    return phonePriceTotal;
}

let priceTotal = calculatePhoneTotal(phones);

console.log(priceTotal);

// ex 3

let rides = [
    {
        name: "Thunder Loop",
        minHeight: 120
    },
    {
        name: "Sky Drop",
        minHeight: 140
    },
    {
        name: "River Splash",
        minHeight: 100
    }
];

function analyzeTallRides(ridesList) {
    let tallRideCount = 0;

    for (let i = 0; i < ridesList.length; i++) {
        if (ridesList[i].minHeight > 110) {
            console.log(ridesList[i].name);
            tallRideCount++;
        }
    }
    return "Tall Rides: " + tallRideCount;
}

let tallRideSummary = analyzeTallRides(rides);

console.log(tallRideSummary);

// ex 4

let nhlTeams = [
    {
        name: "Edmonton Oilers",
        wins: 48
    },
    {
        name: "Vancouver Canucks",
        wins: 38
    },
    {
        name: "Toronto Maple Leafs",
        wins: 52
    },
    {
        name: "Calgary Flames",
        wins: 41
    }
];

function analyzeNhlTeams(teams) {
    let topTeamsCount = 0;

    for (let i = 0; i < teams.length; i++) {
        console.log(teams[i].name);

        if (teams[i].wins >= 45) {
            topTeamsCount++;
        }
    }
    return "Top Teams: " + topTeamsCount;
} 

let topTeamsSummary = analyzeNhlTeams(nhlTeams);

console.log(topTeamsSummary);

// ex 5

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
    },
    {
        title: "The Shawshank Redemption",
        rating: 9.3
    }
];

function analyzeTopMovies(moviesList) {
    let goodMoviesCount = 0;

    for (let i = 0; i < moviesList.length; i++) {
        console.log(moviesList[i].title);

        if (moviesList[i].rating >= 9.0) {
            goodMoviesCount++
        }
    }
    return "Top Movies: " + goodMoviesCount;
}

let topMoviesSummary = analyzeTopMovies(movies);

console.log(topMoviesSummary);

// ex 6: Music Festival Analyzer

let musicFestival = [
    {
        artist: "Billie Eilish",
        duration: 90
    },
    {
        artist: "Coldplay",
        duration: 120
    },
    {
        artist: "Dua Lipa",
        duration: 75
    },
    {
        artist: "The Weeknd",
        duration: 110
    }
];

function analyzeMusicFestival(festival) {
    let totalDuration = 0;
    let longestPerformance = 0;

    for (let i = 0; i < festival.length; i++) {
        totalDuration += festival[i].duration;

        if (festival[i].duration > longestPerformance) {
            longestPerformance = festival[i].duration;
        }
    }
    return "Total Time: " + totalDuration + " minutes, Longest Performance: " + longestPerformance + " minutes"
}

let musicFestivalSummary = analyzeMusicFestival(musicFestival);

console.log(musicFestivalSummary);