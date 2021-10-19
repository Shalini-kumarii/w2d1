var ingredients = 5;

var crustTypeArr = [
    "crust1",
    "crust2",
    "crust3",
    "crust4",
    "crust5"
];

var sauceTypeArr = [
    "sauce1",
    "sauce2",
    "sauce3",
    "sauce4",
    "sauce5"
];

var cheesesArr = [
    "cheeses1",
    "cheeses2",
    "cheeses3",
    "cheeses4",
    "cheeses5",
    "cheeses6"
];

var toppingsArr = [
    "toppings1",
    "toppings2",
    "toppings3",
    "toppings4",
    "toppings5"
];

function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var Pizza = {};
    Pizza.crustType = crustType;
    Pizza.sauceType = sauceType;
    Pizza.cheeses = cheeses;
    Pizza.toppings = toppings;
    return Pizza;
}
    
var p1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
var p2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
var p3 = pizzaOven("deep dish1", "traditional1", ["mozzarella1"], ["pepperoni1", "sausage1"]);
var p4 = pizzaOven("hand tossed2", "marinara2", ["mozzarella2", "feta2"], ["mushrooms2", "olives2", "onions2"]);
console.log("P1 pizza:", p1);
console.log("P2 pizza:", p2);
console.log("P3 pizza:", p3);
console.log("P4 pizza:", p4);

function randomPizza() {
    var randomIdx = Math.floor(Math.random() * ingredients);
    var randPizza = pizzaOven(crustTypeArr[randomIdx], sauceTypeArr[randomIdx], cheesesArr[randomIdx], toppingsArr[randomIdx]);
    return randPizza;
}

var myrandPizza = randomPizza();
console.log("Random Pizza:", myrandPizza);

