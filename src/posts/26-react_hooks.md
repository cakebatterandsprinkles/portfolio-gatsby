---
title: "React- Component Lifecycle Methods"
date: "2019-04-06"
tags: ["React", "Web Development", "JavaScript"]
summary: "In this article, I talk about what React hooks are and how to use some of them."
---

React is a UI library that works with separate and reusable code blocks that render a piece of the application's UI, which are called **components**.

In a React app, there are two distinct ways of creating components. The first way is to use normal JS classes, which are called **class components**. These components can keep data inside the component as the component's "state". **State** is a JS object that contains some amount of data relevant to that specific component. As they can keep and update state, class components used to be referred to as "smart" or "stateful". Another advantage of class components was the availability of the lifecycle methods. Lifecycle methods are functions that run at certain points in a component's life.

The second type of component is called **functional components**, and these are just simple JS functions that return some JSX code. Before version 16.8, functional components could not hold data as the component's state, and lifecycle methods were not available to them. They were referred to as "dumb", "presentational" or "stateless". With version 16.8, hooks were added, and the functional components were not dumb anymore. React hooks allow you to add some functionality to the functional components, such as state manipulation and lifecycle methods, which were not available to functional components without hooks. Now both functional and class components are equally powerful, and functional components are even more favored because they are easier to read and test. And this article is about these lovely hooks.

Let's roll.

### useState()

useState hook accepts a single argument as the initial value of a property of the state, and always returns an array with two elements. Generally this array is destructured at the spot. The first one in the returned array is the state property with the given value and the second item is a function to update the state. By convention, this function is named with adding the "set" prefix to the name of the property.

Example:

```javascript
const [name, setName] = React.useState("")
```

In the example above, the state property is named "name", initialized with an empty string, and the updater function is named "setName".

Let's see another example inside a functional React component:

```javascript
import React, { useState } from "react"

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0)

  function handleClick(event) {
    setCount(count + 1)
  }

  return (
    <div>
      <p>You clicked the button {count} times</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  )
}
```

### useEffect()

useEffect hook accepts a function as an argument and runs that function after React renders (or re-renders) your component to the DOM. It also accepts a second (optional) argument, which is the data it should look out for. This second argument is called **the array of dependencies** and it can be of any length. This second argument decides when this hook will run. If there is a second argument, the function that is given as the first argument will only run when the data specified in the second argument changes. If there is no second argument, the function given as the first argument will run for every update of the component. If there is an empty array as the second argument, the function will run when the component is destroyed.

Another thing to remember is that useEffect does a shallow comparison (===) for all the items in the array of dependencies. So be careful when you are using referance type data.

This hook is very useful for causing side effects, such as interacting with local storage or making HTTP requests.

Example:

```javascript
React.useEffect(
  () => {
    // this console.log statement will run when the component is created & re-rendered:
    console.log("Hello from the useEffect hook")
    // if useEffect returns a function, it is for clean-up purposes
    // it will not run when the component is created
    // when the component is re-rendered, cleanup will run before the side effect, so this is the best time to clean timers and stuff
    return () => {
      console.log("Hello from the useEffect cleanup")
    }
  },
  // if the second argument is not specified, this hook will run in both creation and re-renders
  // if it's an empty array ([]) it will only run when the component is being destroyed (unmounted from the DOM)
  // if it's given an array of dependencies [data1, data2, fn], it will run whenever those are updated
  []
)
```

### useRef()

After a component is rendered, the DOM nodes are created. If you need to reach the DOM nodes for some reason (for example for creating event handlers, etc.), you use the useRef hook. useRef hook is a function that returns a ref object. When you add the 'ref' attribute to any JSX element, React becomes aware of it and creates a referance to that object, and then you can use that DOM node to create side effects.

Example:

```javascript
function someComponent({ children }) {
  const h1Ref = React.useRef()
  console.log(someRef.current) // This is going to log undefined, as we have not defined an initial value when we are creating the ref object.
  // current property is mutable.

  React.useEffect(() => {
    const h1Node = h1Ref.current
    console.log(h1Node)
  })

  return (
    <div>
      <h1 ref={h1Ref}>{children}</h1>
    </div>
  )
}
```

So basically, you use useRef hook whenever you want to maintain a reference to a DOM node, and you want to make changes on it without triggering a rerender.

### useReducer()

### useCallback()

### useContext()

### useLayoutEffect()

### useImperativeHandle()

### useDebugValue()

### useMemo()

**Resources:**

1.
