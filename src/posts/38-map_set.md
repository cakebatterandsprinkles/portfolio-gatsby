---
title: "Maps & Sets"
date: "2021-02-16"
tags: ["Web Development", "JavaScript"]
summary: "In this article, I briefly explain what regular expressions are and how to use them in JavaScript context."
---

Two new kinds of collections introduced with ES6.

### Maps:

A map is a collection which maps key-value pairs.

```jsx
let cardAce = {
	name: "Ace of Spades"
};

let cardKing = {
	name: "King of Clubs"
};

//Create a new map
let deck = new Map();
//Setting a new key-value pair
deck.set("as", cardAce);
deck.set("kc", cardKing);

//Another way of setting new key-value pairs in a map:
let deck = new Map([["as", cardAce],["kc", cardKing]]);

console.log(deck); //[object Map] { ... }
console.log(deck.size); //2

deck.set("as", cardKing);
console.log(deck.size); //2
//It is still 2, because you didn't add a new key-value pair but overriden a value
//of a key that already exists.

//extracting a value from a map
console.log(deck.get("kc")); // [object Object] {
														 //   name: "King of Clubs"
														 // }

deck.delete("as"); //prints out undefined
									 //deletes the specified key-value pair

deck.clear(); //clears all key-value pairs in the deck

console.log(deck.keys()); // [object Map Iterator] { ... }
for (let key of deck.keys()) {
	console.log(key);
} // will print "as" and "kc"

console.log(deck.values()); // [object Map Iterator] { ... }
for (let value of deck.values()) {
	console.log(value);
} // will print [object Object] {
								//name: "Ace of Spades"
								};
							//[object Object] {
								//name: "King of Clubs"
								};

for (let entry of deck.entries()) {
	console.log(entry);
}

//This will print out as:
//["as", [object Object] {
//name: "Ace of Spades"
//}];
//["kc", [object Object] {
//name: "King of Clubs"
//}];
```

### WeakMap:

Keys of WeakMaps are of the type Object only. Primitive data types as keys are not allowed. (symbols, strings, numbers, etc.)

It is called the weakmap because it holds weak references to the entries in the map.

Has 4 methods: get, delete, has, set.

This in turn, means that it is able to get rid of the entries that are not used anymore. (Like a garbage collector) But for that behaviour it has to have reference type data as keys.

Browser or the environment running the javascript will go over your code and when this code runs it will identify which objects aren't used anymore. (This is done to free some memory. It also improves the performance of your application and takes off some work from your hands, because you should do the managing the resources otherwise!)

Disadvantages: Using objects as keys, it is enumarable (you cant loop through it, the reason for this is, we don't know the size of it, some items might have been deleted, etc)

Size property and for .. of loop can't be used here.

```jsx
let cardAce = {
	name: "Ace of Spades"
};

let cardKing = {
	name: "King of Clubs"
};

let key1 = {a:1};
let key2 = {b:2};

let deck = new WeakMap();
deck.set(key1, cardAce);
deck.set(key1, cardKing);

console.log(deck.get(key1));
	// will print [object Object] {
								//name: "Ace of Spades"
								};
```

### Sets:

A set is just a list of values. (no key-value pairs). The difference btw an array and a set is arrays can have the same values multiple times, but sets can't.

A set is an array with unique values. In a set, the order doesn't matter, because there is only a single one of that value, so you can reach them by using value.

```jsx
let array = [1, 1, 1]

//initialize a set:
let set = new Set([1, 1, 1])

for (element of set) {
  console.log(element) //will print out 1
}

for (element of array) {
  console.log(element) //will print out 1 1 1
}

set.add(2)
for (element of set) {
  console.log(element) //will print out 1 2
}

//if I try to add an existing value to a set, it doesn't override the value inside
//the set, it basically doesn't execute the new code.

set.delete(1) //deletes value 1 from the set.
set.clear() //deletes all values from the set.

//you can check if a set has a specific value:
console.log(set.has(1)) //true

for (element of set.entries()) {
  console.log(element) //will print out [1, 1] [2, 2]
}
//you get key value pairs with .entries(), key is always equal to the value.
//you can also use .keys()
for (element of set.keys()) {
  console.log(element) //will print out 1 2
}
```

### WeakSet:

WeakSet only stores arrays or objects. (All arrays are objects at the end!)

Only has 3 methods: add, delete, set

WeakSet has only values, not keys. Like the WeakMap, the WeakSet is enumerable. (you can't iterate through it)

```jsx
let set = new WeakSet([{ a: 1 }, { b: 2 }, { b: 2 }, { c: 3 }])
console.log(set.has({ b: 2 })) //false

//In the set variable the {b:2} objects are not the same, because an object only
//keeps a pointer to a value. So each {b:2} objects are different from each other
//in the code above.

let obj1 = { a: 1 }
let obj2 = { b: 2 }
let set = new WeakSet(obj1, obj1, obj2)
console.log(set.has(obj1)) //true
set.delete(obj1)
set.add(obj1)
```

**Difference between Set and WeakSet:**

If you are storing a reference to an object in a set, even if you set that object to null, V8 engine will not garbage collect it as something is still holding a reference to that object.

WeakSet allows it to be garbage collected if there are no other values referring to that object. ( If no one else is using it other than the WeakSet, it will be garbage collected.)

This is also true for Map and WeakMap!

WeakMap and WeakSets are advanced concepts that are used for memory management (as they allow garbage collection) and useful in large applications where you have data which is fine to be deleted at some point, but you don't want to manage them with map and set where you manually have to delete the data.

#### Resources:

1. [JavaScript.info - Generators](https://javascript.info/generators)
