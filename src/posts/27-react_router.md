---
title: "React- Router"
date: "2020-12-02"
tags: ["React", "Web Development"]
summary: "In this article, I briefly talk about routing in React apps, how to use react-router-dom, and the difference between relative and absolute paths."
contributor: ""
---

Let's start with what routing is. What is routing in the web development context?

**Routing** is about being able to show different pages to a user.

React is a UI component creating library. Routing is not built into the core of React. That's why we need to use another package (a routing package) to get it done. Most React apps make use of **[react-router-dom](https://reactrouter.com/web/guides/quick-start)** npm package to create routing.

#### react-router-dom

The router package has multiple tasks:

1. **Parsing the URL:** It has to parse the URL and understand which path the user wants to navigate to. Developers decide which paths to support.
2. **Read configuration data:** The router package reads the configuration data provided by the developer so that it knows which paths are supported and what should happen when the user visits one of these paths.
3. **Render:** In single-page applications all paths are rendered on a single page, and the router package handles the rendering of the appropriate jsx code depending on the path the user chose.

The user expects a unique URL they can use to reach a specific view. Dynamically created nested views might or might not have their unique URLs as well. Also, like in multi-page apps, they expect the browser's back and forward buttons to work as expected, which can become a problem in SPA's.

---

**NOTE:**

For the following examples on how to use the react-router-dom package, I assume you know how to create a react application. If you need help with that or you're new to React, you can check [this](https://create-react-app.dev/docs/getting-started/) out before proceeding.

---

#### BrowserRouter, Route, Switch

After installing the react-router-dom package with `npm i --save react-router-dom`, you need to import the **BrowserRouter component** the package provides at the root component of your app. After that, you can use other features the routing package offers anywhere inside the app.

