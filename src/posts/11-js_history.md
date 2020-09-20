---
title: "JavaScript- A brief introduction"
date: "2019-04-06"
tags: ["Web Development", "JavaScript"]
summary: "This article gives general information about the history of JavaScript, JavaScript engines, and explains some related terminology, such as scopes and hoisting. "
---

### ECMAScript, JavaScript engines, and some other things

[JavaScript](https://en.wikipedia.org/wiki/JavaScript) (abbreviated as JS) is a high-level, just-in-time compiled, and multi-paradigm programming language. It initially had another name which was "LiveScript" (introduced by Netscape in 1995), but as Java was quite popular those days, that naming the language "JavaScript" would make more people use it. (Still, I should emphasize that JS and Java are two different independent languages with different syntax and principles.) Alongside HTML and CSS, JS became one of the most important technologies in the World Wide Web.

In 1996, Microsoft also released their own version of JS. Same year people saw that the two versions of something might cause a standardization problem, so it was submitted to [ECMA International](https://en.wikipedia.org/wiki/Ecma_International) (European Computer Manufacturers Association- a group that handles all sorts of different standards like product safety, acoustics, and many others. You can check [their website](https://www.ecma-international.org/) for more information).

JS is still evolving and getting better. There is a committee called TC39 at this organization (ECMA) that develops a standard for a scripting language, which is called **ECMAScript.** The members of this committee come together several times a year and discuss proposed changes.

ECMAScript is more like a reference, it describes how a language should work, but it is not a language by itself, it is just a set of rules. The browser vendors take the ECMAScript specifications as a reference and develop their engines by those rules. JS is the most famous implementation of ECMAScript (there are others like ActionScript or Jscript). You can check the ECMAScript 2020 Language Specification from [here](https://www.ecma-international.org/ecma-262/11.0/index.html#title).

Now, about the different versions throughout the years, the naming of these versions are a bit confusing. This committee used to come together and add features in every several years. They named their versions with consecutive numbers. [Here](https://www.w3schools.com/js/js_versions.asp), you can see a chart that explains what happened with each version. ES5 was released in 2009, and only in 2015 another version was released, which was called ES6. But after that, the committee decided that they were going to change the specifications annually, so the naming convention was changed into "ECMAScript- release year". So ES6 became ES2015, and each following year had their own versions (ES2016, ES2017, ES2018, ES2019, etc.)

JS was made to be executed by browsers, and its main purpose was to make webpages interactive. Browsers have embedded engines called a "JavaScript virtual machine", which is a program that parses (reads), compiles, and runs your JS code so that you can interact (click to a button, fill a form, etc.) with the website you're viewing. Different engines have different names. For example, Chrome and Opera's JS engine is called "V8", Firefox's engine is called "SpiderMonkey", different versions of IE uses “Trident” and “Chakra”, Microsoft Edge uses“ChakraCore”, and Safari uses “Nitro” and “SquirrelFish”.

Why is this important? Well, even if the language has some feature, if the engine that makes it work doesn't know about it (or in other words, if it's not implemented in the engine), the code will not be compiled properly. The engines follow ECMAScript Language Specifications and try to implement the newly added features. But it doesn't mean they will be able to implement it right away. So some features might be implemented in an engine but not by the others. This means not every feature will be available by every browser. If you see which engine supports what, you can visit [caniuse](http://caniuse.com) or [this compatibility table](https://kangax.github.io/compat-table).

JS code runs on a single thread, and what do I mean by that? The computer most of the time has multiple tasks to manage at the same time. The part of a computer that helps manage these multiple tasks is called the **[operating system (OS)](https://en.wikipedia.org/wiki/Operating_system)**. Running the JS code is yet another task that the operating system has to take care of. OS may be able to do multiple tasks at the same time which is called multi-threading, but JS code always runs on a single thread.

### JavaScript runs on a host environment

JavaScript runs on any environment that has a JS engine.

The most well-known environment is the browser. Modern browsers have their own built-in JS engines so they are very capable of running JS code.

But you can also run JS in other environments, such as on a server. So you can also use JS to send HTTP requests, fetch data from somewhere. etc. Node.js is a runtime environment that can execute JS outside of a browser (some wise person said "let's take this JS engine outside of the browser and make it a standalone tool", and that became the environment we now call Node.js.).

Node.js enables both client and server-side scripts to be written in the same language, unifying web development around a single programming language.

In-browser JS can do some stuff like modifying HTML and styles on a webpage, react to user actions, send a request to remote servers, and download and upload files to those servers, get and set cookies, inquire the user, remember some data (local storage). But it cannot read/write random files from the disk, copy or execute any programs in the computer (it has no direct access to operating system functions) or access to other windows/tabs in the browser (this is called "same-origin policy").

Node.js can access the local file system (on the machine where it executes, for example like the server) and interact with the operating system. It doesn't have the access to the loaded webpage, therefore cannot manipulate HTML or CSS.

### Dynamic vs. Weakly Typed Languages

You've probably read a sentence like this before: JS is a dynamic, interpreted, and weakly typed programming language. Oooh, the terminology. What do we mean by that?

Dynamic & interpreted means that the code is not pre-compiled, it gets parsed and compiled on the fly by the engine. Other programming languages may have pre-compiled code (the code is compiled after development, like C++), so before sharing it with end-users, the code is compiled and ready to go. But in JS, the code is evaluated and executed at runtime.

What is "weakly typed"? There are things called variables in JS, and they are simply containers for values. The values can be a number, a text, a symbol, etc. When you are working with a variable in JS, you don't have to explicitly say that you are going to work with a certain kind of variable. Instead, data types are inferred automatically. Types are associated with values, not variables. Because you did not assign a data type in the first place, the first value of a variable can be a text, and the second value that is reassigned can be a number. So the data a variable holds can change in the runtime. This is why JS is called 'loosely typed' or 'dynamically typed'. In 'strictly typed' languages, you have to define the type of data a variable will hold in advance, and you can't change it. If you want to use JS but you want 'strictly typed' variables, then using TypeScript will make more sense for you.

**Note:** You might come across some other languages that get transpiled (transformed + compiled) into JavaScript before they are run in the browser. These are mainly used to enhance readability and maintainability. The different syntax being used is called "syntactic sugar", it makes the language easier for human use, and some programmers prefer this alternative style over writing plain JS code.
Examples of these languages are CoffeeScript, TypeScript (adds strict data typing, a superset of JS, developed by Microsoft), Flow (developed by Facebook), Dart (a standalone language that has its own engine that runs in non-browser environments (like mobile apps) but also can be transpiled to JavaScript, developed by Google).

**Second note:** You can either write your JS code separately and import it to the HTML file with a script tag (which we will refer to as _external script_) or write JS code in between script tags inside the HTML file (which we will refer to as _internal script_).

### Miscellaneous: noscript, defer, async, strict mode

**When to use the [\<noscript>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/noscript) tag**

It is possible to disable JS execution from the client side, this means the browser will not be executing the JS files. If your website is heavily depending on JS, you might want to leave them a note, saying 'turn on your JS, or you will not be getting a good UI/UX experience.' For this purpose, you use <noscript> tag. The text or HTML you write inside the noscript tags will only be shown to the user only if the script type is not supported or if the browser has scripting disabled.

```js
<noscript>
  Please turn on javascript on your browser to get a full user experience.
</noscript>
```

**'defer' & 'async' tags**

These tags are only available for external scripts. Internal scripts will be executed right away.

If you add your script imports to the head section of the HTML document, the browser will parse the script tags before the hmtl content. If it has no attributes other then src, it will block the HTML parsing until the script is being downloaded, it will also execute the JS before the HTML content is loaded. Your loading time will get longer too.

When you use the 'defer' attribute, the browser downloads the JS files before the HTML is loaded, but it doesn't stop parsing the HTML and only execute the scripts after everything else is finished. (The order of the script execution is guaranteed with defer. The JS files will execute in the same order they are imported.)

If you don't want the HTML parsing to stop and also scripts can execute right after they are downloaded, then you can add the 'async' tag. The thing you have to be aware of is, the order of the script execution is asynchronous, scripts will be executed right after their downloads finish, and it might not be in the same order as the import order. (The order of the script execution is not guaranteed with async tag. Be careful if you're using multiple external scripts.)

Another way to import external scripts is to add them to the end of the body tag. This way, as the browser will see them after it has loaded the HTML, they will definitely be executed after the HTML is loaded. But importing scripts in the head section with async or defer tags is faster than adding them at the bottom of the body tag, as downloading the scripts and parsing and loading the HTML can be done at the same time. So there's that.

**What is the 'strict' mode?**

JS can work without using semicolons (just using line breaks will be ok), or without using let for a new variable. Still, it is not the best way to use JS, and using it with semicolons, etc. is the best practice. To enforce this best practice, if you write **'use strict'**; as the first line of code in your script, it will throw errors if it's used otherwise. This will ensure you are writing more optimized code.

Downside/disadvantage: If you use a strict code and a library that you use doesn't, then you are going to get errors!

### Scope and hoisting

**What is the scope?**

You can think of scopes as the place where variables are registered to. Scope is important because it determines the accessibility to variables.

There are mainly 2 major scopes:

1. Global Scope: Default scope, in the browser this refers to our window object. (The top level of the code in the browser is the window object!) Global variables are declared outside of a block and they are available throughout the application.
2. Local Scope: It is nested inside the global scope. Local variables are declared inside of a block.

A block is mainly a group of zero or more statements inside curly braces. For example, whatever is inside 'if...else' and 'for' statements are scoped locally. Also, functions are scoped locally. (There is a difference in between declaring a variable with var or let/const, but I will discuss it in a separate article.)

**What is hoisting?**

Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution. Inevitably, this means that no matter where functions and variables are declared, **they are moved to the top of their scope**.

The reality is, your code isn’t moving anywhere. It isn’t magically being moved to the top of the file. What’s happening is that your function and variable declarations are added to memory during the compilation phase.

Your browser runs your scripts twice. In the first run, it will fetch all of your declarations and add it to memory. In the second turn, it will attempt to use all those variables.

**JavaScript only hoists declarations. Initializations are not hoisted. (function declarations are also hoisted!)**

Ok so, what does this mean?

Let's declare a variable: `let a;`
Let's declare and initialize a variable: `let a = 3;`

Declaring a variable is just saying that variable exists, initializing it is giving that variable a value. Hoisting is only for declarations. It does not keep the values, it just makes note of which variables exist in the script. In both cases, only the declarations will be hoisted.

```jsx
// First case:
let a
console.log(a)
a = 3
// Prints undefined

// Second case:
console.log(a)
let a = 3
// Prints undefined

// Third case:
let a = 3
console.log(a)
// Prints 3
```

**Best Practice:** Because of hoisting, it’s considered a best practice to always declare your variables at the top of their respective scopes. This way there are no undesirable effects. You should also always try to initialize variables when you declare them. This will provide cleaner code and help avoid undefined variables.

**Resources:**

1. [The Modern JavaScript Tutorial- javascript.info](https://javascript.info/)
2. [MDN web docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
3. [Academind](https://academind.com/) - Maximilian Schwarzmüller
4. [Eloquent JavaScript: A Modern Introduction to Programming](https://eloquentjavascript.net/)
5. [w3schools](https://www.w3schools.com/js/)
6. Wikipedia- [JavaScript](https://en.wikipedia.org/wiki/JavaScript), [ECMA International](https://en.wikipedia.org/wiki/Ecma_International), [Operating System (OS)](https://en.wikipedia.org/wiki/Operating_system)
