---
title: ""
date: "08-13-2020"
tags: ["Computer Science", "Neuroscience"]
summary: "This article briefly explains how computers can retain data, by showing how a single memory cell operates."
---

**The smallest unit of memory: Memory Cell**

Hello sweet reader.

Let's start with a simple question: What is your name?

I'm pretty sure that question instantly popped an answer in your mind. (And if you don't know your name, it's time to see a neurologist.) Your name is one of the first things you've learned as you were born to this world. But what does learning mean?

Learning can be defined as the acquisition of new knowledge (or a new skill), but retaining that information is what is called the **memory.**

You've probably heard some stuff about "computer memory" before. You can write some stuff into a file, save it, close your computer, come back, open that file, and what you wrote will still be there. You remembering your name and the computer remembering some text you wrote and saved is a skill that you share.

Magic? Nope.

Let's start with computer's memory.

Since anything and everything inside a computer is bits, the computer can only remember if a bit was 0 or 1. And retaining those bits are done with a special wiring of 4 NAND gates. (If you don't know what gates or bits are, check out this article.)

The following diagram holds a single memory cell, by that I mean the gate diagram that holds a single bit:

The whole cell has 2 inputs and a single output. One of the inputs are labeled as "set", which will decide if we are going to set the memory or not.

Remember, NAND gate specifically creates an output of 0 only if both of its inputs are 1. Otherwise, it creates an output of 1.

First we start with this condition: set 1 and input 0. In this case, "a" wire will be 1 and "b" wire will be 0. Since the "b" wire is 0, "c" wire will be will be "1", regardless of the other input, that will make the final output 0.
