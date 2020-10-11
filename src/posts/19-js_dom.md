---
title: "JavaScript- DOM and Some Useful Web API's"
date: "2019-04-06"
tags: ["Web Development", "JavaScript"]
summary: "In this article, I very briefly explain the DOM and navigator, location and history objects."
---

### Document Object Model (DOM)

DOM is a structured representation of the HTML document where each HTML element is represented as objects, an interface between HTML+CSS and JS created by the browser.

Every element inside the HTML file is converted to objects and tucked inside a single, bigger object, called the document object. To see this object in your browser, you can just write `console.dir(document)` to your browser console. The elements that are converted to objects can also be called **nodes**, but not every node is an HTML element. And of course, they are not tucked in randomly, there is a hierarchy (if they were, how would we know the relationship between them?). They have a tree like structure, where nested elements are children of their parents. In every tree, there is a root of the tree, and that is the topmost object in the tree-like structure. In DOM's case the root is the document object.

If you open the document object in various websites, you'll see that it has a certain structure. For example it starts with a URL parameter, and many other properties and methods there are the same. Their contents however might vary from webpage to webpage.

The topmost object in JS is the window object. Document object itself is one of the objects the window object encapsulates. You can simply check out the window object by logging it to your console: `console.log(window)`

**Selecting nodes in DOM:**

This is the first step of manipulating DOM, and there are various ways to do that.

`document.getElementById("")` -> This will return a single object with that id. (If somehow there are multiple id's matching (and there shouldn't be, but let's say there is somehow), it will return the first one matching. If nothing is matching, it will return null.)

`document.getElementsByTagName("")` -> This will return an _HTML collection_ that consists of all of the objects with that specified tag. If there is nothing matching, it will return an empty HTML collection.

**An HTML collection** is an array-like object that is not an array. You can't use array methods, but it has a length and you can access objects inside with the bracket notation. You can also iterate over it with a for...of loop. If you need an array of the objects, you can always spread the HTML collection inside an array, and you'll have an array.

`document.getElementsByClassName("")` -> This will return an HTML collection that consists of all the objects with a specified class name. If there is nothing matching, it will return an empty HTML collection.

`document.querySelector("")` -> This will return a single element. You can use any type of CSS selector with it (id, class, tag name) but it will only return the first thing it finds. To indicate a class, use a dot(.) and to indicate an id, use a octothorp(#) at the beginning of the query parameter.

You can look for nested objects as well.
`document.querySelector("div a.special")` means you request the first anchor tag that has a class named special and is nested inside a div.

`document.querySelectorAll("")` -> This one takes a tag, id or class, returns all matching elements as a Node List.

**A node list** is another type of collection which is also an array-like object. A slight difference between an HTML collection and a node list is node list has forEach loop available to it while an HTML collection doesn't.

**Resources:**

1. [The Modern JavaScript Tutorial- javascript.info](https://javascript.info/)
2. [MDN web docs- Memory Management](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_Management)
3. [JS V8 Engine Explained- hackernoon](https://hackernoon.com/javascript-v8-engine-explained-3f940148d4ef)
4. [Academind](https://academind.com/) - Maximilian Schwarzmüller
5. [Eloquent JavaScript: A Modern Introduction to Programming](https://eloquentjavascript.net/)
6. [w3schools](https://www.w3schools.com/js/)
