import { expect, test } from '@playwright/test';

test.describe('Login page', () => {
  test('showsssss a successful login message @smoke', async ({ page }) => {
    await page.setContent(`
      <main>
        <h1>Testinium Demo</h1>
        <form>
          <label>Email <input aria-label="Email" value="demo@testinium.com" /></label>
          <label>Password <input aria-label="Password" type="password" value="secret" /></label>
          <button type="button" id="login">Login</button>
          <p id="message" hidden>Welcome back</p>
        </form>
        <script>
          document.querySelector('#login').addEventListener('click', () => {
            document.querySelector('#message').hidden = false;
          });
        </script>
      </main>
    `);

    await page.getByRole('button', { name: 'Login' }).click();

    await expect(page.getByText('Welcome back')).toBeVisible();
  });

  test('keeps password input masked', async ({ page }) => {
    await page.setContent(`
      <label>Password <input aria-label="Password" type="password" value="secret" /></label>
    `);

    await expect(page.getByLabel('Password')).toHaveAttribute('type', 'password');
  });
});
