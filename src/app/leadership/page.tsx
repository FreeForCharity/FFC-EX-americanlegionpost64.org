import type { Metadata } from 'next'
import { PageHeader, PageBody } from '@/components/ui/page-shell'
import { postInfo } from '@/lib/post-info'

export const metadata: Metadata = {
  title: 'Leadership',
  description:
    'Meet the officers and Veteran Service Officer of American Legion Post 64 in Ahwatukee, Phoenix, Arizona.',
  alternates: { canonical: '/leadership' },
}

export default function LeadershipPage() {
  return (
    <>
      <PageHeader
        eyebrow="Officers & Service"
        title="Post 64 Leadership"
        intro="Our officers are veterans themselves — fellow members elected to serve and to keep Post 64 running for the next generation."
      />
      <PageBody>
        <section aria-labelledby="post-officers">
          <h2 id="post-officers" className="text-2xl md:text-3xl font-bold text-[#0a2647]">
            Post Officers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {postInfo.leadership.map((p) => {
              const initials = p.name
                .split(' ')
                .map((n) => n[0])
                .slice(0, 2)
                .join('')
              return (
                <article
                  key={p.name}
                  className="bg-white border border-gray-200 border-t-4 border-t-[#b71c1c] rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className="w-14 h-14 rounded-full bg-gradient-to-br from-[#0a2647] via-[#0e3a6f] to-[#102a4c] text-white flex items-center justify-center text-[20px] font-bold flex-shrink-0"
                      aria-hidden="true"
                    >
                      {initials}
                    </div>
                    <div>
                      <p className="uppercase text-[#b71c1c] tracking-[0.2em] text-xs font-bold aria-font">
                        {p.title}
                      </p>
                      <p className="text-xl font-bold text-[#0a2647] mt-0.5">{p.name}</p>
                    </div>
                  </div>
                  <dl className="space-y-1 text-sm border-t border-gray-100 pt-3">
                    <div>
                      <dt className="sr-only">Phone</dt>
                      <dd>
                        <a
                          href={`tel:${p.tel}`}
                          className="text-[#0a2647] hover:text-[#b71c1c] font-semibold"
                        >
                          {p.phone}
                        </a>
                      </dd>
                    </div>
                  </dl>
                </article>
              )
            })}
          </div>
        </section>

        <section aria-labelledby="vso-role">
          <h2 id="vso-role" className="text-2xl md:text-3xl font-bold text-[#0a2647]">
            About the Veteran Service Officer (VSO)
          </h2>
          <p>
            Our Veteran Service Officer is an accredited representative who helps veterans and their
            families navigate Department of Veterans Affairs (VA) benefits — disability
            compensation, healthcare enrollment, pensions, education, and survivor benefits. The
            service is free and confidential.
          </p>
          <p>
            If you or a loved one needs help understanding or filing for VA benefits, please call
            our VSO directly.
          </p>
        </section>

        <section aria-labelledby="get-involved">
          <h2 id="get-involved" className="text-2xl md:text-3xl font-bold text-[#0a2647]">
            Want to Get Involved?
          </h2>
          <p>
            Officer elections, committee work, and volunteer opportunities are open to all members.
            Visit a monthly business meeting (3rd Wednesday at 4:30 PM) or contact the Commander to
            learn how you can serve.
          </p>
        </section>

        <p className="text-sm text-gray-600 border-t border-gray-200 pt-4">
          <em>
            This roster lists the officers currently published on americanlegionpost64.org. If you
            see an out-of-date entry, please contact the Commander.
          </em>
        </p>
      </PageBody>
    </>
  )
}
