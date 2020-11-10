---
title: "Asynchronous JS, callbacks, and promises"
date: "2019-04-06"
tags: ["Web Development", "JavaScript"]
summary: "In this article, I briefly explain what asynchronous code is, and how we use promises to manage aynchronous code. After that we'll talk about various ways of making HTTP requests, and what Async & Await is and see how it can be used."
---

### Before we talk about asynchronous code

First let's remember what the call stack was.

When a function is called in a script, the JS interpreter adds it to the call stack and starts executing it. If any other function is called inside that function, it also gets added to the top of the call stack. This continues until one of the functions returns a value. Then as the functions get finished, they will be popped off from the top of the call stack, and the code execution will continue.

So imagine you're a child that just started reading. And you tend to lose which line you were in at the line breaks, so you use your finger to guide you through lines. JS is just like this, it puts the functions that are going to be called in order and calls them one by one, by pointing a finger to the current function that is being executed. Also, it can only do one thing at a time. (That's what the very famous quote "JS is single threaded!" means.)

It is pretty interesting though, because us humans can work like we're multi threaded. We can talk to a phone while drawing and we can fold the laundry when we are watching TV. This is called **multi-tasking.** But humans are not multi threaded at all, our so called "multitasking" is actually switching tasks too often, but not doing them simultanously. And switching tasks too often costs us, it reduces our performance and often yields worse results. The tasks take longer than they are supposed to, and we do way more errors, and become more stressful as a result. It also has a negative effect on attention and memory. So we must pay attention to be single threaded, and focus on a single task at a time. We should be more like JavaScript.

If you're interested in this subject, check [**this**](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7075496/pdf/cer-04-19.pdf) article out.

### Asynchronous code

You've visited imdb.com and you're going to search for a movie title. You can't exactly remember the name of the movie, but you do remember it had "pool" in it. So you write pool to the search bar. A server receives your request and starts collecting all the movies that has "pool" in it, and return that data to you, to be displayed on your screen. This is a long road and if your internet connection is a little bit slow, the data might not reach you very fast.

In synchronous JS code, the code execution will wait until you receive the data that you requested from the server. This causes a problem, mainly because we don't know how much time some actions might take, they can be fast, but they can be very slow too. So sitting there and doing nothing until a piece of code is done is a very unefficient way to work. In order to work more efficiently and get around the single threadedness of JS, the browser has some tricks upon its sleeve. For the processes that take a lot of time, we use what we call **callbacks**.

One of the best examples of this is setTimeout function, which is one of the web API's that browsers provide for us.

Let's see an example:

```javascript
console.log(1)
setTimeout(function () {
  console.log(3)
}, 3000)
console.log(2)

// So when you run this, it will print out 1, 2 and 3, in respect.
// JS recognizes the Web API's and passes them off to the browser to be taken care of.
// Browser sets a timer for a given time.
// In this case, after 3000 miliseconds, browser pushes the callback function to the call stack.
// This way, the single thread of JS is not blocked by a slower function.
```

Making an HTTP request is also not a thing JS does by itself, but gets help from the Web API's. When the browser is finished (receives a response), it pushes the callback function to the callback queue and it is eventually added to the call stack. Event listeners are also Web API's, so your script execution is not disrupted by these functions.

To sum up, asynchronous code is pieces of code that run independent from the main program flow. By making the browser handle some of the hard work, JS can act as if it's multithreaded, although it's not.

### Promises

Callbacks are not perfect, and everything can get very messy when you have to nest callbacks in other callbacks. This is called **callback hell**, and although there is technically nothing wrong with it, it is very error prone, not fun to write, hard to debug and read. This is where promises come in.

A promise is just an object that represents both outcomes (success and failure) of an asynchronous operation. We can attach callbacks to a promise as well. It is much flatter and easier to read when compared to nesting callbacks. Think of a promise in real life. A promise is a supposed guarantee of a result with or without a condition. (Keeping promises, on the other hand, is a virtue that some people have and some doesn't, and that's another issue. Keep your promises guys.) So one of the best ways to deal with asynchronous code is using promises. A piece of asynchronous code promises to return us a value. Also, even though you might not create promises yourself, you might be working with npm packages that return data as a promise, and you need to learn how to interact with that.

So how do you create and interact with promises?

