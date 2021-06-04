---
title: "React- CRA vs. Next.js vs. Gatsby"
date: "2020-11-14"
tags: ["React", "Web Development", "JavaScript"]
summary: "In this article, I compare create-react-app (CRA), Next.js, and Gatsby, and how I choose between them. I also briefly explain static rendering, server-side rendering (SSR), and client-side rendering(CSR)."
contributor: ""
---

React.js is an open-source JS library developed by Facebook for developing User Interfaces (UI's for short). It is one of the most in-demand frontend libraries of today. React breaks the UI elements into reusable components. As the code is being reused, it means the overall code is easier to read, maintain and debug.

That being said, React doesn't do much more than this. To add other functionalities such as module bundling, transpiling, routing, etc. we need to use some other npm packages or ready-to-use frameworks, such as [create-react-app (CRA)](https://create-react-app.dev/), [Next.js](https://nextjs.org/) and [Gatsby](https://www.gatsbyjs.com/). These frameworks provide certain ways of doing things in a more structured way, and they are built on top of React. All three give us a starter project, where certain packages are already installed and ready to go. So as soon as you decide to build a project with React, you are faced with this major decision.

The first thing you need to do is properly understand what your project needs because all three frameworks have their strong and weak points. Also, all of them are constantly changing and growing with many smart people working to improve them. Let's check each of them one by one:

1. **create-react-app (CRA):**

   This is probably the easiest one to use if you're creating a Single Page App (SPA). It abstracts away the building process using webpack and transpiles with Babel. For routing and global state management, you might still have to add more dependencies such as react-router-dom and react-redux. CRA generates a single DOM for the whole application, with instructions for how to generate content for all routes. The construction of the pages is done live by the browser instead of the server, so the browser does the heavy lifting. This is called **client-side rendering (CSR)**. Server-side code can be kept simple, and it is completely decoupled with client-side code. But the applications that depend on CSR should consider doing code-splitting and lazy-loading so that they lean on the browser as little as possible.

   **▲ pros:**

   - The official SPA tool to create React apps, many blog posts to help you do things, and has good documentation
   - Easy to learn and use
   - Flexible, you can still choose how you're going to do things, not so much opinionated
   - Server-side code and client-side code are completely decoupled
   - Supports Progressive Web Apps (PWAs)

   **▼ cons:**

   - Needs manual setup for global state management, routing, styling
   - Might need to eject if you need special configurations with webpack, babel, jest, etc.
   - Can't use for public websites, as Search Engine Optimization (SEO) is a concern
   - Might get fat! Better to use it with code splitting and lazy-loading
   - Initial loading is slow as the HTML is prepared on the spot

2. **Next.js:**

   Next.js uses server-side-rendering (SSR), which means that the application is going to be dynamically rendered on a server, so the server is going to do the heavy lifting. The HTML code that gets generated based on the URL is sent to the client-side, so the SEO is good as the bots can parse it. If you have a website that is constantly changing and needs good SEO, then Next.js is great for that. It also supports static rendering, but it's like driving an F150 Truck in a city, a bit of an overkill.

   **▲ pros:**

   - Search Engine Optimization (SEO) is good
   - Routing is included (you just create files in the pages folder, which becomes your routes in the end)
   - Does automatic code-splitting
   - Easier to change the Babel and Webpack config when compared to CRA

   **▼ cons:**

   - Server-side code gets slightly more complex, and serving the site might get slightly more expensive
   - More complex to use, and more opinionated when compared to CRA

3. **Gatsby:**

   Gatsby provides **static rendering**, which means it only creates the HTML code during the build. If you change the data, you have to build it again to see the changes. Gatsby works very well for static websites, such as blogs that load the same way for every user. So one requirement is not to have fast-changing data.

   **▲ pros:**

   - Search Engine Optimization (SEO) is good
   - Initial loading is fast as the pages are pre-rendered
   - Supported by static hosting services such as Netlify and CDN, cheaper to serve
   - Supports Progressive Web Apps (PWAs)
   - Lot's of plugins to do various things, according to your needs

   **▼ cons:**

   - Not so good for sites that circulate data fast, such as the social media applications like Reddit or Twitter. To change the data in a gatsby project you either have to build it again or use client-side rendering.
   - You will need some GraphQL and Node.js knowledge
   - More complex to use, and more opinionated when compared to CRA
   - The plugins are not necessarily very well supported :]

Long story short, the framework you choose to use really depends on your needs and constraints. For the dynamic sites that are rendered slightly different for each user, you can go with either Next.js or CRA. If you need good SEO as well, Next.js is a better choice. If you're building something like an internal business application, for which you won't need the SEO, so CRA is great for you. If your site is going to be static, like a blog, then Gatsby is the way to go. In fact, I also built this blog using Gatsby and I really enjoyed using it. [reactjs.org](https://reactjs.org/), [figma.com](https://www.figma.com/), and [braun.com](https://ca.braun.com/en-ca) are also built with Gatsby. CRA and Gatsby are both supported by static hosting services such as Netlify, so deploying is easier as well.

If you need a more detailed comparison of the rendering methods, check out [this article](https://developers.google.com/web/updates/2019/02/rendering-on-the-web). Good luck and have fun!

### Resources:

1. [Rendering on the Web](https://developers.google.com/web/updates/2019/02/rendering-on-the-web) by Jason Miller and Addy Osmani
2. [create-react-app (CRA)](https://create-react-app.dev/)
3. [Next.js](https://nextjs.org/)
4. [Gatsby](https://www.gatsbyjs.com/)
5. [What is a static site generator?](https://www.cloudflare.com/learning/performance/static-site-generator/) by Cloudflare
6. [When Should You Use Gatsby?](https://www.youtube.com/watch?v=VoscwJ6MGsU&t=321s) by Ben Awad
