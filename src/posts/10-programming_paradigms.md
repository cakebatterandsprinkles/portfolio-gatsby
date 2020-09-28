---
title: "Programming Paradigms"
date: "2019-04-06"
tags: ["Computer Science"]
summary: "This article briefly explains programming paradigms under two main titles: imperative and declarative programming."
---

A "paradigm" is a thought pattern, a way of thinking, a way of looking at something. For example, there were times humanity believed the Earth was at the center of the universe, and other celestial bodies like the Sun and the Moon revolved around the Earth. This was called the "geocentric model". This model at least accepted the Earth as a sphere in constrast to the older flat-Earth model.

Around 1500s, Nicolaus Copernicus observed the sky with his naked eyes and discovered the Sun was the center of the world and the other celestial bodies revolved around it. He did not have the tools to prove he was right, but the idea was put out there, so in 1600s another great scientist named Galileo Galilei built a telescope, and came to the same conclusion, this time with data in his hands. This idea of the Sun being the center and other planets were revolving around it was called the "heliocentic model". Now, although it took some time and a lot of suffering of some great scientists (Copernicus died shortly after he published his theory, but after publishing his data, Galileo was charged with heresy and faced Roman inquisition by the Catholic church.) they opened up a new era, a new way of thinking. Rather than accepting whatever was in the ancient texts and Bible, another method of thinking was born: gathering data by observing and studying nature, forming hypotheses, designing and performing experiments to test these hypotheses and drewing conclusions from the end results, the scientific revolution. So their work resulted with what we can call a "paradigm shift". It changed one way of thinking to another.

In computer science, programming paradigm term refers to the ways of programming. It is not as strict as the scientific revolution, it is basically programmers choosing a way of doing things.

