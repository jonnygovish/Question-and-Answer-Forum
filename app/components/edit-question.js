import Ember from 'ember';

export default Ember.Component.extend({
  editQuestionForm: false,
  actions: {
    editQuestionForm(){
      this.set('editQuestionForm', true);
    },
    edit(question){
      var params = {
        author: this.get('author'),
        title: this.get('title'),
        content: this.get('content'),
      };
      this.set('editQuestionForm', false);
      this.sendAction('edit', question, params);
    }
  }
});
