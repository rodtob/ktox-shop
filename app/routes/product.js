import Route from '@ember/routing/route';
import { productsDB } from '../data/productsDB';

export default class ProductRoute extends Route {
  model(params) {
    const { product_id } = params;
    const product = productsDB.find(({ id }) => id === product_id);
    console.log(product);
    return product;
  }
}
