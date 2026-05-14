import type { NewsPost } from './types'

const post: NewsPost = {
  slug: 'the-power-of-presence',
  title: 'The Power of Presence',
  date: '2025-10-26',
  excerpt:
    'What “thank you for your service” really means to a Vietnam Veteran — and why showing up matters more than the words.',
  coverImage:
    'https://b3395974.smushcdn.com/3395974/wp-content/uploads/2025/10/572075310_122246174786177691_202353684132802849_n_yfvcuy-1080x675.jpg?lossy=2&strip=1&webp=1',
  coverAlt: 'A Vietnam Veteran salutes during a homecoming welcome at Sky Harbor Airport.',
  sourceUrl: 'https://americanlegionpost64.org/the-power-of-presence/',
  body: [
    {
      type: 'heading',
      level: 2,
      text: 'What “thank you for your service” means to a Vietnam Veteran',
    },
    {
      type: 'paragraph',
      text: 'You do not need long speeches or elaborate gestures to make a meaningful impact. Simply being physically present, listening with intention, and offering honest gratitude can resonate more deeply than you would expect. When we make that small effort, we tell these honored men and women that society remembers them, that their contributions still shape us, and that their legacy endures.',
    },
    {
      type: 'quote',
      text: 'We do not forget the sacrifices of our Vietnam Veterans, nor the sacrifices of every man and woman who has served our great nation.',
      attribution: 'American Legion Post 64',
    },
    {
      type: 'paragraph',
      text: 'For many Vietnam Veterans, an expression of gratitude carries weight that is hard to put into words. When they came home decades ago, they often met indifference instead of celebration — dismissal instead of acknowledgment. They served faithfully anyway. Their patriotism outlasted the hardship.',
    },
    {
      type: 'paragraph',
      text: 'The American Legion honors service and sacrifice from the American Revolution through today’s global operations — including conflicts in Afghanistan, Iraq, Syria, and Africa. Each generation’s service deserves to be welcomed home with the same care.',
    },
    {
      type: 'paragraph',
      text: 'Is thirty or sixty minutes at Sky Harbor too much to ask to welcome a returning veteran? Or to walk over and say hello to the gentleman in the Vietnam Veteran cap at the next table over? The cost is small. The meaning is large.',
    },
    {
      type: 'paragraph',
      text: 'I have committed to acknowledging every veteran I encounter — every time. The greatest gift we can offer is not found in our words. It is found in showing up, standing proud, and never forgetting.',
    },
  ],
}

export default post
