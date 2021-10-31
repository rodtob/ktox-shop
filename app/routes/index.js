import Route from '@ember/routing/route';
import { productsDB } from '../data/productsDB';

export default class IndexRoute extends Route {
  model() {
    console.log(productsDB);
    return productsDB;
  }
}
