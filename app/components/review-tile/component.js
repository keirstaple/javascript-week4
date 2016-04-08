import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    voteUp(vote) {
      this.sendAction('voteUp', vote);
    },

    voteDown(vote) {
      this.sendAction('voteDown', vote);
    }
  }
});
