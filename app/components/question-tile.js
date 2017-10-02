import Ember from 'ember';

export default Ember.Component.extend({
  favQuestions: Ember.inject.service(),
  noFav: true,

  actions: {
    favQuestion(question) {
      this.get('favQuestions').add(question);
      this.set('noFav', false);
    },
    removeFavQuestion(question){
      this.get('favQuestions').remove(question);
      this.set('noFav', true);
    }
  }
});
