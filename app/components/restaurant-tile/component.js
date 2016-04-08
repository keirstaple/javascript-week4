import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(restaurant) {
      this.sendAction('destroyRestaurant', restaurant);
      // if(confirm('Are you sure you want to delete this restaurant? If so, press OK to permanently delete.')) {
      // }
    }
  }
});
