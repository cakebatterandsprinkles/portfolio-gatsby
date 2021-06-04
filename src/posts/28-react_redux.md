---
title: "React- Redux vs. Context API"
date: "2020-12-09"
tags: ["React", "Web Development", "JavaScript", "Redux"]
summary: "In this article, I briefly compare React-Redux and the Context API, and give examples on how to use both."
contributor: ""
---

**Redux** is a tool used for global state management and it can be used independently from React. In a React application, the data flow works one way- from parent to child components. In bigger applications, passing the state through sibling components and multiple layers might be a problem. This is why we need to have a global state where all components can access and use. You cannot use global variables, since React doesn't track the changes in variables other than the state. There are two main solutions to make our lives easier: [React-Redux](https://react-redux.js.org/) and [the Context API](https://reactjs.org/docs/context.html). We'll talk about both of them.

### React-Redux

Now I'm gonna tell you a story. Listen carefully.

In a Redux application, there is a **central store** which stores the entire application state. You can think of it as a huge JavaScript object. We also have a React application that wants to manipulate or use the current application state inside this central store. But, there's also a certain protocol to interact with this central store, so that everything works smoothly and as expected. (Think of how chaotic it would be if multiple people were trying to drive one car. Instead, we designate a single driver and request him/her to take us wherever, amirite?)

So whenever our React components want to change something in the precious central store, we kindly ask them to **dispatch an action**. An action is not much, it's just an information package with a `type` that is a string. This information package that is sent from a React component, is merely a note, which delivers a description of what to do or change, and it doesn't hold any logic. It might also have a payload that contains additional data that is relevant to the change that's being requested.

This action that's sent from the component doesn't directly reach the store, instead, it is passed to another entity that is called **the reducer**. Now, the reducer is smart, it holds a tiny book of logic. So after receiving the note, the reducer checks the `type` of the action, and finds that specific title in her little book, and runs the code specified for that type of action. The reducer is a **pure function** that receives an action and the old state as input and returns an updated state. The old state in the central store is replaced with this updated one, but in an immutable way: the reducer never just goes and changes something casually. It creates a new JavaScript object based on the older one, makes the requested changes, and puts it back there as the new one.

A **pure function** has two important characteristics. Given the same input, it will always return the same output and it produces no side effects. So the actions of the reducer are always predictable and dependable.

Any component who cares about the global application state must **subscribe** to it. The central store is responsible for letting all its subscribers know that the state has changed, so all the subscribers receive the state updates automatically.

**Summary for the unfocused and hyperactive Golden retrievers:**

- There is a single central store and the global application state is there.
- Anybody who wants to read the state must subscribe to it.
- Whatever component that wants to manipulate the state has to dispatch an action to the reducer.
- The reducer is a pure function and is the only one that can directly do anything to the application state.

Now let's take action, and create a redux store and connect it to our react application. We start by installing the redux package: `npm i —-save redux`. After that, we create our central store in the root of our react app, in the `index.js` file. We'll use the `createStore` method that we import from the `redux` package, and this method expects to have the reducer as an argument:

```jsx
// index.js
import React from "react"
import ReactDOM from "react-dom"
import { createStore } from "redux"
import App from "./App"
import reducer from "./store/reducer"

const store = createStore(reducer)

ReactDOM.render(<App />, document.getElementById("root"))

// Now we can create our reducer function in a separate store folder in a reducer.js file (like we used in import statement):

const initialState = {
  counter: 0,
  name: "Snowbean",
}

// The reducer takes an initial state as a default value, and the action as the second, and it should return the updated state:
const reducer = (state = initialState, action) => {
  if (action.type === "INCREMENT") {
    return {
      ...state,
      counter: state.counter + 1,
    }
  } else if (action.type === "DECREMENT") {
    return {
      ...state,
      counter: state.counter - 1,
    }
  } else if (action.type === "ADD_PAYLOAD") {
    return {
      ...state,
      counter: state.counter + action.payload.value,
    }
  }
  return state
}

export default reducer
```

Now to connect our redux store to our react app, we install the `react-redux` package: `npm i —-save react-redux`. After that we import the Provider component, and wrap our main <App/> component with it:

```jsx
// index.js
import React from "react"
import ReactDOM from "react-dom"
import { createStore } from "redux"
import { Provider } from "react-redux"
import App from "./App"
import reducer from "./store/reducer"

const store = createStore(reducer)

// Provider is a helper component. We inject our redux store into the React app by wrapping it with Provider component, so that we can access the store inside our react components. The Provider component expects a store property:
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
)
```

Now we have a redux store, and it is connected to our react app. It's time to create a stateful component that can both read and update the global state. For subscribing, the react-redux package provides us a method called `connect`, which returns a higher-order component that we can use to wrap our new component's export with:

