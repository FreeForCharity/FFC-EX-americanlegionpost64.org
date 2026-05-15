import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    'Terms of Service for the American Legion Post 64 website in Ahwatukee, Phoenix, AZ.',
}

export default function TermsOfService() {
  return (
    <main className="pt-[130px] pb-[54px]">
      <div className="py-[27px] w-[90%] md:w-[80%] max-w-[820px] mx-auto">
        <p className="text-[14px] text-[#666] pb-[10px] leading-[24px] font-[500]">
          <em>Effective Date: 2026-05-15</em>
        </p>

        <h1 className="text-[30px] text-[#333] pb-[10px] leading-[1em] font-[500]">
          Terms of Service
        </h1>

        <p className="text-[14px] text-[#666] pb-[16px] leading-[24px] font-[500]">
          Welcome to americanlegionpost64.org (the &ldquo;Site&rdquo;), the official website of
          American Legion Post 64 in Ahwatukee, Phoenix, Arizona. By accessing or using the Site,
          you agree to these Terms of Service.
        </p>

        <h2 className="text-[22px] text-[#333] pt-[12px] pb-[8px] leading-[1.2em] font-[600]">
          Purpose
        </h2>
        <p className="text-[14px] text-[#666] pb-[16px] leading-[24px] font-[500]">
          The Site provides information about Post 64, its officers, events, news, and ways to
          support local veterans. Information is provided for community and educational purposes and
          is not legal, medical, or financial advice.
        </p>

        <h2 className="text-[22px] text-[#333] pt-[12px] pb-[8px] leading-[1.2em] font-[600]">
          Content and trademarks
        </h2>
        <p className="text-[14px] text-[#666] pb-[16px] leading-[24px] font-[500]">
          The American Legion name, emblem, and related marks are property of The American Legion
          and used by Post 64 under the standards of the National Organization. Original content
          (news posts, photos contributed by members, event details) is published for informational
          use. Please contact Post 64 before republishing or reproducing content.
        </p>

        <h2 className="text-[22px] text-[#333] pt-[12px] pb-[8px] leading-[1.2em] font-[600]">
          Acceptable use
        </h2>
        <p className="text-[14px] text-[#666] pb-[16px] leading-[24px] font-[500]">
          You agree not to use the Site to harass or defame any member, veteran, or community
          partner of Post 64; not to impersonate the Post or its officers; not to attempt to
          compromise the security or availability of the Site; and not to use the Site for
          commercial solicitation unrelated to Post 64&rsquo;s mission.
        </p>

        <h2 className="text-[22px] text-[#333] pt-[12px] pb-[8px] leading-[1.2em] font-[600]">
          External links
        </h2>
        <p className="text-[14px] text-[#666] pb-[16px] leading-[24px] font-[500]">
          The Site may link to external resources, including legion.org and the National American
          Legion member portal (myLegion). Post 64 is not responsible for content, accuracy, or
          policies of external sites.
        </p>

        <h2 className="text-[22px] text-[#333] pt-[12px] pb-[8px] leading-[1.2em] font-[600]">
          Donations and contributions
        </h2>
        <p className="text-[14px] text-[#666] pb-[16px] leading-[24px] font-[500]">
          Donations to Post 64 support local veterans, families, and community programs. The Post is
          a 501(c)(19) veterans organization; consult your tax advisor regarding deductibility.
          Online donation flows link to external processors that have their own terms.
        </p>

        <h2 className="text-[22px] text-[#333] pt-[12px] pb-[8px] leading-[1.2em] font-[600]">
          No warranty
        </h2>
        <p className="text-[14px] text-[#666] pb-[16px] leading-[24px] font-[500]">
          The Site is provided &ldquo;as is&rdquo; without warranty of any kind. We make reasonable
          efforts to keep event information accurate, but please confirm dates and locations
          directly with the Post before traveling.
        </p>

        <h2 className="text-[22px] text-[#333] pt-[12px] pb-[8px] leading-[1.2em] font-[600]">
          Hosting attribution
        </h2>
        <p className="text-[14px] text-[#666] pb-[16px] leading-[24px] font-[500]">
          The Site is hosted as a volunteer-maintained project by{' '}
          <a
            href="https://freeforcharity.org"
            className="text-[#007bff] underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Free For Charity
          </a>
          , a US 501(c)(3) nonprofit that builds and hosts websites for charitable causes.
        </p>

        <h2 className="text-[22px] text-[#333] pt-[12px] pb-[8px] leading-[1.2em] font-[600]">
          Changes
        </h2>
        <p className="text-[14px] text-[#666] pb-[16px] leading-[24px] font-[500]">
          We may update these Terms occasionally. Continued use of the Site after changes are posted
          constitutes acceptance of the revised Terms.
        </p>

        <h2 className="text-[22px] text-[#333] pt-[12px] pb-[8px] leading-[1.2em] font-[600]">
          Contact
        </h2>
        <p className="text-[14px] text-[#666] pb-[16px] leading-[24px] font-[500]">
          Questions about these Terms can be directed to the Post via the{' '}
          <a href="/contact" className="text-[#007bff] underline">
            contact page
          </a>
          .
        </p>
      </div>
    </main>
  )
}
