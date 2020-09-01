---
title: "Internet and the world wide web"
date: "07-12-2020"
tags: ["Computer Science"]
summary: "This article briefly explains how the internet works, what world wide web is and the underlying technologies supporting these."
---

I bet you have a computer, a smartphone or a tablet that's connected to the internet. How do I know? I know it because that's how you are reading this piece of text that I wrote from my own computer. So you and I, we are sharing information somehow. This article will exactly be about this: our connection to each other.

We have to understand some other stuff before we get to the internet and world wide web though. Let's start.

**Computer Networks:**

Think of a single computer, that is connected to electricity and nothing else. This is called **a stand-alone computer**. A standalone computer is a computer that is not connected to any other computer. It might have some peripheral devices attached to it (printer, keyboard, mouse etc.), but it can't communicate with any other computer. It literally stands alone.

When 2 or more computers are connected to each other, they become a **computer network.** The connection is generally provided by a cable or radio waves. So you and I are part of a network.

There are some type of networks, and they differ according to the area they cover. For example in a **Local Area Network (LAN)** computers are physically close to each other, they are in the same office building, school, or university campus. Only devices that are allowed to use this network can use this network.

In a **Wide Area Network (WAN)** computers can be physically away from each other. A WAN covers a wider area, an entire city, a country or even the whole world. A WAN simply connects LANs to each other. The internet is a worldwide public WAN. Signals in this network can be encrypted, but it is still less secure than a LAN. WANs also require more specialized devices and data has to travel for long distances, so WANs are more expensive to build.

**Wi-Fi (Wireless Fidelity) network** uses radio waves instead of cables. Wi-Fi Network can also referred to as **WLAN**, which stands for "Wireless Local Area Network."

Now, we should talk about **Heinrich Hertz**, a german scientist from 1800's that studied electricity that was going on and off very quickly, therefore creating electromagnetic waves. Some time after his death, scientists decided to use his name to describe how fast the electricity was turning on and off in a second. For example, 1 Hz meant there was 1 cycle happening in 1 second (on and off). 500 Hz meant there were 500 cycles happening in 1 second. So to make it more simple, we can say Hz is a unit for defining frequency.

So any device that works with electromagnetic waves work with same principles, your car's stereo, your microwave, walky talkies you might or might not have, your cellphone and of course, Wi-Fi. So how do they not interfere with each other? The answer is: different devices use different bandwiths. For example, your car stereo receives frequencies in Kilohertz and Megahertz range, and your Wi-Fi router transmits and receives data in the Gigahertz range (2.4Ghz and 5Ghz). And if any of these remote controlled devices receive and transmit data in the same bandwith, they can totally interfere with each other. For example, the Wi-Fi router uses the same range as a microwave. Microwaves are enclosed with metal so that they keep all the precious electromagnetic waves that are supposed to transfer their energy to your food inside, but if they are old or faulty, they might leak some of the electromagnetic waves. Then those leaking electromagnetic waves might interfere with the Wi-Fi signals, especially if they are positioned close to each other. This is why some people get slower internet when they're making popcorn.

A small note: radio waves are non-ionizing radiation, which means they don't carry a lot of energy and therefore they are harmless to humans. Ionizing radiotion on the other hand, is able to make

All WiFi signals (in both directions) go through the same place to reach a wider network, and that place is called the **Wireless Access Point (WAP)**. Wi-Fi signals are broadcast on the air and basically any device that is able to pick them up can also read them, if the information is not encrypted.

**Network Hardware:**

What does it take for a computer to connect to a network? Think of a desktop computer where you have a port on the back that you can plug your network cable into. Inside this port, there is a special electronic device called the **Network Interface Card (NIC).** NIC is responsible for both transmitting and receiving signals. Every NIC has a unique address that's assigned to them by their manufacturer (it's hardcoded and it cannot be changed), which is called **MAC address (media access control address).** Any electronic device that can connect to a network has to have its own network interface card with a unique address, because devices in a network identify each other with this unique MAC address.

Now think of your smartphone. It can connect to a WiFi network without you connecting a cable to it. Your phone also has a special NIC (remember, in order for a device to have the ability to connect to a network, it has to have a network interface card.). This special NIC uses radio signals to receive and transmit data. The range of a wireless NIC is somewhere around 20-50 meters and as Wi-Fi is basically radio waves, the range also depends on the obstacles along the way.

**Ethernet:**

Ethernet is a system that enables the data exchange between devices that are connected to the same network. Almost every computer network uses ethernet.

Data is broken up and packaged into small pieces by the sending computer, which are called **frames.** Think of it like this, you bought a huge cupboard from IKEA and was too big to carry assembled and in one piece, so IKEA decided to sell it disassembled. They stuck the parts of the cupboard into smaller packages that can be carried by one or two people. Each package in this case is a frame and it consists of some wooden planks and nails. In data transmission, each frame consists of binary code (bits, 1's and 0's. Voltage on a cable is 1, the absence of voltage on a cable is 0). The network interface card of the sending computer is responsible for generating the rapid pulses of electricity that make up the data in each frame.

There are 2 very important pieces of information that a frame has to contain, one is the source MAC address, and the second one is the destination MAC address. Let's go back to the cupboard analogy. You want that cupboard in your house, right? So you have to give them you unique home address. And if you want to recognise the packages, you have to know where the packages are coming from as well (Well I suppose you can recognize them, but the address sure helps.). And if a package opens on the way and items inside arrive one by one, you might lose them, or even might not know where they come from or what they belong to until you start reassambling the cupboard. So carrying these packages intact is also a must.

When a frame that contains data is being sent, it is actually being broadcasted in the whole network, so this means everyone can actually see the frame, but only the intended recipient with the right MAC address chooses not to ignore it. Also, even if they stole the frames, the ethernet frames are encrypted, so they will most probably not be able to read it. Each frame must be transmitted without interruption, so only one computer at a time can transmit a frame on the same cable. If more than one computer attempts to transmit a frame at the same time, it is called **data collision** and the transmission attempt of every frame that was sent in that time period will fail. Each computer that is attempting to send data will wait for a random time (fragments of a second!) until it can try to transmit again.

In a Wi-Fi network, as all data has to flow through a Wireless Access Point, the sender device has to make his intention known by the WAP first. If nothing else is being transmitted at that time, the WAP will give out a signal to the transmitting device saying that it can continue. Every intention goes through the WAP and WAP coordinates and direct frames with an order, avoiding collisions.

How about your neighbours Wi-Fi? Why does or doesn't it interfere with yours?

Normally each WAP operates within its own radio frequency range. When it sets itselfs up, it will choose a channel that seems quite enough at the time, and your wireless devices will tune into this frequency, like listening to a radio station. A modern WAP can choose in between 23 possible non-overlapping channels. So if the neighbor's WiFi is operating in a different frequency range, there will be no overlaps so there will be no collisions.

**The TCP/IP Protocol Stack and Routers**

**DNS (Domain Name System)**
