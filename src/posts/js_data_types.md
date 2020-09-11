---
title: "JavaScript- How JS Code executes & Data Types"
date: "2019-04-06"
tags: ["Web Development", "JavaScript"]
summary: "In this article, I very briefly explain how the JS engine works. I also talk about the data types in JS, gathering them under 2 major classes: Primitive and Reference values."
---

### How JS engine executes JS code

This section is about what the browser does to your code to execute it properly. The details of this topic differ from engine to engine (or browser to browser, you could say), but they share some main ideas.

JS engines typically consist of 2 parts, an interpreter and a JIT compiler (Just In Time compiler). The interpreter starts parsing the JS code and immediately start executing it. It compiles the source code into bytecode, which is a code that targets a virtual machine rather than a specific computer architecture like a processor. At the same time, the JIT compiler determines the most frequently used code and compiles it to machine code. Machine code is binary code that is directly understandable for a computer's CPU (central processing unit). JIT does its work while the code is being executed by the interpreter.

JS engines optimize the time that is required for the compilation and execution for better performing websites. For example, the chunks of code that didn't change between the last execution and the current execution will not be recompiled, but the previously compiled code will be run again by the JS engine. This is just one of the optimizations and there are many more.

Browsers also give you a couple of other features which are called API's. API is short for Application Programming Interface, it is an interface that defines interactions for the software that is used, and how to use those interactions. These API's are part of the browser, but you can access them via your JS code, in ways that are defined by the browser. They are basically communication bridges between you and some features of the browser.

Now, how are your variables stored? How does function execution work, how is the order of execution guaranteed? Let's dive into those.

### Data Types in JS

The data types in JS can be divided into 2 major categories:

1. **Primitive values:** String, Number, Boolean, Null, Undefined, Symbols(ES6)

   If i make a variable and link a value to it (e.g. var a = 5), it will be stored in a memory. If I make another variable and assign it to the first variable(var b= a), in memory, a copy of the first variable is created and copied to the second variable(in memory, it is var b=5). If you change the first variable after this( eg. a = 10), the second variable created will still be equal to the initial value (b = 5).

2. **Reference values:** Arrays, Object Literals, Functions, Dates, anything else..

   In reference data types, if we create a variable, the variable doesn't actually hold a value, it holds a pointer. When you copy a variable, it's pointer gets copied, not it's value.

**Resources:**

1. [The Modern JavaScript Tutorial- javascript.info](https://javascript.info/)
2. [MDN web docs- Memory Management](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_Management)
3. [JS V8 Engine Explained- hackernoon](https://hackernoon.com/javascript-v8-engine-explained-3f940148d4ef)
4. [V8's Garbage Collection Logic](https://v8.dev/blog/free-garbage-collection)
5. [Academind](https://academind.com/) - Maximilian Schwarzmüller
6. [Eloquent JavaScript: A Modern Introduction to Programming](https://eloquentjavascript.net/)
7. [w3schools](https://www.w3schools.com/js/)
