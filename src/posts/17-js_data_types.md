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

  **[Template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)** are ways to make a string hold placeholders. If you want to write a string as a template literal, use backticks(``) instead of quotation marks. And when using a placeholder, place the placeholder inside \${}. A very simple example is shown in the next codeblock. You can nest template strings, and they also can hold stuff like ternary operators. You can even create multi line strings if you ever need to. One downside of it is, it is not supported by IE.

  There are some methods that come built-in with every string, which are extremely useful. You can check them from the [MDN docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String), but I will give an example of a few:

  ```
  let color = "yellow";

  // -> Template string:

   console.log(`${color} is the best color`); // Prints: yellow is the best color

   ---------------------------

  // -> Strings have indices, and indices always start with 0. They also have a built-in length property. ///// -> charAt() is a built-in method that gives us the character at a given index.
  // -> charCodeAt() is the built-in method that gives us the UTF-16 code of the character at a given index.

  const sentence = "purple is the new yellow";
  let index = 3;

  console.log(`The character at index ${index} is ${sentence.charAt(index)}`);
  // Prints: The character at index 3 is p`

  console.log(sentence.length); // prints: 24
  console.log(sentence.charCodeAt(index)); // prints: 112

  ---------------------------

  // -> concat() is a built in method that merges two strings and returns the result as a new string.

  const str1 = 'taco';
  const str2 = 'cat';
  const str3 = str1.concat(' vs ', str2);

  console.log(str3);
  // prints: taco vs cat

  console.log(`${str1}, ${str2}`);
  // prints: taco, cat

  ---------------------------

  // -> endsWith() is a method to determine if a string ends with given characters.
  // -> startsWith() is a method to determine if a string starts with given characters.

  let str = 'To bee, or not to bee!'

  console.log(str.endsWith('!'));  // true
  console.log(str.endsWith('not'));      // false
  console.log(str.endsWith('to bee', 21));  // true
  console.log(str.startsWith('To b')); // true
  console.log(str.startsWith('To bee', 3)) // false

  ---------------------------

  // -> includes() method determines if one string includes another given string.

  const sentence = "yellow is my favorite color";
  const word = "yellow";

  console.log(`The "${word}" word ${sentence.includes(word)? "is" : "is not"} in the given sentence.`)
  // prints: "The "yellow" word is in the given sentence."

  ---------------------------

  // -> indexOf() returns the starting index of a given string. It can take a second argument that will make the search start from that given index.
  // -> lastIndexOf() method does the same thing, but it starts searching from the end of a given string, so it will result with the last occurrance. It takes an optional second argument as an index to start the backwards search.
  // Both of them returns -1 if the value is not found, and both of them are case sensitive.

  const sentence = "a taco cat loves tacos.";

  const searchTerm = 'taco';
  const indexOfFirst = sentence.indexOf(searchTerm);

  console.log(`The index of the first "${searchTerm}" from the beginning is ${indexOfFirst}.`);
  // prints: The index of the first "taco" from the beginning is 2.

  console.log(sentence.indexOf(searchTerm, 3)); // prints: 17

  console.log(`The index of the 2nd "${searchTerm}" is ${sentence.indexOf(searchTerm, (indexOfFirst + 1))}.`);
  // prints: The index of the 2nd "taco" is 17.

  console.log(sentence.lastIndexOf(searchTerm)); // prints: 17

  ---------------------------

  // -> match() method brings the matching string of a regular expression. (For regular expressions, check the bonus section of this article.)

  const sentence = "Roses are red. Violets are blue.";
  console.log(sentence.match(/[A-Z]/g)); // prints: ["R", "V"]

  ---------------------------

  // -> padEnd() method pads the string with a given string (if needed, repeated), until the resulting string reaches the given length. The padding is applied from the end of the given string.
  // -> padStart() method does the same, but the padding is applied from the beginning of the given string.

  const string = "snap peas";

  console.log(string.padEnd(12)); // prints: "snap peas   "

  console.log(string.padEnd(24," yes")); // prints: "snap peas yes yes yes ye"

  console.log(string.padEnd(13," are great")); // prints: "snap peas are"

  console.log(string.padStart(13," are great")); // prints: "snap peas are"

  const year = "1991";
  console.log(year.padStart(10,"**/")); // prints: **/**/1991

  ---------------------------

  // -> trim() method removes white spaces from both ends of a given string.
  // -> trimEnd() method removes white spaces from the beginning of a given string.
  // -> trimStart() method removes white spaces from the end of a given string.

  const str = "   Greetings!   ";

  console.log(str.trim()); // prints: "Greetings!"
  console.log(str.trimStart()); // prints: "Greetings!   "
  console.log(str.trimEnd()); // prints: "   Greetings!"

  ---------------------------

  // -> repeat() method returns a new string with the specified number of copies of a given string.
  // -> replace() method replaces a given string with another given string, but only the first occurrance of it.
  // -> replaceAll() method replaces the matches of a given string with all occurances of another given string.

  const chirp = 'Chirp. Chirpy chirp. ';
  const birdSong = chirp.repeat(3);

  console.log(`This is how the cardinals sing: ${birdSong}`);
  // prints: "This is how the cardinals sing: Chirp. Chirpy chirp. Chirp. Chirpy chirp. Chirp. Chirpy chirp."

  console.log(birdSong.replace('chirp', 'chiiiiiiiirp'));
  // prints: "Chirp. Chirpy chiiiiiiiirp. Chirp. Chirpy chirp. Chirp. Chirpy chirp."

  console.log(birdSong.replaceAll('chirp', 'chiiiiiiiirp'));
  // prints: "Chirp. Chirpy chiiiiiiiirp. Chirp. Chirpy chiiiiiiiirp. Chirp. Chirpy chiiiiiiiirp."

  ---------------------------

  // -> search() method returns the index of the first occurrance of a match between a given regular expression and a string. If there are no matches, it will return -1.

  let str = "hello Cookie"
  let regExpCapitals = /[A-Z]/g
  let regExpDot = /[.]/g
  console.log(str.search(regExpCapitals))  // prints 6, which is the index of the first capital letter "C".
  console.log(str.search(regExpDot)) // prints -1

  ---------------------------

  // -> slice() method slices a part of the string and returns it as a new string.

  const str = "heaven is a place on earth";

  console.log(str.slice(11)); // prints: "place on earth"
  console.log(str.slice(-5)); // prints: "earth"
  console.log(str.slice(0,6)); // prints: "heaven"
  console.log(str.slice(-8,-6)); // prints: "on"
  console.log(str.slice()); // prints: "heaven is a place on earth"

  ---------------------------

  // -> split() method divides a given string into an ordered list of substrings and puts substrings into an array, and returns the array. The initial string is not changed.

  const str = "Human beings!";

  console.log(str.split(" ")); // prints: ["Human", "beings!"]
  console.log(str.split("")); // prints: ["H", "u", "m", "a", "n", " ", "b", "e", "i", "n", "g", "s", "!"]
  console.log(str.split()); prints: ["Human beings!"]

  ---------------------------

  // -> substring() method returns the part of the string between given start and end indexes.
  // -> \ is an escape character in JS. Special characters (quotation marks, and \) can be written using \ in front of them, so that they'll be perceived as normal characters.
  // -> \n is also an escape notation that adds a new line.

  const str = "I/'ll keep coming"

  console.log(str.substring(6,10)); // prints: "keep"
  console.log(str.substring(5)); // prints: "keep coming"

  ---------------------------

  // -> toUpperCase() method returns the string value converted to uppercase. (If it's not a string, it will be converted to a string in the process.)
  // -> toLowerCase() method returns the string value converted to lowercase.
  // -> toLocaleLowerCase() method converts the string value to lowercase with specified locale settings.
  // -> toLocaleUpperCase() method

  const str = "2 Red Foxes";

  console.log(str.toUpperCase()); // prints: "2 RED FOXES"
  console.log(str.toLowerCase()); // prints: "2 red foxes"

  const city1 = 'İstanbul';

  console.log(city1.toLocaleLowerCase('en-US')); // prints: "i̇stanbul"

  console.log(city1.toLocaleLowerCase('tr')); // prints: "istanbul"

  const city2 = 'istanbul';

  console.log(city.toLocaleUpperCase('en-US')); // prints: "Istanbul"

  console.log(city.toLocaleUpperCase('tr')); // prints: "İstanbul"

  ---------------------------

  // -> toString() method returns a string version of a given value.

  const areaCode = 407;

  console.log(areaCode.toString(), typeof areaCode.toString(), typeof areaCode); // prints: "407" string number

  ```

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

* **BigInt:**

O hey bigint

- **Boolean:**

There are only two boolean values: true or false. They are really useful for setting flags.

_Truthy and Falsy:_

All values have an inherent truthy or falsy value under their real values. That means, in certain conditions they will act like boolean values, and either look like true or false.

Everything else is truthy except falsy values!

Falsy values are:

1.  False
2.  0
3.  "" (empty string)
4.  null
5.  undefined
6.  NaN

- **Null:**

Hello

- **Undefined:**
- **Symbol:**

2. **Reference values:** Arrays, Object Literals, Functions, Dates, anything else..

In reference data types, when you create a variable, the variable doesn't actually hold a value, instead it holds a pointer to that value. So when you copy a variable, it's the pointer that gets copied, not the value.

So if you change the value, all the values of the variables that store a pointer to that value will change. Keep this in mind when you're working with reference type values!

- **Object:**
- **Array:**

  Here are some built-in array methods and examples:

  ```

  ```

- **Function:**
- **Date:**

**Bonus: Some topics a beginner to JS should check out**

These notes are about some topics we didn't talk about in the article, so if you're interested, check the links out. If these does not interest you, you can simply skip this section.

- **Logical operators:** There are many of these. The most commonly used ones are or(||), and(&&) and not(!).

Parenthesis has a precedence over && and || operators. && operator has a precedence over || operator. ! operator has a higher precedence than both && and ||.

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

- **Loops:** There are 4 types of loops: for loops, while loops, infinite loops (a loop where the endong condition is never met- the one kind of loop you don't want), and for...of (to iterate over arrays) and for...in (to iterate over objects) loops. To avoid creating infinite loops using while loops (which is fairly easy), you need to update the condition and attempt to make it false inside the while loop. for...of loops and for...in loops are not supported by IE.
-

**Resources:**

1. [The Modern JavaScript Tutorial- javascript.info](https://javascript.info/)
2. [MDN web docs- Memory Management](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_Management)
3. [JS V8 Engine Explained- hackernoon](https://hackernoon.com/javascript-v8-engine-explained-3f940148d4ef)
4. [Academind](https://academind.com/) - Maximilian Schwarzmüller
5. [Eloquent JavaScript: A Modern Introduction to Programming](https://eloquentjavascript.net/)
6. [w3schools](https://www.w3schools.com/js/)

```

```

```

```

```

```

```

```

```

```

```

```
