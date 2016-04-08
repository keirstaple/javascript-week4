import DS from 'ember-data';

export default DS.Model.extend({
  fullName: DS.attr(),
  date: DS.attr(),
  text: DS.attr(),
  restaurant: DS.belongsTo('restaurant', {async: true}),
  rating: DS.belongsTo('rating', {async: true})
});
