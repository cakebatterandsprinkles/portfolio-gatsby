---
title: "Introduction to TypeScript"
date: "2021-03-26"
tags: ["TypeScript", "React"]
summary: "In this article, I briefly explain some diffences between JavaScript and TypeScript, and give small examples of how to use TypeScript with React."
---

### What is TypeScript?

TypeScript is an open source programming language developed and maintained by Microsoft, and it is simply a **superset** of JavaScript. Being a superset means offering every feature JavaScript has, but adding a little bit more on top, such as **optional static typing**, **generics**, and **interfaces**. (So TypeScript is nothing to be scared of. Underneath, it is our good old JavaScript.) Of course, it comes with a certain disadvantage: it cannot be executed by JavaScript environments, such as the browsers. So TypeScript comes with a TypeScript compiler, which compiles TypeScript into JavaScript so that it can be run in JS environments.

The main advantage of using **TypeScript Type System** is catching errors during development phase. With JavaScript, you can only see errors during runtime, when you execute your code, which is not very efficient. The type system is an improvement for the development workflow. As the code is being written, TypeScript compiler constantly analyzes it, and this is called **type checking**. For type checking, the TS compiler uses something called **type annotations** which are simply type rules that the developer defines. This type system is only active during development and not available in runtime. (Which makes sense, because TS is run in JS environments and is compiled to JS before it is executed.) Also, the TS compiler does not do any performance optimizations.

