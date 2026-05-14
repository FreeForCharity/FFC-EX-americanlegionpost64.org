import type { Metadata } from 'next'
import { PageHeader, PageBody } from '@/components/ui/page-shell'
import { postInfo } from '@/lib/post-info'

export const metadata: Metadata = {
  title: 'Donate & Support',
  description:
    'Support American Legion Post 64 in Ahwatukee. Mail a check, donate online, contribute items for raffles and silent auctions, or make a planned gift.',
  alternates: { canonical: '/donate' },
}

export default function DonatePage() {
  return (
    <>
      <PageHeader
        eyebrow="Support Our Veterans"
        title="Ways to Give"
        intro="Every gift — large or small — helps Post 64 stand with the veterans, service members, and families of Ahwatukee."
      />
      <PageBody>
        <section aria-labelledby="check">
          <h2 id="check" className="text-2xl md:text-3xl font-bold text-[#0a2647]">
            By Check (Mail-In)
          </h2>
          <p>
            Make checks payable to <strong>American Legion Post 64</strong> and mail to:
          </p>
          <address className="not-italic bg-[#f7f3e7] border-l-4 border-[#c8a04a] p-5 rounded-r font-semibold text-[#0a2647]">
            Ahwatukee Post 64
            <br />
            {postInfo.address.line1}
            <br />
            {postInfo.address.line2}
          </address>
          <p className="text-sm text-gray-600">
            Please include a return address so we can send you a thank-you and contribution
            acknowledgment.
          </p>
        </section>

        <section aria-labelledby="online">
          <h2 id="online" className="text-2xl md:text-3xl font-bold text-[#0a2647]">
            Online
          </h2>
          <p>
            We are migrating our website in phases. Until our new on-site donation experience is
            live, you can give online through our current site:
          </p>
          <p>
            <a
              href={postInfo.externalLinks.donatePage}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 rounded-full bg-[#b71c1c] hover:bg-[#9b1414] text-white font-bold uppercase tracking-wide transition-colors"
            >
              Donate Online (current site)
            </a>
          </p>
        </section>

        <section aria-labelledby="in-kind">
          <h2 id="in-kind" className="text-2xl md:text-3xl font-bold text-[#0a2647]">
            In-Kind Gifts
          </h2>
          <p>
            Post 64 gratefully accepts contributions in kind for our raffles, silent auctions, and
            direct support of veterans:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Vehicles (cars, trucks, motorcycles, boats, RVs)</li>
            <li>Household items, clothing, blankets, and quilts</li>
            <li>Medical equipment in good condition</li>
            <li>Items for our raffle and silent-auction events</li>
            <li>Gift cards</li>
            <li>Corporate sponsorships</li>
          </ul>
          <p>
            To arrange a pickup or drop-off, please contact our Commander,{' '}
            {postInfo.leadership[0]?.name} at{' '}
            <a href={`tel:${postInfo.leadership[0]?.tel}`} className="text-[#b71c1c] font-semibold">
              {postInfo.leadership[0]?.phone}
            </a>
            .
          </p>
        </section>

        <section aria-labelledby="planned">
          <h2 id="planned" className="text-2xl md:text-3xl font-bold text-[#0a2647]">
            Planned Giving
          </h2>
          <p>
            Planned giving is the process of thoughtfully including a charitable gift in your estate
            plans. By including American Legion Post 64 in your estate and financial preparations,
            you help ensure that veterans will continue to be served long into the future.
          </p>
          <p>
            <a
              href={postInfo.externalLinks.plannedGiving}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#b71c1c] font-bold uppercase tracking-wide hover:underline"
            >
              Learn about planned giving →
            </a>
          </p>
        </section>

        <section aria-labelledby="questions">
          <h2 id="questions" className="text-2xl md:text-3xl font-bold text-[#0a2647]">
            Questions?
          </h2>
          <p>
            For questions about donations, in-kind gifts, sponsorships, or planned giving, please
            contact:
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
            <li>
              <strong>Email:</strong>{' '}
              <a
                href={`mailto:${postInfo.email}`}
                className="text-[#b71c1c] font-semibold break-all"
              >
                {postInfo.email}
              </a>
            </li>
          </ul>
        </section>

        <p className="text-xs text-gray-500 border-t border-gray-200 pt-4">
          American Legion Post 64 is a chartered post of The American Legion. Consult your tax
          advisor regarding the deductibility of any contribution.
        </p>
      </PageBody>
    </>
  )
}
