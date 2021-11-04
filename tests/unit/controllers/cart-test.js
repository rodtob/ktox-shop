import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | cart', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:cart');
    assert.ok(controller);
  });
  test('bought amount items', function (assert) {
    let controller = this.owner.lookup('controller:cart');
    let service = this.owner.lookup('service:cart');
    let greenTea = { id: 'GR1' };
    let strawberry = { id: 'SR1' };
    service.addProductToCart(greenTea);
    service.addProductToCart(strawberry);
    assert.equal(controller.boughtItems, 2, 'two bought items');
    assert.equal(
      controller.itemsAmount,
      3,
      'two bought items, one free product'
    );
  });
});