If you want to replicate the code in the following examples, I suggest you to use [TS Playground](https://www.typescriptlang.org/play), which is an in-browser TS compiler.

### TypeScript Type System

JavaScript has **dynamic types**, which means, you can assign different types of values to a single variable. If you're not familiar with JavaScript types, munch on [this article](https://yagmurcetintas.com/journal/javascript-introduction-to-data-types) first.

Simply put, types are labels that define the certain properties and methods a value has. In TypeScript, there is a supertype called **any**, which encompasses all the data types available. A variable with the type **any** can literally be anything. If a variable is of type any, it means you are not using type checking on it, therefore the variable becomes dynamically typed. There are also **built-in types** which are the classic primitive (string, number, boolean, undefined, null, bigInt, symbol, void) and a reference types (Object, Array, Function, Date). The void type is TypeScript specific and does not exist in JavaScript. In TypeScript there are also **user-defined types** which are enums, classes, arrays, and interfaces, created by and for the developer for specific needs.

There are two ways for TypeScript to understand what type a variable is. One of them is the developer writing a chunk of code that specifies what type of a value the variable will hold, and this is called **type annotation**. If it isn't specified by the developer, the compiler itself tries to figure out the type of that variable and assign a type to it, and this is called **type inference**.

**Type Annotations:**

Let's create some type annotations ourselves:

```typescript
// Type annotation means that we are going to assign a single type of values to that variable:
let firstName: string = "Cookie"
let age: number = 3
let hasWings: boolean = true
let evilness: null = null
let eyeColor: undefined = undefined

// If you try to reassign a different type of value to the same variable, you'll get a type error:
firstName = true // Error: Type 'boolean' is not assignable to type 'string'.

let hatchDate: Date = new Date(2018, 5, 28)

// Type annotations ending with square brackets denote the type is going to be an array filled with the specified type:
let colors: string[] = ["blue", "green"]
let luckyNumbers: number[] = [3, 12, 81]

// Or we can assign a type that we create ourselves:
class Parrot {...}
let parrotlet: Parrot = new Parrot()

// Object literal:
let coordinates: {latitude: number; longitude: number} = {
  latitude: 51.5,
  longitude: 0
}
coordinates[latitude] = true // Error: Type 'boolean' is not assignable to type 'number'.
```

Functions are a little bit harder to read with the type annotation. A function takes the types of the expected arguments and the type of value it is going to return. If it returns nothing at all, the return type is 'void'.

```typescript
const multiplier: (num1: number, num2: number) => number = (
  num1: number,
  num2: number
) => {
  return num1 * num2
}

// If we dissect this function, the first half following the variable name is the decription of the function:
// Will take two arguments of type number and will return a number:
(num1: number, num2: number) => number

// And the rest is the function itself:
(num1: number, num2: number) => num1 * num2

// We can also write the same function like this:
const multiplier = (num1: number, num2: number) : number => num1 * num2

// If we dissect it, the part below specifies the type of arguments, and the return type, respectively:
(num1: number, num2: number) : number

// Same style works with anonymous functions as well:
const divider= function(num1: number, num2: number): number{
  return num1 / num2
}
```

**Type Inference:**

While going through all this trouble is necessary for using TypeScript better, it is also optional because of the **type inference**. You could delete all the type annotations and everything would still work perfectly. If the **variable declaration** (naming a variable) and **initialization** (assigning a value to a variable for the first time) are on the same line, TypeScript compiler will infer the type of a value and will hold you responsible for it by not letting you assign any other type to that variable, as you can see in the example below:

```typescript
let fruitType = "peach"

console.log(typeof fruitType) // string
fruitType = true // Error: Type 'boolean' is not assignable to type 'string'.
```

If the declaration and the initialization are on separate lines, the TypeScript will assign the type 'any' to that variable, as you can see in the example below:

```typescript
// When we declare a variable but don't assign any values to it, the type is inferred as 'any'.
// Although we assign it a string on the second line, the type will not be inferred as 'string', but stay 'any'.
let fruitType
fruitType = "peach"

// If you want to declare and initialize in separate lines but don't want to give up on strict typing, you can do it like this:
let favoriteFruit: string
favoriteFruit = "strawberry"

favoriteFruite = true // Error: Type 'boolean' is not assignable to type 'string'.
```

In functions, TypeScript compiler can help you by inferring the return value, but specifying it always makes it less prone to errors.

```typescript
// In multiplier1 function, the return type is implicitly set to number.
// In multiplier2 function, the return type is implicitly set to void, because we forgot the return keyword. If we have explicitly set the return type to number, the compiler would have warned us that this function wasn't returning anything.
const multiplier1 = (a: number, b: number) => {
  return a * b
}

const multiplier2 = (a: number, b: number) => {
  a * b
}

const multiplier3 = (a: number, b: number): number => {
  a * b // Error: A function whose declared type is neither 'void' nor 'any' must return a value.
}
```

So when to let the compiler help you by inferring, and where to use type annotations? Simply, if you are going to initialize a variable later, you can use annotations when you are declaring it. Also in places where you know the type is going to be inferred as 'any', as this may introduce bugs in the future.

Some built-in functions such as `JSON.parse()` has the return type of 'any', mainly because they can return several types of values. The return type of the `JSON.parse()` function heavily depends on the argument it receives, so the compiler cannot do any type checks on the returned value. There are times like this where 'any' makes sense, but most of the time the type 'any' should be avoided at all costs, because it renders the type checking feature of the TypeScript compiler useless.

In some scenarios, a variable might have to hold two or more different types of values, and we do that by using a pipe (|). These are called **union types**. In most of these cases the type inference will not work us, so we have to use type annotation.

Example:

```typescript
let age: number | string = "Age not specified." // This states the 'age' variable is will either be a number or a string.
console.log(age) // Prints: "Age not specified."
age = 3
console.log(age) // Prints: 3
age = false // Error: Type 'boolean' is not assignable to type 'string | number'.
```

**Void and Never:**

A function with a return type of void is a function that returns nothing. It can only return two values: 'undefined' and 'null'.

A function with a return type of never is a function that is never expected to return anything, ever. You don't even expect to execute the whole function. Never is very rarely, almost never used.

```typescript
// In JS and TS, functions return undefined implicitly if no return statement is defined explicitly:
const errorLogger = (errorMessage: string): void => console.log(errorMessage)

const errorCreator = (a: number | string): never => {
  if (a < 0) throw new Error("The number cannot be lower than 0.")
  else if (a === 0) throw new Error("The number cannot be equal to 0.")
  else throw new Error("The number cannot be higher than 0.")
}
```

**Destructuring with type annotations:**

If you're destructuring, you need to define the types of the destructured elements:

```typescript
const pets = [
  {
    nickname: "Cookie",
    age: 3,
    message: "gimme almonds please",
    shout(message: string): void {
      console.log("YAY!")
    },
  },
  {
    nickname: "Poof",
    age: 5,
    message: "oink oink oink",
    shout(message: string): void {
      console.log("YAY!")
    },
  },
]

// destructuring each pet object on the spot, and defining the exact structure with types just after it:
pets.map(
  ({
    nickname,
    age,
    message,
    shout,
  }: {
    nickname: string
    age: number
    message: string
    shout: (msg: string) => void
  }) => {
    console.log(`${nickname} is ${age} years old.`)
    shout(`${message}!!!!`)
  }
)
```

**Typed Arrays:**

Typed arrays are regular arrays where each element is consistently the same type. If you make an array that is only supposed to contain strings, then it will give error when any type of other value is being added to it. If you initialize a variable using an empty array, the TypeScript compiler will implicitly make it as type any[], which is something we want to avoid. If the array is going to be initialized with values inside, we can let the compiler infer the type.

```typescript
// initializing a variable with an empty array and type annotation:
let cakeArr: string[] = []

// Type inference:
let teaArr = ["peach blossom", "raspberry", "blueberry", "hojicha", "genma cha"] // The inferred array type is: string[]
let randomArr = [3, "cat", new Date()] // The inferred array type is: (string | number | Date)[]
let arrOfArrs = [["hello"], "world"] // The inferred array type is: (string | string[])[]
let arrOfArrs = [["hello"]] // The inferred array type is: string[][]
let arrOfArrs = [["hello"], [3, 5, 6]] // The inferred array type is: (string[] | number[])[]
```

There are many advantages of typed arrays. The most visible one is preventing the addition of incompatible values to the array. Another one is helping the compiler figure out the type of an extracted value, therefore enabling us to use built-in functions for that given value.

**Tuples:**

Tuple is a data structure very similar to the array. It is used to represent a fixed number of elemens that belong to a single thing in a certain order.

```typescript
// Let's create a simple object:
const pet = {
  nickname: "Cookie",
  age: 3,
  isGreen: true,
}

// What if I wanted to represent the values of these properties inside of an array?
const pet1 = ["Cookie", 3, true]

// We can represent them inside the array, but as we lose the property names while doing that, keeping the order of things can help us understand what those values mean. So if I keep the order, I can create another pet just like this:
const pet2 = ["Dust", 7, false]

// A problem is, if you don't specify the type as a tuple, the TypeScript compiler thinks its an array. The tuple type annotation is slightly different from an array:
const pet3: [string, number, boolean] = ["Dander", 4, false]
pet2[0] = true
console.log(pet2) // Prints: [true, 7, false]
pet3[0] = true // Error: Type 'boolean' is not assignable to type 'string'.
```

Tuples are kinda hard to read, and from the human perspective, objects with key-value pairs seem much more legible. But if you're working with lots of data and tables, they might be useful at certain corner cases.

**Type Aliases:**

Sometimes defining the types outside the code that defines logic can make code more legible, especially if the same set of types are being reused. To implement this, we use the `type` keyword:

```typescript
// Let's create a type User:
type User = { name: string; age: number }

// Let's create some users of type User:
const u1: User = { name: "Maruchan", age: 30 }
const u2: User = { name: "Cake", age: 36 }

// Let's create a function to test how we're doing:
function isOlder({ name, age }: User, checkAge: number) {
  if (age > checkAge) return `Hi ${name}! Have a fun day!`
  else
    return `Hi ${name}! We are not accepting people under ${checkAge} at the moment. Please try again when you're older!`
}

