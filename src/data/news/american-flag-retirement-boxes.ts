import type { NewsPost } from './types'

const post: NewsPost = {
  slug: 'american-flag-retirement-boxes',
  title: 'American Flag Retirement Boxes',
  date: '2026-01-19',
  excerpt:
    'Post 64 now operates two flag-retirement drop-off boxes in Ahwatukee, and partners with Boy Scout Troop 172 and Stars for Our Troops to give every flag a dignified retirement.',
  coverImage:
    'https://b3395974.smushcdn.com/3395974/wp-content/uploads/2026/01/IMG_0436_xtezw3-rotated_db6qnm-197200_810x675.jpg?lossy=2&strip=1&webp=1',
  coverAlt: 'A Post 64 flag-retirement drop-off box outside a community building.',
  sourceUrl: 'https://americanlegionpost64.org/american-flag-retirement-boxes/',
  body: [
    {
      type: 'paragraph',
      text: 'Post 64 has expanded its flag-retirement initiative this year — a program built to honor worn American flags and to instill in local youth the traditions, values, and proper etiquette surrounding flag care and display.',
    },
    { type: 'heading', level: 2, text: 'Two drop-off locations in Ahwatukee' },
    {
      type: 'paragraph',
      text: 'Residents can now drop off worn or damaged flags at two convenient locations:',
    },
    {
      type: 'list',
      items: [
        'ACE Hardware, Ahwatukee Foothills — 1335 E Chandler Blvd (new location)',
        'Ahwatukee Recreation Center — 5001 E Cheyenne Dr (original drop-off box)',
      ],
    },
    { type: 'heading', level: 2, text: 'A dignified retirement ceremony' },
    {
      type: 'paragraph',
      text: 'All collected flags receive a formal retirement through ceremonies conducted by Boy Scout Troop 172. These events serve as living lessons — scouts learn flag etiquette, maintenance standards, display rules, and the meaning of half-mast — while every flag receives the respect it has earned.',
    },
    { type: 'heading', level: 2, text: 'Partnership with Stars for Our Troops' },
    {
      type: 'paragraph',
      text: 'American-made flags collected at our boxes are processed through our partnership with Stars for Our Troops, a nonprofit organization. Usable materials are transformed into meaningful keepsakes for deployed service members, veterans, and Gold Star families. After salvageable portions are recovered, the remaining flag fabric is respectfully retired by our local scout troop. No part of the flag is discarded without proper ceremony.',
    },
    {
      type: 'paragraph',
      text: 'If you have a flag at home that is faded, torn, or no longer fit for display, please bring it to one of our drop-off locations. Every flag will be handled with the dignity it deserves.',
    },
  ],
}

export default post
