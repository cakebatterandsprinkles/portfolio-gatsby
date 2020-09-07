---
title: "JavaScript- An introduction"
date: "2019-04-06"
tags: ["Web Development", "JavaScript"]
summary: "This article gives a general information about JavaScript, engines, and explains some terminology related to JS. "
---

**ECMAScript, JavaScript engines, and some other things**

JavaScript (abbreviated as JS) is a high-level, just-in-time compiled, and multi-paradigm programming language. It initially had another name which was "Livescript", but as Java was quite popular those days, that naming the language "JavaScript" would make more people use it. Alongside of HTML and CSS, JS became one of the most important technologies in the World Wide Web.

The standards of this language is determined by an international group called ECMA (founded in 1961). They are in charge of all sorts of different standards like product safety, acoustics and many others. (You can check [their website](https://www.ecma-international.org/) for more information.) There is a committee called TC39 at this organization that develops a standard for a scripting language, which is called ECMAScript. The members of this committee come together 6 times a year and discuss proposed changes.

ECMAScript is more like a reference, it basically describes how a language should work, but it is not a language by itself, it is just a set of rules. You can check the ECMAScript 2020 Language Specification from [here](https://www.ecma-international.org/ecma-262/11.0/index.html#title).

Now about the different versions throughout the years, the naming of these versions are a bit confusing. This committee used to come together and add features in every several years. They named their versions with consecutive numbers. [Here](https://www.w3schools.com/js/js_versions.asp), you can see a chart that explains what happened with each version. ES5 was released in 2009, and only at 2015 another version was released, which was called ES6. But after that, the committee decided that they were going to change the specifications annually, so the naming convention was changed into "ECMAScript- release year". So ES6 was also ES2015, and each following year had their own versions (ES2016, ES2017, ES2018, ES2019, etc.)

JS was made to be executed by browsers, and its main purpose was to make webpages interactive. Browsers have embedded engines called a "JavaScript virtual machine", and it is basically a program that parses (reads), compiles and runs your JS code so that you can interact (click to a button, fill a form etc.) with the website you're viewing. Different engines have different names, for example Chrome and Opera's JS engine is called "V8", Firefox's engine is called "SpiderMonkey", different versions of IE uses “Trident” and “Chakra”, Microsoft Edge uses“ChakraCore”, and Safari uses “Nitro” and “SquirrelFish”.

Why is this important? Well, even if the language has some feature, if the engine that makes it work doesn't know about it (or in other words, if it's not implemented in the engine), the code will not be compiled properly. The engines follow ECMAScript Language Specifications, and try to implement the newly added features. But it doesn't mean they will be able to implement it right away. So some features might be implemented in an engine but not by the others. This means not every feature will be available by every browser. If you see which engine supports what, you can visit [caniuse](http://caniuse.com) or [this compatibility table](https://kangax.github.io/compat-table).

In browser JS can do some stuff like modifying HTML and styles on a webpage, react to user actions, send request to remote servers, and download and upload files to those servers, get and set cookies, inquire the user, remember some data (local storage). But it cannot read/write random files from the disk, copy or execute any programs in the computer (it has no direct access to operating system functions) or access to other windows/tabs in the browser (this is called "same origin policy"). These are all protections for the user.

Another great thing about JS is, it is not limited to the browsers. Node.js is a runtime environment that can execute JS outside of a browser, for example in a server. Node.js enabled both client and server-side scripts to be written in the same language, unifying web development around a single programming language.

**Note:** You might come across some other languages that gets transpiled (transformed + compiled) into JavaScript before they are run in the browser. These are mainly used to enhance readability and maintainability. The different syntax being used is called "syntactic sugar", it makes the language easier for human use, and some programmers prefer this alternative style over writing plain JS code.
Examples of these languages are: CoffeeScript, TypeScript (adds strict data typing, superset of JS, developed by Microsoft), Flow (developed by Facebook), Dart (a standalone language that has its own engine that runs in non-browser environments (like mobile apps), but also can be transpiled to JavaScript, developed by Google).

**Second note:** You can either write your JS code separately and link it to the html file with a script tag (which we will refer to as external script) or write JS code in between script tags inside the html file (which we will refer to as internal script).

**When to use the [\<noscript>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/noscript) tag**

It is totally possible to disable JS execution from the client side, this means the browser will not be executing the JS files. If your website is heavily depending on JS, you might want to leave them a note, saying 'turn on your JS, or you will not be getting a good UI/UX experience.' For this purpose, you use <noscript> tag. The text or HTML you write inside noscript tag will only be shown to the user only if script type is not supported or if the browser has scripting disabled.

```js
<noscript>
  Please turn on javascript on your browser to get a full user experience.
</noscript>
```

**'defer' & 'async' tags**

These tags are only available for external scripts. Internal scripts will be executed right away.

If you add your script imports to the head section of the html document, you should use defer attribute so that it will download .js files when it hits them, but not execute them until the html itself is loaded. So this way browser downloads the js files before the html is loaded, but it doesn't stop parsing the html and only execute the scripts after everything else is finished. (The order of the script execution is guaranteed with defer. They will execute in the same order they are imported.)

If you don't care the html is loaded or not ( in this case your scripts don't depend on your html ) then you can still add them to the head section of the html document. But if you add it with no attributes other then src, it will block the html parsing until the script is being downloaded, and your loading time gets longer. If you don't want the html parsing to stop and also scripts can execute right after they are downloaded, then you can add async tag. The thing you have to be aware of is, the order of the script execution is asynchronous, scripts will be executed right after their downloads finish, and it might not be in the same order as the import order. (The order of the script execution is not guaranteed with async tag)

**What is 'strict' mode?**

Js can work without using semicolons (just using line breaks will be ok), or without using var in a new variable. Still, it is not the best way to use js, and it can constrict the functions in a slightly more complex code, so using it with semicolons, etc. is the best practice. To enforce this best practice, if you write **'use strict'**; as the first line of code in your script, it will throw errors if it's used otherwise. This will ensure you are writing a more optimized code.

Downside/disadvantage: If you use a strict code and a library that you use doesn't, then you are going to get errors!

**What is dynamic typing in JS?**

When you declare a variable in JS, you can reassign it's value. Because you did not assign a type at the first place, the first value can be a string, and the second value that is reassigned can be any other type of variable, which means you can change a variable's type in JS!

**What is hoisting?**

Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution. Inevitably, this means that no matter where functions and variables are declared, **they are moved to the top of their scope** regardless of whether their scope is global or local.

Actually, your code isn’t moving anywhere. It isn’t magically being moved to the top of the file. What’s actually happening is that your function and variable declarations are added to memory during the compile phase.

How this happens is, your browser actually runs your scripts twice. At the first run, it will fetch all of your declarations and add it to memory. At the second turn, it will attempt to use all those variables.

**JavaScript only hoists declarations.** *Initializations are not hoisted. (function declarations are also hoisted!)*

If we declare and initialize a variable, say `var a = 3;`, only the `var a;`portion (the declaration) is going to be hoisted. The `a = 3;` (the initialization) is not hoisted and therefore not added to memory.

```jsx
var a
console.log(a)
a = 3
// undefined

console.log(a)
var a = 3
// undefined
```

**Best Practice:** Because of hoisting, it’s considered a best practice to always declare your variables at the top of their respective scopes. This way there are no undesirable effects. You should also always try to initialize variables when you declare them. This will provide cleaner code and help avoid undefined variables.
