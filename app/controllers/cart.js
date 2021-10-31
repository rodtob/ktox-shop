import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default class CartController extends Controller {
  @service cart;
  get itemsAmount() {
    return this.model.reduce((accumulated, product) => {
      return accumulated + product.amount;
    }, 0);
  }
  get total() {
    return this.model.total;
  }
}
