---
title: "Browser Storage Mechanisms: Local Storage vs. Session Storage vs. Cookies"
date: "2019-04-06"
tags: ["Web Development", "JavaScript"]
summary: "In this article, I try to explain what local storage, session storage and cookies are, and how to use them."
---

This is going to be fun. It has to be, this article has cookies in it!

Now, imagine a highly hypotetical, but a totally possible scenario. You are playing shogi on a website (who doesn't?), and it suddenly becomes very exciting and challenging (in a good way). You realize it is going to take longer than you expected. You decide to grab a sub from somewhere and eat it when you're playing. So as your computer sleeps peacefully, you go get your sub. You open your computer and unfortunately your browser refreshes the page. Bummer! Your game is gone!

What a disappointment. This could have been prevented by using some of the browser storage mechanisms. Now let's talk about those.

### Local Storage:

Browsers that support local storage have a localStorage object that you can reach from the window object.
