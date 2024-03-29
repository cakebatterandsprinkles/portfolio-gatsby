---
title: "Introduction to Object Oriented Programming"
date: "2020-10-29"
tags: ["Computer Science", "Web Development", "JavaScript"]
summary: "In this article, I briefly explain what Object-Oriented Programming is, the difference between constructor functions and factory functions and super and extends keywords, using JavaScript."
contributor: ""
---

I suggest you use the Chrome console to test out the code written in code blocks (only if you want to). Way easier than anything else. (I love you, Chrome console!)

This is going to be a beginner's level article. Let's dig in.

#### What the heck is a prototype?

**A prototype** in real life is a preliminary model of something, mostly aiming to test a concept or a process. If you have a product in mind, you make a real-life model of it and improve that until it becomes exactly the way you want it to be. The final product is generally an improved version of the prototype.

In programming, prototypes are how JavaScript objects inherit certain features. Prototypes give an object a basic set of features, and you can improve those features (or even rewrite them) to create your object's final version. A prototype is just a starting point.

JS is described as a prototype-based language, to inherit a set of features, objects can have a prototype object, which includes a set of predefined methods and properties. You can find the prototype of any variable by typing **variableName.\_\_proto\_\_**. (Double underscore is also referred to as **dunder**.)

Any variable created in JS has an automatically assigned prototype object, which depends on the data type. If you want to check out what _any_ array's prototype object consists of, you can simply write **Array.prototype**. **\_\_proto\_\_** refers to the reference of a prototype object (a property name on a given variable), whereas **prototype** refers to the real prototype object.

A prototype object can have another prototype object of its own (it might be based on another object), and this is what is called a **prototype chain**.

The logic is simple and effective. Rather than defining every method an array needs in every array that is created, we reference a prototype object that contains all methods an array needs by default, and we can reach and use the methods in that prototype.

You can add your own methods into prototypes as well. Let's add an announce method to the protoype of string:

```javascript
String.prototype.announce = function () {
  return `ATTENTION, ATTENTION! ${this.toUpperCase()}!!!`
}
// Now the announce method is available for every string you write.

let str = "Office will be closed at 9 PM as of today"
console.log(str.announce())

// This will print out: "ATTENTION, ATTENTION! OFFICE WILL BE CLOSED AT 9 PM AS OF TODAY!!!"
```

You can also override a method in a prototype object by simply redefining it.

#### The main concept

OOP itself is actually about the idea of organizing the code by making everything objects. The objects in our code are constructed from what we call **classes** or **constructor functions**, which is something like a blueprint or a recipe. Objects created from classes are called **instances**. As a convention, to separate constructor functions from other functions, constructor functions are capitalized.

#### Factory functions and Constructor functions

Both factory functions and constructor functions are ways of making a blueprint of an object. A factory function accepts some arguments and using those arguments, it creates a new object with various properties and methods and returns that object.

Let's see an example of a factory function:

```javascript
function Animal(type, noise) {
  const animal = {}
  animal.type = type
  animal.noise = noise
  animal.makeNoise = function () {
    console.log(this.noise.toUpperCase().repeat(3))
  }

  return animal
}

// Now, you can define a new animal using this factory function:
const shiba = new Animal("dog", "Woof!")
shiba.makeNoise() // prints out: WOOF!WOOF!WOOF!
const kitty = new Animal("cat", "Meow!")
```

With the factory function approach, with each new animal instance, a unique copy of the same makeNoise function is created and added to the created object. For example, `kitty.makeNoise === shiba.makeNoise` will return false, because functions are reference type data and these two functions refer to different functions, although they look the same. This creates a problem, because each function you create takes up some space, and you keep creating the same function. You can see how inefficient this is, right?

This is where the constructor functions come into play.

```javascript
function Animal(type, noise) {
  this.type = type
  this.noise = noise
  this.makeNoise = function () {
    console.log(this.noise.toUpperCase().repeat(3))
  }
  console.log(this)
}

Animal("cat", "meow")
```

Take a moment to analyze the function in the upper code block. What do you think the `console.log(this);` will print?

Surprise! It prints the window object. 'this' keyword refers to the parent object, but in this case, there is none, so this refers to the nearest scope before itself.

