---
title: "React- Routing"
date: "06-06-2020"
tags: ["React", "Web Development"]
summary: "In this article, I briefly talk about routing in React apps."
---

What is routing in the web development context?

**Routing** is about being able to show different pages to a user.

React in it's core is just a UI component creating library. Routing is not built into the core of React. That's why we need to use another package (a routing package) to get it done. By adding routing feature, React will turn into something much like a framework. Most React apps make use of **[react-router-dom](https://reactrouter.com/web/guides/quick-start)** npm package to create routing.

#### react-router-dom

The router package has multiple tasks:

1. **Parsing the URL:** It has to parse the URL and understand which path the user wants to navigate to. Developers decide which paths to support.
2. **Read configuration data:** Router package reads the configuration data that's provided by the developer, so that it knows which paths are supported and what should happen when the user visits one of these paths.
3. **Render:** In multi-page applications all paths are rendered in a single page, and router package handles the rendering of the appropriate jsx code depending on the path the user chose.

---

**NOTE:**

For the following examples on how to use the react-router-dom package, I assume you know how to create a react application. If you need help with that or you're new to React, you can check [this](https://create-react-app.dev/docs/getting-started/) out before proceeding.

---

#### BrowserRouter, Route, Switch

After installing the react-router-dom package with `npm i --save react-router-dom`, you need to import the BrowserRouter component the package provides at the root component of your app.

Let's say we're making a very simple app with four supported routes:

```jsx
// If you're using it in index.js, you can simply wrap the App component:

import React from 'react';
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
      <App />
  </BrowserRouter>
  , document.getElementById('root')
);

// If you're using it in App.js file, it will look like this:
import React, { Component } from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import About from "./containers/About"
import SignUpForm from "./components/SignUpForm"
import LoginForm from "./components/LoginForm"

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        {/*The BrowserRouter component can only have one child component, so all your routes should be wrapped in something*/}
        <div className="app">
          {/*Switch uses the first route that matches the given path.*/}
          <Switch>
            {/* Route needs a path property that defines the path for which this route should become active. Then, you need to define what will be rendered if this route is active, which is the component property. The default behaviour is checking if the current path starts with any of the given ones. exact is a boolean prop that overrides this behaviour and only if the current route and given route matches exactly, it makes that route active.*/}
            <Route path="/" exact component={About}>
            <Route path="/signup" component={SignUpForm}>
            <Route path="/login" component={LoginForm}>
            {/*Directly rendering jsx in a route is also possible.*/}
            <Route path="/hello-world" render={() => <h1>Hello World</h1>}>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
```

Routing does not always happen in a single place in an app. Sometimes, we might want to render different components in different parts of the app, depending on the current path. All of the routing features that react-router-dom are available for every component that is wrapped inside the BrowserRouter component.

The main job of the BrowserRouter component is to create a **history** object, that keeps a track of the r

#### Link, NavLink, Redirect

During the routing, React shouldn't reload the page if it doesn't really need to, but it should re-render some components in the runtime.

For internal links (like navbar links) you don't need to reload the page. Therefore you don't use normal anchor tags, instead you use a feature react-router-dom provides for you, which is the **Link** component. Link component creates the anchor tag for us, and prevent the default behavior, which is reloading the page. (See the blog.js code for more how it's used.)

Another disadvantage of reloading the page is that you lose your state while doing that.

Let's create a simple navbar for our app that is going to be rendered in every route:

```jsx
import React, { Component } from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import About from "./containers/About"
import SignUpForm from "./components/SignUpForm"
import LoginForm from "./components/LoginForm"

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <nav>
              <ul>
                  {/* Link wants a to prop */}
                  <li><Link to="/">Home</Link></li>
                  {/* to prop can also receive a javascript object as dynamic content */}
                  <li><Link to={{
                      pathname: '/contact',
                      {/* hash fragment is used to jump to a certain part of the page or smoothly scroll there */}
                      hash: '#submit',
                      // search allows us to add query parameters
                      search: '?quick-submit=true'
                  }}>New Post</Link></li>
              </ul>
          </nav>
          <Switch>
            <Route path="/" exact component={About}>
            <Route path="/signup" component={SignUpForm}>
            <Route path="/login" component={LoginForm}>
            {/*Directly rendering jsx in a route is also possible.*/}
            <Route path="/hello-world" render={() => <h1>Hello World</h1>}>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}
```

#### withRouter

#### Navigating Programmatically

#### Absolute vs. Relative Path

#### Summary

- **BroserRouter** keeps the UI updated according to the URL
- **Route** renders a UI component depending on the path
- **Link** renders a navigation link without reloading the page
- **NavLink**
- **Redirect**

#### Resources:

1. [react-router-dom documentation](https://reactrouter.com/web/guides/quick-start)
2. Something
