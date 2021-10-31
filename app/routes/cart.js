import Route from '@ember/routing/route';

export default class CartRoute extends Route {
  model() {
    const products = [
      { price: 0, amount: 0 },
      { price: 10, amount: 2 },
    ];
    return products;
  }
}
