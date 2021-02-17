---
title: "Browser Storage Mechanisms: Local Storage, Session Storage, Cookies and more"
date: "2020-11-19"
tags: ["Web Development", "JavaScript"]
summary: "In this article, I briefly explain the browser storage mechanism and their differences from each other."
---

Browser storage mechanisms are useful for a variety of reasons:

- you might want your application to logout a user after a certain time has passed until the last login (then you can keep the last login timestamp)
- you might want to keep the preferences of the user (such as the light mode or dark mode)
- you might want to keep some additional information about the user that you use inside your app (like name or username).

Either way, keeping that information on the client-side saves you from an additional and unnecessary server call, and helps you provide offline support. There are multiple ways of caching data in the browser, so you got to choose the one that fits your needs, and this article is going to be about that.

#### Where are they hiding in the browser?

1. Open the Chrome Console (`Command + Option + J` in Mac and `Control + Shift + J` in Windows).

2. From the tabs above, choose _Application_, and you can see all of them under the _Storage_ section (**Local Storage**, **Session Storage**, **IndexedDB**, **Web SQL**, and **Cookies**).

As you may have noticed how easy it is for you to see the data that's kept here, it is also easy for the user to delete or modify this data. So when you're writing your application, keep that in mind, and try not to rely on these guys so much.

---

**Tiny but important note:** The browser storage mechanisms may act differently in different browsers due to the implementation differences, so take it with a grain of salt and check out other resources if you're looking for a browser-specific property.

---

#### localStorage and sessionStorage

Browsers that support localStorage and sessionStorage keep localStorage and sessionStorage objects that allow you to save key/value pairs.

The APIs of localStorage and sessionStorage are almost identical. Their main difference is **persistance**, and that's as the name suggests: sessionStorage is very temporary and cleared after a browser session ends (when the tab or the window is closed). Interestingly, the data stored in sessionStorage survives page reloads. Data that is stored in localStorage persists until it is intentionally and explicitly deleted.

The API is pretty simple and consists of 4 methods (setItem, getItem, removeItem and clear) and a length property.

Examples for the API:

```javascript
// For sessionStorage, replace localStorage with sessionStorage
console.log(typeof window.localStorage) //object

// Let's cache some data in our localStorage
localStorage.setItem("colorMode", "dark")
localStorage.setItem("username", "cakebatterandsprinkles")
localStorage.setItem("favColor", "green")

console.log(localStorage.length) // 3

// retrieving data
console.log(localStorage.getItem("colorMode")) // dark

// removing data
localStorage.removeItem("colorMode")
console.log(localStorage.length) // 2
console.log(localStorage.getItem("colorMode")) // null

// clearing local storage
localStorage.clear()
console.log(localStorage.length) // 0
```

- Both localStorage and sessionStorage are great for caching non-sensitive application data.

- Both of them are synchronous in nature and will block the main thread.

- Maximum storage limit is around 5MB. (Both provide bigger storage when compared to cookies, which is 4KB of storage space.)

- They both only accept strings. (But you can work around this by JSON.stringify and JSON.parse as shown [here](https://stackoverflow.com/questions/2010892/storing-objects-in-html5-localstorage?noredirect=1&lq=1).)

- Data is not sent to server for every HTTP request, which reduces server traffic.

- They cannot be accessed by service workers. (A **[service worker](https://developers.google.com/web/fundamentals/primers/service-workers)** is a script that runs in the background, independently from the web page and enables [push notifications](https://developers.google.com/web/updates/2015/03/push-notifications-on-the-open-web) and [background sync](https://developers.google.com/web/updates/2015/12/background-sync).)

- Stored data is only available on the same origin for both of them. (They work on same-origin policy. For the explanation check out the last subtitle in this article.)

#### Cookies

[Cookies](https://en.wikipedia.org/wiki/HTTP_cookie) are mostly used for authentication and user data persistence. You create a token that is unique for the user and the session, and add it to every HTTP request made from the client. You can create cookies ofroOne of the reasons to use cookies is to keep track of what the user is doing in the website - such as adding items to your cart in an e-commerce site, or your login information.

There are some types of cookies depending of the job they do. Let's see what those are:

- **Session Cookies:**
- **Persistent (tracking) Cookies:**
- **Secure Cookies:**
- **First-Party Cookies:**
- **Third-Party Cookies:**

Cookies can also be modified by the user or intercepted in transit. For security purposes, the data should always be encrypted, so in any interception attempt, the user's credentials stay safe.

-

#### The Cache API

#### IndexedDB API

#### Same Origin Policy

#### Resources

1.

2. [Storage for the web](https://web.dev/storage-for-the-web/) by Pete LePage
