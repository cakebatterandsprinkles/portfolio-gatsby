---
title: "JavaScript- Object Destructuring & Spread and Rest Operators"
date: "2021-03-02"
tags: ["Web Development", "JavaScript"]
summary: "In this article, I very briefly explain Object and Array destructuring, default parameters and spread and rest syntax with simple examples."
---

ES6 brought us new ways to work with arrays and objects. They are simple to use and understand, and if used efficiently, make our lives easier. In this article, I'll show basic usage of default parameters, array and object destructuring, and spread and rest operators.

Let's get to work!

#### Default Parameters

If you have functions with multiple arguments, the best way to handle future bugs would be to define logical default parameters. Default parameters can take any type of value: an array, an object, a string, a number; you name it.

Let's create a very simple example:

```javascript
function multiply(x, y) {
  return x * y
}

multiply(4, 5) // returns: 20
multiply(5) // This will return NaN because y is undefined, and undefined multiplied by anything is NaN. Hello future bugs!

// Let's define the same function by giving y a default parameter of 1:
function multiplyWithDefaultParameters(x = 1, y = 1) {
  return x * y
}

multiplyWithDefaultParameters(3, 4) // returns: 12
multiplyWithDefaultParameters(5) // returns: 5
multiplyWithDefaultParameters() // returns: 1
```

