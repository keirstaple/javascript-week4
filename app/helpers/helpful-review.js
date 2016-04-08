import Ember from 'ember';

export function helpfulReview(params) {
  var review = params[0];

  if(review.get('voteCount') >= 10) {
    return Ember.String.htmlSafe('<span class=helpful>Helpful</span>');
  }
}

export default Ember.Helper.helper(helpfulReview);
