---
title: "Small things that make up a computer: Bits and Logic Gates"
date: "2020-09-02"
tags: ["Computer Science"]
summary: "Tiny bits that computers are made of"
---

**Binary and bit**

When I started to get interested in programming, I realized that I didn't know much about how computers really work. I could use a computer efficiently, but I had no idea how it did all the things it did.

Along the way I realized that computer science is a world of abstractions. And by this I mean if you know how to write code in a high level language, most of the time you don't need to worry about how computer does things - and this is the beauty of abstraction. If it is done well, you don't need to worry about anything other than the thing you are supposed to worry about.

As I am learning other things about programming, my curiosity about how computers work never diminished. So I decided to learn- bit by bit, as much as I could understand.

So let's start with bits.

Think of a basic light switch. It is either on or off, right? If there is electricity in the wires, you can say it is on, if there is no electricity in the wires it is off. This is like this regardless of the end result - indeed, there might be no lightbulb connected to the wore, but it will still be on and off. This 2 version of states (on/off, yes/no) is called **binary.**

A computer is composed of tiny wires (a lot of them in fact!), and there is either electricity passing through them or not. This data is called a single **bit.**

**What the heck is a NAND Gate?**

Now imagine you enter a room. There is a light that is off, but when you look at the switch, something feels wrong. You stare for several seconds, and you realize that the switch is not only 2 parts, but also both of them are on "on" position. So in normal circumstances, the lightbulb should be shining bright, but it is not. This puzzles you, so you get close to the switch and start playing with it. Now you observe - and this is weird - but the light is only off when both of the switches are in on position, otherwise the light is always on. What the hell is going on in this room?

Welcome to the NAND gate. A NAND gate takes 2 bits of data (let's call them inputs from now on) and spits out one bit of data, depending on the 2 inputs.
