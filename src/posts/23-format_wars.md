---
title: "The Format Wars"
date: "2020-11-09"
tags: ["Web Development"]
summary: "In this article, I briefly explain what SVG is and how we use it for drawing animations on our webpages."
---

This is the time and place where we talk about image file formats, yay! This is going to be a long one, because there are so many of them.

One wonders - why the heck there are so many of them? This is what I exactly thought after a very long night doing live cell imaging, while trying to export my data. Would I like to use TIFF, PNG, or JPG? I have always chosen TIFF because that was what we used in publications as it and high resolution without giving much thought to it. Then I made the mistake of writing **image file formats** to google. There is so much more. And I learned that each of them are useful for some purpose. Kinda amazing.

The first thing to know: everything inside the computer are composed of tiny bits. A pattern of bits only mean something if we assign a meaning to them. The same bits might indicate other things in different locations. Image formats exist because they encode the image data using different techniques and different amount of bits. And as a user, you have the responsibility of choosing the one that serves your purpose the best.

To understand the image formats better, we are first going to understand how to represent an image in bits, then how to represent the color. After that, we are going to talk about something called **compression** which is a trade in itself, you trade the file size with image quality. After that we are going to look at different image file formats, and what they are useful for.

#### Representing an image with bits

**A bitmap** is the easiest way to represent image data. A bitmap image is also known as a **[raster image](https://en.wikipedia.org/wiki/Raster_graphics)**. To represent image data, we divide it into small squares and call each square a **[pixel](https://en.wikipedia.org/wiki/Pixel).** A pixel is the smallest addressable unit in image representation. Simply put, a bitmap is an array of bits that represent the color of these tiny pixels.

Think of a monochrome picture. Each pixel is going to be either black or white, and nothing else. In this scenerio, we can enconde white with 0 and black with 1, and this was all the early computers could manage. The pixels were also quite large, so you could have images such as this:

![A simple bitmap image with just two colors](../images/blog/format_wars/bitmap.png)

###### A simple bitmap image with just two colors, black and white. Image Credit: https://www.bbc.co.uk/bitesize/guides/zpfdwmn/revision/2

The first letters were also designed like this:

![Bitmap of letter A](../images/blog/format_wars/a.png)

###### Bitmap representation of letter "a". Image Credit: https://en.proft.me/2017/08/2/how-work-bitmap-android/

The number of pixels per square inch is a measure of the pixel density, which is commonly referred as **[resolution](https://en.wikipedia.org/wiki/Image_resolution)**. Resolution is usually given as dots per inch (dpi). And as you can guess, if you make pixels smaller, you can fit more of them to the same screen area, which means you will have a higher density of pixels and a better image resolution.

![The illustration of same image in different resolutions](../images/blog/format_wars/Resolution_illustration.png)

###### The same image in different resolutions. Image Credit: Public Domain, https://commons.wikimedia.org/w/index.php?curid=1078380

Let's calculate the space we need to keep for an image like this. If you have a monochrome image that only consists of black and white pixels, and if it has 100 pixels in a single column and 100 pixels in a row, it means in total you have an image that is composed of 10000 pixels (and the resolution of the image would be 100x100). Each pixel is either black or white, so they can be encoded with a single bit (0 or 1), so it means your image will be encoded in 10000 bits in total. 1 byte consists of 8 bits, so 10000 bits is 1.250 bytes (10000/8). 1 kilobyte consists of 1024 bytes, so this image will take up 1.22 KB's of space (1250/1024).

Super, duper! Now that we have done black and white, let's do a colored one.

To represent colors, you need more than 1 bit per pixel. Let's say you assigned 8 bits (or 1 byte) to encode the color of a pixel. This actually means you get to encode 256 different colors (2⁸), but this image will take 8 times more space than it took for a black and white only image.

Early computers used 1 or 8 bit colors. Later came 16-bit color which was known as [high color](https://en.wikipedia.org/wiki/High_color) and more recently 24 bit color, which is also called [true color](<https://en.wikipedia.org/wiki/Color_depth#True_color_(24-bit)>).

If you assign 24 bits (3 bytes) to encode a single pixel, you can represent 16.777,216 different colors (2²⁴), and this is a bit of an overkill as the average human eye can only distinguish around 10.000,000 colors. If the resolution of your image is 960 x 640 (w x h), it means you have 614.400 pixels in total (960x640). Each pixel requires 3 bytes, so that's 1.843,200 bytes of memory. That's 1800 KB (1.843,200/1024). As 1 megabyte is equal to 1024 kilobytes, it's also equal to 1.76 MBs (1800/1024).

There is also a 32 bit color system. 24 bits of it are reserved for the description of the color itself. The remaining 8 bits are used to control transparency.

Now, what determines the quality of an image? The quality of a raw, uncompressed bitmap depends on 2 things:

1. [The resolution](https://en.wikipedia.org/wiki/Image_resolution) (a.k.a., pixel density): The smaller cubes you divide the image into, the better the quality will be.
2. [The color depth](https://en.wikipedia.org/wiki/Color_depth) (the number of bits that was used to encode the color of each pixel): The higher the color depth, the better the quality.

And no need to say this, but let's say it regardless. The better the quality, the more memory it will require! (The mighty quality-memory balance!)

---

**Note:** When you take a photograph with a digital camera, it will first create a rectangular array of pixels. Some extra information called **metadata** is also added to the file. Metadata includes additional important information about the image, such as the number of pixels in each row, the number of rows, and the color depth. In addition to this it will also keep the shutter speed, the focal depth, details about the make and model of the camera, etc. Image processing software can also add additional metadata to the image file, such as captions or titles. Metadata added to the image when it is saved will make the file size slightly bigger than expected.

---

![Exif metadata of an image](../images/blog/format_wars/metadata.png)

###### [Exif](https://en.wikipedia.org/wiki/Exif) metadata of an image. Image Credit: Praveenp, CC BY-SA 3.0 <https://creativecommons.org/licenses/by-sa/3.0>, via Wikimedia Commons

#### True Color vs Indexed Color Bitmaps

If you keep the color data of each and every pixel as a number that encodes its color, it's known as a **true color** image.

A bitmap can also be saved by using something called **indexed color**, and it is generally more efficient when compared to true color. In this method, a color table known as a **palette** is included in the image file in the metadata section. The palette only contains the colors that are used in the specific image. Each color in this palette has its own index number, and the information about each pixel is simply a reference to one of the colors in this palette. If this palette has 16 colors (which would be a very small palette, but why not), it means maximum of 4 bits is required to encode the color of each pixel. Palette does take up some space in the metadata, but with larger images and higher resolutions, the size of the palette itself becomes insignificant. By using indexed color, you can get very good quality images and use a much smaller memory space at the same time. If you choose to save your image as indexed color bitmap, the image editing application you use will generate an optimal palette for you from colors that are used in the image. This palette is called the **adaptive palette**.

Another thing to mention is the web-safe colors. Web-safe colors are colors that would look the same in any browser on most computer screens. Although 8 bits allow to encode 256 different colors, only 216 of them are web-safe. The web-safe pallete allows consistency, but if your image has more than 216 colors (which is most probably the case), then most of your color data will be lost on the saved file. The quality of the image saved with a web-safe palette will be worse in this case. In attempt to maintain the quality of the image, the image editing software can apply a process called **dithering**, which is also referred to as **color quatization**. Dithering works by placing available colors next to each other, an attempt to create the illusion of a color that does not exist in the palette. If the pixels are small enough, human eye can be deceived, but dithered images tend to have a speckled/grainy appearance when zoomed in.

#### RGB and CMYK Color Spaces and How Screens Work

Mathematical representation of a set of colors is called a **color space**. Color spaces differ depending on the medium that is being used. For example, physical pigments (such as crayons and colored pencils) and light (rainbows!) work differently, therefore they have their own color spaces.

Let's start with light.

We have all seen rainbows, and I haven't met a person who doesn't like a good rainbow (). The [rainbow](https://en.wikipedia.org/wiki/Rainbow) we all love is essentially white light refracted into the colours it consists of by the water droplets in the air. We can also see the same colors by refracting the same white light using a prism, just like Isaac Newton did in 1660s.

![White light being dispersed by a prism.](../images/blog/format_wars/prism.png)

###### In a dispersive prism, material dispersion (a wavelength-dependent refractive index) causes different colors to refract at different angles as all colors have a different wavelength, splitting white light into a spectrum. Image Credit: CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=57730

Using light, you can make any color (including white) by mixing different amount of three main colors, red, green and blue. For example, RGB (short for Red, Green and Blue) color space looks like this:

![RGB Color Space](../images/blog/format_wars/rgb_color_space.png)

###### The representation of the RGB Color Space. Each color defines one axis (magenta, blue, cyan, red, yellow, green, black and white), and any possible RGB color falls somewhere inside this sweet cube. Image Credit: By SharkD - Own work. Download source code., CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=9803283

The RGB color model is an "additive model", which means green, red and blue light are added on top of each other to create various colors.

This is quite out of our comfort zone, as we first experience colors through crayons when we are children, but light does the exact opposite thing. But even as children, we know this: the absence of light is black. To see anything, we need light. But as children, what we don't know is how we see things in color. It is quite simple. The sun radiates white light. Almost everything around us has pigments, and pigments absorb some light, and reflect the ones which cannot be absorbed. Certain pigments absorb certain wavelengths, so when sunlight hits them they absorb some of it, and reflect other waves that they can't absorb. The reflected waves enter human eye from the pupil and reach retina, which has receptors that make us perceive light and color. Here, things get a little bit tricky. As each of us have different amount of receptors, it is safe to say we experience the colors differently, but most of us are able to say if something is blue or green. ([Some of us can supposedly see more of the spectrum, which is a debated subject](https://www.imbs.uci.edu/colorcoglab/4-9.pdf), and [some of us can see less](https://en.wikipedia.org/wiki/Color_blindness). I'll skip this subject to keep the article short.)

![RGB Illumination](../images/blog/format_wars/RGB_illumination.jpg)

###### Red, green and blue lights showing secondary colours. Image Credit: en:User:Bb3cxv, CC BY-SA 3.0 <http://creativecommons.org/licenses/by-sa/3.0/>, via Wikimedia Commons

So if you think something is yellow, it actually means it has pigments that absorb blue light and reflect green and red. The combination of green and red creates yellow. If you think something is magenta, it actually means that it has pigments that absorb green and reflect red and blue, which we percieve as magenta. The leaves are green, because they have pigments that reflect green and absorb blue and red.

The screens also rely on this principle, because they are made of tiny, physical pixels. When magnified, each screen pixel can be seen to consist of three tiny lights, one red, one green and one blue. These tiny lights are controlled independently for each screen pixel to create the illusion of a single color. In a 24 bit RGB bitmap, the amount of red, blue and green in each pixel are encoded separately (8 bits for each, so each color can have a value between 0 and 255). Each of these 3 colors is known as a **channel**. 8 bits per channel means the color of each pixel is encoded in 24 bits. So you can think of an RGB image as 3 separate bitmaps combined together, each bitmap representing the color values for a single channel. In a 24 bit bitmap image, a pixel can have up to 16.7 million colors (2⁸ x 2⁸ x 2⁸).

![Screen pixel geometry](../images/blog/format_wars/pixel_geometry.jpg)

###### Pixel geometry can change among different types of screens, but the logic stays the same. This image shows different pixel geometries. Clockwise from top left: a standard definition CRT television. "Palsonic" brand. (this image is significantly reduced compared to others) a CRT computer monitor. Diamond View 19" (18" viewable). Model 1995SL. a laptop LCD: Lenovo X61, 12" 1024×768 the OLPC XO-1 LCD display. (Test-B2)

###### Image Credit: Pengo, CC BY-SA 3.0 <https://creativecommons.org/licenses/by-sa/3.0>, via Wikimedia Commons

With crayons, you start with the absance of pigments, which is white (or transparent, if you are using a transparent acrylic board, for example). An example of this type of color model is the CMYK Color model, which is primarily used in printing. CMYK refers to theses four pigments: cyan, magenta, yellow, and key (which is black). As you mix these cyan, magenta and yellow, you get different colors, and if you mix all of them, you end up with black. Additional black was added for deeper black tones. This is called the "subtractive model", because each ink that is used will substract green, red or blue from the white light. If red is absorbed by the used pigment, the reflecting colors will be perceived as cyan. If the green is absorbed by the pigment, the reflected lightwaves will be percieved as magenta. If blue is absorbed, the remaining reflecting light will be percieved as yellow. Black pigments absorbs every wavelengths of light and nothing will be reflected, therefore it will be percieved as the absance of light, which is black.

![CMYK Color Space](../images/blog/format_wars/cmyk.jpg)

###### CMYK Color Space. Image Credit: SharkD, CC0, via Wikimedia Commons

There are also some other tricks that are used in printing, such as **[halftoning](https://en.wikipedia.org/wiki/Halftone)**. In halftoning, tiny dots of primary colors are printed in small patterns, and they are perceived as solid colors by human eyes. Without halftoning, only 7 colors can be created from the pigments (red, blue, green, cyan, yellow, magenta, black), but with halftoning, a whole range of colors can be produced.

![Halftoning example](../images/blog/format_wars/halftoning.png)

###### The cerulean color that appears in the left side image is actually created by a pattern of cyan, magenta, yellow and black, that can be seen on the right side image, which is the same image under a microscope. Image Credit: Psiĥedelisto, CC0, via Wikimedia Commons

#### Data Compression

Resaving a 24 bit RGB true color image as an indexed bitmap will usually make the image file smaller. This is one method you can use to effectively compress a bitmap image file. Resaving a bitmap with fewer colors is classifies as lossy compression (because the image will lose some of its quality in the process), and this loss is irreversible.

#### Image Formats and when to use which

#### Resources:

1. Wikipedia
2.
