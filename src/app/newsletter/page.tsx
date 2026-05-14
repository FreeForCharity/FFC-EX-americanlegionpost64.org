import type { Metadata } from 'next'
import { Mail, Send } from 'lucide-react'
import { PageHeader, PageBody } from '@/components/ui/page-shell'
import { postInfo } from '@/lib/post-info'

export const metadata: Metadata = {
  title: 'Newsletter Sign-Up',
  description:
    'Subscribe to the American Legion Post 64 monthly newsletter for upcoming events, member news, and veteran resources in Ahwatukee.',
  alternates: { canonical: '/newsletter' },
}

// The original WordPress site did not expose a public Mailchimp /
// Constant Contact subscribe URL. Until the Post confirms which provider
// they want to standardize on (Microsoft Forms via M365 nonprofit is our
// recommendation), we publish a mailto-based sign-up so the address still
// goes to a real Post 64 inbox.
const SUBSCRIBE_SUBJECT = 'Newsletter Sign-Up — Post 64'
const SUBSCRIBE_BODY =
  'Hello Post 64,%0D%0A%0D%0APlease add me to the monthly newsletter mailing list.%0D%0A%0D%0AName:%0D%0AEmail:%0D%0APhone (optional):%0D%0ABranch / era of service (optional):%0D%0A%0D%0AThank you.'

const subscribeMailto =
  `mailto:${postInfo.email}` +
  `?subject=${encodeURIComponent(SUBSCRIBE_SUBJECT)}` +
  `&body=${SUBSCRIBE_BODY}`

export default function NewsletterPage() {
  return (
    <>
      <PageHeader
        eyebrow="Stay Connected"
        title="Subscribe to the Newsletter"
        intro="One short email each month with upcoming events, meeting reminders, member news, and resources for Ahwatukee veterans."
      />
      <PageBody>
        <section aria-labelledby="how-to-subscribe">
          <h2 id="how-to-subscribe" className="text-2xl md:text-3xl font-bold text-[#0a2647]">
            How to Subscribe
          </h2>
          <p>
            Click the button below and a pre-filled email will open in your default mail
            application. Fill in your name and any optional details, then press send. We will add
            you to the next mailing.
          </p>
          <p>
            <a
              href={subscribeMailto}
              className="inline-flex items-center px-6 py-3 rounded-full bg-[#b71c1c] hover:bg-[#9b1414] text-white font-bold uppercase tracking-wide transition-colors"
            >
              <Send className="w-4 h-4 mr-2" aria-hidden="true" /> Email Us to Subscribe
            </a>
          </p>
          <p className="text-sm text-gray-600">
            Prefer to type it out manually? Email{' '}
            <a href={`mailto:${postInfo.email}`} className="text-[#b71c1c] font-semibold">
              {postInfo.email}
            </a>{' '}
            with the subject line <em>Newsletter Sign-Up</em>.
          </p>
        </section>

        <section aria-labelledby="what-to-expect">
          <h2 id="what-to-expect" className="text-2xl md:text-3xl font-bold text-[#0a2647]">
            What to Expect
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>One newsletter per month — usually the first week.</li>
            <li>Upcoming Post 64 meetings, social gatherings, and community service days.</li>
            <li>Brief updates on legislation and resources affecting Arizona veterans.</li>
            <li>Member spotlights and event recaps.</li>
            <li>No third-party advertising. Ever.</li>
          </ul>
        </section>

        <section aria-labelledby="unsubscribe">
          <h2 id="unsubscribe" className="text-2xl md:text-3xl font-bold text-[#0a2647]">
            Unsubscribing
          </h2>
          <p>
            We will remove you from the mailing list any time you ask. Reply to any newsletter with
            “unsubscribe,” or email{' '}
            <a href={`mailto:${postInfo.email}`} className="text-[#b71c1c] font-semibold">
              {postInfo.email}
            </a>
            .
          </p>
        </section>

        <p className="text-xs text-gray-500 border-t border-gray-200 pt-4 flex items-start gap-2">
          <Mail className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" aria-hidden="true" />
          <span>
            Post 64 plans to move newsletter sign-ups to a Microsoft Forms or Google Forms
            destination once the mailing list provider is confirmed. Until then, the email-based
            sign-up above is the official method.
          </span>
        </p>
      </PageBody>
    </>
  )
}
