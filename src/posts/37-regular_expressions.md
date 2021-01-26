---
title: "Introduction to Regular Expressions"
date: "2021-02-07"
tags: ["Web Development", "JavaScript"]
summary: "In this article, I briefly explain what regular expressions are and how to use them in JavaScript context."
---

**[Regular expressions](https://en.wikipedia.org/wiki/Regular_expression)** (_RegEx_ or _regex_ for short) are patterns that define certain characters, and we use regular expressions to match character combinations in strings. Usually, these string patterns are used for input validation or searching algorithms, to see if a value is there or to find that value and replace it with something else. In JavaScript, regular expressions are also objects.

They can look very complicated and awkward to the naked eye (and sometimes they really are), but they are really useful in certain occasions, so there is no running away from them.

We will first learn how to create them, then move on to how to use them.

You can construct a regular expression in two ways:

```javascript
// 1. Literal expression (you can use this by enclosing a pattern between forwardslash (/) characters):
var re = /hello/

// 2. "new" keyword, which calls the constructor function of the RegExp object:
var re = new RegExp("hello")

// Both of these examples symbolize the same string, which is "hello".
```

Regular expression objects have some built-in methods for finding (and sometimes replacing) patterns in a given string. If you want to see if a regular expression matches a string, you can use the **test** function:

```javascript
// test method takes a string as an argument and returns a boolean value.
const regex = /batter/

console.log(regex.test("Cake batter cannot be eaten raw, but who cares.")) // prints: true
console.log(regex.test("cake is better than anything else")) // prints: false
```

To say if a string matches _any_ of the characters that are provided in the pattern, we use Square brackets (**[]**). A hyphen (-) between two characters is used to symbolize a range of characters, and the order of these characters are determined by their Unicode number. Thankfully unicode is designed in a way that all latin lowercase and uppercase letters, and numbers have consecutive numbers, which you can check from [here](https://en.wikipedia.org/wiki/List_of_Unicode_characters). Another thing to keep in mind is Regex being case sensitive:

- [a-z] means lowercase letters
- [A-Z] means uppercase letters
- [0-9] covers the numbers
- [a-zA-Z] covers all uppercase and lowercase letters
- [a-zA-Z0-9] covers all uppercase and lowercase letters + numbers
- [xyz] matches any single character inside the square brackets, in this case x, y or z
- [xyz]+ matches one or more of any characters inside square brackets

```javascript
// test method takes a string as an argument and returns a boolean value.
const regex = /[a-d]/

console.log(regex.test("Cake batter cannot be eaten raw, but who cares.")) // prints: true
consol
```

Some basic things to know:

- **/g** means global, if you don't put it at the end, the execution of it will stop with the first match that is found.
- **/i** means insensitive to uppercase or lowercase
- \$ matches the end of the string.
- ^ matches the beginning of a string.
- [^a-z] when inside of square brackets, the ^ means match anything that is NOT a lowercase letter.
- \d matches one or more arbitrary digits
- \w matches any word character [a-zA-Z0-9_]
- \s matches space
- \n matches new line
- \t matches tabs

Now let's see these in an example:

```javascript
const string =
  "filea.mp3 file_01.mp3 file_02.mp3 test.csv other.txt ANTS.md football.md foosball.md fooooootball.mp4"

console.log(string.match(/[A-Z]/g)) // prints: ["A", "N", "T", "S"]

console.log(string.match(/[a-zA-Z0-9]/)) // prints: ["f"]

console.log(string.match(/\w/)) // prints: ["f"]

console.log(string.match(/\w+/)) // prints: ["filea"]

console.log(string.match(/\w+\./g)) // prints: ["filea.", "file_01.", "file_02.", "test.", "other.", "ANTS.", "football.", "foosball.", "fooooootball."]
console.log(string.match(/\w+\s/g)) // prints: ["mp3 ", "mp3 ", "mp3 ", "csv ", "txt ", "md ", "md ", "md "]

const sentence = "I didn't eat it all"
console.log(sentence.replace(/[aei]/g, "o")) // prints: "I dodn't oot ot oll"

// regex.test() function checks if a regex matches a given value, returns a boolean value.
// ? is a modifier that matches the value before them between 0 and 1 times
// + is a modifier that matches the value before them between 1 and unlimited times
// \* is a modifier that matches the value before them between 0 and unlimited times

const claim = "You just kissed a bm boom boooom baby"
console.log(/boo?m/g.test(claim)) // prints: true
console.log([...claim.matchAll(/boo?m/g)]) // returns you all the matching elements in an array
console.log(/bo?m/g.test(claim)) // prints: false
console.log(/bo+m/g.test(claim)) // prints: true // matches 2 strings: boom, boooom
console.log(/bo\*m/g.test(claim)) // prints: true // matches 3 strings: bm, boom, boooom

const regexp = /c(a)(t(\d?))/g
const str = "cat1cat2cat3max"

const array = [...str.matchAll(regexp)]

console.log(array[0])
// expected output: Array ["cat1", "c", "t1", "1"]

console.log(array[1])
// expected output: Array ["cat2", "c", "t2", "2"]

console.log(array[2])
// expected output: Array ["cat3", "c", "t3", "3"]
```

You can test your regexps from here: https://regex101.com/

#### Resources:

1. [JavaScript.info - Generators](https://javascript.info/generators)
