---
title: "The lovely Unicode"
date: "08-31-2020"
tags: ["Computer Science", "History"]
summary: "This article explains ASCII, Unicode, UTF-8 and a little bit of their history."
---

**How ASCII was born**

Every data inside a computer has to be kept as 0's and 1's. And when I say everything, it means everything, from the numbers, symbols and letters to the images and sounds. Everything inside a computer is 1's and 0's.

When the digital computer was first invented, as the computer scientists inventing these computers mainly spoke english, they were only interested in representing the english letters, symbols and numbers. They used 8 bits to represent all these characters (earlier computers worked by grouping 8 bits, which is also known as a **byte**), which could hold 256 possible combinations of 1's and 0's, and each of these combinations could be assigned to a unique character. This first system to represent characters is called **ASCII (American Standard Code for Information Interchange).** ASCII only used the first 128 of these possible combinations and there were 128 bits left, and this provided space for other letters or symbols from European languages.

The modifiable 128 bits was called **the extended ASCII character set.** This became a problem, as different organizations such as HP, Adobe, Apple, Microsoft etc, were all using this extended character set to do their own thing. The same binary code meant different things in different platforms, and sharing data in between these platforms became a problem.

**How Unicode was born**

When the world wide web came along, computers needed to support all these conflicting character sets from different platforms. And if they didn't, the data could be corrupted when it was shared. Of course, nobody wanted that.

In 1991, the **Unicode Consortium** published the **Unicode standard.** Members of this consortium includes many major organizations like Apple, Microsoft, Adobe, Google, IBM, Netflix, Facebook, etc. The idea behind Unicode was to create a single, unified, standard character set in which every possible character was represented by unique number, no matter what platform/device/application was using it. Unicode also had to have backwards compatibility with ASCII (because everything until this point used ASCII), and it also had to be space efficient. A capital letter K is represented in 8 bits in ASCII, so if you describe it in 32 bits, the letter K would take up 4 times more space in memory than it previously did (even if you kept the old ASCII binary code, it would have a lot of unnecessary 0's at the beginning of it), it would take 4 times more space when saved to disk, and 4 times longer to move from one place to another. Also, many of the existing computer systems recognized a string of 8 bits as a signal that there is no more data on the way. So if more bytes were used to represent the symbols, then these transmission systems would get confused when interpreting the streams of characters. This was why the **Unicode Transformation Format (UTF-8)** was created. Instead of encoding each character with the same number of bits, UTF-8 allowed the usage of 1,2,3 or 4 bytes depending on the character. Old style ASCII characters still use the same set of 8 bits (backwards compatible). The binary codes that belong to these characters start with a 0, and this is an indicator to the software that is processing it, it means this is a character with only 8 bits. By convention a Unicode value is written with 4 hexadecimal digits with a capital U and a plus sign at the start. (A is U+0041) The characters in Arabic Hebrew and most European languages are encoded with 2 bytes that begins with the control bits 110, a flag that says the character is encoded with 2 bytes. The second byte of this 2 byte character begins with the control bits 10, indicating that this byte is a continuation and it's encoding for the same character.

3 byte characters include characters for almost all modern languages, which is called the Basic Multilingual Plane (BMP). Most of the assigned code points in the BMP are used to encode Chinese, Japanese, and Korean (CJK) characters. For a 3 byte charactes, the first byte begins with the control bits 1110, second one 10, third one 10. The place values for each byte don't include the control bits.

Unicode is universally supported by all operating systems, search engines, browsers, laptops, smartphones, and world wide web. It is great to have standards!
