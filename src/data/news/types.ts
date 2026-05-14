/**
 * News post data types for American Legion Post 64.
 *
 * Each news post is authored as its own TypeScript module under
 * `src/data/news/` and exported as a const of type `NewsPost`.
 * Bodies are stored as an array of typed blocks so the page can
 * render rich content without depending on dangerouslySetInnerHTML
 * or an MDX pipeline.
 */

export type NewsBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'heading'; level: 2 | 3; text: string }
  | { type: 'list'; items: string[] }
  | { type: 'quote'; text: string; attribution?: string }

export interface NewsPost {
  /** URL slug; must be unique and kebab-case. */
  slug: string
  /** Headline shown in cards, archive, and post header. */
  title: string
  /** ISO date string, e.g. `2026-04-12`. */
  date: string
  /** Optional byline shown under the headline. */
  author?: string
  /** One-sentence excerpt shown on cards and OG metadata. */
  excerpt: string
  /** Article body, an ordered list of typed blocks. */
  body: NewsBlock[]
  /** Optional original WP cover image URL (proxied through Smush CDN). */
  coverImage?: string
  /** Optional descriptive alt text for the cover image. */
  coverAlt?: string
  /** Optional link back to the original WP article for archival reference. */
  sourceUrl?: string
}
