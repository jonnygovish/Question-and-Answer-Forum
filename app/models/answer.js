import DS from 'ember-data';

export default DS.Model.extend({
  answer: DS.attr(),
  author1: DS.attr(),
  date: DS.attr(),
  votes: DS.attr(),
  question: DS.belongsTo('question', { async: true}),

});
