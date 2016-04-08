import Ember from 'ember';

export default Ember.Service.extend({
  restaurants: [],

  add(restaurant) {
    this.get('restaurants').pushObject(restaurant);
  }

});
