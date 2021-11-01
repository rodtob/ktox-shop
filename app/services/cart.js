import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

class cartProduct {
  @tracked count = 1;

  constructor(id, name, price, image) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.image = image;
    this.count;
  }
}

export default class CartService extends Service {
  @tracked productsList = [];

  greenTeaOffer(product) {
    if (product.id === 'GR1') {
      let greenTea = this.productsList.find((e) => e.id === product.id);
      greenTea.count += 1;
      greenTea.price = 1.55;
      console.log(this.productsList);
    }
  }

  addProductToCart(product) {
    const productInList = this.productsList.find((e) => e.id === product.id);
    if (productInList) {
      productInList.count += 1;
    } else {
      const productWithCounter = new cartProduct(
        product.id,
        product.name,
        product.price,
        product.img,
        product.count
      );
      this.productsList = [...this.productsList, productWithCounter];
    }
  }
  removeProductFromCart(product) {
    const newProductList = this.productsList.filter((e) => e.id !== product.id);
    this.productsList = [...newProductList];
    console.log(this.productsList);
  }
}
