---
title: "React.js- Basics"
date: "2019-04-06"
tags: ["Web Development", "JavaScript", "React"]
summary: "In this article, I very briefly explain what a React component is, how to make one and how React renders data."
---

### What is React.js?

React.js is an open source JS library developed by Facebook for developing User Interfaces (UI's for short). It is one of the most in-demand frontend libraries of today.

React breaks the UI elements into reusable components. As the code is being reused, it means the overall code is easier to read, maintain and debug.

You can build both Single Page (SPA) and Multi Page Applications (MPA) with React.js, but the most common way of doing things with React is the SPA way. In a SPA, everything is rendered at the client side, so everything happens instantly. Entire page is wrapped with a root component which is under React's control, and every other component is rendered inside this component. When a page is changed, the components or the data inside the components change, but the root component doesn't. You never have to go back to the server and reload the page. In SPA's you typically have one ReactDOM.render() call, because you actually only render the root app component, which is mounted to the DOM and host other React components.

**Bonus: Difference between a framework and a library**

Frameworks are larger and they provide structure. They are what we call **opinionated**, which basically means you have to follow a certain pattern and obey a lot of predefined rules when you are using a framework, so it means you have less freedom to choose how you want to build your application.

Libraries on the other hand, are smaller and provide less structure, which means you have more freedom. They are rarely used by their own, generally an application might use several libraries. For example, React is a library, but many applications use other npm packages to help with routing and other things.
