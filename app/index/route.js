import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      restaurant: this.store.findAll('restaurant'),
      review: this.store.findAll('review')
      // rating: this.store.findAll('rating')
    })
  },

  actions: {
    save(params) {
      var newRestaurant = this.store.createRecord('restaurant', params);
      newRestaurant.save();
      this.transitionTo('index');
    },

    saveReview(params) {
      var newReview = this.store.createRecord('review', params);
      newReview.save();
      this.transitionTo('restaurant');
    },

    destroyRestaurant(restaurant) {
      restaurant.destroyRecord();
      this.transitionTo('index');
    }


  }
});
