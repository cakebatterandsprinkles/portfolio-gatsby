---
title: "ALU, CPU, RAM, ROM, the disc"
date: "07-21-2020"
tags: ["Computer Science"]
summary: "In this article, I briefly explain what ALU, CPU, RAM, ROM and the disc are. Disclaimer: This article is a very simplified version of the real things."
---

This article aims to explain what Arithmetic Logic Unit (ALU), Central Processing Unit (CPU), Random Access Memory (RAM), Read-Only Memory (ROM) and the disc are, in a very simple manner. If you have heard some of these terms before, and you don't really understand what the topic is, then you are in luck. This article is for you.

These are the electrical circuits that many of the electronic devices we use daily have, but we rarely know what they do, let alone how they work.

The story starts with tiny cables that carry electricity. It has two states it can be in, either there is electricity on a wire, or there is not. We can call these states on/off, 1/0, white/black, yes/no or James/Emma. What we call them doesn't matter, not actually, but they are more commonly called 1/0. Each 1 or 0 is called a "bit".

Now, a bit can hold literally a single information, it can be an answer to a yes/no question. Think of it as a sign on your hand, with 2 sides, on one side there is "yes", on the other side there is "no". For example, if somebody asks you "have you eaten lunch?", you can answer with a bit. If you have eaten your lunch, you can show the side with 1, if you haven't, you can show 0. In this case, you got away with your tiny bit.

But what if you are being asked something else, like your name? You have a single bit, how are you going to answer the question?

Here comes the concept of "byte". A byte is 8 bits (0's or 1's) stuck together. As a bit can either be 1 or 0, there is 2⁸ possible information it can hold! Thankfully somebody encoded the alphabeth already, so each letter has a byte representing it. And your parents wrote down the bytes that encode your name to a paper and you always carry it in your pocket. This has been your name since the day you were born, your manufacturers have given it to you.

Now, what if you were asked how many calories you would get from 3 fried eggs. Gosh, now you have to take the calorie of one single egg, multiply it by 3, keep the result of the multiplication and add the calories of the oil, keep the final result somewhere. It just became really cumbersome, right?

**Arithmetic Logic Unit (ALU)**

There are tiny circuits made from basic logic gates that do certain operations. Simplified version: You have input wires, and you have an output wire. These circuits are wires that are connected in such ways that they create a certain output. With the same inputs they always create the same output, they are consistent and reliable. All the basic operations (the building blocks of bigger operations) have their own circuit. If we go back to the fired eggs example, there is addition and there is multiplication, and these are the simple operations that will lead you to your final answer.

If you combine all the wires that do basic operations that a computer can do on a single chip, it becomes an Arithmetic Logic Unit. Now you can combine simple operations to find answers to life's complicated problems.

**Central Processing Unit (CPU)**

CPU is the part that executes instructions of a program.

CPU has 3 important parts:

1. ALU that does the arithmetic and logic operations
2. Control Unit
3. Registers

We have talked about ALU, but what the heck are other two? Well, the control unit is the part that says, "multiply this with that and than add this to the result of that". Which means it controls which operations are going to be done in which order.

Registers are byte sized memory cells, which contain the results of different operations. Back to the fried egg example, you need to multiply the calories of a single egg with 3, then add the calorie of the oil to get to the final amount of calories. To do that, you need to store the result of the multiplication first, so you dump that value to a register, and for the final addition you take that value as an input.

Now, if you have ever bought a laptop by yourself in the last 5 years, you have probably seen 2/4/6/8-core processors. Processor is the name of the chip that is responsible for executing instructions, but it can contain multiple CPU's, that are called "cores". So If you are working with a 6-core processor, this means your processor has 6 CPU's, which means you can calculate the calorie amounts of 6 dishes at the same time.

**Random Access Memory (RAM)**

**Resources:**

1.
