---
title: "React- Hooks"
date: "2019-04-06"
tags: ["React", "Web Development", "JavaScript"]
summary: "In this article, I talk about what React hooks are and how to use some of them."
---

React is a UI library that works with separate and reusable code blocks that render a piece of the application's UI, which are called **components**.

In a React app, there are two distinct ways of creating components. The first way is to use normal JS classes, which are called **class components**. These components can keep data inside the component as the component's "state". **State** is a JS object that contains some amount of data relevant to that specific component. As they can keep and update state, class components used to be referred to as "smart" or "stateful". Another advantage of class components was the availability of the lifecycle methods. Lifecycle methods are functions that run at certain points in a component's life.

The second type of component is called **functional components**, and these are just simple JS functions that return some JSX code. Before version 16.8, functional components could not hold data as the component's state, and lifecycle methods were not available to them. They were referred to as "dumb", "presentational" or "stateless". With version 16.8, hooks were added, and the functional components were not dumb anymore. React hooks allow you to add some functionality to the functional components, such as state manipulation and lifecycle methods, which were not available to functional components without hooks. Now both functional and class components are equally powerful, and functional components are even more favored because they are easier to read and test. And this article is about these lovely hooks.

Let's roll.

#### useState()

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

#### useEffect()

useEffect hook accepts a function as an argument and runs that function after React renders (or re-renders) your component to the DOM. It also accepts a second (optional) argument, which is the data it should look out for. This second argument is called **the array of dependencies** and it can be of any length. This second argument decides when this hook will run. The point of this list is to keep your component's state fresh and in sync with the side effect you are causing. If there is a second argument, the function that is given as the first argument will only run when the data specified in the second argument changes. If there is no second argument, the function given as the first argument will run for every update of the component. If there is an empty array as the second argument, the function will run when the component is destroyed.

Another thing to remember is that useEffect does a shallow comparison (===) for all the items in the array of dependencies. So be careful when you are using referance type data.

This hook is very useful for causing side effects, such as interacting with local storage or making HTTP requests (interacting with a backend, making async requests).

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

#### useRef()

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

So basically, you use useRef hook whenever you want to maintain a reference to a DOM node, and you want to make changes on it without triggering a re-render.

#### useReducer()

useReducer hook takes two arguments, the first one is a reducer function, and the second one is the initial value of the state. Let's try to make a simple counter component that will increment its value when clicked.

Example:

```javascript
import React from "react"

// Reducer function is the function that will actually affect the state.
// When it is called, it accepts an "action", which will basically define the new piece of the state, as an object or a function. In this example the action will be an object, and we refer to it as the "newState".
// The reducer returns the updated version of the state.
function countReducer(currentState, newState) {
  return { ...currentState, ...newState }
}

function Counter({ initialValue = 0, incrementBy = 1 }) {
  const [state, setState] = React.useReducer(countReducer, {
    count: initialValue,
  })

  const { count } = state

  const incrementCounter = () => setState({ count: count + incrementBy })
  return <button onClick={incrementCounter}>{count}</button>
}
function App() {
  return <Counter />
}

export default App
```

setState can accept a function or an object as an argument. Either way, it has to define a new state in some way and it will be passed onto the reducer function. And the reducer will act the same way, by returning the new version of the state.

```javascript
import * as React from "react"

// Reducer function will check if the action (which defines the newState) is an object or a function.
const countReducer = (currentState, newState) => ({
  ...currentState,
  ...(typeof newState === "function" ? newState(currentState) : newState),
})

function Counter({ initialValue = 0, incrementBy = 1 }) {
  const [state, setState] = React.useReducer(countReducer, {
    count: initialValue,
  })
  const { count } = state
  const incrementCounter = () =>
    setState(currentState => ({ count: currentState.count + incrementBy }))
  return <button onClick={incrementCounter}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
```

You can also use it as a regular action and dispatch (like redux). The incrementCounter function will dispatch an action type (which is just a string), and the reducer function will do something according to the action that is dispatched. Just to spice it up, we'll add decrement as a dispatch as well:

```javascript
import * as React from "react"

function countReducer(currentState, action) {
  switch (action.type) {
    case "increment": {
      return { count: currentState.count + action.incrementBy }
    }
    case "decrement": {
      return { count: currentState.count - action.decrementBy }
    }
    default: {
      throw new Error(`Unknown action type: ${action.type}`)
    }
  }
}

function Counter({ initialValue = 0, incrementBy = 1, decrementBy = 1 }) {
  const [state, dispatch] = React.useReducer(countReducer, {
    count: initialValue,
  })
  const { count } = state
  const incrementCounter = () => dispatch({ type: "increment", incrementBy })
  const decrementCounter = () => dispatch({ type: "decrement", decrementBy })
  return (
    <button onClick={incrementCounter} onMouseEnter={decrementCounter}>
      {count}
    </button>
  )
}

function App() {
  return <Counter initialValue={50} />
}

export default App
```

