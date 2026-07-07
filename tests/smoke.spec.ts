import { expect, test } from '@playwright/test'

test('home page is available', async ({ page }) => {
    await page.goto('/')

    await expect(page).toHaveTitle(/Книжная Лавка Студента|Лавка Студента/)
    await expect(page.getByRole('main')).toBeVisible()
})

test('recommendations page is available', async ({ page }) => {
    await page.goto('/recommendations')

    await expect(page.getByRole('main')).toBeVisible()
})

test('book club page is available', async ({ page }) => {
    await page.goto('/book-club')

    await expect(page.getByRole('main')).toBeVisible()
})