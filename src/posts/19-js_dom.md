---
title: "JavaScript- DOM and Some Useful Web API's"
date: "2019-05-10"
tags: ["Web Development", "JavaScript"]
summary: "In this article, I very briefly explain the DOM and navigator, location and history objects. These are mostly tiny notes I took for myself when I was studying the DOM."
---

## Document Object Model (DOM)

DOM is a structured representation of the HTML document where each HTML element is represented as objects, an interface between HTML+CSS and JS created by the browser.

Every element inside the HTML file is converted to objects and tucked inside a single, bigger object, called the document object. To see this object in your browser, you can just write `console.dir(document)` to your browser console. The elements that are converted to objects can also be called **nodes**, but not every node is an HTML element. And of course, they are not tucked in randomly, there is a hierarchy (if they were, how would we know the relationship between them?). They have a tree like structure, where nested elements are children of their parents. In every tree, there is a root of the tree, and that is the topmost object in the tree-like structure. In DOM's case the root is the document object.

If you open the document object in various websites, you'll see that it has a certain structure. For example it starts with a URL parameter, and many other properties and methods there are the same. Their contents however might vary from webpage to webpage.

The topmost object in JS is the window object. Document object itself is one of the objects the window object encapsulates. You can simply check out the window object by logging it to your console: `console.log(window)`

### 1. Selecting:

This is the first step of manipulating DOM, and there are various ways to do that.

`document.getElementById("")` -> This will return a single object with that id. (If somehow there are multiple id's matching (and there shouldn't be, but let's say there is somehow), it will return the first one matching. If nothing is matching, it will return null.)

`document.getElementsByTagName("")` -> This will return an _HTML collection_ that consists of all of the objects with that specified tag. If there is nothing matching, it will return an empty HTML collection.

**An HTML collection** is an array-like object that is not an array. You can't use array methods, but it has a length and you can access objects inside with the bracket notation. You can also iterate over it with a for...of loop. If you need an array of the objects, you can always spread the HTML collection inside an array, and you'll have an array.

`document.getElementsByClassName("")` -> This will return an HTML collection that consists of all the objects with a specified class name. If there is nothing matching, it will return an empty HTML collection.

`document.querySelector("")` -> This will return a single element. You can use any type of CSS selector with it (id, class, tag name) but it will only return the first thing it finds. To indicate a class, use a dot(.) and to indicate an id, use a octothorp(#) at the beginning of the query parameter.

You can look for nested objects as well.
`document.querySelector("div a.special")` means you request the first anchor tag that has a class named special and is nested inside a div.

`document.querySelectorAll("")` -> This one takes a tag, id or class, returns all matching elements as a Node List.

**A node list** is another type of collection which is also an array-like object. A slight difference between an HTML collection and a node list is node list has forEach loop available to it while an HTML collection doesn't. But you can use for...of loop or regular for loop for both of them.

### 2. Manipulating:

- **innerText - textContent:** Both of these are used to change or get the text content of an HTML element. All the text contents of the nested elements will also show. The difference between these is innerText is aware of the content we are showing on the page, and just gets the text content as a simple string. textContent will show additional data, such as script tags or returns. Although innerText returns a much cleaner text, textContent is faster. With both of them, you have the ability to override the nested HTML nodes if you're not careful.

- **innerHTML:** innerHTML returns every HTML code inside the chosen object as a string. You can pass in some HTML code to change what's inside the selected object, but you have to pass it in string form.

- **value, src, href:** To get the user input inside forms (text or password), you can use their value property after selecting them. For checkboxes, we have another property that indicates value, and that's the "checked" property, which is either true or false. Inputs with the type submit won't have a value property. For inputs with type range, you generally have min and max attributes, (and an optional step attribute, default is 1) so the value of this input will depend on these properties.

  The selected links have href properties and selected images have src properties, both can be manipulated through the DOM.

- **getAttribute / setAttribute:** After selecting a node from the DOM, you can reach its attributes by simply typing `el.getAttribute("max")`. If the element has that attribute, it will return its value as a string, if it doesn't, it will return null. If you want to set an attribute, you need to say the name of the attribute and its desired value, like this: `el.setAttribute("min", "-250")`. This will set the value of the min attribute of the selected element to -250.

- **Traversing the DOM: (parentElement, children, nextSibling, previousSibling)** These methods allow you to access other elements based on the current element you're working with. Think of a very simple HTML document, that has a single unordered list inside the body tags, and inside that unordered list there is 3 list items. The parent of any list item is the unordered list, the parent of unordered list is body, the parent of body is html document and the parent of the html document is null (doesn't exist). If you go the opposite way, all the list items are unordered list's children, the unordered list is body's children and body is html's children. List items are siblings to each other.

  The children property will return an HTML collection that consists of all the nested elements.

  There are other properties such as nextElementSibling and previousElementSibling, which chooses the next and previous siblings, respectfully.

- **Altering Styles with style property:** We can use style property to change the styling of an element, but reading the existing style from the style property is generally not possible. Style property will only have the inline styles, but most of the time our styles are in a separate file, not incorporated into our HTML. If you change anything using the style property, the changed property will become an inline attribute. Inline attributes are written in camel case.

- **getComputedStyle:** This returns an object called CSS style declaration, with a lot of key-value pairs. Most of these values are just the default values, but it does take both the stylesheet and the inline styles into account and creates a single object.
- **creatingElements:**
- **append, prepend, insertBefore:**
- **removeChild, remove:**

### 3. Events:

**Resources:**

1. [The Modern JavaScript Tutorial- javascript.info](https://javascript.info/)
2. [MDN web docs- Memory Management](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_Management)
3. [JS V8 Engine Explained- hackernoon](https://hackernoon.com/javascript-v8-engine-explained-3f940148d4ef)
4. [Academind](https://academind.com/) - Maximilian Schwarzmüller
5. [Eloquent JavaScript: A Modern Introduction to Programming](https://eloquentjavascript.net/)
6. [w3schools](https://www.w3schools.com/js/)
