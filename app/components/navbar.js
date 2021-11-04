import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

export default class NavbarComponent extends Component {
  @service cart;

  get itemCount() {
    return this.cart.productsList.reduce((total, item) => {
      return (total += item.count);
    }, 0);
  }
}
