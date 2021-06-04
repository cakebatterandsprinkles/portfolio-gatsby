---
title: "Single-Page Application vs. Multi-Page Application vs. Progressive Web Apps"
date: "2021-01-22"
tags: ["Web Development"]
summary: "In this article, I briefly explain about two main web application patterns, single-page application and multi-page application, and their differences. I also talk about what progressive web apps are."
contributor: ""
---

There are two main design patterns for web applications: One being the single-page approach, and the other one is the multi-page approach. The decision of which one to use depends on the content and the needs of the web app. Progressive Web Applications can be built with a single-page or a multi-page approach, and I will explain them in a separate subtitle.

Let's start!

### Single-Page Application (SPA)

In a [Single-Page Application](https://en.wikipedia.org/wiki/Single-page_application), we don't have multiple HTML files for each path, but we instead use JavaScript to render different components for different paths on the same page. When you request a single-page app from a browser, you download a `bundle.js` file, which has the compiled JavaScript code of all the requested website. With this approach, the browser renders a single page according to the path the user chooses to go by making use of **[HTML5 History API](https://developer.mozilla.org/en-US/docs/Web/API/History_API)**. If the site is doing **[lazy loading](https://en.wikipedia.org/wiki/Lazy_loading)**, there might be multiple bundle.js files that you download according to the path you request. So the page isn't reloaded (requested again from the server) unless it is absolutely necessary. This is especially important if you want to maintain the application state because reloading a page resets the application state. Only _data_ is sent between server and user (by utilizing AJAX calls), and the browser re-renders the UI components by itself.

SPA's are very popular and some of them we use almost every day, such as Gmail, Twitter, Facebook, or GitHub.

#### ☀ SPA pro's and con's

⬆ **Increased page load speed, therefore better user experience:** They are generally loaded once. Once it loads, page rendering depends on the browser which is very fast.

⬆ **Less server load:** Rendering logic is executed within the browser (browser does the heavy lifting). Only relevant data is sent between server and client.

⬆ **Caching:** Only one request is sent to the server, and the response that comes back is cached, making it possible to use SPA's offline as well. (The user will be able to use the previously loaded data even if the internet connection is lost.)

⬆ **Debugging:** The SPA frameworks such as React and Angular offer other debugging tools, which makes the developer's life much easier.

⬆ **Easier mobile development:** You can use the same backend APIs for a mobile app and an SPA.

⬆ **Code Reusability:** The developers can reuse code, which makes the development process (and the code) shorter.

⬇ **Search Engine Optimization (SEO) can be challenging:** Search engines have crawlers that can parse JavaScript, but they have a hard time crawling through asynchronous content. After the initial page is loaded, crawlers that are not aware that there are additional data will stop crawling, and that results in an inefficient SEO.

⬇ **Google Analytics is hard to use:** Google Analytics relies heavily on page reloads, which doesn't happen in an SPA.

⬇ **Memory leaks:** Event listeners take a lot of space. You can easily introduce a memory leak on the client-side with an SPA, by simply just adding event listeners to global objects and not removing them when the component is being unmounted. If you don't want to cause memory leaks, you should clean up the event listeners, timeouts, and intervals.

⬇ **Security:** SPA's are more open to cross-site scripting attacks (XSS) when compared to MPA's.

### Multi-Page Application (MPA)

Multi-Page Applications are composed of multiple HTML files that are downloaded whenever a page is requested. This is more of a "traditional" pattern of making web applications. Examples of MPA's you probably might have used are Amazon and eBay websites. Every new URL that's written to the address bar or every hyperlink that's clicked sends a new request to the server and results in a new page being downloaded. In this approach, the server does the heavy lifting. So if the internet connection of the users is poor, each page might take a lot of time to load.

#### ☀ MPA pro's and con's

⬆ **Search Engine Optimization (SEO) is better:** A single-page can have only a limited amount of keywords, but a multi-page app can have the same limited amount of keywords for multiple pages, which provides the crawlers more information about the website.

⬆ **Good Scalability:** You can keep adding features forever. (But in SPA's, as you keep adding features your bundle.js will grow, so you either be stingy about the content or do lazy loading).

⬆ **Memory leaks are rare:** Server-side memory leaks are possible but client-side memory leaks are rare, as the browser will load a different script for each navigation link.

⬆ **Google Analytics is easy to use**

⬇ **Loads slower:** They constantly load new pages for every request (even if a minor UI thing changes, the page has to reload). If the client's internet connection is poor or the server is slow, the loading speed will decrease, which will end up in a bad user experience.

⬇ **Slower development time:** Code reusability is low, files are bigger, the front-end is more tightly coupled to the back-end. These factors can make the development process slower.

⬇ **Increased server load:** Each interaction with the server includes a UI package that needs to be rendered.

⬇ **Mobile development is harder:** You can't use the same backend APIs for a mobile app and an MPA.

#### When to use which

If the SEO doesn't matter to you that much and you have limited content, then SPA's are the way to go. An MPA will help you rank higher in Google searches, and scaling up will be easier, but it will be much slower to load. So it depends on what you expect from your application.

### Progressive Web Apps (PWA)

[Progressive Web Apps](https://en.wikipedia.org/wiki/Progressive_web_application) can run in a standalone window instead of a browser tab. Simply put, they are web applications that are made to resemble native apps and can be installed on one's mobile phone, tablet, or laptop. After being downloaded, the app can be reached from an icon from the home screen of the user. You can also send push messages and notifications to the user. Many web apps are PWA's, such as Twitter, Starbucks, Uber, and Pinterest. A PWA can be an SPA or an MPA. However, for an application to be a PWA, it has to meet three conditions:

1. **Secure Contexts (HTTPS):** [Secure contexts](https://w3c.github.io/webappsec-secure-contexts/) are defined minimum standards for user authentication and confidentiality. Many API's and many features of a PWA (like geolocation) are only available if the app has been served over a secure network.

2. **Service Worker:** Service workers are scripts that run in the background and control how the browser handles network requests and content caching. PWA's provide offline services via the service workers.

3. **Manifest file:** This is a JSON file that keeps the application information a PWA needs, such as the name of the app, the start URL, icons in several sizes, and theme colors.

Progressive Web Apps are smaller when they are compared with native mobile apps. Case studies (such as [5miles](https://developers.google.com/web/showcase/2016/5miles), [AliExpress](https://developers.google.com/web/showcase/2016/aliexpress), and some others) also suggest that they help increase traffic and user engagement, and reduce bounce rates, which is mostly attributed to the offline usability.

#### Resources:

1. [Single-page application vs. multiple-page application](https://medium.com/@NeotericEU/single-page-application-vs-multiple-page-application-2591588efe58) by Neoteric
2. [Fixing memory leaks in web applications](https://nolanlawson.com/2020/02/19/fixing-memory-leaks-in-web-applications/) by Nolan Lawson
3. [Progressive web apps (PWAs)](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps) by MDN
4. [Service Worker API](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API) by MDN
5. [Web app manifests](https://developer.mozilla.org/en-US/docs/Web/Manifest) by MDN
6. [SPA (Single-page application)](https://developer.mozilla.org/en-US/docs/Glossary/SPA) by MDN
7. [What are Progressive Web Apps?](https://web.dev/what-are-pwas/) by Sam Richard and Pete LePage
8. [Building the Google I/O 2016 Progressive Web App](https://developers.google.com/web/showcase/2016/iowa2016) by Eric Bidelman
