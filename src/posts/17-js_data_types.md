---
title: "JavaScript- How JS Code executes & Data Types"
date: "2019-04-06"
tags: ["Web Development", "JavaScript"]
summary: "In this article, I very briefly explain the data types in JS, gathering them under 2 major classes: Primitive and Reference values."
---

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
