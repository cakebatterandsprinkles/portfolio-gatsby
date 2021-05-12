---
title: "Asynchronous JS, callbacks, and promises"
date: "2019-07-27"
tags: ["Web Development", "JavaScript", "Neuroscience"]
summary: "In this article, I briefly explain what asynchronous code is and how we use promises to manage it. After that, I talk about how to make HTTP requests, what Async & Await is, and see how it can be used."
---

#### Before we talk about asynchronous code

First, let's remember what the call stack was.

When a function is called in a script, the JavaScript interpreter adds it to the call stack and starts executing it. If any other function is called inside that function, it also gets added to the top of the call stack. This continues until one of the functions returns a value. Then as the functions get finished, they will be popped off from the top of the call stack, and the code execution will continue.

So imagine you're a child that just started reading. And you tend to lose which line you were in at the line breaks, so you use your finger to guide you through lines. JavaScript is just like this, it puts the functions that are going to be called in an order and calls them one by one, by pointing a finger to the current function that is being executed. Also, it can only do one thing at a time. (In other words, JavaScript is single-threaded.)

It is pretty interesting because most humans like working as they're multi-threaded (me included). We can talk on a phone while drawing something, cook three different meals at the same time, or fold the laundry when we are watching a movie. Or at least, we think we can. This human quality is called **multi-tasking.** But humans are not multi-threaded at all, our so-called multitasking ability is us switching tasks so often and so successfully that we think we are multi-threaded. But we are not doing two things simultaneously, because we really can't. And switching tasks too often costs us without us knowing, it reduces our performance and often yields worse results. Each task we switch takes longer than they would have if we were only doing them, and we do way more errors. It also makes us more stressed and unhappy. So we must pay attention to stay single-threaded as much as possible (and maybe be more like JavaScript :]). If you're interested in this subject, check [**this**](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7075496/pdf/cer-04-19.pdf) article out.

#### Asynchronous code

You've visited imdb.com and you're going to search for a movie title. You can't exactly remember the name of the movie, but you do remember it had "pool" in it. So you write pool to the search bar. A server receives your request and starts collecting all the movies that have "pool" in it and returns that data to you, to be displayed on your screen. This is a long road and if your internet connection is a little bit slow, the data might not reach you very fast.

In synchronous JavaScript code, the code execution will wait until you receive the data that you requested from the server. This causes a problem, mainly because we don't know how much time some actions might take, they can be fast, but they can be very slow too. So sitting there and doing nothing until a piece of code is done is a very inefficient way to work. To work more efficiently and get around the single-threadedness of JavaScript, the browser has some tricks upon its sleeve. For the processes that take a lot of time, we use what we call **callbacks**.

One of the best examples of this is the setTimeout function, which is one of the web API's that browsers provide for us.

Let's see an example:

```javascript
console.log(1)
setTimeout(function () {
  console.log(3)
}, 3000)
console.log(2)

// So when you run this, it will print out 1, 2, and 3, in respect.
// JavaScript recognizes the Web APIs and passes them off to the browser to be taken care of.
// Browser sets a timer for a given time.
// In this case, after 3000 milliseconds, the browser pushes the callback function to the call stack.
// This way, the single thread of JavaScript is not blocked by a slower function.
```

Making an HTTP request is also not a thing JS does by itself but with the help of the web APIs. When the browser is done executing a function, it pushes the callback function to the callback queue (if it exists) and it is eventually added to the call stack. Event listeners are also a part of the Web APIs, so your script execution is not disrupted by these functions.

To sum up, asynchronous code is pieces of code that run independently from the main program flow. By making the browser handle some of the work, JavaScript can act as if it's multithreaded, although it's not.

#### Promises

Callbacks are not perfect, and everything can get very messy when you have to nest callbacks in other callbacks. This is called the **callback hell**, and although there is technically nothing wrong with it, it is very error-prone, not fun to write, hard to debug and read. This is where promises come in.

