import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class CartController extends Controller {
  @service cart;
  get itemsAmount() {
    return this.cart.productsList.reduce((accumulated, product) => {
      return accumulated + product.count;
    }, 0) + this.cart.freeTea;
  }
  get boughtItems() {
    return this.cart.productsList.reduce((accumulated, product) => {
      return accumulated + product.count;
    }, 0);
  }
  get total() {
    let strawberryDiscount = (product) => product.id === 'SR1' && product.count >= 3;
    let coffeDiscount = (product) => product.id === 'CF1' && product.count >= 3;
    return this.cart.productsList.reduce((accumulated, product) => {
        return (
        Math.round
          (parseFloat(accumulated) +
            parseFloat(product.count) * 
            (strawberryDiscount(product) ? 4.5 :
            (coffeDiscount(product) ?
            product.price*0.66 :
            product.price)) *
            100
        ) / 100
      ).toFixed(2);
    }, 0);
  }
  @action
  addProductCount(product, event) {
    const value = parseInt(event.target.value,10)
    product.count = value >= 0 ? value : 0;
    this.cart.greenTeaOffer(product);
  }
  @action
  removeProduct(product) {
    this.cart.removeProductFromCart(product);
  }
}
