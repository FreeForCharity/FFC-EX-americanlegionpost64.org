/**
 * News post registry for American Legion Post 64.
 *
 * Each post is authored as a `.ts` module under this folder. To add a new
 * post, create a file (e.g. `my-new-post.ts`) that default-exports a
 * `NewsPost`, then import it below and add it to the `posts` array.
 *
 * The exported helpers always return posts sorted newest-first.
 */

import type { NewsPost } from './types'
import aprilEventsHighlights from './april-2026-events-highlights'
import lettersFromKellyAndGallego from './letters-received-from-mark-kelly-and-mayor-kate-gallego'
import fifthFridayMixer from './fifth-friday-veterans-social-mixer'
import flagRetirementBoxes from './american-flag-retirement-boxes'
import legislativeOutlook2026 from './veterans-legislative-outlook-for-2026'
import memoriesOfPete from './a-place-to-write-memories-of-pete'
import deeperMeaningVeteransDay from './the-deeper-meaning-of-veterans-day'
import powerOfPresence from './the-power-of-presence'

const allPosts: NewsPost[] = [
  aprilEventsHighlights,
  lettersFromKellyAndGallego,
  fifthFridayMixer,
  flagRetirementBoxes,
  legislativeOutlook2026,
  memoriesOfPete,
  deeperMeaningVeteransDay,
  powerOfPresence,
]

/** Returns all news posts, sorted newest-first by date. */
export const newsPosts: NewsPost[] = [...allPosts].sort((a, b) => b.date.localeCompare(a.date))

/** Returns the most-recent `n` posts (newest-first). Defaults to 3. */
export function getLatestNews(n = 3): NewsPost[] {
  return newsPosts.slice(0, n)
}

/** Looks up a post by its slug. Returns `undefined` when not found. */
export function getNewsPostBySlug(slug: string): NewsPost | undefined {
  return newsPosts.find((post) => post.slug === slug)
}

export type { NewsPost, NewsBlock } from './types'
