import type { Metadata } from 'next'
import { PageHeader, PageBody } from '@/components/ui/page-shell'

export const metadata: Metadata = {
  title: 'History',
  description:
    'A brief history of The American Legion and Post 64 in Ahwatukee — from 1919 through today, serving three generations of veterans.',
  alternates: { canonical: '/history' },
}

export default function HistoryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Heritage"
        title="A Century of Service"
        intro="The American Legion was founded in 1919 by veterans returning from World War I. Post 64 carries that legacy forward in Ahwatukee."
      />
      <PageBody>
        <section aria-labelledby="origin">
          <h2 id="origin" className="text-2xl md:text-3xl font-bold text-[#0a2647]">
            How The American Legion Began
          </h2>
          <p>
            In March 1919, a group of American Expeditionary Forces officers gathered in Paris to
            discuss the welfare of their fellow soldiers returning from the Great War. By the time
            the year was out, Congress had chartered The American Legion as a patriotic veterans
            organization — wartime veterans helping each other, helping their communities, and
            advocating for those still in uniform.
          </p>
          <p>
            More than a century later, that mission has not changed. What has changed is who fills
            our ranks: veterans of World War II, Korea, Vietnam, the Cold War, Grenada, Panama,
            Desert Shield/Storm, Operations Enduring Freedom and Iraqi Freedom, and the long Global
            War on Terror.
          </p>
        </section>

        <section aria-labelledby="post-64">
          <h2 id="post-64" className="text-2xl md:text-3xl font-bold text-[#0a2647]">
            Post 64 in Ahwatukee
          </h2>
          <p>
            Today, Post 64 is the only local veterans organization serving Ahwatukee. Our members
            represent three living generations of service:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Vietnam Era</strong> — the elder statesmen of the post; the men and women who
              set the standard.
            </li>
            <li>
              <strong>Desert Storm Era</strong> — veterans of the first Gulf War and the conflicts
              of the 1990s.
            </li>
            <li>
              <strong>OIF / OEF Era</strong> — veterans of Iraq, Afghanistan, and the broader
              post-9/11 generation.
            </li>
          </ul>
          <p>
            Together, we run veteran-support programs, host Americanism events for Ahwatukee, mentor
            local youth, and stand ready when one of our own — or one of our neighbors — needs a
            hand.
          </p>
        </section>

        <section aria-labelledby="memorial">
          <h2 id="memorial" className="text-2xl md:text-3xl font-bold text-[#0a2647]">
            In Memoriam
          </h2>
          <p>
            We remember the members who have passed. Among them, Pete Meier is honored by the post
            for his lifetime of service and dedication to fellow veterans.
          </p>
        </section>
      </PageBody>
    </>
  )
}
