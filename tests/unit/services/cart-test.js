import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Service | cart', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let service = this.owner.lookup('service:cart');
    assert.ok(service);
  });

  test('list initial as empty', function (assert) {
    let service = this.owner.lookup('service:cart');
    assert.equal(service.productsList.length, 0, 'empty products list');
  });

  test('add green Tea offer', function (assert) {
    let service = this.owner.lookup('service:cart');
    let greenTea = { id: 'GR1' };
    service.addProductToCart(greenTea);
    assert.equal(
      service.productsList[0].freeProduct,
      1,
      'products list has freeTea'
    );
  });

  test('add the same product two times', function (assert) {
    let service = this.owner.lookup('service:cart');
    let greenTea = { id: 'GR1' };
    service.addProductToCart(greenTea);
    assert.equal(service.productsList[0].count, 1, 'count 1');
    service.addProductToCart(greenTea);
    assert.equal(service.productsList[0].count, 2, 'count 2');
  });

  test('add and remove item', function (assert) {
    let service = this.owner.lookup('service:cart');
    let greenTea = { id: 'GR1' };
    service.addProductToCart(greenTea);
    assert.equal(service.productsList[0].count, 1, 'count 1');
    service.removeProductFromCart(greenTea);
    assert.equal(service.productsList.length, 0, 'empty products list');
  });
});
