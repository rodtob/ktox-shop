import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class CartService extends Service {
  @tracked productsList = [];

  addProductToCart(product) {
    this.productsList = [...this.productsList, product];
  }
}
