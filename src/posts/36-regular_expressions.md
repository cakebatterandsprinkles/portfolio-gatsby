---
title: "Introduction to Regular Expressions"
date: "2021-02-07"
tags: ["Web Development", "JavaScript"]
summary: "In this article, I briefly explain what regular expressions are and how to use them in JavaScript context."
---

I like it when people who can do something admit what they are doing is hard. When time passes and you begin doing something good (after doing it badly for some time, for sure), you unwittingly find it easier and easier each day, and sometimes you forget how it looks in the beginner's eye. Regular expressions can look very complicated and awkward to the naked eye (and sometimes they really are), but they are really useful on certain occasions, so there is no running away from them.

**[Regular expressions](https://en.wikipedia.org/wiki/Regular_expression)** (_RegExp_ or _regex_ for short) are patterns that we use to identify certain character combinations in strings. Altogether, these patterns form a small language of their own that can incorporate and work well with other programming languages. Finding string patterns are used for input validation or searching algorithms, to see if a value is there, or to find that value and replace it with something else. In JavaScript, regular expressions are also objects.

We will first learn how to create them, then move on to how to use them.

You can construct a regular expression in two ways:

```javascript
// 1. Literal expression (you can use this by enclosing a pattern between forward-slash (/) characters):
let re = /hello/

// 2. "new" keyword, which calls the constructor function of the RegExp object:
let re = new RegExp("hello")

// Both of these examples symbolize the same string, which is "hello".
```

Some characters have special meanings in Regexp (we'll see them soon enough). For example, the + sign is one of them, but what if the string we want to match includes a + sign? To escape the special meaning and use the character itself, we will use a preceeding backslash (\\), like so:

```javascript
let addition = /1\+1/ // This represents the string: "1+1"
let biggerThan2 = /2\+/ // This represents the string: "2+"
let positiveNum = /\+3/ // This represents the string: "+3"

console.log(addition, biggerThan2, positiveNum)
```

Regular expression objects have some built-in methods for finding (and sometimes replacing) patterns in a given string. If you want to see if a regular expression matches a string, you can use the **test** function:

```javascript
// test method takes a string as an argument and returns a boolean value.
const regex = /batter/

console.log(regex.test("Cake batter cannot be eaten raw, but who cares.")) // prints: true
console.log(regex.test("Cake is better than anything else")) // prints: false
```

To say if a string matches _any_ of the characters that are provided in the pattern, we use square brackets (**[]**), like so:

```javascript
// Let's check if any of the characters in a given string either matches c, a, k, or e:
console.log(/[cake]/.test("lois")) // Prints: false
console.log(/[cake]/.test("fiore")) // Prints: true
```

A hyphen (-) between two characters is used to symbolize a range of characters, and the order of these characters is determined by their Unicode number. Thankfully Unicode is designed in a way that all Latin lowercase and uppercase letters, and numbers have consecutive numbers, which you can check from [here](https://en.wikipedia.org/wiki/List_of_Unicode_characters). Another thing to keep in mind is Regex being case sensitive:

- `[a-z]` means lowercase letters
- `[A-Z]` means uppercase letters
- `[0-9]` covers the numbers
- `[a-zA-Z]` covers all uppercase and lowercase letters
- `[a-zA-Z0-9]` covers all uppercase and lowercase letters + numbers
- `[xyz]` matches any single character inside the square brackets, in this case, x, y or z
- `[^xyz]` matches any single character except the ones inside these square brackets, in this case, anything but x, y or z

```javascript
const regex = /[a-d]/ // Represents any letter between a and d, both included
console.log(regex.test("Cake batter cannot be eaten raw, but who cares.")) // Prints: true
```

For more common character groups, there are also some shortcuts created to make life easier:

- `\d` matches any digit character, same as [0-9]
- `\w` matches any alphanumeric character [a-zA-Z0-9]
- `\s` matches any whitespace character (space, tab, newline, etc.)
- `\n` matches new line
- `\t` matches tabs

- `\D` matches any character except digits
- `\W` matches any character except alphanumeric ones
- `\S` matches any character except the whitespace characters

Let's match a standard American phone number together, with the structure of `(ddd) ddd-dddd`:

```javascript
let phoneNumber = /\(\d\d\d\) \d\d\d\-\d\d\d\d/ // Ok, I'll admit that this looks pretty awful, but it works.

console.log(phoneNumber.test("(123) 456-7890")) // Prints: true
console.log(phoneNumber.test("123 456-7890")) // Prints: false
console.log(phoneNumber.test("(123)456-7890")) // Prints: false
console.log(phoneNumber.test("(123) 4567890")) // Prints: false
```

There are also modifiers to help us catch repeating patterns, for example:

- `?` is a modifier that matches the value before them between 0 and 1 times
- `+` is a modifier that matches the value before them between 1 and unlimited times
- `*` is a modifier that matches the value before them between 0 and unlimited times

```javascript
let optional = /colou?r/
let atLeastOne = /colou+r/
let zeroOrMultiple = /colou*r/

console.log(optional.test("color")) // Prints: true
console.log(optional.test("colour")) // Prints: true
console.log(optional.test("colouur")) // Prints: false

console.log(atLeastOne.test("color")) // Prints: false
console.log(atLeastOne.test("colour")) // Prints: true
console.log(atLeastOne.test("colouuur")) // Prints: true

console.log(zeroOrMultiple.test("color")) // Prints: true
console.log(zeroOrMultiple.test("colour")) // Prints: true
console.log(zeroOrMultiple.test("colouuuur")) // Prints: true
```

To indicate that a character should appear a precise number of times, we use curly braces ({}). Now we can refactor the phone number example:

```javascript
let phoneNumber = /\(\d{3}\) \d{3}-\d{4}/ // Ok, it still looks kinda awful, but better than the previous one.

console.log(phoneNumber.test("(123) 456-7890")) // Prints: true
console.log(phoneNumber.test("123 456-7890")) // Prints: false
console.log(phoneNumber.test("(123)456-7890")) // Prints: false
console.log(phoneNumber.test("(123) 4567890")) // Prints: false
```

We can also indicate a range with curly braces. For example, let's check some phone number strings to see if there are enough digits to form an American phone number. Without the national code (which is 1 for the US), there are 10 digits in a phone number, including the area code. With the national code, there are 11 numbers. There are also other modifiers that help us replace matching string pieces with another one, which will be useful in our example, so let's check them out as well:

- `/g` means global, if you don't put it at the end, the execution of it will stop with the first match that is found.
- `/i` means insensitive to uppercase or lowercase

```javascript
let regexp = /\d{10,11}/ // This checks if there are 10 to 11 consecutive digits in a given string. That's great, but our phone numbers have other characters as well, and we should delete them first to use this regexp.

// Let's create a regular expression that clears unnecessary parts in our string:
console.log("ABCabc(123) 456-7890".replace(/[A-Z]|\(|\)|\s|\-|\+/gi, "")) // Prints: 1234567890
let cleanupRegexp = /[A-Z]|\(|\)|\s|\-|\+/gi // The pipe character (|) denotes the OR operator.

// To cleanup a given string, we are going to use the .replace() method:
console.log(regexp.test("(123) 456-7890".replace(cleanupRegexp, ""))) // Prints: true
console.log(regexp.test("+1(123)456-7890".replace(cleanupRegexp, ""))) // Prints: true
// More than 11 characters will also return true, because it also satisfies the condition:
console.log(regexp.test("+12(123) 4567890".replace(cleanupRegexp, ""))) // Prints: true
console.log(regexp.test("123 456-78901".replace(cleanupRegexp, ""))) // Prints: true
// Less than 10 will return false:
console.log(regexp.test("(123) 456-78".replace(cleanupRegexp, ""))) // Prints: false
```

If part of a regular expression is inside parentheses, operators following that will take that part as a single element.

```javascript
let regexp = /Trolo(lo+)+/
console.log(regexp.test("Trolololololololo")) // Prints: true
console.log(regexp.test("Trololooololooolo")) // Prints: true
console.log(regexp.test("Trolollo")) // Prints: false
```

The built-in test method only tells you if there is a matching value or not. If you need more information about the match, as the starting index of it, you can use the built-in `.exec()` method. The `.exec()` method returns an array with the first piece of string that matches as index 0. If no matches are found, it returns null.

There are also two string methods we can use to get more information about a string that matches a given RegExp.

The `.match()` method returns the elements that match inside an array. If there are also matches inside the match, it returns them as 'groups'. The `.matchAll()` method returns an iterator that returns all matched groups. For the difference in between `.match()` and `.matchAll()` methods, I recommend checking [this article](https://blog.tildeloop.com/posts/javascript-the-difference-between-match-and-matchall).

```javascript
// .exec() RegExp method:
let match = /\d+/.exec("I was born in 1990. I am 31 years old.")

console.log(match) // Prints: ["1990", index: 14, input: "I was born in 1990. I am 31 years old.", groups: undefined]
console.log(match[0]) // Prints: 1990
console.log(match.index) // Prints: 14
console.log(match.input) // Prints: I was born in 1990. I am 31 years old.

// .match() string method
console.log("I was born in 1990. I am 31 years old.".match(/\d+/)) // Prints: ["1990", index: 14, input: "I was born in 1990. I am 31 years old.", groups: undefined]
```

If we want to denote the beginning or the end of a given string, there are modifiers to indicate those as well:

- `\$` matches the end of the string.
- `^` matches the beginning of a string.
- If you're searching for a string that starts with something and ends with something else, and you don't care what is in between, to represent everything in between you can use `.*`. `.*` means any character repeated 0 or multiple times.
- Don't forget that when inside square brackets, the ^ means match anything that is NOT the following thing.

Now let's see these in an example:

```javascript
let exclamationMark = /!$/ // This RegExp denotes any strings that ends with an exclamation mark.
let questionMark = /^¿.*\?$/ // This RegExp denotes any strings that starts with a reversed question mark and ends with a question mark.

console.log(exclamationMark.test("I am so excited!")) // Prints: true
console.log(questionMark.test("¿Qué hora es?")) // Prints: true
```

There is also another modifier that is called **the word boundary**, which is symbolized by `\b`. This modifier checks if there is a word boundary in the place it is positioned. The positions that qualify as a word boundary are these 3:

1. If it is at a string start, it checks if the first character is alphanumeric. (\w)
2. If it is at a string end, it checks if the last character is alphanumeric. (\w)
3. If it is in between two characters, it checks if one of the characters is alphanumeric and one is not.

Example:

```javascript
console.log("Hello, human!".match(/\bhuman\b/)[0]) // Prints: human
console.log("Hello, humankind!".match(/\bhuman\b/)) // Prints: null, because at the end of the boundary, the string has another word character.
console.log("Hello, kindhuman!".match(/\bhuman\b/)) // Prints: null, because at the start of the boundary, the string has another word character.
```

#### My concentration ended here ¯\\\_(ツ)\_/¯

This much of regex will probably save your butt daily, but if you need to know more, I suggest you read [Chapter 9](https://eloquentjavascript.net/09_regexp.html) of [Eloquent JavaScript](https://eloquentjavascript.net/) (I love this book alright?). You can also check the resources below because I happened to put them there, and they are awesome as well.

#### Resources:

1. [MDN Web Docs - RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
2. [Eloquent JavaScript: A Modern Introduction to Programming](https://eloquentjavascript.net/)
3. [JavaScript.info - Word boundary](https://javascript.info/regexp-boundary)
4. [JavaScript: The difference between match() and matchAll()](https://blog.tildeloop.com/posts/javascript-the-difference-between-match-and-matchall) - tildeloop
