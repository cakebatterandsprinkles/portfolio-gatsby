---
title: "Single-Page Application (SPA) vs. Multi-Page Application (MPA) vs. Progressive Web Apps (PWA)"
date: "2021-01-22"
tags: ["Web Development"]
summary: "In this article, I briefly explain about two main web application patterns, single-page application and multi-page application, and their differences. I also talk about what progressive web apps are."
---

There are two main design patterns for web applications: One being the single-page approach, and the other one is the multi-page approach. The decision of which one to use depends on the content and the needs of your web app. Progressive Web Applications can be built with both single-page and multi-page approach, and I will explain them in a separate subtitle.

Let's start!

#### SPA

In a single page app (an SPA for short), we don't have multiple HTML files for each path, but we instead use JavaScript to render different components for different paths on the same page. When you request a single-page app from a browser, you download a `bundle.js` file, which has the compiled JavaScript code of all the requested website. With this approach, the browser renders a single page according to the path the user chooses to go. If the site is doing **lazy loading**, there might be multiple bundle.js files that you download according to the path you request. So the page isn't reloaded (requested again from the server) unless it absolutely necessary. This is especially important if you want to maintain the application state, because reloading a page resets the application state. Only _data_ is sent between server and user (by utilizing AJAX calls), and the browser re-renders the UI components by itself.

SPA's are very popular and some of them we use almost every day, such as Gmail, Twitter, Facebook or GitHub.

**◉ SPA pro's and con's**

⬆ **Increased page load speed, therefore better user experience:** They are generally loaded once. Once it loads, page rendering depends on the browser which is very fast.

⬆ **Less server load:** Rendering logic is executed within the browser (browser does the heavy lifting). Only relevant data is sent between server and client.

⬆ **Caching:** Only one request is sent to the server, and the response that comes back is cached, making it possible to use SPA's offline as well. (The user will be able to use the previously loaded data even if the internet connection is lost.)

⬆ **Debugging:** The SPA frameworks such as React and Angular offer other debugging tools, which makes the developer's life much easier.

⬆ **Easier mobile development:** You can use the same backend API's for a mobile app and an SPA.

⬆ **Code Reusability:** The developers can reuse code, which makes the development process (and the code) shorter.

⬇ **Search Engine Optimization (SEO) can be challenging:** Search engines have crawlers that can parse JavaScript, but they have a hard time crawling through asynchronous content. After the initial page is loaded, crawlers that are not aware that there is additional data will stop crawling, and that results with an unefficient SEO.

⬇ **Memory leaks:** Event listeners take a lot of space

⬇ **Security:** SPA's are more open to cross-site scripting attacks (XSS) when compared to MPA's.

#### MPA

Multi Page Applications (MPAs for short) are composed of multiple HTML files that are downloaded whenever that page is requested. This is more of a "traditional" pattern of making web applications. Example of MPA's you probably might have used are Amazon and eBay websites. For every new URL we write to the address bar or every hyperlink we click sends a new request to the server and results with a new page being downloaded. In this approach, server does the heavy lifting. So if the internet connection of the users are poor, each page might take a lot of time to load.

**◉ MPA pro's and con's**

⬆ **Search Engine Optimization (SEO) is better:** A single-page can have only a limited amount of keywords, but a multi-page app can have the same limited amount of keywords for multiple pages, which provides the crawlers more information about the website.

⬆ **Good Scalability:** You can keep adding features forever. (But in SPA's, as you keep adding your bundle.js will grow, so you either be stingy about the content, or do lazy loading).

⬇ **Loads slower:** They constantly load new pages for every request (even if a minor UI thing changes, the page has to reload). If the client's internet connection is poor or the server is slow, the loading speed will decrease, which will end up in a bad user experience.

⬇ **Slower development time:** Code reusability is low, files are bigger, the front-end is more tightly coupled to the back-end. These factors can make the development process slower.

⬇ **Increased server load:** Each interaction with the server includes a UI package that needs to be rendered.

⬇ **Mobile development is harder:** You can't use the same backend API's for a mobile app and an MPA.

#### When to use which

If the SEO doesn't matter to you that much, and you have limited data

#### PWA

For an application to be a Progressive Web App (PWA for short), it has to meet three conditions:

1. HTTPS
2. Manifest file
3. Service Worker

#### Resources:

1. [Single-page application vs. multiple-page application](https://medium.com/@NeotericEU/single-page-application-vs-multiple-page-application-2591588efe58) by Neoteric
2.
