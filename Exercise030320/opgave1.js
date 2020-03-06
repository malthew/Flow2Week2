// Opgave 1.a:

const nameArr = [ 'Lars', 'Jan', 'Peter', 'Patrick', 'Bo', 'Martin', 'Frederik', 'Alfons', 'Adrian', 'Allan' ]

const startsWithA = nameArr.filter((name) => name.startsWith("A"))
// const containsA = nameArr.filter((name) => name.indexOf("a") > -1 || name.indexOf("A") > -1)
// console.log(containsA)
const containsA = nameArr.filter(x => x.toLowerCase().includes('a'))

console.log(startsWithA)
console.log()
console.log("Names containing 'A': " + containsA.join(", "))
console.log()

// Opgave 1.b:

const reversedNames = nameArr.map(s => s.split("").reverse().join(""))

console.log("Reversed names: " + reversedNames.join(", "))
console.log()