Let's start with creating a promise. We create a promise by using the new keyword, and it always takes a function. That function always has 2 arguments: **resolve** and **reject**, which are also functions. If resolve is called inside of a function, the promise will be resolved, if reject is called, it will be rejected. Every promise object created will have two properties, one is the **PromiseState**, which defines if it's resolved (fulfilled) or rejected, and if it's neither, it will be "pending". The other property is **PromiseValue**.

```javascript
const legoSetPromise = new Promise((resolve, reject) => {
  reject()
})

console.log(legoSetPromise)

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

Now, how to interact with promises? Here comes **then** and **catch** methods. Any code you write inside a chained then block will run if the previous promise is resolved.

```javascript
const legoSetPromise = () => {
  return new Promise((resolve, reject) => {
    const randomNum = Math.random()
    if (randomNum < 0.5) {
      resolve()
    } else {
      reject()
    }
  })
}

legoSetPromise()
  .then(() => {
    console.log("Yaay we got the pirate ship lego set!!")
  })
  .catch(() => {
    console.log("We are out of lego pirate ships :(")
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

    // Here, we send a statuscode and some data (if it exists) along with resolve or reject.

    if (data) {
      resolve({ status: 200, data: data })
    } else {
      reject({ status: 404 })
    }
  })
}

// If the final data depends on another data to be found, chaining promises is the way to go.
// As long as every then and catch block returns a promise, you can chain them.
// The final catch block will run of any of the promises above is rejected.

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

### HTTP Requests

Now we will see how we can use JS to get information from an API.

The first thing we'll see is AJAX, and it stands for **Asynchronous JavaScript and XML**. XML is short for **extensible markup language** and it was designed to standarize the format of the data in a certain way. XML looks very much like HTML. HTML is used to create a structure for a webpage, and although XML looks very similar, it is actually quite different. XML uses tags to indicate keys and values, not elements. It is also hard to read and parse, so another language called JSON was created for the same purpose. JSON stands for **JavaScript Object Notation**, and it looks and smells like JS, but it is not exactly JS. For example, every key in a JSON code snippet has to be a string with quotation marks around it. We can store arrays, strings and numbers as values, but we can't store more complicated things such as functions. Although it's a little bit different from JS, it is very close, so it is much easier to use when compared to XML. The method **JSON.parse()** takes JSON data as an argument and return the same data as a Javascript object. You can interact with JSON in any programming language. It is more predictable, easy to read and parse. Nowadays, almost everybody uses JSON to transfer data.

In Chrome dev tools, under the network tab, you can see the requests being sent by your browser. XHR (short for XML HTTP Requests) tab shows the requests being sent, and if you click on one of the requests it shows the data it gets back from the server. It is most likely that the data you receive is in JSON format.

The original way of sending requests is **XMLHttpRequest**, but it has a hard to remember syntax, and most importantly it does not support promises, so you end up using nested callbacks. There are better alternatives for making an HTTP request, such as **fetch** and **axios**, and these support promises, so I will skip XMLHttpRequest and talk about fetch and axios.

**Fetch:**

Fetch is not supported by Internet Explorer. Fetch method accepts a mandatory URL for the first argument, and an optional init object that allows us to control a number of things that are sent with our request. For example, you can send cookies with your request.

The [response object](https://developer.mozilla.org/en-US/docs/Web/API/Response) that fetch returns has a body property that is a **readable stream**. A readable stream is a stream of byte data. ([Streams API](https://developer.mozilla.org/en-US/docs/Web/API/Streams_API) helps us to break a resource that can be huge into smaller chunks, and each chunk of data can be processed one by one.) The data we receive from fetch resides inside this readable stream, and to interact with it, we need to turn it into JSON first. Turning a promise into JSON takes time and it is also asynchronous, that's why .json() method returns us another promise.

Let's do a very simple fetch request to the [SWAPI API](https://swapi.dev/) to demonstrate this:

```javascript
// This will print the whole response object:
fetch("https://swapi.dev/api/planets/").then(res => console.log(res))

// This will print out the data that's being sent form the API:
fetch("https://swapi.dev/api/planets/").then(response => {
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

Fetch returns a resolved promise even whith HTTP error status' such as 404 or 500. The request will only be rejected if anything prevents the request from completing, or a network failure. So to catch the error status codes, we need to add another checkpoint.

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

### Async & Await

**Resources:**

1. Madore KP, Wagner AD. [Multicosts of Multitasking.](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7075496/pdf/cer-04-19.pdf) Cerebrum. 2019;2019:cer-04-19. Published 2019 Apr 1.
