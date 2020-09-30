---
title: "JavaScript- How JS Code executes & Data Types"
date: "2019-04-06"
tags: ["Web Development", "JavaScript"]
summary: "In this article, I very briefly explain how the JS engine works. I also talk about the data types in JS, gathering them under 2 major classes: Primitive and Reference values."
---

### How JS engine executes JS code

This section is about what the browser does to your code to execute it properly. The details of this topic differ from engine to engine (or browser to browser, you could say), but they share some main ideas.

JS engines typically consist of 2 parts, **an interpreter** and a **JIT compiler (Just In Time compiler).** The interpreter starts parsing the JS code and immediately start executing it. It compiles the source code into **bytecode**, which is a code that targets a virtual machine rather than a specific computer architecture like a processor. At the same time, the JIT compiler determines the most frequently used code and compiles it to machine code. **Machine code** is binary code that is directly understandable for a computer's CPU (central processing unit). JIT does its work while the code is being executed by the interpreter.

JS engines optimize the time that is required for the compilation and execution for better performing websites. For example, the chunks of code that didn't change between the last execution and the current execution will not be recompiled, but the previously compiled code will be run again by the JS engine. This is just one of the optimizations, there are many more.

Browsers also give you a couple of other features which are called API's. **API** is short for Application Programming Interface. It is an interface that defines interactions for the software that is used, and how to use those interactions. These API's are part of the browser, but you can access them via your JS code, in ways that are defined by the browser. They are basically communication bridges between you and some features of the browser.

Now, how are your variables stored? How does function execution work, how is the order of execution guaranteed? Let's dive into those.

We have two important concepts inside of the JS engine, the **heap** and the **call stack**. Heap is a long term memory allocated to the browser by the operating system and the browser manages the heap. Stack manages the execution flow of the program, it is more of a short term memory. The stack is interested in the current function that is being executed. If you call a function, it is added on top of the call stack and when that function returns, it is removed from there.

JavaScript is a single-threaded programming language. It does one thing at a time and it has a single call stack.

If you declare a function but never call it, it gets registered in the heap. The declared functions have a rather long life, they stay registered in the heap as long as your application stays open.

Let's see how heap and stack works on a simple JS code snippet:

```
function getAge(){
   return prompt('Your age:', '');
};

function getPermission(){
   const age = parseInt(getAge());
   if (age >= 0 && age < 21) {
      console.log('Age under 21: drinking alcoholic beverages is not permitted.')
   } else if (age >= 21) {
      console.log('You are legally permitted to drink. Enjoy yourself.')
   } else if (typeof(age) !== number ){
      console.log("Please enter a valid number.")
   }
}

getPermission();
```

Alright, you can try running this code snippet in your Chrome console.

So, at the example above, the two functions (getAge and getPermission) are stored in the Heap, and as the code runs, the browser pushes the currently running function to the stack. The topmost item in the call stack is always the thing that's currently happening.

Let's do it step by step:

1. :pancakes: **Bottom pancake gets baked:** First, the overall script that is running is pushed to the stack, and as our script has no name it will run as "anonymous". This makes the first thing that will be pushed in stack anonymous().
2. :pancakes::pancakes: **Second pancake from the bottom gets baked:** Then the JS engine will read the file from top to bottom and getPermission function will be called. The second item that is pushed to the call stack is getPermission().
3. :pancakes::pancakes::pancakes: **Third pancake from the bottom gets baked:** parseInt() is pushed on top of the stack.
4. :pancakes::pancakes::pancakes::pancakes: **Fourth pancake from the bottom gets baked:** getAge() is pushed on top of the stack.
5. :pancakes::pancakes::pancakes::pancakes::pancakes: **Fifth pancake from the bottom gets baked:** prompt() is pushed on top of the stack.
6. :pancakes::pancakes::pancakes::pancakes: **Fifth pancake from the bottom is eaten:** Once the user enters clicks ok or cancel, the prompt will return something, so the prompt function is done executing. It is popped off from the call stack. (It doesn't mean that it is also moved from the heap. Functions that are registered in the heap stay there as long as the application is open. The data needed for that function execution is also removed from the heap.)
7. :pancakes::pancakes::pancakes: **Fourth pancake from the bottom is eaten:** getAge function returns the result of the prompt, therefore it is resolved and removed from the stack.
8. :pancakes::pancakes:**Third pancake from the bottom is eaten:** parseInt function returns an integer, therefore it is resolved and removed from the stack. It is stored as a variable, so age variable is added to the heap.
9. :pancakes: **Second pancake from the bottom is eaten:** getPermission function returns something according to the age variable, therefore it is also resolved and removed from the stack. After this function is resolved, the age variable is not needed, so it is also removed from the heap.
10. **The last pancake is eaten:** Nothing is left in the script to execute, so it is also removed from the stack.

Call stack has a certain type of order, it is to keep the relationship between the functions that are running (to keep track of who called who).

If there is something in the code that gives a compiling error, the code execution will stop and the JS engine will show you an error that contains something called a **stack trace.** It is basically a snapshot of the call stack.

Example of an erroneus function call:

```
function sayHiBack(){
   throw new Error("Subject scared of people.");
};

function createConversation(){
   console.log("Hi!");
   sayHiBack();
}

createConversation();
```

If you run this code snippet in your console, it will give back a stack trace with the error message that looks like this:

![error](../images/blog/js_heap_stack/error.png)

Example of a recursive function that causes an error:

```
function callsItself(){
   callsItself();
}

callsItself();
```

If you run this code in your console, you will encounter this error:

![recursion error](../images/blog/js_heap_stack/recursion_error.png)

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
