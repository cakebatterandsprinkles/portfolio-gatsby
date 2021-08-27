---
title: "What's new in React 18?"
date: "2021-08-27"
tags: ["React"]
summary: "In this article, we briefly talk about what's new in React 18."
contributor: "alitas"
---

As the [React 18 version alpha is ready-to-go](https://github.com/reactwg/react-18/discussions/9), and a stable beta version will probably be available in a few months, it is about time to talk about the new features that are being added. If you know nothing about React, this is not the article for you.

Before we move on to the new features of React 18, let's understand some concepts that you might not be familiar with, such as **Server Side Rendering**, **Suspense**, and **Hydration**. If you already know what these are, you can directly go and read the changes section.

1. [Concepts you need to know to understand the changes](#concepts-you-need-to-know)

   - [Server Side Rendering (SSR)](#server-side-rendering)
   - [Hydration](#hydration)
   - [Suspense](#suspense)

2. [Changes in React 18](#changes-in-react-18)

   - [The New Root API vs. the Legacy Root API](#the-new-root-api-vs-the-legacy-root-api)
   - [Out-of-the-box improvements](#out-of-the-box-improvements)
     - [Automatic batching](#automatic-batching)
     - [SSR Support for Suspense](#ssr-support-for-suspense)
     - [Allow components to render undefined](#allow-components-to-render-undefined)
     - [Uncaptured Suspense](#uncaptured-suspense)
     - [null or undefined Suspense fallback](#null-or-undefined-suspense-fallback)
   - [Concurrent Features](#concurrent-features)
     - [startTransition](#startTransition)
     - [useDeferredValue](#useDeferredValue)
     - [\<SuspenseList\>](#<SuspenseList>)
     - [Streaming HTML with selective hydration](#streaming-html-with-selective-hydration)

3. [Final words](#final-words)
4. [Resources](#resources)

<div id="concepts-you-need-to-know"></div>

### Concepts you need to know to understand the changes

<div id="server-side-rendering"></div>

#### Server Side Rendering

Server-side rendering is all about improving the user experience. It doesn't improve the performance of the application.

In a regular React app, when a page is requested by the client, the server that's hosting the application sends several files as a response. Two of them are important in this context: the first one is the almost empty HTML document, and the other one is the bundle.js file that includes everything inside that app. The app is rendered inside a root div of the almost empty HTML document, depending on the route requested. This is called **client-side rendering** because client-side resources are used to dynamically render the webpage. So here, the browser will just render the blank HTML document, then parse the bundle.js, re-render the app to show the content. The user initially sees a blank page, and the initial loading time of the webpage depends on the internet speed of the client and the size of the bundle.js file that is downloaded and parsed.

**Server-side rendering (SSR)** allows you to dynamically generate the HTML document on the server-side. So when the page is requested by the client, the server fetches the data needed by the webpage, renders an initial HTML document, and sends it as a response with the bundle.js file that contains the logic of the entire application. The browser renders the HTML document that was previously rendered in the server, so the user doesn't see an empty page. The application logic, however, is added to the application after the bundle.js is parsed by the browser.

<div id="hydration"></div>

#### Hydration

If your application is content-heavy or you expect your users to have slow internet speeds, using SSR makes sense because it results in a better user experience. While the `bundle.js` is being downloaded the user can check out the website even though it is not fully functional yet. And when the application logic and React are downloaded, the event handlers are attached to the existing HTML nodes. The process of rendering React components and adding event handlers to the server-side rendered HTML document is referred to as **hydration**. Think of it like the [compressed expandable towels](https://youtu.be/HnyBypl2T6I?t=21) or [peat pellets](https://youtu.be/pvC_O6Qyg3Y?t=46). These two products are also not functional before they are hydrated.

<div id="suspense"></div>

#### Suspense

Although it looks like a neat magic trick, there are a couple of bottlenecks where you can get stuck when using SSR. For example, for the server to dynamically render the HTML page, it has to finish fetching all the application data. This means if you're fetching data from another server that is slower, you'll have to wait until that process is finished. Also, you have to load **all** the application logic before you start hydrating. Also, everything has to be hydrated before the user can start interacting with it. As this is very inefficient, React Working Group introduced the **[Suspense Component](https://reactjs.org/docs/concurrent-mode-suspense.html)** in 2018, which was only available for the lazy-loaded components to allow the components to wait for the results of the asynchronous operations while providing a fallback UI. As it is changing behaviors in React 18, we will talk about this in a separate [another subtitle](https://yagmurcetintas.com/journal/whats-new-in-react-18/#streaming-ssr-with-selective-hydration) below, in the changes section.

<div id="changes-in-react-18"></div>

### Changes in React 18

<div id="the-new-root-api-vs-the-legacy-root-api"></div>

#### The New Root API vs. the Legacy Root API

React apps are created by attaching the root element (the uppermost component) of the application to the DOM. If you're using a framework that gives you a starter project, you can find the link between the `index.html` and `App.jsx` in the `index.js` document, which will look something like this:

```jsx
import * as ReactDOM from "react-dom"
import App from "App"

// The <App/> component is directly attached to a DOM element with the id of 'app':
ReactDOM.render(<App tab="home" />, document.getElementById("app"))
```

The New Root API uses `ReactDOM.createRoot()`, creates a new root element, and React app is rendered in it:

```jsx
import * as ReactDOM from "react-dom"
import App from "App"

// Create a root by using ReactDOM.createRoot():
const root = ReactDOM.createRoot(document.getElementById("app"))

// Render the main <App/> element to the root:
root.render(<App tab="home" />)

// If there's an update, there's no need to pass the initial DOM node again:
root.render(<App tab="profile" />)
```

But why does it matter? Most of its benefits are under the hood. To be able to use the out-of-the-box improvements mentioned below, you need to switch the Legacy Root API to New Root API in your projects.

<div id="out-of-the-box-improvements"></div>

#### Out-of-the-box improvements

These are the improvements that will happen passively (under the hood) once you upgrade to React18 and start using the New Root API. As we mentioned above, if you keep using the Legacy API, you won't be getting these benefits, so check your `index.js` file and update it if you need to. But even if you don't, your app will not break, so all is well.

<div id="automatic-batching"></div>

#### ► Automatic batching

Batching is something that React does under the hood, and many programmers are unaware of it. When you pay attention to your developer console, you'll realize that if you have state updates that run subsequently in the same event handler, even though you have two state updates, React only re-renders the UI once. This means React **batches** (or groups) them together, so instead of doing one state update and re-rendering the UI and doing the following state update and re-rendering the UI again, it does both of the state updates and re-renders the UI just once.

Batching is a great mechanism that protects us from unnecessary UI re-renders, but React 17 only did it in event handlers. The usage of [promise chains](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise), [async code](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous), or [native event handlers](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener) broke this behavior. With React 18, batching is done automatically in native event handlers, promises, and async code.

```jsx
function handleClick() {
  // React 17: Re-rendering happens after both of the states are updated. This is called batching.
  // This is also the default behavior of React 18.
  setIsBirthday(b => !b)
  setAge(a => a + 1)
}

// For the following code blocks, React 18 does automatic batching, but React 17 doesn't.
// 1. Promises:
function handleClick() {
  fetchSomething().then(() => {
    setIsBirthday(b => !b)
    setAge(a => a + 1)
  })
}

// 2. Async code:
setInterval(() => {
  setIsBirthday(b => !b)
  setAge(a => a + 1)
}, 5000)

// 3. Native event handlers:
element.addEventListener("click", () => {
  setIsBirthday(b => !b)
  setAge(a => a + 1)
})
```

If you need to, there is a way to opt-out of automatic batching via using `ReactDOM.flushSync()`, but frequent usage of it is not recommended by the React Working Group (RWG).

You can find the automatic batching explanation of React Working Group [here](https://github.com/reactwg/react-18/discussions/21).

<div id="allow-components-to-render-undefined"></div>

#### ► Allow components to render undefined

Up until React 18, if a functional component returned undefined, or did not return anything at all, or if a class component's render method returned undefined or nothing, an error was thrown, warning the developer to either return a JSX element or null. This was mostly to catch mistakes where a developer forgets to return the element they create in a component. However, the React team decided that this kind of warning mechanism belongs in linters and not in the library itself. So, in React 18, you can safely return undefined to render nothing in your components.

<div id="ssr-support-for-suspense"></div>

#### ► SSR Support for Suspense

Previous versions of React did not support Suspense on the server. The new `pipeToNodeWritable` API provides full built-in Suspense support and streaming of HTML. Check out [this thread](https://github.com/reactwg/react-18/discussions/22) for further explanations.

<div id="uncaptured-suspense"></div>

#### ► Uncaptured Suspense

In React 17, if a component tried to suspend, such as a component loaded by React.lazy, it would find the closest Suspense boundary above it and render the fallback until it's loaded. However, if there are no Suspense boundaries above it, it throws an error. With React 18, if no Suspense boundaries are found, the entire application is suspended, meaning nothing will be rendered until the Suspense is resolved.

<div id="null-or-undefined-suspense-fallback"></div>

#### ► null or undefined Suspense Fallback

In previous versions, if a Suspense boundary had no fallback prop, or if the fallback was null or undefined, it was ignored, and the next boundary was used. If there were no more boundaries, an error was thrown. In React 18, even if the fallback is null or undefined, the boundary is respected and nothing is rendered until the Suspense is resolved.

<div id="concurrent-features"></div>

### Concurrent Features

In the programming context, **[concurrency](https://web.mit.edu/6.005/www/fa14/classes/17-concurrency/)** is the ability to execute more than one task simultaneously. As React runs on a single thread, it has to decide what to do in which order. For this, React uses a **dispatcher**, which is a registry of callbacks (like the call stack in Node.js). In the previous React versions, this API was completely out of reach for the developer. React 18 adds some opt-in concurrent features which make it possible to render contents more intelligently and exposes some pieces of this API. These newly added concurrent features enable cooperative multitasking, priority-based rendering, scheduling, and allowing interruptions, therefore they improve user experience a lot.

React also introduced a `StrictMode` in version 16.3, which comes disabled by default. It was created to warn the developer about concurrency incompatible code which can introduce bugs to the application if the concurrent features are used. But apparently enabling the StrictMode throughout the whole app drowned the developers in a sea of warnings, so instead of enabling it for the whole application, React team decided to build concurrent features instead of a concurrent mode and allow enabling the StrictMode in smaller parts of the app you use the concurrency in.

So although the `createRoot` API changes the whole app to what they call a **concurrent mode**, rendering of the components is done as always, unless you are using concurrent features that we explain below. If you use concurrent features in a component, that component and its whole subtree will render concurrently and the `StrictMode` will be enabled for it.

<div id="startTransition"></div>

#### ► startTransition

Previously, React had one very important rule: nothing could interfere with renders. Once the component state was changed and the re-render was triggered, there was no way to stop it, and until the component was re-rendered, the page became unresponsive. With the new update, each state update is classified as one of these two categories: it is either an **urgent update** or a **transition update** (transition, for short). Urgent updates are actions which the user intuitively expects to respond in a heartbeat, like a mouse click or a keypress. The transition updates are actions that a little delay is acceptable and at many times expected, like a search query. The `startTransition` API marks the setState calls inside it as **transitions** , meaning they are **interruptable**. Transition updates also run synchronously, but the UI is not blocked when they are running.

```javascript
import { startTransition } from "react"

// Urgent update that shows whatever is typed by the user:
setInputValue(input)

// Transition updates are marked with startTransition:
startTransition(() => {
  // A non-urgent, interruptable update of the search query:
  setSearchQuery(input)
})
```

The example above is from the [reactwg GitHub discussion page](https://github.com/reactwg/react-18/discussions/41). If the `setSearchQuery(input)` wasn't marked as a transition update, the UI would be locked after each input change. Now that it is marked as non-urgent, the user can search for something and change opinions and decide to navigate to another page before the UI is updated according to the input change, and doesn't have to wait for a UI update that is not of interest.

You can even track the pending state of a transition update and show the user a loading UI if you want to, using the `useTransition` hook:

```javascript
import { useTransition } from "react"
const [isPending, startTransition] = useTransition()

// For example, you can show a spinner when it's pending:
{
  isPending ? <Spinner /> : null
}
```

Check out [this](https://github.com/reactwg/react-18/discussions/46#discussioncomment-846786) amazing explanation of concurrency and `startTransition` feature and the [real world example of startTransition](https://github.com/reactwg/react-18/discussions/65).

<div id="useDeferredValue"></div>

#### ► useDeferredValue

The `useDeferredValue` hook helps you defer updating some part of the UI by a specified time period while keeping the page responsive. You can also give it an optional timeout. React will try to update the deferred value as soon as it can. If it fails to do so within the given timeout period, it will then force the update, blocking the UI in the process. In other words, the deferred value is updated via a **transition update** rather than an **urgent update**, keeping your UI responsive in the process.

```javascript
import { useDeferredValue } from "react"

const deferredValue = useDeferredValue(value, {
  timeoutMs: 5000,
})
```

Check out the [React Docs](https://reactjs.org/docs/concurrent-mode-patterns.html#deferring-a-value) for further information and examples.

<div id="<SuspenseList>"></div>

#### ► \<SuspenseList\>

SuspenseList lets you coordinate the appearing order of the content of Suspense nodes of the subtree it wraps, even if the data arrives in a different order. Normally, if you have multiple sibling Suspense boundaries, they will resolve whenever they can. However, you might want to load your components in a particular order, no matter in which order they resolve themselves.

```javascript
import { Suspense, SuspenseList } from "react"
;<SuspenseList revealOrder="forwards">
  <Suspense fallback="Loading first item...">
    <FirstItem />
  </Suspense>
  <Suspense fallback="Loading second item...">
    <SecondItem />
  </Suspense>
  <Suspense fallback="Loading third item...">
    <ThirdItem />
  </Suspense>
</SuspenseList>
```

In the example above, even if the third item is loaded first, it will render `Loading third item...`, until the first item is loaded. When the first item is loaded, the first item is rendered, along with the fallback for the second and third. Only when the second item is loaded all three can be rendered.

The `revealOrder` prop can take the values `forwards`, `backwards`, and `together`. The `forwards` and `backwards` props allow Suspense boundaries inside to resolve in the forwards and backwards order. `together` on the other hand waits for all boundaries to resolve before rendering all of them.

You can also give the SuspenseList a `tail` prop. The `tail` prop can take `collapsed` and `hidden` values. By default, SuspenseList renders all fallbacks. However, if you want to render no fallbacks, you can use the `tail="hidden"` prop, and if you only want to render at most one fallback, you can use `tail="collapsed"`. This way, you can create many fallbacks without worrying about cluttering your loading area.

Check out the [React Docs](https://reactjs.org/docs/concurrent-mode-patterns.html#suspenselist) for further information and examples.

<div id="streaming-html-with-selective-hydration"></div>

#### ► Streaming HTML with selective hydration

As we have talked before in the concepts section, server-side rendering follows these steps:

**Step 1: (Server)** Fetch all application data

**Step 2: (Server)** Render HTML

**Step 3: (Client)** Load HTML and application logic

**Step 4: (Client)** Hydrate everything

The next step cannot be started unless the current step is not finished, and after all 4 steps are done, the application becomes interactive. This means our application can have at least 4 bottlenecks that slow our initial loading. React 18 provides two major features that help us fight potential bottlenecks.

**Streaming HTML before all of the data is fetched**

If you wrap parts of the page the Suspense component, it doesn't wait for that part to be ready and moves forward after the other components are done, while showing a spinner for the part that is not yet ready and wrapped with the Suspense component. When the data is ready for that part, React streams the additional HTML (and a tiny script) to the client, and renders the content exactly where it's supposed to be. With this, you don't have to wait until every piece of data is fetched, so the possible bottlenecks in Step 1 can be solved by using this feature. (To use this, your data fetching library has to implement it as well. React has [Server Components](https://reactjs.org/blog/2020/12/21/data-fetching-with-react-server-components.html) that integrate with Suspense out-of-the-box.)

Step 3 (the loading of the application logic) can take longer than you think if your `bundle.js` file is big. To avoid a bottleneck here, you can do **code-splitting** and **lazy-loading**. This means loading the application logic in several pieces according to the paths requested. This is great for various reasons, it is faster because the file sizes are smaller and you don't transfer unnecessary pieces as the user might not visit all of the pages the application offers.

**Hydrating before all the code has loaded**

With React 18, by wrapping a component in `<Suspense>`, you simply tell the client-side to not block the other parts of the application waiting for this component to load. So the app starts hydrating even if some HTML is missing.

**Interacting with components before all of them are hydrated**

With React 18, the hydration of the components that are wrapped in `<Suspense>` does not block the interaction with the components that are already hydrated. And if the HTML of several of the components wrapped in `<Suspense>` has been loaded, it begins to hydrate starting with the first one that is found in the component tree. But if the user interacts with one of the others during another one's hydration (like clicking on it impatiently), it will stop the hydration of the other component and prioritize the hydration of the component that the user tried to interact with. It also records the event and dispatches it again after the component hydrates. This is called **selective hydration**.

<div id="final-words"></div>

### Final words:

We just wanted to say how much we appreciate the ever-growing environment of React. React is an amazing tool that gets better each year. The React Working group is nothing short of awesome, and thank you for all of this work. You people are incredible.

<div id="resources"></div>

### Resources:

1. [Introducing React 18](https://github.com/reactwg/react-18/discussions/4) by [rickhanlonii](https://github.com/rickhanlonii)
2. [Replacing render with createRoot](https://github.com/reactwg/react-18/discussions/5) by [rickhanlonii](https://github.com/rickhanlonii)
3. [Automatic batching for fewer renders in React 18](https://github.com/reactwg/react-18/discussions/21) by [gaearon](https://github.com/gaearon)
4. [Introducing Zero-Bundle-Size React Server Components](https://reactjs.org/blog/2020/12/21/data-fetching-with-react-server-components.html) by Dan Abramov, Lauren Tan, Joseph Savona, and Sebastian Markbåge
5. [New Suspense SSR Architecture in React 18](https://github.com/reactwg/react-18/discussions/37) by [gaearon](https://github.com/gaearon)
6. [What happened to concurrent "mode"?](https://github.com/reactwg/react-18/discussions/64) by [rickhanlonii](https://github.com/rickhanlonii)
7. [New feature: startTransition](https://github.com/reactwg/react-18/discussions/41) by [rickhanlonii](https://github.com/rickhanlonii)
8. [Real world example: adding startTransition for slow renders](https://github.com/reactwg/react-18/discussions/65) by [rickhanlonii](https://github.com/rickhanlonii)
9. [Concurrency](https://web.mit.edu/6.005/www/fa14/classes/17-concurrency/) by [web.mit.edu](https://web.mit.edu/)
