import { StaticImage } from "gatsby-plugin-image"
import React from "react"

const sections = [
  { handle: "digital", title: "Digital" },
  { handle: "clay", title: "Clay" },
  { handle: "ink", title: "Ink" },
  { handle: "linocut", title: "Linocut" },
  { handle: "intaglio", title: "Intaglio" },
]

const maxImageWidth = 800

const inkWork = [
  {
    name: "Bird",
    year: "2020",
    medium: "Sumi-e ink",
    image: (
      <StaticImage
        width={maxImageWidth}
        src="../images/gallery/ink/bird.png"
        alt="bird hanging on a tree branch"
      />
    ),
  },
  {
    name: "Butterflies",
    year: "2020",
    medium: "Sumi-e ink",
    image: (
      <StaticImage
        width={maxImageWidth}
        src="../images/gallery/ink/butterflies.png"
        alt="butterflies why not"
      />
    ),
  },
]

const digitalWork = [
  {
    name: "Looking over your shoulder",
    year: "2021",
    medium: "Digital art made by using Procreate.",
    image: (
      <StaticImage
        width={maxImageWidth}
        src="../images/gallery/digital_art/looking_over_your_shoulder.jpg"
        alt="digital illustration of a cat in a flower field, looking over a human's shoulder"
      />
    ),
  },
  {
    name: "Cottonflower",
    year: "2021",
    medium: "Digital art made by using Procreate.",
    image: (
      <StaticImage
        width={maxImageWidth}
        src="../images/gallery/digital_art/cottonflower.jpg"
        alt="digital illustration of a cottonflower and little monsters that inhabit the island it's in"
      />
    ),
  },
  {
    name: "Calistoga",
    year: "2021",
    medium: "Digital art made by using Procreate.",
    image: (
      <StaticImage
        width={maxImageWidth}
        src="../images/gallery/digital_art/astronaut.jpg"
        alt="digital illustration of an astronaut reading a book under traffic lights"
      />
    ),
  },
  {
    name: "Your own little part of the world",
    year: "2021",
    medium: "Digital art made by using Procreate.",
    image: (
      <StaticImage
        width={maxImageWidth}
        src="../images/gallery/digital_art/bonsai.jpg"
        alt="digital illustration of little monsters hanging around a bonsai tree"
      />
    ),
  },
  {
    name: "Surprised",
    year: "2021",
    medium: "Digital art made by using Procreate. You can see the artist's obvious efforts to not draw hands or feet (or hair, for that matter).",
    image: (
      <StaticImage
        width={maxImageWidth}
        src="../images/gallery/digital_art/surprised.jpg"
        alt="digital illustration of a surprised tribal people with pink monsters"
      />
    ),
  },
  {
    name: "Home is wherever your heart sings",
    year: "2021",
    medium: "Digital art made by using Procreate.",
    image: (
      <StaticImage
        width={maxImageWidth}
        src="../images/gallery/digital_art/peace.jpg"
        alt="digital illustration of my dream home"
      />
    ),
  },
  {
    name: "彼はすごい",
    year: "2021",
    medium: "Digital art made by using Procreate.",
    image: (
      <StaticImage
        width={maxImageWidth}
        src="../images/gallery/digital_art/ari.jpg"
        alt="digital illustration of my husband"
      />
    ),
  },
  {
    name: "I eat rainbows",
    year: "2021",
    medium: "Digital art made by using Procreate.",
    image: (
      <StaticImage
        width={maxImageWidth}
        src="../images/gallery/digital_art/neko_rainbows.png"
        alt="digital illustration of a cat and two birds"
      />
    ),
  },
  {
    name: "Neko, hebi, tori",
    year: "2021",
    medium: "Digital art made by using Procreate.",
    image: (
      <StaticImage
        width={maxImageWidth}
        src="../images/gallery/digital_art/neko_hebi_tori.jpg"
        alt="digital illustration of a portrait of a cat with his best friends"
      />
    ),
  },
  {
    name: "Serene",
    year: "2020",
    medium: "Digital art made by using Procreate.",
    image: (
      <StaticImage
        width={maxImageWidth}
        src="../images/gallery/digital_art/image_0274.png"
        alt="digital illustration of power lines with weird colorful creatures"
      />
    ),
  },
  {
    name: "Just Choose",
    year: "2020",
    medium: "Digital art made by using Procreate.",
    image: (
      <StaticImage
        width={maxImageWidth}
        alt="digital illustration of a beach and road signs with weird creatures"
        src="../images/gallery/digital_art/image_0276.png"
      />
    ),
  },
  {
    name: "Mendokusai",
    year: "2020",
    medium: "Digital art made by using Procreate.",
    image: (
      <StaticImage
        width={maxImageWidth}
        src="../images/gallery/digital_art/Mendokusai.jpg"
        alt="digital illustration of an angry coconut and a parrotlet"
      />
    ),
  },
  {
    name: "Neuron Riot",
    year: "2020",
    medium: "Digital art made by using Procreate.",
    image: (
      <StaticImage
        width={maxImageWidth}
        src="../images/gallery/digital_art/IMG_0371.png"
        alt="digital illustration of neurons walking"
      />
    ),
  },
  {
    name: "This is fine",
    year: "2020",
    medium: "Digital art made by using Procreate.",
    image: (
      <StaticImage
        width={maxImageWidth}
        src="../images/main/img404.jpg"
        alt="digital illustration of a character surrounded by little versions of himself."
      />
    ),
  },
  {
    name: "Self Portrait",
    year: "2020",
    medium: "Digital art made by using Procreate.",
    image: (
      <StaticImage
        width={maxImageWidth}
        src="../images/gallery/digital_art/me_in_color.png"
        alt="digital illustration of myself in color"
      />
    ),
  },
  {
    name: "Social Distance",
    year: "2020",
    medium: "Digital art made by using Procreate.",
    image: (
      <StaticImage
        width={maxImageWidth}
        src="../images/gallery/digital_art/IMG_0277.png"
        alt="digital illustration of humanity in 2020 social distancing"
      />
    ),
  },
]

