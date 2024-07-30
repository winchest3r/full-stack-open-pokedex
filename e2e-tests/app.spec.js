const { test, describe, expect, beforeEach } = require('@playwright/test')

describe('Pokedex', () => {
  beforeEach(async ({ page }) => {
    await page.goto('/')
  })
  test('front page can be opened', async ({ page }) => {
    await expect(page.getByText('ivysaur')).toBeVisible()
    await expect(page.getByText(
      'Pokémon and Pokémon character names are trademarks of Nintendo.')).toBeVisible()
  })
  test('can navigate to Ivysaur pokemon', async ({ page }) => {
    await page.getByText('ivysaur').click()
    const stats = await page.getByTestId('stats')
    await expect(stats).toBeVisible()
  })
})