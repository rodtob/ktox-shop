import { module, test } from 'qunit';
import { visit, currentURL, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | cart', function (hooks) {
  setupApplicationTest(hooks);

  test('walkaround', async function (assert) {
    await visit('/');
    assert.equal(currentURL(), '/');

    let image = document.querySelector('#GR1');
    await click(image);
    assert.equal(currentURL(), '/product/GR1');

    let addButton = document.querySelector('.btn');
    await click(addButton);
    let cartIcon = document.querySelector('.cart-icon');
    await click(cartIcon);
    assert.equal(currentURL(), '/cart');

    let firstProduct = document.querySelector('.input-product').value;
    assert.equal(firstProduct, '1');

    let removeProduct = document
      .querySelector('section.products-cart')
      .querySelector('.x');
    await click(removeProduct);
    let emptyState = document.querySelector('.empty-state').innerText;
    assert.equal(emptyState, 'No products in cart');
  });
});
