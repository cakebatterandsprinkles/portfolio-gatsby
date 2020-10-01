---
title: "JavaScript- How JavaScript code is executed"
date: "2019-04-06"
tags: ["Web Development", "JavaScript"]
summary: "In this article, I very briefly explain how the JS engine works and what the Call Stack, Heap, Web API's are."
---

### How JS engine executes JS code

This section is about what the browser does to your code to execute it properly. The details of this topic differ from engine to engine (or browser to browser, you could say), but they share some main ideas.

JS engines typically consist of 2 parts, **an interpreter** and a **JIT compiler (Just In Time compiler).** The interpreter starts parsing the JS code and immediately start executing it. It compiles the source code into **bytecode**, which is a code that targets a virtual machine rather than a specific computer architecture like a processor. At the same time, the JIT compiler determines the most frequently used code and compiles it to machine code. **Machine code** is binary code that is directly understandable for a computer's CPU (central processing unit). JIT does its work while the code is being executed by the interpreter.

JS engines optimize the time that is required for the compilation and execution for better performing websites. For example, the chunks of code that didn't change between the last execution and the current execution will not be recompiled, but the previously compiled code will be run again by the JS engine. This is just one of the optimizations, there are many more.

Browsers also give you a couple of other features which are called **the Web API's**. **API** is short for Application Programming Interface. It is an interface that defines interactions for the software that is used, and how to use those interactions. These Web API's are part of the browser, but you can access them via your JS code, in ways that are defined by the browser. They are basically communication bridges between you and some features of the browser.

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

Until this point, we ran **synchronous code**, which means the lines of code are executed in order, each function waits for the previous function to resolve before proceeding. And everything was okay, since the functions we used didn't take much time anyway. The call stack is blocked until the topmost call gets resolved, but there are some functions that don't resolve fast enough. This is why we use **asynchronous code.** Asynchronous code doesn't have to wait, the code can keep running, the call stack isn't blocked. It will resolve whenever it can.

Let's make an analogy to make the difference between synchronous code and asynchronous code more clear. You are a pastry chef that recently started working in a beautiful bakery. The other pastry chef who does most of the main pastries is sick, and for at least a day, you have to take over. You start baking the signature cake of that pastry and as soon as you take the recette in your hands, you realize, the sizes of the baking trays you need to use is not specified. This is a problem because if you bake it in a bigger pan, the layers will be thinner and if you bake it in a smaller pan, the layers will be thicker, and as it is a signature pastry that has to be exactly the same everytime. You call the other pastry chef hoping that she would open up and tell you the size. Until she does that, you won't be able to bake that cake. Now, in this situation you have 2 options:

1. You can stop doing anything until the other chef calls you to inform you about the sizes of the baking trays.
2. You can continue with other tasks you need to do, gathering the items for the cake, making the fillings, bake the other pastries needed for the day.

In option 1, you execute synchronously. Synchronous communication is actually rarely needed in our daily lives. You might be a surgeon with a patient on the table, waiting for the pathology result to decide what to do in the next step. In the surgeon example, the synchronous communication and execution is absolutely necessary, but real life situations like this is really rare (if you are not a surgeon or a pathologist).

Most of us use asynchronous communication and execution most of our daily lives. We send emails, text messages and leave voice mail. Then we continue our day, and other person gets in touch with us whenever they can.

So how does the browser manage aynchornous code?

We have talked about the Web API's in the previous paragraphs. [Here](https://developer.mozilla.org/en-US/docs/Web/API) is the list of the available Web API's. An important feature of Web API's is that they work asynchronously. The Web API's have a container separate from the call stack, and the action remains inside this container until it is triggered. This can be a click event, an HTTP request (AJAX), or a timer. Once the action is triggered, the callback function is added to another container that is called **the callback queue**. This container stores the callback functions in the order which they were added.

There is another program called **the event loop** and all this guy does is to check the callback queue and the call stack. If the call stack is empty and if there are callback functions in the callback queue, it pushes the first callback function to the call stack.

The asynchronous code execution is not managed by the JS engine, but the browser. When the callback is ready for executing, the browser basically waits until the call stack is empty, then pushes the callback function into the call stack.

Let's give a very simple example:

```
console.log("Start");

setTimeout(function() {
  console.log("Finish line")
}, 2000);

console.log("Wroom wroom!");
```

Let's see what happens where, step by step:

1. :pancakes: **Bottom pancake gets baked:** First, the overall script that is running is pushed to the stack, and as our script has no name, the first thing that will be pushed in stack will be anonymous().
2. :pancakes::pancakes: **Second pancake from the bottom gets baked:** Then the JS engine will read the file from top to bottom and first thing it sees will be the console.log("Start") statement, so that is pushed to the call stack.
3. :pancakes: **Second pancake from the bottom gets eaten:** console.log("Start") is instantly invoked and popped off the stack.
4. setTimeout(function() { console.log("Finish line")}, 2000); is added to the Web API container.
5. :pancakes::pancakes: **Second pancake from the bottom gets baked:** Code execution continues. console.log("Wroom wroom!") statement is pushed to the call stack.
6. :pancakes: **Second pancake from the bottom gets eaten:** console.log("Wroom wroom!") is instantly invoked and popped off the stack.
7. After the 2 second delay, the callback function is pushed to the callback queue.
8. :pancakes::pancakes: **Second pancake from the bottom gets baked:** The event loop checks the callback queue, sees a callback function there, checks the call stack, sees no function there, so pushes the callback function to the call stack.
9. :pancakes::pancakes::pancakes: **Third pancake from the bottom gets baked:** The callback function wants to execute a console.log. console.log("Finish line") is added to the top of the call stack.
10. :pancakes::pancakes: **Third pancake from the bottom gets eaten:** console.log("Finish line") is instantly invoked and popped off the stack.
11. :pancakes: **Second pancake from the bottom gets eaten:** callback function is resolved and popped off the stack.
12. **The last pancake is eaten:** Nothing is left in the script to execute, so it is also removed from the stack.

**Resources:**

1. [The Modern JavaScript Tutorial- javascript.info](https://javascript.info/)
2. [MDN web docs- Memory Management](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_Management)
3. [JS V8 Engine Explained- hackernoon](https://hackernoon.com/javascript-v8-engine-explained-3f940148d4ef)
4. [V8's Garbage Collection Logic](https://v8.dev/blog/free-garbage-collection)
5. [Academind](https://academind.com/) - Maximilian Schwarzmüller
6. [Eloquent JavaScript: A Modern Introduction to Programming](https://eloquentjavascript.net/)
7. [w3schools](https://www.w3schools.com/js/)
