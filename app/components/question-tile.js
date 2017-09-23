import Ember from 'ember';

export default Ember.Component.extend({
  editQuestionForms: false,
  actions: {
    edit(question, params){
      this.sendAction('edit', question, params);
    }
  }
});
