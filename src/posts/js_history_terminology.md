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

Note: You might come across some other languages that gets transpiled (transformed + compiled) into JavaScript before they are run in the browser. These are mainly used to enhance readability and maintainability. The different syntax being used is called "syntactic sugar", it makes the language easier for human use, and some programmers prefer this alternative style over writing plain JS code.
Examples of these languages are: CoffeeScript, TypeScript (adds strict data typing, superset of JS, developed by Microsoft), Flow (developed by Facebook), Dart (a standalone language that has its own engine that runs in non-browser environments (like mobile apps), but also can be transpiled to JavaScript, developed by Google).

**When to use the [\<noscript>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/noscript) tag**

It is totally possible to disable JS execution from the client side, this means the browser will not be executing the JS files. If your website is heavily depending on JS, you might want to leave them a note, saying 'turn on your JS, or you will not be getting a good UI/UX experience.' For this purpose, you use <noscript> tag. The text or HTML you write inside noscript tag will only be shown to the user only if script type is not supported or if the browser has scripting disabled.

```js
<noscript>
  Please turn on javascript on your browser to get a full user experience.
</noscript>
```

**'defer' & 'async' tags**

**What is 'strict' mode?**

**What is dynamic typing in JS?**

**What is hoisting?**
