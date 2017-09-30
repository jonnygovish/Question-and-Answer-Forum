import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnswer: false,
  actions: {
    showAnswerForm() {
      this.set('addNewAnswer', true);
    },
    saveAnswer(){
      var params = {
        answer: this.get('answer') ? this.get('answer'): '',
        author1: this.get('author1') ? this.get('author1'): '',
        date: this.get('date') ? this.get('date'): '',
        question: this.get('question') ? this.get('question'): '',
        votes: this.get('votes') ? this.get('votes'): null
      };
      this.set('addNewAnswer',false);
      this.sendAction('saveAnswer', params)
      this.set('author1', '');
      this.set('answer','');
      this.set('date', '');
    }
  }
});
