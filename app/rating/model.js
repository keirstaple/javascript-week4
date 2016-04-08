import DS from 'ember-data';

export default DS.Model.extend({
  value: DS.attr(),
  review: DS.belongsTo('review', {async: true}),
  restaurant: DS.belongsTo('restaurant', {async: true})
});
