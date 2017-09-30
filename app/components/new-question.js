import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
    questionFormShow() { 
      this.set('addNewQuestion', true);
    },
    saveQuestion(){
      var params = {
        author: this.get('author') ? this.get('author'): '',
        title: this.get('title') ? this.get('title'): '',
        content: this.get('content') ? this.get('content'): '',
        votes: this.get('votes') ? this.get('votes'): null
      };
      this.set('addNewQuestion', false);
      this.sendAction('saveQuestion', params);
    }
  }
});
