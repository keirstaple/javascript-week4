import DS from 'ember-data';

export default DS.Model.extend({
  fullName: DS.attr(),
  date: DS.attr(),
  text: DS.attr(),
  voteCount: DS.attr({defaultValue: 0}),
  restaurant: DS.belongsTo('restaurant', {async: true})
});