So why use useReducer instead of useState hook? Basically they are useful in different conditions. Most often you will use useState hook, as most of the time you will be managing state that has elements independent from each other. If you have multiple elements of state that change together in some condition, and if one of them depends on the other, useReducer can be helpful. Check out [this awesome article](https://kentcdodds.com/blog/should-i-usestate-or-usereducer) by Kent C. Dodds which helped me understand this subject better.

#### useContext()

Sometimes passing the state between components can be a pain in the grass. You can always lift a state (make the data a part of the parent component's state, as the data can only be passed top to down or parent to child) but passing the state more than a single level is very cumbersome and leads to redundant code, and that's where the concept of a shared application state comes in. This 'shared application state' is called the **context**, and all components can reach it without the need of explicitly passing it along as a prop.

Let's make a small app with counter and counterDisplay components, and even though it is an overkill, let's create a context for this app.

```javascript
import React from "react"
// You create a context object by using createContext API.
// You can provide a default value by passing it as an argument.
const UserContext = React.CreateContext()

// Data passing works via subscribing and consuming. The components that want to use the context data (which are called consumers) has to subscribe to it.
// The branch of the component tree that is going to need that context should be wrapped with a provider component.
// Every created context object comes with a provider component, which will help the consumer component to subscribe to the changes of the given context.
// When a consumer is subscribed to a context, it will read the value from the closest provider component above. So the provider components provide the value for the context. If there are no given values to a provider component, it will grab the default value given to the createContext function.
// To get the value of a given context, you need to use useContext hook and provide the context variable to it (import it if you created it in another file).

// We can make a custom consumer hook to throw error if there is no context. If there is a context, it will return the context as it is.
function useCountContext() {
  const context = React.useContext(CountContext)
  if (!context) {
    throw new Error(
      "useCountContext must be rendered within the CountContext.Provider"
    )
  }
  return context
}

function CountDisplay() {
  const { count } = useCountContext()
  return <div>{`You have pressed the button ${count} times.`}</div>
}

function Counter() {
  const { setCount } = useCountContext()
  return (
    <button onClick={() => setCount(prevCount => prevCount + 1)}>
      Don't press this button.
    </button>
  )
}

function App() {
  // The context object will check the value of the closest context provider value. As the CountDisplay component is only used in display, we only passed the state to it.
  // As the Counter component is responsible for the increase in count, we passed setCount function to it, which will update the App component's state.
  const [count, setCount] = React.useState(0)

  return (
    <div>
      <CountContext.Provider value={{ count, setCount }}>
        <Counter />
        <CountDisplay />
      </CountContext.Provider>
    </div>
  )
}

export default App
```

Most of the time apps are more complicated than this and they have a folder structure, and you may need to keep your context files in a separate folder. It's cool, you'll just import and use them, and all will be fine.

#### useLayoutEffect()

#### useImperativeHandle()

#### useDebugValue()

### Memoization

It does feel like there is an 'r' missing in this word, doesn't it? But I have not misspelled it. It is really written this way.

Memoization is a form of caching. What is caching? Caching is storing some data for future use. You may not be aware of it, but many websites you visit do cache data in your browser. Memoization is storing the data as an object (as key-value pairs) so if you request some data with the same parameters, it will directly return the previous result. If you request data with different parameters, it will add it to the object as a key-value pair, and return the result. Memoization is especially important if you are doing expensive calculations, and doing them repeatedly will decrease the performance of your app. When using React, memoization can help you prevent unnecessary re-renders and re-calling expensive functions.

There are two hooks that helps us do memoization in React. One is useCallback, and the other one is useMemo. Let's check them out.

#### useCallback()

To understand useCallback, we need to remember how useEffect worked. useEffect hook accepts two arguments, one is a callback function and the second one is an array of dependencies. The array of dependencies is optional, and if useEffect is not provided with one, React will just call the callback in every render.

If another function is called inside the useEffect callback, you need to include the function in the dependency list as well, as the function itself might change over time.

```javascript
import * as React from "react"

function ColorMode({ mode }) {
  const updateLocalStorage = () => window.localStorage.setItem("mode", mode)
  React.useEffect(() => {
    updateLocalStorage()
  }, [updateLocalStorage])
  return <div>`Color mode: ${window.localStorage.getItem("mode")}`</div>
}

export default ColorMode
```

Now, you have a new problem. As the function is defined inside the component body, with every render of the component, another replica of this function will be created again. Although they look very, very alike, it is a replica, so it is not the same function as the previous one. This means the useEffect callback will be called in every render, which defies the point of the dependency list array we provide, and results with function call we do not need.

_useCallback hook solves this particular problem._

We pass useCallback a function as a first argument, and a dependency array of its own. If the dependency array doesn't change, it will return the previous function to us, this way our useEffect callback will not run. If dependencies of useCallback changes, it will create the new function and pass it back, and our useEffect callback will run.

Example:

```javascript
import * as React from "react"

function ColorMode({ mode }) {
  const updateLocalStorage = React.useCallback(
    () => window.localStorage.setItem("mode", mode),
    [mode]
  )
  React.useEffect(() => {
    updateLocalStorage()
  }, [updateLocalStorage])
  return <div>`Color mode: ${window.localStorage.getItem("mode")}`</div>
}

export default ColorMode
```

Although useCallback has improved our performance by preventing unnecessary re-renders in this tiny example, it doesn't mean that you should use it everywhere. As you probably imagined, useCallback keeps a reference to the old version of the function, so it won't be garbage collected.

#### useMemo()

### ErrorBoundary Component

There are no hooks for ErrorBoundary (so far), so it has to be written as a class component. ErrorBoundary is a higher order component that wraps up another component with the goal of handling any errors that component (and its children) will throw in all lifecycle events (including render), and displays a fallback UI for them.

There is an npm package called **[react-error-boundary](https://www.npmjs.com/package/react-error-boundary)** which implements a ErrorBoundary component you can import and use anywhere in your app, so you kinda never have to write this yourself. But if you really want to, here ya go: [React Error Boundaries documentation](https://reactjs.org/docs/error-boundaries.html)

**Resources:**

1.

2. [Should I useState or useReducer?](https://kentcdodds.com/blog/should-i-usestate-or-usereducer)
3. [When to useMemo and useCallback](https://kentcdodds.com/blog/usememo-and-usecallback)