**A promise** is just an object that represents both outcomes (success and failure) of an asynchronous operation. We can attach callbacks to a promise as well. The syntax is much flatter and easier to read when compared to nesting callbacks. Think of a promise in real life. A promise is a supposed guarantee of a result with or without a condition. (Keeping promises, on the other hand, is a virtue that some people have and some don't, and that's another issue. Keep your promises guys.) So one of the best ways to deal with asynchronous code is using promises. A piece of asynchronous code promises to return us a value. Also, even though you might not create promises yourself, you might be working with third-party packages and libraries that return data as a promise, and you need to learn how to interact with that.

Let's start with creating a promise. We create a promise by using the `new` keyword, and it always takes a function as an argument. That function always has two arguments: **resolve** and **reject**, which are also functions themselves. If the `resolve` function is called inside of a function, the promise will be resolved and if the `reject` function is called, it will be rejected. Every promise object created will have two properties, one is the **PromiseState**, which defines if it's resolved (fulfilled) or rejected, and if it's neither, it will be "pending". The other property is **PromiseValue**.

```javascript
const legosetPromise = new Promise((resolve, reject) => {
  reject()
})

console.log(legosetPromise)

// This will log a promise object with a "rejected" PromiseState property.
// It will also throw an error.
// As we did nothing to catch it, it will be an "uncaught" error.

const penguinSlidePromise = new Promise((resolve, reject) => {
  resolve()
})

console.log(penguinSlidePromise)

// This will log a promise object with a "fulfilled" PromiseState property.
// There will be no errors.
```

Now, how to interact with promises? Here comes the **then** and **catch** methods. Any code you write inside a chained then block will run if the previous promise is resolved.

```javascript
const legosetPromise = () => {
  return new Promise((resolve, reject) => {
    const randomNum = Math.random()
    if (randomNum < 0.5) {
      resolve()
    } else {
      reject()
    }
  })
}

legosetPromise()
  // If this function is rejected, the catch block will run. If it is resolved, the then block will run.
  .then(() => {
    console.log("Yaay we got the pirate ship lego set!!")
  })
  .catch(() => {
    console.log("We are out of lego pirate ships :[")
  })
```

You can also use reject and resolve with data, and chain promises to each other. Let's create a fake request as an example to showcase both promise chaining and using data:

```javascript
const request = url => {
  return new Promise((resolve, reject) => {
    const pages = {
      "/users": [
        { id: 1, username: "prettybird" },
        { id: 2, username: "marshmallow" },
      ],
      "/users/1": {
        id: 1,
        username: "prettybird",
        isImposter: true,
        color: "lime",
        favMap: "Skeld",
        bestStatId: 2345,
      },
      "/users/2": {
        id: 2,
        username: "marshmallow",
        isImposter: false,
        color: "yellow",
        favMap: "Polus",
        bestStatId: 122,
      },
      "/about": "About page is under construction.",
      "/stats/2345": {
        kills: 7,
        sabotage: 3,
        duration: 186974,
        durationUnit: "seconds",
      },
    }
    const data = pages[url]

    // Here, we send a status code and some data (if it exists) along with resolve or reject.

    if (data) {
      resolve({ status: 200, data: data })
    } else {
      reject({ status: 404 })
    }
  })
}

// If the final data depends on another data to be found, chaining promises is the way to go.
// As long as every then and catch block returns a promise, you can chain them.
// The final catch block will run if any of the promises above is rejected.

request("/users")
  .then(res => {
    const id = res.data[1].id
    return request(`/users/${id}`)
  })
  .then(res => {
    const bestStat = res.data.bestStatId
    return request(`/stats/${bestStat}`)
  })
  .then(res => {
    console.log(res.data)
  })
  .catch(err => {
    console.log("You have an error:", err)
  })
```

There are 4 states of promises:

- **PENDING** => Promise is in progress, neither `then()` nor `catch()` block executes at this moment
- **RESOLVED** => Promise is resolved => the following `then()` block executes
- **REJECTED** => Promise was rejected => the `catch()` block executes
- **SETTLED** => No more `then()` blocks is left, ready to execute `finally()`

