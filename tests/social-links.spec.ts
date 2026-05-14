import { test, expect } from '@playwright/test'
import { testConfig } from './test.config'

/**
 * Social Links Tests
 *
 * Verifies the footer social icons. Post 64 phase 1 has a single Facebook link.
 */

test.describe('Footer Social Links', () => {
  test('should not contain Google+ social link', async ({ page }) => {
    await page.goto('/')
    const googlePlusLink = page.locator('footer a[href*="plus.google.com"]')
    await expect(googlePlusLink).toHaveCount(0)
    const googlePlusLabel = page.locator('footer a[aria-label="Google Plus"]')
    await expect(googlePlusLabel).toHaveCount(0)
  })

  test('should display Facebook link', async ({ page }) => {
    await page.goto('/')
    const facebookLink = page.locator(
      `footer a[aria-label="${testConfig.socialLinks.facebook.ariaLabel}"]`
    )
    await expect(facebookLink).toBeVisible()
  })
})
