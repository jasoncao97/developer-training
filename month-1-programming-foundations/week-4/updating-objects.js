// ======================================
// Week 4 Day 5
// Updating Objects in Arrays
// ======================================

// ex 1

let booksList = [
    {
        title: "The Hobbit",
        copies: 3
    },
    {
        title: "Dune",
        copies: 5
    },
    {
        title: "Foundation",
        copies: 2
    }
];

function addCopies(books) {
    for (let i = 0; i < books.length; i++) {
        books[i].copies++;
        console.log(books[i].title + " now has " + books[i].copies + " copies");  
    }
}


addCopies(booksList);

// ex 2

let characterList = [
    {
        characterName: "Archer",
        health: 50
    },
    {
        characterName: "Mage",
        health: 40
    },
    {
        characterName: "Knight",
        health: 80
    }
];

function updateMageHealth(character) {
    for (let i = 0; i < character.length; i++) {
        if (character[i].characterName === "Mage") {
            character[i].health += 25;

            return character[i].characterName + " now has " + character[i].health + " health";
        }
    }
}

let mageSummary = updateMageHealth(characterList);

console.log(mageSummary);

// ex 3

let productsList = [
    {
        product: "Laptop",
        price: 1200
    },
    {
        product: "Headphones",
        price: 200
    },
    {
        product: "Keyboard",
        price: 80
    },
    {
        product: "Monitor",
        price: 350
    }
];

function applyDiscounts(products) {
    let discountedCount = 0;

    for (let i = 0; i < products.length; i++) {
        if (products[i].price > 300) {
            products[i].price -= 50;
            discountedCount++;
            console.log("Discounted Product: " + products[i].product + " - $" + products[i].price);
        }
    }
    return "Discounted Products: " + discountedCount;
}

let discountSummary = applyDiscounts(productsList);

console.log(discountSummary);

// ex 4

let soccerPlayers = [
    {
        name: "Lionel Messi",
        goals: 12,
        injured: false
    },
    {
        name: "Erling Haaland",
        goals: 18,
        injured: false
    },
    {
        name: "Kylian Mbappe",
        goals: 16,
        injured: false
    }
];

function updateInjuryStatus(players) {
    for (let i = 0; i < players.length; i++) {
        if (players[i].name === "Erling Haaland") {
            players[i].injured = true;
            return players[i].name + " injured status: " + players[i].injured;
        }
    }
}

let playerStatus = updateInjuryStatus(soccerPlayers);

console.log(playerStatus);

// ex 5

let storeInventory = [
    {
        name: "Apples",
        stock: 12
    },
    {
        name: "Bananas",
        stock: 4
    },
    {
        name: "Oranges",
        stock: 6
    },
    {
        name: "Grapes",
        stock: 3
    }
];

function restockInventory(inventory) {
    let restockedCount = 0;

    for (let i = 0; i < inventory.length; i++) {
        if (inventory[i].stock < 5) {
            inventory[i].stock += 10;
            restockedCount++;
            console.log("Restocked: " + inventory[i].name + " - " + inventory[i].stock);
        }
    }
    return "Restocked Products: " + restockedCount;
}

let restockedSummary = restockInventory(storeInventory);

console.log(restockedSummary);

// ex 6

let runningBacks = [
    {
        name: "Derrick Henry",
        tds: 12,
        active: true
    },
    {
        name: "Saquon Barkley",
        tds: 10,
        active: true
    },
    {
        name: "Christian McCaffrey",
        tds: 8,
        active: true
    },
    {
        name: "Jahmyr Gibbs",
        tds: 11,
        active: true
    },
    {
        name: "Josh Jacobs",
        tds: 6,
        active: true
    }
];

function analyzeRunningBacks(rb) {
    let inactiveCount = 0;
    let inactiveTds = 0;
    let totalTds = 0;

    for (let i = 0; i < rb.length; i++) {
        totalTds += rb[i].tds;

        if (rb[i].tds < 10) {
            rb[i].active = false;
            inactiveCount++;
            inactiveTds += rb[i].tds;
            console.log("Inactive Player: " + rb[i].name);
        }
    }
    return "Inactive Players: " + 
    inactiveCount + 
    ", Total TDs: " +
    totalTds +
    ", Inactive TDs: " +
    inactiveTds; 
}

let rbSummary = analyzeRunningBacks(runningBacks);

console.log(rbSummary);