The **[BrowserRouter component](https://reactrouter.com/web/api/BrowserRouter)** uses the **[HTML5 History API](https://developer.mozilla.org/en-US/docs/Web/API/History_API)** to keep the UI in sync with the URL. As the HTML5 History API is not available for legacy browsers, if you need to support older browsers you need to use the provided **[HashRouter component](https://reactrouter.com/web/api/HashRouter)**.

The Route component renders a specified component if the current link matches the given path.

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
          {/*Switch uses the first route that matches the given path. If this is not used, all of the matching routes will be rendered at the same time.*/}
          <Switch>
            {/* Route needs a path property that defines the path for which this route should become active. Then, you need to define what will be rendered if this route is active, which is the component property. The default behavior is checking if the current path starts with any of the given ones. exact is a boolean property that overrides this behavior and only if the current route and given route matches exactly, it makes that route active.*/}
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

Routing does not always happen in a single place in an app. Sometimes, we might want to render different components in different parts of the app, depending on the current path. All of the routing features that react-router-dom offers are available for every component that is wrapped inside the BrowserRouter component.

#### The history, location, and match objects and Navigating Programmatically

The react-router-dom package provides some extra information about the loaded route through props. Components that are directly rendered by the `<Route/>` component are equipped with a props object that has 3 properties: `history`, `location`, and `match`.

All the URLs that are visited by the client are kept in the browser in a stack. Through the **[history object](https://reactrouter.com/web/api/history)**, we can see the current location (`history.location`),replace the current location with another path (`history.replace()`), direct the user to another path (`history.push()`), or go one URL forward(`history.goForward`) or back(`history.goBack`).

The history object is especially useful if you want to **navigate the user programmatically**. For example, after successfully submitting a form, we might want to navigate the user to a different page, and replace the route of the previously filled form path in the stack with the new route to prevent form resubmission, and we can do this by using `.replace()` method of the history object (`this.props.history.replace("/newPath")`). The `.replace()` method replaces the current location in the stack with the new one. If we only want to take the user to a new page and not replace the last route of the history stack, we can use the `.push()` method, like so: (`this.props.history.push("/newPath")`).

The **[location object](https://reactrouter.com/web/api/location)** is immutable and represents the current URL.

The **[match object](https://reactrouter.com/web/api/match)** contains more information on the current URL, such as its URL (`match.url`), path string (`match.path`), dynamically created key-value pairs which are called **query parameters** (`match.params`) and if the match was exact or not (`match.isExact`).

For all three of these there is also a hook provided ([useHistory](https://reactrouter.com/web/api/Hooks/usehistory), [useLocation](https://reactrouter.com/web/api/Hooks/uselocation), [useRouteMatch](https://reactrouter.com/web/api/Hooks/useroutematch), [useParams](https://reactrouter.com/web/api/Hooks/useparams)), to enable their use in functional components.

#### The upcoming v6: The Routes Component and Nesting Routes

In v5 of react-router-dom, you have to manually get the match object (which means nesting them in the child component of the Route itself) and create a new path for your new routes using that url, something like this:

```jsx
<BrowserRouter>
  <Switch>
    <Route path="/" component={Landing} exact />
    <Route path="/signup" component={SignUpForm} />
    <Route path="/login" component={LoginForm} />
    <Route
      path="/user"
      render={({ match: { url } }) => (
        <Fragment>
          <Route path={`${url}/`} component={MainPage} exact />{" "}
          {/*This route matches /user */}
          <Route path={`${url}/today`} component={Today} /> {/*This route matches /user/today */}
          <Route path={`${url}/settings`} component={Settings} />{" "}
          {/*This route matches /user/settings */}
        </Fragment>
      )}
    />
  </Switch>
</BrowserRouter>
```

In v6, a new `<Routes/>` component is being introduced, which makes nesting routes a lot easier and much more intuitive. So the example above turns into this:

```jsx
<BrowserRouter>
  <Routes>
    {/* We don't have to use exact flag anymore, because the Routes component matches the exact path automatically */}
    <Route path="/" element={<Landing/>} />
    <Route path="signup" element={<SignUpForm/>} />
    <Route path="login" element={<LoginForm/>} />
    {/* If you're going to nest some routes, you just add a trailing '/*', and all <Link to> and <Route path> components inside will automatically be nested in /user prefix. */}
    <Route
      path="/user/*" render={()=>
        <Fragment>
          <nav><Link to="logout">Logout</Link></nav> {/*This will link to /user/logout */}
          <Route path="/" element={<MainPage/>} /> {/*This route matches /user */}
          <Route path="today" element={<Today/>} /> {/*This route matches /user/today */}
          <Route path="settings" element={<Settings/>} /> {/*This route matches /user/settings */}
        </Fragment>}
    />
  <Routes/>
</BrowserRouter>
```

In bigger applications, your routing might be scattered around the app in multiple components, but in smaller apps, you might want to see all your routes in a single page, and that's also possible:

```jsx
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Landing />} />
    <Route path="signup" element={<SignUpForm />} />
    <Route path="login" element={<LoginForm />} />
    {/* Now you don't need to use the trailing `/*`, you can directly nest the nested routes inside it */}
    <Route path="user" element={<User />}>
      <Route path="/" element={<MainPage />} />
      <Route path="today" element={<Today />} />
      <Route path="settings" element={<Settings />} />
    </Route>
  </Routes>
</BrowserRouter>
```

If you're interested, check out the [v5 to v6 migration guide](https://github.com/ReactTraining/react-router/blob/f59ee5488bc343cf3c957b7e0cc395ef5eb572d2/docs/advanced-guides/migrating-5-to-6.md#relative-routes-and-links), and [this blog post](https://reacttraining.com/blog/react-router-v6-pre/) by Michael Jackson.

#### Link, NavLink, Redirect

During the routing, React shouldn't reload the page if it doesn't really need to, but it should re-render some components in runtime.

For internal links (like navbar links) you don't need to reload the page. Therefore you don't use normal HTML anchor tags, instead, you use the **Link component** react-router-dom provides for you. The Link component creates the anchor tag for us and prevents the default behavior of reloading the page.

Another disadvantage of reloading the page is that you lose your state while doing that.

The `<Link/>` component uses `history.push()` and the `<Redirect/>` component uses `history.replace()`.

Let's create a link and a route that matches the path of that link:

```jsx
<Link
  to={{
  // You must provide a pathname
  pathname: '/contact',
  // hash fragment is used to jump to a certain part of the page or smoothly scroll there
  hash: '#submit',
  // search allows us to add query parameters
  search: '?quick-submit=true'
  // you can pass on a state, which will not be included in the URL path but is available for the Component that gets rendered by the route match
  state: {isClicked: true}
  }}>
  New Post
</Link>

// Let's create a path that matches this link, and manually get the location object:
<Route path= "/contact" render={({location})=> {
  const { pathname, search, hash, state } = location;
  return (
    <div>
      <p>Hello from the "/contact" route.</p>
      <p>Pathname: ${pathname}, Search: ${search}, hash: ${hash}, State: ${state.isClicked.toString()}</p>
    </div>)
}}/>

// Redirect expects a `to` prop, that either gets a route or another object with a pathname prop inside:
<Route exact path="/user">
  {isAuthenticated ? <Redirect to="/dashboard" /> : <Login />}
</Route>

<Redirect
  to={{
    pathname: "/dashboard",
    search: "?topic=what+is+love",
    state: { userId: userId }
  }}
/>
```

The `<Link/>` component accepts an **innerRef** prop, which accepts a callback function as an argument. That callback function gets the reference to that specific DOM node that <Link/> component translates to, which is an HTML anchor element. Another prop the `<Link/>` component accepts is **replace**, which replaces the current URL in the call stack with the pathname mentioned:

```jsx
// This will replace the last entry in the history stack with '.../gallery':
<Link to="/gallery" replace>
  Gallery
</Link>

// Example of the innerRef prop:
<nav>
  <Link
  to="/"
  innerRef={node=> node.onmouseover = () => console.log("Mouse is on Home link.")}>
  Home
  </Link>
</nav>
```

The `<NavLink/>` component is quite similar to the `<Link>` component and it accepts the same set of props, with the additional `activeClassName` and the inline `activeStyle` prop. So these are links that are visible to the user when they are active and inactive, therefore the react-router-dom package gives us some options to style them when they are active:

```jsx
<nav>
  {/* you can assign a CSS class */}
  <NavLink to="/" activeClassName="activeLink">
    Home
  </NavLink>
  {/* you can do inline styling */}
  <NavLink to="/about" activeStyle={{ color: "deeppink", fontWeight: "bold" }}>
    About
  </NavLink>
</nav>
```

#### withRouter

As I previously mentioned, the component that is rendered through the <Route/> component receives the very useful props object provided by react-router-dom, but it is not passed to the child components of the rendered component. If you need to use the props object in those components, you can either pass that to the children as props, or you can use the `<withRouter/> component`, like so:

```jsx
// You need to wrap the child component with the <withrouter/> component. It gets the props object from the first matching parent Route and applies it to the wrapped component.

// This is an example Post component:
import { withRouter } from "react-router-dom"

const post = props => (
  <article className="Post" onClick={props.onclick}>
    <h1>{props.title}</h1>
    <div className="Info">
      <div className="Author">{props.author}</div>
    </div>
  </article>
)

export default withRouter(post)
```

#### Absolute vs. Relative Path

These two are always confusing, so I wanted to explain them very briefly.

First, let think of them as they exist in real life. A relative path is relative to where you are standing at the very moment. For example, if you're sitting in a cafe, telling a friend about the place you've just moved to, you can say, "oh, you just turn right to the Something street from here, go like 10 miles straight, and you'll see it on the left." You've described how you're going to go to your new home from that cafe. An absolute path, on the other hand, is something that can be understood by everybody. It is the home address you enter when you're ordering something online. Everybody reads it the same way, check the country first, move to the city, move to the zip code, move to the street, move to the apartment number, there you are!

In the programming context, it's the same. If you need to use a relative path, it means you should describe the way starting from the file you're currently in. If you need to use an absolute path, then you should start from the root of the project you're in.

#### Summary

- **BrowserRouter** keeps the UI updated according to the URL.
- **Route** renders a UI component depending on the path.
- **Switch** renders the first matching route.
- **Link** navigates us to a particular URL.
- **NavLink** also navigates us to a particular URL, but can have an active style.
- **Redirect** directs users to a path that is different from the specified route.
- **withRouter** is a higher-order component that lets the children that are wrapped inside reach their closest matching parent route's props object.

I leave you with a video of chonky wild Kookaburra's. They are chonky, loud, and very good people. Cheers!

[![Kookaburra's making funny noises](https://img.youtube.com/vi/lZAtjTLLAuM/0.jpg)](https://www.youtube.com/watch?v=lZAtjTLLAuM "Kookaburra's making funny noises")

#### Resources:

1. [react-router-dom documentation](https://reactrouter.com/web/guides/quick-start)
2. [React Router v5: The Complete Guide](https://www.sitepoint.com/react-router-complete-guide/) by Manjunath M, Michael Wanyoike
3. [React Router v6 Preview](https://reacttraining.com/blog/react-router-v6-pre/) by Michael Jackson
