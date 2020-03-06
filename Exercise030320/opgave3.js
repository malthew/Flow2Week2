// Opgave 3

// Applying myFilter() function to Array prototype property.
Array.prototype.myFilter = function (callback) {
    var newArray = []
    for (var i = 0; i < this.length; i++) {
        let word = this[i]
        if (callback(word)) {
            newArray.push(word)
        }
    }
    
    return newArray;
}

var names = ["Malthe", "Frederik", "Soren", "Allan", "Alfons"];

// Applying myMap() function to Array prototype property.
Array.prototype.myMap = function (callback) {
    var newArray = [];
    for (var i = 0; i < this.length; i++) {
        let word = this[i];
        newArray.push(callback(word));
    }
    return newArray;
}

var filterNames2 = names.myFilter(function (word) {
    return word.toLowerCase().includes("a");
})

var reversedWords2 = names.myMap(function (word) {
    return word.split("").reverse().join("");
});

// Output results

// myFilter()
console.log()
console.log("Original Names: " + names.join(', '));

console.log("Filtered Names: " + filterNames2.join(', '));
console.log();

// myMap()
console.log("Original Names: " + names.join(', '));

console.log("Reversed Names: " + reversedWords2.join(', '));
console.log();