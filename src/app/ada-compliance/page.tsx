import type { Metadata } from 'next'
import { PageHeader, PageBody } from '@/components/ui/page-shell'
import { postInfo } from '@/lib/post-info'

export const metadata: Metadata = {
  title: 'ADA Compliance',
  description:
    'American Legion Post 64’s accessibility commitment and how to report barriers on americanlegionpost64.org.',
  alternates: { canonical: '/ada-compliance' },
}

export default function AdaCompliancePage() {
  return (
    <>
      <PageHeader
        eyebrow="Accessibility"
        title="ADA Compliance Statement"
        intro="American Legion Post 64 is committed to ensuring our website is accessible to every veteran, family member, and community member who visits us."
      />
      <PageBody>
        <section aria-labelledby="commitment">
          <h2 id="commitment" className="text-2xl md:text-3xl font-bold text-[#0a2647]">
            Our Commitment
          </h2>
          <p>
            The American Legion Post 64 website, americanlegionpost64.org, is being maintained and
            actively improved to meet the accessibility requirements of the Americans with
            Disabilities Act (ADA) and the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA.
          </p>
          <p>
            Accessibility is a continuous effort. Our developers test pages for color contrast,
            keyboard navigation, screen-reader compatibility, semantic structure, and ARIA
            correctness on every release.
          </p>
        </section>

        <section aria-labelledby="standards">
          <h2 id="standards" className="text-2xl md:text-3xl font-bold text-[#0a2647]">
            Standards We Follow
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>WCAG 2.1 Level AA conformance as our target.</li>
            <li>Semantic HTML5 landmarks (header, nav, main, footer) on every page.</li>
            <li>Alt text on all meaningful images.</li>
            <li>Sufficient color contrast for body text and interactive elements.</li>
            <li>Visible keyboard focus indicators.</li>
            <li>Automated accessibility checks (jest-axe) run as part of our build process.</li>
          </ul>
        </section>

        <section aria-labelledby="report">
          <h2 id="report" className="text-2xl md:text-3xl font-bold text-[#0a2647]">
            Report an Accessibility Barrier
          </h2>
          <p>
            If you encounter a page, feature, or document that is difficult to use because of a
            disability, please let us know. Include the URL of the page and a brief description of
            the issue, and we will work to remediate it as quickly as possible.
          </p>
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
              <strong>Phone:</strong>{' '}
              <a
                href={`tel:${postInfo.leadership[0]?.tel}`}
                className="text-[#b71c1c] font-semibold"
              >
                {postInfo.leadership[0]?.phone}
              </a>{' '}
              (Commander {postInfo.leadership[0]?.name})
            </li>
            <li>
              <strong>Mail:</strong> {postInfo.address.full}
            </li>
          </ul>
        </section>

        <section aria-labelledby="third-party">
          <h2 id="third-party" className="text-2xl md:text-3xl font-bold text-[#0a2647]">
            Third-Party Content
          </h2>
          <p>
            Our site links to and may embed content from third-party services (for example, The
            American Legion national website and our newsroom). We do not control the accessibility
            of third-party sites and cannot guarantee their conformance, but we will gladly help you
            reach the information you need by another means.
          </p>
        </section>
      </PageBody>
    </>
  )
}
