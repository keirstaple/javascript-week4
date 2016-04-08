import Ember from 'ember';

export default Ember.Component.extend({
  sortBy: ['voteCount:desc'],
  sortedReviews: Ember.computed.sort('restaurant.reviews', 'sortBy'),


  actions: {
    delete(restaurant) {
      if(confirm('Are you sure you want to delete this restaurant? If so, press OK to permanently delete.')) {
        this.sendAction('destroyRestaurant', restaurant);
      }
    },

    saveReview(params) {
      this.sendAction('saveReview', params);
    },

    voteUp(vote) {
      this.sendAction('voteUp', vote);
    },

    voteDown(vote) {
      this.sendAction('voteDown', vote);
    }
  }
});
