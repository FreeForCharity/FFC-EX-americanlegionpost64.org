import type { Metadata } from 'next'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { PageHeader, PageBody } from '@/components/ui/page-shell'
import { postInfo } from '@/lib/post-info'

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with American Legion Post 64 in Ahwatukee, Phoenix. Reach the Commander, the Veteran Service Officer, or send us an email.',
  alternates: { canonical: '/contact' },
}

// We pre-fill an email rather than embed a WordPress form. Microsoft Forms
// is our preferred destination once the Post confirms a tenant URL — the
// link can be swapped in here without touching the rest of the page.
const CONTACT_SUBJECT = 'Hello from americanlegionpost64.org'
const CONTACT_BODY =
  'Hello Post 64,%0D%0A%0D%0A%5BYour message here%5D%0D%0A%0D%0AName:%0D%0APreferred reply method (email / phone):%0D%0A%0D%0AThank you.'

const contactMailto =
  `mailto:${postInfo.email}` +
  `?subject=${encodeURIComponent(CONTACT_SUBJECT)}` +
  `&body=${CONTACT_BODY}`

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Get in Touch"
        title="Contact Post 64"
        intro="Whether you are a veteran seeking assistance, a community partner, or a neighbor wanting to help, we would love to hear from you."
      />
      <PageBody>
        <section aria-labelledby="email-section">
          <h2 id="email-section" className="text-2xl md:text-3xl font-bold text-[#0a2647]">
            Email Us
          </h2>
          <p>
            Click below to open a pre-filled message in your default mail application. The note goes
            directly to the Post 64 inbox and will be answered by an officer.
          </p>
          <p>
            <a
              href={contactMailto}
              className="inline-flex items-center px-6 py-3 rounded-full bg-[#b71c1c] hover:bg-[#9b1414] text-white font-bold uppercase tracking-wide transition-colors"
            >
              <Send className="w-4 h-4 mr-2" aria-hidden="true" /> Send Us an Email
            </a>
          </p>
          <p className="text-sm text-gray-600 flex items-start gap-2">
            <Mail className="w-4 h-4 text-[#c8a04a] flex-shrink-0 mt-0.5" aria-hidden="true" />
            <span>
              Or write to us directly:{' '}
              <a
                href={`mailto:${postInfo.email}`}
                className="text-[#b71c1c] font-semibold break-all"
              >
                {postInfo.email}
              </a>
            </span>
          </p>
        </section>

        <section aria-labelledby="leadership-section">
          <h2 id="leadership-section" className="text-2xl md:text-3xl font-bold text-[#0a2647]">
            Call Leadership Directly
          </h2>
          <p>
            For time-sensitive questions or veteran-services help, the fastest path is a phone call:
          </p>
          <ul className="list-none p-0 space-y-4">
            {postInfo.leadership.map((p) => (
              <li key={p.name} className="bg-[#f7f3e7] border-l-4 border-[#c8a04a] p-5 rounded-r">
                <p
                  className="uppercase text-[#b71c1c] tracking-[0.2em] text-xs font-bold mb-1"
                  id="aria-font"
                >
                  {p.title}
                </p>
                <p className="text-lg font-bold text-[#0a2647]">{p.name}</p>
                <a
                  href={`tel:${p.tel}`}
                  className="inline-flex items-center gap-2 text-[#0a2647] hover:text-[#b71c1c] font-semibold mt-1"
                >
                  <Phone className="w-4 h-4" aria-hidden="true" /> {p.phone}
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="visit-section">
          <h2 id="visit-section" className="text-2xl md:text-3xl font-bold text-[#0a2647]">
            Visit Us in Ahwatukee
          </h2>
          <p>
            Post 64 meets at the Ahwatukee Recreation Center. Members’ Business Meetings are held
            the 3rd Wednesday of each month at 4:30 PM, and the Executive Committee meets the 2nd
            Wednesday at 4:00 PM. Guests are welcome — please call ahead so we can introduce you.
          </p>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
              postInfo.address.full
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-start gap-3 bg-[#f7f3e7] border-l-4 border-[#c8a04a] p-5 rounded-r hover:bg-[#efe7d2] transition-colors not-italic"
          >
            <MapPin className="w-5 h-5 text-[#b71c1c] flex-shrink-0 mt-0.5" aria-hidden="true" />
            <address className="not-italic font-semibold text-[#0a2647]">
              {postInfo.address.line1}
              <br />
              {postInfo.address.line2}
              <span className="block text-sm font-normal text-[#b71c1c] mt-1">
                Open in Google Maps →
              </span>
            </address>
          </a>
        </section>

        <section aria-labelledby="response-section">
          <h2 id="response-section" className="text-2xl md:text-3xl font-bold text-[#0a2647]">
            What to Expect
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              Email replies typically arrive within two business days. Calls are returned during
              normal hours.
            </li>
            <li>
              Veteran-services requests (claims help, ride coordination, benefits questions) are
              best directed to the Veteran Service Officer above.
            </li>
            <li>For media inquiries or sponsorships, please contact the Commander.</li>
          </ul>
        </section>

        <p className="text-xs text-gray-500 border-t border-gray-200 pt-4">
          Post 64 is preparing to publish a Microsoft Forms intake to streamline contact submissions
          across categories. Once that form is live, this page will link to it directly. Until then,
          email and phone are the official channels.
        </p>
      </PageBody>
    </>
  )
}
