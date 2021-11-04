import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class CartController extends Controller {
  @service cart;
  get itemsAmount() {
    return this.cart.productsList.reduce((accumulated, product) => {
      return accumulated + product.count + (product.freeProduct || 0);
    }, 0);
  }

  get freeProduct() {
    return this.cart.productsList.reduce((accumulated, product) => {
      return accumulated + (product.freeProduct || 0);
    }, 0);
  }

  get boughtItems() {
    return this.cart.productsList.reduce((accumulated, product) => {
      return accumulated + product.count;
    }, 0);
  }

  get totalWithoutDiscount() {
    return this.cart.productsList.reduce((accumulated, product) => {
      return (
        parseFloat(accumulated) + parseFloat(product.count * product.price)
      ).toFixed(2);
    }, 0);
  }

  get totalWithDiscount() {
    return this.cart.productsList.reduce((accumulated, product) => {
      let currentPrice = this.currentPrice(product);
      return (
        parseFloat(accumulated) + parseFloat(product.count * currentPrice)
      ).toFixed(2);
    }, 0);
  }

  @action
  totalWithDiscountByProduct(product) {
    let currentPrice = this.currentPrice(product);
    let totalProducto = parseFloat(product.count * currentPrice).toFixed(2);
    return totalProducto;
  }
  @action
  currentPrice(product) {
    let strawberryDiscount = (product) =>
      product.id === 'SR1' && product.count >= 3;
    let coffeDiscount = (product) => product.id === 'CF1' && product.count >= 3;
    let currentPrice = strawberryDiscount(product)
      ? 4.5
      : coffeDiscount(product)
      ? (product.price / 3) * 2
      : product.price;
    return currentPrice;
  }

  fixedCurrentPrice(product) {
    return parseFloat(this.currentPrice(product)).toFixed(2);
  }

  get discountAmount() {
    return (this.totalWithoutDiscount - this.totalWithDiscount).toFixed(2);
  }

  @action
  addProductCount(product, event) {
    const value = parseInt(event.target.value, 10);
    product.count = value >= 0 && value < 100 ? value : 0;
    this.cart.greenTeaOffer(product);
  }
  @action
  removeProduct(product) {
    this.cart.removeProductFromCart(product);
  }
}
