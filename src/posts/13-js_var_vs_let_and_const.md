---
title: "JavaScript- The story of var, let and const"
date: "09-25-2020"
tags: ["Web Development", "JavaScript"]
summary: "In this article, I make a brief comparison between pre-ES6 var keyword and ES6 let and const keywords with simple examples."
---

#### What is Scope?

Before we get into let and const, let's simply define these two terms.

In JavaScript, **scope** can be defined as the area that something covers, which in the end determines the variables it has the access to. There are two main kinds of scope, one being the **global scope**, and the other one being the **local scope**.

**★ Global Scope**

If a variable is defined outside of all functions and curly braces (which can be referred to as **blocks**), it is in global scope and it can be accessed from anywhere from your code. Although it looks easier to declare every variable globally, it is not advised to, as it can cause name collisions and unintended modifications. You should declare variables as locally as possible, so that only the code blocks who actually need that variable will be able to access it or change it.

**★ Local Scope**

In JavaScript, there are two main kinds of local scope, one being the **function scope**, and the other one being the **block scope**. Any variable declared inside these scopes are considered to be **local variables**.

Any varible declared in function scope (between the curly braces in the function definition) can only be used inside the same scope. It cannot be accessed from anywhere. Also, functions do not have access to each other's scopes. They all have their individual scopes.

If a function is defined inside of another function, the inner function has the access to the outer function's variables, but the outer function doesn't have access to the inner function's variables. This is called **lexical scoping**.

A block is any code in between curly braces, and if you declare any variable inside a block using 'let' and 'const', it will only be available inside of that block. (We'll elaborate this in the differences subtitle.)

#### What is Closure?

#### var, let and const: the differences

Before ES6, there was a single way to declare a variable, and that was by using the keyword **var**. This keyword had its own set of problems, and this article will discuss what ES6 (ES2015) improved by introducing **let** and **const** syntaxes instead of **var**.

Let's go through the differences one by one.

★ One of the biggest problems with declaring variables defined with the "var" keyword was that you could overwrite variable declarations without an error (which means, you could declare the same variable multiple times, which could be very problematic if you're not doing it on purpose). In a small application, you might not run into this type of problem, but when your code becomes larger, you might accidentally overwrite a variable that you did not intend to overwrite. Because this behavior does not throw an error, searching and fixing bugs becomes more difficult. The introduction of the **let** keyword solved this problem.

```javascript
var wizard = "James"
var wizard = "Sirius"
console.log(wizard) // prints 'Sirius'. You declared and initialized the same variable twice. This is not optimal.

let wizard = "James"
let wizard = "Harry" // throws an error. You cannot declare the same variable twice if you use "let".
```

★ When you declared a variable using the "var" keyword, you could always reassign a new value to them. But what about values that should not be changed or reassigned throughout the code? The introduction of **let** and **const** put an end to this problem. If you declare a variable with **let**, you can reassign its value. You can even declare a variable without assigning any value. On the other hand, the **const** keyword should be chosen if you’re not planning on changing the value of this variable (which then becomes a constant). But if you are using "const", the variable also has to be initialized when declared and it cannot be reassigned. This should be your default choice unless you need to re-assign it during runtime, it keeps your code explicit and clear.

```javascript
var wizard = "James";
wizard = "Sirius";
console.log(wizard) // prints Sirius. You reassigned its value in the second line.

let wizard = "James";
let owl;
owl = "Hedwig";
wizard = "Harry"
console.log(wizard, owl) // prints Harry Hedwig. You can reassign the value if you declare a variable with 'let', just like 'var'.

const cat; // throws an error. You cannot declare but not initialize a constant variable.

const cat = "Crookshanks";
cat = "Nelly" // throws an error. You cannot reassign a value to a constant variable.
```

★ With let and const, a new concept was introduced to JS, named **block scope**, that was introduced at the beginning of this article. It means a variable is only available in the block you define it in or any lower blocks.

**A block** is a snippet surrounded with curly braces ({}).

With the "var" keyword, any variable you define inside a block scope could be reached from the scope above it (if it's in a function, it can be reached by the functional scope, if it's not, it can be reached by the global scope), and that led to many confusions.

Variables declared with "let" have block scope. They are not accessible outside of their scopes.

Let's see some examples:

```javascript
var wizard = "Ron"
if (true) {
  // this space in between curly braces is called a "block".
  var witch = "Hermione"
}

console.log(witch, wizard) // This prints out Hermione Ron. When defined with var the witch variable exists outside of the block scope as well.

if (true) {
  let school = "Hogwarts"
  console.log(school) // This prints out Hogwarts
}

console.log(school) // This prints out undefined. When defined with let, the school variable exists only in the block scope, but not globally.
```

**Note:** Reference type data (arrays, objects) acts a little bit differently. In the reference type, variables don't hold the value itself but a pointer to that value. If a variable that is declared with the "const" keyword is holding a reference type data, you can't reassign a value to it, but you can manipulate the variable inside with built-in methods (like push, pop, shift, unshift, etc. for arrays).

**Resources:**

1. [The Modern JavaScript Tutorial- javascript.info](https://javascript.info/)
2. [MDN web docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
3. [Academind](https://academind.com/) - Maximilian Schwarzmüller
4. [Eloquent JavaScript: A Modern Introduction to Programming](https://eloquentjavascript.net/)
5. [w3schools](https://www.w3schools.com/js/)
6. [JavaScript Scope and Closures](https://css-tricks.com/javascript-scope-closures/) by Zell Liew