But you have noticed that this function is capitalized, and we were talking about constructor functions. So this must be a constructor function, and that's right, it is! But only if you create an instance with the **new** keyword. Seeing the **new** keyword, JS creates a new, empty object, links **this** keyword to the just created empty object, then returns that object at the end. It also sets the constructor function of this new object to the main constructor function, which is Animal in our example. So any method inside the Animal constructor will be available to the instances of it through the prototype, but they will not be an actual part of the individual objects. This is much more efficient when compared to factory functions.

Let's write the same blueprint object using a constructor function:

```javascript
function Animal(type, noise) {
  this.type = type
  this.noise = noise
}

Animal.prototype.makeNoise = function () {
  console.log(this.noise.toUpperCase().repeat(3))
}

const taro = new Animal("cat", "meow")
const mochi = new Animal("bird", "chirp")

taro.makeNoise() // prints: "MEOWMEOWMEOW"
mochi.makeNoise() // prints: "CHIRPCHIRPCHIRP"
```

Now, with the constructor function approach, the makeNoise function refers to the same prototype object. This time, `taro.makeNoise === mochi.makeNoise` will return true, because they literally point to the same function.

#### JS Classes

Although the constructor function method worked, the syntax was a little bit annoying, as the definition of the blueprint and its methods were separated from each other. This was one of the reasons why **Class syntax** was introduced. The Class syntax achieves the same result as a constructor function, but with a prettier syntax.

For this, we use the keyword **class**. Class names also start with an uppercase letter, just like constructor functions, indicating they are blueprints. The first function in a class is a constructor function, and this function executes immediately after an instance of this blueprint is created.

Let's re-write the example we had in the previous title with the class syntax:

```javascript
class Animal {
  constructor(type, noise) {
    this.type = type
    this.noise = noise
  }
  makeNoise() {
    console.log(this.noise.toUpperCase().repeat(3))
  }
}

const lulu = new Animal("parrot", "hello")
lulu.makeNoise() // prints: "HELLOHELLOHELLO"
```

The methods defined inside the class are added to the prototype automatically. So the pieces of a blueprint are grouped, which makes it way easier to read and manage.

#### Extends and Super keywords

You can create classes based on other classes. As an example, we had a very generic Animal class, and by using the **extends** keyword, we can make a Bird class that is based on the Animal class but has its own additional unique methods and properties.

Let's rewrite and extend the animal class:

```javascript
class Animal {
  constructor(name, age, legNumber) {
    this.name = name
    this.age = age
    this.numberOfLegs = legNumber
  }

  sleep() {
    return `Sssh! ${this.name} is sleeping.`
  }
}

class Bird extends Animal {
  talk() {
    return `Chirp chirp`
  }
}
```

When you extend from another class, it uses the constructor that belongs to the one being extended. When you call a method, it first checks the current class, to see if it is defined. If the function is not defined there, it moves along the prototype chain, one by one, until it finds the function definition. (If it can't find the function definition anywhere, it will be quite unhappy and shout at you, and you will know.) So if you redefine a method that has also been defined in the prototype previously, it will execute the redefined version.

Check this example out:

```javascript
class Animal {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  sleep() {
    return `Sssh! ${this.name} is sleeping.`
  }
}

class Parrot extends Animal {
  talk() {
    return `Hello, can I have a kiss?`
  }
  sleep() {
    console.log("ZzZzZzZzZz...")
  }
}

const parrot1 = new Parrot("Loki", 2)
parrot1.sleep() // prints: "ZzZzZzZzZz..."
```

What if we want to extend but also add other stuff to our constructor? That's when the **super** keyword comes into play. Super keyword calls the extended class' constructor function, so the super keyword is a reference to what you're extending. After calling super, you can add whatever you want to add.

Let's see it in action:

```javascript
class Animal {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  sleep() {
    return `Sssh! ${this.name} is sleeping.`
  }
}

class Bird extends Animal {
  constructor(name, age, colors) {
    super(name, age)
    this.colors = colors
  }
  talk() {
    return `Chirp chirp`
  }
}
```

Yeehaw, done! (For now.)

#### Resources:

1. [Object-oriented JavaScript for beginners](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_JS) by MDN
2. [Object-oriented Programming](https://eloquentjavascript.net/1st_edition/chapter8.html) by Eloquent JavaScript
3. [The Flavors of Object-Oriented Programming (in JavaScript)](https://css-tricks.com/the-flavors-of-object-oriented-programming-in-javascript/) by Zell Liew
4. [Object Oriented Programming in JavaScript](https://www.freecodecamp.org/news/how-javascript-implements-oop/) – Explained with Examples by Dillion Megida
