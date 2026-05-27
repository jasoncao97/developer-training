// ======================================
// Week 4 Day 2
// Arrays + Objects
// ======================================

// ex 1

let books = [
    {
        title: "Harry Potter",
        pages: 400
    },
    {
        title: "The Hobbit",
        pages: 300
    }
];

console.log(books[1].title);

// ex 2

let games = [
    {
        name: "Minecraft",
        players: 8
    },
    {
        name: "Mario Kart",
        players: 4
    }
];

console.log(games[0].players);

// ex 3

let projects = [
    {
        address: "Canada Way",
        units: 6
    },
    {
        address: "Imperial St",
        units: 4
    }
];

console.log(
    "Project at " + 
    projects[1].address + 
    " has " + 
    projects[1].units + 
    " units"
);

// ex 4

let appointments = [
    {
        name: "Alex",
        procedure: "Cleaning"
    },
    {
        name: "Sarah",
        procedure: "Crown"
    },
    {
        name: "Emily",
        procedure: "Filling"
    }
];

console.log(
    appointments[2].name +
    " has a " +
    appointments[2].procedure +
    " appointment"
);

// ex 5

let festivalGuests = [
    {
        name: "Maya",
        stage: "Neon Stage"
    },
    {
        name: "Liam",
        stage: "Sunset Stage"
    },
    {
        name: "Zoe",
        stage: "Main Stage"
    }
];

console.log(festivalGuests[1].name + " is going to " + festivalGuests[1].stage);

// ex 6: Movie Organizer

let movies = [
    {
        title: "Shrek",
        length: 90
    },
    {
        title: "Interstellar",
        length: 170
    },
    {
        title: "Frozen",
        length: 100
    },
    {
        title: "Avatar",
        length: 162
    }
];

let longMovieCount = 0;

for (let i = 0; i < movies.length; i++) {
    console.log(movies[i].title);

    if (movies[i].length > 100) {
        longMovieCount++;
        console.log(movies[i].title + " is a long movie")
    }
}

console.log("Long Movies: " + longMovieCount);
