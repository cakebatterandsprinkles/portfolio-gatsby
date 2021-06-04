---
title: "Iterators and generators"
date: "2021-01-28"
tags: ["Web Development", "JavaScript"]
summary: "In this article, I briefly explain what generator functions and iterators are in the JavaScript context."
contributor: ""
---

In this article, we are going to talk about generator functions and the iterable concept in the JavaScript context.

Normal JavaScript functions execute until they are finished. To exit the function you either need to _return_ or _throw an error_. Think of a function that executes the steps for making a cake. A normal function will not let you have phone calls or answer the door during the cake making process. If you do either of these and decide you want to continue the cake making process, you have to start all over.

With ES6, generator functions were introduced to JavaScript, which are functions that can stop executing somewhere along the way, and can continue from the point where it stopped executing. This means you can start making the cake, answer the door, come back and continue from where you left off.

#### Generator Functions:

To define a generator, you start with the _function_ keyword, and before the name of the function, you put an asterisk, like this: `function *generateNum() {}`.

There are also people using the star just after the function keyword, like this: `function* generateNum() {}`. Regardless, both of these syntaxes can be used to create generators. Whenever you run these functions, they will create a generator object.

When we call a generator, the code inside the generator is going to execute until a yield statement is found. When a yield statement is found, the execution of the generator function is paused.

A generator function returns a generator object, which has certain built-in methods to it, such as `.next()`, `.value`. These functions can be called multiple times.

Let's walk through a simple example:

```javascript
// Let's define a generator function:
function* generateNum(num) {
  console.log("num * 2")
  yield num * 2

  console.log("num * num")
  yield num * num

  return num
}

// Let's create a generator object by calling a generator function:
const generator = generateNum(10)

// The first time we call the next function, the generator executes up to the first yield statement and returns whatever was yielded.
console.log(generator.next()) // num * 2
//                               {value: 20, done: false}

// The second time we call the next function, the generator executes up to the second yield statement and returns whatever was yielded.
console.log(generator.next()) // num * 2
//                               {value: 100, done: false}

// The third time we call the next function, the generator looks for a third yield statement or a return and if it cannot find it it will return undefined as the value.
console.log(generator.next()) // {value: 10, done: true}

// Let's do it one more time
console.log(generator.next()) // {value: undefined, done: true}
```

Generators are iterable. Let's create another example to demonstrate this:

```javascript
function* list() {
  yield 1
  yield 2
  yield 3
  yield 4
  yield 5
}

// We can iterate over a generator function for every yield statement we have:

const generator = list()

const numbers = []
for (let value of generator) {
  numbers.push(value)
}

console.log(numbers) // prints: [1, 2, 3, 4, 5]
```

We can nest generators inside generators too:

```javascript
function* numList1() {
  yield 1
  yield 2
  // yield* means the upcoming function is also a generator:
  yield* numlist2()
  yield 8
  yield 9
}

function* numlist2() {
  yield 3
  yield 4
  yield 5
  yield 6
  yield 7
}

const generatorObj = numList1()
console.log(generatorObj)

let nums = []
for (let value of generatorObj) {
  nums.push(value)
}

console.log(nums) // prints: [1, 2, 3, 4, 5, 6, 7, 8, 9]

// spread syntax would also work:
console.log([...numList1()]) // prints: [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

Let's make something useful out of generator functions. We'll create a random string generator function that only consists of uppercase and lowercase letters and numbers from 0 to 9, in a format just like this: `1FgH-27io-Ou5f-BZ8q`

```javascript
const createRandomNum = () => {
  let randomNum = Math.ceil(Math.random() * 9)
  return String.fromCharCode(48 + randomNum)
}

const createUppercaseLetter = () => {
  let randomUpperCase = Math.ceil(Math.random() * 25)
  return String.fromCharCode(randomUpperCase + 65)
}

const createLowercaseLetter = () => {
  let randomLowerCase = Math.ceil(Math.random() * 25)
  return String.fromCharCode(97 + randomLowerCase)
}

// This generator function will randomly yield four characters:
function* generateRandomCharacters() {
  const functions = [
    createRandomNum,
    createUppercaseLetter,
    createLowercaseLetter,
  ]
  yield functions[Math.floor(Math.random() * 3)]()
  yield functions[Math.floor(Math.random() * 3)]()
  yield functions[Math.floor(Math.random() * 3)]()
  yield functions[Math.floor(Math.random() * 3)]()
}

// This generator function will generate a new sequence generator object and yield a string composed of 4 random characters:
function* generateRandomSequence() {
  while (true) {
    yield [...generateRandomCharacters()].join("")
  }
}

// This function will return a final string in the specified format
function generateRandomFormattedString() {
  let strArr = []
  const randomSequenceGenerator = generateRandomSequence()
  for (let i = 0; i < 4; i++) {
    strArr.push(randomSequenceGenerator.next().value)
  }
  return strArr.join("-")
}

