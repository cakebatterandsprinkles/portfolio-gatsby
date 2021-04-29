---
title: "Introduction to Browser Storage Mechanisms: Local Storage, Session Storage, Cookies and more"
date: "2020-11-19"
tags: ["Web Development", "JavaScript"]
summary: "In this article, I briefly explain the browser storage mechanism and their differences from each other."
---

Browser storage mechanisms are useful for a variety of reasons:

- logging a user out after a certain time has passed until the last login (then you can keep the last login timestamp)
- keeping the preferences of the user (user-specific settings, such as the light mode or dark mode)
- keeping some additional information about the user that you use inside your app (like name or username)
- caching your static application resources (like HTML, CSS, JS and images)

Either way, keeping that information on the client-side saves you from an additional and unnecessary server call, and helps you provide offline support. But, there is a limit to the amount of data you can store on client-side. The exact amount can change according to the browser and user settings. There are multiple ways of caching data in the browser, so you got to choose the one that fits your needs, and this article is going to be about that.

#### ☀ Before we start

**Where are they hiding in the browser?**

1. Open the Chrome Console (`Command + Option + J` in Mac and `Control + Shift + J` in Windows).

2. From the tabs above, choose _Application_, and you can see all of them under the _Storage_ section (**Local Storage**, **Session Storage**, **IndexedDB**, **Web SQL**, and **Cookies**).

As you may have noticed how easy it is for you to see the data that's kept here, it is also easy for the user to delete or modify this data. So when you're writing your application, keep that in mind, and try not to rely on these guys so much.

To check how much of the storage your application is using, open the Chrome console and under the Application tab, choose _Storage_. From here, you can also create a custom storage data to simulate how your application will act under harsh conditions like low disk space. To check how much space is available, you can you can use [StorageManager API](https://developer.mozilla.org/en-US/docs/Web/API/StorageManager/estimate) but be aware that it is [not supported by every browser](https://caniuse.com/mdn-api_storagemanager). The `estimate` method returns a promise that has quota and usage properties (but beware, they are not precise):

```javascript
navigator.storage
  .estimate()
  .then(estimate => {
    console.log(
      `You have used approximately ${(
        (estimate.usage / estimate.quota) *
        100
      ).toFixed(2)}% of your available storage.`
    )
    console.log(
      `You have up to ${estimate.quota - estimate.usage} remaining bytes.`
    )
  })
  .catch(err => console.log(err))
```

---

**Tiny but important note:** The browser storage mechanisms may act differently in different browsers due to the implementation differences, so take it with a grain of salt and check out other resources if you're looking for a browser-specific property.

Also, [Web SQL support has been removed](https://caniuse.com/sql-storage) from many browsers, and it is recommended to migrate the existing usage to
IndexedDB.

---

**What are Web Workers and Service Workers?**

The script file that you link to the HTML file using the `<script>` tag runs in the browser's main thread. If the main thread (the UI thread) has too many synchronous calls, it may slow down the application and create a bad user experience. This is where the workers come in handy.

**A worker** is a script that runs on the background on a separate thread. **[Web workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API)** are the most commonly used workers, and they don't have a dedicated job description. They are mostly used to relieve the main thread by taking on the heavy processing or the calculations that are going to take time. The worker script will be separate from the main script and as it has no access to DOM, the data that needs to be processed has to be sent from the main script with the built in `postMessage` method. For a basic live web worker example, checkout [this GitHub repo](https://github.com/mdn/simple-web-worker).

**[Service workers](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API)** are specific type of workers that act like a proxy between the browser, the network and the cache. They have the ability to intercept every network request made from the main script. This allows the service worker to respond a network request by returning a response from the cache instead of the server, therefore making it possible to run the application offline. For a basic live service worker example, checkout [this GitHub repo](https://github.com/mdn/sw-test).

#### 1. localStorage and sessionStorage (Web Storage)

Browsers that support localStorage and sessionStorage keep localStorage and sessionStorage objects that allow you to save key/value pairs.

The APIs of localStorage and sessionStorage are almost identical. Their main difference is **persistence**: sessionStorage is very temporary and cleared after a browser session ends (when the tab or the window is closed). Interestingly, data stored in sessionStorage survives page reloads. Data that is stored in localStorage persists until it is intentionally and explicitly deleted.

[The Web Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API) is pretty simple and consists of 4 methods (`setItem()`, `getItem()`, `removeItem()`, and `clear()`) and a `length` property:

```javascript
// For sessionStorage, replace localStorage with sessionStorage in the code below

console.log(typeof window.localStorage) // Prints: Object

// Let's cache some data in our localStorage
localStorage.setItem("colorMode", "dark")
localStorage.setItem("username", "cakebatterandsprinkles")
localStorage.setItem("favColor", "green")

console.log(localStorage.length) // Prints: 3

// retrieving data
console.log(localStorage.getItem("colorMode")) // Prints: dark

// removing data
localStorage.removeItem("colorMode")
console.log(localStorage.length) // Prints: 2
console.log(localStorage.getItem("colorMode")) // Prints: null

// clearing local storage
localStorage.clear()
console.log(localStorage.length) // Prints: 0
```

- Both localStorage and sessionStorage are great for caching non-sensitive application data.

- Both of them are **synchronous** in nature and will block the main UI thread. This is why they should be used with caution.

- Maximum storage limit is around 5MB. (Both provide bigger storage when compared to cookies, which is 4KB of storage space.)

- They both only accept strings. (But you can work around this by JSON.stringify and JSON.parse as shown [here](https://stackoverflow.com/questions/2010892/storing-objects-in-html5-localstorage?noredirect=1&lq=1).)

- They cannot be accessed by web workers and service workers.

- Stored data is only available on the same origin for both of them. (They work on same-origin policy. For more explanation check out the last subtitle in this article.)

#### 2. Cookies

[Cookies](https://en.wikipedia.org/wiki/HTTP_cookie) are mostly used for authentication and user data persistence. You create a token that is unique for the user and the session, and add it to every HTTP request made from the client. One of the reasons to use cookies is to keep track of what the user is doing in the website - such as adding items to your cart in an e-commerce site, or your login information.

Cookies are attached to every HTTP request, so you should be cautious about what you put inside. Storing too unnecessary data will make your HTTP requests chunky, making the application slower than its supposed to be.

- Maximum storage limit is around 4KB, and can only contain strings.

- They work synchronously.

- They are not accesible from the web workers but accessible from the global `window` object.

There are some types of cookies depending of the job they do. Let's see what those are:

- **Session Cookies:**
- **Persistent (tracking) Cookies:**
- **Secure Cookies:**
- **First-Party Cookies:**
- **Third-Party Cookies:**

Cookies can also be modified by the user or intercepted in transit. For security purposes, the data should always be encrypted, so in any interception attempt, the user's credentials stay safe.

-

#### 3. The Cache API and IndexedDB API

- The Cache API and IndexedDB API are widely supported in modern browsers.
- Both of them work **asynchronously**, meaning they will not block the main UI thread.
- They can be accessed from the global `window` object, web workers and service workers.

**IndexedDB API:**

- Stores key-value pairs

#### 4. File system API

#### ☀ Same Origin Policy

#### Resources

1. [Client-side storage](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Client-side_storage), [Service workers](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API), [Web workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API) by MDN Web Docs
2. [Storage for the web](https://web.dev/storage-for-the-web/), [The Cache API: A quick guide](https://web.dev/cache-api-quick-guide/) by Pete LePage
3. [Web workers vs Service workers vs Worklets](https://bitsofco.de/web-workers-vs-service-workers-vs-worklets/) by Ire Aderinokun
