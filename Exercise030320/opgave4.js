// Opgave 4.a

const numbers = [1, 3, 5, 10, 11];

console.log("Numbers: " + numbers.join(", "))

const map1 = function (n, index, array) {
    if (index + 1 < array.length) {
        return n + numbers[index + 1]
    } else {
    return n;
    }
}

var result = numbers.map(map1);

console.log("Result: " + result.join(", "))
console.log()

// Opgave 4.b
var names = ["Malthe", "Frederik", "Soren", "Allan", "Alfons"];

let refMap = '<nav>' + names.map(n => '<a href="">' + n + '</a>').join("") + '</nav>'

console.log("------Opgave 4.b------")
console.log(refMap)
console.log()


// Opgave 4.c

console.log("------Opgave 4.c------")

var names2 = [
    {name:"Lars",phone:"1234567"},
    {name: "Peter",phone: "675843"}, 
    {name: "Jan", phone: "98547"},
    {name: "Bo", phone: "79345"}
];

function namesToTable(names) {
    let tableInfo = names.map(names => `<tr><td>${names.name}</td><td>${names.phone}</td>`);
    tableInfo.unshift("<table id=\"namestable\"<table class=\"table\"><tr><th>Name</th><th>Phone</th>");
    tableInfo.push("</table>");
    return tableInfo.join('');
}

console.log(namesToTable(names2))

// Opgave 4.d

console.log()
console.log("------Opgave 4.d------")

let namesDiv = document.querySelector("#names")
let namesDiv2 = document.querySelector("#names2");
let tableOfNames = namesToTable(names2)

namesDiv.innerHTML = refMap;
namesDiv2.innerHTML = tableOfNames;

