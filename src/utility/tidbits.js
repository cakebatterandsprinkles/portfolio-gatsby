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
]