/**
 * Format an ISO date string (YYYY-MM-DD) as a long-form US English date.
 *
 * Uses a fixed UTC interpretation so the output is identical on every
 * build host. We do not pass through `Date` parsing of the local TZ,
 * which can shift the day by one in negative UTC offsets.
 */
export function formatPostDate(iso: string): string {
  const [year, month, day] = iso.split('-').map((part) => Number.parseInt(part, 10))
  if (!year || !month || !day) return iso
  // month is 1-indexed in ISO; Date.UTC expects 0-indexed.
  const utc = new Date(Date.UTC(year, month - 1, day))
  return utc.toLocaleDateString('en-US', {
    timeZone: 'UTC',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