const clayWork = [
  {
    name: "Jack-o'-lantern",
    year: "2021",
    medium: "Cone 6 clay & glaze.",
    studio: "Crealde School of Art",
    image: (
      <StaticImage
        width={maxImageWidth}
        src="../images/gallery/clay/pumpkin.jpg"
        alt="Jack-o'-lantern made from clay"
      />
    ),
  },
  {
    name: "Calcifer",
    year: "2019",
    medium: "Cone 6 clay & underglaze.",
    studio: "Crealde School of Art",
    image: (
      <StaticImage
        width={maxImageWidth}
        src="../images/gallery/clay/calcifer.png"
        alt="Clay mask of Calcifer"
      />
    ),
  },
  {
    name: "Kitsune",
    year: "2019",
    medium: "Cone 6 clay & underglaze.",
    studio: "Crealde School of Art",
    image: (
      <StaticImage
        width={maxImageWidth}
        src="../images/gallery/clay/kitsune_yagmur.jpg"
        alt="Clay mask of kitsune"
      />
    ),
  },
  {
    name: "Kaonashi",
    year: "2019",
    medium: "Cone 6 clay & underglaze.",
    studio: "Crealde School of Art",
    image: (
      <StaticImage
        width={maxImageWidth}
        src="../images/gallery/clay/kaonashi_yagmur.jpg"
        alt="Clay mask of kaonashi"
      />
    ),
  },
  {
    name: "Wolf",
    year: "2019",
    medium: "Cone 10 clay & underglaze.",
    studio: "Crealde School of Art",
    image: (
      <StaticImage
        width={maxImageWidth}
        src="../images/gallery/clay/wolf_yagmur.png"
        alt="Clay wolf mask"
      />
    ),
  },
  {
    name: "Zelda Mask",
    year: "2019",
    medium: "Cone 6 clay & underglaze.",
    studio: "Crealde School of Art",
    image: (
      <StaticImage
        width={maxImageWidth}
        src="../images/gallery/clay/zeldamask_yagmur.png"
        alt="Clay zelda mask"
      />
    ),
  },
  {
    name: "Standing Tall",
    year: "2019",
    medium: "Cone 6 clay, underglaze & clear glaze.",
    studio: "Crealde School of Art",
    image: (
      <StaticImage
        width={maxImageWidth}
        src="../images/gallery/clay/standingtall_yagmur.jpg"
        alt="Small clay sculpture"
      />
    ),
  },
  {
    name: "Sandman and cardinal",
    year: "2019",
    medium: "Cone 10 clay & underglaze",
    studio: "Crealde School of Art",
    image: (
      <StaticImage
        width={maxImageWidth}
        src="../images/gallery/clay/snowman_yagmur.png"
        alt="Small clay sculpture"
      />
    ),
  },
  {
    name: "Kindred: Half lamb, half wolf",
    year: "2019",
    medium: "Cone 6 clay & underglaze.",
    studio: "Crealde School of Art",
    image: (
      <StaticImage
        width={maxImageWidth}
        src="../images/gallery/clay/kindred_yagmur.png"
        alt="Small clay sculpture of a Kindred mask"
      />
    ),
  },
  {
    name: "Happy Pupper",
    year: "2019",
    medium: "Cone 10 clay & underglaze",
    studio: "Crealde School of Art",
    image: (
      <StaticImage
        width={maxImageWidth}
        src="../images/gallery/clay/doggo_yagmur.png"
        alt="Small clay sculpture of a dog"
      />
    ),
  },
  {
    name: "Lion",
    year: "2019",
    medium: "Cone 6 clay & underglaze",
    studio: "Crealde School of Art",
    image: (
      <StaticImage
        width={maxImageWidth}
        src="../images/gallery/clay/lionmask_yagmur.png"
        alt="Clay lion mask"
      />
    ),
  },
  {
    name: "Warrior",
    year: "2019",
    medium: "Cone 6 clay & underglaze",
    studio: "Crealde School of Art",
    image: (
      <StaticImage
        width={maxImageWidth}
        src="../images/gallery/clay/warrior_yagmur.png"
        alt="Small sculpture of a tiny tribal warrior creature"
      />
    ),
  },
  {
    name: "Pagoda",
    year: "2019",
    medium: "Cone 6 clay & underglaze",
    studio: "Crealde School of Art",
    image: (
      <StaticImage
        width={maxImageWidth}
        src="../images/gallery/clay/pagoda_yagmur.png"
        alt="A red and black pagoda with two stores"
      />
    ),
  },
  {
    name: "Fragile",
    year: "2019",
    medium: "Cone 6 clay & underglaze",
    studio: "Crealde School of Art",
    image: (
      <StaticImage
        width={maxImageWidth}
        src="../images/gallery/clay/fragile_yagmur.png"
        alt="Small sculpture of a tiny tribal warrior creatures"
      />
    ),
  },
]

