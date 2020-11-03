---
title: "React- Component Lifecycle Methods"
date: "2019-04-06"
tags: ["React", "Web Development", "JavaScript"]
summary: "In this article, I briefly explain what React component lifecycle methods are."
---

### A Component's life in the wild

React applications are built by little codeblocks, that we name components. These components have their own lifespan, and points in life, just like us humans. They are born (created), they live (show up on the screen, and do whatever they're supposed to do), they learn, change and grow (re-render if the component state changes) and at some point, they die (get removed from the DOM, their content is removed from the screen).

The lifecycle methods of a component are functions that are called in specific times of a component's life. These functions are provided by React, and they are empty by default. Only if you decide to implement one of these methods, they will change something.

Think of a function that runs everytime you learn something new. By default, the function does nothing. But, if your creator implemented a "chinggg" sound in this function, each time you learned something new, you would hear a "chinggg" in your head. It would be a lifecycle method defined just for you (to drive you crazy, probably).

There are actually two groups of lifecycles, one is the **creation lifecycle** (the one that runs when an instance of a component is created), the other one is the **update lifecycle** (this runs whenever the state of the component is updated.)

### Creation Lifecycle

1. **Constructor Function:** If it is defined, it will run as soon as the component is created.
2. **getDerivedStateFromProps:** This is a very rarely used lifecycle method. If the props of your component changes and you need to update your component's state according to that prop, this hook will help you do that.
3. **render:** The only mandatory-to-define lifecycle method. A class based component has to have a render method that returns some JSX, or your application will be angry at you and show you red and grumpy error messages. (There should be no async code in render. Nothing should block the rendering process.)
4. **creation lifecycles of child components:** If there are any children components that has to be rendered, this is where it is done. Only once all your child components are rendered and their lifecycle methods are finished, this step will finish the componentDidMount method of this component gets called.
5. **componentDidMount:** This method runs immediately after a component is mounted.
6. _Update lifecycle runs here, which you'll see in the next subtitle._
7. **componentWillUnmount:** This is called just before the component is removed, so it is a great place to do cleanup. If you've timers, or subscriptions of any kind, this is where you remove them.

### Update Lifecycle
