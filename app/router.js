import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('restaurant', {path:'/:restaurant_id'});
  this.route('review', {path: '/review/restaurant_id'});
  this.route('favorites');
});

export default Router;
