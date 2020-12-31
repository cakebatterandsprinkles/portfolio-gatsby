---
title: "Single-Page Application (SPA) vs. Multi-Page Application (MPA)"
date: "2021-01-22"
tags: ["Web Development"]
summary: "In this article, I briefly explain about two main web application patterns, single-page application and multi-page application, and their differences."
---

There are two main design patterns for web applications: One being the single-page approach, and the other one is the multi-page approach. The decision of which one to use depends on the content and the needs of your web app.

**SPA**

In a single page app (an SPA for short), we don't have multiple HTML files for each path, but we instead use JavaScript to render different components for different paths on the same page. So the page isn't reloaded if it absolutely necessary. This is especially important if you want to maintain the application state, because reloading a page resets the application state.

SPA's are very popular and some of them we use almost every day, such as Gmail, Twitter or Facebook.

**◉ SPA pro's and con's**

⬆ **Increased page load speed, therefore better user experience:** Entire page reloads are rare in SPA's, mostly some components get reloaded and some of them stay the same.

⬆ **Less server load:** Rendering logic is executed within the browser.

⬆ **Caching:** Ony one request is sent to the server and the response is cached, making it possible to use SPA's offline as well. (The user will be able to use the previously loaded data even if the internet connection is lost.)

⬇ **Search Engine Optimization (SEO) can be challenging:** Search engines have crawlers that can parse JavaScript, but they have a hard time crawling through asynchronous content. After the initial page is loaded, crawlers that are not aware that there is additional data stop crawling, and that results with an unefficient SEO.

⬇ **Security:** SPAs are more open to cross-site scripting attacks (XSS) when compared to MPA's.

**MPA**

Multi Page Applications (MPAs for short) are composed of multiple HTML files that are downloaded whenever that page is requested. This is more of a "traditional" pattern of making web applications. Exampel of MPA's you probably might have used are Amazon and eBay websites. For every new URL we write to the address bar or every hyperlink we click sends a new request to the server and results with a new page being downloaded.

**◉ MPA pro's and con's**

⬆

⬇

#### Resources:

1. [Single-page application vs. multiple-page application](https://medium.com/@NeotericEU/single-page-application-vs-multiple-page-application-2591588efe58) by Neoteric
2.
