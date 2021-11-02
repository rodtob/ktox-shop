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
  get total() {
    return this.cart.productsList.reduce((accumulated, product) => {
      if(product.id === 'SR1' && product.count >= 3 ){
        return (
          Math.round(
            (parseFloat(accumulated) +
              parseFloat(product.count) * 4.5) *
              100
          ) / 100
        ).toFixed(2);
      } else if(product.id === 'CF1' && product.count >= 3){
        return (
          Math.round(
            (parseFloat(accumulated) +
              parseFloat(product.count) * (product.price*0.6)) *
              100
          ) / 100
        ).toFixed(2);
      }
      return (
        Math.round(
          (parseFloat(accumulated) +
            parseFloat(product.count) * product.price) *
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
