import Ember from 'ember';

export default Ember.Component.extend({
  addNewRestaurant: false,
  actions: {
    restaurantFormShow() {
      this.set('addNewRestaurant', true);
    },

    save() {
      var params = {
        name: this.get('name'),
        location: this.get('location'),
        cuisine: this.get('cuisine'),
        image: this.get('cuisine')
      };
      this.set('addNewRestaurant', false);
      this.sendAction('save', params);
    }
  }
});
