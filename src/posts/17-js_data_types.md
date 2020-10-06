---
title: "JavaScript- Data Types"
date: "2019-04-06"
tags: ["Web Development", "JavaScript"]
summary: "In this article, I very briefly explain the data types in JS, gathering them under 2 major classes: Primitive and Reference values. Warning: this is a beginner level article."
---

### Data Types in JS

You can check the data type of a variable by using the **typeof operator.**

The data types in JS can be divided into 2 major categories:

1. **Primitive values:** String, Number, Boolean, Null, Undefined, Symbols(ES6), BigInt

   What makes primitive values "primitive"?

   If we create a variable and link a value to it ( `let a = 5`), it will be stored in memory. If we create another variable and assign it to the first variable that we created (`let b = a`), a copy of the first variable is created and copied to the second variable (in memory, the second variable we created will be kept like this: `let b = 5`).

   If you change the value of the first variable (`a = 10`), the second variable created will still be equal to the initial value of a (`b = 5`).

   Now, let's talk about all primitive values separately:

   - **String:**

     Strings are just pieces of text. What makes a string a string is the quotation marks around it. It can be double or single quotes, it doesn't matter, but you need to be consistent. Don't mix both.

   - **Number:**

     This is the way of storing a number in JS. It doesn't matter if the number is positive, negative, a decimal or an integer. Every single one of them is a "number" in JS world.

     Numbers can be used to make simple operations, such as addition(+), subtraction(-), multiplication(\*) and division(/). There is also **exponantial operator**, which is shown by **\*\***. (Example: 2 \*\* 3 will be equal to 8.) There are other operators as well, such as the **modulo operator**, which is also known as the "remainder operator". It takes the second operand and divides the first one with it, and returns the remainder that is left. A good way to use a modulo operator is to see if a given number is odd or even. (Use number % 2 for it.)

     For example:

     ```
        console.log(25 % 5);     // prints 0
        console.log(17 % 5);     // prints 2
        console.log(29 % 2);     // prints 1 (odd number)
        console.log(32 % 2);     // prints 0 (even number)
     ```

     _A small note:_ JS does not store infinitely precise numbers. (Which means 1,0000000000000000009 will be equal to 1.)

     There is also the issue of precedence, it there are multiple operations to be taken care of, the order of precedence will be: (You can remember it by the acronym they form: **PEMDAS**)

     **P**arenthesis > **E**xponents > **M**ultiplication > **D**ivision > **A**ddition > **S**ubtraction

     **NaN** is a special numeric value that represents things that are not numbers. It is still the type of number. **Infinity** and **-Infinity** are also numeric values.

     ```
     0/0 = NaN
     NaN + 3 = NaN
     1/0 = Infinity
     -1/0 = -Infinity

     // -0 is also a number in JS.
     +0 === -0 // this statement is true!

     // But they can act differently, like this:
     32/-0 = -Infinity
     32/0 = Infinity
     ```

   - **BigInt:**

     O hey bigint

   - **Boolean:**

     There are only two boolean values: true or false. They are really useful for setting flags.

     _Truthy and Falsy:_

     All values have an inherent truthy or falsy value under their real values. That means, in certain conditions they will act like boolean values, and either look like true or false.

     Everything else is truthy except falsy values!

     Falsy values are:

     1. False
     2. 0
     3. "" (empty string)
     4. null
     5. undefined
     6. NaN

   - **Null:**

     Hello

   - **Undefined:**
   - **Symbol:**

2. **Reference values:** Arrays, Object Literals, Functions, Dates, anything else..

   In reference data types, when you create a variable, the variable doesn't actually hold a value, instead it holds a pointer to that value. So when you copy a variable, it's the pointer that gets copied, not the value.

   So if you change the value, all the values of the variables that store a pointer to that value will change. Keep this in mind when you're working with reference type values!

   - **Object:**
   - **Array:**
   - **Function:**
   - **Date:**

**Bonus: Simple miscallenous stuff that are not data types**

These notes are about some topics we didn't talk about in the article, so if you're interested, check the links out. If these does not interest you, you can simply skip this section.

- **Logical operators:** Parenthesis has a precedence over && and || operators. && operator has a precedence over || operator. ! operator has a higher precedence than both && and ||.
- **Switch statement:** Slightly more legible syntax of **conditionals** (if, else if, else). Example code:

  ```
  let emoji = "happy";
  let color;

  switch(emoji) {
     case "happy":
     case "content":
       color = "yellow";
       break;
     case "angry":
       color = "red";
       break;
     case "excited":
       color = "pink";
       break;
     default:
       color = "blue";
  }

  // If you have "happy" or "content" as emoji, the color variable will be "yellow".
  ```

- **Ternary operator:**

  A shorter syntax for conditionals. Statement before the question mark indicates condition, the statement after that is what will happen if that condition is true, and the statement after the colon is what happens if that condition isn't met.

  ```
   let status = "offline";

   // Written with if-else:

   let color;
   if (status === "offline") {
      color = "red";
   } else {
      color = "green";
   }

   // Written with ternary:

   let color = status === "offline" ? "red" : "green";
  ```

**Resources:**

1. [The Modern JavaScript Tutorial- javascript.info](https://javascript.info/)
2. [MDN web docs- Memory Management](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_Management)
3. [JS V8 Engine Explained- hackernoon](https://hackernoon.com/javascript-v8-engine-explained-3f940148d4ef)
4. [Academind](https://academind.com/) - Maximilian Schwarzmüller
5. [Eloquent JavaScript: A Modern Introduction to Programming](https://eloquentjavascript.net/)
6. [w3schools](https://www.w3schools.com/js/)