All programming languages need to follow a strategy when they are implemented. Not all programming languages are created the same way (if they were, we wouldn't need so many of them anyway). Each language has it's own limitations. So how the language is built is extremely important when it comes to paradigms it can use. For example, if a class concept doesn't exist in a language, you won't be able to use Object Oriented Programming (OOP) paradigm with it.

So most programming paradigms can be classified inside 2 main titles: imperative and declarative. Let's check them out.

**Note:** There are multi-paradigm languages (languages that allow the usage of multiple paradigms) or languages that strictly enforce a single paradigm. For example, JavaScript is a multi-paradigm language, as it allows the programmer to choose between declarative, functional and object-oriented and even a mixture of those. Java, on the other hand, strictly uses object-oriented programming paradigm.

### Imperative programming paradigm:

The word "imperative" comes from Latin word "imperare", which means "to give orders, command". (The word "emperor" also comes from the same root.)

In an imperative programming paradigm, you have to tell the computer what to do and how to do it step by step. The order of your commands also matter, because the final results will change accordingly.

To make an analogy, when imperative cooks a burger, you have to give it a strict recipe. The recipe has to tell it how it's going to cut the onions, how to make the patty, at which temperature to cook those, how to prepare the buns, how to assemble the burger and how to present it on a plate. At the end it will present you a burger.

We will talk about some other paradigms that embrace the imperative approach:

**:lollipop: Procedural programming paradigm:**

In procedural programming, you divide the instructions into procedures. What is a procedure?

A procedure is an independent piece of code that fulfills some small task. The developer accomplishes a bigger task with invoking several procedures in an order. A procedure can also be referred to as a function, subroutine, routine, method or subprogram in different programming languages, but the idea of it is the same.

Here's an example JavaScript dummy code:

```js
const button = document.querySelector("button")

const caramelizeOnions = () => {
  // caramelize onions
}

const preparePatties = () => {
  // assemble and cook burger patties
}

const toastBuns = () => {
  // toast buns
}

const assembleBurger = () => {
  caramelizeOnions()
  preparePatties()
  toastBuns()
  // assemble prepared onions, patties and buns to look like a burger
}

button.addEventListener("click", assembleBurger)
```

Some languages that support the procedural programming paradigm are: C, C++, Fortran, COBOL.

**:lollipop: Object-oriented programming paradigm:**

In object-oriented programming (OOP), you organize all of your code in classes and objects.

A class is code defining an object, or code that can be used for creating an object. In the world of OOP, the word "create" has a very specific meaning, it means create an object from a class. An object is an entity from the real world (it can be something you can touch, like a bird or a car or it can be something more abstract like a dental appointment, a restaurant booking) and that's why human mind can relate to it easily. Either way an object is something you want to store and process some data about. A class on the other hand, is a code that defines a type of object. An object can have properties (attributes) and methods (behaviours, things that can be done by an object or to an object).

An object is an instance of a class. You can create multiple instances of a class. (the process of creating an object instance from a class is called instantiation, you can instantiate multiple objects of the same type from a particular class.) When an object instance is created from a class, the class' constructor function runs first to create the instance. If you give the object a specific name to refer to, it is called a namespace.

**The 4 main concepts of OOP are abstraction, encapsulation, inheritance, polymorphism.**

**a. Abstraction:**

Abstraction means to simplify reality, to create a simple model of a somewhat complex thing. For example, you can create a Cat class, and add some properties and methods to that class that you find relevant. You will put properties and methods that you will use in your own program, but let's be honest- there is way more data and functionalities of a real cat than the ones you put there! But you abstracted the cat for your program's needs.

**b. Encapsulation:**

Encapsulation is the idea that the data inside an object should not be directly exposed. Instead, programmers who want to achieve a certain result are coaxed into proper usage by invoking certain methods that exist only for this reason (rather than accessing the data directly).

**c. Inheritance:**

For example, JavaScript is a prototype based language. Inherited class will appear as a prototype object inside the child class. The parent class that is inherited can also have a prototype, and so on. This is called the prototype chain. An object that is created without using inheritance will have the prototype of "Object", which gives access to all object methods. The methods and properties of the parent class are not copied to the children objects, it just takes note of the prototype class, and if the browser cannot find a method in the child object, it will go on to its prototype object, if it is not there, it will go on to the parent prototype object, until it reaches the Object prototype.

**d. Polymorphism:**

Polymorphism is the act of redefining a method inside a child class, to make a shared functionality more personalized for each child class. The method the parent has kind of becomes like a default one.

Basically the browser checks the class that is used to instantiate that object first. Only if the method is not defined in that class, it will proceed and check the prototype of that class.

Some languages that support the object-oriented paradigm are: Python, Ruby, Java, JavaScript, C++ etc.

**:lollipop: Parallel processing approach:**

Parallel processing means dividing program instructions among multiple processors. A parallel processing system allows multiple processors to run a program to do something in much less time. Think of the burger again, if someone prepares the patties, another one prepares the onions and another one prepares the buns, you'll be done in no time!

Of course, you can only use it if you have a multi-core processor, or multiple CPUs.

Some languages that support the Parallel processing approach: NESL (one of the oldest ones), C, C++

### Declarative programming paradigm:

The word "declarative" comes from Latin word "declarare", which means "to make it visible, to clarify".

In a declarative programming paradigm, you tell the computer what to do, but you don't explain it step by step. How to do it is up to the compiler.

If we go back to our cooking analogy, when declarative cooks a burger, you only give it the onions, frozen buns, beef, cheese and other ingredients and say "I want a burger". At the end it will present you a burger. You won't know or care how the onions were cut, in which temperature the patty was cooked. It can decide those parameters on it's own.

**:lollipop: Logic programming paradigm:**

This way of programming based on logic as its name indicates, so let's define what logic is first.

There was a man in ancient Greece with the name of **Aristotle**, who was interested in how to think more sensibly. And by sensibly I mean to take two piece of facts and from those facts make a deduction that creates a third fact. This was called "logic". Through your education you probably have faced many problems that needed the simple use of logic.

Let's give a simple example:

1: Yuki is older than Mora.
2: Carry is older than Yuki.
Deduction: Mora is younger than Carry.

Languages that support logic programming mainly work with true or false statements. You define the facts that are true first, which will be the program's knowledge base. Then you make the queries, and the program itself returns you a deducible solution, if there is one.

Some languages that support the logic programming paradigm are Prolog, Absys, ALF (algebraic logic functional programming language), Alice, Ciao.

**:lollipop: Functional programming paradigm:**

Functional programming paradigm is a language independent paradigm, and the key principle of this paradigm is handling everything by executing a series of short and simple functions. You simply organize your code

In this paradigm, all written code is within a function, all variables are scoped inside a function, functions do not modify any values outside of their block scopes, and they are not affected by any values outside of their scopes. Functions are reusable, arguably more legible, unit testing and debugging is easier. No for and while loops are used, as functional programming languages rely on recursion for iteration (Bhadwal, 2019).

Languages that support functional programming paradigm are Haskell, Scala, Clojure, Racket, JavaScript.

**:lollipop: Database processing approach:**

**Resources**

1. [Merriam-Webster Dictionary](https://www.merriam-webster.com/)
2.
