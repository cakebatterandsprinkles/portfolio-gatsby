---
title: "JavaScript- The Basics"
date: "2019-04-06"
tags: ["Web Development"]
summary: "This article is a summary of the basic concepts in JavaScript."
---

JavaScript (abbreviated as JS) is a high-level, just-in-time compiled, and multi-paradigm programming language. It initially had another name which was "Livescript", but as Java was quite popular those days, that naming the language "JavaScript" would make more people use it. Alongside of HTML and CSS, JS became one of the most important technologies in the World Wide Web.

The standards of this language is determined by an international group called ECMA (founded in 1961). They are in charge of all sorts of different standards like product safety, acoustics and many others. (You can check [their website](https://www.ecma-international.org/) for more information.) They also develop a standard for a scripting language, which is called ECMAScript. This is more like a reference, it basically describes how a language should work, but it is not a language by itself, it is just a set of rules. You can check the ECMAScript 2020 Language Specification from [here](https://www.ecma-international.org/ecma-262/11.0/index.html#title) (I must warn you, it is a very long text.).

JS was made to be executed by browsers, and its main purpose was to make webpages interactive. Browsers have embedded engines called a "JavaScript virtual machine", and it is basically a program that parses (reads), compiles and runs your JS code so that you can interact (click to a button, fill a form etc.) with the website you're viewing. Different engines have different names, for example Chrome and Opera's JS engine is called "V8", Firefox's engine is called "SpiderMonkey", different versions of IE uses “Trident” and “Chakra”, Microsoft Edge uses“ChakraCore”, and Safari uses “Nitro” and “SquirrelFish”.

Why is this important? Well even if the language has some feature, if the engine that makes it work doesn't know about it (or in other words, if it's not implemented in the engine), the code will not be compiled properly. The engines follow ECMAScript Language Specifications, and try to implement the newly added features. But it doesn't mean it will happen right away. So some features might be implemented in an engine but not by the others. If you see which engine supports what, you can visit [caniuse](http://caniuse.com) or [this compatibility table](https://kangax.github.io/compat-table).

In browser JS can do some stuff like modifying HTML and styles on a webpage, react to user actions, send request to remote servers, and download and upload files to those servers, get and set cookies, inquire the user, remember some data (local storage). But it cannot read/write random files from the disk, copy or execute any programs in the computer (it has no direct access to operating system functions) or access to other windows/tabs in the browser (this is called "same origin policy"). These are all protections for the user.

Another great thing about JS is, it is not limited to the browsers. Node.js is a runtime environment that can execute JS outside of a browser, for example in a server. Node.js enabled both client and server-side scripts to be written in the same language, unifying web development around a single programming language.
