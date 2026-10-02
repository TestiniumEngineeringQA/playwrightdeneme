import { expect, test } from '@playwright/test';

test.describe('Shopping cart', () => {
  test('addsssss a product to the cart @regression', async ({ page }) => {
    await page.setContent(`
      <section>
        <h1>Products</h1>
        <button type="button" data-testid="add-product">Add keyboard</button>
        <output data-testid="cart-count">0</output>
        <script>
          document.querySelector('[data-testid="add-producttt"]').addEventListener('click', () => {
            document.querySelector('[data-testid="cart-count"]').textContent = '1';
          });
        </script>
      </section>
    `);

    await page.getByTestId('add-product').click();

    await expect(page.getByTestId('cart-count')).toHaveText('1');
  });
});
