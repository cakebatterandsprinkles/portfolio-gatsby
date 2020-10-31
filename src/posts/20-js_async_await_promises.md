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

```
console.log(1);
setTimeout(function(){
  console.log(3)
}, 3000);
console.log(2);

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

```
const legoSetPromise =  new Promise((resolve, reject) => {
  reject();
});

console.log(legoSetPromise);

// This will log a promise object with a "rejected" PromiseState property.
// It will also throw an error.
// As we did nothing to catch it, it will be an "uncaught" error.

const penguinSlidePromise =  new Promise((resolve, reject) => {
  resolve();
});

console.log(penguinSlidePromise);

// This will log a promise object with a "fulfilled" PromiseState property.
// There will be no errors.
```

Now, how to interact with promises? Here comes **then** and **catch** methods. Any code you write inside a chained then block will run if the previous promise is resolved.

```
const legoSetPromise = () => {
  return new Promise((resolve, reject) => {
    const randomNum = Math.random();
    if (randomNum < 0.5) {
      resolve();
    } else {
      reject();
    }
  });
};

legoSetPromise()
  .then(() => {
    console.log("Yaay we got the pirate ship lego set!!");
  }).catch(() => {
  console.log("We are out of lego pirate ships :(");
});
```

You can also use reject and resolve with data, and chain promises to each other. Let's create a fake request as an example to showcase both promise chaining and using data:

```
const request = url => {
  return new Promise((resolve, reject)=> {
    const pages = {
      '/users': [
        { id: 1, username: "prettybird" },
        { id: 2, username: "marshmallow" }
      ],
      '/users/1': {
        id: 1,
        username: "prettybird",
        isImposter: true,
        color: "lime",
        favMap: "Skeld",
        bestStatId: 2345
      },
      '/users/2': {
        id: 2,
        username:  "marshmallow",
        isImposter: false,
        color: "yellow",
        favMap: "Polus",
        bestStatId: 122
      },
      '/about': "About page is under construction.",
      '/stats/2345': {
        kills: 7,
        sabotage: 3,
        duration: 186974,
        durationUnit: "seconds"
      }
    };
    const data = pages[url];

    // Here, we send a statuscode and some data (if it exists) along with resolve or reject.

    if (data) {
      resolve({status:200, data: data});
    } else {
      reject({status: 404})
    }
  })
}

// If the final data depends on another data to be found, chaining promises is the way to go.
// As long as every then and catch block returns a promise, you can chain them.

request('/users')
  .then((res)=> {
    const id = res.data[1].id;
    return request(`/users/${id}`);
  })
  .then((res)=> {
    const bestStat = res.data.bestStatId;
    return request(`/stats/${bestStat}`);
  })
  .then((res)=> {
    console.log(res.data);
  })
  .catch((err)=> {
    console.log("You have an error:", err)
  })
```

### HTTP Requests

### Async & Await

**Resources:**

1. Madore KP, Wagner AD. [Multicosts of Multitasking.](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7075496/pdf/cer-04-19.pdf) Cerebrum. 2019;2019:cer-04-19. Published 2019 Apr 1.
