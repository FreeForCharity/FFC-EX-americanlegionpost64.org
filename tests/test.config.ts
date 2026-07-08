/**
 * Test Configuration for American Legion Post 64
 *
 * This file contains all content-specific values used in E2E tests.
 * Updated for the Post 64 site from the FFC template defaults.
 */

export const testConfig = {
  /**
   * Mission Video Configuration
   * Used in: tests/mission-video.spec.ts (skipped — Post 64 has no mission video in phase 1)
   */
  missionVideo: {
    ariaLabel: 'American Legion Post 64 mission video',
    title: 'American Legion Post 64 mission',
  },

  /**
   * Application Form Configuration
   * Used in: tests/application-form.spec.ts (skipped — no application form in phase 1)
   */
  applicationForm: {
    buttonText: 'Apply',
    modalTitle: 'Application Form',
    loadingText: 'Loading application form...',
    closeButtonAriaLabel: 'Close application form',
  },

  /**
   * Events Section Configuration
   * Used in: tests/events.spec.ts (skipped — events come in phase 3)
   */
  events: {
    sectionId: 'events',
    heading: 'Upcoming Events',
    footerLinkText: 'Events',
    iframeTitle: 'Facebook Events',
    facebookLinkText: 'View all events on Facebook',
    facebookUrl: 'https://www.facebook.com/',
    descriptionText: 'events',
  },

  /**
   * Social Media Links Configuration
   * Used in: tests/social-links.spec.ts
   */
  socialLinks: {
    facebook: {
      url: 'facebook.com',
      ariaLabel: 'Facebook',
    },
    twitter: {
      url: '',
      ariaLabel: '',
    },
    linkedin: {
      url: '',
      ariaLabel: '',
    },
    github: {
      url: '',
      ariaLabel: '',
    },
  },

  /**
   * Copyright Configuration
   * Used in: tests/copyright.spec.ts
   */
  copyright: {
    text: 'American Legion Post 64',
    searchText: 'American Legion Post 64',
    linkUrl: 'https://freeforcharity.org',
    linkText: 'Free For Charity',
  },

  /**
   * Animated Numbers Configuration
   * Used in: tests/animated-numbers.spec.ts (skipped — no stats section in phase 1)
   */
  animatedNumbers: {
    sectionHeading: '',
    statistics: [],
  },

  /**
   * Google Tag Manager Configuration
   * Used in: tests/google-tag-manager.spec.ts
   */
  googleTagManager: {
    id: 'GTM-N6VCKTCS',
  },

  /**
   * Logo Configuration
   * Used in: tests/logo.spec.ts
   */
  logo: {
    headerAlt: 'American Legion Post 64 — Home',
    heroAlt: '',
    navBarAriaLabel: 'American Legion Post 64 home',
  },

  /**
   * Cookie Consent Configuration
   * Used in: tests/cookie-consent.spec.ts
   */
  cookieConsent: {
    bannerHeading: 'We Value Your Privacy',
    modalHeading: 'Cookie Preferences',
    buttons: {
      acceptAll: 'Accept All',
      declineAll: 'Decline All',
      customize: 'Customize',
      savePreferences: 'Save Preferences',
      cancel: 'Cancel',
    },
  },
}
