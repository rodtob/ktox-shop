import EmberRouter from '@ember/routing/router';
import config from 'ktox-shop/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('product', { path: '/product/:product_id' });
  this.route('fallback', { path: '/*' });
  this.route('cart');
});
