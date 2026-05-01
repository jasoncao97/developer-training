// ======================================
// Week 2 Day 4
// Function Composition
// ======================================

// ex 1

function double(n) {
    return n * 2;
}

function triple(n) {
    return n * 3;
}

// console.log(
//     triple(double(4))
// );

let result1 = triple(double(4));

console.log(result1);

// ex 2

function add(a,b) {
    return a + b;
}
function subtractTen(n) {
    return n - 10;
}

// console.log(
//     subtractTen(add(20,5))
// );

let result2 = subtractTen(add(20,5));

console.log(result2);

// ex 3

function multiply(a,b) {
    return a * b;
}

function square(n) {
    return n * n;
}

// console.log(
//     square(add(2,3))
// );

// console.log(
//     multiply(square(2), 5)
// );

let result3 = square(add(2,3));
let result4 = multiply(square(2),5);

console.log(result3);
console.log(result4);

// ex 4: movie night planner

function calculateSubtotal(price, people) {
    return price * people;
}

function applyTax(amount, taxRate) {
    return amount + (amount * taxRate);
}

function applyDiscount(amount, discount) {
    return amount - discount;
}

// let finalCost = applyDiscount(
//     applyTax(
//         calculateSubtotal(15, 2),
//         0.05
//     ), 
//     10
// );

let subTotal = calculateSubtotal(15, 2);
let taxed = applyTax(subTotal, 0.05);
let finalCost = applyDiscount(taxed, 10);

console.log(finalCost);