---
title: "Asynchronous JS, callbacks, and promises"
date: "2019-04-06"
tags: ["Computer Science"]
summary: "In this article, I briefly explain what asynchronous code is, and how we use promises to manage aynchronous code. After that we'll talk about various ways of making HTTP requests, and what Async & Await is and see how it can be used."
---

### Before we talk about asynchronous code

First let's remember what the call stack was.

When a function is called in a script, the JS interpreter adds it to the call stack and starts executing it. If any other function is called inside that function, it also gets added to the top of the call stack. This continues until one of the functions returns a value. Then as the functions get finished, they will be popped off from the top of the call stack, and the code execution will continue.

So imagine you're a child that just started reading. And you tend to lose which line you were in at the line breaks, so you use your finger to guide you through lines. JS is just like this, it puts the functions that are going to be called in order and calls them one by one, by pointing a finger to the current function that is being executed. Also, it can only do one thing at a time. (That's what the very famous quote "JS is single threaded!" means.)

It is pretty interesting though, because us humans can work like we're multi threaded. We can talk to a phone while drawing and we can fold the laundry when we are watching TV. This is called **multi-tasking.** But humans are not multi threaded at all, our so called "multitasking" is actually switching tasks too often, but not doing them simultanously. And switching tasks too often costs us, it reduces our performance and often yields worse results. The tasks take longer than they are supposed to, and we do way more errors, and become more stressful as a result. It also has a negative effect on attention and memory. So we must pay attention to be single threaded, and focus on a single task at a time. We should be more like JavaScript.

If you're interested in this subject, check [**this**](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7075496/pdf/cer-04-19.pdf) article out.

**Asynchronous code:**

You've visited imdb.com and you're going to search for a movie title. You can't exactly remember the name of the movie, but you do remember it had "pool" in it. So you write pool to the search bar. A server receives your request and starts collecting all the movies that has "pool" in it, and return that data to you, to be displayed on your screen. This is a long road and if your internet connection is a little bit slow, the data might not reach you very fast.

In synchronous JS code, the code execution will wait until you receive the data that you requested from the server. This causes a problem, mainly because we don't know how much time some actions might take, they can be fast, but they can be very slow too. So sitting there and doing nothing until a piece of code is done is a very unefficient way to work. In order to work more efficiently, the browser has some tricks upon its sleeve.

**Resources:**

1. Madore KP, Wagner AD. [Multicosts of Multitasking.](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7075496/pdf/cer-04-19.pdf) Cerebrum. 2019;2019:cer-04-19. Published 2019 Apr 1.
