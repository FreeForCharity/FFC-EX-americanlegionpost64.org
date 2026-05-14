import type { Metadata } from 'next'
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
      <PageHeader eyebrow="Legal" title="Privacy Policy" intro="Effective Date: May 18, 2024" />
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

        <section aria-labelledby="third-party">
          <h2 id="third-party" className="text-2xl md:text-3xl font-bold text-[#0a2647]">
            8. Third-Party Links
          </h2>
          <p>
            Our site links to external websites — including The American Legion national site and
            other resources. We are not responsible for the privacy practices of those sites and
            encourage you to review their policies.
          </p>
        </section>

        <section aria-labelledby="children">
          <h2 id="children" className="text-2xl md:text-3xl font-bold text-[#0a2647]">
            9. Children&apos;s Privacy
          </h2>
          <p>
            Our website is not directed to children under 13, and we do not knowingly collect
            personal information from them. If you believe we have collected information from a
            child under 13, please contact us so we can delete it.
          </p>
        </section>

        <section aria-labelledby="changes">
          <h2 id="changes" className="text-2xl md:text-3xl font-bold text-[#0a2647]">
            10. Changes to This Policy
          </h2>
          <p>
            We may update this Privacy Policy from time to time. The effective date at the top of
            this page will reflect the most recent revision.
          </p>
        </section>

        <section aria-labelledby="contact">
          <h2 id="contact" className="text-2xl md:text-3xl font-bold text-[#0a2647]">
            11. Contact Us
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
