import { test } from '@playwright/test'

test('sign in successfuly', async ({ page }) => {
  await page.goto('/sign-in')
})
