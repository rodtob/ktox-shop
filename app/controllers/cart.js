import Controller from '@ember/controller';

export default class CartController extends Controller {
  get itemsAmount() {
    return this.model.reduce((accumulated, product) => {
      return accumulated + product.amount;
    }, 0);
  }
  get total() {
    return this.model.total;
  }
}