const linocutWork = [
  {
    name: "Astronaut-1",
    year: "2020",
    medium: "Linoleum block, Speedball Block Printing Water Soluble Ink",
    image: (
      <StaticImage
        width={maxImageWidth}
        src="../images/gallery/linocut/astronaut.png"
        alt="A linocut artwork of an astronaut on a planet"
      />
    ),
  },
  {
    name: "Astronaut-2",
    year: "2020",
    medium: "Linoleum block, Speedball Block Printing Water Soluble Ink",
    image: (
      <StaticImage
        width={maxImageWidth}
        src="../images/gallery/linocut/astronaut2.png"
        alt="A linocut artwork of an astronaut on a planet"
      />
    ),
  },
  {
    name: "Spidey",
    year: "2020",
    medium: "Carved linoleum block",
    image: (
      <StaticImage
        width={maxImageWidth}
        src="../images/gallery/linocut/spidey.png"
        alt="The linocut block of a jumping spider"
      />
    ),
  }
]

const intaglioWork = [
  {
    name: "The bumblebee",
    year: "2021",
    medium: "Copper block, etching ink",
    image: (
      <StaticImage
        width={maxImageWidth}
        src="../images/gallery/intaglio/thebumblebee.png"
        alt="An intaglio print of a bumblebee flying around flowers"
      />
    ),
  }
]

export { sections, digitalWork, clayWork, inkWork, linocutWork, intaglioWork }
