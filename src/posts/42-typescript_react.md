---
title: "Using TypeScript with React"
date: "2021-04-07"
tags: ["TypeScript", "React"]
summary: "In this article, I give examples on how to use TypeScript with React (create-react-app/ CRA) and Redux."
contributor: ""
---

This is no article for the faint-hearted! If you don't know React basics, I suggest you go through them first. If you don't know how TypeScript works, munch on [this article](https://yagmurcetintas.com/journal/introduction-to-typescript). After that make sure you have Node.js and a code editor installed on your computer and you're good to go!

**Creating a React starter project with TypeScript support:**

As the browser and Node.js don't understand TypeScript, we need the TypeScript compiler to translate our code into JavaScript before running it. To create a starter project that has TypeScript support built into it you need to use the following command in your command line:

`npx create-react-app <appname> --template typescript`

This command creates a new React project with the given name. To run the project, go to its directory and write `npm start` to your command line.

### What is different?

When you open up the starter project, you can see that there are files with extensions `.ts` and `.tsx`. `.tsx` extension denotes that there is some amount of JSX code in it. If there isn't any JSX code in your file, then you should use the `.ts` extension.

There is also a `tsconfig.json` file that is automatically created for us. This file has some base compilation rules we can change later if we need to.

Other than these, not much is going to change. There are 2 major topics that we are going to talk about:

1. [Applying types to component props and state](#types-with-props-and-state)

   - How to use Props with types
   - How to use State with types

2. [Using types with events and refs](#types-with-events-and-refs)

   - Events
   - useRef and useEffect

3. [TypeScript with class components](#typescript-with-class-components)

<div id="types-with-props-and-state"></div>

### Applying types to component props and state

**꧙» How to use Props with types:**

Let's create a very simple child and a parent component to play with:

###### Note: If you want to recreate the code below, create the parent and child components in the src folder and be sure to render the ParentComponent in App.tsx file.

```jsx
// Parent.tsx:
// Parent component will simply return ChildComponent:
import { ChildComponent } from "../components/ChildComponent"

export const ParentComponent = () => {
  return (
    <div>
      <h1>Hello from the parent component!</h1>
      <ChildComponent />
    </div>
  )
}

// Child.tsx:
// Child component will render some JSX content:
export const ChildComponent = () => {
  return <p>Hello from the child component!</p>
}
```

Now let's try to pass along props from the ParentComponent to the ChildComponent. Whenever a child component is expected to receive some props from a parent component, we need to define what exactly the ChildComponent should expect.

```jsx
// Child.tsx:
// Let's define the prop types the ChildComponent expects:
interface ChildProps {
  id: number;
  label: string;
  color: string;
}
export const ChildComponent = ({ id, label, color }: ChildProps) => {
  return (
    <p style={{ color: color }}>
      Child no.{id}, {label}
    </p>
  )
}

// Parent.tsx:
// Now if we don't pass any props from the ParentComponent, we'll receive an error, so let's change the parent component as well:
import { ChildComponent } from "../components/ChildComponent"

export const ParentComponent = () => {
  return (
    <div>
      <h1>Hello from the parent component!</h1>
      <ChildComponent
        color="deeppink"
        id={1}
        label="Hello from the child component!"
      />
    </div>
  )
}
```

So far so good. But as far as our compiler knows, these are just functions that return some code. The TypeScript compiler does not understand that these are React Components that return JSX code because we haven't told it yet.

Let's redefine our ChildComponent using another syntax, this time specifying that it will be a React function component that returns some JSX code:

```jsx
// Child.tsx:
// Let's define the prop types the ChildComponent expects:
interface ChildProps {
  id: number;
  label: string;
  color: string;
}

export const ChildComponent: React.FC<ChildProps> = ({ id, label, color }) => {
  return (
    <p style={{ color: color }}>
      Child no.{id}, {label}
    </p>
  )
}
// Note: FC is short for FunctionComponent, and React.FC is the same thing as React.FunctionComponent.
```

Now that the TypeScript compiler knows that the ChildComponent is a React function component, it can have additional built-in properties like `propTypes`, `displayName`, `defaultProps`, and `contextTypes`.

If you have anything between the opening and closing tags of a React component, the code in between is given as a prop to that component, and it is called `props.children`. When you annotate the component as a FunctionalComponent, the TypeScript compiler expects an optional children property. If you don't use the FunctionalComponent syntax, the TypeScript compiler will need you to manually add an annotation for the children property to the interface as well.

```jsx
// Parent.tsx:
// Let's add children to our ChildComponent
import { ChildComponent } from "../components/ChildComponent"

export const ParentComponent = () => {
  return (
    <div>
      <h1>Hello from the parent component!</h1>
      <ChildComponent
        color="deeppink"
        id={1}
        label="Hello from the child component!"
      >
        Hello from the props.children of the ChildComponent!
      </ChildComponent>
    </div>
  )
}

// Child.tsx:
interface ChildProps {
  id: number;
  label: string;
  color: string;
}
export const ChildComponent: React.FC<ChildProps> = ({
  id,
  label,
  color,
  children,
}) => {
  return (
    <p style={{ color: color, fontWeight: "bold" }}>
      Child no.{id} | {label} | {children}
    </p>
  )
}
```

**꧙» How to use State with types:**

Let's tweak our ParentComponent so that we can use states with it. We will add a button to the parent component, and on each click, ChildComponent will change color randomly. We will also display every color we changed on the screen.

```jsx
// Parent.tsx:
import { useState } from "react";
import { ChildComponent } from "../components/ChildComponent";

export const ParentComponent: React.FC = () => {
  // Here, the TypeScript compiler infers the type itself, because we gave it a string to initialize the color variable:
  const [color, setColor] = useState("deeppink");
  // Here, the TypeScript compiler cannot infer the types in an empty array, so we have to specifically use type annotation:
  const [colorLog, setColorLog] = useState<string[]>([]);
  const colorArr: string[] = [
    "red",
    "slateblue",
    "deeppink",
    "orange",
    "purple",
    "limegreen",
    "blue",
    "brown",
  ];
  return (
    <div>
      <h1>Hello from the parent component!</h1>
      <button
        onClick={() => {
          let randomColor: string =
            colorArr[Math.floor(Math.random() * colorArr.length)];
          setColor(randomColor);
          setColorLog((prevState: string[]): string[] => [
            ...prevState,
            randomColor,
          ]);
        }}
        style={{cursor: "pointer"}}
      >
        Change Color
      </button>
      <ChildComponent
        color={color}
        id={1}
        label="Hello from the child component!"
      >
        Hello from the props.children of the ChildComponent!
      </ChildComponent>
      {colorLog.map((color: string) => (
        <div
          style={{
            backgroundColor: color,
            height: "1rem",
            width: "1rem",
            marginRight: ".25rem",
            display: "inline-block",
          }}
        ></div>
      ))}
    </div>
  );
};
```

<div id="types-with-events-and-refs"></div>

### Using types with events and refs

**꧙» Events:**

Let's create another example to demonstrate how to work with events. EventComponent1 has an inline event handler, EventComponent2 has a standalone event handler that has no type annotations and the event itself is inferred as type `any`, and EventComponent3 has a standalone event handler with the correct type annotations:

```jsx
// EventComponent1.tsx
// The TypeScript compiler knows that an HTML input might recieve an onChange prop, and might have a callback function as an argument to it. It knows that the first argument provided to that function might be an event, and assigns a proper type to that event object. As everything is inferred, we don't need to manually do the annotations ourselves:
export const EventComponent1: React.FC = () => {
  return (
    <div>
      <input onChange={e => console.log("Stop changing me!", e)} />
    </div>
  )
}

// EventComponent2.tsx
// If we make a standalone event handler, the TypeScript compiler will not apply type inference. Type inference is only applied when it is defined inline. So we need to do it ourselves.
export const EventComponent2: React.FC = () => {
  const onChangeHandler = e => {
    console.log("Stop changing me!", e)
  }

  return (
    <div>
      <input onChange={onChangeHandler} />
    </div>
  )
}

// EventComponent3.tsx
// Visual Studio Code IDE can help us out here: when we mouseover variable names, it generally shows us the expected types. If you mouseover onChange prop, you can see that it expects that an event to be of type React.ChangeEvent<HTMLInputElement>, so we can simply just copy that to our standalone event handler, therefore it will be properly typed:

export const EventComponent3: React.FC = () => {
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    console.log("Stop changing me!", e)
  }

  return (
    <div>
      <input onChange={onChangeHandler} />
    </div>
  )
}
```

There are many other events, and the same technique can be applied to all of them. If you do a `command + click` to any of the event types (React.ChangeEvent, React.DragEvent, React.MouseEvent, etc.), it takes you to the type definition file where you can see all the events possible.

Let's do drag and onMouseOver events as an extra example:

```jsx
export const DraggableComponent: React.FC = () => {
  const onDragStartHandler = (event: React.DragEvent<HTMLDivElement>): void => {
    console.log("Stop dragging me!!!", event.clientX, event.clientY)
  }
  const onMouseOverHandler = (event: React.MouseEvent<HTMLDivElement>) => {
    console.log(`Touchy touchy!!!`, event.clientX, event.clientY)
  }
  return (
    <div
      style={{
        backgroundColor: "deeppink",
        height: "5rem",
        width: "5rem",
      }}
      draggable
      onDragStart={onDragStartHandler}
      onMouseOver={onMouseOverHandler}
    ></div>
  )
}
```

**꧙» useRef and useEffect:**

Let's create another example to demonstrate how to work with refs and useEffect.

```jsx
import { useEffect, useRef, useState } from "react"

const RefComponent: React.FC = () => {
  const [input, setInput] = useState("")

  // Whenever we create a ref that is going to refer to an HTML element, we need to provide it the appropriate type according to the element we are referring to:

  const inputRef = (useRef < HTMLInputElement) | (null > null)

  // If you command + click to this <HTMLInputElement>, it will take you to a list where you can find the appropriate types for each HTML element, and choose from this list. You don't have to assign a created ref to an element right away, and if you don't assign it, it will be referring to the type null that we give as an initial value, so we need to consider it as well.

  // Let's set focus on the input element as soon as the component is rendered:
  useEffect(() => inputRef.current?.focus(), [])

  return (
    <div>
      <input
        ref={inputRef}
        onChange={e => setInput(e.target.value)}
        value={input}
      />
    </div>
  )
}

export default RefComponent
```

<div id="typescript-with-class-components"></div>

### TypeScript with class components

As an alternative to the function components, React also provides the option to create class components. All class components in React are created by extending the Component class that React provides for us.

React.Component is a generic type: `React.Component<PropType, StateType>`, so you can provide optional prop and state parameters to it. Let's create a simple counter class with increment and decrement functions that gets props and uses the state at the same time:

```jsx
// Counter.tsx
// React.Component is a generic type: React.Component<PropType, StateType>
import React from "react"

class Counter extends React.Component<{ message: string }, { count: number }> {
  state = { count: 0 }
  render() {
    return (
      <div style={{ marginTop: "1rem" }}>
        <button onClick={() => this.increment(1)}> + </button>
        <button onClick={() => this.decrement(1)}> - </button>
        <span>Count: {this.state.count}</span>
      </div>
    )
  }

  increment = (amount: number) => {
    this.setState(prevState => ({
      count: prevState.count + amount,
    }))
    console.log(`Incremented: ${this.props.message}`)
  }
  decrement = (amount: number) => {
    this.setState(prevState => ({
      count: prevState.count - amount,
    }))
    console.log(`Decremented: ${this.props.message}`)
  }
}

export default Counter

// Don't forget to render it in the App.tsx file:
import "./App.css"
import Counter from "./components/Counter"

function App() {
  return (
    <div className="App">
      <Counter message="Hello from the counter" />
    </div>
  )
}

export default App
```

Lifecycle methods are used normally.

### Resources:

1. [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/basic_type_example)
2. [Create React App - Adding TypeScript](https://create-react-app.dev/docs/adding-typescript/)
3. [TypeScript Documentation - What is a tsconfig.json](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)
