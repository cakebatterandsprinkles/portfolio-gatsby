---
title: "React- CRA vs. Next.js vs. Gatsby"
date: "2019-04-06"
tags: ["React", "Web Development", "JavaScript"]
summary: "In this article, I briefly compare create-react-app (CRA), Next.js and Gatsby, and how I choose in between them."
---

React.js is an open source JS library developed by Facebook for developing User Interfaces (UI's for short). It is one of the most in-demand frontend libraries of today.

React breaks the UI elements into reusable components. As the code is being reused, it means the overall code is easier to read, maintain and debug.

That being said, React doesn't do more than this. To add other functionalities such as module bundling, transpiling, routing, etc. we need to use some other npm packages or ready-to-use frameworks, such as CRA, Next.js and Gatsby. These frameworks provide certain ways of doing things in a more structured way, and they are built on top of React. All three gives us a starter project, where certain packages are already installed and ready-to-go. So as soon as you decide to build a project with React, you are faced with this major decision.

The first thing you need to do is properly understand what your project needs, because all three frameworks have their strong and weak points. Let's check each of them one by one:

1. **create-react-app (CRA):**

   This is probably the easiest one to use if you're creating a Single Page App (SPA). It abstracts away the building process using webpack, and transpiles with Babel. For routing and global state management you still have to add more dependencies such as react-router and react-redux. CRA generates a single DOM for the whole application, with instructions for how to generate content for all routes. The construction of the pages is done live by the browser instead of the server, so the browser does the heavy-lifting. This is called **client-side rendering**. Server-side code can be kept simple, and it is completely decoupled with client-side code.

   **pros:**

   - The official SPA tool to create React apps, many blogposts to help you do things and has good documentation
   - Easy to learn
   - Flexible, you can still choose how you're going to do things, not so much opinionated
   - 

   **cons:**
   - Needs manual setup for global state management, routing, styling
   - Might need to eject if you need special configurations with webpack, babel, jest, etc.
   - Can't use for public websites, as SEO is a concern
