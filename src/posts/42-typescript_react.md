---
title: "Using TypeScript with React"
date: "2021-04- 07"
tags: ["TypeScript", "React", "Redux"]
summary: "In this article, I give examples on how to use TypeScript with React (create-react-app/ CRA) and Redux."
---

This is no article for the faint hearted! If you don't know React basics, I suggest you to go through them first. If you don't know how TypeScript works, munch on [this article](https://yagmurcetintas.com/journal/introduction-to-typescript). If you have no idea what Redux is, go on and check [this one](https://yagmurcetintas.com/journal/react-redux) out. After that make sure you have Node.js and a code editor installed on your computer and you're good to go!

**Creating a React starter project with TypeScript support:**

As the browser and Node.js doesn't understand TypeScript, we need the TypeScript compiler to translate our code into JavaScript before running it. To create a starter project that has TypeScript support built into it you need to use the following command in your command line:

`npx create-react-app <appname> --template typescript`

This command creates a new React project with the given name. To run the project, go to its directory and write `npm start` to your command line.

**What is different?**

When you open up the starter project, you can see that there are files with extensions `.ts` and `.tsx`. `.tsx` extension denotes that there is some amount of JSX code in it. If there isn't any JSX code in your file, then you should use the `.ts` extension.

There is also a `tsconfig.json` file that is automatically created for us. This file has some base compilation rules we can change later if we need to.

Other than these, not much is going to change. This is the list of the things we are going to talk about:

1. [Applying types to component props and state](#types-with-props-and-state)

2. [Using types with events and refs](#types-with-events-and-refs)

3. [Using types with Redux](#types-with-redux)

<div id="types-with-props-and-state"></div>

### Applying types to component props and state

<div id="types-with-events-and-refs"></div>

### Using types with events and refs

<div id="types-with-redux"></div>

### Using types with Redux

### Resources:

1. [Create React App - Adding TypeScript](https://create-react-app.dev/docs/adding-typescript/)
2. [TypeScript Documentation - What is a tsconfig.json](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)
