---
title: ""
date: "07-19-2020"
tags: ["Computer Science", "Neuroscience"]
summary: "This article briefly explains how computers can retain data, by showing how a single memory cell operates."
---

**What is memory?**

Let's start with a simple question: What is your name?

I'm pretty sure that question instantly popped an answer in your mind. (And if you don't know your name, it's time to see a neurologist.) Your name is one of the first things you've learned (whoa!) as you were born to this world. But what does learning mean?

Learning can be defined as the acquisition of new knowledge (or a new skill), but retaining that information is what is called the **memory.**

You've probably heard some stuff about "computer memory" before. You can write some text into a file, save it, close your computer, come back, open that file, and what you wrote will still be there. You remembering your name and the computer remembering some text you wrote is a skill that you share.

Magic? Nope.

**The smallest unit of computer memory: Memory Cell**

Let's start with computer's memory.

Since anything and everything inside a computer is bits, the computer can only remember if a bit was 0 or 1. And retaining those bits are done with a special wiring of 4 NAND gates.

The following diagram holds a single memory cell, by that I mean the gate diagram that holds a single bit:

![Memory Diagram](../images/blog/memory/memorycell.png)

The whole cell has 2 inputs and a single output. One of the inputs are labeled as "set" (will also be referred as "s"), which will decide if we are going to set the memory or not.

Remember, NAND gate specifically creates an output of 0 only if both of its inputs are 1. Otherwise, it creates an output of 1.

There are basically 4 possible cases for this memory cell (s:1 i:0, s:1 i:1, s:0 i:0, s:0 i:1) and we'll look at them one by one

We start with this condition: set 1 and input 0. In this case, "a" wire will be 1 and "b" wire will be 0. Since the "b" wire is 0, "c" wire will be will be "1", regardless of the other input, that will make the final output 0.

Secondly, we'll look at this condition: set 1 and input 1. This time "a" wire will be 0, "b" wire will be 1, and as "a" is 0, regardless of the other input, gate 3 will have the output of 1.

Our first deduction from these results is, when set is 1, output will be same as the input.

Now, let's continue where we left off and this time turn set off (set 0). Input was 1, and let's keep it 1. As set is 0, both "a" and "b" wires will be 1, regardless of the input. (We kept input 1 but it doesn't matter. We can open it and close it as we wish, when set is 0 nothing in the circuit depends on the input.) Now as both gate 3 and 4 have their one input as 1, the output only depends on one thing: the previous output. In our case, the previous output was 1, so "c" wire will be 0, and therefore the output will still be 1. If the input was 0 before we turn off set (make set 0), then the same output would be 0.

In a nutshell, if the set is on (1), the output of this diagram will be whatever input is. If the set is turned off (0), the output will be whatever the input was when set was turned off.

And this is how a computer "remembers" a single bit. Isn't that impressive?

**The smallest unit of human memory: The Brain Cells**

Humans store different kinds of information, such as facts, events, skills, habits, emotional memory and muscle memory. The neurons that store these diverse data are distributed throughout the brain, but they all have
