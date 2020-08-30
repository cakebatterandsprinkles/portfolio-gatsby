---
title: "Layers of Abstraction"
date: "07-21-2020"
tags: ["Computer Science"]
summary: "This article "
---

I began to think every article here will start with these sentences: Everything inside computers are made of bits, and bits can only be 0's and 1's. So this means everything inside computers is 0's and 1's.

Many of the tasks humans do daily require a functionality called **working memory** (aka "short-term memory" or "immediate memory"). Working memory is the involuntary act of keeping information about small amount of recently happened things or recent information very close, just in case you need them. Think of it like this: You might be watercoloring, and the closest stuff next to you will be your brushes, your paint, your canvas, a cup of water. The other stuff you need to do welding, gardening, or programming would not be in your close vicinity. This is the logical thing to do if you don't want to spill a cup of water on your laptop, and your brain keeps recent stuff closer to you without you noticing it. The stuff you keep in working memory is more available than things you keep in your long-term memory, therefore can be reached faster.

Working memory became a point of interest after an article published in 1956 by George A. Miller. This article suggested that our capacity to working memory was limited to only 7 units.

Why did I babble about working memory? Because dear human, everything inside the computer is bits. Computer only understand bits. And you can only keep a very tiny amount of them in your working memory. A single letter, in the best case scenario is encoded with 8 bits, which means 8 0's and 1's. You have already exceeded your working memory limits by keeping a single letter in your working memory. Try keeping a random phone number in your memory. It's hard and to commit it to long term memory, you need to repeat it for some time.

Alright, I have some better news. The working memory is limited to 7 units, for sure, but that doesn't mean these units have to be numbers. They can be words, or even longer phrases that make sense to you. So now, if you try to keep "red, flag, butterfly, circle, ship, corn bread, get this party started" in your mind, and repeat them 5 minutes later, you'll be able to. (And if you can't, visit a neurologist.) You have kept 58 bytes of information in your working memory, congrats!

So what this means is, human mind needs something that's verbal, something that makes sense to it, to make the most of its working memory. Then maybe we can translate the human language to the computer language.

Now, let's add the terminology to the story we just wrote. The computer language is called "the machine code", the act of translating human language to the machine code is called "compilation", the code that does compilation is called "a compiler". The human language is called "a programming language". The programming language is "an abstraction" on top of the machine code. The machine code itself can make a computer work on its own, but a code in a programming language has to be converted to machine code for it to work. This means for the programming language to do what it's supposed to do, the compiler has to do its job perfectly. So an abstracted technology depends on all the technologies below it.

How a technology does something is called "implementation". For example, how a compiler compiles a piece of code can be called "implementation". A person who is writing a code in a programming language doesn't have to worry about how the compiler will compile it. A programmer can only concentrate on the task that they are supposed to do.

All these abstraction layers are actually modules that are independent from each other. A good modular design makes it possible to work on individual modules independently, without worrying about the rest of the system. This is a great thing, you can 'seperate concerns', once something is implemented, you don't need to worry about how. You only worry about how to use it. This lets you build a complex system with simple layers, only worrying about one thing at a time.

Now, let's see all of the layers on top of each other:

**1. Application:** (e.g. Photoshop) The software that you use. For example when you're using photoshop, you don't care how the crop button works. The only thing you worry about is how to crop your picture.

**2. High Level Language:** (e.g. JavaScript) The language that is highly abstracted and is easier for humans to use.

**3. Low level language:** (e.g. C): This is the language hardwares understand, but harder to use for humans.

**4. Machine Language:** Binary code, all the stuff that's translated into 0's and 1's.

**5. Hardware Architecture:** Pieces that are put together to in logical ways to make a machine understand the machine language.

**6. Logic gates:** Circuits that takes binary inputs and spits out binary outputs according to the received inputs.

**7. Transistors:** Logic gates are built out of transistors. You can think of a transistor as a remote controlled switch.

**8. Quantum Physics:** Transistors are built upon quantum physics, the behavior of subatomic particles are what make transistors do what they do.