console.log(isOlder(u1, 21)) // Prints: "Hi Maruchan! Have a fun day!"
console.log(isOlder(u2, 40)) // Prints: "Hi Cake! We are not accepting people under 40 at the moment. Please try again when you're older!"
```

### Interfaces

An interface is a custom type that describes the structure of an object. They are not blueprints like classes are, and they are only useful for type checks that TypeScript compiler does for us.

This code below works perfectly fine, but as the type annotations get longer and more complex, it makes the whole code crowded. If we used destructuring, it would look even more crowded than it is right now. And if we are using the same type in other places as well, we would be unnecessarily duplicating code, making it harder to manage, debug and read.

```typescript
const car = {
  manufacturer: "Subaru",
  year: 2019,
  isAvailable: true,
  label(): string {
    return `${this.manufacturer.slice(0, 2).toUpperCase()}${this.year}`
  },
}

const printInfo = (car: {
  manufacturer: string
  year: number
  isAvailable: boolean
  label(): string
}): void => {
  car.isAvailable
    ? console.log(
        `A ${car.year} model ${
          car.manufacturer
        } is available. Label: ${car.label()}`
      )
    : console.log(
        `The ${car.year} model ${
          car.manufacturer
        } is not available. Label: ${car.label()}`
      )
}

printInfo(car) // Prints: "A 2019 model Subaru is available."
```

Let's try to rewrite the code above, this time using an interface. To create an interface, we use the `interface` keyword, and the first letter is always capitalized as a convention:

```typescript
interface Car {
  manufacturer: string
  year: number
  isAvailable: boolean
  label(): string
}