console.log(generateRandomFormattedString())
```

---

**_Note:_**

###### Don't forget that generators can generate values forever. It is easy to create an infinite loop, so make sure that you have a reasonable stopping condition for a generator (or a break, a return, a for... of loop).

---

#### Iterables and Iterators:

**Iteration** in computer science means repeating some series of instructions over and over again until a specified condition is met. You can iterate over certain data collections by using a _while loop_, _for loop_, _for...of loop_, and _for...in loop_.

Imagine having a data collection that consists of all the books in your library. Say you want to know how many of your books have the word 'bird' in their title. You need to grab each book, check out the title, and if there is the word 'bird' in it you will need to increment a counter by one (which you start from 0). You define a set of actions that you're going to repeat for every book in your library, and when they are done, you stop and look at the counter. Your craziness level will depend on the size of your library. Either way, in the end, you will have successfully "iterated over" all the books in your library.

Not everything you see is iterable. Data types that have built-in iteration feature are **arrays**, **strings**, **sets** and **maps**. Other than that, if you want to make a collection of data iterable, you have to make it on your own.

Now let's get a little bit more technical. There is a data type in JavaScript that is called **Symbols**, and symbols provide a unique identifier. **An iterable** is a data structure that implements the `Symbol.iterator` method and makes the elements it holds accessible. `Symbol.iterator` method returns an **iterator** object, with a `next()` method and `value` and `done` properties. JavaScript objects, which are not inherently iterable, can be converted to an iterable data type by implementing the `Symbol.iterator` method.

Let's create an iterator from a regular object JavaScript object:

```javascript
let library = {
  start: 1,
  end: 15,
}

// By default, for...of loop will not work in objects.
// For for...of to work on the library object, we need to make it an iterator.

library[Symbol.iterator] = function () {
  return {
    current: this.start,
    last: this.end,

    // the next function will be called with each iteration of the for...of loop
    // but it should return each value as an object with the value and a done flag
    next() {
      if (this.current <= this.last) {
        return { value: this.current++, done: false }
      } else {
        return { value: undefined, done: true }
      }
    },
  }
}

for (let num of library) {
  console.log(num)
} // prints: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
```

In the example above, the iterator object is separate from the object it iterates over. But you can combine them as well:

```javascript
let library = {
  start: 1,
  end: 15,

  [Symbol.iterator]() {
    this.current = this.start
    return this
  },

  next() {
    if (this.current <= this.end) {
      return { value: this.current++, done: false }
    } else {
      return { value: undefined, done: true }
    }
  },
}

for (let num of library) {
  console.log(num)
} // prints: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
```

You can combine an iterator with a generator function, which has it's own built-in next method, so you don't need to write your own:

```javascript
let classroom = {
  start: 1,
  end: 15,
}

classroom[Symbol.iterator] = function* () {
  let current = this.start
  while (this.end >= current) {
    yield current
    current++
  }
}

for (let num of library) {
  console.log(num)
} // prints: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
```

This time let's create an iterator creator, a function that will make an iterator out of every object it is given as an argument and return its key value pairs:

```javascript
let iteratorCreator = function (obj) {
  return (obj[Symbol.iterator] = function () {
    const allEntries = Object.entries(obj)
    return {
      counter: 0,
      next() {
        if (this.counter < allEntries.length) {
          const entry = allEntries[this.counter++]
          const [key, value] = entry
          return { value: { key, value }, done: false }
        } else {
          return { value: undefined, done: true }
        }
      },
    }
  })
}

let person = {
  name: "Arisi",
  eyes: "old",
  nickname: "cosmic_owl",
}

iteratorCreator(person)

let values = []
for (let entry of person) {
  values.push(entry.value)
}
console.log(values) // prints: ["Arisi", "old", "cosmic_owl"]
```

I have mentioned that you could iterate over certain data collections by using a while loop, for loop, for...of loop, and for...in loop. What they do is, they keep on calling next() until they meet their specified condition, or you could say until the `done` property that returns is `true`.

#### Resources:

1. [JavaScript.info - Generators](https://javascript.info/generators)
2. [JavaScript.info - Iterables](https://javascript.info/iterable)
3. [MDN - Iterators and generators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators)
4. [MDN - Iteration Protocols](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol)
5. [MDN - Symbol](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol)
6. [Understanding Generators in ES6 JavaScript with Examples](https://codeburst.io/understanding-generators-in-es6-javascript-with-examples-6728834016d5) by Arfat Salman
7. [A Simple Guide to ES6 Iterators in JavaScript with Examples](https://codeburst.io/a-simple-guide-to-es6-iterators-in-javascript-with-examples-189d052c3d8e) by Arfat Salman
