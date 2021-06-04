---
title: "React- Component Lifecycle Methods"
date: "2020-11-05"
tags: ["React", "Web Development"]
summary: "In this article, I briefly explain React component lifecycle methods, PureComponent concept and virtual DOM."
contributor: ""
---

#### A Component's life in the wild

React applications are built by little code blocks, that we name **components**. These components have a lifespan and important points in life, just like us humans. They are born (created), they live (show up on the screen, and do whatever they're supposed to do), they change and grow (re-render if the component state changes) and at some point, they die (get removed from the DOM, their content is removed from the screen).

**The lifecycle methods** of a component are functions that are called in specific times of a component's life. These functions are provided by React, and they are empty by default. Only if you decide to implement one of these methods, they will change something.

Think of a function that runs every time you learn something new. By default, this function does nothing. But, if your creator added a "chinggg" sound to this function, each time you learned something new, you would hear a "chinggg" in your head. It would be a lifecycle method defined just for you (to drive you crazy, probably).

There are two groups of lifecycles. One is the **creation lifecycle** (the one that runs only when an instance of a component is created), the other one is the **update lifecycle** (this runs whenever the state of the component is updated).

#### Creation Lifecycle

1. **Constructor Function:** If it is defined, it will run as soon as the component is created. A good place to do the first setup of something!
2. **getDerivedStateFromProps:** This is a very rarely used lifecycle method. If the props of your component changes and you need to update your component's state according to that prop, this hook will help you do that.
3. **render:** The only mandatory-to-define lifecycle method. A class-based component has to have a render method that returns some JSX, or your application will be angry at you and show you red and grumpy error messages. (There should be no async code in the render function. Nothing should block the rendering process.)
4. **creation lifecycles of child components:** If there are any children components, this is where they are rendered. Only once all your child components are rendered and their lifecycle methods are finished, this step will finish and the componentDidMount method of this component gets called.
5. **componentDidMount:** This method runs immediately after a component is mounted, and it only runs once in every component's lifetime. A good place to do data loading!
6. _**Update lifecycle** runs here, which you'll see in the next subtitle._
7. **componentWillUnmount:** This is called just before the component is removed, so it is a great place to do the cleanup. If you've timers or subscriptions of any kind, this is where you remove them.

#### Update Lifecycle

When the state of a component changes, it will force a react component to run through the update lifecycle, which will call the methods following, in respect:

1. **getDerivedStateFromProps:**
2. **shouldComponentUpdate:** This step is for preventing unnecessary updates. For example, updating a parent component doesn't necessarily mean that children components should be updated as well. (The road to better performance)
3. **render:** renders the updated component
4. **update child component props**
5. **getSnapshotBeforeUpdate:** This is a lifecycle method that takes the previous props and state as input and returns a snapshot object.
6. **componentDidUpdate:** Good place to do data loading!

#### The equivalent of lifecycle methods for functional components

Before React version 16.8, class-based components were 'stateful' and function-based components were 'dumb' or 'stateless'. In version 16.8, **hooks** were introduced to React, which made implementing lifecycle methods and other functionalities with function-based components possible. They're named **hooks** because these are built-in functions that help you hook a certain functionality to your function-based components. Most basic hooks are useState, useEffect, useRef, and useContext, which deserve their own article and will not be discussed in this one.

#### PureComponent

**A PureComponent** is a normal component that automatically implements shouldComponentUpdate with a complete props and state check. If nothing has changed, there is no need to re-render the component, so it will save you from unnecessary renders.

There are two disadvantages to using PureComponent. The first one is the shallow comparison, if you're using complex data structures as props and states, you can have bugs. The other disadvantage is that it skips prop updates for the children components of the PureComponent, si the whole subtree of a PureComponent has to be PureComponent's as well.

You can extend PureComponent instead of Component after importing it, and it will change the component into a PureComponent.

#### How React updates the DOM

The render method or anything that is returned with the function components does not automatically re-render the real DOM.

Accessing the DOM is slow. So you need to prevent it as much as you can.

React takes another approach, which is initially updating the virtual DOM because it is faster and more efficient. **Virtual DOM** is a simple representation of the UI (a lightweight copy of the real DOM) kept in memory. It is not a specific technology but a pattern to update the user interface. Updating the virtual DOM causes no changes on the screen.

At a given time, React keeps two copies of the DOM. One is the old virtual DOM (actually a snapshot of it), and the second one is the new, re-rendered virtual DOM. It compares the old virtual DOM to the new one, and it checks if there are any differences. React traverses the DOM tree in a breadth-first manner, (meaning working from top to bottom and left to right) and if there is a modification, the whole subtree will be rendered (unless you are using PureComponent). The real DOM will be synced with the modified subtrees of the virtual DOM using a DOM manipulation library, such as ReactDOM. Changes on the real DOM causes changes on the screen.

#### Resources

1. [React.js Documentation - Pure Components](https://reactjs.org/docs/react-api.html#reactpurecomponent)
2. [React.js Documentation - Virtual DOM](https://reactjs.org/docs/faq-internals.html#what-is-the-virtual-dom)
3. [React: The Virtual DOM](https://www.codecademy.com/articles/react-virtual-dom) by codecademy
4. [The difference between Virtual DOM and DOM](https://reactkungfu.com/2015/10/the-difference-between-virtual-dom-and-dom/) by Bartosz Krajka
5. [Awesome React](https://awesomereact.com/playlists/PL55RiY5tL51oyA8euSROLjMFZbXaV7skS/Oioo0IdoEls) by Maximilian Schwarzmüller
