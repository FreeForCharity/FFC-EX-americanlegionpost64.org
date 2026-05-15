import type { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, Clock, MapPin, Mail } from 'lucide-react'
import { PageHeader, PageBody } from '@/components/ui/page-shell'
import { allEvents } from '@/data/events'
import { postInfo } from '@/lib/post-info'

export const metadata: Metadata = {
  title: 'Events Calendar',
  description:
    'Upcoming events, meetings, and community gatherings at American Legion Post 64 in Ahwatukee, Phoenix.',
  alternates: { canonical: '/calendar' },
}

/**
 * Format an ISO datetime as "Wed, May 20, 2026 · 4:30 PM" in America/Phoenix.
 * Phoenix does not observe DST, so the offset is always -07:00.
 */
function formatEventDateTime(iso: string): string {
  const d = new Date(iso)
  return d.toLocaleString('en-US', {
    timeZone: 'America/Phoenix',
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  })
}

function formatEventTimeRange(start: string, end?: string): string {
  if (!end) return formatEventDateTime(start)
  const endDate = new Date(end)
  const endTime = endDate.toLocaleTimeString('en-US', {
    timeZone: 'America/Phoenix',
    hour: 'numeric',
    minute: '2-digit',
  })
  return `${formatEventDateTime(start)} – ${endTime}`
}

export default function CalendarPage() {
  // We render all events at build time. The list is short, and any
  // "is this in the future?" filtering should happen client-side to
  // avoid bake-in staleness on the static export.
  const upcoming = [...allEvents].sort(
    (a, b) => new Date(a.start).getTime() - new Date(b.start).getTime()
  )

  return (
    <>
      <PageHeader
        eyebrow="On the Calendar"
        title="Events & Meetings"
        intro="Meetings, social gatherings, ceremonies, and community service days for Post 64 and the Ahwatukee veteran community. Times listed in Arizona time (no DST)."
      />
      <PageBody>
        <section aria-labelledby="upcoming-events-heading">
          <h2
            id="upcoming-events-heading"
            className="text-2xl md:text-3xl font-bold text-[#0a2647]"
          >
            Upcoming Events
          </h2>

          {upcoming.length === 0 ? (
            <p>
              No upcoming events are currently scheduled. Please check back soon, or contact the
              Post for the latest information.
            </p>
          ) : (
            <ul className="list-none p-0 space-y-6">
              {upcoming.map((event) => (
                <li
                  key={event.id}
                  className="border border-gray-200 rounded-lg p-6 hover:border-[#c8a04a] hover:shadow-md transition-all"
                >
                  {event.category ? (
                    <p className="uppercase text-[#b71c1c] tracking-[0.2em] text-xs font-bold mb-2 aria-font">
                      {event.category}
                    </p>
                  ) : null}
                  <h3 className="text-xl md:text-2xl font-bold text-[#0a2647] mb-3">
                    {event.title}
                  </h3>
                  <ul className="list-none p-0 space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-3">
                      <Calendar
                        className="w-5 h-5 text-[#c8a04a] flex-shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <span>
                        <time dateTime={event.start}>
                          {formatEventTimeRange(event.start, event.end)}
                        </time>
                      </span>
                    </li>
                    {event.recurrence ? (
                      <li className="flex items-start gap-3">
                        <Clock
                          className="w-5 h-5 text-[#c8a04a] flex-shrink-0 mt-0.5"
                          aria-hidden="true"
                        />
                        <span>{event.recurrence}</span>
                      </li>
                    ) : null}
                    <li className="flex items-start gap-3">
                      <MapPin
                        className="w-5 h-5 text-[#c8a04a] flex-shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <span>{event.location}</span>
                    </li>
                  </ul>
                  <p className="text-gray-800 leading-relaxed mt-4">{event.description}</p>
                </li>
              ))}
            </ul>
          )}
        </section>

        <section aria-labelledby="standing-meetings-heading" className="mt-10">
          <h2
            id="standing-meetings-heading"
            className="text-2xl md:text-3xl font-bold text-[#0a2647]"
          >
            Standing Schedule
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>{postInfo.meetings.business}</li>
            <li>{postInfo.meetings.executive}</li>
            <li>Happy Hour Connections — 1st &amp; 4th Wednesdays, 3:30 PM</li>
            <li>Coffee Connection — 2nd &amp; 3rd Wednesdays, 7:00 AM</li>
          </ul>
        </section>

        <section aria-labelledby="newsletter-heading" className="mt-10">
          <h2 id="newsletter-heading" className="text-2xl md:text-3xl font-bold text-[#0a2647]">
            Stay in the Loop
          </h2>
          <p>
            Want event announcements delivered to your inbox? Sign up for the Post 64 monthly
            newsletter:
          </p>
          <p>
            <Link
              href="/newsletter"
              className="inline-flex items-center px-6 py-3 rounded-full bg-[#b71c1c] hover:bg-[#9b1414] text-white font-bold uppercase tracking-wide transition-colors"
            >
              <Mail className="w-4 h-4 mr-2" aria-hidden="true" /> Subscribe to the Newsletter
            </Link>
          </p>
        </section>

        <section aria-labelledby="external-events-heading" className="mt-10">
          <h2
            id="external-events-heading"
            className="text-2xl md:text-3xl font-bold text-[#0a2647]"
          >
            Looking for something not listed?
          </h2>
          <p>
            Some Post 64 events are coordinated on Facebook or announced through the newsletter
            first. You can also reach the Commander directly to confirm an event time or get
            details:
          </p>
          <ul className="list-none p-0 space-y-2">
            {postInfo.leadership.map((p) => (
              <li key={p.name}>
                <strong>{p.title}:</strong> {p.name} —{' '}
                <a href={`tel:${p.tel}`} className="text-[#b71c1c] font-semibold">
                  {p.phone}
                </a>
              </li>
            ))}
          </ul>
        </section>
      </PageBody>
    </>
  )
}
