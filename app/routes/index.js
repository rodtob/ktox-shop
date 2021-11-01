import Route from '@ember/routing/route';
import { productsDB } from '../data/productsDB';

export default class IndexRoute extends Route {
  model() {
    return productsDB;
  }
}
