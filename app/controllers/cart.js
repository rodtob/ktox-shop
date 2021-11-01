import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class CartController extends Controller {
  @service cart;
  get itemsAmount() {
    return this.cart.productsList.reduce((accumulated, product) => {
      return parseFloat(accumulated) + parseFloat(product.count);
    }, 0);
  }
  get total() {
    return this.cart.productsList.reduce((accumulated, product) => {
      return (
        parseFloat(accumulated) + parseFloat(product.count) * product.price
      );
    }, 0);
  }
  @action
  addProductCount(product, event) {
    product.count = event.target.value >= 0 ? event.target.value : 0;
    this.cart.greenTeaOffer(product);
  }
}
