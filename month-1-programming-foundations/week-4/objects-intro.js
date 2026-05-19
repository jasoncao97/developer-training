// ======================================
// Week 4 Day 1
// Objects (Intro)
// ======================================

// ex 1

let movie = {
    title: "Get Smart",
    length: 120,
    genre: "Comedy"
};

console.log(movie.title);

// ex 2

let trip = {
    city: "Gibsons",
    days: 3,
    transport: "Ferry"
};

console.log(trip.transport);

// ex 3

let house = {
    address: "Berkley",
    floors: 3,
    garage: true
};

console.log("The house has " + house.floors + " floors");

// ex 4

let game = {
    score: 50,
    level: 1
};

game.score = 100;

console.log(game.score);

// ex 5

let gameCharacter = {
    name: "Archer",
    health: 50
};

gameCharacter.health = 100;

console.log(gameCharacter.name + " now has " + gameCharacter.health + " health");

// ex 6

let patient = {
    name: "Sarah",
    procedure: "Cleaning"
};

patient.procedure = "Root Canal";

console.log(patient.name + " now has a " + patient.procedure + " appointment");

// ex 7: Concert Ticket Tracker

let concertTicket = {
    artist: "Illenium",
    section: "General Admission",
    ticketPrice: 120,
    checkedIn: false
};

concertTicket.section = "VIP";
concertTicket.ticketPrice = 180;
concertTicket.checkedIn = true;

console.log(
    "Ticket for " + 
    concertTicket.artist + 
    " is now " + 
    concertTicket.section + 
    " and costs $" + 
    concertTicket.ticketPrice + 
    ". Checked in: " 
    + concertTicket.checkedIn
);

