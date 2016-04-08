import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  location: DS.attr(),
  cuisine: DS.attr(),
  reviews: DS.hasMany('review', {async: true}),
  ratings: DS.hasMany('rating', {async: true})
});