```jsx
// Counter.js

import React, { Component } from "react"
import { connect } from "react-redux"

import CounterControl from "../../components/CounterControl/CounterControl"
import CounterOutput from "../../components/CounterOutput/CounterOutput"

class Counter extends Component {
  render() {
    return (
      <div>
        // The outputted this.props.ctr comes from the application state!
        <div>
          <h1>Counter:</h1>
          <span>{this.props.count}</span>
        </div>
        <button onClick={this.props.onIncrementCounter}>INCREMENT</button>
        <button onClick={this.props.onDecrementCounter}>DECREMENT</button>
        <button onClick={this.props.onIncrementCounterBy10}>
          INCREMENT BY 10
        </button>
      </div>
    )
  }
}

// Connect itself is a function, which returns a function and takes the given component as an input.
// It simply looks like this: connect(stateConfigParam, actionConfigParam)(componentName)
// stateConfigParam: defines which slice of the state the component want to subscribe to
// actionConfigParam: defines which actions you can dispatch from the component

// This returns the global state's counter as a count variable, as a prop to the current component. This component is able to reach it from `this.props.count`.
// the state parameter in this function refers to the global application state
const mapStateToProps = state => {
  return {
    count: state.counter,
  }
}

// dispatch is actually `store.dispatch`, but it can be used directly as `dispatch` as well, a the react-redux package converts it to store.dispatch behind the scenes:
const mapDispatchToProps = dispatch => {
  return {
    // These functions will be returned as props to this component and will call `store.dispatch` when they are executed:
    onIncrementCounter: () => dispatch({ type: "INCREMENT" }),
    onDecrementCounter: () => dispatch({ type: "DECREMENT" }),
    onIncrementCounterBy10: () =>
      dispatch({ type: "ADD_PAYLOAD", payload: { value: 10 } }),
  }
}

// If you want the component to just subscribe to the global state but not change it, you can only define mapStateToProps: connect(mapStateToProps)(Counter)
// If you only want to change but not read the application state, you pass null as the first argument, and define mapDispatchToProps: connect(null, mapDispatchToProps)(Counter)
// In this component, we are doing them both, so we define both arguments:
export default connect(mapStateToProps, mapDispatchToProps)(Counter)
```

In this example, as you might have noticed, the global state has another value, which is `name`. The Counter component neither is subscribed to it nor has a chance to change it. By spreading the state in the reducer before we add in the changed piece of state, we guarantee that the unchanged parts of the global state stay intact.

### The Context API

The Context API is a built-in feature of React, which helps to solve the same problem that Redux does. This time, instead of a store, we have multiple contexts that we can either consume or provide. A context is a globally available (but optionally consumed) JavaScript object/array/string/number.

First, start with creating a context folder at the root level of your project. Inside that folder, create a `counter-context.jsx` file, which will probably be just one of many context files you have in your project. To create a context, we use the `createContext method` React provides for us:

```jsx
// context/counter-context.jsx
import React from "react";
// The context is basically a value that can be passed in between components without using props.
// React.createContext() allows us to initialize our context with an optional default value that's passed to it as an argument.
// If you initialize the context component with another value, the default values will be overwritten.
const CounterContext = React.createContext({
	value: 0,
	name: "Snowbean",
  shout: () => console.log("COUNTERS ARE COOL, NO?")
 });

export default CounterContext;

// Now, CounterContext can be imported and used as a component and it should wrap all the parts of your application that need access to this context.
// After importing the CounterContext, we use a special syntax to wrap the jsx that needs access to this context.
// If you are going to provide the state, you should use the <CounterContext.Provider>.
// If you are just going to take the value inside it, use the <CounterContext.Consumer>.
// Provider takes a value property, that will override the default values set in the original counter-context.jsx file.

<CounterContext.Provider value={{
		authenticated: this.state.authenticated,
		login: this.loginHandler}}>
	{...some jsx code}
  {/* Any component that is in here (doesn't have to be an immediate child) can access the CounterContext by using <CounterContext.Consumer>*/}
</CounterContext.Provider>

// React will re-render when the state or props change. So only changing something in the context object will not cause a re-render cycle.

// Any component that needs to reach the CounterContext needs to be wrapped in <CounterContext.Consumer>
// <CounterContext.Consumer> does not take jsx code as a child. Instead it takes a function that takes context as an argument and returns jsx code.
<CounterContext.Consumer>
  {(context) => {
    {...some jsx code}
    // reach the context data by context.authenticated or context.login
  }}
</CounterContext.Consumer>
```

For the use of the Context API in functional components, check out [useContext hook](http://localhost:8000/journal/react-hooks#useContext).

### Which one to choose?

This is a question is a much-debated subject. Both of them are convenient and easy to use. As an advantage, Redux has Redux DevTools, which makes an easier development process as you're able to track your state updates. As a disadvantage, it is a 3rd party library, which makes your bundle.js chonkier. Plus, Redux is built on top of the Context API. So the answer is whichever one that you find easier to write, debug and maintain.

### Resources

1. [Redux Offical Docs](https://redux.js.org/)
2. [Context API](https://reactjs.org/docs/context.html)
3. [Academind - Redux vs React's Context API](https://academind.com/tutorials/reactjs-redux-vs-context-api/) by Maximilian Schwarzmüller
4. [How to use React Context effectively](https://kentcdodds.com/blog/how-to-use-react-context-effectively) by Kent C. Dodds
5. [You Might Not Need Redux](https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367) by Dan Abramov
6. [Blogged Answers: Redux - Not Dead Yet!](https://blog.isquaredsoftware.com/2018/03/redux-not-dead-yet/) by Mark Erikson
