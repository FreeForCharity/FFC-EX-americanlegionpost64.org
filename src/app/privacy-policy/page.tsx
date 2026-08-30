import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHeader, PageBody } from '@/components/ui/page-shell'
import { postInfo } from '@/lib/post-info'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'How American Legion Post 64 collects, uses, and protects information from visitors to americanlegionpost64.org.',
  alternates: { canonical: '/privacy-policy' },
}

export default function PrivacyPolicy() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="Privacy Policy" intro="Effective Date: August 30, 2026" />
      <PageBody>
        <section aria-labelledby="introduction">
          <h2 id="introduction" className="text-2xl md:text-3xl font-bold text-[#0a2647]">
            1. Introduction
          </h2>
          <p>
            American Legion Post 64 (&ldquo;Post 64,&rdquo; &ldquo;we,&rdquo; &ldquo;our&rdquo;)
            respects your privacy. This Privacy Policy explains the types of information we collect
            on americanlegionpost64.org and how we use it. By using our website, you consent to this
            policy.
          </p>
        </section>

        <section aria-labelledby="who-we-are">
          <h2 id="who-we-are" className="text-2xl md:text-3xl font-bold text-[#0a2647]">
            2. Who We Are
          </h2>
          <p>
            American Legion Post 64 is a chartered post of The American Legion serving Ahwatukee,
            Phoenix, Arizona. Our address is {postInfo.address.full}. Our website address is
            https://americanlegionpost64.org.
          </p>
        </section>

        <section aria-labelledby="info-collected">
          <h2 id="info-collected" className="text-2xl md:text-3xl font-bold text-[#0a2647]">
            3. Information We Collect
          </h2>
          <p>We may collect the following information:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Personally identifiable information</strong> you choose to provide — for
              example, your name, email address, phone number, and mailing address when you contact
              us, register as a member, or make a donation.
            </li>
            <li>
              <strong>Technical information</strong> such as your IP address, browser type, and
              pages visited, collected through standard server logs and analytics.
            </li>
            <li>
              <strong>Cookies and similar technologies</strong> used to remember preferences and
              measure traffic. You may disable cookies in your browser at any time.
            </li>
          </ul>
        </section>

        <section aria-labelledby="how-we-use">
          <h2 id="how-we-use" className="text-2xl md:text-3xl font-bold text-[#0a2647]">
            4. How We Use Your Information
          </h2>
          <p>We use the information we collect to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Operate and improve our website.</li>
            <li>Respond to your inquiries and provide veteran-services support.</li>
            <li>Process and acknowledge donations.</li>
            <li>Communicate news, events, and member updates if you have opted in.</li>
            <li>Comply with applicable legal obligations.</li>
          </ul>
        </section>

        <section aria-labelledby="sharing">
          <h2 id="sharing" className="text-2xl md:text-3xl font-bold text-[#0a2647]">
            5. How We Share Information
          </h2>
          <p>
            We do not sell, rent, or trade your personally identifiable information. We may share
            information only:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              With trusted service providers who help us operate the website or process donations,
              under confidentiality obligations.
            </li>
            <li>
              When required by law, court order, or to protect our rights or the safety of others.
            </li>
            <li>
              With your consent — for example, if you ask us to introduce you to another
              organization.
            </li>
          </ul>
        </section>

        <section aria-labelledby="security">
          <h2 id="security" className="text-2xl md:text-3xl font-bold text-[#0a2647]">
            6. Security
          </h2>
          <p>
            We use commercially reasonable safeguards — including encrypted transport (HTTPS) and
            access controls — to protect personally identifiable information. No method of
            transmission over the Internet is 100% secure, but we strive to use industry-accepted
            means to protect your information.
          </p>
        </section>

        <section aria-labelledby="your-rights">
          <h2 id="your-rights" className="text-2xl md:text-3xl font-bold text-[#0a2647]">
            7. Your Rights
          </h2>
          <p>You may at any time:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Request access to the personal information we hold about you.</li>
            <li>Ask us to correct inaccurate information.</li>
            <li>Ask us to delete your information, subject to legal retention requirements.</li>
            <li>Opt out of marketing communications.</li>
          </ul>
          <p>
            To exercise these rights, please email{' '}
            <a href={`mailto:${postInfo.email}`} className="text-[#b71c1c] font-semibold break-all">
              {postInfo.email}
            </a>
            .
          </p>
        </section>

        <section aria-labelledby="gdpr">
          <h2 id="gdpr" className="text-2xl md:text-3xl font-bold text-[#0a2647]">
            8. Your Rights in the European Union, United Kingdom, and EEA (GDPR)
          </h2>
          <p>
            If you visit from the European Union, the United Kingdom, or the wider European Economic
            Area, the EU General Data Protection Regulation (GDPR) or the UK GDPR applies to our
            handling of your personal data, and this section supplements the rest of this policy.
          </p>
          <p>
            <strong>How consent works regionally.</strong> We use Google Consent Mode. Whether the
            permissive or the opt-in default applies to Google&apos;s tags is determined by Google
            from your IP address at the time of your visit; IP geolocation is approximate. In the
            EEA, the UK, and Switzerland, Google Analytics runs cookie-free until you accept.
            Everywhere else, including the United States, analytics cookies are set from your first
            pageview. Our{' '}
            <Link href="/cookie-policy" className="text-[#b71c1c] font-semibold">
              Cookie Policy
            </Link>{' '}
            describes this in detail.
          </p>
          <p>
            <strong>Legal bases.</strong> We process personal data only on these bases:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Consent:</strong> In the EEA, the UK, and Switzerland, Google&apos;s tags set
              no cookies and read no identifiers until you accept through the cookie consent banner
              — until then only aggregate, cookieless measurement takes place. Session recording
              (Microsoft Clarity) and marketing (Meta Pixel) load only after you opt in. You can
              withdraw consent at any time via the Cookie Preferences link in the footer; this site
              then deletes the tracking cookies it set, Google&apos;s tags return to the cookieless
              state, and Clarity and the Meta Pixel stop loading from your next page view.
            </li>
            <li>
              <strong>Legitimate interests:</strong> Operating, securing, and improving this website
              (for example, essential cookies and server logs), balanced against your rights.
            </li>
            <li>
              <strong>Legal obligation:</strong> Where processing is required to comply with
              applicable law.
            </li>
          </ul>
          <p>
            <strong>Your rights.</strong> You have the right to: access the personal data we hold
            about you; have inaccurate data rectified; have your data erased; restrict or object to
            processing; receive your data in a portable format; and withdraw any consent you have
            given, at any time, without affecting the lawfulness of processing before withdrawal.
          </p>
          <p>
            <strong>Exercising your rights and complaints.</strong> Contact us at{' '}
            <a href={`mailto:${postInfo.email}`} className="text-[#b71c1c] font-semibold break-all">
              {postInfo.email}
            </a>{' '}
            to exercise any of these rights; we will respond within the time limits the GDPR sets.
            You also have the right to lodge a complaint with your national data protection
            supervisory authority (in the UK, the Information Commissioner&apos;s Office).
          </p>
        </section>

        <section aria-labelledby="ccpa">
          <h2 id="ccpa" className="text-2xl md:text-3xl font-bold text-[#0a2647]">
            9. Your California Privacy Rights (CCPA/CPRA)
          </h2>
          <p>
            If you are a California resident, the California Consumer Privacy Act, as amended by the
            California Privacy Rights Act (CCPA/CPRA), gives you specific rights, and this section
            supplements the rest of this policy.
          </p>
          <p>
            <strong>We do not sell or share your personal information.</strong> American Legion Post
            64 does not sell personal information, and does not share it for cross-context
            behavioral advertising, as those terms are defined by California law — and has not done
            so in the preceding 12 months. We do not knowingly collect or sell the personal
            information of anyone under 16. We do not collect sensitive personal information beyond
            what is necessary to provide this website and our services, and we do not use it to
            infer characteristics about you.
          </p>
          <p>
            <strong>Your rights.</strong> You have the right to: know what personal information we
            collect, use, and disclose, and to access it; delete personal information we collected
            from you; correct inaccurate personal information; opt out of any sale or sharing of
            personal information (not applicable, since we do neither); limit the use of sensitive
            personal information; and not be discriminated against for exercising any of these
            rights.
          </p>
          <p>
            <strong>Opt-out preference signals (Global Privacy Control / Do Not Track).</strong>{' '}
            This site does not read or respond to the Global Privacy Control or Do Not Track browser
            signals. We do not sell or share personal information as defined by the CCPA/CPRA, so
            there is nothing for those signals to opt out of. Analytics cookies are set
            automatically for visitors outside the EEA, the UK, and Switzerland; any visitor can
            turn them off at any time via the Cookie Preferences link in the footer, and we delete
            the cookies when you do. Session recording (Microsoft Clarity) and marketing (Meta
            Pixel) never load without your explicit opt-in, anywhere in the world.
          </p>
          <p>
            <strong>Exercising your rights.</strong> Submit a request to{' '}
            <a href={`mailto:${postInfo.email}`} className="text-[#b71c1c] font-semibold break-all">
              {postInfo.email}
            </a>
            . We will verify your request using information associated with your interactions with
            us, and you may use an authorized agent to submit a request on your behalf. We will
            respond within the timeframes California law requires.
          </p>
        </section>

        <section aria-labelledby="third-party">
          <h2 id="third-party" className="text-2xl md:text-3xl font-bold text-[#0a2647]">
            10. Third-Party Links
          </h2>
          <p>
            Our site links to external websites — including The American Legion national site and
            other resources. We are not responsible for the privacy practices of those sites and
            encourage you to review their policies.
          </p>
        </section>

        <section aria-labelledby="children">
          <h2 id="children" className="text-2xl md:text-3xl font-bold text-[#0a2647]">
            11. Children&apos;s Privacy
          </h2>
          <p>
            Our website is not directed to children under 13, and we do not knowingly collect
            personal information from them. If you believe we have collected information from a
            child under 13, please contact us so we can delete it.
          </p>
        </section>

        <section aria-labelledby="changes">
          <h2 id="changes" className="text-2xl md:text-3xl font-bold text-[#0a2647]">
            12. Changes to This Policy
          </h2>
          <p>
            We may update this Privacy Policy from time to time. The effective date at the top of
            this page will reflect the most recent revision.
          </p>
        </section>

        <section aria-labelledby="contact">
          <h2 id="contact" className="text-2xl md:text-3xl font-bold text-[#0a2647]">
            13. Contact Us
          </h2>
          <ul className="list-none p-0 space-y-2">
            <li>
              <strong>Email:</strong>{' '}
              <a
                href={`mailto:${postInfo.email}`}
                className="text-[#b71c1c] font-semibold break-all"
              >
                {postInfo.email}
              </a>
            </li>
            <li>
              <strong>Mail:</strong> American Legion Post 64, {postInfo.address.full}
            </li>
          </ul>
        </section>
      </PageBody>
    </>
  )
}