const car1 = {
  manufacturer: "Subaru",
  year: 2022,
  isAvailable: false,
  label(): string {
    return `${this.manufacturer.slice(0, 2).toUpperCase()}${this.year}`
  },
}

// Any object given as an argument to printInfo function has to satisfy the type specifications that Car interface has. If it doesn't, we'll receive an error. It doesn't check for extra properties, so as long as it satisfies the interface, we are good to go.
const printInfo = (car: Car): void => {
  car.isAvailable
    ? console.log(
        `A ${car.year} model ${
          car.manufacturer
        } is available. Label: ${car.label()}`
      )
    : console.log(
        `The ${car.year} model ${
          car.manufacturer
        } is not available. Label: ${car.label()}`
      )
}

printInfo(car1) // Prints: "The 2022 model Subaru is not available."
```

Now let's try to make a more generic interface that we can reuse in multiple places:

```typescript
interface Product {
  isAvailable: boolean
  label(): string
}

const car = {
  manufacturer: "Subaru",
  year: 2022,
  isAvailable: false,
  label(): string {
    return `Car label: ${this.manufacturer.slice(0, 2).toUpperCase()}${
      this.year
    }`
  },
}

const fruit = {
  name: "Strawberry",
  expirationDate: new Date(),
  isAvailable: true,
  label(): string {
    return `Produce label: ${this.name
      .slice(0, 2)
      .toUpperCase()}${this.expirationDate.toString().slice(8, 10)}`
  },
}

const printInfo = (product: Product): void => {
  console.log(`${product.label()}, Available: ${product.isAvailable}`)
}

// Notice that both objects have a label function, but they are different functions.
printInfo(car) // Prints: "Car label: SU2022, Available: false"
printInfo(fruit) // Prints: "Produce label: ST06, Available: true"
```

### Classes

### Generics

### Resources:

1. [TypeScript Documentation](https://www.typescriptlang.org/docs/)
2. [tutorialspoint - TypeScript](https://www.tutorialspoint.com/typescript/)
3. https://www.digitalocean.com/community/tutorials/typescript-type-alias
4.