When you have another `then()` block after a `catch()` or `then()` block, the promise re-enters **PENDING** mode (keep in mind: `then()` and `catch()` always return a new promise - either not resolving to anything or resolving to what you return inside of `then()`). Only if there are no more `then()` blocks left, it enters a new, final mode: **SETTLED**.

Once **SETTLED**, you can use a special block - `finally()` - to do final cleanup work, which is optional. `finally()` is reached no matter if the promise is being resolved or rejected.

Example:

```javascript
somePromiseReturningFunction()
  .then(firstResult => { return 'done with first promise'; })
  .catch(err => {
      // would handle any errors thrown before
      // implicitly returns a new promise - just like then() })
  .finally(() => {
      // the promise is settled now - finally() will NOT return a new promise!
      // you can do final cleanup work here });
```

#### HTTP Requests

Now we will see how we can use JavaScript to get some information from another API.

The first thing we'll see is AJAX, and it stands for **Asynchronous JavaScript and XML**. XML is short for **extensible markup language** and it was designed to standardize the format of the data in a certain way. XML looks very much like HTML. HTML is used to create a structure for a webpage, and although XML looks very similar, it is quite different. XML uses tags to indicate keys and values, not elements. It is also hard to read and parse, so another language called JSON was created for the same purpose. JSON stands for **JavaScript Object Notation**, and it looks and smells like JavaScript, but it is not exactly JavaScript. For example, every key in a JSON code snippet has to be a string with quotation marks around it. We can store arrays, strings, and numbers as values, but we can't store more complicated things such as functions. Although it's a little bit different from JavaScript, it is very close, so it is much easier to use when compared to XML. The method **JSON.parse()** takes JSON data as an argument and returns the same data as a Javascript object. You can interact with JSON in any programming language. It is more predictable, easy to read and parse. Nowadays, almost everybody uses JSON to transfer data.

In Chrome dev tools, under the network tab, you can see the requests being sent by your browser. **XHR** (short for XML HTTP Requests) tab shows the requests being sent, and if you click on one of the requests it shows the data it gets back from the server. It is most likely that the data you receive is in JSON format.

The original way of making HTTP requests (the web API the browser provides for us) is **XMLHttpRequest**, but it has a hard-to-remember syntax, and most importantly it does not support promises, so you end up using nested callbacks. There are better alternatives for making HTTP requests, such as **fetch** and **axios**, and these support promises, so I will skip XMLHttpRequest and talk about them instead.

**The Fetch API:**

The [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) is not supported by Internet Explorer. The `fetch` method accepts a mandatory URL for the first argument, and an optional init object that allows us to control a number of things that are sent with our request. You can also send cookies with your request.

