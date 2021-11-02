import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

class cartProduct {
  @tracked count = 1;
  @tracked freeProduct = 0;

  constructor(id, name, price, image, count, freeProduct) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.image = image;
    this.count = count;
    this.freeProduct = freeProduct;
  }
}

export default class CartService extends Service {
  @tracked productsList = [];

  greenTeaOffer(product) {
    if (product.id === 'GR1') {
      console.log(product.count)
      product.freeProduct = product.count;
    }
  }

  addProductToCart(product) {
    const productInList = this.productsList.find((e) => e.id === product.id);
    if (productInList) {
      productInList.count += 1;
      this.greenTeaOffer(productInList);
    } else {
      const productWithCounter = new cartProduct(
        product.id,
        product.name,
        product.price,
        product.img,
        product.count = 1,
        product.freeProduct,
      );
      this.greenTeaOffer(productWithCounter);
      this.productsList = [...this.productsList, productWithCounter];
    }
  }
  removeProductFromCart(product) {
    const newProductList = this.productsList.filter((e) => e.id !== product.id);
    this.productsList = [...newProductList];
  }
}
