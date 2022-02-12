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
]