The [response object](https://developer.mozilla.org/en-US/docs/Web/API/Response) that fetch returns has a body property that is a **readable stream**. A readable stream is a stream of byte data. ([Streams API](https://developer.mozilla.org/en-US/docs/Web/API/Streams_API) helps us to break a resource that can be huge into smaller chunks, and each chunk of data can be processed one by one.) The data we receive from fetch resides inside this readable stream, and to interact with it, we need to turn it into JSON first. Turning a promise into JSON takes time and it is also asynchronous, that's why the `.json()` method returns us another promise.

Let's do a very simple fetch request to the [SWAPI API](https://swapi.dev/) to demonstrate this:

```javascript
// This will print the whole response object:
fetch("https://swapi.dev/api/planets/").then(res => console.log(res))

// This will print out the data that's being sent form the API:
fetch("https://swapi.dev/api/planets/").then(response => {
  // Parse the response object, then print it to the console:
  response.json().then(data => {
    console.log(data)
  })
})

// Now let's only print out the planet names:
fetch("https://swapi.dev/api/planets/")
  .then(response => {
    response.json().then(data => {
      for (planet of data.results) {
        console.log(planet.name)
      }
    })
  })
  .catch(err => {
    console.log("Fetch Error: ", err)
  })
```

Fetch returns a resolved promise even with HTTP error status' such as 404 or 500. The request will only be rejected if anything prevents the request from completing, or a network failure. So to catch the error status codes, we need to add another checkpoint.

```javascript
// The following code will:
// a. If the URL is correct and there are no network errors, will print out planet names.
// b. If the URL is wrong, throw an error and print out the status code.
// c. If there are network errors, it will print out Fetch Error and the error text. (catch block)

fetch("https://swapi.dev/api/planets/")
  .then(response => {
    if (response.ok) {
      response.json().then(data => {
        for (planet of data.results) {
          console.log(planet.name)
        }
      })
    } else {
      throw new Error(`HTTP Status Code: ${response.status}`)
    }
  })
  .catch(err => {
    console.log("Fetch Error: ", err)
  })
```

We can avoid nesting then blocks if we want to, by using chaining (as long as you return a promise before all then and catch blocks!). So the code above could also be written like this:

```javascript
fetch("https://swapi.dev/api/planets/")
  .then(response => {
    if (response.ok) {
      return response.json()
    } else {
      throw new Error(`HTTP Status Code: ${response.status}`)
    }
  })
  .then(data => {
    for (planet of data.results) {
      console.log(planet.name)
    }
  })
  .catch(err => {
    console.log("Fetch Error: ", err)
  })
```

**Axios:**

[Axios](https://www.npmjs.com/package/axios) is a popular JS library that allows us to do HTTP requests. It simplifies the process of making requests by adding a bunch of methods, and it uses the Fetch API under the hood. Just like the Fetch API, it is promise-based, and it can be used in both the server-side and the client-side code.

The axios API is pretty simple. After you import axios to the file you're working on, you can simply use one of the methods provided for you, such as `request`, `get`, `delete`, `head`, `options`, `post`, `put`, `patch`. For the example, we are going to use the [SWAPI API](https://swapi.dev/) again:

```javascript
axios.get("https://swapi.dev/api/planets") // This returns us a promise, with a data property that has already been parsed, so we don't have to parse it ourselves. (No more response.json()!)

axios
  .get("https://swapi.dev/api/planets")
  .then(res => console.log(res.data))
  // If the status code of the response is not 200, catch callback will run:
  .catch(err => console.log(err))
```

So there are two main differences when compared to the Fetch API: We didn't have to create a checkpoint to check the status code (axios runs the catch callback if it's anything other than 200), and we didn't have to parse (axios parsed it for us).

If you want to chain multiple HTTP requests, you can return the HTTP request and chain `.then` after it, like so:

```javascript
axios
  .get("https://swapi.dev/api/planets")
  .then(res => {
    console.log(res.data)
    // You are returning a promise, so you can chain 'then' after this block:
    return axios.get(res.data.next)
  })
  .then(res => {
    console.log(res.data)
  })
  .catch(err => console.log(err))
```

As you can see, the axios library doesn't provide something new, but a cleaner and more legible syntax.

#### Async & Await

Async & await is the way of using asynchronous code without using then and catch syntax or callbacks. It helps us create synchronous looking asynchronous code by providing us two new keywords: `async` and `await`. The `async` keyword is always used in front of a function declaration or expression, and always returns a promise. If the async function returns a value, the promise will resolve with that value, and if an error is thrown, the promise will be rejected.

```javascript
async function returnOrderNumber() {
  const randomNum = Math.ceil(Math.random() * 50)
  if (randomNum > 25) {
    return randomNum
  } else {
    throw new Error("Order number must not be smaller than or equal to 25.")
  }
}

returnOrderNumber()
  .then(val => console.log(val))
  .catch(err => console.log(err))

// If we wanted to use promise syntax instead of the async keyword, the same function would look like this:
function returnOrderNumber() {
  const randomNum = Math.ceil(Math.random() * 50)
  return new Promise((resolve, reject) => {
    if (randomNum > 25) {
      resolve(randomNum)
    }
    reject("Order number must not be smaller than or equal to 25.")
  })
}
```

The `await` keyword can only be used inside functions that are declared with the `async` keyword. await pauses the execution of the function, and waits for the promise to resolve before continuing execution. For the example, we'll use the [SWAPI API](https://swapi.dev/) again:

```javascript
async function getCharacters() {
  // JavaScript will not move on until the promise that's tagged with await is resolved.
  const response = await axios.get("https://swapi.dev/api/people/")
  response.results.forEach(char => {
    console.log(char.name)
  })
}

// So how do we handle errors in async & await syntax? We have two options to choose from:
// 1. We can chain 'catch', just like before:
getCharacters().catch(err => console.log(err))

// 2. We can add a try & catch block to our function definition:
async function getCharacters() {
  try {
    const response = await axios.get("https://swapi.dev/api/people/")
    response.results.forEach(char => {
      console.log(char.name)
    })
  } catch (err) {
    console.log(err)
  }
}

// Try & catch block will only catch the errors inside of a single async function, while the chained catch in the first option will catch the error if any of the chained promises fail.
```

Normally, if we line up one `await` after another, we would expect them to resolve in the same order. It's like having a single [messenger pigeon](https://en.wikipedia.org/wiki/Homing_pigeon), so one promise has to resolve before you can start working on another. If there are multiple places where the `await` keyword was used in an async function, they will resolve in the order they are written:

```javascript
async function createTeam() {
  const char1 = await axios.get("https://swapi.dev/api/people/1")
  const char2 = await axios.get("https://swapi.dev/api/people/2")
  const char3 = await axios.get("https://swapi.dev/api/people/3")
  console.log(
    `The people on this team are: ${char1.name}, ${char2.name}, ${char3.name}`
  )
}
```

But if the promises have nothing to do with each other, if they are independent endpoints like in the example above, them being executed sequentially becomes unnecessary. To be able to do all three in parallel would be faster and more efficient. And there is a way to execute them in parallel as well:

```javascript
async function createTeam() {
  // We'll request each one synchronously like we have three messenger pigeons. What we get back is the promise, not the value as it was in await:
  const promise1 = axios.get("https://swapi.dev/api/people/1")
  const promise2 = axios.get("https://swapi.dev/api/people/2")
  const promise3 = axios.get("https://swapi.dev/api/people/3")
  // But we'll wait until all the promises are resolved so that we can make sure we have the data when we need to do something with them:
  const char1 = await promise1
  const char2 = await promise2
  const char3 = await promise3
  console.log(
    `The people on this team are: ${char1.name}, ${char2.name}, ${char3.name}`
  )
}
```

To make the syntax more clear and shorter, we can use a promise helper method called `Promise.all` that accepts an array of promises, and returns the response objects of those given promises as an array after all of them are resolved. So I can refactor the code above like this:

```javascript
async function createTeam() {
  const promise1 = axios.get("https://swapi.dev/api/people/1")
  const promise2 = axios.get("https://swapi.dev/api/people/2")
  const promise3 = axios.get("https://swapi.dev/api/people/3")
  const results = await Promise.all([promise1, promise2, promise3])
  console.log(
    `The people on this team are: ${results[0].name}, ${results[1].name}, ${results[2].name}`
  )
}
```

#### Resources

1. Madore KP, Wagner AD. [Multicosts of Multitasking.](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7075496/pdf/cer-04-19.pdf) Cerebrum. 2019;2019:cer-04-19. Published 2019 Apr 1.
2. [The Modern JavaScript Tutorial- javascript.info](https://javascript.info/)
3. [MDN web docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
4. [Academind](https://academind.com/)
5. [Eloquent JavaScript: A Modern Introduction to Programming](https://eloquentjavascript.net/)
6. [The Modern Javascript Bootcamp](https://www.udemy.com/course/javascript-beginners-complete-tutorial/) by Colt Steele and Stephen Grider