Ta-da! Piece of cake. Just as a side note, [default parameters are not supported by IE.](https://caniuse.com/?search=default%20parameters)

#### Spread syntax

The spread syntax allows the elements in an iterable (such as an array) to be spread in various places. If you think of an array as a bag, you simply empty the bag in a place where these items are expected, with the same order. The syntax is always 3 dots right next to each other(...).

Let's see the places where this can be useful:

```javascript
// Arrays are iterable
const numArr = [2, 56, 41, 98, 14, 26]
Math.max(...numArr) // this is the same as this: Math.max(2,56,41,98,14,26)

// Strings are also iterable
const str = "hello"
function spellFive(a, b, c, d, e) {
  console.log(a, b, c, d, e)
}
spellFive(...str) // prints: h e l l o
-------------------------------->

// You can use it to combine arrays, but don't forget that spread order matters.
const flowers = ["rose", "daisy", "lily", "peony"]
const vegetables = ["broccoli", "asparagus"]

const flora = [...flowers, ...vegetables, "tomato"]
console.log(flora) // prints: ["rose", "daisy", "lily", "peony", "broccoli", "asparagus", "tomato"]
-------------------------------->

// You can use it to create a copy of an array:
const animals = ["cat", "bird", "dog", ["squirrel", "rabbit", "deer"]]
const animalsCopy = [...animals]

// Although they look the same, they point out to different arrays, so they are not strictly equal.
// This is not true for nested arrays. Nested arrays are shallow copied, they will point out to the same references.
console.log(animalsCopy === animals) // prints: "false"
console.log(animalsCopy[3] === animals[3]) // prints: "true"
-------------------------------->

// You can directly spread strings, just like str.split("") does:
console.log([..."violet"]) // prints: ["v", "i", "o", "l", "e", "t"]
-------------------------------->

// Objects are not iterable, but the spread syntax can be used in objects as well:
const cat = { legCount: 4, hasTeeth: "true" }
const dog = { legCount: 4, hasTeeth: "true" }
const bird = { legCount: 2, hasTeeth: "false" }

const myCat = { ...cat, name: "Ollie", personality: "unpredictable" }
const myDog = { ...dog, name: "Jojo", personality: "cute" }
const myBird = {
  ...bird,
  name: "Milo",
  personality: "might seduce your dad type",
}

console.log(myBird) // prints: {legCount: 2, hasTeeth: "false", name: "Milo", personality: "might seduce your dad type"}

// If you have conflicting properties the order of spreading matters as the last one defined will overwrite the ones before it.
const alienCat1 = { ...cat, legCount: 6, eyeCount: 3 } // has a legCount of 6
const alienCat2 = { legCount: 6, eyeCount: 3, ...cat } // has a legCount of 4

// Spreading can be used to copy objects, but just like the arrays, the copy and the initial object will point to different references, although they look the same.
const myDogCopy = { ...myDog }
console.log(myDog === myDogCopy) // prints: false
-------------------------------->

// You can't spread an object inside an array, it will throw an error.
// You can spread an array into an object though. It will assign each item in the array a key, which is the same as their index number.
console.log({ ...[1, 2, 3] }) // prints: {0: 1, 1: 2, 2: 3}
```

#### Rest Syntax and arguments object

The syntax is the same as the spread syntax, which is three dots next to each other(...).

In every function, we have access to what is called an **[arguments object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments)**. The arguments object is an array-like object that has a length property, but built-in array methods are not available for it. It contains all arguments passed into a function, if you don't know how many arguments the function will take, then instead of specifying the arguments, you can simply use this object. It is not available in arrow functions and mostly shortened as "args".

Let's see it in use:

```javascript
// First, we'll start with the arguments object:
function doesntMatter() {
  console.log(arguments)
}

doesntMatter(1, 5, 23, 759) // prints all the arguments as an array-like object: [1, 5, 23, 759, callee: ƒ, Symbol(Symbol.iterator): ƒ]

function multiply() {
  return [...arguments].reduce((total, currVal) => {
    return total * currVal
  })
}

multiply(2, 5, 8) // prints: 80
-------------------------------->

// Now, same function with rest syntax will look like this:
function multiply(...args) {
  console.log(args) // This returns an actual array that consists all arguments, not an array-like object.
  return args.reduce((total, currVal) => {
    return total * currVal
  })
}

multiply(2, 5, 9) // prints: [2, 5, 9] 90
-------------------------------->

// You can also use it to encapsulate some of the arguments:
function fullName(firstName, lastName, ...titles) {
  console.log("First name:", firstName)
  console.log("Last name:", lastName)
  console.log("Titles:", titles)
}

fullName("Mary", "Johnsson", "Mrs.", "Dr.")
// prints:
// First name: Mary
// Last name: Johnsson
// Titles: (2) ["Mrs.", "Dr."]
```

#### Destructuring assignment

Destructuring is a shorter syntax for assigning values to variables. Let's see it in use:

```javascript
const [dog, cat, bird] = ["Ollie", "Jojo", "Milo", "Kiki"]
console.log("Dog's name: ", dog) // prints: "Dog's name: Ollie"
console.log("Cat's name: ", cat) // prints: "Cat's name: Jojo"
console.log("Bird's name: ", bird) // prints: "Bird's name: Milo"

// As you can see, the order matters. And if you want to skip a variable, you can use a space instead of it, like this:
const [first, , third] = ["Ellie", "Ollie", "Wally"]
console.log(first, third) // prints: Ellie Wally
-------------------------------->

// You can combine it with rest syntax as well:
const [firstNum, , , ...others] = [1, 2, 3, 4, 5, 6]
console.log(firstNum) // prints: 1
console.log(others) // prints: [4, 5, 6]

// Destructuring can be used with objects as well. The ordering doesn't matter in this case, but the variable name has to match the key names of the object, or the variable will still be created but the value of it will become undefined:
const rat = {
  legCount: 4,
  hasTeeth: "true",
  name: "Taco",
  personality: "very cool",
}

const { name, personality, hasTail } = rat
console.log(`${name}, ${personality}`) // prints: Taco, very cool
console.log(hasTail) // prints: undefined

// If you want to use destructuring, but want to name your variable as a different name, you can do that by aliasing:
const { name: petRatName } = rat
console.log(petRatName) // prints: "Taco"

// You can also combine this with rest parameter:
const { name: petRatName, ...otherRatParameters } = rat

console.log(otherRatParameters) // prints: {legCount: 4, hasTeeth: "true", personality: "very cool"}
-------------------------------->

// Nested destructuring is also possible:
const pets = [
  {
    name: "Ollie",
    species: "dog",
  },
  {
    name: "Milo",
    species: "bird",
  },
  {
    name: "Taco",
    species: "rat",
  },
]

const [, { name: petBirdName }] = pets
console.log(petBirdName) // prints: "Milo"
-------------------------------->

// You can use destructuring in function parameters as well:
printFullName = ({ firstName, lastName }) => {
  console.log(`${firstName} ${lastName}`)
}

const person = {
  firstName: "Carrie",
  lastName: "Longwood",
  age: 32,
  hairColor: "black",
}

printFullName(person) // prints: "Carrie Longwood"
-------------------------------->

// You can do the same thing with arrays too:
const response = ["HTTP/1.1", "200 OK", "application/json"]

function parseResponse([protocol, statusCode, contentType]) {
  console.log(`Status: ${statusCode}`)
}

parseResponse(response) // prints: Status: 200 OK

// You can use default values combined with destructuring:
let [x = "sweet", y = "sour"] = [1]
console.log(x) // prints: 1
console.log(y) // prints: "sour"

const { place: map = "Narnia", characters = 2 } = { place: "Hogwarts" }
console.log(map) // prints: "Hogwarts"
console.log(characters) // prints: 2
```

#### The End

Stay awesome.

![xkcd comic, Tapping](../images/blog/rest_and_spread/tapping.png)

###### Image Credit: [xkcd](https://xkcd.com/), https://xkcd.com/324/

### Resources:

1. [Default Parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters), [Destructuring assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment), [The arguments object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments), [Rest Parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters), [Spread Syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) - MDN Web Docs
2. [Data Structures: Objects and Arrays](https://eloquentjavascript.net/04_data.html) - Eloquent Javascript
3. [Rest parameters and spread syntax](https://javascript.info/rest-parameters-spread) - javascript.info
