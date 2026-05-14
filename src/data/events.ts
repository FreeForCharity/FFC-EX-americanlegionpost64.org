/**
 * Static events list for American Legion Post 64.
 *
 * WordPress calendar plugins cannot be exported to a static site, so we
 * publish events as plain TypeScript records. To add or remove an event,
 * edit this file and re-deploy.
 *
 * Conventions:
 *   - `start` and `end` are ISO 8601 datetimes in America/Phoenix (no DST).
 *   - One-time events use a fixed date; recurring events use the `recurrence`
 *     string for human reading (the date itself should be the next upcoming).
 *   - Sort order is computed at read-time in `getUpcomingEvents`.
 */

export interface Event {
  /** Stable slug used as a React key. */
  id: string
  /** Human title shown on the calendar card. */
  title: string
  /** ISO datetime for the event start (America/Phoenix). */
  start: string
  /** Optional ISO datetime for the event end. */
  end?: string
  /** Optional human-readable recurrence description. */
  recurrence?: string
  /** Where it happens. */
  location: string
  /** One- or two-sentence description shown on the card. */
  description: string
  /** Tag shown above the title, e.g. "Meeting", "Social", "Community Service". */
  category?: string
}

const events: Event[] = [
  {
    id: 'happy-hour-connections-may-2026',
    title: 'Happy Hour Connections',
    start: '2026-05-19T15:30:00-07:00',
    end: '2026-05-19T19:00:00-07:00',
    recurrence: '1st and 4th Wednesdays each month',
    location: 'Philly’s Sports Bar, Ahwatukee',
    description:
      'An informal social mixer for veterans, members, and guests. Pull up a chair, share a drink, and connect with the Post 64 community.',
    category: 'Social',
  },
  {
    id: 'post-64-elections-may-2026',
    title: 'Post 64 Elections & Monthly Meeting',
    start: '2026-05-20T16:30:00-07:00',
    end: '2026-05-20T18:00:00-07:00',
    location: 'Ahwatukee Recreation Center, 5001 E Cheyenne Dr, Phoenix',
    description:
      'Annual election of post officers, held during the regular Members’ Business Meeting on the third Wednesday. All members in good standing are encouraged to attend and vote.',
    category: 'Meeting',
  },
  {
    id: 'coffee-connection-may-2026',
    title: 'Coffee Connection',
    start: '2026-05-13T07:00:00-07:00',
    end: '2026-05-13T09:00:00-07:00',
    recurrence: '2nd and 3rd Wednesdays each month',
    location: 'The Buzzed Goat, Ahwatukee',
    description:
      'Early-morning coffee gathering for members and Ahwatukee veterans. A quiet way to start the day in good company — newcomers always welcome.',
    category: 'Social',
  },
  {
    id: 'executive-committee-june-2026',
    title: 'Executive Committee Meeting',
    start: '2026-06-10T16:00:00-07:00',
    end: '2026-06-10T17:30:00-07:00',
    recurrence: '2nd Wednesday each month',
    location: 'Ahwatukee Recreation Center, 5001 E Cheyenne Dr, Phoenix',
    description:
      'Monthly Executive Committee working session. Officers and committee chairs review business in advance of the Members’ Business Meeting.',
    category: 'Meeting',
  },
  {
    id: 'members-business-june-2026',
    title: 'Members’ Business Meeting',
    start: '2026-06-17T16:30:00-07:00',
    end: '2026-06-17T18:00:00-07:00',
    recurrence: '3rd Wednesday each month',
    location: 'Ahwatukee Recreation Center, 5001 E Cheyenne Dr, Phoenix',
    description:
      'Our standing monthly business meeting. Committee reports, event planning, and a Commander’s update. Open to all members in good standing.',
    category: 'Meeting',
  },
  {
    id: 'adopt-a-street-cleanup-2026',
    title: 'Adopt-A-Street Cleanup',
    start: '2026-05-30T07:30:00-07:00',
    end: '2026-05-30T09:30:00-07:00',
    recurrence: 'Approximately every other month',
    location: 'Designated stretch along East Chandler Boulevard, Ahwatukee',
    description:
      'Volunteers gather early to keep our adopted stretch of road clean. Gloves, bags, and safety vests provided — bring sturdy shoes and a water bottle.',
    category: 'Community Service',
  },
]

/**
 * Returns events whose start time is today or later, sorted soonest-first.
 *
 * Past events are filtered out at request time so the calendar always
 * shows what is actually upcoming, without needing a content edit.
 */
export function getUpcomingEvents(now: Date = new Date()): Event[] {
  return events
    .filter((e) => new Date(e.start).getTime() >= now.getTime())
    .sort((a, b) => new Date(a.start).getTime() - new Date(b.start).getTime())
}

/** Returns the next `n` upcoming events (default 5). */
export function getNextUpcomingEvents(n = 5, now: Date = new Date()): Event[] {
  return getUpcomingEvents(now).slice(0, n)
}

export { events as allEvents }
