import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('restaurant', params.restaurant_id);
  },

  actions: {
    destroyRestaurant(restaurant) {
      var review_deletions = restaurant.get('reviews').map(function(review) {
        return review.destroyRecord();
      });
      Ember.RSVP.all(review_deletions).then(function(){
        return restaurant.destroyRecord();
      });
      this.transitionTo('index');
    },

    saveReview(params) {
      var newReview = this.store.createRecord('review', params);
      var restaurant = params.restaurant;
      restaurant.get('reviews').addObject(newReview);
      newReview.save().then(function(){
        return restaurant.save();
      });
      this.transitionTo('restaurant', params.restaurant);
    }
  }
});
