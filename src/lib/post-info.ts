/**
 * Single source of truth for American Legion Post 64 contact and identity info.
 * Used across pages, footer, donate, contact, and metadata.
 */

export const postInfo = {
  name: 'American Legion Post 64',
  longName: 'Ahwatukee American Legion Post 64',
  tagline: 'Veterans Helping Veterans',
  mission: 'Veterans helping Veterans while strengthening the community around us.',
  location: 'Ahwatukee, Phoenix, Arizona',
  address: {
    line1: '5001 E. Cheyenne Dr.',
    line2: 'Phoenix, AZ 85044',
    full: '5001 E. Cheyenne Dr., Phoenix, AZ 85044',
  },
  leadership: [
    {
      name: 'Tamma Notaro',
      title: 'Commander',
      phone: '(715) 712-4966',
      tel: '17157124966',
    },
    {
      name: 'David Green',
      title: 'Veteran Service Officer (VSO)',
      phone: '(928) 830-0085',
      tel: '19288300085',
    },
  ],
  meetings: {
    business: 'Members’ Business Meeting — 3rd Wednesday of each month at 4:30 PM',
    executive: 'Executive Committee — 2nd Wednesday of each month at 4:00 PM',
  },
  email: 'ahwatukeeamericanlegion@gmail.com',
  externalLinks: {
    wpHome: 'https://americanlegionpost64.org',
    nationalLegion: 'https://www.legion.org',
    beTheOne: 'https://www.legion.org/betheone',
    newsroom: 'https://americanlegionpost64.org/newsroom/',
    calendar: 'https://americanlegionpost64.org/what-we-do/',
    membership: 'https://americanlegionpost64.org/membership/',
    contactWp: 'https://americanlegionpost64.org/who-we-are/contact-us/',
    donatePage: 'https://americanlegionpost64.org/support-veterans/donate/',
    plannedGiving: 'https://americanlegionpost64.org/support-veterans/planned-giving/',
  },
} as const
