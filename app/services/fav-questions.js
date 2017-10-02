import Ember from 'ember';

export default Ember.Service.extend({
  favoriteQuestions: [],

  add(favoriteQuestion) {
    this.get('favoriteQuestions').pushObject(favoriteQuestion)
  },
  remove(favoriteQuestion){
    this.get('favoriteQuestions').removeObject(favoriteQuestion)
  }, 
  includes(favoriteQuestion){
    return this.get('favoriteQuestions').includes(favoriteQuestion)
  }
});
