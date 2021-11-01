import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

class cartProduct {
  @tracked count = 1;

  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.count;
  }
}

export default class CartService extends Service {
  @tracked productsList = [];

  addProductToCart(product) {
    const productInList = this.productsList.find((e) => e.id === product.id);
    if (productInList) {
      productInList.count += 1;
    } else {
      const productWithCounter = new cartProduct(
        product.id,
        product.name,
        product.price,
        product.count
      );
      this.productsList = [...this.productsList, productWithCounter];
    }
  }
}
