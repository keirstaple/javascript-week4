import Ember from 'ember';

export default Ember.Component.extend({

  helpful: Ember.computed('review.voteCount', function() {
    return this.get('review.voteCount') >= 10;
  }),
  actions: {
    voteUp(vote) {
      this.sendAction('voteUp', vote);
    },

    voteDown(vote) {
      this.sendAction('voteDown', vote);
    }
  }
});
