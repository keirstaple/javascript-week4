import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  addNewReview: false,
  actions: {
    reviewFormShow() {
      this.set('addNewReview', true);
    },

    saveReview() {
      var params = {
        fullName: this.get('fullName'),
        date: moment.format('LLL'),
        text: this.get('text'),
        restaurant: this.get('restaurant')
      };
      this.set('addNewReview', false);
      this.sendAction('saveReview', params);
    }
  }
});
