import monster1 from "../images/tidbits/monster1.jpg";
import monster8 from "../images/tidbits/monster8.jpg";
import monster6 from "../images/tidbits/monster6.jpg";
import monster7 from "../images/tidbits/monster7.jpg";
import monster5 from "../images/tidbits/monster5.jpg";
import monster9 from "../images/tidbits/monster9.jpg";

export const findCorrectAnnouncement = (arr, month, year) => {
  const today = new Date(year, month, 1);
  const currentMonth = today.getMonth() + 1;
  const currentYear = today.getFullYear();
  return arr.find(item => item.month === currentMonth && item.year === currentYear);
}

export const tidbitsArray = [
  {
    month: 2, year: 2022, content: [
      { title: 'A new thing that I learned', icon: monster1, contentText: 'Vending Machines are 4 times deadlier than sharks.', creator: 'Raghav Mittal', comment: `I stumbled upon an interesting article when I was doing my annual research on shark attacks (this is the result of having ADHD and anxiety at the same time). \n Apparently, on average, the number of deaths by vending machines in the US is around 2.18 per year, while the number of deaths caused by shark attacks were only 0.6. Don't rock or tilt the damn vending machines. They take revenge.`, link: 'https://medium.com/purple-theory/vending-machines-vs-sharks-3e2362d762fa' },
      { title: 'What am I reading?', icon: monster6, contentText: 'The Memory Police', creator: 'Yoko Ogawa', comment: 'Are you still you when you start losing bits and pieces of your memories?', link: 'https://www.goodreads.com/book/show/37004370-the-memory-police' },
      { title: 'Which song is on repeat?', icon: monster5, contentText: 'Sommarfågel', comment: `Wintergatan is a Swedish word that means 'Milky Way' and Sommarfågel translates as 'Summer Bird'.`, creator: 'Wintergatan', link: 'https://www.youtube.com/watch?v=SBK2AF-NdVA' },
      { title: 'Something that made me think', icon: monster7, contentText: 'Any sufficiently advanced technology is indistinguishable from magic.', comment: 'The things that feel like magic now was once somebodies blood and tears. We truly are standing on the shoulders of giants.', creator: 'Arthur C. Clarke', link: 'https://en.wikipedia.org/wiki/Clarke%27s_three_laws' },
      { title: 'Which game am I playing?', icon: monster8, contentText: 'Stardew Valley', comment: 'Can I just live in my 8-bit farm from now on? I am so happy here.', creator: '', link: 'https://www.stardewvalley.net' },
      { title: 'Food of the month', icon: monster9, contentText: 'Strawberry Hazelnut Crepe', comment: `We found a crepe stand which has amazingly long waiting time. I am not making it up, it seriously takes an hour to get your crepe, but the end results are worth it. 😆`, creator: '', link: '' },]
  },
  {
    month: 3, year: 2022, content: [
      { title: 'A new thing that I learned', icon: monster1, contentText: 'Humans introduce viable seeds to the Arctic on footwear.', creator: 'Chris Ware, Dana M. Bergstrom, Eike Müller & Inger Greve Alsos', comment: `We carry things everywhere we go. This study sampled the footwear of 259 travelers that arrived by air to to the high-Arctic archipelago of Svalbard which is in Norway, and recorded 1,019 seeds. (3.9 (±0.8) seeds per traveler, that belongs to 53 species.) And the growth of non-native species is expected to increase with climate change.`, link: 'https://link.springer.com/article/10.1007/s10530-011-0098-4#page-1' },
      { title: 'What am I reading?', icon: monster6, contentText: 'Good Omens: The Nice and Accurate Prophecies of Agnes Nutter, Witch', creator: 'Neil Gaiman & Terry Pratchett', comment: '', link: 'https://www.goodreads.com/book/show/12067.Good_Omens' },
      { title: 'Which song is on repeat?', icon: monster5, contentText: 'Journey', comment: `Love the rain in the background.`, creator: 'Tenno', link: 'https://open.spotify.com/track/2pAPo7r9woX5AwLDNzAgaV?si=0899616d2fc24305' },
      { title: 'Something that made me think', icon: monster7, contentText: 'Every relationship is reciprocal. When you touch something, it touches you.', comment: '', creator: 'Fringe', link: 'https://www.imdb.com/title/tt1119644/' },
      { title: 'Which game am I playing?', icon: monster8, contentText: 'Stardew Valley', comment: 'It is summer now, and we\'re planting melons and poppies. Farm is looking good and we haven\'t fallen asleep in the mines yet.', creator: '', link: 'https://www.stardewvalley.net' },
      { title: 'Food of the month', icon: monster9, contentText: 'Blueberries', comment: `We went to a farm close to us to collect blueberries. It was so much fun. It tickles your inner obsessive and makes it happy.`, creator: '', link: '' },]
  },
  {
    month: 4, year: 2022, content: [
      { title: 'A new thing that I learned', icon: monster1, contentText: 'Wild fox squirrels organize their favorite nuts by type. 🐿️ ', creator: 'Mikel M. Delgado and Lucia F. Jacobs', comment: `Wild fox squirrels use a cognitive method called 'spatial chunking' to store their nuts. 'Spatial chunking' is caching information hierarchically, keeping related information together to improve recall. In this study, the researchers observed 45 squirrels about 2 years of time, and they supplied 16 different types of nuts. They found out that the squirrels categorize the nuts by their source, variety, quality, and even personal preference when choosing the place to bury them.`, link: 'https://royalsocietypublishing.org/doi/full/10.1098/rsos.170958' },
      { title: 'What am I reading?', icon: monster6, contentText: 'Sorry I\'m late, I didn\'t want to come', creator: 'Jessica Pan', comment: 'This is a fun book about an introverts stories about extroverted situations that she made herself face. Making me laugh and shiver at the same time as an introverted person.', link: 'https://www.goodreads.com/book/show/41577600-sorry-i-m-late-i-didn-t-want-to-come' },
      { title: 'Which song is on repeat?', icon: monster5, contentText: 'Sweet Disposition', comment: ``, creator: 'The Temper Trap', link: 'https://www.youtube.com/watch?v=vN7HQrgakZU' },
      { title: 'Something that made me think', icon: monster7, contentText: `You should enjoy the little detours to the fullest. That's where you'll find things more important than what you want.`, comment: ``, creator: 'Yoshihiro Togashi, Hunter x Hunter, Vol. 32', link: 'https://www.goodreads.com/book/show/18143845-hunter-x-hunter-vol-32' },
      { title: 'Which game am I playing?', icon: monster8, contentText: 'Stardew Valley', comment: 'Mayor Lewis lost his purple shorts. Can\'t find the damn shorts. I\'m resisting the urge to googling where they are. How do you lose your shorts?', creator: '', link: 'https://www.stardewvalley.net' },
      { title: 'Food of the month', icon: monster9, contentText: 'Rose pistachio ice cream', comment: `A local ice cream shop offers this flavor once in a while and it is really good!`, creator: '', link: '' },]
  },
  {
    month: 5, year: 2022, content: [
      { title: 'A new thing that I learned', icon: monster1, contentText: `Portuguese Man O'Wars can sting after they're dead.`, creator: 'The Wildlife Trusts', comment: `Walking around the beach, we found a creature washed up to the shore: a blue balloon with a few tentacles. We weren't sure if it was dead so we tried to push it back to the ocean with the help of a stick (spoilers: we managed to push it, but it washed up to the shore again.) After a brief research we realized that it was a Portuguese Man O'War and it has an 'excrutiatingly painful' sting that can cause sever allergic reactions and even death, so we congratulated each other on the idea of using a stick to poke it around.`, link: 'https://www.wildlifetrusts.org/wildlife-explorer/marine/colonial-creatures/portuguese-man-owar' },
      { title: 'What am I reading?', icon: monster6, contentText: 'No longer human', creator: 'Junji Ito', comment: `The original story belongs to Osamu Dazai but combined with Junji Ito's incredible talent for visualizing horror and anxiety, it truly becomes magnificent. The story itself, albeit depressing, immediately sucks you in.`, link: 'https://www.goodreads.com/en/book/show/43909397' },
      { title: 'Which song is on repeat?', icon: monster5, contentText: `Don't Be So Serious`, comment: `This song is one of the many beautiful songs in the soundtrack of Death Stranding.`, creator: 'Low Roar', link: 'https://open.spotify.com/track/03RS5t6vNp1mw3zdGYCgwb?si=98e8cfdde5444b28' },
      { title: 'Something that made me think', icon: monster7, contentText: `And I urge you to please notice when you are happy, and exclaim or murmur or think at some point, 'If this isn't nice, I don't know what is.'`, comment: ``, creator: 'Kurt Vonnegut', link: `https://www.goodreads.com/book/show/4979.A_Man_Without_a_Country` },
      { title: 'Which game am I playing?', icon: monster8, contentText: 'LEGO Harry Potter', comment: `We are already at the second year. I keep targeting my husband with my wand, but in my defense I am playing Ron so that kinda fits the character.`, creator: `TT Games, Traveller's Tales, Double Eleven, TT Fusion`, link: 'https://store.steampowered.com/app/21130/LEGO_Harry_Potter_Years_14/' },
      { title: 'Food of the month', icon: monster9, contentText: 'Stuffed Grape Leaves', comment: `Found a great one at Costco and slowly getting addicted to it.`, creator: '', link: '' },]
  },
  {
    month: 6, year: 2022, content: [
      { title: 'A new thing that I learned', icon: monster1, contentText: `Only about 8 percent of the world's total currency exists as physical cash.`, creator: '', comment: `The first credit card was issued in 1950, and the first electronic deposit made to a bank account heppened in 1975. Since then, credit cards became a huge thing, and more than 90% of the total currency of the world only exist in hard drives. Today, people can earn and spend money without touching it at all.`, link: 'https://money.howstuffworks.com/currency.htm#pt6' },
      { title: 'What am I reading?', icon: monster6, contentText: `Howl's moving castle`, creator: 'Diana Wynne Jones', comment: `The story differs a lot between the book and the movie, but both of them are beautiful.`, link: 'https://www.goodreads.com/book/show/6294.Howl_s_Moving_Castle' },
      { title: 'Which song is on repeat?', icon: monster5, contentText: `Running Up That Hill (A Deal with God)`, comment: `Yes, I am a big fan of Stranger Things, I even have a 'mornings are for coffee and contemplation mug (>‿◠)✌'`, creator: 'Kate Bush', link: 'https://www.youtube.com/watch?v=wp43OdtAAkM' },
      { title: 'Something that made me think', icon: monster7, contentText: `When you’re not used to being confident, confidence feels like arrogance. When you’re used to being passive, assertiveness feels like aggression. When you’re not used to getting your needs met, prioritizing yourself feels selfish. Your comfort zone is not a good benchmark.`, comment: ``, creator: 'Dr. Vassilia', link: `https://twitter.com/junocounseling/status/1396479203541934086?lang=en` },
      { title: 'Which game am I playing?', icon: monster8, contentText: 'Chutes and Ladders', comment: `I keep climbing and falling down from the same chutes. I lose a lot.`, creator: `Winning Moves Games`, link: 'https://www.boxcargeneralstore.com/product/chutes-and-ladders-classic-70s-edition/1512?cp=true&sa=false&sbp=false&q=false&category_id=9' },
      { title: 'Food of the month', icon: monster9, contentText: 'Omusoba', comment: `Me: I suppose I can eat this everyday. \n My nutritionist: ಠ_ಠ No you won't. \n My wallet: **Sighs with relief**`, creator: '', link: '' },]
  },
]