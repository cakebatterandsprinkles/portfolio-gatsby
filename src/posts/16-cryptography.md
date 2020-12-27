---
title: "Cryptography"
date: "2020-10-13"
tags: ["Computer Science"]
summary: "In this article, I briefly talk about the history of cryptography, symmetric and asymmetric key cryptography techniques and explain the logic behind digital signatures and digital certificates."
---

**[Cryptography](https://en.wikipedia.org/wiki/Cryptography)** is the art of taking a text and scrambling it in a very precise way, so only the people who know precisely how you scrambled it can read the original text. Cryptography is very old and has been used for centuries to protect sensitive information from unwelcome eyes. It has been used by merchants, by emperors, and today, normal people like us, even if we don't notice it. With the invention of the computer, the internet, and the world wide web, we started keeping personal information on our personal computers and we send data to each other occasionally. But how do we keep our information safe? That's where cryptography comes into play.

#### Symmetric key cryptography

In symmetric key cryptography, you decrypt a message by directly doing the reverse of the actions during the encryption process.

One of the first encryptions of humanity happened in the Victorian era, by the market traders who didn't want their customers to understand when they were discussing business. It was a language called **[Back Slang](https://en.wikipedia.org/wiki/Back_slang)**, and it operated by taking a word and reversing its letters.

If you encode each letter with the next letter in the alphabet (a becomes b, b becomes c, c becomes d, and so on), this will be called **[substitution cipher](https://en.wikipedia.org/wiki/Substitution_cipher)** (as you are substituting the real letter with another one). It doesn't have to be the next letter in the alphabet, it can be 3 letters next to the original letter. The specific number to indicate the movement of the substitution letter is called the **encryption key.** The original text that is being encrypted is called the **plain text** and the encoded message is called the **ciphertext.** Converting plain text into ciphertext is called **encryption** and the reverse is called **decryption.**

One simple way of encrypting a text with the substitution cipher is using a cipher wheel, and it looks like this:

![Cipher Wheel](../images/blog/cryptography/caesarcypherwheel.jpg)

###### Image Credit: https://bobmckay.com/i-t-support-networking/security/caesar-cipher-wheel-printable-pdf/

The outer letters represent the ciphertext, and the inner letters represent the plain text. If the encryption key is 2, you can rotate the inner wheel 2 places clockwise, then the substitutions for the real letters can be read directly from the outer wheel. As the Roman Emperor Julius Caesar used this method to send secret messages to his generals in the battlefield hundreds of years ago, this method of encrypting was called **[the Caesar cipher](https://en.wikipedia.org/wiki/Caesar_cipher).**

Is there a way to decipher a message that uses a substitution cipher technique without knowing the encryption key? Yes, you could try 3 things. The first one is the brute-force approach, you mainly start from one and increase the number until the deciphered text makes sense. The second approach is to look at the one-letter and two-letter words and try to get the encryption key from those words (as there aren't many words in the English language that has one and two letters). The third approach is to do a frequency analysis of the ciphertext: the letter 'e' is the most used letter in the English alphabet followed by 't', then 'a', then 'o'. This method is less reliable, especially in the short texts as it depends on the assumptions.

Another geometric substitution cipher, named as **[the pigpen cipher](https://en.wikipedia.org/wiki/Pigpen_cipher)** substituted letters with symbols.

![The pigpen cipher](../images/blog/cryptography/Pigpen_cipher_key.svg.png)

Using the Pigpen cipher the message "X MARKS THE SPOT" is rendered in ciphertext as:

![The pigpen cipher example](../images/blog/cryptography/2880px-A-pigpen-message.svg.png)

Another substitution technique that uses a word instead of a number as an encryption key is **[the keyword cipher](https://en.wikipedia.org/wiki/Vigen%C3%A8re_cipher),** also known as the Vigenère cipher. This is harder to decrypt if you have no encryption key. The Ceaser cipher can only have numbers 1 to 25 as an encryption key, which means there are only 25 possible keys. But in the keyword cipher, the encryption key can be any word.

Write the keyword under the plain text, as many times as you need until there is a keyword letter for each letter of the plain text. Then write down the position of the key letters in the alphabet.

```
M  E  E  T  M  E  A  T  T  H  R  E  E
C  A  T  C  A  T  C  A  T  C  A  T  C
3  1  20 3  1  20 3  1  20 3  1  30 3

// Now, you use the Caesar cipher, but this time with a key that isn't the same for each letter.

P  F  Y  W  N  Y  D  U  N  K  S  Y  H
```

The keyword in this method is also known as a **symmetric key** because the encryption process is the same as the decryption process. You can also do what is called a double transformation to make the decryption process harder, which is encrypting the encrypted text with a second keyword.

Not all symmetric key cryptography methods use substitution. Some methods of encryption simply use rearranging letters in the plain text message. **[The Rail Fence Cipher](https://en.wikipedia.org/wiki/Rail_fence_cipher)** uses rearranging.

For example, let's encrypt this text using the rail fence cipher: 'BIRDS BORN IN CAGES THINK FLYING IS AN ILLNESS'

```
Plain text: BIRDS BORN IN CAGES THINK FLYING IS AN ILLNESS

Exclude the spaces and write the plain text in 2 lines, making a zigzag, like this:

B R S O N N A E T I K L I G S N L N S
 I D B R I C G S H N F Y N I A I L E S

// To compose the ciphertext, add the first line to the second one:
BRSONNAETIKLIGSNLNSIDBRICGSHNFYNIAILES

// When decrypting, count the letters in the ciphertext.
// In the example, we have 38. This means we are going to need a grid with 2 rows and 38 columns. Arrange the first half by skipping one square at a time, and rest of it to the second column, in a zigzag pattern.
```

If you want to make it harder to decipher, you can use the rail fence cipher with different keys. The example used the encryption key of 2 (plain text was encrypted using 2 rows), but you can always use more rows.

Many modern ciphers use **[the XOR cipher](https://en.wikipedia.org/wiki/XOR_cipher).** (XOR: Exclusive OR)

Any key you press on your keyboard has an ASCII code that is sent to the processor of your computer. The ASCII code is translated to binary to be processed.

Let's encrypt the lowercase z using this method.

ASCII code of z is 122.
ASCII code in binary (8 bits): 01111010
The encryption key (Also has to be 8 bits, because the number we are trying to encode is 8 bits, ut can be any combination of 1's and 0's): 01010101
Note: Anybody who wants to decrypt the ciphertext has to know this key.

Each binary unit of the plain text will be XORed with the complementing binary unit of the key to form the encrypted binary code. Think of XOR as an arithmetic operation. It will return 0 if both of inputs are the same (both 0 or both 1), otherwise, it will return 1.)

| Description  | Binary          |
| ------------ | --------------- |
| Plain Text:  | 0 1 1 1 1 0 1 0 |
| Key(secret): | 0 1 0 1 0 1 0 1 |
| After XOR:   | 0 0 1 0 1 1 1 1 |

The encrypted letter z is: 00101111

When decrypting, put the ciphertext and the encryption key and perform XOR operation for every bit. (You do the same thing when encrypting and decrypting and that's why this method is also symmetrical and also very fast. So your data is secure and you can encrypt and decrypt it quickly.)

#### Asymmetric key cryptography

To use symmetric key cryptography, both sides have to know three things, the ciphertext, the encryption key (secret), and the algorithm used for encryption. But what if two sides cannot communicate with each other the secret key and the algorithm privately? Then the symmetric cryptography would not be safe enough to use.

Ron Rivest, Adi Shamir, and Leonard Adleman suggested using two separate keys to make it safer, one to encrypt the data and another one to decrypt it. The decryption key would be unique to that specific encryption key. These are known as asymmetric keys. The three computer scientists who suggested this system won the Turing award for this work. They also gave their names to this cryptography system, asymmetric key cryptography is also known as the **[RSA algorithm](<https://en.wikipedia.org/wiki/RSA_(cryptosystem)>).**

So how does this work?

A → B

One side (A) decides to send the other side (B) a secret message and makes this intention known by (B). (The first communication is A to B. This could be sent as plain text, as this is simply saying 'I want to send a secret message to you.').

A ← B

B uses a program to generate two keys, an encryption key, and a decryption key. B sends A a copy of the encryption key but doesn't send the decryption key. Anyone can have a copy of any encryption key, as they are public knowledge.

A → B

A uses his copy of the encryption key to encrypt his message and he sends it to B. (It's not important if anybody can reach the ciphertext at this point, as only B has the unique decryption key that is not sent anywhere.)

If B wants to send a secret message as well, she can ask A for an encryption key, and the same circle will happen in the reverse direction. Therefore each person in the communication line will have their own encryption keys, and as the decryption keys never leave their own devices, it is safe and they can communicate privately.

A pair of asymmetric keys are often called **public key (encryption key)** and **private key (decryption key).**

RSA is not good for encrypting long messages, but using this, both sides can agree on a secret key and use symmetric key cryptography for the long encryptions.

Asymmetric key cryptography is the heart of secure internet communication. When you are visiting an online shop or an online banking system, asymmetric key cryptography is going on behind the scenes. Your web browser takes care of encrypting and decrypting messages. You can view the public key your browser is using when you connect to a secure website by clicking to the lock icon in front of the URL of the site.

(Lock Icon > Certificate > Details > Public Key Info > Public Key)

### Digital Signatures and Digital Certificates

So far so good! We can send data and we can be sure that only the person that created that encryption key has the decryption key (because it never left their computer), so only they can read what we send. But how can we be sure that the data we receive is not altered by somebody on the way? This is where the digital signatures topic comes in.

Digital signatures rely on [asymmetric key cryptography](https://en.wikipedia.org/wiki/Public-key_cryptography) method.

When 2 keys are generated by an electronic device for asymmetric key cryptography, it doesn't matter which one of the keys is made public (as long as you don't change your mind).

Not so long ago, only handwritten signatures were legally binding. But now, it is possible to put a digital signature on a document. When sending a legally binding piece of document digitally, you want to make sure that that piece of paper came from the source you think it came from, and the content is not altered on the way. So before the document is sent, a software on the sender's computer prepares the digital signature and creates something called a hash of the document. Most computers do this hashing (encryption) by using an algorithm called **[SHA-256](https://en.wikipedia.org/wiki/SHA-2)**, which was invented by the USA's National Security Agency, also known as the NSA. It takes a copy of the text and transforms it using SHA-256. The result of this transformation is called a **hash value** (also referred to as "a digest of the document"). If a single character in the original document is changed by a third party, the result will be a completely new and different hash value. This part of the signing process cannot be called an encryption process. For something to be counted as encrypted, there has to be a possibility of decrypting it. The transformations done by SHA-256 are nearly impossible to reverse. Like baking a cake, or cooking a meal, or mixing a paint hashing is a one-way process. But if you take the original document again and transform it with SHA-256, you would get the exact same hash. So it is pretty much dependable.

Let's see the whole process:

**A → B**

A wants to send B a document. Before A sends the document a hash value is created from the content of the document and then the hash is encrypted with A's private key. This encrypted hash is embedded in the original document. This is this document's digital signature. Wherever A is sending this document to, it is sending a copy of the signed version. A can also send its public key with the signed document, or put the public key somewhere where it can be fetched so that the person who is receiving the document can decrypt it.

**B**

B receives the document and decrypts the hash value that was sent to it, and from the document, it creates another hash value using the SHA-256 algorithm and compares these values. If they are the same, it can be sure that the document was not tampered with on its way there.

This way the signed document itself is not protected, anybody can reach it and read it if they know the sender's public key. (And it is public information, so they can know.) But using this digital signature, B can be sure of two things:

1. The document was or was not tampered with on the way

2. It was sent by that person or not

Now, a person with bad intentions might be mimicking A, and they also might create a public and private key from their computer, and send documents around saying that they are A. This is where the **[digital certificates](https://en.wikipedia.org/wiki/Qualified_digital_certificate)** come into play.

Paying some amount of money, you can apply for a digital certificate to a well-known and well-trusted organization called a **[certification authorithy](https://en.wikipedia.org/wiki/Certificate_authority)** (like Verisign, Globalsign, Symantec, etc.). You create an asymmetric pair of keys and send the public key to the certification authority, along with some other details that should prove that you are whomever you say you are. The certification authority checks the given information and if they approve of it, they send you a digital certificate that contains details about you and information about the certification authority, also an expiration date. Your public key is bound to this digital certificate. You still have the corresponding private key which never left your device. So now whenever you are sending a signed document, you can also send this certificate to verify you are really you. The whole system is built upon the certification authority vouching for you. The certification authority has its own certificate provided by a higher-level authority.

**But are electronically signed contracts and documents legally binding?**

EU passed the **[EU Directive for Electronic Signatures](https://en.wikipedia.org/wiki/Electronic_Signatures_Directive)** in 1999, and United States passed the **[Electronic Signatures in Global and National Commerce Act (ESIGN)](https://en.wikipedia.org/wiki/Electronic_Signatures_in_Global_and_National_Commerce_Act)** in 2000. Both acts made electronically signed contracts and documents legally binding. In countries such as Canada, South Africa, Algeria, Turkey, India, Brazil, Indonesia, Mexico, Saudi Arabia, Uruguay, Switzerland, Chile electronic signatures also have legal significance.

**Resources:**

1. Wikipedia- [Cryptography](https://en.wikipedia.org/wiki/Cryptography), [Back Slang](https://en.wikipedia.org/wiki/Back_slang), [Substitution cypher](https://en.wikipedia.org/wiki/Substitution_cipher), [The Caesar cipher](https://en.wikipedia.org/wiki/Caesar_cipher), [The Pigpen cipher](https://en.wikipedia.org/wiki/Pigpen_cipher), [The keyword cipher](https://en.wikipedia.org/wiki/Vigen%C3%A8re_cipher), [The Rail Fence Cipher](https://en.wikipedia.org/wiki/Rail_fence_cipher), [The XOR cipher](https://en.wikipedia.org/wiki/XOR_cipher), [RSA algorithm](<https://en.wikipedia.org/wiki/RSA_(cryptosystem)>), [Public key cryptography](https://en.wikipedia.org/wiki/Public-key_cryptography), [SHA](https://en.wikipedia.org/wiki/SHA-2), [digital certificates](https://en.wikipedia.org/wiki/Qualified_digital_certificate), [certification authorithy](https://en.wikipedia.org/wiki/Certificate_authority), [EU Directive for Electronic Signatures](https://en.wikipedia.org/wiki/Electronic_Signatures_Directive), [Electronic Signatures in Global and National Commerce Act (ESIGN)](https://en.wikipedia.org/wiki/Electronic_Signatures_in_Global_and_National_Commerce_Act)
2. https://us-cert.cisa.gov/ncas/tips/ST04-018
3. https://www.docusign.com/how-it-works/electronic-signature/digital-signature/digital-signature-faq
4. "Computer Science" channel by [Kevin Drumm](https://www.youtube.com/c/KevinDrumm/videos)
