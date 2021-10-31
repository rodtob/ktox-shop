import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class ProductComponent extends Component {
  @service cart;
  @action
  addProduct() {
    const { productInfo } = this.args;
    this.cart.addProductToCart(productInfo);
  }
}
