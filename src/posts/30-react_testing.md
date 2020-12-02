---
title: "React- Testing"
date: "2019-04-06"
tags: ["React", "Web Development", "JavaScript"]
summary: "In this article, I briefly talk about testing React applications, including unit testing, integration testing and E2E testing."
---

#### Why do we test?

Everybody has their own reasons to write automated tests, but one major reason that almost everyone agrees on is this: The comfort and unbearable lightness of shipping code with the knowledge that the change you made did not break anything else in your app.

Let's start with the concept of testing, which has nothing to do with coding.

The story starts like this. Months ago, my husband and I decided to buy some food containers. We went to the container store and we were amazed how many different containers there were, expensive ones, cheap ones, big ones, small ones, plastic ones, glass ones, you name it, and there it was. We went home without buying anything.

Only if there was a way we could test all these containers and find the ones that were suitable for us. We knew what we wanted (dishwasher and microwave safe, transparent, does not leak fluids, and doesn't break when it casually falls from a shelf). So there were some behaviors we expected from these containers, but we couldn't compare the actual behaviors of these containers to our expected values. (I mean, you could casually drop it in the store without getting caught. If it doesn't break, you can get away with it as well. It is kind of an ethical grey zone.) As we were furiously reading comments about various containers, we stumbled upon [this](https://www.youtube.com/watch?v=WprgFWLgguM) video of America's Test Kitchen that did exactly what we wanted to do. They compared the actual behaviors of the containers with the expected ones. And this is the core idea of testing. You expect a certain behavior, and you create that condition and see if it behaves the way you're expecting it to behave.

Automated testing does the same thing for us. Whatever piece we are testing, we define certain conditions and expected behaviors, and a testing library runs these tests for us, and see if the actual behavior of that piece of code matches the thing we were expecting.

#### Who do we test for?

When you are testing frontend, you have two users who you should worry about. One is the **end user**, who is going to be the one clicking the buttons or interacting with the forms you provide. The other one is the **developer**, who is going to use your React components inside the application. You should test the conditions these two are going to face. The implementation of the components can change over time, and unless the changes effect the user experience or the API developers use, you don't need to test it. The end user and the developer don't care about the implementation details, they only care if the parts they're using are working or not.

Check out [this](https://kentcdodds.com/blog/avoid-the-test-user) article from Kent C. Dodds that explain this subject pretty neatly.

#### Types of Testing

**Unit Tests:**

These tests exist to test a single, isolated function (a unit) that takes an input and returns an output. These codeblocks have clear purposes, so they are easier to test.

**Integration tests:**

These tests test functions that are not a unit by themselves, but depend on another function to keep its promise to return something. So we can very simply say integration tests test functions that call other functions.

**E2E tests (End-to-End):**

These tests test the User Interface, a part of the full application.

Mostly, applications have a lot of unit tests, some integration tests, and a few E2E tests.

#### Testing JavaScript

There are some testing libraries and frameworks that help you do JS testing. While you're reading about them, you'll encounter some content specific terminology, which I hope to make clear in this section.

First of all, you'll most basically need 3 tools to test. One is the **test runner**, which is the program that runs your test codes and summarizes the results to you. A popular test runner you might encounter with is **Mocha**.

The second tool we need is an **assertion library**. As the action of comparing the expected value to the real outcome is also called **assertion**, these testing libraries are sometimes also called **assertion libraries**, because they provide some different kinds of comparison methods we can use. Node.js itself has a built-in **assert module**, which you can simply require and use that has a bunch of comparison methods, which you can check from [here](https://nodejs.org/api/assert.html). And if you want to check how to build a simple JS testing library from scratch, you can read [this](https://kentcdodds.com/blog/but-really-what-is-a-javascript-test) awesome article by Kent C. Dodds. Thankfully, we don't have to build one ourselves, and there are some really great ones we can use. **Chai** is a popular assertion library.

**Jest** is a tool that is both a test runner and an assertion library, and therefore it is mostly referred to as a testing framework rather than library.

The third tool we use is for E2E testing, and it is called a **headless browser**, which is the browser without its UI. Puppeteer is a popular headless browser.

#### Testing React Applications

**React Testing Library**

To test something in the UI, you may need to manipulate the DOM in some way. To ensure you're running tests in isolation to each other (and you don't have memory leaks), you need to cleanup the DOM before each test.
React Testing Library does cleanup automatically, so you don't need to clean the DOM manually.

The **render method** of the React testing library accepts a single argument that is the component you are testing, and returns you a container object with bunch of utilities. The render method creates a div, appends that div to the document.body, and renders the component that's being tested into that promptly created div by using ReactDOM.render and return the div to the developer. So at the end, we get a container object that we can query like we normally do with the elements that are inside the DOM.

If your components are listening to events and you want to test the outcomes of those specific events, **fireEvent method** (which is imported from the '@testing-library/react') allows you to fire all kinds of events that are available to the browser. Another method called **[userEvent](https://github.com/testing-library/user-event)** (which is imported from the '@testing-library/user-event') is a higher-level abstraction when compared to fireEvent method. It basically uses the lower level API that is fireEvent, and checks multiple conditions and do a set of actions accordingly. If you're interested, you can check the implementation of user-event from [here](https://github.com/testing-library/user-event/blob/master/src/click.js#L87-L103).

**screen** utility (which is imported from '@testing-library/dom') renders the destructuring of the render call unimportant, as you can reach anything in your DOM by using screen. It is recommended to use the screen utility because it will help avoiding relience on implemention details. [These](https://testing-library.com/docs/guide-which-query/) are the queries you can use with the screen utility. Avoiding implementation details in your tests will help you write a testing code that will not break with every UI change you make.

If you are having problems about finding the right queries for your elements, there is a chrome extension called [Testing-Playground](https://testing-playground.com/) which suggests a query with alternative options.

#### Test Driven Development (TDD)

Instead of adding tests at the end of the build workflow, there is also an approach called **Test Driven Development**. In TDD, you write the tests before you write any application code. All the tests will fail initially, but when you add the application code step by step, they will pass.

#### Resources:

1. Node.js - [Assert API](https://nodejs.org/api/assert.html)
2. [Jest](https://jestjs.io/)
3. [But really, what is a JavaScript test?](https://kentcdodds.com/blog/but-really-what-is-a-javascript-test) by Kent C. Dodds
4. [Avoid the Test User](https://kentcdodds.com/blog/avoid-the-test-user) by Kent C. Dodds
